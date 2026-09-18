// Spline-swept tube geometry using rotation-minimizing (parallel-transport) frames.
//
// This mirrors the actual technique rice-atlas uses for its organ geometry (a hand-written
// Catmull-Rom spline + parallel-transport frame builder in generate_fspm_rice.py) -- an
// independent, clean-room implementation of the same well-established computer-graphics
// technique, not a copy of its code.
//
// THREE.TubeGeometry exists but uses Frenet frames by default, which twist visibly on
// tight or near-planar curves (the curvature-driven normal flips direction at inflection
// points). The double-reflection method implemented here (Wang, Jüttler, Zheng & Liu,
// "Computation of Rotation Minimizing Frames," ACM Trans. Graphics 27(1), 2008) instead
// propagates the frame along the curve without that instability.
import * as THREE from "three";

export interface Frame {
  point: THREE.Vector3;
  tangent: THREE.Vector3;
  normal: THREE.Vector3;
  binormal: THREE.Vector3;
}

function computeRotationMinimizingFrames(points: THREE.Vector3[]): Frame[] {
  const n = points.length;
  const tangents: THREE.Vector3[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const prev = points[Math.max(i - 1, 0)];
    const next = points[Math.min(i + 1, n - 1)];
    tangents[i] = next.clone().sub(prev).normalize();
  }

  // Arbitrary but valid starting normal: any unit vector not parallel to tangents[0].
  const t0 = tangents[0];
  const arbitrary = Math.abs(t0.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  let normal0 = arbitrary.clone().sub(t0.clone().multiplyScalar(arbitrary.dot(t0))).normalize();
  let binormal0 = t0.clone().cross(normal0).normalize();

  const frames: Frame[] = [{ point: points[0], tangent: t0, normal: normal0, binormal: binormal0 }];

  for (let i = 1; i < n; i++) {
    const prevFrame = frames[i - 1];
    const v1 = points[i].clone().sub(points[i - 1]);
    const c1 = v1.dot(v1);
    if (c1 < 1e-10) {
      frames.push({ ...prevFrame, point: points[i], tangent: tangents[i] });
      continue;
    }

    const rL = prevFrame.normal.clone().sub(v1.clone().multiplyScalar((2 / c1) * v1.dot(prevFrame.normal)));
    const tL = prevFrame.tangent.clone().sub(v1.clone().multiplyScalar((2 / c1) * v1.dot(prevFrame.tangent)));

    const v2 = tangents[i].clone().sub(tL);
    const c2 = v2.dot(v2);
    const normal = c2 < 1e-10 ? rL : rL.clone().sub(v2.clone().multiplyScalar((2 / c2) * v2.dot(rL)));
    normal.normalize();
    const binormal = tangents[i].clone().cross(normal).normalize();

    frames.push({ point: points[i], tangent: tangents[i], normal, binormal });
  }

  return frames;
}

export interface TubeOptions {
  radialSegments?: number; // vertices around the circumference
  closed?: boolean; // stitch first/last ring together (rare for organs)
  caps?: boolean; // add a triangle-fan cap at each open end
}

/**
 * Build a tapering tube mesh along `curvePoints`, with a per-point radius from
 * `radiusAt(t)` where t in [0,1] runs along the curve's arc length parameter.
 */
export function buildTube(
  curve: THREE.CatmullRomCurve3,
  radiusAt: (t: number) => number,
  divisions: number,
  options: TubeOptions = {},
): THREE.BufferGeometry {
  const radialSegments = options.radialSegments ?? 8;
  const points = curve.getPoints(divisions);
  const frames = computeRotationMinimizingFrames(points);

  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const ringVertex = new THREE.Vector3();
  const ringNormal = new THREE.Vector3();

  for (let i = 0; i < frames.length; i++) {
    const t = i / (frames.length - 1);
    const radius = Math.max(radiusAt(t), 1e-5);
    const { point, normal, binormal } = frames[i];

    for (let j = 0; j <= radialSegments; j++) {
      const angle = (j / radialSegments) * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      ringNormal.set(0, 0, 0).addScaledVector(normal, cos).addScaledVector(binormal, sin).normalize();
      ringVertex.copy(point).addScaledVector(ringNormal, radius);

      positions.push(ringVertex.x, ringVertex.y, ringVertex.z);
      normals.push(ringNormal.x, ringNormal.y, ringNormal.z);
      uvs.push(j / radialSegments, t);
    }
  }

  const ringSize = radialSegments + 1;
  for (let i = 0; i < frames.length - 1; i++) {
    for (let j = 0; j < radialSegments; j++) {
      const a = i * ringSize + j;
      const b = i * ringSize + j + 1;
      const c = (i + 1) * ringSize + j;
      const d = (i + 1) * ringSize + j + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  if (options.caps ?? true) {
    const startCenterIdx = positions.length / 3;
    positions.push(points[0].x, points[0].y, points[0].z);
    normals.push(-frames[0].tangent.x, -frames[0].tangent.y, -frames[0].tangent.z);
    uvs.push(0.5, 0.5);
    for (let j = 0; j < radialSegments; j++) {
      indices.push(startCenterIdx, j, j + 1);
    }

    const endRingStart = (frames.length - 1) * ringSize;
    const endCenterIdx = positions.length / 3;
    const last = points[points.length - 1];
    positions.push(last.x, last.y, last.z);
    const lastTangent = frames[frames.length - 1].tangent;
    normals.push(lastTangent.x, lastTangent.y, lastTangent.z);
    uvs.push(0.5, 0.5);
    for (let j = 0; j < radialSegments; j++) {
      indices.push(endCenterIdx, endRingStart + j + 1, endRingStart + j);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  return geometry;
}

/** Convenience: linear taper between two radii. */
export function linearTaper(rStart: number, rEnd: number) {
  return (t: number) => rStart + (rEnd - rStart) * t;
}

/** Convenience: taper that bulges in the middle (e.g. a fusiform root or petiole base). */
export function fusiformTaper(rEnds: number, rMid: number) {
  return (t: number) => {
    const bulge = Math.sin(Math.PI * t); // 0 at ends, 1 at t=0.5
    return rEnds + (rMid - rEnds) * bulge;
  };
}

// Curved parametric leaf-blade surface, replacing a flattened-sphere approximation.
//
// A real leaf blade is a curved sheet: it tapers in width along its length (an obovate
// blade is narrow near the petiole and widest past the middle, per organs.ts's own
// geometryNote), and it is very rarely perfectly flat -- most rosette leaves have a
// gentle dome or fold across their width (a real, commonly-observed trait, not a
// measured value for any specific organ here; see organs.ts for what is and isn't
// cited). This builds that as an explicit parametric grid rather than distorting a
// sphere, and lets Three.js compute correct vertex normals for it directly.
import * as THREE from "three";

export interface LeafBladeOptions {
  length: number;
  maxWidth: number;
  /** 0 = narrowest near the base (obovate), 1 = narrowest near the tip (obcordate-ish). */
  widthPeakT?: number;
  /** How much the blade domes upward across its width, as a fraction of maxWidth. */
  foldDepth?: number;
  /** Gentle downward droop along the length, as a fraction of length. */
  droop?: number;
  lengthSegments?: number;
  widthSegments?: number;
}

export function buildLeafBlade(options: LeafBladeOptions): THREE.BufferGeometry {
  const {
    length,
    maxWidth,
    widthPeakT = 0.55,
    foldDepth = 0.06,
    droop = 0.08,
    lengthSegments = 12,
    widthSegments = 6,
  } = options;

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  // Width profile: rises from 0 at the base to maxWidth at widthPeakT, back to ~0 at the tip.
  const widthAt = (u: number) => {
    const w = u < widthPeakT ? u / widthPeakT : (1 - u) / (1 - widthPeakT);
    return maxWidth * Math.max(w, 0) ** 0.7;
  };

  for (let i = 0; i <= lengthSegments; i++) {
    const u = i / lengthSegments;
    const w = widthAt(u);
    const dropHere = droop * length * u * u; // droop increases toward the tip

    for (let j = 0; j <= widthSegments; j++) {
      const v = (j / widthSegments) * 2 - 1; // -1..1 across the width
      const x = v * w;
      const fold = foldDepth * maxWidth * (1 - v * v); // domes up at the midrib, flat at edges
      const y = fold - dropHere;
      const z = u * length;

      positions.push(x, y, z);
      uvs.push(j / widthSegments, u);
    }
  }

  const rowSize = widthSegments + 1;
  for (let i = 0; i < lengthSegments; i++) {
    for (let j = 0; j < widthSegments; j++) {
      const a = i * rowSize + j;
      const b = i * rowSize + j + 1;
      const c = (i + 1) * rowSize + j;
      const d = (i + 1) * rowSize + j + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

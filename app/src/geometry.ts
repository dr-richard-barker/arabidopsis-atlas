// Procedural Arabidopsis structural model. Every shape here is a simplified
// geometric approximation, not a scan or simulation output -- see organs.ts
// geometryNote for what each one is and is not based on. This mirrors the
// *idea* of rice-atlas's organ-selectable procedural model without reusing
// any of its (ambiguously-licensed) code.
import * as THREE from "three";

const GOLDEN_ANGLE = 137.5 * (Math.PI / 180);

function tagged(mesh: THREE.Object3D, organId: string): THREE.Object3D {
  mesh.userData.organId = organId;
  mesh.traverse((c: THREE.Object3D) => (c.userData.organId = organId));
  return mesh;
}

const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x4a7c3f, roughness: 0.85, side: THREE.DoubleSide });
const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x6b8c4a, roughness: 0.8 });
const rootMaterial = new THREE.MeshStandardMaterial({ color: 0xd9c48a, roughness: 0.9 });
const petalMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.6 });
const siliqueMaterial = new THREE.MeshStandardMaterial({ color: 0x8a9a4a, roughness: 0.75 });

function buildRootSystem(): THREE.Object3D {
  const group = new THREE.Group();
  const primary = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.015, 3.2, 8), rootMaterial);
  primary.position.y = -1.6;
  group.add(primary);

  // Lateral roots: a handful of branches at decreasing depth, alternating sides --
  // illustrative branching, not a measured architecture (see Shahan et al. 2022 citation).
  const nLaterals = 10;
  for (let i = 0; i < nLaterals; i++) {
    const depth = 0.4 + (i / nLaterals) * 2.6;
    const len = 0.5 + Math.random() * 0.4;
    const lateral = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.004, len, 6), rootMaterial);
    const side = i % 2 === 0 ? 1 : -1;
    const angle = 0.9 + Math.random() * 0.3;
    lateral.position.set(side * Math.cos(angle) * len * 0.5, -depth, side * Math.sin(angle) * len * 0.3);
    lateral.rotation.z = side * angle;
    group.add(lateral);
  }
  return tagged(group, "root");
}

function buildRosette(): THREE.Object3D {
  const group = new THREE.Group();
  const nLeaves = 12;
  for (let i = 0; i < nLeaves; i++) {
    const angle = i * GOLDEN_ANGLE;
    const scale = 0.35 + 0.5 * (i / nLeaves); // outer (older) leaves larger
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), leafMaterial);
    leaf.scale.set(0.35 * scale, 0.06, 0.55 * scale);
    const radius = 0.15 + 0.35 * scale;
    leaf.position.set(Math.cos(angle) * radius, 0.02 * i, Math.sin(angle) * radius);
    leaf.rotation.y = -angle;
    leaf.rotation.z = 0.15;
    group.add(leaf);
  }
  return tagged(group, "rosette_leaf");
}

function buildInflorescenceAxis(height: number): THREE.Object3D {
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, height, 8), stemMaterial);
  stem.position.y = height / 2;
  return tagged(stem, "inflorescence_axis");
}

function buildFlower(): THREE.Object3D {
  const group = new THREE.Group();
  const nPetals = 4; // Brassicaceae: 4 petals in a cross
  for (let i = 0; i < nPetals; i++) {
    const petal = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), petalMaterial);
    petal.scale.set(1, 0.15, 2.2);
    const angle = (i / nPetals) * Math.PI * 2;
    petal.position.set(Math.cos(angle) * 0.09, 0, Math.sin(angle) * 0.09);
    petal.rotation.y = angle;
    group.add(petal);
  }
  const carpel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.15, 6), stemMaterial);
  carpel.position.y = 0.02;
  group.add(carpel);
  return tagged(group, "flower");
}

function buildSilique(): THREE.Object3D {
  const pod = new THREE.Mesh(new THREE.CapsuleGeometry(0.025, 0.55, 4, 8), siliqueMaterial);
  return tagged(pod, "silique");
}

// A raceme: newest flowers at the top of the axis, maturing siliques below --
// the real developmental sequence of an Arabidopsis inflorescence.
function buildRacemeAttachments(height: number): THREE.Object3D {
  const group = new THREE.Group();
  const nPositions = 9;
  for (let i = 0; i < nPositions; i++) {
    const t = i / (nPositions - 1); // 0 = base (old), 1 = tip (new)
    const y = height * (0.35 + 0.6 * t);
    const angle = i * GOLDEN_ANGLE;
    const radius = 0.12;
    const pos = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);

    if (t > 0.75) {
      const flower = buildFlower();
      flower.position.copy(pos);
      group.add(flower);
    } else {
      const silique = buildSilique();
      silique.position.copy(pos);
      silique.rotation.z = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      silique.rotation.y = angle;
      group.add(silique);
    }
  }
  return group;
}

export function buildPlant(): THREE.Group {
  const plant = new THREE.Group();
  const stemHeight = 2.4;
  plant.add(buildRootSystem());
  plant.add(buildRosette());
  plant.add(buildInflorescenceAxis(stemHeight));
  plant.add(buildRacemeAttachments(stemHeight));
  return plant;
}

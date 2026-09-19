// Procedural Arabidopsis structural model. Every shape here is a simplified geometric
// approximation, not a scan or simulation output -- see organs.ts geometryNote for what
// each one is and is not based on. This mirrors the *idea* of rice-atlas's organ-
// selectable procedural model and its actual spline-tube construction technique (learned
// by reading its real source), without reusing any of its (ambiguously-licensed) code.
//
// Shape now varies by ecotype: see ecotypes.ts for the real, cited trait values that feed
// the parameters below (rosette leaf count/compactness, pedicel length, silique
// bluntness, leaf thickness).
import * as THREE from "three";
import { buildTube, linearTaper, fusiformTaper } from "./organGeometry/tube";
import { buildLeafBlade } from "./organGeometry/leafBlade";
import { DEFAULT_ECOTYPE, type EcotypeParams } from "./ecotypes";
import { growthStateAtDay, GROWTH_STAGES } from "./growthStages";

const GOLDEN_ANGLE = 137.5 * (Math.PI / 180);

function tagged(mesh: THREE.Object3D, organId: string): THREE.Object3D {
  mesh.userData.organId = organId;
  mesh.traverse((c: THREE.Object3D) => (c.userData.organId = organId));
  return mesh;
}

// DoubleSide on every material here, not just the leaf blades: tube.ts's raycasting
// correctness against its outer surface shouldn't depend on getting winding-order
// handedness exactly right, and thin organic geometry can plausibly be viewed from
// either side depending on camera angle anyway.
const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x4a7c3f, roughness: 0.85, side: THREE.DoubleSide });
const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x6b8c4a, roughness: 0.8, side: THREE.DoubleSide });
const rootMaterial = new THREE.MeshStandardMaterial({ color: 0xd9c48a, roughness: 0.9, side: THREE.DoubleSide });
const petalMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.6, side: THREE.DoubleSide });
const siliqueMaterial = new THREE.MeshStandardMaterial({ color: 0x8a9a4a, roughness: 0.75, side: THREE.DoubleSide });

function jitteredCurve(points: THREE.Vector3[]): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
}

// growthFraction (default 1 = the ordinary, fully-grown ecotype viewer) scales root depth
// and how many lateral roots exist yet. No Boyes-et-al.-equivalent root-growth timing
// source was found for Arabidopsis (that paper covers shoot phenotypes only), so this uses
// the same rosette-growth fraction as a disclosed proxy -- root and shoot growth are
// broadly correlated in seedlings, but this specific curve is illustrative, not measured;
// see data/growth-stages/README.md. The alternative (a full 3.2-unit mature root system
// under a 3-day-old seedling) is a real, worse, and more clearly wrong error.
function buildRootSystem(params: EcotypeParams, growthFraction = 1): THREE.Object3D {
  const group = new THREE.Group();

  const primaryPoints = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.05, -0.9, 0.03),
    new THREE.Vector3(-0.03, -1.9, -0.02),
    new THREE.Vector3(0.02, -2.9, 0.01),
    new THREE.Vector3(0, -3.2, 0),
  ];
  const primaryGeom = buildTube(jitteredCurve(primaryPoints), linearTaper(0.05, 0.008), 24, { radialSegments: 8 });
  group.add(new THREE.Mesh(primaryGeom, rootMaterial));
  // Depth grows with the plant rather than the full mature root appearing on day one;
  // radius is left alone (only the group's vertical extent is scaled).
  group.scale.set(1, Math.max(0.06, growthFraction), 1);

  // Lateral roots: illustrative branching (see Shahan et al. 2022 citation in organs.ts),
  // count/spread scaled by the ecotype's rosette-compactness parameter as a proxy for
  // overall plant vigor -- not itself a cited root trait.
  const nLaterals = Math.round(10 * Math.max(0, Math.min(1, growthFraction)));
  for (let i = 0; i < nLaterals; i++) {
    const depth = 0.4 + (i / nLaterals) * 2.6;
    const len = (0.5 + Math.random() * 0.4) * (0.85 + 0.3 * params.rosetteCompactness);
    const side = i % 2 === 0 ? 1 : -1;
    const angle = 0.9 + Math.random() * 0.3;
    const base = new THREE.Vector3(0, -depth, 0);
    const tip = base.clone().add(
      new THREE.Vector3(side * Math.cos(angle) * len, -len * 0.25, side * Math.sin(angle) * len * 0.6),
    );
    const mid = base.clone().lerp(tip, 0.5).add(new THREE.Vector3(0, -0.05, 0));
    const lateralGeom = buildTube(jitteredCurve([base, mid, tip]), linearTaper(0.012, 0.003), 6, { radialSegments: 6 });
    group.add(new THREE.Mesh(lateralGeom, rootMaterial));
  }
  return tagged(group, "root");
}

function buildRosette(params: EcotypeParams, emergenceScale?: (leafIndex: number, total: number) => number): THREE.Object3D {
  const group = new THREE.Group();
  const nLeaves = params.rosetteLeafCount;
  for (let i = 0; i < nLeaves; i++) {
    // For the growth animation only: a leaf not yet "born" at this frame's real Boyes-
    // derived day is skipped entirely rather than added at zero scale -- cleaner than a
    // degenerate zero-size mesh, and emergenceScale is undefined (full-size, as before)
    // for the ordinary ecotype viewer.
    const scale = emergenceScale ? emergenceScale(i, nLeaves) : 1;
    if (scale <= 0) continue;
    const angle = i * GOLDEN_ANGLE;
    const ageScale = (0.35 + 0.5 * (i / nLeaves)) * scale; // outer (older) leaves larger; scaled in while emerging
    const bladeLength = (0.55 * ageScale) * params.rosetteRadiusScale;
    const bladeWidth = (0.35 * ageScale) * params.rosetteRadiusScale;

    // Compactness (real, from Camargo et al. 2014 / Morón-García et al. 2022 rosette-shape
    // descriptors, see ecotypes.ts) tilts leaves more upright and shortens the petiole so
    // leaves sit closer to the rosette center; less compact ecotypes splay flatter and wider.
    // This is also the petiole's actual length, so the tube it builds is guaranteed to
    // span exactly from the stem center (its own local origin) to the blade base --
    // no separate offset that could leave a gap between the two.
    const petioleLen = (0.15 + 0.35 * ageScale) * params.rosetteRadiusScale * (1 - 0.3 * params.rosetteCompactness);
    const tilt = 0.15 + 0.9 * params.rosetteCompactness;

    const blade = new THREE.Mesh(
      buildLeafBlade({
        length: bladeLength,
        maxWidth: bladeWidth,
        foldDepth: 0.05 * params.leafThicknessScale,
      }),
      leafMaterial,
    );
    blade.name = "LeafBlade_rosette";
    blade.position.z = petioleLen;

    // The petiole tube itself spans (0,0,0) -- the plant's central axis, where the root
    // and inflorescence axis also originate -- out to the blade base, so it is always
    // physically connected to the stem by construction rather than by matching offsets.
    const petiole = new THREE.Mesh(
      buildTube(
        jitteredCurve([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0.01, petioleLen)]),
        linearTaper(0.012, 0.02),
        4,
        { radialSegments: 6 },
      ),
      stemMaterial,
    );

    const leafGroup = new THREE.Group();
    leafGroup.add(petiole, blade);
    // Only rotate (fan out around the stem + tilt up/down) -- do NOT translate the group
    // away from (0,0,0), or the petiole's own start point leaves the stem it's meant to
    // be attached to. A small y-lift only staggers leaf whorls visually along the stem
    // that's already there (the root/inflorescence axis), not a second, disconnected stem.
    leafGroup.position.set(0, 0.02 * i, 0);
    leafGroup.rotation.y = -angle;
    leafGroup.rotation.x = -tilt;

    group.add(leafGroup);
  }
  return tagged(group, "rosette_leaf");
}

// Shared with buildRacemeAttachments so a flower/silique pedicel always starts exactly on
// the axis's actual surface at its attachment height, not at a fixed guessed offset that
// drifts inside or outside the tapering stem depending on height.
const axisRadiusAt = linearTaper(0.05, 0.02);

function buildInflorescenceAxis(height: number): THREE.Object3D {
  const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.02, height * 0.4, 0.01),
    new THREE.Vector3(0.015, height * 0.75, -0.01),
    new THREE.Vector3(0, height, 0),
  ];
  const geom = buildTube(jitteredCurve(points), axisRadiusAt, 20, { radialSegments: 8 });
  return tagged(new THREE.Mesh(geom, stemMaterial), "inflorescence_axis");
}

function buildFlower(pedicelLength: number): THREE.Object3D {
  const group = new THREE.Group();

  const pedicel = new THREE.Mesh(
    buildTube(
      jitteredCurve([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, pedicelLength)]),
      linearTaper(0.012, 0.008),
      4,
      { radialSegments: 6 },
    ),
    stemMaterial,
  );
  group.add(pedicel);

  const flowerHead = new THREE.Group();
  flowerHead.position.z = pedicelLength;
  const nPetals = 4; // Brassicaceae: 4 petals in a cross
  for (let i = 0; i < nPetals; i++) {
    const petal = new THREE.Mesh(
      buildLeafBlade({ length: 0.09, maxWidth: 0.045, widthPeakT: 0.7, foldDepth: 0.15, lengthSegments: 4, widthSegments: 4 }),
      petalMaterial,
    );
    petal.name = "LeafBlade_petal";
    const angle = (i / nPetals) * Math.PI * 2;
    petal.position.set(Math.cos(angle) * 0.01, Math.sin(angle) * 0.01, 0);
    petal.rotation.z = angle;
    petal.rotation.x = -Math.PI / 2 + 0.3;
    flowerHead.add(petal);
  }
  const carpel = new THREE.Mesh(
    buildTube(jitteredCurve([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0.15)]), linearTaper(0.02, 0.015), 4, {
      radialSegments: 6,
    }),
    stemMaterial,
  );
  flowerHead.add(carpel);
  group.add(flowerHead);

  return tagged(group, "flower");
}

function buildSilique(pedicelLength: number, bluntness: number): THREE.Object3D {
  const group = new THREE.Group();
  const pedicel = new THREE.Mesh(
    buildTube(
      jitteredCurve([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, pedicelLength)]),
      linearTaper(0.014, 0.01),
      4,
      { radialSegments: 6 },
    ),
    stemMaterial,
  );
  group.add(pedicel);

  // Bluntness (real, ERECTA-associated: Torii et al. 1996 -- Ler's natural `er` mutation
  // gives "blunt fruits"; see ecotypes.ts) interpolates the pod's taper from a tapered
  // wild-type tip toward a blunt, near-cylindrical one.
  const podLen = 0.55;
  const tipRadius = 0.025 * (0.3 + 0.7 * bluntness);
  const podGeom = buildTube(
    jitteredCurve([new THREE.Vector3(0, 0, pedicelLength), new THREE.Vector3(0, 0, pedicelLength + podLen)]),
    fusiformTaper(tipRadius, 0.028),
    8,
    { radialSegments: 8 },
  );
  group.add(new THREE.Mesh(podGeom, siliqueMaterial));
  return tagged(group, "silique");
}

// A raceme: newest flowers at the top of the axis, maturing siliques below -- the real
// developmental sequence of an Arabidopsis inflorescence. `flowerFraction` (real, from
// growthStages.ts) moves the flower/silique boundary and how many positions exist at all;
// undefined means the ordinary ecotype viewer's fixed, fully-grown raceme (unchanged).
function buildRacemeAttachments(height: number, params: EcotypeParams, flowerFraction?: number): THREE.Object3D {
  const group = new THREE.Group();
  const nPositions = 9;
  // flowerFraction is real (growthStages.ts): 0 until the first flower has actually
  // opened (Boyes stage 6.00), so before that this must render NOTHING -- not a silique,
  // which biologically cannot exist before any flower has opened and matured. Once
  // flowerFraction > 0, the raceme has grown exactly that far up the axis, and the
  // youngest (tip-most) 30% of that grown extent are still-open flowers; the rest have
  // matured into siliques -- that 30% split is a disclosed technique choice (no specific
  // real flower-to-silique maturation duration was found), not a measured value.
  if (flowerFraction !== undefined && flowerFraction <= 0) return group;
  const grownUpTo = flowerFraction === undefined ? 1 : flowerFraction;
  // Deliberately NOT clamped to >= 0: when flowering has JUST started (grownUpTo small),
  // flowerZoneStart goes negative, which correctly means "everything grown so far is
  // still an open flower, nothing has had time to mature into a silique yet" -- clamping
  // this to 0 was a real bug that misclassified the very first attachment as a silique
  // the moment it appeared, before any flower had existed at all.
  const flowerZoneStart = flowerFraction === undefined ? 0.75 : grownUpTo - 0.3;

  for (let i = 0; i < nPositions; i++) {
    const t = i / (nPositions - 1); // 0 = base (old), 1 = tip (new)
    if (t > grownUpTo) continue;
    const y = height * (0.35 + 0.6 * t);
    const angle = i * GOLDEN_ANGLE;
    // Start exactly on the axis's real surface at this height (see axisRadiusAt), not a
    // fixed guessed offset -- otherwise the pedicel floats outside, or is buried inside,
    // the stem depending on how far up the tapering axis this attachment sits.
    const radius = axisRadiusAt(y / height);
    const pos = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    const pedicelLength = 0.18 * params.pedicelLengthScale;

    let attachment: THREE.Object3D;
    if (t > flowerZoneStart) {
      attachment = buildFlower(pedicelLength);
    } else {
      attachment = buildSilique(pedicelLength, params.siliqueBluntness);
      attachment.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
    }
    attachment.position.copy(pos);
    attachment.rotation.y += angle;
    group.add(attachment);
  }
  return group;
}

export function buildPlant(params: EcotypeParams = DEFAULT_ECOTYPE): THREE.Group {
  const plant = new THREE.Group();
  const stemHeight = 2.4;
  plant.add(buildRootSystem(params));
  plant.add(buildRosette(params));
  plant.add(buildInflorescenceAxis(stemHeight));
  plant.add(buildRacemeAttachments(stemHeight, params));
  return plant;
}

// Growth-animation entry point: a single real day (post-stratification, per Boyes et al.
// 2001 -- see growthStages.ts) produces one fully self-consistent plant snapshot. This is
// Col-0-specific by construction (DEFAULT_ECOTYPE is Col-0, and the real timing data itself
// only exists for Col-0), independent of the ordinary ecotype-picker viewer above.
// Called once per animation frame with a slightly advanced `day`; regenerating from
// scratch each time (rather than trying to morph one mesh's topology) is what lets leaf 8
// simply not exist yet without any special-case removal logic. A short, disclosed-as-not-
// measured emergence window (EMERGENCE_DAYS) scales each newly-present organ in smoothly
// instead of having it pop in at full size the frame it's due.
const EMERGENCE_DAYS = 1.5;

export function buildGrowthSnapshot(day: number): THREE.Group {
  const state = growthStateAtDay(day);
  const params = DEFAULT_ECOTYPE;
  const stemHeight = 2.4;

  const plant = new THREE.Group();
  plant.add(buildRootSystem(params, Math.max(0.06, state.rosetteFraction)));

  const rosetteParams: EcotypeParams = { ...params, rosetteLeafCount: state.leafCount, rosetteRadiusScale: params.rosetteRadiusScale * (0.3 + 0.7 * state.rosetteFraction) };
  plant.add(
    buildRosette(rosetteParams, (leafIndex) => {
      const leafStage = GROWTH_STAGES.find((s) => s.table === "soil" && s.stage === `1.${String(leafIndex + 1).padStart(2, "0")}`);
      const birthDay = leafStage?.day ?? 0;
      // 0 at birthDay (just past the real >1mm threshold), ramping to 1 by birthDay+EMERGENCE_DAYS.
      return Math.max(0, Math.min(1, (day - birthDay) / EMERGENCE_DAYS));
    }),
  );

  if (state.boltingFraction > 0) {
    const axis = buildInflorescenceAxis(stemHeight * Math.max(0.08, state.boltingFraction));
    plant.add(axis);
    plant.add(buildRacemeAttachments(stemHeight * Math.max(0.08, state.boltingFraction), params, state.flowerFraction));
  }

  return plant;
}

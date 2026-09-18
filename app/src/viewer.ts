// 3D viewer scaffold (scene/camera/lights/orbit controls/resize/render-loop)
// adapted from the pattern in AstroMycology's src/lib/threed.ts createViewer,
// extended here with organ raycasting/highlighting for an interactive atlas
// instead of a single loaded scan.
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildPlant } from "./geometry";

export interface OrganViewer {
  dispose(): void;
}

function findOrganId(obj: THREE.Object3D | null): string | null {
  let cur: THREE.Object3D | null = obj;
  while (cur) {
    if (cur.userData.organId) return cur.userData.organId as string;
    cur = cur.parent;
  }
  return null;
}

export function createOrganViewer(
  container: HTMLElement,
  onSelectOrgan: (organId: string | null) => void,
): OrganViewer {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f1410);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
  camera.position.set(4, 3, 4);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x30332a, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 6, 4);
  scene.add(key);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(3, 32),
    new THREE.MeshStandardMaterial({ color: 0x2b2417, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  scene.add(ground);

  const plant = buildPlant();
  scene.add(plant);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0.8, 0);
  controls.update();

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let highlighted: THREE.Object3D[] = [];
  const originalEmissive = new Map<THREE.Mesh, THREE.Color>();

  function clearHighlight() {
    for (const obj of highlighted) {
      const mesh = obj as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      const orig = originalEmissive.get(mesh);
      if (mat && orig) mat.emissive = orig;
    }
    highlighted = [];
  }

  function highlightOrgan(organId: string) {
    clearHighlight();
    plant.traverse((obj: THREE.Object3D) => {
      if (obj.userData.organId === organId && (obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && mat.emissive) {
          if (!originalEmissive.has(mesh)) originalEmissive.set(mesh, mat.emissive.clone());
          mat.emissive = new THREE.Color(0x2f6d4f);
          highlighted.push(mesh);
        }
      }
    });
  }

  function onClick(event: MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(plant, true);
    const organId = hits.length > 0 ? findOrganId(hits[0].object) : null;
    if (organId) highlightOrgan(organId);
    else clearHighlight();
    onSelectOrgan(organId);
  }
  renderer.domElement.addEventListener("click", onClick);

  let raf = 0;
  const tick = () => {
    raf = requestAnimationFrame(tick);
    controls.update();
    renderer.render(scene, camera);
  };
  tick();

  const resize = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  return {
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("click", onClick);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

// Headless export of the real viewer geometry to glTF, for Blender to refine offline.
// Run with: npx tsx blender/export_mesh.ts [ecotypeId]
//
// This imports the exact same buildPlant() used by the live viewer (app/src/geometry.ts)
// -- the showcase render comes from the real generator, not a hand-modeled stand-in.
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { writeFileSync } from "node:fs";
import { buildPlant } from "../app/src/geometry";
import { getEcotype, DEFAULT_ECOTYPE } from "../app/src/ecotypes";

// GLTFExporter calls the browser's FileReader internally even for binary (GLB) output
// with no textures. Node has no global FileReader; this minimal polyfill covers only
// the one method path GLTFExporter actually exercises here (reading a Blob as a data URL).
if (typeof (globalThis as any).FileReader === "undefined") {
  class NodeFileReader {
    result: string | ArrayBuffer | null = null;
    onloadend: (() => void) | null = null;
    readAsDataURL(blob: Blob) {
      blob.arrayBuffer().then((buf) => {
        const base64 = Buffer.from(buf).toString("base64");
        this.result = `data:${blob.type || "application/octet-stream"};base64,${base64}`;
        this.onloadend?.();
      });
    }
    readAsArrayBuffer(blob: Blob) {
      blob.arrayBuffer().then((buf) => {
        this.result = buf;
        this.onloadend?.();
      });
    }
  }
  (globalThis as any).FileReader = NodeFileReader;
}

const ecotypeId = process.argv[2];
const params = ecotypeId ? getEcotype(ecotypeId) : DEFAULT_ECOTYPE;

const scene = new THREE.Scene();
scene.add(buildPlant(params));

const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (result) => {
    const outPath = `blender/exports/${params.id}.glb`;
    writeFileSync(outPath, Buffer.from(result as ArrayBuffer));
    console.log(`Wrote ${outPath} for ecotype ${params.label}`);
  },
  (error) => {
    console.error("GLTFExporter error:", error);
    process.exit(1);
  },
  { binary: true },
);

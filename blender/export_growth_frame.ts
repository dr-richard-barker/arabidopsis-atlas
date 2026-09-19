// Headless export of a single real-day growth snapshot to glTF (Col-0 only -- see
// app/src/growthStages.ts for why). Run with:
//   npx tsx blender/export_growth_frame.ts <day> [outPath]
// Uses the exact same buildGrowthSnapshot() the growth animation pipeline calls per
// frame -- this script exists so a single frame can be inspected/rendered in isolation
// without running the full multi-hour render.
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { writeFileSync } from "node:fs";
import { buildGrowthSnapshot } from "../app/src/geometry";

// Same Node/FileReader polyfill as export_mesh.ts -- see that file for why this is needed.
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

const day = Number(process.argv[2]);
if (!Number.isFinite(day)) {
  console.error("Usage: npx tsx blender/export_growth_frame.ts <day> [outPath]");
  process.exit(1);
}
const outPath = process.argv[3] ?? `blender/exports/growth_day_${day.toFixed(1)}.glb`;

const scene = new THREE.Scene();
scene.add(buildGrowthSnapshot(day));

const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (result) => {
    writeFileSync(outPath, Buffer.from(result as ArrayBuffer));
    console.log(`Wrote ${outPath} (day ${day})`);
  },
  (error) => {
    console.error("GLTFExporter error:", error);
    process.exit(1);
  },
  { binary: true },
);

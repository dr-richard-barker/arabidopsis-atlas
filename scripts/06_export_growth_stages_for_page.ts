// Exports the real GROWTH_STAGES table (app/src/growthStages.ts) to plain JSON for the
// static growth.html page's JS to consume -- single source of truth, not retyped.
// Run: npx tsx scripts/06_export_growth_stages_for_page.ts
import { writeFileSync } from "node:fs";
import { GROWTH_STAGES, GROWTH_DAY_MAX } from "../app/src/growthStages";

const out = { stages: GROWTH_STAGES, growthDayMax: GROWTH_DAY_MAX };
writeFileSync("app/public/growth-stages.json", JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote app/public/growth-stages.json (${GROWTH_STAGES.length} stages)`);

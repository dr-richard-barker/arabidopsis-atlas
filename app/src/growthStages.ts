// Real Arabidopsis (Col-0) developmental timing from Boyes et al. 2001, "Growth
// Stage-Based Phenotypic Analysis of Arabidopsis," The Plant Cell 13(7):1499-1510,
// doi:10.1105/tpc.010011 (CrossRef-confirmed twice; table values independently
// cross-checked against two separate fetches of the paper's own PMC full text, which
// agreed exactly on every overlapping value). See data/growth-stages/README.md for full
// provenance, the Table-1/Table-2 hybrid disclosure, and what is NOT independently
// confirmed (TAIR's own corroborating pages returned HTTP 403 to automated fetches).
//
// This growth timeline is Col-0-specific -- Boyes et al. 2001 did not measure the other
// ecotypes this atlas otherwise supports, so the growth animation depicts Col-0, not a
// user-selectable ecotype. That's a real scope boundary, not an oversight.
export interface GrowthStagePoint {
  stage: string; // Boyes' own stage code
  description: string;
  day: number;
  table: "plate" | "soil";
}

// Table 1: plate-grown, used only for the germination window (before the soil table
// begins at the 2-leaf stage). Table 2: soil-grown, whole life cycle.
export const GROWTH_STAGES: GrowthStagePoint[] = [
  { stage: "0", description: "Seed imbibition", day: 3.0, table: "plate" },
  { stage: "0.50", description: "Radicle emergence", day: 4.3, table: "plate" },
  { stage: "0.70", description: "Hypocotyl and cotyledon emergence", day: 5.5, table: "plate" },
  { stage: "1.00", description: "Cotyledons fully opened", day: 6.0, table: "plate" },
  // Soil table from the 2-leaf stage on -- see README for why the medium switches here.
  { stage: "1.02", description: "2 rosette leaves >1mm", day: 12.5, table: "soil" },
  { stage: "1.03", description: "3 rosette leaves >1mm", day: 15.9, table: "soil" },
  { stage: "1.04", description: "4 rosette leaves >1mm", day: 16.5, table: "soil" },
  { stage: "1.05", description: "5 rosette leaves >1mm", day: 17.7, table: "soil" },
  { stage: "1.06", description: "6 rosette leaves >1mm", day: 18.4, table: "soil" },
  { stage: "1.07", description: "7 rosette leaves >1mm", day: 19.4, table: "soil" },
  { stage: "1.08", description: "8 rosette leaves >1mm", day: 20.0, table: "soil" },
  { stage: "1.09", description: "9 rosette leaves >1mm", day: 21.1, table: "soil" },
  { stage: "1.10", description: "10 rosette leaves >1mm", day: 21.6, table: "soil" },
  { stage: "1.11", description: "11 rosette leaves >1mm", day: 22.2, table: "soil" },
  { stage: "1.12", description: "12 rosette leaves >1mm", day: 23.3, table: "soil" },
  { stage: "1.13", description: "13 rosette leaves >1mm", day: 24.8, table: "soil" },
  { stage: "1.14", description: "14 rosette leaves >1mm", day: 25.5, table: "soil" },
  { stage: "3.20", description: "Rosette 20% of final size", day: 18.9, table: "soil" },
  { stage: "3.50", description: "Rosette 50% of final size", day: 24.0, table: "soil" },
  { stage: "3.70", description: "Rosette 70% of final size", day: 27.4, table: "soil" },
  { stage: "3.90", description: "Rosette growth complete", day: 29.3, table: "soil" },
  { stage: "5.10", description: "First flower buds visible", day: 26.0, table: "soil" },
  { stage: "6.00", description: "First flower open", day: 31.8, table: "soil" },
  { stage: "6.10", description: "10% of flowers produced have opened", day: 35.9, table: "soil" },
  { stage: "6.30", description: "30% of flowers produced have opened", day: 40.1, table: "soil" },
  { stage: "6.50", description: "50% of flowers produced have opened", day: 43.5, table: "soil" },
  { stage: "6.90", description: "Flowering complete", day: 49.4, table: "soil" },
  { stage: "8.00", description: "First silique shattered", day: 48.0, table: "soil" },
];

const LEAF_COUNT_STAGES = GROWTH_STAGES.filter((s) => /^1\.\d\d$/.test(s.stage) && s.table === "soil");
const ROSETTE_FRACTION_STAGES: [number, number][] = [
  [0, 0],
  [18.9, 0.2],
  [24.0, 0.5],
  [27.4, 0.7],
  [29.3, 1.0],
];
const FLOWER_FRACTION_STAGES: [number, number][] = [
  [31.8, 0], // 6.00 first flower open -- fraction of eventual total flowers opened so far
  [35.9, 0.1],
  [40.1, 0.3],
  [43.5, 0.5],
  [49.4, 1.0],
];

function interpolate(points: [number, number][], day: number): number {
  if (day <= points[0][0]) return points[0][1];
  if (day >= points[points.length - 1][0]) return points[points.length - 1][1];
  for (let i = 0; i < points.length - 1; i++) {
    const [d0, v0] = points[i];
    const [d1, v1] = points[i + 1];
    if (day >= d0 && day <= d1) {
      const t = (day - d0) / (d1 - d0);
      return v0 + (v1 - v0) * t;
    }
  }
  return points[points.length - 1][1];
}

export interface GrowthState {
  day: number;
  /** Real Boyes leaf-count-stage day values, so leaf N appears exactly when stage 1.0N says it does. */
  leafCount: number;
  /** 0-1, interpolated between the real rosette-size-fraction stages (3.20/3.50/3.70/3.90). */
  rosetteFraction: number;
  /** 0-1: 0 before first flower buds (5.10), 1 once flowering is complete (6.90). Technique choice for the ramp shape between those two real points -- see README. */
  boltingFraction: number;
  /** 0-1, interpolated between the real flower-opening-percentage stages (6.00/6.10/6.30/6.50/6.90). */
  flowerFraction: number;
}

export const FIRST_BUD_DAY = GROWTH_STAGES.find((s) => s.stage === "5.10")!.day;
const FLOWERING_COMPLETE_DAY = GROWTH_STAGES.find((s) => s.stage === "6.90")!.day;

/** Real, Boyes-2001-derived developmental state at a given day post-stratification. */
export function growthStateAtDay(day: number): GrowthState {
  const leafPoints: [number, number][] = LEAF_COUNT_STAGES.map((s) => [s.day, Number(s.stage.split(".")[1])]);
  const leafCount = Math.round(interpolate([[0, 0], ...leafPoints], day));
  const rosetteFraction = interpolate(ROSETTE_FRACTION_STAGES, day);
  const boltingFraction = interpolate(
    [[FIRST_BUD_DAY, 0], [FLOWERING_COMPLETE_DAY, 1]],
    day,
  );
  const flowerFraction = interpolate(FLOWER_FRACTION_STAGES, day);
  return { day, leafCount, rosetteFraction, boltingFraction, flowerFraction };
}

/** The real day span this timeline actually covers (seed imbibition to flowering complete). */
export const GROWTH_DAY_MIN = GROWTH_STAGES[0].day;
export const GROWTH_DAY_MAX = FLOWERING_COMPLETE_DAY;

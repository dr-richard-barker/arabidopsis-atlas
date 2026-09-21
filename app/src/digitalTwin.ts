// Digital twin data-overlay layer: lets a viewer bring their own tissue/organ-resolved data,
// or browse the real external resources this atlas is too coarse to show directly, alongside
// the existing organ viewer. See data/digital-twin/README.md for full provenance and the
// honest scope statement (this is a visualization/linking layer, not a reimplementation of
// existing systems models -- AraGEM, AraRoot, Chew et al. 2014's Framework Model, and BioOS
// are real, cited, existing computational models this complements, not duplicates).
import { GROWTH_STAGES } from "./growthStages";

// Real developmental sample points named in Lee, Illouz-Eliaz, Nobori et al. 2025, "A
// single-cell, spatial transcriptomic atlas of the Arabidopsis life cycle," Nature Plants
// 11(9):1960-1975, doi:10.1038/s41477-025-02072-z (PMID 40830271) -- pulled directly from
// its own Methods ("Plant growth and sampling"), not inferred from the abstract's "ten
// developmental stages" headline number. `day` is the paper's own stated age where it gives
// one; the three tissue-type samples (rosette/flower/silique) are stated as soil-grown,
// long-day, no single specific day given, so the CLOSEST relevant point on this atlas's own
// Boyes-2001 axis is a disclosed approximation, not a value the paper itself states.
export interface Lee2025Sample {
  label: string;
  day: number | null; // paper's own stated age, if it gives one
  approxDayOnBoyesAxis: number; // where this lands on THIS atlas's day axis -- see note above
  note: string;
}

export const LEE2025_SAMPLES: Lee2025Sample[] = [
  { label: "Imbibed seed", day: 0, approxDayOnBoyesAxis: 3.0, note: "Matches Boyes stage 0 (seed imbibition) directly." },
  { label: "Germinating seed", day: 1.25, approxDayOnBoyesAxis: 4.3, note: "Close to Boyes stage 0.50 (radicle emergence, day 4.3)." },
  { label: "Light-grown seedling, 3 days", day: 3, approxDayOnBoyesAxis: 6.0, note: "Near Boyes stage 1.00 (cotyledons fully opened, day 6.0) -- the paper's own day-count is post-sowing, not necessarily the same zero-point Boyes uses, so this is approximate." },
  { label: "Light-grown seedling, 6 days", day: 6, approxDayOnBoyesAxis: 12.5, note: "Approximate placement near early rosette-leaf emergence; not a direct day-for-day match." },
  { label: "Light-grown seedling, 12 days", day: 12, approxDayOnBoyesAxis: 18.9, note: "Approximate placement near rosette 20% of final size." },
  { label: "Etiolated (dark-grown) seedling, 3 days", day: 3, approxDayOnBoyesAxis: 6.0, note: "A different growth CONDITION (no light), not a point on the ordinary light-grown Boyes timeline at all -- shown for completeness, not plotted as a normal-development day." },
  { label: "Rosette (soil-grown, long-day)", day: null, approxDayOnBoyesAxis: 29.3, note: "No specific day stated in the paper; placed at Boyes stage 3.90 (rosette growth complete) as the closest labelled real stage, not a value the paper itself gives." },
  { label: "Flower (soil-grown, long-day)", day: null, approxDayOnBoyesAxis: 31.8, note: "No specific day stated; placed at Boyes stage 6.00 (first flower open)." },
  { label: "Silique (soil-grown, long-day)", day: null, approxDayOnBoyesAxis: 44.0, note: "No specific day stated; placed mid-way through the real flower-to-silique window this atlas's own raceme model already uses." },
];

export const LEE2025_CITATION = {
  authors: "Lee, T.A., Illouz-Eliaz, N., Nobori, T., Xu, J., Jow, B., Nery, J.R., Ecker, J.R.",
  year: 2025,
  title: "A single-cell, spatial transcriptomic atlas of the Arabidopsis life cycle",
  journal: "Nature Plants",
  volume: "11(9):1960-1975",
  doi: "10.1038/s41477-025-02072-z",
  pmid: "40830271",
  geoAccession: "GSE226097",
  webTool: "https://arabidopsisdevatlas.salk.edu/",
} as const;

// This atlas's own 5 coarse organs (organs.ts) are far coarser than Lee et al. 2025's real
// cell-type resolution. Disclosed many-to-one crosswalk, not an implied claim that the 3D
// mesh itself has cell-type resolution -- shown as a breakdown list next to the organ, never
// painted onto sub-organ mesh regions that don't exist in this atlas's geometry.
export const ORGAN_TO_LEE2025_CELLTYPES: Record<string, string[]> = {
  root: ["Columella", "Lateral root cap", "Epidermis/atrichoblast", "Epidermis/trichoblast", "Cortex", "Endodermis", "Pericycle", "Stele/vasculature", "Root cap"],
  rosette_leaf: ["Epidermis (pavement/guard cells)", "Palisade mesophyll", "Spongy mesophyll", "Vasculature (leaf)", "Trichome"],
  inflorescence_axis: ["Epidermis (stem)", "Cortex (stem)", "Vasculature (stem)", "Pith"],
  flower: ["Sepal", "Petal", "Stamen/anther", "Carpel/ovule", "Receptacle"],
  silique: ["Valve", "Replum", "Septum", "Seed coat", "Funiculus"],
};

// A dataset-agnostic generalization of organs.ts's SpaceflightPanel (which was hardcoded to
// exactly OSD-120/OSD-314). Any dataset -- a fetched-and-committed OSDR study (via
// scripts/05_fetch_osdr_study.py) or a viewer's own uploaded CSV -- normalizes into this
// same shape so the sidebar can render it with one shared component.
export interface OverlayDataPoint {
  geneOrLabel: string;
  day: number;
  value: number;
  condition?: string;
}

export interface OverlayDataset {
  name: string;
  sourceDescription: string; // e.g. "OSD-522 (fetched 2026-09-21)" or "uploaded CSV: my_data.csv"
  points: OverlayDataPoint[];
}

export interface CsvParseResult {
  dataset: OverlayDataset | null;
  errors: string[];
  rowsAccepted: number;
  rowsRejected: number;
}

// Real day range this atlas's own timeline actually covers (growthStages.ts) -- an
// uploaded/fetched point outside this range is flagged, not silently clamped or dropped.
const MIN_DAY = GROWTH_STAGES[0].day;
const MAX_DAY = GROWTH_STAGES[GROWTH_STAGES.length - 1].day;
export const GROWTH_STAGES_DAY_RANGE = { min: MIN_DAY, max: MAX_DAY } as const;

/**
 * Parses a user-supplied CSV entirely client-side (no upload to any server, consistent
 * with this repo's static-Pages architecture): required columns gene_or_label, day, value;
 * optional condition. Malformed rows are REPORTED, not silently coerced or dropped without
 * a trace -- an empty dataset from a bad file should never look identical to "no data."
 */
export function parseOverlayCsv(text: string, datasetName: string): CsvParseResult {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) {
    return { dataset: null, errors: ["File has no data rows (need a header plus at least one row)."], rowsAccepted: 0, rowsRejected: 0 };
  }
  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const idxLabel = header.indexOf("gene_or_label");
  const idxDay = header.indexOf("day");
  const idxValue = header.indexOf("value");
  const idxCondition = header.indexOf("condition");
  if (idxLabel === -1 || idxDay === -1 || idxValue === -1) {
    return {
      dataset: null,
      errors: [`Missing required column(s). Found header: [${header.join(", ")}]. Required: gene_or_label, day, value (optional: condition).`],
      rowsAccepted: 0,
      rowsRejected: 0,
    };
  }

  const points: OverlayDataPoint[] = [];
  const errors: string[] = [];
  let rejected = 0;
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    const rowNum = i + 1;
    const label = cols[idxLabel]?.trim();
    const day = Number(cols[idxDay]);
    const value = Number(cols[idxValue]);
    if (!label) {
      errors.push(`Row ${rowNum}: empty gene_or_label, skipped.`);
      rejected++;
      continue;
    }
    if (!Number.isFinite(day)) {
      errors.push(`Row ${rowNum}: "day" is not a number ("${cols[idxDay]}"), skipped.`);
      rejected++;
      continue;
    }
    if (!Number.isFinite(value)) {
      errors.push(`Row ${rowNum}: "value" is not a number ("${cols[idxValue]}"), skipped.`);
      rejected++;
      continue;
    }
    if (day < MIN_DAY || day > MAX_DAY) {
      errors.push(`Row ${rowNum}: day=${day} is outside this atlas's real timeline (${MIN_DAY}-${MAX_DAY}); kept, but it will never be the nearest day to any point on the growth slider.`);
    }
    points.push({ geneOrLabel: label, day, value, condition: idxCondition >= 0 ? cols[idxCondition]?.trim() : undefined });
  }

  if (points.length === 0) {
    return { dataset: null, errors: [...errors, "No valid rows found."], rowsAccepted: 0, rowsRejected: rejected };
  }
  return {
    dataset: { name: datasetName, sourceDescription: `uploaded CSV: ${datasetName}`, points },
    errors,
    rowsAccepted: points.length,
    rowsRejected: rejected,
  };
}

/** Nearest-day lookup within a dataset -- never silently interpolates across a big gap
 * without the caller being able to see how far off the match actually was. */
export function nearestPoints(dataset: OverlayDataset, targetDay: number, maxPoints = 10): { point: OverlayDataPoint; dayGap: number }[] {
  return [...dataset.points]
    .map((point) => ({ point, dayGap: Math.abs(point.day - targetDay) }))
    .sort((a, b) => a.dayGap - b.dayGap)
    .slice(0, maxPoints);
}

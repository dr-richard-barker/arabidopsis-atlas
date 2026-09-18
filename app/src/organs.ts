// Organ vocabulary aligned to TraVA's own real organ categories (Klepikova et
// al. 2016 / travadb.org), not an invented list -- so this atlas's organ
// picker maps directly onto the categories the underlying developmental
// expression atlas actually uses.
import spaceflightData from "./data/spaceflight_top_genes.json";

export interface SpaceflightPanel {
  studyId: string;
  comparison: string;
  nGenesTotal: number;
  topUpregulated: { gene_id: string; log2fc: number }[];
  topDownregulated: { gene_id: string; log2fc: number }[];
  sourceFile: string;
}

export interface Organ {
  id: string;
  label: string;
  travaCategory: string;
  geometryNote: string;
  geometryCitations: string[]; // keys into references.bib
  spaceflight: SpaceflightPanel | null;
  spaceflightCaveat?: string;
}

function panelFor(studyId: keyof typeof spaceflightData): SpaceflightPanel {
  const d = spaceflightData[studyId];
  return {
    studyId,
    comparison: d.comparison,
    nGenesTotal: d.n_genes_total,
    topUpregulated: d.top_upregulated,
    topDownregulated: d.top_downregulated,
    sourceFile: d.source_file,
  };
}

export const ORGANS: Organ[] = [
  {
    id: "root",
    label: "Root system",
    travaCategory: "Root (root apex / root without apex)",
    geometryNote:
      "Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",
    geometryCitations: ["Shahan2022"],
    spaceflight: panelFor("OSD-120"),
  },
  {
    id: "rosette_leaf",
    label: "Rosette leaf",
    travaCategory: "Third leaf (petiole / leaf blade / central vein)",
    geometryNote:
      "Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",
    geometryCitations: [],
    spaceflight: null,
    spaceflightCaveat:
      "OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact.",
  },
  {
    id: "inflorescence_axis",
    label: "Inflorescence axis",
    travaCategory: "Axes (peduncles / inflorescence axis / internode)",
    geometryNote:
      "Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",
    geometryCitations: [],
    spaceflight: null,
  },
  {
    id: "flower",
    label: "Flower",
    travaCategory: "Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",
    geometryNote:
      "Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",
    geometryCitations: ["Vijayan2021"],
    spaceflight: null,
  },
  {
    id: "silique",
    label: "Silique",
    travaCategory: "Silique development",
    geometryNote:
      "Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",
    geometryCitations: ["Vijayan2021"],
    spaceflight: null,
  },
];

export const WHOLE_SEEDLING_SPACEFLIGHT = panelFor("OSD-314");

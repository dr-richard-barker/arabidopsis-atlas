// Real, cited per-ecotype trait parameters driving the plant's shape. See
// data/ecotypes/README.md for full provenance; every field here that isn't explicitly
// marked "illustrative" or "default (no measurement found)" traces to a real source.
import rosetteDescriptors from "./data/ecotype_params.json";

export interface TraitProvenance {
  value: string; // human-readable statement of what's known and its status
  citationKey: string; // key into references.bib, or "none" if genuinely undocumented
}

export interface EcotypeParams {
  id: string;
  label: string;
  sourceName: string; // exact accession name as the source dataset spells it
  rosetteLeafCount: number;
  rosetteCompactness: number; // Camargo et al. 2014's own "Compactness" descriptor, real value where available
  rosetteRadiusScale: number; // derived from Camargo et al. 2014 rosette Area (sqrt, since area ~ radius^2)
  pedicelLengthScale: number; // 1.0 = ER wild-type baseline; ~0.38 for Ler (see provenance)
  siliqueBluntness: number; // 0 = tapered (ER wild-type), 1 = blunt (natural `er` mutation)
  leafThicknessScale: number;
  provenance: {
    compactness: TraitProvenance;
    pedicel: TraitProvenance;
    leaf: TraitProvenance;
  };
  referencePhoto: { url: string; citationKey: string } | null;
}

const NAMIN_2018_FIGSHARE = "https://figshare.com/s/e18a978267675059578f";

function fromDescriptors(id: keyof typeof rosetteDescriptors) {
  const d = rosetteDescriptors[id];
  return {
    compactness: d.compactness,
    radiusScale: Math.sqrt(d.relativeAreaVsCol0),
    sourceName: d.sourceName,
  };
}

const col0Desc = fromDescriptors("col0");
const lerDesc = fromDescriptors("ler");
const wsDesc = fromDescriptors("ws");
const tsu0Desc = fromDescriptors("tsu0");
const edi0Desc = fromDescriptors("edi0");

export const ECOTYPES: EcotypeParams[] = [
  {
    id: "col0",
    label: "Col-0 (Columbia)",
    sourceName: col0Desc.sourceName,
    rosetteLeafCount: 12,
    rosetteCompactness: col0Desc.compactness,
    rosetteRadiusScale: col0Desc.radiusScale,
    pedicelLengthScale: 1.0,
    siliqueBluntness: 0.1,
    leafThicknessScale: 1.0,
    provenance: {
      compactness: { value: `Real: mean Compactness ${col0Desc.compactness} (n=60 images, Camargo et al. 2014)`, citationKey: "Camargo2014" },
      pedicel: { value: "ERECTA (ER) wild-type reference background (Torii et al. 1996)", citationKey: "Torii1996" },
      leaf: { value: "Reference/baseline leaf count in this project; not itself drawn from a comparative count study", citationKey: "none" },
    },
    referencePhoto: { url: NAMIN_2018_FIGSHARE, citationKey: "Namin2018" },
  },
  {
    id: "ler",
    label: "Ler (Landsberg erecta)",
    sourceName: lerDesc.sourceName,
    rosetteLeafCount: 12,
    rosetteCompactness: lerDesc.compactness,
    rosetteRadiusScale: lerDesc.radiusScale,
    pedicelLengthScale: 1 / 2.6, // Bundy et al. 2012: mature er-105 pedicel ~2.6x shorter than WT
    siliqueBluntness: 0.9,
    leafThicknessScale: 1.0,
    provenance: {
      compactness: {
        value: `Real: mean Compactness ${lerDesc.compactness} (n=60), the highest of the 5 ecotypes measured here (Camargo et al. 2014) -- independently consistent with Ler's known compact habit`,
        citationKey: "Camargo2014",
      },
      pedicel: {
        value: "Ler carries the natural `er` mutation (Torii et al. 1996: \"compact inflorescence, blunt fruits, and short petioles\"). Quantitative proxy from Bundy et al. 2012: mature wild-type pedicel 7.90±0.14mm vs. induced er-105 mutant ~2.6x shorter -- that number is for er-105 in a Columbia background, not a direct field measurement of natural Ler vs. Col, and is used here as the best available quantitative proxy for what the mutation does.",
        citationKey: "Bundy2012",
      },
      leaf: { value: "Coneva & Chitwood 2018 report Cvi has ~2 more leaves than Ler in long days -- Ler itself is this comparison's baseline, not independently varied here", citationKey: "Coneva2018" },
    },
    referencePhoto: { url: NAMIN_2018_FIGSHARE, citationKey: "Namin2018" },
  },
  {
    id: "ws",
    label: "Ws (Wassilewskija)",
    sourceName: wsDesc.sourceName,
    rosetteLeafCount: 12,
    rosetteCompactness: wsDesc.compactness,
    rosetteRadiusScale: wsDesc.radiusScale,
    pedicelLengthScale: 1.0,
    siliqueBluntness: 0.1,
    leafThicknessScale: 1.0,
    provenance: {
      compactness: { value: `Real: mean Compactness ${wsDesc.compactness} (n=60, Camargo et al. 2014)`, citationKey: "Camargo2014" },
      pedicel: { value: "ERECTA (ER) wild-type background (Torii et al. 1996 separately isolated induced er alleles from Wassilewskija, implying the natural Ws accession is itself ER)", citationKey: "Torii1996" },
      leaf: { value: "No dedicated leaf-count comparison found for Ws in the sources used here", citationKey: "none" },
    },
    referencePhoto: null,
  },
  {
    id: "cvi0",
    label: "Cvi-0 (Cape Verde Islands)",
    sourceName: "Cvi-0",
    rosetteLeafCount: 14, // Col/Ler baseline (12) + 2, per Coneva & Chitwood 2018
    rosetteCompactness: col0Desc.compactness, // no measurement found for Cvi-0 in the MAGIC founder set (it is not one); defaulted to Col-0 rather than guessed
    rosetteRadiusScale: 1.0, // same reason
    pedicelLengthScale: 1.0,
    siliqueBluntness: 0.1,
    leafThicknessScale: 1.25, // illustrative multiplier for a real, qualitatively "thicker" finding -- exact µm values sit in the source's figures, not extracted
    provenance: {
      compactness: { value: "No rosette-compactness measurement found for Cvi-0 (it is not one of the 19 MAGIC founders in the Camargo et al. 2014 dataset used here) -- defaulted to the Col-0 value rather than estimated", citationKey: "none" },
      pedicel: { value: "No ERECTA-specific data found for Cvi-0; assumed ER wild-type by default (most non-Landsberg accessions are), not directly confirmed", citationKey: "none" },
      leaf: {
        value: "Real: Coneva & Chitwood 2018 report Cvi makes ~2 more leaves than Ler in long-day conditions, is thicker-leaved, and grows more slowly. Leaf-count and thickness reflect this; the thickness multiplier (1.25x) is an illustrative choice, not a value read directly from the paper's figures.",
        citationKey: "Coneva2018",
      },
    },
    referencePhoto: { url: NAMIN_2018_FIGSHARE, citationKey: "Namin2018" },
  },
  {
    id: "tsu0",
    label: "Tsu-0 (Tsu)",
    sourceName: tsu0Desc.sourceName,
    rosetteLeafCount: 12,
    rosetteCompactness: tsu0Desc.compactness,
    rosetteRadiusScale: tsu0Desc.radiusScale,
    pedicelLengthScale: 1.0,
    siliqueBluntness: 0.1,
    leafThicknessScale: 1.0,
    provenance: {
      compactness: { value: `Real: mean Compactness ${tsu0Desc.compactness} (n=60), the lowest of the 5 ecotypes measured here (Camargo et al. 2014)`, citationKey: "Camargo2014" },
      pedicel: { value: "No ERECTA-specific data found for Tsu-0; assumed ER wild-type by default, not directly confirmed", citationKey: "none" },
      leaf: { value: "No dedicated leaf-count comparison found for Tsu-0 in the sources used here", citationKey: "none" },
    },
    referencePhoto: null,
  },
  {
    id: "edi0",
    label: "Edi-0 (Edinburgh)",
    sourceName: edi0Desc.sourceName,
    rosetteLeafCount: 12,
    rosetteCompactness: edi0Desc.compactness,
    rosetteRadiusScale: edi0Desc.radiusScale,
    pedicelLengthScale: 1.0,
    siliqueBluntness: 0.1,
    leafThicknessScale: 1.0,
    provenance: {
      compactness: { value: `Real: mean Compactness ${edi0Desc.compactness} (n=60, Camargo et al. 2014)`, citationKey: "Camargo2014" },
      pedicel: { value: "No ERECTA-specific data found for Edi-0; assumed ER wild-type by default, not directly confirmed", citationKey: "none" },
      leaf: { value: "No dedicated leaf-count comparison found for Edi-0 in the sources used here", citationKey: "none" },
    },
    referencePhoto: null,
  },
];

export const DEFAULT_ECOTYPE: EcotypeParams = ECOTYPES[0];

export function getEcotype(id: string): EcotypeParams {
  return ECOTYPES.find((e) => e.id === id) ?? DEFAULT_ECOTYPE;
}

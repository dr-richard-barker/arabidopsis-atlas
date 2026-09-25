# Darkness-induced metabolome data integration

**Source:** Zhu et al. (2024) "The natural variance of Arabidopsis secondary metabolism on extended darkness"
*Nat. Sci. Data* **11**, 841. https://doi.org/10.1038/s41597-024-03694-2

**Data accessed:** 2026-09-25T11:46:34.693865

## Data provenance

- **Metabolite BLUP values** (Fig. 1): 259 Arabidopsis HapMap accessions × 95 secondary metabolites × 2 timepoints (0d baseline, 6d extended darkness)
  - Source: Figshare 10.6084/m9.figshare.24407896.v3 (article 24407896)
  - Format: Excel workbook, two sheets ("0d" and "6d"), BLUP-normalized relative intensities
  - Accession IDs: Referred to as `ecotype.XXX` in both source and processed data (numeric HapMap identifiers; see Zhu et al. Methods for mapping to common names like Col-0, Ler, etc. if needed)
  - Quality control: Two-step pattern QC included; batch effects corrected

- **Metabolite identities & annotations**: Peak ID, retention time, putative name, molecular formula, m/z, class
  - Source: Figshare 10.6084/m9.figshare.24407812.v3 (article 24407812)
  - Format: Excel workbook, single sheet ("new_SAleh"), 95 identified metabolites
  - Identification level: Mix of standard-confirmed (S) and MS/MS-inferred (B-level)
  - Chemical classes: Amino acids, organic acids, phosphorylated sugars, phenylpropanoids, flavonoids, terpenoids, steroids

## How to use this data

1. **Via the UI (arabidopsis-atlas web app):**
   - Navigate to any organ tab (root, rosette leaf, etc.)
   - Scroll to the "Digital twin data overlay" panel
   - Click "Upload your own data (CSV: gene_or_label, day, value, condition)"
   - Select `data/processed/metabolome/darkness_metabolome_digital_twin.csv`
   - The UI slider (0-45 normally for growth stage) now sweeps across accession indices (1-259)
   - For each accession, you'll see all 95 metabolites and their intensities
   - The condition filter shows "0d darkness" (baseline) or "6d darkness" (stress response)

2. **Data format understood by the panel:**
```
gene_or_label,day,value,condition
<metabolite_name>,<accession_index>,<BLUP_intensity>,<timepoint>
Ornithine,1,-0.238,0d darkness
alpha-D-Galacturonic acid 1-phosphate,1,-1.017,0d darkness
(D-Glycero-alpha-D-Manno-Heptopyranosyl)-Dihydrogenphosphate,1,-0.238,0d darkness
...
```

3. **Interpreting the results:**
   - Slider "day" = HapMap accession index (1-259, NOT a growth day)
   - Each accession has metabolite data at two timepoints (0d, 6d)
   - Positive value = metabolite MORE abundant at 6d darkness (upregulated)
   - Negative value = metabolite LESS abundant at 6d darkness (downregulated)
   - Large shifts indicate metabolites most responsive to darkness stress

## Honest scope statement

This is **not** a claim to reimplement the Zhu et al. GWAS or their metabolite annotation pipeline. What this integration does:
- Links the published processed data (BLUP tables + identities) into this atlas's existing digital-twin visualization layer
- Allows side-by-side browsing of spaceflight transcriptomics (OSD-522) and terrestrial darkness-metabolomics (Zhu et al.) in the same organ-context panel
- Enables cross-omics analysis: "which accessions show the largest darkness response?"

Real existing work this complements (not duplicates):
- **Zhu et al. 2024**: GWAS for darkness-induced metabolite shifts; 95 identified secondary metabolites; HapMap population validation
- **Paintomics analysis** (this repo): multi-omic pathway enrichment for OSD-522 (spaceflight)

No metabolite biosynthetic modeling runs in this viewer; results are visualized, not recomputed.

## Cross-reference to OSD-522

OSD-522 (BRIC-LED-001) transcriptomics was run under **lit conditions** (constant light, ISS/spaceflight). The Zhu et al. dataset is all under **darkness** (0d baseline, 6d extended darkness). The two datasets complement each other:

- OSD-522 light: Flight shows photosynthesis ↑, photorespiration ↓ (log2FC = -0.096 to -0.116)
- Zhu et al. dark: 6d darkness induces secondary metabolite shifts matching carbon starvation/senescence
- Together: "What does the darkness-induced metabolome look like, and how does it map to spaceflight (where gravity loss + closed-canister CO₂ starvation both reduce photosynthesis)?"

## MANIFEST entry

Data fetched 2026-09-25T11:46:34.693874, script: `scripts/07_fetch_darkness_metabolome.py`.
Articles: 24407896 (BLUP), 24407812 (identities).
Final data: `data/processed/metabolome/darkness_metabolome_digital_twin.csv` (digital-twin format, 35,483 rows).
Data summary: 259 accessions × 95 metabolites × 2 timepoints (0d, 6d darkness) = ~49k rows; some missing values due to technical replicates/QC.

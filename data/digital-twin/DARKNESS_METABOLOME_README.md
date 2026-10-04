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
   - Every row sits at day 35 or 41 on the slider (see below); the list shows the 8 rows
     nearest the slider, so it is a sample of the ~17,000 rows at that age, not a ranking
   - For per-accession comparisons use the rosette leaf's "Metabolome x spaceflight (OSD-522)"
     panel, which is built from these BLUPs by scripts 08-14

2. **Data format understood by the panel** (rewrite it offline with
   `python3 scripts/07_fetch_darkness_metabolome.py export-twin`):
```
gene_or_label,day,value,condition
<metabolite_name>,<plant age at harvest: 35 or 41>,<BLUP_intensity>,<accession> / <timepoint>
(D-Glycero-alpha-D-Manno-Heptopyranosyl)-Dihydrogenphosphate,35,-0.238167999,ecotype.173 / 0d darkness
"Glutamic acid, N-acetyl-",35,-0.368642303,ecotype.173 / 0d darkness
...
```
   Names containing commas are double-quoted (RFC 4180); the panel's parser handles this.

3. **Interpreting the results:**
   - `day` = plant age at harvest in days after germination, as Zhu et al. state it (Methods,
     read from PMC11297995): 35 d for the 0 d darkness sample, 41 d for the 6 d sample
   - These plants grew under short days in a greenhouse; the slider counts days after
     stratification for long-day Col-0 (Boyes 2001). The slider position matches calendar age
     only, not developmental stage
   - `value` is the BLUP at that timepoint for that accession, not a 6 d - 0 d shift; a darkness
     response is the difference between an accession's 41-day and 35-day rows

## Honest scope statement

This is **not** a claim to reimplement the Zhu et al. GWAS or their metabolite annotation pipeline. What this integration does:
- Links the published processed data (BLUP tables + identities) into this atlas's existing digital-twin visualization layer
- Allows side-by-side browsing of spaceflight transcriptomics (OSD-522) and terrestrial darkness-metabolomics (Zhu et al.) in the same organ-context panel
- Enables cross-omics analysis: "which accessions show the largest darkness response?"

Real existing work this complements (not duplicates):
- **Zhu et al. 2024**: GWAS for darkness-induced metabolite shifts; 95 identified secondary metabolites; HapMap population validation
- **Paintomics analysis** (this repo): multi-omic pathway enrichment for OSD-522 (spaceflight)

No metabolite biosynthetic modeling runs in this viewer; results are visualized, not recomputed.

## Cross-reference to OSD-522 and OSD-38

Both NASA OSDR flight studies below grew Col-0 seedlings in sealed Biological Research in
Canisters (BRIC) hardware; they differ in light. Light and hardware details are read from the
OSDR study records (`osdr.nasa.gov/osdr/data/osd/meta/<n>`, checked 2026-10-04). The OSD-38
record describes its PDFUs as individually sealed. For OSD-522, the study's own paper says the
BRIC hardware "is a closed system, hence no gas exchange between the plant and the external
environment" (Olanrewaju GO, Haveman NJ, Naldrett MJ, Paul A-L, Ferl RJ, Wyatt SE 2023,
*Front. Plant Sci.* 14:1260429, doi:10.3389/fpls.2023.1260429). Nicholson et al., who designed
an insert for both BRIC-PDFU and BRIC-LED sample compartments, note that apart from the air space
trapped inside, the PDFUs "are otherwise hermetically sealed" (Nicholson WL, Fajardo-Cavazos P,
Turner C, Currie TM, Gregory G, Jurca T, Weislogel M 2021, *Front. Space Technol.* 2:797518,
doi:10.3389/frspt.2021.797518).

- **OSD-522 (BRIC-LED-001), lit.** 10 days on the ISS under LEDs at 60 µmol m⁻² s⁻¹ (85 % red,
  15 % blue) on a 4 h light / 2 h dark cycle; the record says lighting "could not be maintained
  longer than 4 hours at a time". Ground controls were grown on Earth. This is the study scripts
  12-13 link to the metabolome (`results/osd522_metabolome_link/`).
- **OSD-38 (BRIC-20), dark.** BRIC-PDFU hardware with individually sealed Petri Dish Fixation
  Units and no electrical power; OSDR annotates the growth condition as "continuous dark (no
  light) regimen". This atlas cites OSD-38 but has not processed it.

Zhu et al. sampled leaves at 0 d and after 6 d of extended darkness, which they describe as
causing "the cessation of photosynthesis and nutrient starvation"; their related GWAS covers
dark-induced senescence (Zhu et al. 2021, *Plant Cell* 34:557-578, doi:10.1093/plcell/koab251).
So OSD-38, not OSD-522, is the flight study whose plants were in darkness. OSD-522 compares
flight with ground under the same lit, sealed hardware, and the link in
`results/osd522_metabolome_link/` asks whether its flight transcript shifts resemble the
terrestrial darkness or stress responses, not whether flight was dark.

For OSD-522 the sealed canister also matters. The sibling hardware-atmosphere study
([Photorespiration_multiomics_microgravity](https://github.com/dr-richard-barker/Photorespiration_multiomics_microgravity))
models a lit sealed canister drawing CO₂ down in flight and ground arms alike, so the drawdown
largely cancels out of flight versus ground, leaving a modelled 5-9 % assimilation deficit in
flight. Those are model outputs, not measurements in OSD-522, and the model is for a lit canister,
so it makes no prediction for dark OSD-38.

## MANIFEST entry

Data fetched 2026-09-25T11:46:34.693874, script: `scripts/07_fetch_darkness_metabolome.py`.
Articles: 24407896 (BLUP), 24407812 (identities).
Final data: `data/processed/metabolome/darkness_metabolome_digital_twin.csv` (digital-twin format, 35,483 rows).
Data summary: 259 accessions × 95 metabolites × 2 timepoints (0d, 6d darkness) = ~49k rows; some missing values due to technical replicates/QC.

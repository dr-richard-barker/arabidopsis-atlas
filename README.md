# Arabidopsis Atlas

**Live:** [3D atlas](https://dr-richard-barker.github.io/arabidopsis-atlas/) ·
[Metabolome × spaceflight showcase](https://dr-richard-barker.github.io/arabidopsis-atlas/metabolome.html) ·
[growth animation](https://dr-richard-barker.github.io/arabidopsis-atlas/growth.html)

An interactive, organ-selectable 3D atlas of *Arabidopsis thaliana*, built so that every
piece of it — geometry, gene expression, spaceflight response — traces to a real, cited
source. No placeholder data, no invented numbers.

## Why this exists

This project started from [`rice-atlas`](https://github.com/dr-richard-barker/rice-atlas),
an interactive 3D rice-plant viewer. Investigating it turned up an important fact worth
stating plainly: rice-atlas is a procedurally-generated conceptual model — its own README
says so — with no real *Oryza sativa* dataset behind it, no FAIR metadata, and no
independent review.

Arabidopsis Atlas keeps the part of that experience worth keeping (an interactive,
organ-by-organ 3D plant you can explore) and rebuilds the rest from real sources:

- **Structural geometry** grounded in cited developmental-biology literature (root system
  architecture, ovule/flower development, rosette phyllotaxy) rather than invented
  proportions — see [`data/README.md`](data/README.md) for the exact papers behind each
  organ.
- **Developmental gene expression** per organ from the Klepikova/TraVA atlas
  (Klepikova et al. 2016, *Plant J*, doi:10.1111/tpj.13312).
- **Spaceflight response** from real NASA GeneLab/OSDR count data — organ-specific for
  Root (OSD-120), whole-seedling for the rest (OSD-314, shown as such, not attributed to
  any one organ) — the angle rice-atlas has nothing comparable to.
- **FAIR metadata** (this README, `LICENSE`, `CITATION.cff`, `.zenodo.json`) and an
  independent ABAI review (`.abai/attest.json`) before anything here is called "assessed."

## Ecotype shape-morphing (v2)

Pick a natural *Arabidopsis* ecotype in the viewer — **Col-0, Ler, Ws, Cvi-0, Tsu-0, or
Edi-0** — and the plant's shape actually changes, driven by real measured trait
differences, not invented ones. See [`data/ecotypes/README.md`](data/ecotypes/README.md)
for full provenance; in short:

- Rosette compactness/size for Col-0/Ler/Ws/Tsu-0/Edi-0 are real per-accession means
  computed from Camargo et al. 2014's own published raw image-derived shape-descriptor
  data (60 images per accession) — independently confirming that Ler is measurably the
  most compact of the five.
- Ler's short pedicels and blunt siliques reflect the real, well-characterized natural
  *erecta* (*er*) mutation (Torii et al. 1996), with a quantitative proxy from Bundy et
  al. 2012 — explicitly disclosed in the UI as a proxy (an induced allele in a Columbia
  background), not a direct natural-Ler-vs-Col field measurement.
- Cvi-0's extra leaves and thicker leaf blades reflect a real, directly-quoted comparison
  in Coneva & Chitwood (2018).
- Where no real measurement exists for a given ecotype/trait (Cvi-0's rosette compactness;
  any ERECTA data for Cvi-0/Tsu-0/Edi-0; a reference photo for Ws), the app says so
  explicitly rather than filling in a plausible-looking value.

Organ geometry itself was also rebuilt this pass on spline-swept, tapering tube geometry
(a parallel-transport frame builder, `app/src/organGeometry/tube.ts`) and a curved
parametric leaf-blade surface, replacing the original primitive-shape approximations —
the same core technique rice-atlas's own source turned out to use, independently
implemented (see the manuscript for what inspecting rice-atlas's real code taught us).

A separate, offline `blender/` pipeline (`export_mesh.ts` + `refine_showcase.py`) renders
the same live-generated geometry through Blender 5.2 for higher-quality static figures
(a Solidify + shade-smooth pass on leaf blades only, matching rice-atlas's own actual,
modest Blender use) — see `manuscript/figures/col0_showcase.png` /
`ler_showcase.png`. This is a separate showcase asset, not part of the interactive
viewer, which stays fully parametric so ecotype-switching keeps working.

## Metabolome × spaceflight (v3)

NASA OSDR holds no plant metabolomics, so this layer links what natural-variation metabolome
studies know on the ground to what was measured in flight:

- **Three terrestrial panels.** Naake et al. 2024 (seed metabolite GWAS, with leaf sets
  re-mapped on one pipeline), Wu et al. 2018 (leaf metabolites under control and stress, with
  GWAS loci), and Zhu et al. 2024 (leaf metabolites before and after six days of darkness).
  Script 11 compares their loci per feature and per metabolite, and tests whether accession
  rankings replicate between the two leaf experiments.
- **OSD-522 link.** For Col-0 shoots flown on the ISS (BRIC-LED), script 12 runs PyDESeq2 on
  GeneLab's counts and tests Wu's metabolite-class pathway genes with a sample-label
  permutation test; script 13 adds the shoot TMT proteome (soluble and membrane fractions).
- **In the atlas.** Select the rosette leaf: the panel shows each class's flight transcript
  and protein shift, and where the chosen ecotype sits in the terrestrial panels (script 14).
- **Showcase page.** [`metabolome.html`](https://dr-richard-barker.github.io/arabidopsis-atlas/metabolome.html),
  rendered by script 15 from the results files, so every number on it traces to an output.

Headline findings, with numbers in
[`results/metabolome_meta_analysis/RESULTS.md`](results/metabolome_meta_analysis/RESULTS.md),
[`results/osd522_metabolome_link/RESULTS.md`](results/osd522_metabolome_link/RESULTS.md) and
[`PROTEOME.md`](results/osd522_metabolome_link/PROTEOME.md):
same-metabolite leaf loci overlap seed loci far more than chance; baseline accession rankings
replicate between independent leaf experiments; glucosinolate, flavonoid, phenylpropanoid and
amino-acid pathway transcripts all fall in flight; protein and transcript changes are
uncorrelated overall, with glucosinolate proteins following their transcripts down and
amino-acid pathway proteins moving the other way. Caveats (transcript direction ≠ metabolite
pool direction; lit hardware, so flight ≠ darkness; developmental-stage differences; 3 vs 3
proteomics) are in each results README.

### Pipeline

| Script | Does | Writes |
|---|---|---|
| `07_fetch_darkness_metabolome.py`, `08_…` | Zhu 2024 Figshare BLUPs | `data/processed/metabolome/darkness_*` |
| `09_integrate_naake_seed_metabolome.py` | Naake 2024 loci, annotated QTL, TAIR9 genes | `data/processed/metabolome/naake_*`, `tair9_*` |
| `10_integrate_wu_environmental_metabolome.py` | Wu 2018 levels and loci | `data/processed/metabolome/wu_*` |
| `11_cross_tissue_gwas_analysis.py` | cross-tissue comparison | `results/metabolome_meta_analysis/` |
| `12_link_osd522.py` | OSD-522 DESeq2 + pathway tests + metabolite bridge | `data/processed/OSD-522_deseq2.csv`, `results/osd522_metabolome_link/` |
| `13_osd522_proteome.py` | OSD-522 shoot proteome | `data/processed/OSD-522_proteome_shoot.csv`, `PROTEOME.md` |
| `14_export_metabolome_twin.py` | atlas panel data | `app/src/data/metabolome_spaceflight.json` |
| `15_build_showcase.py` | showcase page | `app/public/metabolome.html` |

Third-party supplements are git-ignored; `fetch` commands and checksums are in
[`data/raw/SUPPLEMENTARY_SOURCES.md`](data/raw/SUPPLEMENTARY_SOURCES.md). Column definitions for
every processed table: [`data/processed/DATA_DICTIONARY.md`](data/processed/DATA_DICTIONARY.md).
Python needs `pandas`, `numpy`, `scipy`, `matplotlib`, `openpyxl`, `xlrd` and `pydeseq2`.

## Status

This repository is under active construction. Rather than claim a finished product before
it exists, here's exactly where it stands:

- [x] Repo scaffold, licensing, citation metadata
- [x] Real data sourcing and provenance ledger (`data/`) — root (OSD-120) and whole-seedling
      (OSD-314) spaceflight response computed from real OSDR counts; TraVA linked out to
      rather than redistributed (see `data/README.md` for why)
- [x] Organ metadata + procedural structural generator (`app/src/organs.ts`,
      `app/src/geometry.ts`) — 5 organs, each geometry note disclosing exactly what is and
      isn't measured
- [x] Interactive 3D viewer (`app/`) — organ-selectable, real per-gene spaceflight data
      shown for Root; verified running locally
- [x] GitHub Pages deployment (`docs/`) — live at
      [dr-richard-barker.github.io/arabidopsis-atlas](https://dr-richard-barker.github.io/arabidopsis-atlas/),
      verified working (organ selection + real data panel) on the deployed site itself,
      not just locally
- [x] LaTeX manuscript, compiling to PDF and Word (`manuscript/`) — `make pdf docx`,
      every number sourced from `generated_numbers.tex`, which is itself generated from
      `data/processed/` and `app/src/organs.ts`, never hand-typed
- [x] ABAI review gate (`.abai/attest.json`) — clear verdict on file, re-checked after
      the manuscript was added
- [x] Metabolome × spaceflight layer (scripts 07–15): three natural-variation metabolome
      panels, OSD-522 transcriptome + proteome link, rosette-leaf panel, CoSE-themed showcase
      page; each push cleared by the ABAI gate
- [ ] Zenodo deposit (manual step, done last)

## Running it locally

```
npm install
npm run dev
```

## License

Code: MIT (see `LICENSE`). Data provenance and reuse terms for each external dataset are
recorded individually in `data/README.md`, since not everything upstream shares the same
license.

## Citation

See `CITATION.cff`.

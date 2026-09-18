# Data provenance ledger

Every external fact used anywhere in this repo (organ geometry, expression values,
spaceflight response) must have a row here. If it isn't here, it isn't verified — don't
cite it in the viewer, the manuscript, or the README.

## Confirmed sources (verified 2026-09-18)

| Source | What it provides | Verification | License / reuse |
|---|---|---|---|
| Klepikova Arabidopsis Atlas / TraVA (travadb.org) | RNA-seq expression, 25,706 genes × 79 organs/developmental stages | DOI confirmed via CrossRef: 10.1111/tpj.13312 (Klepikova et al. 2016, *Plant J* 88(6):1058-1070) | Stated "open-access" on-site; no explicit machine-readable license found. **Do not bulk-redistribute raw matrices until confirmed directly with TraVA** — link out / cite instead if unresolved by the time the viewer ships. |
| Shahan et al. 2022 root atlas | Single-cell root cell-type atlas (>110,000 cells), developmental trajectories | DOI confirmed via CrossRef: 10.1016/j.devcel.2022.01.008 (*Dev Cell* 57(4):543-560.e9) | Standard journal copyright; used here only as a literature source for root architecture parameters, not as redistributed data. |
| Vijayan et al. 2021 ovule atlas | Digital 3D cellular-resolution atlas of ovule development | DOI confirmed via CrossRef: 10.7554/eLife.63262 (*eLife* 10:e63262) | eLife — CC-BY 4.0 (eLife's standard license); safe to cite and derive proportions from. |
| NASA OSDR OSD-120 | *A. thaliana* root transcriptomics, light/gravity factors, spaceflight vs. ground control | Confirmed live via `osdr.nasa.gov/osdr/data/osd/meta/120` on 2026-09-18 | CC0 (public domain), citation requested per osdr.nasa.gov/bio/help/terms.html |
| NASA OSDR OSD-38 | *A. thaliana* seedling proteomics (iTRAQ) + RNA-seq, spaceflight vs. ground control | Confirmed live via `osdr.nasa.gov/osdr/data/osd/meta/38` on 2026-09-18 | CC0, citation requested |
| NASA OSDR OSD-314 | *A. thaliana* seedling RNA-seq, SpaceX-4/SpaceX-11, light × gravity gradient (1G/µG/0.34G) | Confirmed live via `osdr.nasa.gov/osdr/data/osd/meta/314` on 2026-09-18 | CC0, citation requested |
| NASA OSDR OSD-522 | *A. thaliana* root+shoot proteomics + transcriptomics, ISS BRIC-LED | Confirmed live via `osdr.nasa.gov/osdr/data/osd/meta/522` on 2026-09-18 | CC0, citation requested |

## Explicitly not used

- **Araport** (araport.org) — defunct since ~2018. Its Araport11 annotation is used only
  indirectly, where it's inherited by TAIR/Phytozome.
- **AtGenExpress** — no live portal as of this check; historical microarray compendium,
  accessed only via TAIR/BAR derivatives if ever needed, not cited as a primary source.
- **TAIR current-year data** — recent submissions sit behind a Phoenix Bioinformatics
  subscription with a 12-month embargo. Only openly-licensed TAIR bulk downloads
  (CC-BY-4.0) are in scope, and only if actually needed beyond what TraVA/OSDR provide.

## Decisions made while building this

- **TraVA/Klepikova**: no confirmed bulk-download API and no explicit machine-readable
  license was found (see above), so the viewer links out to `travadb.org` for real
  developmental expression instead of redistributing a matrix. This is a scope decision,
  not a fabrication workaround -- no invented expression numbers appear anywhere.
- **Spaceflight counts**: OSDR's per-study "files" API exposes only raw FASTQ/BAM/MultiQC
  outputs, not ready-made differential-expression tables. Rather than run an alignment
  pipeline from scratch, `data/raw/OSD-120_counts.csv` and `data/raw/OSD-314_counts.csv`
  (real GeneLab-processed gene-count matrices, originally fetched from
  `osdr.nasa.gov/osdr/data/osd/meta/{120,314}`) were reused from the already-fetched copies
  in the sibling `arabidopsis-drem-osdr` repo (same OSDR accessions, CC0, no license issue).
  `OSD-38` and `OSD-522` are real, confirmed-live studies (see table above) but their raw
  counts have not been fetched/processed here -- do not cite numbers for them, only the
  study metadata already confirmed.
- `scripts/01_compute_spaceflight_response.py` computes a **simple CPM-normalized mean
  log2 ratio** between real condition groups (Flight vs. Ground for OSD-120 by tissue;
  0g vs. 1g for OSD-314 by gravity level) -- explicitly not a statistically tested DE
  analysis (no DESeq2/edgeR, no p-values, no multiple-testing correction). Every number
  the viewer shows traces to `data/processed/*.csv`, which trace to this script, which
  reads only the raw counts above. See `scripts/02_export_viewer_data.py` for how the
  compact viewer JSON (`app/src/data/spaceflight_top_genes.json`) is derived from those
  processed tables -- nothing in the viewer's source is hand-typed.

## Pending

- [ ] If TraVA reuse terms are ever confirmed, consider pulling a real subset matrix
      instead of only linking out.
- [ ] OSD-38 / OSD-522 raw counts, if organ-specific spaceflight coverage beyond
      root (OSD-120) and whole-seedling (OSD-314) is wanted later.
- [ ] Extract the specific quantitative proportions used in the structural generator
      (e.g. root branching angles from Shahan et al., ovule cell-layer counts from
      Vijayan et al.) with page/figure references -- the current generator states the
      citation per organ but uses illustrative, not measured, parameter values
      (see `app/src/organs.ts` geometryNote fields).

## Rule

No number appears in `scripts/`, `app/`, or `manuscript/` unless it is traceable to a row
in this table (or a more specific provenance note next to where it's used). Anything not
yet verified is a TODO, never a plausible-looking placeholder.

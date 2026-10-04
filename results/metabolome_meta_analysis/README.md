# Cross-tissue metabolome GWAS: seed (Naake) × leaf control/stress (Wu) × leaf darkness (Zhu)

Compares three public *Arabidopsis thaliana* natural-variation metabolomics studies on the same
HapMap-derived panel, as a terrestrial baseline for interpreting spaceflight metabolism.
Numbers for the current run are in [RESULTS.md](RESULTS.md); this page explains what the data
are and how the analysis treats them.

## Studies

| Study | Tissue / treatment | Accessions | What we use |
|---|---|---|---|
| Naake et al. 2024, *Plant Physiol* 194(3):1705–1721, [doi:10.1093/plphys/kiad511](https://doi.org/10.1093/plphys/kiad511) | seeds, two growing seasons (rep 1, rep 2) | 315 | GWAS loci per mass feature for seed rep 1, seed rep 2, **leaf Wu** and **leaf Zhu**, all re-mapped by Naake with one pipeline; annotated-metabolite QTL (Tables S3/S4) |
| Wu et al. 2018, *Mol Plant* 11(1):118–134, [doi:10.1016/j.molp.2017.08.012](https://doi.org/10.1016/j.molp.2017.08.012) | leaves, control and stress | 309 | normalized intensities for identified metabolites (Table 3); per-condition GWAS loci at p < 1e-8 (Table 5) |
| Zhu et al. 2024, *Sci Data* 11:841, [doi:10.1038/s41597-024-03694-2](https://doi.org/10.1038/s41597-024-03694-2) | leaves, 0 d and 6 d darkness | 259 | per-accession BLUPs (Figshare), integrated earlier by scripts 07–08 |

Naake's "leaf Zhu" set comes from Zhu et al. 2022 (*Plant Cell* 34:557–578, dark-induced
senescence) — the same lab, panel and negative-mode platform as the 2024 data descriptor, which
cites it. The Wu stress condition is not specified in the abstract; the eight-condition
temperature × light experiment in Wu's Tables 7–11 is a separate time course, not the GWAS panel.

Raw supplements are git-ignored; fetch commands and checksums are in
[`data/raw/SUPPLEMENTARY_SOURCES.md`](../../data/raw/SUPPLEMENTARY_SOURCES.md).

## Pipeline

```bash
python3 scripts/07_fetch_darkness_metabolome.py fetch      # Zhu 2024 (if not already run)
python3 scripts/09_integrate_naake_seed_metabolome.py integrate
python3 scripts/10_integrate_wu_environmental_metabolome.py integrate
python3 scripts/11_cross_tissue_gwas_analysis.py analyze
```

Scripts 09–10 write tidy tables to `data/processed/metabolome/` (`naake_gwas_loci.csv.gz`,
`naake_annotated_*.csv`, `wu_*.csv`). Script 11 writes everything in this folder.

## Analyses and how to read them

**A. Naake locus sharing** — `naake_set_combinations.tsv`, `naake_lod_concordance.tsv`, `naake_locus_span_coverage.tsv`,
`plots/naake_set_combinations.png`. Each row of Naake's Supplemental Data Sets is one aligned
locus for one feature pair; we count which sets map it at LOD ≥ 5.3 (Naake's Fig. 1G threshold).
Our seed-replicate Spearman (0.526 neg / 0.509 pos) is close to the paper's 0.536 / 0.557; the
paper restricted to a stricter-matched "core set" that is not flagged in the files, so counts
here are over all aligned features.

**B. Wu control vs stress** — `wu_condition_regions.tsv`. Per-condition loci merged into
regions by bp overlap. Our region count and condition-specific share differ from the paper's
123 mQTL / 24.39% because the paper's region definition is not in the supplement.

**C. Same-metabolite locus concordance** — `metabolite_locus_concordance.tsv`. Naake annotated
metabolites are linked to Wu metabolites by formula and retention time (≤ 0.15 min); for each,
we ask whether Wu's leaf loci overlap Naake's seed or leaf loci, against the chance rate of a
random Wu locus. Naake reports loci only as gene-ID spans, so overlap is computed on AGI order
within a chromosome — an approximation of physical overlap.

**D. Leaf accession replication** — `leaf_accession_replication.tsv`,
`zhu_wu_metabolite_matches.tsv`, `plots/leaf_accession_replication.png`. Zhu and Wu metabolites
matched one-to-one (formula, then name, then retention time); Spearman across shared
accessions, BH-adjusted. Zhu reports 0 d and 6 d BLUPs for different metabolite subsets and Wu
detects some metabolites in one condition only, so each comparison has its own n.

**E. Accession overlap** — `accession_overlap.tsv`, `atlas_ecotype_coverage.tsv`, including the
six arabidopsis-atlas ecotypes. Seed peak tables use anonymous sample IDs, so seed data cannot
be compared at the accession level.

## What is not done

- No genome-wide gene-overlap test: at LOD ≥ 5.3 Naake's seed and leaf-Wu loci (median span
  270–460 AGI indices per distinct locus) together cover 98–99% of protein-coding genes, so such a
  test would be uninformative (`naake_locus_span_coverage.tsv`).
- No accession-level seed analysis (anonymous seed sample IDs).
- The link to the OSD-522 spaceflight transcriptome is in [`../osd522_metabolome_link/`](../osd522_metabolome_link/README.md) (script 12).

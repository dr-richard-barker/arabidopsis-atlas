# Data dictionary — processed metabolome and OSD-522 tables

Every file below is written by a script in `scripts/`; rerun the script rather than editing the
file. Sources and licences are in [`../README.md`](../README.md); third-party supplements and their
checksums in [`../raw/SUPPLEMENTARY_SOURCES.md`](../raw/SUPPLEMENTARY_SOURCES.md). Accession IDs use
the `ecotype.N` form shared by Zhu, Wu and Naake (1001 Genomes / HapMap ecotype numbers).

## `metabolome/` — terrestrial metabolome panels

| File | Script | One row per | Columns |
|---|---|---|---|
| `darkness_metabolome.csv` | 07 | metabolite × accession × timepoint (Zhu 2024) | `metabolite_id` (Zhu `Met.N`), `metabolite_name`, `accession`, `accession_idx` (row order in the source sheet), `timepoint` (`0d darkness` / `6d darkness`), `intensity` (BLUP as published), `metabolite_class` (`unknown` in this export) |
| `darkness_metabolome_digital_twin.csv` | 07 | same rows, upload format | `gene_or_label`, `day`, `value`, `condition`. **Known issue:** `day` holds `accession_idx`, not a growth day, and names containing commas are quoted, which the in-app CSV parser does not yet handle |
| `naake_gwas_loci.csv.gz` | 09 | GWAS set × aligned locus × feature pair (Naake 2024 Data Sets S2, S3) | `dataset` (`S2` positive, `S3` negative mode), `mode`, `row` (row in the source file — rows are Naake's alignment), `feature` (`met_rep1\|met_rep2` cluster IDs), `set` (`seed_rep1`, `seed_rep2`, `leaf_wu`, `leaf_zhu`), `locus_id`, `lod` (best SNP), `chrom`, `agi_start`, `agi_end` (AGI numeric part of the locus gene span) |
| `naake_annotated_metabolites.csv` | 09 | annotated metabolite (Naake Tables S1, S2) | columns as published, plus `mode` |
| `naake_annotated_qtl.csv` | 09 | annotated-metabolite QTL row (Naake Tables S3, S4) | `metabolite`, seed rep 1/2 and leaf `feature`/`LOD`/`locus` (AGI span), `mode` |
| `tair9_protein_coding.csv` | 09 | protein-coding gene (Naake Table S13, TAIR9) | `agi` |
| `wu_accessions.csv` | 10 | accession (Wu Supp. Table 1) | `no`, `accession`, `abrc` (stock ID), `accession_name` |
| `wu_identified_metabolites.csv` | 10 | identified metabolite (Wu Supp. Table 2) | peak IDs per condition × mode (`PC_`, `NC_`, `PS_`, `NS_`), `mz_pos`, `mz_neg`, `rt` (min), `formula`, `metabolite_class`, `metabolite_name`, `alias`, `id_level` (A–D) |
| `wu_leaf_identified_long.csv` | 10 | identified metabolite × accession × condition × mode (Wu Supp. Table 3) | `metabolite_name`, `accession`, `intensity` (normalized, as published), `condition` (`control`/`stress`), `mode` |
| `wu_gwas_loci.csv` | 10 | GWAS locus per condition × mode (Wu Supp. Table 5, p < 1e-8) | `condition`, `mode`, `locus_id`, `chrom`, `bp_start`, `bp_end`, `agi_start`, `agi_end`, `best_lod`, `n_genes`, `n_traits`, `traits` (peak IDs, `;`), `genes` (AGIs, `;`) |

## OSD-522 (BRIC-LED-001, Col-0 shoots)

| File | Script | One row per | Columns |
|---|---|---|---|
| `OSD-522_deseq2.csv` | 12 | gene with ≥ 10 reads | `agi`, `baseMean`, `log2fc` (flight / ground), `lfcSE`, `stat` (Wald), `pvalue`, `fdr` (BH) — PyDESeq2 on GeneLab RSEM counts |
| `OSD-522_proteome_shoot.csv` | 13 | protein × fraction | `fraction` (`SOL`/`MEM`), `uniprot`, `gene_name`, `confidence`, `log2fc`, `pvalue`, `adj_p` (provider TMT statistics), `agi` (`;`-joined if several), `single_agi` (true if exactly one AGI) |
| `OSD-522_uniprot_agi.csv` | 13 | UniProt accession | `uniprot`, `agi` (Araport cross-references, `;`), `release` (UniProt release used) |
| `OSD-522_flight_vs_ground_log2fc.csv` | 05 | gene | earlier mean-CPM ratio from GeneLab STAR counts; untested — use `OSD-522_deseq2.csv` for statistics |

## Results tables

Analysis outputs (TSV + PNG) live in `results/metabolome_meta_analysis/` (script 11) and
`results/osd522_metabolome_link/` (scripts 12–13); each folder's README describes its files. The
atlas panel's data, `app/src/data/metabolome_spaceflight.json`, is written by script 14, and the
showcase page `app/public/metabolome.html` by script 15.

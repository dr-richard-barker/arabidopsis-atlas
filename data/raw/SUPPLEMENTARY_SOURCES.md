# Third-party supplementary data — provenance

The two folders below are git-ignored (636 MB and 101 MB; several files exceed
GitHub's 100 MB limit). Re-fetch with the commands here; verify with the
SHA-256 prefixes in the manifest. Downloaded 2026-09-27.

## Naake et al. — `naake_2024_supplementary/`

Naake T, et al. *Genome-wide association studies identify loci controlling
specialized seed metabolites in Arabidopsis.* Plant Physiology 194(3):1705–1721.
doi:10.1093/plphys/kiad511 (online 2023-09-27; PMID 37758174; PMC10904349, open access).

```bash
curl -L -o naake_suppl.zip "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10904349/supplementaryFiles"
unzip naake_suppl.zip kiad511_supplementary_data.zip
unzip kiad511_supplementary_data.zip -d data/raw/naake_2024_supplementary/
```

Contents (from the sheet/file headers):
- `PP2023RA01091D_Supplemental_Tables.xlsx` — Tables S1–S14: annotated metabolites
  (neg/pos mode, S1–S2), QTL for annotated metabolites (S3–S4), SALK-line
  validation (S7–S10), TAIR9 locus info (S13), germination RNA-seq (S14).
- `Supplemental Dataset S1–S3 …txt` — full GWAS loci tables; columns report
  `seed1`, `seed2` **and** `leaf2` loci per feature, so Naake already carries a
  seed-vs-leaf comparison.
- `Supplemental Dataset S4_peaktable …/` — raw matched peak tables (rep1, rep2,
  and `rep_zhu_negative_match.csv`).
- `Supplemental_Dataset_S5_QTL seed …xls` — seed QTL matrix.
- Two near-duplicate PDFs of the supplementary figures/methods.

## Wu et al. — `wu_2017_supplementary/`

Wu S, Tohge T, et al. *Mapping the Arabidopsis Metabolic Landscape by Untargeted
Metabolomics at Different Environmental Conditions.* Molecular Plant 11(1):118–134
(issue dated 2018-01). doi:10.1016/j.molp.2017.08.012. Not open access in PMC;
supplementary files are served by Elsevier's CDN:

```bash
for f in mmc1.docx mmc{2..11}.xlsx; do
  curl -A "Mozilla/5.0" -o "data/raw/wu_2017_supplementary/$f" \
    "https://ars.els-cdn.com/content/image/1-s2.0-S1674205217302423-$f"
done
```

File → table (from each sheet's title row):

| File | Supplementary Table |
|---|---|
| mmc1.docx | Supplemental information document |
| mmc2.xlsx | T1 — 309 accessions |
| mmc3.xlsx | T2 — identified metabolites |
| mmc4.xlsx | T3 — normalized GWAS data; sheets for control **and** stress |
| mmc5.xlsx | T5 — significant associations, p < 1e-8 (LOD > 8); 4 sheets: control/stress × pos/neg |
| mmc6.xlsx | T6 — reference genes for five metabolite classes |
| mmc7.xlsx | T7 — stress time-course, normalized data (positive and negative mode, one sheet each) |
| mmc8.xlsx | T8 — MapMan BINs, stress time-course |
| mmc9.xlsx | T11 — conserved metabolite–transcript associations |
| mmc10.xlsx | T12 — 42 key trait–locus associations |
| mmc11.xlsx | T13 — polymorphisms causing AA change / premature stop |

Tables 4, 9 and 10 have no separate file on the CDN (checked mmc1–mmc20);
they are inside mmc1.docx. The 309-accession panel was grown under both control
and stress conditions (abstract); the eight-condition time-course (T7–T11) is a
separate experiment.

## Wu et al. 2016 — `wu_2016_supplementary/`

Wu S, Alseekh S, Cuadros-Inostroza Á, Fusari CM, Mutwil M, Kooke R, Keurentjes JB, Fernie AR,
Willmitzer L, Brotman Y. *Combined use of genome-wide association data and correlation networks
unravels key regulators of primary metabolism in Arabidopsis thaliana.* PLoS Genetics
12(10):e1006363 (2016). doi:10.1371/journal.pgen.1006363 (PMC5070769, CC BY 4.0). Fetched
2026-10-22 by `python3 scripts/16_fetch_wu2016_primary.py fetch`, which saves each item under a
descriptive name:

```bash
curl -L -o S1_Dataset_primary_metabolites.xlsx \
  "https://journals.plos.org/plosgenetics/article/file?type=supplementary&id=10.1371/journal.pgen.1006363.s001"
# s012 -> S1_Table_accessions.xlsx, s013 -> S2_Table_metabolites.xlsx
```

- S1 Dataset: normalized GC-MS intensities, 94 metabolites × 314 rows. ecotype.6046 (Lov-5)
  appears twice with different values; script 16 drops both rows.
- S1 Table: 314 accessions (ecotype.N, ABRC stock, name). S2 Table: metabolite ID, name, class,
  quantification mass.

## MetaboLights result tables — `metabolights_maf_cache/`

Script 18 caches the MAF result tables of the 70 *A. thaliana* studies that have one (83 MB,
2026-10-22) only to extract metabolite names into
`processed/metabolome/metabolights_maf_names.csv.gz`. No abundance values leave the cache.
Re-fetch with `python3 scripts/18_fetch_metabolights_catalogue.py names`.

## Manifest (size in bytes, SHA-256 first 16 hex)

| File | Bytes | SHA-256 |
|---|---|---|
| `naake_2024_supplementary/PP2023RA01091D_Supplemental_Tables.xlsx` | 14479844 | `367e4d4c193d2baa` |
| `naake_2024_supplementary/Supplemental Dataset S1_gwas_complete_met_all_trueLociLOD_neg Thomas Naake.txt` | 39741236 | `b9843355b4320d47` |
| `naake_2024_supplementary/Supplemental Dataset S2_gwas_complete_met_all_trueLociLOD_pos Thomas Naake.txt` | 56266664 | `025189b1bd1b8169` |
| `naake_2024_supplementary/Supplemental Dataset S3_gwas_complete_met_all_trueLociLOD_rep12_normalized_neg Thomas Naake.txt` | 47487967 | `59023b17a745e5dd` |
| `naake_2024_supplementary/Supplemental Dataset S4_peaktable Thomas Naake/rep1_negative_match.csv` | 45955418 | `6ad45a742b2e9ed7` |
| `naake_2024_supplementary/Supplemental Dataset S4_peaktable Thomas Naake/rep1_positive_match.csv` | 89053548 | `8f31b880b780cbfe` |
| `naake_2024_supplementary/Supplemental Dataset S4_peaktable Thomas Naake/rep2_negative_match.csv` | 93665188 | `8e0b0fa908c4bcc4` |
| `naake_2024_supplementary/Supplemental Dataset S4_peaktable Thomas Naake/rep2_positive_match.csv` | 175699593 | `8ea179b471c453e1` |
| `naake_2024_supplementary/Supplemental Dataset S4_peaktable Thomas Naake/rep_zhu_negative_match.csv` | 15884180 | `3ea3cadd5b2982b4` |
| `naake_2024_supplementary/Supplemental-Data (2).pdf` | 43843326 | `0e907d1b271fc804` |
| `naake_2024_supplementary/SupplementalData Thomas Naake.pdf` | 43841446 | `fa7181761da45a39` |
| `naake_2024_supplementary/Supplemental_Dataset_S5_QTL seed Thomas Naake.xls` | 914432 | `ca055f29ed886ca4` |
| `wu_2017_supplementary/mmc1.docx` | 6557415 | `23ee677869a4297c` |
| `wu_2017_supplementary/mmc2.xlsx` | 23838 | `1ed10de7782d951d` |
| `wu_2017_supplementary/mmc3.xlsx` | 36180 | `1cc1223ea1b13caa` |
| `wu_2017_supplementary/mmc4.xlsx` | 27745460 | `fee54b8b7b2b966e` |
| `wu_2017_supplementary/mmc5.xlsx` | 4225418 | `f46172aa4b4c1779` |
| `wu_2017_supplementary/mmc6.xlsx` | 55348 | `87f9e815511a37db` |
| `wu_2017_supplementary/mmc7.xlsx` | 20196111 | `ab8526766adfdc6b` |
| `wu_2017_supplementary/mmc8.xlsx` | 88210 | `7c1080b45b9f2b6c` |
| `wu_2017_supplementary/mmc9.xlsx` | 43118704 | `bf23d68371623e5e` |
| `wu_2017_supplementary/mmc10.xlsx` | 35567 | `81564246312f3fde` |
| `wu_2017_supplementary/mmc11.xlsx` | 39224 | `dadc525d47f01692` |
| `wu_2016_supplementary/S1_Dataset_primary_metabolites.xlsx` | 452219 | `af9ea9a58718045e` |
| `wu_2016_supplementary/S1_Table_accessions.xlsx` | 22843 | `f66bbe093a74eae6` |
| `wu_2016_supplementary/S2_Table_metabolites.xlsx` | 16189 | `a0f6f26c23184e6c` |

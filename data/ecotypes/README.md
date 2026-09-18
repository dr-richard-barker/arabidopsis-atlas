# Ecotype trait provenance ledger

Same rule as `data/README.md`: nothing here is cited unless it's verified, and nothing
drives the viewer's geometry unless it traces to a row in this table or an explicit
"illustrative, not measured" disclosure in `app/src/ecotypes.ts`.

## Confirmed sources (verified 2026-09-18)

| Source | What it provides | Verification | License / reuse |
|---|---|---|---|
| Camargo et al. 2014, *PLoS ONE* 9(5):e96889 | Real, image-derived rosette-shape descriptors (Compactness, Roundness, Excentricity, Area, …) for all 19 *Arabidopsis* MAGIC founder accessions, incl. Col-0, Ler-0, Ws-0, Tsu-0, Edi-0 | DOI confirmed via CrossRef: 10.1371/journal.pone.0096889. Raw data downloaded directly from the paper's own Methods S2 supplementary archive (`https://doi.org/10.1371/journal.pone.0096889.s016`) — `plosone_rawdata.csv`, 1140 rows, real column headers (`ecotype`, `Compactness`, `Roundness`, …), copied verbatim into `data/raw/camargo2014_rosette_descriptors.csv` | PLOS ONE's standard policy publishes all article content, including supporting information, under CC BY 4.0 |
| Morón-García et al. 2022, *PLoS ONE* 17(2):e0263985 | Same shape-descriptor approach extended to 485 RILs of the same 19-founder MAGIC population | DOI confirmed via CrossRef: 10.1371/journal.pone.0263985 | CC BY 4.0 (PLOS ONE). **Not used quantitatively here** — its S1 Data is RIL-averaged, not broken out by parental accession name, so extracting a clean Col-0/Ler-0/Ws-0 value from it would require re-deriving founder identity from RIL pedigrees, which wasn't done this pass. Cited as corroborating context only. |
| Torii et al. 1996, *Plant Cell* 8(4):735-746 | Cloning/characterization of ERECTA (*ER*); establishes that Ler carries the natural *er* mutation ("compact inflorescence, blunt fruits, and short petioles") and that Col and Ws are ER wild-type (separate *er* mutant alleles were isolated experimentally from those backgrounds) | DOI confirmed via CrossRef: 10.1105/tpc.8.4.735. Verbatim abstract quote used, not paraphrased from a review. | Standard journal copyright; cited, not reproduced beyond the one quoted sentence. |
| Bundy et al. 2012, *PLoS ONE* 7(9):e46262 | Quantitative pedicel-length effect of the *er-105* allele: mature wild-type pedicel 7.90±0.14mm vs. ~2.6× shorter in *er-105* | DOI confirmed via CrossRef: 10.1371/journal.pone.0046262 | CC BY 4.0 (PLOS ONE). **Caveat carried into the app UI**: this is the induced *er-105* allele in a Columbia background, not a direct field measurement of natural Ler vs. Col — used as the best available quantitative proxy for what the mutation does, not as a literal Ler measurement. |
| Coneva & Chitwood 2018, *Front. Plant Sci.* 9:322 | Cvi vs. Ler: Cvi makes ~2 more leaves than Ler in long-day conditions; Cvi leaves are thicker; Cvi grows more slowly | DOI confirmed via CrossRef: 10.3389/fpls.2018.00322 | Open access. Exact µm leaf-thickness values sit in the paper's figures and were not extracted — the leaf-thickness *multiplier* used in the app (1.25×) is our own illustrative choice representing this real qualitative finding, not a number read from the paper. |
| Namin et al. 2018, *Plant Methods* 14:66 | Real, accession-labeled top-down rosette photos: Col-0, Ler-1, Cvi, and Sf-2 (one photo/plant/day over 22 days) | DOI confirmed via CrossRef: 10.1186/s13007-018-0333-4 | CC BY 4.0. Hosted on Figshare (`https://figshare.com/s/e18a978267675059578f`); linked to, not re-hosted, in this repo. |

## Explicitly not used / gaps disclosed

- **AraPheno** (arapheno.1001genomes.org): real, live REST API, confirmed reachable, and
  it does carry some rosette/architecture phenotypes (e.g. "Rosette Erect 22," "rosetteDM")
  — but its *dataset-level* reuse license is unconfirmed (only the describing paper's own
  CC BY-NC 4.0 was found, not a data-specific statement), so it is cited/linked only, never
  bulk-redistributed, same treatment as TraVA in the main atlas.
- **Kearsey et al. 2004, *Euphytica*** (Ler×Cvi RIL morphology QTL paper — 43 QTL across
  height/leaf/flowering traits): real paper, but its actual trait-value tables are
  paywalled. No numbers were extracted from it; it is not cited for specific values.
- **Ws reference photos**: no accession-labeled photo of Ws was found in this research
  (Namin et al. 2018 covers Col-0/Ler-1/Cvi/Sf-2, not Ws). `ecotypes.ts` sets Ws's
  `referencePhoto` to `null` rather than substituting an uncredited or wrong image.
- **Cvi-0 rosette-compactness/roundness/area**: Cvi-0 is not one of the 19 MAGIC founders,
  so it has no value in the Camargo et al. 2014 dataset used here. `ecotypes.ts` defaults
  Cvi-0's compactness/radius-scale to the Col-0 value rather than estimating one, and says
  so in the UI.
- **ERECTA status of Ws, Cvi-0, Tsu-0, Edi-0**: only Col and Ws are directly named as
  ER-wild-type backgrounds in Torii et al. 1996 (via the induced alleles isolated from
  them). Cvi-0/Tsu-0/Edi-0 are *assumed* ER wild-type by default (most non-Landsberg
  accessions are), which is disclosed as an assumption, not confirmed per-accession.

## Rule

Same as `data/README.md`: no number in `app/src/ecotypes.ts` or `app/src/geometry.ts`
exists without either a row above or an explicit "illustrative"/"default, not confirmed"
label in the code itself.

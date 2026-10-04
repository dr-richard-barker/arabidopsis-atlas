# OSD-522 spaceflight transcriptome and proteome × terrestrial metabolome baselines

Links the natural-variation metabolome studies in
[`../metabolome_meta_analysis/`](../metabolome_meta_analysis/README.md) to NASA OSDR
[OSD-522](https://osdr.nasa.gov/bio/repo/data/studies/OSD-522) (BRIC-LED-001): *A. thaliana*
Col-0 seedlings grown 10 days on the ISS in BRIC-LED hardware, shoots, 6 flight vs 6 ground
controls. Numbers for the current run are in [RESULTS.md](RESULTS.md) (transcriptome) and
[PROTEOME.md](PROTEOME.md) (proteome).

**Scope.** No metabolite was measured in flight; OSDR holds no plant metabolomics. Every link
here is at the gene level: do the genes behind each metabolite class, as defined by
Wu et al. 2018, shift in the flight transcriptome and proteome? The terrestrial studies then say what
those metabolites do in the flown genotype (Col-0) and under darkness or stress.

```bash
python3 scripts/12_link_osd522.py fetch     # GeneLab RSEM counts + runsheet from OSDR
python3 scripts/12_link_osd522.py analyze   # needs scripts 07, 09, 10, 11 outputs
python3 scripts/13_osd522_proteome.py fetch     # shoot protein reports (SOL, MEM) from OSDR
python3 scripts/13_osd522_proteome.py analyze   # needs script 12 outputs
```

## Methods

- **Differential expression.** PyDESeq2 on GeneLab's RSEM unnormalised counts (genes with
  ≥ 10 reads); groups read from the OSDR runsheet, not sample names. Output:
  `data/processed/OSD-522_deseq2.csv`. When the sibling repo `Photorespiration_multiomics_microgravity` is present, the
  script compares its FDR < 0.05 calls with that repo's independent run
  (`T01_osd522_transcriptome.tsv`) and reports the agreement in RESULTS.md.
- **Gene sets.** (a) Wu Supplementary Table 6 reference genes for five metabolite classes.
  Note that Wu's "amines" list includes general genes such as RNA-polymerase subunits.
  (b) All genes inside Wu GWAS loci (LOD > 8) whose traits include an identified metabolite of
  that class.
- **Set tests.** A Mann-Whitney test of each set's Wald statistics against all other genes,
  reported for reference; it assumes independent genes and overstates significance for
  co-regulated pathways. Conclusions rest on a **permutation test**: the 12 samples are
  relabelled in all 924 possible 6-vs-6 ways and the set's mean Welch t (relative to all
  genes) is compared with its null. This keeps gene–gene correlation. The smallest
  attainable p is about 0.002.
- **Metabolite bridge** (`metabolite_flight_bridge.tsv`). For each Wu identified metabolite:
  Col-0's percentile among Wu accessions; the median across accessions of Wu (stress − control)
  and of Zhu (6 d − 0 d darkness), for metabolites matched in script 11; and the flight fold
  change of that metabolite's own GWAS-locus genes and its class's pathway genes.

- **Proteome** (script 13). OSDR's shoot protein reports are two TMT 6-plex experiments —
  soluble (SOL) and membrane (MEM) fractions — each 3 flight vs 3 ground "in triplicates", with
  the provider's flight/ground log2 ratio and ANOVA p-values (OSD-522 ISA protocol text). We use
  the provider's statistics; the script checks they agree with log2(mean flight / mean ground) of
  the normalized channel abundances and reports the Spearman in PROTEOME.md. UniProt accessions
  are mapped to AGI through UniProt's Araport cross-references, cached in
  `data/processed/OSD-522_uniprot_agi.csv` with the UniProt release; proteins mapping to more than
  one AGI are left out of gene-level comparisons. With 3 vs 3 there are only 20 relabellings, so
  no permutation test is possible; protein set results are descriptive, with an
  anti-conservative Mann-Whitney for reference.

## Files

| File | Content |
|---|---|
| `pathway_flight_shift.tsv` / `.png` | set tests per class. In the plot, x is the median Wald statistic and a filled marker means permutation BH q < 0.05; the permutation test uses the mean, so a set near zero can still be filled. |
| `metabolite_flight_bridge.tsv` | one row per Wu identified metabolite |
| `RESULTS.md` | transcriptome run summary with all numbers |
| `proteome_transcript_concordance.tsv` | per fraction: transcript–protein Spearman, and sign agreement for significant proteins |
| `proteome_pathway_shift.tsv` | per fraction × class: protein median log2 ratio, significant up/down counts, transcript median for the same genes |
| `proteome_vs_transcript.png` | dumbbell of the previous table: transcript vs protein median for the same detected genes |
| `PROTEOME.md` | proteome run summary with all numbers |

## Caveats

- BRIC-LED is lit, so flight is not darkness. The Zhu comparison asks whether flight
  transcript shifts resemble a terrestrial stress response, not whether flight is dark.
- Transcript change in a biosynthetic pathway does not fix the direction of metabolite pool
  size; for example, free amino acids can rise from protein breakdown while synthesis genes fall.
- Proteomics is 3 vs 3 per fraction and relies on the provider's ANOVA; treat protein-level
  set results as descriptive.
- Wu's stress condition is not specified in the abstract we could access. Class-level Zhu
  darkness values rest on 0–5 metabolites per class.
- Developmental stage differs: the flight plants were 10-day seedlings (OSDR protocol), while
  Zhu's were 35-day soil-grown plants under short days (Zhu 2024 methods). TODO: Wu's growth stage
  is in the paywalled methods and has not been checked.

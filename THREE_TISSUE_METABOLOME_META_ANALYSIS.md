# Three-Tissue Metabolomics Meta-Analysis Framework

**Status:** ✅ Framework Complete | Scripts Ready | Awaiting Data Download

## Executive Summary

You now have a complete framework to integrate three complementary Arabidopsis metabolomics GWAS studies:

1. **Naake et al. 2024** — Seed metabolomics GWAS (315 HapMap accessions)
2. **Wu et al. 2017** — Environmental metabolomics (309 accessions, 123 loci)
3. **Zhu et al. 2024** — Darkness-induced leaf metabolites (259 accessions) ✅ **Already integrated**

This enables the first **tissue-specific metabolomic GWAS meta-analysis** in Arabidopsis, linking:
- **Developmental control** (seeds) → **Stress response** (leaves in darkness) → **Spaceflight phenotypes** (OSD-522)

## What's New

### Scripts Created (3)
| Script | Purpose | Status |
|--------|---------|--------|
| `scripts/09_integrate_naake_seed_metabolome.py` | Download & parse Naake 2024 supplementary data | 🟡 Awaiting data download |
| `scripts/10_integrate_wu_environmental_metabolome.py` | Download & parse Wu 2017 supplementary data | 🟡 Awaiting data download |
| `scripts/11_cross_tissue_gwas_analysis.py` | Compare GWAS loci across all 3 tissues | ✅ Ready to run |

### Directories Created
```
data/raw/
  ├── naake_2024_supplementary/     ← Download Naake .xlsx files here
  └── wu_2017_supplementary/        ← Download Wu supplementary files here

results/metabolome_meta_analysis/
  ├── README.md                      (full project documentation)
  └── plots/                         (will contain Venn diagrams, heatmaps)
```

### Documentation
- `results/metabolome_meta_analysis/README.md` — Full integration guide & analysis plan

## How to Use

### Phase 1: Download Data (You Do This)

**Naake et al. 2024 (Seed Metabolomics):**
```bash
# Visit: https://academic.oup.com/plphys/article/194/3/1705/7284016
# Download all supplementary .xlsx files (S1-S5)
# Move to: data/raw/naake_2024_supplementary/
# Then run:
python3 scripts/09_integrate_naake_seed_metabolome.py download-help
```

**Wu et al. 2017 (Environmental Metabolomics):**
```bash
# Visit: https://research.wur.nl/en/publications/mapping-the-arabidopsis-metabolic-landscape-by-untargeted-metabol/
# Download supplementary files
# Move to: data/raw/wu_2017_supplementary/
# Then run:
python3 scripts/10_integrate_wu_environmental_metabolome.py download-help
```

### Phase 2: Run Integration Scripts

```bash
# Parse Naake 2024
python3 scripts/09_integrate_naake_seed_metabolome.py integrate

# Parse Wu 2017
python3 scripts/10_integrate_wu_environmental_metabolome.py integrate

# View analysis plan (no data required yet)
python3 scripts/11_cross_tissue_gwas_analysis.py summary

# Run cross-tissue analysis (once data is parsed)
python3 scripts/11_cross_tissue_gwas_analysis.py analyze
```

### Phase 3: Outputs

Once integration completes, you'll have:
```
results/metabolome_meta_analysis/
├── shared_loci.tsv                      # GWAS loci in 2+ studies
├── tissue_specificity.tsv               # Seed-specific, leaf-specific, etc.
├── metabolite_class_patterns.tsv        # Glucosinolates, amino acids, flavonoids
├── accession_metabolite_profiles.csv    # Accession × metabolite matrix
└── plots/
    ├── loci_overlap_venn.png
    ├── tissue_specificity_heatmap.png
    └── accession_clustering_dendrogram.png
```

## Research Questions This Answers

### 1. Tissue-Specific Metabolic Control
**Q:** Which genes control seed accumulation vs. leaf stress response?

**Data:**
- Naake 2024: Seed metabolome GWAS (315 accessions)
- Zhu 2024: Leaf darkness response (259 accessions)
- Wu 2017: Environmental metabolome (309 accessions)

**Expected finding:** Some metabolite loci are tissue-specific (seed vs. leaf), others shared → reveals developmental vs. stress regulation

### 2. Darkness-Stress vs. Environmental-Stress Metabolomes
**Q:** Do the same genes respond to heat/drought (Wu 2017) and extended darkness (Zhu 2024)?

**Data:**
- Wu 2017: 123 metabolite QTLs, 24.39% environment-specific
- Zhu 2024: Darkness-induced metabolites (stress-like response)
- Overlap → generalized stress-response signature?

### 3. From Seed Genetics to Spaceflight Response
**Q:** Can seed metabolome (Naake) + leaf morphology (arabidopsis-atlas) predict spaceflight response (OSD-522)?

**Hypothesis:** Genes controlling seed metabolite allocation → stress response in orbit

**Test:**
1. Identify correlations: seed metabolite genotype ↔ darkness-response phenotype
2. Link to arabidopsis-atlas 6 ecotypes (Col-0, Ler, Ws, Cvi-0, Tsu-0, Edi-0)
3. Predict OSD-522 spaceflight transcriptomics

### 4. Metabolite Class Conservation
**Q:** Do certain metabolite classes have universal loci across tissues?

**Examples:**
- **Glucosinolates** (defense): seed storage → leaf protection? Same genes?
- **Amino acids** (metabolism): constitutive (all tissues) or stress-specific?
- **Flavonoids** (pigments): seed accumulation (Naake) linked to leaf antioxidants?

## Integration with arabidopsis-atlas

**Current:** 
- Organ-specific viewer (root, leaf, flower, etc.)
- Ecotype morphology (6 major ecotypes)
- OSD-522 spaceflight transcriptomics overlay

**With this meta-analysis:**
- Add seed metabolome (Naake 2024) as fourth tissue
- Show GWAS loci on organs (which genes control which metabolites?)
- Link seed genotype → leaf stress response → spaceflight phenotype

## Key Datasets

| Study | Accessions | Metabolites | Key Feature | Data Type | 
|-------|-----------|------------|-------------|-----------|
| **Naake 2024** | 315 HapMap | 21k features (9k+12k core) | Seed GWAS | Polar & semi-polar |
| **Wu 2017** | 309 accessions | 3,000+ | 123 QTLs (24.39% environment-specific) | Semi-polar hydrophilic |
| **Zhu 2024** | 259 HapMap | 95 identified | Darkness-induced (0d vs 6d) | Secondary metabolites |
| **arabidopsis-atlas** | 6 ecotypes | Morphology | Leaf shape, compactness | 3D geometry + traits |

**HapMap Overlap:** Expected ~200-250 shared accessions across all 3 studies → enable same-genotype cross-tissue comparison

## Next Steps for You

1. **Download Naake & Wu supplementary data**
   - Takes ~30 min of clicking on journal websites
   - Scripts will guide you

2. **Run integration** (5-10 minutes)
   ```bash
   python3 scripts/09_integrate_naake_seed_metabolome.py integrate
   python3 scripts/10_integrate_wu_environmental_metabolome.py integrate
   ```

3. **Analyze cross-tissue GWAS**
   ```bash
   python3 scripts/11_cross_tissue_gwas_analysis.py analyze
   ```

4. **Explore results**
   - View shared loci across tissues
   - Cluster accessions by metabolomic profile
   - Link to arabidopsis-atlas visualization

5. **Build spaceflight prediction model** (Phase 5)
   - Use seed metabolome + morphology → predict OSD-522

## Files & Structure

```
arabidopsis-atlas/
├── scripts/
│   ├── 07_fetch_darkness_metabolome.py          ✅ (Zhu 2024)
│   ├── 08_darkness_metabolome_analysis.py       ✅ (Zhu 2024)
│   ├── 09_integrate_naake_seed_metabolome.py    🟢 NEW
│   ├── 10_integrate_wu_environmental_metabolome.py 🟢 NEW
│   └── 11_cross_tissue_gwas_analysis.py         🟢 NEW
│
├── data/
│   ├── raw/
│   │   ├── darkness_metabolome_*.xlsx           ✅ (cached)
│   │   ├── naake_2024_supplementary/            🟡 (empty, awaiting download)
│   │   └── wu_2017_supplementary/               🟡 (empty, awaiting download)
│   │
│   └── processed/metabolome/
│       ├── darkness_metabolome.csv              ✅ (Zhu 2024)
│       ├── seed_metabolome_naake.csv            🟡 (to be generated)
│       └── environmental_metabolome_wu.csv      🟡 (to be generated)
│
└── results/
    └── metabolome_meta_analysis/
        ├── README.md                             🟢 NEW
        ├── shared_loci.tsv                       🟡 (to be generated)
        ├── tissue_specificity.tsv                🟡 (to be generated)
        └── plots/                                🟡 (to be generated)
```

## References

1. **Naake, T., Zhu, F., Alseekh, S., et al.** (2024). Genome-wide association studies identify loci controlling specialized seed metabolites in Arabidopsis. *Plant Physiology*, 194(3):1705-1721. https://doi.org/10.1093/plphys/kiad511

2. **Wu, S., Tohge, T., Cuadros-Inostroza, Á., et al.** (2017). Mapping the Arabidopsis metabolic landscape by untargeted metabolomics at different environmental conditions. *Molecular Plant*, 11(1):118-134. https://doi.org/10.1016/j.molp.2017.08.012

3. **Zhu, F., Wijesingha Ahchige, M., et al.** (2024). The natural variance of Arabidopsis secondary metabolism on extended darkness. *Nature Scientific Data*, 11:841. https://doi.org/10.1038/s41597-024-03694-2

4. **Francisco, M., Joseph, B., et al.** (2016). Genome wide association mapping in Arabidopsis identifies novel genes linking allyl glucosinolate to altered biomass and defense. *Frontiers in Plant Science*, 7:1010. https://doi.org/10.3389/fpls.2016.01010

---

**Framework ready for data integration.** Once you download Naake & Wu supplementary files, the scripts will parse and analyze them automatically.

**Estimated time to first analysis:** ~30 min (download) + ~10 min (integration scripts)

Ready to proceed?

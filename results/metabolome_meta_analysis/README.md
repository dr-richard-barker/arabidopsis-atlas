# Metabolome Meta-Analysis: Three-Tissue GWAS Integration

**Status:** Framework Ready | Data Integration Pending | Analysis Scripts Ready

## Overview

This directory contains the integration and analysis of three complementary Arabidopsis metabolomics GWAS studies:

| Study | Tissue | Accessions | Metabolites | Timepoint | Year | DOI |
|-------|--------|-----------|------------|-----------|------|-----|
| **Naake et al.** | Seeds | 315 HapMap | 21k features → 9k+12k core | Development | 2024 | 10.1093/plphys/kiad511 |
| **Zhu et al.** | Leaves | 259 HapMap | 95 identified | 0d baseline, 6d darkness | 2024 | 10.1038/s41597-024-03694-2 |
| **Wu et al.** | Mixed | 309 accessions | 3,000+ metabolites | Control + stress | 2017 | 10.1016/j.molp.2017.08.012 |

## Research Questions

1. **Tissue Specificity**: Which metabolites are tissue-specific vs. ubiquitous? Which genes control seed accumulation vs. leaf stress response?

2. **Genetic Architecture Overlap**: Do the same GWAS loci control metabolites across seeds, leaves, and environmental stress conditions?

3. **Shared Metabolite QTLs**: 
   - Francisco 2016: glucosinolates linked to biomass/defense
   - Naake 2024: seed glucosinolates GWAS
   - Zhu 2024: darkness-induced secondary metabolites
   - → Are these controlled by the same genes?

4. **Environmental vs. Developmental Control**:
   - Wu 2017: 24.39% of loci are environment-specific
   - Zhu 2024: darkness response (stress-like)
   - → Do the same genes respond to heat/drought (Wu) and darkness (Zhu)?

5. **Pre-Flight Prediction Model**:
   - Seed metabolome (Naake 2024) + ecotype morphology (arabidopsis-atlas)
   - Predict leaf metabolic response to darkness (Zhu 2024)
   - Validate on spaceflight phenotype (OSD-522 transcriptomics)
   - Question: Can we predict ISS response from terrestrial genetics?

## Data Integration Workflow

### Step 1: Download Supplementary Data

#### Naake et al. 2024 (Seed Metabolomics GWAS)
```bash
# From: https://academic.oup.com/plphys/article/194/3/1705/7284016
# Download all supplementary .xlsx files (S1-S5) and place in:
# data/raw/naake_2024_supplementary/

python3 scripts/09_integrate_naake_seed_metabolome.py download-help
```

**Expected files:**
- Supplemental Data S1: Accession information & heritability
- Supplemental Data S2: Metabolite identifications (LC-MS polar/semi-polar, 21k features)
- Supplemental Data S3: GWAS results (SNP × metabolite associations)
- Supplemental Data S4: Locus annotations
- Supplemental Data S5: Network/pathway results

#### Wu et al. 2017 (Environmental Metabolomics)
```bash
# From open access: https://research.wur.nl/en/publications/mapping-the-arabidopsis-metabolic-landscape-by-untargeted-metabol/
# or: https://edepot.wur.nl/426556

python3 scripts/10_integrate_wu_environmental_metabolome.py download-help
```

**Expected files:**
- Supplementary Tables 1-5 (accession data, metabolite intensities, QTLs)
- 309 accessions × 3,000+ metabolites matrix
- 123 environment-specific/shared metabolite loci

#### Zhu et al. 2024 (Darkness Metabolomics)
✅ **Already integrated**: `data/processed/metabolome/darkness_metabolome_digital_twin.csv`

### Step 2: Parse and Integrate Data

```bash
# Parse Naake supplementary data
python3 scripts/09_integrate_naake_seed_metabolome.py integrate

# Parse Wu supplementary data
python3 scripts/10_integrate_wu_environmental_metabolome.py integrate

# Analyze cross-tissue GWAS loci overlap
python3 scripts/11_cross_tissue_gwas_analysis.py analyze
```

### Step 3: Generate Cross-Tissue Analysis

Output files will be created in `results/metabolome_meta_analysis/`:

```
├── shared_loci.tsv                  # SNPs shared across 2+ studies
├── tissue_specificity.tsv           # Seed-only, leaf-only, environmental-only loci
├── metabolite_class_patterns.tsv    # Glucosinolates, amino acids, flavonoids, etc.
├── accession_metabolite_profiles.csv # Mean metabolite intensities by accession & tissue
├── loci_overlap_summary.txt         # Narrative findings
└── plots/
    ├── loci_overlap_venn.png        # 3-way overlap of GWAS loci
    ├── tissue_specificity_heatmap.png
    └── accession_clustering_dendrogram.png
```

## Key Findings Expected

### Tissue-Specific Metabolic Control
- **Seed-specific loci** (Naake only): developmental regulation of seed reserves
- **Leaf-stress loci** (Zhu darkness): response to photosynthetic limitation
- **Environment-specific loci** (Wu): conditional metabolic plasticity
- **Shared loci** (2-3 studies): core housekeeping metabolite synthesis

### Metabolite Class Patterns
- **Glucosinolates**: likely conserved loci (seed storage → leaf defense)
- **Amino acids**: universal or stress-specific?
- **Flavonoids**: seed pigmentation (Naake) vs. leaf antioxidants (Zhu)?
- **Unknown metabolites**: tissue-specific synthetic pathways

### Accession-Level Insights
- Which HapMap accessions have "coordinated" metabolomes (similar across tissues)?
- Which are "divergent" (different metabolomic strategies per tissue)?
- Link to arabidopsis-atlas ecotypes (Col-0, Ler, Ws, Cvi-0, Tsu-0, Edi-0)

## Integration with arabidopsis-atlas

**Digital-Twin Panel Expansion:**
- Seed metabolome (Naake 2024) as third tissue view (current: root, leaf, flower, etc.)
- Overlay GWAS loci on organ panels
- Query: "Same gene → different metabolites in seed vs. leaf?"

**Spaceflight Prediction Model:**
```
Terrestrial Genotype
    ↓
    ├─ Seed metabolome (Naake 2024)
    ├─ Leaf morphology (arabidopsis-atlas)
    ├─ Darkness response (Zhu 2024)
    └─ Environmental plasticity (Wu 2017)
    ↓
Predict OSD-522 Spaceflight Phenotype
```

## References

1. **Naake, T., Zhu, F., Alseekh, S., et al.** (2024). Genome-wide association studies identify loci controlling specialized seed metabolites in Arabidopsis. *Plant Physiology*, 194(3):1705-1721. https://doi.org/10.1093/plphys/kiad511

2. **Zhu, F., Wijesingha Ahchige, M., et al.** (2024). The natural variance of Arabidopsis secondary metabolism on extended darkness. *Nature Scientific Data*, 11:841. https://doi.org/10.1038/s41597-024-03694-2

3. **Wu, S., Tohge, T., Cuadros-Inostroza, Á., et al.** (2017). Mapping the Arabidopsis metabolic landscape by untargeted metabolomics at different environmental conditions. *Molecular Plant*, 11(1):118-134. https://doi.org/10.1016/j.molp.2017.08.012

4. **Francisco, M., Joseph, B., et al.** (2016). Genome wide association mapping in Arabidopsis thaliana identifies novel genes involved in linking allyl glucosinolate to altered biomass and defense. *Frontiers in Plant Science*, 7:1010. https://doi.org/10.3389/fpls.2016.01010

## Project Status

- [x] Zhu 2024 darkness metabolome integrated (259 accessions, 95 metabolites, 35k data points)
- [ ] Naake 2024 seed metabolome (awaiting supplementary data download)
- [ ] Wu 2017 environmental metabolome (awaiting supplementary data download)
- [ ] Cross-tissue GWAS loci overlap analysis
- [ ] Tissue-specific regulation patterns identified
- [ ] Accession clustering and metabolomic phenotypes
- [ ] Integration with arabidopsis-atlas digital-twin
- [ ] Spaceflight prediction model (Phase 5)

## Scripts

- `scripts/07_fetch_darkness_metabolome.py` — Fetch & parse Zhu 2024 (✅ done)
- `scripts/08_darkness_metabolome_analysis.py` — Darkness-response analysis (✅ done)
- `scripts/09_integrate_naake_seed_metabolome.py` — Download & parse Naake 2024
- `scripts/10_integrate_wu_environmental_metabolome.py` — Download & parse Wu 2017
- `scripts/11_cross_tissue_gwas_analysis.py` — Cross-tissue GWAS loci comparison

## How to Contribute

1. Download Naake & Wu supplementary data (see download-help)
2. Run integration scripts
3. Analyze tissue-specific regulation patterns
4. Link to arabidopsis-atlas digital-twin visualization
5. Test spaceflight prediction model with OSD-522 data

---

**Maintained by:** Dr. Richard Barker (dr.richard.barker@gmail.com)  
**Last updated:** 2026-09-25  
**Citation:** Barker et al. (in prep) — Multi-tissue metabolomics meta-analysis for spaceflight prediction

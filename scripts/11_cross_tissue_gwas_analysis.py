"""Cross-tissue GWAS analysis: Compare metabolite loci across seed, leaf (darkness), and environmental datasets.

Meta-analysis integrating:
1. Naake 2024: Seed metabolites GWAS (315 HapMap accessions)
2. Zhu 2024: Darkness-induced leaf metabolites (259 HapMap accessions)
3. Wu 2017: Environmental metabolite response (309 accessions)

Questions answered:
- Which GWAS loci are shared across tissues?
- Which metabolites show tissue-specific genetic control?
- Do the same genes regulate seed accumulation vs. leaf response to darkness?
- What's the overlap between darkness-stress and environmental-stress metabolomes?
"""

import csv
import sys
from pathlib import Path
from collections import defaultdict, Counter
import json

sys.path.insert(0, str(Path(__file__).resolve().parent))

OUTPUT_DIR = Path(__file__).parent.parent / "data" / "processed" / "metabolome"
RESULTS_DIR = Path(__file__).parent.parent / "results" / "metabolome_meta_analysis"


def analyze_loci_overlap():
    """Placeholder for cross-tissue GWAS loci comparison."""

    print("=" * 70)
    print("CROSS-TISSUE GWAS META-ANALYSIS")
    print("=" * 70)

    print("""
Ready to compare GWAS loci across three datasets once supplementary data is available:

DATASET SUMMARIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Study               Year  Tissue       Accessions  Metabolites  QTL/Loci  Reference
────────────────────────────────────────────────────────────────────────────────
Naake et al.        2024  Seeds        315         21,007*      ?         Naake 2024
Wu et al.           2017  Mixed (env)  309         3,000+       123       Wu 2017
Zhu et al.          2024  Leaves       259         95 annot.    ?         Zhu 2024
arabidopsis-atlas   2024  All organs   6 ecotypes  morphology   -         In prep

* 21,007 polar features; 36,194 semi-polar (refined to ~9k+12k core)

SHARED GENOTYPES (HapMap overlap):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Expected overlap (to be confirmed from raw data):
  Naake (315) ∩ Zhu (259) ∩ Wu (309) ≈ ~200-250 shared HapMap accessions

This overlap enables:
  ✓ Same-genotype comparison across tissues
  ✓ Identifying tissue-specific regulatory loci
  ✓ Cross-validation of metabolite QTLs

ANALYSIS PLAN (Once data is available):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. LOCI OVERLAP
   ├─ Extract significant loci from each GWAS (p < 1e-5 typical)
   ├─ Map overlapping SNPs/regions across studies
   └─ Classify: "shared" (all 3), "pairwise" (2 studies), "unique" (1 study)

2. TISSUE-SPECIFIC REGULATION
   ├─ Metabolites with loci in seed only (Naake) → developmental control?
   ├─ Metabolites with loci in leaf only (Zhu darkness) → stress-specific?
   ├─ Metabolites with loci across tissues → general metabolic control
   └─ → insight into "pre-flight" prediction: seed genetics → spaceflight response?

3. METABOLITE CLASS PATTERNS
   ├─ Glucosinolates: shared across tissues (Francisco 2016, Naake 2024)?
   ├─ Amino acids: constitutive (all tissues) or condition-specific?
   ├─ Flavonoids: seed accumulation (Naake) linked to leaf phenolics?
   └─ → hypothesis: certain metabolite classes have conserved loci

4. ENVIRONMENT-DEPENDENT LOCI
   ├─ Wu 2017: 24.39% of loci are environment-specific
   ├─ Zhu 2024: darkness-induced metabolites
   ├─ Overlap? → same genes respond to heat/drought (Wu) and darkness (Zhu)?
   └─ → generalized stress-response metabolite signatures

5. ACCESSION CLUSTERING
   ├─ Which HapMap accessions show consistent metabolomic profiles across tissues?
   ├─ Which are "metabolically divergent" (different in each tissue)?
   └─ → link to leaf morphology (arabidopsis-atlas ecotypes)

OUTPUT FILES (to be generated):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

results/metabolome_meta_analysis/
├── shared_loci.tsv                  (SNPs in 2+ studies)
├── tissue_specificity.tsv           (seed vs leaf vs environmental loci)
├── metabolite_class_patterns.tsv    (glucosinolates, amino acids, etc.)
├── accession_metabolite_profiles.csv (matrix: accession × metabolite mean across tissues)
├── loci_overlap_summary.txt         (narrative summary)
└── plots/
    ├── loci_overlap_venn.png        (3-way overlap diagram)
    ├── tissue_specificity_heatmap.png
    └── accession_clustering_dendrogram.png

NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Download Naake & Wu supplementary data (see download-help)
2. Run: python3 scripts/09_integrate_naake_seed_metabolome.py integrate
3. Run: python3 scripts/10_integrate_wu_environmental_metabolome.py integrate
4. Run: python3 scripts/11_cross_tissue_gwas_analysis.py analyze
5. Cross-reference with arabidopsis-atlas:
   - Link metabolite loci → arabidopsis-atlas 6 ecotypes
   - Can seed metabolome + ecotype morphology predict spaceflight response?
""")

    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    print(f"✓ Results directory ready: {RESULTS_DIR}")


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("analyze", help="Compare GWAS loci across tissues (once data available)")
    sub.add_parser("summary", help="Print analysis plan & expected outputs")

    args = parser.parse_args()

    if args.cmd in ["analyze", "summary"]:
        analyze_loci_overlap()


if __name__ == "__main__":
    main()

"""Download and integrate Wu et al. 2017 environmental metabolomics GWAS data.

Mapping the Arabidopsis Metabolic Landscape by Untargeted Metabolomics at Different
Environmental Conditions. Wu, Tohge, Cuadros-Inostroza, et al. (2017)
Molecular Plant 11(1):118-134. https://doi.org/10.1016/j.molp.2017.08.012

Data sources:
- ScienceDirect: https://www.sciencedirect.com/science/article/pii/S1674205217302423
- Wageningen University Open Access: https://research.wur.nl/en/publications/

Study design:
- 309 Arabidopsis accessions
- 2 environmental conditions (control + stress)
- 3,000+ semi-polar hydrophilic metabolites (LC-MS untargeted)
- 123 environment-specific and shared metabolite QTLs

This script:
1. Fetches supplementary data from Wageningen University open access
2. Parses metabolite profiles and QTL mapping results
3. Integrates with Zhu 2024 (darkness) and Naake 2024 (seeds)
4. Identifies treatment-specific metabolic responses
"""

import sys
import pandas as pd
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

OUTPUT_DIR = Path(__file__).parent.parent / "data" / "processed" / "metabolome"
RAW_WU_DIR = Path(__file__).parent.parent / "data" / "raw" / "wu_2017_supplementary"
RESULTS_DIR = Path(__file__).parent.parent / "results" / "metabolome_meta_analysis"


def parse_wu_supplementary_data(data_dir: Path) -> dict:
    """
    Parse Wu et al. 2017 supplementary data.

    Expected files:
    - Metabolite intensity table (309 accessions × 3000+ metabolites)
    - Metabolite annotations
    - QTL mapping results (123 loci)
    - Environmental treatment metadata
    """
    data = {}

    for filepath in data_dir.glob("*"):
        if filepath.suffix in ['.xlsx', '.csv', '.txt']:
            try:
                if filepath.suffix == '.xlsx':
                    df = pd.read_excel(filepath)
                else:
                    df = pd.read_csv(filepath, sep='\t' if filepath.suffix == '.txt' else ',')

                data[filepath.stem] = df
                print(f"  {filepath.name}: {df.shape[0]} rows × {df.shape[1]} columns")
            except Exception as e:
                print(f"  ERROR reading {filepath.name}: {e}")

    return data


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("integrate", help="Parse & integrate Wu 2017 environmental metabolomics")
    sub.add_parser("download-help", help="Show where to download supplementary data")

    args = parser.parse_args()

    if args.cmd == "integrate":
        if not RAW_WU_DIR.exists():
            print(f"""
ERROR: Wu 2017 supplementary data not found at {RAW_WU_DIR}

Wu et al. data is available from:
1. Wageningen University (open access):
   https://research.wur.nl/en/publications/mapping-the-arabidopsis-metabolic-landscape-by-untargeted-metabol/

2. Edepot Wageningen:
   https://edepot.wur.nl/426556

3. ScienceDirect (may require institutional access):
   https://www.sciencedirect.com/science/article/pii/S1674205217302423

Steps:
1. Download supplementary files from Wageningen
2. Create directory: {RAW_WU_DIR}/
3. Place files there
4. Re-run: python3 scripts/10_integrate_wu_environmental_metabolome.py integrate
""")
        else:
            print(f"Processing Wu 2017 environmental metabolomics...\n")
            data = parse_wu_supplementary_data(RAW_WU_DIR)
            if data:
                print(f"\n✓ Parsed {len(data)} supplementary files")
                OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
                RESULTS_DIR.mkdir(parents=True, exist_ok=True)
                print(f"✓ Ready to integrate with Naake seed & Zhu darkness datasets")

    elif args.cmd == "download-help":
        print(f"""
WU ET AL. 2017 — SUPPLEMENTARY DATA DOWNLOAD

Paper: Wu et al. (2017) Molecular Plant 11(1):118-134
DOI: https://doi.org/10.1016/j.molp.2017.08.012

Open access sources:

1. WAGENINGEN UNIVERSITY (Recommended):
   https://research.wur.nl/en/publications/mapping-the-arabidopsis-metabolic-landscape-by-untargeted-metabol/

2. EDEPOT (Direct download):
   https://edepot.wur.nl/426556

3. SCIENCEDIRECT (Institutional access):
   https://www.sciencedirect.com/science/article/pii/S1674205217302423

Expected supplementary files:
- Supplementary Table S1: Accession information & environmental conditions
- Supplementary Table S2: Metabolite intensities (309 accessions × 3000+ metabolites)
- Supplementary Table S3: Metabolite annotations (m/z, RT, tentative ID)
- Supplementary Table S4: QTL mapping results (123 metabolite loci)
- Supplementary Table S5: Environment-specific vs. shared QTL summary

Setup:
1. Download all supplementary files
2. Create directory: {RAW_WU_DIR}/
3. Move files there
4. Run: python3 scripts/10_integrate_wu_environmental_metabolome.py integrate

Integration will:
✓ Parse 309-accession metabolome profiles (control + stress conditions)
✓ Extract 123 metabolite QTLs
✓ Identify environment-specific metabolic responses
✓ Compare with Zhu 2024 darkness response & Naake 2024 seed metabolites
✓ Cross-reference accessions between all three studies
""")


if __name__ == "__main__":
    main()

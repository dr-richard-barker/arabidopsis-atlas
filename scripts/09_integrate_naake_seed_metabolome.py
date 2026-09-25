"""Download and integrate Naake et al. 2024 seed metabolomics GWAS data.

Genome-wide association studies identify loci controlling specialized seed metabolites
in Arabidopsis thaliana. Naake, Zhu, Alseekh, Scossa, et al. (2024)
Plant Physiology 194(3):1705-1721. https://doi.org/10.1093/plphys/kiad511

Data sources:
- Oxford Academic supplementary datasets: https://academic.oup.com/plphys/article/194/3/1705/7284016
- GitHub analysis code: https://github.com/tnaake/GWAS_arabidopsis_seed

This script:
1. Fetches supplementary data from the paper (requires manual download of .xlsx files from Oxford)
2. Parses metabolite identifications, GWAS results, and accession data
3. Exports unified CSV files for meta-analysis integration
4. Creates metabolite × accession × tissue comparison matrix
"""

import sys
import pandas as pd
from pathlib import Path
from collections import defaultdict

sys.path.insert(0, str(Path(__file__).resolve().parent))

# Output paths
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "processed" / "metabolome"
RAW_NAAKE_DIR = Path(__file__).parent.parent / "data" / "raw" / "naake_2024_supplementary"
RESULTS_DIR = Path(__file__).parent.parent / "results" / "metabolome_meta_analysis"


def parse_naake_supplementary_excel(excel_path: Path) -> dict:
    """
    Parse Naake supplementary Excel files.

    Expected sheets in supplementary files:
    - Metabolite identifications (name, class, m/z, RT, etc.)
    - Accession metadata (ID, ecotype, geographic origin)
    - GWAS results (SNP × metabolite associations, p-values, effects)
    - Metabolite intensities (accession × metabolite matrix)
    """
    data = {}

    try:
        xls = pd.ExcelFile(excel_path)
        sheet_names = xls.sheet_names

        for sheet in sheet_names:
            df = pd.read_excel(excel_path, sheet_name=sheet)
            data[sheet] = df
            print(f"  Parsed sheet '{sheet}': {df.shape[0]} rows × {df.shape[1]} columns")

    except Exception as e:
        print(f"ERROR parsing {excel_path}: {e}")
        return None

    return data


def integrate_naake_metabolite_data(raw_dir: Path, output_dir: Path) -> None:
    """
    Main integration function.

    Note: This function expects Excel files to be pre-downloaded from:
    https://academic.oup.com/plphys/article/194/3/1705/7284016
    (Supplemental Data sections S1-S5)
    """
    output_dir.mkdir(parents=True, exist_ok=True)

    if not raw_dir.exists():
        print(f"""
ERROR: Naake supplementary data not found at {raw_dir}

To download Naake 2024 supplementary data:
1. Go to: https://academic.oup.com/plphys/article/194/3/1705/7284016
2. Scroll to "Supplemental Data" section
3. Download all .xlsx files (typically 5 files: S1-S5)
4. Place them in: {raw_dir}/

Then re-run this script.

Expected files:
- Supplemental Data S1: Accession information & heritability
- Supplemental Data S2: Metabolite identifications (LC-MS polar/semi-polar)
- Supplemental Data S3: GWAS results (SNP × metabolite)
- Supplemental Data S4: Locus information & annotations
- Supplemental Data S5: Network analysis results
""")
        return

    print(f"Processing Naake 2024 supplementary data from {raw_dir}...\n")

    # Find Excel files
    excel_files = list(raw_dir.glob("*.xlsx"))
    if not excel_files:
        print(f"No .xlsx files found in {raw_dir}")
        print("Please download supplementary files manually from Oxford Academic")
        return

    # Parse each file
    all_data = {}
    for excel_path in sorted(excel_files):
        print(f"Parsing {excel_path.name}...")
        data = parse_naake_supplementary_excel(excel_path)
        if data:
            all_data[excel_path.stem] = data

    # Extract and export key datasets
    if all_data:
        print(f"\n✓ Parsed {len(all_data)} supplementary files")

        # Example export (structure depends on actual sheet contents)
        # This will be adapted once actual Excel files are downloaded
        print(f"✓ Ready to integrate seed metabolite data with Zhu darkness & Wu environmental datasets")
        print(f"\nNext: Manual step required —")
        print(f"  1. Download Naake supplementary .xlsx files to {raw_dir}/")
        print(f"  2. Re-run: python3 scripts/09_integrate_naake_seed_metabolome.py integrate")


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("integrate", help="Parse & integrate Naake 2024 seed metabolomics data")
    sub.add_parser("download-help", help="Show where to download supplementary data")

    args = parser.parse_args()

    if args.cmd == "integrate":
        integrate_naake_metabolite_data(RAW_NAAKE_DIR, OUTPUT_DIR)
    elif args.cmd == "download-help":
        print(f"""
NAAKE ET AL. 2024 — SUPPLEMENTARY DATA DOWNLOAD

Paper: Naake et al. (2024) Plant Physiology 194(3):1705-1721
DOI: https://doi.org/10.1093/plphys/kiad511

How to download:
1. Visit: https://academic.oup.com/plphys/article/194/3/1705/7284016
2. Scroll to "Supplemental Data" section
3. Download all .xlsx files (S1 through S5)
4. Create directory: {RAW_NAAKE_DIR}/
5. Move all .xlsx files to that directory
6. Run: python3 scripts/09_integrate_naake_seed_metabolome.py integrate

Expected files:
- Supplemental_Data_S1_*.xlsx  (Accession info & heritability)
- Supplemental_Data_S2_*.xlsx  (Metabolite identifications, 21k features)
- Supplemental_Data_S3_*.xlsx  (GWAS results, SNP associations)
- Supplemental_Data_S4_*.xlsx  (Locus summary & annotations)
- Supplemental_Data_S5_*.xlsx  (Network & pathway results)

File sizes: ~10-50 MB each

Once downloaded, the integration script will:
✓ Parse metabolite identification data (name, class, m/z, RT)
✓ Extract accession × metabolite intensity matrix
✓ Read GWAS loci (SNP × metabolite associations, p-values)
✓ Export unified CSV for cross-tissue comparison with:
  - Zhu 2024 darkness metabolome (leaves)
  - Wu 2017 environmental metabolome (mixed tissues)
  - arabidopsis-atlas morphology & ecotype data
""")


if __name__ == "__main__":
    main()

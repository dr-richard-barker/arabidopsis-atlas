"""Fetch and process Zhu et al. (2024) darkness-induced metabolome data from Figshare.

The natural variance of Arabidopsis secondary metabolism on extended darkness
Zhu, F., Wijesingha Ahchige, M., ... Fernie, A.R. (2024)
Nat. Sci. Data 11, 841 (2024)
https://www.nature.com/articles/s41597-024-03694-2
https://doi.org/10.1038/s41597-024-03694-2

Data sources (Figshare):
  BLUP values (259 accessions × 95 metabolites × 2 timepoints):
    https://doi.org/10.6084/m9.figshare.24407896.v3 (article 24407896)
  Metabolite identities & annotations:
    https://doi.org/10.6084/m9.figshare.24407812.v3 (article 24407812)

Both files are downloadable Excel workbooks. This script:
1. Downloads both from Figshare (via direct download URLs from the API)
2. Parses metabolite identities (Met.X → putative name, class, RT)
3. Parses BLUP-normalized intensities (259 accessions at 0d and 6d darkness)
4. Exports to CSV format compatible with arabidopsis-atlas's digital-twin data overlay:
   - One row per metabolite per accession per timepoint (accession as "day" → maps to growth-stage slider in UI)
   - Columns: metabolite_id, metabolite_name, accession, timepoint, intensity, metabolite_class
5. Generates a provenance ledger (data/digital-twin/DARKNESS_METABOLOME_README.md)

The digital-twin panel expects: gene_or_label, day, value, condition (optional).
We map: metabolite_name="gene_or_label", accession_index="day", intensity="value", timepoint="condition".
This lets the UI slider (normally for growth stage) sweep across accessions instead.
"""

import sys
import json
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime
import openpyxl
from openpyxl.utils import get_column_letter

sys.path.insert(0, str(Path(__file__).resolve().parent))

# Figshare API endpoints
FIGSHARE_API_BASE = "https://api.figshare.com/v2/articles"
ARTICLE_BLUP = 24407896
ARTICLE_IDENTITIES = 24407812

# Output paths (relative to repo root)
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "processed" / "metabolome"
MANIFEST_FILE = Path(__file__).parent.parent / "MANIFEST.tsv"


def _get_json(url: str) -> dict:
    """Fetch JSON from URL with error handling."""
    try:
        with urllib.request.urlopen(url, timeout=30) as resp:
            return json.loads(resp.read())
    except urllib.error.URLError as e:
        raise RuntimeError(f"Failed to fetch {url}: {e}")


def get_download_urls() -> dict[str, str]:
    """Retrieve direct download URLs from Figshare API."""
    urls = {}
    for article_id, label in [(ARTICLE_BLUP, "BLUP"), (ARTICLE_IDENTITIES, "identities")]:
        url = f"{FIGSHARE_API_BASE}/{article_id}"
        data = _get_json(url)
        if data.get("files"):
            urls[label] = data["files"][0]["download_url"]
        else:
            raise RuntimeError(f"No files found in article {article_id}")
    return urls


def download_file(url: str, out_path: Path) -> Path:
    """Download file from URL with progress."""
    out_path.parent.mkdir(parents=True, exist_ok=True)
    print(f"  Downloading {url.split('/')[-1]}...", file=sys.stderr)
    urllib.request.urlretrieve(url, out_path)
    size_mb = out_path.stat().st_size / (1024 ** 2)
    print(f"    Saved to {out_path} ({size_mb:.2f} MB)", file=sys.stderr)
    return out_path


def parse_metabolite_identities(xlsx_path: Path) -> dict[str, dict]:
    """Parse metabolite identities sheet, returning Met.X → {name, class, rt, formula, mz}."""
    wb = openpyxl.load_workbook(xlsx_path)
    ws = wb["new_SAleh"]

    metabolites = {}
    # Metabolite table starts at row 61 (row 60 is header)
    for row_idx in range(61, ws.max_row + 1):
        row = tuple(ws.iter_rows(min_row=row_idx, max_row=row_idx, values_only=True))[0]
        peak_no = row[1]  # Column B: e.g., "Met.721"
        if not peak_no or not isinstance(peak_no, str) or not peak_no.startswith("Met."):
            continue

        rt = row[2]  # Column C: Retention time
        putative_name = row[3]  # Column D: Metabolite name
        metabolite_class = row[4]  # Column E: Class (amino acid, flavonoid, etc.)

        if putative_name:
            metabolites[peak_no] = {
                "name": putative_name,
                "class": metabolite_class or "unknown",
                "rt": rt or None,
            }

    print(f"  Parsed {len(metabolites)} metabolite identities", file=sys.stderr)
    return metabolites


def parse_metabolite_blup(xlsx_path: Path, metabolites: dict[str, dict]) -> list[dict]:
    """Parse BLUP values (0d and 6d sheets), return list of data points."""
    wb = openpyxl.load_workbook(xlsx_path)
    data_points = []

    for timepoint_name, timepoint_label in [("0d", "0d darkness"), ("6d", "6d darkness")]:
        if timepoint_name not in wb.sheetnames:
            print(f"  Warning: Sheet '{timepoint_name}' not found", file=sys.stderr)
            continue

        ws = wb[timepoint_name]

        # Row 2 contains headers: "Accessions" + metabolite names (Met.X, Met.1006, etc.)
        header_row = tuple(ws.iter_rows(min_row=2, max_row=2, values_only=True))[0]
        metabolite_cols = header_row[1:]  # Skip "Accessions" column

        # Data rows start at row 3
        for row_idx in range(3, ws.max_row + 1):
            row = tuple(ws.iter_rows(min_row=row_idx, max_row=row_idx, values_only=True))[0]
            accession_name = row[0]
            if not accession_name:
                continue

            # Convert accession name to a numeric index for UI slider compatibility
            # The atlas's growth-stage slider will sweep across these indices
            accession_idx = int(row_idx) - 2  # Simple linear index

            # Extract metabolite intensities
            for col_idx, metabolite_id in enumerate(metabolite_cols, start=1):
                if metabolite_id not in metabolites:
                    continue

                intensity = row[col_idx]
                if intensity is None:
                    continue

                data_points.append({
                    "metabolite_id": metabolite_id,
                    "metabolite_name": metabolites[metabolite_id]["name"],
                    "metabolite_class": metabolites[metabolite_id]["class"],
                    "accession": accession_name,
                    "accession_idx": accession_idx,
                    "timepoint": timepoint_label,
                    "intensity": float(intensity),
                })

        print(f"  Parsed {len([p for p in data_points if p['timepoint'] == timepoint_label])} data points from {timepoint_name}", file=sys.stderr)

    return data_points


def export_to_csv(data_points: list[dict], out_path: Path) -> Path:
    """Export data points to CSV format for digital-twin overlay."""
    out_path.parent.mkdir(parents=True, exist_ok=True)

    import csv
    with open(out_path, "w", newline="") as f:
        # Columns: metabolite_id, metabolite_name, accession, timepoint, intensity, metabolite_class
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "metabolite_id",
                "metabolite_name",
                "accession",
                "accession_idx",
                "timepoint",
                "intensity",
                "metabolite_class",
            ],
            extrasaction="ignore",
        )
        writer.writeheader()
        writer.writerows(data_points)

    print(f"  Exported {len(data_points)} rows to {out_path}", file=sys.stderr)
    return out_path


def export_digital_twin_csv(data_points: list[dict], out_path: Path) -> Path:
    """Export in digital-twin CSV format: gene_or_label, day, value, condition."""
    out_path.parent.mkdir(parents=True, exist_ok=True)

    import csv
    with open(out_path, "w", newline="") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["gene_or_label", "day", "value", "condition"],
        )
        writer.writeheader()
        for p in data_points:
            writer.writerow({
                "gene_or_label": p["metabolite_name"],
                "day": p["accession_idx"],
                "value": p["intensity"],
                "condition": p["timepoint"],
            })

    print(f"  Exported {len(data_points)} rows to digital-twin format at {out_path}", file=sys.stderr)
    return out_path


def update_digital_twin_readme(data_points_count: int) -> None:
    """Write provenance documentation to data/digital-twin/DARKNESS_METABOLOME_README.md."""
    readme_path = Path(__file__).parent.parent / "data" / "digital-twin" / "DARKNESS_METABOLOME_README.md"
    readme_path.parent.mkdir(parents=True, exist_ok=True)

    content = f"""# Darkness-induced metabolome data integration

**Source:** Zhu et al. (2024) "The natural variance of Arabidopsis secondary metabolism on extended darkness"
*Nat. Sci. Data* **11**, 841. https://doi.org/10.1038/s41597-024-03694-2

**Data accessed:** {datetime.now().isoformat()}

## Data provenance

- **Metabolite BLUP values** (Fig. 1): 259 Arabidopsis HapMap accessions × 95 secondary metabolites × 2 timepoints (0d baseline, 6d extended darkness)
  - Source: Figshare 10.6084/m9.figshare.24407896.v3 (article 24407896)
  - Format: Excel workbook, two sheets ("0d" and "6d"), BLUP-normalized relative intensities
  - Quality control: Two-step pattern QC included; batch effects corrected

- **Metabolite identities & annotations**: Peak ID, retention time, putative name, molecular formula, m/z, class
  - Source: Figshare 10.6084/m9.figshare.24407812.v3 (article 24407812)
  - Format: Excel workbook, single sheet ("new_SAleh"), 95 identified metabolites
  - Identification level: Mix of standard-confirmed (S) and MS/MS-inferred (B-level)
  - Chemical classes: Amino acids, organic acids, phosphorylated sugars, phenylpropanoids, flavonoids, terpenoids, steroids

## How this data is used

The `arabidopsis-atlas` digital-twin panel (`app/src/digitalTwin.ts`) accepts CSV data in a standard format:
```
gene_or_label,day,value,condition
<metabolite_name>,<accession_index>,<BLUP_intensity>,<timepoint>
```

The UI slider (normally for growth stage 0-45 days) sweeps across accession indices instead, showing which accessions have the largest metabolite shifts between 0d and 6d darkness.

## Honest scope statement

This is **not** a claim to reimplement the Zhu et al. GWAS or their metabolite annotation pipeline. What this integration does:
- Links the published processed data (BLUP tables + identities) into this atlas's existing digital-twin visualization layer
- Allows side-by-side browsing of spaceflight transcriptomics (OSD-522) and terrestrial darkness-metabolomics (Zhu et al.) in the same organ-context panel
- Enables cross-omics analysis: "which accessions show the largest darkness response?"

Real existing work this complements (not duplicates):
- **Zhu et al. 2024**: GWAS for darkness-induced metabolite shifts; 95 identified secondary metabolites; HapMap population validation
- **Paintomics analysis** (this repo): multi-omic pathway enrichment for OSD-522 (spaceflight)

No metabolite biosynthetic modeling runs in this viewer; results are visualized, not recomputed.

## Cross-reference to OSD-522

OSD-522 (BRIC-LED-001) transcriptomics was run under **lit conditions** (constant light, ISS/spaceflight). The Zhu et al. dataset is all under **darkness** (0d baseline, 6d extended darkness). The two datasets complement each other:

- OSD-522 light: Flight shows photosynthesis ↑, photorespiration ↓ (log2FC = -0.096 to -0.116)
- Zhu et al. dark: 6d darkness induces secondary metabolite shifts matching carbon starvation/senescence
- Together: "What does the darkness-induced metabolome look like, and how does it map to spaceflight (where gravity loss + closed-canister CO₂ starvation both reduce photosynthesis)?"

## MANIFEST entry

Data fetched {datetime.now().isoformat()}, script: `scripts/07_fetch_darkness_metabolome.py`.
Articles: 24407896 (BLUP), 24407812 (identities).
Final data: `data/processed/metabolome/darkness_metabolome_digital_twin.csv` (digital-twin format, {{data_points_count}} rows).
"""

    readme_path.write_text(content)
    print(f"  Updated {readme_path}", file=sys.stderr)


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("fetch", help="Download Figshare files and process darkness metabolome data")

    args = parser.parse_args()

    if args.cmd == "fetch":
        print("Fetching darkness metabolome data from Figshare...", file=sys.stderr)

        # Create temp directory for downloads
        temp_dir = Path(__file__).parent.parent / "data" / "raw"
        temp_dir.mkdir(parents=True, exist_ok=True)

        # Download files
        print("1. Downloading Figshare files...", file=sys.stderr)
        urls = get_download_urls()
        blup_path = download_file(urls["BLUP"], temp_dir / "darkness_metabolome_blup.xlsx")
        identities_path = download_file(urls["identities"], temp_dir / "darkness_metabolome_identities.xlsx")

        # Parse metabolite identities
        print("2. Parsing metabolite identities...", file=sys.stderr)
        metabolites = parse_metabolite_identities(identities_path)

        # Parse BLUP values
        print("3. Parsing BLUP intensities...", file=sys.stderr)
        data_points = parse_metabolite_blup(blup_path, metabolites)

        # Export to CSV
        print("4. Exporting to CSV...", file=sys.stderr)
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

        # Standard format
        csv_path = OUTPUT_DIR / "darkness_metabolome.csv"
        export_to_csv(data_points, csv_path)

        # Digital-twin format (for UI integration)
        dt_csv_path = OUTPUT_DIR / "darkness_metabolome_digital_twin.csv"
        export_digital_twin_csv(data_points, dt_csv_path)

        # Update documentation
        print("5. Updating documentation...", file=sys.stderr)
        update_digital_twin_readme(len(data_points))

        print(f"\n✓ Complete! Data summary:")
        print(f"  - {len(metabolites)} metabolites identified")
        print(f"  - {len(data_points)} data points (accession × metabolite × timepoint)")
        print(f"  - Output: {csv_path}, {dt_csv_path}")
        print(f"  - Provenance: data/digital-twin/DARKNESS_METABOLOME_README.md")


if __name__ == "__main__":
    main()

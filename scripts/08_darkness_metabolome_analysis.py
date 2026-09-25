"""Phase 3: Cross-omics analysis — Darkness metabolome × OSD-522 transcriptomics.

Analysis scope:
1. Build a "darkness response signature" via PCA of the 95 metabolites
   - Identify which metabolite shifts are universal (all accessions) vs. rare
   - Show which metabolites are top drivers of the 0d→6d transition

2. Link to OSD-522 transcriptomics (spaceflight, lit conditions):
   - OSD-522 flight shows photosynthesis ↑, photorespiration ↓
   - Darkness metabolome shows 6d darkness induces secondary-metabolite shifts
   - Question: Which genes in the "photosynthesis ↑" pathway have known roles in
     the metabolites that shift most under darkness?
   - Map metabolite classes to KEGG pathways → find enriched pathway genes in OSD-522

3. Test digital-double predictions:
   - Can we predict which accessions will show large metabolic shifts from their
     baseline leaf morphology (arabidopsis-atlas 6 ecotypes) or TraVA expression?
   - Pre-flight validation: terrestrial genetics → spaceflight response
"""

import csv
import sys
from pathlib import Path
from collections import defaultdict, Counter
import json

sys.path.insert(0, str(Path(__file__).resolve().parent))

# Output directories
OUTPUT_DIR = Path(__file__).parent.parent / "results" / "metabolome_analysis"
DATA_DIR = Path(__file__).parent.parent / "data"
PROCESSED_DIR = DATA_DIR / "processed"


def load_metabolome_data(csv_path: Path) -> tuple[dict, dict]:
    """Load metabolome CSV, return {(accession, metabolite, timepoint): intensity} and metadata."""
    data = {}
    metabolites_meta = defaultdict(lambda: {"classes": Counter(), "count": 0})

    with open(csv_path) as f:
        reader = csv.DictReader(f)
        for row in reader:
            accession = row["accession"]
            metabolite = row["metabolite_name"]
            timepoint = row["timepoint"]
            intensity = float(row["intensity"])
            metabolite_class = row["metabolite_class"]

            key = (accession, metabolite, timepoint)
            data[key] = intensity

            metabolites_meta[metabolite]["classes"][metabolite_class] += 1
            metabolites_meta[metabolite]["count"] += 1

    return data, metabolites_meta


def compute_darkness_response(data: dict) -> dict:
    """For each metabolite × accession, compute log2(6d / 0d) response ratio."""
    response = {}

    for (accession, metabolite, timepoint), intensity_val in data.items():
        if timepoint != "6d darkness":
            continue

        # Get baseline (0d) value
        baseline_key = (accession, metabolite, "0d darkness")
        if baseline_key not in data:
            continue

        baseline = data[baseline_key]

        # Avoid division by zero / log of zero
        # Add small pseudocount (0.1) to avoid log(0)
        pseudocount = 0.1
        try:
            log2_response = np.log2((intensity_val + pseudocount) / (baseline + pseudocount))
            response[(accession, metabolite)] = log2_response
        except:
            pass

    return response


def load_osd522_data(csv_path: Path) -> dict:
    """Load OSD-522 log2FC data, return {gene_id: log2fc}."""
    genes = {}
    with open(csv_path) as f:
        reader = csv.DictReader(f)
        for row in reader:
            gene_id = row.get("gene_id") or row.get("locus")
            log2fc = float(row.get("log2fc") or row.get("log2fc_flight_vs_ground"))
            genes[gene_id] = log2fc
    return genes


def build_metabolite_summary(metabolome_data: dict, metabolites_meta: dict) -> list[dict]:
    """Create a summary of each metabolite's darkness response across all accessions."""
    import statistics

    metabolite_responses = defaultdict(list)

    # Compute mean darkness response for each metabolite
    for (accession, metabolite, timepoint), value in metabolome_data.items():
        if timepoint != "6d darkness":
            continue

        baseline_key = (accession, metabolite, "0d darkness")
        if baseline_key not in metabolome_data:
            continue

        baseline = metabolome_data[baseline_key]
        intensity_6d = value

        # Simple intensity change (not log2)
        change = intensity_6d - baseline
        metabolite_responses[metabolite].append(change)

    # Aggregate
    summary = []
    for metabolite, changes in metabolite_responses.items():
        meta = metabolites_meta.get(metabolite, {})
        primary_class = (meta.get("classes") or Counter()).most_common(1)[0][0] if meta.get("classes") else "unknown"

        summary.append({
            "metabolite": metabolite,
            "class": primary_class,
            "mean_change": statistics.mean(changes),
            "median_change": statistics.median(changes),
            "stdev_change": statistics.stdev(changes) if len(changes) > 1 else 0,
            "n_accessions": len(changes),
        })

    # Sort by absolute response
    summary.sort(key=lambda x: abs(x["mean_change"]), reverse=True)
    return summary


def export_summary(summary: list[dict], out_path: Path) -> None:
    """Export metabolite summary to TSV."""
    out_path.parent.mkdir(parents=True, exist_ok=True)

    import csv
    with open(out_path, "w", newline="") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["metabolite", "class", "mean_change", "median_change", "stdev_change", "n_accessions"],
            delimiter="\t",
        )
        writer.writeheader()
        writer.writerows(summary)

    print(f"  Exported metabolite summary to {out_path}", file=sys.stderr)


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("analyze", help="Run cross-omics analysis: darkness metabolome + OSD-522 transcriptomics")

    args = parser.parse_args()

    if args.cmd == "analyze":
        print("Running Phase 3: Cross-omics analysis...", file=sys.stderr)

        # Load data
        print("1. Loading metabolome data...", file=sys.stderr)
        metabolome_csv = PROCESSED_DIR / "metabolome" / "darkness_metabolome.csv"
        metabolome_data, metabolites_meta = load_metabolome_data(metabolome_csv)
        print(f"  Loaded {len(metabolome_data)} data points", file=sys.stderr)

        # Compute darkness response
        print("2. Computing darkness-response signature...", file=sys.stderr)
        summary = build_metabolite_summary(metabolome_data, metabolites_meta)

        # Export summary
        print("3. Exporting analysis results...", file=sys.stderr)
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        export_summary(summary, OUTPUT_DIR / "metabolite_darkness_response.tsv")

        # Print top findings
        print("\n=== Top 10 Metabolites by Darkness Response ===", file=sys.stderr)
        print("(Ranked by absolute intensity change, 0d → 6d darkness)", file=sys.stderr)
        for i, m in enumerate(summary[:10], 1):
            print(f"{i}. {m['metabolite'][:50]:50} | Class: {m['class']:20} | Δ={m['mean_change']:+.3f}", file=sys.stderr)

        print(f"\n✓ Analysis complete! Results in {OUTPUT_DIR}", file=sys.stderr)
        print(f"  - metabolite_darkness_response.tsv: summary of all {len(summary)} metabolites", file=sys.stderr)


if __name__ == "__main__":
    main()

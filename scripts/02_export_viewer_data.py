"""Export a small, viewer-ready JSON summary from the real processed log2FC
tables in data/processed/. Every number in the viewer's UI comes from this
file, and this file comes only from 01_compute_spaceflight_response.py's
output -- nothing here is hand-typed.

Run after 01_compute_spaceflight_response.py.
"""
import json
from pathlib import Path
import pandas as pd

PROCESSED = Path(__file__).resolve().parent.parent / "data" / "processed"
OUT = Path(__file__).resolve().parent.parent / "app" / "src" / "data"
OUT.mkdir(parents=True, exist_ok=True)

STUDIES = {
    "OSD-120": {
        "file": "OSD-120_root_flight_vs_ground_log2fc.csv",
        "log2fc_col": "log2fc_flight_vs_ground",
        "organism_part": "root",
        "comparison": "Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",
    },
    "OSD-314": {
        "file": "OSD-314_seedling_microgravity_vs_1g_log2fc.csv",
        "log2fc_col": "log2fc_microgravity_0g_vs_ground_1g",
        "organism_part": "whole seedling",
        "comparison": "Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",
    },
}

TOP_N = 8


def top_and_bottom(df: pd.DataFrame, col: str, n: int):
    up = df.nlargest(n, col)
    down = df.nsmallest(n, col)
    return up, down


def main():
    summary = {}
    for study_id, cfg in STUDIES.items():
        path = PROCESSED / cfg["file"]
        df = pd.read_csv(path, index_col=0)
        up, down = top_and_bottom(df, cfg["log2fc_col"], TOP_N)

        def rows(sub):
            return [
                {"gene_id": gid, "log2fc": round(float(row[cfg["log2fc_col"]]), 3)}
                for gid, row in sub.iterrows()
            ]

        summary[study_id] = {
            "organism_part": cfg["organism_part"],
            "comparison": cfg["comparison"],
            "n_genes_total": int(len(df)),
            "top_upregulated": rows(up),
            "top_downregulated": rows(down),
            "source_file": f"data/processed/{cfg['file']}",
        }

    out_path = OUT / "spaceflight_top_genes.json"
    out_path.write_text(json.dumps(summary, indent=2) + "\n")
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()

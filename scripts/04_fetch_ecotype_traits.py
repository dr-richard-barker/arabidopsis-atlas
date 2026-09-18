"""Compute real per-ecotype rosette-shape descriptors from Camargo et al. 2014's own
published raw data (PLoS ONE, doi:10.1371/journal.pone.0096889, Methods S2 supplementary
archive, CC BY 4.0 per PLOS ONE's standard license for all article content including
supporting information).

Input: data/raw/camargo2014_rosette_descriptors.csv -- the paper's own
`plosone_rawdata.csv`, downloaded from https://doi.org/10.1371/journal.pone.0096889.s016
(Methods S2) on 2026-09-18 and copied in verbatim (not re-typed, not re-derived).

This computes plain per-ecotype means of the paper's own descriptor columns for the 5 of
its 19 MAGIC-founder accessions this project uses (Col-0, Ler-0, Ws-0, Tsu-0, Edi-0) --
no new formula, no synthetic data, no ecotypes outside what the source actually measured.
Cvi-0 is not a MAGIC founder and is not in this file; its parameters come from a different
real source (Coneva & Chitwood 2018) -- see data/ecotypes/README.md.
"""
import json
from pathlib import Path
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw" / "camargo2014_rosette_descriptors.csv"
PROCESSED_OUT = ROOT / "data" / "processed" / "ecotype_rosette_descriptors.csv"
VIEWER_OUT = ROOT / "app" / "src" / "data" / "ecotype_params.json"

# Source's own ecotype-name spellings (verbatim from the CSV's `ecotype` column) mapped to
# the canonical id this project uses.
TARGET_ECOTYPES = {
    "Col-0": "col0",
    "Ler-0": "ler",
    "WS-0": "ws",
    "Tsu-0": "tsu0",
    "EDi-0": "edi0",
}

DESCRIPTOR_COLUMNS = ["Compactness", "Roundness", "Excentricity", "Area", "Paxratio"]


def main():
    df = pd.read_csv(RAW, skiprows=[1])  # row 0 after header is a "units" placeholder row
    sub = df[df["ecotype"].isin(TARGET_ECOTYPES.keys())].copy()

    summary = sub.groupby("ecotype")[DESCRIPTOR_COLUMNS].agg(["mean", "std", "count"])
    summary.columns = ["_".join(c) for c in summary.columns]
    summary = summary.reset_index()
    summary.to_csv(PROCESSED_OUT, index=False)
    print(f"Wrote {PROCESSED_OUT}")

    means = sub.groupby("ecotype")[DESCRIPTOR_COLUMNS].mean()
    viewer_data = {}
    for source_name, ecotype_id in TARGET_ECOTYPES.items():
        row = means.loc[source_name]
        viewer_data[ecotype_id] = {
            "sourceName": source_name,
            "compactness": round(float(row["Compactness"]), 4),
            "roundness": round(float(row["Roundness"]), 2),
            "eccentricity": round(float(row["Excentricity"]), 4),
            "relativeAreaVsCol0": None,  # filled below once Col-0's mean is known
            "n": int(sub[sub["ecotype"] == source_name].shape[0]),
        }
    col0_area = means.loc["Col-0", "Area"]
    for source_name, ecotype_id in TARGET_ECOTYPES.items():
        viewer_data[ecotype_id]["relativeAreaVsCol0"] = round(float(means.loc[source_name, "Area"] / col0_area), 3)

    VIEWER_OUT.parent.mkdir(parents=True, exist_ok=True)
    VIEWER_OUT.write_text(json.dumps(viewer_data, indent=2) + "\n")
    print(f"Wrote {VIEWER_OUT}")
    print(json.dumps(viewer_data, indent=2))


if __name__ == "__main__":
    main()

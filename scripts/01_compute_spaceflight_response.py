"""Compute a basic, honestly-scoped spaceflight-response summary from real
NASA OSDR raw RNA-seq count matrices.

Inputs (real data, copied from the already-fetched OSDR downloads in
arabidopsis-drem-osdr/data/scan_counts/, originally sourced from
https://osdr.nasa.gov/osdr/data/osd/meta/{120,314}):
  data/raw/OSD-120_counts.csv  -- A. thaliana root, Ground Control (GC) vs
                                   Flight (FLT), Col-0 / Ws / Col-0-PhyD, Day 13
  data/raw/OSD-314_counts.csv  -- A. thaliana whole seedling, 1g / 0.3g / 0g
                                   (SpaceX-4/11), red-light vs dark

Method, deliberately simple and stated as such: per sample, convert raw counts
to counts-per-million (CPM) to correct for sequencing-depth differences
between samples, average CPM within each condition group, then report
log2((flight_mean + 1) / (ground_mean + 1)).

This is a mean-ratio summary, NOT a statistically tested differential
expression analysis (no DESeq2/edgeR, no p-values, no multiple-testing
correction, no covariate control for genotype/light). Do not describe these
numbers as "significantly differentially expressed" anywhere downstream --
describe them only as "mean log2 fold-change" and link back to this script.
"""
import pandas as pd
from pathlib import Path

RAW = Path(__file__).resolve().parent.parent / "data" / "raw"
OUT = Path(__file__).resolve().parent.parent / "data" / "processed"
OUT.mkdir(parents=True, exist_ok=True)


def cpm(counts: pd.DataFrame) -> pd.DataFrame:
    lib_size = counts.sum(axis=0)
    return counts.div(lib_size, axis=1) * 1e6


def log2fc_summary(counts_path: Path, group_a_substr: str, group_b_substr: str,
                    label_a: str, label_b: str) -> pd.DataFrame:
    counts = pd.read_csv(counts_path, index_col=0)
    cols_a = [c for c in counts.columns if group_a_substr in c]
    cols_b = [c for c in counts.columns if group_b_substr in c]
    if not cols_a or not cols_b:
        raise ValueError(
            f"{counts_path.name}: expected columns containing "
            f"'{group_a_substr}' and '{group_b_substr}', found "
            f"{len(cols_a)} and {len(cols_b)} respectively -- check column names."
        )
    normalized = cpm(counts)
    mean_a = normalized[cols_a].mean(axis=1)
    mean_b = normalized[cols_b].mean(axis=1)
    result = pd.DataFrame({
        f"mean_cpm_{label_a}": mean_a,
        f"mean_cpm_{label_b}": mean_b,
        "n_" + label_a: len(cols_a),
        "n_" + label_b: len(cols_b),
        "log2fc_" + label_b + "_vs_" + label_a: __import__("numpy").log2((mean_b + 1) / (mean_a + 1)),
    })
    result.index.name = "gene_id"
    return result.sort_values(result.columns[-1], ascending=False)


def main():
    osd120 = log2fc_summary(
        RAW / "OSD-120_counts.csv",
        group_a_substr="_GC_", group_b_substr="_FLT_",
        label_a="ground", label_b="flight",
    )
    osd120_path = OUT / "OSD-120_root_flight_vs_ground_log2fc.csv"
    osd120.to_csv(osd120_path)
    print(f"OSD-120 (root): {len(osd120)} genes -> {osd120_path}")

    osd314 = log2fc_summary(
        RAW / "OSD-314_counts.csv",
        group_a_substr="_1g_", group_b_substr="_0g_",
        label_a="ground_1g", label_b="microgravity_0g",
    )
    osd314_path = OUT / "OSD-314_seedling_microgravity_vs_1g_log2fc.csv"
    osd314.to_csv(osd314_path)
    print(f"OSD-314 (whole seedling): {len(osd314)} genes -> {osd314_path}")


if __name__ == "__main__":
    main()

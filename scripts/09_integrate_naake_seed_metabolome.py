"""Export Naake et al. (2024) seed/leaf metabolite GWAS loci into tidy CSVs.

Naake T, et al. Plant Physiol 194(3):1705-1721. doi:10.1093/plphys/kiad511
Supplement fetched per data/raw/SUPPLEMENTARY_SOURCES.md.

Naake mapped mass features from seed replicate 1, seed replicate 2, leaf Wu
(Wu et al. 2018 leaves) and leaf Zhu (Zhu et al. 2022, Plant Cell, dark-induced
senescence; negative mode only) with one GWAS pipeline and aligned them by
m/z/RT. Each row of Supplemental Data Sets S1-S3 is one aligned locus for one
feature pair; a set's columns are filled when that set mapped the feature there.

Outputs (data/processed/metabolome/):
  naake_gwas_loci.csv.gz       long: dataset, mode, feature, set, locus, LOD, AGI span, row id
  naake_annotated_qtl.csv      Supplemental Tables S3/S4 (annotated metabolites, seed vs leaf)
  naake_annotated_metabolites.csv  Supplemental Tables S1/S2 (annotations, H2)
"""

import argparse
import sys
from pathlib import Path

import pandas as pd

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gwas_loci import parse_agi_span  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw" / "naake_2024_supplementary"
OUT = ROOT / "data" / "processed" / "metabolome"
TABLES = RAW / "PP2023RA01091D_Supplemental_Tables.xlsx"

# S1 (negative) is S3 without the leaf_zhu columns -- verified identical -- so it is skipped.
DATASETS = {
    "S2": ("Supplemental Dataset S2_gwas_complete_met_all_trueLociLOD_pos Thomas Naake.txt", "positive"),
    "S3": ("Supplemental Dataset S3_gwas_complete_met_all_trueLociLOD_rep12_normalized_neg Thomas Naake.txt", "negative"),
}
SETS = {"seed1": "seed_rep1", "seed2": "seed_rep2", "leaf2": "leaf_wu", "leaf_feng": "leaf_zhu"}


def read_sheet(sheet):
    raw = pd.read_excel(TABLES, sheet_name=sheet, header=None)
    hdr = next(i for i in range(1, len(raw)) if raw.iloc[i].notna().sum() >= 3)
    df = pd.read_excel(TABLES, sheet_name=sheet, header=hdr)
    df.columns = [str(c).replace("\xa0", " ").strip() for c in df.columns]
    return df.dropna(how="all")


def export_loci():
    frames = []
    for ds, (fname, mode) in DATASETS.items():
        df = pd.read_csv(RAW / fname, sep="\t", low_memory=False)
        df = df.reset_index(drop=True)
        feature = df["met_rep1"].astype(str) + "|" + df["met_rep2"].astype(str)
        for suffix, set_name in SETS.items():
            if f"locusID_{suffix}" not in df.columns:
                continue
            sub = pd.DataFrame({
                "dataset": ds,
                "mode": mode,
                "row": df.index,
                "feature": feature,
                "set": set_name,
                "locus_id": df[f"locusID_{suffix}"],
                "lod": pd.to_numeric(df[f"bestSNP_lod_{suffix}"], errors="coerce"),
            }).dropna(subset=["locus_id", "lod"])
            span = df.loc[sub["row"], f"locus_tag_{suffix}"].map(parse_agi_span).set_axis(sub.index)
            sub = sub[span.notna()].copy()
            sub[["chrom", "agi_start", "agi_end"]] = pd.DataFrame(span[span.notna()].tolist(), index=sub.index)
            sub["lod"] = sub["lod"].round(3)
            frames.append(sub)
        print(f"  {ds} ({mode}): {len(df):,} rows")
    loci = pd.concat(frames, ignore_index=True)
    loci.to_csv(OUT / "naake_gwas_loci.csv.gz", index=False, compression={"method": "gzip", "mtime": 0})
    print(f"  -> naake_gwas_loci.csv.gz: {len(loci):,} set-locus records")
    print(loci.groupby(["dataset", "set"]).size().rename("records").to_string())


def export_annotated():
    qtl = []
    for sheet, mode in [("Table S3", "negative"), ("Table S4", "positive")]:
        df = read_sheet(sheet).assign(mode=mode)
        qtl.append(df)
    qtl = pd.concat(qtl, ignore_index=True)
    qtl.to_csv(OUT / "naake_annotated_qtl.csv", index=False)
    mets = pd.concat([read_sheet("Table S1").assign(mode="negative"),
                      read_sheet("Table S2").assign(mode="positive")], ignore_index=True)
    mets.to_csv(OUT / "naake_annotated_metabolites.csv", index=False)
    genes = read_sheet("Table S13")
    genes = genes[genes["product_type"] == "protein_coding"]["locus_tag"].astype(str).str.split(".").str[0]
    genes.drop_duplicates().sort_values().to_frame("agi").to_csv(OUT / "tair9_protein_coding.csv", index=False)
    print(f"  -> tair9_protein_coding.csv: {genes.nunique()} genes (Naake Table S13)")
    print(f"  -> naake_annotated_qtl.csv: {len(qtl)} rows; naake_annotated_metabolites.csv: {len(mets)} rows")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("cmd", choices=["integrate"])
    ap.parse_args()
    if not TABLES.exists():
        sys.exit(f"Missing {TABLES}; fetch per data/raw/SUPPLEMENTARY_SOURCES.md")
    OUT.mkdir(parents=True, exist_ok=True)
    print("Naake 2024 -> tidy loci")
    export_loci()
    export_annotated()


if __name__ == "__main__":
    main()

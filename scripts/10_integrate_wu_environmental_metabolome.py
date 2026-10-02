"""Export Wu et al. (2018) leaf metabolite GWAS data into tidy CSVs.

Wu S, Tohge T, et al. Mol Plant 11(1):118-134 (2018). doi:10.1016/j.molp.2017.08.012
309 accessions grown under two conditions (control, stress); untargeted LC-MS;
GWAS per condition and ion mode. Supplement fetched per data/raw/SUPPLEMENTARY_SOURCES.md.

Outputs (data/processed/metabolome/):
  wu_accessions.csv               Supp. Table 1
  wu_identified_metabolites.csv   Supp. Table 2, flattened (peak IDs per condition x mode)
  wu_leaf_identified_long.csv     identified metabolites x accession x condition x mode (Supp. Table 3)
  wu_gwas_loci.csv                one row per locus per condition x mode (Supp. Table 5, LOD > 8)
"""

import argparse
import sys
from pathlib import Path

import pandas as pd

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gwas_loci import AGI_RE  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw" / "wu_2017_supplementary"
OUT = ROOT / "data" / "processed" / "metabolome"
PEAK_RE = r"^[PN][CS]_\d+$"
SHEETS = {"ControlPos": ("control", "positive"), "ControlNeg": ("control", "negative"),
          "StressPos": ("stress", "positive"), "StressNeg": ("stress", "negative")}


def export_accessions():
    acc = pd.read_excel(RAW / "mmc2.xlsx", sheet_name="accession", header=1).dropna(subset=["ecotype.name"])
    acc = acc.rename(columns={"ecotype.name": "accession", "ABRC.name": "abrc", "name": "accession_name", "NO": "no"})
    acc.to_csv(OUT / "wu_accessions.csv", index=False)
    print(f"  wu_accessions.csv: {len(acc)} accessions")


def export_identified():
    t = pd.read_excel(RAW / "mmc3.xlsx", header=None).iloc[3:]
    t = t.iloc[:, [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14]]
    t.columns = ["peak_control_pos", "peak_control_neg", "peak_stress_pos", "peak_stress_neg",
                 "mz_pos", "mz_neg", "rt", "formula", "metabolite_class", "metabolite_name", "alias", "id_level"]
    t = t.dropna(subset=["metabolite_name"]).copy()
    t["formula"] = t["formula"].astype(str).str.strip()
    t["metabolite_name"] = t["metabolite_name"].astype(str).str.strip()
    t.to_csv(OUT / "wu_identified_metabolites.csv", index=False)
    print(f"  wu_identified_metabolites.csv: {len(t)} metabolites")
    return t


def export_intensities(ident):
    rows = []
    for sheet, cond in [("Normalized data_control", "control"), ("Normalized data_stress", "stress")]:
        d = pd.read_excel(RAW / "mmc4.xlsx", sheet_name=sheet, header=1)
        d = d[d.iloc[:, 0].astype(str).str.match(PEAK_RE)].set_index(d.columns[0])
        eco = [c for c in d.columns if str(c).startswith("ecotype.")]
        for mode, col in [("positive", f"peak_{cond}_pos"), ("negative", f"peak_{cond}_neg")]:
            m = ident.dropna(subset=[col])
            m = m[m[col].isin(d.index)]
            long = d.loc[m[col], eco].set_axis(m["metabolite_name"].values).stack().rename("intensity").reset_index()
            long.columns = ["metabolite_name", "accession", "intensity"]
            rows.append(long.assign(condition=cond, mode=mode))
        print(f"  {sheet}: {d.shape[0]} features x {len(eco)} accessions")
    out = pd.concat(rows, ignore_index=True)
    out.to_csv(OUT / "wu_leaf_identified_long.csv", index=False)
    print(f"  wu_leaf_identified_long.csv: {len(out):,} rows, {out.metabolite_name.nunique()} metabolites")


def export_loci():
    frames = []
    for sheet, (cond, mode) in SHEETS.items():
        d = pd.read_excel(RAW / "mmc5.xlsx", sheet_name=sheet, header=1)
        peaks = [c for c in d.columns if str(c).startswith("Peak.ID")]
        for locus, g in d.groupby("locusID", sort=False):
            agi = [(int(m.group(1)), int(m.group(2))) for m in (AGI_RE.match(str(t)) for t in g["locus_tag"]) if m]
            traits = {v for v in g[peaks].values.ravel() if isinstance(v, str) and v != "."}
            frames.append({
                "condition": cond, "mode": mode, "locus_id": locus,
                "chrom": int(g["chrom"].iloc[0]), "bp_start": int(g["pos_i"].min()), "bp_end": int(g["pos_f"].max()),
                "agi_start": min(i for _, i in agi) if agi else None, "agi_end": max(i for _, i in agi) if agi else None,
                "best_lod": round(float(g["best_SNP_lod"].max()), 3), "n_genes": g["locus_tag"].nunique(),
                "n_traits": len(traits), "traits": ";".join(sorted(traits)),
                "genes": ";".join(g["locus_tag"].astype(str).unique()),
            })
    loci = pd.DataFrame(frames)
    loci.to_csv(OUT / "wu_gwas_loci.csv", index=False)
    print(f"  wu_gwas_loci.csv: {len(loci)} condition x mode loci")
    print(loci.groupby(["condition", "mode"]).size().rename("loci").to_string())


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("cmd", choices=["integrate"])
    ap.parse_args()
    if not (RAW / "mmc4.xlsx").exists():
        sys.exit(f"Missing {RAW}/mmc*.xlsx; fetch per data/raw/SUPPLEMENTARY_SOURCES.md")
    OUT.mkdir(parents=True, exist_ok=True)
    print("Wu 2018 -> tidy tables")
    export_accessions()
    ident = export_identified()
    export_intensities(ident)
    export_loci()


if __name__ == "__main__":
    main()

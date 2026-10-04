"""Export the metabolome x OSD-522 link for the atlas's digital-twin panel (run scripts 11-13 first).

Writes app/src/data/metabolome_spaceflight.json:
  flight    per Wu metabolite class: OSD-522 transcript shift (script 12, permutation q) and shoot
            protein shift per fraction (script 13)
  ecotypes  per atlas ecotype: matching Wu accession, and per class the median percentile of that
            accession among Wu control accessions, and of its Zhu darkness response (6 d - 0 d)
            among Zhu accessions where present
Every number is read from the analysis outputs; nothing is typed in.
"""

import importlib.util
import json
from pathlib import Path

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
MET = ROOT / "data" / "processed" / "metabolome"
LINK = ROOT / "results" / "osd522_metabolome_link"
META = ROOT / "results" / "metabolome_meta_analysis"
OUT = ROOT / "app" / "src" / "data" / "metabolome_spaceflight.json"

spec = importlib.util.spec_from_file_location("link12", Path(__file__).with_name("12_link_osd522.py"))
link12 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(link12)

# Atlas ecotype id -> exact accession name in Wu Supp. Table 1. Ler differs: the atlas morphology
# is Ler-0 (Camargo 2014) but Wu's panel only has Ler-1, so the panel says so.
ATLAS_TO_WU = {"col0": "Col-0", "ler": "Ler-1", "ws": "Ws-0", "cvi0": "Cvi-0", "tsu0": "Tsu-0", "edi0": "Edi-0"}
CLASSES = list(link12.REF_SHEETS.values())


def pct(series, acc):
    s = series.dropna()
    return float((s < s[acc]).mean() * 100) if acc in s.index else None


def main():
    pw = pd.read_csv(LINK / "pathway_flight_shift.tsv", sep="\t")
    pp = pd.read_csv(LINK / "proteome_pathway_shift.tsv", sep="\t")
    conc = pd.read_csv(LINK / "proteome_transcript_concordance.tsv", sep="\t")
    ident = pd.read_csv(MET / "wu_identified_metabolites.csv")
    acc = pd.read_csv(MET / "wu_accessions.csv")
    wl = pd.read_csv(MET / "wu_leaf_identified_long.csv")
    zhu = pd.read_csv(MET / "darkness_metabolome.csv")
    matches = pd.read_csv(META / "zhu_wu_metabolite_matches.tsv", sep="\t")

    flight = {}
    for cls in CLASSES:
        r = pw[(pw.metabolite_class == cls) & (pw.gene_set == "Wu reference pathway genes")].iloc[0]
        prot = {}
        for _, p in pp[pp.metabolite_class == cls].iterrows():
            if pd.notna(p.get("median_protein_log2fc")):
                prot[p.fraction] = {"median_log2fc": p.median_protein_log2fc, "n": int(p.proteins_detected),
                                    "up": int(p.n_up_adj_p05), "down": int(p.n_down_adj_p05)}
        flight[cls] = {"rna_median_log2fc": r.median_log2fc, "rna_q_permutation": round(float(r.q_permutation), 4),
                       "rna_n": int(r.n_tested), "rna_up": int(r.n_up_fdr05), "rna_down": int(r.n_down_fdr05),
                       "protein": prot}

    wl = wl.assign(pref=(wl["mode"] == "negative").astype(int)).sort_values("pref")
    ctrl = wl[wl.condition == "control"].drop_duplicates(["metabolite_name", "accession"], keep="last")
    ctrl = ctrl.pivot_table(index="accession", columns="metabolite_name", values="intensity")
    cls_of = {m: link12.CLASS_MAP.get(c) for m, c in zip(ident.metabolite_name, ident.metabolite_class)}

    zw = zhu.pivot_table(index="accession", columns=["metabolite_id", "timepoint"], values="intensity")
    zcls = {z: link12.CLASS_MAP.get(c) for z, c in zip(matches.metabolite_id, matches.metabolite_class)}
    zdelta = {}
    for z in matches.metabolite_id:
        if (z, "0d darkness") in zw.columns and (z, "6d darkness") in zw.columns:
            zdelta[z] = zw[(z, "6d darkness")] - zw[(z, "0d darkness")]

    ecotypes = {}
    for atlas_id, name in ATLAS_TO_WU.items():
        row = acc[acc.accession_name == name]
        if row.empty:
            continue
        a = row.accession.iloc[0]
        per = {}
        for cls in CLASSES:
            mets = [m for m in ctrl.columns if cls_of.get(m) == cls]
            vals = [v for v in (pct(ctrl[m], a) for m in mets) if v is not None]
            zv = [v for v in (pct(d, a) for z, d in zdelta.items() if zcls.get(z) == cls) if v is not None]
            per[cls] = {"wu_control_pct_median": round(float(np.median(vals)), 1) if vals else None,
                        "wu_n_metabolites": len(vals),
                        "zhu_dark_response_pct_median": round(float(np.median(zv)), 1) if zv else None,
                        "zhu_n_metabolites": len(zv)}
        ecotypes[atlas_id] = {"wu_accession_name": name, "accession_id": a,
                              "in_wu_control": a in ctrl.index, "in_zhu": a in zw.index, "classes": per}

    out = {
        "generated_by": "scripts/14_export_metabolome_twin.py",
        "osd": "OSD-522",
        "classes": CLASSES,
        "n_wu_control_accessions": int(ctrl.shape[0]),
        "n_zhu_accessions": int(zw.shape[0]),
        "transcript_protein_spearman": {r.fraction: r.spearman_rho_all for r in conc.itertuples()},
        "flight": flight,
        "ecotypes": ecotypes,
    }
    OUT.write_text(json.dumps(out, indent=1, allow_nan=False))
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size:,} bytes)")
    for k, v in ecotypes.items():
        print(k, v["wu_accession_name"], "zhu" if v["in_zhu"] else "no-zhu",
              {c: v["classes"][c]["wu_control_pct_median"] for c in CLASSES})


if __name__ == "__main__":
    main()

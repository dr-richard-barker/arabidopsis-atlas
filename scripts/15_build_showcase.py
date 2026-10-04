"""Render the CoSE-themed showcase page app/public/metabolome.html (served at /metabolome.html).

Fills scripts/templates/metabolome_showcase.html with values read from the analysis outputs of
scripts 11-14 and copies the figures to app/public/metabolome/. Run after scripts 11-14; then
`npm run build` copies app/public/ into docs/ for GitHub Pages.
"""

import json
import re
import shutil
from pathlib import Path
from string import Template

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "results" / "metabolome_meta_analysis"
LINK = ROOT / "results" / "osd522_metabolome_link"
MET = ROOT / "data" / "processed" / "metabolome"
PROC = ROOT / "data" / "processed"
TEMPLATE = Path(__file__).with_name("templates") / "metabolome_showcase.html"
OUT = ROOT / "app" / "public" / "metabolome.html"
FIG_DIR = ROOT / "app" / "public" / "metabolome"
FIGURES = [META / "plots" / "naake_set_combinations.png", META / "plots" / "leaf_accession_replication.png",
           LINK / "pathway_flight_shift.png", LINK / "proteome_vs_transcript.png"]


def tsv(p):
    return pd.read_csv(p, sep="\t")


def sign_cls(v):
    return "down" if v < 0 else "up" if v > 0 else ""


def main():
    twin = json.loads((ROOT / "app" / "src" / "data" / "metabolome_spaceflight.json").read_text())
    mlc = tsv(META / "metabolite_locus_concordance.tsv").dropna(subset=["wu_match"])
    regions = tsv(META / "wu_condition_regions.tsv")
    rep = tsv(META / "leaf_accession_replication.tsv")
    acc = tsv(META / "accession_overlap.tsv").set_index("panel").accessions
    conc = tsv(META / "naake_lod_concordance.tsv")
    span = tsv(META / "naake_locus_span_coverage.tsv")
    pw = tsv(LINK / "pathway_flight_shift.tsv")
    pc = tsv(LINK / "proteome_transcript_concordance.tsv").set_index("fraction")
    rna = pd.read_csv(PROC / "OSD-522_deseq2.csv", index_col=0)
    prot = pd.read_csv(PROC / "OSD-522_proteome_shoot.csv")
    bridge = tsv(LINK / "metabolite_flight_bridge.tsv")

    agree_line = re.search(r"same direction in (\d+) \(two-sided binomial vs 0\.5: p = ([0-9.e-]+)\)",
                           (LINK / "RESULTS.md").read_text())
    both = bridge.dropna(subset=["zhu_dark_median_delta", "wu_stress_median_delta"])

    ref = pw[pw.gene_set == "Wu reference pathway genes"]
    rows = []
    for r in ref.itertuples():
        rows.append(f'<tr><td>{r.metabolite_class}</td><td class="num">{r.n_tested}</td>'
                    f'<td class="num {sign_cls(r.median_log2fc)}">{r.median_log2fc:+.2f}</td>'
                    f'<td class="num">{r.n_down_fdr05} / {r.n_up_fdr05}</td>'
                    f'<td class="num">{r.q_permutation:.3f}</td></tr>')
    col0 = twin["ecotypes"]["col0"]["classes"]
    col0_rows = [f'<tr><td>{c}</td><td class="num">{col0[c]["wu_n_metabolites"]}</td>'
                 f'<td class="num">{int(col0[c]["wu_control_pct_median"] + 0.5)}</td>'
                 f'<td class="num {sign_cls(twin["flight"][c]["rna_median_log2fc"])}">{twin["flight"][c]["rna_median_log2fc"]:+.2f}</td></tr>'
                 for c in twin["classes"]]

    seed = conc[(conc.dataset == "S3") & (conc.set_a == "seed_rep1") & (conc.set_b == "seed_rep2")].iloc[0]
    seed_cov = span[span.set.isin(["seed_rep1", "seed_rep2", "leaf_wu"])].genes_covered_frac
    rho_prot = max(abs(pc.loc["SOL", "spearman_rho_all"]), abs(pc.loc["MEM", "spearman_rho_all"]))
    values = {
        "n_wu": int(acc["Wu 2018 stress (leaf)"]), "n_wu_ctrl": int(acc["Wu 2018 control (leaf)"]),
        "n_zhu": int(acc["Zhu 2024 darkness (leaf)"]), "n_zhu_wu": int(acc["Zhu 2024 ∩ Wu control"]),
        "n_rna_tested": f"{int(rna.stat.notna().sum()):,}", "n_prot": f"{len(prot):,}",
        "conc_obs": int(mlc.wu_control_in_naake_seed.sum()), "conc_n": len(mlc),
        "conc_exp": f"{mlc.wu_control_seed_expected.sum():.0f}",
        "n_classes_down": int(((ref.q_permutation < 0.05) & (ref.median_log2fc < 0)).sum()),
        "rho_prot": f"{rho_prot:.2f}".replace("0.", "0.", 1),
        "rho_seed": f"{seed.rho_feature_max:.3f}",
        "wu_regions": len(regions), "wu_ctrl_only": int((regions.conditions == "control").sum()),
        "wu_stress_only": int((regions.conditions == "stress").sum()),
        "wu_both": int((regions.conditions == "control+stress").sum()),
        "n_matched": len(rep), "rho_base": f"{rep.rho_d0_vs_control.median():.2f}",
        "n_base_sig": int((rep.q_d0_vs_control < 0.05).sum()), "n_base_test": int(rep.rho_d0_vs_control.notna().sum()),
        "agree": int(agree_line.group(1)), "agree_n": len(both), "agree_p": f"{float(agree_line.group(2)):.2g}",
        "n_rna_sig": int((rna.fdr < 0.05).sum()), "n_rna_up": int(((rna.fdr < 0.05) & (rna.log2fc > 0)).sum()),
        "n_rna_down": int(((rna.fdr < 0.05) & (rna.log2fc < 0)).sum()),
        "pathway_rows": "\n      ".join(rows), "col0_rows": "\n      ".join(col0_rows),
        "rho_sol": f"{pc.loc['SOL', 'spearman_rho_all']:.2f}", "rho_mem": f"{pc.loc['MEM', 'spearman_rho_all']:.2f}",
        "naake_cov": f"{seed_cov.min() * 100:.0f}–{seed_cov.max() * 100:.0f}",
    }
    html = Template(TEMPLATE.read_text()).substitute(values)
    OUT.write_text(html)
    FIG_DIR.mkdir(parents=True, exist_ok=True)
    for f in FIGURES:
        shutil.copyfile(f, FIG_DIR / f.name)
    print(f"wrote {OUT.relative_to(ROOT)} and {len(FIGURES)} figures")
    for k, v in values.items():
        if not k.endswith("_rows"):
            print(f"  {k} = {v}")


if __name__ == "__main__":
    main()

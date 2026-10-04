"""Link the terrestrial metabolome baselines (Wu 2018, Zhu 2024) to the OSD-522 spaceflight transcriptome.

OSD-522 (BRIC-LED-001): A. thaliana Col-0 seedlings grown 10 d on the ISS, shoots, 6 flight vs 6
ground (read from the GeneLab runsheet). OSDR ships unnormalised counts but no differential table,
so `fetch` downloads GeneLab's RSEM counts + runsheet and `analyze` runs PyDESeq2.

Pathway sets are tested two ways: Mann-Whitney on Wald statistics (anti-conservative under gene-gene
correlation) and a sample-label permutation test over all 924 6-vs-6 relabellings (correlation-robust).

Links (no metabolite was measured in flight; OSDR has no plant metabolomics):
  1. Pathway gene sets: Wu Supp. Table 6 reference genes for five metabolite classes, and genes
     inside Wu GWAS loci (LOD > 8) of identified metabolites of each class. Competitive test:
     Mann-Whitney U of each set's DESeq2 Wald statistic vs all other tested genes, BH-adjusted.
  2. Metabolite bridge table: for each Wu identified metabolite, Col-0's percentile in Wu's
     panel (Col-0 is the flown ecotype), the Wu stress response, the Zhu darkness response
     (metabolites matched in script 11), and the flight shift of that metabolite's own GWAS-locus
     genes and of its class's pathway genes.

Outputs: data/processed/OSD-522_deseq2.csv, results/osd522_metabolome_link/*
"""

import argparse
import sys
from itertools import combinations
import urllib.request
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.stats import binomtest, mannwhitneyu

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
PROC = ROOT / "data" / "processed"
MET = PROC / "metabolome"
RES = ROOT / "results" / "osd522_metabolome_link"
META_RES = ROOT / "results" / "metabolome_meta_analysis"
SIBLING_T01 = ROOT.parent / "Photorespiration_multiomics_microgravity" / "results" / "tables" / "T01_osd522_transcriptome.tsv"

DL = "https://osdr.nasa.gov/geode-py/ws/studies/OSD-522/download?source=datamanager&file={}"
COUNTS = "GLDS-522_rna_seq_RSEM_Unnormalized_Counts_GLbulkRNAseq.csv"
RUNSHEET = "GLDS-522_rna_seq_bulkRNASeq_v2_runsheet.csv"
FLIGHT, GROUND = "SpaceFlight", "GroundControl"
COL0 = "ecotype.6909"

REF_SHEETS = {"Ref_Glucosinolates": "Glucosinolate", "Ref_Flavonoids": "Flavonoid",
              "Ref_Phenylpropanoids": "Phenylpropanoid", "Ref_Amino acids": "Amino acid", "Ref_Amines": "Amine"}
CLASS_MAP = {"Glucosinolate": "Glucosinolate", "Flavonoid": "Flavonoid", "Phenylpropanoid": "Phenylpropanoid",
             "Amino acid": "Amino acid", "Amino acid and derivative": "Amino acid",
             "Amino acid derivative": "Amino acid", "Amino acid deri": "Amino acid", "Amine": "Amine"}

INK, INK2, SURFACE, GRID = "#0b0b0b", "#52514e", "#fcfcfb", "#e4e3df"
BLUE, ORANGE = "#2a78d6", "#eb6834"


def bh(p):
    p = np.asarray(p, float)
    order = np.argsort(p)
    ranked = p[order] * len(p) / (np.arange(len(p)) + 1)
    q = np.minimum.accumulate(ranked[::-1])[::-1]
    out = np.empty_like(q)
    out[order] = np.minimum(q, 1)
    return out


def fetch():
    for name in [COUNTS, RUNSHEET]:
        dest = RAW / name
        if dest.exists():
            print(f"  have {name}")
            continue
        with urllib.request.urlopen(DL.format(name), timeout=120) as r:
            dest.write_bytes(r.read())
        print(f"  fetched {name} ({dest.stat().st_size:,} bytes)")


# ---------- 1. differential expression ----------

def deseq():
    from pydeseq2.dds import DeseqDataSet
    from pydeseq2.ds import DeseqStats

    rs = pd.read_csv(RAW / RUNSHEET)
    design = pd.DataFrame({
        "condition": rs["Factor Value[Spaceflight]"].str.strip().str.lower().map(
            {"space flight": FLIGHT, "ground control": GROUND}).values,
        "part": rs["Factor Value[Organism Part]"].str.strip().str.lower().values,
    }, index=rs["Sample Name"].astype(str))
    if design.condition.isna().any() or set(design.part) != {"plant shoots"}:
        sys.exit(f"unexpected runsheet factors: {design.condition.unique()} {design.part.unique()}")
    counts = pd.read_csv(RAW / COUNTS, index_col=0)[design.index].round().astype(int)
    counts = counts[counts.sum(axis=1) >= 10]
    n = design.condition.value_counts().to_dict()
    print(f"  {counts.shape[0]:,} genes with >=10 reads; {n}")
    dds = DeseqDataSet(counts=counts.T, metadata=design[["condition"]], design_factors="condition",
                       refit_cooks=True, quiet=True)
    dds.deseq2()
    st = DeseqStats(dds, contrast=["condition", FLIGHT, GROUND], quiet=True)
    st.summary()
    res = st.results_df.rename(columns={"log2FoldChange": "log2fc", "padj": "fdr"})
    res.index.name = "agi"
    res.to_csv(PROC / "OSD-522_deseq2.csv", float_format="%.6g")
    pos = counts[(counts > 0).all(axis=1)]
    logc = np.log(pos)
    sf = np.exp((logc.sub(logc.mean(axis=1), axis=0)).median(axis=0))
    lognorm = np.log2(counts / sf + 1)
    print(f"  FDR<0.05: {int((res.fdr < 0.05).sum())} genes "
          f"({int(((res.fdr < 0.05) & (res.log2fc > 0)).sum())} up, {int(((res.fdr < 0.05) & (res.log2fc < 0)).sum())} down)")
    return res, lognorm, (design.condition == FLIGHT).values


def permutation_t(lognorm, is_flight):
    """Welch t (flight - ground) per gene for every 6-vs-6 relabelling of the 12 samples (924)."""
    x = lognorm.values
    n = x.shape[1]
    k = int(is_flight.sum())
    labels = [np.isin(np.arange(n), c) for c in combinations(range(n), k)]
    obs = next(i for i, l in enumerate(labels) if (l == is_flight).all())
    t = np.empty((len(labels), x.shape[0]))
    for i, l in enumerate(labels):
        a, b = x[:, l], x[:, ~l]
        se = np.sqrt(a.var(axis=1, ddof=1) / a.shape[1] + b.var(axis=1, ddof=1) / b.shape[1])
        t[i] = np.where(se > 0, (a.mean(axis=1) - b.mean(axis=1)) / np.where(se > 0, se, 1), 0)
    return t, obs


def perm_p(t_perm, obs, genes_idx):
    """Self-contained-of-background set test robust to gene-gene correlation: set mean t minus
    all-gene mean t, compared against the same score under every sample relabelling."""
    score = t_perm[:, genes_idx].mean(axis=1) - t_perm.mean(axis=1)
    return float((np.abs(score) >= abs(score[obs]) - 1e-12).mean())


# ---------- 2. gene sets ----------

def reference_sets():
    path = RAW / "wu_2017_supplementary" / "mmc6.xlsx"
    sets = {}
    for sheet, cls in REF_SHEETS.items():
        d = pd.read_excel(path, sheet_name=sheet, header=None).iloc[2:, 0].dropna().astype(str)
        sets[cls] = set(d.str.upper().str.extract(r"(AT[1-5]G\d{5})")[0].dropna())
    return sets


def gwas_locus_sets(ident, loci):
    """Genes in Wu GWAS loci whose traits include an identified metabolite, per class and per metabolite."""
    peak_to_met = {}
    for r in ident.itertuples():
        for col in ["peak_control_pos", "peak_control_neg", "peak_stress_pos", "peak_stress_neg"]:
            v = getattr(r, col)
            if isinstance(v, str):
                peak_to_met[v] = r.metabolite_name
    per_met = {}
    for r in loci.itertuples():
        genes = set(str(r.genes).split(";"))
        for t in str(r.traits).split(";"):
            if t in peak_to_met:
                per_met.setdefault(peak_to_met[t], set()).update(genes)
    cls_of = dict(zip(ident.metabolite_name, ident.metabolite_class.map(CLASS_MAP)))
    per_cls = {}
    for m, g in per_met.items():
        if isinstance(cls_of.get(m), str):
            per_cls.setdefault(cls_of[m], set()).update(g)
    return per_cls, per_met


def set_test(res, genes, perm=None):
    tested = res.dropna(subset=["stat"])
    inset = tested.index.isin(list(genes))
    k = int(inset.sum())
    if k < 5:
        return {"n_genes_in_set": len(genes), "n_tested": k}
    a, b = tested.stat[inset], tested.stat[~inset]
    sig = tested.fdr < 0.05
    return {"n_genes_in_set": len(genes), "n_tested": k,
            "median_log2fc": round(float(tested.log2fc[inset].median()), 3),
            "median_wald_stat": round(float(a.median()), 3),
            "n_up_fdr05": int((sig & inset & (tested.log2fc > 0)).sum()),
            "n_down_fdr05": int((sig & inset & (tested.log2fc < 0)).sum()),
            "p_mannwhitney": mannwhitneyu(a, b, alternative="two-sided").pvalue,
            "p_permutation": perm_p(perm[0], perm[1], np.flatnonzero(perm[2].isin(list(genes))))
            if perm is not None else None}


def pathway_tests(res, ref, gw, perm, out):
    rows = []
    for cls in REF_SHEETS.values():
        rows.append({"metabolite_class": cls, "gene_set": "Wu reference pathway genes", **set_test(res, ref[cls], perm)})
        if cls in gw:
            rows.append({"metabolite_class": cls, "gene_set": "Wu GWAS-locus genes", **set_test(res, gw[cls], perm)})
    df = pd.DataFrame(rows)
    ok = df.p_mannwhitney.notna()
    df.loc[ok, "q_mannwhitney"] = bh(df.loc[ok, "p_mannwhitney"])
    df.loc[ok, "q_permutation"] = bh(df.loc[ok, "p_permutation"])
    df.to_csv(out / "pathway_flight_shift.tsv", sep="\t", index=False, float_format="%.4g")
    return df


# ---------- 3. metabolite bridge ----------

def bridge(res, ident, wu_long, zhu, matches, per_met, ref, out):
    wl = wu_long.assign(pref=(wu_long["mode"] == "negative").astype(int)).sort_values("pref")
    wl = wl.drop_duplicates(["metabolite_name", "accession", "condition"], keep="last")
    ww = wl.pivot_table(index=["metabolite_name", "accession"], columns="condition", values="intensity")
    zw = zhu.pivot_table(index=["metabolite_id", "accession"], columns="timepoint", values="intensity")
    zw.columns = ["d0" if c.startswith("0") else "d6" for c in zw.columns]
    zid = dict(zip(matches.metabolite_name, matches.metabolite_id))
    tested = res.dropna(subset=["stat"])
    rows = []
    for r in ident.itertuples():
        m = r.metabolite_name
        rec = {"metabolite": m, "class": r.metabolite_class, "pathway_class": CLASS_MAP.get(r.metabolite_class)}
        if m in ww.index.get_level_values(0):
            w = ww.loc[m]
            for cond in ["control", "stress"]:
                if cond in w and COL0 in w.index and pd.notna(w.loc[COL0, cond]):
                    col = w[cond].dropna()
                    rec[f"col0_percentile_{cond}"] = round(float((col < w.loc[COL0, cond]).mean() * 100), 1)
            if {"control", "stress"} <= set(w.columns):
                d = (w.stress - w.control).dropna()
                if len(d) >= 20:
                    rec.update(wu_stress_median_delta=round(float(d.median()), 3),
                               wu_stress_frac_up=round(float((d > 0).mean()), 3), wu_paired_n=len(d))
        z = zid.get(m)
        if z is not None and z in zw.index.get_level_values(0) and {"d0", "d6"} <= set(zw.loc[z].columns):
            d = (zw.loc[z].d6 - zw.loc[z].d0).dropna()
            if len(d) >= 20:
                rec.update(zhu_id=z, zhu_dark_median_delta=round(float(d.median()), 3),
                           zhu_dark_frac_up=round(float((d > 0).mean()), 3))
        g = per_met.get(m, set())
        gt = tested[tested.index.isin(list(g))]
        rec.update(gwas_locus_genes_tested=len(gt),
                   gwas_locus_genes_flight_median_log2fc=round(float(gt.log2fc.median()), 3) if len(gt) else None,
                   gwas_locus_genes_fdr05=";".join(f"{i}({v:+.2f})" for i, v in gt[gt.fdr < 0.05].log2fc.items()))
        if rec["pathway_class"]:
            pt = tested[tested.index.isin(list(ref[rec["pathway_class"]]))]
            rec["pathway_genes_flight_median_log2fc"] = round(float(pt.log2fc.median()), 3)
        rows.append(rec)
    df = pd.DataFrame(rows)
    df.to_csv(out / "metabolite_flight_bridge.tsv", sep="\t", index=False)
    return df


# ---------- plot / summary ----------

def plot_pathways(pw, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.lines import Line2D
    classes = list(REF_SHEETS.values())[::-1]
    fig, ax = plt.subplots(figsize=(7.6, 3.6), facecolor=SURFACE)
    ax.axvline(0, color=GRID, lw=1)
    for gs, color, off in [("Wu reference pathway genes", BLUE, 0.13), ("Wu GWAS-locus genes", ORANGE, -0.13)]:
        for y, cls in enumerate(classes):
            r = pw[(pw.metabolite_class == cls) & (pw.gene_set == gs)]
            if r.empty or pd.isna(r.median_wald_stat.iloc[0]):
                continue
            r = r.iloc[0]
            filled = r.q_permutation < 0.05
            ax.scatter(r.median_wald_stat, y + off, s=44, zorder=3, linewidth=1.5,
                       color=color if filled else SURFACE, edgecolor=color if filled else color)
            ax.text(r.median_wald_stat, y + off, f"   n={int(r.n_tested)}", va="center", fontsize=7.5, color=INK2)
    ax.set_yticks(range(len(classes)))
    ax.set_yticklabels(classes, fontsize=9, color=INK)
    ax.set_xlabel("median DESeq2 Wald statistic, flight vs ground (OSD-522 shoots)", fontsize=9, color=INK2)
    for s in ["top", "right"]:
        ax.spines[s].set_visible(False)
    for s in ["left", "bottom"]:
        ax.spines[s].set_color(GRID)
    ax.tick_params(colors=INK2, labelsize=8.5)
    ax.set_facecolor(SURFACE)
    ax.legend(handles=[Line2D([], [], marker="o", ls="", color=BLUE, label="Wu reference pathway genes"),
                       Line2D([], [], marker="o", ls="", color=ORANGE, label="genes in Wu metabolite GWAS loci"),
                       Line2D([], [], marker="o", ls="", markerfacecolor=SURFACE, color=INK2, label="hollow: permutation BH q ≥ 0.05")],
              fontsize=7.5, frameon=False, loc="lower left", bbox_to_anchor=(1.0, 0.0))
    ax.set_title("Metabolite-pathway genes in the OSD-522 spaceflight transcriptome", loc="left", fontsize=10.5, color=INK)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


def sibling_check(res):
    if not SIBLING_T01.exists():
        return "- Sibling-repo cross-check skipped (T01_osd522_transcriptome.tsv not present)."
    t = pd.read_csv(SIBLING_T01, sep="\t", index_col=0)
    j = res[["fdr"]].join(t[["fdr"]], rsuffix="_t01", how="inner")
    differ = int(((j.fdr < 0.05) != (j.fdr_t01 < 0.05)).sum())
    return (f"- Cross-check vs Photorespiration_multiomics_microgravity T01: {len(j):,} shared genes, "
            f"FDR < 0.05 call differs for {differ}.")


def md_table(df):
    cells = df.astype(object).where(df.notna(), "")
    return "\n".join(["| " + " | ".join(map(str, df.columns)) + " |", "|" + "---|" * len(df.columns)]
                     + ["| " + " | ".join(map(str, r)) + " |" for r in cells.values])


def summarize(res, pw, br, path):
    sig = res.fdr < 0.05
    cls = br.dropna(subset=["pathway_class"]).groupby("pathway_class").agg(
        metabolites=("metabolite", "size"),
        col0_pct_control_median=("col0_percentile_control", "median"),
        wu_stress_median_delta=("wu_stress_median_delta", "median"),
        zhu_dark_n=("zhu_dark_median_delta", "count"),
        zhu_dark_median_delta=("zhu_dark_median_delta", "median"),
        pathway_flight_median_log2fc=("pathway_genes_flight_median_log2fc", "first")).round(3).reset_index()
    both = br.dropna(subset=["zhu_dark_median_delta", "wu_stress_median_delta"])
    agree = int((np.sign(both.zhu_dark_median_delta) == np.sign(both.wu_stress_median_delta)).sum())
    pw_show = pw.copy()
    pw_show["p_mannwhitney"] = pw_show.p_mannwhitney.map(lambda v: f"{v:.2g}" if pd.notna(v) else "")
    for c in ["q_mannwhitney", "p_permutation", "q_permutation"]:
        pw_show[c] = pw_show[c].map(lambda v: f"{v:.2g}" if pd.notna(v) else "")
    L = ["# OSD-522 spaceflight transcriptome × terrestrial metabolome — run summary", "",
         "Generated by `scripts/12_link_osd522.py analyze`. No metabolite was measured in flight; these are",
         "transcript-level links to metabolite pathways and GWAS loci, plus the flown ecotype's (Col-0)",
         "terrestrial metabolite baseline.", "",
         "## OSD-522 differential expression (PyDESeq2, GeneLab RSEM counts)", "",
         f"- {res.stat.notna().sum():,} genes tested; FDR < 0.05: {int(sig.sum())} "
         f"({int((sig & (res.log2fc > 0)).sum())} up, {int((sig & (res.log2fc < 0)).sum())} down in flight)",
         sibling_check(res), "",
         "## Metabolite-pathway gene sets in flight", "",
         "Two tests. Mann-Whitney on DESeq2 Wald statistics (set vs all other genes) assumes genes are",
         "independent and is anti-conservative for co-regulated pathways. The permutation test relabels the",
         "12 samples in all 924 possible 6-vs-6 ways (Welch t on median-of-ratios log2 counts), which keeps",
         "gene-gene correlation; its smallest attainable p is 1/924. Trust the permutation q.", "",
         md_table(pw_show), "",
         "## Per class: Col-0 baseline, terrestrial responses, flight transcript shift", "",
         "`col0_pct_control_median`: median percentile of Col-0 among Wu control accessions across the class's",
         "metabolites. Deltas are medians across accessions of (stress − control) and (6 d − 0 d darkness).", "",
         md_table(cls), "",
         f"Metabolites with both a Zhu darkness and a Wu stress response: {len(both)}; same direction in {agree} "
         f"(two-sided binomial vs 0.5: p = {binomtest(agree, len(both)).pvalue:.3g}).", "",
         "Class rows with few Zhu metabolites (zhu_dark_n) are descriptive only.", ""]
    path.write_text("\n".join(L))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("cmd", choices=["fetch", "analyze"])
    cmd = ap.parse_args().cmd
    if cmd == "fetch":
        fetch()
        return
    if not (RAW / COUNTS).exists():
        sys.exit("run `fetch` first")
    RES.mkdir(parents=True, exist_ok=True)
    print("1  PyDESeq2 flight vs ground")
    res, lognorm, is_flight = deseq()
    tested_idx = lognorm.index
    t_perm, obs = permutation_t(lognorm, is_flight)
    perm = (t_perm, obs, pd.Index(tested_idx))
    ident = pd.read_csv(MET / "wu_identified_metabolites.csv")
    loci = pd.read_csv(MET / "wu_gwas_loci.csv")
    ref = reference_sets()
    gw, per_met = gwas_locus_sets(ident, loci)
    print("2  pathway gene-set tests")
    pw = pathway_tests(res, ref, gw, perm, RES)
    print("3  metabolite bridge")
    br = bridge(res, ident, pd.read_csv(MET / "wu_leaf_identified_long.csv"),
                pd.read_csv(MET / "darkness_metabolome.csv"),
                pd.read_csv(META_RES / "zhu_wu_metabolite_matches.tsv", sep="\t"), per_met, ref, RES)
    plot_pathways(pw, RES / "pathway_flight_shift.png")
    summarize(res, pw, br, RES / "RESULTS.md")
    print((RES / "RESULTS.md").read_text())


if __name__ == "__main__":
    main()

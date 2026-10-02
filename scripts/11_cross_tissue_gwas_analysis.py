"""Cross-tissue metabolite GWAS comparison: Naake 2024 (seed + leaf), Wu 2018 (leaf, control/stress),
Zhu 2024 (leaf, 0 d / 6 d darkness).

Run scripts 07, 09 and 10 first. Analyses:
  A  Naake locus sharing: which of seed rep1 / seed rep2 / leafWu / leafZhu map a feature to the same
     locus (Naake's own row alignment), LOD >= 5.3 as in Naake Fig. 1G; plus LOD concordance (Spearman).
  B  Wu control vs stress: merge per-condition loci (LOD > 8) into genomic regions; condition-specific share.
  C  Same-metabolite locus concordance: Naake annotated seed/leaf QTL vs Wu leaf QTL for the metabolite
     matched by formula + retention time.
  D  Leaf accession replication: Zhu darkness vs Wu leaf levels for metabolites matched across studies,
     Spearman across shared accessions (BH-adjusted).
  E  Accession overlap, including the six arabidopsis-atlas ecotypes.

Naake seed/leafWu loci are wide (see naake_locus_span_coverage.tsv), so a genome-wide gene-overlap
test would be uninformative; all locus comparisons here are per feature or per metabolite.
"""

import argparse
import re
import sys
from itertools import combinations
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.stats import spearmanr

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gwas_loci import parse_agi_span, spans_overlap  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
PROC = ROOT / "data" / "processed" / "metabolome"
RAW = ROOT / "data" / "raw"
RES = ROOT / "results" / "metabolome_meta_analysis"
PLOTS = RES / "plots"

NAAKE_LOD = 5.3
SET_ORDER = ["seed_rep1", "seed_rep2", "leaf_wu", "leaf_zhu"]
SET_LABEL = {"seed_rep1": "seed 1", "seed_rep2": "seed 2", "leaf_wu": "leaf Wu", "leaf_zhu": "leaf Zhu"}
# Naake et al. 2024 main text, core-set feature-max Spearman between seed replicates.
PAPER_RHO = {("S3", "seed_rep1", "seed_rep2"): 0.536, ("S2", "seed_rep1", "seed_rep2"): 0.557}
MIN_ACC = 20
COMPARISONS = ["d0_vs_control", "d6_vs_control", "d6_vs_stress", "dark_resp_vs_stress_resp"]
ATLAS_ECOTYPES =["Col-0", "Ler-1", "Ws-0", "Cvi-0", "Tsu-0", "Edi-0"]

INK, INK2, SURFACE, GRID = "#0b0b0b", "#52514e", "#fcfcfb", "#e4e3df"
BLUE, ORANGE = "#2a78d6", "#eb6834"


def norm_name(s):
    s = str(s).lower()
    s = re.sub(r"\(.*?\)", "", s)
    s = re.sub(r"^(d|l|beta|alpha)-", "", s.strip())
    return re.sub(r"[^a-z0-9]", "", s)


def md_table(df):
    cells = df.astype(object).where(df.notna(), "")
    head = "| " + " | ".join(map(str, df.columns)) + " |"
    rule = "|" + "---|" * len(df.columns)
    return "\n".join([head, rule] + ["| " + " | ".join(map(str, r)) + " |" for r in cells.values])


def bh(p):
    p = np.asarray(p, float)
    order = np.argsort(p)
    ranked = p[order] * len(p) / (np.arange(len(p)) + 1)
    q = np.minimum.accumulate(ranked[::-1])[::-1]
    out = np.empty_like(q)
    out[order] = np.minimum(q, 1)
    return out


# ---------- A: Naake locus sharing ----------

def naake_sharing(naake, out):
    combos, conc = [], []
    for ds, mode in [("S3", "negative"), ("S2", "positive")]:
        d = naake[naake.dataset == ds]
        strong = d[d.lod >= NAAKE_LOD]
        sets_per_row = strong.groupby("row")["set"].agg(lambda s: tuple(x for x in SET_ORDER if x in set(s)))
        feat = d.drop_duplicates("row").set_index("row")["feature"]
        tab = pd.DataFrame({"combo": sets_per_row, "feature": feat.reindex(sets_per_row.index)})
        g = tab.groupby("combo").agg(loci=("feature", "size"), features=("feature", "nunique")).reset_index()
        g["n_sets"] = g.combo.map(len)
        g["combination"] = g.combo.map(lambda c: " + ".join(SET_LABEL[x] for x in c))
        combos.append(g.drop(columns="combo").assign(dataset=ds, mode=mode))

        wide = d.pivot_table(index="row", columns="set", values="lod", aggfunc="max")
        wide["feature"] = feat.reindex(wide.index)
        for a, b in combinations([s for s in SET_ORDER if s in wide], 2):
            r = wide.dropna(subset=[a, b])
            fm = r.groupby("feature")[[a, b]].max()
            conc.append({"dataset": ds, "mode": mode, "set_a": a, "set_b": b,
                         "shared_loci": len(r), "shared_features": len(fm),
                         "rho_feature_max": round(spearmanr(fm[a], fm[b])[0], 3),
                         "paper_rho_core_set": PAPER_RHO.get((ds, a, b))})
    combos = pd.concat(combos).sort_values(["dataset", "loci"], ascending=[False, False])
    conc = pd.DataFrame(conc)
    combos[["dataset", "mode", "combination", "n_sets", "loci", "features"]].to_csv(
        out / "naake_set_combinations.tsv", sep="\t", index=False)
    conc.to_csv(out / "naake_lod_concordance.tsv", sep="\t", index=False)
    return combos, conc


def naake_span_coverage(naake, genes, out):
    """Why no genome-wide gene-overlap test: how wide Naake loci are and how much of the genome they cover."""
    by_chrom = {}
    for g in genes.agi:
        m = re.match(r"AT([1-5])G(\d{5})", g)
        if m:
            by_chrom.setdefault(int(m.group(1)), []).append(int(m.group(2)))
    by_chrom = {c: np.array(sorted(v)) for c, v in by_chrom.items()}
    total = sum(len(v) for v in by_chrom.values())
    rows = []
    for (ds, st), d in naake[naake.lod >= NAAKE_LOD].groupby(["dataset", "set"]):
        u = d.drop_duplicates(["chrom", "agi_start", "agi_end"])
        covered = set()
        for c, a, b in u[["chrom", "agi_start", "agi_end"]].itertuples(index=False):
            g = by_chrom.get(int(c))
            if g is not None:
                covered.update((c, x) for x in g[np.searchsorted(g, a):np.searchsorted(g, b, "right")])
        rows.append({"dataset": ds, "set": st, "distinct_loci": len(u),
                     "median_span_agi_index": int((u.agi_end - u.agi_start).median()),
                     "genes_covered_frac": round(len(covered) / total, 3)})
    df = pd.DataFrame(rows)
    df.to_csv(out / "naake_locus_span_coverage.tsv", sep="\t", index=False)
    return df


# ---------- B: Wu control vs stress regions ----------

def wu_regions(wu_loci, out):
    regions = []
    for chrom, g in wu_loci.sort_values(["chrom", "bp_start"]).groupby("chrom"):
        cur = None
        for r in g.itertuples():
            if cur and r.bp_start <= cur["bp_end"]:
                cur["bp_end"] = max(cur["bp_end"], r.bp_end)
                cur["members"].append(r)
            else:
                if cur:
                    regions.append(cur)
                cur = {"chrom": chrom, "bp_start": r.bp_start, "bp_end": r.bp_end, "members": [r]}
        regions.append(cur)
    rows = []
    for i, reg in enumerate(regions, 1):
        conds = sorted({m.condition for m in reg["members"]})
        rows.append({"region": f"WuR{i:03d}", "chrom": reg["chrom"], "bp_start": reg["bp_start"],
                     "bp_end": reg["bp_end"], "conditions": "+".join(conds),
                     "modes": "+".join(sorted({m.mode for m in reg["members"]})),
                     "best_lod": max(m.best_lod for m in reg["members"]),
                     "n_traits": sum(m.n_traits for m in reg["members"]),
                     "loci": ";".join(m.locus_id for m in reg["members"])})
    df = pd.DataFrame(rows)
    df.to_csv(out / "wu_condition_regions.tsv", sep="\t", index=False)
    return df


# ---------- C: same-metabolite locus concordance ----------

def metabolite_locus_concordance(nq, nm, wu_ident, wu_loci, out):
    nm = nm.copy()
    nm["formula"] = nm.metabolite.str.extract(r"\((C\d[^)]*)\)")[0].str.strip()
    nm["key"] = nm.metabolite.str.replace(r"\s*\(C\d[^)]*\)\s*$", "", regex=True).str.strip()
    nm["rt_db"] = pd.to_numeric(nm["RT (database"], errors="coerce")
    wu = wu_ident.assign(rt=pd.to_numeric(wu_ident.rt, errors="coerce"))
    link = {}
    for r in nm.dropna(subset=["formula"]).itertuples():
        cand = wu[wu.formula == r.formula].assign(drt=lambda x: (x.rt - r.rt_db).abs())
        cand = cand[cand.drt <= 0.15]
        if len(cand):
            link[r.key] = cand.sort_values("drt").iloc[0]

    def wu_spans(w, cond):
        peaks = {w[f"peak_{cond}_pos"], w[f"peak_{cond}_neg"]} - {np.nan}
        hits = wu_loci[(wu_loci.condition == cond) & wu_loci.traits.fillna("").map(
            lambda t: bool(peaks & set(t.split(";"))))]
        return [((r.chrom, r.agi_start, r.agi_end), r.locus_id, r.best_lod) for r in hits.itertuples()
                if pd.notna(r.agi_start)]

    all_spans = {c: [(r.chrom, r.agi_start, r.agi_end) for r in wu_loci[wu_loci.condition == c].itertuples()
                     if pd.notna(r.agi_start)] for c in ["control", "stress"]}
    rows = []
    for _, r in nq.iterrows():
        key = str(r["metabolite"]).strip()
        w = link.get(key)
        seed = [parse_agi_span(r["locus (rep. 1)"]), parse_agi_span(r["locus (rep. 2)"])]
        leaf = parse_agi_span(r["locus (leaf)"])
        rec = {"metabolite": key, "mode": r["mode"], "seed_rep1_locus": r["locus (rep. 1)"],
               "seed_rep2_locus": r["locus (rep. 2)"], "naake_leaf_locus": r["locus (leaf)"], "wu_match": None}
        if w is not None:
            rec.update(wu_match=w.metabolite_name, wu_class=w.metabolite_class)
            for cond in ["control", "stress"]:
                sp = wu_spans(w, cond)
                rec[f"wu_{cond}_loci"] = ";".join(f"{lid}(LOD {lod:.1f})" for _, lid, lod in sp)
                rec[f"wu_{cond}_in_naake_seed"] = any(spans_overlap(s, x) for s, _, _ in sp for x in seed)
                rec[f"wu_{cond}_in_naake_leaf"] = any(spans_overlap(s, leaf) for s, _, _ in sp)
                # Chance of >=1 hit if this metabolite's k loci were random draws from all Wu loci.
                pool = all_spans[cond]
                f_seed = np.mean([any(spans_overlap(s, x) for x in seed) for s in pool])
                rec[f"wu_{cond}_seed_expected"] = round(1 - (1 - f_seed) ** len(sp), 3) if sp else 0.0
        rows.append(rec)
    df = pd.DataFrame(rows)
    df.to_csv(out / "metabolite_locus_concordance.tsv", sep="\t", index=False)
    return df


# ---------- D: leaf accession replication ----------

def zhu_identities():
    r = pd.read_excel(RAW / "darkness_metabolome_identities.xlsx", header=None).iloc[60:, 1:8]
    r.columns = ["metabolite_id", "rt", "name", "cls", "formula", "mz", "adduct"]
    r = r[r.metabolite_id.astype(str).str.startswith("Met.")].copy()
    r["formula"] = r.formula.astype(str).str.strip()
    r["rt"] = pd.to_numeric(r.rt, errors="coerce")
    return r


def match_zhu_wu(zi, wu_ident):
    wu = wu_ident.assign(rt=pd.to_numeric(wu_ident.rt, errors="coerce"),
                         n1=wu_ident.metabolite_name.map(norm_name), n2=wu_ident.alias.map(norm_name))
    cand = zi.merge(wu, on="formula", suffixes=("_z", "_w"))
    cand["drt"] = (cand.rt_z - cand.rt_w).abs()
    cand["name_match"] = cand.apply(lambda x: norm_name(x["name"]) in (x.n1, x.n2), axis=1)
    cand = cand[(cand.name_match & (cand.drt <= 1.0)) | (cand.drt <= 0.15)]
    cand = cand.sort_values(["name_match", "drt"], ascending=[False, True])
    used_z, used_w, keep = set(), set(), []
    for r in cand.itertuples():
        if r.metabolite_id in used_z or r.metabolite_name in used_w:
            continue
        used_z.add(r.metabolite_id)
        used_w.add(r.metabolite_name)
        keep.append(r)
    return pd.DataFrame(keep)[["metabolite_id", "name", "metabolite_name", "formula", "drt", "name_match", "metabolite_class"]]


def leaf_replication(zhu, wu_long, pairs, out):
    zw = zhu.pivot_table(index=["metabolite_id", "accession"], columns="timepoint", values="intensity")
    zw.columns = ["d0" if c.startswith("0") else "d6" for c in zw.columns]
    wl = wu_long.copy()
    wl["pref"] = (wl["mode"] == "negative").astype(int)
    wl = wl.sort_values("pref").drop_duplicates(["metabolite_name", "accession", "condition"], keep="last")
    ww = wl.pivot_table(index=["metabolite_name", "accession"], columns="condition", values="intensity")
    rows = []
    for p in pairs.itertuples():
        try:
            a = zw.loc[p.metabolite_id]
            b = ww.loc[p.metabolite_name]
        except KeyError:
            continue
        # Zhu reports BLUPs per timepoint for different metabolite subsets, and Wu detects some
        # metabolites in one condition only, so each comparison uses whatever pairs exist.
        j = a.join(b, how="inner").reindex(columns=["d0", "d6", "control", "stress"])
        rec = {"zhu_id": p.metabolite_id, "zhu_name": p.name, "wu_name": p.metabolite_name,
               "class": p.metabolite_class, "formula": p.formula, "abs_drt_min": round(p.drt, 2),
               "name_match": p.name_match}
        for lab, x, y in [("d0_vs_control", j.d0, j.control), ("d6_vs_control", j.d6, j.control),
                          ("d6_vs_stress", j.d6, j.stress), ("dark_resp_vs_stress_resp", j.d6 - j.d0, j.stress - j.control)]:
            ok = x.notna() & y.notna()
            rec[f"n_{lab}"] = int(ok.sum())
            if ok.sum() >= MIN_ACC:
                rho, pv = spearmanr(x[ok], y[ok])
                rec[f"rho_{lab}"], rec[f"p_{lab}"] = round(rho, 3), pv
        rows.append(rec)
    df = pd.DataFrame(rows)
    for lab in COMPARISONS:
        col = df.get(f"p_{lab}")
        df[f"q_{lab}"] = np.nan
        if col is not None and col.notna().any():
            df.loc[col.notna(), f"q_{lab}"] = bh(col.dropna())
    df = df.sort_values("rho_d0_vs_control", ascending=False)
    df.to_csv(out / "leaf_accession_replication.tsv", sep="\t", index=False, float_format="%.4g")
    return df


# ---------- E: accession overlap ----------

def accession_overlap(zhu, wu_long, wu_acc, out):
    sets = {"Zhu 2024 darkness (leaf)": set(zhu.accession),
            "Wu 2018 control (leaf)": set(wu_long[wu_long.condition == "control"].accession),
            "Wu 2018 stress (leaf)": set(wu_long[wu_long.condition == "stress"].accession)}
    zp = RAW / "naake_2024_supplementary" / "Supplemental Dataset S4_peaktable Thomas Naake" / "rep_zhu_negative_match.csv"
    if zp.exists():
        sets["Naake leafZhu peak table"] = {c for c in open(zp).readline().rstrip("\n").split("\t") if c.startswith("ecotype.")}
    names = dict(zip(wu_acc.accession, wu_acc.accession_name))
    rows = [{"panel": k, "accessions": len(v)} for k, v in sets.items()]
    rows.append({"panel": "Zhu 2024 ∩ Wu control", "accessions": len(sets["Zhu 2024 darkness (leaf)"] & sets["Wu 2018 control (leaf)"])})
    rows.append({"panel": "all leaf panels", "accessions": len(set.intersection(*sets.values()))})
    df = pd.DataFrame(rows)
    eco = []
    for e in ATLAS_ECOTYPES:
        ids = [a for a, n in names.items() if n == e]
        eco.append({"ecotype": e, "accession": ";".join(ids),
                    **{k: any(i in v for i in ids) for k, v in sets.items()}})
    eco = pd.DataFrame(eco)
    df.to_csv(out / "accession_overlap.tsv", sep="\t", index=False)
    eco.to_csv(out / "atlas_ecotype_coverage.tsv", sep="\t", index=False)
    return df, eco


# ---------- plots ----------

def style(ax):
    ax.set_facecolor(SURFACE)
    for s in ["top", "right"]:
        ax.spines[s].set_visible(False)
    for s in ["left", "bottom"]:
        ax.spines[s].set_color(GRID)
    ax.tick_params(colors=INK2, labelsize=9)


def plot_combinations(combos, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.ticker import FuncFormatter
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.8), facecolor=SURFACE)
    n_rows = int((combos.n_sets > 1).groupby(combos.dataset).sum().max())
    for ax, (ds, title) in zip(axes, [("S3", "Negative mode (4 GWAS sets)"), ("S2", "Positive mode (3 sets)")]):
        c = combos[combos.dataset == ds]
        single = c[c.n_sets == 1]
        g = c[c.n_sets > 1].sort_values("loci")
        ax.barh(g.combination, g.loci, color=BLUE, height=0.7)
        for y, v in enumerate(g.loci):
            ax.text(v, y, f" {v:,}", va="center", fontsize=8, color=INK2)
        style(ax)
        ax.set_title(title, loc="left", fontsize=11, color=INK, pad=22)
        ax.text(0, 1.015, "single set only: " + ", ".join(f"{r.combination} {r.loci / 1000:.0f}k" for r in single.itertuples()),
                transform=ax.transAxes, fontsize=8, color=INK2)
        ax.set_ylim(len(g) - n_rows - 0.4, len(g) - 0.4)
        ax.set_xlabel("feature-locus pairs shared, LOD ≥ 5.3", color=INK2, fontsize=9)
        ax.xaxis.set_major_formatter(FuncFormatter(lambda v, _: f"{v / 1000:g}k" if v else "0"))
        ax.set_xlim(0, g.loci.max() * 1.2)
    fig.suptitle("Naake et al. 2024: features mapped to the same locus in more than one GWAS set",
                 x=0.01, ha="left", fontsize=12, color=INK)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


def plot_replication(rep, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.lines import Line2D
    series = [("d0_vs_control", BLUE, 0.14, "Zhu 0 d (before darkness) vs Wu control"),
              ("d6_vs_control", ORANGE, -0.14, "Zhu 6 d darkness vs Wu control")]
    d = rep.dropna(subset=["rho_d0_vs_control", "rho_d6_vs_control"], how="all").copy()
    d["order"] = d[["rho_d0_vs_control", "rho_d6_vs_control"]].mean(axis=1)
    d = d.sort_values("order")
    fig, ax = plt.subplots(figsize=(7.8, 0.3 * len(d) + 1.8), facecolor=SURFACE)
    y = np.arange(len(d))
    ax.axvline(0, color=GRID, lw=1)
    for lab, color, off, _ in series:
        rho, q = d[f"rho_{lab}"].values, d[f"q_{lab}"].values
        has = ~np.isnan(rho)
        sig = has & (q < 0.05)
        ns = has & ~(q < 0.05)
        ax.scatter(rho[sig], y[sig] + off, s=40, color=color, edgecolor=SURFACE, linewidth=1.5, zorder=3)
        ax.scatter(rho[ns], y[ns] + off, s=40, facecolor=SURFACE, edgecolor=color, linewidth=1.5, zorder=3)
    ax.set_yticks(y)
    ax.set_yticklabels(d.wu_name.str.slice(0, 42), fontsize=8, color=INK)
    ax.set_xlabel("Spearman ρ of accession levels (≈250 shared accessions)", color=INK2, fontsize=9)
    style(ax)
    ax.legend(handles=[Line2D([], [], marker="o", ls="", color=c, label=l) for _, c, _, l in series]
              + [Line2D([], [], marker="o", ls="", markerfacecolor=SURFACE, color=INK2, label="hollow: BH q ≥ 0.05")],
              loc="lower right", fontsize=8, frameon=False)
    ax.set_title("Zhu 2024 vs Wu 2018: leaf metabolite levels by accession",
                 loc="left", fontsize=11, color=INK)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- main ----------

def write_summary(combos, conc, span, regions, mlc, rep, acc, eco, path):
    def n_combo(ds, sets):
        c = " + ".join(SET_LABEL[s] for s in sets)
        r = combos[(combos.dataset == ds) & (combos.combination == c)]
        return int(r.loci.sum()) if len(r) else 0
    spec = regions.conditions.isin(["control", "stress"]).mean()
    m = mlc.dropna(subset=["wu_match"])
    L = ["# Cross-tissue metabolome GWAS — run summary", "",
         "Generated by `scripts/11_cross_tissue_gwas_analysis.py analyze`. Every number below is computed",
         "from the files in `data/processed/metabolome/`; nothing is copied from the papers except where",
         "labelled as a paper value.", "",
         "## A. Naake 2024 locus sharing (LOD ≥ 5.3)", "",
         f"- Negative mode, feature-loci mapped in all four sets (seed 1 + seed 2 + leaf Wu + leaf Zhu): {n_combo('S3', SET_ORDER)}",
         f"- Negative mode, seed 1 + seed 2 + leaf Wu: {n_combo('S3', SET_ORDER[:3])}; positive mode: {n_combo('S2', SET_ORDER[:3])}",
         f"- Negative mode, seed 1 + seed 2 only: {n_combo('S3', SET_ORDER[:2])}; positive mode: {n_combo('S2', SET_ORDER[:2])}", "",
         "LOD concordance (Spearman of per-feature max LOD, all features rather than Naake's core set):", "",
         md_table(conc), "",
         f"Locus width and genome coverage at LOD ≥ {NAAKE_LOD} (protein-coding genes from Naake Table S13):", "",
         md_table(span), "",
         "## B. Wu 2018 control vs stress", "",
         f"- {len(regions)} merged genomic regions from {regions.loci.str.count(';').add(1).sum()} condition×mode loci (LOD > 8)",
         f"- Condition-specific regions: {spec:.1%} "
         f"(control only {int((regions.conditions == 'control').sum())}, stress only {int((regions.conditions == 'stress').sum())}, "
         f"both {int((regions.conditions == 'control+stress').sum())})",
         "- Paper value (abstract): 123 highly resolved mQTL, 24.39% environment-specific — the paper's region",
         "  definition is not in the supplement, so these counts are not expected to match exactly.", "",
         "## C. Same-metabolite locus concordance (Naake seed/leaf QTL vs Wu leaf QTL)", "",
         f"- Naake annotated QTL rows: {len(mlc)}; matched to a Wu metabolite: {len(m)}",
         f"- Wu control locus overlaps a Naake seed locus: {int(m.wu_control_in_naake_seed.sum())}/{len(m)} "
         f"(chance expectation {m.wu_control_seed_expected.sum():.1f})",
         f"- Wu stress locus overlaps a Naake seed locus: {int(m.wu_stress_in_naake_seed.sum())}/{len(m)} "
         f"(chance expectation {m.wu_stress_seed_expected.sum():.1f})",
         "- Expectation: per row, P(>=1 hit) if the metabolite's Wu loci were random draws from all Wu loci",
         "  of that condition. Rows are QTL rows, so a metabolite with several Naake loci counts more than once.",
         f"- Wu control locus overlaps Naake's leaf locus: {int(m.wu_control_in_naake_leaf.sum())}/{len(m)}", "",
         "## D. Leaf accession replication (Zhu 2024 vs Wu 2018)", "",
         f"- Metabolites matched one-to-one (formula + RT/name): {len(rep)} (Zhu reports 0 d and 6 d BLUPs for",
         "  different metabolite subsets; Wu detects some metabolites in one condition only)",
         *[f"- {lab}: {int(rep[f'rho_{lab}'].notna().sum())} metabolites testable, median ρ "
           f"{rep[f'rho_{lab}'].median():.2f}, {int((rep[f'q_{lab}'] < 0.05).sum())} with BH q < 0.05"
           for lab in COMPARISONS],
         "",
         "## E. Accession overlap", "", md_table(acc), "", md_table(eco), ""]
    path.write_text("\n".join(L))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("cmd", choices=["analyze"])
    ap.parse_args()
    need = ["naake_gwas_loci.csv.gz", "naake_annotated_qtl.csv", "naake_annotated_metabolites.csv",
            "wu_gwas_loci.csv", "wu_identified_metabolites.csv", "wu_leaf_identified_long.csv",
            "wu_accessions.csv", "darkness_metabolome.csv", "tair9_protein_coding.csv"]
    missing = [f for f in need if not (PROC / f).exists()]
    if missing:
        sys.exit(f"Missing {missing}; run scripts 07, 09 and 10 first.")
    RES.mkdir(parents=True, exist_ok=True)
    PLOTS.mkdir(exist_ok=True)

    naake = pd.read_csv(PROC / "naake_gwas_loci.csv.gz", dtype={"locus_id": str, "feature": str})
    wu_loci = pd.read_csv(PROC / "wu_gwas_loci.csv")
    wu_ident = pd.read_csv(PROC / "wu_identified_metabolites.csv")
    wu_long = pd.read_csv(PROC / "wu_leaf_identified_long.csv")
    wu_acc = pd.read_csv(PROC / "wu_accessions.csv")
    zhu = pd.read_csv(PROC / "darkness_metabolome.csv")

    print("A  Naake locus sharing"); combos, conc = naake_sharing(naake, RES)
    span = naake_span_coverage(naake, pd.read_csv(PROC / "tair9_protein_coding.csv"), RES)
    print("B  Wu control vs stress regions"); regions = wu_regions(wu_loci, RES)
    print("C  Same-metabolite locus concordance")
    mlc = metabolite_locus_concordance(pd.read_csv(PROC / "naake_annotated_qtl.csv"),
                                       pd.read_csv(PROC / "naake_annotated_metabolites.csv"), wu_ident, wu_loci, RES)
    print("D  Leaf accession replication")
    pairs = match_zhu_wu(zhu_identities(), wu_ident)
    pairs.to_csv(RES / "zhu_wu_metabolite_matches.tsv", sep="\t", index=False)
    rep = leaf_replication(zhu, wu_long, pairs, RES)
    print("E  Accession overlap"); acc, eco = accession_overlap(zhu, wu_long, wu_acc, RES)

    plot_combinations(combos, PLOTS / "naake_set_combinations.png")
    plot_replication(rep, PLOTS / "leaf_accession_replication.png")
    write_summary(combos, conc, span, regions, mlc, rep, acc, eco, RES / "RESULTS.md")
    print((RES / "RESULTS.md").read_text())


if __name__ == "__main__":
    main()

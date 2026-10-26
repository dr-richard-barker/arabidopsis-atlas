"""Results for the metabolome story page (app/public/metabolome-story.html).

Run scripts 11, 12, 18 and 19 first. Reads the explorer data (app/public/explorer/*.json, built by
scripts 18-19 with one Wu 2018 ion mode per metabolite) and two results tables from scripts 11 and 12,
and writes results/metabolome_story/:

  A  panel_overlap.tsv            accessions per panel and in all four value panels
  B  replication.tsv              per compound: Spearman rho and BH q of accession levels for
                                    Zhu 0 d vs Wu 2018 control (both LC-MS; copied from script 11) and
                                    Wu 2016 GC-MS vs Wu 2018 LC-MS control (computed here)
  C  dark_vs_stress.tsv           per compound: Zhu 6 d - 0 d and Wu stress - control medians (script 12)
  D  class_correlation.tsv        Wu 2016 GC-MS: median Spearman rho within and between classes
     top_pairs.tsv                the 10 most strongly correlated named GC-MS metabolite pairs
  E  atlas_ecotype_percentiles.tsv  per atlas ecotype x class: median percentile among panel accessions
  F  metabolights_summary.tsv     MetaboLights A. thaliana studies by technique, tissue and factor
     metabolights_top_compounds.tsv  explorer compounds named in the most studies
     summary.json, RESULTS.md, plots/*.png

The two experiments compared in B differ in growth, harvest and platform, not only in instrument, so
low agreement there is not a measure of platform error.
"""

import importlib.util
import json
import re
from collections import Counter
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.stats import binomtest, spearmanr

ROOT = Path(__file__).resolve().parent.parent
EXPLORER = ROOT / "app" / "public" / "explorer"
META = ROOT / "results" / "metabolome_meta_analysis"
LINK = ROOT / "results" / "osd522_metabolome_link"
OUT = ROOT / "results" / "metabolome_story"
PLOTS = OUT / "plots"

spec = importlib.util.spec_from_file_location("xtissue11", Path(__file__).with_name("11_cross_tissue_gwas_analysis.py"))
xtissue11 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(xtissue11)
bh, style = xtissue11.bh, xtissue11.style
INK, INK2, SURFACE, GRID, BLUE, ORANGE = (xtissue11.INK, xtissue11.INK2, xtissue11.SURFACE, xtissue11.GRID,
                                          xtissue11.BLUE, xtissue11.ORANGE)

MIN_ACC = 20
MIN_CLASS = 5
BOOKKEEPING = r"replicate|batch|container|medium|quantity|weight|injection|_after_"


def short(text, n):
    text = str(text)
    return text if len(text) <= n else text[:n - 1].rstrip() + "…"
PANELS = [("zhu", "Zhu 2024 darkness (leaf, LC-MS)"), ("wu2018c", "Wu 2018 control (leaf, LC-MS)"),
          ("wu2018s", "Wu 2018 stress (leaf, LC-MS)"), ("wu2016", "Wu 2016 primary (rosette, GC-MS)")]


class Explorer:
    """The explorer's JSON with lookups: slice -> {feature index: row}, {accession index: column}."""

    def __init__(self):
        self.acc = json.loads((EXPLORER / "accessions.json").read_text())
        self.met = json.loads((EXPLORER / "metabolites.json").read_text())
        self.cat = json.loads((EXPLORER / "metabolights_catalogue.json").read_text())
        self.feat = self.met["features"]
        self.key = {f["key"]: i for i, f in enumerate(self.feat)}
        self.slices = {}
        for s in json.loads((EXPLORER / "values.json").read_text())["slices"]:
            s["row"] = {f: r for r, f in enumerate(s["feats"])}
            s["col"] = {a: c for c, a in enumerate(s["accs"])}
            self.slices[s["key"]] = s

    def series(self, slice_key, fi):
        s = self.slices[slice_key]
        if fi not in s["row"]:
            return pd.Series(dtype=float)
        row = s["data"][s["row"][fi]]
        return pd.Series({self.acc[a]["id"]: row[c] for a, c in s["col"].items() if row[c] is not None}, dtype=float)

    def member(self, group, ds):
        keys = [k for k in group["members"] if k.startswith(ds + ":")]
        return self.key[keys[0]] if keys else None


# ---------- A ----------

def panel_overlap(ex):
    rows = [{"panel": label, "accessions": sum(a[k] for a in ex.acc)} for k, label in PANELS]
    rows.append({"panel": "in all four", "accessions": sum(all(a[k] for k, _ in PANELS) for a in ex.acc)})
    rows.append({"panel": "any panel", "accessions": len(ex.acc)})
    df = pd.DataFrame(rows)
    df.to_csv(OUT / "panel_overlap.tsv", sep="\t", index=False)
    return df


# ---------- B ----------

def replication(ex):
    rep = pd.read_csv(META / "leaf_accession_replication.tsv", sep="\t")
    lc = rep.dropna(subset=["rho_d0_vs_control"])[["wu_name", "class", "n_d0_vs_control", "rho_d0_vs_control",
                                                   "q_d0_vs_control"]]
    lc.columns = ["compound", "class", "n", "rho", "q"]
    lc.insert(0, "comparison", "Zhu 0 d vs Wu 2018 control (LC-MS / LC-MS)")
    rows = []
    for g in ex.met["groups"]:
        a, b = ex.member(g, "wu2016"), ex.member(g, "wu2018")
        if a is None or b is None:
            continue
        x, y = ex.series("wu2016", a), ex.series("wu2018_control", b)
        shared = x.index.intersection(y.index)
        if len(shared) < MIN_ACC:
            continue
        rho, p = spearmanr(x[shared], y[shared])
        rows.append({"compound": g["name"], "class": ex.feat[a]["cls"], "n": len(shared), "rho": rho, "p": p})
    gc = pd.DataFrame(rows)
    gc["q"] = bh(gc.p)
    gc.insert(0, "comparison", "Wu 2016 GC-MS vs Wu 2018 LC-MS control")
    df = pd.concat([lc, gc.drop(columns="p")], ignore_index=True)
    df["rho"] = df.rho.round(3)
    df.to_csv(OUT / "replication.tsv", sep="\t", index=False, float_format="%.4g")
    return df


def plot_replication(df, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    comps = list(dict.fromkeys(df.comparison))
    colors = [BLUE, ORANGE]
    n_max = max((df.comparison == c).sum() for c in comps)
    fig, axes = plt.subplots(1, 2, figsize=(11, 0.24 * n_max + 1.9), facecolor=SURFACE)
    for ax, comp, color in zip(axes, comps, colors):
        d = df[df.comparison == comp].sort_values("rho")
        y = np.arange(len(d))
        sig = (d.q < 0.05).values
        ax.axvline(0, color=GRID, lw=1)
        ax.scatter(d.rho[sig], y[sig], s=42, color=color, edgecolor=SURFACE, linewidth=1.5, zorder=3)
        ax.scatter(d.rho[~sig], y[~sig], s=42, facecolor=SURFACE, edgecolor=color, linewidth=1.5, zorder=3)
        ax.set_yticks(y)
        ax.set_yticklabels([short(c, 34) for c in d.compound], fontsize=8, color=INK)
        ax.set_xlim(-0.35, 0.95)
        ax.set_ylim(-0.8, len(d) - 0.2)
        ax.set_xlabel(f"Spearman ρ across ~{int(d.n.median())} shared accessions", color=INK2, fontsize=9)
        ax.set_title(f"{comp}\nmedian ρ {d.rho.median():.2f}; {int(sig.sum())} of {len(d)} with BH q < 0.05",
                     loc="left", fontsize=9.5, color=INK)
        style(ax)
    fig.text(0.99, 0.01, "filled: BH q < 0.05   hollow: q ≥ 0.05", ha="right", fontsize=8, color=INK2)
    fig.tight_layout(rect=(0, 0.03, 1, 1))
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- C ----------

def dark_vs_stress():
    br = pd.read_csv(LINK / "metabolite_flight_bridge.tsv", sep="\t").drop_duplicates("metabolite")
    d = br.dropna(subset=["zhu_dark_median_delta", "wu_stress_median_delta"])[
        ["metabolite", "class", "zhu_id", "zhu_dark_median_delta", "wu_stress_median_delta"]].copy()
    d["same_direction"] = np.sign(d.zhu_dark_median_delta) == np.sign(d.wu_stress_median_delta)
    d.to_csv(OUT / "dark_vs_stress.tsv", sep="\t", index=False)
    agree = int(d.same_direction.sum())
    p = binomtest(agree, len(d)).pvalue
    m = re.search(r"response: (\d+); same direction in (\d+) \(two-sided binomial vs 0\.5: p = ([0-9.e-]+)\)",
                  (LINK / "RESULTS.md").read_text())
    assert m and (int(m.group(1)), int(m.group(2))) == (len(d), agree), "script 12 RESULTS.md disagrees"
    return d, agree, p


def plot_dark_vs_stress(d, agree, p, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    fig, ax = plt.subplots(figsize=(7.4, 5.2), facecolor=SURFACE)
    ax.axhline(0, color=GRID, lw=1)
    ax.axvline(0, color=GRID, lw=1)
    x, y = d.wu_stress_median_delta.values, d.zhu_dark_median_delta.values
    same = d.same_direction.values
    ax.scatter(x[same], y[same], s=46, color=BLUE, edgecolor=SURFACE, linewidth=1.5, zorder=3, label="same direction")
    ax.scatter(x[~same], y[~same], s=46, color=ORANGE, edgecolor=SURFACE, linewidth=1.5, zorder=3,
               label="opposite direction")
    far = d.assign(r=np.hypot(x / np.abs(x).max(), y / np.abs(y).max())).nlargest(6, "r")
    for r in far.itertuples():
        ax.annotate(short(r.metabolite.split(" (")[0], 26), (r.wu_stress_median_delta, r.zhu_dark_median_delta), xytext=(6, 4),
                    textcoords="offset points", fontsize=8, color=INK2)
    ax.set_xlabel("Wu 2018: median stress − control (log2-scale intensity)", color=INK2, fontsize=9)
    ax.set_ylabel("Zhu 2024: median 6 d − 0 d darkness (BLUP)", color=INK2, fontsize=9)
    ax.set_title(f"Darkness and stress move {agree} of {len(d)} shared metabolites the same way "
                 f"(binomial p = {p:.2g})", loc="left", fontsize=10, color=INK)
    ax.legend(loc="lower right", fontsize=8, frameon=False)
    style(ax)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- D ----------

def gc_correlation(ex):
    feats = [i for i, f in enumerate(ex.feat) if f["ds"] == "wu2016" and f["cls"] not in ("Unknown", "Unclassified")
             and not f["name"].lower().startswith(("unknown", "similar to"))]
    m = pd.DataFrame({ex.feat[i]["name"]: ex.series("wu2016", i) for i in feats})
    rho = m.corr(method="spearman", min_periods=MIN_ACC)
    cls = {ex.feat[i]["name"]: ex.feat[i]["cls"] for i in feats}
    # "Others" is a catch-all, not a pathway; classes under MIN_CLASS metabolites give unstable medians.
    classes = [c for c, n in Counter(cls.values()).most_common() if n >= MIN_CLASS and c != "Others"]
    tri = np.triu(np.ones(rho.shape, bool), 1)
    pairs = rho.where(tri).stack().rename("rho").reset_index()
    pairs.columns = ["a", "b", "rho"]
    pairs["class_a"], pairs["class_b"] = pairs.a.map(cls), pairs.b.map(cls)
    mat = pd.DataFrame(index=classes, columns=classes, dtype=float)
    for ca in classes:
        for cb in classes:
            sel = pairs[((pairs.class_a == ca) & (pairs.class_b == cb)) | ((pairs.class_a == cb) & (pairs.class_b == ca))]
            mat.loc[ca, cb] = sel.rho.median()
    mat.round(3).to_csv(OUT / "class_correlation.tsv", sep="\t")
    top = pairs.reindex(pairs.rho.abs().sort_values(ascending=False).index).head(10).copy()
    # Same quantification ion (S2 Table) means part of the correlation may be one derivatised signal.
    qm = {ex.feat[i]["name"]: ex.feat[i].get("quantMass") for i in feats}
    top["quant_mass_a"], top["quant_mass_b"] = top.a.map(qm), top.b.map(qm)
    top.assign(rho=top.rho.round(3)).to_csv(OUT / "top_pairs.tsv", sep="\t", index=False)
    inside = pairs[pairs.class_a.isin(classes) & pairs.class_b.isin(classes)]
    within = inside[inside.class_a == inside.class_b].rho.median()
    between = inside[inside.class_a != inside.class_b].rho.median()
    counts = {c: sum(1 for v in cls.values() if v == c) for c in classes}
    return mat, top, within, between, counts, len(feats), len(m.dropna(how="all"))


def plot_class_correlation(mat, counts, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.colors import LinearSegmentedColormap
    cmap = LinearSegmentedColormap.from_list("div", [BLUE, "#f0efec", "#e34948"])
    labels = [f"{c} ({counts[c]})" for c in mat.index]
    fig, ax = plt.subplots(figsize=(6.0, 4.4), facecolor=SURFACE)
    lim = 0.5
    im = ax.imshow(mat.values.astype(float), cmap=cmap, vmin=-lim, vmax=lim)
    for i in range(len(mat)):
        for j in range(len(mat)):
            v = mat.values[i, j]
            ax.text(j, i, f"{v:.2f}", ha="center", va="center", fontsize=9, color=INK)
    ax.set_xticks(range(len(mat)))
    ax.set_xticklabels(labels, rotation=30, ha="right", fontsize=8.5, color=INK)
    ax.set_yticks(range(len(mat)))
    ax.set_yticklabels(labels, fontsize=8.5, color=INK)
    for s in ax.spines.values():
        s.set_visible(False)
    cb = fig.colorbar(im, ax=ax, fraction=0.04, pad=0.03)
    cb.set_label("median Spearman ρ of metabolite pairs", color=INK2, fontsize=8.5)
    cb.ax.tick_params(colors=INK2, labelsize=8)
    cb.outline.set_visible(False)
    ax.set_title("Wu 2016 GC-MS: co-variation within and between classes", loc="left", fontsize=10, color=INK)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- E ----------

def percentile(s, acc):
    s = s.dropna()
    return float((s < s[acc]).mean() * 100) if acc in s.index else None


def atlas_percentiles(ex):
    atlas = [(a["atlas"], a["id"]) for a in ex.acc if a["atlas"]]
    rows = []
    for slice_key, label in (("wu2016", "Wu 2016 GC-MS (rosette)"), ("wu2018_control", "Wu 2018 LC-MS control (leaf)")):
        ds = ex.slices[slice_key]["ds"]
        by_cls = {}
        for i, f in enumerate(ex.feat):
            if f["ds"] == ds and f["cls"] not in ("Unknown", "Unclassified", "Others") and i in ex.slices[slice_key]["row"]:
                by_cls.setdefault(f["cls"], []).append(i)
        for cls, feats in sorted(by_cls.items()):
            if len(feats) < MIN_CLASS:
                continue
            series = [ex.series(slice_key, i) for i in feats]
            for eco, acc in atlas:
                vals = [v for v in (percentile(s, acc) for s in series) if v is not None]
                rows.append({"panel": label, "class": cls, "ecotype": eco, "accession": acc,
                             "metabolites": len(vals), "median_percentile": round(float(np.median(vals)), 1) if vals else None})
    df = pd.DataFrame(rows)
    df.to_csv(OUT / "atlas_ecotype_percentiles.tsv", sep="\t", index=False)
    return df


def plot_atlas(df, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    panels = list(dict.fromkeys(df.panel))
    n_max = max(df[df.panel == p]["class"].nunique() for p in panels)
    fig, axes = plt.subplots(1, len(panels), figsize=(11, 0.42 * n_max + 1.9), facecolor=SURFACE)
    for ax, panel in zip(axes, panels):
        d = df[df.panel == panel]
        classes = sorted(d["class"].unique())
        y = {c: k for k, c in enumerate(classes)}
        ax.axvline(50, color=GRID, lw=1)
        others = d[d.ecotype != "Col-0"].dropna(subset=["median_percentile"])
        ax.scatter(others.median_percentile, others["class"].map(y), s=26, color=INK2, alpha=0.45, zorder=2,
                   label="other atlas ecotypes")
        col0 = d[d.ecotype == "Col-0"].dropna(subset=["median_percentile"])
        ax.scatter(col0.median_percentile, col0["class"].map(y), s=58, color=ORANGE, edgecolor=SURFACE,
                   linewidth=1.5, zorder=3, label="Col-0 (flown in OSD-522)")
        for r in col0.itertuples():
            ax.annotate(f"{r.median_percentile:.0f}", (r.median_percentile, y[r[2]]), xytext=(0, 7),
                        textcoords="offset points", ha="center", fontsize=7.5, color=INK)
        ax.set_yticks(range(len(classes)))
        ax.set_yticklabels([f"{c} ({int(d[d['class'] == c].metabolites.max())})" for c in classes], fontsize=8.5, color=INK)
        ax.set_xlim(0, 100)
        ax.set_ylim(-0.7, len(classes) - 0.3)
        ax.set_xlabel("median percentile among panel accessions", color=INK2, fontsize=9)
        ax.set_title(panel, loc="left", fontsize=10, color=INK)
        style(ax)
    handles, labels = axes[-1].get_legend_handles_labels()
    fig.legend(handles, labels, loc="lower center", ncol=2, fontsize=8, frameon=False)
    fig.tight_layout(rect=(0, 0.07, 1, 1))
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- F ----------

def metabolights(ex):
    studies = ex.cat["studies"]
    rows = []
    tech = Counter()
    for s in studies:
        t = set(s["techniques"])
        tech["GC-MS"] += "GC-MS" in t
        tech["LC-MS"] += "LC-MS" in t
        tech["other MS (FIA, DI, MS)"] += bool(t - {"GC-MS", "LC-MS"})
    rows += [{"facet": "technique", "value": k, "studies": v} for k, v in tech.items()]
    excluded = {"blank", "solvent", "pure substance", "mixture", "standard"}
    parts = Counter(p for s in studies for p in set(s["organism_parts"]) if p.lower() not in excluded)
    rows += [{"facet": "tissue", "value": k, "studies": v} for k, v in parts.most_common(8)]
    def factor(name):  # "Time", "Time point" and "Timepoint" are one factor spelled three ways
        name = name.lower().strip()
        return "time point" if re.sub(r"[\s_]+", "", name) in ("time", "timepoint") else name

    facs = Counter(f for s in studies for f in {factor(k) for k in s["factors"]} if not re.search(BOOKKEEPING, f))
    rows += [{"facet": "factor", "value": k, "studies": v} for k, v in facs.most_common(6)]
    df = pd.DataFrame(rows)
    df.to_csv(OUT / "metabolights_summary.tsv", sep="\t", index=False)
    groups = ex.met["groups"]
    named = [g for g in groups if g.get("mtbls")]
    top = pd.DataFrame([{"compound": g["name"], "studies": len(g["mtbls"]),
                         "panels": ", ".join(sorted({k.split(':')[0] for k in g["members"]}))} for g in named])
    top = top.sort_values(["studies", "compound"], ascending=[False, True]).head(12)
    top.to_csv(OUT / "metabolights_top_compounds.tsv", sep="\t", index=False)
    with_maf = sum(any(a["mafs"] for a in s["assays"]) for s in studies)
    return df, top, {"studies": len(studies), "search_hits": ex.cat["search_hits"], "with_maf": with_maf,
                     "samples": sum(s["samples"] or 0 for s in studies), "groups": len(groups),
                     "groups_named": len(named), "fetched": ex.cat["fetched"]}


def plot_metabolights(df, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    facets = [("technique", "Technique"), ("tissue", "Tissue (top 8)"), ("factor", "Study factor (top 6)")]
    fig, axes = plt.subplots(1, 3, figsize=(11, 3.6), facecolor=SURFACE)
    for ax, (facet, title) in zip(axes, facets):
        d = df[df.facet == facet].sort_values("studies")
        ax.barh(range(len(d)), d.studies, color=BLUE, height=0.62)
        for k, v in enumerate(d.studies):
            ax.text(v + 0.6, k, str(v), va="center", fontsize=8, color=INK2)
        ax.set_yticks(range(len(d)))
        ax.set_yticklabels([short(v, 26) for v in d.value], fontsize=8.5, color=INK)
        ax.set_xlim(0, d.studies.max() * 1.18)
        ax.set_xlabel("studies", color=INK2, fontsize=9)
        ax.set_title(title, loc="left", fontsize=10, color=INK)
        style(ax)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


def plot_overlap(df, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    d = df[df.panel != "any panel"].iloc[::-1]
    fig, ax = plt.subplots(figsize=(7.4, 2.8), facecolor=SURFACE)
    colors = [ORANGE if p == "in all four" else BLUE for p in d.panel]
    ax.barh(range(len(d)), d.accessions, color=colors, height=0.6)
    for k, v in enumerate(d.accessions):
        ax.text(v + 3, k, str(v), va="center", fontsize=8.5, color=INK2)
    ax.set_yticks(range(len(d)))
    ax.set_yticklabels(d.panel, fontsize=8.5, color=INK)
    ax.set_xlim(0, d.accessions.max() * 1.12)
    ax.set_xlabel("accessions (ecotype.N key)", color=INK2, fontsize=9)
    ax.set_title(f"{int(df.set_index('panel').accessions['any panel'])} accessions across the panels",
                 loc="left", fontsize=10, color=INK)
    style(ax)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=SURFACE)
    plt.close(fig)


# ---------- main ----------

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    PLOTS.mkdir(exist_ok=True)
    ex = Explorer()
    ov = panel_overlap(ex)
    plot_overlap(ov, PLOTS / "panel_overlap.png")
    rep = replication(ex)
    plot_replication(rep, PLOTS / "replication.png")
    dvs, agree, agree_p = dark_vs_stress()
    plot_dark_vs_stress(dvs, agree, agree_p, PLOTS / "dark_vs_stress.png")
    mat, top, within, between, counts, n_named, n_acc = gc_correlation(ex)
    plot_class_correlation(mat, counts, PLOTS / "class_correlation.png")
    eco = atlas_percentiles(ex)
    plot_atlas(eco, PLOTS / "atlas_ecotypes.png")
    ml, ml_top, ml_n = metabolights(ex)
    plot_metabolights(ml, PLOTS / "metabolights.png")

    def comp(name):
        d = rep[rep.comparison.str.startswith(name)]
        return {"n": len(d), "median_rho": round(float(d.rho.median()), 2), "n_sig_pos": int(((d.q < 0.05) & (d.rho > 0)).sum()),
                "n_acc": int(d.n.median()), "best": d.sort_values("rho").iloc[-1][["compound", "rho"]].tolist()}

    summary = {
        "accessions": int(ov.set_index("panel").accessions["any panel"]),
        "in_all_four": int(ov.set_index("panel").accessions["in all four"]),
        "features": len(ex.feat),
        "features_by_panel": dict(Counter(f["ds"] for f in ex.feat)),
        "replication_lc_lc": comp("Zhu"), "replication_gc_lc": comp("Wu 2016"),
        "dark_stress": {"n": len(dvs), "agree": agree, "p": float(agree_p)},
        "gc_correlation": {"named_metabolites": n_named, "accessions": n_acc,
                           "within_class_median_rho": round(float(within), 3), "between_class_median_rho": round(float(between), 3),
                           "top_pair": [top.iloc[0].a, top.iloc[0].b, round(float(top.iloc[0].rho), 2)]},
        "metabolights": ml_n,
    }
    (OUT / "summary.json").write_text(json.dumps(summary, indent=2, default=str) + "\n")

    def md(df):
        return xtissue11.md_table(df)

    L = ["# Metabolome story — results", "",
         "Generated by `scripts/20_metabolome_story.py` from the explorer data (`app/public/explorer/`) and",
         "the script 11 and 12 results tables. `scripts/21_build_metabolome_story.py` renders these into",
         "`app/public/metabolome-story.html`.", "",
         "## A. Panels", "", md(ov), "",
         "## B. Do two experiments rank accessions the same way?", "",
         f"- Zhu 0 d vs Wu 2018 control (LC-MS / LC-MS): {summary['replication_lc_lc']['n']} compounds, median ρ "
         f"{summary['replication_lc_lc']['median_rho']}, {summary['replication_lc_lc']['n_sig_pos']} positive with BH q < 0.05.",
         f"- Wu 2016 GC-MS vs Wu 2018 LC-MS control: {summary['replication_gc_lc']['n']} compounds on ~"
         f"{summary['replication_gc_lc']['n_acc']} shared accessions, median ρ {summary['replication_gc_lc']['median_rho']}, "
         f"{summary['replication_gc_lc']['n_sig_pos']} positive with BH q < 0.05.",
         "- The two Wu experiments differ in growth, harvest and platform, not only in instrument.", "",
         md(rep[rep.comparison.str.startswith("Wu 2016")].drop(columns="comparison")), "",
         "## C. Darkness vs stress", "",
         f"{agree} of {len(dvs)} compounds move in the same direction (two-sided binomial p = {agree_p:.3g}); "
         "values from `results/osd522_metabolome_link/metabolite_flight_bridge.tsv`.", "",
         "## D. Wu 2016 GC-MS co-variation", "",
         f"{n_named} named metabolites (Unknown class and 'Similar to' names excluded). Median pair ρ within a class "
         f"{within:.3f}, between classes {between:.3f}.", "", md(mat.round(2).reset_index().rename(columns={"index": "class"})), "",
         "Strongest pairs (co-variation only; pairs quantified on the same ion, e.g. m/z 160 for the hexoses,",
         "may partly share one derivatised signal):", "", md(top.round(3)), "",
         "## E. Atlas ecotypes", "", md(eco), "",
         "## F. MetaboLights", "",
         f"{ml_n['studies']} of {ml_n['search_hits']} search hits list A. thaliana ({ml_n['with_maf']} with a result table, "
         f"{ml_n['samples']} samples; catalogue fetched {ml_n['fetched']}). {ml_n['groups_named']} of {ml_n['groups']} explorer "
         "compound groups are named in at least one study.", "", md(ml), "", md(ml_top), ""]
    (OUT / "RESULTS.md").write_text("\n".join(L))
    print(json.dumps(summary, indent=2, default=str))


if __name__ == "__main__":
    main()

"""Render the metabolome story page app/public/metabolome-story.html (served at /metabolome-story.html).

Fills scripts/templates/metabolome_story.html with values from results/metabolome_story/ (script 20)
and the explorer's dataset records, copies the figures to app/public/metabolome-story/, and writes
results/metabolome_story/hub_thumb.png (320 x 180) for the CoSE/AstroBotany hub card. Run after script
20; then `npm run build` copies app/public/ into docs/ for GitHub Pages.
"""

import html
import json
import shutil
from pathlib import Path
from string import Template

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
RES = ROOT / "results" / "metabolome_story"
EXPLORER = ROOT / "app" / "public" / "explorer"
TEMPLATE = Path(__file__).with_name("templates") / "metabolome_story.html"
OUT = ROOT / "app" / "public" / "metabolome-story.html"
FIG_DIR = ROOT / "app" / "public" / "metabolome-story"
FIGURES = ["panel_overlap.png", "replication.png", "dark_vs_stress.png", "class_correlation.png",
           "atlas_ecotypes.png", "metabolights.png"]
THUMB_SOURCE, THUMB = "dark_vs_stress.png", RES / "hub_thumb.png"
THUMB_SIZE = (320, 180)


def tsv(name):
    return pd.read_csv(RES / name, sep="\t")


def e(text):
    return html.escape(str(text))


def hub_thumb():
    """Centre-crop the lead figure to the hub's 16:9 card shape, then scale it down (no letterboxing)."""
    from PIL import Image
    im = Image.open(RES / "plots" / THUMB_SOURCE).convert("RGB")
    target = THUMB_SIZE[0] / THUMB_SIZE[1]
    w, h = im.size
    if w / h < target:
        crop_h = round(w / target)
        top = (h - crop_h) // 2
        im = im.crop((0, top, w, top + crop_h))
    else:
        crop_w = round(h * target)
        left = (w - crop_w) // 2
        im = im.crop((left, 0, left + crop_w, h))
    im.resize(THUMB_SIZE, Image.LANCZOS).save(THUMB, optimize=True)


def main():
    s = json.loads((RES / "summary.json").read_text())
    ov = tsv("panel_overlap.tsv").set_index("panel").accessions
    rep = tsv("replication.tsv")
    gc = rep[rep.comparison.str.startswith("Wu 2016")].set_index("compound")
    pairs = tsv("top_pairs.tsv")
    eco = tsv("atlas_ecotype_percentiles.tsv")
    ml = tsv("metabolights_summary.tsv")
    ml_top = tsv("metabolights_top_compounds.tsv")
    datasets = json.loads((EXPLORER / "metabolites.json").read_text())["datasets"]

    col0 = eco[eco.ecotype == "Col-0"].dropna(subset=["median_percentile"])
    others = eco[eco.ecotype != "Col-0"].dropna(subset=["median_percentile"])

    def col0_pct(panel_prefix, cls):
        return f"{col0[col0.panel.str.startswith(panel_prefix) & (col0['class'] == cls)].median_percentile.iloc[0]:.0f}"

    factors = ml[ml.facet == "factor"].set_index("value").studies
    techniques = ml[ml.facet == "technique"].set_index("value").studies
    pair_rows = [f'<tr><td>{e(r.a)}</td><td>{e(r.b)}</td><td class="num">{r.rho:.2f}</td>'
                 f'<td class="num">{int(r.quant_mass_a)} / {int(r.quant_mass_b)}</td></tr>' for r in pairs.itertuples()]
    ml_rows = [f'<tr><td>{e(r.compound)}</td><td class="num">{r.studies}</td><td>{e(r.panels)}</td></tr>'
               for r in ml_top.head(8).itertuples()]
    refs = [f'<li>{e(d["citation"])} <a href="https://doi.org/{e(d["doi"])}">doi:{e(d["doi"])}</a>'
            + (f' · data <a href="https://doi.org/{e(d["data_doi"])}">doi:{e(d["data_doi"])}</a>' if d.get("data_doi") else "")
            + "</li>" for d in datasets]

    lc, gcs = s["replication_lc_lc"], s["replication_gc_lc"]
    values = {
        "accessions": s["accessions"], "in_all_four": s["in_all_four"], "features": s["features"],
        "f_zhu": s["features_by_panel"]["zhu"], "f_wu18": s["features_by_panel"]["wu2018"],
        "f_wu16": s["features_by_panel"]["wu2016"],
        "n_zhu": int(ov["Zhu 2024 darkness (leaf, LC-MS)"]), "n_wu18c": int(ov["Wu 2018 control (leaf, LC-MS)"]),
        "n_wu18s": int(ov["Wu 2018 stress (leaf, LC-MS)"]), "n_wu16": int(ov["Wu 2016 primary (rosette, GC-MS)"]),
        "lc_n": lc["n"], "lc_sig": lc["n_sig_pos"], "lc_rho": f"{lc['median_rho']:.2f}", "lc_acc": lc["n_acc"],
        "lc_best": e(lc["best"][0]), "lc_best_rho": f"{lc['best'][1]:.2f}",
        "gc_n": gcs["n"], "gc_sig": gcs["n_sig_pos"], "gc_rho": f"{gcs['median_rho']:.2f}", "gc_acc": gcs["n_acc"],
        "proline_rho": f"{gc.loc['Proline', 'rho']:.2f}", "citric_rho": f"{gc.loc['Citric acid', 'rho']:.2f}",
        "agree": s["dark_stress"]["agree"], "agree_n": s["dark_stress"]["n"], "agree_p": f"{s['dark_stress']['p']:.2g}",
        "gc_named": s["gc_correlation"]["named_metabolites"], "gc_cor_acc": s["gc_correlation"]["accessions"],
        "within": f"{s['gc_correlation']['within_class_median_rho']:.2f}",
        "between": f"{s['gc_correlation']['between_class_median_rho']:.2f}",
        "pair_rows": "\n      ".join(pair_rows),
        "col0_min": f"{col0.median_percentile.min():.0f}", "col0_max": f"{col0.median_percentile.max():.0f}",
        "col0_aa_lc": col0_pct("Wu 2018", "Amino acid"), "col0_aa_gc": col0_pct("Wu 2016", "Amino acid"),
        "col0_flav": col0_pct("Wu 2018", "Flavonoid"),
        "others_min": f"{others.median_percentile.min():.0f}", "others_max": f"{others.median_percentile.max():.0f}",
        "ml_studies": s["metabolights"]["studies"], "ml_hits": s["metabolights"]["search_hits"],
        "ml_maf": s["metabolights"]["with_maf"], "ml_samples": f"{s['metabolights']['samples']:,}",
        "ml_groups": s["metabolights"]["groups"], "ml_named": s["metabolights"]["groups_named"],
        "ml_fetched": s["metabolights"]["fetched"], "ml_gc": int(techniques["GC-MS"]),
        "ml_f_genotype": int(factors["genotype"]), "ml_f_treatment": int(factors["treatment"]),
        "ml_rows": "\n      ".join(ml_rows), "refs": "\n      ".join(refs),
    }
    OUT.write_text(Template(TEMPLATE.read_text()).substitute(values))
    FIG_DIR.mkdir(parents=True, exist_ok=True)
    for f in FIGURES:
        shutil.copyfile(RES / "plots" / f, FIG_DIR / f)
    hub_thumb()
    print(f"wrote {OUT.relative_to(ROOT)}, {len(FIGURES)} figures and {THUMB.relative_to(ROOT)}")
    for k, v in values.items():
        if not k.endswith(("_rows", "refs")):
            print(f"  {k} = {v}")


if __name__ == "__main__":
    main()

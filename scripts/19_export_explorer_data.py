"""Export the compact JSON that app/public/metabolome-explorer.html reads.

Run scripts 07, 10, 11, 12, 16, 17 and 18 first. Writes to app/public/explorer/:
  accessions.json   one record per accession (script 17) with panel membership
  metabolites.json  dataset provenance, one record per measured feature (dataset x metabolite), and
                    cross-dataset compound groups with the MetaboLights studies that name them
  values.json       one metabolite x accession matrix per dataset slice, 4 significant figures

Compound groups join features that are the same metabolite in different datasets. Two links only:
the Zhu <-> Wu 2018 formula + retention-time matches from script 11, and equality of name_key() below
(Wu 2018 aliases included). name_key is stricter than script 11's norm_name, which drops "beta-"/"alpha-"
and everything in parentheses and so equates alanine with beta-alanine and cis- with trans-sinapic acid;
name_key only drops D-/L-/DL- and punctuation. A link that would put two features of one dataset in a
group is refused. Synonyms such as "malate" vs "malic acid" are not linked, so groups are conservative.
MetaboLights names are first passed through clean_ml_name() (Golm Metabolome Database codes, TMS/MEOX
derivatisation tags, inverted names such as "Alanine, beta-"). The page repeats both functions in JS.

Classes are as published, with two Wu 2018 typos fixed ("Glocoside", "Amino acid deri"). Zhu publishes
a class for three metabolites only; the rest take the class of a linked Wu 2018 or Wu 2016 feature,
else "Unclassified".

Wu 2018 reports some metabolites in both ion modes, and intensities from the two modes are on different
scales (7-methylthioheptyl glucosinolate: control positive-mode median 16.7, stress negative-mode 26.0).
So one mode is chosen per metabolite, never per accession: a mode measured in both conditions (negative
first), else each condition's own mode with `modeSplit` set, and the page leaves those out of stress deltas.
Scripts 11 and 12 instead prefer negative mode per accession and condition, which mixes modes for about
20 metabolites; their stress deltas differ from the ones the page computes.
Wu 2018 Table 2 lists two names on two rows each (D-Galactonic acid with formulas C6H10O7 and C6H12O7;
Guanosine 2':3'-cyclic monophosphate at two retention times), so their control and stress values can
come from different peaks. Those features carry `splitRows` and the page leaves them out of stress deltas.
"""

import gzip
import csv
import importlib.util
import json
import math
import re
from pathlib import Path

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
PROC = ROOT / "data" / "processed" / "metabolome"
META = ROOT / "results" / "metabolome_meta_analysis"
LINK = ROOT / "results" / "osd522_metabolome_link"
OUT = ROOT / "app" / "public" / "explorer"

spec = importlib.util.spec_from_file_location("xtissue11", Path(__file__).with_name("11_cross_tissue_gwas_analysis.py"))
xtissue11 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(xtissue11)

CLASS_FIX = {"Glocoside": "Glucoside", "Amino acid deri": "Amino acid derivative", "Oragnic acid": "Organic acid"}

DATASETS = [
    {"key": "zhu", "label": "Zhu 2024 darkness", "platform": "LC-MS", "tissue": "leaf",
     "scale": "BLUP (best linear unbiased predictor) as published",
     "citation": "Zhu F, Ahchige MW, et al. The natural variance of Arabidopsis secondary metabolism on "
                 "extended darkness. Sci Data 11:841 (2024).",
     "doi": "10.1038/s41597-024-03694-2", "data_doi": "10.6084/m9.figshare.24407896.v3",
     "licence": "CC BY 4.0",
     "note": "Plants harvested at 35 d (0 d darkness) and 41 d (6 d darkness) after germination; the 0 d and "
             "6 d sheets report different metabolite subsets. Col-0 is not in this panel."},
    {"key": "wu2018", "label": "Wu 2018 leaf", "platform": "LC-MS", "tissue": "leaf",
     "scale": "normalised intensity as published (log2 scale; 1st-99th percentile 13.9-31.1, and the two ion "
              "modes sit on different levels)",
     "citation": "Wu S, Tohge T, et al. Mapping the Arabidopsis metabolic landscape by untargeted metabolomics "
                 "at different environmental conditions. Mol Plant 11(1):118-134 (2018).",
     "doi": "10.1016/j.molp.2017.08.012", "data_doi": None,
     "licence": "Not open access (Elsevier). Per-accession values reproduced from Supplementary Table 3 for "
                "research use with citation.",
     "note": "Identified metabolites only: 117, out of 4,182 control and 3,968 stress features in "
             "Supplementary Table 3. The supplement's text calls the stress treatment the 32 °C darkness "
             "stress condition; this has not been checked against the main paper's methods."},
    {"key": "wu2016", "label": "Wu 2016 primary (GC-MS)", "platform": "GC-MS",
     "tissue": "rosette, harvested 37 days after germination",
     "scale": "normalised intensity as published (centred near 0)",
     "citation": "Wu S, Alseekh S, Cuadros-Inostroza Á, Fusari CM, Mutwil M, Kooke R, Keurentjes JB, Fernie AR, "
                 "Willmitzer L, Brotman Y. Combined use of genome-wide association data and correlation networks "
                 "unravels key regulators of primary metabolism in Arabidopsis thaliana. PLoS Genet "
                 "12(10):e1006363 (2016).",
     "doi": "10.1371/journal.pgen.1006363", "data_doi": "10.1371/journal.pgen.1006363.s001",
     "licence": "CC BY 4.0",
     "note": "S1 Dataset lists ecotype.6046 (Lov-5) twice with different values; both rows are left out."},
]

SLICES = [
    ("zhu_d0", "zhu", "0 d darkness"), ("zhu_d6", "zhu", "6 d darkness"),
    ("wu2018_control", "wu2018", "control"), ("wu2018_stress", "wu2018", "stress"),
    ("wu2016", "wu2016", "control"),
]


def name_key(s):
    s = str(s).lower().strip().replace("\u2032", "'").replace("\u2019", "'")
    s = re.sub(r"^(dl|d|l)-", "", s)
    return re.sub(r"[^a-z0-9]", "", s)


def clean_ml_name(s):
    s = str(s).strip()
    s = re.sub(r"^[A-Z]\d{5,6}_", "", s)                              # Golm Metabolome Database code
    s = re.sub(r"\s*\(\d*(?:TMS|MEOX|TBDMS)\)", "", s, flags=re.I)    # derivatisation tags
    s = re.sub(r"-\d*TMS$", "", s, flags=re.I)
    s = re.sub(r"\s+(?:MP|BP)$", "", s)                                 # methoxime peak isomers
    m = re.match(r"^(.+?),\s*([A-Za-z0-9,\-]+-)$", s)                  # "Alanine, beta-" -> "beta-Alanine"
    if m:
        s = m.group(2) + m.group(1)
    return s.strip()


def sig(x, n=4):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return None
    x = float(x)
    if x == 0:
        return 0
    return round(x, n - 1 - int(math.floor(math.log10(abs(x)))))


def clean(v):
    if isinstance(v, (float, np.floating)):
        return None if math.isnan(v) else sig(v)
    if isinstance(v, (np.integer,)):
        return int(v)
    if isinstance(v, (np.bool_,)):
        return bool(v)
    return v


def tidy(o):
    """Recursively make numpy/pandas scalars JSON-safe (NaN and the string "nan" become null)."""
    if isinstance(o, dict):
        return {k: tidy(v) for k, v in o.items()}
    if isinstance(o, (list, tuple)):
        return [tidy(v) for v in o]
    if isinstance(o, str):
        return None if o == "nan" else o
    if o is None or isinstance(o, bool):
        return o
    if isinstance(o, (np.bool_,)):
        return bool(o)
    if isinstance(o, (int, np.integer)):
        return int(o)
    if isinstance(o, (float, np.floating)):
        return None if math.isnan(o) else float(o)
    if pd.isna(o):
        return None
    raise TypeError(f"unexpected {type(o)}: {o!r}")


def fix_class(c):
    c = str(c).strip() if pd.notna(c) else ""
    if not c or c.lower() in ("nan", "unknown"):
        return None
    c = c[0].upper() + c[1:]
    return CLASS_FIX.get(c, c)


def accessions():
    t = pd.read_csv(PROC / "accessions_unified.csv")
    recs = []
    for r in t.itertuples():
        recs.append({"id": r.accession, "eid": int(r.ecotype_id), "name": r.name, "cs": r.abrc,
                     "atlas": r.atlas_ecotype if pd.notna(r.atlas_ecotype) else None,
                     "zhu": bool(r.zhu_darkness), "wu2018c": bool(r.wu2018_control), "wu2018s": bool(r.wu2018_stress),
                     "wu2016": bool(r.wu2016_primary), "naake": bool(r.naake_leaf_zhu),
                     "dupName": bool(r.duplicate_name), "dup2016": bool(r.wu2016_duplicated_in_source)})
    return recs


def wu_mode_choice(wu):
    """(metabolite, condition) -> ion mode, one mode per metabolite where both conditions share one."""
    avail = wu.groupby(["metabolite_name", "condition"])["mode"].agg(set).to_dict()
    choice = {}
    for name in wu.metabolite_name.unique():
        c, s = avail.get((name, "control"), set()), avail.get((name, "stress"), set())
        shared = [m for m in ("negative", "positive") if m in c & s]
        for cond, have in (("control", c), ("stress", s)):
            if have:
                choice[(name, cond)] = shared[0] if shared else ("negative" if "negative" in have else "positive")
    return choice


def load_panels():
    zhu = pd.read_csv(PROC / "darkness_metabolome.csv")
    zid = xtissue11.zhu_identities()
    wu_ident = pd.read_csv(PROC / "wu_identified_metabolites.csv")
    wu = pd.read_csv(PROC / "wu_leaf_identified_long.csv")
    choice = wu_mode_choice(wu)
    wu = wu[[choice.get((n, c)) == m for n, c, m in zip(wu.metabolite_name, wu.condition, wu["mode"])]]
    w16 = pd.read_csv(PROC / "wu2016_primary_long.csv")
    w16m = pd.read_csv(PROC / "wu2016_primary_metabolites.csv")
    return zhu, zid, wu_ident, wu, w16, w16m


def features(zhu, zid, wu_ident, wu, w16m):
    feats = []
    zcls = zid.set_index("metabolite_id").cls.map(fix_class).to_dict()
    for mid, name in zhu.drop_duplicates("metabolite_id")[["metabolite_id", "metabolite_name"]].values:
        f = zid.set_index("metabolite_id").reindex([mid]).iloc[0]
        feats.append({"key": f"zhu:{mid}", "ds": "zhu", "id": mid, "name": name, "cls": zcls.get(mid),
                      "plat": "LC-MS", "formula": f.formula if pd.notna(f.formula) else None,
                      "names": [name]})
    split = {}
    for name, g in wu_ident[wu_ident.metabolite_name.duplicated(keep=False)].groupby("metabolite_name"):
        split[name] = "; ".join(
            f"{r.formula} RT {float(r.rt):.2f} min ("
            + ", ".join(c.split("_", 1)[1] for c in ("peak_control_pos", "peak_control_neg", "peak_stress_pos",
                                                       "peak_stress_neg") if pd.notna(getattr(r, c)))
            + ")" for r in g.itertuples())
    wi = wu_ident.drop_duplicates("metabolite_name").set_index("metabolite_name")
    modes = wu.groupby(["metabolite_name", "condition"])["mode"].first().unstack()
    for name in sorted(wu.metabolite_name.unique(), key=str.lower):
        r = wi.loc[name]
        alias = r.alias if pd.notna(r.alias) else None
        feats.append({"key": f"wu2018:{name}", "ds": "wu2018", "id": name, "name": name, "cls": fix_class(r.metabolite_class),
                      "plat": "LC-MS", "formula": r.formula if pd.notna(r.formula) and r.formula != "nan" else None,
                      "alias": alias, "idLevel": r.id_level if pd.notna(r.id_level) else None,
                      "modes": {c: modes.loc[name, c] for c in modes.columns if pd.notna(modes.loc[name, c])},
                      "modeSplit": modes.loc[name].dropna().nunique() > 1,
                      "names": [name] + ([alias] if alias else [])})
        if name in split:
            feats[-1]["splitRows"] = split[name]
    for r in w16m.itertuples():
        feats.append({"key": f"wu2016:{r.metabolite_id}", "ds": "wu2016", "id": r.metabolite_id, "name": r.metabolite_name,
                      "cls": fix_class(r.metabolite_class), "plat": "GC-MS", "quantMass": int(r.quant_mass),
                      "names": [r.metabolite_name]})
    return feats


def groups(feats):
    parent = list(range(len(feats)))

    def find(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    def union(a, b):
        parent[find(a)] = find(b)

    idx = {f["key"]: i for i, f in enumerate(feats)}
    links = {"formula_rt": 0, "name": 0}
    pairs = pd.read_csv(META / "zhu_wu_metabolite_matches.tsv", sep="\t")
    for r in pairs.itertuples():
        a, b = idx.get(f"zhu:{r.metabolite_id}"), idx.get(f"wu2018:{r.metabolite_name}")
        if a is not None and b is not None:
            union(a, b)
            links["formula_rt"] += 1
    def datasets(root):
        return {feats[i]["ds"] for i in range(len(feats)) if find(i) == root}

    by_key = {}
    for i, f in enumerate(feats):
        for n in f["names"]:
            low = str(n).lower()
            if low.startswith(("unknown", "similar to")):
                continue
            by_key.setdefault(name_key(n), []).append(i)
    refused = []
    for members in by_key.values():
        for j in members[1:]:
            a, b = find(j), find(members[0])
            if a == b:
                continue
            if datasets(a) & datasets(b):
                refused.append((feats[j]["key"], feats[members[0]]["key"]))
                continue
            union(j, members[0])
            links["name"] += 1

    roots = {}
    for i in range(len(feats)):
        roots.setdefault(find(i), []).append(i)
    order = {"wu2016": 0, "wu2018": 1, "zhu": 2}
    out = []
    for members in roots.values():
        members.sort(key=lambda i: order[feats[i]["ds"]])
        cls = next((feats[i]["cls"] for i in members if feats[i]["cls"]), None)
        g = len(out)
        for i in members:
            feats[i]["grp"] = g
            if not feats[i]["cls"] and cls:
                feats[i]["cls"] = cls
                feats[i]["clsFrom"] = "linked feature"
        out.append({"name": feats[members[0]]["name"], "members": [feats[i]["key"] for i in members],
                    "norms": sorted({name_key(n) for i in members for n in feats[i]["names"]})})
    for f in feats:
        f["cls"] = f["cls"] or "Unclassified"
    multi = [g for g in out if len({k.split(':')[0] for k in g["members"]}) > 1]
    print(f"  groups: {len(out)} ({len(multi)} span more than one dataset); links formula+RT {links['formula_rt']}, "
          f"name {links['name']}; refused (same dataset) {refused}")
    return out


def metabolights_index(grps):
    path = PROC / "metabolights_maf_names.csv.gz"
    if not path.exists():
        print("  warning: metabolights_maf_names.csv.gz missing; run script 18 names (groups get no studies)")
        return
    by_norm = {}
    with gzip.open(path, "rt") as f:
        for r in csv.DictReader(f):
            by_norm.setdefault(name_key(clean_ml_name(r["metabolite_identification"])), set()).add(r["study"])
    hit = 0
    for g in grps:
        studies = set().union(*(by_norm.get(n, set()) for n in g["norms"]))
        g["mtbls"] = sorted(studies, key=lambda s: int(s[5:]))
        hit += bool(studies)
    print(f"  MetaboLights name index: {hit}/{len(grps)} groups named in at least one study")


def annotate(feats):
    """Attach script 12's transcript-side flight shifts. Its per-metabolite Wu value statistics (Col-0
    percentiles, stress deltas) and script 11's replication rho are left out: both pick ion modes per
    accession, so the page computes those from its own one-mode-per-metabolite values instead."""
    bridge = pd.read_csv(LINK / "metabolite_flight_bridge.tsv", sep="\t").drop_duplicates("metabolite").set_index("metabolite")
    bcols = ["pathway_class", "pathway_genes_flight_median_log2fc", "gwas_locus_genes_flight_median_log2fc",
             "gwas_locus_genes_tested"]
    for f in feats:
        if f["ds"] == "wu2018" and f["id"] in bridge.index:
            f["flight"] = {c: clean(bridge.loc[f["id"], c]) for c in bcols}


def values(zhu, wu, w16, feats, acc_ids):
    aidx = {a: i for i, a in enumerate(acc_ids)}
    fidx = {f["key"]: i for i, f in enumerate(feats)}
    frames = {
        "zhu_d0": zhu[zhu.timepoint == "0d darkness"].assign(key="zhu:" + zhu.metabolite_id, v=zhu.intensity),
        "zhu_d6": zhu[zhu.timepoint == "6d darkness"].assign(key="zhu:" + zhu.metabolite_id, v=zhu.intensity),
        "wu2018_control": wu[wu.condition == "control"].assign(key="wu2018:" + wu.metabolite_name, v=wu.intensity),
        "wu2018_stress": wu[wu.condition == "stress"].assign(key="wu2018:" + wu.metabolite_name, v=wu.intensity),
        "wu2016": w16.assign(key="wu2016:" + w16.metabolite_id, v=w16.value),
    }
    out = []
    for key, ds, cond in SLICES:
        d = frames[key].dropna(subset=["v"])
        m = d.pivot_table(index="key", columns="accession", values="v", aggfunc="first")
        fk = sorted(m.index, key=lambda k: fidx[k])
        ak = sorted(m.columns, key=lambda a: aidx[a])
        m = m.loc[fk, ak]
        out.append({"key": key, "ds": ds, "cond": cond, "feats": [fidx[k] for k in fk], "accs": [aidx[a] for a in ak],
                    "data": [[sig(v) for v in row] for row in m.values]})
        print(f"  slice {key}: {len(fk)} metabolites x {len(ak)} accessions, "
              f"{int(m.notna().sum().sum()):,} values")
    return out


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    acc = accessions()
    zhu, zid, wu_ident, wu, w16, w16m = load_panels()
    feats = features(zhu, zid, wu_ident, wu, w16m)
    grps = groups(feats)
    metabolights_index(grps)
    annotate(feats)
    vals = values(zhu, wu, w16, feats, [a["id"] for a in acc])
    for f in feats:
        del f["names"]
    for g in grps:
        del g["norms"]
    classes = sorted({f["cls"] for f in feats})
    dump = lambda o: json.dumps(tidy(o), ensure_ascii=False, separators=(",", ":"), allow_nan=False)
    (OUT / "accessions.json").write_text(dump(acc))
    (OUT / "metabolites.json").write_text(dump({"datasets": DATASETS, "classes": classes, "features": feats,
                                                 "groups": grps}))
    (OUT / "values.json").write_text(dump({"slices": vals}))
    for name in ("accessions.json", "metabolites.json", "values.json"):
        print(f"  {name}: {(OUT / name).stat().st_size / 1e3:,.0f} kB")
    per_ds = ", ".join(f"{d} {sum(f['ds'] == d for f in feats)}" for d in ("zhu", "wu2018", "wu2016"))
    print(f"  features {len(feats)} ({per_ds}); classes {len(classes)}; "
          f"Unclassified {sum(f['cls'] == 'Unclassified' for f in feats)}")


if __name__ == "__main__":
    main()

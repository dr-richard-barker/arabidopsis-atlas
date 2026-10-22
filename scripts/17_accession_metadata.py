"""One accession table across the metabolome panels, keyed on ecotype.N.

Run scripts 07, 10 and 16 first. Panels: Zhu 2024 darkness (LC-MS), Wu 2018 control / stress (LC-MS),
Wu 2016 primary metabolism (GC-MS), and the accession columns of Naake 2024's leaf-Zhu peak table
(membership only; its values are not used here).

Names and ABRC stock numbers come from the two Wu accession tables (2018 first, 2016 where 2018 has
none); Zhu publishes ecotype numbers only. Geography (country, lat/lon, admixture group) is NOT written
here: the 1001 Genomes accession table has no open licence and its data policy asks that data not be
repackaged, so the explorer page reads it live from 1001genomes.org (CORS-open). The `geo` step only
reports how many accessions that live join will cover (145 of 343 on 2026-10-22: the 1135 set misses most
RegMap/HapMap-only accessions). AraPheno's accession list covers all of them but sends no CORS header
and states no licence, so it is linked to per accession rather than used.

Output: data/processed/metabolome/accessions_unified.csv
"""

import argparse
import json
import urllib.request
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
PROC = ROOT / "data" / "processed" / "metabolome"
NAAKE_ZHU = (ROOT / "data" / "raw" / "naake_2024_supplementary" / "Supplemental Dataset S4_peaktable Thomas Naake"
             / "rep_zhu_negative_match.csv")
COVERAGE = ROOT / "results" / "metabolome_meta_analysis" / "atlas_ecotype_coverage.tsv"
G1001 = "https://1001genomes.org/json/1135_accessions_table.json"
OUT = PROC / "accessions_unified.csv"


def build():
    zhu = set(pd.read_csv(PROC / "darkness_metabolome.csv", usecols=["accession"]).accession)
    wu_long = pd.read_csv(PROC / "wu_leaf_identified_long.csv", usecols=["accession", "condition"])
    wu18 = pd.read_csv(PROC / "wu_accessions.csv")
    wu16 = pd.read_csv(PROC / "wu2016_accessions.csv")
    w16_values = set(pd.read_csv(PROC / "wu2016_primary_long.csv", usecols=["accession"]).accession)
    naake = set()
    if NAAKE_ZHU.exists():
        naake = {c for c in pd.read_csv(NAAKE_ZHU, sep="\t", nrows=0).columns if c.startswith("ecotype.")}
    else:
        print(f"  warning: {NAAKE_ZHU.name} not found, naake_leaf_zhu left False (re-fetch per SUPPLEMENTARY_SOURCES.md)")

    ids = zhu | set(wu18.accession) | set(wu16.accession) | naake
    t = pd.DataFrame({"accession": sorted(ids, key=lambda a: int(a.split(".")[1]))})
    t["ecotype_id"] = t.accession.str.split(".").str[1].astype(int)

    n18 = wu18.drop_duplicates("accession").set_index("accession")
    n16 = wu16.drop_duplicates("accession").set_index("accession")
    t["name"] = t.accession.map(n18.accession_name).fillna(t.accession.map(n16.accession_name))
    t["abrc"] = t.accession.map(n18.abrc).fillna(t.accession.map(n16.abrc))
    both = t.accession.isin(n18.index) & t.accession.isin(n16.index)
    t["name_conflict"] = both & (t.accession.map(n18.accession_name).astype(str).str.strip().str.lower()
                                 != t.accession.map(n16.accession_name).astype(str).str.strip().str.lower())
    t["duplicate_name"] = t.name.notna() & t.name.duplicated(keep=False)

    t["zhu_darkness"] = t.accession.isin(zhu)
    t["wu2018_control"] = t.accession.isin(set(wu_long.accession[wu_long.condition == "control"]))
    t["wu2018_stress"] = t.accession.isin(set(wu_long.accession[wu_long.condition == "stress"]))
    t["wu2016_primary"] = t.accession.isin(w16_values)
    t["wu2016_duplicated_in_source"] = t.accession.isin(set(wu16.accession[wu16.duplicated_in_source]))
    t["naake_leaf_zhu"] = t.accession.isin(naake)

    cov = pd.read_csv(COVERAGE, sep="\t")
    t["atlas_ecotype"] = t.accession.map(cov.set_index("accession").ecotype)

    t.to_csv(OUT, index=False)
    panels = ["zhu_darkness", "wu2018_control", "wu2018_stress", "wu2016_primary", "naake_leaf_zhu"]
    print(f"  {OUT.name}: {len(t)} accessions; " + ", ".join(f"{p} {int(t[p].sum())}" for p in panels))
    print(f"  in all four value panels (Zhu, Wu 2018 control+stress, Wu 2016): "
          f"{int(t[panels[:4]].all(axis=1).sum())}")
    print(f"  unnamed: {int(t.name.isna().sum())}; name conflicts Wu2018 vs Wu2016: {int(t.name_conflict.sum())}; "
          f"duplicate names: {sorted(t.name[t.duplicate_name].unique())}")
    print(f"  atlas ecotypes: {t.dropna(subset=['atlas_ecotype'])[['atlas_ecotype', 'accession']].values.tolist()}")
    return t


def geo_coverage():
    """Report how many accessions the page's live 1001 Genomes join will place on the map."""
    t = pd.read_csv(OUT)
    with urllib.request.urlopen(G1001, timeout=60) as r:
        g = {row["Accession_ID"] for row in json.load(r)}
    hit = t.ecotype_id.isin(g)
    print(f"  1001 Genomes 1135 table: {len(g)} accessions; matched {int(hit.sum())}/{len(t)} of ours "
          f"(unmatched ecotype_id < 1000: {int((~hit & (t.ecotype_id < 1000)).sum())}, "
          f">= 1000: {int((~hit & (t.ecotype_id >= 1000)).sum())})")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("step", choices=["build", "geo", "all"])
    a = ap.parse_args()
    if a.step in ("build", "all"):
        build()
    if a.step in ("geo", "all"):
        geo_coverage()

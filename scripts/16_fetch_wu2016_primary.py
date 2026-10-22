"""Fetch and export the Wu et al. (2016) GC-MS primary-metabolite accession panel.

Wu S, Alseekh S, et al. Combined Use of Genome-Wide Association Data and Correlation Networks
Unravels Key Regulators of Primary Metabolism in Arabidopsis thaliana. PLoS Genet 12(10):e1006363
(2016). doi:10.1371/journal.pgen.1006363, PMC5070769, CC BY 4.0.

Every other metabolome panel in this repo is LC-MS; this one is GC-MS primary metabolism on the same
ecotype.N accession key. Supplement items used (each sheet's first row is a title, header on row 2):
  s001  S1 Dataset  normalized intensities, 94 metabolites x 314 accessions
  s012  S1 Table    314 accessions (ecotype.N, ABRC stock, name)
  s013  S2 Table    metabolite ID, name, class, quantification mass

Outputs (data/processed/metabolome/):
  wu2016_primary_metabolites.csv  one row per metabolite
  wu2016_primary_long.csv         metabolite x accession
  wu2016_accessions.csv           one row per accession

S1 Dataset lists ecotype.6046 (Lov-5) twice with different values (rows 77 and 217 of S1 Table), so
both rows are dropped from wu2016_primary_long.csv and flagged `duplicated_in_source` here.
"""

import argparse
import hashlib
import urllib.request
from datetime import date
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw" / "wu_2016_supplementary"
OUT = ROOT / "data" / "processed" / "metabolome"
DOI = "10.1371/journal.pgen.1006363"
URL = "https://journals.plos.org/plosgenetics/article/file?type=supplementary&id={doi}.{item}"
ITEMS = {"s001": "S1_Dataset_primary_metabolites.xlsx",
         "s012": "S1_Table_accessions.xlsx",
         "s013": "S2_Table_metabolites.xlsx"}


def fetch():
    RAW.mkdir(parents=True, exist_ok=True)
    for item, name in ITEMS.items():
        dest = RAW / name
        if not dest.exists():
            with urllib.request.urlopen(URL.format(doi=DOI, item=item), timeout=120) as r:
                dest.write_bytes(r.read())
        digest = hashlib.sha256(dest.read_bytes()).hexdigest()[:16]
        print(f"  | `wu_2016_supplementary/{name}` | {dest.stat().st_size} | `{digest}` |")
    print(f"  fetched {date.today().isoformat()} from {URL.format(doi=DOI, item='s0NN')}")


def export():
    mets = pd.read_excel(RAW / ITEMS["s013"], header=1).iloc[:, :4]
    mets.columns = ["metabolite_id", "metabolite_name", "metabolite_class", "quant_mass"]
    mets = mets.dropna(subset=["metabolite_id"])
    mets = mets[mets.metabolite_id.astype(str).str.match(r"^met\d+$")]
    mets["metabolite_name"] = mets.metabolite_name.astype(str).str.strip()
    # Source mixes "Others" and "others"; capitalize() also turns "Amino Acid" into "Amino acid".
    mets["metabolite_class"] = mets.metabolite_class.astype(str).str.strip().str.capitalize()
    mets.to_csv(OUT / "wu2016_primary_metabolites.csv", index=False)

    acc = pd.read_excel(RAW / ITEMS["s012"], header=1).iloc[:, :4]
    acc.columns = ["no", "accession", "abrc", "accession_name"]
    acc = acc.dropna(subset=["accession"])
    acc = acc[acc.accession.astype(str).str.startswith("ecotype.")]

    d = pd.read_excel(RAW / ITEMS["s001"], header=1).rename(columns={"Taxa": "accession"})
    d = d[d.accession.astype(str).str.startswith("ecotype.")]
    dup = sorted(d.accession[d.accession.duplicated(keep=False)].unique())
    d = d[~d.accession.isin(dup)]
    acc["duplicated_in_source"] = acc.accession.isin(dup)
    acc.to_csv(OUT / "wu2016_accessions.csv", index=False)

    long = d.melt(id_vars="accession", var_name="metabolite_id", value_name="value").dropna(subset=["value"])
    long = long.merge(mets[["metabolite_id", "metabolite_name", "metabolite_class"]], on="metabolite_id", how="left")
    unknown = long.metabolite_name.isna().sum()
    long = long[["metabolite_id", "metabolite_name", "metabolite_class", "accession", "value"]]
    long.to_csv(OUT / "wu2016_primary_long.csv", index=False)
    print(f"  wu2016_primary_metabolites.csv: {len(mets)} metabolites")
    print(f"  wu2016_accessions.csv: {len(acc)} accessions")
    print(f"  wu2016_primary_long.csv: {len(long):,} rows, {long.metabolite_id.nunique()} metabolites x "
          f"{long.accession.nunique()} accessions ({unknown} values with no S2 Table entry)")
    print(f"  dropped duplicated accession IDs (conflicting values in S1 Dataset): {', '.join(dup) or 'none'}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("step", choices=["fetch", "export", "all"])
    a = ap.parse_args()
    if a.step in ("fetch", "all"):
        fetch()
    if a.step in ("export", "all"):
        export()

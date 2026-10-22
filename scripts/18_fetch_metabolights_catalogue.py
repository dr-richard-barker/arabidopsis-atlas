"""Catalogue the public MetaboLights studies of Arabidopsis thaliana for the metabolome explorer.

Uses the same search the MetaboLights study-search page sends (ws3 public-study-index,
query_text "arabidopsis thaliana"), keeps hits whose organism list includes Arabidopsis thaliana
(the free-text search also matches studies that only mention it), and reads each study's licence
from the head of its <ID>.mhd.json (HTTP Range; the file can be several MB).

Only study metadata and metabolite names are written. The explorer page fetches sample sheets and
MAF result tables live from ftp.ebi.ac.uk (Access-Control-Allow-Origin: *), so no study data is mirrored.

The study index's file names can be stale (MTBLS338 lists a_MTBLS338_GC-MS_GCMS_Root_met.txt; the FTP
folder holds a_MTBLS338_GCMS_Root_met.txt). Every name is checked against the study's FTP listing; an
assay file that is missing is replaced by the a_ file whose "Metabolite Assignment File" column names the
same MAF, and anything still unresolved is listed under `missing_files`.

Steps:
  catalogue  -> app/public/explorer/metabolights_catalogue.json
  names      -> data/processed/metabolome/metabolights_maf_names.csv.gz
                (study, MAF, database_identifier, metabolite_identification; no abundance values).
                MAFs are cached in data/raw/metabolights_maf_cache/ (git-ignored); files above
                MAX_MAF_BYTES are skipped and listed in the catalogue as `maf_skipped`.
"""

import argparse
import csv
import gzip
import io
import json
import re
import time
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JSON = ROOT / "app" / "public" / "explorer" / "metabolights_catalogue.json"
OUT_NAMES = ROOT / "data" / "processed" / "metabolome" / "metabolights_maf_names.csv.gz"
CACHE = ROOT / "data" / "raw" / "metabolights_maf_cache"
SEARCH = "https://www.ebi.ac.uk/metabolights/ws3/public/v2/public-study-index/advanced-search?include_all_ids=true"
FTP = "https://ftp.ebi.ac.uk/pub/databases/metabolights/studies/public/{sid}/{name}"
QUERY = "arabidopsis thaliana"
ORGANISM = "Arabidopsis thaliana"
PAGE = 60
MAX_MAF_BYTES = 50 * 1024 * 1024
UA = {"User-Agent": "arabidopsis-atlas/0.1 (+https://github.com/dr-richard-barker/arabidopsis-atlas)"}
UNNAMED = {"", "unknown", "unknown compound", "-", "na", "n/a"}


def request(url, data=None, headers=None, timeout=120):
    req = urllib.request.Request(url, data=data, headers={**UA, **(headers or {})})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read(), r.headers
        except urllib.error.HTTPError as e:
            if e.code not in (429, 500, 502, 503, 504) or attempt == 3:
                raise
        except urllib.error.URLError:
            if attempt == 3:
                raise
        time.sleep(5 * (attempt + 1))


def search():
    hits, page, total = [], 1, None
    while total is None or len(hits) < total:
        body = {"version": "v1", "query_text": QUERY, "inter_field_combiner": "AND",
                "page": {"current": page, "size": PAGE}, "sort": [], "clauses": []}
        raw, _ = request(SEARCH, json.dumps(body).encode(), {"Content-Type": "application/json"})
        content = json.loads(raw)["content"]
        total = content["totalResults"]
        if not content["results"]:
            break
        hits += content["results"]
        page += 1
    return hits, total


def licence(sid):
    try:
        raw, _ = request(FTP.format(sid=sid, name=f"{sid}.mhd.json"), headers={"Range": "bytes=0-16383"}, timeout=60)
    except urllib.error.HTTPError:
        return None, None
    text = raw.decode("utf-8", "replace")
    url = re.search(r'"license"\s*:\s*"([^"]*)"', text)
    name = re.search(r'"license_name"\s*:\s*"([^"]*)"', text)
    return (url.group(1) if url else None), (name.group(1) if name else None)


def listing(sid):
    raw, _ = request(FTP.format(sid=sid, name=""), timeout=60)
    return set(re.findall(r'href="([^"/?][^"/]*)"', raw.decode("utf-8", "replace")))


def resolve_files(sid, sample_file, assays):
    names = listing(sid)
    missing = []
    a_cache = {}

    def mafs_in(a_name):
        if a_name not in a_cache:
            raw, _ = request(FTP.format(sid=sid, name=a_name), timeout=120)
            rows = list(csv.reader(io.StringIO(raw.decode("utf-8", "replace")), delimiter="\t"))
            col = rows[0].index("Metabolite Assignment File") if rows and "Metabolite Assignment File" in rows[0] else None
            a_cache[a_name] = {r[col].strip() for r in rows[1:] if col is not None and len(r) > col and r[col].strip()}
        return a_cache[a_name]

    for a in assays:
        missing += [m for m in a["mafs"] if m not in names]
        a["mafs"] = [m for m in a["mafs"] if m in names]
        if a["assay_file"] and a["assay_file"] not in names:
            hit = [n for n in sorted(names) if n.startswith("a_") and n.endswith(".txt") and set(a["mafs"]) & mafs_in(n)]
            if len(hit) == 1:
                a["assay_file_indexed"], a["assay_file"] = a["assay_file"], hit[0]
            else:
                missing.append(a["assay_file"])
                a["assay_file"] = None
    if sample_file and sample_file not in names:
        missing.append(sample_file)
        sample_file = None
    return sample_file, assays, missing


def terms(items, key="term"):
    return sorted({(i.get(key) or "").strip() for i in items or [] if (i.get(key) or "").strip()})


def study_record(h):
    lic_url, lic_name = licence(h["studyId"])
    assays = [{"technique": (a.get("technique") or {}).get("name"),
               "platform": a.get("technologyPlatform"),
               "assay_file": a.get("filePath"),
               "mafs": a.get("assignmentFiles") or []} for a in h.get("assays", [])]
    factors = {}
    for fp in h.get("factorPairs", []):
        factors.setdefault(fp["name"], set()).add(fp["value"])
    sample_file, assays, missing = resolve_files(h["studyId"], h.get("sampleFilePath"), assays)
    pubs = [{"title": p.get("title"), "authors": p.get("authorList"), "doi": p.get("doi") or None,
             "pubmed": p.get("pubMedID") or None} for p in h.get("publications", [])]
    techniques = sorted({t["name"] for t in h.get("assayTechniques", [])})
    return {
        "id": h["studyId"],
        "title": re.sub(r"<[^>]+>", "", h["title"]).strip(),
        "released": (h.get("publicReleaseDate") or "")[:10],
        "techniques": techniques,
        "gc_ms": "GC-MS" in techniques,
        "organism_parts": terms(h.get("organismParts")),
        "variants": terms(h.get("variants")),
        "factors": {k: sorted(v) for k, v in sorted(factors.items())},
        "design": terms(h.get("designDescriptors")),
        "samples": h.get("sampleCount"),
        "sample_file": sample_file,
        "assays": assays,
        "missing_files": missing,
        "publications": pubs,
        "licence": lic_name,
        "licence_url": lic_url,
        "size": h.get("sizeInText"),
    }


def catalogue():
    hits, total = search()
    keep = [h for h in hits if any(o.get("term") == ORGANISM for o in h.get("organisms", []))]
    studies = []
    for i, h in enumerate(sorted(keep, key=lambda h: int(h["studyId"][5:]))):
        studies.append(study_record(h))
        time.sleep(0.2)
        if (i + 1) % 10 == 0:
            print(f"  ... {i + 1}/{len(keep)}")
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    doc = {"source": "MetaboLights public-study-index (ws3) advanced search",
           "endpoint": SEARCH, "query_text": QUERY, "organism_filter": ORGANISM,
           "fetched": date.today().isoformat(), "search_hits": total, "studies": studies}
    OUT_JSON.write_text(json.dumps(doc, ensure_ascii=False, indent=1))
    n_gc = sum(s["gc_ms"] for s in studies)
    n_maf = sum(any(a["mafs"] for a in s["assays"]) for s in studies)
    lic = {}
    for s in studies:
        lic[s["licence"]] = lic.get(s["licence"], 0) + 1
    fixed = [a["assay_file_indexed"] for s in studies for a in s["assays"] if a.get("assay_file_indexed")]
    print(f"  file names: {len(fixed)} assay files re-resolved from the FTP listing; still missing: "
          f"{ {s['id']: s['missing_files'] for s in studies if s['missing_files']} }")
    print(f"  {OUT_JSON.name}: {len(studies)} of {total} search hits are {ORGANISM}; GC-MS {n_gc}; "
          f"with a MAF {n_maf}; samples {sum(s['samples'] or 0 for s in studies)}; licences {lic}")


def names():
    doc = json.loads(OUT_JSON.read_text())
    CACHE.mkdir(parents=True, exist_ok=True)
    rows, skipped = [], {}
    for s in doc["studies"]:
        for maf in sorted({m for a in s["assays"] for m in a["mafs"]}):
            url = FTP.format(sid=s["id"], name=maf)
            dest = CACHE / s["id"] / maf
            if not dest.exists():
                try:
                    _, head = request(url, headers={"Range": "bytes=0-0"}, timeout=60)
                    size = int((head.get("Content-Range") or "/0").split("/")[-1] or 0)
                    if size > MAX_MAF_BYTES:
                        skipped.setdefault(s["id"], []).append(f"{maf} ({size / 1e6:.0f} MB)")
                        continue
                    raw, _ = request(url, timeout=300)
                except urllib.error.HTTPError as e:
                    skipped.setdefault(s["id"], []).append(f"{maf} (HTTP {e.code})")
                    continue
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(raw)
                time.sleep(0.2)
            text = dest.read_text("utf-8", "replace")
            for r in csv.DictReader(io.StringIO(text), delimiter="\t"):
                name = (r.get("metabolite_identification") or "").strip()
                if name.lower() in UNNAMED:
                    continue
                rows.append((s["id"], maf, (r.get("database_identifier") or "").strip(), name))
    rows = sorted(set(rows))
    with gzip.open(OUT_NAMES, "wt", newline="") as f:
        w = csv.writer(f)
        w.writerow(["study", "maf", "database_identifier", "metabolite_identification"])
        w.writerows(rows)
    for s in doc["studies"]:
        s["maf_skipped"] = skipped.get(s["id"], [])
        s["named_metabolites"] = len({r[3].lower() for r in rows if r[0] == s["id"]})
    OUT_JSON.write_text(json.dumps(doc, ensure_ascii=False, indent=1))
    print(f"  {OUT_NAMES.name}: {len(rows):,} named rows from {len({r[0] for r in rows})} studies; "
          f"skipped {sum(map(len, skipped.values()))} MAFs: {skipped}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("step", choices=["catalogue", "names", "all"])
    a = ap.parse_args()
    if a.step in ("catalogue", "all"):
        catalogue()
    if a.step in ("names", "all"):
        names()

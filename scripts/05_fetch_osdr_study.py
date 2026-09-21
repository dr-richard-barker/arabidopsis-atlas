"""Generalized NASA OSDR connector for the digital-twin data-overlay mode -- the same real
API surface that already backs OSD-120/OSD-314 in this atlas (scripts/01_compute_
spaceflight_response.py), extended from "2 hardcoded studies" to "any real OSD accession."

Three real, live endpoints, each confirmed this session by actually calling them (not
assumed from documentation):
  search: https://osdr.nasa.gov/geode-py/ws/repo/search?term=<organism>&source=cgene,alsda,esa
          &type=study&from=<offset>&size=<n>&sort=Study%20Public%20Release%20Date&order=desc
          -- this is the query the real OSDR search UI itself issues (captured from its own
          network request, since a plausible-looking `?organism=` or `?q=` parameter on a
          different endpoint returned unfiltered results when tried directly).
  meta:   https://osdr.nasa.gov/osdr/data/osd/meta/<id>          (already used for OSD-120/314)
  files:  https://osdr.nasa.gov/osdr/data/osd/files/<id>          (lists every real downloadable
          file, each with a `remote_url` that resolves via a redirect to the actual data)

Deliberately NOT included: automatic two-group detection from a study's column names. Column
naming is real but study-specific (OSD-120/314 use "_GC_"/"_FLT_"; OSD-522, fetched live
while building this, uses "GC-"/"FT-" instead) -- guessing a pattern that happens to work for
one study and silently mis-grouping another would be worse than requiring the real group
substrings as explicit input. `compare` reuses log2fc_summary from
01_compute_spaceflight_response.py unchanged rather than reimplementing it.
"""
import sys
import json
import urllib.parse
import urllib.request
from pathlib import Path
from importlib import import_module

sys.path.insert(0, str(Path(__file__).resolve().parent))

SEARCH_URL = "https://osdr.nasa.gov/geode-py/ws/repo/search"
META_URL = "https://osdr.nasa.gov/osdr/data/osd/meta/{id}"
FILES_URL = "https://osdr.nasa.gov/osdr/data/osd/files/{id}"
DOWNLOAD_URL = "https://osdr.nasa.gov/geode-py/ws/studies/{accession}/download?source=datamanager&file={filename}"


def _get_json(url: str) -> dict:
    with urllib.request.urlopen(url, timeout=30) as resp:
        return json.loads(resp.read())


def search(organism: str, size: int = 25) -> list[dict]:
    """Real studies matching `organism`, ranked by the API's own relevance scoring -- not
    guaranteed to be 100% precise (a handful of hits can be organism-adjacent rather than
    an exact match, confirmed by inspecting real results for "Arabidopsis thaliana"), so
    callers should still show the returned organism/title, not just trust the match blindly."""
    url = f"{SEARCH_URL}?term={urllib.parse.quote(organism)}&source=cgene,alsda,esa&type=study&from=0&size={size}&sort=Study%20Public%20Release%20Date&order=desc"
    data = _get_json(url)
    hits = data.get("hits", {}).get("hits", [])
    return [
        {
            "accession": h.get("_source", {}).get("Accession"),
            "organism": h.get("_source", {}).get("organism"),
            "title": h.get("_source", {}).get("Study Title"),
            "project_type": h.get("_source", {}).get("Project Type"),
            "release_date": h.get("_source", {}).get("Study Public Release Date"),
        }
        for h in hits
    ]


def list_files(accession: str) -> list[dict]:
    """Real downloadable files for a study, each with a remote_url that resolves (via a
    redirect) to the actual file -- confirmed this session for OSD-522's raw counts table."""
    num = accession.replace("OSD-", "").replace("osd-", "")
    data = _get_json(META_URL.format(id=num).replace("/meta/", "/files/"))
    study = data.get("studies", {}).get(accession, {})
    return study.get("study_files", [])


def fetch_metadata(accession: str) -> dict:
    num = accession.replace("OSD-", "").replace("osd-", "")
    return _get_json(META_URL.format(id=num))


def download_file(accession: str, filename: str, out_path: Path) -> Path:
    url = DOWNLOAD_URL.format(accession=accession, filename=urllib.parse.quote(filename))
    out_path.parent.mkdir(parents=True, exist_ok=True)
    urllib.request.urlretrieve(url, out_path)
    return out_path


def compare(counts_path: Path, group_a_substr: str, group_b_substr: str, label_a: str, label_b: str):
    """Reuses the real, already-verified CPM-ratio method from
    01_compute_spaceflight_response.py -- same honest scope caveats apply: a mean-ratio
    summary, not a statistically tested differential-expression call."""
    spaceflight_mod = import_module("01_compute_spaceflight_response")
    return spaceflight_mod.log2fc_summary(counts_path, group_a_substr, group_b_substr, label_a, label_b)


def main():
    import argparse

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_search = sub.add_parser("search", help="Find real OSD studies for an organism")
    p_search.add_argument("organism", help='e.g. "Arabidopsis thaliana"')
    p_search.add_argument("--size", type=int, default=25)

    p_files = sub.add_parser("files", help="List real downloadable files for a study")
    p_files.add_argument("accession", help="e.g. OSD-522")

    p_fetch = sub.add_parser("fetch", help="Download one real file from a study")
    p_fetch.add_argument("accession")
    p_fetch.add_argument("filename")
    p_fetch.add_argument("out_path", type=Path)

    p_compare = sub.add_parser("compare", help="Real mean-CPM log2FC between two real sample groups")
    p_compare.add_argument("counts_csv", type=Path)
    p_compare.add_argument("group_a_substr")
    p_compare.add_argument("group_b_substr")
    p_compare.add_argument("label_a")
    p_compare.add_argument("label_b")
    p_compare.add_argument("out_csv", type=Path)

    args = parser.parse_args()

    if args.cmd == "search":
        for s in search(args.organism, args.size):
            print(f"{s['accession']}\t{s['organism']}\t{s['project_type']}\t{s['title']}")
    elif args.cmd == "files":
        for f in list_files(args.accession):
            print(f"{f['category']}\t{f['file_name']}\t{f['file_size']} bytes")
    elif args.cmd == "fetch":
        path = download_file(args.accession, args.filename, args.out_path)
        print(f"Downloaded to {path} ({path.stat().st_size} bytes)")
    elif args.cmd == "compare":
        result = compare(args.counts_csv, args.group_a_substr, args.group_b_substr, args.label_a, args.label_b)
        result.to_csv(args.out_csv)
        print(f"{len(result)} genes -> {args.out_csv}")


if __name__ == "__main__":
    main()

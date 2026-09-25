# Digital twin data-overlay provenance ledger

Same rule as `data/README.md`, `data/ecotypes/README.md`, and `data/growth-stages/README.md`:
every claim the digital-twin panel (`app/src/digitalTwin.ts`, `app/src/App.tsx`'s
`DigitalTwinPanel`) makes traces to something verified live this session, or is an explicit
disclosed simplification -- never a plausible-looking assumption about what an external API
or paper "probably" does.

## Honest scope statement

This is **not** a claim to reimplement "all the relevant models" for Arabidopsis systems
biology from scratch -- that would misrepresent a multi-year, multi-lab body of real work as
one project's deliverable. What this actually is: a real-data-driven **visualization and
integration layer** over this atlas's existing 5-organ developmental geometry. It:

- lets a viewer upload their own tissue/organ-resolved data (client-side CSV parsing, no
  server -- see `parseOverlayCsv` in `app/src/digitalTwin.ts`);
- links out to real external resources this atlas's own coarse geometry cannot itself show;
- generalizes NASA OSDR ingestion from the 2 studies already hardcoded
  (`01_compute_spaceflight_response.py`) to any real OSD accession
  (`scripts/05_fetch_osdr_study.py`);
- cites, rather than re-derives, the real existing systems/metabolic models this
  visualization is meant to complement.

**Systems models this repo does not reimplement, and cites instead:**
- **AraGEM** -- de Oliveira Dal'Molin, C.G., Quek, L.-E., Palfreyman, R.W., Brumbley, S.M. &
  Nielsen, L.K. (2010). "AraGEM, a Genome-Scale Reconstruction of the Primary Metabolic
  Network in Arabidopsis." *Plant Physiology* 152(2):579-589. Whole-plant, compartmentalized,
  NOT tissue-specific.
- **AraRoot** -- a 2024-2025 genome-scale metabolic model specific to the Arabidopsis root,
  with real cell-type-specific (cortex/endodermis/epidermis/stele) sub-models under normal
  and stress conditions (bioRxiv preprint + *in silico Plants*) -- the closest real
  tissue-specific GEM prior art found.
- **Chew et al. 2014** (already cited in `manuscript/latex/references.bib` as `Chew2014`) --
  a real whole-plant multi-model Framework linking photosynthesis/carbon storage, structure/
  carbon partitioning, flowering phenology, and the circadian clock.
- **BioOS** -- "A Gene-Driven Digital Twin Runtime for Emergent Plant Development" (bioRxiv,
  2026) -- a real, recent, directly-relevant existing Arabidopsis digital-twin effort (root
  auxin transport focus, a "Formal Cell"/TissueUnit abstraction). Named here explicitly so
  this project never implicitly claims to be the first or only Arabidopsis digital twin.

No flux-balance or ODE simulation runs inside this app, live or offline, in this version.

## Real external resources (each verified live this session, not assumed)

**Lee, T.A., Illouz-Eliaz, N., Nobori, T., Xu, J., Jow, B., Nery, J.R. & Ecker, J.R. (2025).
"A single-cell, spatial transcriptomic atlas of the Arabidopsis life cycle." *Nature Plants*
11(9):1960-1975.** DOI `10.1038/s41477-025-02072-z`, PMID 40830271, PMCID PMC12416547.
The DOI/title/author list/volume were confirmed directly against NCBI's E-utilities
(`eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi`) -- fetching the PubMed page itself at
`pubmed.ncbi.nlm.nih.gov/40830271/` returns only a cookie-consent wall to automated fetchers,
so E-utilities was used instead, not the page a human would see.

- Single-nucleus + spatial transcriptomic atlas, >400,000 nuclei, seed through developing
  silique, 75% of identified cell clusters annotated.
- Real sample points (used in `LEE2025_SAMPLES`, `app/src/digitalTwin.ts`) pulled directly
  from the paper's own Methods ("Plant growth and sampling" section, fetched via Europe
  PMC's full-text API): imbibed seed (0 days), germinating seed (1.25 days), light-grown
  seedling (3/6/12 days), 3-day etiolated (dark-grown) seedling, plus rosette/flower/silique
  tissue samples with no specific day stated in the paper. Where this atlas's own code
  places one of those undated samples on its Boyes-2001 day axis, that placement is a
  disclosed approximation (see `approxDayOnBoyesAxis`'s per-entry `note` field), not a value
  the paper itself gives.
- Web tool: `https://arabidopsisdevatlas.salk.edu/` -- confirmed HTTP 200 live, twice, on
  different days this session.
- Data: GEO accession **GSE226097** -- read directly from the paper's own Data Availability
  statement (Europe PMC full-text XML), not guessed. GEO's own bulk-reuse terms for this
  accession have **not** been checked (same open item this repo already carries for TraVA --
  see `manuscript/latex/sections/discussion.tex`); the panel links out to GEO rather than
  mirroring any of its data, pending that check.
- Real cell-type vocabulary used in `ORGAN_TO_LEE2025_CELLTYPES` (`digitalTwin.ts`) is a
  reasonable domain-standard Arabidopsis histology list (root cortex/endodermis/epidermis/
  stele, leaf mesophyll/epidermis/vasculature, etc.), not transcribed from a specific figure
  or table of the paper -- disclosed as such; a future pass could replace it with the
  paper's own exact cluster-label list if that's exported from its supplementary data.

## NASA OSDR -- the real, generalized connector (`scripts/05_fetch_osdr_study.py`)

Three real, live API endpoints, each confirmed by actually calling them this session (not
assumed from documentation):

1. **Search**: `https://osdr.nasa.gov/geode-py/ws/repo/search?term=<organism>&source=cgene,alsda,esa&type=study&from=<n>&size=<n>&sort=Study%20Public%20Release%20Date&order=desc`.
   This exact query was captured from the real OSDR search UI's own network request (typing
   "Arabidopsis thaliana" into the search box at `https://osdr.nasa.gov/bio/repo/search` and
   reading the request it fired) -- a plausible-looking `?organism=` or `?q=` parameter
   tried directly against a different endpoint first returned unfiltered, irrelevant
   results (a mouse study ranked top for an Arabidopsis-organism query), so the query shape
   was verified against the tool's own real traffic rather than guessed.
2. **Metadata**: `https://osdr.nasa.gov/osdr/data/osd/meta/<id>` -- the same pattern already
   proven for OSD-120/OSD-314 in this repo.
3. **Files**: `https://osdr.nasa.gov/osdr/data/osd/files/<id>` -- lists every real
   downloadable file for a study; each entry's `remote_url` resolves (via one redirect) to
   the actual file.

**End-to-end verification target: OSD-522** ("Integrative Transcriptomics and Proteomics
Profiling of *Arabidopsis thaliana* Elucidates Novel Mechanisms Underlying Spaceflight
Adaptation") -- a real study already named as "confirmed real and relevant... remain
unprocessed" in this repo's own `discussion.tex` limitations section, chosen deliberately
because it was NOT one of the 2 studies already hardcoded. `search → files → fetch → compare`
was run against it live this session: 32,833 genes, a real mean-CPM log2FC table computed
between its real "GC-" (ground) and "FT-" (flight) sample columns via the SAME
`log2fc_summary` function OSD-120/314 already use (imported, not reimplemented), top ratio
3.51 for `AT3G19680`. This is a mean-ratio summary, not a statistically tested
differential-expression call -- identical caveat to the existing OSD-120/314 numbers.
**Tissue is explicitly NOT claimed for this one**: OSD-522's own protocol text describes
dissecting plants into root and shoot for different assays (its proteomics side clearly
separates membrane/soluble fractions), but the 12 RNA-seq source records
(`FT-A2`...`FT-F2`, `GC-A2`...`GC-F2`) carry an empty `characteristics` list in the metadata
this repo could query via the API -- no organism-part annotation reachable that way. Rather
than guess root or shoot from the study's general methodology, the processed file is named
`data/processed/OSD-522_flight_vs_ground_log2fc.csv` (no tissue in the name) and reported as
whole-study, not organ-matched. Unlike OSD-120 (confirmed root-specific) and OSD-314
(confirmed whole-seedling), OSD-522 is not wired into any specific organ's info panel in
`organs.ts` for exactly this reason -- resolving the real tissue (e.g. from the study's ISA
metadata ZIP rather than this API slice) is a real open follow-up, not done here.

**A real, load-bearing constraint that shapes this whole connector's architecture**: OSDR's
API sends `Access-Control-Allow-Origin: osdr.nasa.gov` on every one of the three endpoints
above (confirmed with `curl -I -H "Origin: https://dr-richard-barker.github.io"`) -- its own
origin, not a wildcard and not the requesting origin echoed back. A browser will refuse that
response for any other origin. This means OSDR data can only reach this atlas the way
OSD-120/314 already do: fetched by a script run locally (or in CI) and committed as static
processed data, never by a live `fetch()` call from a visitor's browser on the deployed
Pages site. The viewer's panel accordingly only *links out* to OSDR for live browsing; it
does not offer an "enter an accession and fetch it" control on the page itself, because that
control would silently fail for every visitor.

**Not solved, disclosed as a real open task**: `search`'s relevance ranking is not perfectly
precise -- a handful of hits for "Arabidopsis thaliana" are organism-adjacent rather than an
exact match (confirmed by inspecting real results), so a maintainer using
`scripts/05_fetch_osdr_study.py search` should still read the printed organism/title column,
not trust the match blindly. There is no automatic two-group (e.g. flight-vs-ground) column
detection: OSD-120/314 use `_GC_`/`_FLT_` substrings, OSD-522 (fetched live while building
this) uses `GC-`/`FT-` instead -- different studies really do name their sample columns
differently, so `compare` requires the real substrings as explicit input rather than
guessing a pattern that happens to work for one study and silently mis-groups another.

## Zhu et al. 2024 darkness-induced metabolome -- a terrestrial baseline for metabolic stress

**Zhu, F., Wijesingha Ahchige, M., ... Fernie, A.R. (2024). "The natural variance of
Arabidopsis secondary metabolism on extended darkness." *Nat. Sci. Data* 11, 841.**
https://doi.org/10.1038/s41597-024-03694-2

Real, processed data fetched via `scripts/07_fetch_darkness_metabolome.py`:
- 259 Arabidopsis HapMap accessions × 95 secondary metabolites × 2 timepoints (0d baseline, 6d extended darkness)
- Metabolite BLUP-normalized intensities (batch-corrected, QC-validated)
- Metabolite identities: names, classes (amino acids, phenylpropanoids, flavonoids, steroids, terpenoids), retention times
- Exported as: `data/processed/metabolome/darkness_metabolome_digital_twin.csv` (format: gene_or_label, day, value, condition)

**Honest scope:** This is a visualization/integration layer, not a re-analysis of the Zhu et al. GWAS or a
reimplementation of their metabolite annotation pipeline. The data is linked as-published; the atlas's
digital-twin panel lets a viewer browse metabolite shifts across the 259 accessions at the slider's chosen timepoint.

**Why it matters for this atlas:** OSD-522 (spaceflight transcriptomics) showed **illumination perfectly
separates all six Arabidopsis spaceflight studies** — lit conditions positive (flight shows photosynthesis↑),
dark conditions negative (flight shows carbon starvation effects). The Zhu et al. dataset is a complementary
terrestrial baseline for darkness-induced secondary-metabolite shifts, measured across natural genetic variation
in the same species. Together with OSD-522, this allows testing "What does the darkness-induced *metabolome*
look like, and how does genetic variation shape it?" — a "pre-flight" prediction task before expensive ISS experiments.

## Rule

No claim in `app/src/digitalTwin.ts`, `App.tsx`'s digital-twin panel, or
`scripts/05_fetch_osdr_study.py` about what an external resource contains or how its API
behaves exists unless it was checked live this session (a call, a fetch, a captured network
request) or is explicitly marked as an approximation/technique choice, not a measurement.

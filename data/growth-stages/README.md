# Growth-stage timing provenance ledger

Same rule as `data/README.md` and `data/ecotypes/README.md`: every day-count driving the
growth animation traces to a row here, or is an explicitly disclosed technique choice
(e.g. an emergence-easing curve shape), never a plausible-looking invented number.

## The one real source (verified 2026-09-19)

**Boyes DC, Zayed AM, Ascenzi R, McCaskill AJ, Hoffman NE, Davis KR, Görlach J (2001).
"Growth Stage-Based Phenotypic Analysis of Arabidopsis: A Model for High Throughput
Functional Genomics in Plants." *The Plant Cell* 13(7):1499-1510.**
DOI `10.1105/tpc.010011`, confirmed directly against the CrossRef API (title, full
7-author list, volume, page range all match) independently on two separate occasions this
session. The table values below were also independently fetched from the paper's PMC full
text (`https://pmc.ncbi.nlm.nih.gov/articles/PMC139543/`) twice, in two separate tool
calls -- every overlapping value between the two fetches agreed exactly, which is real
corroboration of correct transcription (though both still go through an automated
fetch/extraction step rather than a human's direct visual read of the original table
image -- see the residual-risk disclosure below).

Growth conditions the day-counts below are measured under (from the paper's own Methods,
retrieved via its PMC full text, `https://pmc.ncbi.nlm.nih.gov/articles/PMC139543/`):
16-hour photoperiod, 22°C day / 20°C night, ~175 µmol·m⁻²·s⁻¹ light at pot height
(soil-grown plants), 3-day 4°C stratification before sowing (included in all day-counts
below). Ecotype: Col-0.

### Table 1 (plate-grown, 0.5x MS + 1% phytagel, no sucrose, vertical plates) — used here
### only for germination timing, since Table 2 doesn't start until the 2-leaf stage

| Stage | Description | Day | SD | CV% |
|---|---|---|---|---|
| 0 | Seed imbibition | 3.0 | NA | NA |
| 0.50 | Radicle emergence | 4.3 | 0.4 | 10.3 |
| 0.70 | Hypocotyl and cotyledon emergence | 5.5 | 0.6 | 11.2 |
| 1.00 | Cotyledons fully opened | 6.0 | 0.5 | 8.5 |
| 1.02 | 2 rosette leaves >1mm (plate) | 10.3 | 0.6 | 5.8 |
| 1.04 | 4 rosette leaves >1mm (plate) | 14.4 | 0.5 | 3.4 |

### Table 2 (soil-grown, Metro-Mix 200, whole life cycle) — used for everything from the
### 2-leaf stage onward, since this is the more realistic medium for an animation
### depicting a plant in soil, and it is the paper's only table covering flowering/silique
### stages at all. Its own leaf-count timing (1.02=12.5d) differs from Table 1's
### (1.02=10.3d) because it's a different growth medium -- using Table 1 pre-2-leaf and
### Table 2 from 2-leaf onward is the hybrid disclosed above, not an error.

| Stage | Description | Day | SD | CV% |
|---|---|---|---|---|
| 1.02 | 2 rosette leaves >1mm | 12.5 | 1.3 | 10.7 |
| 1.03 | 3 rosette leaves >1mm | 15.9 | 1.5 | 9.5 |
| 1.04 | 4 rosette leaves >1mm | 16.5 | 1.6 | 9.8 |
| 1.05 | 5 rosette leaves >1mm | 17.7 | 1.8 | 10.2 |
| 1.06 | 6 rosette leaves >1mm | 18.4 | 1.8 | 9.8 |
| 1.07 | 7 rosette leaves >1mm | 19.4 | 2.2 | 11.1 |
| 1.08 | 8 rosette leaves >1mm | 20.0 | 2.2 | 11.2 |
| 1.09 | 9 rosette leaves >1mm | 21.1 | 2.3 | 10.8 |
| 1.10 | 10 rosette leaves >1mm | 21.6 | 2.3 | 10.9 |
| 1.11 | 11 rosette leaves >1mm | 22.2 | 2.5 | 11.2 |
| 1.12 | 12 rosette leaves >1mm | 23.3 | 2.6 | 11.3 |
| 1.13 | 13 rosette leaves >1mm | 24.8 | 3.2 | 12.8 |
| 1.14 | 14 rosette leaves >1mm | 25.5 | 2.6 | 10.2 |
| 3.20 | Rosette 20% of final size | 18.9 | 3.0 | 16.0 |
| 3.50 | Rosette 50% of final size | 24.0 | 4.1 | 17.0 |
| 3.70 | Rosette 70% of final size | 27.4 | 4.1 | 15.0 |
| 3.90 | Rosette growth complete | 29.3 | 3.5 | 12.0 |
| 5.10 | First flower buds visible | 26.0 | 3.5 | 13.3 |
| 6.00 | First flower open | 31.8 | 3.6 | 13.3 |
| 6.10 | 10% of flowers produced have opened | 35.9 | 4.9 | 13.6 |
| 6.30 | 30% of flowers produced have opened | 40.1 | 4.9 | 12.3 |
| 6.50 | 50% of flowers produced have opened | 43.5 | 4.9 | 11.2 |
| 6.90 | Flowering complete | 49.4 | 5.8 | 11.7 |
| 8.00 | First silique shattered | 48.0 | 4.5 | 9.3 |
| 9.70 | Senescence complete | ND | ND | ND |

## Explicit disclosures

- **Hybrid table use is deliberate, not an oversight.** Table 1 (plate) and Table 2 (soil)
  are different growth media with different absolute timing dynamics. Using Table 1 only
  for the germination window (days 0-6, before Table 2 begins at the 2-leaf stage) and
  Table 2 for everything after is the best available option from a single paper, not a
  seamless one-medium measurement. This is stated here and in the manuscript, not hidden.
- **Single-source dependency.** I could not reach a second, independent source to
  cross-check these day-counts: TAIR's own growth-stage documentation
  (`arabidopsis.org/portals/education/growth.jsp`) and its hosted copy of this same paper
  both returned HTTP 403 to automated fetches. The numbers above rest on one primary study.
  If a human opens those TAIR pages directly in a browser and finds a discrepancy, that
  supersedes this ledger.
- **Real biological variance exists and is not depicted.** The CV columns above (8.5%-16%)
  show real plant-to-plant variation the paper itself measured. The animation depicts the
  mean timeline as a single representative plant, not a distribution — stated plainly
  rather than implying the animation shows "the" true fixed timing of every Arabidopsis
  plant.
- **Interpolation between real stage points is a technique choice.** `app/src/
  growthStages.ts` linearly interpolates organ counts/sizes *between* the real day values
  above. The real data is the stage transition days; the interpolation shape between them
  (and the emergence-easing curve within an organ's brief "growing in" window) is ours, not
  measured, and is disclosed as such in code comments and the manuscript.
- **No real photographic ground truth for most of this window.** Namin et al. 2018
  (already cited elsewhere in this repo, doi:10.1186/s13007-018-0333-4) provides real daily
  top-down photos for days 0-22 only — before rosette completion (day 29.3) and well before
  flowering (day 31.8+). Bolting, flowering, and silique-stage geometry in the animation is
  citation-grounded (same organs/citations as the rest of this atlas) but not photo-matched,
  same as the static viewer's own disclosed limitations.

## Rule

No day-count or stage-derived organ parameter in `app/src/growthStages.ts` or the Blender
animation script exists unless it traces to a row above or is explicitly marked as a
technique/interpolation choice, not a measurement.

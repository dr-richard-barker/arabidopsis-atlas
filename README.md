# Arabidopsis Atlas

An interactive, organ-selectable 3D atlas of *Arabidopsis thaliana*, built so that every
piece of it — geometry, gene expression, spaceflight response — traces to a real, cited
source. No placeholder data, no invented numbers.

## Why this exists

This project started from [`rice-atlas`](https://github.com/dr-richard-barker/rice-atlas),
an interactive 3D rice-plant viewer. Investigating it turned up an important fact worth
stating plainly: rice-atlas is a procedurally-generated conceptual model — its own README
says so — with no real *Oryza sativa* dataset behind it, no FAIR metadata, and no
independent review.

Arabidopsis Atlas keeps the part of that experience worth keeping (an interactive,
organ-by-organ 3D plant you can explore) and rebuilds the rest from real sources:

- **Structural geometry** grounded in cited developmental-biology literature (root system
  architecture, ovule/flower development, rosette phyllotaxy) rather than invented
  proportions — see [`data/README.md`](data/README.md) for the exact papers behind each
  organ.
- **Developmental gene expression** per organ from the Klepikova/TraVA atlas
  (Klepikova et al. 2016, *Plant J*, doi:10.1111/tpj.13312).
- **Spaceflight response** from real NASA GeneLab/OSDR count data — organ-specific for
  Root (OSD-120), whole-seedling for the rest (OSD-314, shown as such, not attributed to
  any one organ) — the angle rice-atlas has nothing comparable to.
- **FAIR metadata** (this README, `LICENSE`, `CITATION.cff`, `.zenodo.json`) and an
  independent ABAI review (`.abai/attest.json`) before anything here is called "assessed."

## Ecotype shape-morphing (v2)

Pick a natural *Arabidopsis* ecotype in the viewer — **Col-0, Ler, Ws, Cvi-0, Tsu-0, or
Edi-0** — and the plant's shape actually changes, driven by real measured trait
differences, not invented ones. See [`data/ecotypes/README.md`](data/ecotypes/README.md)
for full provenance; in short:

- Rosette compactness/size for Col-0/Ler/Ws/Tsu-0/Edi-0 are real per-accession means
  computed from Camargo et al. 2014's own published raw image-derived shape-descriptor
  data (60 images per accession) — independently confirming that Ler is measurably the
  most compact of the five.
- Ler's short pedicels and blunt siliques reflect the real, well-characterized natural
  *erecta* (*er*) mutation (Torii et al. 1996), with a quantitative proxy from Bundy et
  al. 2012 — explicitly disclosed in the UI as a proxy (an induced allele in a Columbia
  background), not a direct natural-Ler-vs-Col field measurement.
- Cvi-0's extra leaves and thicker leaf blades reflect a real, directly-quoted comparison
  in Coneva & Chitwood (2018).
- Where no real measurement exists for a given ecotype/trait (Cvi-0's rosette compactness;
  any ERECTA data for Cvi-0/Tsu-0/Edi-0; a reference photo for Ws), the app says so
  explicitly rather than filling in a plausible-looking value.

Organ geometry itself was also rebuilt this pass on spline-swept, tapering tube geometry
(a parallel-transport frame builder, `app/src/organGeometry/tube.ts`) and a curved
parametric leaf-blade surface, replacing the original primitive-shape approximations —
the same core technique rice-atlas's own source turned out to use, independently
implemented (see the manuscript for what inspecting rice-atlas's real code taught us).

A separate, offline `blender/` pipeline (`export_mesh.ts` + `refine_showcase.py`) renders
the same live-generated geometry through Blender 5.2 for higher-quality static figures
(a Solidify + shade-smooth pass on leaf blades only, matching rice-atlas's own actual,
modest Blender use) — see `manuscript/figures/col0_showcase.png` /
`ler_showcase.png`. This is a separate showcase asset, not part of the interactive
viewer, which stays fully parametric so ecotype-switching keeps working.

## Status

This repository is under active construction. Rather than claim a finished product before
it exists, here's exactly where it stands:

- [x] Repo scaffold, licensing, citation metadata
- [x] Real data sourcing and provenance ledger (`data/`) — root (OSD-120) and whole-seedling
      (OSD-314) spaceflight response computed from real OSDR counts; TraVA linked out to
      rather than redistributed (see `data/README.md` for why)
- [x] Organ metadata + procedural structural generator (`app/src/organs.ts`,
      `app/src/geometry.ts`) — 5 organs, each geometry note disclosing exactly what is and
      isn't measured
- [x] Interactive 3D viewer (`app/`) — organ-selectable, real per-gene spaceflight data
      shown for Root; verified running locally
- [x] GitHub Pages deployment (`docs/`) — live at
      [dr-richard-barker.github.io/arabidopsis-atlas](https://dr-richard-barker.github.io/arabidopsis-atlas/),
      verified working (organ selection + real data panel) on the deployed site itself,
      not just locally
- [x] LaTeX manuscript, compiling to PDF and Word (`manuscript/`) — `make pdf docx`,
      every number sourced from `generated_numbers.tex`, which is itself generated from
      `data/processed/` and `app/src/organs.ts`, never hand-typed
- [x] ABAI review gate (`.abai/attest.json`) — clear verdict on file, re-checked after
      the manuscript was added
- [ ] Zenodo deposit (manual step, done last)

## Running it locally

```
npm install
npm run dev
```

## License

Code: MIT (see `LICENSE`). Data provenance and reuse terms for each external dataset are
recorded individually in `data/README.md`, since not everything upstream shares the same
license.

## Citation

See `CITATION.cff`.

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
- **Spaceflight response** per organ from real NASA GeneLab/OSDR studies, where flight
  data exists for that tissue — the angle rice-atlas has nothing comparable to.
- **FAIR metadata** (this README, `LICENSE`, `CITATION.cff`, `.zenodo.json`) and an
  independent ABAI review (`.abai/attest.json`) before anything here is called "assessed."

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
- [ ] GitHub Pages deployment (`docs/`)
- [ ] LaTeX manuscript, compiling to PDF and Word (`manuscript/`)
- [ ] ABAI review gate (`.abai/attest.json`)
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

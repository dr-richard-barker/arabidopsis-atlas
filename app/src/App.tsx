import { useEffect, useRef, useState } from "react";
import { createOrganViewer, type OrganViewer } from "./viewer";
import { ORGANS, WHOLE_SEEDLING_SPACEFLIGHT, type Organ } from "./organs";
import { ECOTYPES, DEFAULT_ECOTYPE, type EcotypeParams } from "./ecotypes";
import "./app.css";

const TRAVA_URL = "https://travadb.org";
const OSDR_URL = (id: string) => `https://osdr.nasa.gov/bio/repo/data/studies/${id}`;

function GenePanel({ title, genes }: { title: string; genes: { gene_id: string; log2fc: number }[] }) {
  return (
    <div className="gene-panel">
      <h4>{title}</h4>
      <ul>
        {genes.map((g) => (
          <li key={g.gene_id}>
            <a href={`${TRAVA_URL}`} target="_blank" rel="noreferrer" title="Look this locus up on TraVA">
              {g.gene_id}
            </a>
            <span className={g.log2fc >= 0 ? "up" : "down"}>{g.log2fc > 0 ? "+" : ""}{g.log2fc.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrganInfo({ organ }: { organ: Organ }) {
  return (
    <div className="organ-info">
      <h2>{organ.label}</h2>
      <p className="trava-category">
        TraVA category: <em>{organ.travaCategory}</em> —{" "}
        <a href={TRAVA_URL} target="_blank" rel="noreferrer">browse real developmental expression on TraVA →</a>
      </p>
      <p className="geometry-note">{organ.geometryNote}</p>
      {organ.geometryCitations.length > 0 && (
        <p className="citations">Geometry citations: {organ.geometryCitations.join(", ")}</p>
      )}

      {organ.spaceflight ? (
        <div className="spaceflight-block">
          <h3>Real spaceflight response — {organ.spaceflight.studyId}</h3>
          <p>{organ.spaceflight.comparison}</p>
          <p className="n-genes">{organ.spaceflight.nGenesTotal.toLocaleString()} genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods.</p>
          <div className="gene-panels">
            <GenePanel title="Highest flight/ground ratio" genes={organ.spaceflight.topUpregulated} />
            <GenePanel title="Lowest flight/ground ratio" genes={organ.spaceflight.topDownregulated} />
          </div>
          <p className="source-link">
            Source: <code>{organ.spaceflight.sourceFile}</code> ·{" "}
            <a href={OSDR_URL(organ.spaceflight.studyId)} target="_blank" rel="noreferrer">
              {organ.spaceflight.studyId} on NASA OSDR ↗
            </a>
          </p>
        </div>
      ) : (
        <p className="no-spaceflight">
          No organ-specific spaceflight dataset is wired up for this organ yet.
          {organ.spaceflightCaveat ? ` ${organ.spaceflightCaveat}` : ""}
        </p>
      )}
    </div>
  );
}

function EcotypePicker({ value, onChange }: { value: EcotypeParams; onChange: (e: EcotypeParams) => void }) {
  return (
    <div className="ecotype-picker">
      <label htmlFor="ecotype-select">Ecotype</label>
      <select
        id="ecotype-select"
        value={value.id}
        onChange={(e) => onChange(ECOTYPES.find((eco) => eco.id === e.target.value) ?? DEFAULT_ECOTYPE)}
      >
        {ECOTYPES.map((eco) => (
          <option key={eco.id} value={eco.id}>{eco.label}</option>
        ))}
      </select>
    </div>
  );
}

function EcotypeInfo({ ecotype }: { ecotype: EcotypeParams }) {
  return (
    <div className="ecotype-info">
      <h3>{ecotype.label}</h3>
      <p className="source-name">Source accession id: <code>{ecotype.sourceName}</code></p>
      <dl>
        <dt>Rosette compactness</dt>
        <dd>{ecotype.provenance.compactness.value}</dd>
        <dt>Inflorescence / pedicel</dt>
        <dd>{ecotype.provenance.pedicel.value}</dd>
        <dt>Leaf count / thickness</dt>
        <dd>{ecotype.provenance.leaf.value}</dd>
      </dl>
      {ecotype.referencePhoto && (
        <p className="reference-photo">
          <a href={ecotype.referencePhoto.url} target="_blank" rel="noreferrer">
            Real accession-labeled reference photos (Namin et al. 2018, CC BY 4.0) ↗
          </a>
        </p>
      )}
    </div>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OrganViewer | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ecotype, setEcotype] = useState<EcotypeParams>(DEFAULT_ECOTYPE);

  useEffect(() => {
    if (!containerRef.current) return;
    const viewer = createOrganViewer(containerRef.current, setSelectedId);
    viewerRef.current = viewer;
    return () => {
      viewerRef.current = null;
      viewer.dispose();
    };
  }, []);

  const handleEcotypeChange = (next: EcotypeParams) => {
    setEcotype(next);
    setSelectedId(null);
    viewerRef.current?.setEcotype(next);
  };

  const selected = ORGANS.find((o) => o.id === selectedId) ?? null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Arabidopsis Atlas</h1>
        <p>
          Click an organ to explore it. Started from{" "}
          <a href="https://github.com/dr-richard-barker/rice-atlas" target="_blank" rel="noreferrer">rice-atlas</a>
          {" "}— see the <a href="https://github.com/dr-richard-barker/arabidopsis-atlas#readme" target="_blank" rel="noreferrer">README</a> for what's actually real data here vs. simplified geometry.
          {" "}Also see the <a href="growth.html">seed-to-flowering growth animation →</a>
        </p>
        <EcotypePicker value={ecotype} onChange={handleEcotypeChange} />
      </header>
      <div className="app-body">
        <div className="viewer-container" ref={containerRef} />
        <aside className="sidebar">
          <EcotypeInfo ecotype={ecotype} />
          {selected ? (
            <OrganInfo organ={selected} />
          ) : (
            <div className="welcome">
              <p>No organ selected. Click any part of the plant.</p>
              <p className="hint">
                Whole-seedling spaceflight coverage ({WHOLE_SEEDLING_SPACEFLIGHT.studyId}, real data, not organ-specific)
                is documented in <code>data/README.md</code> rather than shown here, since it isn't tissue-specific.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

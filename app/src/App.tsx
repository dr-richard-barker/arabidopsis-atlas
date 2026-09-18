import { useEffect, useRef, useState } from "react";
import { createOrganViewer } from "./viewer";
import { ORGANS, WHOLE_SEEDLING_SPACEFLIGHT, type Organ } from "./organs";
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

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const viewer = createOrganViewer(containerRef.current, setSelectedId);
    return () => viewer.dispose();
  }, []);

  const selected = ORGANS.find((o) => o.id === selectedId) ?? null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Arabidopsis Atlas</h1>
        <p>
          Click an organ to explore it. Started from{" "}
          <a href="https://github.com/dr-richard-barker/rice-atlas" target="_blank" rel="noreferrer">rice-atlas</a>
          {" "}— see the <a href="https://github.com/dr-richard-barker/arabidopsis-atlas#readme" target="_blank" rel="noreferrer">README</a> for what's actually real data here vs. simplified geometry.
        </p>
      </header>
      <div className="app-body">
        <div className="viewer-container" ref={containerRef} />
        <aside className="sidebar">
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

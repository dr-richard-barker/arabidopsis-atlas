// Metabolome x spaceflight section of the digital-twin panel. Data are baked at build time by
// scripts/14_export_metabolome_twin.py from the analysis outputs in results/osd522_metabolome_link/
// and results/metabolome_meta_analysis/ -- nothing here is computed in the browser.
import raw from "./data/metabolome_spaceflight.json";
import type { EcotypeParams } from "./ecotypes";

const REPO = "https://github.com/dr-richard-barker/arabidopsis-atlas/blob/main";

interface ProteinShift { median_log2fc: number; n: number; up: number; down: number }
interface FlightShift {
  rna_median_log2fc: number; rna_q_permutation: number; rna_n: number; rna_up: number; rna_down: number;
  protein: Record<string, ProteinShift>;
}
interface EcoClass {
  wu_control_pct_median: number | null; wu_n_metabolites: number;
  zhu_dark_response_pct_median: number | null; zhu_n_metabolites: number;
}
interface EcoEntry {
  wu_accession_name: string; accession_id: string; in_wu_control: boolean; in_zhu: boolean;
  classes: Record<string, EcoClass>;
}
interface TwinData {
  osd: string; classes: string[]; n_wu_control_accessions: number; n_zhu_accessions: number;
  transcript_protein_spearman: Record<string, number>;
  flight: Record<string, FlightShift>; ecotypes: Record<string, EcoEntry>;
}
const data = raw as unknown as TwinData;

function dir(v: number) {
  return v < 0 ? "down" : v > 0 ? "up" : "";
}

function fmt(v: number) {
  return `${v > 0 ? "+" : ""}${v.toFixed(2)}`;
}

function ordinal(n: number) {
  const r = Math.round(n);
  const s = r % 100 >= 11 && r % 100 <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[r % 10] ?? "th";
  return `${r}${s}`;
}

function PercentileBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="pct-bar" role="img" aria-label={`${label}: ${ordinal(value)} percentile`}>
      <div className="pct-track" />
      <div className="pct-mid" />
      <div className="pct-marker" style={{ left: `${value}%` }} />
    </div>
  );
}

function ClassCard({ cls, ecotype }: { cls: string; ecotype: EcotypeParams }) {
  const f = data.flight[cls];
  const prot = f.protein;
  const eco = data.ecotypes[ecotype.id];
  const c = eco?.classes[cls];
  const sig = f.rna_q_permutation < 0.05;
  return (
    <li className="met-class">
      <h4>{cls}</h4>
      <p className="met-line">
        <span className="met-key">Flight transcripts</span>
        <span className={dir(f.rna_median_log2fc)}>{fmt(f.rna_median_log2fc)}</span>
        {" "}log2 · {f.rna_down}↓ {f.rna_up}↑ of {f.rna_n} genes ·{" "}
        <span className={sig ? "" : "muted"}>q {f.rna_q_permutation.toFixed(3)}{sig ? "" : " (n.s.)"}</span>
      </p>
      <p className="met-line">
        <span className="met-key">Flight proteins</span>
        {(["SOL", "MEM"] as const).filter((k) => prot[k]).map((k, i) => (
          <span key={k}>
            {i > 0 ? " · " : ""}
            {k === "SOL" ? "soluble" : "membrane"}{" "}
            <span className={dir(prot[k].median_log2fc)}>{fmt(prot[k].median_log2fc)}</span>
            {" "}({prot[k].down}↓ {prot[k].up}↑ of {prot[k].n})
          </span>
        ))}
      </p>
      {c && c.wu_control_pct_median !== null ? (
        <div className="met-eco">
          <p className="met-line">
            <span className="met-key">{eco.wu_accession_name} baseline</span>
            {ordinal(c.wu_control_pct_median)} percentile of {data.n_wu_control_accessions} accessions
            {" "}<span className="muted">(Wu, median of {c.wu_n_metabolites} metabolites)</span>
          </p>
          <PercentileBar value={c.wu_control_pct_median} label={`${eco.wu_accession_name} baseline`} />
        </div>
      ) : (
        <p className="met-line muted">No Wu baseline for this ecotype.</p>
      )}
      {c && c.zhu_dark_response_pct_median !== null ? (
        <div className="met-eco">
          <p className="met-line">
            <span className="met-key">Darkness response</span>
            {ordinal(c.zhu_dark_response_pct_median)} percentile of {data.n_zhu_accessions}
            {" "}<span className="muted">(Zhu, {c.zhu_n_metabolites} metabolite{c.zhu_n_metabolites === 1 ? "" : "s"})</span>
          </p>
          <PercentileBar value={c.zhu_dark_response_pct_median} label="Darkness response" />
        </div>
      ) : (
        <p className="met-line muted">
          Darkness response: {eco && !eco.in_zhu ? `${eco.wu_accession_name} is not in the Zhu 2024 panel` : "no matched metabolites with both timepoints"}.
        </p>
      )}
    </li>
  );
}

export function MetabolomeSpaceflightPanel({ ecotype }: { ecotype: EcotypeParams }) {
  const eco = data.ecotypes[ecotype.id];
  return (
    <div className="metabolome-panel">
      <h3>Metabolome × spaceflight ({data.osd})</h3>
      <p className="met-intro">
        OSD-522 flew Col-0 seedlings; their shoots were profiled for transcripts and proteins, but not metabolites.
        Each card asks whether the genes Wu et al. 2018 assign to a metabolite class shifted in flight,
        and where the selected ecotype sits in two terrestrial leaf metabolome panels.
      </p>
      {eco?.wu_accession_name && eco.wu_accession_name !== ecotype.sourceName && (
        <p className="met-note">
          Metabolome values are for <strong>{eco.wu_accession_name}</strong>, the closest accession in Wu's panel;
          this ecotype's 3D shape uses {ecotype.sourceName}.
        </p>
      )}
      <ul className="met-classes">
        {data.classes.map((cls) => (
          <ClassCard key={cls} cls={cls} ecotype={ecotype} />
        ))}
      </ul>
      <p className="met-foot">
        Transcript shifts: DESeq2, set q from a 924-relabelling permutation test. Protein shifts: provider TMT
        statistics, 3 vs 3 per fraction, descriptive only; overall protein–transcript correlation is near zero
        (ρ {data.transcript_protein_spearman.SOL} soluble, {data.transcript_protein_spearman.MEM} membrane).
        Lower pathway transcripts do not tell you which way metabolite pools moved.{" "}
        <a href={`${REPO}/results/osd522_metabolome_link/README.md`} target="_blank" rel="noreferrer">Methods and caveats ↗</a>
      </p>
    </div>
  );
}

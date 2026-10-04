"""Add the OSD-522 shoot proteome to the spaceflight x metabolome link (run script 12 first).

OSDR ships OSD-522 shoot proteomics as two TMT 6-plex experiments (soluble, SOL; membrane, MEM),
each 3 flight vs 3 ground "in triplicates", with the provider's flight/ground log2 ratio and ANOVA
p-values (protocol text in the OSD-522 ISA investigation file). With 3 vs 3 a sample-label
permutation has only 20 relabellings (smallest p 0.1), so set-level protein results here are
descriptive plus an anti-conservative Mann-Whitney, not a permutation test.

  fetch    download the two shoot protein reports
  analyze  map UniProt -> AGI (UniProt REST, cached with the release number), then
           A transcript-protein concordance per fraction
           B Wu metabolite-class pathway genes at the protein level, beside the RNA for the same genes

Outputs: data/processed/OSD-522_proteome_shoot.csv, data/processed/OSD-522_uniprot_agi.csv,
         results/osd522_metabolome_link/proteome_*.tsv, proteome_vs_transcript.png, PROTEOME.md
"""

import argparse
import importlib.util
import sys
import urllib.parse
import urllib.request
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.stats import binomtest, mannwhitneyu, spearmanr

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
PROC = ROOT / "data" / "processed"
RES = ROOT / "results" / "osd522_metabolome_link"
DL = "https://osdr.nasa.gov/geode-py/ws/studies/OSD-522/download?source=datamanager&file={}"
REPORTS = {"SOL": "GLDS-522_proteomics_GO_Shoot_SOL_Report_20220223_Proteins.csv",
           "MEM": "GLDS-522_proteomics_GO_Shoot_MEM_Report_20220223_Proteins.csv"}
MAP_FILE = PROC / "OSD-522_uniprot_agi.csv"
UNIPROT = "https://rest.uniprot.org/uniprotkb/search?query={}&fields=accession,xref_araport&format=tsv&size=500"

spec = importlib.util.spec_from_file_location("link12", Path(__file__).with_name("12_link_osd522.py"))
link12 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(link12)

def fetch():
    for name in REPORTS.values():
        dest = RAW / name
        if dest.exists():
            print(f"  have {name}")
            continue
        with urllib.request.urlopen(DL.format(name), timeout=120) as r:
            dest.write_bytes(r.read())
        print(f"  fetched {name} ({dest.stat().st_size:,} bytes)")


def load_reports():
    frames = []
    for frac, name in REPORTS.items():
        d = pd.read_csv(RAW / name, low_memory=False)
        adj = next(c for c in d.columns if c.startswith("S/G_Adj"))
        g = [c for c in d.columns if c.startswith("Normalized_abundance_G")]
        s = [c for c in d.columns if c.startswith("Normalized_abundance_S")]
        if len(g) != 3 or len(s) != 3:
            sys.exit(f"{name}: expected 3 G + 3 S channels, got {len(g)} + {len(s)}")
        recomputed = np.log2(d[s].mean(axis=1) / d[g].mean(axis=1))
        frames.append(pd.DataFrame({
            "fraction": frac, "uniprot": d["Accession"].astype(str),
            "gene_name": d["Description"].str.extract(r"GN=(\S+)")[0],
            "confidence": d["Protein_FDR_Confidence:_Combined"],
            "log2fc": d["S/G_Log2_ratio"], "pvalue": d["S/G_P-Value"], "adj_p": d[adj],
            "log2fc_recomputed": recomputed}))
    return pd.concat(frames, ignore_index=True)


def uniprot_map(accessions):
    cached = pd.read_csv(MAP_FILE, dtype=str) if MAP_FILE.exists() else pd.DataFrame(columns=["uniprot", "agi", "release"])
    todo = sorted(set(accessions) - set(cached.uniprot))
    rows, release = [], None
    for i in range(0, len(todo), 100):
        batch = todo[i:i + 100]
        q = urllib.parse.quote(" OR ".join(f"accession:{a}" for a in batch))
        with urllib.request.urlopen(UNIPROT.format(q), timeout=120) as r:
            release = r.headers.get("X-UniProt-Release", release)
            lines = r.read().decode().strip().split("\n")[1:]
        for line in lines:
            acc, ara = (line.split("\t") + [""])[:2]
            agis = sorted({a.strip().upper() for a in ara.split(";") if a.strip()})
            rows.append({"uniprot": acc, "agi": ";".join(agis), "release": release})
        found = {r["uniprot"] for r in rows}
        rows += [{"uniprot": a, "agi": "", "release": release} for a in batch if a not in found]
    if rows:
        cached = pd.concat([cached, pd.DataFrame(rows)], ignore_index=True).drop_duplicates("uniprot")
        cached.sort_values("uniprot").to_csv(MAP_FILE, index=False)
        print(f"  UniProt mapped {len(rows)} new accessions (release {release})")
    return cached.fillna("")


def concordance(prot, rna, out):
    rows = []
    for frac, p in prot[prot.single_agi].groupby("fraction"):
        j = p.set_index("agi")[["log2fc", "adj_p"]].join(rna[["log2fc", "fdr"]], rsuffix="_rna", how="inner").dropna(subset=["log2fc", "log2fc_rna"])
        sig = j[j.adj_p < 0.05]
        same = int((np.sign(sig.log2fc) == np.sign(sig.log2fc_rna)).sum())
        both = j[(j.adj_p < 0.05) & (j.fdr < 0.05)]
        same_both = int((np.sign(both.log2fc) == np.sign(both.log2fc_rna)).sum())
        rows.append({"fraction": frac, "genes_matched": len(j),
                     "spearman_rho_all": round(spearmanr(j.log2fc, j.log2fc_rna)[0], 3),
                     "proteins_adj_p05": len(sig), "rna_same_sign": same,
                     "sign_binom_p": binomtest(same, len(sig)).pvalue if len(sig) else None,
                     "both_significant": len(both), "both_same_sign": same_both})
    df = pd.DataFrame(rows)
    df.to_csv(out / "proteome_transcript_concordance.tsv", sep="\t", index=False, float_format="%.4g")
    return df


def pathway_proteins(prot, rna, ref, out):
    rows = []
    for frac, p in prot[prot.single_agi].groupby("fraction"):
        p = p.drop_duplicates("agi").set_index("agi")
        for cls, genes in ref.items():
            inset = p.index.isin(list(genes))
            k = int(inset.sum())
            rec = {"fraction": frac, "metabolite_class": cls, "proteins_detected": k}
            if k >= 3:
                rna_same = rna.reindex(p.index[inset]).log2fc.dropna()
                rec.update(median_protein_log2fc=round(float(p.log2fc[inset].median()), 3),
                           n_up_adj_p05=int(((p.adj_p < 0.05) & inset & (p.log2fc > 0)).sum()),
                           n_down_adj_p05=int(((p.adj_p < 0.05) & inset & (p.log2fc < 0)).sum()),
                           median_rna_log2fc_same_genes=round(float(rna_same.median()), 3) if len(rna_same) else None,
                           p_mannwhitney=mannwhitneyu(p.log2fc[inset].dropna(), p.log2fc[~inset].dropna()).pvalue)
            rows.append(rec)
    df = pd.DataFrame(rows)
    ok = df.get("p_mannwhitney", pd.Series(dtype=float)).notna()
    df.loc[ok, "q_mannwhitney"] = link12.bh(df.loc[ok, "p_mannwhitney"])
    df.to_csv(out / "proteome_pathway_shift.tsv", sep="\t", index=False, float_format="%.4g")
    return df


def plot(pw, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.lines import Line2D
    d = pw.dropna(subset=["median_protein_log2fc"]).copy()
    d["label"] = d.metabolite_class + "  ·  " + d.fraction.map({"SOL": "soluble", "MEM": "membrane"})
    d = d.sort_values(["metabolite_class", "fraction"], ascending=[False, True]).reset_index(drop=True)
    fig, ax = plt.subplots(figsize=(8.4, 0.42 * len(d) + 1.5), facecolor=link12.SURFACE)
    ax.axvline(0, color=link12.GRID, lw=1)
    for y, r in d.iterrows():
        ax.plot([r.median_rna_log2fc_same_genes, r.median_protein_log2fc], [y, y], color=link12.GRID, lw=2, zorder=1)
        ax.scatter(r.median_rna_log2fc_same_genes, y, s=48, color=link12.BLUE, edgecolor=link12.SURFACE, lw=1.5, zorder=3)
        ax.scatter(r.median_protein_log2fc, y, s=48, color=link12.ORANGE, edgecolor=link12.SURFACE, lw=1.5, zorder=3)
        ax.text(0.585, y, f"{int(r.proteins_detected)} detected; adj p<0.05: {int(r.n_up_adj_p05)}↑ {int(r.n_down_adj_p05)}↓",
                va="center", fontsize=7.5, color=link12.INK2)
    ax.set_yticks(range(len(d)))
    ax.set_yticklabels(d.label, fontsize=8.5, color=link12.INK)
    ax.set_xlim(-0.45, 0.95)
    ax.set_xticks([-0.4, -0.2, 0, 0.2, 0.4])
    ax.set_xlabel("median log2 change in flight, for the same detected genes", fontsize=9, color=link12.INK2)
    ax.set_facecolor(link12.SURFACE)
    for s_ in ["top", "right"]:
        ax.spines[s_].set_visible(False)
    for s_ in ["left", "bottom"]:
        ax.spines[s_].set_color(link12.GRID)
    ax.tick_params(colors=link12.INK2, labelsize=8.5)
    ax.legend(handles=[Line2D([], [], marker="o", ls="", color=link12.BLUE, label="transcript (DESeq2)"),
                       Line2D([], [], marker="o", ls="", color=link12.ORANGE, label="protein (TMT, provider ratio)")],
              fontsize=8, frameon=False, loc="lower left", bbox_to_anchor=(0.0, 1.0), ncol=2)
    ax.set_title("OSD-522 shoots: Wu metabolite-pathway genes, transcript vs protein", loc="left",
                 fontsize=11, color=link12.INK, pad=24)
    fig.tight_layout()
    fig.savefig(path, dpi=160, facecolor=link12.SURFACE)
    plt.close(fig)


def summarize(prot, mapping, conc, pw, path):
    n = prot.groupby("fraction").agg(proteins=("uniprot", "size"), mapped_single_agi=("single_agi", "sum"),
                                     adj_p05=("adj_p", lambda s: int((s < 0.05).sum())))
    r = prot.dropna(subset=["log2fc", "log2fc_recomputed"])
    agree = r.groupby("fraction").apply(lambda d: round(spearmanr(d.log2fc, d.log2fc_recomputed)[0], 4))
    rel = ", ".join(sorted({x for x in mapping.release if x}))
    pw_show = pw.copy()
    for c in ["p_mannwhitney", "q_mannwhitney"]:
        if c in pw_show:
            pw_show[c] = pw_show[c].map(lambda v: f"{v:.2g}" if pd.notna(v) else "")
    L = ["# OSD-522 shoot proteome — run summary", "",
         "Generated by `scripts/13_osd522_proteome.py analyze`. Protein statistics are the provider's",
         "(flight/ground log2 ratio, ANOVA p, adjusted p) from the OSDR protein reports.", "",
         "## Proteins", "", link12.md_table(n.reset_index()), "",
         f"- Provider log2 ratio vs log2(mean flight / mean ground) of the normalized channel abundances, "
         f"Spearman: {', '.join(f'{k} {v}' for k, v in agree.items())}",
         f"- UniProt → AGI via Araport cross-references, UniProt release {rel}; proteins mapping to more than one",
         "  AGI are excluded from gene-level comparisons.", "",
         "## A. Transcript–protein concordance", "",
         "`rna_same_sign`: of proteins with adj p < 0.05, how many have a transcript change of the same sign;",
         "`sign_binom_p` tests that count against 50%.", "",
         link12.md_table(conc.assign(sign_binom_p=conc.sign_binom_p.map(lambda v: f"{v:.2g}"))), "",
         "## B. Wu metabolite-class pathway genes at the protein level", "",
         "Mann-Whitney compares the class's protein log2 ratios with all other proteins in the fraction;",
         "it assumes independent proteins and is anti-conservative. `median_rna_log2fc_same_genes` is the",
         "DESeq2 transcript change for exactly the detected proteins' genes.", "",
         link12.md_table(pw_show), ""]
    path.write_text("\n".join(L))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("cmd", choices=["fetch", "analyze"])
    cmd = ap.parse_args().cmd
    if cmd == "fetch":
        fetch()
        return
    if not all((RAW / n).exists() for n in REPORTS.values()):
        sys.exit("run `fetch` first")
    if not (PROC / "OSD-522_deseq2.csv").exists():
        sys.exit("run scripts/12_link_osd522.py analyze first")
    RES.mkdir(parents=True, exist_ok=True)
    prot = load_reports()
    mapping = uniprot_map(prot.uniprot.unique())
    prot = prot.merge(mapping[["uniprot", "agi"]], on="uniprot", how="left")
    prot["single_agi"] = prot.agi.fillna("").str.match(r"^AT[1-5CM]G\d{5}$")
    prot.drop(columns="log2fc_recomputed").to_csv(PROC / "OSD-522_proteome_shoot.csv", index=False, float_format="%.6g")
    rna = pd.read_csv(PROC / "OSD-522_deseq2.csv", index_col=0)
    ref = link12.reference_sets()
    print("A  transcript-protein concordance")
    conc = concordance(prot, rna, RES)
    print("B  pathway proteins")
    pw = pathway_proteins(prot, rna, ref, RES)
    plot(pw, RES / "proteome_vs_transcript.png")
    summarize(prot, mapping, conc, pw, RES / "PROTEOME.md")
    print((RES / "PROTEOME.md").read_text())


if __name__ == "__main__":
    main()

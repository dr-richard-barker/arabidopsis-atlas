"""Shared helpers for AGI-span GWAS loci (Naake 2024 reports loci only as gene spans, not bp)."""

import re

AGI_RE = re.compile(r"AT([1-5])G(\d{5})", re.I)


def parse_agi_span(text):
    """'AT5G15540-AT5G25160' / 'AT5G39185..AT5G48790' / 'AT1G03910' -> (chrom, start_idx, end_idx) or None."""
    if not isinstance(text, str):
        return None
    hits = AGI_RE.findall(text)
    if not hits:
        return None
    chroms = {int(c) for c, _ in hits}
    if len(chroms) != 1:
        return None
    idx = [int(n) for _, n in hits]
    return chroms.pop(), min(idx), max(idx)


def spans_overlap(a, b):
    """AGI-index spans (chrom, start, end) overlap. AGI numbers follow chromosome order, so this
    approximates physical overlap without bp coordinates."""
    return a is not None and b is not None and a[0] == b[0] and a[1] <= b[2] and b[1] <= a[2]

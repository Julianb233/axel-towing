#!/usr/bin/env python3
"""
Internal Link Enrichment for axletowing.com

Walks every page.tsx under website/src/app, finds occurrences of head-term phrases
that are NOT already wrapped in a <Link>, and proposes anchor inserts. Outputs:

  reports/internal-link-suggestions-YYYY-MM-DD.md   - human-readable diff suggestions
  reports/internal-link-suggestions-YYYY-MM-DD.json - machine-readable for downstream tools

By default runs in dry-run mode. Use --apply to actually rewrite files.

Usage:
  python3 scripts/internal_link_enrich.py                    # dry-run, write reports
  python3 scripts/internal_link_enrich.py --apply            # rewrite files
  python3 scripts/internal_link_enrich.py --max-per-page 3   # cap inserts per page
  python3 scripts/internal_link_enrich.py --slug phoenix     # only target one URL slug
"""

import argparse
import json
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path

# --- Config ---

ROOT = Path("/opt/agency-workspace/axel-towing/website/src/app")
REPORT_DIR = Path("/opt/agency-workspace/axel-towing/reports/internal-link-enrichment")

# Head-term -> target URL slug map. Anchor variations rotate to avoid over-optimization.
TARGETS = [
    {
        "url": "/phoenix-towing",
        "anchors": [
            "Phoenix towing",
            "private property towing in Phoenix",
            "Axle's Phoenix towing service",
            "our Phoenix towing operation",
        ],
        "match_phrases": ["Phoenix towing", "Phoenix tow service", "Phoenix-area towing"],
    },
    {
        "url": "/arizona-towing",
        "anchors": [
            "Arizona towing",
            "statewide Arizona towing",
            "Arizona-wide tow services",
        ],
        "match_phrases": ["Arizona towing", "Arizona tow service", "statewide tow"],
    },
    {
        "url": "/tow-service-phoenix-az",
        "anchors": [
            "tow service in Phoenix",
            "Phoenix tow service guide",
            "selecting a Phoenix tow service",
        ],
        "match_phrases": ["choose a tow service", "select a tow company", "find a tow service"],
    },
    {
        "url": "/licensing",
        "anchors": [
            "licensed tow operator",
            "AZDOT-licensed",
            "fully licensed Arizona tow yard",
        ],
        "match_phrases": ["AZDOT licensed", "licensed tow", "AZDOT-licensed"],
    },
    {
        "url": "/blog/arizona-abandoned-vehicle-laws-property-owners",
        "anchors": [
            "Arizona abandoned vehicle laws",
            "ARS 28-4141 framework",
            "Arizona's abandoned vehicle statutes",
        ],
        "match_phrases": ["abandoned vehicle laws", "ARS 28-4141", "abandoned vehicle statute"],
    },
    {
        "url": "/blog/hoa-abandoned-vehicle-removal-arizona",
        "anchors": [
            "HOA abandoned vehicle removal",
            "HOA towing in Arizona",
            "CC&R parking enforcement",
        ],
        "match_phrases": ["HOA abandoned vehicle", "HOA towing", "CC&R enforcement"],
    },
    {
        "url": "/blog/commercial-property-abandoned-vehicle-removal-phoenix",
        "anchors": [
            "commercial property abandoned vehicle removal",
            "commercial property tow services",
        ],
        "match_phrases": [
            "commercial property abandoned vehicle",
            "commercial property towing",
            "commercial tow",
        ],
    },
    {
        "url": "/blog/how-long-vehicle-considered-abandoned-arizona",
        "anchors": [
            "how long before a vehicle is abandoned in Arizona",
            "abandoned-vehicle timeline",
        ],
        "match_phrases": [
            "how long before",
            "abandonment timeline",
        ],
    },
    {
        "url": "/apache-sands-vs-axle-towing",
        "anchors": [
            "Axle Towing vs Apache Sands",
            "alternatives to Apache Sands",
        ],
        "match_phrases": ["Apache Sands"],
    },
]

# Phrases inside JSX attributes we should never modify
SKIP_ATTR_REGEX = re.compile(
    r'\b(href|src|alt|title|aria-label|className|class|onClick|onSubmit|content|description|name|id)\s*=\s*["\']',
)

# A phrase is "safe to anchor" if it's inside a paragraph or list item, not inside a Link/anchor already
LINK_OPEN_REGEX = re.compile(r'<(Link|a)\b[^>]*>', re.IGNORECASE)
LINK_CLOSE_REGEX = re.compile(r'</(Link|a)>', re.IGNORECASE)


def is_inside_link(content: str, position: int) -> bool:
    """Return True if `position` is inside an open <Link> or <a> tag."""
    before = content[:position]
    opens = len(LINK_OPEN_REGEX.findall(before))
    closes = len(LINK_CLOSE_REGEX.findall(before))
    return opens > closes


def is_inside_attribute(content: str, position: int) -> bool:
    """Heuristic: if the matching position is inside a quoted attribute value, skip."""
    line_start = content.rfind("\n", 0, position) + 1
    line_end = content.find("\n", position)
    if line_end == -1:
        line_end = len(content)
    line = content[line_start:line_end]
    pos_in_line = position - line_start

    # Walk back from pos_in_line, see if we're between open quote of attribute and its close
    for m in SKIP_ATTR_REGEX.finditer(line):
        attr_start = m.end()
        quote = line[m.end() - 1]
        attr_end = line.find(quote, attr_start)
        if attr_end == -1:
            continue
        if attr_start <= pos_in_line <= attr_end:
            return True
    return False


def is_inside_tag(content: str, position: int) -> bool:
    """Skip matches inside JSX tag declarations: <Tag prop=... >"""
    last_open = content.rfind("<", 0, position)
    last_close = content.rfind(">", 0, position)
    if last_open == -1:
        return False
    return last_open > last_close


def find_candidates(file_path: Path, content: str, targets: list[dict], own_url: str) -> list[dict]:
    """Find link-injection candidates in this file."""
    candidates = []
    for target in targets:
        if target["url"] == own_url:
            continue  # don't link a page to itself
        # Skip if file already has a <Link href="<target_url>">
        if f'href="{target["url"]}"' in content or f"href='{target['url']}'" in content:
            continue
        for phrase in target["match_phrases"]:
            for m in re.finditer(re.escape(phrase), content):
                pos = m.start()
                if is_inside_link(content, pos):
                    continue
                if is_inside_attribute(content, pos):
                    continue
                if is_inside_tag(content, pos):
                    continue
                candidates.append({
                    "phrase": phrase,
                    "position": pos,
                    "target_url": target["url"],
                    "available_anchors": target["anchors"],
                    "context": content[max(0, pos - 60):pos + len(phrase) + 60].replace("\n", " "),
                })
                break  # one candidate per (file, target)
            if any(c["target_url"] == target["url"] for c in candidates):
                break
    return candidates


def file_to_url(file_path: Path) -> str:
    """Translate website/src/app/.../page.tsx into URL."""
    rel = file_path.relative_to(ROOT)
    parts = list(rel.parts[:-1])  # drop "page.tsx"
    # filter out route groups like (main)
    parts = [p for p in parts if not (p.startswith("(") and p.endswith(")"))]
    return "/" + "/".join(parts) if parts else "/"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true", help="Actually rewrite files (default: dry-run)")
    parser.add_argument("--max-per-page", type=int, default=3, help="Max link inserts per page")
    parser.add_argument("--slug", type=str, default=None, help="Limit to pages whose URL starts with this slug")
    args = parser.parse_args()

    pages = sorted(ROOT.rglob("page.tsx"))
    total = len(pages)
    print(f"Walking {total} pages under {ROOT}...", file=sys.stderr)

    all_candidates = defaultdict(list)
    for fp in pages:
        own_url = file_to_url(fp)
        if args.slug and not own_url.startswith("/" + args.slug.lstrip("/")):
            continue
        try:
            content = fp.read_text()
        except UnicodeDecodeError:
            continue
        cands = find_candidates(fp, content, TARGETS, own_url)
        if cands:
            all_candidates[str(fp)] = cands[: args.max_per_page]

    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    today = date.today().isoformat()
    md_path = REPORT_DIR / f"suggestions-{today}.md"
    json_path = REPORT_DIR / f"suggestions-{today}.json"

    with md_path.open("w") as f:
        f.write(f"# Internal Link Enrichment Suggestions — {today}\n\n")
        f.write(f"**Pages scanned:** {total}\n")
        f.write(f"**Pages with at least one candidate:** {len(all_candidates)}\n")
        total_cands = sum(len(v) for v in all_candidates.values())
        f.write(f"**Total candidates:** {total_cands}\n\n")
        f.write("Candidates rotate anchor text to avoid over-optimization (max 3 per page).\n")
        f.write("Run with `--apply` to inject changes; otherwise this is a review-only report.\n\n")
        f.write("---\n\n")
        for fp_str, cands in sorted(all_candidates.items()):
            url = file_to_url(Path(fp_str))
            f.write(f"## `{url}`\n")
            f.write(f"File: `{Path(fp_str).relative_to(ROOT.parent.parent)}`\n\n")
            for i, c in enumerate(cands):
                anchor = c["available_anchors"][i % len(c["available_anchors"])]
                f.write(f"- Phrase `{c['phrase']}` → link to `{c['target_url']}`\n")
                f.write(f"  - Suggested anchor: `{anchor}`\n")
                f.write(f"  - Context: ...{c['context']}...\n")
            f.write("\n")
        f.write("\n## How to apply\n\n")
        f.write("```bash\npython3 scripts/internal_link_enrich.py --apply\n```\n\n")
        f.write("This will rewrite files in place. Always commit before running with --apply.\n")

    with json_path.open("w") as f:
        json.dump(
            {
                "generated_at": today,
                "pages_scanned": total,
                "pages_with_candidates": len(all_candidates),
                "candidates": {fp: cands for fp, cands in all_candidates.items()},
            },
            f,
            indent=2,
        )

    print(f"Report: {md_path}", file=sys.stderr)
    print(f"JSON:   {json_path}", file=sys.stderr)
    print(f"Pages with candidates: {len(all_candidates)} / {total}", file=sys.stderr)
    total_cands = sum(len(v) for v in all_candidates.values())
    print(f"Total candidates: {total_cands}", file=sys.stderr)

    if not args.apply:
        print("Dry-run only. Use --apply to rewrite files.", file=sys.stderr)
        return

    # Apply mode: walk reports and rewrite files
    print("APPLY MODE — rewriting files...", file=sys.stderr)
    rewrites = 0
    for fp_str, cands in all_candidates.items():
        fp = Path(fp_str)
        content = fp.read_text()
        # Apply edits in reverse position order so positions stay valid
        edits_for_file = []
        for i, c in enumerate(cands):
            anchor = c["available_anchors"][i % len(c["available_anchors"])]
            phrase = c["phrase"]
            target = c["target_url"]
            # Replace the FIRST safe occurrence of phrase
            idx = content.find(phrase)
            if idx == -1 or is_inside_link(content, idx) or is_inside_attribute(content, idx) or is_inside_tag(content, idx):
                continue
            replacement = f'<Link href="{target}" className="text-primary hover:underline">{anchor}</Link>'
            edits_for_file.append((idx, idx + len(phrase), replacement))
        # Apply in reverse
        for start, end, new in sorted(edits_for_file, key=lambda x: -x[0]):
            content = content[:start] + new + content[end:]
        if edits_for_file:
            # Ensure Link import exists
            if 'from "next/link"' not in content:
                content = 'import Link from "next/link";\n' + content
            fp.write_text(content)
            rewrites += 1
    print(f"Rewrote {rewrites} files.", file=sys.stderr)


if __name__ == "__main__":
    main()

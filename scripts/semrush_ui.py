#!/usr/bin/env python3
"""
SEMrush UI-scrape toolkit — fleet-wide replacement for the metered SEMrush API.

Reads logged-in SEMrush dashboard pages via Firecrawl Interactive (persistent
profile) and produces structured JSON snapshots for downstream dashboards,
diff scripts, and Linear automation.

Cost: ~$0.05 per command (Firecrawl scrape) vs metered SEMrush API plan.
Profile: Firecrawl-side persistent profile keeps Julian's SEMrush login
across runs. Re-auth is a one-time MCP login when the profile expires.

Subcommands:
    overview     Domain Overview metrics (Authority Score, traffic, kw, backlinks)
    keywords     Top organic positions table (paginated)
    competitors  Each competitor's overview rolled up
    backlinks    Backlinks summary + top referring domains
    changes      Week-over-week position changes vs last snapshot
    snapshot     Run overview + keywords + competitors + backlinks, write
                 consolidated <DATE>.json + latest.json (cron entrypoint)

History: Built 2026-05-06 (AI-9515) when the SEMrush API balance hit zero.
Reusable across the fleet — pass --domain <foo>.com to point at any client.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Any
from urllib import error, parse, request

REPO = Path(__file__).resolve().parent.parent
LOG_FILE = REPO / "scripts" / "semrush-cron.log"
DEFAULT_DOMAIN = "axletowing.com"
PROFILE_NAME_DEFAULT = "semrush-axle"


def log(msg: str) -> None:
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with LOG_FILE.open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def resolve_api_key() -> str:
    key = os.environ.get("FIRECRAWL_API_KEY", "").strip()
    if key:
        return key
    try:
        result = subprocess.run(
            ["op", "item", "get", "FIRECRAWL-hafnia", "--vault", "API-Keys",
             "--fields", "label=credential", "--reveal"],
            capture_output=True, text=True, timeout=10, check=True,
        )
        return result.stdout.strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired, FileNotFoundError) as e:
        sys.exit(f"FIRECRAWL_API_KEY not set and 1Password lookup failed: {e}")


def firecrawl_scrape(api_key: str, url: str, *, profile: str,
                     wait_ms: int = 4000, only_main: bool = False) -> str:
    """POST to Firecrawl /v2/scrape with persistent profile. Returns markdown."""
    payload = {
        "url": url,
        "formats": ["markdown"],
        "profile": {"name": profile, "saveChanges": True},
        "waitFor": wait_ms,
        "onlyMainContent": only_main,
    }
    req = request.Request(
        "https://api.firecrawl.dev/v2/scrape",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=180) as resp:
            response = json.loads(resp.read().decode("utf-8"))
    except error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        sys.exit(f"Firecrawl HTTP {e.code}: {body[:500]}")
    except error.URLError as e:
        sys.exit(f"Firecrawl request failed: {e}")

    if not response.get("success"):
        sys.exit(f"Firecrawl returned failure: {json.dumps(response)[:500]}")
    md = response.get("data", {}).get("markdown", "")
    if not md:
        sys.exit(f"Firecrawl returned no markdown for {url}")
    is_logged_in = "julianb233@gmail.com" in md or "Log out" in md
    has_upsell = "free requests" in md.lower() or "Subscribe" in md
    if not is_logged_in:
        sys.exit(
            f"SEMRUSH_NOT_AUTHENTICATED for {url} — likely the Firecrawl profile "
            f"'{profile}' lost its session OR the SEMrush free-tier daily request "
            f"limit (~10/day) was hit. Wait until midnight UTC for free-tier reset, "
            f"or re-run the MCP login flow to refresh the profile. "
            f"Markdown returned: {len(md)} chars; upsell detected: {has_upsell}"
        )
    if len(md) < 5000:
        sys.exit(
            f"SEMRUSH_THIN_RESPONSE — markdown only {len(md)} chars (expected 15K+). "
            "Likely free-tier rate-limit hit. Not overwriting prior snapshot."
        )
    return md


# ────────────────────────────── PARSERS ──────────────────────────────


def parse_overview(md: str) -> dict[str, Any]:
    """Extract Authority Score, traffic, keywords, backlinks from the overview markdown."""

    def num(pattern: str, *, default: int = 0) -> int:
        m = re.search(pattern, md, re.MULTILINE)
        if not m:
            return default
        raw = m.group(1).replace(",", "")
        try:
            return int(raw)
        except ValueError:
            return default

    rank_dist = {}
    rank_match = re.search(r"### Organic Position Distribution.*?(\d+%)", md, re.DOTALL)
    return {
        "authorityScore": num(r"Authority Score\s*\n+\[(\d+)\]"),
        # legacy `rank` key for back-compat with dashboard consumers — set to 0 since the
        # UI exposes Authority Score (0-100) not the API's domain rank (1+, lower=better)
        "rank": 0,
        "organicKeywords": num(r"Organic keywords\s*\n+\[(\d+)\]"),
        "organicTraffic": num(r"Organic traffic\s*\n+\[(\d+)\]"),
        "organicCost": 0,
        "adwordsKeywords": 0,
        "adwordsTraffic": num(r"Paid traffic\s*\n+\[(\d+)\]"),
        "adwordsCost": 0,
        "backlinks": num(r"Backlinks\s*\n+\[(\d+)\]"),
        "referringDomains": num(r"Ref\.Domains\s*\n+\[(\d+)\]"),
        "trafficShare": num(r"Traffic share.*?\[(\d+)%\]", default=0),
        "aiVisibility": {
            "totalMentions": num(r"AI Visibility.*?\[(\d+)\][^\[]*Mentions", default=0),
            "citedPages": num(r"\[(\d+)\][^\[]*Cited Pages", default=0),
        },
    }


def parse_top_keywords(md: str, *, limit: int = 100) -> list[dict[str, Any]]:
    """Parse the organic positions table from a positions page markdown."""
    keywords: list[dict[str, Any]] = []
    section = re.search(
        r"### Top Organic Keywords\s*\n+(.*?)(?:\n## |\n### Key Topics|\Z)",
        md, re.DOTALL,
    )
    block = section.group(1) if section else md
    pattern = re.compile(
        r"\[([^\]]+)\]\(https://www\.semrush\.com/analytics/keywordoverview/[^)]*?q=[^)]*\)"
        r"\s*\n+([NICT])\s*\n+(?:\[?(\d+)\]?|\[Linked SERP feature[^\]]*\][^\n]*\n+\[[^\]]*\]\([^)]*\))"
        r"\s*\n+(\d+)\s*\n+([\d.]+)\s*\n+([\d.]+)",
        re.MULTILINE,
    )
    seen: set[tuple[str, int]] = set()
    for m in pattern.finditer(block):
        kw, intent, pos, vol, cpc, traffic = m.groups()
        position = int(pos) if pos and pos.isdigit() else 0
        # dedup on (keyword, position) — SEMrush sometimes lists a kw twice (organic + SERP feature)
        if (kw, position) in seen:
            continue
        seen.add((kw, position))
        keywords.append({
            "keyword": kw,
            "intent": intent,
            "position": position,
            "volume": int(vol),
            "cpc": float(cpc),
            "url": "",
            "traffic": float(traffic),
            "trafficCost": 0,
            "competition": 0.0,
            "results": 0,
        })
        if len(keywords) >= limit:
            break
    return keywords


def parse_competitor_list(md: str) -> list[str]:
    """Extract competitor domains from the Main Organic Competitors block."""
    section = re.search(r"### Main Organic Competitors\s*\n+(.*?)\n###", md, re.DOTALL)
    if not section:
        return []
    block = section.group(1)
    pattern = re.compile(
        r"\[([\w.-]+\.[a-z]{2,})\]\(https://www\.semrush\.com/analytics/overview/[^)]+\)"
    )
    return list(dict.fromkeys(pattern.findall(block)))


def parse_competitor_overview(md: str) -> dict[str, int]:
    """Extract a competitor's headline numbers from their own Domain Overview page."""

    def num(pattern: str, *, default: int = 0) -> int:
        m = re.search(pattern, md, re.MULTILINE)
        if not m:
            return default
        raw = m.group(1).replace(",", "")
        try:
            return int(raw)
        except ValueError:
            return default

    return {
        "authorityScore": num(r"Authority Score\s*\n+\[(\d+)\]"),
        "organicKeywords": num(r"Organic keywords\s*\n+\[(\d+)\]"),
        "organicTraffic": num(r"Organic traffic\s*\n+\[(\d+)\]"),
        "backlinks": num(r"Backlinks\s*\n+\[(\d+)\]"),
        "referringDomains": num(r"Ref\.Domains\s*\n+\[(\d+)\]"),
    }


def parse_top_referring_domains(md: str, *, limit: int = 20) -> list[dict[str, Any]]:
    """Parse the Referring Domains table from the overview markdown."""
    out: list[dict[str, Any]] = []
    section = re.search(r"### Referring Domains\s*\n+(.*?)\[View details\]", md, re.DOTALL)
    if not section:
        return out
    block = section.group(1)
    pattern = re.compile(
        r"\[([\w.-]+\.[a-z]{2,})\]\(https://www\.semrush\.com/analytics/overview/[^)]+\)"
        r"[^\n]*\n+([\d.]+(?:\.[\d]+)?)\s*\n+(\d+)",
        re.MULTILINE,
    )
    for m in pattern.finditer(block):
        domain, ip, backlinks = m.groups()
        out.append({"domain": domain, "ip": ip, "backlinks": int(backlinks)})
        if len(out) >= limit:
            break
    return out


# ────────────────────────────── COMMANDS ──────────────────────────────


def cmd_overview(args: argparse.Namespace) -> dict[str, Any]:
    api_key = resolve_api_key()
    url = f"https://www.semrush.com/analytics/overview/?q={args.domain}&searchType=domain"
    log(f"[overview] Scraping {url}")
    md = firecrawl_scrape(api_key, url, profile=args.profile)
    overview = parse_overview(md)
    log(f"[overview] {overview}")
    return {"overview": overview, "_md": md}


def cmd_keywords(args: argparse.Namespace, md: str | None = None) -> list[dict[str, Any]]:
    """
    Top organic keywords from SEMrush.

    Free-tier reality: the dedicated /organic/positions/ page returns placeholder
    data ("some ebay keyword 0" etc.) on free accounts — only the 5-10 keywords
    in the OVERVIEW page preview are real. We scrape from there. To get a full
    top-100 table, either upgrade SEMrush to a paid plan OR integrate Google
    Search Console (free, gives our actual ranking keywords with imps/clicks).
    """
    api_key = resolve_api_key()
    if md is None:
        # Re-use the overview page (free-tier safe) instead of /organic/positions
        url = f"https://www.semrush.com/analytics/overview/?q={args.domain}&searchType=domain"
        log(f"[keywords] Scraping overview for top-keywords preview: {url}")
        md = firecrawl_scrape(api_key, url, profile=args.profile, wait_ms=4000)
    keywords = parse_top_keywords(md, limit=args.limit)
    log(f"[keywords] parsed {len(keywords)} keywords (free-tier ceiling ~5-10)")
    return keywords


def cmd_competitors(args: argparse.Namespace, md: str | None = None,
                    detail: bool = True) -> dict[str, dict[str, int]]:
    api_key = resolve_api_key()
    if md is None:
        url = f"https://www.semrush.com/analytics/overview/?q={args.domain}&searchType=domain"
        log(f"[competitors] Scraping {url} for competitor list")
        md = firecrawl_scrape(api_key, url, profile=args.profile)
    domains = parse_competitor_list(md)[: args.limit]
    log(f"[competitors] found {len(domains)}: {domains}")
    out: dict[str, dict[str, int]] = {}
    if not detail:
        for d in domains:
            out[d] = {"authorityScore": 0, "organicKeywords": 0, "organicTraffic": 0,
                      "backlinks": 0, "referringDomains": 0}
        return out
    for d in domains:
        url = f"https://www.semrush.com/analytics/overview/?q={d}&searchType=domain"
        log(f"[competitors]   detail scrape: {d}")
        try:
            cmd_md = firecrawl_scrape(api_key, url, profile=args.profile)
        except SystemExit as e:
            log(f"[competitors]   skip {d}: {e}")
            continue
        out[d] = parse_competitor_overview(cmd_md)
    return out


def cmd_backlinks(args: argparse.Namespace, md: str | None = None) -> dict[str, Any]:
    api_key = resolve_api_key()
    if md is None:
        url = f"https://www.semrush.com/analytics/overview/?q={args.domain}&searchType=domain"
        log(f"[backlinks] Scraping {url}")
        md = firecrawl_scrape(api_key, url, profile=args.profile)
    follow_match = re.search(r"Follow links\s*\n+\[(\d+)\]", md)
    nofollow_match = re.search(r"Nofollow links\s*\n+\[(\d+)\]", md)
    return {
        "follow": int(follow_match.group(1)) if follow_match else 0,
        "nofollow": int(nofollow_match.group(1)) if nofollow_match else 0,
        "topReferringDomains": parse_top_referring_domains(md, limit=args.limit),
    }


def cmd_changes(args: argparse.Namespace) -> dict[str, Any]:
    """Compare today's snapshot vs prior snapshot — surface position deltas."""
    snap_dir = REPO / "dashboard" / "data" / "semrush-snapshots"
    snapshots = sorted(snap_dir.glob("2026-*.json"))
    if len(snapshots) < 2:
        sys.exit("Need at least 2 snapshots to compare")
    latest = json.load(open(snapshots[-1]))
    prior = json.load(open(snapshots[-2]))
    log(f"[changes] {prior['date']} → {latest['date']}")

    prior_kw = {k["keyword"]: k for k in prior.get("keywords", [])}
    latest_kw = {k["keyword"]: k for k in latest.get("keywords", [])}
    deltas = []
    for kw, k in latest_kw.items():
        if kw in prior_kw:
            old = prior_kw[kw]["position"]
            new = k["position"]
            if old != new:
                deltas.append({
                    "keyword": kw, "from": old, "to": new, "delta": new - old,
                    "volume": k.get("volume", 0),
                })
    deltas.sort(key=lambda d: d["delta"])
    new_kw = sorted(set(latest_kw) - set(prior_kw))
    lost_kw = sorted(set(prior_kw) - set(latest_kw))
    return {
        "from": prior["date"], "to": latest["date"],
        "deltas": deltas, "newKeywords": new_kw, "lostKeywords": lost_kw,
        "trafficDelta": latest["overview"]["organicTraffic"] - prior["overview"]["organicTraffic"],
        "kwCountDelta": latest["overview"]["organicKeywords"] - prior["overview"]["organicKeywords"],
    }


def cmd_snapshot(args: argparse.Namespace) -> None:
    """Run all collectors and write the consolidated daily snapshot.

    Free-tier budgeting: SEMrush limits ~10 reports/day per account.
    - Default mode: 1 Firecrawl scrape (overview only) — fits comfortably daily
    - --with-competitor-detail mode: 6 Firecrawl scrapes (overview + 5 competitors)
      — run weekly (e.g. Sunday) to stay within daily caps
    """
    snap_dir = REPO / "dashboard" / "data" / "semrush-snapshots"
    snap_dir.mkdir(parents=True, exist_ok=True)

    overview_data = cmd_overview(args)
    overview_md = overview_data["_md"]
    overview = overview_data["overview"]

    # Sanity check — if overview parsed empty, something is wrong (rate limit, layout change)
    # Don't overwrite a good prior snapshot with garbage.
    if overview["organicKeywords"] == 0 and overview["organicTraffic"] == 0 and overview["authorityScore"] == 0:
        sys.exit(
            "SEMRUSH_OVERVIEW_EMPTY — parsed AS=0, kw=0, traffic=0. Likely rate-limited "
            "or markup changed. Not overwriting prior snapshot."
        )

    # Re-use overview markdown for keywords, competitor list, and backlinks summary
    # (saves Firecrawl credits + SEMrush quota — all data is on the overview page).
    keywords = cmd_keywords(args, md=overview_md)
    competitors = cmd_competitors(
        args, md=overview_md, detail=args.with_competitor_detail
    )
    backlinks = cmd_backlinks(args, md=overview_md)

    today = datetime.now().strftime("%Y-%m-%d")
    snapshot = {
        "date": today,
        "domain": args.domain,
        "overview": overview,
        "keywords": keywords,
        "competitors": competitors,
        "backlinks": backlinks,
        "raw": {
            "source": "firecrawl-ui-scrape",
            "profile": args.profile,
            "scraped_at": datetime.utcnow().isoformat() + "Z",
        },
    }

    out_path = snap_dir / f"{today}.json"
    out_path.write_text(json.dumps(snapshot, indent=2) + "\n", encoding="utf-8")
    latest = snap_dir / "latest.json"
    if latest.exists() or latest.is_symlink():
        latest.unlink()
    latest.write_text(json.dumps(snapshot, indent=2) + "\n", encoding="utf-8")
    log(f"[snapshot] wrote {out_path}")
    log(f"[snapshot] wrote {latest}")


# ────────────────────────────── CLI ──────────────────────────────


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="SEMrush UI-scrape toolkit (Firecrawl Interactive)")
    p.add_argument("--domain", default=DEFAULT_DOMAIN, help="Domain to query (default: %(default)s)")
    p.add_argument("--profile", default=PROFILE_NAME_DEFAULT,
                   help="Firecrawl profile name (default: %(default)s)")
    sub = p.add_subparsers(dest="command", required=True)

    sp = sub.add_parser("overview", help="Domain overview metrics")
    sp.set_defaults(func=lambda a: print(json.dumps(cmd_overview(a)["overview"], indent=2)))

    sp = sub.add_parser("keywords", help="Top organic positions table")
    sp.add_argument("--limit", type=int, default=100)
    sp.set_defaults(func=lambda a: print(json.dumps(cmd_keywords(a), indent=2)))

    sp = sub.add_parser("competitors", help="Each competitor's overview")
    sp.add_argument("--limit", type=int, default=5)
    sp.add_argument("--no-competitor-detail", action="store_true",
                    help="List competitor domains only, skip per-competitor scrape")
    sp.set_defaults(func=lambda a: print(json.dumps(
        cmd_competitors(a, detail=not a.no_competitor_detail), indent=2)))

    sp = sub.add_parser("backlinks", help="Backlinks summary + top referring domains")
    sp.add_argument("--limit", type=int, default=20)
    sp.set_defaults(func=lambda a: print(json.dumps(cmd_backlinks(a), indent=2)))

    sp = sub.add_parser("changes", help="Position changes vs prior snapshot")
    sp.set_defaults(func=lambda a: print(json.dumps(cmd_changes(a), indent=2)))

    sp = sub.add_parser("snapshot", help="Run all collectors + write daily snapshot")
    sp.add_argument("--limit", type=int, default=20,
                    help="Max top keywords to include (free-tier ceiling ~10)")
    sp.add_argument("--with-competitor-detail", action="store_true",
                    help="Per-competitor detail scrape (6 Firecrawl credits + 6 SEMrush quota — "
                         "run weekly, NOT daily. Default daily mode does competitor-list-only.)")
    sp.set_defaults(func=cmd_snapshot)

    return p


def main() -> None:
    args = build_parser().parse_args()
    log(f"=== {args.command} {args.domain} (profile={args.profile}) ===")
    args.func(args)


if __name__ == "__main__":
    main()

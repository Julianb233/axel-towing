# SEMrush UI-Scrape Runbook (AI-9515)

**Replaces:** the metered SEMrush API path (`scripts/semrush-snapshot.sh` — kept as fallback only).
**Why:** SEMrush API balance hit zero 2026-05-06. UI scrape via Firecrawl Interactive uses ~$0.05 of Firecrawl credits per run vs the metered SEMrush API plan.

## Architecture

```
Firecrawl Interactive (HTTP /v2/scrape with profile.name=semrush-axle)
            │
            ▼
  Logged-in SEMrush dashboard (Julian's account)
            │
            ▼
  scripts/semrush_ui.py  (Python CLI, parses markdown into JSON)
            │
            ▼
  dashboard/data/semrush-snapshots/<DATE>.json  (existing schema preserved)
```

## CLI subcommands

```bash
# Domain Overview metrics only (1 Firecrawl scrape, ~$0.005)
python3 scripts/semrush_ui.py overview

# Top organic keywords (free-tier ceiling: ~5-10 visible on overview page)
python3 scripts/semrush_ui.py keywords

# Competitor list with full profiles for each (6 scrapes — weekly, not daily)
python3 scripts/semrush_ui.py competitors

# Backlinks summary + top referring domains
python3 scripts/semrush_ui.py backlinks

# Position changes vs prior snapshot (no scrape, reads existing JSON)
python3 scripts/semrush_ui.py changes

# Daily snapshot — overview + keywords + competitors-list + backlinks (1 scrape)
python3 scripts/semrush_ui.py snapshot

# Weekly deep snapshot — adds per-competitor detail (6 scrapes)
python3 scripts/semrush_ui.py snapshot --with-competitor-detail
```

## Default for any client

```bash
python3 scripts/semrush_ui.py snapshot --domain <client>.com --profile semrush-<slug>
```

To onboard a new client:
1. Run `firecrawl_browser_create` via MCP with `profile: { name: "semrush-<slug>" }` to start a session.
2. Navigate to https://www.semrush.com/login and log in with that client's SEMrush account (Julian's covers all of ours today).
3. Save profile (automatic with `saveChanges: true`).
4. From here on, the script can scrape that client's dashboards using the saved profile.

## Free-tier ceiling — IMPORTANT

SEMrush free tier limits to **~10 reports per day per account**. Behavior:
- Within the limit: full data on Domain Overview pages.
- Past the limit: returns a thinned / Subscribe-upsell page with no real data.

The script's `firecrawl_scrape()` helper has two guards that detect this:
- `SEMRUSH_NOT_AUTHENTICATED` — markdown doesn't contain Julian's email or "Log out".
- `SEMRUSH_THIN_RESPONSE` — markdown shorter than 5,000 chars (data panels not rendered).

When either fires, the script EXITS WITHOUT OVERWRITING the prior snapshot.

The `cmd_snapshot()` orchestrator has a third guard: if the parsed overview has AS=0, kw=0, traffic=0, it exits without writing.

These guards mean a rate-limited cron run is safe — it leaves prior data intact.

## Quota budgeting per domain

| Mode | Firecrawl scrapes | SEMrush reports | Cadence |
|---|---|---|---|
| `snapshot` (default) | 1 | 1 | Daily — comfortably under the 10/day cap |
| `snapshot --with-competitor-detail` | 6 | 6 | **Weekly** (Sunday) — would burn the whole free-tier budget if daily |
| `competitors` | 6 | 6 | Weekly |
| `keywords` (standalone) | 1 | 1 | Daily |

**Fleet implication:** 4 client domains × 1 daily report = 4 reports/day, well within 10. But if any agent ad-hoc-scrapes during the day, budget shrinks. Don't run debug iterations in production hours.

## What we get vs what we lose vs the API

| Data point | API path | UI scrape | Notes |
|---|---|---|---|
| Authority Score | NO | YES (0-100) | UI metric — better signal than the API's domain rank |
| Organic keywords count | YES | YES | matches |
| Organic traffic estimate | YES | YES | matches |
| Top organic keywords | YES (top 500) | **PARTIAL** (top ~5-10) | Free-tier ceiling on the dedicated positions page |
| Per-keyword position | YES (top 500) | NO | Need GSC integration for full coverage |
| Backlinks count | NO | YES | New data |
| Referring domains count | NO | YES | New data |
| Top 5 referring domains | NO | YES | New data |
| Follow vs Nofollow split | NO | YES | New data |
| 5 competitor profiles (AS/kw/traffic/backlinks) | API gave 1 | **YES (5)** | Strictly better |
| AI Visibility (mentions, ChatGPT, Gemini) | NO | YES | New data |

Net: UI scrape gives us a STRICTLY BETTER dataset for daily monitoring. The only loss is the long-tail keyword positions (top 5-500), which the next phase (GSC integration) replaces with our actual ranking keywords backed by impressions/clicks data.

## Cron entry

Replace the old SEMrush API cron line with:
```cron
# Daily SEMrush snapshot via UI scrape (replaces metered API path)
30 6 * * * cd /opt/agency-workspace/axel-towing && /usr/bin/python3 scripts/semrush_ui.py snapshot >> scripts/semrush-cron.log 2>&1

# Weekly deep snapshot (Sunday 7am — pulls per-competitor details too)
0 7 * * 0 cd /opt/agency-workspace/axel-towing && /usr/bin/python3 scripts/semrush_ui.py snapshot --with-competitor-detail >> scripts/semrush-cron.log 2>&1
```

## Re-authenticating the profile

Profiles persist on the Firecrawl backend keyed by name. SEMrush typically holds a session for ~30 days. When the profile loses session:

1. Pull up MCP tools: `mcp__firecrawl__firecrawl_browser_create` with `profile: { name: "semrush-axle", saveChanges: true }`.
2. Manually navigate to `https://www.semrush.com/login` via `firecrawl_browser_execute`.
3. Fill credentials from 1Password (`semrush.com (Julianb233@gmail.com)` Browserbase Agent vault).
4. Click login, wait for dashboard to load.
5. Profile auto-saves the cookie/session.
6. Subsequent script runs use the refreshed session.

## Phase 2: GSC integration (separate task)

For full top-100 keyword data with our actual impressions/clicks/positions: integrate Google Search Console API. GSC gives:
- Top 1,000 keywords with impressions, clicks, average position
- Per-page query data
- Country / device / search-type breakdowns
- 16-month historical data
- **Free, no rate limits**

This replaces the long-tail keyword visibility we lose vs the SEMrush API. File as a follow-up issue — sister to AI-9515.

## Companion files

- Script: `scripts/semrush_ui.py`
- Old API script (fallback): `scripts/semrush-snapshot.sh`
- Snapshot dir: `dashboard/data/semrush-snapshots/`
- Audit log: `scripts/semrush-cron.log`
- Linear: AI-9515

## Origin

2026-05-06 — Julian asked: "Isn't there a way I can use the SemRush without pulling all of their portions? Just being able to get it from the visual of the website and not have to use any credits?" Built the UI-scrape replacement same session.

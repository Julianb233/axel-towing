# NAP Verification — Schema vs Canonical (AI-9480)

**Date:** 2026-05-06
**Audit script:** `scripts/nap-audit.sh`
**Raw output:** `.logs/nap-audit/nap-audit-20260506-2021.{md,json}` (gitignored)

## Verdict

**PASS — Schema.org `LocalBusiness` markup on axletowing.com matches canonical NAP for both locations.**

## Canonical source of truth

`dashboard/lib/data/gbp-content/locations.json`

| Location | Phone | Address |
|---|---|---|
| Apache Junction | (480) 288-5526 | 1151 W Apache Trail, Apache Junction, AZ 85120 |
| Phoenix | (480) 288-5526 | 320 E Pioneer St, Phoenix, AZ 85040 |

## Source-by-source

| Source | Status | Notes |
|---|---|---|
| `axletowing.com` JSON-LD (Phoenix) | MATCH | name, address, phone all match canonical |
| `axletowing.com` JSON-LD (Apache Junction) | MATCH | name, address, phone all match canonical |
| AMA member directory | MATCH | phone confirmed (480) 288-5526 |
| GBP Apache Junction | NO_DATA | Public Maps scrape returns no phone — Google obfuscates against scraping. Definitive verification needs Manager API access (AI-9469/AI-9470). |
| GBP Phoenix | NO_DATA | Same as above. |
| Yelp Apache Junction | BLOCKED | HTTP 403 — Yelp blocks scraping. Manual verification or paid API needed. |

## What this verifies

- The structured-data layer Google ingests from axletowing.com is internally consistent — no schema/website drift.
- Canonical NAP (locations.json) is faithfully reflected in `LocalBusiness` JSON-LD blocks.
- The AMA partner directory citation matches.

## What this does NOT verify (yet)

- Whether GBP listings themselves currently display the correct phone — needs Manager API access (AI-9469 + AI-9470 in flight).
- Yelp listing accuracy — needs manual check or Yelp Fusion API key.
- Apple Maps / Bing Places / MapQuest — covered by AI-9476 once GBP Manager access lands.

## Recommendation

- Close AI-9480: schema-side verification is complete and clean.
- Re-run `scripts/nap-audit.sh` weekly via cron once Elliott resolves the hours conflict (AI-9457 wave 3 finding).
- Once AI-9470 closes (Manager access), extend the script to use the official My Business API for the GBP-side comparison instead of public Maps scraping.

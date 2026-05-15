# SEO + AI SEO Implementation Plan

Date: 2026-05-15
Client: Axle Towing & Impound
Linear master: AI-10006

## Objective

Turn the new SEO + AI SEO article cluster into measurable local ranking, Google Business Profile, AI answer visibility, and client-reporting progress.

## Source Artifacts

- Article schedule: `docs/SEO-AI-SEO-ARTICLE-SCHEDULE-2026-05-15.md`
- City-service matrix: `docs/SEO-AI-SEO-CITY-SERVICE-MATRIX-2026-05-15.md`
- GBP evidence manifest: `data/gbp/axletowing.com/2026-05-15/gui-capture-manifest.json`
- GBP post calendar: `docs/GBP-POST-CALENDAR-2026-05-15.md`
- GBP Q&A seed set: `docs/GBP-QA-SEED-SET-2026-05-15.md`
- Build verification: `npm run build` passed on 2026-05-15 with 395 generated pages.

## Scope

- 32 total new article assets.
- 6 pillar / intent articles.
- 26 city-service AI SEO articles.
- Service clusters: abandoned vehicle removal, HOA parking enforcement, apartment parking enforcement, commercial property towing, private property towing, and parking enforcement.
- Cities/areas: Phoenix, Mesa, Tempe, Scottsdale, Chandler, Gilbert, Glendale, Queen Creek, Apache Junction, Avondale, Goodyear, Phoenix Metro, and East Valley.

## Guardrails

- `24/7` means towing dispatch only.
- Do not imply vehicle release or office visits are available 24/7.
- Do not publish competitor-comparison content.
- Do not publish legal-dispute playbooks.
- Avoid exact storage fees and payment-method claims unless Elliott confirms them.
- Use screenshot/export evidence before making client-facing ranking movement claims.

## Linear Execution Tree

| Issue | Purpose | Due |
| --- | --- | --- |
| AI-10006 | Master rollout plan | 2026-06-30 |
| AI-10007 | Publish QA for all 32 articles | 2026-05-18 |
| AI-10008 | Deploy cluster and submit indexing | 2026-05-20 |
| AI-10009 | GBP posts + Q&A support | 2026-05-22 |
| AI-10010 | AI visibility baseline across AI surfaces | 2026-05-27 |
| AI-10011 | Rank tracking + PPP reporting | 2026-05-31 |
| AI-10012 | Monthly refresh loop for gaps | 2026-06-15 |
| AI-10013 | Local citation + authority support | 2026-06-07 |

## Phase 1: Publish QA

Owner task: AI-10007

1. Review all 32 MDX articles for title, meta description, H1, city/service intent, CTA, and internal links.
2. Confirm each article links to the matching service page, matching location page where available, `/get-quote`, and the relevant vehicle/location flow.
3. Run a guardrail scan for unsupported hours, fees, legal advice, dispute language, and competitor comparison.
4. Confirm `website/src/lib/blog-slugs.ts` includes each slug.
5. Run `npm run build` from `website`.

Done when all articles are publish-ready and the build passes.

## Phase 2: Deploy And Index

Owner task: AI-10008

1. Confirm branch/PR/deployment path.
2. Deploy to production.
3. Verify representative URLs on desktop and mobile.
4. Confirm `/sitemap.xml` includes new article routes.
5. Submit sitemap or priority URLs in Google Search Console.
6. Save screenshots of deployment/indexing evidence.

Priority URL sample:

- `/blog/abandoned-vehicle-removal-apartment-complexes-phoenix`
- `/blog/towing-dispatch-vs-vehicle-release-hours`
- `/blog/abandoned-vehicle-removal-mesa-apartment-communities`
- `/blog/hoa-parking-enforcement-mesa-az`
- `/blog/apartment-parking-enforcement-phoenix-az`
- `/services/abandoned-vehicle-removal`

## Phase 3: GBP Support Layer

Owner task: AI-10009

1. Prepare or schedule GBP posts that mirror the first pillar batch and top city-service terms.
2. Prepare Q&A entries for abandoned vehicle removal, property-manager parking enforcement, HOA towing, apartment parking enforcement, dispatch vs release hours, and service-area coverage.
3. Use screenshots/media with metadata sidecars from `data/gbp/axletowing.com/2026-05-15/`.
4. Capture screenshots of each live or pending GBP update.
5. Comment evidence back to AI-9985.

Done when at least 4 GBP posts are prepared or scheduled and Q&A support is ready for both profiles or blocked with evidence.

## Phase 4: AI Visibility Baseline

Owner task: AI-10010

Surfaces:

- ChatGPT
- Perplexity
- Google AI Overview / Search AI result where available
- Gemini
- Claude
- Bing/Copilot

Work:

1. Run the 26 city-service prompts plus 6 pillar prompts.
2. Capture screenshots, citations, client mention, competitor mention, and recommendation status.
3. Save `ai-visibility-snapshot.json` and `ai-visibility-report.md`.
4. Classify gaps as `missing_entity`, `weak_citation`, `competitor_preferred`, `content_needed`, or `source_gap`.
5. Record blockers as `BLOCKER.json` when a surface is logged out, blocked, rate-limited, or CAPTCHA-gated.

## Phase 5: PPP And Rank Reporting

Owner task: AI-10011

Track:

- Target query.
- Target URL.
- City/area.
- Service type.
- Current rank or visibility.
- Previous rank where known.
- Search Console impressions and clicks.
- GBP discovery term.
- Calls to `480-288-5526`.
- `/get-quote` clicks.
- AI answer mention/citation status.

Outputs:

- `progress-snapshot.json`
- `ranking-gap-actions.json`
- `ai-visibility-snapshot.json`
- `ai-visibility-report.md`
- `portal-feed-entry.md`

Done when the PPP update separates shipped work, measured movement, blockers, and next actions.

## Phase 6: Monthly Improvement Loop

Owner task: AI-10012

Each monthly run should convert measurement gaps into one of:

- `quick_win`
- `striking_distance`
- `content_gap`
- `authority_gap`
- `missing_entity`
- `weak_citation`
- `competitor_preferred`
- `content_needed`
- `source_gap`

Each action must have a target URL, target query, reason, proposed change, and expected metric impact.

## Phase 7: Authority And Citations

Owner task: AI-10013

1. Audit NAP consistency for both Axle locations.
2. Identify 20 qualified citation or authority opportunities.
3. Map each opportunity to a city/service cluster.
4. Capture screenshot evidence for any live submission.
5. Summarize authority work in PPP without overstating impact.

## Immediate Next Agent Task

Start with AI-10007. Do not deploy or index until publish QA is clean and the latest build passes.

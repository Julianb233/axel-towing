# Axle Towing — Content Sprint 1 Visual Plan
**Date:** 2026-05-15
**Scope:** AI-9979 + AI-9980 (paid-active, both due this week)
**Out of scope this session:** 38 other open issues — separate sprints.

## Why this subset

Of the 40 open actionable Axle issues, the cleanest code-shippable subset with no
human dependency is the two Content Sprint 1 tickets. Both are `paid-active`,
both have detailed specs in Linear, both deploy via Railway auto-deploy on push.
Other P1 items (`AI-9986` GBP, `AI-9469` GCP API enable, `AI-8623` Workspace
delegation) require Julian-/Elliott-/Hitesh-side actions and a signed-in Chrome
session — they are not pure code work and are blocked on a human gate.

## ASCII Architecture Map

```
AXLE TOWING WEBSITE (Next.js 14, Railway)
                    │
                    ▼
        src/app/ (App Router)
         │      │      │
         ▼      ▼      ▼
   /services /audiences /resources
   (WHAT)   (WHO) NEW    (RESOURCES)
      │        │            │
      │   ┌────┴────┐       │
      │   │ NEW:    │       ├─ existing ones
      │   │ /hoa    │       │
      │   │ /apt-cx │       │ NEW:
      │   │ /comm-pm│       │ /property-manager-towing-hub
      │   └─────────┘       │
      │
      ├─ existing services
      └─ NEW: /abandoned-vehicle-removal
```

## Mermaid Dependency Graph

```mermaid
graph TD
    A[Scan service-data + Template] --> B[AI-9979 data entries x4]
    A --> C[AI-9980 data entries x2]
    B --> D[/audiences/* pages]
    C --> E[/services/abandoned-vehicle-removal]
    C --> F[/resources/property-manager-towing-hub]
    D --> G[/audiences index]
    E --> H[Internal-link sweep from blog + city pages]
    F --> H
    G --> I[sitemap.ts updates]
    H --> I
    I --> J[npm run build]
    J --> K[Commit per AI-NNNN + push main]
    K --> L[Railway deploy]
    L --> M[Verify 6 URLs 200 + content marker]
    M --> N[Dashboard changelog + Linear DONE + portal_changelog]
    N --> O[Notify Julian]
```

## Component Breakdown

| Component | Purpose | Inputs | Outputs | Dependencies |
|---|---|---|---|---|
| `SERVICE_PAGES` data ×6 | Content source | title, meta, hero, FAQs, links | Typed records | service-data.ts |
| `/audiences/hoa` | HOA board LP | SERVICE_PAGES | Page + JSON-LD | ServicePageTemplate |
| `/audiences/apartment-complexes` | Apartment PM LP | SERVICE_PAGES | Page + JSON-LD | same |
| `/audiences/commercial-property-managers` | Commercial PM LP | SERVICE_PAGES | Page + JSON-LD | same |
| `/audiences/page.tsx` | Index | static | Hub | links |
| `/services/abandoned-vehicle-removal` | Service pillar | SERVICE_PAGES | Page + JSON-LD | same |
| `/resources/property-manager-towing-hub` | Resource pillar | data + links | Page | existing resource pattern |
| `sitemap.ts` | SEO discovery | new routes | XML | routes exist |
| Dashboard changelog | Client visibility | shipped items | new entry | dashboard/app/changelog/page.tsx |
| Linear/portal | Audit | PR + verify | comments + rows | auto hook |

## Out-of-scope for this sprint

- AI-9980's 8 supporting resource articles (abandoned-vehicle form guide, 72-hr
  rule explainer, contract guide, signage requirements, parking enforcement
  checklist, HOA board guide, monthly compliance report template) — stretch
  goal after the two pillar pages ship clean. Tracked as follow-up sub-issues
  if not completed this session.
- AI-9986 (GBP Phoenix phone + hours) — requires Julian's Chrome session.
- AI-9469 (GCP API enable) — Julian must click in GCP console.
- AI-8623 (Workspace delegation) — Hitesh-owned.
- GBP automation tasks AI-9472..AI-9990 — blocked on GCP scope enable.
- AI-7798 (GHL hiring pipeline) — assigned to Hitesh.
- All other 30+ issues — separate prioritization.

## Risks / Open Questions

1. **`/audiences/*` namespace is new.** Need a nav-link discoverability decision
   (sidebar / footer / contextual). For now, link from `/services` index and
   internal links from blog posts.
2. **Existing `/services/parking-enforcement` already exists.** AI-9979's list
   includes it — interpreting that as "ensure it links to new audience pages"
   rather than rebuild.
3. **No $ pricing** per CLAUDE.md.
4. **Property-manager-focused only.** No vehicle-owner help content.

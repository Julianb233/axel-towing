# Research Summary — Axle Towing v2.0 Outbound Marketing & Automation

**Researched:** 2026-04-09
**Dimensions:** Stack, Features, Architecture, Pitfalls
**Overall Confidence:** HIGH

---

## Executive Summary

The v2.0 milestone is **not a software build — it's a configuration and activation sprint.** GoHighLevel handles 80% of the 14 deliverables natively (email sequences, SMS, Voice AI phone, chatbot widget, social media scheduling, hiring pipeline, calendars). The remaining 20% requires specialized tools: Instantly.ai for cold email (GHL prohibits it), Apollo.io for lead enrichment, Printify for gifting, and manual effort for LinkedIn/Facebook/Nextdoor.

### Critical Constraints Discovered

1. **Cold email cannot go through GHL** — against their ToS. Must use Instantly.ai ($47/mo) on a separate cold-outreach domain with 3-4 week warmup before first send.
2. **TCPA one-to-one consent deadline is April 11, 2026** — SMS outreach requires A2P 10DLC registration (3-7 business days + EIN verification) before any campaign.
3. **Elliott must approve all templates** before activation — contract requirement, not optional.
4. **DNS (Mike) is the longest lead-time blocker** — SPF/DKIM/DMARC for sending domain must be initiated Week 1.
5. **Simultaneous launch of all 14 strategies = highest-order risk.** Must phase.
6. **GHL Unlimited ($297/mo) is the correct plan** — not the $497 Pro tier. Pro is only needed for API-based sub-account creation at scale. AI Employee add-on ($97/mo) covers both Voice AI and Chatbot.
7. **Nextdoor has NO API** — manual only, no scheduler support.
8. **LinkedIn automation risks account restriction** — keep to 20-30 connections/week, comment-first approach required.

### Architecture: GHL as Central Hub

```
┌─────────────────────────────────────────────────────┐
│                   LEAD SOURCES                       │
│  Website · Phone · LinkedIn · Facebook · Scraping    │
└────────────────────────┬────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│            GoHighLevel (Central Hub)                  │
│  Contacts · Pipelines · Workflows · Voice AI         │
│  Social Planner · Chat Widget · Calendars            │
└──┬──────────┬──────────┬──────────┬─────────────────┘
   │          │          │          │
┌──▼───┐  ┌──▼───┐  ┌───▼──┐  ┌───▼──────┐  ┌──────────┐
│Twilio│  │Resend│  │Supa- │  │TowBook   │  │Instantly │
│Phone │  │Email │  │base  │  │Dispatch  │  │Cold Email│
│& SMS │  │Trans.│  │Audit │  │& Lookup  │  │(separate)│
└──────┘  └──────┘  └──────┘  └──────────┘  └──────────┘
```

---

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: GHL Foundation & Compliance (Week 1-2)
**Rationale:** Everything depends on GHL being configured. Cannot run any automation without it.
- Downgrade GHL agency to Unlimited ($297/mo) + add AI Employee ($97/mo)
- Configure GHL sub-account for Axle Towing (pipelines, custom fields, tags)
- Set up API credentials in Vercel env vars
- DNS: Initiate SPF/DKIM/DMARC with Mike immediately
- A2P 10DLC brand registration for SMS
- Purchase cold-outreach domain and start Instantly.ai warmup
- Build Elliott template approval workflow
- **Addresses:** GHL setup (AI-7441), email automation (AI-7437), GHL downgrade (AI-7442)
- **Avoids:** Pitfall #1 (simultaneous launch), Pitfall #2 (DNS as blocker)
- **Uses:** GHL API for pipelines/contacts, GHL UI for workflows

### Phase 2: Email Sequences & Nurture Campaigns (Week 2-3)
**Rationale:** Email is the foundation channel — must be live before social or phone.
- Import referral partner email templates into GHL workflows (6 types × 3 emails)
- Build 21-day nurture campaign sequences in GHL
- Configure Resend → GHL webhook for transactional email sync
- Submit templates to Elliott for written approval
- Test end-to-end: website form → GHL contact → workflow trigger → email delivery
- **Addresses:** Referral campaigns (AI-7427), nurture campaigns (AI-7432)
- **Avoids:** Pitfall #4 (cold email via GHL — use Instantly.ai for cold outreach separately)
- **Blocked by:** Phase 1 (GHL must be configured)

### Phase 3: AI Phone System & Chatbot (Week 3-4)
**Rationale:** Phone is business-critical — needs parallel testing with UMA before cutover.
- Configure GHL Voice AI receptionist (after-hours handling, TowBook lookup, directions)
- Connect Twilio number to GHL phone system
- Run UMA + GHL Voice AI in parallel for 2 weeks
- Embed GHL Chat Widget on axletowing.com (single script tag)
- Configure Conversation AI knowledge base for property manager FAQs
- **Addresses:** AI phone (AI-7431), chatbot (AI-7433)
- **Avoids:** Pitfall #10 (voice handoff failures), Pitfall #16 (chatbot UX)
- **Blocked by:** Phase 1 (AI Employee add-on must be active)

### Phase 4: Social Media Launch (Week 2-4, parallel with Phase 2-3)
**Rationale:** Social takes time to build traction — start early, runs independently.
- Create/verify Instagram account (@axletowingaz)
- Connect Facebook, Instagram, LinkedIn to GHL Social Planner
- Complete Stitch social media design templates (AI-7440)
- Schedule first month of content (12-16 posts across platforms)
- Set up Nextdoor business profile (manual — no API)
- Begin Facebook HOA group observation phase (no posting for 4 weeks)
- Begin LinkedIn connection requests (20-30/week, comment-first)
- **Addresses:** Social media (AI-7430), Instagram (AI-7439), Stitch (AI-7440), Facebook (AI-7429), LinkedIn (AI-7428), Nextdoor (AI-7438)
- **Avoids:** Pitfall #6 (LinkedIn restrictions), Pitfall #7 (Facebook group bans)
- **Independent of:** Phases 2-3 (can run in parallel)

### Phase 5: Lead Scraping & Cold Outreach (Week 4-5)
**Rationale:** Only makes sense after GHL workflows exist to receive leads AND cold domain is warmed.
- Build scraping scripts (AZ SOS, Google Maps, LinkedIn)
- Enrich leads via Apollo.io
- Import to GHL with tag-based workflow triggers (NOT "Contact Created")
- Activate Instantly.ai cold email campaigns (domain warmed by now)
- Connect cold email responses back to GHL via webhook
- **Addresses:** Lead scraping (AI-7436), feeds all nurture campaigns
- **Avoids:** Pitfall #12 (bulk import doesn't trigger workflows — use tags)
- **Blocked by:** Phase 1 (GHL configured), Phase 2 (workflows built), Instantly.ai warmup (3-4 weeks)

### Phase 6: Hiring Pipeline & Corporate Gifting (Week 5-6)
**Rationale:** Lower priority — operational efficiency, not lead gen.
- Configure 9-stage hiring pipeline in GHL (replaces Calendly)
- Connect application form to GHL pipeline
- Build automated acceptance/rejection email flows
- Set up Printify store with branded merchandise
- Configure corporate gifting tiers and ordering workflow
- **Addresses:** Hiring (AI-7434), gifting (AI-7435)
- **Avoids:** Pitfall #14 (rushing hiring before core lead gen works)
- **Independent of:** Phases 3-5 (can start once Phase 1 complete)

### Phase ordering rationale:
- **Phase 1 gates everything** — no automation works without GHL configured
- **Phase 2 before 5** — must have workflows before importing scraped leads
- **Phase 3 needs parallel testing** — can't cold-cut UMA phone system
- **Phase 4 starts early** — social is a slow-burn channel, needs time
- **Phase 5 waits for Instantly.ai warmup** — 3-4 weeks from domain purchase
- **Phase 6 is lowest priority** — hiring and gifting don't generate leads directly

### Research flags for phases:
- **Phase 1:** May need deeper research on GHL API v1→v2 migration (existing `lib/ghl.ts` uses v1)
- **Phase 3:** Voice AI configuration specifics (emergency keyword detection, TowBook webhook)
- **Phase 5:** Scraping compliance (AZ SOS public records vs LinkedIn ToS)
- **Phases 2, 4, 6:** Standard patterns, unlikely to need further research

---

## Stack Summary

| Need | Tool | Cost | Why |
|------|------|------|-----|
| CRM + Automation | GHL Unlimited | $297/mo | Hub for everything |
| Voice AI + Chatbot | GHL AI Employee | $97/mo | Covers both, zero integration |
| Cold Email | Instantly.ai | $47/mo | GHL prohibits cold email |
| Lead Enrichment | Apollo.io | $49/mo | 1,000 credits/mo for contact data |
| Social Scheduling | GHL Social Planner | Included | FB, IG, LinkedIn, GMB |
| Transactional Email | Resend | Existing | Already integrated |
| Phone/SMS | Twilio via GHL | ~$20/mo | Already configured |
| Merchandise | Printify | Free + per-item | On-demand, no inventory |
| **Total new monthly** | | **~$490/mo** | |

---

## Open Questions for Roadmap

1. Has Elliott's GHL sub-account been created yet, or starting from scratch?
2. Does Elliott have a personal LinkedIn with established connections?
3. What is the corporate gifting budget per month?
4. UMA contract — what's the cancellation timeline?
5. Is TowBook actively in use for dispatch, or still manual?
6. Has the EIN been verified against IRS records? (A2P 10DLC requirement)

---

*Synthesized from: STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md*
*All files in .planning/research/*

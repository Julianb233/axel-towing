# Domain Pitfalls — Axle Towing Outbound Marketing Automation

**Domain:** B2B outreach automation for private property towing, targeting HOA board presidents and property managers
**Project:** Axle Towing & Impound — v2.0 Outbound Marketing & Automation
**Researched:** 2026-04-09
**Context:** 14 strategies documented, zero deployed. GHL not yet configured. Elliott approval required before any activation.

---

## Critical Pitfalls

Mistakes that cause compliance exposure, account termination, or relationship damage that's hard to recover from.

---

### Pitfall 1: Launching All 14 Strategies Simultaneously

**Severity:** CRITICAL

**What goes wrong:** All 14 strategies are documented and ready. The temptation is to turn everything on at once. This creates unmanageable noise — contacts get emails, SMS, LinkedIn requests, and phone calls simultaneously from overlapping campaigns. Worse, the team cannot attribute what worked, cannot fix what failed, and cannot control frequency across channels.

**Why it happens:** Documentation completeness feels like deployment readiness. It is not.

**Consequences:**
- GHL workflows that haven't been tested fire simultaneously on the same contact
- Property managers get 3+ touchpoints in 24 hours and mark everything as spam
- Email domain reputation tanks before it's established (new domain problem — see Pitfall 3)
- No baseline to measure: did LinkedIn drive the meeting or did the email sequence?
- If something breaks, it's impossible to know which workflow to fix

**Prevention:**
- Phase 1: GHL setup + email sequences only (referral partner campaigns)
- Phase 2: Add LinkedIn outreach (manual, 20-30/week) after email is proven
- Phase 3: Facebook groups (separate from email list, relationship-first)
- Phase 4: SMS + phone system (requires A2P registration, see Pitfall 8)
- Phase 5: Chatbot, social media content cadence
- Never run more than 2 active channel experiments at the same time on the same contact segment

**Warning signs:**
- Someone says "let's just turn it all on and see what happens"
- GHL has multiple workflows active that touch the same contact without frequency caps
- No "maximum emails per contact per day" limit configured in GHL

**Phase mapping:** This is Phase 1 decision — the roadmap must enforce sequencing.

---

### Pitfall 2: Activating Any Outreach Without Elliott's Template Approval

**Severity:** CRITICAL

**What goes wrong:** The contract meeting (March 17, 2026) explicitly established that Elliott must approve all outreach templates before activation. Bypassing this — even to "test" — puts Elliott's business relationships at risk. A bad first impression to a property manager Elliott knows personally is not recoverable.

**Why it happens:** Agents optimize for speed of deployment. Template approval feels like a bureaucratic step.

**Consequences:**
- Elliott's personal brand damaged if a template sounds wrong or promises something he can't deliver
- Legal exposure if a template makes claims about ARS compliance that Elliott's attorneys haven't reviewed
- Contracts explicitly require this gate — bypassing it is a contract violation
- Property management community is small and referrals-driven; bad first impressions travel

**Prevention:**
- Build an approval workflow BEFORE any template is production-ready
- Approval gate = explicit written "yes" from Elliott via email or text, not verbal
- Create a shared Google Doc or GHL template library with "Draft / Approved / Active" status
- Never mark a template "Active" without documented approval

**Warning signs:**
- "I'll just test it on a small segment"
- "Elliott said it sounds fine verbally, I'll get written approval later"
- Any template in GHL with status "Active" that doesn't have an approval date in the notes

**Phase mapping:** Approval process must be designed in Phase 1, before any GHL campaign is built.

---

### Pitfall 3: Sending High-Volume Email from a New or Cold Domain

**Severity:** CRITICAL

**What goes wrong:** axletowing.com email infrastructure is new. Google Workspace is configured, but the sending domain has no established reputation with Gmail, Outlook, or Yahoo. Sending 50+ emails/day from a cold domain looks identical to a spam operation. Inbox placement drops to 55% vs 85% for mature domains.

**Why it happens:** GHL can start sending the moment workflows are built. There's no warning that the domain hasn't been warmed.

**Consequences:**
- Emails land in spam for the first 100+ recipients — permanently damaging their impression
- Domain gets blocklisted early (hard to recover, weeks of deliverability damage)
- GHL campaigns show "sent" but property managers never see them
- Reply rates are near-zero, which GHL may interpret as campaign failure when it's actually a technical failure

**Specific risk for Axle:** The domain is already being used for transactional email (contact form → Resend API). Adding GHL outreach on top of an unwarmed domain accelerates spam classification.

**Prevention:**
- Configure SPF, DKIM, and DMARC records in Google Workspace BEFORE any GHL campaigns launch — this requires Mike (DNS admin) coordination upfront
- Use a dedicated sending subdomain for GHL outreach (e.g., outreach@mail.axletowing.com) to protect the primary domain
- Warm the sending domain: start at 5-10 emails/day, increase by 10-15% daily over 4-6 weeks
- In GHL: set "Maximum Emails per Contact per Day" to 2-3 (Settings > Email Settings)
- Verify email lists before import — bounce rate above 5% will tank domain reputation

**Warning signs:**
- Open rates below 15% in first campaigns (industry benchmark for property managers is 25-35%)
- High bounce rate (above 2%) in GHL reports
- DNS records not all showing "pass" in mail-tester.com check

**Phase mapping:** DNS setup and domain warmup is a pre-launch dependency for Phase 1. Mike coordination is a blocker that must be resolved in week 1.

---

### Pitfall 4: SMS Without A2P 10DLC Registration

**Severity:** CRITICAL

**What goes wrong:** GHL allows you to set up SMS workflows immediately. What GHL does NOT prominently warn you about is that all US 10DLC (standard US phone number) SMS traffic requires A2P brand and campaign registration with carriers before SMS is delivered reliably. Without registration, carriers block or throttle SMS silently — messages appear "sent" in GHL but never arrive.

**Why it happens:** The registration process is buried in GHL settings. Campaigns are built before anyone checks carrier requirements.

**Consequences:**
- SMS messages silently dropped by carriers (T-Mobile, AT&T, Verizon)
- TCPA exposure: even B2B SMS to mobile numbers requires documented consent — fines are $500-$1,500 per violation
- A2P registration for GHL (Standard Brand) requires EIN match with IRS records — a mistake here causes multi-week delays
- If opt-out rate exceeds 3% in a campaign, messaging is suspended for 24 hours automatically

**Prevention:**
- Register A2P Standard Brand in GHL BEFORE building any SMS workflows
- Required: Axle's EIN (must exactly match IRS records), business legal name, business type
- Budget: ~$24.50 one-time + ~$11/month per campaign (carrier pass-through fees)
- Build opt-out into every SMS: "Reply STOP to unsubscribe" — GHL handles this automatically if configured
- For B2B SMS to HOA/property manager mobile numbers: confirm they provided mobile number in a business context (not consumer TCPA territory) — when in doubt, get written consent
- TCPA one-to-one consent rule takes full effect April 11, 2026 — document consent source for every SMS contact

**Warning signs:**
- SMS "sent" in GHL but no delivery confirmation
- Any SMS workflow built before A2P registration is complete
- Contacts added to SMS sequences without documented consent method

**Phase mapping:** A2P registration is a Phase 1 prerequisite. SMS campaigns cannot launch until registration is confirmed (typically 3-7 business days after submission).

---

## High-Severity Pitfalls

Mistakes that cause measurable damage to reputation or pipeline — not catastrophic, but significant.

---

### Pitfall 5: LinkedIn Automation Account Restriction

**Severity:** HIGH

**What goes wrong:** Using LinkedIn automation tools (or even manual-but-mechanical patterns) to send connection requests and messages triggers LinkedIn's bot detection. Accounts that violate patterns can lose messaging privileges (14-30 days), connection request ability (7-14 days), or in severe cases face permanent suspension.

**LinkedIn's current enforcement (2026):** Behavioral analysis, not just tool detection. Identical message timing, no natural variation in activity, sending requests faster than humanly possible, low acceptance rates — all trigger flags.

**Axle-specific risk:** HOA board members are rarely on LinkedIn professionally. Many profiles listed under "HOA board member" or "community manager" have low activity, meaning connection request acceptance rates will be lower than average. Low acceptance rate (under 20%) is a red flag for LinkedIn's algorithms.

**Prevention:**
- Keep to 20-30 connection requests per week (well under the ~100/week safe limit)
- Never use automation tools (Dux-Soup, PhantomBuster, etc.) on the primary Elliott/Ryan LinkedIn account — use only if on a dedicated outreach account under Sales Navigator
- Wait 3-5 days after connection acceptance before sending a DM (already in the templates — enforce this)
- Personalize every connection request (templates are written correctly — follow them)
- Vary timing: don't send 20 requests at 9:00 AM on Monday every week
- Do NOT send the same pitch message to multiple connections within the same day

**Warning signs:**
- LinkedIn shows "you've reached your weekly invitation limit" warning
- Any message that says "we've restricted your account temporarily"
- Multiple connection requests sent in rapid succession (under 5 minutes apart)

**Phase mapping:** Phase 2. Start LinkedIn only after GHL email is proven and warmed. Manual outreach only — no automation tools in Phase 2.

---

### Pitfall 6: Facebook Group Bans for Self-Promotion

**Severity:** HIGH

**What goes wrong:** Most HOA Facebook groups have explicit rules against business advertising and self-promotion. Joining a group and immediately posting about Axle Towing, or even answering questions with a pitch, gets the account removed and banned from the group — permanently. In a small, referral-driven community, this creates a negative reputation that spreads.

**Axle-specific risk:** The strategy correctly identifies Facebook groups as high-value (HOA boards are more active there than LinkedIn). But the approach requires patience and community participation before any business mention — not just in strategy, but in execution discipline. The temptation to shortcut this is high when pipeline pressure exists.

**Prevention:**
- Lurk and observe for 2+ weeks before posting in any group
- First 4-6 posts must be 100% helpful, no business mention (answer parking law questions, share ARS §28-1104 resources, comment supportively)
- Only mention Axle when directly asked for a towing referral or recommendation
- Never post the same content to multiple groups on the same day — this pattern is detected by Facebook and flagged as spam
- Never join more than 3-4 groups per week (Facebook detects mass group joining as coordinated inauthentic behavior)
- Use Elliott's personal Facebook profile, not a new business account — established accounts are trusted; new accounts get auto-flagged

**Warning signs:**
- Facebook shows a warning about "posting the same content to multiple groups"
- Group admin removes a post
- Any message visible only to the poster (shadow removal) — check by logging out and viewing the group

**Phase mapping:** Phase 3. Begin after email + LinkedIn are operational. Patience-first execution — this is a 60-90 day relationship channel, not a quick pipeline source.

---

### Pitfall 7: AI Phone System Handoff Failures on Emergency Calls

**Severity:** HIGH

**What goes wrong:** The AI voice system is designed to handle inbound calls including towing emergencies. The critical failure point is the handoff: when a distressed caller needs an immediate human dispatcher, a failed or delayed transfer = lost business and a potentially dangerous situation (stranded motorist, blocked emergency access, etc.).

**IVR-specific failure patterns:**
- CRM/API rate limiting making the bot seem unresponsive mid-call (backend too slow for live voice)
- Warm transfer fails due to misconfigured numbers or carrier routing
- AI misclassifies call intent (caller says "my car is blocked" and gets routed to billing instead of dispatch)
- System doesn't recognize strong accents or emotional speech ("my baby is in the car — get here now")

**Axle-specific risk:** UMA is the existing system. If the AI replacement drops a single emergency call during transition, it will be difficult to rebuild Elliott's confidence in the system. The transition must be seamless.

**Prevention:**
- Never go straight to full replacement — run AI system in parallel for 2+ weeks before switching (shadow mode)
- Design explicit "magic words" for immediate dispatcher transfer: "emergency," "911," "urgent," "need help now," "baby," "blocked" — these bypass all IVR routing
- Warm transfer: always confirm dispatcher is available BEFORE disconnecting the AI leg
- Set hard timeout: if AI has not resolved a call in 90 seconds, automatically offer human transfer
- Test with real edge cases: fast speakers, emotional callers, background noise
- Keep UMA operational as fallback for minimum 30 days after AI launch

**Warning signs:**
- Any test call where the handoff to dispatcher takes more than 15 seconds
- AI responding to "I need help NOW" with a menu prompt
- Transfer failure rate above 2% in testing

**Phase mapping:** Phase 4. Phone system transition is its own standalone phase with a staged cutover plan.

---

### Pitfall 8: GHL Workflow Conflicts and Contact Flooding

**Severity:** HIGH

**What goes wrong:** GHL workflows are built independently by different agents or at different times. Without coordination, the same contact can simultaneously be enrolled in: a cold outreach sequence, a referral partner sequence, a nurture sequence, AND a re-engagement sequence. GHL will execute all of them. The contact receives 5+ emails in one day.

**Why it happens:** GHL does not prevent duplicate enrollment unless explicitly configured. Each workflow is built in isolation.

**Prevention:**
- Set "Maximum Emails per Contact per Day" in GHL Settings → Email Settings (recommended: 2 maximum)
- Use GHL's "Remove from Workflow" action as a standard step: when a contact enters one sequence, automatically remove them from all others
- Tag contacts with their current sequence status (e.g., "in-cold-outreach-Q2") and use tag conditions as guards at the start of every workflow
- Document every workflow with: trigger, audience, exit conditions, and which other workflows it conflicts with — before building
- Build workflows in GHL's test mode and verify with a test contact before activating

**Warning signs:**
- Any GHL contact with 3+ active workflow enrollments
- Email reports showing a contact received more than 2 emails in one day
- No tags visible on contacts in the pipeline

**Phase mapping:** Phase 1 (GHL configuration). The workflow conflict prevention system must be built before any sequences are activated.

---

### Pitfall 9: Lead List Quality — Stale and Unverified Data

**Severity:** HIGH

**What goes wrong:** B2B contact data decays at 22-30% annually. Property manager contacts scraped from Arizona SOS, Google Maps, and LinkedIn will have a significant portion of outdated emails, wrong phone numbers, and people who no longer manage the properties in question. High bounce rates from stale data destroy domain reputation within weeks.

**Axle-specific risk:** The scraping strategy targets AZ SOS registered agent data, Google Maps reviews, and LinkedIn profiles. AZ SOS data is particularly prone to stale contacts — registered agents often change without immediate SOS updates. Google Maps review profiles don't always include direct contact info.

**Prevention:**
- Verify every email address before import into GHL — use tools like NeverBounce or ZeroBounce (bulk verification at ~$0.003/email)
- Target <2% bounce rate in GHL — set this as a hard limit before scaling any campaign
- Refresh scraped lists every 90 days — property managers turn over frequently in Phoenix market
- Segment by source and scrape date — older lists get more aggressive pre-send verification
- Manual spot-check 10% of any new list before importing

**Warning signs:**
- Bounce rate above 2% in GHL email reports
- High "undeliverable" rate on first send of any new segment
- Property manager names that don't match LinkedIn when spot-checked

**Phase mapping:** Phase 1 (before any email campaigns launch). List quality gate is a prerequisite.

---

## Moderate Pitfalls

Mistakes that cause delays or technical debt but are recoverable.

---

### Pitfall 10: Nurture Sequence Cadence Too Aggressive

**What goes wrong:** The documented 21-day nurture sequence includes multi-channel touches across email, SMS, and potentially phone. If all channels run at full speed simultaneously, property managers — who have full inboxes and are not actively looking for towing vendors — will unsubscribe, block, or complain. B2B unsubscribe rate above 0.5% signals frequency fatigue.

**Prevention:**
- Apply the 3:1 rule: three value-providing touches before any ask
- Spacing: Day 0, Day 3, Day 7, Day 14, Day 21 — increasing gaps. The current sequence needs review to ensure the gaps grow, not shrink
- Never email AND SMS the same day unless triggered by the contact's explicit action
- First ask (call booking) should not appear before email 4 in the cold sequence
- Build in "send me less often" preference capture in GHL — contacts who click it get moved to a 30-day cadence automatically

**Warning signs:**
- Unsubscribe rate above 0.5% per send
- No replies after 5 emails (sequence may be too mechanical — needs content review)
- Same contact receiving email + SMS + LinkedIn message in a 48-hour window

**Phase mapping:** Phase 1 sequence design. Review cadence before activation.

---

### Pitfall 11: CAN-SPAM Non-Compliance on Cold Email

**What goes wrong:** CAN-SPAM applies to all commercial email in the US, including B2B. Violations are $51,744 per email. Required elements: accurate From/Reply-To headers, honest subject lines (no deceptive subjects like "Re: our meeting"), physical mailing address in every email, working unsubscribe mechanism honored within 10 business days.

**Axle-specific risk:** The email templates in NURTURE-CAMPAIGN-SEQUENCES.md are well-written but need CAN-SPAM compliance elements added: physical address footer (8155 W Buckeye Rd, Phoenix, AZ) and unsubscribe link. GHL adds unsubscribe links automatically when configured correctly — verify this is on.

**Prevention:**
- Enable GHL's built-in unsubscribe footer on every outbound campaign (Settings → Email Settings)
- Add physical address to every email template footer
- Audit subject lines: "Unauthorized parking at [Property Name]?" is fine. Anything implying prior relationship when there is none is not.
- Process unsubscribes within 10 business days (GHL handles this automatically when configured)

**Warning signs:**
- Any GHL email template without a physical address in the footer
- Unsubscribe link missing or broken in test send
- Subject lines that imply a pre-existing relationship ("Following up on our last call") when no call happened

**Phase mapping:** Phase 1 template review. Fix before any activation.

---

### Pitfall 12: DNS Dependency on Mike Creating a Launch Blocker

**What goes wrong:** Mike is the DNS admin and is slow to respond. Proper email authentication (SPF, DKIM, DMARC for sending subdomain, MX records) requires DNS changes. Every week of delay in DNS setup is a week the domain warmup cannot start — which cascades to delay every email campaign.

**Prevention:**
- Identify ALL required DNS records before contacting Mike — send one complete, copy-paste-ready record set, not multiple requests over time
- Priority DNS records needed upfront: SPF record for GHL sending, DKIM keys from GHL, DMARC policy record, optional: dedicated sending subdomain (mail.axletowing.com) CNAME
- If Mike is unresponsive after 72 hours, escalate to Brian (IT coordination) who is faster
- Document the exact DNS records needed in the DNS-RECORDS-TEMPLATE.md file that already exists — verify it's complete before sending to Mike

**Warning signs:**
- DNS request sent but no confirmation after 72 hours
- mail-tester.com showing SPF or DKIM failures on the sending domain
- GHL showing "email not authenticated" warning in campaign settings

**Phase mapping:** Phase 1, Week 1. This is the longest-lead-time item and must be initiated first.

---

### Pitfall 13: Social Media Content Cadence Miscalibrated for Audience

**What goes wrong:** The strategy calls for 3x/week LinkedIn, 3x/week Facebook, and 3-4x/week Instagram. For a B2B audience of property managers:
- LinkedIn 3x/week is appropriate but only if content is professional/educational — not promotional
- Facebook HOA groups require relationship posts, not branded content pushes
- Instagram 3-4x/week is fine for brand awareness but property managers rarely convert from Instagram

**Specific failure mode:** Posting "Axle Towing removed this illegally parked truck today!" six times a week looks desperate and alienates the professional audience who prefers educational value.

**Prevention:**
- LinkedIn content mix: 70% educational (Arizona towing law, parking enforcement tips), 20% social proof (case studies, community wins), 10% direct CTA
- Never post identical content across all platforms on the same day
- Facebook groups: zero promotional posts — only helpful community participation
- Instagram: use for brand personality and visual social proof, not for B2B conversion — don't expect pipeline from it
- Evaluate cadence at 30 days: if LinkedIn engagement is low, reduce to 2x/week and increase quality

**Warning signs:**
- More than 2 promotional posts per week on any professional channel
- Identical content copy-pasted across LinkedIn and Facebook on the same day
- Zero engagement (likes, comments) after 4+ weeks of consistent posting

**Phase mapping:** Phase 3 (social media content calendar). Build the content mix framework before the calendar is populated.

---

### Pitfall 14: Chatbot Promising What It Cannot Deliver

**What goes wrong:** Property managers are professional skeptics with low tolerance for wasted time. A website chatbot that fails to answer "Do you service Avondale?" or "What's your response time SLA?" and falls back to "I'll have someone contact you" provides worse UX than no chatbot at all. Worse: if the chatbot gives wrong information (incorrect service areas, wrong hours, incorrect legal claims), it creates liability.

**Axle-specific risk:** The chatbot must know: all 40+ service cities, current pricing policy (free to property owners), response time expectations (60 min typical), emergency dispatch number, impound lot hours and address, and ARS-related compliance claims. This is a substantial knowledge base that must be tested before deployment.

**Prevention:**
- Build a comprehensive FAQ/knowledge base BEFORE deploying the chatbot
- Test 50+ real property manager questions before going live
- Build graceful escalation: "I'm not able to answer that — let me connect you with Elliott directly" with immediate routing to phone or calendar
- Never let the chatbot make legal or compliance claims ("we handle all the legal paperwork") without exact language reviewed by Elliott
- Deploy in "soft launch" to only website visitors who click a specific chat button — not auto-popup — until knowledge base is proven

**Warning signs:**
- Chatbot fallback rate above 30% in first week
- Any incorrect answer about service cities or hours in testing
- Any legal/compliance claim in chatbot responses not approved by Elliott

**Phase mapping:** Phase 5. Chatbot is dependent on GHL, email, and phone being established first. Deploy last.

---

## Minor Pitfalls

Recoverable mistakes that cause friction or lost time.

---

### Pitfall 15: Corporate Gifting Without Property Manager Address Collection Process

**What goes wrong:** Printify merchandise requires shipping addresses. There is no current mechanism to collect property manager addresses without it feeling awkward or like a sales trick. Sending unsolicited gifts to addresses scraped from public records is both compliance-risky and off-putting.

**Prevention:** Only use corporate gifting for contacts who have already expressed interest or had a meeting. Gate the gift by earning it — "Thanks for taking our call, we'd love to send you a token of appreciation — where should we mail it?" Never send cold gifts to cold contacts.

**Phase mapping:** Phase 5+. Do not deploy until a warm lead pipeline exists.

---

### Pitfall 16: Hiring Pipeline Calendly + GHL Integration Misconfiguration

**What goes wrong:** If Calendly and GHL are not properly integrated, job applicants who book interviews may not appear in GHL, resulting in missed interview slots and applicants who feel ignored.

**Prevention:** Test the integration end-to-end with a real test booking before the form goes live. Verify GHL contact is created, tag is applied, and confirmation email fires correctly.

**Phase mapping:** Phase 2. Lower priority than customer acquisition pipelines but test before launch.

---

## Phase-Specific Warnings Summary

| Phase | Topic | Critical Pitfall | Mitigation |
|-------|-------|-----------------|------------|
| Phase 1 | GHL Setup | Workflow conflicts, email flooding | Set max email/day limit first. Tag-based guards on all workflows. |
| Phase 1 | DNS/Email Auth | Mike delay blocks all email campaigns | Prepare complete DNS record set Day 1. Escalation path to Brian. |
| Phase 1 | Domain Warmup | New domain → spam folder | Dedicated sending subdomain + 4-6 week warmup schedule. |
| Phase 1 | A2P Registration | SMS silently dropped by carriers | Register before building SMS workflows. Budget 3-7 days for approval. |
| Phase 1 | Template Approval | Elliott must approve before activation | Approval workflow designed before any template enters GHL. |
| Phase 2 | LinkedIn | Account restriction from bot-like patterns | Manual only, 20-30/week, wait 3-5 days before DM. |
| Phase 2 | Hiring Pipeline | Calendly-GHL integration gap | End-to-end test before launch. |
| Phase 3 | Facebook Groups | Self-promotion ban | 2-week observation period. No business mention in first 4-6 posts. |
| Phase 3 | Content Calendar | Wrong content mix for B2B | 70% educational on LinkedIn. Zero promotional in FB groups. |
| Phase 4 | AI Phone System | Emergency call handoff failure | Shadow mode for 2+ weeks. Magic words for immediate transfer. Keep UMA live for 30 days. |
| Phase 5 | Chatbot | Incorrect info on service areas or legal claims | 50-question test suite before launch. Graceful escalation to human. |
| Phase 5+ | Corporate Gifting | Cold gift awkwardness and address collection | Warm leads only. Never send to cold contacts. |

---

## Compliance Risk Register

| Risk | Regulation | Penalty | Status |
|------|-----------|---------|--------|
| Cold email without CAN-SPAM elements | CAN-SPAM Act | $51,744/email | Address in Phase 1 templates |
| SMS without A2P registration | Carrier policy | Silent message blocking | Register before SMS build |
| SMS without TCPA consent documentation | TCPA | $500-$1,500/violation | Consent capture required before any SMS send |
| TCPA one-to-one consent rule | TCPA (April 11, 2026) | Class action exposure | Implement consent documentation before rule effective date |
| LinkedIn ToS violation | LinkedIn User Agreement | Account suspension/ban | Manual outreach only, stay under 30/week |
| ARS §28-1104 misrepresentation in marketing | Arizona towing law | State regulatory action | All compliance claims reviewed by Elliott |
| Facebook self-promotion in HOA groups | Facebook Community Standards | Group ban, account flag | Relationship-first, no promotional posts |

---

## Sources

- CAN-SPAM compliance: [IInfotanks — Is Cold Email Legal 2025](https://www.iinfotanks.com/is-cold-email-legal-in-2025-b2b-compliance-risk-guide/)
- Email deliverability / domain warmup: [Mailpool — Email Warm-up Best Practices 2025](https://www.mailpool.ai/blog/email-warm-up-best-practices-complete-2025-guide)
- LinkedIn limits and restrictions: [Salesflow — Safe LinkedIn Automation 2025](https://salesflow.io/blog/the-ultimate-guide-to-safe-linkedin-automation-in-2025); [LinkedIn Official Help — Automated Activity](https://www.linkedin.com/help/linkedin/answer/a1340567)
- GoHighLevel workflow mistakes: [HighLevel Virtual — Common GHL Mistakes](https://highlevelvirtual.com/post/common-go-high-level-mistakes-and-how-to-fix-them)
- GHL A2P 10DLC registration: [HighLevel Support — A2P Standard Brand Registration](https://help.gohighlevel.com/support/solutions/articles/48001225526-a2p-standard-brand-registration-for-10dlc)
- TCPA compliance and 2026 one-to-one consent: [ActiveProspect — TCPA Text Messages](https://activeprospect.com/blog/tcpa-text-messages/)
- B2B contact data decay: [SmartLead — Web Scraping for Lead Generation](https://www.smartlead.ai/blog/web-scraping-for-lead-generation)
- Nurture sequence timing: [Unreal Digital Group — B2B Nurture Email Cadence](https://www.unrealdigitalgroup.com/blog/whats-the-right-cadence-for-b2b-nurture-emails-and-sequences)
- AI voice agent handoff failures: [LiveKit — Handoff Pattern for Voice Agents](https://livekit.com/blog/handoff-pattern-voice-agents); [beConversive — Common Voice AI Challenges](https://www.beconversive.com/blog/voice-ai-challenges)
- Chatbot UX in property management: [IrisCX — Chatbots in Property Management Liability](https://www.iriscx.com/chatbots-in-property-management-liability-risk-and-responsible-deployment/)
- Phased rollout rationale: [Mixpanel — How to Plan B2B Product Rollouts](https://mixpanel.com/blog/how-to-plan-b2b-product-rollouts-metrics-analytics/)
- Arizona private property towing law: [LegalClarity — Arizona Private Property Towing Laws](https://legalclarity.org/arizona-private-property-towing-laws-and-guidelines/)

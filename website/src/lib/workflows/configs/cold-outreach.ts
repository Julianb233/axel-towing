import type { WorkflowConfig } from "../types";

export const coldOutreach: WorkflowConfig = {
  id: "cold-outreach",
  name: "Cold Outreach Automation",
  description: "21-day multi-channel sequence for new cold prospects. Email → SMS → Email → Voicemail → Email → SMS → completion tag.",
  trigger: {
    type: "tag_added",
    tag: "seq-cold-outreach",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "cold-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Unauthorized parking at {{contact.company_name}}?",
        body: `Hi {{contact.first_name}},

I'm reaching out because we work with property managers and HOA boards across {{contact.city}} to handle unauthorized parking and vehicle removal — fast, clean, and fully compliant with Arizona law.

I'm Elliott with Axle Towing & Impound. We service 38+ cities across the Phoenix metro, and we're one of the few operators with 30+ years of combined team experience and 24/7/365 dispatch.

What we offer property accounts:

- Free towing enforcement — no cost to the property
- Response typically within 60 minutes
- Compliant with ARS Chapter 28 — we handle the paperwork
- One point of contact — not a call center, a dedicated rep

Would you be open to a 15-minute call this week to see if it's a fit?

Book a Call: https://axletowing.com/contact

Best,
Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "cold-sms-1",
      action: "send_sms",
      delayDays: 2,
      sms: {
        body: "Hi {{contact.first_name}}, this is Elliott from Axle Towing. Did you get my email about unauthorized parking enforcement for {{contact.company_name}}? Happy to answer any questions — just reply here.",
      },
    },
    {
      id: "cold-email-2",
      action: "send_email",
      delayDays: 3,
      email: {
        subject: "How Pinnacle Ridge HOA eliminated parking complaints in 30 days",
        body: `Hi {{contact.first_name}},

I wanted to share a quick story.

A 200-unit HOA in Scottsdale was dealing with chronic unauthorized parking — residents were calling the board at all hours, tensions were high, and the previous towing company ghosted them after the first month.

We took over the account. Within 30 days:

- 47 unauthorized vehicles removed (no cost to the HOA)
- Zero resident complaints about the process — every tow was documented and posted
- Board chair stopped getting late-night calls

The key difference: we show up. Every time. And we call you back.

That's not marketing copy — it's just what we do.

I'd love to bring that same consistency to {{contact.company_name}}. Are you available for a quick call this week?

Book a 15-Minute Call: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526`,
      },
    },
    {
      id: "cold-email-3",
      action: "send_email",
      delayDays: 9,
      email: {
        subject: "Last note from me — special offer for new accounts",
        body: `Hi {{contact.first_name}},

I've reached out a couple of times and haven't heard back — totally understand, you're busy.

I wanted to leave you with one thing: we're currently onboarding new property accounts in {{contact.city}} and we have room for 3 more this month.

For accounts that sign this month, we're including:

- Free parking violation notice templates (Arizona-compliant)
- Free signage consultation (we'll tell you exactly what signs you need per ARS requirements)
- Priority response guarantee in writing

If the timing isn't right, no worries — save my number for when your current situation changes.

480-288-5526 | info@axletowing.com

Elliott
Axle Towing & Impound`,
      },
    },
    {
      id: "cold-sms-2",
      action: "send_sms",
      delayDays: 7,
      sms: {
        body: "Hey {{contact.first_name}} — Elliott from Axle Towing. I'll stop reaching out after this. If unauthorized parking ever becomes a headache at {{contact.company_name}}, we're here. 480-288-5526.",
      },
    },
    {
      id: "cold-tag-complete",
      action: "add_tag",
      delayDays: 1,
      tag: "completed-cold-outreach",
    },
  ],
};

import type { WorkflowConfig } from "../types";

export const retentionQuarterly: WorkflowConfig = {
  id: "retention-quarterly",
  name: "Retention — Quarterly Check-In",
  description: "Quarterly check-in for active accounts. 1 email + 1 SMS to maintain relationship and catch any changes to property needs.",
  trigger: {
    type: "tag_added",
    tag: "seq-retention-quarterly",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "retention-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Quarterly check-in — {{contact.company_name}} account update",
        body: `Hi {{contact.first_name}},

Just wanted to touch base on your {{contact.company_name}} account as we wrap up the quarter.

Everything running smoothly on your end? Any changes to your property — new parking rules, construction zones, changes to authorized vehicles — that we should know about?

I'm also here if you ever need backup documentation for a tenant dispute or a board meeting.

Thanks for the continued trust.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "retention-sms-1",
      action: "send_sms",
      delayDays: 1,
      sms: {
        body: "Hi {{contact.first_name}}, just checking in on your account. Everything running smoothly? Any changes I should know about? — Elliott, 480-288-5526.",
      },
    },
  ],
};

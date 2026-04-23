import type { WorkflowConfig } from "../types";

export const renewalReminder: WorkflowConfig = {
  id: "renewal-reminder",
  name: "Renewal Reminder Sequence",
  description: "53-day renewal reminder sequence. Emails at 60, 30, and 7 days before contract renewal date to ensure smooth re-signing.",
  trigger: {
    type: "tag_added",
    tag: "seq-renewal-reminder",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "renewal-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Your Axle Towing agreement renews in 60 days — a note from Elliott",
        body: `Hi {{contact.first_name}},

Your service agreement for {{contact.company_name}} renews on {{contact.contract_renewal_date}}. I wanted to give you plenty of heads-up and the chance to discuss any changes before then.

A few things I'd like to cover when we reconnect:

- Review of this year's tow activity
- Any changes to your property or enforcement needs
- Updated rate schedule for the coming year
- Adding any new properties to your account

Can we find 20 minutes in the next few weeks?

Schedule Renewal Review: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "renewal-email-2",
      action: "send_email",
      delayDays: 30,
      email: {
        subject: "30 days out — {{contact.company_name}} renewal",
        body: `Hi {{contact.first_name}},

Quick reminder that your service agreement renews in 30 days.

I want to make this renewal easy. If nothing has changed and you're happy with service, we can handle the paperwork in under 10 minutes.

If you have questions, concerns, or want to discuss adding properties — I'm a call or text away.

480-288-5526

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "renewal-email-3",
      action: "send_email",
      delayDays: 23,
      email: {
        subject: "Final reminder — agreement renewal next week",
        body: `Hi {{contact.first_name}},

One week out on your service agreement renewal for {{contact.company_name}}.

If I don't hear back, I'll assume we're continuing as-is and will send over the renewal docs for signature. But if anything needs to change, now's the time.

Call or text me directly: 480-288-5526

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};

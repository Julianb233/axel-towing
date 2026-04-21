import type { WorkflowConfig } from "../types";

export const referralThankYou: WorkflowConfig = {
  id: "referral-thank-you",
  name: "Referral Thank-You",
  description: "Immediate thank-you email + SMS when a contact refers someone to Axle Towing. Builds goodwill and encourages repeat referrals.",
  trigger: {
    type: "tag_added",
    tag: "referred-us",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "thankyou-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Thank you, {{contact.first_name}} — a small token of appreciation",
        body: `Hi {{contact.first_name}},

I wanted to reach out personally to say thank you for the referral. Clients like you are the reason this business works. No complicated service structure, no runaround — just mutual trust and people who show up.

I'd like to send you something as a small thank-you. Would a gift card work? Just reply with your mailing address and I'll get it out this week.

Thanks again.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "thankyou-sms-1",
      action: "send_sms",
      delayDays: 0,
      sms: {
        body: "{{contact.first_name}} — thanks for the referral! I really appreciate it. I'm going to take great care of them. Anything I can do for you? — Elliott",
      },
    },
  ],
};

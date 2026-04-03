// Email templates for referral partner outreach
// Elliott reviews and approves these before they go out

export interface EmailTemplate {
  id: string;
  name: string;
  targetCategory: string;
  subject: string;
  body: string;
  approved: boolean;
  lastEdited: string;
}

export const REFERRAL_EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "locksmith-intro",
    name: "Locksmith Introduction",
    targetCategory: "Locksmiths",
    subject: "Partnership Opportunity -- Locksmith + Towing Referral Program",
    body: `Hi [Contact Name],

My name is Elliott with Axle Towing & Impound. We provide private property towing and parking enforcement services across the Phoenix metro area.

I am reaching out because locksmiths like [Business Name] are in a unique position to help property managers solve their parking problems -- and earn referral commissions in the process.

Here is how it works:

When you are on a lock-out call at an apartment complex, office building, or any commercial property, you will often see unauthorized vehicles, fire lane violations, or other parking issues. If you mention Axle Towing to the property manager and they sign up for our free enforcement program, you earn a referral commission.

What makes this different:
- Our enforcement services are completely free for property owners (funded by impound fees from violators)
- You earn $100+ per referral, with commissions increasing for each subsequent referral
- We respond in 30 minutes or less, 24/7/365
- You get a partner portal to track your referrals and commissions

There is zero risk and zero cost to you or your clients. You are simply connecting property managers with a service they already need.

I would love to set up a quick 10-minute call to walk you through the program. Would any time this week work?

Best regards,
Elliott
Axle Towing & Impound
480-288-5526
axletowing@gmail.com`,
    approved: false,
    lastEdited: "2026-03-19",
  },
  {
    id: "property-manager-intro",
    name: "Property Manager Introduction",
    targetCategory: "Property Managers",
    subject: "Free Parking Enforcement for Your Properties",
    body: `Hi [Contact Name],

I am Elliott with Axle Towing & Impound. We specialize in private property parking enforcement and impound services for property managers across the Phoenix metro area.

I wanted to introduce our zero-cost enforcement program to [Company Name]. Here is what we offer:

- Free parking enforcement and private property impounds (no cost to you or your property owners)
- ARS-compliant signage provided and installed at no charge
- Digital management portal for real-time patrol reports and authorized vehicle management
- 30-minute response guarantee, 24/7/365 dispatch
- Dedicated account manager for portfolios of 5+ properties

We currently serve apartment complexes, office buildings, retail centers, and mixed-use developments across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, and the surrounding metro.

Our program is completely funded through impound fees collected from violators, which means your property owners never pay a dime. We handle all signage, compliance, patrols, and tenant disputes.

I would like to schedule a quick call to discuss how we can help [Company Name] eliminate parking headaches across your portfolio. Would 15 minutes this week work?

Best regards,
Elliott
Axle Towing & Impound
480-288-5526
axletowing@gmail.com`,
    approved: false,
    lastEdited: "2026-03-19",
  },
  {
    id: "hoa-board-intro",
    name: "HOA Board Introduction",
    targetCategory: "HOA Boards",
    subject: "Parking Solution for [HOA Name] -- Zero Cost",
    body: `Hi [Contact Name],

I am Elliott with Axle Towing & Impound, and I am reaching out to [HOA Name] about our HOA parking enforcement program.

I understand that parking violations are one of the most common complaints at HOA board meetings -- unauthorized vehicles, commercial vehicles parked overnight, guest parking abuse, and fire lane violations. Our program eliminates these problems at zero cost to your HOA.

Here is what we provide:

- Board-approved signage that meets your community's aesthetic standards, installed at no cost
- Customized enforcement rules tailored to your CC&Rs
- Regular patrol schedules (frequency set by your board)
- Transparent monthly reports for every board meeting
- Resident communication templates and FAQ sheets
- Full ARS compliance and liability protection

The entire program is funded through impound fees from violators. Your HOA pays nothing -- no setup fees, no monthly fees, no per-tow charges.

Most HOA boards approve our program in a single meeting. We provide a complete board presentation package that includes program details, sample signage options, and enforcement policies for review.

I would be happy to send over the board presentation package or schedule a brief call to answer any questions. What works best for you?

Best regards,
Elliott
Axle Towing & Impound
480-288-5526
axletowing@gmail.com`,
    approved: false,
    lastEdited: "2026-03-19",
  },
  {
    id: "follow-up-generic",
    name: "Follow-Up (Generic)",
    targetCategory: "All Partner Types",
    subject: "Following up -- Axle Towing Partnership",
    body: `Hi [Contact Name],

I wanted to follow up on my previous email about a partnership between [Business Name] and Axle Towing & Impound.

We offer a free private property towing and parking enforcement program across the Phoenix metro area, and I think there is a strong opportunity for us to work together.

If you have had a chance to consider the partnership, I would love to set up a quick call this week. If not, no worries -- I am happy to resend the details or answer any questions over email.

Either way, I appreciate your time and look forward to hearing from you.

Best regards,
Elliott
Axle Towing & Impound
480-288-5526
axletowing@gmail.com`,
    approved: false,
    lastEdited: "2026-03-19",
  },
];

export const TEMPLATE_STORAGE_KEY = "axle-referral-templates";

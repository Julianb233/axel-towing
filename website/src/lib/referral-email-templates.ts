/**
 * Referral Partner Email Template Library for Axle Towing
 *
 * 6 referral partner types x 3 emails each = 18 templates total.
 * Each sequence: Day 0 (intro), Day 4 (follow-up), Day 10 (final).
 *
 * Partner types: locksmith, uber, parking-permit, mechanic, mover, painter
 *
 * All templates return branded HTML strings with:
 * - Dark navy header (#1B2A3F) with Axle Towing branding
 * - Clean white body with blue (#1E6BB8) CTAs
 * - Footer: company addresses, phone, unsubscribe link
 * - Mobile responsive HTML
 * - GHL merge fields: {{contact.first_name}}, {{contact.company_name}}, {{contact.city}}
 */

import { COMPANY } from "./constants";

// ─── Types ──────────────────────────────────────────────────────────────────

export type ReferralPartnerType =
  | "locksmith"
  | "uber"
  | "parking-permit"
  | "mechanic"
  | "mover"
  | "painter";

export interface ReferralEmailTemplate {
  partnerType: ReferralPartnerType;
  dayOffset: number;
  subject: string;
  triggerTag: string;
  getHtml: () => string;
}

// ─── Shared Layout ──────────────────────────────────────────────────────────

function referralEmailWrapper(content: string, preheader?: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  ${preheader ? `<span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</span>` : ""}
  <style>
    body { margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
    .email-container { max-width: 480px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1B2A3F 0%, #243752 100%); padding: 28px 32px; text-align: center; }
    .header-text { color: #ffffff; font-size: 20px; font-weight: 700; margin-top: 12px; letter-spacing: -0.3px; }
    .header-sub { color: #94a3b8; font-size: 12px; margin-top: 4px; letter-spacing: 0.5px; text-transform: uppercase; }
    .body { padding: 32px; }
    .body p { font-size: 15px; color: #4b5563; line-height: 1.65; margin: 0 0 16px; }
    .body ul { padding-left: 20px; margin: 0 0 16px; }
    .body li { font-size: 15px; color: #4b5563; line-height: 1.65; margin-bottom: 8px; }
    .cta-btn { display: inline-block; background: #1E6BB8; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; margin: 8px 0; }
    .highlight-box { background: #f0f7ff; border-left: 4px solid #1E6BB8; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
    .highlight-box p { margin: 0; font-size: 14px; color: #1B2A3F; }
    .footer { background: #1B2A3F; padding: 24px 32px; text-align: center; }
    .footer p { font-size: 12px; color: #94a3b8; margin: 0 0 8px; line-height: 1.5; }
    .footer a { color: #60a5fa; text-decoration: none; }
    .footer .phone { font-size: 16px; color: #ffffff; font-weight: 600; margin-bottom: 12px; }
    @media only screen and (max-width: 520px) {
      .email-container { width: 100% !important; }
      .body { padding: 24px 20px !important; }
      .header { padding: 20px !important; }
      .footer { padding: 20px !important; }
    }
  </style>
</head>
<body>
  <div style="background-color:#f4f6f9; padding: 20px 0;">
    <div class="email-container" style="max-width:480px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
      <div class="header" style="background:linear-gradient(135deg,#1B2A3F 0%,#243752 100%); padding:28px 32px; text-align:center;">
        <div class="header-text" style="color:#ffffff; font-size:20px; font-weight:700; letter-spacing:-0.3px;">Axle Towing &amp; Impound</div>
        <div class="header-sub" style="color:#94a3b8; font-size:12px; margin-top:4px; letter-spacing:0.5px; text-transform:uppercase;">Professional Towing &amp; Parking Management</div>
      </div>
      <div class="body" style="padding:32px;">
        ${content}
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:${COMPANY.phone.replace(/-/g, "")}" style="color:#ffffff; text-decoration:none;">${COMPANY.phone}</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          ${COMPANY.addresses[0].street}, ${COMPANY.addresses[0].city}, ${COMPANY.addresses[0].state} ${COMPANY.addresses[0].zip}<br/>
          ${COMPANY.addresses[1].street}, ${COMPANY.addresses[1].city}, ${COMPANY.addresses[1].state} ${COMPANY.addresses[1].zip}
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://${COMPANY.domain}" style="color:#60a5fa; text-decoration:none;">${COMPANY.domain}</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:${COMPANY.email}" style="color:#60a5fa; text-decoration:none;">${COMPANY.email}</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// ─── Sign-off ───────────────────────────────────────────────────────────────

const SIGNOFF = `<p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
  Elliott<br/>
  Axle Towing<br/>
  <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a> | <a href="mailto:info@axletowing.com" style="color:#1E6BB8; text-decoration:none;">info@axletowing.com</a><br/>
  <a href="https://axletowing.com" style="color:#1E6BB8; text-decoration:none;">axletowing.com</a>
</p>`;

// ─── GHL merge field helpers ────────────────────────────────────────────────
// GHL uses {{contact.field}} syntax. In JS template literals we must not
// let the engine interpret them, so we use string concatenation or embed
// them as plain strings within the HTML content sections.

const MF_FIRST_NAME = "{{contact.first_name}}";
const MF_COMPANY_NAME = "{{contact.company_name}}";
const MF_CITY = "{{contact.city}}";

// ─── Locksmith Partner Sequence ─────────────────────────────────────────────

const locksmithSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "locksmith",
    dayOffset: 0,
    subject: "Referral partnership between our companies?",
    triggerTag: "referral-locksmith",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. I'm reaching out because locksmiths and towing companies run into each other's customers all the time. You get a call for a lockout and find a car that also needs a tow. We show up for a tow and the owner needs a locksmith. It happens constantly.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          I'd like to propose a simple mutual referral arrangement with ${MF_COMPANY_NAME}. You send tow jobs our way when they come up, and we'll send locksmith needs to you. No contracts, no fees, just two local businesses helping each other out and keeping our customers happy.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We handle private property towing, impounds, and vehicle relocations across the entire Phoenix metro area. Fast response, professional service, fully licensed and insured.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Would you be open to a quick chat about how this could work for both of us?
        </p>
        ${SIGNOFF}`,
        "Mutual referral opportunity for locksmiths and towing",
      ),
  },
  {
    partnerType: "locksmith",
    dayOffset: 4,
    subject: "Re: Referral partnership between our companies?",
    triggerTag: "referral-locksmith",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Just following up on my note about a referral partnership between Axle Towing and ${MF_COMPANY_NAME}.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's what our referral partners say works best:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Keep each other's business cards in the trucks so techs can hand them out on-site</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Make quick introductions when you're both working the same property or customer</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Property managers love a one-call solution, so having a towing partner to recommend goes a long way</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We serve the entire Phoenix metro with a 30-minute average response time. If your customers ever need a tow, we make you look good by showing up fast and treating them right.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Let me know if you'd like to set something up.
        </p>
        ${SIGNOFF}`,
        "What referral partners say works best",
      ),
  },
  {
    partnerType: "locksmith",
    dayOffset: 10,
    subject: "Quick note - towing referrals",
    triggerTag: "referral-locksmith",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last follow-up from me. I know you're busy running ${MF_COMPANY_NAME}, so I'll keep it short.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          If a referral partnership isn't the right fit right now, no worries at all. But keep us in mind if a customer ever needs a tow or if you run into a property with parking problems. We'll always return the favor and send locksmith referrals your way in ${MF_CITY}.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Save our number: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
        ${SIGNOFF}`,
        "Keep us in mind for towing referrals",
      ),
  },
];

// ─── Uber/Lyft Driver Sequence ──────────────────────────────────────────────

const uberSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "uber",
    dayOffset: 0,
    subject: "Earn extra cash reporting parking violations in Phoenix",
    triggerTag: "referral-uber",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. I'm reaching out because rideshare drivers like you see parking problems all day long. You're driving through apartment complexes, commercial lots, and HOA communities constantly, and you notice things most people don't.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's the deal: if you spot a property with a parking issue, such as unauthorized vehicles, no enforcement, cars everywhere, just send us the property name and a contact if you have one. If we end up signing an enforcement contract with that property, you earn a referral bonus.
        </p>
        <div class="highlight-box" style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#1B2A3F;"><strong>Simple as that.</strong> You spot it, you report it, you get paid if it converts.</p>
        </div>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Interested in learning more? Just reply to this email or text me at <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>.
        </p>
        ${SIGNOFF}`,
        "Earn extra cash spotting parking violations while you drive",
      ),
  },
  {
    partnerType: "uber",
    dayOffset: 4,
    subject: "Re: Earn extra cash reporting parking violations",
    triggerTag: "referral-uber",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Following up on my note about earning referral bonuses for parking violation leads. Here's exactly how it works:
        </p>
        <ol style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">You notice a property with parking issues while driving your routes</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Text or email us the property name and address</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We reach out to the property manager and offer our enforcement services</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">If a contract gets signed, you earn a referral bonus</li>
        </ol>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          <strong>What to look for:</strong>
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Apartment complexes with cars parked on curbs or in fire lanes</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">HOAs with no towing signage but obvious parking chaos</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Commercial lots with overnight parking or abandoned vehicles</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          You're already driving past these properties every day. This is easy money on top of what you're already earning.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Text us anytime: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
        ${SIGNOFF}`,
        "How the parking referral bonus works step by step",
      ),
  },
  {
    partnerType: "uber",
    dayOffset: 10,
    subject: "Standing offer - parking referral bonuses",
    triggerTag: "referral-uber",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last note from me on this. No pressure at all. The offer stands whenever you're ready.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          If you ever spot a property with parking problems, just text the property name and address to <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>. We handle everything from there. If it turns into a contract, you get paid.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          That's it. No follow-up calls, no paperwork, no strings. Just easy referral income while you drive.
        </p>
        ${SIGNOFF}`,
        "Standing offer for parking referral bonuses",
      ),
  },
];

// ─── Parking Permit Company Sequence ────────────────────────────────────────

const parkingPermitSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "parking-permit",
    dayOffset: 0,
    subject: "Enforcement partner for your parking permit clients",
    triggerTag: "referral-parking-permit",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. I'm reaching out because ${MF_COMPANY_NAME} and Axle Towing are a natural fit.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Parking permits only work if unauthorized vehicles actually get towed. Without enforcement, permits are just stickers. That's where we come in.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's what I'm proposing: when your clients need towing enforcement to back up their permit system, you refer them to us. We handle the towing, signage, and patrols. We offer preferred pricing for your clients, and you get a partner that makes your permits actually stick.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Would you be open to a quick call to talk through how this could work?
        </p>
        ${SIGNOFF}`,
        "Enforcement partner for parking permit companies",
      ),
  },
  {
    partnerType: "parking-permit",
    dayOffset: 4,
    subject: "Re: Enforcement partner for your parking permit clients",
    triggerTag: "referral-parking-permit",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Following up on my note about partnering with ${MF_COMPANY_NAME} on enforcement. Here's what we bring to the table for your clients:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">24/7 enforcement dispatch, day or night</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">30-minute average response time across the Phoenix metro</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Full Arizona signage compliance (ARS compliant)</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Monthly enforcement reports for property managers</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Zero cost to the property, ever</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Dedicated account manager for each property</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          When your clients know there's real enforcement behind their permits, your product becomes stickier. Properties renew because the system actually works.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Happy to jump on a quick call whenever works for you.
        </p>
        ${SIGNOFF}`,
        "What we bring to your parking permit clients",
      ),
  },
  {
    partnerType: "parking-permit",
    dayOffset: 10,
    subject: "Open door for parking enforcement referrals",
    triggerTag: "referral-parking-permit",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last note from me on this. If any of your clients ever ask about towing enforcement to back up their parking permits, we'd appreciate the referral.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We serve all of the Phoenix metro area and can typically start enforcement within a week of signing. No cost to the property, no hassle for you.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Keep our number handy: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
        ${SIGNOFF}`,
        "Open door for parking enforcement referrals",
      ),
  },
];

// ─── Mechanic Partner Sequence ──────────────────────────────────────────────

const mechanicSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "mechanic",
    dayOffset: 0,
    subject: "Towing partner for your shop?",
    triggerTag: "referral-mechanic",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. Mechanics and towing companies are natural partners, and I think there's a good fit between ${MF_COMPANY_NAME} and Axle Towing.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Your customers break down and need a tow to your shop. Our impound customers pick up their vehicles and need a mechanic. It's a perfect loop.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          I'd like to set up a mutual referral arrangement. We leave your cards at our office and recommend ${MF_COMPANY_NAME} to our impound customers who need mechanical work. You keep our info handy for customers who need a tow. Simple, no contracts, no fees.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Would you be interested in setting this up?
        </p>
        ${SIGNOFF}`,
        "Mutual referral opportunity for mechanics and towing",
      ),
  },
  {
    partnerType: "mechanic",
    dayOffset: 4,
    subject: "Re: Towing partner for your shop?",
    triggerTag: "referral-mechanic",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Following up on my note about a towing partnership with ${MF_COMPANY_NAME}. Here's what we offer your customers:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">30-minute average response time across the Phoenix metro</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Priority dispatch when the referral comes through your shop</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Flatbed and wheel-lift trucks for any vehicle type</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">24/7 availability, nights and weekends included</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Text updates with customer ETA so your team knows when to expect the vehicle</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          On our end, we regularly get impound customers who need mechanical work done before they can drive off. That's business we'd love to send to ${MF_COMPANY_NAME}.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Let me know if you'd like to get this going.
        </p>
        ${SIGNOFF}`,
        "What we offer your customers as a towing partner",
      ),
  },
  {
    partnerType: "mechanic",
    dayOffset: 10,
    subject: "Towing referral - standing offer",
    triggerTag: "referral-mechanic",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last follow-up from me. Just wanted to make sure you have our info in case a customer ever needs a tow to ${MF_COMPANY_NAME} or you need an abandoned vehicle cleared from your lot.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Save our number: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>. We respond in about 30 minutes, 24/7.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          And we'll always send impound customers who need mechanical work back your way in ${MF_CITY}.
        </p>
        ${SIGNOFF}`,
        "Standing offer for towing referrals to your shop",
      ),
  },
];

// ─── Mover Partner Sequence ─────────────────────────────────────────────────

const moverSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "mover",
    dayOffset: 0,
    subject: "Clearing parking for your moving crews",
    triggerTag: "referral-mover",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. I'm reaching out because moving day has one consistent headache: vehicles blocking the loading zone when your crew shows up.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We help moving companies like ${MF_COMPANY_NAME} by coordinating with the property to clear vehicles before your crew arrives. We handle same-day relocations so your team isn't stuck waiting around or working around parked cars.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          On the flip side, if you ever run into a property manager who mentions parking problems at their complex, send them our way. We do free parking enforcement for apartments and HOAs. We'd be happy to refer your moving services right back.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Interested in learning how this works?
        </p>
        ${SIGNOFF}`,
        "Clearing parking for moving crews on move day",
      ),
  },
  {
    partnerType: "mover",
    dayOffset: 4,
    subject: "Re: Clearing parking for your moving crews",
    triggerTag: "referral-mover",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Following up on my note about clearing parking for ${MF_COMPANY_NAME}'s moving crews. Here's how it works:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">You give us the address and date of the move</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We coordinate with the property management on notices and enforcement</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Vehicles get relocated before your crew arrives</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We handle any stragglers that show up during the move</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          On the referral side, when you're talking with property managers and they mention parking problems, just send them our way. We'll always recommend ${MF_COMPANY_NAME} for moving services in return.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Let me know if you'd like to set this up for your next move.
        </p>
        ${SIGNOFF}`,
        "How we clear parking for your moving crews",
      ),
  },
  {
    partnerType: "mover",
    dayOffset: 10,
    subject: "Moving day parking - keep us in mind",
    triggerTag: "referral-mover",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last note from me. If you've ever got a move where parking is going to be a problem, give us a call. We'll coordinate with the property and get vehicles out of the way so your crew can get to work.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          And if a property manager ever asks about parking enforcement for their complex, we'd appreciate the intro.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Save our number: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
        ${SIGNOFF}`,
        "Keep us in mind for moving day parking issues",
      ),
  },
];

// ─── Painter/Contractor Partner Sequence ────────────────────────────────────

const painterSequence: ReferralEmailTemplate[] = [
  {
    partnerType: "painter",
    dayOffset: 0,
    subject: "Vehicle relocation for your job sites",
    triggerTag: "referral-painter",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          My name is Elliott with Axle Towing. I'm reaching out because the biggest delay for painting crews is usually vehicles parked too close to the building. Your team shows up ready to work and half the wall is blocked by someone's car.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We help contractors like ${MF_COMPANY_NAME} by coordinating vehicle notices with the property, showing up before your crew, and relocating vehicles so you can get straight to work. If cars show up mid-job, we handle those too.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Professional, insured, and licensed across the entire Phoenix metro area.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Would it help to have a towing partner on call for your job sites?
        </p>
        ${SIGNOFF}`,
        "Vehicle relocation services for painting contractors",
      ),
  },
  {
    partnerType: "painter",
    dayOffset: 4,
    subject: "Re: Vehicle relocation for your job sites",
    triggerTag: "referral-painter",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Following up on my note about vehicle relocations for ${MF_COMPANY_NAME}'s job sites. Here's what contractors tell us they value most:
        </p>
        <ol style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We show up before your crew so the area is clear when they arrive</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We handle all coordination with the property manager so you don't have to</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We deal with angry vehicle owners, not your guys</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">30-minute response for stragglers that show up mid-job</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">One call saves hours of downtime waiting for cars to move</li>
        </ol>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We've handled jobs where 10-15 vehicles needed to be relocated in a couple of hours so the crew could start on time. It's what we do.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Let me know if you'd like to try us on your next project.
        </p>
        ${SIGNOFF}`,
        "What contractors value most about vehicle relocation",
      ),
  },
  {
    partnerType: "painter",
    dayOffset: 10,
    subject: "Need vehicles moved for a job? Call us",
    triggerTag: "referral-painter",
    getHtml: () =>
      referralEmailWrapper(
        `
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${MF_FIRST_NAME},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Last follow-up from me. Next time cars are in the way of a job for ${MF_COMPANY_NAME}, give us a call. We can usually clear vehicles within an hour so your crew isn't losing daylight.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          And if any of your property clients ever mention needing parking enforcement, we'd welcome the referral. We provide free enforcement for apartments and commercial properties across the Valley.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Save our number: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
        ${SIGNOFF}`,
        "Call us when vehicles are blocking your job site",
      ),
  },
];

// ─── Registry Objects ───────────────────────────────────────────────────────

export const REFERRAL_SEQUENCES: Record<ReferralPartnerType, ReferralEmailTemplate[]> = {
  locksmith: locksmithSequence,
  uber: uberSequence,
  "parking-permit": parkingPermitSequence,
  mechanic: mechanicSequence,
  mover: moverSequence,
  painter: painterSequence,
};

export const REFERRAL_PARTNER_NAMES: Record<ReferralPartnerType, string> = {
  locksmith: "Locksmith",
  uber: "Uber/Lyft Driver",
  "parking-permit": "Parking Permit Company",
  mechanic: "Mechanic / Auto Shop",
  mover: "Moving Company",
  painter: "Painter / Contractor",
};

export const REFERRAL_TRIGGER_TAGS: Record<ReferralPartnerType, string> = {
  locksmith: "referral-locksmith",
  uber: "referral-uber",
  "parking-permit": "referral-parking-permit",
  mechanic: "referral-mechanic",
  mover: "referral-mover",
  painter: "referral-painter",
};

// ─── Helper Functions ───────────────────────────────────────────────────────

/**
 * Get the full email sequence for a referral partner type.
 */
export function getReferralSequence(
  partnerType: ReferralPartnerType,
): ReferralEmailTemplate[] {
  const sequence = REFERRAL_SEQUENCES[partnerType];
  if (!sequence) {
    throw new Error(`Unknown referral partner type: ${partnerType}`);
  }
  return sequence;
}

/**
 * Get a specific template from a sequence by partner type and day offset.
 */
export function getReferralTemplate(
  partnerType: ReferralPartnerType,
  dayOffset: number,
): ReferralEmailTemplate | undefined {
  const sequence = getReferralSequence(partnerType);
  return sequence.find((t) => t.dayOffset === dayOffset);
}

/**
 * Get metadata for all referral templates (useful for GHL workflow setup).
 * Returns an array of objects with partnerType, dayOffset, subject, and triggerTag
 * without generating the full HTML.
 */
export function getAllReferralTemplatesMeta(): Array<{
  partnerType: ReferralPartnerType;
  dayOffset: number;
  subject: string;
  triggerTag: string;
  partnerName: string;
}> {
  const meta: Array<{
    partnerType: ReferralPartnerType;
    dayOffset: number;
    subject: string;
    triggerTag: string;
    partnerName: string;
  }> = [];

  for (const [partnerType, sequence] of Object.entries(REFERRAL_SEQUENCES)) {
    for (const template of sequence) {
      meta.push({
        partnerType: template.partnerType,
        dayOffset: template.dayOffset,
        subject: template.subject,
        triggerTag: template.triggerTag,
        partnerName: REFERRAL_PARTNER_NAMES[partnerType as ReferralPartnerType],
      });
    }
  }

  return meta;
}

/**
 * Email Template Library for Axle Towing Nurture Campaigns
 *
 * All templates return branded HTML strings with:
 * - Dark navy header with Axle Towing branding
 * - Clean white body with blue (#1E6BB8) CTAs
 * - Footer: company address, phone, unsubscribe link
 * - Mobile responsive HTML
 */

import { COMPANY } from "./constants";

// ─── Shared Layout ──────────────────────────────────────────────────────────

function emailWrapper(content: string, preheader?: string): string {
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
    .header img { max-width: 180px; height: auto; }
    .header-text { color: #ffffff; font-size: 20px; font-weight: 700; margin-top: 12px; letter-spacing: -0.3px; }
    .header-sub { color: #94a3b8; font-size: 12px; margin-top: 4px; letter-spacing: 0.5px; text-transform: uppercase; }
    .body { padding: 32px; }
    .body h1 { font-size: 22px; color: #1B2A3F; margin: 0 0 16px; line-height: 1.3; }
    .body h2 { font-size: 18px; color: #1B2A3F; margin: 24px 0 12px; line-height: 1.3; }
    .body p { font-size: 15px; color: #4b5563; line-height: 1.65; margin: 0 0 16px; }
    .body ul { padding-left: 20px; margin: 0 0 16px; }
    .body li { font-size: 15px; color: #4b5563; line-height: 1.65; margin-bottom: 8px; }
    .cta-btn { display: inline-block; background: #1E6BB8; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; margin: 8px 0; }
    .cta-btn:hover { background: #1959a0; }
    .cta-secondary { display: inline-block; color: #1E6BB8; text-decoration: none; font-size: 14px; font-weight: 600; margin-top: 8px; }
    .highlight-box { background: #f0f7ff; border-left: 4px solid #1E6BB8; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
    .highlight-box p { margin: 0; font-size: 14px; color: #1B2A3F; }
    .stat-row { display: flex; gap: 16px; margin: 20px 0; }
    .stat-box { flex: 1; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: center; }
    .stat-box .number { font-size: 24px; font-weight: 700; color: #1E6BB8; }
    .stat-box .label { font-size: 12px; color: #6b7280; margin-top: 4px; }
    .divider { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
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
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
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

// ─── Types ──────────────────────────────────────────────────────────────────

export type SequenceType =
  | "pm-nurture"
  | "locksmith-partner"
  | "mechanic-partner"
  | "vehicle-retrieval";

export interface EmailTemplate {
  sequenceType: SequenceType;
  dayOffset: number;
  subject: string;
  getHtml: (vars: Record<string, string>) => string;
}

// ─── Property Manager Nurture Sequence (5 emails) ──────────────────────────

const pmNurture: EmailTemplate[] = [
  {
    sequenceType: "pm-nurture",
    dayOffset: 0,
    subject: "Your parking enforcement partner is here",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Hi ${vars.name || "there"},</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Thanks for connecting with Axle Towing &amp; Impound. We specialize in one thing: <strong>making unauthorized parking your problem of the past.</strong>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We provide <strong>free private property towing and parking enforcement</strong> for apartment complexes, HOAs, and commercial properties across the Phoenix metro area. That means zero cost to you — ever.
        </p>
        <div style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#1B2A3F;"><strong>What you get at no cost:</strong></p>
          <ul style="padding-left:20px; margin:8px 0 0;">
            <li style="font-size:14px; color:#4b5563; margin-bottom:4px;">24/7/365 tow dispatch — call anytime, day or night</li>
            <li style="font-size:14px; color:#4b5563; margin-bottom:4px;">Professional signage for your property</li>
            <li style="font-size:14px; color:#4b5563; margin-bottom:4px;">Regular patrol options</li>
            <li style="font-size:14px; color:#4b5563; margin-bottom:4px;">Full Arizona ARS compliance</li>
          </ul>
        </div>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We currently serve 38+ cities across the Valley, with two impound yards and a fleet ready to respond in under 30 minutes.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/contact" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Schedule a Free Assessment</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Looking forward to helping ${vars.propertyName ? vars.propertyName : "your property"} stay compliant and parking-problem-free.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team<br/>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>`,
        "Your parking enforcement partner is here — free service for property managers.",
      ),
  },
  {
    sequenceType: "pm-nurture",
    dayOffset: 3,
    subject: "How ${propertyName} can eliminate unauthorized parking in 48 hours",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Eliminate unauthorized parking in 48 hours</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          If ${vars.propertyName || "your property"} is dealing with unauthorized vehicles, overnight parkers, or blocked fire lanes — here's exactly how fast we can fix it:
        </p>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Your 48-Hour Setup Timeline:</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
          <tr>
            <td style="padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px 8px 0 0;">
              <strong style="color:#1E6BB8;">Hour 0:</strong>
              <span style="color:#4b5563; font-size:14px;"> Free property walkthrough &amp; assessment</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px; background:#ffffff; border:1px solid #e2e8f0;">
              <strong style="color:#1E6BB8;">Hour 4:</strong>
              <span style="color:#4b5563; font-size:14px;"> Custom towing agreement tailored to your property</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px; background:#f8fafc; border:1px solid #e2e8f0;">
              <strong style="color:#1E6BB8;">Hour 24:</strong>
              <span style="color:#4b5563; font-size:14px;"> ARS-compliant signage installed at your property</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px; background:#ffffff; border:1px solid #e2e8f0; border-radius:0 0 8px 8px;">
              <strong style="color:#1E6BB8;">Hour 48:</strong>
              <span style="color:#4b5563; font-size:14px;"> Enforcement active — unauthorized vehicles towed</span>
            </td>
          </tr>
        </table>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Every step is handled by our team. You don't have to manage signage, compliance, or confrontations with vehicle owners. We handle it all.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/contact" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Get Your Free Assessment</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team
        </p>`,
        "Here's how we eliminate unauthorized parking at your property in 48 hours.",
      ),
  },
  {
    sequenceType: "pm-nurture",
    dayOffset: 7,
    subject: "How Copper Creek Apartments reduced parking complaints by 90%",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">90% fewer parking complaints</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Copper Creek Apartments in Mesa had a familiar problem: tenants constantly complaining about unauthorized vehicles taking their assigned spots. Management was spending hours every week fielding calls and trying to resolve disputes.
        </p>
        <div style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0 0 4px; font-size:14px; color:#1B2A3F;"><strong>"Since Axle took over enforcement, our parking complaints dropped by 90%. Our tenants are happier, and we haven't spent a dime."</strong></p>
          <p style="margin:0; font-size:13px; color:#6b7280;">— Property Manager, Copper Creek Apartments, Mesa AZ</p>
        </div>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">The results after 90 days:</h2>
        <!--[if mso]><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="padding:0 4px 0 0;width:33%;"><![endif]-->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
          <tr>
            <td width="33%" style="padding:8px; text-align:center; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
              <div style="font-size:24px; font-weight:700; color:#1E6BB8;">90%</div>
              <div style="font-size:12px; color:#6b7280; margin-top:4px;">Fewer Complaints</div>
            </td>
            <td width="8"></td>
            <td width="33%" style="padding:8px; text-align:center; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
              <div style="font-size:24px; font-weight:700; color:#1E6BB8;">$0</div>
              <div style="font-size:12px; color:#6b7280; margin-top:4px;">Cost to Property</div>
            </td>
            <td width="8"></td>
            <td width="33%" style="padding:8px; text-align:center; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
              <div style="font-size:24px; font-weight:700; color:#1E6BB8;">&lt;30m</div>
              <div style="font-size:12px; color:#6b7280; margin-top:4px;">Response Time</div>
            </td>
          </tr>
        </table>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We can deliver the same results for ${vars.propertyName || "your property"}. Every enforcement program is customized to your needs — whether you need regular patrols, on-call towing, or full parking management.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/contact" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Get the Same Results</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team
        </p>`,
        "See how one Phoenix apartment complex eliminated parking problems — at zero cost.",
      ),
  },
  {
    sequenceType: "pm-nurture",
    dayOffset: 14,
    subject: "Free property assessment + first month of enforcement",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">A special offer for ${vars.propertyName || "your property"}</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          I wanted to reach out one more time with a straightforward offer:
        </p>
        <div style="background:linear-gradient(135deg,#f0f7ff 0%,#e8f4fd 100%); border:2px solid #1E6BB8; padding:24px; margin:20px 0; border-radius:12px; text-align:center;">
          <p style="margin:0 0 8px; font-size:18px; font-weight:700; color:#1B2A3F;">Free Property Assessment</p>
          <p style="margin:0 0 4px; font-size:14px; color:#4b5563;">+ Complimentary First Month of Enforcement</p>
          <p style="margin:12px 0 0; font-size:13px; color:#6b7280;">No contracts, no commitments, no cost. See the difference before you decide.</p>
        </div>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's what the assessment includes:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">On-site walkthrough of your parking areas</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">ARS compliance review of existing signage</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Custom enforcement plan tailored to your property</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Signage recommendation and placement map</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Emergency contact setup for your staff</li>
        </ul>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/contact" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Claim Your Free Assessment</a>
        </p>
        <p style="font-size:13px; color:#6b7280; text-align:center; margin:0 0 16px;">
          Or call us directly: <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none; font-weight:600;">480-288-5526</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team
        </p>`,
        "Free property assessment + complimentary first month of enforcement — no strings attached.",
      ),
  },
  {
    sequenceType: "pm-nurture",
    dayOffset: 30,
    subject: "Still dealing with parking violations?",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Still dealing with parking issues?</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          I know parking enforcement might not be top of mind right now — but the problem doesn't go away on its own. Unauthorized vehicles, tenant complaints, and blocked fire lanes only get worse over time.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's a quick reminder of what we offer — completely free:
        </p>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>24/7/365 dispatch</strong> — call us anytime, even holidays</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>Under 30-minute response</strong> across the Phoenix metro</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>Compliant signage</strong> installed and maintained</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>Zero cost</strong> — we recover costs from impound fees, not from you</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Whenever you're ready, we're here. No pressure — just a team that's been solving parking problems across the Valley for years.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="tel:4802885526" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Call Us: 480-288-5526</a>
        </p>
        <p style="text-align:center;">
          <a href="https://axletowing.com/contact" style="color:#1E6BB8; text-decoration:none; font-size:14px; font-weight:600;">Or schedule online</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:16px 0 0;">
          — The Axle Towing Team
        </p>`,
        "Unauthorized parking doesn't fix itself. Let us handle it — for free.",
      ),
  },
];

// ─── Locksmith Partner Sequence (3 emails) ──────────────────────────────────

const locksmithPartner: EmailTemplate[] = [
  {
    sequenceType: "locksmith-partner",
    dayOffset: 0,
    subject: "A new revenue stream for your locksmith business",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Turn lockouts into extra revenue</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          As a locksmith in the Phoenix area, you're already on the front lines helping people who are locked out. But what about the calls you get for vehicles that need towing — not just a lockout?
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          <strong>Axle Towing's Referral Program</strong> lets you earn a commission every time you refer a tow to us. It's simple:
        </p>
        <div style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#1B2A3F;">
            <strong>You refer &rarr; We tow &rarr; You get paid.</strong><br/>
            No paperwork, no hassle. Just an extra income stream from calls you're already getting.
          </p>
        </div>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We handle all the heavy lifting (literally). You just pass along our number when a customer needs a tow.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/partners/locksmiths" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Learn About the Program</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Partnership Team<br/>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>`,
        "Earn commissions by referring tow jobs — a new revenue stream for your locksmith business.",
      ),
  },
  {
    sequenceType: "locksmith-partner",
    dayOffset: 5,
    subject: "Refer a tow, earn a commission - here's the process",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">How the referral process works</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's exactly how our locksmith referral program works — it's designed to be as simple as possible for you:
        </p>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">3 Simple Steps:</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
          <tr>
            <td style="padding:16px; background:#f0f7ff; border:1px solid #e2e8f0; border-radius:8px 8px 0 0;">
              <strong style="color:#1E6BB8; font-size:18px;">1.</strong>
              <span style="color:#1B2A3F; font-size:15px; font-weight:600;"> Customer needs a tow</span><br/>
              <span style="color:#4b5563; font-size:14px;">You're on a locksmith job and the customer also needs a tow, or the vehicle needs to go to a shop.</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px; background:#ffffff; border:1px solid #e2e8f0;">
              <strong style="color:#1E6BB8; font-size:18px;">2.</strong>
              <span style="color:#1B2A3F; font-size:15px; font-weight:600;"> Call or text us</span><br/>
              <span style="color:#4b5563; font-size:14px;">Call 480-288-5526 and mention your partner code. Give us the location and vehicle info. We dispatch immediately.</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px; background:#f0f7ff; border:1px solid #e2e8f0; border-radius:0 0 8px 8px;">
              <strong style="color:#1E6BB8; font-size:18px;">3.</strong>
              <span style="color:#1B2A3F; font-size:15px; font-weight:600;"> Get paid</span><br/>
              <span style="color:#4b5563; font-size:14px;">Once the tow is completed, your referral commission is tracked and paid out monthly.</span>
            </td>
          </tr>
        </table>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          That's it. No apps to download, no forms to fill out in the field. Just a quick call and you earn.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/referral-program" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Sign Up as a Partner</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Partnership Team
        </p>`,
        "3 simple steps: customer needs a tow, you call us, you get paid.",
      ),
  },
  {
    sequenceType: "locksmith-partner",
    dayOffset: 14,
    subject: "Join 200+ Phoenix partners in the Axle referral program",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">200+ partners and growing</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Over 200 locksmiths, mechanics, and auto service providers across Phoenix have already joined the Axle Towing referral network. They're earning extra revenue on calls they were already getting.
        </p>
        <div style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0 0 4px; font-size:14px; color:#1B2A3F;"><strong>"I refer 3-4 tows a month to Axle. It's easy money — I just make a call and they handle the rest."</strong></p>
          <p style="margin:0; font-size:13px; color:#6b7280;">— Phoenix-area locksmith partner</p>
        </div>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Partner benefits:</h2>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Commission on every completed referral</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Priority dispatch for your customers</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Co-marketing opportunities</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Monthly payment — no invoicing required</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Dedicated partner support line</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Ready to join? It takes about 5 minutes to get set up.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/referral-program" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Become a Partner Today</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Partnership Team<br/>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>`,
        "200+ Phoenix partners already earning commissions. Ready to join?",
      ),
  },
];

// ─── Mechanic Partner Sequence (3 emails) ───────────────────────────────────

const mechanicPartner: EmailTemplate[] = [
  {
    sequenceType: "mechanic-partner",
    dayOffset: 0,
    subject: "Get customers to your shop faster with Axle Towing",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">More vehicles to your bays, faster</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          When a customer's car breaks down, the first call is usually to a tow company. What if that tow company brought the vehicle directly to <strong>your shop</strong>?
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          That's exactly what Axle Towing's <strong>Tow-to-Shop Partnership</strong> does. We partner with mechanic shops across the Phoenix metro so that when we pick up a vehicle that needs repairs, we bring it to you.
        </p>
        <div style="background:#f0f7ff; border-left:4px solid #1E6BB8; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#1B2A3F;">
            <strong>How it works:</strong> Customer calls us for a tow &rarr; We ask where they want the vehicle taken &rarr; If they don't have a preference, we recommend our partner shops. More cars in your bays. Zero advertising cost.
          </p>
        </div>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          We cover 38+ cities across the Valley, so no matter where the breakdown happens, we can get the vehicle to you.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/referral-program" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Learn About the Partnership</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Partnership Team<br/>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>`,
        "Get more customers to your mechanic shop — free tow-to-shop partnership.",
      ),
  },
  {
    sequenceType: "mechanic-partner",
    dayOffset: 5,
    subject: "Tow-to-shop service: how it works for your customers",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Your customers get priority service</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Here's exactly how the tow-to-shop partnership benefits your business:
        </p>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">For your existing customers:</h2>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">They call you when they break down — you call us</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We dispatch within 30 minutes and bring the vehicle to your shop</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Your customer gets seamless service — they trust you even more</li>
        </ul>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">For new customers (referrals from Axle):</h2>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Someone calls us for a tow and needs a mechanic</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">We recommend your shop as a trusted partner</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Vehicle arrives at your door — new customer acquired at zero cost</li>
        </ul>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          It's a win-win: your customers get faster service, and you get new customers without spending a dollar on advertising.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/referral-program" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Partner With Axle Towing</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Partnership Team
        </p>`,
        "Your customers get 30-minute tow service, you get new customers — here's how.",
      ),
  },
  {
    sequenceType: "mechanic-partner",
    dayOffset: 14,
    subject: "Ready to partner? Here's your next step",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Let's make it official</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Getting set up as an Axle Towing partner takes about 5 minutes. Here's what's involved:
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
          <tr>
            <td style="padding:16px; background:#f0f7ff; border:1px solid #e2e8f0; border-radius:8px 8px 0 0;">
              <strong style="color:#1E6BB8;">Step 1:</strong>
              <span style="color:#4b5563; font-size:14px;"> Fill out the quick partner form (name, shop address, hours, specialties)</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px; background:#ffffff; border:1px solid #e2e8f0;">
              <strong style="color:#1E6BB8;">Step 2:</strong>
              <span style="color:#4b5563; font-size:14px;"> We add your shop to our dispatch system and partner directory</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px; background:#f0f7ff; border:1px solid #e2e8f0; border-radius:0 0 8px 8px;">
              <strong style="color:#1E6BB8;">Step 3:</strong>
              <span style="color:#4b5563; font-size:14px;"> Start receiving referrals. We handle the towing — you handle the repairs.</span>
            </td>
          </tr>
        </table>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          No exclusivity requirements, no fees, no catches. It's simply a mutually beneficial partnership.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/referral-program" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Sign Up Now</a>
        </p>
        <p style="text-align:center;">
          <span style="color:#6b7280; font-size:14px;">Or call us: </span>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none; font-size:14px; font-weight:600;">480-288-5526</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:16px 0 0;">
          — The Axle Towing Partnership Team
        </p>`,
        "5 minutes to sign up. Zero fees. Start receiving tow-to-shop referrals.",
      ),
  },
];

// ─── Vehicle Owner Retrieval Sequence (2 emails) ───────────────────────────

const vehicleRetrieval: EmailTemplate[] = [
  {
    sequenceType: "vehicle-retrieval",
    dayOffset: 0,
    subject: "Your vehicle has been towed - here's how to retrieve it",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Vehicle Retrieval Information</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Your vehicle has been impounded by Axle Towing &amp; Impound. We understand this is frustrating, and we want to make the retrieval process as straightforward as possible.
        </p>
        <div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#92400e;">
            <strong>Important:</strong> Storage fees accrue daily. The sooner you retrieve your vehicle, the lower your total cost.
          </p>
        </div>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">What you need to bring:</h2>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Valid government-issued photo ID</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Vehicle registration or title in your name</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;">Payment (cash, debit, or credit card accepted)</li>
        </ul>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Impound Yard Locations:</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
          <tr>
            <td style="padding:16px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px 8px 0 0;">
              <strong style="color:#1B2A3F;">Apache Junction Yard</strong><br/>
              <span style="color:#4b5563; font-size:14px;">1151 W. Apache Trail, Apache Junction, AZ 85120</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px; background:#ffffff; border:1px solid #e2e8f0; border-radius:0 0 8px 8px;">
              <strong style="color:#1B2A3F;">Phoenix Yard</strong><br/>
              <span style="color:#4b5563; font-size:14px;">320 E. Pioneer St., Phoenix, AZ 85040</span>
            </td>
          </tr>
        </table>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Office Hours:</h2>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Monday - Friday: 9am - 5pm<br/>
          Saturday: By appointment<br/>
          Sunday: Closed
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="tel:4802885526" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Call Us: 480-288-5526</a>
        </p>
        <p style="text-align:center;">
          <a href="https://axletowing.com/vehicle-lookup" style="color:#1E6BB8; text-decoration:none; font-size:14px; font-weight:600;">Look Up Your Vehicle Online</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:16px 0 0;">
          — Axle Towing &amp; Impound
        </p>`,
        "Your vehicle has been towed. Here's how to retrieve it quickly.",
      ),
  },
  {
    sequenceType: "vehicle-retrieval",
    dayOffset: 1,
    subject: "Reminder: Retrieve your vehicle - gate directions & payment info",
    getHtml: (vars) =>
      emailWrapper(
        `
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Reminder: Your vehicle is ready for pickup</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi ${vars.name || "there"},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          This is a friendly reminder that your vehicle is still at our impound facility. <strong>Storage fees continue to accrue daily</strong>, so we recommend picking it up as soon as possible.
        </p>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Gate Directions:</h2>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0;">
          <p style="margin:0 0 8px; font-size:14px; color:#1B2A3F;"><strong>Apache Junction Yard</strong></p>
          <p style="margin:0; font-size:14px; color:#4b5563;">
            1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
            Head west on Apache Trail from Idaho Road. Our yard is on the south side of the street. Look for the Axle Towing sign. Enter through the main gate and check in at the office window.
          </p>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0;">
          <p style="margin:0 0 8px; font-size:14px; color:#1B2A3F;"><strong>Phoenix Yard</strong></p>
          <p style="margin:0; font-size:14px; color:#4b5563;">
            320 E. Pioneer St., Phoenix, AZ 85040<br/>
            From I-17, exit at Buckeye Road and head east. Turn south on 3rd Street, then east on Pioneer. Our yard is on the north side. Pull up to the gate and ring the buzzer.
          </p>
        </div>
        <h2 style="font-size:18px; color:#1B2A3F; margin:24px 0 12px;">Payment Information:</h2>
        <ul style="padding-left:20px; margin:0 0 16px;">
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>Accepted:</strong> Cash, Visa, Mastercard, Debit</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>Hours:</strong> Mon-Fri 9am-5pm, Sat by appointment</li>
          <li style="font-size:15px; color:#4b5563; line-height:1.65; margin-bottom:8px;"><strong>After hours?</strong> Call us to arrange a pickup time</li>
        </ul>
        <div style="background:#fef2f2; border-left:4px solid #ef4444; padding:16px 20px; margin:20px 0; border-radius:0 8px 8px 0;">
          <p style="margin:0; font-size:14px; color:#991b1b;">
            <strong>Note:</strong> Per Arizona law (ARS 28-4843), vehicles not retrieved within 30 days may be processed for title transfer or auction. Please retrieve your vehicle promptly to avoid additional fees.
          </p>
        </div>
        <p style="text-align:center; margin:24px 0;">
          <a href="tel:4802885526" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Call Us: 480-288-5526</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:16px 0 0;">
          — Axle Towing &amp; Impound
        </p>`,
        "Reminder: storage fees accrue daily. Here are gate directions and payment info.",
      ),
  },
];

// ─── Template Registry ──────────────────────────────────────────────────────

export const EMAIL_SEQUENCES: Record<SequenceType, EmailTemplate[]> = {
  "pm-nurture": pmNurture,
  "locksmith-partner": locksmithPartner,
  "mechanic-partner": mechanicPartner,
  "vehicle-retrieval": vehicleRetrieval,
};

export const SEQUENCE_NAMES: Record<SequenceType, string> = {
  "pm-nurture": "Property Manager Nurture",
  "locksmith-partner": "Locksmith Partner",
  "mechanic-partner": "Mechanic Partner",
  "vehicle-retrieval": "Vehicle Owner Retrieval",
};

/**
 * Get all templates for a given sequence type.
 */
export function getSequenceTemplates(type: SequenceType): EmailTemplate[] {
  return EMAIL_SEQUENCES[type] || [];
}

/**
 * Get a specific email template by sequence type and day offset.
 */
export function getTemplate(
  type: SequenceType,
  dayOffset: number,
): EmailTemplate | undefined {
  return EMAIL_SEQUENCES[type]?.find((t) => t.dayOffset === dayOffset);
}

/**
 * Get all template metadata (for dashboard display).
 */
export function getAllTemplatesMeta(): Array<{
  sequenceType: SequenceType;
  sequenceName: string;
  dayOffset: number;
  subject: string;
}> {
  const result: Array<{
    sequenceType: SequenceType;
    sequenceName: string;
    dayOffset: number;
    subject: string;
  }> = [];

  for (const [type, templates] of Object.entries(EMAIL_SEQUENCES)) {
    for (const t of templates) {
      result.push({
        sequenceType: type as SequenceType,
        sequenceName: SEQUENCE_NAMES[type as SequenceType],
        dayOffset: t.dayOffset,
        subject: t.subject,
      });
    }
  }

  return result;
}

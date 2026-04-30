# Workflow 6: Nurture: Property Manager Inbound

> **Linear:** AI-8344 - Nurture: Property Manager Inbound
> **Source sequence:** `pm-nurture` (Property Manager Nurture) - rendered from `website/src/lib/email-templates.ts`
> **Activation status:** OK to ACTIVATE after Elliott previews the 5 emails (subjects + first paragraph).
> **Last regenerated:** 2026-04-30 (run `npx tsx scripts/render-ghl-paste-sheets.ts` to refresh)

---

## Trigger Configuration

**Trigger type:** Form Submitted (any of /contact, /quote, exit-intent floating CTA)

Filter: contact.tag CONTAINS 'seq-new-lead-nurture' (set by website/src/lib/ghl.ts on lead creation). Source field `propertyType` should be `apartment|commercial|hoa`.

---

## Build Order in GHL Automation Builder

Drop these nodes in this order. Each "Email" node uses the subject + HTML body from the matching section below.

```
1. Trigger: Form Submitted (Contact Form, Quote Form, Exit-Intent CTA)
2. Action: Add Tag `seq-new-lead-nurture` (idempotent — already set by API)
3. Email 1 (Day 0): Welcome
4. Wait: 3 days
5. Email 2 (Day 3): 48-hour timeline
6. Wait: 4 days
7. Email 3 (Day 7): Copper Creek case study
8. Wait: 7 days
9. Email 4 (Day 14): Free assessment offer
10. Wait: 16 days
11. Email 5 (Day 30): Final check-in
12. Action: Remove Tag `seq-new-lead-nurture`
13. Action: Add Tag `nurture-complete`
14. End
```

---

## Pre-Wiring Checklist

Before building this workflow, confirm in GHL > Settings:

- [ ] Tag `nurture-complete` exists (create under Settings > Tags if not)
- [ ] Sender identity `info@axletowing.com` is verified (Settings > Email Services)
- [ ] Custom values referenced in this workflow (`{{contact.first_name}}`, `{{contact.company_name}}`) match real contact fields
- [ ] Test contact has the trigger tag/condition that activates this workflow

---

## Email Templates (Pasteable)

### Email 1 - Day 0 (immediate)

**GHL Subject (paste verbatim):**
```
Your parking enforcement partner is here
```

**From:** `info@axletowing.com` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Your parking enforcement partner is here — free service for property managers.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Hi {{contact.first_name}},</h1>
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
          Looking forward to helping {{contact.company_name}} stay compliant and parking-problem-free.
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team<br/>
          <a href="tel:4802885526" style="color:#1E6BB8; text-decoration:none;">480-288-5526</a>
        </p>
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:4802885526" style="color:#ffffff; text-decoration:none;">480-288-5526</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
          320 E. Pioneer St., Phoenix, AZ 85040
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:info@axletowing.com" style="color:#60a5fa; text-decoration:none;">info@axletowing.com</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Email 2 - Day 3

**GHL Subject (paste verbatim):**
```
How {{contact.company_name}} can eliminate unauthorized parking in 48 hours
```

**From:** `info@axletowing.com` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Here's how we eliminate unauthorized parking at your property in 48 hours.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Eliminate unauthorized parking in 48 hours</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          If {{contact.company_name}} is dealing with unauthorized vehicles, overnight parkers, or blocked fire lanes — here's exactly how fast we can fix it:
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
        </p>
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:4802885526" style="color:#ffffff; text-decoration:none;">480-288-5526</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
          320 E. Pioneer St., Phoenix, AZ 85040
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:info@axletowing.com" style="color:#60a5fa; text-decoration:none;">info@axletowing.com</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Email 3 - Day 7

**GHL Subject (paste verbatim):**
```
How Copper Creek Apartments reduced parking complaints by 90%
```

**From:** `info@axletowing.com` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">See how one Phoenix apartment complex eliminated parking problems — at zero cost.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">90% fewer parking complaints</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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
          We can deliver the same results for {{contact.company_name}}. Every enforcement program is customized to your needs — whether you need regular patrols, on-call towing, or full parking management.
        </p>
        <p style="text-align:center; margin:24px 0;">
          <a href="https://axletowing.com/contact" class="cta-btn" style="display:inline-block; background:#1E6BB8; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-size:15px; font-weight:600;">Get the Same Results</a>
        </p>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0;">
          — The Axle Towing Team
        </p>
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:4802885526" style="color:#ffffff; text-decoration:none;">480-288-5526</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
          320 E. Pioneer St., Phoenix, AZ 85040
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:info@axletowing.com" style="color:#60a5fa; text-decoration:none;">info@axletowing.com</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Email 4 - Day 14

**GHL Subject (paste verbatim):**
```
Free property assessment + first month of enforcement
```

**From:** `info@axletowing.com` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Free property assessment + complimentary first month of enforcement — no strings attached.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">A special offer for {{contact.company_name}}</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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
        </p>
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:4802885526" style="color:#ffffff; text-decoration:none;">480-288-5526</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
          320 E. Pioneer St., Phoenix, AZ 85040
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:info@axletowing.com" style="color:#60a5fa; text-decoration:none;">info@axletowing.com</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Email 5 - Day 30

**GHL Subject (paste verbatim):**
```
Still dealing with parking violations?
```

**From:** `info@axletowing.com` (workspace) - already verified live, MX/SPF/DKIM/DMARC clean.

**HTML Body (paste into GHL email editor in HTML / "Source Code" mode):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Axle Towing &amp; Impound</title>
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Unauthorized parking doesn't fix itself. Let us handle it — for free.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Still dealing with parking issues?</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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
        </p>
      </div>
      <div class="footer" style="background:#1B2A3F; padding:24px 32px; text-align:center;">
        <p class="phone" style="font-size:16px; color:#ffffff; font-weight:600; margin:0 0 12px;">
          <a href="tel:4802885526" style="color:#ffffff; text-decoration:none;">480-288-5526</a>
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          1151 W. Apache Trail, Apache Junction, AZ 85120<br/>
          320 E. Pioneer St., Phoenix, AZ 85040
        </p>
        <p style="font-size:12px; color:#94a3b8; margin:0 0 8px; line-height:1.5;">
          <a href="https://axletowing.com" style="color:#60a5fa; text-decoration:none;">axletowing.com</a>
          &nbsp;&bull;&nbsp;
          <a href="mailto:info@axletowing.com" style="color:#60a5fa; text-decoration:none;">info@axletowing.com</a>
        </p>
        <p style="font-size:11px; color:#64748b; margin:12px 0 0;">
          <a href="{{unsubscribe_url}}" style="color:#64748b; text-decoration:underline;">Unsubscribe</a>
          &nbsp;&bull;&nbsp; You received this because you opted in or are a partner of Axle Towing.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```


---

## Post-Wiring Validation

After publishing as DRAFT in GHL:

1. Add a test contact (`test+06-nurture-pm-inbound@axletowing.com`) with `first_name=Test`, `company_name=Test Property`.
2. Apply the trigger (tag or form) to that contact.
3. Watch the workflow execution log: every email should send successfully and merge fields should resolve.
4. Spot-check the test inbox: subjects ASCII, HTML renders correctly in Gmail + Apple Mail + Outlook.
5. Only then flip the workflow to ACTIVE.

---

*Generated by `website/scripts/render-ghl-paste-sheets.ts`. Edit `website/src/lib/email-templates.ts` to change copy, then re-run.*

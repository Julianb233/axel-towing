# Workflow 10: Referral: Locksmith Partner

> **Linear:** AI-8344 - Referral: Locksmith Partner
> **Source sequence:** `locksmith-partner` (Locksmith Partner) - rendered from `website/src/lib/email-templates.ts`
> **Activation status:** OK to ACTIVATE after Elliott previews subjects.
> **Last regenerated:** 2026-04-30 (run `npx tsx scripts/render-ghl-paste-sheets.ts` to refresh)

---

## Trigger Configuration

**Trigger type:** Tag Applied: `referral-locksmith`

Filter: contact must NOT already have tag `nurture-complete` or `cold-sequence-complete`. Use Goal node to exit if reply received.

---

## Build Order in GHL Automation Builder

Drop these nodes in this order. Each "Email" node uses the subject + HTML body from the matching section below.

```
1. Trigger: Tag Applied `referral-locksmith`
2. Email 1 (Day 0): Revenue stream intro
3. Wait: 5 days
4. Email 2 (Day 5): 3-step process
5. Wait: 9 days
6. Email 3 (Day 14): 200+ partners social proof
7. Action: Add Tag `referral-locksmith-done`
8. End
```

---

## Pre-Wiring Checklist

Before building this workflow, confirm in GHL > Settings:

- [ ] Tag `referral-locksmith-done` exists (create under Settings > Tags if not)
- [ ] Sender identity `info@axletowing.com` is verified (Settings > Email Services)
- [ ] Custom values referenced in this workflow (`{{contact.first_name}}`, `{{contact.company_name}}`) match real contact fields
- [ ] Test contact has the trigger tag/condition that activates this workflow

---

## Email Templates (Pasteable)

### Email 1 - Day 0 (immediate)

**GHL Subject (paste verbatim):**
```
A new revenue stream for your locksmith business
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Earn commissions by referring tow jobs — a new revenue stream for your locksmith business.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Turn lockouts into extra revenue</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

### Email 2 - Day 5

**GHL Subject (paste verbatim):**
```
Refer a tow, earn a commission - here's the process
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">3 simple steps: customer needs a tow, you call us, you get paid.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">How the referral process works</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

### Email 3 - Day 14

**GHL Subject (paste verbatim):**
```
Join 200+ Phoenix partners in the Axle referral program
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">200+ Phoenix partners already earning commissions. Ready to join?</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">200+ partners and growing</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

1. Add a test contact (`test+10-referral-locksmith@axletowing.com`) with `first_name=Test`, `company_name=Test Property`.
2. Apply the trigger (tag or form) to that contact.
3. Watch the workflow execution log: every email should send successfully and merge fields should resolve.
4. Spot-check the test inbox: subjects ASCII, HTML renders correctly in Gmail + Apple Mail + Outlook.
5. Only then flip the workflow to ACTIVE.

---

*Generated by `website/scripts/render-ghl-paste-sheets.ts`. Edit `website/src/lib/email-templates.ts` to change copy, then re-run.*

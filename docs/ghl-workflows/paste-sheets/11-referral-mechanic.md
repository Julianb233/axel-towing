# Workflow 11: Referral: Mechanic Partner

> **Linear:** AI-8344 - Referral: Mechanic Partner
> **Source sequence:** `mechanic-partner` (Mechanic Partner) - rendered from `website/src/lib/email-templates.ts`
> **Activation status:** OK to ACTIVATE after Elliott previews subjects.
> **Last regenerated:** 2026-04-30 (run `npx tsx scripts/render-ghl-paste-sheets.ts` to refresh)

---

## Trigger Configuration

**Trigger type:** Tag Applied: `referral-mechanic`

Same exit conditions as locksmith. Goal node on `Replied to Email`.

---

## Build Order in GHL Automation Builder

Drop these nodes in this order. Each "Email" node uses the subject + HTML body from the matching section below.

```
1. Trigger: Tag Applied `referral-mechanic`
2. Email 1 (Day 0): Tow-to-shop intro
3. Wait: 5 days
4. Email 2 (Day 5): Customer benefits
5. Wait: 9 days
6. Email 3 (Day 14): 5-min signup
7. Action: Add Tag `referral-mechanic-done`
8. End
```

---

## Pre-Wiring Checklist

Before building this workflow, confirm in GHL > Settings:

- [ ] Tag `referral-mechanic-done` exists (create under Settings > Tags if not)
- [ ] Sender identity `info@axletowing.com` is verified (Settings > Email Services)
- [ ] Custom values referenced in this workflow (`{{contact.first_name}}`, `{{contact.company_name}}`) match real contact fields
- [ ] Test contact has the trigger tag/condition that activates this workflow

---

## Email Templates (Pasteable)

### Email 1 - Day 0 (immediate)

**GHL Subject (paste verbatim):**
```
Get customers to your shop faster with Axle Towing
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Get more customers to your mechanic shop — free tow-to-shop partnership.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">More vehicles to your bays, faster</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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
Tow-to-shop service: how it works for your customers
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Your customers get 30-minute tow service, you get new customers — here's how.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Your customers get priority service</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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
Ready to partner? Here's your next step
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">5 minutes to sign up. Zero fees. Start receiving tow-to-shop referrals.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Let's make it official</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

1. Add a test contact (`test+11-referral-mechanic@axletowing.com`) with `first_name=Test`, `company_name=Test Property`.
2. Apply the trigger (tag or form) to that contact.
3. Watch the workflow execution log: every email should send successfully and merge fields should resolve.
4. Spot-check the test inbox: subjects ASCII, HTML renders correctly in Gmail + Apple Mail + Outlook.
5. Only then flip the workflow to ACTIVE.

---

*Generated by `website/scripts/render-ghl-paste-sheets.ts`. Edit `website/src/lib/email-templates.ts` to change copy, then re-run.*

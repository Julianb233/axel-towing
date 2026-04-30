# Workflow 14: Transactional: Vehicle Retrieval

> **Linear:** AI-8344 - Transactional: Vehicle Retrieval
> **Source sequence:** `vehicle-retrieval` (Vehicle Owner Retrieval) - rendered from `website/src/lib/email-templates.ts`
> **Activation status:** DRAFT-ONLY — needs (1) sender-identity sign-off (2) TowBook webhook schema (3) optional Day-7 storage-fee email if not yet retrieved.
> **Last regenerated:** 2026-04-30 (run `npx tsx scripts/render-ghl-paste-sheets.ts` to refresh)

---

## Trigger Configuration

**Trigger type:** Tag Applied `vehicle-impounded` OR Webhook from TowBook (when wired)

DRAFT-ONLY until: (a) TowBook webhook schema confirmed and (b) sender identity decision made. Per email-send-via-gws rule + Hafnia-style transactional rules, route through a separate sender (suggest `dispatch@axletowing.com`) to avoid mixing with marketing throttle. Goal node: exit if tag `vehicle-retrieved` applied.

---

## Build Order in GHL Automation Builder

Drop these nodes in this order. Each "Email" node uses the subject + HTML body from the matching section below.

```
1. Trigger: Tag Applied `vehicle-impounded` (manual or webhook-driven)
2. Email 1 (Day 0, immediate): Retrieval information
3. Wait: 1 day
4. Goal/If/Else: contact has tag `vehicle-retrieved`?
5.   YES branch -> End
6.   NO branch -> continue
7. Email 2 (Day 1): Reminder + gate directions
8. Wait: 6 days
9. Goal/If/Else: contact has tag `vehicle-retrieved`?
10.   YES branch -> End
11.   NO branch -> Day-7 storage-fee email (TODO: needs Elliott approval)
12. Action: Add Tag `vehicle-retrieval-done`
13. End
```

---

## Pre-Wiring Checklist

Before building this workflow, confirm in GHL > Settings:

- [ ] Tag `vehicle-retrieval-done` exists (create under Settings > Tags if not)
- [ ] Sender identity `info@axletowing.com` is verified (Settings > Email Services)
- [ ] Custom values referenced in this workflow (`{{contact.first_name}}`, `{{contact.company_name}}`) match real contact fields
- [ ] Test contact has the trigger tag/condition that activates this workflow

---

## Email Templates (Pasteable)

### Email 1 - Day 0 (immediate)

**GHL Subject (paste verbatim):**
```
Your vehicle has been towed - here's how to retrieve it
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Your vehicle has been towed. Here's how to retrieve it quickly.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Vehicle Retrieval Information</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

### Email 2 - Day 1

**GHL Subject (paste verbatim):**
```
Reminder: Retrieve your vehicle - gate directions & payment info
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
  <span style="display:none;font-size:1px;color:#1B2A3F;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Reminder: storage fees accrue daily. Here are gate directions and payment info.</span>
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
        
        <h1 style="font-size:22px; color:#1B2A3F; margin:0 0 16px; line-height:1.3;">Reminder: Your vehicle is ready for pickup</h1>
        <p style="font-size:15px; color:#4b5563; line-height:1.65; margin:0 0 16px;">
          Hi {{contact.first_name}},
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

1. Add a test contact (`test+14-transactional-vehicle-retrieval@axletowing.com`) with `first_name=Test`, `company_name=Test Property`.
2. Apply the trigger (tag or form) to that contact.
3. Watch the workflow execution log: every email should send successfully and merge fields should resolve.
4. Spot-check the test inbox: subjects ASCII, HTML renders correctly in Gmail + Apple Mail + Outlook.
5. Only then flip the workflow to ACTIVE.

---

*Generated by `website/scripts/render-ghl-paste-sheets.ts`. Edit `website/src/lib/email-templates.ts` to change copy, then re-run.*

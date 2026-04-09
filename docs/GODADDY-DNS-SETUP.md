# GoDaddy Account Setup & DNS Transfer Guide

**Client:** Axel Towing (axletowing.com)
**Linear:** AI-2177
**Last Updated:** 2026-03-24

---

## Overview

This guide covers setting up a GoDaddy account, transferring domain registration, configuring DNS records for the Railway-hosted website, and optional Cloudflare CDN integration.

**Current stack:**

- Website: Next.js on Railway → axletowing.com
- Dashboard portal: Next.js on Vercel → axle-towing-portal.vercel.app
- Email: Google Workspace (recommended)

---

## Part 1: GoDaddy Account Creation

### Step 1: Create the Account

1. Go to [godaddy.com](https://www.godaddy.com)
2. Click **Sign In** → **Create My Account**
3. Fill in:
   - Email: use a business email (e.g., axletowing@gmail.com)
   - Username: axeltowing (or similar)
   - Password: 16+ characters, mix of letters/numbers/symbols
   - PIN: 4-digit PIN for phone support verification
4. Verify email address via confirmation link
5. Enable **Two-Factor Authentication** (recommended):
   - Account Settings → Login & PIN → 2-Step Verification → Enable

### Step 2: Add Payment Method

1. Account → Payment Methods → Add Payment Method
2. Add a credit or debit card for renewals and purchases
3. Review auto-renewal settings — confirm they're enabled for the domain

---

## Part 2: Domain Transfer to GoDaddy

If `axletowing.com` is currently registered at another registrar (e.g., Namecheap, Network Solutions, etc.), follow these steps.

### Pre-Transfer Checklist

Before initiating the transfer at GoDaddy:

- [ ] Domain must be **more than 60 days old** since registration or last transfer
- [ ] Domain must **not expire within 7 days** (renew first if needed)
- [ ] Unlock the domain at the current registrar (disable "Transfer Lock")
- [ ] Obtain the **EPP/Authorization Code** (also called "Auth Code") from the current registrar
- [ ] Disable WHOIS Privacy temporarily (some registrars require this)
- [ ] Confirm the administrative email address on file is accessible (GoDaddy will send approval emails there)

### Initiating the Transfer

1. Log in to GoDaddy
2. Go to **Domains** → **Transfer Domains**
3. Enter: `axletowing.com` → click **Transfer**
4. Enter the EPP/Auth Code obtained from the current registrar
5. GoDaddy will verify eligibility and show the transfer cost (usually ~$20 for 1 year renewal)
6. Complete checkout
7. Check the admin email for an authorization request — approve it
8. The current registrar may also send a confirmation email — approve or ignore (it auto-approves after 5 days at most registrars)

### Transfer Timeline

- Typical completion: **5–7 business days**
- You can track status at: GoDaddy → Domains → Transfer Status
- DNS continues to resolve from the current registrar during transfer (no downtime)

### Post-Transfer

After transfer completes:

- Verify nameservers are correct (see Part 3)
- Confirm auto-renewal is enabled
- Re-enable WHOIS Privacy if desired (GoDaddy offers it free)

---

## Part 3: DNS Configuration

### Accessing DNS Management

1. GoDaddy → **My Products** → **Domains** → **axletowing.com** → **Manage DNS**
2. You'll see the DNS Records table

### Required DNS Records

See `DNS-RECORDS-TEMPLATE.md` for the exact records. Below is the full configuration breakdown by use case.

---

## Part 4: Railway Deployment DNS Setup

Railway hosts the main website at `axletowing.com`.

### Step 1: Get the Railway Static IP or Domain

In Railway:

1. Open your project → **Settings** → **Domains**
2. Note your Railway-assigned domain (e.g., `axeltowing-production.up.railway.app`)
3. Click **Add Custom Domain** → enter `axletowing.com` and `www.axletowing.com`
4. Railway will provide a **CNAME target** (e.g., `axeltowing-production.up.railway.app`)

> Note: Some Railway plans provide a static IP for A records. Check your Railway dashboard. If a static IP is provided, use an A record instead of a CNAME for the root domain.

### Step 2: Configure DNS at GoDaddy

**For root domain using CNAME (if Railway supports CNAME flattening):**

| Type  | Name | Value                                | TTL    |
| ----- | ---- | ------------------------------------ | ------ |
| CNAME | @    | axeltowing-production.up.railway.app | 1 Hour |
| CNAME | www  | axeltowing-production.up.railway.app | 1 Hour |

**For root domain using A record (if Railway provides a static IP):**

| Type  | Name | Value               | TTL    |
| ----- | ---- | ------------------- | ------ |
| A     | @    | [Railway Static IP] | 1 Hour |
| CNAME | www  | axeltowing.com      | 1 Hour |

> GoDaddy does not natively support CNAME on the root (`@`) — if Railway only provides a CNAME target (not a static IP), use Cloudflare (Part 8) which supports CNAME flattening, or ask Railway support for a static IP.

### Step 3: Verify in Railway

After setting DNS records:

1. Return to Railway → Domains
2. Railway will show a green checkmark once DNS propagates
3. Railway auto-provisions an SSL certificate via Let's Encrypt once DNS is verified

---

## Part 5: Vercel Deployment DNS Setup (Alternative / Dashboard Portal)

The dashboard portal lives at `axle-towing-portal.vercel.app`. If a custom subdomain is desired (e.g., `portal.axletowing.com`):

### Step 1: Add Domain in Vercel

1. Vercel Dashboard → Project (`website`) → **Settings** → **Domains**
2. Click **Add** → enter `portal.axletowing.com`
3. Vercel will provide DNS instructions (typically a CNAME)

### Step 2: Add CNAME at GoDaddy

| Type  | Name   | Value                | TTL    |
| ----- | ------ | -------------------- | ------ |
| CNAME | portal | cname.vercel-dns.com | 1 Hour |

### Step 3: Verify

Vercel dashboard shows green status once DNS resolves. SSL auto-provisions.

---

## Part 6: SSL Certificate Setup

Both Railway and Vercel auto-provision SSL via **Let's Encrypt** — no manual setup required.

**Railway SSL:**

- Automatically issued once DNS points to Railway and propagates
- Certificate auto-renews every 90 days
- Verify: `https://axletowing.com` should show a valid padlock

**GoDaddy SSL (optional, if self-managing):**

- GoDaddy sells SSL certificates starting at ~$70/year
- Not recommended when Railway/Vercel handle this automatically for free

**Forcing HTTPS:**

- In `next.config.js`, add headers to redirect HTTP → HTTPS:

```js
async redirects() {
  return [
    {
      source: '/(.*)',
      has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
      destination: 'https://axletowing.com/:path*',
      permanent: true,
    },
  ]
}
```

---

## Part 7: Email MX Records (Google Workspace)

If using Google Workspace for `@axletowing.com` email:

### Step 1: Set Up Google Workspace

1. Go to [workspace.google.com](https://workspace.google.com)
2. Sign up with `axletowing.com` as the domain
3. During setup, Google will provide MX records to enter at GoDaddy

### Step 2: Add MX Records at GoDaddy

Delete any existing MX records first, then add:

| Type | Name | Value                   | Priority | TTL    |
| ---- | ---- | ----------------------- | -------- | ------ |
| MX   | @    | aspmx.l.google.com      | 1        | 1 Hour |
| MX   | @    | alt1.aspmx.l.google.com | 5        | 1 Hour |
| MX   | @    | alt2.aspmx.l.google.com | 5        | 1 Hour |
| MX   | @    | alt3.aspmx.l.google.com | 10       | 1 Hour |
| MX   | @    | alt4.aspmx.l.google.com | 10       | 1 Hour |

### Step 3: Add SPF and DKIM (Email Verification)

Google Workspace admin panel will provide the DKIM key after setup.

**SPF record** (prevents email spoofing):

| Type | Name | Value                                | TTL    |
| ---- | ---- | ------------------------------------ | ------ |
| TXT  | @    | v=spf1 include:\_spf.google.com ~all | 1 Hour |

**DKIM record** (Google Workspace Admin → Apps → Gmail → Authenticate email):

| Type | Name               | Value                                     | TTL    |
| ---- | ------------------ | ----------------------------------------- | ------ |
| TXT  | google.\_domainkey | v=DKIM1; k=rsa; p=[key from Google Admin] | 1 Hour |

**DMARC record** (email policy enforcement):

| Type | Name    | Value                                                            | TTL    |
| ---- | ------- | ---------------------------------------------------------------- | ------ |
| TXT  | \_dmarc | v=DMARC1; p=quarantine; rua=mailto:axletowing@gmail.com; pct=100 | 1 Hour |

### Step 4: Verify in Google Workspace

Google Workspace Admin → Domains → Manage Domains → Verify DNS

---

## Part 8: Cloudflare Integration (Optional — CDN & DDoS Protection)

Cloudflare acts as a proxy in front of GoDaddy DNS, providing:

- Global CDN (faster page loads)
- DDoS protection
- Free SSL termination
- Web Application Firewall (WAF)
- Analytics

### When to Use Cloudflare

Recommended if:

- The site experiences high traffic or bot attacks
- You need CNAME flattening for root domain pointing to Railway CNAME

### Setup Steps

1. **Create a Cloudflare account** at [cloudflare.com](https://cloudflare.com)
2. Click **Add a Site** → enter `axletowing.com`
3. Select the **Free plan** (sufficient for most use cases)
4. Cloudflare will scan existing DNS records and import them
5. Review and confirm the imported records
6. Cloudflare will provide **two nameservers**, e.g.:
   - `aria.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`

### Update Nameservers at GoDaddy

1. GoDaddy → Domains → axletowing.com → **Nameservers**
2. Click **Change** → **Enter my own nameservers**
3. Enter the two Cloudflare nameservers provided
4. Save

> After this point, all DNS changes are made in Cloudflare, not GoDaddy.

### Cloudflare DNS Settings

Once active, configure in Cloudflare DNS dashboard:

- Set Railway CNAME with **Proxy status: Proxied** (orange cloud) for CDN benefits
- Set MX records with **Proxy status: DNS only** (grey cloud) — email records must not be proxied

### SSL in Cloudflare

Cloudflare → SSL/TLS → Overview → Set to **Full (strict)**

This encrypts traffic between visitors and Cloudflare, and between Cloudflare and Railway.

---

## Part 9: Timeline Expectations

| Action                          | Time to Take Effect                     |
| ------------------------------- | --------------------------------------- |
| A record change                 | 1–4 hours                               |
| CNAME change                    | 1–4 hours                               |
| MX record change                | 1–4 hours (up to 24 hours)              |
| TXT record (SPF/DKIM)           | 15 minutes – 2 hours                    |
| Domain transfer                 | 5–7 business days                       |
| Nameserver change to Cloudflare | 24–48 hours for full global propagation |
| SSL certificate provisioning    | Minutes after DNS resolves              |

**Note:** DNS propagation is not instant. Changes propagate from the authoritative nameservers outward to global resolvers. Use [dnschecker.org](https://dnschecker.org) to check propagation status worldwide.

---

## Verification Checklist

After completing setup, verify each item:

- [ ] `https://axletowing.com` loads the website (no SSL errors)
- [ ] `https://www.axletowing.com` redirects to `axletowing.com`
- [ ] Email to `@axletowing.com` delivers correctly
- [ ] SPF/DKIM pass — check via [mail-tester.com](https://mail-tester.com)
- [ ] Railway dashboard shows green checkmark for custom domain
- [ ] SSL certificate shows valid (padlock icon in browser)
- [ ] Run `nslookup axletowing.com` and confirm it resolves correctly

---

## Troubleshooting

**Domain shows GoDaddy parking page after transfer:**

- DNS records may have been reset during transfer
- Re-enter all records from `DNS-RECORDS-TEMPLATE.md`

**SSL not provisioning on Railway:**

- Confirm DNS has fully propagated first
- Check Railway dashboard → Domains for error messages
- Wait up to 1 hour after DNS propagation

**Email not delivering:**

- Verify MX records are set correctly with correct priority values
- Confirm no conflicting MX records remain
- Use [mxtoolbox.com](https://mxtoolbox.com) to check MX records

**www subdomain not resolving:**

- Add a CNAME record for `www` pointing to the root domain or directly to Railway

**CNAME on root domain (@) not accepted at GoDaddy:**

- GoDaddy does not support CNAME at root — switch to Cloudflare (supports CNAME flattening) or request a static IP from Railway

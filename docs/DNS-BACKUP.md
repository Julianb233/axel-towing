# DNS Backup — axletowing.com

**Snapshot Date:** 2026-04-08
**Purpose:** Pre-transfer backup of all DNS records before GoDaddy migration (AI-2177)

---

## Current Registrar

| Field | Value |
|-------|-------|
| Registrar | eNom, LLC |
| WHOIS Server | whois.enom.com |
| Creation Date | 2021-05-03 |
| Expiry Date | 2027-05-03 |
| Domain Status | ok (clientTransferProhibited not set — transfer eligible) |
| Nameservers | ns.liquidweb.com, ns1.liquidweb.com |

---

## A Records

| Name | Value | Notes |
|------|-------|-------|
| @ | 76.76.21.21 | Currently points to Vercel IP |

## CNAME Records

No CNAME records found on root.

## MX Records

| Priority | Value |
|----------|-------|
| 0 | mail.axletowing.com |

> **Note:** MX points to `mail.axletowing.com` (likely Liquid Web mail). If migrating to Google Workspace, this must be replaced with Google MX records per `DNS-RECORDS-TEMPLATE.md`.

## TXT Records

| Value |
|-------|
| `v=spf1 +mx +a +ip4:67.43.6.179 ~all` |
| `google-site-verification=SmwmMPOrlohI8Qbya5edWrY9Pjgbx0k4gl0H4iEGCPU` |

## NS Records

| Value |
|-------|
| ns.liquidweb.com |
| ns1.liquidweb.com |

## SOA Record

| Primary NS | Admin Email | Serial | Refresh | Retry | Expire | Min TTL |
|-----------|-------------|--------|---------|-------|--------|---------|
| ns.liquidweb.com | admin.liquidweb.com | 2026032806 | 86400 | 7200 | 3600000 | 14400 |

---

## Key Observations for Transfer

1. **Registrar is eNom** — EPP/auth code must be requested from eNom (or the previous web developer's eNom account)
2. **Domain status is `ok`** — no transfer lock detected, which simplifies transfer
3. **A record (76.76.21.21) is a Vercel IP** — the site may already be on Vercel despite docs saying Railway
4. **MX points to Liquid Web mail** — email will need reconfiguration during/after transfer
5. **SPF allows IP 67.43.6.179** — this is the Liquid Web server IP, will need updating post-transfer
6. **Google Site Verification exists** — GSC is already set up, preserve this TXT record
7. **Expiry is 2027-05-03** — plenty of time, no urgency on renewal

---

## Transfer Readiness Checklist

- [x] DNS backup taken (this file)
- [ ] Contact previous web developer for EPP/auth code
- [ ] Client creates GoDaddy account with business email
- [ ] Client enables 2FA on GoDaddy
- [ ] Domain unlocked at eNom (confirm `ok` status means unlocked)
- [ ] EPP code entered at GoDaddy to initiate transfer
- [ ] Transfer confirmed via admin email
- [ ] Post-transfer DNS verification against this backup
- [ ] MX records updated for Google Workspace (if applicable)
- [ ] SPF record updated to remove Liquid Web IP
- [ ] Domain lock re-enabled at GoDaddy

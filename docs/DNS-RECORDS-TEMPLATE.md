# DNS Records Template — axeltowing.com

**Client:** Axel Towing
**Domain:** axeltowing.com
**Registrar:** GoDaddy (target)
**Hosting:** Railway (website) + Vercel (portal)
**Email:** Google Workspace
**Last Updated:** 2026-03-24

---

## Quick Reference: All Required DNS Records

Copy these records exactly into GoDaddy DNS Management (or Cloudflare if using Cloudflare nameservers).

---

## Section A: Website — Railway Hosting

### Option 1: Railway Provides a Static IP (use A record)

Replace `[RAILWAY_IP]` with the static IP from Railway Dashboard → Settings → Domains.

```
Type    Name    Value               TTL
----------------------------------------------
A       @       [RAILWAY_IP]        3600
CNAME   www     axeltowing.com      3600
```

### Option 2: Railway Provides a CNAME Target (use via Cloudflare)

Replace `[RAILWAY_DOMAIN]` with the value from Railway Dashboard (e.g., `axeltowing-production.up.railway.app`).

> GoDaddy does not support CNAME on root (@). Use Cloudflare for CNAME flattening, or request a static IP from Railway.

```
Type    Name    Value                                           TTL
------------------------------------------------------------------------
CNAME   @       [RAILWAY_DOMAIN].up.railway.app                3600
CNAME   www     [RAILWAY_DOMAIN].up.railway.app                3600
```

---

## Section B: Portal Subdomain — Vercel Hosting

Optional: only needed if `portal.axeltowing.com` is desired as a custom domain for the dashboard portal.

```
Type    Name    Value                   TTL
-------------------------------------------------
CNAME   portal  cname.vercel-dns.com    3600
```

---

## Section C: Email — Google Workspace MX Records

Delete any pre-existing MX records before adding these.

```
Type    Name    Value                       Priority    TTL
-------------------------------------------------------------------
MX      @       aspmx.l.google.com          1           3600
MX      @       alt1.aspmx.l.google.com     5           3600
MX      @       alt2.aspmx.l.google.com     5           3600
MX      @       alt3.aspmx.l.google.com     10          3600
MX      @       alt4.aspmx.l.google.com     10          3600
```

---

## Section D: Email Authentication — SPF, DKIM, DMARC

### SPF (Sender Policy Framework)

Tells receiving servers which IPs are allowed to send mail for axeltowing.com.

```
Type    Name    Value                                   TTL
----------------------------------------------------------------------
TXT     @       v=spf1 include:_spf.google.com ~all     3600
```

### DKIM (DomainKeys Identified Mail)

Replace `[DKIM_KEY]` with the public key from Google Workspace Admin → Apps → Gmail → Authenticate email.

```
Type    Name                    Value                               TTL
--------------------------------------------------------------------------------
TXT     google._domainkey       v=DKIM1; k=rsa; p=[DKIM_KEY]        3600
```

### DMARC (Domain-based Message Authentication)

```
Type    Name    Value                                                               TTL
----------------------------------------------------------------------------------------------
TXT     _dmarc  v=DMARC1; p=quarantine; rua=mailto:axletowing@gmail.com; pct=100   3600
```

---

## Section E: Domain Verification Records

These are added when third-party services need to verify domain ownership.

### Google Search Console Verification (if needed)

```
Type    Name    Value                                   TTL
----------------------------------------------------------------------
TXT     @       google-site-verification=[YOUR_CODE]    3600
```

### GoDaddy Domain Verification (auto-added during setup)

```
Type    Name    Value                   TTL
-------------------------------------------------
TXT     @       [GODADDY_VERIFY_CODE]   3600
```

---

## Complete DNS Records Table (Full Setup)

This table shows all records for a complete production setup with Railway + Google Workspace email + Cloudflare.

| Type  | Name               | Value                                                            | Priority | TTL  | Notes                          |
| ----- | ------------------ | ---------------------------------------------------------------- | -------- | ---- | ------------------------------ |
| A     | @                  | [RAILWAY_STATIC_IP]                                              | —        | 3600 | Main website — Railway         |
| CNAME | www                | axeltowing.com                                                   | —        | 3600 | www redirect to root           |
| CNAME | portal             | cname.vercel-dns.com                                             | —        | 3600 | Dashboard portal — Vercel      |
| MX    | @                  | aspmx.l.google.com                                               | 1        | 3600 | Google Workspace email         |
| MX    | @                  | alt1.aspmx.l.google.com                                          | 5        | 3600 | Google Workspace email         |
| MX    | @                  | alt2.aspmx.l.google.com                                          | 5        | 3600 | Google Workspace email         |
| MX    | @                  | alt3.aspmx.l.google.com                                          | 10       | 3600 | Google Workspace email         |
| MX    | @                  | alt4.aspmx.l.google.com                                          | 10       | 3600 | Google Workspace email         |
| TXT   | @                  | v=spf1 include:\_spf.google.com ~all                             | —        | 3600 | SPF — email authentication     |
| TXT   | google.\_domainkey | v=DKIM1; k=rsa; p=[DKIM_KEY]                                     | —        | 3600 | DKIM — replace with actual key |
| TXT   | \_dmarc            | v=DMARC1; p=quarantine; rua=mailto:axletowing@gmail.com; pct=100 | —        | 3600 | DMARC email policy             |

---

## Placeholders to Fill In

Before entering records, obtain these values:

| Placeholder        | Where to Get It                                                |
| ------------------ | -------------------------------------------------------------- |
| `[RAILWAY_IP]`     | Railway Dashboard → Project → Settings → Domains → Static IP   |
| `[RAILWAY_DOMAIN]` | Railway Dashboard → Project → Settings → Domains → Domain name |
| `[DKIM_KEY]`       | Google Workspace Admin → Apps → Gmail → Authenticate email     |

---

## TTL Guide

| TTL Value | Meaning    | When to Use                                   |
| --------- | ---------- | --------------------------------------------- |
| 600       | 10 minutes | During active changes — fast propagation      |
| 3600      | 1 hour     | Standard — good balance of speed and caching  |
| 86400     | 24 hours   | Stable records that rarely change (MX, DMARC) |

**Tip:** Lower TTL to 600 before making changes, make the change, then raise TTL back to 3600 after propagation is confirmed. This minimizes downtime during DNS updates.

---

## Propagation Check Commands

Run these from any terminal to verify DNS is resolving correctly:

```bash
# Check A record (website IP)
nslookup axeltowing.com

# Check www CNAME
nslookup www.axeltowing.com

# Check MX records (email)
nslookup -type=MX axeltowing.com

# Check TXT records (SPF/DKIM/DMARC)
nslookup -type=TXT axeltowing.com
nslookup -type=TXT _dmarc.axeltowing.com
nslookup -type=TXT google._domainkey.axeltowing.com

# Check from a specific DNS server (Google's public DNS)
nslookup axeltowing.com 8.8.8.8
```

**Online tools:**

- [dnschecker.org](https://dnschecker.org) — global propagation check
- [mxtoolbox.com](https://mxtoolbox.com) — MX record lookup and email diagnostics
- [mail-tester.com](https://mail-tester.com) — SPF/DKIM/DMARC score

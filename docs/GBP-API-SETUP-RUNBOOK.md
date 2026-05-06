# GBP API Setup — Runbook

**Goal:** authorize `julian@aiacrobatics.com` to push GBP changes (descriptions, hours, phone, categories, services, photos) to both Axle Towing locations via API, eliminating manual GBP web-UI editing.

**Time:** 3-5 minutes total. Julian-driven (one-time).

**Why:** Once this is done, every Phase 1 fix in the GBP improvement strategy becomes an idempotent script run instead of a manual session. Future SEO/content updates for any client with a GBP follow the same pattern.

---

## Prerequisites confirmed

- [x] OAuth client exists in GCP project `bubba-personal` (project number 508577890584)
- [x] `julian@aiacrobatics.com` already has a refresh token in `.fleet-config/google-cloud/gws/profiles/workspace/`
- [x] gws CLI works for Gmail/Drive/Calendar/Sheets/Docs/Tasks
- [ ] My Business Account Management API enabled (see below)
- [ ] My Business Business Information API enabled (see below)
- [ ] `https://www.googleapis.com/auth/business.manage` scope added to OAuth consent screen
- [ ] Re-authorize `julian@aiacrobatics.com` to grant the new scope
- [ ] Elliott adds `julian@aiacrobatics.com` as Manager on both GBP locations

---

## Step 1 — Enable APIs on bubba-personal (Julian, console)

Open each link, hit "Enable":

1. https://console.cloud.google.com/apis/library/mybusinessaccountmanagement.googleapis.com?project=bubba-personal
2. https://console.cloud.google.com/apis/library/mybusinessbusinessinformation.googleapis.com?project=bubba-personal

(Optional — for review responses + Q&A automation later)

3. https://console.cloud.google.com/apis/library/mybusinessverifications.googleapis.com?project=bubba-personal
4. https://console.cloud.google.com/apis/library/mybusinessqanda.googleapis.com?project=bubba-personal

**Note:** The Business Information API used to require an application form (1-2 week wait). As of late 2024, it is generally available without approval for legitimate use cases. If Julian sees a "request access" form, fill it in with: business name "AI Acrobatics", use case "manage GBP listings for client agency", expected QPS "low (<10/min)".

---

## Step 2 — Add `business.manage` scope to OAuth consent screen (Julian, console)

1. Open https://console.cloud.google.com/apis/credentials/consent?project=bubba-personal
2. Click "EDIT APP" → next to "Scopes" click "ADD OR REMOVE SCOPES"
3. In the filter box paste: `business.manage`
4. Tick the row for `https://www.googleapis.com/auth/business.manage`
5. UPDATE → SAVE AND CONTINUE → BACK TO DASHBOARD

The OAuth consent screen is in "Testing" mode — Julian's email is already on the test users list, so no public verification is required.

---

## Step 3 — Seed a GBP-scoped refresh token (run on VPS, ~60 sec)

After Step 2 is done, run:

```bash
bash /opt/agency-workspace/axel-towing/scripts/gbp-auth-init.sh
```

The script will print a Google OAuth URL. Open it in any browser logged into `julian@aiacrobatics.com`, click through the consent screen (the only scope requested is `business.manage`), copy the authorization code Google shows, and paste it back into the terminal.

The script writes `/opt/agency-workspace/.fleet-config/google-cloud/gbp-token.json` (mode 0600) — a dedicated GBP token file that the push script reads.

**Why a separate file?** The fleet's `gws` CLI keeps its refresh tokens encrypted and never exposes the raw value to scripts (good security default). For headless GBP automation we need a script-readable refresh token, so we own a dedicated one with only the `business.manage` scope (smallest possible blast radius if leaked).

Verify:
```bash
bash /opt/agency-workspace/axel-towing/scripts/gbp-list-accounts.sh
```

If you see Google's "no business profiles managed yet" message — Step 4 (Elliott adds you as Manager) hasn't happened yet. That's fine; the auth side is now done.

---

## Step 4 — Elliott adds julian@aiacrobatics.com as Manager (Elliott, GBP)

For EACH location (Apache Junction + Phoenix):

1. Go to https://business.google.com → pick the location
2. Menu (☰) → Business Profile settings → People and access
3. ADD → enter `julian@aiacrobatics.com` → role = **Manager** (NOT Owner — Manager is enough for the API and avoids transfer-of-control risk)
4. Add → done

Both locations need this independently.

---

## Step 5 — Verify end-to-end (run on VPS, post-Step-4)

```bash
bash /opt/agency-workspace/axel-towing/scripts/gbp-list-accounts.sh
# Expected output: list of accounts/locations Julian can manage,
# including both Axle Towing locations
```

If both Apache Junction + Phoenix appear, we're done with setup. Run the push script to apply Phase 1 fixes:

```bash
bash /opt/agency-workspace/axel-towing/scripts/gbp-push.sh --dry-run    # preview
bash /opt/agency-workspace/axel-towing/scripts/gbp-push.sh              # apply
```

---

## What we DON'T need from this API

- **Posts (weekly content)** — Google deprecated the GBP Posts API in 2024. We schedule posts via the GBP web UI manually (or via 3rd-party tool like LocalBrand later). Pre-staged copy in `dashboard/lib/data/gbp-content/posts.json` makes this a copy-paste job.
- **Q&A seeding** — The Q&A API is read-only for non-owner accounts. To SEED Q&A we use a separate personal Google account in the GBP web UI to ASK, then use the business account to ANSWER. Pre-staged copy in `dashboard/lib/data/gbp-content/qa.json`.
- **Photo metadata** — The Account Management Media endpoint accepts photo URLs but cannot tag faces or geo-tag retroactively. Geo-tag MUST happen at capture time on the iPhone. Pre-batched dispatch-cam photos from Elliott will be uploaded via API.

---

## Cost / risk

- All listed APIs are FREE within Google's standard quota (3000 reads/day, 600 writes/day per project — well above what we need).
- OAuth client is on a personal-tier GCP project; no billing risk.
- Re-authorization is non-destructive (preserves existing Gmail/Drive/Calendar scopes).
- Manager role is revocable — if Elliott ever leaves the relationship, he removes us from People and access, and we lose write access immediately.

---

## Audit trail

All GBP API calls log to `/opt/agency-workspace/axel-towing/.logs/gbp-push.jsonl` with timestamp, location, field changed, before/after. Can be replayed or rolled back from the log.

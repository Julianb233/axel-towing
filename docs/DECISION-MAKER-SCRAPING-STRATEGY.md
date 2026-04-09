# Decision Maker Scraping Strategy

## 500+ HOA & Property Manager Leads — Phoenix Metro

**Linear:** AI-2026
**Created:** 2026-03-24
**Owner:** Axle Towing (Elliott)
**Goal:** Build a targeted prospect database of 500+ decision makers for outbound towing contract sales campaigns

---

## 1. Target Audience Profiles

### 1A. HOA Board Presidents & Managers (Priority 1)

- **Who:** Board presidents, vice presidents, and community managers of HOAs in Maricopa County
- **Why they're high-value:** Annual board member turnover means new decision makers with no existing towing relationships — prime opportunity to get in first
- **Key pain points:** Illegal parking enforcement, liability from unauthorized vehicles, resident complaints, documentation requirements
- **Decision authority:** Board president or community manager typically signs towing contracts
- **Best targets:**
  - Communities with 50–500+ units (enough volume to matter)
  - Gated communities in Scottsdale, Chandler, Gilbert, Mesa, Tempe, Peoria
  - HOAs managed by third-party management companies (CAM-managed properties)

### 1B. Property Management Companies (Priority 1)

- **Who:** Regional/national property management firms with Phoenix-area portfolios
- **Why they're high-value:** One relationship = multiple properties. A Greystar regional manager may oversee 10–15 apartment complexes
- **Key targets (Phoenix offices):**
  - Greystar Real Estate Partners
  - CBRE Residential / Trammell Crow
  - JLL Property Management
  - Lincoln Property Company
  - Alliance Residential
  - Weidner Apartment Homes
  - Mark-Taylor Residential (AZ-based)
  - Bella Investment Group
  - MEB Management Services (AZ-based)
  - Associated Asset Management (AAM) — largest HOA manager in AZ
- **Decision authority:** Regional VP, Portfolio Manager, or Director of Operations
- **Best job titles to target on LinkedIn:** "Property Manager," "Regional Property Manager," "Portfolio Manager," "Community Association Manager (CAM)," "Director of Property Management"

### 1C. Apartment Complex Managers (Priority 2)

- **Who:** On-site property managers of complexes with 100+ units in Phoenix metro
- **Why they're high-value:** Towing contracts are typically site-manager decisions for smaller complexes; larger ones go to regional
- **Best targets:**
  - Complexes with 100–500+ units
  - Class B/C properties (more parking enforcement issues than Class A luxury)
  - Areas: Phoenix, Mesa, Tempe, Chandler, Scottsdale, Glendale, Peoria, Surprise, Avondale
- **Decision authority:** On-site manager for smaller complexes; regional manager for portfolios

### 1D. Commercial Property Owners (Priority 3)

- **Who:** Owners and managers of strip malls, retail centers, office parks, industrial properties
- **Why they're high-value:** High foot traffic = constant parking violations, especially after-hours
- **Best targets:**
  - Strip malls with 10+ tenant units
  - Office parks in Scottsdale and Tempe Corridor
  - Industrial/warehouse complexes in Phoenix/Mesa/Glendale
  - Shopping centers that don't use national towing chains
- **Decision authority:** Property owner, asset manager, or facilities manager

### 1E. Mobile Home Park Managers (Priority 3)

- **Who:** Park managers or owners of MHPs in Phoenix metro
- **Why they're high-value:** Abandoned and improperly parked vehicles are chronic issues; most parks don't have formal towing contracts
- **Best targets:**
  - Parks with 50+ spaces
  - Owner-managed vs. corporate-managed (owner-managed = direct decision maker)
- **Key areas:** Mesa, Apache Junction, El Mirage, Tolleson, South Phoenix

---

## 2. Data Sources to Scrape

### Source A: Arizona Secretary of State — HOA Registrations

- **URL:** https://ecorp.azcc.gov/EntitySearch/Index
- **What's there:** Every HOA/community association registered in Arizona as a non-profit corporation (required by ARS § 33-1803 for condominiums and § 33-1801 for planned communities)
- **Data available:** HOA name, registered agent, mailing address, officer names (board president, secretary, etc.), date of incorporation
- **Scrape strategy:** Search by entity type "Non-Profit Corporation" + keyword "homeowners association" OR "community association" + county "Maricopa"
- **Estimated yield:** 3,000–5,000 HOA records (filter down to active, 50+ units)
- **Export method:** Manual export is available as CSV; for bulk scraping use Python + requests to paginate results

### Source B: Maricopa County Assessor — Commercial Properties

- **URL:** https://mcassessor.maricopa.gov/
- **What's there:** All commercial property records in Maricopa County including owner name, mailing address, property type, square footage, parcel number
- **Data available:** Owner name/company, property address, use code (apartment = 045x codes, commercial = 03xx codes), assessed value, # of units for multifamily
- **Scrape strategy:**
  - Use Parcel Query by Use Code: codes 0411–0450 for multifamily, 0310–0370 for commercial
  - Filter by assessed value > $1M to target larger properties
  - Export: The assessor provides downloadable bulk data files at https://mcassessor.maricopa.gov/downloads/
- **Estimated yield:** 2,000+ commercial/multifamily properties; focus on 100+ unit apartments

### Source C: Google Maps / Google Business Profile

- **Search queries to use:**
  - `"property management" Phoenix AZ`
  - `"HOA management company" Scottsdale AZ`
  - `"apartment complex" Phoenix AZ 85xxx` (try each major zip code)
  - `"mobile home park" Phoenix AZ`
  - `"community association management" Maricopa County`
  - `"commercial property management" Phoenix AZ`
- **Data available:** Business name, address, phone number, website, reviews
- **Scrape method:** Use Google Maps scraper (Apify's Google Maps Scraper, or PhantomBuster) or manual list export
- **Estimated yield:** 300–500 property management companies and apartment complexes
- **Cost:** Apify Google Maps Scraper ~$15–30 per 1,000 results

### Source D: LinkedIn Sales Navigator

- **URL:** https://www.linkedin.com/sales/
- **Search filters to use:**
  - Job title: "Property Manager" OR "Community Association Manager" OR "HOA Manager" OR "Regional Property Manager" OR "Portfolio Manager"
  - Geography: Phoenix, AZ metro area (50-mile radius)
  - Company size: 10–500 employees
  - Industry: Real Estate
- **Data available:** Name, title, company, LinkedIn profile URL (use Hunter.io to find email)
- **Estimated yield:** 500–1,000 profiles matching criteria
- **Cost:** LinkedIn Sales Navigator $99–$149/month; export to CSV via Sales Navigator

### Source E: Apartments.com / ApartmentList.com

- **URLs:**
  - https://www.apartments.com/phoenix-az/
  - https://www.zillow.com/phoenix-az/apartments/
  - https://www.apartmentlist.com/az/phoenix
- **Data available:** Apartment complex name, address, # of units, management company name, contact phone/email
- **Scrape strategy:** Filter to 100+ unit complexes in Phoenix metro; use Apify's Apartments.com scraper or manual research
- **Estimated yield:** 200–400 large apartment complexes with management contact info

### Source F: HOA Management Company Websites

- **Key Arizona HOA management companies (target their staff directories):**
  - Associated Asset Management (AAM): aamaz.com — largest HOA manager in AZ, manages 400+ communities
  - City Property Management: citypropertyaz.com
  - Trestle Management Group: trestlemgt.com
  - First Service Residential: fsresidential.com (Phoenix office)
  - Associa: associaonline.com (Phoenix office)
  - Brown Community Management: browncommunitymanagement.com
  - Desert Valley Management: desertvalleymanagement.com
- **Strategy:** Visit each company's website, find community roster or "communities we manage" page, extract individual community names → cross-reference with AZ SOS data for officer/contact info

### Source G: LoopNet / CoStar — Commercial Properties

- **URL:** https://www.loopnet.com/
- **Search:** Filter to Phoenix metro, property type = Office/Retail/Industrial, 10,000+ sq ft
- **Data available:** Property owner, management company, contact info (LoopNet Plus subscription required for contact details)
- **Estimated yield:** 500–1,000 commercial properties; focus on strip malls and office parks

---

## 3. Scraping Tools & Methods

### Recommended Stack (Best ROI)

| Tool                         | Use Case                                        | Cost          | Estimated Leads  |
| ---------------------------- | ----------------------------------------------- | ------------- | ---------------- |
| **Apollo.io**                | Job title + geography targeting (LinkedIn data) | $49–$99/month | 200–300 leads    |
| **Hunter.io**                | Email finding from company domains              | $49/month     | Email enrichment |
| **Apify**                    | Google Maps + Apartments.com scraping           | $49/month     | 300–400 leads    |
| **LinkedIn Sales Navigator** | Verified job title targeting                    | $99/month     | 150–200 leads    |
| **Manual research**          | AZ SOS + Assessor bulk data                     | Free          | 100–150 leads    |

**Total estimated monthly cost:** ~$250–$350 for the first 2 months
**Total leads achievable:** 500–800 in 4 weeks

### Apollo.io (Best for HOA/Property Manager Outreach)

Apollo.io has the most comprehensive database of property management professionals with verified emails.

**Setup steps:**

1. Sign up at apollo.io → Select "Sales" plan ($99/month)
2. Navigate to People Search
3. Apply filters:
   - Job Titles: "Property Manager," "Community Manager," "HOA Manager," "CAM," "Regional Property Manager," "Portfolio Manager," "Director of Property Management"
   - Location: Phoenix, AZ + 50-mile radius (include Mesa, Scottsdale, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Avondale)
   - Industry: Real Estate
4. Add keyword filters: "homeowners association" OR "multifamily" OR "apartment" OR "community association"
5. Export CSV (up to 1,000/month on basic plan)

**Expected results:** 300–500 decision maker contacts with verified emails in Phoenix metro

### Hunter.io (Email Finding)

Use Hunter.io to find email addresses for companies identified through other sources (AZ SOS, Google Maps, Assessor data).

**Workflow:**

1. Get company domain from Google Maps or company website
2. Run domain search in Hunter.io: `hunter.io/domain-search?domain=aamaz.com`
3. Hunter returns all email addresses associated with that domain
4. Match to specific contacts found via LinkedIn

### Apify (Google Maps + Apartments.com Scraping)

For scraping Google Maps business listings and apartment directories.

**Actors to use:**

- `compass/google-maps-scraper` — Google Maps business search
- `apify/apartments-dot-com-scraper` — Apartments.com listings

**Sample Google Maps scraper input:**

```json
{
  "searchStringsArray": [
    "property management company Phoenix AZ",
    "HOA management Phoenix AZ",
    "apartment complex Phoenix AZ",
    "mobile home park Phoenix AZ"
  ],
  "maxCrawledPlacesPerSearch": 100,
  "language": "en"
}
```

### DIY Python Script (Maricopa County Assessor)

For bulk download and filtering of Maricopa County commercial property data.

**Steps:**

1. Download bulk parcel data from https://mcassessor.maricopa.gov/downloads/
2. Filter by use codes: 0411–0450 (multifamily), 0310–0370 (commercial/retail/office)
3. Filter by assessed value > $500,000
4. Match owner names to contact info via Google/LinkedIn

**Sample Python filter logic:**

```python
import pandas as pd

# Load assessor bulk data
df = pd.read_csv('maricopa_parcels.csv')

# Filter for multifamily (100+ unit apartments) and commercial
multifamily = df[df['USE_CODE'].between(411, 450)]
commercial = df[df['USE_CODE'].between(310, 370)]

# Filter for larger properties (assessed value as proxy for size)
targets = pd.concat([multifamily, commercial])
targets = targets[targets['ASSESSED_VALUE'] > 500000]

# Export
targets.to_csv('maricopa_commercial_targets.csv', index=False)
```

---

## 4. Data Fields to Collect

### Required Fields (must have before outreach)

| Field            | Description                           | Source               |
| ---------------- | ------------------------------------- | -------------------- |
| First Name       | Contact's first name                  | LinkedIn/Apollo      |
| Last Name        | Contact's last name                   | LinkedIn/Apollo      |
| Title            | Job title (e.g., "Community Manager") | LinkedIn/Apollo      |
| Company          | HOA name or management company        | AZ SOS/Apollo        |
| Email            | Work email (verified)                 | Apollo/Hunter.io     |
| Phone            | Direct line or office number          | Apollo/Google Maps   |
| Property Address | Primary property address              | Assessor/Google Maps |
| City             | City within Phoenix metro             | All sources          |

### Enrichment Fields (adds to lead score)

| Field                  | Description                                                          | Source                   |
| ---------------------- | -------------------------------------------------------------------- | ------------------------ |
| # of Units             | Number of residential units managed                                  | Assessor/Apartments.com  |
| # of Properties        | How many properties they manage                                      | LinkedIn/Manual research |
| Management Type        | Self-managed HOA vs. third-party company                             | AZ SOS/Manual            |
| Property Class         | Class A/B/C apartment                                                | Apartments.com/Manual    |
| Current Towing Vendor  | Existing relationship (if known)                                     | Manual/Cold call         |
| Contract Renewal Month | When current contract expires                                        | Manual/Cold call         |
| LinkedIn URL           | For retargeting and personalization                                  | LinkedIn                 |
| Notes                  | Context from research (e.g., "New board president elected Jan 2026") | Manual                   |

---

## 5. Lead Scoring Model

Score each lead 1–10 before adding to CRM. Prioritize outreach in score order.

### Scoring Criteria

| Criterion                      | Weight | Score | Notes                                                                                 |
| ------------------------------ | ------ | ----- | ------------------------------------------------------------------------------------- |
| Decision-maker authority       | 25%    | 1–10  | 10 = board president/owner; 5 = property manager; 2 = assistant/admin                 |
| # of properties managed        | 20%    | 1–10  | 10 = 10+ properties; 7 = 5–9; 5 = 2–4; 2 = single property                            |
| HOA/complex size (units)       | 20%    | 1–10  | 10 = 500+ units; 8 = 200–499; 6 = 100–199; 4 = 50–99; 2 = < 50                        |
| Proximity to Axle service area | 15%    | 1–10  | 10 = Phoenix/East Valley; 7 = West Valley; 5 = Outer suburbs                          |
| Evidence of towing need        | 10%    | 1–10  | 10 = Google review mentions parking complaints; 5 = no data                           |
| New to role (< 1 year)         | 10%    | 1–10  | 10 = new decision maker (prime opportunity); 5 = tenure unknown; 2 = 3+ years in role |

### Score Interpretation

- **8–10:** Hot lead — priority outreach, personalize heavily, call within 24 hours of email
- **6–7:** Warm lead — include in standard sequence, follow up within 3 days
- **4–5:** Cool lead — add to nurture sequence, lower priority
- **1–3:** Low priority — bulk email only, do not invest call time

### Quick Scoring Example

- HOA board president, self-managed, 300-unit community in Scottsdale, new to role = **Score: 9.5** (high authority + large community + new = no existing vendor relationship)
- Assistant property manager at 80-unit complex in Surprise, management company employee = **Score: 4** (gatekeeper, small, West Valley)

---

## 6. 500-Lead Database Build Plan

### Week 1: Apollo.io HOA & Property Manager Search (100 leads)

**Goal:** Get 100 verified decision maker emails from Apollo.io
**Time required:** 3–4 hours
**Cost:** Apollo.io $99/month (first month)

**Steps:**

1. Sign up for Apollo.io Sales plan
2. Run People Search with HOA/property manager filters (see Section 3)
3. Review and remove duplicate/irrelevant results
4. Export CSV with all available fields
5. Upload to Google Sheets for scoring

**Quality check:** Verify at least 70% have valid email addresses; remove all "generic" emails like info@ or admin@

---

### Week 2: Property Management Company Research (150 leads)

**Goal:** Research the 10–15 largest Phoenix-area property management companies and extract individual portfolio managers
**Time required:** 6–8 hours
**Cost:** Hunter.io $49/month + manual research

**Steps:**

1. Build master list of 15 target property management companies (see Section 1B)
2. Visit each company website — find "Our Team," "Staff Directory," or "Communities We Manage"
3. Use Hunter.io domain search to extract all employee emails
4. Cross-reference employee names with LinkedIn to confirm titles
5. Build company-level records: company name, # of Phoenix-area communities, key contacts
6. Score each contact using scoring model

**Priority companies to research first:**

- Associated Asset Management (AAM) — manages 400+ AZ communities
- Greystar Phoenix office — 30+ Phoenix properties
- CBRE Residential Phoenix — institutional-grade portfolio
- Mark-Taylor Residential — AZ-based, 20+ Phoenix communities
- MEB Management — AZ-based, strong East Valley presence

---

### Week 3: Google Maps Apartment Complex Search (150 leads)

**Goal:** Build a database of 150+ on-site apartment managers at 100+ unit complexes
**Time required:** 4–5 hours
**Cost:** Apify $49/month

**Steps:**

1. Run Apify Google Maps scraper for: "apartment complex Phoenix AZ," "apartment complex Scottsdale AZ," "apartment complex Mesa AZ," "apartment complex Tempe AZ," "apartment complex Chandler AZ," "apartment complex Gilbert AZ," "apartment complex Glendale AZ"
2. Filter results to complexes with 100+ units (use Apartments.com cross-reference)
3. Visit each property website to find manager contact info
4. Use Apollo.io or LinkedIn to find manager name and email where not listed
5. Score each lead: larger complexes score higher

**Phoenix zip codes to prioritize:**

- 85008, 85016, 85032, 85040, 85044, 85048 (Southeast Phoenix / Ahwatukee)
- 85251, 85257, 85258, 85259 (Scottsdale)
- 85201, 85202, 85203, 85210, 85213 (Mesa)
- 85281, 85282, 85283 (Tempe)

---

### Week 4: Commercial Property Owners (100 leads)

**Goal:** Identify 100 strip mall and office park owners/managers likely to need towing enforcement
**Time required:** 5–6 hours
**Cost:** Maricopa County Assessor data (free) + LoopNet free tier

**Steps:**

1. Download Maricopa County Assessor bulk parcel data (free at mcassessor.maricopa.gov)
2. Filter to commercial use codes (0310–0370), assessed value > $1M
3. Build top-100 list by property value (highest value = most likely to care about parking enforcement)
4. Research each owner/management company via Google + LinkedIn
5. Find decision maker contact (property owner or asset manager)
6. Score: strip malls and multi-tenant retail score higher than single-tenant

---

### Summary: 4-Week Cost and Time Estimate

| Week      | Source                               | Leads   | Time          | Cost      |
| --------- | ------------------------------------ | ------- | ------------- | --------- |
| Week 1    | Apollo.io                            | 100     | 3–4 hrs       | $99       |
| Week 2    | Property management company research | 150     | 6–8 hrs       | $49       |
| Week 3    | Google Maps apartment scraping       | 150     | 4–5 hrs       | $49       |
| Week 4    | Commercial property owners           | 100     | 5–6 hrs       | Free      |
| **Total** |                                      | **500** | **18–23 hrs** | **~$197** |

**Ongoing monthly cost to refresh database:** ~$150–$200/month (Apollo + Hunter + Apify)

---

## 7. GoHighLevel Import

### CSV Template

Use this exact column structure for GoHighLevel import. Save as UTF-8 CSV.

```
first_name,last_name,email,phone,company_name,address1,city,state,postal_code,tags,custom_field_title,custom_field_num_units,custom_field_num_properties,custom_field_lead_score,custom_field_management_type,custom_field_current_vendor,custom_field_renewal_month,custom_field_source
```

**Example row:**

```
John,Smith,jsmith@aamaz.com,(602) 555-1234,Associated Asset Management,1600 W Broadway Rd,Tempe,AZ,85282,"hoa-board,priority-hot,source-apollo",Community Association Manager,250,8,8.5,third-party,,March,apollo-io
```

### GHL Import Steps

1. **Prepare CSV:**
   - Open lead database in Google Sheets
   - Review for duplicates (use "Remove Duplicates" feature)
   - Verify email format (no spaces, valid domains)
   - Assign tags based on lead type and score
   - Export as CSV (File → Download → CSV)

2. **Import to GoHighLevel:**
   - Go to Contacts → Import Contacts
   - Upload CSV file
   - Map CSV columns to GHL fields:
     - `first_name` → First Name
     - `last_name` → Last Name
     - `email` → Email
     - `phone` → Phone
     - `company_name` → Company Name
     - `address1` → Address
     - `tags` → Tags (comma-separated)
     - Custom fields → Create custom fields first under Settings → Custom Fields
   - Select "Skip duplicates" option (match on email)
   - Click Import

3. **Post-import verification:**
   - Check import report for errors
   - Verify contact count matches CSV row count
   - Spot-check 5–10 records for data accuracy
   - Confirm tags are applied correctly

### Tag Structure for Segmentation

Use these tags consistently across all contacts for smart list building and campaign targeting:

**Lead Type Tags:**

- `hoa-board` — HOA board president or community association manager
- `property-manager` — Professional property manager at management company
- `apartment-manager` — On-site apartment complex manager
- `commercial-owner` — Commercial property owner or asset manager
- `mobile-home-park` — Mobile home park manager or owner

**Priority Tags:**

- `priority-hot` — Lead score 8–10 (decision maker, large portfolio, new to role)
- `priority-warm` — Lead score 6–7 (standard sequence)
- `priority-cool` — Lead score 4–5 (nurture only)

**Source Tags:**

- `source-apollo` — Sourced from Apollo.io
- `source-linkedin` — Sourced from LinkedIn
- `source-google-maps` — Sourced from Google Maps research
- `source-assessor` — Sourced from Maricopa County Assessor
- `source-manual` — Manually researched

**Pipeline Stage Tags (auto-applied by GHL automations):**

- `new-prospect` — Just imported, no outreach yet
- `outreach-active` — Currently in a nurture sequence
- `responded` — Replied to email or SMS
- `meeting-scheduled` — Demo or call booked
- `proposal-sent` — Contract proposal delivered
- `won` — Signed contract
- `lost` — Declined (add `lost-reason-*` tag)
- `re-engage` — Previously lost, re-entering pipeline

**Size Tags:**

- `size-large` — 200+ units or 5+ properties
- `size-medium` — 100–199 units or 2–4 properties
- `size-small` — Under 100 units or 1 property

---

## 8. Compliance Notes

### CAN-SPAM Compliance (Cold Email)

All cold email campaigns must comply with the CAN-SPAM Act (15 U.S.C. § 7701):

1. **From name and address:** Must be accurate. Use `Elliott@axletowing.com` or a real GHL sending domain. No deceptive sender names.
2. **Subject line:** Cannot be misleading. "Towing services for [Community Name]" is fine; "Re: Your parking issue" (implying a prior conversation) is not.
3. **Physical address:** Must include Axle Towing's physical address in every email footer.
   - Example: Axle Towing & Impound | Phoenix, AZ | (480) 288-5526
4. **Opt-out mechanism:** Every email must include a one-click unsubscribe link. GHL handles this automatically — do NOT disable it.
5. **Honor opt-outs within 10 business days:** GHL should auto-suppress on unsubscribe, but verify monthly.
6. **Commercial email labeling:** B2B cold outreach to businesses (property managers, HOA boards) is generally exempt from "commercial advertisement" restrictions if it's a legitimate business inquiry, but best practice is to still follow CAN-SPAM.

**Recommended disclaimer to include in cold emails:**

> _You are receiving this email because we believe you may benefit from professional towing services for your property. To opt out of future emails, click unsubscribe below._

### TCPA Compliance (SMS and Ringless Voicemail)

The Telephone Consumer Protection Act (47 U.S.C. § 227) is strict — violations are $500–$1,500 per message:

1. **SMS to business numbers:** Texting a direct work cell phone number (as opposed to a landline or business main line) typically requires **prior express written consent** under TCPA for commercial messages.
   - **Safest approach for cold SMS:** Only SMS numbers obtained from lead's business website or business directory (not personal cell phones). Business main lines are generally lower risk than personal cells.
   - Add opt-in language if collecting phone numbers through any form: "By providing your phone number, you consent to receive SMS messages from Axle Towing."

2. **Ringless voicemail (RVM):** The FCC treats ringless voicemail as subject to TCPA for wireless numbers. As of 2024–2025 FCC rulings:
   - Do NOT use RVM for cold outreach to cell phones without prior written consent
   - RVM to **business landlines** is lower risk but still review with legal counsel
   - **Recommended:** Use RVM only for leads who have already responded to email (warm leads), or obtain explicit opt-in via a web form or landing page before sending RVM
   - **Best practice:** Include this disclosure on any landing page capturing phone numbers: "I consent to receive calls and text messages, including ringless voicemail, from Axle Towing at the number provided."

3. **TCPA-safer alternatives:**
   - Start with email only for cold outreach
   - Gate SMS/RVM campaigns behind a form submission (property towing inquiry form on axletowing.com)
   - Use GHL to create a landing page: "Request a towing contract review for your property" → capture consent at form submission

4. **National Do-Not-Call (DNC) Registry:** Before calling any number, check against the DNC registry. B2B calls to businesses (not cell phones) have more latitude, but individual property managers using personal cells are considered consumers.

### Arizona State-Specific Notes

1. **Arizona Consumer Fraud Act (ARS § 44-1521):** All marketing must be truthful and non-deceptive. Do not make promises about response times or service levels you cannot guarantee.

2. **Arizona Spam Law:** Arizona does not have a separate state spam law — federal CAN-SPAM applies.

3. **Arizona towing contract requirements:** When closing deals, note that towing authorization agreements with HOAs and property managers must comply with ARS § 28-4843 (private property towing). Contracts must specify:
   - Towing rates (or reference to rate schedule)
   - Notification requirements to vehicle owners
   - Storage rates
     This is for the actual service contract, not the sales outreach — but Elliott should have a compliant contract template before executing agreements.

4. **HOA authority to authorize towing:** Under ARS § 33-1818, Arizona HOAs have explicit authority to tow vehicles from common areas if the CC&Rs permit it. When pitching HOA boards, you can cite this statute to validate their authority and reduce legal hesitation.

---

## Appendix A: Quick-Start Checklist

- [ ] Sign up for Apollo.io Sales plan ($99/month)
- [ ] Sign up for Hunter.io Starter plan ($49/month)
- [ ] Sign up for Apify Starter plan ($49/month)
- [ ] Download Maricopa County Assessor bulk parcel data (free)
- [ ] Create GoHighLevel custom fields (Title, # Units, # Properties, Lead Score, Management Type, Current Vendor, Renewal Month, Source)
- [ ] Create GHL tags (see Section 7)
- [ ] Create GHL smart lists: Hot Leads, HOA Boards, Property Managers, Apartment Managers, Commercial
- [ ] Build 500-lead database per Week 1–4 plan
- [ ] Import CSV to GHL
- [ ] Assign leads to nurture sequences (see AI-2027 Nurture Campaign Sequences)
- [ ] Set up GHL automation to trigger sequence on contact tag assignment

---

## Appendix B: Useful URLs

| Resource                                 | URL                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| Arizona Secretary of State Entity Search | https://ecorp.azcc.gov/EntitySearch/Index                              |
| Maricopa County Assessor                 | https://mcassessor.maricopa.gov/                                       |
| Assessor Bulk Data Downloads             | https://mcassessor.maricopa.gov/downloads/                             |
| Apollo.io                                | https://app.apollo.io/                                                 |
| Hunter.io                                | https://hunter.io/                                                     |
| Apify                                    | https://apify.com/                                                     |
| LinkedIn Sales Navigator                 | https://www.linkedin.com/sales/                                        |
| Apartments.com Phoenix                   | https://www.apartments.com/phoenix-az/                                 |
| LoopNet Phoenix Commercial               | https://www.loopnet.com/search/commercial-real-estate/phoenix-az/      |
| AAM (largest AZ HOA manager)             | https://www.aamaz.com/                                                 |
| National DNC Registry (business)         | https://www.donotcall.gov/                                             |
| FCC TCPA Rules                           | https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts |

---

_Strategy created: 2026-03-24 | Linear: AI-2026 | Next step: Begin Week 1 Apollo.io pull_

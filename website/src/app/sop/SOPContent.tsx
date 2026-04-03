"use client";

import { useState, useMemo, useEffect } from "react";

interface SOPSection {
  id: string;
  number: string;
  title: string;
  content: string;
  tags?: string[];
}

interface SOPChapter {
  id: string;
  number: string;
  title: string;
  icon: string;
  sections: SOPSection[];
}

const CHAPTERS: SOPChapter[] = [
  {
    id: "ch1",
    number: "Part 1",
    title: "Company Overview",
    icon: "🏢",
    sections: [
      {
        id: "1-1",
        number: "1.1",
        title: "Axle Towing Mission & Values",
        tags: ["mission", "values", "overview"],
        content: `Axle Towing & Impound exists to provide professional, compliant, and responsive parking enforcement and towing services to property managers, HOAs, and commercial clients throughout the Phoenix metropolitan area.

**Our Mission:** Protect property owners' parking assets while treating all parties with professionalism and respect.

**Core Values:**
- **Compliance First** — Every tow is documented, photographed, and legally defensible
- **Speed & Reliability** — Sub-30-minute average response time across the Phoenix metro
- **Transparency** — Property managers receive full documentation; nothing is hidden
- **The Hunt Mentality** — Drivers are paid $50 per vehicle. No hunting means no income.
- **Professionalism Under Pressure** — Angry vehicle owners are common. Calm, scripted responses protect the company.`,
      },
      {
        id: "1-2",
        number: "1.2",
        title: "Company History",
        tags: ["history", "background"],
        content: `Founded April 1, 2021. In under 5 years, Axle Towing has achieved what most competitors took 10-20 years to accomplish.

**Key Milestones:**
- 2021: Founded, tough first year, invested heavily in quality equipment
- 2022-2023: Built foundation with newer truck fleet (oldest truck is a 2022 model)
- 2024: Acquired EZ Towing property in Apache Junction (property, not the business)
- 2025-2026: Rapidly acquiring accounts from All City Towing's 2,000+ private property portfolio

**Current Position:**
- Approaching 5-year anniversary
- Two impound yards: Apache Junction and Phoenix
- Averaging approximately 5 new property accounts per month`,
      },
      {
        id: "1-3",
        number: "1.3",
        title: "Organizational Structure",
        tags: ["structure", "roles"],
        content: `**Owner:** Elliott (Founder, 30+ years combined team experience)
**Contact:** axletowing@gmail.com

**Operations:**
- Drivers are independent hunter-style contractors paid per vehicle ($50 per vehicle towed)
- No dispatch model — drivers patrol assigned properties proactively
- After-hours calls route to answering service protocol (see Part 5.1)

**Two Impound Yards:**
1. Apache Junction — Primary storage facility
2. Phoenix — Secondary facility

**Software System:** ToeBook — primary operations platform`,
      },
      {
        id: "1-4",
        number: "1.4",
        title: "Fleet Overview",
        tags: ["fleet", "trucks", "equipment"],
        content: `**Fleet Standard:** All trucks are 2022 or newer — among the newest fleets in the Phoenix metro.

**Equipment Types:**
- **Flatbed Trucks** — Required for AWD/4WD, luxury, modified/lowered, or low-clearance vehicles
- **Wheel-Lift Trucks** — Standard tows for most vehicles

**Maintenance Policy:**
- Pre-shift vehicle inspection required (see Section 3.2)
- Any mechanical issue must be reported immediately
- Equipment failure documentation goes to management within same shift`,
      },
    ],
  },
  {
    id: "ch2",
    number: "Part 2",
    title: "Arizona Towing Law Compliance",
    icon: "⚖️",
    sections: [
      {
        id: "2-1",
        number: "2.1",
        title: "ARS Private Property Towing Requirements",
        tags: ["ARS", "law", "compliance", "private property"],
        content: `**Primary Statutes Governing Our Operations:**

**ARS 28-4801 through 28-4884** — Chapter 11: Abandoned, Seized and Junk Vehicles
- Vehicle owners are liable for reasonable costs of towing and storage

**ARS 9-499.05** — Authority to Set Rates for Private Towing
- Governs NON-CONSENT tows from private property only
- CRITICAL: Does NOT apply to consent tows

**ARS 11-251.04** — County equivalent of 9-499.05
- NOTE: No Arizona county has adopted rate caps for unincorporated areas

**ARS 28-4847** — Vehicle Release Requirements
- Vehicles must be released during normal business hours when owner presents ID and payment
- Storage days run from midnight to midnight`,
      },
      {
        id: "2-2",
        number: "2.2",
        title: "Signage Requirements",
        tags: ["signs", "signage", "compliance", "posting"],
        content: `**ARS 9-499.05 Subsection B — Signage is Mandatory**

Without compliant signage at ALL vehicle entrances, the property has NO towing authority.

**Required Sign Content:**
- Company name (Axle Towing & Impound)
- Phone number (480-288-5526)
- Impound yard address
- Parking restrictions in effect
- Maximum towing and storage rates

**Sign Placement Requirements:**
- Every vehicle entrance to the property
- Clearly visible from all approach angles

**Before Towing ANY Vehicle:**
- Confirm signage is posted at the entrance used
- Photograph the sign as part of your tow documentation
- If signage is missing or damaged — DO NOT TOW. Call management immediately.`,
      },
      {
        id: "2-3",
        number: "2.3",
        title: "Vehicle Release Requirements",
        tags: ["release", "vehicle release", "impound"],
        content: `**ARS 28-4847 — Required Release Procedures**

**To Release a Vehicle, Owner Must Provide:**
1. Valid government-issued photo ID
2. Vehicle registration or title proving ownership
3. Payment of all applicable fees

**Release Timing:**
- Must release during normal business hours: Mon-Fri 9am-5pm, Saturday by appointment
- Do NOT hold a vehicle if the owner meets all three requirements above

**Storage Fee Rules:**
- Fees accrue from midnight to midnight (not hourly)
- If itemized charges are not provided when requested, stop accruing storage fees
- Always provide itemized receipts

**Personal Belongings:**
- Arizona law allows retrieval of personal belongings at no charge, during business hours
- Owner needs valid photo ID only
- Document what items were retrieved`,
      },
      {
        id: "2-4",
        number: "2.4",
        title: "Storage Notification Requirements",
        tags: ["storage", "notification", "MVD", "abandoned"],
        content: `**ARS 28-4838 — Abandoned Vehicle Reporting**

**Timeline (Critical — Legal Exposure If Missed):**
- Days 1-9: Vehicle in storage, document everything
- **Days 10-15: Submit abandoned vehicle transfer form to MVD — MANDATORY WINDOW**
- After 30 days: Initiate lien process per ARS 28-4841

**FAILURE TO FILE = Legal exposure for:**
- Conversion (wrongful taking of property)
- Trespass to chattel
- Potential civil liability

**Tracking System:** Management maintains a log of all vehicles beyond 7 days. Drivers must ensure documentation is complete on the day of the tow.`,
      },
      {
        id: "2-5",
        number: "2.5",
        title: "Gray Areas & Positioning Guide",
        tags: ["gray areas", "registration", "positioning", "strategy"],
        content: `**INTERNAL — Not for sharing with vehicle owners or the public.**

---

**#1 Registration Display Repositioning (Most Important)**

- WRONG: "Towing for expired registration"
- CORRECT: "Towing for NOT DISPLAYING CURRENT REGISTRATION per the lease agreement"

The lease agreement between tenant and property manager can require vehicles to display current registration. Failure to comply with the lease is grounds for tow under the property agreement.

Document as: "Vehicle not displaying current registration in violation of lease/property agreement"

---

**#2 Recovery vs. Standard Tow**

Any tow requiring more than simple hook-and-go can be classified as a recovery operation:
- Vehicles in ditches, on slopes, requiring winching
- Locked wheels, missing wheels, AWD/4WD requiring special handling
Recovery charges add $50-$250+ over standard tow rates.

---

**#3 Consent Tow Pricing Freedom**

Rate caps ONLY apply to non-consent private property tows. Consent tows (customer calls, breakdown, transport) have NO caps.

---

**#4 Unincorporated Area Rate Gap**

Outside city limits (unincorporated Maricopa County), there are NO adopted rate caps. Only "reasonable costs" standard applies.`,
      },
      {
        id: "2-6",
        number: "2.6",
        title: "What You CANNOT Tow For",
        tags: ["prohibited", "cannot tow", "rules"],
        content: `**STOP — Do NOT tow for any of the following:**

- Expired registration displayed on windshield — cannot tow for expired tags alone (use lease positioning if applicable)
- Improperly signed lots — if signage does not meet ARS requirements, do NOT tow
- Without authorization — never tow without written contract or signed towing order
- After property manager withdraws authorization — if a PM calls to cancel, stop immediately
- Vehicles displaying valid disabled placards in handicap spaces — verify placard first
- Police-authorized DUI impounds — do not touch without DPS rotation call
- From city streets — we operate private property only

**When in doubt, DO NOT TOW. Call management first.**`,
      },
      {
        id: "2-7",
        number: "2.7",
        title: "City-Specific Quick Reference",
        tags: ["city", "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Gilbert", "Glendale"],
        content: `**Phoenix Metro Non-Consent Private Property Rate Guidelines:**

| City | Max Hook Rate | Notes |
|------|--------------|-------|
| Phoenix | ~$105 | Within city limits |
| Scottsdale | ~$105 | Scottsdale city limits |
| Mesa | ~$105 | Mesa city limits |
| Tempe | ~$105 | Tempe city limits |
| Chandler | ~$105 | Chandler city limits |
| Gilbert | ~$105 | Gilbert town limits |
| Glendale | ~$105 | Glendale city limits |
| Unincorporated Maricopa | NO CAP | Reasonable standard only |
| Apache Junction | ~$105 | City limits |

**Storage Fee Caps:** Typically $15-$25/day depending on jurisdiction

**Key Rule:** These caps apply ONLY to non-consent tows. Recovery operations and related fees are charged additionally.`,
      },
    ],
  },
  {
    id: "ch3",
    number: "Part 3",
    title: "Daily Operations",
    icon: "🔧",
    sections: [
      {
        id: "3-1",
        number: "3.1",
        title: "Shift Start Procedures",
        tags: ["shift start", "checklist", "daily routine"],
        content: `**Complete ALL steps before your first patrol:**

**1. Check In with Management**
- Confirm shift assignment and property route
- Review any account holds or special instructions
- Check for overnight tows requiring follow-up

**2. ToeBook Login & Route Review**
- Log into ToeBook
- Pull up assigned properties for the shift
- Review patrol rules for each account (see Section 3.3)
- Note any accounts with special conditions

**3. Vehicle Inspection (see Section 3.2)**

**4. Equipment Check**
- Tow straps and chains — check for wear
- Camera — charged and ready (NEVER skip photos)
- Phone — charged, ToeBook accessible
- Tow receipts and notice forms stocked
- PPE — reflective vest, gloves, safety boots

**5. Begin First Patrol**
- Start with highest-priority account (most violations historically)
- Begin no later than assigned shift start time`,
      },
      {
        id: "3-2",
        number: "3.2",
        title: "Vehicle Inspection Checklist",
        tags: ["vehicle inspection", "checklist", "maintenance"],
        content: `**Pre-Shift Vehicle Inspection — Complete Before Every Shift**

**Exterior:**
- All lights working (headlights, taillights, turn signals, hazards, work lights)
- Tires — check pressure, no visible damage or low tread
- Mirrors — properly adjusted, no cracks
- Lift equipment — hydraulics working, no visible leaks
- Tow chains/straps — no fraying, breaks, or rust
- Safety chains — present and functional
- Existing body damage — document with photos, note on pre-trip report

**Interior:**
- Seat belt functional
- Horn working
- Windshield wipers working
- All dashboard warning lights — none illuminated
- Brakes — test in parking area before departure
- ToeBook app loaded and logged in

**Documentation:**
- Current registration in vehicle
- Current insurance card in vehicle
- Tow receipt forms stocked

**Report Any Issues:** Do NOT depart if safety items fail. Call management immediately.`,
      },
      {
        id: "3-3",
        number: "3.3",
        title: "ToeBook Software Guide",
        tags: ["ToeBook", "software", "system", "app"],
        content: `**ToeBook is Your Operational Bible — Check It Before Every Tow**

**What ToeBook Contains:**
- All assigned property accounts
- Patrol rules per property (patrol type, hours, violation codes)
- Vehicle history at each property
- Tow records and documentation logs
- Photo upload for tow evidence

---

**Reading Patrol Rules (DO THIS FOR EVERY PROPERTY):**
Each account has unique rules — never assume. Key fields to check:
- **Patrol Type:** Patrol-only, active tow, sticker/warning first, or tow-on-sight
- **Hours:** Day only, night only, 24/7, or specific windows
- **Violation Codes:** Which violations apply at this property
- **Special Rules:** Fire lane always, handicap always, specific guest procedures

---

**Entering a Tow Record:**
1. Select property from your account list
2. Create new tow record
3. Enter: Vehicle make, model, year, color, plate, state, VIN (if accessible)
4. Select violation type from dropdown
5. Upload ALL photos (minimum 4 photos — see Section 3.4)
6. Confirm tow and submit record

---

**Late or incomplete records reflect on your reliability.** Accurate data entry is required.`,
      },
      {
        id: "3-4",
        number: "3.4",
        title: "Patrol Procedures — The Hunt",
        tags: ["patrol", "hunt", "route", "violations", "photography"],
        content: `**You Are a Hunter. Your Income Depends on Your Patrol Quality.**

Drivers are paid $50 per vehicle towed. No base pay, no dispatch, no guarantee. Effective patrol = earnings.

---

**Violation Identification Checklist (at each vehicle):**
- Valid parking permit/pass displayed? (if required by property)
- Vehicle in authorized space?
- Fire lane clear?
- Handicap space — valid placard or plate?
- Registration displaying current tag?
- Vehicle appears operable?
- Vehicle backed in where prohibited?
- Blocking dumpster/emergency access?

---

**Tagging Procedures (Warning Tags):**
Some properties require a 48-hour warning notice before towing. Check ToeBook for each property's policy.
- If required: Photograph tag on vehicle, note time and date
- If ToeBook says tow-on-sight — do NOT tag, proceed directly to tow

---

**MANDATORY Photography Requirements (Every Tow):**

Minimum 4 photos BEFORE touching the vehicle:
1. **Full vehicle shot** — showing entire vehicle with license plate visible
2. **Violation evidence** — close-up of the specific violation
3. **Signage** — the posted towing authorization sign at the entrance
4. **Location context** — showing where on the property the vehicle is parked

These photos are your legal defense. A tow challenged without photos is indefensible.`,
      },
      {
        id: "3-5",
        number: "3.5",
        title: "Tow Execution Procedures",
        tags: ["tow", "hookup", "flatbed", "wheel-lift", "AWD", "safety"],
        content: `**Tow Execution — Safety First, Speed Second**

---

**Before Hooking Up:**
- Complete photo documentation (minimum 4 photos)
- ToeBook record created and saved
- Check vehicle for occupants (look in windows, listen — especially check back seats)
- Check for animals in vehicle
- If occupied or animal present — DO NOT TOW, call management

---

**Flatbed vs. Wheel-Lift Decision Matrix:**

| Vehicle Type | Required Method |
|-------------|----------------|
| AWD / 4WD (all-wheel or four-wheel drive) | FLATBED ONLY |
| Luxury vehicles (BMW, Mercedes, Lexus, etc.) | FLATBED preferred |
| Modified/lowered vehicles | FLATBED required |
| Low-clearance vehicles | FLATBED required |
| Standard 2WD vehicles | Wheel-lift acceptable |
| Motorcycles | Flatbed only |
| Damaged/inoperable | Flatbed required |

**AWD/4WD — CRITICAL:** NEVER wheel-lift an AWD or 4WD vehicle. Doing so can destroy the transfer case and transmission ($3,000-$8,000 in damage). When in doubt, use the flatbed.

---

**Hook-Up Safety:**
- Set truck parking brake before exiting
- Wear high-visibility vest at all times
- Position body away from traffic flow
- Secure safety chains BEFORE lifting vehicle
- Verify all connections before moving truck`,
      },
      {
        id: "3-6",
        number: "3.6",
        title: "Vehicle Storage & Lot Management",
        tags: ["storage", "impound", "lot", "yard"],
        content: `**Delivering to the Impound Yard**

**1. Arrival:**
- Notify yard of incoming vehicle
- Back into designated storage area
- Do NOT block yard access lanes

**2. Vehicle Check-In:**
- Complete ToeBook tow record with yard delivery confirmation
- Note odometer reading
- Take 2 arrival photos: vehicle in storage spot and yard log entry

**3. Personal Belongings Documentation:**
- Check for visible valuables before locking (do not search interior)
- Note any visible items in the tow record
- Vehicle owners may retrieve belongings during business hours at no charge

**4. Lot Security:**
- Lock all access gates when last person leaves
- Report any security concerns to management immediately

**5. Storage Day Count:**
- Days run midnight to midnight
- Day 1 = the calendar day of the tow
- Management tracks storage for MVD notification deadlines (Days 10-15)`,
      },
    ],
  },
  {
    id: "ch4",
    number: "Part 4",
    title: "Violation Types & Procedures",
    icon: "🚫",
    sections: [
      {
        id: "4-1",
        number: "4.1",
        title: "Fire Lane Violations",
        tags: ["fire lane", "violation", "emergency access"],
        content: `**Fire Lane Tows — Tow-On-Sight, No Warning Required**

Fire lanes are emergency access routes. Blocking them is a safety hazard and immediate tow authority.

**Evidence Required:**
- Photo of vehicle in fire lane
- Photo of fire lane markings (painted curb, signs, or both)
- Full vehicle photo with plate visible
- Sign photo

**Special Notes:**
- Even briefly parked vehicles in fire lanes are towable
- "I was only there for a minute" is not a defense
- Do NOT wait to verify the owner is absent — fire lane violations are immediate`,
      },
      {
        id: "4-2",
        number: "4.2",
        title: "Handicap Parking (No Permit)",
        tags: ["handicap", "ADA", "disability", "permit", "placard"],
        content: `**Handicap Space Violations — Verify Placard First**

**Before Towing — Verify:**
- Confirm NO valid placard hanging from mirror
- Confirm NO valid handicap license plate
- Check rear window/dashboard for any permits
- Some states use rear-window static clings — look carefully

**What Counts as Valid:**
- State-issued blue/white hanging placard (must not be expired)
- Handicap license plate (any state)
- Temporary placards (red placards) — valid until expiration date

**What Does NOT Count:**
- Placard on dashboard (must be hanging from mirror when parked)
- Expired placard (check date on bottom of placard)
- Photocopy of placard

**ToeBook Code:** HANDICAP_NO_PERMIT`,
      },
      {
        id: "4-3",
        number: "4.3",
        title: "Not Displaying Current Registration",
        tags: ["registration", "tags", "license plate", "sticker", "lease"],
        content: `**Registration Display Violations — Use Correct Positioning**

**CRITICAL — Always use the lease-based framing:**
- Document as: "Vehicle not displaying current registration in violation of lease/property agreement"
- NEVER document as "expired registration" or "expired tags"

**Why This Matters:**
ARS protects vehicles from being towed for expired registration alone. But the property management lease can require vehicles to display current registration as a condition of parking. Violation of the lease = valid tow authority.

**Evidence Required:**
- Close-up of the registration area showing no current year sticker
- Full vehicle photo
- Sign photo
- Note in ToeBook: "Vehicle not displaying current registration per property lease agreement"

**IMPORTANT:** If the property does NOT have a lease clause about registration — check with management before towing for this violation.`,
      },
      {
        id: "4-4",
        number: "4.4",
        title: "Inoperable & Stored Vehicles",
        tags: ["inoperable", "stored", "abandoned", "junk"],
        content: `**Signs of an Inoperable Vehicle:**
- Resting on flat tires (not just low pressure)
- Vehicle on blocks or jack stands
- Missing wheels
- Extensive visible mechanical disassembly
- Vegetation growing around or under vehicle
- Accumulation of dust suggesting no movement for months

**Process:**
1. Photograph all signs of inoperability
2. Check ToeBook for prior warnings at this property/vehicle
3. If property requires warning first — tag with 48-hour notice
4. If tow-on-sight for stored vehicles — proceed with standard documentation

**ToeBook Code:** INOPERABLE or STORED_VEHICLE`,
      },
      {
        id: "4-5",
        number: "4.5",
        title: "Backed-In Violations",
        tags: ["backed in", "parking rules", "forward-in only"],
        content: `**Backed-In Violations (Where Prohibited)**

Some properties prohibit backing into parking spaces for safety or aesthetic reasons.

**Verify Before Towing:**
- Check ToeBook — is backed-in parking specifically prohibited at this property?
- Some properties have warning-only policy for first offense
- Check property signage for "Forward-in Parking Only" signs

**Evidence Required:**
- Photo showing vehicle is backed in
- Photo of any "Forward-In Only" signage
- Full vehicle photo with plate

If unsure whether this property enforces backed-in violations, call management before towing.`,
      },
      {
        id: "4-6",
        number: "4.6",
        title: "Double Parking",
        tags: ["double parking", "blocking", "violation"],
        content: `**Double Parking Violations**

Double parking (blocking another legally parked vehicle or blocking a lane) is an immediate tow violation at most properties.

**Evidence Required:**
- Photo showing the vehicle is clearly double-parked
- Full vehicle photo with plate
- Signage photo

**Notes:**
- If the double-parked vehicle is blocking another resident's vehicle, that resident may call for expedited tow — flag as urgent in ToeBook

**ToeBook Code:** DOUBLE_PARKING`,
      },
      {
        id: "4-7",
        number: "4.7",
        title: "Blocking Dumpsters & Emergency Access",
        tags: ["dumpster", "blocking", "emergency access"],
        content: `**Immediate Tow Authority — No Warning Required:**
- Vehicle blocking dumpster enclosure (prevents trash pickup)
- Vehicle blocking emergency egress (fire exits, building exits)
- Vehicle blocking loading dock or fire department access route

**Evidence Required:**
- Photo showing vehicle directly blocking dumpster/access
- Full vehicle photo with plate
- Wide shot showing blocked access context
- Any signage at dumpster enclosure

**ToeBook Code:** BLOCKING_DUMPSTER or BLOCKING_ACCESS`,
      },
      {
        id: "4-8",
        number: "4.8",
        title: "Unauthorized Parking",
        tags: ["unauthorized", "no permit", "unregistered", "guest"],
        content: `**Unauthorized Parking — No Permit/Pass**

The most common violation type.

**Property-Specific Permit Systems:**
- Some properties use hang tags
- Some use resident stickers on bumper/window
- Some use digital permits (check ToeBook for verification system)

**Evidence Required:**
- Close-up photo showing NO valid permit displayed
- Full vehicle photo with plate
- Signage photo

**Guest Parking Rules:**
- Check ToeBook for guest parking limits at each property (often 24-72 hours)
- Some properties require guest registration with office — check account notes
- When in doubt on guest parking, tag first, tow on second patrol if still present

**ToeBook Code:** NO_PERMIT or UNAUTHORIZED`,
      },
      {
        id: "4-9",
        number: "4.9",
        title: "Guest Parking Violations",
        tags: ["guest", "guest parking", "time limit", "visitor"],
        content: `**Guest Parking Time Limit Violations**

**Process:**
1. On first observation — mark in ToeBook with timestamp and photo (plate and location)
2. Return on next patrol
3. If vehicle exceeded time limit and has not moved — proceed with tow

**Verification Tip:**
Check for any change in vehicle position between observations. Compare plate photos.

**Evidence Required:**
- Photo from first observation (with timestamp)
- Photo from tow observation (with timestamp — same plate, same location)
- Signage showing guest time limits

**ToeBook Code:** GUEST_OVERSTAY`,
      },
    ],
  },
  {
    id: "ch5",
    number: "Part 5",
    title: "Customer Interaction Protocols",
    icon: "🗣️",
    sections: [
      {
        id: "5-1",
        number: "5.1",
        title: "The Answering Service Protocol",
        tags: ["after hours", "answering service", "scripts", "phone"],
        content: `**CRITICAL: After-Hours Protocol — You Are NOT the Tow Company**

After business hours, staff and drivers do NOT identify as Axle Towing when answering calls.

**The Core Position:** You are the answering service for the tow company.

---

**Answering Script (After Hours):**
> "Thank you for calling, you've reached the answering service for the towing company. I'll do my best to help you. What's going on?"

---

**Scenario 1: "My car was towed"**
> "I understand that's frustrating. I can look up your vehicle's location. Can I get your name and license plate? Your vehicle is at [yard address]. Business hours for retrieval are Monday through Friday, 9am to 5pm, and Saturday by appointment. The direct number is 480-288-5526."

---

**Scenario 2: "I want my car back tonight"**
> "I hear you. Normal release hours are 9am-5pm weekdays. If you need after-hours release, there is an after-hours gate access fee of [current fee]. Would you like me to arrange that, or can you come during regular business hours?"

---

**Scenario 3: Angry caller / Threats**
> "I understand you're upset. I'm just the answering service — I'm not the tow company. I can leave a message for management and have them call you first thing in the morning. Would that help?"

---

**DO NOT:**
- Apologize for the tow
- Say "we shouldn't have towed it"
- Get into arguments about legality
- Give your personal name
- Make promises you cannot keep

**IF CALLER THREATENS PHYSICAL HARM:** Hang up and call 911.`,
      },
      {
        id: "5-2",
        number: "5.2",
        title: "Angry Vehicle Owner Interactions",
        tags: ["angry", "confrontation", "conflict", "vehicle owner", "safety"],
        content: `**Handling Angry Vehicle Owners at the Property**

**FIRST: Assess Safety**
If the person is aggressive, threatening, or blocking your truck — call 911 first.

---

**Standard Script (Calm confrontation):**
> "I understand you're upset. The property management has authorized this removal per the posted signs. I'm following their instructions."

If they ask you to stop:
> "Once I've started the removal process, I'm not authorized to stop it without direction from the property manager or management. You can call [PM contact] directly."

---

**Vehicle Release During Tow:**
Arizona law: If you have started to lift the vehicle but have NOT LEFT the property, the owner CAN stop the tow by presenting themselves and paying a drop fee. Once you leave the property, the vehicle goes to the yard.

---

**What You NEVER Do:**
- Put hands on the vehicle owner
- Block them from calling 911
- Argue about whether the tow was justified
- Give out your personal contact information

Document confrontations in ToeBook.`,
      },
      {
        id: "5-3",
        number: "5.3",
        title: "Property Manager Communications",
        tags: ["property manager", "PM", "account", "communication"],
        content: `**Property managers are our customers. Vehicle owners are not.**

---

**Response Time Standards:**
- PM calls/texts: Respond within 15 minutes during business hours
- PM emergency (fire lane, blocked egress): On-site target within 30 minutes
- Non-urgent patrol requests: Within 1-2 hours or by next scheduled patrol

---

**Tow Notifications:**
After every tow, text or email the PM: plate, location on property, time towed, where stored.

---

**Handling PM Disputes:**
If a PM says a tow was wrong:
> "I'll let management know immediately. They'll reach out to you within [timeframe]. Can I get your name and callback number?"

Do NOT promise to release a vehicle — that decision belongs to management.

---

**The Follow-Up Calendar:**
Management runs a quarterly follow-up calendar for accounts on hold. If your assigned property is on this list, make an in-person courtesy visit during your patrol shift.`,
      },
      {
        id: "5-4",
        number: "5.4",
        title: "Police & Law Enforcement Interactions",
        tags: ["police", "law enforcement", "officer"],
        content: `**Interactions with Law Enforcement**

**General Protocol:**
- Be cooperative and professional at all times
- Have your towing license and truck registration accessible
- Provide property tow authorization documentation if requested
- Do NOT argue with officers — if told to stop, stop and call management

---

**If Officer Asks You to Release a Vehicle:**
> "Officer, I'm in the process of an authorized private property tow. I'll contact my management right away."

Call management immediately. Do not release without management authorization unless the officer presents a lawful written order.

---

**If Vehicle Owner Calls Police During Tow:**
Remain calm. Have ready:
1. Your towing contractor license
2. The property tow authorization agreement
3. Your photo documentation

Most officers will confirm it is a civil matter and stand by while you complete the tow.`,
      },
      {
        id: "5-5",
        number: "5.5",
        title: "Vehicle Release Procedures",
        tags: ["release", "payment", "fees", "ID", "retrieval"],
        content: `**Vehicle Release — Step-by-Step**

Business hours: Mon-Fri 9am-5pm, Saturday by appointment.

---

**Required Documents from Owner:**
1. Valid government-issued photo ID
2. Vehicle registration or title (proves ownership)
3. Payment for all fees

---

**Fee Calculation:**
1. Tow fee (base hook/transport fee)
2. Storage fees (days times daily rate)
3. Related fees as applicable
4. Provide itemized receipt — ALWAYS

---

**Payment Forms Accepted:**
Cash, credit/debit card, certified check.
Do NOT refuse payment to hold the vehicle longer.

---

**Personal Belongings (No Payment Required):**
- Valid photo ID only
- At no charge
- During business hours
- Document what was retrieved in tow record

---

**After Release — Close Out in ToeBook:**
Mark tow record as "Released," note payment method, date, and time.`,
      },
    ],
  },
  {
    id: "ch6",
    number: "Part 6",
    title: "Account Management",
    icon: "📋",
    sections: [
      {
        id: "6-1",
        number: "6.1",
        title: "New Account Onboarding",
        tags: ["new account", "onboarding", "property", "setup"],
        content: `**New Account Onboarding Process**

1. **Property Site Visit** — Map all vehicle entrances, count parking spaces, identify fire lanes and problem areas, photograph property layout

2. **Signage Installation** — We provide and install at zero cost to PM; one sign per vehicle entrance minimum; meets ARS 9-499.05 requirements; signs go up BEFORE any enforcement begins

3. **ToeBook Account Setup** — Management creates the account with property details, patrol rules, and violation codes

4. **Towing Authorization Agreement** — Signed by authorized property rep; specifies enforcement hours, violation types, and contact hierarchy

5. **First Patrol Brief** — Driver assigned to property is briefed; review ToeBook account details

6. **Soft Launch** — First 2 weeks are warning-tag only (unless PM requests immediate enforcement)`,
      },
      {
        id: "6-2",
        number: "6.2",
        title: "Property-Specific Rule Review",
        tags: ["property rules", "account notes", "ToeBook"],
        content: `**Every Property is Different — Always Check ToeBook First**

Never assume one property's rules apply to another.

**Check These Fields Every Visit:**
- **Patrol Type:** Warning, active tow, or tow-on-sight
- **Enforcement Hours:** Day only, night only, 24/7, or specific windows
- **Active Violations:** Which violation types are authorized at this property
- **Special Instructions:** Any exceptions, excluded vehicles (PM's car, contractors)
- **Contact Hierarchy:** Who to call if owner confrontation, who approves releases
- **Account Status:** Active, on hold, or canceled

**Account Holds:**
If an account is on hold in ToeBook — do NOT tow. Tag only if management authorizes.`,
      },
      {
        id: "6-3",
        number: "6.3",
        title: "The Follow-Up Calendar System",
        tags: ["follow up", "calendar", "accounts on hold", "quarterly"],
        content: `**Quarterly Follow-Up System**

Management runs a follow-up calendar for:
- Accounts that have been put on hold
- Accounts that have not generated activity in 60+ days
- Accounts where the property manager contact has changed

---

**The Rule:** If you don't follow up, the manager is not going to call you.

Property managers are busy. They will not chase you to reactivate an account. We chase them, proactively, on a schedule.

---

**Follow-Up Schedule:**
- 30 days post-onboarding: Check-in call/text to PM
- 60 days: Check-in with patrol activity report
- 90 days: In-person visit or video call review
- Quarterly: All active accounts receive a brief performance summary

---

**Drivers' Role:**
If you notice a property has not had tow activity in weeks, mention it to management. If a PM says they're considering switching providers, report to management immediately.`,
      },
      {
        id: "6-4",
        number: "6.4",
        title: "Account Hold Procedures",
        tags: ["hold", "pause", "account status"],
        content: `**When an Account Goes on Hold**

Accounts are placed on hold when:
- PM requests a pause (construction, special event, grace period for new residents)
- Management is resolving a dispute
- Legal review of a specific tow
- Property changes ownership/management

**Driver Responsibility During Hold:**
- Check ToeBook status before EVERY patrol
- If account is on hold — do NOT tow (tag only if explicitly authorized by management)
- If you accidentally tag a vehicle on a hold account — call management immediately

**Hold Expiration:**
Holds are reviewed every 30 days. Management is responsible for following up with PM to reactivate or formally cancel.`,
      },
      {
        id: "6-5",
        number: "6.5",
        title: "Account Cancellation Prevention",
        tags: ["cancellation", "retention", "account loss"],
        content: `**Keeping Accounts — What Drives Cancellations**

**Top Causes of Account Cancellations:**
1. Towing a vehicle the PM knows (resident, contractor, their own car)
2. Towing without calling the PM first (for properties requiring courtesy calls)
3. Slow response time on emergency requests
4. Failing to provide documentation after a tow
5. Unprofessional behavior during confrontations
6. Broken/missing signage not reported

**Prevention Behaviors (Every Driver):**
- Always check ToeBook notes for "call PM before tow" properties
- Report broken signage same shift
- Respond to PM communications within 15 minutes
- Send PM notification after every tow
- Act professionally — every interaction is a referral

**If a PM Expresses Concerns:** Tell management immediately.`,
      },
    ],
  },
  {
    id: "ch7",
    number: "Part 7",
    title: "Safety & Emergency Procedures",
    icon: "🦺",
    sections: [
      {
        id: "7-1",
        number: "7.1",
        title: "Roadside Safety",
        tags: ["safety", "roadside", "PPE", "traffic", "vest"],
        content: `**Your Safety Is the #1 Priority — Always**

Towing is one of the most dangerous jobs in the service industry. Most driver fatalities happen when drivers are struck by vehicles.

---

**Required PPE:**
- High-visibility safety vest — worn at ALL times when outside the truck on any roadside or parking lot
- Safety boots (steel-toe recommended)
- Gloves when handling chains, straps, or mechanical components

---

**Traffic Safety:**
- Position your truck to protect the work zone — use warning lights at all times
- Stand away from the traffic lane; use the protected side of the vehicle
- Do NOT rush hook-up to avoid traffic — it creates more danger
- If in an unsafe location, reposition before beginning hook-up

---

**Night Operations:**
- Use truck work lights fully
- Wear reflective vest
- Be extra cautious of reduced visibility

**If You Feel Unsafe:** Stop the operation and call management. No tow is worth your safety.`,
      },
      {
        id: "7-2",
        number: "7.2",
        title: "Adverse Weather Operations",
        tags: ["weather", "rain", "heat", "monsoon", "Arizona"],
        content: `**Arizona Weather Considerations**

**Extreme Heat (May-October):**
- Carry and drink water constantly — minimum 1 gallon per shift
- Take shade breaks
- Watch for heat stroke symptoms: confusion, no sweating despite heat, rapid heartbeat
- Check back seats for children or animals more carefully in summer

**Monsoon Season (July-September):**
- Flash flooding — do NOT drive into flooded washes or streets
- High winds can shift vehicles mid-hook-up — be aware
- Dust storms (haboobs): Pull off road, turn OFF your lights (to avoid being rear-ended), wait for storm to pass
- Lightning: Stay in truck if active lightning

**Cold Snaps (December-February):**
- Ice on bridges and overpasses when temps drop below 32 degrees F
- Check tire condition more carefully (cold affects tire pressure)`,
      },
      {
        id: "7-3",
        number: "7.3",
        title: "Accident & Incident Reporting",
        tags: ["accident", "incident", "report", "damage"],
        content: `**If You Have an Accident or Incident**

**Immediate Steps:**
1. Stop immediately and check for injuries
2. Call 911 if there are injuries or significant property damage
3. Call management immediately — before moving vehicles if safe to do so
4. Do NOT admit fault
5. Exchange information with other parties
6. Document with photos: all vehicles involved, scene, damage, road conditions

---

**Incident Report Required Within 24 Hours For:**
- Any accident involving your truck
- Any damage to a towed vehicle
- Any injury (to you or anyone else)
- Any confrontation involving threats or physical contact
- Any police interaction related to a tow

**Never assume something is fine — report everything.**`,
      },
      {
        id: "7-4",
        number: "7.4",
        title: "Equipment Malfunction Procedures",
        tags: ["equipment", "malfunction", "breakdown"],
        content: `**Truck or Equipment Failure During a Shift**

**If Truck Breaks Down:**
1. Pull to a safe location immediately
2. Activate hazard lights
3. Call management with exact location
4. Do NOT attempt repairs unless you are a qualified mechanic
5. If towing a vehicle: do not unhook — wait for assistance unless safety requires it

**If Lift Equipment Fails During a Tow:**
1. Stabilize the vehicle — use safety chains to hold position
2. Do NOT force hydraulics that are not responding
3. Call management immediately

**Worn/Broken Straps or Chains:**
- Never use equipment you suspect is damaged
- Remove from service immediately, tag as DO NOT USE
- Report to management for replacement before next shift`,
      },
    ],
  },
  {
    id: "ch8",
    number: "Part 8",
    title: "New Driver Onboarding",
    icon: "🎓",
    sections: [
      {
        id: "8-1",
        number: "8.1",
        title: "First Week Training Schedule",
        tags: ["training", "new driver", "onboarding", "week 1"],
        content: `**New Driver — First Week Schedule**

**Day 1: Orientation**
- Read this entire SOP handbook
- Company overview and values with management
- ToeBook account setup and walkthrough
- Review all violation types with management
- Familiarize yourself with both impound yard locations

**Day 2: Ride-Along (Observation Only)**
- Ride with experienced driver for full shift
- Observe patrol procedures, hook-up techniques, documentation
- Ask questions freely — there are no stupid questions in training

**Day 3: Ride-Along (Assisted)**
- You perform the steps, experienced driver supervises
- Complete 2+ full tow documentation sequences
- Practice ToeBook data entry with real patrol data

**Day 4: Solo Patrol (Simple Route)**
- Assigned to lower-complexity properties only
- Management available by phone throughout shift
- Target: Complete 1 tow independently with full documentation
- End-of-day debrief with management

**Day 5: Review & Sign-Off**
- Review documentation from the week
- Identify any gaps in understanding
- Complete Solo Patrol Readiness Assessment (Section 8.3)
- If passed: cleared for independent patrol`,
      },
      {
        id: "8-2",
        number: "8.2",
        title: "Ride-Along Checklist",
        tags: ["ride along", "training", "checklist", "observation"],
        content: `**Ride-Along Observation Checklist**

Check off each item as you observe it being performed.

**Pre-Shift:**
- Pre-shift vehicle inspection
- ToeBook login and route review
- Equipment check

**Patrol:**
- Property entry and initial scan
- ToeBook account review before patrol
- Violation identification process
- Decision: tow vs. tag vs. pass
- Mandatory photography (all 4 photo types)

**Tow Execution:**
- ToeBook record creation
- Vehicle occupant/animal check
- Flatbed vs. wheel-lift decision
- Hook-up safety procedure
- Vehicle secured and ready to transport

**Documentation:**
- ToeBook record complete with all required fields
- Photos uploaded to record
- Delivery to yard documentation

**Customer Interactions:**
- Property manager communication example
- Vehicle owner confrontation example
- After-hours answering service protocol example`,
      },
      {
        id: "8-3",
        number: "8.3",
        title: "Solo Patrol Readiness Assessment",
        tags: ["readiness", "assessment", "solo", "certification"],
        content: `**Solo Patrol Readiness Assessment — Must Pass Before Independent Patrol**

Conducted by management at end of Week 1.

**Knowledge Check (Verbal — Pass/Fail):**
- Name 5 violation types and their evidence requirements
- Explain the registration display positioning (Section 2.5)
- Recite the after-hours answering service script (Section 5.1)
- Explain flatbed vs. wheel-lift decision rules (Section 3.5)
- State the mandatory photo requirements (4 photos minimum)
- Explain what to do if a vehicle is AWD (never wheel-lift)
- Explain the 30-day MVD notification requirement

**Practical Demonstration (Observed — Pass/Fail):**
- Log into ToeBook and navigate to a property's patrol rules
- Create a test tow record with complete information
- Upload 4 sample photos correctly tagged
- Perform pre-shift vehicle inspection

**Passing Standard:** All items must be marked Pass. Any Fail requires additional coaching and re-assessment.

**Upon Clearance:**
- Management signs off in ToeBook
- Driver added to independent patrol rotation
- Assigned starting route (simpler properties first)
- 30-day check-in scheduled`,
      },
      {
        id: "8-4",
        number: "8.4",
        title: "90-Day Performance Review",
        tags: ["90 day", "review", "performance", "evaluation"],
        content: `**90-Day Performance Review Criteria**

**Documentation Quality:**
- Average photos per tow (minimum 4 required)
- ToeBook record completion rate (100% required)
- Timeliness of record submission (same shift required)

**Operational Metrics:**
- Tows per patrol shift
- Response time to PM urgent calls
- Any incidents, complaints, or disputed tows

**Compliance:**
- Zero unauthorized tows (towing without proper documentation)
- Zero tows from properties on hold
- Zero AWD/4WD wheel-lift incidents

**Customer Relations:**
- PM satisfaction feedback (any complaints logged)
- Confrontation incidents and how handled
- Professionalism feedback

**90-Day Review Outcomes:**
- **Meets Standards:** Continue on current rotation, eligible for higher-complexity accounts
- **Needs Improvement:** Performance improvement plan, 30-day re-review
- **Exceptional:** Priority account assignments, potential mentorship of new drivers

**Note:** Pay is performance-based ($50/vehicle). High documentation quality means fewer disputes, more vehicles retained in impound, more net earnings per tow.`,
      },
    ],
  },
];

export default function SOPContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChapter, setActiveChapter] = useState<string>("ch1");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["1-1"])
  );

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: Array<{ chapter: SOPChapter; section: SOPSection }> = [];
    for (const chapter of CHAPTERS) {
      for (const section of chapter.sections) {
        if (
          section.title.toLowerCase().includes(q) ||
          section.content.toLowerCase().includes(q) ||
          section.tags?.some((t) => t.toLowerCase().includes(q)) ||
          chapter.title.toLowerCase().includes(q)
        ) {
          results.push({ chapter, section });
        }
      }
    }
    return results;
  }, [searchQuery]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const activeChapterData = CHAPTERS.find((c) => c.id === activeChapter);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("sop-search")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1923] text-white">
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      {/* Header */}
      <div className="no-print sticky top-0 z-40 bg-[#0f1923]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-sm font-bold shrink-0">
              AX
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none">
                Axle Towing & Impound
              </div>
              <div className="text-xs text-white/50">
                Driver & Staff SOP Handbook
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-48 max-w-md relative">
            <input
              id="sop-search"
              type="text"
              placeholder="Search procedures… (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => {
                const all = new Set<string>();
                CHAPTERS.forEach((ch) =>
                  ch.sections.forEach((s) => all.add(s.id))
                );
                setExpandedSections(all);
                setTimeout(() => window.print(), 300);
              }}
              className="text-xs px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
            >
              🖨️ Print PDF
            </button>
            <span className="text-xs text-white/30 hidden sm:block">
              Rev. March 2026
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="no-print w-56 shrink-0 sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto border-r border-white/10 py-4">
          <div className="px-3 mb-3">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">
              Chapters
            </div>
          </div>
          <nav>
            {CHAPTERS.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setActiveChapter(chapter.id);
                  setSearchQuery("");
                }}
                className={`w-full text-left px-3 py-2.5 flex items-start gap-2.5 transition-all border-l-2 ${
                  activeChapter === chapter.id && !searchQuery
                    ? "bg-red-600/20 border-red-500 text-white"
                    : "border-transparent hover:bg-white/5 text-white/60 hover:text-white"
                }`}
              >
                <span className="text-sm shrink-0 mt-0.5">{chapter.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs text-white/40">{chapter.number}</div>
                  <div className="text-xs font-medium leading-tight">
                    {chapter.title}
                  </div>
                </div>
              </button>
            ))}
          </nav>

          <div className="px-3 mt-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/30 leading-relaxed">
              <strong className="text-white/50">Internal Use Only</strong>
              <br />
              Not for distribution to vehicle owners.
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-5 py-7">
          {/* Search Results */}
          {searchQuery && searchResults !== null && (
            <div className="fade-in">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white mb-1">
                  Search Results
                </h2>
                <p className="text-white/50 text-sm">
                  {searchResults.length} result
                  {searchResults.length !== 1 ? "s" : ""} for &ldquo;
                  {searchQuery}&rdquo;
                </p>
              </div>

              {searchResults.length === 0 ? (
                <div className="bg-white/5 rounded-xl p-8 text-center text-white/40">
                  No procedures found. Try different keywords.
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map(({ chapter, section }) => (
                    <div
                      key={section.id}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-colors cursor-pointer"
                      onClick={() => {
                        setActiveChapter(chapter.id);
                        setSearchQuery("");
                        setExpandedSections(
                          (prev) => new Set([...prev, section.id])
                        );
                        setTimeout(
                          () =>
                            document
                              .getElementById(`section-${section.id}`)
                              ?.scrollIntoView({ behavior: "smooth" }),
                          100
                        );
                      }}
                    >
                      <div className="px-4 py-2 bg-white/5 flex items-center gap-2">
                        <span>{chapter.icon}</span>
                        <span className="text-xs text-white/40">
                          {chapter.title}
                        </span>
                        <span className="text-white/20">›</span>
                        <span className="text-xs font-semibold text-white/60">
                          {section.number}
                        </span>
                      </div>
                      <div className="px-4 py-3">
                        <h3 className="font-semibold text-white mb-1">
                          {section.title}
                        </h3>
                        <p className="text-sm text-white/50 line-clamp-2">
                          {section.content.slice(0, 180)}…
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chapter Content */}
          {!searchQuery && activeChapterData && (
            <div className="fade-in">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{activeChapterData.icon}</span>
                  <div>
                    <div className="text-sm text-red-400 font-medium">
                      {activeChapterData.number}
                    </div>
                    <h1 className="text-2xl font-bold text-white">
                      {activeChapterData.title}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() =>
                      setExpandedSections((prev) => {
                        const next = new Set(prev);
                        activeChapterData.sections.forEach((s) =>
                          next.add(s.id)
                        );
                        return next;
                      })
                    }
                    className="text-xs px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={() =>
                      setExpandedSections((prev) => {
                        const next = new Set(prev);
                        activeChapterData.sections.forEach((s) =>
                          next.delete(s.id)
                        );
                        return next;
                      })
                    }
                    className="text-xs px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {activeChapterData.sections.map((section) => {
                  const isOpen = expandedSections.has(section.id);
                  return (
                    <div
                      key={section.id}
                      id={`section-${section.id}`}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-red-400 shrink-0 w-8">
                            {section.number}
                          </span>
                          <span className="font-semibold text-white">
                            {section.title}
                          </span>
                        </div>
                        <span
                          className={`text-white/40 transition-transform duration-200 shrink-0 ml-4 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-white/10">
                          <SOPMarkdown content={section.content} />
                          {section.tags && (
                            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                              {section.tags.map((tag) => (
                                <button
                                  key={tag}
                                  onClick={() => setSearchQuery(tag)}
                                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30 hover:bg-red-600/20 hover:text-red-300 transition-colors"
                                >
                                  #{tag}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Chapter Nav */}
              <div className="flex justify-between items-center mt-8 pt-5 border-t border-white/10 no-print">
                {CHAPTERS.findIndex((c) => c.id === activeChapter) > 0 ? (
                  <button
                    onClick={() => {
                      const idx = CHAPTERS.findIndex(
                        (c) => c.id === activeChapter
                      );
                      setActiveChapter(CHAPTERS[idx - 1].id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    ← Previous
                  </button>
                ) : (
                  <div />
                )}
                {CHAPTERS.findIndex((c) => c.id === activeChapter) <
                CHAPTERS.length - 1 ? (
                  <button
                    onClick={() => {
                      const idx = CHAPTERS.findIndex(
                        (c) => c.id === activeChapter
                      );
                      setActiveChapter(CHAPTERS[idx + 1].id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    Next Chapter →
                  </button>
                ) : (
                  <div className="text-sm text-green-400 font-medium">
                    ✓ End of Handbook
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function SOPMarkdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(
        <h4 key={i} className="text-base font-bold text-white mt-5 mb-2">
          {line.slice(4)}
        </h4>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-white mt-5 mb-2">
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="border-white/10 my-4" />);
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(<SOPTable key={`table-${i}`} lines={tableLines} />);
      continue;
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* "))
      ) {
        listItems.push(lines[i].replace(/^[-*]\s/, ""));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-1.5 my-3 pl-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-white/80">
              <span className="text-red-400 mt-0.5 shrink-0">•</span>
              <span>
                <InlineMarkdown text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-4 border-red-500/50 bg-red-500/10 pl-4 py-3 my-3 rounded-r-lg text-sm text-white/90 italic"
        >
          {quoteLines.join(" ")}
        </blockquote>
      );
      continue;
    } else if (line.trim() === "") {
      // skip
    } else {
      // Check if entire line is bold header
      const boldMatch = line.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        elements.push(
          <p key={i} className="font-semibold text-white mt-4 mb-1">
            {boldMatch[1]}
          </p>
        );
      } else {
        elements.push(
          <p key={i} className="text-sm text-white/80 leading-relaxed mb-2">
            <InlineMarkdown text={line} />
          </p>
        );
      }
    }
    i++;
  }

  return <div className="space-y-0.5 mt-2">{elements}</div>;
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-white font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="bg-white/10 rounded px-1 py-0.5 text-xs font-mono text-red-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function SOPTable({ lines }: { lines: string[] }) {
  const rows = lines.map((l) =>
    l
      .split("|")
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      .map((c) => c.trim())
  );
  const [header, , ...body] = rows;
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/20">
            {header?.map((cell, i) => (
              <th
                key={i}
                className="text-left py-2 px-3 text-white/60 font-semibold text-xs uppercase tracking-wider"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5">
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 px-3 text-white/80">
                  <InlineMarkdown text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

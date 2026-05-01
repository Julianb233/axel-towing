import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

const PAGE_SLUG = 'private-property-towing-faq';
const CANONICAL_URL = `https://axletowing.com/blog/${PAGE_SLUG}`;
const PUBLISHED_DATE = '2026-04-30';

export const metadata: Metadata = {
  title:
    'Private Property Towing FAQ for Phoenix Property Managers (2026 Guide)',
  description:
    '12 answers Phoenix property managers, HOA boards, and commercial owners ask most about authorizing tows, signage, contracts, abandoned vehicles, and liability — direct, no legalese, no cost to property owners.',
  keywords: [
    'private property towing FAQ',
    'phoenix property manager towing',
    'HOA towing questions',
    'apartment complex towing setup',
    'arizona private property tow rules',
    'how to authorize a tow phoenix',
  ].join(', '),
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title:
      'Private Property Towing FAQ for Phoenix Property Managers (2026 Guide)',
    description:
      'The 12 questions Phoenix property managers, HOAs, and commercial owners ask most about private property towing — answered directly.',
    url: CANONICAL_URL,
    type: 'article',
    publishedTime: PUBLISHED_DATE,
    authors: [COMPANY.name],
  },
};

// ---------------------------------------------------------------------------
// FAQ data — 12 Q&As selected from the 80-question PAA harvest
// (`docs/seo-ai-audit/2026-04-30-paa-harvest.json`).
//
// Each `answerHtml` field is the long-form rendered answer.
// `answerSchema` is a plain-text version for FAQPage schema (no HTML inside
// schema text — Google strips it but this keeps validators happy).
//
// All 12 questions are PAA-verbatim or near-verbatim to maximize Google PAA
// match probability. None of the answers give legal advice, dispense pricing,
// or address vehicle owners — they speak only to property managers, HOA
// boards, and commercial owners (Elliott's brand rules).
// ---------------------------------------------------------------------------

interface Faq {
  /** Stable anchor slug for jump-link */
  slug: string;
  /** Question — verbatim from PAA harvest */
  question: string;
  /** Plain-text answer for FAQPage schema */
  answerSchema: string;
  /** Rendered HTML answer body (rich formatting + links) */
  answerHtml: string;
}

const FAQS: Faq[] = [
  {
    slug: 'authorize-vehicle-tow-property-manager-phoenix',
    question:
      'What are the steps for property managers to authorize a vehicle tow in Phoenix AZ?',
    answerSchema:
      'A Phoenix property manager authorizes a tow in five steps: (1) confirm the property has compliant signage posted at every vehicle entrance, (2) verify the vehicle is in violation of a posted rule (unauthorized parking, blocked fire lane, expired permit, etc.), (3) document the violation with timestamped photos, (4) call your contracted towing company with the property address, vehicle description, and violation, and (5) keep a copy of the tow ticket and dispatch log for your records. Axle Towing handles the dispatch, photo verification, and post-tow documentation for free — the property manager only needs to make the call.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">A Phoenix property manager authorizes a tow in five steps: confirm compliant signage is posted at every entrance, verify the vehicle is violating a posted rule, document the violation with timestamped photos, call your contracted towing company with the property address and vehicle details, and keep a copy of the tow ticket for your records.</p>
      <p class="text-gray-700 leading-relaxed mb-4">In practice this happens in under five minutes. When you call Axle Towing, dispatch records the property address, the vehicle make/model and license plate, the specific violation (fire lane, no-parking zone, unauthorized vehicle, expired permit), and the name of the authorizing person. We confirm the property is on file under your management company so the truck doesn't get refused on arrival, then dispatch the closest unit. We send you the tow-ticket and pre-tow photos by email or text within an hour of pickup so your audit trail is closed before the vehicle owner ever calls you.</p>
      <p class="text-gray-700 leading-relaxed mb-4">For the full vendor-onboarding sequence and what we'll need from your management company before the first authorized tow, see <a href="/blog/property-manager-guide-to-towing-contracts" class="text-primary hover:underline font-medium">our property manager guide to towing contracts</a>.</p>
    `,
  },
  {
    slug: 'signs-required-private-property-towing-phoenix',
    question:
      'What signs are required for private property towing in Phoenix AZ?',
    answerSchema:
      'Private property towing in Phoenix AZ requires signs posted at every vehicle entrance under Arizona Revised Statute 9-499.05. Each sign must show the towing company name and 24-hour phone number, the storage facility street address, the words "Unauthorized Vehicles Will Be Towed at Vehicle Owner\'s Expense," and the maximum tow and storage fees. Signs must be at least 18 by 24 inches, mounted with the bottom 4 feet above ground, with 1-inch minimum lettering and high-contrast colors. Without compliant signage at every entrance, the tow can be disputed and reversed — Axle Towing supplies and installs ARS-compliant signs at no cost when you sign on as a property.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">Private property towing in Phoenix AZ requires ARS 9-499.05-compliant signs at every vehicle entrance. Each sign must show the towing company name and 24-hour phone number, the storage facility street address, the phrase "Unauthorized Vehicles Will Be Towed at Vehicle Owner's Expense," and the maximum tow and storage fees.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Specifications: minimum 18&quot;&times;24&quot; (we recommend 24&quot;&times;30&quot;), bottom of sign 4 feet above ground, 1&quot; minimum lettering on the primary text, high-contrast colors (typically white-on-red or black-on-yellow), and engineer-grade reflective sheeting if you enforce after dark. The sign must be visible to a driver entering the lot — not hidden behind landscaping, dumpsters, or other signs. If a vehicle entrance has missing or non-compliant signage, every tow from that entrance is disputable and the vehicle owner has standing to recover fees.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing supplies and installs ARS-compliant signs at no cost when you onboard. For exact templates, dimensions, and a checklist your sign vendor can use, see <a href="/blog/parking-lot-signage-requirements-arizona" class="text-primary hover:underline font-medium">our Arizona parking lot signage requirements guide</a>.</p>
    `,
  },
  {
    slug: 'who-can-authorize-tow-apartment-hoa-phoenix',
    question:
      'Who can authorize a tow on apartment or HOA property in Phoenix?',
    answerSchema:
      'On apartment property in Phoenix, an authorized agent of the property owner can authorize a tow — typically the on-site community manager, regional property manager, leasing office staff trained on parking enforcement, or a designated maintenance lead. On HOA property, a board member, HOA manager, or any agent the board has formally designated in the governing documents can authorize. The towing company must have the authorizing person on a pre-approved list before dispatch. Residents, tenants, and unit owners cannot authorize tows of other people\'s vehicles. At Axle Towing we keep a written authorized-callers list per property — the management company tells us who can dispatch and we won\'t roll a truck for anyone outside that list.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">On apartment or HOA property in Phoenix, an authorized agent of the property owner can authorize a tow. For apartments, that typically means the on-site community manager, regional property manager, trained leasing office staff, or a designated maintenance lead. For HOAs, it means a board member, HOA manager, or any agent the board has formally designated in the governing documents.</p>
      <p class="text-gray-700 leading-relaxed mb-4">What it does <em class="italic">not</em> mean: residents, tenants, individual unit owners, security guards without explicit written delegation, or one neighbor calling about another neighbor's car. A towing company that takes those calls is exposing the property to a successful dispute. At Axle Towing we maintain a written authorized-callers list for every property under contract — the property management company or HOA board tells us in writing who can dispatch a truck, and we won't roll for anyone outside that list. When staff turns over, the property updates the list and we update our dispatch system the same day.</p>
      <p class="text-gray-700 leading-relaxed mb-4">For the full apartment-side workflow including resident communication and complaint handling, see <a href="/blog/apartment-complex-parking-management-guide" class="text-primary hover:underline font-medium">our apartment complex parking management guide</a>.</p>
    `,
  },
  {
    slug: 'how-quickly-remove-unauthorized-vehicles-business-lot',
    question:
      'How quickly can a towing service remove unauthorized vehicles from my business parking lot in Phoenix AZ?',
    answerSchema:
      'A professional towing service should arrive at your Phoenix-area business parking lot within 30 to 60 minutes of dispatch, with the vehicle hooked and en route to the impound yard within another 5 to 15 minutes after that. Axle Towing\'s average response time across the Phoenix metro is under 30 minutes, 24/7/365, dispatched from yards in Phoenix (320 E. Pioneer St.) and Apache Junction (1151 W. Apache Trail). For fire-lane, blocked-dumpster, blocked-handicap, or emergency-access situations, we prioritize the call. If a towing company can\'t guarantee a response time in writing or won\'t share its 6-month response data, that\'s a red flag.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">A professional towing service should arrive at your Phoenix-area business parking lot within 30 to 60 minutes of dispatch, with the vehicle hooked and rolling to the impound yard within another 5 to 15 minutes after that. Axle Towing's average response time across the Phoenix metro is under 30 minutes, 24/7/365, dispatched from two yards: Phoenix at 320 E. Pioneer St. and Apache Junction at 1151 W. Apache Trail.</p>
      <p class="text-gray-700 leading-relaxed mb-4">For emergency-access situations — fire lanes, blocked dumpsters, blocked accessible spots, vehicles preventing emergency-vehicle entry — we prioritize the dispatch and treat it as a code call. For routine unauthorized parking, we slot the call in normal queue but the metro footprint means even non-priority dispatches typically arrive in well under an hour. Properties that need predictable nighttime enforcement (a common pain point for industrial parks and 24-hour retail) get a standing patrol schedule on top of on-call dispatch.</p>
      <p class="text-gray-700 leading-relaxed mb-4">If a towing company won't put a response-time guarantee in your contract or can't share its prior 6-month response data, that's a red flag — see <a href="/blog/commercial-property-abandoned-vehicle-removal-phoenix" class="text-primary hover:underline font-medium">our commercial property abandoned vehicle removal guide</a> for the full vendor evaluation checklist.</p>
    `,
  },
  {
    slug: 'do-i-need-towing-contract-apartment-commercial',
    question:
      'Do I need a contract with a towing company for my apartment complex or commercial property?',
    answerSchema:
      'Yes — every apartment complex, HOA, and commercial property in Arizona should have a written agreement with a towing company before authorizing the first tow. The contract documents who can authorize tows, response time expectations, signage installation and maintenance, photo and tow-ticket documentation, vehicle release procedures, and dispute handling. The contract is also what a towing company shows law enforcement, vehicle owners, and judges if a tow is challenged. At Axle Towing the agreement is no-cost to the property — there are no monthly retainers, per-tow fees, or sign installation charges. The model is funded entirely by the impound and storage fees we collect from vehicle owners whose cars are towed for legitimate violations.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">Yes — every apartment complex, HOA, and commercial property in Arizona should have a written agreement with a towing company before authorizing the first tow. The contract documents who on your team can dispatch a truck, response time expectations, signage installation and maintenance, photo and tow-ticket documentation, vehicle release procedures at the impound yard, and dispute handling if a vehicle owner pushes back.</p>
      <p class="text-gray-700 leading-relaxed mb-4">The contract is also the document a towing company shows to law enforcement, vehicle owners, and judges if a tow is challenged. Without it the towing company is exposed and so is your property. At Axle Towing the agreement is no-cost to the property — no monthly retainers, no per-tow fees, no sign installation or replacement charges. The model is funded by the impound and storage fees we collect from vehicle owners whose cars are towed for legitimate, signage-disclosed violations. That structure is the Arizona industry standard and is contemplated by ARS 9-499.05.</p>
      <p class="text-gray-700 leading-relaxed mb-4">For the full agreement walkthrough and the 15 things every property manager should look for before signing, read <a href="/blog/property-manager-guide-to-towing-contracts" class="text-primary hover:underline font-medium">our towing contracts guide</a>.</p>
    `,
  },
  {
    slug: 'how-to-set-up-private-property-towing-apartment-phoenix',
    question:
      'How do I set up private property towing for my apartment complex in Phoenix AZ?',
    answerSchema:
      'Setting up private property towing for a Phoenix apartment complex takes about 7 to 10 days end-to-end. The steps are: (1) call a professional towing company for a free site assessment, (2) sign a no-cost service agreement, (3) the towing company installs ARS 9-499.05-compliant signs at every vehicle entrance, (4) you submit your written authorized-callers list (community manager, regional manager, and any maintenance leads), (5) you announce the new enforcement program to residents 14 to 30 days before active enforcement begins, and (6) enforcement starts. Axle Towing handles the signage, the dispatch system setup, and resident-notice template language at no cost — your team just needs to authorize the start date.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">Setting up private property towing for a Phoenix apartment complex takes about 7 to 10 days end-to-end. Step one: call a professional towing company for a free site assessment — they walk every entrance, every fire lane, every accessible spot, and every visitor area to map enforcement zones. Step two: sign a no-cost service agreement that documents who can authorize tows and how the program will run.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Step three: the towing company installs ARS 9-499.05-compliant signs at every vehicle entrance — this is the legal foundation, no signs means no legal tows. Step four: you submit your written authorized-callers list (community manager, regional manager, designated maintenance leads). Step five: announce the new enforcement program to residents 14 to 30 days before active enforcement starts — a courtesy window dramatically reduces complaints. Step six: enforcement begins, and the towing company sends you tow tickets, photos, and a monthly summary report.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing handles the signage, the dispatch system setup, and resident-notice template language at no cost. For the full 7-day rollout playbook, see <a href="/blog/hoa-towing-program-setup-guide" class="text-primary hover:underline font-medium">our HOA towing program setup guide</a> — same workflow applies to apartment communities.</p>
    `,
  },
  {
    slug: 'how-to-set-up-towing-contract-hoa-phoenix',
    question: 'How do I set up a towing contract for my HOA in Phoenix?',
    answerSchema:
      'An HOA in Phoenix sets up a towing contract by following four steps: (1) confirm the HOA\'s governing documents (CC&Rs, parking rules, board resolutions) authorize the board to enforce parking and engage a towing company, (2) request a free site assessment from a professional towing company so they can walk the community, identify enforcement zones, and propose signage placement, (3) review and sign a no-cost service agreement that documents the authorized-callers list, response times, signage scope, and reporting cadence, and (4) hold a board meeting or member notice period before enforcement starts so residents have advance notice. Axle Towing handles HOA setup at no cost to the association.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">An HOA in Phoenix sets up a towing contract in four steps. First, confirm the association's governing documents — the CC&amp;Rs, the parking rules, and the relevant board resolutions — authorize the board to enforce parking and engage a towing company. If the governing documents are silent, the board passes a resolution before contracting.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Second, request a free site assessment from a professional towing company. They walk the community, identify enforcement zones (visitor parking, fire lanes, blocked-driveway scenarios, abandoned-vehicle hot spots), and propose signage placement at every vehicle entrance. Third, review and sign a no-cost service agreement that documents the authorized-callers list (board president, HOA manager, designated property manager), response times, signage scope, photo and reporting cadence, and dispute handling. Fourth, hold a board meeting or send member notice before active enforcement starts — most associations give residents 14 to 30 days to clean up unregistered or expired-permit vehicles before the towing company starts on patrol.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing handles HOA setup at no cost. For the deeper how-to including communication templates and board resolution language, see <a href="/blog/hoa-towing-program-setup-guide" class="text-primary hover:underline font-medium">our HOA towing program setup guide</a>.</p>
    `,
  },
  {
    slug: 'how-to-report-abandoned-vehicles-property-phoenix',
    question: 'How do I report abandoned vehicles on my property in Phoenix?',
    answerSchema:
      'To report an abandoned vehicle on your private property in Phoenix, document it for at least 72 hours of continuous immobility, then call a professional private-property towing company directly — not the city or police, who only handle vehicles abandoned on public streets. The towing company will request the property address, the vehicle\'s make, model, color, and license plate, the duration the vehicle has been parked, and any visible signs of abandonment (flat tires, expired registration, damage, no movement). At Axle Towing we handle abandoned vehicle removal from private property in Phoenix at no cost to the property owner — we recover our costs through the impound process. Call 480-288-5526 to dispatch.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">To report an abandoned vehicle on your private property in Phoenix, document it for at least 72 hours of continuous immobility, then call a professional private-property towing company directly. The City of Phoenix and Phoenix PD only handle vehicles abandoned on <em class="italic">public</em> streets — abandoned vehicles on private property (apartment lots, HOA streets, commercial parking) are the property owner's responsibility to remove, and a private-property towing company is the right vendor.</p>
      <p class="text-gray-700 leading-relaxed mb-4">When you call, the towing company will ask for the property address, the vehicle's make, model, color, and license plate, how long the vehicle has been parked, and any visible signs of abandonment — flat tires, expired registration tags, accumulated dust or debris, damage, no movement over multiple days. They'll dispatch a truck, photograph the vehicle and its surroundings before hooking it, and complete the impound paperwork that satisfies Arizona's title-and-lien process.</p>
      <p class="text-gray-700 leading-relaxed mb-4">At Axle Towing we handle abandoned vehicle removal from private property in the Phoenix metro at <strong class="font-semibold text-gray-900">no cost to the property owner</strong>. Call <a href="tel:${COMPANY.phone}" class="text-primary hover:underline font-medium">${COMPANY.phone}</a> to dispatch, or read <a href="/blog/report-abandoned-vehicle-phoenix" class="text-primary hover:underline font-medium">our full reporting guide</a>.</p>
    `,
  },
  {
    slug: 'hoa-tow-vehicles-blocking-common-areas-without-cost',
    question:
      'How can HOA boards tow vehicles blocking common areas without cost?',
    answerSchema:
      'An HOA board can tow vehicles blocking common areas at zero cost to the association by contracting with a professional private-property towing company that operates on the standard Arizona Private Property Impound (PPI) model. Under PPI, the towing company recovers its costs from impound and storage fees charged to vehicle owners whose vehicles are towed for legitimate, signage-disclosed violations — never from the HOA. The HOA pays nothing for sign installation, sign replacement, dispatch, towing, storage, or release. Axle Towing operates entirely on this model: HOAs in Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, and 30+ metro cities pay $0 for our parking enforcement and abandoned-vehicle removal program.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">An HOA board can tow vehicles blocking common areas at <strong class="font-semibold text-gray-900">zero cost to the association</strong> by contracting with a professional private-property towing company that operates on Arizona's standard Private Property Impound (PPI) model. Under PPI, the towing company recovers its costs from impound and storage fees charged to vehicle owners whose vehicles are towed for legitimate, signage-disclosed violations — never from the HOA.</p>
      <p class="text-gray-700 leading-relaxed mb-4">The HOA pays nothing for the sign installation at every entrance, nothing for replacement signs over time, nothing for the dispatch infrastructure, nothing per-tow, and nothing for storage. Any towing company that asks the HOA for a monthly retainer, a per-tow fee, a sign-installation fee, or an "administrative charge" is not operating under the standard PPI model — that's a red flag and a sign the HOA is being upsold beyond Arizona industry norm.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing operates entirely on this model: HOAs in Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, Apache Junction, and 30+ Phoenix metro cities pay $0 for parking enforcement and abandoned-vehicle removal. For the full HOA program walkthrough, see <a href="/blog/hoa-parking-enforcement-guide" class="text-primary hover:underline font-medium">our HOA parking enforcement guide</a>.</p>
    `,
  },
  {
    slug: 'documentation-property-managers-need-authorize-tow',
    question:
      'What documentation do property managers need before authorizing a tow?',
    answerSchema:
      'Before authorizing a tow, a property manager needs five pieces of documentation: (1) an active service agreement with the towing company, (2) compliant ARS 9-499.05 signage installed at every vehicle entrance, (3) timestamped photos showing the violation in progress (vehicle in fire lane, expired permit visible, blocked dumpster, etc.), (4) a written record of any prior warning if the property\'s policy requires one, and (5) the authorized-caller\'s name on the towing company\'s pre-approved list. After the tow, the property manager keeps the tow ticket, the dispatch log entry, and the post-tow photos for at least one year — that bundle is what defends the tow if a vehicle owner disputes it. Axle Towing emails this packet to the authorizing manager within an hour of pickup.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">Before authorizing a tow, a property manager needs five pieces of documentation in hand:</p>
      <ul class="space-y-2 my-6 reveal">
        <li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span><strong class="font-semibold text-gray-900">Active service agreement</strong> with a licensed towing company that lists the property by address.</span></li>
        <li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span><strong class="font-semibold text-gray-900">ARS 9-499.05-compliant signs</strong> installed at every vehicle entrance — without compliant signs the tow is disputable.</span></li>
        <li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span><strong class="font-semibold text-gray-900">Timestamped photos</strong> showing the violation (vehicle in fire lane, expired permit, blocked accessible spot, blocked dumpster, etc.).</span></li>
        <li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span><strong class="font-semibold text-gray-900">Written record of any prior warning</strong> if your community's policy requires courtesy notices before towing.</span></li>
        <li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span><strong class="font-semibold text-gray-900">Authorized-caller status</strong> — your name has to be on the towing company's pre-approved list for the property.</span></li>
      </ul>
      <p class="text-gray-700 leading-relaxed mb-4">After the tow, keep the tow ticket, the dispatch log entry, and the post-tow photos on file for at least one year — that bundle is what defends the tow if a vehicle owner disputes it. Axle Towing emails this packet to the authorizing manager within an hour of pickup, no extra request needed. Read <a href="/blog/property-manager-guide-to-towing-contracts" class="text-primary hover:underline font-medium">our towing contracts guide</a> for the full audit-trail template.</p>
    `,
  },
  {
    slug: 'how-to-hire-reliable-towing-company-apartment-phoenix',
    question:
      'How do I hire a reliable towing company for my apartment complex in Phoenix?',
    answerSchema:
      'To hire a reliable towing company for a Phoenix apartment complex, evaluate vendors against eight criteria: (1) zero cost to the property — no retainers, no per-tow fees, (2) a guaranteed response time under 60 minutes with prior 6-month data on file, (3) ARS 9-499.05-compliant signage installed and maintained for free, (4) two-yard impound coverage so vehicle release isn\'t a hardship for residents, (5) photo documentation of every tow sent to the property manager within an hour, (6) a written authorized-callers list and dispatch refusal for non-listed callers, (7) Arizona tow operator license and insurance on file, and (8) bilingual dispatch and resident communication. Axle Towing meets all eight, with yards in Phoenix and Apache Junction and 24/7 dispatch.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">To hire a reliable towing company for a Phoenix apartment complex, evaluate vendors against eight criteria. First, <strong class="font-semibold text-gray-900">zero cost to the property</strong> — no monthly retainers, no per-tow fees, no sign installation charges, no annual renewal fees. Second, <strong class="font-semibold text-gray-900">guaranteed response time under 60 minutes</strong> with prior 6-month data on file (a vendor that can't share data isn't tracking it).</p>
      <p class="text-gray-700 leading-relaxed mb-4">Third, ARS 9-499.05-compliant signage installed and maintained at every vehicle entrance. Fourth, <strong class="font-semibold text-gray-900">two-yard impound coverage</strong> across the metro so vehicle release isn't an hour-long hardship for residents. Fifth, photo documentation of every tow sent to the property manager within an hour of pickup. Sixth, a written authorized-callers list and dispatch refusal for non-listed callers — this is what protects you from a rogue tow. Seventh, current Arizona tow operator license and insurance on file. Eighth, bilingual dispatch and resident-facing communication, because Phoenix apartment populations are heavily Spanish-speaking.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing meets all eight criteria, with yards in Phoenix (320 E. Pioneer St.) and Apache Junction (1151 W. Apache Trail) and 24/7 dispatch. For the full 15-point evaluation framework, see <a href="/blog/how-to-choose-towing-company-for-property" class="text-primary hover:underline font-medium">our property manager's guide to choosing a towing company</a>.</p>
    `,
  },
  {
    slug: 'can-i-tow-vehicles-parking-violations-property-phoenix',
    question:
      'Can I tow vehicles for parking violations on my property in Phoenix?',
    answerSchema:
      'Yes — as the property owner or authorized agent (community manager, HOA board member, commercial property manager) you can tow vehicles for parking violations on your private property in Phoenix, provided three conditions are met: (1) your property has ARS 9-499.05-compliant signs posted at every vehicle entrance disclosing that unauthorized vehicles will be towed, (2) the violation is documented (photos, timestamp), and (3) you authorize the tow through a contracted towing company on your authorized-callers list. You do not need permission from the vehicle owner, the police, or the city — private property parking enforcement in Arizona is the property owner\'s right and responsibility. Axle Towing handles the dispatch and documentation at no cost.',
    answerHtml: `
      <p class="text-gray-700 leading-relaxed mb-4">Yes — as the property owner or authorized agent (community manager, HOA board member, commercial property manager) you can tow vehicles for parking violations on your private property in Phoenix, provided three conditions are met. First, your property has ARS 9-499.05-compliant signs posted at every vehicle entrance disclosing that unauthorized vehicles will be towed at the vehicle owner's expense. Second, the violation is documented with timestamped photos showing the vehicle in violation. Third, you authorize the tow through a contracted towing company on your written authorized-callers list.</p>
      <p class="text-gray-700 leading-relaxed mb-4">You do not need permission from the vehicle owner, the police, or the City of Phoenix. Private property parking enforcement in Arizona is the property owner's right and responsibility, contemplated by ARS 9-499.05 and supporting statutes. The towing company is the operational arm — they execute the tow, document it, and handle the impound process so the property doesn't have to. The signage, the documentation, and the authorized-caller process are what convert a property owner's right into a defensible, dispute-proof tow.</p>
      <p class="text-gray-700 leading-relaxed mb-4">Axle Towing handles the dispatch and documentation at no cost to the property. For the full step-by-step on legally removing illegally parked vehicles, see <a href="/blog/how-to-get-illegally-parked-vehicles-removed" class="text-primary hover:underline font-medium">our guide to getting illegally parked vehicles removed</a>.</p>
    `,
  },
];

export default function PrivatePropertyTowingFaqPage() {
  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: 'https://axletowing.com' },
      { name: 'Blog', url: 'https://axletowing.com/blog' },
      {
        name: 'Private Property Towing FAQ',
        url: CANONICAL_URL,
      },
    ]),
    faqSchema(
      FAQS.map((f) => ({
        question: f.question,
        answer: f.answerSchema,
      })),
    ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <section className="parallax-container relative flex min-h-[45vh] items-end">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link
            href="/blog"
            className="group mb-6 inline-flex items-center text-sm text-blue-200/60 transition-colors hover:text-white"
          >
            <svg
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wider uppercase text-blue-700">
              Property Manager FAQ
            </span>
            <span className="text-sm text-blue-200/60">12-question hub</span>
            <span className="text-sm text-blue-200/60">Updated April 30, 2026</span>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Private Property Towing FAQ for Phoenix Property Managers (2026)
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-blue-100/80">
            The 12 questions Phoenix property managers, HOA boards, and commercial owners ask
            most about private property towing — answered directly. No legalese, no pricing
            speculation, no advice for vehicle owners. Just the operational playbook for keeping
            your property compliant and your common areas clear, at zero cost to the property.
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Intro */}
              <div className="prose-lg max-w-none">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Property managers in the Phoenix metro area run their own towing programs in
                  one of two ways: well-organized and zero-cost, or improvised and expensive.
                  The difference is almost always in the answers to the dozen questions on this
                  page. Whether you manage a 200-unit apartment community in Tempe, an HOA in
                  Chandler, an industrial park in Phoenix, or a retail center in Scottsdale, the
                  same dozen operational questions decide whether your enforcement program is
                  defensible, fast, and free — or whether it generates resident complaints,
                  successful disputes, and avoidable line items in your operating budget.
                </p>
                <p className="mb-8 text-gray-700 leading-relaxed">
                  Every answer below is operational, not legal. None of this is legal advice —
                  consult your attorney for that. What this page does is tell you exactly how a
                  professional Arizona private-property towing program runs from the property
                  manager's seat, sourced from{' '}
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Axle Towing &amp; Impound's
                  </a>{' '}
                  thousands of authorized tows across 30+ Phoenix metro cities since 2021.
                </p>
              </div>

              {/* Jump-Link Index */}
              <div className="glass-card-white mb-12 rounded-2xl border border-gray-200 p-6">
                <h2 className="mb-4 text-sm font-bold tracking-wider text-gray-900 uppercase">
                  Jump to a question
                </h2>
                <ol className="space-y-2 text-sm">
                  {FAQS.map((faq, i) => (
                    <li key={faq.slug} className="flex items-start gap-3">
                      <span className="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                        {i + 1}
                      </span>
                      <a
                        href={`#${faq.slug}`}
                        className="text-gray-700 leading-relaxed hover:text-primary hover:underline"
                      >
                        {faq.question}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Q&As */}
              {FAQS.map((faq, i) => (
                <section
                  key={faq.slug}
                  id={faq.slug}
                  className="mt-12 scroll-mt-24 border-t border-gray-200 pt-10 first:border-t-0 first:pt-0"
                >
                  <div className="mb-3 inline-flex items-center gap-3">
                    <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Question {i + 1} of {FAQS.length}
                    </span>
                  </div>
                  <h2 className="reveal mt-4 mb-6 text-2xl font-bold text-gray-900">
                    {faq.question}
                  </h2>
                  <div
                    className="prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                  />
                  <div className="mt-6">
                    <a
                      href="#top-of-faq"
                      className="text-xs text-gray-400 hover:text-primary"
                    >
                      ↑ Back to question index
                    </a>
                  </div>
                </section>
              ))}

              {/* Closing summary */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Still have a question?
                </h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  These 12 questions cover the operational core of private property towing in
                  the Phoenix metro, but every property has its own quirks — a non-standard
                  layout, a unique signage challenge, a chronic abandoned-vehicle hot spot, a
                  high-turnover staff that complicates the authorized-callers list. Axle Towing
                  does free site assessments for any apartment complex, HOA, or commercial
                  property in our service area, and we'll walk your community with you to map
                  out the program before you sign anything.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Call{' '}
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {COMPANY.phone}
                  </a>{' '}
                  to schedule, or read our{' '}
                  <Link
                    href="/blog/how-to-set-up-parking-enforcement-program-7-days"
                    className="text-primary hover:underline font-medium"
                  >
                    7-day parking enforcement program setup guide
                  </Link>
                  .
                </p>
              </div>

              {/* Author bio */}
              <div className="mt-16 border-t border-gray-200 pt-10">
                <div className="glass-card-white flex items-start gap-4 rounded-2xl p-6">
                  <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{COMPANY.name}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Axle Towing &amp; Impound is a private property towing specialist serving
                      the Phoenix metro area with two secure impound yards in Phoenix and Apache
                      Junction. Free service for property owners, 24/7 dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* CTA Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <div className="from-navy bg-gradient-to-br to-blue-900 p-5 text-white">
                    <h3 className="mb-1 text-lg font-bold">Free Site Assessment</h3>
                    <p className="text-sm text-blue-200">
                      No-cost program for property owners. 24/7 dispatch.
                    </p>
                  </div>
                  <div className="space-y-3 bg-white p-5">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="bg-primary hover:bg-primary/90 flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-white transition-colors"
                    >
                      <svg
                        className="h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {COMPANY.phone}
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <svg
                        className="text-primary h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Get a Free Quote
                    </Link>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="glass-card-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase">
                    Hours
                  </h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dispatch</span>
                      <span className="font-semibold text-green-600">24/7/365</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle Retrieval</span>
                      <span className="font-semibold text-gray-900">M-F 9am-5pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Related deeper guides */}
                <div className="glass-card-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase">
                    Related Guides
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/blog/how-to-set-up-parking-enforcement-program-7-days"
                        className="text-gray-700 hover:text-primary hover:underline"
                      >
                        7-day parking enforcement setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/property-manager-guide-to-towing-contracts"
                        className="text-gray-700 hover:text-primary hover:underline"
                      >
                        Property manager towing contracts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/parking-lot-signage-requirements-arizona"
                        className="text-gray-700 hover:text-primary hover:underline"
                      >
                        Arizona signage requirements
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/hoa-towing-program-setup-guide"
                        className="text-gray-700 hover:text-primary hover:underline"
                      >
                        HOA towing program setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/how-to-choose-towing-company-for-property"
                        className="text-gray-700 hover:text-primary hover:underline"
                      >
                        Choosing a towing company
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* ── CTA Banner ── */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Ready to Set Up Your Towing Program?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-200">
            Professional private property towing at zero cost to property owners. Serving 30+
            Phoenix metro cities with a 30-minute response guarantee.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-3">
              Get a Free Quote
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary px-8 py-3">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

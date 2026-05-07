import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

const CANONICAL = `https://${COMPANY.domain}/phoenix-towing`;
const PAGE_TITLE = "Phoenix Towing Services for Property Owners — 2026 Guide";
const PAGE_DESCRIPTION =
  "Free Phoenix towing for property managers, HOAs, apartments, and commercial properties. 24/7 dispatch, sub-30-minute response, ARS-compliant signage at no cost. The 2026 guide to choosing a Phoenix private property towing company.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Phoenix Towing — Free Service for Property Managers, HOAs & Apartments (2026 Guide)",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Towing — 2026 Guide for Property Owners",
    description: PAGE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "What does Phoenix towing cost a property manager or HOA?",
    a: "Nothing. For HOAs, apartment complexes, and commercial properties in Phoenix, Axle Towing's private property towing service is free — there are no monthly fees, no per-tow charges, no signage fees, and no minimums. The vehicle owner pays the impound and storage fee at retrieval, never the property owner.",
  },
  {
    q: "How fast can a Phoenix tow truck respond after a call?",
    a: "Axle Towing dispatches from a Phoenix yard at 320 E. Pioneer St. (85040) and an Apache Junction yard at 1151 W. Apache Trail. Average response time across the Phoenix metro is under 30 minutes, with most central Phoenix calls reached in 10-25 minutes depending on traffic.",
  },
  {
    q: "Is private property towing legal in Phoenix?",
    a: "Yes — under Arizona Revised Statutes (ARS) §§ 28-3511 and 9-499.05, property owners and their authorized agents may remove vehicles parked without permission on private property, provided compliant signage is posted at every entrance and the towing company files the required impound notice with law enforcement.",
  },
  {
    q: "What signage does Phoenix require for private property towing?",
    a: "ARS 9-499.05 requires a sign at every property entrance, at minimum 18 by 24 inches, listing the towing company name, 24/7 phone number, and the impound lot's physical address. Phoenix City Code Chapter 36 layers in additional posting requirements for parking enforcement areas. Axle Towing supplies and installs ARS-compliant signage at no cost as part of the service agreement.",
  },
  {
    q: "Does Axle Towing serve all Phoenix neighborhoods?",
    a: "Yes — every Phoenix neighborhood including Ahwatukee, Arcadia, Desert Ridge, Downtown Phoenix, North Phoenix, Laveen, Maryvale, Encanto, South Mountain, Camelback East, and the surrounding metro cities. The two yards together cover the full Phoenix metro plus the East Valley, West Valley, and Pinal County.",
  },
  {
    q: "What types of properties does Axle work with in Phoenix?",
    a: "Single-family HOAs, condo associations, apartment complexes (5,000+ units across the metro), commercial properties (office parks, retail strips, malls, medical campuses), industrial facilities, mixed-use developments, gated communities, and short-term rental neighborhoods. The free service model is the same across all property types.",
  },
  {
    q: "How does Axle handle abandoned vehicles on private property?",
    a: "Abandoned vehicles trigger a longer chain of custody than standard impound — Axle files the abandoned-vehicle report with Arizona MVD, posts the statutory waiting-period notice, conducts the title search, and moves the vehicle to lien sale if unclaimed. The full process is documented in our property-manager-facing article on Arizona abandoned vehicle laws.",
  },
  {
    q: "Can a Phoenix property switch towing companies if it already has one?",
    a: "Yes — there are no exclusivity contracts or termination penalties on the Axle service agreement. Most properties switch on a 7-30 day transition (signage swap, vehicle owner notification window, dispatch number change). Bring your existing parking rules; Axle adapts to your enforcement policy, not the other way around.",
  },
  {
    q: "What insurance and licensing should a Phoenix tow company carry?",
    a: "Look for a current Arizona Tow Operator License, on-hook coverage of at least $100,000 per vehicle, garage-keepers liability of $1M minimum, commercial auto liability of $1M minimum, and workers' compensation. A 24/7 dispatch with recorded calls and a physical impound yard inside the metro (not a lot 50+ miles out) are the other two table-stakes signals.",
  },
  {
    q: "How do residents and tenants find their towed vehicle?",
    a: "Axle posts impound notices to the standard Arizona Stolen/Abandoned Vehicle Database within minutes of impound. Tenants can call the 24/7 number on the property's signage, and the dispatcher confirms vehicle status, fees, and retrieval address (Phoenix yard at 320 E. Pioneer St. or Apache Junction yard). The retrieval process protects the property — Axle never refers tenants back to the HOA or apartment office.",
  },
  {
    q: "Does Axle do paid services beyond free private property towing?",
    a: "Yes — paid services include vehicle relocations for construction zones, parking lot striping projects, paving and seal coat work, special-event parking enforcement, and emergency winch-outs. These are quoted per project, separate from the free standing impound service.",
  },
  {
    q: "How quickly can a Phoenix property be onboarded with Axle?",
    a: "Most properties are fully active within 5-7 business days: 1-2 days for the property manager to send a parking rules document and entrance photos, 2-3 days for sign fabrication, and 1 day for installation. Emergency same-week onboarding is possible when a property is already in escalation with a non-responsive incumbent.",
  },
];

const CITY_LINKS = [
  { slug: "phoenix", name: "Phoenix" },
  { slug: "mesa", name: "Mesa" },
  { slug: "chandler", name: "Chandler" },
  { slug: "tempe", name: "Tempe" },
  { slug: "gilbert", name: "Gilbert" },
  { slug: "scottsdale", name: "Scottsdale" },
  { slug: "glendale", name: "Glendale" },
  { slug: "peoria", name: "Peoria" },
  { slug: "surprise", name: "Surprise" },
  { slug: "goodyear", name: "Goodyear" },
  { slug: "avondale", name: "Avondale" },
  { slug: "queen-creek", name: "Queen Creek" },
];

const ABANDONED_VEHICLE_LINKS = [
  { slug: "abandoned-vehicle-phoenix-az", label: "Abandoned Vehicle Removal — Phoenix" },
  { slug: "abandoned-vehicle-mesa-az", label: "Abandoned Vehicle Removal — Mesa" },
  { slug: "abandoned-vehicle-chandler-az", label: "Abandoned Vehicle Removal — Chandler" },
  { slug: "abandoned-vehicle-tempe-az", label: "Abandoned Vehicle Removal — Tempe" },
  { slug: "abandoned-vehicle-gilbert-az", label: "Abandoned Vehicle Removal — Gilbert" },
  { slug: "abandoned-vehicle-scottsdale-az", label: "Abandoned Vehicle Removal — Scottsdale" },
  { slug: "abandoned-vehicle-glendale-az", label: "Abandoned Vehicle Removal — Glendale" },
  { slug: "abandoned-vehicle-peoria-az", label: "Abandoned Vehicle Removal — Peoria" },
  { slug: "abandoned-vehicle-surprise-az", label: "Abandoned Vehicle Removal — Surprise" },
  { slug: "abandoned-vehicle-goodyear-az", label: "Abandoned Vehicle Removal — Goodyear" },
  { slug: "abandoned-vehicle-avondale-az", label: "Abandoned Vehicle Removal — Avondale" },
  { slug: "abandoned-vehicle-queen-creek-az", label: "Abandoned Vehicle Removal — Queen Creek" },
  { slug: "abandoned-vehicle-buckeye-az", label: "Abandoned Vehicle Removal — Buckeye" },
  { slug: "abandoned-vehicle-casa-grande-az", label: "Abandoned Vehicle Removal — Casa Grande" },
  { slug: "abandoned-vehicle-maricopa-az", label: "Abandoned Vehicle Removal — Maricopa" },
  { slug: "abandoned-vehicle-removal-phoenix-metro", label: "Abandoned Vehicle Removal — Phoenix Metro Overview" },
  { slug: "abandoned-vehicle-removal-private-property-arizona", label: "Removing Abandoned Vehicles from Arizona Private Property" },
  { slug: "abandoned-vehicle-private-property-rights-arizona", label: "Private Property Rights & Abandoned Vehicles in Arizona" },
  { slug: "abandoned-vehicle-title-process-arizona", label: "The Arizona Abandoned-Vehicle Title Process" },
  { slug: "abandoned-rv-removal-arizona", label: "Abandoned RV Removal in Arizona" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", label: "Arizona Abandoned Vehicle Laws — A Property Owner's Guide" },
];

const TOC = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is", label: "What Phoenix Towing Is (and Isn't)" },
  { id: "how-free-works", label: "How Free Towing Works for Property Owners" },
  { id: "service-areas", label: "Service Areas Across the Phoenix Metro" },
  { id: "choosing", label: "How to Choose a Phoenix Towing Company (15-Point Checklist)" },
  { id: "compliance", label: "Compliance, Signage & Arizona Law" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Started" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Phoenix Towing Services for Property Owners — 2026 Guide",
  description: PAGE_DESCRIPTION,
  author: { "@type": "Organization", name: COMPANY.name, url: `https://${COMPANY.domain}` },
  publisher: {
    "@type": "Organization",
    name: COMPANY.name,
    logo: { "@type": "ImageObject", url: `https://${COMPANY.domain}/images/axle-towing-logo.png` },
  },
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  inLanguage: "en-US",
  about: ["Private property towing", "Phoenix parking enforcement", "HOA towing", "Apartment towing"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
    { "@type": "ListItem", position: 2, name: "Phoenix Towing", item: CANONICAL },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${CANONICAL}#localbusiness`,
  name: COMPANY.name,
  telephone: COMPANY.phone,
  url: `https://${COMPANY.domain}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "320 E. Pioneer St.",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85040",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Mesa" },
    { "@type": "City", name: "Chandler" },
    { "@type": "City", name: "Tempe" },
    { "@type": "City", name: "Gilbert" },
    { "@type": "City", name: "Scottsdale" },
    { "@type": "City", name: "Glendale" },
    { "@type": "City", name: "Peoria" },
  ],
  priceRange: "Free for property owners",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-parking-lot.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Phoenix Towing" }]} />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-4">
            Phoenix Towing Services for Property Owners — 2026 Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Free private property towing across the Phoenix metro for HOAs, apartments, and commercial
            properties. 24/7 dispatch from yards in Phoenix and Apache Junction. Sub-30-minute response.
            ARS-compliant signage included.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">Get a Property Assessment</Link>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="bg-blue-50/40 border-b border-blue-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-4">On This Page</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {TOC.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-gray-800 hover:text-blue-700 underline-offset-4 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section id="quick-answer" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-red-600 bg-blue-50/60 p-6 rounded-r-xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-3">Quick Answer</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Phoenix towing</strong> for property managers, HOAs, apartments, and commercial properties is a
              regulated impound service authorized under Arizona Revised Statutes 28-3511 and 9-499.05. With{" "}
              <strong>{COMPANY.name}</strong>, the service is free to the property — vehicle owners pay the impound
              fee at retrieval. We dispatch 24/7 from yards in Phoenix (320 E. Pioneer St.) and Apache Junction, with
              sub-30-minute response across the metro and ARS-compliant signage installed at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT IT IS / ISN'T */}
      <section id="what-is" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            What Phoenix Private Property Towing Is (and Isn&apos;t)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Private property towing is the legal authority of a Phoenix property owner — or the owner&apos;s designated
            agent (a property manager, HOA board, or commercial landlord) — to remove a vehicle parked on their
            property without permission. It is governed by Arizona statute, Phoenix City Code Chapter 36, and the
            specific parking rules a property has documented and posted. The impound service is performed by a
            licensed Arizona tow operator and the impounded vehicle is held at a registered impound facility until
            the owner pays the statutory fees and retrieves it.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            What it is <em>not</em>: this is not city-ordered tow-away (Phoenix PD), not freeway-incident towing
            (Arizona DPS rotation), not consensual towing (where a vehicle owner calls a tow truck for their own
            disabled car), and not a punitive tool used against tenants who pay rent on time. Private property
            towing is enforcement of posted parking rules — it works because rules are clear, signage is correct,
            and the response is consistent.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            For Phoenix property managers, the most common scenarios are: cars parked in fire lanes, vehicles in
            reserved or numbered tenant spots, expired or missing parking permits, abandoned vehicles taking up
            valuable spaces, blocked dumpsters or loading zones, accessible (handicap) spaces used without a permit,
            and after-hours parking on commercial lots. Each of these scenarios has an established response pattern
            and documentation trail.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Done well, private property towing protects tenants who park where they&apos;re supposed to, keeps fire
            lanes clear (which protects life-safety insurance ratings), and removes the apartment-office or HOA-board
            from the awkward role of policing parking. Done poorly, it generates complaints, vehicle-owner pushback,
            and sometimes regulatory attention. The choice of towing company is the largest single variable — which
            is why the rest of this guide focuses on what a property should look for.
          </p>
        </div>
      </section>

      {/* SECTION: HOW FREE WORKS */}
      <section id="how-free-works" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            How Free Towing Works for Phoenix Property Owners
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            The headline is straightforward: an HOA, apartment, or commercial property in Phoenix pays{" "}
            <strong>nothing</strong> for {COMPANY.name}&apos;s standing private property towing service. There is no
            monthly retainer, no per-tow fee, no signage charge, no impound-yard surcharge, and no minimum volume
            requirement. The economics work because the vehicle owner — the party that parked in violation of posted
            rules — pays the statutory impound and storage fees at retrieval. That model is standard across Arizona;
            what varies between tow companies is what the property is asked to pay <em>around</em> the headline. The
            table below makes the cost map explicit.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="p-4 text-left">Cost Item</th>
                  <th className="p-4 text-left">Property Owner</th>
                  <th className="p-4 text-left">Vehicle Owner</th>
                  <th className="p-4 text-left">Axle Towing</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Standing service agreement</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Provided</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">ARS-compliant signage (fab + install)</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Provided</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">24/7 dispatch line on signage</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Operated</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Per-tow impound</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">Pays statutory fee</td>
                  <td className="p-4">Performed</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Storage at impound yard</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">Pays statutory daily rate</td>
                  <td className="p-4">Provided</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Stolen/Abandoned database notice</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Filed</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Abandoned vehicle title processing</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Performed (recovered via lien sale)</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Construction / paving relocation</td>
                  <td className="p-4">Quoted per project</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Paid service (separate from standing)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6 text-sm italic">
            For specific impound and daily storage figures, the dispatcher confirms current statutory rates at the
            time of the call. The property is never billed for a standing service tow.
          </p>
        </div>
      </section>

      {/* SECTION: SERVICE AREAS */}
      <section id="service-areas" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Service Areas Across the Phoenix Metro
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            With yards in Phoenix and Apache Junction, {COMPANY.name} reaches every part of the metro within service
            response targets. The Phoenix yard at 320 E. Pioneer St. (85040) covers the core city, the West Valley,
            and the south-Phoenix corridor. The Apache Junction yard at 1151 W. Apache Trail covers the East Valley
            and the Pinal County edge. Together they cover Phoenix proper, the largest city in Arizona by both
            geography (517 square miles) and population (1.6M residents), plus the surrounding metro of 4.8M+
            residents across Maricopa and Pinal counties.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Below are the city pages with the local context that matters to property managers — yard distances,
            response time benchmarks, neighborhood coverage, ZIP-code maps, and the city-specific parking
            regulations a tow company must understand to do the work correctly.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CITY_LINKS.map((c) => (
              <Link
                key={c.slug}
                href={`/private-property-towing/${c.slug}`}
                className="group block rounded-lg border border-blue-200 bg-white px-4 py-3 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                  {c.name} →
                </span>
              </Link>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 text-sm">
            Looking for a city not on the grid above? See the full{" "}
            <Link href="/locations" className="text-blue-700 underline hover:text-blue-900">locations directory</Link>{" "}
            — Axle covers 40+ Phoenix metro cities including Apache Junction, Anthem, Buckeye, Carefree, Cave Creek,
            Fountain Hills, Maricopa, Paradise Valley, Queen Creek, San Tan Valley, the Sun Cities, and more.
          </p>
        </div>
      </section>

      {/* SECTION: 15-POINT CHECKLIST */}
      <section id="choosing" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            How to Choose a Phoenix Towing Company — a 15-Point Checklist
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Most property managers compare tow companies in the wrong order — they start with price (which doesn&apos;t
            apply, since standing service is free) and end with insurance (which is what actually matters). The
            checklist below is in the order a property should evaluate, with the why-it-matters next to each point.
          </p>
          <ol className="space-y-5 text-gray-800">
            {[
              ["Current Arizona Tow Operator License", "Verify on the Arizona Department of Transportation site. An expired or absent license invalidates every impound and exposes the property to civil liability."],
              ["On-hook coverage of $100,000+ per vehicle", "If a tow truck damages a vehicle in transit, the property does not want to be the deep pocket. $100K is the floor for a metro tow company."],
              ["Garage-keepers liability of $1M+", "Covers vehicles while in the impound yard. Theft, vandalism, weather damage all flow through this policy."],
              ["Commercial auto liability of $1M+", "Standard for any operator that touches public roads with a commercial vehicle."],
              ["Workers&apos; compensation", "Confirms the operator is treating drivers as employees, not 1099 contractors trying to skip insurance overhead. The latter creates joint-employer risk for the property."],
              ["24/7 dispatch with recorded calls", "Critical for chain-of-custody disputes. A dispatcher answering 'we&apos;ll call you back' at 2am is the wrong answer — most enforcement happens overnight."],
              ["Physical impound yard inside the metro", "If the yard is 50 miles out, the response time is fiction and tenants struggle to retrieve vehicles. Axle&apos;s yards are inside the metro by design."],
              ["Sub-30-minute average response", "Verify with a recent month of dispatch records, not a marketing claim. Anything over 45 minutes makes enforcement feel arbitrary because the violation has often ended by the time the truck arrives."],
              ["Sign fabrication and installation included", "ARS 9-499.05 signs are non-trivial — wrong dimensions or wrong language voids the impound. The tow company should fabricate, install, and replace damaged signs, not hand the property a Word doc."],
              ["Parking rules adapted to your property", "Watch out for any company that hands a property a generic rules document. Rules should reflect your tenant lease language, your HOA CC&Rs, your commercial signage layout."],
              ["No exclusivity contract or termination penalty", "If switching tow companies costs the property money, the relationship is upside down. A confident operator earns renewal through performance."],
              ["Licensed driver photo ID at every tow", "The driver should be willing to identify themselves to a property manager who shows up during enforcement. Companies that train drivers to avoid contact are a yellow flag."],
              ["Documented disability-parking process", "Accessible-spot enforcement is a recurring lawsuit risk if mishandled. The tow company should have a written process for verifying placards and handling pushback."],
              ["Abandoned vehicle handling end-to-end", "If the company drops abandoned vehicles back on the property after 30 days, the property is the long-term storage facility. Confirm the company files MVD paperwork and processes lien sale."],
              ["A real local presence — phone, address, owner you can meet", "Out-of-state tow franchises put a layer between the property and the people doing the work. Local matters during the inevitable hard call."],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{title}.</span>{" "}
                  <span className="text-gray-700">{body}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray-800 leading-relaxed mt-8">
            Properties that score a tow company against this list rarely end up with the cheapest option (because
            the cheapest option doesn&apos;t exist — the service is free) and they rarely end up with the most-marketed
            option (because marketing budget doesn&apos;t pay impound damage claims). They end up with the operator
            that scores 14 or 15 of 15.
          </p>
        </div>
      </section>

      {/* SECTION: COMPLIANCE & SIGNAGE */}
      <section id="compliance" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Compliance, Signage & Arizona Towing Law
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Phoenix private property towing operates under three layers of authority — state statute, city code, and
            the property&apos;s own posted rules. All three have to be aligned for an impound to hold up if it is ever
            challenged. The state statutes most often cited are{" "}
            <Link href="/blog/arizona-private-property-towing-rights" className="text-blue-700 underline hover:text-blue-900">ARS § 28-3511</Link>{" "}
            (the property owner&apos;s right to remove unauthorized vehicles) and ARS § 9-499.05 (signage and notice
            requirements). Phoenix City Code Chapter 36 layers in additional posting requirements specifically for
            properties inside the city limits.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Signage requirements.</strong> Each property entrance must have a sign at minimum 18 by 24 inches,
            in a contrasting color, listing the towing company&apos;s name, the 24/7 phone number, the impound lot&apos;s
            physical address, and the language &quot;unauthorized vehicles will be towed at owner&apos;s expense.&quot;
            Apartment complexes typically require signs at every vehicle entrance plus interior posts at every
            building entrance. HOAs require signs at every gate and at the entrance to every parking court.
            Commercial properties typically require signs at every vehicle entrance plus posts at any reserved or
            time-limited parking row.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Notice requirements.</strong> After every impound, the towing company must file a notice with the
            Arizona Stolen/Abandoned Vehicle Database within a statutory window. The notice includes the vehicle
            VIN, plate, the property where the impound occurred, the time of impound, and the impound yard address.
            This is what allows law enforcement and the vehicle owner to locate the vehicle. A tow company that
            skips this step (it does happen, especially with inexperienced operators) exposes the property to civil
            liability.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Special-category enforcement.</strong> Some categories require extra care. Accessible (handicap)
            parking enforcement requires the dispatcher to verify the absence of a placard or plate before
            authorizing a tow — see{" "}
            <Link href="/blog/arizona-handicap-parking-laws-private-property" className="text-blue-700 underline hover:text-blue-900">our guide on Arizona handicap parking laws</Link>.{" "}
            Fire-lane enforcement is governed by{" "}
            <Link href="/blog/arizona-fire-lane-towing-laws" className="text-blue-700 underline hover:text-blue-900">Arizona fire-lane towing laws</Link>{" "}
            and is the one category where immediate tow is presumptively appropriate (no warning, no chase, no
            48-hour grace). Abandoned vehicles trigger the longest chain of custody, governed by Arizona&apos;s
            abandoned-vehicle statutes — Axle handles this end-to-end and recovers cost via lien sale rather than
            charging the property.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Documentation that protects the property.</strong> Every impound should generate a tow ticket
            with a photo of the vehicle in violation, a photo of the posted signage proving compliance, the time of
            arrival, the time of completion, the driver ID, and the dispatcher who authorized. Axle retains this
            packet for the statutory record-keeping period and produces it on demand for the property — useful for
            anything from an HOA-board challenge to a formal civil filing.
          </p>
          <h3 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Deeper reading on Phoenix abandoned-vehicle and enforcement law
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            {ABANDONED_VEHICLE_LINKS.map((l) => (
              <li key={l.slug}>
                <Link href={`/blog/${l.slug}`} className="text-blue-700 underline hover:text-blue-900">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-blue-50/40 border border-blue-100 rounded-xl px-6 py-4">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-blue-700 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-800 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Get Your Phoenix Property Onboarded
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Standing private property towing across the Phoenix metro is free. Send us your parking rules and a few
            entrance photos — most properties are fully active within 5-7 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">Get a Property Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

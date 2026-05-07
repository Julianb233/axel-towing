import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

const CANONICAL = `https://${COMPANY.domain}/arizona-towing`;
const PAGE_TITLE = "Arizona Towing — Statewide Private Property Services for Property Owners (2026 Hub) | Axle Towing";
const PAGE_DESCRIPTION =
  "Statewide hub for Arizona private property towing. Free service for HOAs, apartments, and commercial properties across the Phoenix metro and Pinal County. 24/7 dispatch from yards in Phoenix and Apache Junction. Directory of every city we cover.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Arizona Towing — Statewide Hub for Property Owners (2026)",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arizona Towing — 2026 Statewide Hub for Property Owners",
    description: PAGE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "What does Axle Towing's Arizona service area actually cover?",
    a: "Axle dispatches from yards in Phoenix (320 E. Pioneer St., 85040) and Apache Junction (1151 W. Apache Trail, 85120). Together those two yards reach the full Phoenix metro of ~4.8M residents — Maricopa County and the western edge of Pinal County — at sub-30-minute response. We do not currently dispatch to Tucson, Flagstaff, Yuma, or Sierra Vista.",
  },
  {
    q: "Is private property towing legal across Arizona?",
    a: "Yes — Arizona Revised Statutes §§ 28-3511 and 9-499.05 authorize property owners (and their agents) statewide to remove vehicles parked without permission, provided compliant signage is posted and the towing company files the required impound notice. Cities layer in their own posting rules — Phoenix City Code Chapter 36 is the most-cited example.",
  },
  {
    q: "Does Arizona require a state license to operate a tow truck?",
    a: "Yes. Tow operators in Arizona must hold a current Arizona Department of Transportation tow operator license, plus the standard commercial vehicle insurance stack (on-hook, garage-keepers, commercial auto). Property managers contracting a tow company should verify the license is active before signing a service agreement.",
  },
  {
    q: "What's the difference between Axle's two yards?",
    a: "Both yards run identical services. The Phoenix yard at 320 E. Pioneer St. is the operational hub for the West Valley, downtown Phoenix, and the south-Phoenix corridor. The Apache Junction yard at 1151 W. Apache Trail is the hub for the East Valley and the Pinal County edge. Dispatch routes calls to whichever yard reaches the property fastest.",
  },
  {
    q: "Can a property in Maricopa County outside Phoenix metro get service?",
    a: "Most of Maricopa County is inside our service area. The exception is the far western edge (Wickenburg, Salome) and the far southern edge (Gila Bend) — those add 60+ minutes of drive time and we typically refer to a closer operator. Call dispatch with the property address for a definitive answer.",
  },
  {
    q: "Does Axle service Pinal County?",
    a: "Yes for the western Pinal County corridor — Apache Junction, Gold Canyon, San Tan Valley, Queen Creek edge, Florence, Coolidge, Casa Grande, and Maricopa. The Apache Junction yard is positioned specifically to serve this corridor.",
  },
  {
    q: "How does Arizona signage law differ city to city?",
    a: "ARS 9-499.05 sets the statewide minimum: 18x24 inches at every entrance, towing company name + 24/7 phone + impound lot address + the language 'unauthorized vehicles will be towed at owner's expense.' Cities add specifics — Phoenix City Code Chapter 36 requires additional posting at parking enforcement areas; some HOA-heavy cities (Sun City, Sun City West) have their own 55-plus-community posting conventions. Axle handles the per-jurisdiction layer when fabricating signs.",
  },
  {
    q: "What does an Arizona impound process look like end-to-end?",
    a: "(1) Property authorizes the impound, dispatcher logs the call. (2) Truck arrives, photographs the vehicle in violation + the posted signage. (3) Vehicle hooked + transported to the appropriate yard. (4) Within statutory window (generally 30 minutes to 2 hours), the impound notice is filed in the Arizona Stolen/Abandoned Vehicle Database — this is what allows law enforcement and the vehicle owner to locate the vehicle. (5) Vehicle owner pays statutory fees at retrieval, releases the vehicle. (6) For abandoned vehicles, the longer chain runs — MVD title search, lien notice, lien sale.",
  },
  {
    q: "Can a small Arizona property (under 20 units) get the same service as a large complex?",
    a: "Yes — Axle does not have a minimum unit count, monthly volume requirement, or property-size threshold. The free standing-service model applies to a 12-unit fourplex in the same way it applies to a 500-unit complex. Smaller properties typically just have lower call volume.",
  },
  {
    q: "How quickly can a new Arizona property be onboarded with Axle?",
    a: "5-7 business days for a normal onboarding: 1-2 days for the property manager to send parking rules and entrance photos, 2-3 days for sign fabrication, 1 day for installation. Same-week onboarding is available when a property is in active escalation with a non-responsive incumbent operator.",
  },
];

const CITY_HUBS = [
  // Tier 1 — major cities with full city-service pages
  { slug: "phoenix", name: "Phoenix", group: "Maricopa Metro", hasServicePage: true },
  { slug: "mesa", name: "Mesa", group: "Maricopa Metro", hasServicePage: true },
  { slug: "chandler", name: "Chandler", group: "Maricopa Metro", hasServicePage: true },
  { slug: "tempe", name: "Tempe", group: "Maricopa Metro", hasServicePage: true },
  { slug: "gilbert", name: "Gilbert", group: "Maricopa Metro", hasServicePage: true },
  { slug: "scottsdale", name: "Scottsdale", group: "Maricopa Metro", hasServicePage: true },
  { slug: "glendale", name: "Glendale", group: "Maricopa Metro", hasServicePage: true },
  { slug: "peoria", name: "Peoria", group: "West Valley", hasServicePage: true },
  { slug: "surprise", name: "Surprise", group: "West Valley", hasServicePage: true },
  { slug: "goodyear", name: "Goodyear", group: "West Valley", hasServicePage: true },
  { slug: "avondale", name: "Avondale", group: "West Valley", hasServicePage: true },
  { slug: "queen-creek", name: "Queen Creek", group: "East Valley", hasServicePage: true },
  // Tier 2 — covered cities (location pages only — no city-specific service page yet)
  { slug: "apache-junction", name: "Apache Junction", group: "East Valley", hasServicePage: false },
  { slug: "anthem", name: "Anthem", group: "North Valley", hasServicePage: false },
  { slug: "ahwatukee", name: "Ahwatukee", group: "Maricopa Metro", hasServicePage: false },
  { slug: "buckeye", name: "Buckeye", group: "West Valley", hasServicePage: false },
  { slug: "carefree", name: "Carefree", group: "North Valley", hasServicePage: false },
  { slug: "cave-creek", name: "Cave Creek", group: "North Valley", hasServicePage: false },
  { slug: "el-mirage", name: "El Mirage", group: "West Valley", hasServicePage: false },
  { slug: "fountain-hills", name: "Fountain Hills", group: "East Valley", hasServicePage: false },
  { slug: "gold-canyon", name: "Gold Canyon", group: "East Valley", hasServicePage: false },
  { slug: "guadalupe", name: "Guadalupe", group: "Maricopa Metro", hasServicePage: false },
  { slug: "laveen", name: "Laveen", group: "Maricopa Metro", hasServicePage: false },
  { slug: "litchfield-park", name: "Litchfield Park", group: "West Valley", hasServicePage: false },
  { slug: "maricopa", name: "Maricopa", group: "Pinal County", hasServicePage: false },
  { slug: "paradise-valley", name: "Paradise Valley", group: "Maricopa Metro", hasServicePage: false },
  { slug: "san-tan-valley", name: "San Tan Valley", group: "East Valley", hasServicePage: false },
  { slug: "sun-city", name: "Sun City", group: "West Valley", hasServicePage: false },
  { slug: "sun-city-west", name: "Sun City West", group: "West Valley", hasServicePage: false },
  { slug: "sun-lakes", name: "Sun Lakes", group: "East Valley", hasServicePage: false },
  { slug: "tolleson", name: "Tolleson", group: "West Valley", hasServicePage: false },
  { slug: "waddell", name: "Waddell", group: "West Valley", hasServicePage: false },
  { slug: "youngtown", name: "Youngtown", group: "West Valley", hasServicePage: false },
  { slug: "casa-grande", name: "Casa Grande", group: "Pinal County", hasServicePage: false },
  { slug: "coolidge", name: "Coolidge", group: "Pinal County", hasServicePage: false },
  { slug: "florence", name: "Florence", group: "Pinal County", hasServicePage: false },
  { slug: "new-river", name: "New River", group: "North Valley", hasServicePage: false },
];

const REGION_GROUPS = [
  { name: "Maricopa Metro (Core Phoenix)", description: "The dense urban core — Phoenix proper plus the immediately-adjacent suburbs. Highest call volume, fastest response times." },
  { name: "East Valley", description: "Mesa, Chandler, Gilbert, Tempe, Apache Junction and points east. Covered primarily from the Apache Junction yard." },
  { name: "West Valley", description: "Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, the Sun Cities. Covered primarily from the Phoenix yard." },
  { name: "North Valley", description: "Anthem, Cave Creek, Carefree, Fountain Hills, New River. Covered from the Phoenix yard with longer drive times — confirm response window with dispatch." },
  { name: "Pinal County", description: "Apache Junction, Gold Canyon, Casa Grande, Maricopa, Florence, Coolidge. Covered from the Apache Junction yard." },
];

const TOC = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "regions", label: "Service Regions" },
  { id: "city-directory", label: "City Directory" },
  { id: "law", label: "Arizona Law in One Place" },
  { id: "services", label: "Service Types Statewide" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Started" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Arizona Towing — Statewide Private Property Services for Property Owners (2026)",
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
  about: ["Arizona private property towing", "Statewide impound service", "Phoenix metro towing", "Pinal County towing"],
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
    { "@type": "ListItem", position: 2, name: "Arizona Towing", item: CANONICAL },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Arizona Cities Served by Axle Towing",
  numberOfItems: CITY_HUBS.length,
  itemListElement: CITY_HUBS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name}, AZ`,
    url: c.hasServicePage
      ? `https://${COMPANY.domain}/private-property-towing/${c.slug}`
      : `https://${COMPANY.domain}/locations/${c.slug}`,
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${CANONICAL}#localbusiness`,
  name: COMPANY.name,
  telephone: COMPANY.phone,
  url: `https://${COMPANY.domain}`,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "320 E. Pioneer St.",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      postalCode: "85040",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "1151 W. Apache Trail",
      addressLocality: "Apache Junction",
      addressRegion: "AZ",
      postalCode: "85120",
      addressCountry: "US",
    },
  ],
  areaServed: { "@type": "State", name: "Arizona" },
  priceRange: "Free for property owners",
};

export default function Page() {
  const grouped = REGION_GROUPS.map((r) => ({
    ...r,
    cities: CITY_HUBS.filter((c) => c.group === r.name.split(" (")[0].split(" ")[0] || r.name.includes(c.group)),
  }));
  // Build a stable grouping by exact match on c.group
  const byRegion: Record<string, typeof CITY_HUBS> = {};
  for (const c of CITY_HUBS) {
    (byRegion[c.group] ||= [] as never).push(c);
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      {/* HERO */}
      <section
        className="parallax-fixed relative min-h-[55vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Arizona Towing" }]} />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-4">
            Arizona Towing — Statewide Private Property Services (2026)
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            The statewide hub for Axle Towing &amp; Impound. Free private property towing for Arizona
            HOAs, apartments, and commercial properties — covered from yards in Phoenix and Apache
            Junction. Sub-30-minute response across the Phoenix metro plus western Pinal County.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">Get a Property Assessment</Link>
          </div>
        </div>
      </section>

      {/* TOC */}
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
              <strong>Arizona private property towing</strong> is the statutory authority — under ARS
              §§ 28-3511 and 9-499.05 — for property owners and their agents to remove vehicles
              parked without permission. <strong>{COMPANY.name}</strong> provides this service
              free to HOAs, apartments, and commercial properties across the Phoenix metro and
              western Pinal County, dispatched 24/7 from yards in Phoenix and Apache Junction.
              For the metro-wide guide and selection checklist, see the{" "}
              <Link href="/phoenix-towing" className="text-blue-700 underline hover:text-blue-900">
                Phoenix Towing 2026 Guide
              </Link>
              . The directory below covers every Arizona city we serve.
            </p>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section id="regions" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Service Regions
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Axle dispatches from two physical yards. The Phoenix yard at 320 E. Pioneer St. (85040)
            covers the Maricopa metro core, the West Valley, and the south-Phoenix corridor. The
            Apache Junction yard at 1151 W. Apache Trail covers the East Valley and the Pinal County
            edge. Together they reach the full ~4.8M-resident metro plus the surrounding HOAs and
            commercial properties.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {REGION_GROUPS.map((r) => (
              <div key={r.name} className="rounded-xl border border-blue-100 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY DIRECTORY */}
      <section id="city-directory" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Arizona City Directory — Every City We Cover
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            {CITY_HUBS.length}+ Arizona cities, organized by region. Cities with a dedicated service
            page have local context — yard distances, neighborhood lists, ZIP-code coverage, and
            city-specific parking regulations. Cities without a dedicated page are still actively
            served — call dispatch with the property address for a precise response window.
          </p>
          {Object.entries(byRegion).map(([region, cities]) => (
            <div key={region} className="mb-10">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{region}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={c.hasServicePage ? `/private-property-towing/${c.slug}` : `/locations/${c.slug}`}
                    className="group block rounded-lg border border-blue-200 bg-white px-4 py-3 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                      {c.name}
                      {c.hasServicePage && <span className="text-xs text-emerald-600 ml-2">★</span>}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <p className="text-gray-700 leading-relaxed mt-8 text-sm">
            <span className="text-emerald-600 font-bold">★</span> indicates a city with a dedicated
            service page. Cities without ★ are served from the closest yard with the standard 24/7
            dispatch model.
          </p>
        </div>
      </section>

      {/* AZ LAW */}
      <section id="law" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Arizona Law in One Place
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Arizona&apos;s private property towing framework is one of the more property-owner-friendly
            in the United States — provided the property is in compliance. The cluster of statutes
            below is what governs every impound:
          </p>
          <ul className="space-y-4 text-gray-800 mb-6">
            <li>
              <strong>ARS § 28-3511 — Property owner&apos;s right to remove vehicles.</strong>{" "}
              Establishes the legal authority for a property owner (or designated agent) to remove
              any vehicle parked on private property without permission. Read the property-manager
              walkthrough at{" "}
              <Link href="/blog/arizona-private-property-towing-rights" className="text-blue-700 underline hover:text-blue-900">
                Arizona Private Property Towing Rights
              </Link>
              .
            </li>
            <li>
              <strong>ARS § 9-499.05 — Signage requirements.</strong> Each property entrance must
              have a sign at minimum 18 by 24 inches, listing the towing company name, the 24/7
              phone number, the impound lot&apos;s physical address, and explicit tow-away language.
              Phoenix City Code Chapter 36 layers in additional requirements inside Phoenix limits.
            </li>
            <li>
              <strong>Arizona abandoned-vehicle statutes.</strong> Trigger a longer chain of custody:
              MVD report filing, statutory waiting period, title search, lien sale. Fully detailed
              in the{" "}
              <Link href="/blog/arizona-abandoned-vehicle-laws-property-owners" className="text-blue-700 underline hover:text-blue-900">
                Arizona Abandoned Vehicle Laws — Property Owner&apos;s Guide
              </Link>
              .
            </li>
            <li>
              <strong>Fire-lane enforcement.</strong> Governed by{" "}
              <Link href="/blog/arizona-fire-lane-towing-laws" className="text-blue-700 underline hover:text-blue-900">
                Arizona fire-lane towing laws
              </Link>
              . The one category where immediate tow is presumptively appropriate — no warning, no
              48-hour grace.
            </li>
            <li>
              <strong>Accessible parking enforcement.</strong> See{" "}
              <Link href="/blog/arizona-handicap-parking-laws-private-property" className="text-blue-700 underline hover:text-blue-900">
                Arizona Handicap Parking Laws on Private Property
              </Link>
              {" "}— accessible-spot enforcement is one of the higher-litigation-risk categories;
              dispatcher must verify the absence of a placard or plate before authorizing.
            </li>
            <li>
              <strong>Vehicle lien laws.</strong> See{" "}
              <Link href="/blog/arizona-vehicle-lien-laws-towing-companies" className="text-blue-700 underline hover:text-blue-900">
                Arizona Vehicle Lien Laws for Towing Companies
              </Link>
              {" "}— governs how Axle recovers cost on abandoned vehicles via lien sale.
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Practically, most Arizona property managers don&apos;t need to memorize the statute set —
            they need a tow operator that does, and that builds compliance into every impound. Axle
            handles the per-jurisdiction layer (signage variants, posting requirements, city-code
            additions) at fabrication and installation time.
          </p>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Service Types Across Arizona
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            The same standing-service model applies statewide, regardless of property type. The
            service pages below cover what each property class typically needs, with the ARS
            references and SOP that apply.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/services/private-property-impounds", title: "Private Property Impounds", desc: "The standing service every property gets — 24/7 dispatch, tow + impound, statutory notice filing." },
              { href: "/services/parking-enforcement", title: "Parking Enforcement", desc: "Recurring patrol enforcement on top of standing service. Best for properties with chronic violation patterns." },
              { href: "/services/hoa-towing", title: "HOA Towing", desc: "Tailored for HOA boards and CC&R-driven enforcement. Includes the documentation packet boards typically need for member challenges." },
              { href: "/services/apartment-towing", title: "Apartment Towing", desc: "For multifamily — reserved-spot enforcement, permit programs, fire-lane SOP." },
              { href: "/services/commercial-property-towing", title: "Commercial Property Towing", desc: "Office parks, retail, mixed-use, medical campuses. Includes after-hours posting strategies." },
              { href: "/services/vehicle-relocations", title: "Vehicle Relocations (Paid)", desc: "Construction, paving, special events. The one paid service line — quoted per project." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block rounded-xl border border-blue-200 bg-white p-6 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-white border border-blue-100 rounded-xl px-6 py-4">
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
            Get Your Arizona Property Onboarded
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Standing private property towing across the Phoenix metro and western Pinal County is
            free. Send us your parking rules and a few entrance photos — most properties are fully
            active within 5-7 business days.
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

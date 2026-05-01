import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { CITY_SEO_DATA } from "@/lib/city-seo-data";
import Breadcrumbs from "@/components/Breadcrumbs";

export interface CityServicePageFAQ {
  question: string;
  answer: string;
}

export interface CityServicePageProps {
  /** Slug from CITY_SEO_DATA, e.g. "phoenix" */
  citySlug: string;
  /** Optional FAQ overrides — if omitted, the component generates 6 city-aware defaults from CITY_SEO_DATA */
  faqs?: CityServicePageFAQ[];
  /** Optional override for the hero lead paragraph (defaults to a templated paragraph) */
  heroLead?: string;
  /** Optional extra paragraph content for the "What we do" section (appended after the default 3 paragraphs) */
  extraBodyParagraphs?: string[];
}

const BASE_URL = `https://${COMPANY.domain}`;

function defaultFaqs(citySlug: string): CityServicePageFAQ[] {
  const city = CITY_SEO_DATA[citySlug];
  if (!city) return [];
  const neighborhoodA = city.neighborhoods[0] ?? city.name;
  const neighborhoodB = city.neighborhoods[1] ?? city.name;
  return [
    {
      question: `How quickly can Axle Towing respond to a private property towing call in ${city.name}?`,
      answer: `Axle Towing dispatches from our ${city.nearestYard} yard and typically reaches ${city.name} properties in ${city.responseTime}. We dispatch 24/7/365 and serve the entire city, including ${neighborhoodA}, ${neighborhoodB}, and the surrounding ZIP codes (${city.zipCodes.slice(0, 3).join(", ")}).`,
    },
    {
      question: `What does private property towing cost a ${city.name} property manager?`,
      answer: `Nothing. Private property towing in ${city.name} is completely free for property owners, HOAs, apartment communities, and commercial property managers. There are no contract fees, no monthly minimums, and no per-tow charges. The vehicle owner pays the recovery and storage fee at retrieval, never the property.`,
    },
    {
      question: `Does Axle Towing serve ${neighborhoodA} and ${neighborhoodB}?`,
      answer: `Yes. We serve every neighborhood in ${city.name}, including ${city.neighborhoods.slice(0, 5).join(", ")}, and the surrounding commercial corridors. Our ${city.nearestYard} yard provides ${city.responseTime} response across the entire city.`,
    },
    {
      question: `What signs are required to legally tow vehicles from a ${city.name} property?`,
      answer: `Arizona Revised Statutes 9-499.05 require tow-away signage at every entrance of a private property, including the towing company's name, phone number, and impound yard address. Our team installs ARS-compliant signage at no charge as part of onboarding any ${city.name} property — see our complete signage guide at our blog for full requirements.`,
    },
    {
      question: `How does a ${city.name} property manager set up service with Axle Towing?`,
      answer: `Setup takes 7 to 14 days. Step one is a no-cost site walk where we audit existing signage, identify problem areas, and recommend enforcement zones. Step two is a written authorization letter that lets our drivers act on the property's behalf. Step three is signage installation. Step four is going live — typically same-day after signage is up. Call ${COMPANY.phone} or use the contact form to start.`,
    },
    {
      question: `Can Axle Towing handle abandoned vehicles, fire-lane violations, and HOA enforcement in ${city.name}?`,
      answer: `Yes. We handle every category of private property enforcement in ${city.name} — abandoned vehicles, fire-lane and reserved-spot violations, expired registration, HOA CC&R violations, handicap-zone enforcement, and event-day patrols. Each property gets a written enforcement plan tailored to its rules, and our drivers verify each tow against that plan before hooking up.`,
    },
  ];
}

export default function CityServicePage({
  citySlug,
  faqs,
  heroLead,
  extraBodyParagraphs = [],
}: CityServicePageProps) {
  const city = CITY_SEO_DATA[citySlug];
  if (!city) {
    throw new Error(
      `CityServicePage: no CITY_SEO_DATA entry for slug "${citySlug}"`
    );
  }

  const pageUrl = `${BASE_URL}/private-property-towing/${citySlug}`;
  const resolvedFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs(citySlug);

  const lead =
    heroLead ??
    `Axle Towing & Impound provides free private property towing for ${city.name}, AZ property managers, HOAs, and apartment communities. Our ${city.nearestYard} dispatch reaches ${city.name} properties in ${city.responseTime}, 24 hours a day, 7 days a week. We handle the signage, the legal authorization, the patrols, and the towing — at no cost to the property owner. Vehicle owners pay the recovery fee at retrieval, never the property.`;

  // ----- Schema blocks -----
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Private Property Towing", url: `${BASE_URL}/private-property-towing` },
    { name: city.name, url: pageUrl },
  ]);

  const localBusinessForCity = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TowingService"],
    "@id": `${pageUrl}#business`,
    name: `${COMPANY.name} — ${city.name}`,
    description: `Free private property towing and parking enforcement for ${city.name} property managers, HOAs, apartments, and commercial properties. ${city.responseTime} response, 24/7/365 dispatch.`,
    url: pageUrl,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${BASE_URL}${COMPANY.logo}`,
    logo: `${BASE_URL}${COMPANY.logo}`,
    priceRange: "Free for property owners",
    address: {
      "@type": "PostalAddress",
      streetAddress: city.nearestYardAddress.split(",")[0],
      addressLocality: city.name,
      addressRegion: "AZ",
      postalCode: city.zipCodes[0],
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${city.name}, AZ`,
      containedInPlace: { "@type": "State", name: "Arizona" },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 dispatch",
    },
    availableLanguage: ["English", "Spanish"],
  };

  const service = serviceSchema({
    title: `Private Property Towing in ${city.name}, AZ`,
    slug: `../private-property-towing/${citySlug}`,
    description: `Free private property towing for ${city.name} property managers, HOAs, apartment complexes, and commercial properties. ARS-compliant signage installation, scheduled patrols, and 24/7 unauthorized vehicle removal at no cost to property owners.`,
  });

  const faqJsonLd = faqSchema(resolvedFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessForCity) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/contact-phoenix.jpg)` }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(220,38,38,0.55) 100%)",
          }}
        />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Private Property Towing", href: "/private-property-towing" },
                { label: city.name },
              ]}
            />
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {city.name}, Arizona
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Private Property Towing in{" "}
              <span className="text-gradient">{city.name}</span>, AZ
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-3 font-medium">
              Free service for property managers, HOAs &amp; apartments.{" "}
              {city.responseTime} response. 24/7 dispatch.
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              {lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call Dispatch — {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Set Up Free Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer / Local Stats */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-6 md:p-8 border-l-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(27,42,63,0.04) 0%, rgba(220,38,38,0.05) 100%)",
                  borderLeftColor: "#DC2626",
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-red-600 mb-2">
                  The {city.name} Quick Answer
                </p>
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-medium">
                  Private property towing in {city.name} is{" "}
                  <strong>free for property owners</strong>. Axle Towing &amp; Impound
                  installs ARS-compliant signage, patrols on your schedule, and removes
                  unauthorized vehicles in {city.responseTime} from our{" "}
                  {city.nearestYard} yard. The vehicle owner pays the recovery fee at
                  pickup — never the property. Apartment, HOA, and commercial
                  enforcement is included; no monthly fees, no contracts, no minimums.
                  Call{" "}
                  <a href={`tel:${COMPANY.phone}`} className="text-blue-700 underline">
                    {COMPANY.phone}
                  </a>{" "}
                  to start.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-5 text-center border border-gray-100">
                <div className="text-3xl font-bold text-brand-blue">
                  {city.responseTime.replace("Under ", "<")}
                </div>
                <div className="text-xs text-gray-700 mt-1 uppercase tracking-wider">
                  Response time
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-5 text-center border border-gray-100">
                <div className="text-3xl font-bold text-brand-blue">24/7</div>
                <div className="text-xs text-gray-700 mt-1 uppercase tracking-wider">
                  Dispatch
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-5 text-center border border-gray-100">
                <div className="text-3xl font-bold text-brand-blue">
                  {city.hoaCount}
                </div>
                <div className="text-xs text-gray-700 mt-1 uppercase tracking-wider">
                  {city.name} HOAs
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-5 text-center border border-gray-100">
                <div className="text-3xl font-bold text-brand-blue">FREE</div>
                <div className="text-xs text-gray-700 mt-1 uppercase tracking-wider">
                  To property owners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve in [City] */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve in {city.name}
            </h2>
            <p className="text-gray-700 text-lg">
              Axle Towing partners with every type of {city.name} property that needs
              parking enforcement. We do not serve stranded drivers or vehicle
              owners — our customers are the people who manage the property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Apartment Complexes",
                detail: `${city.apartmentCount} units across ${city.name} — tenant compliance, guest overflow, fire-lane and reserved-spot enforcement.`,
              },
              {
                title: "HOAs & Master-Planned",
                detail: `${city.hoaCount} HOAs in ${city.name} including ${city.notableHOAs[0] ?? "major communities"} — CC&R-aligned enforcement.`,
              },
              {
                title: "Commercial Properties",
                detail: `${city.commercialPropertyCount} commercial properties — retail centers, office parks, medical buildings, mixed-use.`,
              },
              {
                title: "Retail & Restaurants",
                detail: `Customer parking protection in ${city.landmarks.slice(0, 2).join(" and ")} and the city's retail corridors.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — body content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Private Property Towing in {city.name}
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p>
                  {city.name} has{" "}
                  <strong>{city.apartmentCount}</strong> apartment units,{" "}
                  <strong>{city.hoaCount}</strong> HOA communities, and{" "}
                  <strong>{city.commercialPropertyCount}</strong> commercial properties
                  — each one a potential parking enforcement challenge. Axle Towing
                  &amp; Impound dispatches from {city.nearestYard} ({city.driveTime}{" "}
                  to most {city.name} properties) and handles every category of
                  private property towing the city's property managers face.
                </p>
                <p>
                  Our model is simple. You authorize us to enforce your property's
                  parking rules in writing. We install ARS-compliant signage at every
                  entrance and at the violation hot-spots you identify. Our drivers
                  patrol on the cadence you set — daily, weekly, on-demand, or
                  event-day. Unauthorized vehicles are towed to our impound yard, and
                  vehicle owners contact us directly to retrieve them. The property
                  never sees a bill, a contract minimum, or a per-tow fee.
                </p>
                <p>
                  We work the way the {city.name} property-management community
                  expects: professional drivers who document every tow with timestamped
                  photos, written enforcement plans tailored to each property's CC&Rs
                  or lease language, and a 24/7 dispatch line that property managers
                  can reach on any night, weekend, or holiday. {city.name}'s seasonal
                  pressure points — {city.seasonalFactors.split(".")[0].toLowerCase()} —
                  are factored into the patrol schedule so coverage scales with the
                  pressure.
                </p>
                {extraBodyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 border border-blue-100 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {city.name} Service Snapshot
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Population:</strong> {city.population}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Closest yard:</strong> {city.nearestYard}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Drive time:</strong> {city.driveTime}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Response:</strong> {city.responseTime}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Coverage ZIPs:</strong>{" "}
                      {city.zipCodes.slice(0, 6).join(", ")}
                      {city.zipCodes.length > 6 ? " + more" : ""}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <strong>Languages:</strong> English &amp; Spanish
                    </span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-blue-100">
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
                    {city.name} Office
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    {city.nearestYardAddress}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Areas / Neighborhoods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {city.name} Neighborhoods &amp; Service Areas
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
            We dispatch to every {city.name} neighborhood and ZIP code. Same response
            time, same enforcement standard, every property type.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Neighborhoods we cover in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                ZIP codes we serve in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="bg-white px-4 py-2 rounded-full text-sm font-mono text-gray-700 border border-gray-200"
                  >
                    {zip}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                {city.drivingDirections}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (HowTo schema-ready) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How {city.name} Property Managers Set Up Service
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Most {city.name} properties are live in 7 to 14 days. No upfront cost,
              no monthly fee, no minimum tow count.
            </p>
          </div>

          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: `Free site walk — anywhere in ${city.name}`,
                detail: `One of our managers walks your ${city.name} property and audits existing signage, identifies enforcement hot-spots, and drafts an enforcement plan tailored to your CC&Rs or lease language. Takes 30-60 minutes. No obligation.`,
              },
              {
                step: "2",
                title: "Sign the authorization letter",
                detail:
                  "A short written authorization gives our drivers the right to act on your property's behalf. This satisfies Arizona's private-property towing requirement that the property formally consent to enforcement.",
              },
              {
                step: "3",
                title: "ARS-compliant signage installed",
                detail:
                  "We install posted tow-away signs at every entrance and at hot-spot areas (fire lanes, reserved spaces, handicap zones). All signs include our company name, phone, and impound address per ARS 9-499.05. Signage is free.",
              },
              {
                step: "4",
                title: `Service goes live in ${city.name}`,
                detail: `Same-day after signage is installed. Our drivers patrol on your schedule, vehicle owners contact us directly at retrieval, and you get a written report of every tow. ${city.responseTime} response, 24/7 dispatch, available across all of ${city.name}.`,
              },
            ].map((s) => (
              <li
                key={s.step}
                className="flex gap-5 items-start rounded-2xl p-6 border border-gray-100 bg-gray-50"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compliance Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 md:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {city.name} Private Property Towing — Compliance Snapshot
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {city.localRegulations}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our drivers know which {city.name} signage rules apply to which property
              type and are trained to verify compliance before every tow. We do not
              publish legal advice — for the full Arizona statute and how it applies
              to your property, see our property-manager resources below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/parking-lot-signage-requirements-arizona"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 underline"
              >
                Parking lot signage requirements in Arizona →
              </Link>
              <Link
                href="/blog/arizona-private-property-towing-rights"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 underline"
              >
                Property owner towing rights →
              </Link>
              <Link
                href="/blog/property-manager-guide-to-towing-contracts"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 underline"
              >
                Property manager guide to towing contracts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {city.name} Private Property Towing — FAQ
            </h2>
            <p className="text-gray-700 text-lg">
              The most common questions {city.name} property managers, HOA boards, and
              apartment owners ask before signing up.
            </p>
          </div>

          <div className="space-y-4">
            {resolvedFaqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-gray-50 hover:bg-white transition-colors"
              >
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                  <span className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                    {f.question}
                  </span>
                  <span className="text-2xl text-blue-700 font-light shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1 text-gray-700 leading-relaxed">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links — abandoned vehicle near me page if exists */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            More {city.name} Resources for Property Managers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={`/blog/abandoned-vehicle-removal-near-me-${citySlug}-az`}
              className="rounded-xl bg-white p-5 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Guide
              </div>
              <div className="font-semibold text-gray-900">
                Abandoned vehicle removal in {city.name}
              </div>
            </Link>
            <Link
              href={`/locations/${citySlug}`}
              className="rounded-xl bg-white p-5 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Location
              </div>
              <div className="font-semibold text-gray-900">
                Towing services in {city.name}
              </div>
            </Link>
            <Link
              href="/services/private-property-impounds"
              className="rounded-xl bg-white p-5 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Service
              </div>
              <div className="font-semibold text-gray-900">
                Private property impounds (overview)
              </div>
            </Link>
            <Link
              href="/services/hoa-towing"
              className="rounded-xl bg-white p-5 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Service
              </div>
              <div className="font-semibold text-gray-900">
                HOA towing programs
              </div>
            </Link>
            <Link
              href="/services/apartment-towing"
              className="rounded-xl bg-white p-5 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Service
              </div>
              <div className="font-semibold text-gray-900">
                Apartment complex towing
              </div>
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-blue-700 text-white p-5 hover:bg-blue-800 transition-colors"
            >
              <div className="text-xs uppercase tracking-wider text-blue-100 mb-1">
                Get started
              </div>
              <div className="font-semibold">
                Set up free service for your {city.name} property →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: "#1B2A3F" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to set up free private property towing in {city.name}?
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
            One call. {city.responseTime} response from our {city.nearestYard}{" "}
            yard. No contract minimums, no monthly fee. The property pays nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Call dispatch — {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              style={{ color: "#1B2A3F" }}
            >
              Request free site walk
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">
            Serving all of {city.name}, AZ —{" "}
            {city.neighborhoods.slice(0, 4).join(", ")}, and every ZIP code in
            between.
          </p>
        </div>
      </section>
    </>
  );
}

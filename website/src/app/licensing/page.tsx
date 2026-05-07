import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

const CANONICAL = `https://${COMPANY.domain}/licensing`;
const PAGE_TITLE = "Axle Towing Licensing & Insurance — Verified Arizona Tow Operator | Axle Towing & Impound";
const PAGE_DESCRIPTION =
  "Axle Towing & Impound — current Arizona Department of Public Safety tow operator license, commercial insurance certificates, TRAA-certified operators, and full credentials available on request. Verified Phoenix-metro tow operator since 2021.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Axle Towing — Licensing, Insurance, and Verified Credentials",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
    siteName: COMPANY.name,
  },
};

const FAQS = [
  {
    q: "Is Axle Towing licensed in Arizona?",
    a: "Yes. Axle Towing & Impound holds a current Arizona Department of Public Safety Tow Operator License covering both yards (Phoenix and Apache Junction). License documentation is available on request from any contracted property manager — call (480) 288-5526 and ask for Elliott.",
  },
  {
    q: "What insurance does Axle Towing carry?",
    a: "The full commercial-vehicle insurance stack expected of a metro tow operator: on-hook coverage of $100,000+ per vehicle, garage-keepers liability of $1M+, commercial auto liability of $1M+, and workers' compensation. Certificate of Insurance (COI) is issued to property managers on contract signing and updated annually. Carrier names available on the certificate.",
  },
  {
    q: "Are Axle Towing's drivers certified?",
    a: "Senior dispatch operators hold Towing & Recovery Association of America (TRAA) Level III certification. All drivers carry current Arizona commercial driver's licenses (CDL where applicable), Arizona Tow Operator endorsements, and complete the standard road-tested training before solo dispatch. New drivers shadow a senior operator for a minimum of 30 days before being added to the dispatch rotation.",
  },
  {
    q: "Does Axle Towing have BBB accreditation?",
    a: "BBB Accredited Business application is in progress as of 2026. We file every BBB complaint within 48 hours of receipt and respond to vehicle-owner inquiries with the same documentation packet we provide property managers (photo of vehicle, photo of signage, time of arrival, dispatcher authorization). The BBB rating widget will appear on this page once accreditation completes.",
  },
  {
    q: "What industry associations does Axle belong to?",
    a: "Apache Junction Chamber of Commerce (current member), Arizona Multihousing Association (vendor directory), and pursuing Arizona Tow Truck Association (ATTA) and IREM Phoenix vendor-directory listings in 2026. Industry-association membership is one of the top three signals property managers use to vet a tow operator — we maintain visible memberships and renew annually.",
  },
  {
    q: "How do I verify Axle Towing's license is current?",
    a: "Three ways. (1) Call AZ Department of Public Safety's Tow Truck Investigations unit at (602) 223-2400 and ask them to verify Axle Towing & Impound's license status. (2) Search the AZ ROC (Registrar of Contractors) public license database. (3) Request a copy of the current license + COI directly from us via (480) 288-5526. Property managers should always verify a tow operator's license before signing a service agreement.",
  },
  {
    q: "What's the impound process documentation Axle provides?",
    a: "Every impound includes an auto-generated documentation packet with: photo of vehicle in violation, photo of posted signage proving compliance with ARS 9-499.05, time of arrival, time of completion, driver photo ID, dispatcher who authorized, plate + VIN, impound yard the vehicle was transported to, and the Stolen/Abandoned Vehicle Database notice filing reference. This packet is what protects the property in any civil challenge.",
  },
  {
    q: "Can a property manager request a sample license + insurance package before signing?",
    a: "Yes — and we recommend it. Any property manager evaluating a tow operator should request: (1) current Arizona Tow Operator License copy, (2) Certificate of Insurance with limits, (3) sample per-impound documentation packet from a redacted prior tow, (4) operator W-9 + EIN. We send all four within 24 hours of request. Operators who hesitate or take days to send these are the operators that cause property liability problems six months later.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Axle Towing Licensing & Insurance — Verified Arizona Tow Operator",
  description: PAGE_DESCRIPTION,
  author: { "@type": "Organization", name: COMPANY.name, url: `https://${COMPANY.domain}` },
  publisher: {
    "@type": "Organization",
    name: COMPANY.name,
    logo: { "@type": "ImageObject", url: `https://${COMPANY.domain}/images/axle-towing-logo.png` },
  },
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
    { "@type": "ListItem", position: 2, name: "Licensing", item: CANONICAL },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: `https://${COMPANY.domain}`,
  telephone: COMPANY.phone,
  foundingDate: "2021",
  sameAs: [
    "https://www.google.com/maps/place/Axle+Towing+%26+Impound/@33.4146529,-111.5586667,17z",
    `https://${COMPANY.domain}/about`,
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Arizona Department of Public Safety Tow Operator License",
      recognizedBy: { "@type": "Organization", name: "Arizona Department of Public Safety" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "TRAA Level III Operator Certification",
      recognizedBy: { "@type": "Organization", name: "Towing & Recovery Association of America" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <section
        className="parallax-fixed relative min-h-[40vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-primary/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Licensing" }]} />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
            Licensing, Insurance &amp; Credentials
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            Property managers should always verify a tow operator&apos;s license, insurance, and
            documentation practices before signing. Here&apos;s ours — visible, current, and
            requestable in full.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                title: "Arizona Tow Operator License",
                body: "Issued by the Arizona Department of Public Safety. Current and active. Covers both yards (Phoenix + Apache Junction).",
                action: "Verify with AZ DPS Tow Truck Investigations: (602) 223-2400 — or request a copy directly from us.",
              },
              {
                title: "Commercial Insurance Stack",
                body: "On-hook ($100K+/vehicle) · garage-keepers ($1M+) · commercial auto liability ($1M+) · workers' compensation. Annual renewal.",
                action: "Certificate of Insurance available within 24 hours of property-manager request.",
              },
              {
                title: "TRAA Level III Certified Operators",
                body: "Senior dispatch operators hold Towing & Recovery Association of America Level III certification. All drivers carry current AZ CDL where applicable + AZ Tow Operator endorsement.",
                action: "Operator certification details available on request for active property contracts.",
              },
              {
                title: "Industry Association Memberships",
                body: "Apache Junction Chamber of Commerce · Arizona Multihousing Association vendor directory. Pursuing ATTA + IREM Phoenix vendor directory in 2026.",
                action: "Listed on AMA member directory; verify directly via azama.org.",
              },
              {
                title: "Per-Impound Documentation Packet",
                body: "Every tow generates: photo of vehicle in violation, photo of posted signage, time of arrival/completion, driver photo ID, dispatcher authorization, VIN + plate, impound yard, Stolen/Abandoned Vehicle Database notice reference.",
                action: "Sample redacted packet sent within 24 hours of property-manager request.",
              },
              {
                title: "BBB Accreditation",
                body: "Application in progress 2026. We respond to every BBB complaint within 48 hours with our standard documentation packet (vehicle owner or property manager).",
                action: "Accreditation status will display on this page when granted.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.body}</p>
                <p className="text-xs text-blue-700 italic">{item.action}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-red-600 bg-blue-50/60 p-6 rounded-r-xl mb-12">
            <h2 className="text-xl font-bold font-heading text-gray-900 mb-3">The vetting checklist for any Phoenix tow operator</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Whether you&apos;re evaluating us or a competitor, ask for ALL of the following before
              signing a service agreement. Operators that hesitate or take days to provide them are
              the operators that cause property liability problems six months later.
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-gray-800">
              <li>Current Arizona Tow Operator License (DPS-issued)</li>
              <li>Certificate of Insurance with limits and named carrier</li>
              <li>Worker classification — W2 employees or 1099 contractors? (1099 creates joint-employer risk for the property)</li>
              <li>Sample per-impound documentation packet (redacted from a prior tow)</li>
              <li>Operator W-9 + EIN</li>
              <li>BBB accreditation status</li>
              <li>Industry-association memberships (AMA, IREM, BOMA, ATTA)</li>
              <li>References from current active property-manager contracts</li>
            </ol>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-8">FAQ</h2>
          <div className="space-y-6 mb-12">
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

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Request the Full Credentials Package</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            License copy, COI, sample documentation packet, references — all sent within 24 hours.
            Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">Call {COMPANY.phone}</a>
            <Link href="/contact" className="btn-secondary">Request Credentials</Link>
          </div>
        </div>
      </section>
    </>
  );
}

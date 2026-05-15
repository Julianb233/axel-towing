import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/arizona-towing-signage-laws-2026-update.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck parked next to ARS-compliant towing signage in Arizona - Axle Towing signage laws";
const CANONICAL = "https://axletowing.com/blog/arizona-towing-signage-laws-2026-update";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "Arizona Towing Signage Laws 2026 | ARS 28-874 & 9-499.05",
  description: "2026 update on Arizona towing signage requirements under ARS 28-874 and ARS 9-499.05. Dimensions, language, placement, compliance gaps, and municipal overlays.",
  keywords: "arizona towing signage laws 2026, ARS 9-499.05 signage requirements, towing sign arizona private property, parking lot towing sign requirements arizona, ARS 28-874 signage",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Arizona Towing Signage Laws 2026 | ARS 28-874 & 9-499.05",
    description: "Deep dive on Arizona's towing signage requirements for private property — the legal framework, compliance gaps, and municipal overlays for the Phoenix metro.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "What are the minimum dimensions for a towing sign in Arizona?",
    answer: "Under ARS 9-499.05, the state baseline requires signs to be legible and clearly visible, with specific minimum letter heights and contrast requirements. Many Phoenix-metro municipalities impose additional dimension minimums — some require signs no smaller than 17 inches wide by 22 inches tall, while others mandate larger formats. Properties in multiple municipalities should verify the applicable local code, not just the state baseline. This is for general educational purposes and is not legal advice.",
  },
  {
    question: "Does the towing sign need to show the towing company's name and phone number?",
    answer: "Yes. Under ARS 9-499.05, the sign must include the name, address, and telephone number of the towing company authorized to remove vehicles. The phone number must be a working number that vehicle owners can call to locate their impounded vehicle. This information must be current — when you change towing companies, the signage must be updated.",
  },
  {
    question: "How many towing signs does my property need?",
    answer: "At a minimum, one sign must be posted at each entrance to the parking area. For larger properties with multiple access points, each entrance requires a sign. Internal signage in the parking area itself is also required and provides additional protection. A professional towing company should perform a signage audit before beginning enforcement to determine the appropriate placement for your specific property layout.",
  },
  {
    question: "Can a tow be disputed if my signage is non-compliant?",
    answer: "Yes. Non-compliant or absent signage is one of the most common grounds for a successful tow dispute in Arizona. If the signage does not meet the requirements of ARS 9-499.05 and applicable municipal code, the vehicle owner may have valid grounds to contest fees. This is precisely why a pre-enforcement signage audit is essential.",
  },
  {
    question: "Do Phoenix and Scottsdale have stricter towing signage requirements than Arizona state law?",
    answer: "Yes. Several Phoenix-metro municipalities, including some jurisdictions in Tempe, Scottsdale, and Chandler, have adopted towing and signage ordinances that are more demanding than the ARS baseline. Requirements can include larger minimum dimensions, specific color or reflectivity standards, or additional required language. Properties in these cities must comply with the more stringent local requirement. Consult your towing company or a licensed Arizona attorney for guidance specific to your municipality.",
  },
  {
    question: "How often should I inspect my towing signs for compliance?",
    answer: "Signs should be inspected at least annually and after any physical change to the property's access points, parking layout, or landscaping that might affect sign visibility. Arizona's intense sunlight and monsoon weather can degrade signage over time — faded, damaged, or obscured signs may fall out of compliance. Your towing partner should be able to provide periodic compliance checks.",
  },
  {
    question: "What happens to a tow if the property switches towing companies but hasn't updated the signs yet?",
    answer: "A tow executed by a company whose name is not on the posted signage may be challenged. When switching towing companies, update the signage before the new company performs any removals. The transition should be coordinated so there is no period where enforcement is occurring under a company not named in the signage.",
  },
];

const SIGN_ELEMENTS = [
  { element: "Company name", requirement: "Full legal name of the authorized towing company — must match the company's ADOT license" },
  { element: "Company address", requirement: "Physical address of the towing company or storage facility where vehicles are held" },
  { element: "Company phone number", requirement: "Active phone number answered during all hours when vehicles may be impounded" },
  { element: "Restriction language", requirement: "Clear statement that unauthorized vehicles will be towed at the owner's expense" },
  { element: "Permit or restriction type", requirement: "If parking is permit-only or restricted to specific users (tenants, customers), the sign must identify that restriction" },
  { element: "Letter height", requirement: "Minimum letter height required for legibility at driver viewing distance — varies by municipality" },
  { element: "Sign dimensions", requirement: "State baseline establishes legibility requirements; many Phoenix-metro cities require specific minimum physical dimensions" },
  { element: "Placement height", requirement: "Signs must be mounted at a height visible to drivers, not obscured by vegetation or other objects" },
];

const MUNICIPALITIES = [
  { city: "Phoenix", status: "Municipal code adopts state baseline with some enhancements — verify with City of Phoenix Transportation Department" },
  { city: "Scottsdale", status: "Scottsdale has adopted local towing ordinances with specific sign requirements that may exceed the state baseline — verify with City of Scottsdale" },
  { city: "Tempe", status: "Tempe municipal code includes specific parking enforcement and signage provisions — verify with City of Tempe" },
  { city: "Chandler", status: "Chandler has local towing ordinances — verify current requirements with City of Chandler Code Compliance" },
  { city: "Mesa", status: "Mesa municipal code includes parking enforcement provisions — verify with City of Mesa Transportation" },
  { city: "Glendale", status: "Glendale municipal code may include additional requirements — verify with City of Glendale" },
  { city: "Gilbert", status: "Gilbert town code includes parking enforcement provisions — verify with Town of Gilbert" },
  { city: "Peoria", status: "Peoria municipal code includes towing provisions — verify with City of Peoria" },
];

export default function Page() {
  const faqSchemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const articleSchemaObj = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Arizona Towing Signage Laws 2026 | ARS 28-874 & 9-499.05",
    description: "Deep dive on Arizona towing signage requirements under ARS 28-874 and ARS 9-499.05, including municipal overlays for Phoenix, Scottsdale, Tempe, and other metro cities.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: HERO_IMAGE_URL,
    author: {
      "@type": "Organization",
      name: "Axle Towing & Impound",
      url: "https://axletowing.com",
      knowsAbout: ["Arizona private property towing", "ARS 28-3511", "HOA parking enforcement", "Property management"],
      areaServed: "Phoenix metro, Arizona",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Axle Towing Operations Team",
      description: "ARS-compliant private property towing operators serving the Phoenix metro since 2021",
    },
    publisher: {
      "@type": "Organization",
      name: "Axle Towing & Impound",
      logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" },
    },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaObj, articleSchemaObj]) }}
      />

      {/* Hero */}
      <section className="min-h-[40vh] flex items-end relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.12),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"
          >
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Arizona Towing Laws</span>
            <span className="text-sm text-blue-200/60">13 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Arizona Towing Signage Laws{" "}
            <span className="text-gradient">2026 Update</span>
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>

      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">Arizona towing signage law is governed by ARS 9-499.05, which requires signs at all entrances to private parking areas with specific minimum dimensions, required language including towing company name and 24-hour contact number, and placement at a height visible to drivers. In 2026, several Phoenix-metro municipalities including Scottsdale and Tempe have stricter requirements than the state baseline — properties must comply with the most stringent applicable rule. Signs must be maintained legible; faded or obscured signs can invalidate a tow. Axle Towing audits signage compliance for all Arizona partner properties.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 max-w-none prose-lg">

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05 sets the Arizona baseline for towing signage — but Phoenix-metro cities like Scottsdale and Tempe have stricter local rules.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Signs must include the towing company name, 24-hour contact number, and the restriction being enforced.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Minimum sign dimensions under Arizona state law are typically 17 by 22 inches — local municipalities may require larger.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Faded, obscured, or improperly placed signs can invalidate a tow and expose the property owner to liability.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing provides compliant signage audit and consultation for all Phoenix-metro partner properties at no cost.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Towing signage is the legal foundation of every private property impound in Arizona. Without compliant signage, even a clearly unauthorized vehicle can be legally retrieved without payment — and a disputed tow can damage your property's credibility with residents, tenants, and HOA members. Understanding what the law requires, where your signs must be, and how municipal overlays change the picture is essential for any Phoenix-metro property manager or HOA board.
              </p>

              <div className="glass-card-white rounded-2xl p-5 mb-10 border-l-4 border-primary">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Legal Disclaimer:</strong> This article is for general educational purposes only and does not constitute legal advice. Arizona towing signage law involves both state statutes and local municipal codes that vary by city. Consult a licensed Arizona attorney or your towing company for guidance specific to your property and municipality.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Two Key Statutes: ARS 28-874 and ARS 9-499.05</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Two statutes form the backbone of Arizona's private property towing signage framework:
              </p>
              <div className="space-y-4 mb-8">
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">ARS 28-874 — Towing from Private Property</h3>
                  <p className="text-gray-600">
                    ARS 28-874 establishes the procedural framework for removing a vehicle from private property, including the conditions under which removal is authorized. The statute requires that signage be posted in a manner that provides adequate notice to vehicle operators. It also addresses the towing company's obligations after removal — including storage, access for retrieval, and notification. ARS 28-874 is the procedural statute; ARS 9-499.05 is the signage standard statute. Both must be satisfied for a tow to be legally defensible.
                  </p>
                </div>
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">ARS 9-499.05 — Signage Requirements</h3>
                  <p className="text-gray-600">
                    ARS 9-499.05 is the primary signage standard statute. It establishes what information must appear on a towing sign, where signs must be placed, and what minimum visibility standards apply. Critically, this statute also authorizes municipalities to adopt local ordinances that set stricter standards — which is why several Phoenix-metro cities have signage requirements that go beyond what ARS 9-499.05 alone requires. Properties in those cities must comply with the local standard, not just the state baseline.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Required Elements on Every Towing Sign</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A compliant Arizona towing sign must include all of the following elements. Missing any one of them creates a vulnerability:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-gray-600 border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-900 text-left">
                      <th className="px-4 py-3 font-semibold rounded-tl-lg">Sign Element</th>
                      <th className="px-4 py-3 font-semibold rounded-tr-lg">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIGN_ELEMENTS.map((row, idx) => (
                      <tr key={row.element} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-4 py-3 font-medium text-gray-900 align-top">{row.element}</td>
                        <td className="px-4 py-3">{row.requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sign Placement: Where Signs Must Be Posted</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Placement is as critical as sign content. A sign that is technically complete but posted in the wrong location — or obstructed by vegetation — provides insufficient notice and can be challenged. The requirements include:
              </p>
              <ul className="text-gray-600 space-y-3 mb-8">
                {[
                  "At least one sign at each entrance to the parking area, visible to drivers approaching the entrance",
                  "Signs must be mounted at a height where they are visible from a vehicle — not hidden behind landscaping, parked vehicles, or other obstructions",
                  "For large parking areas with multiple sections or access points, additional internal signage provides stronger protection",
                  "Signs must not be positioned so that they are only visible after a driver has already committed to parking",
                  "Illumination may be required in some municipalities for signs in parking areas used at night — verify with your local code",
                  "Signs must remain in good condition — faded, damaged, or illegible signs may not satisfy the visibility requirement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Compliance Gaps Found During Property Audits</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When Axle Towing conducts a signage audit at a new property, these are the gaps most frequently discovered:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Signs from a previous towing company", d: "When a property switches towing companies but does not update the signage, the posted company name no longer matches the authorized towing company. Every tow executed under those signs can be challenged. This is one of the most common and most avoidable compliance failures." },
                  { t: "Missing signs at secondary entrances", d: "Many properties have a primary entrance with a sign but secondary access points — service gates, rear lots, pedestrian connections — without signage. A vehicle entering through an unsignposted entrance has received no notice and the tow is more easily disputed." },
                  { t: "Signs obscured by vegetation growth", d: "Phoenix's growing season means that landscaping can encroach on signage visibility over time. A sign that was fully visible when installed may be partially or fully obscured a year later. Periodic walkthroughs catch this before enforcement is affected." },
                  { t: "Faded or illegible signs due to sun exposure", d: "Arizona's UV index is among the highest in the United States. Signs that are not rated for outdoor UV exposure can fade significantly within one to two years. A sign that cannot be read does not satisfy the visibility requirement." },
                  { t: "Missing restriction language", d: "A sign that only states the towing company's name and phone number without clearly stating that unauthorized vehicles will be towed at the owner's expense may be insufficient. The restriction language is a required element, not optional." },
                  { t: "Incorrect or outdated phone number", d: "If the towing company's phone number on the sign is no longer active or has changed, vehicle owners cannot locate their vehicle and the property is exposed to a storage dispute. Phone numbers must be current." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Municipal Overlays: Phoenix Metro City-by-City</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ARS 9-499.05 explicitly allows Arizona municipalities to establish local towing and signage ordinances that are stricter than the state baseline. Several Phoenix-metro cities have done so. The following table summarizes the status for major municipalities — note that specific requirements change, and you should verify current ordinances directly with the relevant city:
              </p>
              <div className="space-y-3 mb-8">
                {MUNICIPALITIES.map((m) => (
                  <div key={m.city} className="flex items-start gap-3 glass-card-white rounded-xl p-4">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">{m.city}:</strong>{" "}
                      <span className="text-gray-600 text-sm">{m.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Properties in Chandler, Scottsdale, and Tempe in particular should not assume the state ARS baseline is sufficient. Ask your towing company to verify the current local code for your specific address.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Signage Audit: What It Should Cover</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A professional pre-enforcement signage audit should evaluate:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "Number and location of existing signs relative to all access points",
                  "Sign content — all required elements present and current",
                  "Sign condition — legibility, fading, physical damage",
                  "Visibility — obstruction by vegetation, parked vehicles, or other features",
                  "Compliance with the applicable municipal code (not just the state baseline)",
                  "Whether any areas of the property have unique uses (fire lanes, accessible spaces, loading zones) requiring additional or different signage",
                  "Sign mounting height and visibility from driver eye level",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The audit findings should be documented in writing, with photographs. After any recommended changes are made, the updated state should also be documented. This creates a compliance record that demonstrates due diligence if a tow is ever disputed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For the full context of how signage fits into the private property towing framework, see our comprehensive guide: <Link href="/blog/arizona-private-property-towing-guide-2026" className="text-primary hover:underline">Arizona Private Property Towing Guide 2026</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/services/private-property-impounds", label: "Private Property Impound Services", desc: "How PPI towing works" },
                  { href: "/services/parking-enforcement", label: "Parking Enforcement Programs", desc: "Professional patrol enforcement" },
                  { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", desc: "Full legal framework overview" },
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Hub", desc: "Guides and checklists" },
                  { href: "/audiences/hoa", label: "HOA Resources", desc: "Signage and enforcement for HOA communities" },
                  { href: "/locations/phoenix", label: "Phoenix Towing Services", desc: "Service coverage in Phoenix" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="glass-card-white rounded-xl p-4 hover:shadow-md transition-shadow group">
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">{link.label}</p>
                    <p className="text-gray-600 text-xs mt-1">{link.desc}</p>
                  </Link>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Signage Audit for Your Property</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides complimentary signage audits for Phoenix-metro property managers and HOA boards. We walk your property, identify compliance gaps, and recommend corrections before enforcement begins.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Request Signage Audit</Link>
                </div>
              </div>

              {/* Author */}
              <div className="glass-card-white rounded-2xl p-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Phoenix metro area. Licensed, insured, and ARS-compliant.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {[
                      { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", cat: "Arizona Laws" },
                      { href: "/blog/private-property-towing-vs-public-towing-arizona", label: "Private vs. Public Towing in Arizona", cat: "Arizona Laws" },
                      { href: "/blog/how-property-managers-choose-towing-companies", label: "How Property Managers Choose Towing Companies", cat: "Property Manager Resources" },
                      { href: "/blog/property-manager-questions-to-ask-towing-companies", label: "20 Questions to Ask a Towing Company", cat: "Property Manager Resources" },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block group">
                        <span className="text-xs text-primary font-semibold uppercase">{link.cat}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{link.label}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue">
                  <h3 className="font-bold text-gray-900 mb-2">Free Signage Audit</h3>
                  <p className="text-gray-700 text-sm mb-4">We check your property's signage for ARS compliance before enforcement begins.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/scottsdale" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Scottsdale Towing</h3>
                  <p className="text-gray-700 text-sm">Services in Scottsdale &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

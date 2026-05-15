import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/arizona-private-property-towing-guide-2026.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at an Arizona property with ARS-compliant towing signage and Camelback Mountain backdrop";
const CANONICAL = "https://axletowing.com/blog/arizona-private-property-towing-guide-2026";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "Arizona Private Property Towing Guide 2026 | ARS Laws",
  description: "Complete 2026 guide to private property towing in Arizona. ARS 28-3511, ARS 28-874, signage rules, property-owner rights, and how the no-cost model works.",
  keywords: "arizona private property towing, ARS 28-3511, private property impound arizona, arizona towing laws 2026, property manager towing guide arizona",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Arizona Private Property Towing Guide 2026",
    description: "The definitive guide to private property towing law in Arizona for property managers and HOA boards.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "Can a property owner in Arizona tow a vehicle without warning?",
    answer: "Yes, with conditions. Under ARS 28-3511, if compliant towing signage is posted at all entrances and in the parking area, unauthorized vehicles may be removed immediately without individual warning. The signage itself constitutes constructive notice. This is for informational purposes only and is not legal advice.",
  },
  {
    question: "Who pays for private property towing in Arizona?",
    answer: "The vehicle owner pays all towing and storage fees when they retrieve the vehicle. Under Arizona's Private Property Impound (PPI) model, the property owner, HOA, or apartment complex pays nothing. The towing company recovers costs directly from the vehicle owner.",
  },
  {
    question: "What statutes govern private property towing in Arizona?",
    answer: "The primary statutes are ARS 28-3511 (unauthorized vehicle removal), ARS 28-874 (towing from private property procedures), and ARS 9-499.05 (signage requirements and property owner protections). Municipal codes in cities like Phoenix, Tempe, and Scottsdale may impose additional requirements. Consult an attorney for legal advice specific to your situation.",
  },
  {
    question: "How quickly must a towing company notify law enforcement after removing a vehicle?",
    answer: "Under ARS 28-3511, a towing company must notify local law enforcement within one hour of removing an unauthorized vehicle from private property. This notification requirement exists to protect vehicle owners from being unable to locate their towed vehicle.",
  },
  {
    question: "Does Arizona require a property owner to be present during a tow?",
    answer: "No. Under ARS 28-3511, a property owner or their authorized agent may authorize towing in advance through a standing towing agreement. The towing company may then remove unauthorized vehicles without calling the property owner each time, provided compliant signage is in place.",
  },
  {
    question: "What is the difference between PPI towing and public towing in Arizona?",
    answer: "Private Property Impound (PPI) towing is authorized by the property owner for unauthorized vehicles on private land. Public towing is ordered by law enforcement from public roadways. PPI towing is governed by ARS 28-3511 and the towing agreement; public towing is governed by law enforcement authority. Property managers use PPI towing.",
  },
  {
    question: "Are there limits on where a towing company can store impounded vehicles in Arizona?",
    answer: "Yes. The storage facility must be licensed by the Arizona Department of Transportation (ADOT). Vehicles must be stored in a secure, accessible facility. The vehicle owner must be able to retrieve the vehicle during reasonable hours, and the towing company must post the storage facility address and contact information.",
  },
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
    headline: "Arizona Private Property Towing Guide 2026",
    description: "Complete 2026 guide to private property towing in Arizona covering ARS 28-3511, signage requirements, and the no-cost property owner model.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.12),transparent_60%)] z-[1]" />
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
            <span className="text-sm text-blue-200/60">14 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Arizona Private Property Towing Guide{" "}
            <span className="text-gradient">2026</span>
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
          <p className="text-gray-800 leading-relaxed">Arizona gives property owners, HOA boards, and commercial landlords legal authority to remove unauthorized vehicles from private property at no cost — under ARS 28-3511, ARS 28-874, and ARS 9-499.05. The key requirement before any tow can legally occur is ARS 9-499.05-compliant signage at every entrance, specifying the towing company name and contact number. The towing company must notify law enforcement within one hour of every removal. Under the Private Property Impound (PPI) model, all costs are recovered from the vehicle owner — property owners pay nothing. Unclaimed vehicles follow Arizona&apos;s abandoned vehicle lien process.</p>
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
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Arizona&apos;s three core towing statutes — ARS 28-3511, ARS 28-874, and ARS 9-499.05 — work together to authorize and govern private property towing.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05-compliant signage at every entrance is required before any vehicle can legally be towed from private property.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Towing companies must notify law enforcement within one hour of every removal — a frequently missed compliance requirement.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Under the Private Property Impound (PPI) model, property owners pay nothing — all fees are collected from the vehicle owner.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Municipal codes in Phoenix, Scottsdale, Tempe, and Chandler may impose additional requirements beyond the state baseline.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Arizona gives property owners, HOA boards, and commercial landlords broad authority to remove unauthorized vehicles from private land — at no cost to the property. Understanding the legal framework behind that authority, and how a professional towing partner makes it work in practice, is the foundation of effective parking enforcement across the Phoenix metro.
              </p>

              <div className="glass-card-white rounded-2xl p-5 mb-10 border-l-4 border-primary">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Legal Disclaimer:</strong> This article is for general educational purposes only and is not legal advice. Arizona towing law involves multiple statutes and municipal overlays. Consult a licensed Arizona attorney before making compliance decisions specific to your property.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Three Core Statutes Every Property Manager Must Know</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Private property towing in Arizona operates under three interlocking statutes. Each addresses a different layer of the process — who can authorize a tow, how signage must work, and what procedural protections exist for vehicle owners.
              </p>

              <div className="space-y-4 mb-8">
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">ARS 28-3511 — Authorization to Remove Unauthorized Vehicles</h3>
                  <p className="text-gray-600">
                    This is the primary statute authorizing removal of unauthorized vehicles from private property. Under ARS 28-3511, a property owner or their authorized agent (which can be a professional towing company operating under a standing agreement) may have an unauthorized vehicle removed from the property. The statute requires the towing company to notify law enforcement within one hour of the removal. This one-hour notification requirement is one of the most frequently missed compliance points among towing operators in Arizona.
                  </p>
                </div>
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">ARS 28-874 — Towing from Private Property Procedures</h3>
                  <p className="text-gray-600">
                    ARS 28-874 governs the procedural requirements when a vehicle is towed from private property. It establishes rules for the storage facility, the vehicle owner's right to retrieve the vehicle, and the towing company's obligations. Under this statute, the towing company must provide a receipt, store the vehicle in a licensed facility, and allow retrieval during reasonable hours. ARS 28-874 also sets limits on accumulating storage fees and requires the towing company to release a vehicle upon payment of valid fees.
                  </p>
                </div>
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">ARS 9-499.05 — Signage Requirements and Property Owner Protections</h3>
                  <p className="text-gray-600">
                    ARS 9-499.05 sets out the signage standards that must be met before an unauthorized vehicle can be legally removed. Compliant signage must be posted at each entrance to the property and in the parking area itself. The statute specifies minimum dimensions, required language (including the towing company's name and phone number), and placement height. Without compliant signage, a tow may be legally challenged. This statute also provides municipalities the authority to establish local regulations, which is why cities like Phoenix, Tempe, Scottsdale, and Chandler sometimes impose requirements that go beyond the state baseline.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the No-Cost Model Works for Property Owners</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                One of the most important features of Arizona's private property towing framework is that it shifts all costs to the vehicle owner — not the property owner. This is commonly called the Private Property Impound (PPI) model.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Here is how cost recovery flows in a compliant PPI program:
              </p>
              <ol className="text-gray-600 space-y-4 mb-8">
                {[
                  { t: "Property owner signs a towing agreement", d: "The agreement designates the towing company as the property owner's authorized agent for vehicle removal. It establishes the rules of engagement — what vehicles may be towed, under what conditions, and documentation standards." },
                  { t: "Signage is installed at the property", d: "Compliant signs are posted at all entrances and in the parking area. This signage is the legal foundation for every tow. Without it, cost recovery is at risk and the tow may be challenged." },
                  { t: "Unauthorized vehicle is removed", d: "The towing company removes the vehicle, photographs it, notifies law enforcement within one hour, and stores it at a licensed facility." },
                  { t: "Vehicle owner pays to retrieve", d: "All towing and storage fees are charged to the vehicle owner when they claim the vehicle. The property owner pays nothing and receives no invoice." },
                  { t: "Unclaimed vehicles follow the lien process", d: "If the vehicle goes unclaimed, the towing company follows Arizona's abandoned vehicle lien process (ARS 28-4141 through 28-4145), ultimately disposing of the vehicle and recovering costs from that process." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Signage Requirements: What Arizona Law Requires</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Signage compliance under ARS 9-499.05 is not optional — it is the legal trigger for the right to tow. A property with non-compliant signage is a property whose tows can be successfully disputed. The required elements include:
              </p>
              <ul className="text-gray-600 space-y-3 mb-8">
                {[
                  "Minimum sign dimensions (typically 17\" x 22\" under the state baseline, though some municipalities require larger)",
                  "Clear statement that unauthorized vehicles will be towed at the owner's expense",
                  "The name, address, and phone number of the towing company authorized to tow",
                  "Placement at every entrance to the parking area, at a height visible to drivers",
                  "Legible lettering — state law specifies minimum letter height and contrast requirements",
                  "If the parking area is for specific tenants or permit holders, the sign must identify the restriction",
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
                Scottsdale, Tempe, Chandler, and several other Phoenix-metro municipalities have adopted signage rules that are stricter than the ARS baseline. Properties in those cities must comply with the more stringent local requirement. A professional towing partner familiar with Phoenix-metro municipal codes can audit your existing signage and identify gaps before they become problems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                See our detailed signage breakdown: <Link href="/blog/arizona-towing-signage-laws-2026-update" className="text-primary hover:underline">Arizona Towing Signage Laws 2026 Update</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Enforcement Looks Like in Practice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding the legal framework is one thing; understanding what professional enforcement actually looks like at a Phoenix apartment complex, HOA, or commercial property is another. Here is what a well-run PPI program involves on a day-to-day basis:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Regular patrol and documentation", d: "The towing company conducts patrols of the property — the frequency depends on the property type and the enforcement agreement. Each patrol is documented. Unauthorized vehicles are photographed before removal to create a defensible record." },
                  { t: "Rapid response to property requests", d: "When a property manager or HOA board member calls to report an unauthorized vehicle, the towing company responds and evaluates the situation. Dispatch is available 24 hours a day, seven days a week for incoming calls — note that vehicle retrieval and administrative office functions operate during business hours." },
                  { t: "Monthly reporting", d: "Professional towing partners provide monthly reports showing vehicles removed, dates, times, violation types, and outcomes. This documentation is invaluable for board presentations, resident disputes, and liability defense." },
                  { t: "Resident communication support", d: "When a resident's guest vehicle is towed, the experience can be contentious. A professional towing company handles inquiries from vehicle owners directly, reducing the burden on property managers and HOA boards." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the Right Towing Partner in Arizona</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not all towing companies operating in the Phoenix metro are equipped to run a legally compliant, professionally managed PPI program. When evaluating a towing partner, property managers and HOA boards should look for:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "ADOT-licensed towing company and storage facility",
                  "Proven familiarity with ARS 28-3511, 28-874, and 9-499.05, plus applicable municipal codes",
                  "Clear written towing agreement that defines authorized vehicles, procedures, and reporting",
                  "One-hour law enforcement notification compliance on every tow",
                  "Documented signage audit service — the company reviews your existing signs and flags compliance gaps",
                  "Monthly written reports with full documentation for each removal",
                  "No kickback arrangements — the property owner should receive no financial benefit from tows, as such arrangements create legal and ethical exposure",
                  "Direct handling of vehicle owner disputes, removing that burden from property staff",
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
                For a full evaluation framework, see <Link href="/blog/how-property-managers-choose-towing-companies" className="text-primary hover:underline">How Property Managers Choose Towing Companies</Link> and our <Link href="/blog/property-manager-questions-to-ask-towing-companies" className="text-primary hover:underline">20-question vetting checklist</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Property Manager and HOA Board Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you manage an apartment complex in Tempe, an HOA community in Chandler, or a commercial strip center in Glendale, the legal framework is the same. What changes is how enforcement is calibrated for your property type and resident population.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/services/private-property-impounds", label: "Private Property Impound Services", desc: "How the no-cost PPI model works" },
                  { href: "/services/parking-enforcement", label: "Parking Enforcement Programs", desc: "Patrol-based enforcement for larger properties" },
                  { href: "/services/hoa-towing", label: "HOA Towing Services", desc: "Custom programs for homeowner associations" },
                  { href: "/services/apartment-towing", label: "Apartment Complex Towing", desc: "Tenant and guest vehicle management" },
                  { href: "/services/commercial-property-towing", label: "Commercial Property Towing", desc: "Retail, office, and industrial property enforcement" },
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Resource Hub", desc: "Guides, templates, and checklists" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="glass-card-white rounded-xl p-4 hover:shadow-md transition-shadow group">
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">{link.label}</p>
                    <p className="text-gray-600 text-xs mt-1">{link.desc}</p>
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Private vs. Public Towing: Why the Distinction Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A common source of confusion among property managers new to Arizona towing law is the distinction between private property towing and public towing. They operate under different authority and serve different purposes. Private property towing (PPI) is what property managers use. Public towing is authorized by law enforcement from public roads and rights-of-way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The distinction matters because calling the wrong authority results in delays and unresolved situations. Phoenix Police and other municipal agencies do not handle parking enforcement on private property — that is the property owner's responsibility, exercised through a licensed private towing partner. See our full explanation: <Link href="/blog/private-property-towing-vs-public-towing-arizona" className="text-primary hover:underline">Private Property Towing vs. Public Towing in Arizona</Link>.
              </p>

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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Talk to Axle Towing About Your Property</h3>
                <p className="text-gray-600 mb-6">
                  Free consultation for Phoenix-metro property managers, HOA boards, and commercial owners. We review your signage, current towing agreement (if any), and enforcement needs at no charge.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
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
                      { href: "/blog/arizona-towing-signage-laws-2026-update", label: "Arizona Towing Signage Laws 2026 Update", cat: "Arizona Laws" },
                      { href: "/blog/how-property-managers-choose-towing-companies", label: "How Property Managers Choose Towing Companies", cat: "Property Manager Resources" },
                      { href: "/blog/private-property-towing-vs-public-towing-arizona", label: "Private vs. Public Towing in Arizona", cat: "Arizona Laws" },
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
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Property Manager?</h3>
                  <p className="text-gray-700 text-sm mb-4">Free private property towing programs across the Phoenix metro.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/resources/property-manager-towing-hub" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Property Manager Hub</h3>
                  <p className="text-gray-700 text-sm">Guides, checklists, and templates &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

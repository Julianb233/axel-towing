import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/private-property-towing-vs-public-towing-arizona.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck on a clearly marked private property in Phoenix Arizona - Axle Towing PPI vs public";
const CANONICAL = "https://axletowing.com/blog/private-property-towing-vs-public-towing-arizona";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "Private Property vs Public Towing in Arizona | Key Differences",
  description: "Understand the difference between private property impound (PPI) and public towing in Arizona. Why it matters for property managers and HOA boards choosing a towing partner.",
  keywords: "private property towing vs public towing arizona, PPI towing arizona, private property impound vs police tow, arizona towing types property manager, who handles private property towing arizona",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Private Property vs Public Towing in Arizona",
    description: "The key distinction between private property impound (PPI) and public towing in Arizona, and why it matters for property managers and HOA boards.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "Can Phoenix Police remove an unauthorized vehicle from my private property?",
    answer: "Not in the same way a private towing company does. Phoenix Police can authorize removal of vehicles that violate Arizona statutes on public roads (such as ARS 28-3511 violations in public rights-of-way), but for vehicles on private property, the property owner's designated towing company handles removal under the private property impound (PPI) framework. Calling 911 or Phoenix PD to remove a vehicle from your private lot will generally result in them advising you to contact your authorized towing company.",
  },
  {
    question: "Who authorizes a private property impound tow?",
    answer: "A private property impound tow is authorized by the property owner or their designated agent (typically the towing company operating under a standing towing authorization agreement). The property owner's posted signage, compliant with ARS 9-499.05, constitutes notice to vehicle operators. Under a standing authorization, the towing company may remove vehicles without calling the property owner each time.",
  },
  {
    question: "Who authorizes a public tow in Arizona?",
    answer: "Public tows are authorized by law enforcement — city police, county sheriff, or state troopers. They are executed for vehicles that violate public road rules: blocking traffic, parked illegally on a public street, involved in an accident, or otherwise creating a public safety issue. The authority for public tows flows from law enforcement, not from property owners.",
  },
  {
    question: "What happens if I call law enforcement instead of my towing company for a private property issue?",
    answer: "For vehicles on private property, law enforcement will typically advise you to contact your authorized private property towing company. They do not have the same authority on private land that they have on public roads, and their involvement in private property parking disputes is limited. Your towing agreement and signed authorization are what give your towing company the authority to act.",
  },
  {
    question: "Can a vehicle be towed under both PPI and public towing authority at the same time?",
    answer: "This is uncommon but can occur in specific scenarios — for example, a vehicle that is on private property but is also subject to a law enforcement hold (such as a vehicle involved in a crime). In those cases, coordination between the towing company and law enforcement is required. For standard parking enforcement situations on private property, PPI authority is the applicable framework.",
  },
  {
    question: "Does PPI towing cost the property owner anything?",
    answer: "No. Under Arizona's Private Property Impound model, all towing and storage costs are paid by the vehicle owner when they retrieve the vehicle. Property owners, HOAs, and apartment complexes pay nothing for PPI enforcement. This is a key distinction from some other states where property owners bear towing costs.",
  },
  {
    question: "What about towing from a HOA community's private streets?",
    answer: "HOA communities frequently include private streets and roads that are not public rights-of-way. Towing from these streets is governed by the PPI framework, not public towing rules, because the streets are not public roads. HOA boards can authorize towing from these private streets through their towing agreement, provided compliant signage is in place. This is for general educational purposes and is not legal advice.",
  },
];

const COMPARISON = [
  { dimension: "Who authorizes the tow", ppi: "Property owner or their authorized agent (towing company under standing agreement)", public: "Law enforcement officer (police, sheriff, state patrol)" },
  { dimension: "Governing law", ppi: "ARS 28-3511, ARS 28-874, ARS 9-499.05, and applicable municipal codes", public: "Arizona statutes governing traffic enforcement and law enforcement authority on public roads" },
  { dimension: "Where it applies", ppi: "Private property: apartment lots, HOA communities, commercial parking areas, private streets", public: "Public roads, rights-of-way, public parking lots, public streets" },
  { dimension: "Who pays for the tow", ppi: "Vehicle owner pays towing and storage when retrieving the vehicle — property owner pays nothing", public: "Vehicle owner pays towing and storage — government may add administrative fees" },
  { dimension: "Signage requirement", ppi: "Required — compliant signage under ARS 9-499.05 is the legal foundation for every PPI tow", public: "No signage requirement — law enforcement authority does not depend on posted signs" },
  { dimension: "Who the vehicle owner calls", ppi: "The towing company named on the posted signage — listed on the sign with address and phone", public: "Local law enforcement records unit, impound lot designated by the responding agency" },
  { dimension: "Response speed", ppi: "Property owner calls authorized towing company directly — typically faster response for property-specific situations", public: "Dependent on law enforcement availability and prioritization" },
  { dimension: "Documentation", ppi: "Towing company provides pre-tow photos, violation documentation, law enforcement notification record", public: "Law enforcement creates the incident report; towing company provides storage documentation" },
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
    headline: "Private Property vs Public Towing in Arizona",
    description: "Clarifying the distinction between private property impound (PPI) and public towing in Arizona for property managers, HOA boards, and commercial owners.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.10),transparent_55%)] z-[1]" />
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
            <span className="text-sm text-blue-200/60">11 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Private Property Towing vs.{" "}
            <span className="text-gradient">Public Towing in Arizona</span>
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
          <p className="text-gray-800 leading-relaxed">Private property towing (PPI) and public towing in Arizona are governed by completely different legal frameworks. PPI towing is authorized by the property owner under ARS 28-3511 for unauthorized vehicles on private land — the property owner pays nothing. Public towing is ordered by law enforcement from public roadways under law enforcement authority. Property managers use PPI towing exclusively; they do not have the authority to order public tows from public streets. Understanding the distinction prevents property managers from overstepping their authority and protects them from liability.</p>
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
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Private property towing is authorized by the property owner under ARS 28-3511 — it applies only to private land, not public streets.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Public towing is ordered by law enforcement from public roadways — property managers have no authority to order public tows.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Property owners pay nothing under the PPI model; law enforcement-ordered tows may involve different fee structures.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The one-hour law enforcement notification requirement after a PPI tow is the key procedural bridge between the two systems.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Confusing PPI and public towing authority can expose property managers to liability — the distinction must be clearly understood.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Property managers and HOA boards in Arizona regularly encounter situations where an unauthorized or abandoned vehicle needs to be removed from their property. A common point of confusion: who actually has the authority to do this? Can you call the police? Do you need your own towing company? The answer depends on a fundamental distinction that every property manager operating in Arizona should understand — the difference between private property impound (PPI) towing and public towing.
              </p>

              <div className="glass-card-white rounded-2xl p-5 mb-10 border-l-4 border-primary">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Legal Disclaimer:</strong> This article is for general educational purposes and does not constitute legal advice. Arizona towing law involves multiple statutes and the authority framework is fact-specific. Consult a licensed Arizona attorney for guidance specific to your situation.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Core Distinction: Authority Flows from Different Sources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most important difference between private property towing and public towing is where the authority to remove the vehicle comes from.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">PPI</span>
                    <h3 className="font-bold text-gray-900">Private Property Impound</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Authority flows from the <strong>property owner</strong>. The property owner's right to control their land, combined with posted signage that provides constructive notice, authorizes a licensed towing company to remove unauthorized vehicles under ARS 28-3511. Law enforcement is not involved in the authorization — they must be notified within one hour after the tow, but they do not order or authorize it.
                  </p>
                </div>
                <div className="glass-card-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold">PUB</span>
                    <h3 className="font-bold text-gray-900">Public Towing</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Authority flows from <strong>law enforcement</strong>. A police officer, sheriff's deputy, or state trooper authorizes the removal of a vehicle from a public road or right-of-way based on their law enforcement authority. The property owner has no role in this authorization — it is entirely a government function.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Side-by-Side Comparison</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following table highlights the key differences across eight dimensions:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-gray-600 border-collapse">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-semibold rounded-tl-lg">Dimension</th>
                      <th className="px-4 py-3 font-semibold">Private Property Impound (PPI)</th>
                      <th className="px-4 py-3 font-semibold rounded-tr-lg">Public Towing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, idx) => (
                      <tr key={row.dimension} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-4 py-3 font-medium text-gray-900 align-top">{row.dimension}</td>
                        <td className="px-4 py-3 align-top">{row.ppi}</td>
                        <td className="px-4 py-3 align-top">{row.public}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Property Managers Cannot Rely on Law Enforcement for Private Property Parking</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A common frustration among new property managers is discovering that calling the police to remove an unauthorized vehicle from their apartment complex or commercial lot results in limited action. There are several reasons for this:
              </p>
              <ul className="text-gray-600 space-y-3 mb-8">
                {[
                  "Law enforcement agencies in Phoenix, Mesa, Scottsdale, and other metro cities are not resourced to handle private property parking enforcement — they prioritize public safety emergencies and traffic incidents on public roads",
                  "Police authority on private property is different from their authority on public roads — they can respond to safety emergencies and crimes on private property, but routine parking enforcement is a property management function",
                  "Even when law enforcement does respond, they may advise the property owner to use their authorized towing company rather than initiating removal themselves",
                  "The legal framework for private property impound towing (ARS 28-3511, ARS 28-874, ARS 9-499.05) exists precisely because the legislature recognized that property owners need their own enforcement mechanism separate from the public road system",
                  "Response times for non-emergency private property situations are unpredictable and may not meet the property's operational needs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the Two Systems Overlap</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While PPI and public towing operate under distinct authority frameworks, there are situations where both systems may be involved:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Post-accident vehicles on private property", d: "When a traffic accident results in a vehicle being disabled on private property, law enforcement may be involved in the incident response, but the eventual removal of the vehicle may still be coordinated through PPI processes or through a law enforcement-ordered tow depending on the circumstances." },
                  { t: "Vehicles suspected of criminal activity", d: "If a vehicle on private property is suspected of involvement in a crime, law enforcement may have independent authority to impound it for evidentiary purposes. This overlaps with but is separate from the property owner's PPI authority." },
                  { t: "Abandoned vehicle declarations on private property", d: "For vehicles that qualify as abandoned under Arizona law (ARS 28-4141 through 28-4145), there is a formal process that involves both the towing company and law enforcement notification. The PPI removal comes first; the abandoned vehicle process follows for unclaimed vehicles." },
                  { t: "Private streets and HOA roads", d: "Some HOA communities include private roads that are managed by the association but may share characteristics with public roads. The PPI framework applies to private streets, but if a public safety incident occurs, law enforcement retains their authority regardless of the road's ownership status." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What This Means When Choosing a Towing Partner</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding the PPI framework is the starting point for evaluating towing companies. You are not hiring a vendor to do something law enforcement can also do — you are hiring a licensed company to exercise the property-owner authority that the law grants you. That means your towing partner must be:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "Fluent in ARS 28-3511, ARS 28-874, and ARS 9-499.05 — the statutes that define the PPI framework",
                  "Able to explain the signage requirements that are the legal foundation for every removal",
                  "Committed to the one-hour law enforcement notification requirement after each removal",
                  "Operating a storage facility that is separately licensed by ADOT",
                  "Equipped to handle vehicle owner inquiries and disputes directly",
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
                For the full evaluation framework, see <Link href="/blog/how-property-managers-choose-towing-companies" className="text-primary hover:underline">How Property Managers Choose Towing Companies</Link> and our <Link href="/blog/property-manager-questions-to-ask-towing-companies" className="text-primary hover:underline">20-question vetting checklist</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The No-Cost PPI Model: Property Managers Pay Nothing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                One of the most practical advantages of the PPI framework for property managers is the no-cost model. Under Arizona law, all towing and storage fees flow from the vehicle owner to the towing company — the property owner pays nothing. This means that operating a professional enforcement program on your apartment complex, HOA community, or commercial property is not a budget line item.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Public towing operates differently — while vehicle owners still pay for public tows, there is no analogous arrangement that funds parking enforcement on public roads at the property level. The PPI no-cost model is a specific feature of Arizona's private property towing framework. See our full explanation: <Link href="/blog/arizona-private-property-towing-guide-2026" className="text-primary hover:underline">Arizona Private Property Towing Guide 2026</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Serving the Phoenix Metro Under the PPI Framework</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Axle Towing operates as a licensed Arizona PPI towing company serving apartment complexes, HOA communities, and commercial properties throughout the Phoenix metro. Our coverage includes:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {[
                  { city: "Phoenix", slug: "phoenix" },
                  { city: "Scottsdale", slug: "scottsdale" },
                  { city: "Mesa", slug: "mesa" },
                  { city: "Tempe", slug: "tempe" },
                  { city: "Chandler", slug: "chandler" },
                  { city: "Gilbert", slug: "gilbert" },
                  { city: "Glendale", slug: "glendale" },
                  { city: "Peoria", slug: "peoria" },
                  { city: "Surprise", slug: "surprise" },
                ].map(({ city, slug }) => (
                  <Link key={slug} href={`/locations/${slug}`} className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary transition-colors group">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="group-hover:underline">{city}</span>
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/services/private-property-impounds", label: "Private Property Impound Services", desc: "The no-cost PPI model for your property" },
                  { href: "/services/parking-enforcement", label: "Parking Enforcement Programs", desc: "Patrol-based enforcement programs" },
                  { href: "/audiences/hoa", label: "HOA Resources", desc: "Towing programs for homeowner associations" },
                  { href: "/audiences/apartment-complexes", label: "Apartment Complex Resources", desc: "Tenant vehicle management" },
                  { href: "/services/abandoned-vehicle-removal", label: "Abandoned Vehicle Removal", desc: "Removing abandoned vehicles from private property" },
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Hub", desc: "Full library of guides and checklists" },
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Talk to Axle Towing</h3>
                <p className="text-gray-600 mb-6">
                  Free consultation for Phoenix-metro property managers, HOA boards, and commercial owners. We set up compliant PPI programs that work the way Arizona law intends.
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
                      { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", cat: "Arizona Laws" },
                      { href: "/blog/arizona-towing-signage-laws-2026-update", label: "Arizona Towing Signage Laws 2026", cat: "Arizona Laws" },
                      { href: "/blog/how-property-managers-choose-towing-companies", label: "How Property Managers Choose Towing Companies", cat: "Property Manager Resources" },
                      { href: "/blog/parking-enforcement-roi-for-property-managers", label: "Parking Enforcement ROI", cat: "Property Manager Resources" },
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
                <Link href="/audiences/commercial-property-managers" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Managers</h3>
                  <p className="text-gray-700 text-sm">Commercial property resources &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/parking-enforcement-roi-for-property-managers.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a well-managed Phoenix metro HOA community with clear parking signage";
const CANONICAL = "https://axletowing.com/blog/parking-enforcement-roi-for-property-managers";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "Parking Enforcement ROI for Property Managers | Arizona",
  description: "The business case for professional parking enforcement in Arizona. Resident retention, ADA liability reduction, fire-lane compliance, and commercial property protection.",
  keywords: "parking enforcement roi property managers, parking enforcement benefits arizona, private property towing benefits, hoa parking enforcement value, commercial parking enforcement phoenix",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Parking Enforcement ROI for Property Managers",
    description: "Why professional parking enforcement is a high-value program for Arizona property managers, HOA boards, and commercial owners.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "How does parking enforcement reduce liability for property managers?",
    answer: "Consistent enforcement creates a documented record that the property actively maintained fire-lane clearance, ADA accessibility, and safe traffic flow. If an injury or incident occurs in a parking area, that documentation demonstrates the property was not negligent. Properties without enforcement records are far more vulnerable in premises liability situations.",
  },
  {
    question: "Does enforcing parking actually improve resident retention?",
    answer: "Consistently available, properly assigned parking is one of the most-cited quality-of-life issues in multi-family housing surveys. When residents cannot reliably park in their assigned space or find guest parking because non-residents have taken it, their satisfaction drops and lease renewal likelihood decreases. Professional enforcement that keeps parking available and fair improves the resident experience directly.",
  },
  {
    question: "Can parking enforcement help prevent fire-lane and ADA violations?",
    answer: "Yes. Professional parking enforcement creates regular visual deterrence that significantly reduces the frequency of fire-lane and ADA violations compared to properties with no enforcement. When violations do occur, the towing company removes the vehicle promptly, restoring access before a safety or accessibility incident can develop.",
  },
  {
    question: "Does parking enforcement benefit commercial properties differently than residential?",
    answer: "Commercial properties face a distinct set of issues: non-customers occupying customer spaces, employees parking in retail or service areas, and cut-through parkers using private lots as a shortcut. Each of these directly reduces the parking availability that drives customer visits. Professional enforcement protects the foot traffic and revenue flow that makes a commercial property viable for tenants.",
  },
  {
    question: "What types of properties benefit most from professional parking enforcement?",
    answer: "Multi-family apartment complexes, HOA communities with shared parking, commercial strip centers, office buildings with limited visitor parking, medical facilities with accessible-space requirements, and properties adjacent to high-foot-traffic destinations like parks, transit stops, or schools all see meaningful benefits from consistent professional enforcement.",
  },
  {
    question: "How does enforcement help with code violation prevention?",
    answer: "Many Arizona municipalities issue notices of violation to property owners when their parking areas have persistent unauthorized vehicles, inoperable vehicles with expired registration, or cluttered common areas caused by vehicle storage. A professional enforcement program removes those vehicles before they accumulate to the point of triggering a code complaint.",
  },
];

const BENEFITS = [
  {
    category: "Resident & Tenant Satisfaction",
    icon: "home",
    points: [
      "Assigned spaces are available when residents and their guests need them",
      "First-come-first-served areas are not monopolized by non-residents",
      "Residents who paid a premium for covered or reserved parking actually get that benefit",
      "Visible, consistent enforcement signals that the property is professionally managed",
    ],
  },
  {
    category: "Fire-Lane and Emergency Access",
    icon: "shield",
    points: [
      "Fire lanes must remain clear for emergency vehicle access — blocked lanes can mean a delayed response in an emergency",
      "Consistent enforcement removes fire-lane violators before a real emergency creates urgency",
      "Documentation of enforcement activity demonstrates due diligence if a fire-lane incident ever leads to a liability claim",
      "Phoenix Fire, Mesa Fire, and other metro departments take fire-lane obstruction seriously — property owners face citation exposure when lanes are routinely blocked",
    ],
  },
  {
    category: "ADA Accessible Space Compliance",
    icon: "accessible",
    points: [
      "ADA violations on private property can result in federal complaints, state agency action, and civil litigation",
      "Professional enforcement ensures accessible spaces remain available to permit holders",
      "Documented enforcement history is the strongest defense if an ADA complaint is filed against the property",
      "Properties with consistent accessible-space enforcement demonstrate good-faith compliance with federal and state accessibility law",
    ],
  },
  {
    category: "Code Violation Prevention",
    icon: "clipboard",
    points: [
      "Inoperable vehicles with expired registration are a common trigger for municipal code complaints in Phoenix metro",
      "Vehicles stored in fire lanes, blocking dumpster access, or obstructing visibility are municipal violation risks",
      "Professional enforcement removes these vehicles before they accumulate into a code notice situation",
      "Regular patrol visibility deters the vehicle storage and unauthorized use patterns that generate complaints",
    ],
  },
  {
    category: "Commercial Property Foot Traffic",
    icon: "store",
    points: [
      "Customer parking directly drives customer visits — lost parking means lost business for commercial tenants",
      "Non-customer vehicles occupying spaces for extended periods push paying customers away",
      "Enforced parking communicates to customers that the property is well-managed and their time is valued",
      "Commercial tenants in enforced lots report higher satisfaction with their lease situations than those in unenforced properties",
    ],
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
    headline: "Parking Enforcement ROI for Property Managers",
    description: "The qualitative and operational business case for professional parking enforcement at Arizona apartment complexes, HOAs, and commercial properties.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_60%)] z-[1]" />
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Property Manager Resources</span>
            <span className="text-sm text-blue-200/60">12 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Parking Enforcement ROI{" "}
            <span className="text-gradient">for Property Managers</span>
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
          <p className="text-gray-800 leading-relaxed">Professional parking enforcement delivers measurable ROI for property managers in Arizona, even though the service itself is free under the PPI model. Key value drivers include reduced tenant complaints, lower liability exposure from blocked fire lanes and ADA violations, improved tenant retention due to fair parking access, and documented evidence of rule enforcement for CC&R disputes. Consistent towing reduces repeat violators within 30–90 days. Properties with poor parking enforcement see higher turnover rates among compliant tenants who leave due to frustration — enforcement protects the value of the full tenant base.</p>
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
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Professional parking enforcement is free under Arizona&apos;s PPI model, making ROI purely positive — no direct cost to offset.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Consistent enforcement reduces repeat violations by 60–80% within 90 days, according to industry data from Phoenix-metro operators.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Blocked fire lanes and ADA spaces represent liability risk — documented enforcement reduces both risk and municipal citation exposure.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Fair parking access improves tenant satisfaction and retention — poor enforcement drives away rule-following tenants.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>CC&R enforcement documentation from a towing company protects HOA boards in legal disputes with non-compliant owners.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professional parking enforcement is one of the few property management programs that is free to implement, reduces operational burden on your team, and creates measurable value across multiple dimensions — resident satisfaction, liability protection, code compliance, and commercial tenant retention. Understanding the full picture of what enforcement delivers helps make the case to HOA boards, ownership groups, and asset managers.
              </p>

              <div className="glass-card-white rounded-2xl p-5 mb-10 border-l-4 border-primary">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Note on pricing:</strong> Per Axle Towing policy, this article does not discuss specific fee structures. The no-cost property owner model under Arizona's PPI framework means professional enforcement is available to qualifying properties at no charge to the property.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Core Value Proposition: Enforcement Pays for Itself</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under Arizona's Private Property Impound (PPI) framework, qualified properties can access professional parking enforcement at no direct cost. All towing and storage fees flow from vehicle owners to the towing company — the property pays nothing. This means the decision to implement enforcement is not a budget question; it is a question of what value you are leaving on the table by not having it.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                That value spans five distinct categories, each with real operational and strategic implications for property managers, HOA boards, and commercial property owners across the Phoenix metro.
              </p>

              {/* Benefit cards */}
              {BENEFITS.map((benefit) => (
                <div key={benefit.category}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{benefit.category}</h2>
                  <ul className="text-gray-600 space-y-3 mb-6">
                    {benefit.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Operational Benefits for Property Management Teams</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond the property-level outcomes, professional parking enforcement creates direct operational relief for property managers and HOA boards:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Fewer resident complaints reaching your desk", d: "Parking is consistently one of the top complaint categories in multi-family and HOA communities. When residents know enforcement is active and consistent, the complaints about 'the neighbor who always parks in my space' or 'guest parking is always taken' stop landing in your inbox." },
                  { t: "Documented enforcement record for board presentations", d: "Monthly reports from your towing partner give you concrete, data-backed updates for HOA board meetings and ownership presentations. Instead of saying 'we address parking issues as they arise,' you can show a log of every enforcement action taken on the property." },
                  { t: "Reduced staff time on parking incidents", d: "Without a professional enforcement partner, parking disputes often fall to on-site maintenance staff, property managers, or HOA board members — none of whom have the authority, training, or equipment to handle vehicle removal. Offloading this to a professional towing company frees your team for higher-value work." },
                  { t: "Consistency that protects against selective enforcement claims", d: "One of the most common HOA dispute patterns is a resident claiming they were singled out for enforcement while similar violations by neighbors were ignored. A professional enforcement program with documented patrol patterns and violation records creates consistency that is defensible." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Liability Dimension: Documentation as Defense</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Property managers and HOA boards often underestimate the liability implications of their parking areas. Three specific risk categories stand out:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "Fire-lane obstruction: If a blocked fire lane delays emergency response and leads to an injury or property damage, the property owner's failure to maintain clear access is a significant factor in premises liability analysis",
                  "ADA accessible-space non-compliance: Federal and state accessible parking requirements apply to private parking areas. Failure to maintain accessible spaces — whether through signage, markings, or enforcement — can result in ADA complaints and civil claims",
                  "Slip, trip, and fall incidents: Vehicles improperly parked in pedestrian areas, blocking visibility, or obstructing well-lit paths can contribute to safety incidents where the property's maintenance standards become relevant",
                  "Documented enforcement demonstrates active management: Properties that can show a history of consistent enforcement are in a fundamentally stronger position in any premises liability situation than properties with no enforcement record at all",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Phoenix-Metro Property Types and Their Specific Needs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Parking enforcement needs vary by property type. Here is how the value case looks across the most common property categories in the Phoenix metro:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Apartment complexes in Phoenix, Tempe, and Mesa", d: "High resident turnover, guest management, and proximity to universities, transit stops, and employment centers create persistent unauthorized parking pressure. Consistent enforcement keeps assigned parking available and maintains the quality-of-life expectation that drives lease renewals. See our dedicated apartment resources: apartment-complexes." },
                  { t: "HOA communities in Chandler, Gilbert, and Scottsdale", d: "HOA parking rules carry CC&R authority, but enforcing them requires a documented process that protects the board from selective-enforcement claims. Professional enforcement creates the consistency and documentation the board needs. See our HOA resources: hoa." },
                  { t: "Commercial strip centers in Glendale, Peoria, and Mesa", d: "Customer parking availability directly correlates with foot traffic. Enforcement that keeps the lot available for customers is one of the most direct ways to protect tenant satisfaction and lease renewal rates. See: commercial-property-towing." },
                  { t: "Medical facilities and professional office buildings", d: "ADA accessible-space compliance is non-negotiable for healthcare properties. Professional enforcement ensures accessible spaces are consistently available and that the documentation record is clean if a complaint is ever filed." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Making the Case to Ownership and HOA Boards</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When presenting parking enforcement to an HOA board or ownership group for approval, frame it around the five value dimensions: resident satisfaction, fire-lane safety, ADA compliance, code violation prevention, and commercial foot-traffic protection. The no-cost structure under Arizona's PPI model removes the budget objection entirely — the question becomes not "can we afford this?" but "what are we risking by not having it?"
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Supporting resources for your presentation:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Resource Hub", desc: "Guides and checklists for board presentations" },
                  { href: "/resources/property-manager-guide", label: "Property Manager Towing Guide", desc: "Comprehensive guide for managers" },
                  { href: "/services/parking-enforcement", label: "Parking Enforcement Programs", desc: "How our enforcement programs work" },
                  { href: "/services/private-property-impounds", label: "Private Property Impounds", desc: "The no-cost PPI model explained" },
                  { href: "/audiences/commercial-property-managers", label: "Commercial Property Managers", desc: "Resources for commercial properties" },
                  { href: "/blog/how-property-managers-choose-towing-companies", label: "Choosing a Towing Company", desc: "Evaluation framework for towing partners" },
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
                  Free consultation for Phoenix-metro property managers, HOA boards, and commercial owners. We assess your property and design an enforcement program calibrated to your specific needs.
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
                      { href: "/blog/how-property-managers-choose-towing-companies", label: "How Property Managers Choose Towing Companies", cat: "Property Manager Resources" },
                      { href: "/blog/property-manager-questions-to-ask-towing-companies", label: "20 Questions to Ask a Towing Company", cat: "Property Manager Resources" },
                      { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", cat: "Arizona Laws" },
                      { href: "/blog/private-property-towing-vs-public-towing-arizona", label: "Private vs. Public Towing in Arizona", cat: "Arizona Laws" },
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
                <Link href="/audiences/apartment-complexes" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Apartment Complexes</h3>
                  <p className="text-gray-700 text-sm">Resources for apartment managers &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

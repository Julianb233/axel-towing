import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/commercial-property-towing-phoenix-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Commercial property towing in Phoenix AZ - Axle Towing retail and office enforcement";
const CANONICAL = "https://axletowing.com/blog/commercial-property-towing-phoenix-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Commercial Property Towing Phoenix AZ | Retail & Office",
  description: "Professional commercial property towing in Phoenix, AZ. Free programs for retail centers, office parks, and commercial property owners. Call Axle Towing: 480-288-5526.",
  keywords: "commercial property towing phoenix az, commercial parking enforcement phoenix, retail parking towing phoenix, office park towing phoenix arizona",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Commercial Property Towing Phoenix AZ | Retail & Office",
    description: "Professional commercial property towing in Phoenix, AZ. Free programs for retail centers, office parks, and commercial property owners.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Property Towing Phoenix AZ | Retail & Office",
    description: "Professional commercial property towing in Phoenix, AZ. Free programs for commercial property owners.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  {
    question: "Does Axle Towing offer free commercial property towing in Phoenix?",
    answer: "Yes. Axle Towing provides free commercial property towing throughout Phoenix under Arizona's private property impound model. All towing and storage fees are collected from the vehicle owner. Phoenix commercial property owners and managers pay nothing.",
  },
  {
    question: "What types of commercial properties in Phoenix does Axle Towing serve?",
    answer: "Axle Towing serves all types of commercial properties in Phoenix including retail shopping centers, strip malls, office parks, medical facilities, restaurants, industrial properties, and mixed-use developments. If you own or manage a commercial parking lot in Phoenix, we can help.",
  },
  {
    question: "How do Phoenix commercial properties protect customer parking from unauthorized use?",
    answer: "The most effective approach combines Arizona-compliant towing signage, clearly marked spaces, and consistent professional enforcement. When non-customers park in customer-only lots, they displace legitimate visitors and reduce revenue. Axle Towing provides the consistent enforcement that keeps your Phoenix commercial parking working as intended.",
  },
  {
    question: "Can Phoenix retail centers tow vehicles overnight when the business is closed?",
    answer: "Yes. With proper signage, unauthorized vehicles can be towed from Phoenix commercial lots at any hour, including when the business is closed. This is particularly important for retail centers that share parking with other businesses or are adjacent to residential areas where overnight parking abuse is common.",
  },
  {
    question: "What documentation does Axle Towing provide for commercial property tows in Phoenix?",
    answer: "Every commercial property tow in Phoenix includes time-stamped photographs of the vehicle and the violation, a written incident report, and confirmation of Phoenix Police notification per ARS 28-874. This documentation is maintained for the property owner's records.",
  },
  {
    question: "How does Axle Towing handle situations where a vehicle owner claims they were a customer?",
    answer: "Arizona law requires towing companies to remove vehicles based on the parking rules as posted and the property owner's or manager's authorization. If a vehicle owner claims they were a customer, they can dispute through the towing company's process. The documentation Axle Towing provides — photographs, time stamps, incident report — forms the factual record for any such dispute.",
  },
  {
    question: "Does Axle Towing serve multi-tenant commercial properties in Phoenix?",
    answer: "Yes. Multi-tenant retail centers and office parks in Phoenix often have complex parking arrangements. Axle Towing works with both individual tenant managers and the property management company to establish clear, consistent enforcement protocols that protect all tenants' customers and employees.",
  },
];

const AREAS = [
  "Downtown Phoenix",
  "Camelback Corridor",
  "Uptown Phoenix",
  "Desert Ridge / North Phoenix",
  "Airport / Sky Harbor Area",
  "I-17 Corridor",
  "West Phoenix / Maryvale",
  "South Mountain / Laveen",
  "Midtown Phoenix",
  "Ahwatukee Commercial Areas",
];

const RELATED = [
  { slug: "retail-shopping-center-parking-enforcement", title: "Retail Shopping Center Parking Enforcement", category: "Commercial Resources", readTime: "10 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "office-building-parking-management", title: "Office Building Parking Management Guide", category: "Commercial Resources", readTime: "9 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "commercial-property-towing-scottsdale-az", title: "Commercial Property Towing Scottsdale AZ", category: "City Guides", readTime: "9 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const localBiz = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TowingService"],
    name: COMPANY.name,
    telephone: COMPANY.phone,
    url: `https://${COMPANY.domain}`,
    areaServed: { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    priceRange: "Free for commercial property owners",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Commercial Property Towing Phoenix AZ | Retail & Office",
    description: "Professional commercial property towing in Phoenix, AZ. Free programs for retail centers, office parks, and commercial property owners.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: {
      "@type": "Organization",
      "name": "Axle Towing & Impound",
      "url": "https://axletowing.com",
      "knowsAbout": ["Arizona private property towing", "ARS 28-3511", "commercial property towing", "Property management"],
      "areaServed": "Phoenix metro, Arizona"
    },
    reviewedBy: {
      "@type": "Organization",
      "name": "Axle Towing Operations Team",
      "description": "ARS-compliant private property towing operators serving the Phoenix metro since 2021"
    },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Commercial Resources</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Commercial Property Towing <span className="text-gradient">in Phoenix, AZ</span>
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

      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">Phoenix commercial property managers can enforce parking at zero cost under Arizona&apos;s private property impound model — all towing and storage fees are paid by the vehicle owner. From retail centers on Camelback to office parks near Desert Ridge, unauthorized parking hurts customer access and tenant satisfaction. Axle Towing provides 24/7 dispatch, ARS 28-3511-compliant documentation, and law enforcement notification on every tow. Compliant signage per ARS 9-499.05 must be posted before enforcement begins.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Phoenix's commercial real estate market is one of the most active in the Southwest — retail centers along the Camelback and Uptown corridors, office parks scattered from Desert Ridge to South Mountain, and industrial properties clustered along the I-17 and Loop 101 corridors. For owners and managers of commercial property in Phoenix, unauthorized parking is not just an annoyance. It is a direct business issue that affects customer access, employee productivity, and property liability.
              </p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Phoenix commercial property towing is free to the owner or manager — all fees are paid by the unauthorized vehicle owner under Arizona&apos;s PPI model</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>ARS 28-3511 authorizes immediate removal from commercial parking when ARS 9-499.05-compliant signage is posted — no police involvement or prior notice required</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Unauthorized parking in Phoenix commercial lots directly impacts customer access, tenant satisfaction, and property liability exposure</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Axle Towing documents every commercial tow with time-stamped photos and handles mandatory law enforcement notification within one hour</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>24/7 dispatch covers all Phoenix commercial properties from Downtown and Camelback to Desert Ridge and South Mountain corridors</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Commercial Property Towing Works in Phoenix</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Commercial property owners in Phoenix have strong legal rights under Arizona law when it comes to removing unauthorized vehicles. Here is how a professional commercial towing program operates:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Define the Enforcement Zone", d: "Determine which areas of your Phoenix commercial property are subject to towing enforcement. Customer-only areas, fire lanes, loading zones, accessible parking, and employee-designated areas each require clear demarcation." },
                  { t: "Install Arizona-Compliant Signage", d: "ARS 9-499.05 requires towing signs at all entry points and enforcement zones. For commercial properties, signage must clearly communicate who may park, for how long, and what the consequences of violation are. Axle Towing provides signage consultation for Phoenix commercial properties." },
                  { t: "Establish an Authorization Protocol", d: "Define who at the property — manager, security, tenant representative — can authorize towing. For multi-tenant properties, coordination between the property management company and individual tenants is important." },
                  { t: "Professional Response and Documentation", d: "Axle Towing responds to authorized calls, documents the violation thoroughly, removes the vehicle, and notifies Phoenix Police per ARS 28-874. Every tow is logged and documented for the property manager's records." },
                  { t: "Zero Cost to the Property Owner", d: "Under Arizona's PPI model, all fees are recovered from the vehicle owner. Phoenix commercial property owners pay nothing for enforcement." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Commercial Property Owners Need Professional Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix commercial properties face a specific set of parking challenges that residential properties do not. Customer-facing businesses that lose parking spaces to unauthorized vehicles lose potential sales — a customer who cannot find parking simply drives away. Office buildings where employee parking is occupied by non-employees create daily friction and reduce tenant satisfaction. And industrial properties where loading zones and fire lanes are blocked face operational delays and regulatory exposure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix's dense commercial corridors — Camelback, Bethany Home, Uptown, the Central Avenue corridor — create conditions where nearby businesses compete for the same parking inventory. Restaurants and retail establishments adjacent to each other frequently have customers spill into each other's lots. Without professional enforcement, the informal equilibrium always tilts toward the property whose lot is most convenient, at the expense of other tenants.
              </p>
              <div className="space-y-4 my-6 reveal">
                {[
                  { t: "Customer Parking Protects Revenue", d: "For Phoenix retail and restaurant operators, a full parking lot sends customers away before they even enter. Enforcing customer-only parking ensures that the parking your business needs is available during operating hours." },
                  { t: "Multi-Tenant Properties Need Coordination", d: "Phoenix strip malls and multi-tenant office parks often have complex shared parking arrangements. When one tenant's customers consistently park in another's reserved area, it creates conflicts that professional enforcement resolves permanently." },
                  { t: "After-Hours Abuse Is a Major Issue at Phoenix Commercial Properties", d: "Phoenix commercial properties adjacent to residential neighborhoods, entertainment venues, or transit hubs frequently experience unauthorized overnight parking. Axle Towing provides after-hours enforcement for commercial properties throughout Phoenix." },
                  { t: "Liability Reduction Through Documentation", d: "A Phoenix commercial property with documented parking enforcement policies and records demonstrates due diligence if a parking-related incident leads to a liability claim. Axle Towing's documentation supports this record." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Phoenix Commercial Property Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511: Authorizes immediate removal of unauthorized vehicles from private commercial property with proper signage. No advance notice to the vehicle owner is required.",
                  "ARS 9-499.05: Defines sign specifications that must be met before towing is legally authorized. Axle Towing provides signage consultation for Phoenix commercial properties.",
                  "ARS 28-874: Requires notification of Phoenix Police within one hour of any private property tow. Axle Towing handles this automatically for every Phoenix commercial tow.",
                  "Fire lane requirements: Phoenix fire code requires fire lanes to be kept clear at all times. Violations in fire lanes are among the most urgent enforcement situations we handle.",
                  "Accessible parking enforcement: ARS 28-884 governs enforcement of accessible parking violations. Penalties for accessible space violations are significantly higher than standard parking violations.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This content is informational and is not legal advice. Phoenix commercial property owners with specific questions about their enforcement rights should consult a licensed Arizona attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Phoenix Commercial Areas We Serve</h2>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Commercial Towing Situations in Phoenix</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Commuter Parking at Retail Centers Near Light Rail", d: "Phoenix properties near the Valley Metro light rail system frequently experience commuters parking in commercial lots to avoid transit station parking fees. This is one of the most persistent unauthorized parking problems at Phoenix commercial properties along the light rail corridor." },
                  { t: "Restaurant Overflow into Adjacent Retail Parking", d: "High-traffic Phoenix restaurants whose own lots fill quickly often see their customers overflow into neighboring business parking. For the neighboring business, this means their customers cannot find parking during the restaurant's busy periods." },
                  { t: "Overnight Abandon at Commercial Properties", d: "Vehicles abandoned in Phoenix commercial parking lots — whether by drivers who had too much to drink, former employees who left their cars, or individuals who simply never returned — create ongoing issues. Axle Towing removes abandoned commercial lot vehicles under Arizona law." },
                  { t: "Loading Zone and Fire Lane Violations", d: "Delivery vehicles and customer vehicles that park in loading zones or fire lanes block legitimate deliveries, create safety hazards, and expose the property owner to liability. These are priority enforcement situations that Axle Towing handles with fast response." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Commercial Property Owners Choose Axle Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Free enforcement under Arizona's PPI model — commercial owners pay nothing",
                  "24/7 dispatch for all of Phoenix, including overnight and weekend enforcement",
                  "Experience with retail, office, medical, and industrial property types",
                  "Complete documentation on every tow for property management records",
                  "Signage consultation for Arizona compliance",
                  "Multi-tenant coordination to establish enforcement protocols for shared parking",
                  "Priority response for fire lane and accessible space violations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                For more information on commercial property towing, see our guides on <Link href="/blog/retail-shopping-center-parking-enforcement" className="text-primary hover:underline">retail shopping center parking enforcement</Link> and <Link href="/blog/office-building-parking-management" className="text-primary hover:underline">office building parking management</Link>. You can also visit our <Link href="/services/commercial-property-towing" className="text-primary hover:underline">commercial property towing services page</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Property Towing in Phoenix</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides free commercial property towing for Phoenix commercial property owners and managers. Contact us to discuss your property's enforcement needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                </div>
              </div>

              <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional commercial property towing and parking enforcement serving Phoenix and the Greater Phoenix metro area since 2021.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{a.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Commercial Towing</h3>
                  <p className="text-gray-700 text-sm mb-4">Free programs for Phoenix commercial properties. 24/7 dispatch.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/phoenix" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Location Page</h3>
                  <p className="text-gray-700 text-sm">View all towing services in Phoenix &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

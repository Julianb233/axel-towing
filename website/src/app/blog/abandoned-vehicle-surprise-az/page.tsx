import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/optimized/axle-towing-hoa-entrance-arizona-towing-service.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "HOA entrance with Axle Towing private-property signage — Surprise abandoned vehicle removal";
const CANONICAL = "https://axletowing.com/blog/abandoned-vehicle-surprise-az";
const ES_URL = "https://axletowing.com/es/blog/vehiculos-abandonados-surprise-az";
const PUBLISHED = "2026-04-08T00:00:00.000Z";
const MODIFIED = "2026-04-20T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Abandoned Vehicle Removal in Surprise, AZ | Free Service",
  description: "Free abandoned vehicle removal in Surprise, Arizona. Same-day towing service for property owners, HOAs, and apartment complexes. Call Axle Towing: 480-288-5526.",
  keywords: "abandoned vehicle surprise, abandoned car surprise az, vehicle removal surprise, towing surprise arizona",
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, es: ES_URL },
  },
  openGraph: {
    title: "Abandoned Vehicle Removal in Surprise, AZ",
    description: "Free abandoned vehicle removal for Surprise property owners. Same-day service.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abandoned Vehicle Removal in Surprise, AZ",
    description: "Free abandoned vehicle removal for Surprise property owners. Same-day service.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  { question: "How do I report an abandoned vehicle in Surprise, AZ?", answer: "For vehicles on public streets, contact Surprise Police Non-Emergency at 623-222-4000. For vehicles on private property (apartments, HOAs, commercial lots), call Axle Towing at 480-288-5526 for free same-day removal." },
  { question: "How much does it cost to remove an abandoned vehicle in Surprise?", answer: "For property owners, it costs nothing. Under Arizona's private property impound (PPI) model, all towing and storage fees are paid by the vehicle owner when they retrieve their car. Property owners, HOAs, and apartment complexes pay zero." },
  { question: "How long does a vehicle have to sit before it is considered abandoned in Surprise?", answer: "Arizona law does not specify a single fixed timeframe. On private property with proper towing signage, unauthorized vehicles can be removed immediately. The determination of abandonment depends on factors like the vehicle's condition, registration status, and whether the owner appears to have deserted it." },
  { question: "Does Axle Towing serve Surprise, Arizona?", answer: "Yes. Axle Towing provides free abandoned vehicle removal throughout Surprise and the surrounding Surprise metro area. We serve Surprise Stadium Area, Prasada, Marley Park, Sun Village, and Asante and all Surprise neighborhoods. Call 480-288-5526 for same-day service." },
];

const AREAS = [
                    "Surprise Stadium Area",
                    "Prasada",
                    "Marley Park",
                    "Sun Village",
                    "Asante",
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "hoa-abandoned-vehicle-removal-arizona", title: "HOA Abandoned Vehicle Removal: Arizona Rules", category: "HOA Resources", readTime: "10 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  const localBiz = { "@context": "https://schema.org", "@type": ["LocalBusiness", "TowingService"], name: COMPANY.name, telephone: COMPANY.phone, url: `https://${COMPANY.domain}`, areaServed: { "@type": "City", name: "Surprise", containedInPlace: { "@type": "State", name: "Arizona" } }, priceRange: "Free for property owners" };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Abandoned Vehicle Removal in Surprise, AZ | Free Service",
    description: "Free abandoned vehicle removal in Surprise, Arizona. Same-day towing service for property owners, HOAs, and apartment complexes. Call Axle Towing: 480-288-5526.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Axle Towing & Impound", url: "https://axletowing.com" },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"><svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Blog</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">City Guides</span>
            <span className="text-sm text-blue-200/60">10 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Abandoned Vehicle Removal <span className="text-gradient">in Surprise, AZ</span></h1>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Surprise is one of the fastest-growing cities in the Phoenix metro, with new master-planned communities sprouting up along the Loop 303 corridor. As new residents move in and out of apartments and rental homes, abandoned vehicles have become increasingly common. Property managers in Surprise benefit from having a reliable towing partner who knows the area.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Abandoned Vehicle Removal Works in Surprise</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">If you own or manage property in Surprise, Arizona law gives you the right to have unauthorized and abandoned vehicles removed at no cost to you. Here is how the process works:</p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Call Axle Towing", d: "Contact us at 480-288-5526. Describe the vehicle and situation. We serve all of Surprise including Surprise Stadium Area, Prasada, Marley Park, Sun Village, and Asante." },
                  { t: "We Assess and Remove", d: "Our team arrives, documents the vehicle, and tows it to our secure impound yard. Same-day service is available for most Surprise locations." },
                  { t: "We Handle the Paperwork", d: "We notify law enforcement, send certified mail to the registered owner, and manage the entire lien process if the vehicle goes unclaimed." },
                  { t: "You Pay Nothing", d: "All costs are recovered from the vehicle owner under Arizona's private property impound model. Property owners, HOAs, and apartment complexes pay zero." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law Protects Surprise Property Owners</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Under Arizona Revised Statutes, property owners in Surprise have clear legal rights when it comes to vehicle removal:</p>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["ARS 28-3511 allows immediate removal of unauthorized vehicles from private property with proper signage", "ARS 9-499.05 establishes towing signage requirements and property owner protections", "ARS 28-4141 through 28-4145 defines the abandoned vehicle process, including notification and lien procedures", "The PPI (Private Property Impound) model means all costs are borne by the vehicle owner, not the property owner"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Surprise Areas We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing provides abandoned vehicle removal throughout Surprise, including:</p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600"><svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-sm">{area}</span></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Abandoned Vehicle Situations in Surprise</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Former Tenant Vehicles", d: "A tenant moves out of a Surprise apartment complex but leaves their vehicle behind. This is the most common scenario we handle." },
                  { t: "HOA Parking Violations", d: "Surprise HOA communities frequently deal with inoperable or unregistered vehicles in driveways, on community streets, and in guest parking areas." },
                  { t: "Commercial Property Dumping", d: "Vehicles are sometimes abandoned in Surprise commercial parking lots, retail centers, and industrial parks, often overnight." },
                  { t: "Expired Registration Vehicles", d: "Vehicles with expired tags sitting for extended periods in apartment or condo parking areas are a common form of abandonment in Surprise." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{s.t}</h3><p className="text-gray-600">{s.d}</p></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Surprise Contact Numbers</h2>
              <div className="glass-card-white rounded-2xl p-6 my-8 reveal">
                <ul className="text-gray-600 space-y-3">
                  <li className="flex justify-between"><span className="font-medium text-gray-900">Surprise Police Non-Emergency</span><span>623-222-4000</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-3"><span className="font-bold text-primary">Axle Towing (Private Property)</span><a href="tel:4802885526" className="font-bold text-primary">480-288-5526</a></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Abandoned Vehicle in Surprise?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} provides free abandoned vehicle removal for property owners throughout Surprise. We handle everything from documentation to lien processing at no cost to you.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Get Free Assessment</Link></div>
              </div>

              <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div><h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4><p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving Surprise and the Greater Phoenix metro area since 2021.</p></div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help in Surprise?</h3><p className="text-gray-700 text-sm mb-4">Free abandoned vehicle removal for Surprise property owners.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
              <Link href="/locations/surprise" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal"><h3 className="font-bold text-gray-900 mb-2">Surprise Location Page</h3><p className="text-gray-700 text-sm">View all towing services in Surprise &rarr;</p></Link>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/private-property-towing-phoenix-metro-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck with sweeping Phoenix metro valley view at golden hour - Axle Towing private property enforcement";
const CANONICAL = "https://axletowing.com/blog/private-property-towing-phoenix-metro-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Private Property Towing Phoenix Metro | All 38 Cities",
  description: "Private property towing across the entire Phoenix metro area. Free towing for HOAs, apartments, and commercial properties in all 38 Phoenix area cities. Call 480-288-5526.",
  keywords: "private property towing phoenix metro, phoenix metro towing, private property towing arizona, towing company phoenix metro area",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Private Property Towing Phoenix Metro | All 38 Cities",
    description: "Free private property towing for HOAs, apartments, and commercial properties across all 38 Phoenix metro cities. Professional enforcement at no cost to property owners.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [HERO_IMAGE_URL],
    title: "Private Property Towing Phoenix Metro | All 38 Cities",
    description: "Free private property towing across all 38 Phoenix metro cities. HOAs, apartments, commercial properties.",
  },
};

const FAQS = [
  {
    question: "Does Axle Towing serve all cities in the Phoenix metro area?",
    answer: "Yes. Axle Towing provides private property towing and parking enforcement throughout the Greater Phoenix metro area, covering all major cities including Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Glendale, Tempe, Peoria, Surprise, Goodyear, Avondale, Buckeye, Queen Creek, Apache Junction, and more. Call 480-288-5526.",
  },
  {
    question: "What types of private property does Axle Towing serve in the Phoenix metro?",
    answer: "Axle Towing serves all private property types across the Phoenix metro: HOA communities, apartment complexes, multi-family housing, commercial office parks, retail shopping centers, industrial properties, medical campuses, restaurants, churches, and mobile home parks.",
  },
  {
    question: "How much does private property towing cost for Phoenix metro property owners?",
    answer: "Nothing. Under Arizona's private property impound model, all towing and storage fees are paid by the unauthorized vehicle owner when they retrieve their vehicle. Property owners, HOAs, apartment managers, and commercial landlords across the Phoenix metro pay zero for enforcement service.",
  },
  {
    question: "Is Arizona state law the same for private property towing across all Phoenix metro cities?",
    answer: "Arizona state law governs private property towing statewide, but individual cities may have additional municipal requirements — particularly for signage. ARS 28-3511, ARS 9-499.05, and ARS 28-874 are the primary state statutes. Axle Towing is familiar with requirements across all Phoenix metro cities and ensures compliance before enforcement begins.",
  },
  {
    question: "Can one towing company handle a Phoenix metro property portfolio with multiple locations?",
    answer: "Yes. Property management companies and commercial landlords with multiple properties across the Phoenix metro can partner with Axle Towing for consistent enforcement across their entire portfolio. We provide a single point of contact and standardized processes across all locations.",
  },
  {
    question: "How long has Axle Towing been serving the Phoenix metro area?",
    answer: "Axle Towing has been serving the Phoenix metro area since 2021. We operate throughout the Greater Phoenix area covering East Valley, West Valley, and central Phoenix communities for private property towing and parking enforcement.",
  },
];

const AREAS = [
  "Phoenix", "Mesa", "Chandler", "Gilbert",
  "Scottsdale", "Glendale", "Tempe", "Peoria",
  "Surprise", "Goodyear", "Avondale", "Buckeye",
  "Queen Creek", "Apache Junction", "Maricopa", "Casa Grande",
  "Fountain Hills", "Paradise Valley", "Ahwatukee", "Tolleson",
];

const RELATED = [
  {
    slug: "parking-enforcement-east-valley-az",
    title: "Parking Enforcement in the East Valley, AZ",
    category: "City Guides",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "parking-enforcement-west-valley-az",
    title: "Parking Enforcement in the West Valley, AZ",
    category: "City Guides",
    readTime: "10 min",
    gradient: "from-emerald-500 via-green-700 to-emerald-900",
  },
  {
    slug: "hoa-towing-program-setup-guide",
    title: "How to Set Up an HOA Towing Program in Arizona",
    category: "HOA Resources",
    readTime: "11 min",
    gradient: "from-amber-500 via-orange-600 to-amber-800",
  },
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
    url: "https://axletowing.com",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Phoenix Metropolitan Area",
      containedInPlace: { "@type": "State", name: "Arizona" },
    },
    priceRange: "Free for property owners",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Private Property Towing Phoenix Metro | All 38 Cities",
    description: "Private property towing across the entire Phoenix metro area. Free towing for HOAs, apartments, and commercial properties in all Phoenix area cities.",
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
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">City Guides</span>
            <span className="text-sm text-blue-200/60">12 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Private Property Towing <span className="text-gradient">Across the Phoenix Metro</span>
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
          <p className="text-gray-800 leading-relaxed">Axle Towing is the Phoenix metro&apos;s dedicated private property towing company, serving HOAs, apartment complexes, and commercial properties across the entire valley under Arizona&apos;s private property impound model. Property owners pay nothing — all towing and storage fees are collected from the vehicle owner. Serving 40+ Phoenix-metro cities, Axle Towing operates under ARS 28-3511 and ARS 9-499.05 with compliant signage consultation, standing authorization agreements, and 24/7 dispatch. Founded in 2021, Axle Towing handles thousands of enforcements annually across the metro.</p>
        </div>
      </aside>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing serves the entire Phoenix metro — 40+ cities — with free private property towing for all property types.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Arizona&apos;s PPI model means every Phoenix-metro property owner pays nothing; towing costs are recovered from the vehicle owner.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 28-3511 and ARS 9-499.05 govern private property towing statewide — Axle Towing handles all compliance aspects.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>24/7 dispatch across the full Phoenix metro, from Surprise in the West Valley to Apache Junction in the East Valley.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing serves HOAs, apartment complexes, retail centers, office parks, and industrial properties across the valley.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                The Greater Phoenix metro area spans approximately 14,000 square miles and encompasses more than 38 incorporated cities and towns — from downtown Phoenix to the far East Valley communities of Queen Creek and Apache Junction, and from the established West Valley cities of Glendale and Peoria to the fast-growing outer communities of Buckeye and Surprise. Across all of them, property managers, HOA boards, and commercial property owners share a common need: reliable, professional private property towing at no cost. Axle Towing serves the entire Phoenix metro with a single free number and consistent standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Private Property Towing Works Across the Phoenix Metro</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Whether your property is in central Phoenix, the outer West Valley, or the far East Valley, the process for establishing private property towing enforcement is the same:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Authorization Setup", d: "We establish a written property authorization agreement with your HOA board, property management company, or commercial ownership entity. This document is required under Arizona law and is completed at no cost to you." },
                  { t: "Signage Compliance Review", d: "We confirm that proper towing notice signage is in place per ARS 9-499.05. Requirements may vary slightly by municipality across the Phoenix metro, and we verify compliance for your specific city before enforcement begins." },
                  { t: "24/7 Dispatch Coverage", d: "Your team contacts our dispatch line whenever unauthorized vehicles need to be addressed. We cover all Phoenix metro cities — from central Phoenix to Apache Junction, from Glendale to Buckeye." },
                  { t: "Documentation on Every Tow", d: "Each removal is photographed and documented with date, time, GPS location, and vehicle description. This record is available to your management team for any dispute." },
                  { t: "Zero Cost Under Arizona's PPI Model", d: "All fees are paid by the vehicle owner. Property owners, HOA boards, apartment managers, and commercial landlords throughout the Phoenix metro pay nothing for enforcement service." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Metro Property Managers Need Professional Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                The Phoenix metro's scale creates both opportunity and complexity for property managers. The same metro that has some of the most desirable HOA communities in the country also has one of the highest rates of unauthorized parking complaints. Professional enforcement matters across all property types because:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Phoenix metro's car-dependent culture means almost every household has multiple vehicles, straining residential and commercial parking ratios",
                  "The region's rapid growth creates high turnover in apartment and HOA communities, with frequent abandoned-vehicle situations from move-outs",
                  "Large event venues — State Farm Stadium in Glendale, Footprint Center in Phoenix, Talking Stick Resort Arena — drive parking overflow into adjacent private properties",
                  "The metro's sprawl means properties in outer communities have fewer nearby municipal towing resources and rely more on private enforcement",
                  "Professional documentation protects property owners from disputes in a market where residents and tenants are often well-informed about their rights",
                  "Consistent enforcement deters violations and protects the quality and safety of private property across all property types",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Phoenix Metro Private Property Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Private property towing throughout the Phoenix metro operates under Arizona state law. The primary statutes are consistent across all 38+ cities and towns in the metro:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511 authorizes removal of unauthorized vehicles from private property with proper posted signage — applicable in every Arizona city",
                  "ARS 9-499.05 establishes statewide towing signage requirements that must be met before enforcement can begin",
                  "ARS 28-874 allows immediate removal of vehicles blocking fire lanes or emergency access routes at any private property in Arizona",
                  "ARS 28-4141 through 28-4145 govern the abandoned vehicle notification and lien process for vehicles that go unclaimed",
                  "Arizona's PPI model ensures all costs are paid by the vehicle owner, not the property owner",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This article is informational and does not constitute legal advice. For specific guidance on your property's towing authority, consult a qualified Arizona attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Phoenix Metro Cities We Serve</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Property Types We Serve Across the Phoenix Metro</h2>
              <div className="space-y-4 reveal">
                {[
                  {
                    t: "HOA Communities",
                    d: "The Phoenix metro has one of the highest concentrations of HOA communities in the United States. From large master-planned communities in Chandler, Gilbert, and Surprise to smaller townhome HOAs in Tempe and Scottsdale, Axle Towing provides free HOA parking enforcement across the metro. See our dedicated city pages for HOA enforcement in Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Glendale, Queen Creek, and Apache Junction.",
                  },
                  {
                    t: "Apartment and Multi-Family Complexes",
                    d: "Phoenix metro apartment managers deal with unauthorized parking from non-residents, former tenants, and visitors on a daily basis. Axle Towing provides apartment parking enforcement throughout the metro including Phoenix, Mesa, Tempe, Scottsdale, Chandler, Gilbert, and Glendale.",
                  },
                  {
                    t: "Commercial Office Parks",
                    d: "Office parks across the Phoenix metro — from the Price Road tech corridor in Chandler to the Scottsdale Airpark and Phoenix's Camelback corridor — need consistent after-hours enforcement and customer parking protection. We serve all commercial zones across the metro.",
                  },
                  {
                    t: "Retail Shopping Centers",
                    d: "Phoenix metro retail centers range from neighborhood strip malls to regional destinations like Scottsdale Fashion Square, Chandler Fashion Center, and Arrowhead Mall. Tenant parking protection and fire lane enforcement are our most common commercial services.",
                  },
                  {
                    t: "Industrial and Distribution Properties",
                    d: "The Phoenix metro's growing industrial base in Goodyear, Buckeye, Avondale, and east Phoenix requires loading dock enforcement and unauthorized parking removal. Axle Towing serves industrial properties across the metro.",
                  },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Metro Property Managers Choose Axle Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Single point of contact for enforcement across multiple properties throughout the metro",
                  "24/7 dispatch coverage from central Phoenix to outer East and West Valley communities",
                  "Zero cost to property owners under Arizona's PPI model",
                  "Full documentation on every removal for legal protection",
                  "City-specific signage compliance knowledge across all 38+ Phoenix metro cities",
                  "Experience with all property types — HOA, apartment, commercial, industrial, medical",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Explore our service pages for specific sub-regions: <Link href="/blog/parking-enforcement-east-valley-az" className="text-primary underline">East Valley parking enforcement</Link> and{" "}
                <Link href="/blog/parking-enforcement-west-valley-az" className="text-primary underline">West Valley parking enforcement</Link>. For HOA-specific guidance, visit our{" "}
                <Link href="/audiences/hoa-boards" className="text-primary underline">HOA Boards page</Link>. For commercial properties, see our{" "}
                <Link href="/audiences/commercial-properties" className="text-primary underline">Commercial Properties page</Link>.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Private Property Towing Across the Phoenix Metro</h3>
                <p className="text-gray-600 mb-6">
                  {COMPANY.name} provides free private property towing for HOAs, apartments, and commercial properties across all 38+ Phoenix metro cities. One call sets up your enforcement program.
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
                    <p className="text-gray-700 text-sm">Professional private property towing serving the entire Greater Phoenix metro area since 2021. One company, one number, consistent service across all 38+ cities.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Metro Towing</h3>
                  <p className="text-gray-700 text-sm mb-4">Free private property towing across the entire Phoenix metro.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/phoenix" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Location Page</h3>
                  <p className="text-gray-700 text-sm">View all Phoenix towing services &rarr;</p>
                </Link>
                <Link href="/resources/property-manager-towing-hub" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Property Manager Hub</h3>
                  <p className="text-gray-700 text-sm">Resources for Phoenix metro property managers &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

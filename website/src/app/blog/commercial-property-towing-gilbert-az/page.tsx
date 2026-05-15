import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/commercial-property-towing-gilbert-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Gilbert AZ commercial office park - Axle Towing commercial property enforcement";
const CANONICAL = "https://axletowing.com/blog/commercial-property-towing-gilbert-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Commercial Property Towing Gilbert AZ | Office and Retail Programs",
  description: "Commercial property towing in Gilbert, AZ. Free towing programs for Gilbert office parks, retail properties, and medical facilities. Call 480-288-5526.",
  keywords: "commercial property towing gilbert az, gilbert commercial towing, office park towing gilbert arizona, retail parking enforcement gilbert",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Commercial Property Towing Gilbert AZ | Office and Retail Programs",
    description: "Free commercial property towing for Gilbert, Arizona office parks, retail centers, and medical facilities. Professional enforcement at no cost to property owners.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [HERO_IMAGE_URL],
    title: "Commercial Property Towing Gilbert AZ | Office and Retail Programs",
    description: "Free commercial property towing for Gilbert, Arizona office parks and retail centers.",
  },
};

const FAQS = [
  {
    question: "Does Axle Towing provide commercial property towing in Gilbert, AZ?",
    answer: "Yes. Axle Towing provides commercial property towing and parking enforcement throughout Gilbert, including office parks near the Williams Field District, retail centers along the San Tan Village corridor, medical campuses, and industrial properties. Call 480-288-5526.",
  },
  {
    question: "How much does commercial parking enforcement cost in Gilbert?",
    answer: "Nothing for the property owner or manager. Under Arizona's private property impound model, all fees are collected from the vehicle owner. Gilbert commercial property owners pay zero for the enforcement service.",
  },
  {
    question: "Gilbert has many new commercial developments. Do newer properties need parking enforcement programs?",
    answer: "Yes. New commercial properties in Gilbert often face parking challenges before formal enforcement processes are established. Non-customers, employees of adjacent businesses, and after-hours visitors quickly discover unmonitored lots. Establishing a professional enforcement program early — with proper signage and documented authorization — prevents patterns of unauthorized use from forming.",
  },
  {
    question: "Can Axle Towing enforce parking at a Gilbert medical campus or healthcare facility?",
    answer: "Yes. Medical facilities in Gilbert frequently need enforcement for patient-designated parking areas, staff-only spaces, accessible parking, and fire lanes. We handle enforcement for Gilbert medical campuses and healthcare properties with the documentation standards required in healthcare environments.",
  },
  {
    question: "What signage does a Gilbert commercial property need before towing?",
    answer: "Gilbert commercial properties must meet ARS 9-499.05 requirements, which include towing notice signs at all entrances with the towing company name and phone number. Axle Towing provides signage compliance review as part of every Gilbert commercial enforcement setup at no charge.",
  },
  {
    question: "Can Axle Towing handle fire lane enforcement at Gilbert commercial properties?",
    answer: "Yes. Fire lane enforcement is one of our most common commercial service requests in Gilbert. Vehicles in fire lanes can be removed immediately under ARS 28-874 regardless of whether other required signage is posted. We document and remove fire lane violations throughout Gilbert commercial properties.",
  },
];

const AREAS = [
  "SanTan Village Area",
  "Williams Field District",
  "Gilbert Road Corridor",
  "Ray Road Commerce Area",
  "Val Vista Medical Corridor",
  "Higley Road Business Parks",
  "Power Road Commercial Zone",
  "Spectrum Commerce Park",
  "Downtown Gilbert Heritage District",
  "Lindsay Road Industrial Area",
];

const RELATED = [
  {
    slug: "commercial-property-towing-chandler-az",
    title: "Commercial Property Towing in Chandler, AZ",
    category: "Commercial Towing",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "commercial-property-towing-mesa-az",
    title: "Commercial Property Towing in Mesa, AZ",
    category: "Commercial Towing",
    readTime: "9 min",
    gradient: "from-emerald-500 via-green-700 to-emerald-900",
  },
  {
    slug: "fire-lane-enforcement-property-managers",
    title: "Fire Lane Enforcement for Property Managers",
    category: "Property Management",
    readTime: "8 min",
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
    areaServed: { "@type": "City", name: "Gilbert", containedInPlace: { "@type": "State", name: "Arizona" } },
    priceRange: "Free for property owners",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Commercial Property Towing Gilbert AZ | Office and Retail Programs",
    description: "Commercial property towing in Gilbert, AZ. Free towing programs for Gilbert office parks, retail properties, and medical facilities.",
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Commercial Towing</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Commercial Property Towing <span className="text-gradient">in Gilbert, AZ</span>
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
          <p className="text-gray-800 leading-relaxed">Axle Towing provides free commercial property towing in Gilbert, AZ. Gilbert&apos;s rapid growth from a small agricultural town to a major East Valley commercial hub has driven demand for professional parking enforcement at retail centers, office parks, and mixed-use developments. Arizona&apos;s PPI model ensures Gilbert commercial property owners pay nothing. ARS 9-499.05-compliant signage is required before enforcement begins. Axle Towing serves all of Gilbert with 24/7 dispatch and same-day service for most commercial locations.</p>
        </div>
      </aside>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Gilbert commercial property towing is free for property owners — Arizona&apos;s PPI model puts all costs on the vehicle owner.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Gilbert is one of the fastest-growing commercial markets in the East Valley, requiring professional parking programs.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05 signage compliance at all entrances is required before commercial property towing can begin.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing serves all Gilbert commercial areas including the San Tan Village corridor, Heritage District, and Higley Road.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Detailed photo documentation on every tow protects Gilbert property managers in any vehicle owner dispute.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Gilbert has transformed from an agricultural community into one of Arizona's most economically dynamic cities. The Williams Field District has attracted significant corporate and medical investment, SanTan Village has become a major retail destination, and the Heritage District downtown has emerged as a dining and entertainment hub. With that commercial growth comes a consistent need for professional parking enforcement at Gilbert's office parks, retail centers, and medical campuses. Axle Towing provides free commercial property towing throughout Gilbert at no cost to property owners.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Commercial Property Towing Works in Gilbert</h2>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Property Survey", d: "We evaluate your Gilbert commercial property's parking layout, signage, and tenant mix. We identify compliant signage requirements per ARS 9-499.05 before enforcement begins." },
                  { t: "Authorization Setup", d: "We establish a written authorization agreement with your property management company or ownership entity. Required by Arizona law and provided at no cost to you." },
                  { t: "On-Demand Dispatch", d: "Your property management team contacts our 24/7 dispatch when violations occur. We serve all of Gilbert including the Williams Field area, SanTan Village, and downtown." },
                  { t: "Full Documentation", d: "Photographs and records on every removal protect your property from disputes." },
                  { t: "Zero Cost", d: "Arizona's PPI model means vehicle owners pay all costs. Gilbert commercial property owners pay nothing." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Gilbert Commercial Properties Need Professional Towing Enforcement</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Gilbert's SanTan Village draws regional retail traffic that overflows from the mall into adjacent commercial parking lots on busy weekends",
                  "Office parks near the Williams Field tech and medical corridor deal with employee vehicle overflow and after-hours unauthorized parking",
                  "Downtown Gilbert's restaurant and bar scene creates evening overflow parking in adjacent commercial lots",
                  "Gilbert's medical corridor has strict accessible parking and patient-area needs that require professional enforcement to maintain",
                  "Newer commercial developments need enforcement programs established before unauthorized use patterns become entrenched",
                  "Fire lane violations at Gilbert commercial properties require immediate response — delays create safety risk and liability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Gilbert Commercial Property Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511 authorizes commercial property owners to remove unauthorized vehicles with proper posted signage",
                  "ARS 9-499.05 establishes Gilbert's signage requirements that must be met before enforcement begins",
                  "ARS 28-874 allows immediate removal of vehicles blocking fire lanes or emergency access on commercial property",
                  "Arizona's PPI model means all costs are paid by the vehicle owner",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">This article is informational and does not constitute legal advice.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Gilbert Commercial Areas We Serve</h2>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Commercial Parking Situations in Gilbert</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "SanTan Village Retail Overflow", d: "SanTan Village is one of the East Valley's busiest retail destinations. Adjacent commercial properties — office parks, restaurants, and strip centers within walking distance — regularly deal with mall shoppers and employees using their lots. Professional enforcement is necessary to maintain customer parking availability for your tenants." },
                  { t: "Medical Campus Patient Parking", d: "Gilbert's expanding medical corridor includes hospitals, specialty clinics, and medical office buildings along Val Vista and Gilbert Road. Patient-reserved areas, accessible spaces, and staff lots all require consistent enforcement to ensure proper use." },
                  { t: "Office Park After-Hours Vehicles", d: "Gilbert's office parks near Spectrum Commerce Park and the Williams Field District regularly see unauthorized vehicles overnight and on weekends. Former employees, event attendees, and apartment residents in the area use these lots after business hours." },
                  { t: "Heritage District Evening Overflow", d: "Downtown Gilbert's Heritage District dining and entertainment scene creates evening parking pressure in adjacent commercial lots. Restaurant and bar patrons park in office and retail spaces rather than paying for designated parking." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Gilbert Commercial Owners Choose Axle Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "24/7 dispatch coverage throughout Gilbert",
                  "Zero cost under Arizona's PPI model",
                  "Full documentation on every removal",
                  "Experience with Gilbert's retail, medical, and office market",
                  "Signage compliance guidance at no charge",
                  "Multi-tenant commercial property expertise",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Property Towing in Gilbert</h3>
                <p className="text-gray-600 mb-6">
                  {COMPANY.name} provides free commercial property towing for Gilbert office parks, retail centers, and medical facilities. Contact us to set up your program.
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
                    <p className="text-gray-700 text-sm">Professional commercial property towing serving Gilbert and the East Valley since 2021.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Gilbert Commercial Towing</h3>
                  <p className="text-gray-700 text-sm mb-4">Free parking enforcement for Gilbert commercial properties.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/gilbert" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Gilbert Location Page</h3>
                  <p className="text-gray-700 text-sm">View all towing services in Gilbert &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

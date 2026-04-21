import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/optimized/axle-towing-hoa-entrance-arizona-towing-service.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Private property towing signage at an Arizona HOA entrance — Axle Towing";
const CANONICAL = "https://axletowing.com/blog/abandoned-vehicle-private-property-rights-arizona";
const ES_URL = "https://axletowing.com/es/blog/derechos-propiedad-privada-vehiculos-abandonados-arizona";
const PUBLISHED = "2026-04-08T00:00:00.000Z";
const MODIFIED = "2026-04-20T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Abandoned Vehicle on Private Property Arizona: Your Rights",
  description: "Know your rights when an abandoned vehicle is on your private property in Arizona. Legal removal process, ARS 28-3511, signage requirements, and free towing.",
  keywords: "abandoned vehicle private property arizona, private property towing rights, abandoned car my property",
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, es: ES_URL },
  },
  openGraph: {
    title: "Abandoned Vehicle on Private Property Arizona: Your Rights",
    description: "Know your rights when an abandoned vehicle is on your private property in Arizona. Legal removal process, ARS 28-3511, signage requirements, and free towing.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abandoned Vehicle on Private Property Arizona: Your Rights",
    description: "Know your rights when an abandoned vehicle is on your private property in Arizona.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  { question: "Can I tow a vehicle from my private property without calling the police?", answer: "Yes. On private property, you do not need police authorization to have a vehicle towed. Your towing company handles the required law enforcement notification after the tow. The exception is if you suspect the vehicle is stolen — then call police first." },
  { question: "What if the vehicle owner threatens to sue me?", answer: "Arizona law protects property owners who follow proper procedures. If you have compliant signage, use a licensed towing company, and enforce rules consistently, your liability exposure is minimal. Keep documentation of the signage, the vehicle condition, and the tow authorization." },
  { question: "Do I need a written towing agreement?", answer: "Yes, you should have a written towing authorization agreement with your towing company. This document establishes the legal relationship and protects both parties. Axle Towing provides this as part of our standard setup." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "abandoned-vehicle-removal-phoenix-metro", title: "Abandoned Vehicle Removal Services Phoenix Metro", category: "Services", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Abandoned Vehicle on Private Property Arizona: Your Rights",
    description: "Know your rights when an abandoned vehicle is on your private property in Arizona. Legal removal process, ARS 28-3511, signage requirements, and free towing.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Axle Towing & Impound", url: "https://axletowing.com" },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"><svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Blog</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Legal Guides</span>
            <span className="text-sm text-blue-200/60">10 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Abandoned Vehicle on Private Property Arizona: <span className="text-gradient">Your Rights</span></h1>
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
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Finding an abandoned vehicle on your private property is frustrating. Whether you own an apartment complex, manage a commercial property, or have an HOA community, you did not ask for this problem and you should not have to pay to fix it. The good news: Arizona law is firmly on the side of property owners when it comes to removing abandoned vehicles.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Your Rights Under Arizona Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona Revised Statutes give private property owners clear authority to remove vehicles from their property. Under ARS 28-3511, you can authorize a licensed towing company to remove any unauthorized vehicle from your property, provided proper signage is posted. Under ARS 28-4141 through 28-4145, the abandoned vehicle process covers situations where vehicles appear to have been intentionally deserted on your property.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">What Counts as Private Property?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">For the purposes of Arizona towing law, private property includes apartment complexes and their parking areas, HOA common areas and community streets, commercial parking lots and garages, retail center parking areas, office building parking, industrial property, church and religious facility parking, medical facility parking, and any other property not owned by a government entity.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Signage: The One Thing You Must Have</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Before you can legally have vehicles towed from your private property, you must post compliant signage at every vehicle entrance. Under ARS 9-499.05, signs must display the towing company name, phone number, and impound yard address. Signs must be clearly visible and legible. Without proper signage, your towing authorization may not hold up if challenged.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Your Right to Zero-Cost Removal</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Under Arizona&apos;s private property impound (PPI) model, the vehicle owner pays all towing and storage fees when they retrieve their vehicle. Property owners are never responsible for these costs. This means removing an abandoned vehicle from your property costs you absolutely nothing.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">When You Cannot Just Tow It</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">While Arizona law gives property owners broad towing authority, there are a few situations where you need to be more careful. Vehicles belonging to current tenants with valid lease agreements may require written notice before towing, depending on your lease terms. Vehicles that appear to have someone living in them require coordination with law enforcement. Vehicles on city-owned streets adjacent to your property are not on your private property and must be reported to the city.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} provides free abandoned vehicle removal for property owners across the Phoenix metro area. Call us today.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Get Free Assessment</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Free abandoned vehicle removal.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

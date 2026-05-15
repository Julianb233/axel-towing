import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/hoa-parking-enforcement-phoenix-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "HOA parking enforcement in Phoenix AZ - Axle Towing professional service";
const CANONICAL = "https://axletowing.com/blog/hoa-parking-enforcement-phoenix-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "HOA Parking Enforcement Phoenix AZ | Free Programs",
  description: "Professional HOA parking enforcement in Phoenix, AZ. Free towing programs for homeowner associations. Covers Downtown to Ahwatukee. Call Axle Towing: 480-288-5526.",
  keywords: "HOA parking enforcement phoenix, hoa towing phoenix az, homeowner association parking phoenix, hoa towing program phoenix arizona",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "HOA Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional HOA parking enforcement in Phoenix, AZ. Free towing programs for homeowner associations.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOA Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional HOA parking enforcement in Phoenix, AZ. Free towing programs for homeowner associations.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  {
    question: "Does Axle Towing offer free HOA parking enforcement programs in Phoenix?",
    answer: "Yes. Under Arizona's private property impound model, Axle Towing provides HOA parking enforcement at no cost to the association. All towing and storage fees are collected from the vehicle owner, not the HOA.",
  },
  {
    question: "What signage does my Phoenix HOA need before towing can begin?",
    answer: "Arizona law (ARS 9-499.05) requires towing signs at all entry points and at designated parking areas. Signs must include the towing company name and phone number, the restriction being enforced, and a 24-hour contact number. Axle Towing provides compliant signage consultation as part of our HOA setup process.",
  },
  {
    question: "Can our Phoenix HOA tow vehicles without notifying the owner first?",
    answer: "With proper signage in place, unauthorized vehicles may be towed immediately under ARS 28-3511 without prior notification to the vehicle owner. The towing company is required to notify local law enforcement within one hour of the tow.",
  },
  {
    question: "How quickly does Axle Towing respond to HOA parking complaints in Phoenix?",
    answer: "Axle Towing operates 24/7 dispatch for HOA parking enforcement calls throughout Phoenix. Response times vary by location and time of day, but same-day service is standard for most Phoenix communities.",
  },
  {
    question: "What types of parking violations can Phoenix HOAs enforce through towing?",
    answer: "Phoenix HOAs can enforce violations including: parking without a valid HOA permit or decal, unauthorized vehicles in reserved or handicap spaces, oversized vehicles (RVs, boats, commercial trucks) in prohibited areas, inoperable or unregistered vehicles, and vehicles blocking driveways or fire lanes.",
  },
  {
    question: "Does Axle Towing work directly with our HOA management company in Phoenix?",
    answer: "Yes. Axle Towing works with both self-managed HOAs and HOAs managed by third-party management companies throughout Phoenix. We can coordinate directly with your property manager or communicate with the board, depending on your preference.",
  },
  {
    question: "What documentation does Axle Towing provide after towing a vehicle from a Phoenix HOA?",
    answer: "After every tow from a Phoenix HOA property, Axle Towing provides documentation including the date and time of the tow, vehicle description and license plate, photos taken at the scene, and confirmation of law enforcement notification. This protects the HOA from liability.",
  },
];

const AREAS = [
  "Downtown Phoenix",
  "Arcadia",
  "Ahwatukee Foothills",
  "Desert Ridge",
  "North Phoenix",
  "South Mountain",
  "Laveen",
  "Maryvale",
  "Camelback East",
  "Encanto",
];

const RELATED = [
  { slug: "hoa-towing-program-setup-guide", title: "HOA Towing Program Setup Guide", category: "HOA Resources", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "hoa-parking-enforcement-mesa-az", title: "HOA Parking Enforcement Mesa AZ", category: "City Guides", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
  { slug: "hoa-parking-rules-template-arizona", title: "HOA Parking Rules Template for Arizona", category: "HOA Resources", readTime: "10 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
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
    priceRange: "Free for HOAs",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HOA Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional HOA parking enforcement in Phoenix, AZ. Free towing programs for homeowner associations.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: {
      "@type": "Organization",
      "name": "Axle Towing & Impound",
      "url": "https://axletowing.com",
      "knowsAbout": ["Arizona private property towing", "ARS 28-3511", "HOA parking enforcement", "Property management"],
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Enforcement <span className="text-gradient">in Phoenix, AZ</span>
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
          <p className="text-gray-800 leading-relaxed">Phoenix HOAs can enforce parking rules at zero cost by partnering with a private property towing company under Arizona&apos;s PPI model. Axle Towing handles all towing, documentation, and law enforcement notifications on your behalf. Proper ARS 9-499.05-compliant signage must be in place before enforcement begins. Property managers and HOA boards can authorize 24/7 enforcement without personally confronting residents. Call 480-288-5526 to set up a compliant program for your Phoenix community.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Phoenix is home to more HOA-governed communities than almost any metro in the United States — and with that density comes one of the most complex parking enforcement landscapes in Arizona. From sprawling master-planned communities in North Phoenix to urban townhome associations near Downtown, Phoenix HOA boards face constant pressure to keep parking rules fair, consistent, and legally defensible.
              </p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Phoenix HOA parking enforcement is free to the association — all costs are paid by the vehicle owner under Arizona&apos;s PPI model</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>ARS 28-3511 allows immediate towing from private property when ARS 9-499.05-compliant signage is posted — no prior notice to the driver required</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Consistent third-party enforcement protects your HOA from selective-enforcement complaints and liability disputes</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Axle Towing provides time-stamped photo documentation and mandatory law enforcement notification on every tow</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>24/7 dispatch covers all Phoenix HOA communities from Ahwatukee Foothills to Desert Ridge to Downtown</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How HOA Parking Enforcement Works in Phoenix</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Effective HOA parking enforcement in Phoenix starts with a clear set of written rules, proper signage, and a professional towing partner who knows Arizona law. Here is how a well-run program operates:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Document the Rules", d: "Your CC&Rs and parking rules must clearly define restricted areas, permit requirements, oversized vehicle policies, and the consequences for violations. Axle Towing can review your existing rules for enforceability." },
                  { t: "Install Compliant Signage", d: "Arizona law requires towing signs at all entry points and enforcement zones. Signs must name the towing company, the restriction, and a 24-hour contact number. We provide signage consultation for Phoenix HOAs." },
                  { t: "Authorize Towing", d: "The HOA board or management company authorizes Axle Towing to enforce on the property. We document this authorization and maintain it on file." },
                  { t: "We Enforce and Document", d: "When a violation is reported, our dispatch team responds, photographs the vehicle in violation, and removes it to our secure impound facility. Law enforcement is notified within one hour per Arizona requirements." },
                  { t: "Zero Cost to the HOA", d: "Under Arizona's private property impound model, all towing and storage fees are collected from the vehicle owner when they retrieve their vehicle. The HOA pays nothing." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix HOAs Need Professional Parking Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Attempting to manage parking violations without a professional towing partner creates real problems for Phoenix HOA boards. Inconsistent enforcement exposes the association to fair housing complaints and selective enforcement claims. Board members who personally confront violators risk harassment allegations. And without proper documentation, the HOA can face liability if a towed vehicle owner disputes the action.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix's large lot sizes and the prevalence of multi-vehicle households in communities like Ahwatukee Foothills and Desert Ridge mean guest parking areas fill quickly. Without professional enforcement, guest spaces become long-term storage for unlicensed vehicles, RVs, and commercial trucks — frustrating residents who follow the rules and depressing property values over time.
              </p>
              <div className="space-y-4 my-6 reveal">
                {[
                  { t: "Consistent Enforcement Protects the HOA", d: "When every violation is handled the same way by a professional third party, the HOA is shielded from claims of selective enforcement or bias." },
                  { t: "Documentation Reduces Liability", d: "Axle Towing provides time-stamped photos and incident reports for every tow, giving the HOA a defensible record if a tow is challenged." },
                  { t: "24/7 Dispatch Covers All Hours", d: "Parking violations don't happen only during business hours. Our 24/7 dispatch means your Phoenix HOA can request enforcement at any time." },
                  { t: "Board Members Stay Out of Conflicts", d: "Shifting enforcement to a professional company means board members are no longer personally confronting neighbors about parking — a major source of HOA tension." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Phoenix HOA Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix HOA parking enforcement operates under a clear Arizona legal framework. Understanding these statutes helps boards enforce confidently and legally:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511 authorizes immediate removal of unauthorized vehicles from private property when proper signage is in place — no prior notice to the vehicle owner is required.",
                  "ARS 9-499.05 establishes the sign specifications that make immediate towing lawful. Non-compliant signage creates legal exposure for the HOA.",
                  "ARS 28-874 requires the towing company to notify local law enforcement within one hour of any private property tow — Axle Towing handles this automatically.",
                  "HOA parking rules must be recorded in the CC&Rs and disclosed to homeowners. Rules that are not in writing or not disclosed are difficult to enforce under Arizona case law.",
                  "The private property impound (PPI) model places all financial responsibility on the vehicle owner, not the HOA — reinforcing that no-cost enforcement is entirely legal in Arizona.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This content is informational and not legal advice. Phoenix HOAs with specific questions about their governing documents should consult a licensed Arizona HOA attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Phoenix HOA Areas We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing provides HOA parking enforcement throughout Phoenix, including:
              </p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common HOA Parking Situations in Phoenix</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Expired Registration or Inoperable Vehicles", d: "One of the most common calls we receive from Phoenix HOAs involves vehicles with expired tags or mechanical issues sitting for weeks in guest or common parking areas. Under Arizona law, these can be removed once the vehicle meets the definition of abandoned." },
                  { t: "RV and Oversized Vehicle Violations", d: "Many Phoenix HOA CC&Rs prohibit RVs, boats, and commercial trucks in driveways or on community streets. These violations are visible, generate the most neighbor complaints, and are among the most challenging to resolve without professional enforcement." },
                  { t: "Permit or Decal Violations", d: "Communities in North Phoenix and Desert Ridge that use permit systems frequently see residents parking without their decal displayed, or using permits belonging to another unit. Axle Towing enforces permit systems for HOAs across Phoenix." },
                  { t: "Guest Parking Abuse", d: "In dense townhome and condo communities near Camelback East and Encanto, residents routinely use guest parking as overflow. Consistent enforcement is the only long-term solution to this problem." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix HOAs Choose Axle Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing has built its reputation in the Phoenix metro by being the towing company that HOA boards can count on without micromanaging. Our program is designed specifically for the Phoenix HOA environment:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Zero cost to the HOA — all fees are paid by the vehicle owner under Arizona's PPI model",
                  "24/7 dispatch covering all of Phoenix, from Ahwatukee to Desert Ridge to Downtown",
                  "Compliant documentation on every tow to protect the HOA from disputes",
                  "Signage consultation to ensure your property meets Arizona's legal requirements before enforcement begins",
                  "Direct coordination with your HOA management company or board",
                  "Fast response times for urgent situations including fire lane and handicap space violations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Whether your Phoenix HOA manages a handful of townhomes or a large master-planned community, Axle Towing provides the same consistent, professional service. For more on setting up a towing program, see our <Link href="/blog/hoa-towing-program-setup-guide" className="text-primary hover:underline">HOA Towing Program Setup Guide</Link> or our overview of <Link href="/audiences/hoa-boards" className="text-primary hover:underline">HOA towing services</Link>.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Improve HOA Parking in Phoenix?</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides free HOA parking enforcement programs for Phoenix communities. Contact us to discuss your property's needs and get a compliant program in place fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Consultation</Link>
                </div>
              </div>

              <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional HOA parking enforcement and private property towing serving Phoenix and the Greater Phoenix metro area since 2021.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix HOA Enforcement</h3>
                  <p className="text-gray-700 text-sm mb-4">Free programs for Phoenix homeowner associations. 24/7 dispatch.</p>
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

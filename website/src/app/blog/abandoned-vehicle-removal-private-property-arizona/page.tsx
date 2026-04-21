import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/optimized/axle-towing-hoa-entrance-arizona-towing-service.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Removing abandoned vehicles from private property in Arizona — Axle Towing signage";
const CANONICAL = "https://axletowing.com/blog/abandoned-vehicle-removal-private-property-arizona";
const ES_URL = "https://axletowing.com/es/blog/remocion-vehiculos-abandonados-propiedad-privada-arizona";
const PUBLISHED = "2026-03-09T00:00:00.000Z";
const MODIFIED = "2026-04-20T00:00:00.000Z";

export const metadata: Metadata = {
  title: "How to Remove Abandoned Vehicles from Private Property in Arizona",
  description:
    "Step-by-step guide to legally removing abandoned vehicles from private property in Arizona. Learn about ARS 28-4801, required notices, timelines, and free removal services.",
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, es: ES_URL },
  },
  openGraph: {
    title: "How to Remove Abandoned Vehicles from Private Property in Arizona",
    description:
      "Step-by-step guide to legally removing abandoned vehicles from private property in Arizona. Learn about ARS 28-4801, required notices, timelines, and free removal services.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Remove Abandoned Vehicles from Private Property in Arizona",
    description:
      "Step-by-step guide to legally removing abandoned vehicles from private property in Arizona.",
    images: [HERO_IMAGE_URL],
  },
};

const RELATED_ARTICLES = [
  {
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title:
      "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    category: "Legal",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "5-signs-apartment-needs-parking-enforcement",
    title:
      "5 Signs Your Apartment Complex Needs Professional Parking Enforcement",
    category: "Property Management",
    readTime: "7 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
  {
    slug: "property-manager-guide-to-towing-contracts",
    title:
      "The Property Manager's Complete Guide to Towing Contracts & Agreements",
    category: "Property Management",
    readTime: "9 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
];

export default function ArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Remove Abandoned Vehicles from Private Property in Arizona",
    description:
      "Step-by-step guide to legally removing abandoned vehicles from private property in Arizona. Learn about ARS 28-4801, required notices, timelines, and free removal services.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Axle Towing & Impound", url: "https://axletowing.com" },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema]) }} />
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              Property Management
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How to Remove Abandoned Vehicles from{" "}
            <span className="text-gradient">Private Property in Arizona</span>
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content - 75% */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  An abandoned vehicle sitting on your property is more than an
                  eyesore &mdash; it takes up valuable parking space, reduces
                  property appeal, can leak hazardous fluids, and attracts
                  vandalism. Arizona law provides a clear legal process for removing
                  abandoned vehicles from private property, but you must follow the
                  correct steps to avoid liability. Here is a complete guide to
                  handling this common property management challenge.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Qualifies as an &ldquo;Abandoned Vehicle&rdquo; in Arizona?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Under Arizona Revised Statutes (ARS 28-4801), a vehicle is
                  considered abandoned on private property if it meets any of the
                  following criteria:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Left on the property without the owner&apos;s or lessee&apos;s consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Inoperable or appears to be inoperable (flat tires, missing parts, obvious damage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Registration has been expired for more than 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Has not been moved for an extended period (visible evidence like dust, debris, flat tires)</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step-by-Step Removal Process
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law requires specific steps to be followed when removing
                  an abandoned vehicle from private property. Skipping any step
                  can expose you to liability from the vehicle owner. Here is the
                  correct process:
                </p>
                <ol className="text-gray-600 space-y-4 my-6 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Document the Vehicle:</strong>{" "}
                      Photograph the vehicle from multiple angles, documenting its
                      condition, license plate (if present), VIN number (visible
                      through the windshield), and its location on your property.
                      Note the date and time of documentation.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Post a Notice on the Vehicle:</strong>{" "}
                      Place a written notice on the vehicle stating that it is
                      considered abandoned and will be towed if not removed within
                      a specified timeframe. Arizona generally requires a minimum
                      of 48 to 72 hours notice, depending on local ordinances.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Contact Local Law Enforcement:</strong>{" "}
                      Report the abandoned vehicle to the local police department
                      or sheriff&apos;s office. They may be able to run the plates
                      and contact the owner. In some municipalities, a police report
                      is required before a tow can proceed.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Contact Your Towing Partner:</strong>{" "}
                      Once the notice period has expired and the vehicle has not been
                      removed, contact your towing company to have the vehicle
                      removed. The towing company handles notification to ADOT and
                      the lien process.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      5
                    </span>
                    <div>
                      <strong className="text-gray-900">Maintain Records:</strong>{" "}
                      Keep copies of all photos, notices, police reports, and towing
                      records for at least three years. This documentation protects
                      you if the vehicle owner later disputes the removal.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Difference Between Abandoned and Unauthorized Vehicles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  It is important to distinguish between abandoned vehicles and
                  simply unauthorized vehicles. An unauthorized vehicle &mdash; such
                  as a non-resident parking in a tenant&apos;s spot &mdash; can be
                  towed immediately if proper signage is posted per ARS 28-3511.
                  No notice period is required for standard unauthorized parking
                  violations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  An abandoned vehicle, on the other hand, may belong to a current
                  resident who has simply stopped maintaining it, or it may belong
                  to someone who has no connection to the property at all. The
                  additional notice requirements exist to give the owner a
                  reasonable opportunity to reclaim their property.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Challenges and Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">No license plate or VIN visible:</strong>{" "}
                  If the vehicle has no identifiable markings, document this fact
                  thoroughly. Contact law enforcement, as they may still be able to
                  identify the vehicle through other means. The notice period still
                  applies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Vehicle belongs to a current tenant:</strong>{" "}
                  If the abandoned vehicle belongs to a current resident, check your
                  lease agreement first. Most leases require vehicles to be operable
                  and properly registered. Follow your lease enforcement procedures
                  in addition to the abandoned vehicle removal process.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Vehicle owner shows up during removal:</strong>{" "}
                  Under Arizona law (ARS 28-3511), if the vehicle owner arrives
                  before the vehicle has left the property, the towing company must
                  release the vehicle. A reasonable drop fee may be charged.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Environmental Concerns
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Abandoned vehicles can leak oil, coolant, brake fluid, and other
                  hazardous materials onto your parking lot. In Arizona&apos;s heat,
                  these fluids break down asphalt and create stains that are
                  expensive to remediate. If contamination reaches storm drains,
                  you could face environmental fines from the city or the Arizona
                  Department of Environmental Quality (ADEQ).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Prompt removal of abandoned vehicles prevents these environmental
                  issues and the associated costs.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Prevention Through Professional Enforcement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The best way to deal with abandoned vehicles is to prevent them
                  from accumulating in the first place. Properties with professional
                  parking enforcement rarely have abandoned vehicle problems because
                  regular patrols identify vehicles early &mdash; before they sit
                  for weeks or months. Issues are addressed when a vehicle first
                  shows signs of being inoperable, rather than after it has become
                  a permanent fixture.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help Removing an Abandoned Vehicle?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} handles abandoned vehicle removal as part of our
                    free parking enforcement program. We manage the entire process
                    &mdash; documentation, notices, law enforcement coordination,
                    and removal &mdash; at no cost to property owners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/services/private-property-impounds" className="btn-cta">
                      Private Property Impound Services
                    </Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Experts in abandoned vehicle removal under Arizona law.</p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{platform}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link key={article.title} href={`/blog/${article.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{article.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-700 text-sm mb-4">Talk to our abandoned vehicle specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll survey your property and identify any abandoned vehicles that need removal.</p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={`/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <span className="text-xs text-gray-600 mt-2 inline-block">{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

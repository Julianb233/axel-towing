import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Choose the Right Towing Company for Your Property",
  description:
    "A comprehensive guide for property managers on selecting a professional towing partner. Learn what to look for in licensing, insurance, response times, and contract terms in Arizona.",
};

const RELATED_ARTICLES = [
  {
    slug: "property-manager-guide-to-towing-contracts",
    title:
      "The Property Manager's Complete Guide to Towing Contracts & Agreements",
    category: "Property Management",
    readTime: "9 min",
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
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title:
      "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    category: "Legal",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              Property Management
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How to Choose the Right Towing Company{" "}
            <span className="text-gradient">
              for Your Property
            </span>
          </h1>
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
                  Selecting a towing company for your property is one of the most
                  important decisions a property manager can make. The right partner
                  protects your tenants, your property values, and your legal standing.
                  The wrong one creates headaches, liability, and angry residents. This
                  guide walks you through everything you need to evaluate before signing
                  on the dotted line.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Start with Licensing and Insurance
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In Arizona, towing companies must carry specific licenses and
                  insurance to operate legally. Before considering any other factor,
                  verify that any company you are evaluating meets these baseline
                  requirements:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Valid Arizona Department of Transportation (ADOT) registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commercial general liability insurance (minimum $1 million recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Garage keeper&apos;s legal liability insurance (covers damage to towed vehicles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Workers&apos; compensation coverage for all employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Active city business license for each municipality where they operate</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Ask for certificates of insurance and verify them with the issuing
                  carrier. A reputable company will provide these documents without
                  hesitation. If a company is reluctant to share their insurance
                  information, consider it a red flag and move on.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Evaluate Their Private Property Experience
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Private property towing is fundamentally different from roadside
                  assistance or accident recovery. The legal requirements, the
                  customer interactions, and the operational procedures are entirely
                  different. You want a company that specializes in private property
                  work, not one that treats it as a sideline.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Key questions to ask about their private property experience:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>How many private property contracts do they currently manage?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Can they provide references from similar properties (apartments, HOAs, commercial)?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Do they understand ARS 28-3511 signage requirements inside and out?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>What is their process for handling vehicle owner disputes?</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Response Times Matter More Than You Think
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  When a vehicle is blocking a fire lane or a tenant calls about
                  an unauthorized vehicle in their assigned spot, response time is
                  critical. The best towing companies offer 24/7 availability with
                  guaranteed response times, typically 30 to 60 minutes anywhere
                  in the Phoenix metro area.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Ask about their fleet size and coverage area. A company with
                  multiple trucks stationed throughout Phoenix, Scottsdale, Mesa,
                  Tempe, Chandler, Gilbert, and Glendale will consistently deliver
                  faster response times than one operating from a single location.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Understand the Cost Structure
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  One of the most common misconceptions is that parking enforcement
                  is an expense for property owners. In the private property towing
                  model, the towing company recovers its costs from the vehicle
                  owners who violate parking rules &mdash; not from the property
                  owner. This means:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No setup fees for signage installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No monthly retainer or patrol fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No per-tow charges billed to the property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No hidden administrative charges</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If a towing company is asking you to pay for enforcement services,
                  they are using an outdated business model. Reputable private property
                  towing companies operate at zero cost to the property owner.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Signage and Legal Compliance
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law has specific requirements for private property towing
                  signage under ARS 28-3511. Your towing partner should handle all
                  signage installation and ensure ongoing compliance. Signs must
                  include the towing company&apos;s name, phone number, and impound
                  lot address. They must be posted at every vehicle entrance to the
                  property and be clearly visible and readable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The towing company should also stay current on any changes to
                  local ordinances in your specific municipality, whether that is
                  Phoenix, Scottsdale, Mesa, or any other city in the metro area.
                  Each city may have additional requirements beyond state law.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Professionalism and Communication
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your towing company represents your property to residents and
                  visitors. Their drivers interact with frustrated vehicle owners
                  on your property. Professionalism is not optional &mdash; it is
                  essential.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Look for companies that provide uniformed drivers, clearly marked
                  trucks, and professional communication. They should offer a
                  dedicated point of contact for your property, regular enforcement
                  reports, and a streamlined process for handling disputes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Red Flags to Watch For
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Unwillingness to provide proof of insurance or licensing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Pressure to sign long-term contracts without a trial period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>No references from current private property clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Charging property owners for enforcement services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>History of complaints with the Arizona Attorney General&apos;s office</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Looking for a Trusted Towing Partner?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} has been providing free private property towing
                    and parking enforcement across the Phoenix metro area since 2021.
                    Fully licensed, insured, and trusted by apartment complexes, HOAs,
                    and commercial properties throughout the Valley.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/contact"
                      className="btn-cta"
                    >
                      Request Free Assessment
                    </Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">
                      AT
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Axle Towing &amp; Impound
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Licensed, insured, and committed to helping property
                        managers maintain safe, organized parking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                        >
                          {platform}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 25% */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link
                        key={article.title}
                        href={
                          article.slug === "#"
                            ? "#"
                            : `/blog/${article.slug}`
                        }
                        className="block group"
                      >
                        <div
                          className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`}
                        />
                        <span className="text-xs text-primary font-semibold uppercase">
                          {article.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Talk to our property management specialists today.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="btn-primary text-sm w-full"
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    Free Property Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We&apos;ll evaluate your property&apos;s parking needs and
                    recommend a custom enforcement program.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link
                key={article.title}
                href={
                  article.slug === "#" ? "#" : `/blog/${article.slug}`
                }
                className="glass-card-white rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-600 mt-2 inline-block">
                    {article.readTime} read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

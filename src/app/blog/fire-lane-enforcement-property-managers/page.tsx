import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fire Lane Enforcement: A Property Manager's Legal Obligation",
  description:
    "Learn about fire lane enforcement requirements for Arizona property managers. Understand your legal obligations under ARS 28-884, liability risks, and how professional towing protects your property.",
};

const RELATED_ARTICLES = [
  {
    slug: "handicap-parking-enforcement-private-property",
    title:
      "ADA Handicap Parking Enforcement on Private Property: What You Need to Know",
    category: "Property Management",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "parking-lot-signage-requirements-arizona",
    title: "Arizona Parking Lot Signage Requirements: A Complete Guide",
    category: "Property Management",
    readTime: "7 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
  {
    slug: "nighttime-parking-enforcement-strategies",
    title:
      "Nighttime Parking Enforcement: Strategies for 24/7 Property Protection",
    category: "Property Management",
    readTime: "7 min",
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
            Fire Lane Enforcement:{" "}
            <span className="text-gradient">
              A Property Manager&apos;s Legal Obligation
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
                  Fire lane enforcement is not optional for property managers in
                  Arizona &mdash; it is a legal obligation with serious consequences
                  for non-compliance. Blocked fire lanes delay emergency response,
                  endanger lives, and expose property owners to significant legal
                  liability. Here is what every property manager needs to know
                  about fire lane enforcement requirements and how to implement
                  them effectively.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Fire Lane Laws: What ARS 28-884 Requires
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona Revised Statutes section 28-884 prohibits stopping,
                  standing, or parking a vehicle in a fire lane. This statute
                  applies to both public and private property. For property
                  managers, this means you have a legal duty to ensure fire lanes
                  on your property remain clear at all times.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Violations under ARS 28-884 can result in fines of up to $250
                  per occurrence, and the vehicle can be towed immediately without
                  prior warning. Unlike standard parking violations where you might
                  issue a warning first, fire lane violations are considered
                  immediate safety hazards.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In addition to state law, local fire codes in Phoenix, Scottsdale,
                  Mesa, and other Valley cities impose their own requirements for
                  fire lane marking, signage, and enforcement. Your local fire
                  marshal can provide specific requirements for your municipality.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Liability Risk You Cannot Afford to Ignore
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Consider this scenario: A fire breaks out in a unit at your
                  apartment complex. The fire department arrives, but a large SUV
                  is parked in the fire lane directly in front of the building.
                  The fire truck cannot position its ladder, and the crew must set
                  up from a less optimal position. The delay allows the fire to
                  spread, causing additional damage and potentially injuring
                  residents.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In this situation, the property owner could face:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Negligence lawsuits from injured residents or their families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Insurance claim denials if the insurer determines you failed to enforce fire lanes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Fire code violation citations from the local fire marshal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Fines from the city, potentially reaching thousands of dollars for repeat violations</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Proper Fire Lane Marking Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona fire codes require fire lanes to be clearly marked and
                  maintained. The specific requirements include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Red curb markings with &ldquo;NO PARKING &mdash; FIRE LANE&rdquo; stenciled in white</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Signs posted at regular intervals (typically every 50 feet) along the fire lane</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum width of 20 feet for fire apparatus access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum vertical clearance of 13 feet 6 inches for fire truck access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reflective signage or markings visible at night</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Paint fades, especially in Arizona&apos;s intense sun. Property
                  managers should schedule fire lane repainting at least annually,
                  or more frequently in high-traffic areas.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Implementing Professional Fire Lane Enforcement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Professional towing companies handle fire lane enforcement as
                  part of their overall parking management program. Here is what
                  effective fire lane enforcement looks like in practice:
                </p>
                <ol className="text-gray-600 space-y-4 my-6 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Regular Patrols:</strong>{" "}
                      Fire lanes are checked during every patrol, typically multiple
                      times per day and through the night.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Immediate Towing:</strong>{" "}
                      Fire lane violations are towed immediately without warning.
                      There is no grace period for safety violations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Documentation:</strong>{" "}
                      Every fire lane tow is photographed and documented, providing
                      evidence of enforcement in case of disputes or inspections.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Law Enforcement Notification:</strong>{" "}
                      Per ARS 28-3511, local law enforcement is notified within two
                      hours of every tow.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Communicating Fire Lane Rules to Residents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Even with professional enforcement, communication is key. Include
                  fire lane rules in your lease agreements, post reminders in common
                  areas, and send periodic notifications reminding residents that
                  fire lane parking results in immediate towing. Emphasize that this
                  is a safety issue, not just a convenience issue.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many residents do not realize the severity of fire lane violations.
                  A brief educational campaign explaining that blocked fire lanes
                  can delay emergency response by critical minutes often generates
                  voluntary compliance from the majority of residents.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Fire Marshal Inspections
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Local fire marshals conduct periodic inspections of multi-family
                  and commercial properties. If they find vehicles in fire lanes
                  or fire lanes that are improperly marked, the property owner
                  receives a violation notice and must correct the issue within a
                  specified timeframe. Repeat violations can result in escalating
                  fines and, in extreme cases, occupancy restrictions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Having a professional towing company on contract demonstrates to
                  the fire marshal that you take fire lane enforcement seriously.
                  Documentation of regular patrols and enforcement actions serves
                  as evidence of your compliance efforts.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Protect Your Property with Professional Fire Lane Enforcement
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides comprehensive fire lane enforcement
                    as part of our free parking management program. We ensure your
                    fire lanes are properly marked, regularly patrolled, and strictly
                    enforced &mdash; protecting your residents and your liability.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/services/parking-enforcement" className="btn-cta">
                      Parking Enforcement Services
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
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">
                        Professional private property towing and parking enforcement
                        serving the Greater Phoenix metro area since 2021. Keeping
                        fire lanes clear and communities safe.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 25% */}
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
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-700 text-sm mb-4">Talk to our fire lane enforcement specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Compliance Audit</h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We&apos;ll inspect your fire lanes and signage to ensure full
                    compliance with Arizona fire codes.
                  </p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">
                    Get Free Audit
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

import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Student Housing Parking Enforcement Near ASU and Arizona Universities",
  description:
    "How student housing communities near ASU, GCU, and Arizona universities can manage parking. Covers permit systems, unauthorized vehicle removal, and free enforcement programs for property owners.",
};

const RELATED_ARTICLES = [
  {
    slug: "apartment-complex-parking-management-guide",
    title: "The Complete Guide to Apartment Complex Parking Management in Phoenix",
    category: "Commercial Towing",
    readTime: "12 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "HOA",
    readTime: "10 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "multi-tenant-commercial-parking-disputes",
    title: "Resolving Multi-Tenant Commercial Parking Disputes: A Manager&rsquo;s Playbook",
    category: "Commercial Towing",
    readTime: "9 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
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
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Commercial Towing</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Student Housing Parking Enforcement{" "}
            <span className="text-gradient">Near ASU and Arizona Universities</span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Student housing parking near Arizona&apos;s universities is a
                  unique beast. Between ASU&apos;s Tempe campus (the largest
                  public university in the country by enrollment), Grand Canyon
                  University&apos;s rapidly expanding campus in west Phoenix,
                  and the University of Arizona&apos;s satellite locations,
                  student housing communities face parking challenges that
                  standard apartment complexes never encounter. High vehicle
                  density, frequent guest traffic, semester-based turnover,
                  and the irresistible temptation for non-residents to park in
                  your lot and walk to campus all create a parking management
                  nightmare. Here is how to solve it.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Student Housing Parking Is So Challenging
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Student housing communities face a combination of factors
                  that make parking management exceptionally difficult:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High vehicle-per-unit ratios &mdash; multiple roommates often mean 3-4 cars per apartment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Frequent guests and social gatherings that fill lots on weekends and evenings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Non-residents parking in your lot to avoid expensive campus parking fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Semester turnover that disrupts permit systems and creates registration gaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Game day and event parking overflow from nearby campus venues</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Campus Parking Overflow Problem
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  University parking is expensive and limited. ASU daily
                  parking permits can cost $10 or more, and semester passes
                  run into the hundreds. Students, faculty, and visitors
                  quickly learn which nearby apartment complexes and businesses
                  have unmonitored lots, and they exploit them. A student
                  housing community within walking distance of campus that
                  does not enforce parking will lose a significant portion of
                  its spaces to campus overflow every single day.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This is particularly severe near ASU&apos;s Tempe campus
                  along University Drive, Apache Boulevard, and Rural Road.
                  The same pattern plays out near GCU&apos;s campus along
                  Camelback Road and 33rd Avenue, and near NAU&apos;s
                  satellite locations throughout the Valley.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Building an Effective Student Housing Parking Program
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Implement a permit system:</strong>{" "}
                      Issue parking permits (hang tags or stickers) to each resident for their registered vehicles. Limit the number of permits per unit based on your lot capacity. This is the single most important step.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Create a guest parking policy:</strong>{" "}
                      Designate specific guest spaces or require residents to register guest vehicles in advance. Limit overnight guest parking to a set number of nights per month.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Partner with a towing company:</strong>{" "}
                      Establish a formal towing agreement with a licensed company like {COMPANY.name}. Post compliant signage at every entrance. Enforce daily.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Align permits with lease terms:</strong>{" "}
                      Issue permits on a semester or lease-term basis. Require permit updates when vehicles change. Deactivate permits immediately when a tenant moves out.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <div>
                      <strong className="text-gray-900">Enforce consistently:</strong>{" "}
                      The biggest mistake student housing managers make is inconsistent enforcement. Students test boundaries. If towing is sporadic, the word spreads fast that your lot is fair game.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Game Day and Event Parking Management
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If your student housing community is near ASU&apos;s Sun
                  Devil Stadium, Desert Financial Arena, or any major campus
                  venue, game days and events create massive parking demand.
                  Football Saturdays, basketball games, concerts, and
                  graduation ceremonies can overwhelm your lot within minutes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  For event days, consider increasing towing presence during
                  the hours before and after events, posting temporary
                  additional signage warning of active enforcement, having
                  staff or security present to direct residents and deter
                  unauthorized parking, and communicating with residents
                  in advance about expected parking pressure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Communicating with Student Residents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  For many students, your property is their first time living
                  away from home. They may not understand parking enforcement
                  or take it seriously until consequences occur. Effective
                  communication is essential:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cover parking rules thoroughly during lease signing and move-in orientation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Use digital channels (text, email, app notifications) that students actually check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Post reminders at the start of each semester when new students move in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Make the permit registration process quick and easy &mdash; students procrastinate, so reduce friction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Be firm but fair &mdash; students respect consistent enforcement more than harsh rhetoric</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Move-In and Move-Out Season
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  August move-in and May move-out are the most chaotic
                  periods for student housing parking. Moving trucks, parents&apos;
                  vehicles, and temporary overflow can create gridlock. Plan
                  for these periods by designating temporary loading zones,
                  staggering move-in times, suspending normal enforcement for
                  moving vehicles (but maintaining it for unauthorized
                  non-moving vehicles), and having extra towing availability
                  on standby for vehicles that block access.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help with Student Housing Parking?</h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free parking enforcement for
                    student housing communities near ASU, GCU, and universities
                    across the Phoenix metro area. We understand the unique
                    challenges of student populations and offer consistent,
                    professional enforcement at zero cost to property owners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/apartment-towing" className="btn-cta">Apartment Towing Services</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Trusted by student housing communities near ASU, GCU, and universities across Arizona.</p>
                    </div>
                  </div>
                </div>

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
                      <Link key={article.title} href={article.slug === "#" ? "#" : `/blog/${article.slug}`} className="block group">
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our student housing parking specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free Parking Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll evaluate your community&apos;s parking needs and recommend a custom enforcement program.</p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={article.slug === "#" ? "#" : `/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
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

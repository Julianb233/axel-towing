import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Church and Religious Facility Parking Enforcement: Balancing Grace and Order",
  description:
    "How Phoenix churches and religious facilities can manage parking during services and events. Covers community-friendly enforcement, signage requirements, and free towing programs.",
};

const RELATED_ARTICLES = [
  {
    slug: "medical-facility-parking-enforcement",
    title: "Medical Facility Parking Enforcement: Ensuring Patient Access Comes First",
    category: "Commercial Towing",
    readTime: "9 min",
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
    slug: "apartment-complex-parking-management-guide",
    title: "The Complete Guide to Apartment Complex Parking Management in Phoenix",
    category: "Commercial Towing",
    readTime: "12 min",
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
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Church &amp; Religious Facility Parking Enforcement:{" "}
            <span className="text-gradient">Balancing Grace and Order</span>
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
                  Churches and religious facilities hold a unique place in
                  their communities. They are places of welcome, compassion,
                  and gathering. But that welcoming spirit can become a problem
                  when unauthorized vehicles take over parking lots that your
                  congregation needs &mdash; especially during Sunday services,
                  holiday events, and community gatherings. Across Phoenix,
                  Scottsdale, Mesa, and the East Valley, churches face growing
                  parking pressure from neighboring businesses, commuters, and
                  overnight parkers. This guide explains how to protect your
                  parking while maintaining the grace and hospitality your
                  community is known for.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Unique Parking Challenges Churches Face
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Church parking is different from commercial or residential
                  parking because of its intermittent, high-volume nature. Your
                  lot may sit mostly empty during the week, which makes it an
                  attractive target for unauthorized parking. But when services
                  and events occur, you need every single space available for
                  your congregation and visitors.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Neighboring businesses use your lot as overflow during the workweek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commuters park all day and take public transit from your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Overnight parkers and abandoned vehicles accumulate during the week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Event-goers from nearby venues use your lot during concerts, games, or festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Construction workers from nearby projects park in your lot during the day</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  A Grace-First Approach to Enforcement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Churches can implement effective parking enforcement without
                  compromising their values. The key is a graduated, clearly
                  communicated approach that gives people every opportunity to
                  comply before enforcement action is taken.
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Clear Signage:</strong>{" "}
                      Post friendly but firm signs at every entrance explaining parking rules. Language like &ldquo;Church parking only during services and events&rdquo; or &ldquo;Unauthorized vehicles will be towed&rdquo; sets clear expectations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Warning Period:</strong>{" "}
                      When you first implement enforcement, start with courtesy notices on unauthorized vehicles for 2-4 weeks. This gives habitual parkers time to find alternatives.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Active Enforcement:</strong>{" "}
                      After the warning period, begin towing vehicles that violate the posted rules. Consistency is key &mdash; sporadic enforcement invites continued abuse.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Community Communication:</strong>{" "}
                      Announce the parking policy from the pulpit, in newsletters, and on your website. When your congregation understands why enforcement exists, they support it.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Legal Requirements for Church Towing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Churches are private property, and the same ARS 28-3511
                  requirements that apply to commercial and residential
                  properties apply to religious facilities. You need proper
                  signage at every entrance, a written towing agreement with
                  a licensed company, and authorization from church leadership
                  for each tow. Your towing partner handles signage
                  installation and compliance at no cost.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Managing Parking During High-Attendance Events
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Christmas Eve, Easter, vacation Bible school, weddings,
                  funerals, and community events all create peak parking
                  demand. For these occasions, consider supplementing your
                  regular lot with overflow parking at nearby businesses
                  (with their permission), using volunteer parking attendants
                  to direct traffic, setting up a shuttle service from
                  remote lots, and temporarily suspending towing enforcement
                  for extra vehicles that overflow into less critical areas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Planning for peak events in advance prevents chaos and
                  ensures your congregation has a positive experience even
                  when parking is tight.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Shared Parking Agreements with Neighbors
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many churches find that their peak parking times do not
                  overlap with neighboring businesses. A Sunday-morning church
                  lot is empty during weekday business hours, and a
                  weekday-busy office lot is empty on weekends. Formal shared
                  parking agreements can benefit both parties &mdash; the
                  church gets overflow access during peak services, and the
                  neighboring business gets additional spaces during the week.
                  These agreements should be documented in writing and include
                  clear terms about insurance, liability, and maintenance.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Security and Safety Considerations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Unauthorized parking at churches is not just a convenience
                  issue &mdash; it can be a security concern. Unfamiliar
                  vehicles in the lot, especially overnight, can indicate
                  vandalism risk, illegal activity, or safety hazards. Regular
                  parking enforcement helps maintain a safe environment for
                  your congregation and staff. Well-lit lots, security cameras,
                  and consistent towing of unauthorized vehicles all contribute
                  to a safer property.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help with Church Parking?</h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free parking enforcement for
                    churches and religious facilities across the Phoenix metro
                    area. We work respectfully with your leadership to create
                    a program that protects your parking while honoring your
                    community values.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/commercial-property-towing" className="btn-cta">Commercial Towing Services</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Trusted by churches, schools, and community organizations across Arizona.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our parking enforcement team today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Parking Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll evaluate your facility&apos;s parking needs and recommend a respectful enforcement program.</p>
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

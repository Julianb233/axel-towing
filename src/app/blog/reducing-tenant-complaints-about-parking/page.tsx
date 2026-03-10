import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Professional Parking Enforcement Reduces Tenant Complaints by 90%",
  description:
    "Discover how professional parking enforcement dramatically reduces tenant complaints at apartment complexes. Data-backed strategies for Phoenix-area property managers.",
};

const RELATED_ARTICLES = [
  {
    slug: "5-signs-apartment-needs-parking-enforcement",
    title:
      "5 Signs Your Apartment Complex Needs Professional Parking Enforcement",
    category: "Property Management",
    readTime: "7 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
  {
    slug: "property-value-impact-parking-enforcement",
    title:
      "How Parking Enforcement Increases Property Values: Data-Backed Analysis",
    category: "Property Management",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "how-to-choose-towing-company-for-property",
    title: "How to Choose the Right Towing Company for Your Property",
    category: "Property Management",
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
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How Professional Parking Enforcement{" "}
            <span className="text-gradient">
              Reduces Tenant Complaints by 90%
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
                  Parking complaints are the number one source of tenant frustration
                  at apartment complexes across the Phoenix metro area. But property
                  managers who implement professional parking enforcement consistently
                  report a dramatic drop in complaints &mdash; often by 90% or more
                  within the first 90 days. Here is how it works and why the results
                  are so dramatic.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Real Cost of Parking Complaints
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before diving into the solution, it is worth understanding what
                  parking complaints actually cost your property. The direct costs
                  are easy to miss because they are spread across multiple areas:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Staff time:</strong> Each parking complaint takes 15&ndash;30 minutes of management time to investigate and respond to</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Negative reviews:</strong> Frustrated tenants leave 1-star reviews mentioning parking, driving away prospective renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Turnover costs:</strong> Tenants who leave due to parking frustration cost $1,000&ndash;$5,000 each in vacancy and turnover expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Liability risk:</strong> Blocked fire lanes and ADA violations create legal exposure</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  For a 200-unit apartment complex receiving 20 parking complaints
                  per month, the annual cost easily exceeds $25,000 when you factor
                  in staff time, turnover, and lost revenue from negative reviews.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Self-Enforcement Fails
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many property managers try to handle parking enforcement internally
                  before bringing in professionals. The typical approach involves
                  placing warning stickers on vehicles, sending reminder emails to
                  tenants, and occasionally calling a tow truck on a one-off basis.
                  This approach fails for several predictable reasons:
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Inconsistency breeds resentment.</strong>{" "}
                  When enforcement is sporadic, tenants who get cited feel singled out
                  while watching others get away with the same violations. This
                  creates more complaints, not fewer.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Staff become the bad guys.</strong>{" "}
                  When your leasing staff or maintenance team is responsible for
                  enforcement, their relationship with residents suffers. Tenants
                  avoid the office, resist renewing leases, and direct their anger
                  at the people they interact with daily.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Legal compliance gaps.</strong>{" "}
                  Arizona&apos;s private property towing laws under ARS 28-3511
                  require specific signage, notification procedures, and
                  documentation. Property managers who handle enforcement ad hoc
                  frequently miss these requirements, exposing the property to
                  liability.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Professional Enforcement Difference
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Professional parking enforcement works because it addresses the
                  root causes of parking problems rather than just reacting to
                  individual incidents. Here is what changes when you bring in a
                  professional towing partner:
                </p>
                <ol className="text-gray-600 space-y-4 my-6 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Deterrence Through Visibility:</strong>{" "}
                      Compliant signage at every entrance and throughout the property
                      sends an immediate message. Most unauthorized parking stops
                      before it starts simply because the signs are there.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Consistent Patrols:</strong>{" "}
                      Regular, scheduled patrols mean that violations are caught
                      consistently. Residents learn that the rules apply to everyone,
                      equally, every time.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Third-Party Objectivity:</strong>{" "}
                      When a professional towing company handles enforcement, your
                      staff is no longer the target of resident anger. The enforcement
                      is impersonal and rule-based, which residents accept more easily.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Legal Protection:</strong>{" "}
                      Professional companies maintain compliance with ARS 28-3511
                      and local ordinances, protecting your property from liability.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The 90-Day Transformation Timeline
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Based on our experience with apartment complexes across Phoenix,
                  Scottsdale, Mesa, Tempe, Chandler, and Gilbert, here is the typical
                  complaint reduction timeline after implementing professional
                  enforcement:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Week 1&ndash;2:</strong> Signage installed, tenants notified of new enforcement policy. Complaints may temporarily increase as residents test the new system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Week 3&ndash;4:</strong> First enforcement actions occur. Word spreads that the rules are being enforced. Unauthorized parking drops by 40&ndash;50%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Month 2:</strong> Consistent enforcement creates a new normal. Complaints drop by 60&ndash;70% as residents see the system working.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Month 3:</strong> The parking lot runs itself. Complaints are down 85&ndash;95%. The few remaining issues are handled quickly by the towing partner.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Tenant Satisfaction Multiplier Effects
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The benefits of reduced parking complaints extend far beyond the
                  parking lot. When tenants stop worrying about parking, they report
                  higher overall satisfaction with the property. Lease renewal rates
                  increase. Online reviews improve. And your staff can spend their
                  time on activities that actually grow the property&apos;s value
                  instead of mediating parking disputes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Properties that implement professional enforcement often see a
                  measurable improvement in their Google and Yelp ratings within
                  six months, as the volume of parking-related negative reviews
                  drops to near zero.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  It Costs You Nothing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The most compelling aspect of professional parking enforcement
                  is the cost &mdash; or rather, the lack of cost. Companies like{" "}
                  {COMPANY.name} provide all enforcement services at zero cost to
                  property owners. Signage, patrols, towing, and reporting are all
                  included. The towing fees are collected from vehicle owners who
                  violate the posted rules, not from the property.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This means you get a 90% reduction in tenant complaints, improved
                  retention rates, better online reviews, and reduced liability
                  &mdash; all without spending a dollar.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Ready to Eliminate Parking Complaints?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} helps apartment complexes across the Phoenix
                    metro area reduce parking complaints by 90% or more. Our
                    professional enforcement services are completely free for
                    property owners. Call today to get started.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/services/apartment-towing"
                      className="btn-cta"
                    >
                      Apartment Towing Services
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
                        2021. Trusted by apartment communities to deliver results.
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
                        href={`/blog/${article.slug}`}
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
                    Talk to our parking enforcement specialists today.
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
                    We&apos;ll evaluate your property&apos;s parking situation and
                    show you exactly how enforcement will reduce complaints.
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
                href={`/blog/${article.slug}`}
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

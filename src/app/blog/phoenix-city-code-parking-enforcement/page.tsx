import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Phoenix City Code SEC 36-144: Parking Enforcement Rules Decoded",
  description:
    "Understand Phoenix City Code SEC 36-144 and how it governs parking enforcement on private property. Learn about local regulations, signage rules, and how Phoenix ordinances work alongside Arizona state towing laws.",
};

const RELATED_ARTICLES = [
  {
    slug: "arizona-towing-laws-ars-28-3511-explained",
    title:
      "Arizona Towing Laws: ARS 28-3511 Explained in Plain English",
    category: "Arizona Towing Laws",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "arizona-fire-lane-towing-laws",
    title:
      "Arizona Fire Lane Laws: When You Can (and Must) Tow Violators",
    category: "Arizona Towing Laws",
    readTime: "7 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "arizona-handicap-parking-laws-private-property",
    title:
      "Arizona Handicap Parking Laws on Private Property: Complete Legal Guide",
    category: "Arizona Towing Laws",
    readTime: "8 min",
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
              Arizona Towing Laws
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Phoenix City Code SEC 36-144:{" "}
            <span className="text-gradient">
              Parking Enforcement Rules Decoded
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
                  If you manage property in Phoenix, you need to understand both
                  Arizona state towing laws and Phoenix&apos;s local municipal
                  code. Phoenix City Code SEC 36-144 adds local requirements on
                  top of the state-level regulations found in ARS 28-3511. This
                  article explains what SEC 36-144 covers, how it interacts with
                  state law, and what property owners in Phoenix specifically need
                  to know to run a compliant parking enforcement program.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Is Phoenix City Code SEC 36-144?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Phoenix City Code Section 36-144 is the local ordinance that
                  governs parking on private property within the City of Phoenix.
                  While Arizona state law (ARS 28-3511) establishes the baseline
                  rules for private property towing statewide, SEC 36-144 adds
                  Phoenix-specific requirements that property owners and towing
                  companies must follow when operating within city limits. These
                  local regulations address signage specifications, notification
                  requirements, and operating standards that apply specifically to
                  the Phoenix jurisdiction.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Property owners in other Phoenix metro cities &mdash; such as
                  Scottsdale, Mesa, Tempe, and Chandler &mdash; should check
                  their own city codes, as each municipality may have its own
                  local requirements in addition to the state statutes. However,
                  SEC 36-144 is particularly significant because Phoenix is the
                  largest city in the metro area and the fifth-largest city in the
                  United States.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Key Provisions of SEC 36-144
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  SEC 36-144 addresses several important aspects of parking
                  enforcement on private property. Here are the key provisions
                  that property owners and managers need to understand:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Signage requirements:</strong> Phoenix may impose additional sign specifications beyond state requirements, including minimum size, font height, placement height, and reflectivity standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Towing company licensing:</strong> The ordinance may require towing companies operating within Phoenix to hold both state and city business licenses and comply with local operational standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Fee regulations:</strong> Phoenix may set local fee caps or require specific fee disclosures beyond what state law mandates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Storage facility requirements:</strong> Standards for impound lot operations, including security, lighting, hours of operation, and vehicle release procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>Complaint procedures:</strong> Local procedures for vehicle owners to file complaints about potentially unlawful tows</span>
                  </li>
                </ul>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Key Fact: State Law + City Code = Full Compliance
                  </h3>
                  <p className="text-gray-600">
                    Property owners in Phoenix must comply with both ARS 28-3511
                    (state law) and SEC 36-144 (city code). Your towing company
                    should be well-versed in both sets of requirements.{" "}
                    {COMPANY.name} ensures full compliance with all applicable
                    state and local regulations across every property we service.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How SEC 36-144 Interacts with State Law
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Phoenix City Code SEC 36-144 operates alongside Arizona state
                  law, not in place of it. When there is a conflict between state
                  and local law, the stricter requirement generally applies. This
                  means property owners must meet the higher standard, whether
                  that comes from state or city regulations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In practice, this dual-compliance requirement affects several
                  areas:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Signage:</strong> If Phoenix requires larger signs or additional information compared to state law, the Phoenix standard must be met</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Notification:</strong> If local ordinances require faster notification to vehicle owners than state law, the local timeline applies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Fees:</strong> If Phoenix sets a lower fee cap than state regulations, the lower cap governs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Licensing:</strong> Towing companies must hold both state credentials and any required Phoenix business licenses</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Practical Steps for Phoenix Property Owners
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you own or manage property within the City of Phoenix, here
                  are the practical steps to ensure your parking enforcement
                  program fully complies with SEC 36-144:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Partner with a Local Expert:</strong>{" "}
                      Choose a towing company that operates specifically within Phoenix and understands both state and local requirements. An out-of-area company may not be familiar with SEC 36-144&apos;s specific provisions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Verify Signage Compliance:</strong>{" "}
                      Have your towing partner audit your existing signage to ensure it meets both state and Phoenix-specific requirements. Replace or upgrade any signs that fall short.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Review Your Towing Agreement:</strong>{" "}
                      Ensure your contract with the towing company references compliance with both ARS 28-3511 and Phoenix City Code SEC 36-144. The agreement should clearly state that the towing company is responsible for maintaining all required licenses.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Stay Informed:</strong>{" "}
                      Municipal codes can be updated by city council action. Work with a towing partner that monitors regulatory changes and proactively updates your program when requirements change.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Enforcement in Other Phoenix Metro Cities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  While this article focuses on Phoenix City Code SEC 36-144,
                  property owners in the broader Phoenix metro area should be
                  aware that other cities have their own local ordinances.
                  Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Glendale each
                  may have municipal codes that add requirements beyond state law.
                  If your property portfolio spans multiple cities, your towing
                  partner should be familiar with the specific requirements in
                  each jurisdiction.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help with Phoenix Parking Enforcement?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} is a Phoenix-based towing company that
                    understands both Arizona state law and Phoenix City Code SEC
                    36-144 inside and out. We handle all compliance requirements
                    so you do not have to worry about them &mdash; and our
                    services are completely free for property owners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/services/parking-enforcement"
                      className="btn-cta"
                    >
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
                      <h4 className="font-bold text-gray-900">
                        Axle Towing &amp; Impound
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Fully licensed and compliant with all state and
                        local regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
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
                  <p className="text-gray-500 text-sm mb-4">
                    Questions about Phoenix parking enforcement?
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
                  <h3 className="font-bold mb-2">
                    Free Property Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We&apos;ll evaluate your Phoenix property and ensure full
                    compliance with state and city codes.
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
                  <span className="text-xs text-gray-400 mt-2 inline-block">
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

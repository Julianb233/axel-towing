import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arizona Abandoned Vehicle Laws: Timelines, Procedures, and Your Rights",
  description:
    "Complete guide to Arizona abandoned vehicle laws under ARS 28-4141 through 28-4145. Learn the legal timelines, notification requirements, lien procedures, and property owner rights for abandoned vehicles in Phoenix.",
};

const RELATED_ARTICLES = [
  {
    slug: "arizona-vehicle-lien-laws-towing-companies",
    title:
      "Arizona Vehicle Lien Laws for Towing Companies: A Legal Overview",
    category: "Arizona Towing Laws",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "arizona-private-property-towing-rights",
    title:
      "Your Rights: Arizona Private Property Towing Laws for Property Owners",
    category: "Arizona Towing Laws",
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
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Arizona Abandoned Vehicle Laws:{" "}
            <span className="text-gradient">
              Timelines, Procedures, and Your Rights
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
                  Abandoned vehicles are a persistent problem for property owners
                  and managers across the Phoenix metro area. Whether it&apos;s a
                  car left behind by a former tenant, a vehicle that has been
                  sitting inoperable for months, or a mystery car that appeared in
                  your lot overnight, Arizona law provides clear procedures for
                  dealing with abandoned vehicles. This guide covers the legal
                  definition, required timelines, notification procedures, and
                  your rights under ARS 28-4141 through ARS 28-4145.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Qualifies as an Abandoned Vehicle in Arizona?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Under Arizona Revised Statutes 28-4141 through 28-4145, a
                  vehicle is considered abandoned when it meets specific criteria
                  established by law. Understanding these criteria is the first
                  step in determining whether you can have a vehicle removed from
                  your property through the abandoned vehicle process.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A vehicle may be classified as abandoned in Arizona if it meets
                  any of the following conditions:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The vehicle has been left unattended on private property for an extended period without the property owner&apos;s consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The vehicle is inoperable &mdash; it cannot be driven due to mechanical failure, missing parts, flat tires, or other conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The vehicle has no valid registration or has expired tags beyond the grace period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The vehicle appears to have been left with the intent of the owner not to return for it</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Legal Timelines for Abandoned Vehicles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law establishes specific timelines that govern the
                  abandoned vehicle process. These timelines dictate when a
                  vehicle can be removed, how long the owner has to claim it,
                  and when the towing company or property owner can pursue a lien.
                  Understanding these timelines is critical for staying within
                  the bounds of the law.
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Identification &amp; Documentation:</strong>{" "}
                      Once you identify a potentially abandoned vehicle, document it thoroughly with photos, noting the date, location, vehicle description, license plate (if visible), and condition. This documentation may be needed later if the tow is disputed.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Contact Your Towing Partner:</strong>{" "}
                      A licensed towing company can assess the vehicle and determine whether it meets the legal criteria for abandonment. They can also advise on whether the vehicle can be removed immediately under ARS 28-3511 (unauthorized parking) or must go through the longer abandoned vehicle process.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Removal &amp; Law Enforcement Notification:</strong>{" "}
                      After the vehicle is towed, the towing company notifies local law enforcement and sends certified mail to the registered owner. If the owner cannot be identified, additional steps including a title search through ADOT may be required.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Waiting Period:</strong>{" "}
                      Arizona law requires a waiting period after notification before the towing company can begin the lien process. This gives the vehicle owner a fair opportunity to claim their property and pay any outstanding fees.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      5
                    </span>
                    <div>
                      <strong className="text-gray-900">Lien Process:</strong>{" "}
                      If the owner does not claim the vehicle within the legally required period, the towing company can file for a mechanic&apos;s lien through ADOT, ultimately taking ownership and disposing of the vehicle to recover unpaid fees.
                    </div>
                  </li>
                </ol>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Key Fact: Do Not Move the Vehicle Yourself
                  </h3>
                  <p className="text-gray-600">
                    Property owners should never attempt to move, dismantle, or
                    dispose of an abandoned vehicle on their own. Doing so could
                    expose you to liability for property damage and may violate
                    state law. Always work with a licensed towing company that
                    understands the legal requirements under ARS 28-4141 through
                    ARS 28-4145.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Abandoned Vehicles vs. Unauthorized Parking
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  It is important to understand the distinction between an
                  abandoned vehicle and a vehicle that is simply parked without
                  authorization. A vehicle that is parked in violation of your
                  posted parking rules &mdash; but is otherwise in working
                  condition and has current registration &mdash; can typically be
                  towed immediately under ARS 28-3511 as an unauthorized vehicle,
                  provided proper signage is in place.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  An abandoned vehicle, on the other hand, is one that appears to
                  have been intentionally left behind. The abandoned vehicle
                  process under ARS 28-4141 through 28-4145 involves additional
                  steps and longer timelines, but ultimately provides a path to
                  permanently remove the vehicle from your property. Your towing
                  partner can help you determine which process applies to your
                  specific situation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Scenarios for Arizona Property Owners
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Abandoned vehicles appear in a variety of contexts across the
                  Phoenix metro area. Here are some of the most common scenarios
                  property owners face:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Former tenant vehicles:</strong> A tenant moves out but leaves a vehicle behind in the parking area, often because it is inoperable or they simply abandon it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Mystery vehicles:</strong> A vehicle appears on your property with no apparent connection to any tenant, customer, or authorized user</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Inoperable vehicles:</strong> A current tenant&apos;s vehicle breaks down and sits for months without being repaired or moved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Stolen or dumped vehicles:</strong> Vehicles stolen and then abandoned on private property, which require law enforcement involvement</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How to Prevent Abandoned Vehicle Problems
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The best approach to abandoned vehicles is prevention. Property
                  owners can take several proactive steps to minimize the
                  likelihood of vehicles being abandoned on their property. Include
                  vehicle registration and condition requirements in lease
                  agreements. Conduct regular property inspections and document
                  any vehicles that appear to be abandoned early. Post clear
                  signage stating that abandoned vehicles will be towed at the
                  owner&apos;s expense. Partner with a professional towing company
                  that can identify and address potential abandonments before they
                  become long-term problems.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Dealing with an Abandoned Vehicle?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} handles the entire abandoned vehicle process
                    for property owners across the Phoenix metro area &mdash;
                    from documentation and towing to law enforcement notification
                    and lien processing. Our services are completely free for
                    property owners.
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
                      Get Help Now
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
                        2021. Licensed, insured, and experienced in handling
                        abandoned vehicle cases from start to finish.
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
                    Abandoned vehicle on your property? We can help.
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
                    We&apos;ll evaluate your property and handle any abandoned
                    vehicle situations at no cost to you.
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

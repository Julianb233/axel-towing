import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "10 Tips to Avoid Getting Towed from Private Property in Arizona",
  description:
    "Practical tips to avoid getting your vehicle towed from private property in Arizona. Learn what to look for, common mistakes, and how to protect yourself.",
};

const RELATED_ARTICLES = [
  {
    slug: "can-my-car-be-towed-without-warning",
    title: "Can My Car Be Towed Without Warning? Arizona Private Property Rules",
    category: "Vehicle Owner Resources",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "what-to-do-when-car-towed-phoenix",
    title: "What to Do When Your Car Is Towed in Phoenix: Step-by-Step Guide",
    category: "Vehicle Owner Resources",
    readTime: "10 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "vehicle-towed-from-apartment-rights",
    title: "My Vehicle Was Towed from My Apartment: Know Your Rights in Arizona",
    category: "Vehicle Owner Resources",
    readTime: "8 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
];

export default function ArticlePage() {
  return (
    <>
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Vehicle Owner Resources</span>
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            10 Tips to Avoid Getting Towed{" "}
            <span className="text-gradient">from Private Property in Arizona</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Getting towed is expensive, stressful, and entirely
                  preventable in most cases. Whether you are visiting a
                  friend&apos;s apartment, shopping at a strip mall, or parking
                  at a hotel, a few simple habits can keep your vehicle safe.
                  Here are ten practical tips that Phoenix-area drivers can
                  use to avoid the costly mistake of parking in a tow-away
                  zone.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  1. Always Read the Signs Before Parking
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This sounds obvious, but the most common reason vehicles get
                  towed from private property is that the driver simply did not
                  read the posted signs. Arizona law requires properties with
                  towing enforcement to post tow-away signs at every entrance.
                  Before you park, take 30 seconds to look for signs that
                  indicate parking restrictions, time limits, permit
                  requirements, or tow-away warnings. Those few seconds can
                  save you hundreds of dollars.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  2. Never Park in Fire Lanes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Fire lanes are marked with red curb paint and typically have
                  &ldquo;No Parking &mdash; Fire Lane&rdquo; signs posted
                  nearby. These are subject to immediate towing with no
                  warning required, because blocking a fire lane is a safety
                  hazard that could literally cost lives. Even &ldquo;just
                  running in for a minute&rdquo; is not worth the risk. If
                  an emergency occurs and your vehicle is blocking access,
                  you could face not only towing fees but civil liability.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  3. Respect Handicap Parking Rules
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Parking in a handicap space without a valid accessible
                  parking placard or plate is illegal in Arizona and grounds
                  for immediate towing. Beyond the tow, you face fines up to
                  $250 for a first offense. Always use designated handicap
                  spaces only when you have a valid permit, and never park in
                  the adjacent access aisle &mdash; those striped zones are
                  not parking spaces; they provide wheelchair access.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  4. Know the Guest Parking Rules
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you are visiting someone at an apartment complex, HOA
                  community, or gated property, ask them about guest parking
                  rules before you arrive. Many properties require visitors to
                  register their vehicle at the front office, display a guest
                  parking pass on the dashboard, or park only in designated
                  visitor areas. Parking in a resident&apos;s assigned space
                  &mdash; even if they invited you to &mdash; can result in a
                  tow if the property enforces parking policies strictly.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  5. Watch Time Limits
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many private parking lots in Phoenix have time limits posted,
                  especially near restaurants, retail stores, and office
                  buildings. A sign might say &ldquo;2-hour parking
                  only&rdquo; or &ldquo;parking for customers only during
                  business hours.&rdquo; If you exceed the posted time limit
                  or remain after the business closes, your vehicle may be
                  towed. Set a reminder on your phone if you are in a
                  time-limited lot.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  6. Do Not Park in Reserved Spaces
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Reserved spaces are designated for specific tenants,
                  management, maintenance vehicles, or employees. Even if the
                  space appears empty and the reserved vehicle is nowhere in
                  sight, parking there puts you at risk. The person who pays
                  for that space may arrive at any time, and the property
                  manager can authorize a tow without contacting you first.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  7. Keep Your Vehicle Registration Current
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  An expired registration tag is a red flag during parking
                  enforcement patrols. While expired registration alone may
                  not always trigger a tow, it draws attention to your vehicle
                  and may lead to closer inspection. In combination with other
                  violations &mdash; or in communities with strict
                  CC&amp;R requirements &mdash; an expired tag can be enough
                  to authorize a tow. Keep your registration current to avoid
                  any issues.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  8. Do Not Leave Your Vehicle for Extended Periods
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Leaving your vehicle in the same parking space for days or
                  weeks can result in it being flagged as abandoned. In
                  Arizona, a vehicle left on private property for an extended
                  period can be reported to police and eventually towed. If
                  you need to be away from your apartment or HOA community,
                  notify management in writing and ask about their policy for
                  extended parking.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  9. Take a Photo of Your Parking Spot
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before walking away from your car in an unfamiliar parking
                  area, take a quick photo of your parking spot, the nearest
                  signs, and your vehicle&apos;s location. If your car is
                  towed, these photos serve as evidence that can help you
                  locate your vehicle and, if necessary, dispute the tow. The
                  timestamp on the photo can also prove what time you parked.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  10. When in Doubt, Ask
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you are unsure whether it is safe to park somewhere, ask.
                  Stop at the property management office, ask a security guard,
                  or call the business you are visiting. A 30-second
                  conversation is always cheaper than a $300+ towing bill.
                  Property managers and business owners generally appreciate
                  when visitors ask about parking rather than parking
                  incorrectly and creating an enforcement issue.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Bonus: Know the &ldquo;Drop Fee&rdquo; Rule
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Even if a tow truck has your vehicle loaded, Arizona law
                  requires the driver to release it if you arrive before the
                  truck leaves the property. You may owe a &ldquo;drop
                  fee&rdquo; (typically half the full tow rate), but that is
                  far less than the full tow plus storage fees. If you see
                  your car being loaded, approach the driver immediately and
                  request a release.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Property Owners: Free Parking Enforcement
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides professional parking enforcement
                    and signage at absolutely no cost to property owners across
                    the Phoenix metro area. Keep your parking areas organized
                    and safe without any budget impact.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                  </div>
                </div>

                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to transparent, fair towing practices.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Questions about parking enforcement on your property?</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">Property owners: get a free parking enforcement evaluation.</p>
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

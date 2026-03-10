import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "My Vehicle Was Towed from My Apartment: Know Your Rights in Arizona",
  description:
    "Know your rights when your vehicle is towed from an apartment complex in Arizona. Learn about lease terms, signage requirements, and how to dispute unfair tows.",
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
    slug: "how-to-dispute-towing-charges-arizona",
    title: "How to Dispute Towing Charges in Arizona: Legal Options Explained",
    category: "Vehicle Owner Resources",
    readTime: "7 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "understanding-towing-fees-arizona",
    title: "Understanding Towing and Storage Fees in Arizona: What&rsquo;s Legal?",
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
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            My Vehicle Was Towed from My Apartment:{" "}
            <span className="text-gradient">Know Your Rights in Arizona</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Coming home to find your car missing from your own apartment
                  complex is infuriating. As a tenant, you have specific rights
                  under both your lease agreement and Arizona law. Whether you
                  were parked in the wrong spot, your registration sticker was
                  expired, or you believe the tow was completely unwarranted,
                  understanding the legal landscape is the first step toward
                  resolving the situation. This guide covers everything
                  Arizona apartment dwellers need to know about towing from
                  rental properties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Apartment Complexes Tow Vehicles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Apartment complexes contract with towing companies to maintain
                  order in their parking areas. This is not about generating
                  revenue for the property &mdash; in fact, property owners pay
                  nothing for these services. The towing company recovers its
                  costs from the vehicle owner upon retrieval. Common reasons
                  apartments authorize tows include vehicles parked in fire
                  lanes, unauthorized vehicles in assigned spaces, expired
                  registration or unregistered vehicles, vehicles without
                  proper parking permits or decals, abandoned or inoperable
                  vehicles, and parking in reserved management or maintenance
                  spaces.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Your Lease Agreement Matters
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your lease is the primary document governing parking rules at
                  your apartment complex. Most Arizona apartment leases include
                  a parking addendum or section that outlines the specific
                  rules for the property. This might include the number of
                  vehicles you are allowed to register, requirements for
                  displaying a parking permit or decal, restrictions on vehicle
                  types (no RVs, boats, or commercial vehicles), guest parking
                  policies and time limits, and designated vs. unassigned
                  parking rules.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you signed a lease that includes parking enforcement
                  provisions, and you violated those provisions, the complex
                  likely had legal authority to authorize the tow. However,
                  if the tow occurred for a reason not covered by your lease
                  or the posted property rules, you may have grounds to
                  dispute the charges.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Signage Requirements for Apartments
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Regardless of what your lease says, the apartment complex
                  must also comply with Arizona&apos;s signage requirements
                  under ARS 28-3511. Tow-away signs must be posted at every
                  entrance to the parking area, must include the towing
                  company&apos;s name and phone number, must clearly indicate
                  that unauthorized vehicles will be towed, and must be visible
                  and maintained in good condition.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If the complex failed to maintain proper signage, the tow
                  may be legally questionable even if you technically violated
                  a parking rule. Take photos of all entrances and any posted
                  (or missing) signs as soon as you discover your vehicle has
                  been towed.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Can Your Apartment Complex Tow Your Car from Your Assigned Spot?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Generally, no &mdash; if you have an assigned parking space
                  and your vehicle is properly registered with the complex,
                  your car should not be towed from that spot. However, there
                  are exceptions. If your vehicle has expired registration
                  plates, appears inoperable (flat tires, broken windows), or
                  does not display the required parking permit, the complex
                  may have grounds to tow even from an assigned space.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Some complexes have policies that allow towing of any vehicle
                  that appears abandoned for a specified number of days. If
                  you plan to be away from your apartment for an extended
                  period, it is wise to notify management in writing to prevent
                  your vehicle from being flagged as abandoned.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Your Rights as a Tenant
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have the right to know the parking rules before you sign the lease &mdash; ask for the parking policy in writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The complex cannot change parking rules or start towing without proper notice to tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You are entitled to retrieve personal belongings from your towed vehicle during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>If you arrive before the tow truck leaves the property, the driver must release your vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You can file a complaint with the Arizona Attorney General if you believe the tow was retaliatory</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Steps to Take After Your Vehicle Is Towed
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>Contact the apartment management office to confirm the tow was authorized and get the towing company&apos;s information.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>Document the parking area: photograph signs, your assigned space, and any relevant conditions.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>Review your lease agreement for the specific parking rules you may have violated.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>Retrieve your vehicle as quickly as possible to minimize storage fees.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <div>If you believe the tow was unjustified, file a written complaint with the apartment management and, if necessary, with ADOT.</div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  When to Seek Legal Help
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Most apartment towing disputes can be resolved through direct
                  communication with the property management. However, if you
                  believe the tow was retaliatory (for example, after filing a
                  maintenance complaint), discriminatory, or violated your
                  lease terms, consulting with a tenant&apos;s rights attorney
                  may be worthwhile. Arizona Legal Aid and community law
                  centers offer free or low-cost consultations for tenants
                  facing disputes with landlords.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Vehicle Towed from an Apartment?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} works with apartment complexes across the
                    Phoenix metro area. If your vehicle is at one of our lots,
                    call us to learn about your retrieval options and get a
                    clear breakdown of fees.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/apartment-towing" className="btn-cta">Apartment Towing Info</Link>
                  </div>
                </div>

                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-500 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to transparent, fair towing practices.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{platform}</button>
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
                  <p className="text-gray-500 text-sm mb-4">Our team can walk you through the retrieval process.</p>
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
                  <span className="text-xs text-gray-400 mt-2 inline-block">{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

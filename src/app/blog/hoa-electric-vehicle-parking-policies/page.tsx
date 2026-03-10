import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "EV Charging Station Parking Enforcement: New Rules for Arizona HOAs",
  description:
    "Navigate EV charging station parking enforcement for Arizona HOAs. Learn about Arizona's EV-friendly laws, charging etiquette rules, ICE-ing prevention, and how to update your parking policy for electric vehicles.",
};

const RELATED_ARTICLES = [
  {
    slug: "hoa-parking-rules-template-arizona",
    title: "HOA Parking Rules Template: A Free Downloadable Guide for Arizona Communities",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "HOA Resources",
    readTime: "10 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "hoa-board-member-parking-liability",
    title: "HOA Board Member Liability: Parking Enforcement Dos and Don'ts",
    category: "HOA Resources",
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
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            EV Charging Station Parking Enforcement:{" "}
            <span className="text-gradient">New Rules for Arizona HOAs</span>
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
                  Electric vehicle adoption in Arizona is accelerating rapidly, and HOA communities are feeling the impact. From residents requesting charger installations to non-EV vehicles parking in charging spaces, boards are facing a new category of parking enforcement challenges. This guide covers what Arizona HOA boards need to know about EV charging station parking policies, enforcement, and the legal landscape.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The EV Parking Problem: &ldquo;ICE-ing&rdquo; and Charging Etiquette
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  &ldquo;ICE-ing&rdquo; &mdash; when an internal combustion engine (ICE) vehicle parks in an EV charging space &mdash; is the most common and most frustrating EV parking violation in HOA communities. When a gas-powered vehicle occupies a charging spot, it prevents EV owners from charging their vehicles, which can directly impact their ability to commute to work the next day.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  But ICE-ing is not the only problem. Charging etiquette violations by EV owners themselves are equally disruptive. These include leaving a fully charged vehicle plugged in for hours or days, treating EV charging spaces as reserved personal parking, and using Level 2 chargers unnecessarily when a Level 1 outlet would suffice during overnight charging.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Law and EV Charging in HOAs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona has enacted EV-friendly legislation that directly impacts HOAs. Under ARS 33-1818 (for planned communities) and ARS 33-1260.01 (for condominiums), HOAs cannot prohibit homeowners from installing EV charging equipment in their own parking spaces or garages. The law also limits the fees and conditions that HOAs can impose on EV charger installations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  However, these laws address installation rights &mdash; not parking enforcement. Your HOA retains full authority to establish rules about how shared EV charging spaces in common areas are used, including time limits, access restrictions, and enforcement procedures.
                </p>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Arizona EV Charger Rights: What Boards Cannot Do
                  </h3>
                  <p className="text-gray-600">
                    Under Arizona law, your HOA cannot prohibit a homeowner from installing an EV charger in their individually owned or exclusively assigned parking space. You can require reasonable architectural review (appearance, placement, installation quality), but you cannot outright deny installation. This law applies to both planned communities and condominiums. Consult your HOA attorney for guidance specific to your community&apos;s situation.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Creating an EV Charging Parking Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If your community has shared EV charging stations in common areas (or is considering installing them), you need a clear EV charging parking policy. Here are the essential elements:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Time Limits for Charging Spaces
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Set a maximum time limit for vehicles in EV charging spaces. Most communities adopt a 4-hour limit for daytime charging or an overnight limit (e.g., 10 PM to 8 AM). The goal is to ensure that charging spaces are available for multiple users throughout the day, not monopolized by a single vehicle.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Move-When-Done Rules
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Require that EV owners move their vehicles within a reasonable time after charging is complete (e.g., 30 minutes). Many modern EV chargers send notifications to the vehicle owner&apos;s phone when charging is finished. If your community&apos;s chargers have this feature, reference it in your policy and set expectations for prompt vehicle removal.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  ICE Vehicle Prohibition
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Clearly state that only electric vehicles actively charging may occupy EV charging spaces. Non-electric vehicles parked in charging spaces are subject to the same graduated enforcement process as any other parking violation: courtesy notice, formal warning, and towing.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Signage for EV Charging Spaces
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  EV charging spaces should have clear, visible signage that states the space is reserved for electric vehicles actively charging, displays the time limit, warns that non-electric vehicles and vehicles exceeding the time limit are subject to towing, and includes the towing company name and phone number per ARS 28-3511.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Enforcement Considerations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  EV charging space enforcement requires some additional nuance compared to standard parking enforcement:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Verify charging status:</strong> Patrol teams should check whether the charging cable is actually connected and the vehicle is charging, not just parked in a charging space.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Document thoroughly:</strong> Photograph the vehicle, the charging station display (which often shows charging status), and any connected cables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Handle cable disconnection carefully:</strong> If a vehicle needs to be towed from a charging space, the charging cable must be properly disconnected first to avoid damaging the charger or the vehicle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Educate first:</strong> EV charging etiquette is new to many people. A courtesy notice explaining the rules is especially important during the early months of enforcement.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Planning for the Future
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  EV adoption in Arizona is growing rapidly. The number of registered EVs in the state has increased significantly year over year, and this trend will continue. Forward-thinking HOA boards should plan for increasing EV charging demand by surveying residents about current and planned EV ownership, budgeting for additional charging station installations, updating parking policies to include EV-specific rules before conflicts arise, and working with electrical engineers to assess the community&apos;s infrastructure capacity for additional chargers.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help with EV Parking Enforcement?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} helps Arizona HOA communities enforce EV charging space rules alongside their broader parking enforcement programs. Our patrol teams are trained to identify ICE-ing violations, verify charging status, and follow proper procedures for EV-related enforcement &mdash; all at zero cost to your association.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/hoa-towing" className="btn-cta">HOA Towing Services</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-500 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to helping HOA communities maintain orderly, safe parking environments.</p>
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
                  <p className="text-gray-500 text-sm mb-4">Talk to our HOA enforcement specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free HOA Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We will evaluate your community&apos;s parking needs and recommend a custom enforcement program.</p>
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
                  {article.slug === "#" && (<div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">Coming Soon</div>)}
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

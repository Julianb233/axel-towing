import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Restaurant Parking Lot Enforcement: Stop Non-Customers from Stealing Your Spaces",
  description:
    "Learn how Phoenix restaurants can protect their parking lots from unauthorized use. Covers Arizona towing laws, enforcement strategies, and free towing programs for restaurant owners.",
};

const RELATED_ARTICLES = [
  {
    slug: "retail-shopping-center-parking-enforcement",
    title: "Retail Shopping Center Parking Enforcement: Protecting Revenue and Customers",
    category: "Commercial Towing",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "office-building-parking-management",
    title: "Office Building Parking Management: Keeping Tenants Happy and Lots Organized",
    category: "Commercial Towing",
    readTime: "8 min",
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
              Commercial Towing
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Restaurant Parking Lot Enforcement:{" "}
            <span className="text-gradient">
              Stop Non-Customers from Stealing Your Spaces
            </span>
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
                  In the Phoenix restaurant scene, competition is fierce.
                  Between Scottsdale&apos;s dining district, the booming
                  Roosevelt Row corridor, and the dozens of strip-mall
                  restaurants along every major road, diners have more options
                  than ever. If a customer pulls into your parking lot and
                  cannot find a spot because non-customers have taken them all,
                  they will drive to the next restaurant down the street. Here
                  is how to protect your parking and your bottom line &mdash;
                  at absolutely no cost to you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Restaurant Parking Is Under Attack in Phoenix
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Restaurant parking lots are uniquely vulnerable because
                  they are often located in high-traffic commercial areas
                  surrounded by offices, retail, and entertainment venues.
                  During lunch hours, office workers from nearby buildings park
                  in your lot and walk to work. During evenings and weekends,
                  event-goers and bar hoppers treat your lot as free parking.
                  And overnight, the lot can become a dumping ground for
                  vehicles that should be parked elsewhere.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The problem is especially acute along popular dining
                  corridors in Tempe near ASU, in Old Town Scottsdale, along
                  Gilbert Road in Gilbert, and in the Uptown Phoenix area. In
                  these locations, parking is already scarce, and every stolen
                  space represents a lost customer.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Law and Restaurant Towing Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Under ARS 28-3511, restaurant owners who own or lease their
                  parking lot have the legal right to tow unauthorized vehicles
                  from their property. The requirements are straightforward:
                  proper signage at all entrances, a written towing agreement,
                  and authorization from the property owner or manager for each
                  tow. If you lease your restaurant space, check your lease
                  to confirm whether parking enforcement authority rests with
                  you or the landlord &mdash; in many cases, the landlord
                  handles it, but you should verify.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Identifying Non-Customer Vehicles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The trickiest part of restaurant parking enforcement is
                  distinguishing between customers and unauthorized parkers.
                  Here are practical approaches that work:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Time-based enforcement: vehicles parked beyond your maximum dining time (typically 2-3 hours) are flagged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>After-hours enforcement: any vehicle parked outside your operating hours is unauthorized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Staff observation: your team knows which cars belong to diners and which do not</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Repeat offenders: same vehicles appearing daily during non-dining hours are clearly not customers</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Setting Up a Restaurant Towing Program
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Contact a professional towing company:</strong>{" "}
                      Choose a licensed, insured towing company that specializes in private property impounds. {COMPANY.name} serves restaurants across the entire Phoenix metro area.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Sign a towing agreement:</strong>{" "}
                      This is required by Arizona law and outlines the terms of the relationship between your business and the towing company.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Install compliant signage:</strong>{" "}
                      Your towing partner installs ARS 28-3511 compliant signs at every entrance to your parking area. This is typically done at no cost to you.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Train your staff:</strong>{" "}
                      Make sure your managers and hosts know how to identify violations and contact the towing company when needed.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      5
                    </span>
                    <div>
                      <strong className="text-gray-900">Enforce consistently:</strong>{" "}
                      Once your program is in place, enforce it consistently. Sporadic enforcement sends the message that your lot is still fair game.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Handling Customer Complaints About Towing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Occasionally, a legitimate customer may be towed if they
                  stayed past the posted time limit or parked in a restricted
                  area. Handle these situations diplomatically. Post your
                  parking rules visibly inside the restaurant, train staff to
                  inform guests about time limits for longer events or private
                  dining, and have a process for helping customers retrieve
                  their vehicle if a mistake was made. A professional towing
                  partner like {COMPANY.name} documents every tow with photos
                  and timestamps, which protects both you and the customer.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Shared Parking Agreements with Neighbors
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many Phoenix restaurants share parking areas with adjacent
                  businesses. If you are in a strip mall or multi-tenant
                  commercial center, work with your landlord and neighboring
                  tenants to create a shared parking agreement that defines
                  which spaces belong to which businesses, sets enforcement
                  rules, and designates who has authority to request tows.
                  This prevents conflicts between tenants and ensures
                  enforcement is fair and coordinated.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Bottom Line: Parking Equals Revenue
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Every parking space in your lot represents potential
                  revenue. A four-top dinner with drinks might generate $150
                  or more. If five spaces are occupied by non-customers during
                  your peak dinner hours, that could be $750 in lost revenue
                  every single night. Over a month, that is $22,500. Over a
                  year, it adds up to more than $270,000 in potential lost
                  sales. Professional parking enforcement is not just about
                  keeping your lot organized &mdash; it is about protecting
                  your business.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Protect Your Restaurant&apos;s Parking
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free parking enforcement for
                    restaurants across the Phoenix metro area. Stop losing
                    customers to parking thieves. Our program costs you
                    absolutely nothing &mdash; guaranteed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/services/commercial-property-towing" className="btn-cta">
                      Commercial Towing Services
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
                        Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Trusted by restaurants, bars, and hospitality businesses across Arizona.
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our restaurant parking specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Parking Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll evaluate your restaurant&apos;s parking needs and recommend a custom solution.</p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">
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

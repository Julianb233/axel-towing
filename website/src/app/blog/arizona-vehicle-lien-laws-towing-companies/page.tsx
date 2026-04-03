import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arizona Vehicle Lien Laws for Towing Companies: A Legal Overview",
  description:
    "Understand Arizona vehicle lien laws for towing companies under ARS 28-4141 through 28-4145. Learn about mechanic's liens, notification requirements, ADOT procedures, and lien sale processes for unclaimed vehicles.",
};

const RELATED_ARTICLES = [
  {
    slug: "arizona-abandoned-vehicle-laws",
    title:
      "Arizona Abandoned Vehicle Laws: Timelines, Procedures, and Your Rights",
    category: "Arizona Towing Laws",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "arizona-impound-fees-what-to-expect",
    title:
      "Arizona Impound Fees: What Property Owners and Vehicle Owners Should Know",
    category: "Arizona Towing Laws",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "arizona-tow-truck-regulations",
    title:
      "Arizona Tow Truck Regulations: Licensing, Insurance, and Compliance",
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
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Arizona Towing Laws</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Arizona Vehicle Lien Laws for Towing Companies:{" "}
            <span className="text-gradient">A Legal Overview</span>
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
                  When a vehicle is towed and the owner fails to claim it,
                  Arizona law provides a mechanism for towing companies to
                  recover their costs through a vehicle lien process. This
                  process is governed by ARS 28-4141 through ARS 28-4145 and
                  involves specific notification requirements, waiting periods,
                  and ADOT filings. This guide explains how Arizona&apos;s
                  vehicle lien laws work, what the process involves, and what
                  property owners should understand about how unclaimed vehicles
                  on their property are ultimately resolved.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Is a Vehicle Lien?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A vehicle lien, often called a mechanic&apos;s lien or
                  storage lien in the towing context, is a legal claim that a
                  towing company can place on a vehicle to secure payment for
                  towing and storage services that have not been paid. The lien
                  gives the towing company a legal right to hold the vehicle
                  until the fees are paid, and ultimately allows the company to
                  take ownership of the vehicle and sell it if the fees remain
                  unpaid after the required legal process is followed.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The vehicle lien process serves two important purposes: it
                  provides a fair mechanism for towing companies to recover
                  legitimate costs when vehicle owners abandon their vehicles,
                  and it provides a legal pathway for removing permanently
                  abandoned vehicles from the system so they do not sit
                  indefinitely in impound lots.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Arizona Vehicle Lien Process: Step by Step
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona&apos;s vehicle lien process is carefully defined by
                  statute to protect the rights of both the towing company and
                  the vehicle owner. Each step must be followed precisely, and
                  failure to comply with any requirement can invalidate the lien.
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Vehicle Towed and Stored:</strong>{" "}
                      The process begins when a vehicle is legally towed from private property under ARS 28-3511 and stored at the towing company&apos;s impound facility. The towing company immediately notifies local law enforcement of the tow.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Owner Identification and Notification:</strong>{" "}
                      The towing company must identify the registered owner through a title search with ADOT and send written notice via certified mail. The notice must include the vehicle description, location, fees owed, and a deadline for claiming the vehicle.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Waiting Period:</strong>{" "}
                      Arizona law requires a mandatory waiting period after the notification is sent. During this time, the vehicle owner has the opportunity to claim the vehicle by paying all outstanding towing and storage fees. The specific waiting period is defined by statute and typically runs 30 days or more.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Lien Application to ADOT:</strong>{" "}
                      If the vehicle owner does not claim the vehicle within the statutory period, the towing company can apply to ADOT for a lien title. This application must include proof of proper notification, documentation of the tow, and an accounting of all fees owed.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <div>
                      <strong className="text-gray-900">ADOT Review and Title Issuance:</strong>{" "}
                      ADOT reviews the application to ensure all legal requirements have been met. If everything is in order, ADOT issues a lien title transferring ownership to the towing company.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">6</span>
                    <div>
                      <strong className="text-gray-900">Disposition of the Vehicle:</strong>{" "}
                      Once the towing company holds the lien title, they can dispose of the vehicle &mdash; typically through sale at auction, sale to a salvage yard, or scrapping &mdash; to recover the accumulated towing and storage fees.
                    </div>
                  </li>
                </ol>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Key Fact: The Process Protects Everyone
                  </h3>
                  <p className="text-gray-600">
                    Arizona&apos;s vehicle lien process is designed to be fair
                    to all parties. Vehicle owners receive multiple notifications
                    and ample time to claim their vehicle before ownership
                    transfers. Towing companies have a legitimate path to recover
                    costs for services rendered. And property owners benefit
                    because the system ensures that abandoned vehicles are
                    ultimately removed rather than sitting indefinitely.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Key Statutes: ARS 28-4141 Through 28-4145
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The primary statutes governing Arizona&apos;s vehicle lien
                  process are found in ARS 28-4141 through 28-4145. Here is a
                  summary of what each section covers:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>ARS 28-4141:</strong> Definitions and scope &mdash; establishes what constitutes an abandoned vehicle and the parties involved in the lien process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>ARS 28-4142:</strong> Notification requirements &mdash; specifies how and when the towing company must notify the vehicle owner, including certified mail requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>ARS 28-4143:</strong> Lien application procedures &mdash; details the ADOT filing requirements and documentation needed to obtain a lien title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>ARS 28-4144:</strong> Title transfer and disposition &mdash; governs how ownership transfers and what the towing company can do with the vehicle after obtaining the lien title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span><strong>ARS 28-4145:</strong> Penalties and enforcement &mdash; addresses violations of the lien process and remedies available to aggrieved parties</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Property Owners Need to Know
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  While the vehicle lien process is primarily handled by the
                  towing company, property owners should understand how it works
                  because it directly affects the resolution of abandoned
                  vehicles on their property. When a vehicle is abandoned on
                  your property and towed by your contracted towing company, the
                  lien process is how that vehicle is ultimately and permanently
                  resolved.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Key points for property owners:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>You bear no cost:</strong> The lien process is handled and funded entirely by the towing company. Property owners pay nothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>The vehicle is permanently resolved:</strong> Unlike simply towing a vehicle to another location, the lien process results in a permanent disposition of the abandoned vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Proper documentation matters:</strong> Your initial documentation of the abandoned vehicle (photos, dates, violation details) supports the towing company&apos;s lien application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Choose a compliant partner:</strong> Not all towing companies handle the lien process correctly. Working with an experienced, licensed company ensures the process is followed properly and legally</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Questions About Vehicle Liens
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong>Can the vehicle owner reclaim their car after a lien is filed?</strong>{" "}
                  Yes, until the lien title is officially issued by ADOT, the
                  vehicle owner can reclaim their vehicle by paying all
                  outstanding towing, storage, and administrative fees. Once the
                  lien title is issued, ownership has legally transferred.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong>How long does the lien process take?</strong>{" "}
                  The timeline varies but typically takes 60 to 90 days from the
                  date of the tow, depending on how quickly notifications are
                  processed and whether ADOT requires additional documentation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong>What happens to the proceeds from a lien sale?</strong>{" "}
                  The proceeds from selling a liened vehicle are applied to the
                  outstanding towing and storage fees. If there is any surplus
                  after fees are satisfied, Arizona law may require the towing
                  company to hold the surplus for the original owner to claim.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help with Abandoned Vehicles?</h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} handles the complete abandoned vehicle and lien process for property owners across the Phoenix metro area. From initial tow to final disposition, we manage every step &mdash; at no cost to you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Contact Us</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and experienced in all aspects of Arizona vehicle lien law.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Questions about vehicle liens or abandoned cars?</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll handle abandoned vehicles and lien processing at no cost to you.</p>
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

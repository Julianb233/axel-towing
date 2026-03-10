import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What to Do When Your Car Is Towed in Phoenix: Step-by-Step Guide",
  description:
    "Step-by-step guide on what to do when your car gets towed in Phoenix. Learn how to locate your vehicle, understand your rights, and retrieve it quickly.",
};

const RELATED_ARTICLES = [
  {
    slug: "how-to-retrieve-impounded-vehicle-arizona",
    title: "How to Retrieve Your Impounded Vehicle in Arizona: Complete Guide",
    category: "Vehicle Owner Resources",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "understanding-towing-fees-arizona",
    title:
      "Understanding Towing and Storage Fees in Arizona: What&rsquo;s Legal?",
    category: "Vehicle Owner Resources",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "how-to-dispute-towing-charges-arizona",
    title: "How to Dispute Towing Charges in Arizona: Legal Options Explained",
    category: "Vehicle Owner Resources",
    readTime: "7 min",
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
              Vehicle Owner Resources
            </span>
            <span className="text-sm text-blue-200/60">10 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            What to Do When Your Car Is Towed in Phoenix:{" "}
            <span className="text-gradient">Step-by-Step Guide</span>
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
                  Discovering that your car has been towed is one of the most
                  stressful experiences a vehicle owner can face. Whether you
                  parked in the wrong spot, missed a sign, or believe the tow
                  was unjustified, knowing exactly what to do next can save you
                  time, money, and unnecessary frustration. This comprehensive
                  guide walks Phoenix residents through every step of the
                  process &mdash; from locating your vehicle to getting it back
                  as quickly as possible.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 1: Confirm Your Vehicle Was Towed (Not Stolen)
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before anything else, make sure your vehicle was actually
                  towed and not stolen. This distinction matters because it
                  changes your next steps entirely. Start by looking for towing
                  signs in the area where you parked. Most private property
                  towing in Arizona requires visible signage under ARS 28-3511,
                  so check entrances and nearby posts for tow-away zone notices.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you were parked on private property &mdash; such as an
                  apartment complex, shopping center, or office parking lot
                  &mdash; contact the property manager or security office. They
                  can usually confirm whether a tow was authorized and which
                  towing company performed it. If you suspect theft rather than
                  towing, call the Phoenix Police Department non-emergency line
                  at 602-262-6151 to file a report.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 2: Identify the Towing Company
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Once you confirm the vehicle was towed, you need to find out
                  which company has it. There are several ways to do this:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Check the tow-away signs posted on the property &mdash; they are required to list the towing company name and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ask the property manager, HOA, or building security for the towing company&apos;s contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Call the Phoenix Police tow line at 602-534-7780, which maintains records of all police-ordered tows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contact the Arizona Department of Public Safety if the tow occurred on a state highway</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 3: Gather Your Documents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before heading to the impound lot, gather the documents
                  you&apos;ll need to prove ownership and retrieve your vehicle.
                  Having everything ready will speed up the process
                  significantly. You will need:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>A valid government-issued photo ID (driver&apos;s license or state ID)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Proof of vehicle ownership (title or current registration)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Proof of valid insurance on the vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Payment method for towing and storage fees (cash, card, or money order depending on the lot)</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If the vehicle is not in your name, you may need a notarized
                  letter of authorization from the registered owner, along with
                  their ID and registration copies. Some impound lots in the
                  Phoenix area accept digital copies, but bring originals to be
                  safe.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 4: Understand the Fees Before You Go
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law regulates maximum towing and storage fees, but the
                  actual amounts can still add up quickly. As of 2026, you can
                  generally expect to pay between $175 and $350 for the initial
                  tow, plus daily storage fees that typically range from $25 to
                  $50 per day. The meter starts ticking from the moment your
                  vehicle arrives at the impound lot, so time is money &mdash;
                  literally.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Important fee considerations include the fact that storage
                  fees are charged per calendar day, not per 24-hour period, so
                  picking up your car at 8 AM versus 5 PM the same day makes no
                  difference. Some lots charge additional administrative fees
                  for processing paperwork. After-hours retrieval may incur an
                  extra gate fee at some facilities. If the vehicle was towed by
                  police order (such as for DUI), there may be additional
                  municipal impound fees on top of the towing charges.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 5: Visit the Impound Lot
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Call ahead to confirm the lot&apos;s business hours and
                  accepted payment methods. Many Phoenix-area impound lots
                  operate during standard business hours with limited weekend
                  availability, though some offer 24-hour vehicle release.
                  When you arrive, you will typically go through a check-in
                  process where staff verify your identity and vehicle
                  ownership.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before paying any fees, ask for an itemized receipt that
                  breaks down every charge. This documentation is important
                  if you later decide to dispute the tow or any of the fees.
                  Arizona law requires towing companies to provide this
                  breakdown upon request. Inspect your vehicle carefully before
                  leaving the lot and document any new damage with photos and
                  timestamps.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 6: Know Your Rights Under Arizona Law
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law provides vehicle owners with specific protections
                  when it comes to private property towing. Understanding these
                  rights can help you determine whether the tow was lawful and
                  whether you have grounds for a dispute.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Proper signage must be posted at property entrances before any private property tow can occur (ARS 28-3511)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Towing companies must accept multiple forms of payment, including credit and debit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You have the right to retrieve personal belongings from your vehicle during business hours at no charge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>The towing company must notify you within a reasonable time after the tow and provide written notice to the registered owner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>If you arrive before the tow truck leaves the property with your vehicle, the driver must release it (you may still owe a partial or &ldquo;drop fee&rdquo;)</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 7: Consider Disputing an Unlawful Tow
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you believe your vehicle was towed illegally &mdash; for
                  example, because proper signage was missing, the property
                  owner did not authorize the tow, or the towing company
                  violated any of Arizona&apos;s towing regulations &mdash; you
                  have options. Start by filing a complaint with the Arizona
                  Department of Transportation (ADOT), which oversees tow truck
                  licensing. You can also pursue a claim in small claims court
                  for the return of fees if you can demonstrate the tow was
                  unlawful.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Document everything: take photos of the signage (or lack
                  thereof), save receipts, record dates and times, and get
                  names of anyone you speak with. This evidence will be
                  essential if you decide to file a formal dispute. Many
                  vehicle owners successfully recover towing fees when they
                  can prove signage requirements were not met or that the
                  tow was not properly authorized by the property owner.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Tips to Avoid Getting Towed in Phoenix
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Prevention is always easier than dealing with a tow after the
                  fact. Here are practical ways to protect yourself:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Always read posted signs before parking in any private lot or garage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Never park in fire lanes, handicap spots (without a valid permit), or loading zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Respect time limits posted in parking areas, especially near businesses that close at specific hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>If you are visiting a friend at an apartment complex, confirm guest parking rules with the management office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Take a photo of your parking spot and any nearby signs as a record, especially in unfamiliar areas</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Questions About a Towed Vehicle?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    If your vehicle was towed from a property serviced by {COMPANY.name},
                    we are here to help you understand the process and retrieve
                    your vehicle as quickly as possible. Our team can walk you
                    through the steps, explain fees, and answer any questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/contact" className="btn-cta">
                      Contact Us Online
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
                        2021. Licensed, insured, and committed to transparent,
                        fair towing practices for vehicle owners and property
                        managers alike.
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
                {/* Related Articles */}
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link
                        key={article.title}
                        href={
                          article.slug === "#"
                            ? "#"
                            : `/blog/${article.slug}`
                        }
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

                {/* Call CTA */}
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
                    Our team can help you locate and retrieve your vehicle.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="btn-primary text-sm w-full"
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>

                {/* Free Assessment CTA */}
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
                    Property owners: get a free parking enforcement evaluation
                    for your property.
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
                href={
                  article.slug === "#" ? "#" : `/blog/${article.slug}`
                }
                className="glass-card-white rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                  {article.slug === "#" && (
                    <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">
                      Coming Soon
                    </div>
                  )}
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

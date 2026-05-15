import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/parking-enforcement-checklist-for-property-managers.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a systematic organized Arizona parking lot with enforcement signs - Axle Towing checklist";
const PAGE_TITLE = "Parking Enforcement Checklist for Property Managers: Daily, Weekly, and Monthly Tasks";
const PAGE_DESCRIPTION =
  "A practical daily, weekly, and monthly checklist for property managers running a private parking enforcement program. Fits into a Friday-morning admin routine.";
const CANONICAL = "https://axletowing.com/resources/parking-enforcement-checklist-for-property-managers";
const PUBLISHED = "2026-05-15";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const FAQS = [
  {
    question: "How much time should a property manager spend on parking enforcement each week?",
    answer:
      "For a property with an active towing partner handling patrols and documentation, most of the ongoing management work fits into 30 to 60 minutes per week: reviewing patrol reports, responding to any resident inquiries about tows, and noting any new problem areas. Monthly review takes about an hour. If you are spending more time than this on reactive issues, that is a signal your enforcement program or communication strategy needs adjustment.",
  },
  {
    question: "Should I walk the property every day to check for violations?",
    answer:
      "For properties with active patrol agreements, daily management walks are usually not necessary for towing purposes. Your towing partner's patrol visits handle routine violation identification. Daily walk-throughs are most useful for properties where you also manage maintenance, landscaping, and safety - combining purposes. If your property is experiencing a specific ongoing problem (serial violators, blocked fire lanes), more frequent checks make sense until the issue resolves.",
  },
  {
    question: "What should I do when a resident calls to complain about a tow?",
    answer:
      "Listen calmly, take notes, and ask for the vehicle description, date, and location of the alleged violation. Pull your towing records for that date and confirm whether a patrol report and photos exist for that tow. Refer the vehicle owner to the towing company for vehicle release - your role is to confirm the authorization, not to manage the vehicle. If you find the tow was in error, contact your towing partner immediately to arrange a release. Document everything and report the incident to your management company if applicable.",
  },
  {
    question: "What records should I keep from my towing partner's patrol reports?",
    answer:
      "Keep every patrol report your towing partner provides, even those with no tows. Zero-tow patrol reports prove that the property is being actively monitored, which strengthens your enforcement program if it is ever challenged. File reports by date and keep them for at least three years. Some management companies and insurers specify longer retention periods - check your management agreement.",
  },
  {
    question: "How do I handle a vehicle that has been parked in the same spot for several days without moving?",
    answer:
      "Start the abandoned vehicle documentation process immediately. Take a dated photograph showing the vehicle's position relative to a fixed landmark. Note the license plate, make, model, and color. Check the registration sticker for expiration. Return daily for photographs. After 72 hours with no movement and observable signs of abandonment, contact your towing partner to evaluate the vehicle and initiate the appropriate removal process. See our guide on Arizona's 72-hour rule for the full procedure.",
  },
  {
    question: "Should the parking enforcement checklist be different for an HOA versus an apartment complex?",
    answer:
      "The core tasks are similar, but HOA properties typically require additional coordination with the board, formal documentation for any policy changes, and communication to homeowners (who own their units) rather than tenants. HOA boards often want monthly reports that can be shared at association meetings. Apartment complexes typically have more centralized decision-making but higher resident turnover, which means permit systems need regular auditing.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Resources", url: "https://axletowing.com/resources" },
              { name: "Parking Enforcement Checklist", url: CANONICAL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: PAGE_TITLE,
              description: PAGE_DESCRIPTION,
              slug: "parking-enforcement-checklist-for-property-managers",
              datePublished: PUBLISHED,
              pathPrefix: "resources",
            })
          ),
        }}
      />

      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Parking Enforcement Checklist for Arizona Property Managers",
            "description": "Complete checklist for setting up and maintaining a compliant parking enforcement program in Arizona.",
            "author": { "@type": "Organization", "name": "Axle Towing & Impound", "url": "https://axletowing.com" },
            "step": [
              { "@type": "HowToStep", "name": "Establish Legal Authority", "text": "Sign an ARS 28-3511 authorization agreement with a licensed towing company and verify ARS 9-499.05 compliant signage at all entrances." },
              { "@type": "HowToStep", "name": "Document Parking Rules", "text": "Create a written parking policy covering all restrictions, permit requirements, and enforcement procedures. Distribute to all occupants." },
              { "@type": "HowToStep", "name": "Set Up Physical Infrastructure", "text": "Install permit holders, curb markings, lot striping, and signage at every parking zone. Photograph all signs for the compliance record." },
              { "@type": "HowToStep", "name": "Launch Resident Communication", "text": "Send 30-day advance notice of enforcement. Post on community boards, email tenants, and provide a FAQ for the first enforcement cycle." },
              { "@type": "HowToStep", "name": "Coordinate with Towing Partner", "text": "Confirm dispatch contact, patrol schedule, documentation standards, and monthly reporting format with your towing company." },
              { "@type": "HowToStep", "name": "Establish Dispute Resolution Process", "text": "Create a documented process for vehicle owner complaints, including who handles them, what documentation is reviewed, and the timeline for response." }
            ],
          })
        }}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary to-cta">
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/90 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-white">Enforcement Checklist</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {PAGE_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>

      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">A complete property manager parking enforcement checklist covers six areas: legal authority (signed authorization agreement and ARS-compliant signage), policy documentation (written parking rules distributed to all occupants), physical setup (lot lines, permit systems, signage at every entrance), towing partner coordination (standing agreement, dispatch contacts, documentation standards), ongoing monitoring (weekly lot patrols, monthly report review), and dispute resolution process (clear chain of contact and documentation protocol). Missing any of these creates vulnerability. This checklist ensures every base is covered before enforcement begins.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A written authorization agreement and ARS-compliant signage are the two non-negotiable legal prerequisites before any tow.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>All parking rules must be documented in writing and distributed to every occupant before enforcement begins.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Permit systems should clearly identify authorized vehicles with visible decals or permits to simplify enforcement.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Monthly tow reports from the towing partner provide accountability and early detection of emerging problem areas.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A documented dispute resolution process protects the property manager when vehicle owners contest a tow.</span></li>
            </ul>
          </div>

            <p>
              A parking enforcement program that runs on autopilot is not a program - it is a liability waiting to happen. Signs go missing. Permits expire. New residents arrive without learning the rules. Vehicles accumulate in corners. The difference between a program that works and one that generates complaints is consistent, lightweight management. This checklist is designed to keep your program sharp without consuming your schedule.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How to Use This Checklist
            </h2>
            <p>
              This checklist is organized by cadence: daily, weekly, and monthly. Most properties running a managed{" "}
              <Link href="/services/parking-enforcement" className="text-primary underline hover:text-primary/80">
                parking enforcement program
              </Link>{" "}
              with a towing partner handling patrols and documentation will find that the daily items take only a few minutes, the weekly items fit into a Friday-morning routine, and the monthly review takes about an hour. Adjust frequency based on your property size, violation history, and the complexity of your permit system.
            </p>

            {/* Daily checklist */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Daily Checklist (5-10 minutes)
              </h3>
              <p className="text-body-text text-sm mb-4">
                Most of these items happen naturally during your daily walk-through or morning arrival. They are not a separate activity - they are a trained eye during work you are already doing.
              </p>
              <div className="space-y-2">
                {[
                  "Note any vehicles that appear to be in the same position as yesterday, especially in low-traffic areas",
                  "Check that fire lane signage is visible and unobstructed - these are your highest-liability zones",
                  "Flag any vehicle with visible signs of potential abandonment (flat tires, broken windows, no plates)",
                  "Take a dated photo of any flagged vehicle - this starts your documentation chain",
                  "Log any verbal complaints from residents about parking - date, name, specific concern",
                  "Forward any new resident move-in information to your towing partner for permit records (if applicable)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-blue-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly checklist */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-green-500 bg-green-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Weekly Checklist - Friday Morning (30-45 minutes)
              </h3>
              <p className="text-body-text text-sm mb-4">
                Friday morning works well because you can resolve any issues before the weekend, when coverage gaps are most common and tow disputes are hardest to address.
              </p>

              <div className="space-y-1 mb-5">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">PATROL REPORTS</div>
                {[
                  "Review any patrol reports received from your towing partner this week",
                  "Confirm that each tow this week has a patrol report with photos and law enforcement notification",
                  "Note any new violation patterns - new location, new violation type, or same vehicle repeat",
                  "File reports chronologically in your parking enforcement records folder",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-green-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 mb-5">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">RESIDENT COMMUNICATIONS</div>
                {[
                  "Respond to any unresolved parking complaints in the resident portal or email queue",
                  "Follow up on any resident permit requests that have been pending more than 48 hours",
                  "Note any units with move-outs in progress - confirm their parking permit is deactivated if applicable",
                  "If a specific unit or vehicle has been towed multiple times this month, note it for the monthly review",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-green-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">SIGNS AND PROPERTY</div>
                {[
                  "Check that all towing signs at property entrances are visible and undamaged",
                  "Check that fire lane and ADA zone signs are intact after any landscaping, maintenance, or delivery activity this week",
                  "Confirm that any visitor parking areas are functioning as intended (not being captured by residents)",
                  "Note any new vehicles parked in the same spot for 48+ hours in an unusual location",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-green-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly checklist */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-amber-500 bg-amber-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Monthly Checklist (45-60 minutes)
              </h3>
              <p className="text-body-text text-sm mb-4">
                The monthly review is where patterns become visible and decisions get made. Block 45-60 minutes on the last business day of each month.
              </p>

              <div className="space-y-1 mb-5">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">PERFORMANCE REVIEW</div>
                {[
                  "Total tows this month vs. last month - is the number trending up, down, or flat?",
                  "Breakdown of tow reasons (no permit, fire lane, ADA, wrong zone, after-hours) - is any category spiking?",
                  "Identify any zones with zero tows - are these genuinely compliant or are they not being monitored?",
                  "Review repeat-tow vehicles - same license plate appearing 2+ times deserves a written notice or escalation",
                  "Confirm that all tows have complete documentation (photo, report, law enforcement notification)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-amber-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 mb-5">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">PERMIT SYSTEM AUDIT</div>
                {[
                  "Compare current permit list against current resident/tenant roster - deactivate permits for move-outs",
                  "Issue permits for any new residents or tenants who moved in this month",
                  "Confirm that visitor permit limits are being observed if your property uses visitor permits",
                  "Check for expired permits still in circulation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-amber-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 mb-5">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">SIGNAGE AND COMPLIANCE</div>
                {[
                  "Photograph all towing signs once per quarter - note any that need replacement",
                  "Confirm your towing company's license and insurance are still current (request updated certificate if annually)",
                  "Review any open disputes or complaints from this month and confirm they are resolved or escalated",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-amber-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="font-heading font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">BOARD OR OWNER REPORTING</div>
                {[
                  "Prepare the monthly towing summary for your board or ownership report (see monthly compliance report template)",
                  "Flag any significant incidents (disputed tow, abandoned vehicle case, signage damage) for inclusion in the report",
                  "Note any recommended changes to enforcement rules, zones, or hours for board/owner consideration",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-body-text text-base">
                    <span className="w-5 h-5 border-2 border-amber-400 rounded flex-shrink-0 mt-0.5 inline-block" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Special Situation: Abandoned Vehicle Monitoring
            </h2>
            <p>
              Abandoned vehicles require their own documentation cadence that does not fit neatly into the daily/weekly/monthly structure above. When you flag a potentially abandoned vehicle during a daily check, start a dedicated log for that vehicle:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Date and time of first observation, with photograph</li>
              <li>Vehicle description (make, model, color, plate, registration expiration if visible)</li>
              <li>Daily photographs for a minimum of 72 hours</li>
              <li>Any observed movement (even slight repositioning)</li>
              <li>Date and time your towing partner was notified</li>
            </ul>
            <p className="mt-4">
              See our full guide to{" "}
              <Link href="/resources/arizona-abandoned-vehicle-72-hour-rule" className="text-primary underline hover:text-primary/80">
                Arizona's 72-hour abandoned vehicle rule
              </Link>{" "}
              and our{" "}
              <Link href="/resources/arizona-abandoned-vehicle-form-guide" className="text-primary underline hover:text-primary/80">
                abandoned vehicle paperwork guide
              </Link>{" "}
              for the specific procedures once the observation window closes.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Connecting the Checklist to Your Monthly Report
            </h2>
            <p>
              The weekly and monthly checklist items feed directly into the monthly compliance report you share with your board or management company. If you have been diligent about the weekly reviews, the monthly report becomes a summary exercise rather than a research project.
            </p>
            <p>
              See our{" "}
              <Link href="/resources/monthly-towing-compliance-report-template" className="text-primary underline hover:text-primary/80">
                monthly towing compliance report template
              </Link>{" "}
              for a structured format that satisfies most board, insurer, and management-company documentation requirements. The template maps directly to the monthly checklist items above.
            </p>
            <p>
              For HOA boards reviewing this checklist in the context of their broader governance responsibilities, see our{" "}
              <Link href="/resources/hoa-board-guide-to-towing-and-parking-enforcement" className="text-primary underline hover:text-primary/80">
                HOA board guide to towing and parking enforcement
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      {/* Hub link */}
      <section className="py-12 bg-blue-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/resources/property-manager-towing-hub"
            className="text-primary font-semibold underline hover:text-primary/80 transition-colors"
          >
            Back to the Property Manager Towing Hub
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group glass-card-white rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-gray-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-body-text leading-relaxed border-t border-blue-100/50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-cta text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Hand? Talk to an Operator.
          </h2>
          <p className="text-white/95 text-lg mb-8">
            Free consultation for property managers, HOA boards, and commercial owners across the Phoenix metro. 24/7 dispatch available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-base border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

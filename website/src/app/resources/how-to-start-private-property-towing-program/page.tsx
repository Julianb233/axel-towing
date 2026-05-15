import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/how-to-start-private-property-towing-program.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a new Arizona property launching a private property towing program - Axle Towing";
const PAGE_TITLE = "How to Start a Private Property Towing Program: A-to-Z Runbook for Arizona Property Managers";
const PAGE_DESCRIPTION =
  "Step-by-step guide: property assessment, board approval, ARS-compliant signage, resident communication, choosing a towing partner, Day 1 enforcement, and monthly reporting.";
const CANONICAL = "https://axletowing.com/resources/how-to-start-private-property-towing-program";
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
    question: "How long does it take to launch a private property towing program from scratch?",
    answer:
      "For most properties, the timeline from decision to Day 1 enforcement is four to eight weeks. The longest phase is usually getting board or ownership approval and ordering signage. Properties with existing parking rules and clear lot layouts can move faster. Properties with complex lot configurations or older CC&Rs that need updating may take longer.",
  },
  {
    question: "Do residents need to be notified before enforcement starts?",
    answer:
      "Yes - and not just as a courtesy. For properties with existing residents, advance notice of a new or revised parking enforcement program is essential for legal and relationship reasons. Provide written notice at least 30 days before enforcement begins. For HOA properties, check whether your CC&Rs require a specific notice period or board vote before new enforcement rules take effect.",
  },
  {
    question: "Can we enforce immediately after signs are posted?",
    answer:
      "Technically, once compliant signs are posted and a signed authorization agreement is in place, the legal basis for enforcement exists. However, most towing companies (including Axle Towing) recommend a grace period of at least two to four weeks after signage is installed, especially for residential properties. Immediate enforcement on Day 1 of a new program generates disputes and bad will that undermine the long-term effectiveness of the program.",
  },
  {
    question: "What if our parking lot has no clear lot lines or numbered spaces?",
    answer:
      "You can still run an effective towing program without individually numbered spaces. Focus enforcement on clearly defined prohibited zones (fire lanes, handicap spaces, entrances/exits) and on permit-based systems where every vehicle must display a valid permit to park anywhere on the lot. Add signage that defines the general parking area and the rules that apply to it.",
  },
  {
    question: "How do we handle towing complaints from residents or tenants?",
    answer:
      "Establish a clear complaint process before you launch. Residents should know who to call, what information to have ready, and what the review process looks like. Maintain all towing records (photos, timestamps, authorization forms) so you can respond to any complaint with documentation. A towing partner who provides patrol reports and photo documentation after every tow makes this process much smoother.",
  },
  {
    question: "Do we need separate signage for each type of violation?",
    answer:
      "Not always, but your signs must clearly communicate the rules that apply to the area where they are posted. A sign that simply says 'Private Property - No Parking' without specifying permit requirements or hours of enforcement may not be sufficient under Arizona law. Work with your towing company to ensure your signage covers every restriction you want to enforce.",
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
              { name: "How to Start a Private Property Towing Program", url: CANONICAL },
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
              slug: "how-to-start-private-property-towing-program",
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
            "name": "How to Start a Private Property Towing Program in Arizona",
            "description": "Step-by-step guide for Arizona property managers to launch an ARS-compliant private property towing program.",
            "author": { "@type": "Organization", "name": "Axle Towing & Impound", "url": "https://axletowing.com" },
            "step": [
              { "@type": "HowToStep", "name": "Property Assessment", "text": "Walk the entire property to map parking zones, document recurring problems, and photograph existing signage before writing any parking rules." },
              { "@type": "HowToStep", "name": "Board or Owner Approval", "text": "Obtain formal board resolution (for HOAs) or written owner authorization before proceeding with signage or contracts." },
              { "@type": "HowToStep", "name": "ARS-Compliant Signage", "text": "Install signage meeting ARS 9-499.05 requirements at every parking area entrance, including towing company name and 24-hour phone number." },
              { "@type": "HowToStep", "name": "Resident Notification", "text": "Provide written notice at least 30 days before enforcement begins to all residents, tenants, or homeowners." },
              { "@type": "HowToStep", "name": "Execute Towing Authorization Agreement", "text": "Sign a standing authorization agreement with a licensed Arizona towing company designating them as your authorized enforcement agent." },
              { "@type": "HowToStep", "name": "Day 1 Enforcement", "text": "Begin enforcement with documentation standards in place: photos on every tow, law enforcement notification within one hour, and a dispute handling process ready." }
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
            <span className="text-white">Start a Towing Program</span>
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
          <p className="text-gray-800 leading-relaxed">Starting a private property towing program in Arizona takes 4–8 weeks from decision to first enforcement. The six phases are: property assessment, board or owner approval, ARS-compliant signage installation, resident notification (30-day notice recommended), towing company authorization agreement, and Day 1 enforcement. The entire process is free for the property — under the PPI model, costs are recovered from vehicle owners. Signage compliance under ARS 9-499.05 is the legal foundation and the most common point of failure. Axle Towing handles signage consultation, authorization agreements, and program setup.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A private property towing program takes 4–8 weeks to launch from decision to first enforcement.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05-compliant signage is the legal foundation — without it, every tow can be disputed.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Residents should receive 30 days written notice before enforcement begins to prevent complaints and disputes.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A standing authorization agreement lets the towing company enforce rules without per-call approval.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The entire program is free for the property owner under Arizona&apos;s PPI model — all costs are recovered from vehicle owners.</span></li>
            </ul>
          </div>

            <p>
              Starting a private property towing program from scratch can feel overwhelming. There are statutes to follow, signs to order, residents to communicate with, and a towing partner to evaluate - all before a single vehicle gets towed. This runbook walks you through every phase in the order it needs to happen, so you launch with a program that is legal, defensible, and effective from Day 1.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              This page is for general informational purposes only and does not constitute legal advice. Arizona's towing statutes - including ARS 28-3511 and ARS 9-499.05 - are subject to amendment. Verify current requirements at{" "}
              <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>{" "}
              and consult a licensed attorney before launching any enforcement program.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 1: Property Assessment (Week 1)
            </h2>
            <p>
              Before you write a parking rule or order a sign, walk the entire property with a notepad. You are looking for three things: what parking zones exist, what the current problems are, and what physical constraints you are working with.
            </p>
            <p>
              Map every distinct parking area - resident spaces, visitor spaces, fire lanes, ADA spaces, reserved spaces, delivery zones, and any areas where parking is prohibited. Note which areas are clearly marked and which are ambiguous. Photograph everything, including any existing signage (even if it is outdated or non-compliant).
            </p>
            <p>
              Document the recurring problems: which spaces get poached, where fire lanes are routinely blocked, whether visitor parking is being abused by residents, and whether there are abandoned or inoperable vehicles already on site. This documentation becomes the business case for your board or ownership approval.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 2: Board or Owner Approval (Weeks 1-2)
            </h2>
            <p>
              For HOA properties, your CC&Rs likely require a board vote before a new enforcement program can be implemented. Even if they do not, getting explicit board approval protects you from later claims that the program was unauthorized. Prepare a brief presentation covering the problem, your proposed solution, the signage plan, the towing company you intend to use, and the communication plan for residents.
            </p>
            <p>
              For apartment complexes and commercial properties, get written authorization from the property owner before proceeding. If you are the property manager acting as agent, confirm that your management agreement gives you the authority to execute towing contracts.
            </p>
            <p>
              Key questions to answer at this stage: What violations will be enforced? Will there be a permit system? What is the grace period before enforcement begins? What is the escalation process if a tow is disputed?
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 3: ARS-Compliant Signage (Weeks 2-4)
            </h2>
            <p>
              Arizona law sets minimum requirements for towing signage under ARS 28-3511 and ARS 9-499.05. Signs must meet specific dimension, language, and placement standards. Noncompliant signage can invalidate a tow and expose you to liability.
            </p>
            <p>
              See our detailed guide to{" "}
              <Link href="/resources/arizona-towing-signage-requirements" className="text-primary underline hover:text-primary/80">
                Arizona towing signage requirements
              </Link>{" "}
              for the specific dimensions, required language, and placement rules. At a minimum, every tow-away zone must be clearly marked with the name and phone number of the towing company, the hours of enforcement, and a statement that violators will be towed.
            </p>
            <p>
              Order signs from a supplier who understands Arizona's statutory requirements. Allow one to two weeks for delivery. Have your towing partner review the final sign plan before installation.
            </p>

            {/* Phase callout */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-green-500 bg-green-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Signage Installation Checklist
              </h3>
              <ul className="space-y-2 text-body-text">
                {[
                  "All entry points to the property have a sign visible from the street or driveway",
                  "Each tow-away zone (fire lane, ADA, reserved) has its own sign posted at or near the zone",
                  "Signs are at eye level - typically 4 to 7 feet from the ground",
                  "Signs are visible day and night (retroreflective material or adequate lighting)",
                  "Each sign includes the towing company name and 24/7 dispatch phone number",
                  "Each sign states enforcement hours (or 24 hours if enforced continuously)",
                  "Signs meet minimum dimension requirements under ARS 28-3511",
                  "Photographs of installed signs are taken and dated for your records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 4: Resident and Tenant Communication (Weeks 2-4)
            </h2>
            <p>
              No matter how legally sound your program is, residents who feel blindsided by the first tow will create management headaches that overshadow any parking improvement. Give at least 30 days' written notice before enforcement begins.
            </p>
            <p>
              Your notice should cover: why the program is being implemented, what the new rules are, what vehicles need permits (and how to get one), when enforcement starts, what will happen to violating vehicles, and who to contact with questions. Post the notice in common areas, send it via your preferred resident communication channel, and document that it was sent.
            </p>
            <p>
              For properties issuing parking permits, handle permit distribution before enforcement begins. A resident who wants to comply but cannot get a permit because the system is not ready yet is a justified complaint.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 5: Choosing and Contracting Your Towing Partner (Weeks 2-3)
            </h2>
            <p>
              This is one of the most consequential decisions in the process. A towing company that operates poorly - late responses, inadequate documentation, over-towing - will create resident complaints, disputes, and legal exposure that falls on you.
            </p>
            <p>
              Evaluate at least two or three towing companies before signing. Key criteria: Arizona towing license in good standing, adequate insurance coverage (with your property named as additional insured), demonstrated experience with your property type (HOA, apartment, commercial), response time guarantees, written patrol reports, and a contract structure without minimum-tow or no-tow-no-pay clauses.
            </p>
            <p>
              See our{" "}
              <Link href="/resources/private-property-towing-contract-guide" className="text-primary underline hover:text-primary/80">
                towing contract guide
              </Link>{" "}
              for a full checklist of what to look for and what to avoid. Once you select a partner, sign the authorization agreement before enforcement begins - not after.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 6: Day 1 Enforcement
            </h2>
            <p>
              Day 1 is not the day you tow everything in sight. It is the day your program officially begins - meaning signs are posted, permits have been distributed, the authorization agreement is signed, and the grace period has ended.
            </p>
            <p>
              For the first two to four weeks, most towing partners will recommend issuing written warnings for first-time violations before towing. This reduces complaints, documents that residents had notice, and creates a paper trail showing the program is being administered fairly. Keep records of every warning issued.
            </p>
            <p>
              When towing does begin, confirm your towing partner knows the boundaries of each zone, which vehicles are authorized to park where, and how to reach you for questions about specific vehicles (fleet vehicles, vendor deliveries, maintenance contractors).
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Phase 7: Monthly Reporting Cadence
            </h2>
            <p>
              A towing program that runs without any reporting or review will drift. Violations change over time. Residents learn workarounds. New problem areas emerge. Monthly reporting keeps you informed and gives you the data to make good decisions.
            </p>
            <p>
              At minimum, your towing partner should provide a monthly report listing every tow performed, the date and time, the violation type, the vehicle description, and the law enforcement notification confirmation. Review this report monthly - not just the total number of tows, but the pattern. Are tows concentrated in one zone? Are the same residents being towed repeatedly? Is enforcement happening at the times you specified?
            </p>
            <p>
              For a structured template, see our{" "}
              <Link href="/resources/monthly-towing-compliance-report-template" className="text-primary underline hover:text-primary/80">
                monthly towing compliance report template
              </Link>
              . This resource also includes the sections your board, management company, or insurer will most likely want to see.
            </p>
            <p>
              For ongoing day-to-day management, our{" "}
              <Link href="/resources/parking-enforcement-checklist-for-property-managers" className="text-primary underline hover:text-primary/80">
                parking enforcement checklist for property managers
              </Link>{" "}
              gives you a weekly routine that keeps the program running smoothly without becoming a full-time job.
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

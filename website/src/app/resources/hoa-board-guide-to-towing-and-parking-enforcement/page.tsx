import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/hoa-board-guide-to-towing-and-parking-enforcement.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at an Arizona HOA gated community entrance with board-authorized enforcement - Axle Towing";
const PAGE_TITLE = "HOA Board Guide to Towing and Parking Enforcement: What New Board Members Need to Know";
const PAGE_DESCRIPTION =
  "Written for new HOA board members. Covers CC&R alignment, liability protection, how to evaluate a towing partner, and what a good vs. bad monthly report looks like.";
const CANONICAL = "https://axletowing.com/resources/hoa-board-guide-to-towing-and-parking-enforcement";
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
    question: "Does the HOA need board approval to start a towing program?",
    answer:
      "In most associations, yes - implementing a new towing enforcement program requires a board vote, and in some cases a membership vote depending on the extent of the changes. Review your CC&Rs and bylaws before taking any action. If parking enforcement authority is already granted in your governing documents, the board can typically authorize a towing agreement by vote. If the CC&Rs need to be amended to grant that authority, a more formal process is required.",
  },
  {
    question: "What liability does the HOA board face if a wrongful tow occurs?",
    answer:
      "Board liability for wrongful tows typically turns on whether the board acted in good faith under its governing documents and authorized the tow through proper channels. Boards that maintain compliant signage, a signed towing authorization agreement, and documentation for each tow are in a significantly stronger position than those acting informally. Your towing partner should indemnify you for tows they perform under your authorization - confirm this in the agreement. Individual board members generally have protection under the business judgment rule when acting in good faith.",
  },
  {
    question: "Can the HOA tow a homeowner's vehicle, or only tenants and guests?",
    answer:
      "Yes. The HOA's authority to enforce parking rules under the CC&Rs applies to all vehicles on association property, including vehicles owned by homeowners. A homeowner who violates the association's parking rules is subject to the same consequences as a tenant or guest, including towing. This is one of the reasons clear, consistently applied written rules are important - inconsistent enforcement based on ownership status can create discrimination claims.",
  },
  {
    question: "How often should the board review the towing program?",
    answer:
      "At minimum, the board should receive a summary towing report monthly and conduct a formal review of the overall program annually. The annual review should cover: tow volume and patterns, compliance with the authorization agreement, any complaints or disputes, signage condition, and whether the towing partner's performance meets the contracted standards. The monthly report gives you data to act on; the annual review gives you the strategic view.",
  },
  {
    question: "What is the difference between a towing authorization agreement and a towing policy in the CC&Rs?",
    answer:
      "The towing authorization agreement is a contract between the HOA (or its property manager) and the specific towing company. It grants that company permission to remove vehicles from association property and defines the terms of service. The towing policy in the CC&Rs or rules and regulations is the internal governing document that defines what parking violations subject a vehicle to towing, and the process for enforcement. Both are necessary. The CC&Rs establish authority; the authorization agreement operationalizes it.",
  },
  {
    question: "What should the HOA do if the towing company is not performing well?",
    answer:
      "Start by documenting the specific performance failures - missed patrols, inadequate documentation, slow response times, or escalating complaints. Raise the issues formally with the towing company in writing, referencing the contract terms they are not meeting. If performance does not improve within a reasonable period, most well-drafted towing agreements include a 30-day written notice termination clause. Use it if necessary. Before terminating, confirm that your replacement towing partner can begin service immediately so there is no gap in enforcement.",
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
              { name: "HOA Board Guide to Towing", url: CANONICAL },
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
              slug: "hoa-board-guide-to-towing-and-parking-enforcement",
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
            "name": "How to Set Up HOA Parking Enforcement in Arizona",
            "description": "Step-by-step guide for HOA boards to establish a legally compliant parking enforcement program.",
            "author": { "@type": "Organization", "name": "Axle Towing & Impound", "url": "https://axletowing.com" },
            "step": [
              { "@type": "HowToStep", "name": "Pass a Board Resolution", "text": "Hold a formal board vote authorizing a parking enforcement program. Document the vote in board minutes." },
              { "@type": "HowToStep", "name": "Review CC&Rs", "text": "Confirm your CC&Rs authorize parking enforcement and towing. Note any specific notice or voting requirements." },
              { "@type": "HowToStep", "name": "Install ARS-Compliant Signage", "text": "Install signage meeting ARS 9-499.05 at every parking area entrance before enforcement begins." },
              { "@type": "HowToStep", "name": "Execute Towing Authorization Agreement", "text": "Sign a standing authorization agreement with a licensed towing company designating them as the HOA's enforcement agent." },
              { "@type": "HowToStep", "name": "Send 30-Day Resident Notice", "text": "Notify all homeowners in writing at least 30 days before enforcement begins. Include the towing company name and contact number." },
              { "@type": "HowToStep", "name": "Begin Enforcement and Review Monthly", "text": "Start enforcement and review monthly tow reports from your towing partner. Adjust enforcement areas or schedules as patterns emerge." }
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
            <span className="text-white">HOA Board Guide</span>
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
          <p className="text-gray-800 leading-relaxed">HOA boards in Arizona have specific legal authority to enforce parking rules on common area and private streets under CC&Rs and ARS 28-3511. Before an HOA can authorize towing, the board must pass a resolution, install ARS 9-499.05-compliant signage, execute a towing authorization agreement, and distribute 30-day notice to all homeowners. Volunteer board members should never personally confront residents about parking — professional towing enforcement removes that burden. Documentation of every tow protects the HOA in CC&R disputes and legal challenges.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>HOA boards need a formal board resolution, compliant signage, and a towing authorization agreement before enforcement can begin.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 28-3511 authorizes HOA-authorized towing from HOA common areas and private streets within the community.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>30-day advance notice to all homeowners is strongly recommended before a new parking enforcement program launches.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Board members should never personally confront residents — professional towing removes that burden entirely.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Photo documentation on every tow protects the HOA board in CC&R disputes and legal challenges from vehicle owners.</span></li>
            </ul>
          </div>

            <p>
              You just joined the HOA board. Congratulations - and brace yourself, because parking enforcement is almost certainly going to be one of the first complaints in your inbox. It is one of the most visible issues in any community association, and one of the most legally consequential if it goes wrong. This guide gives you the foundational knowledge you need to understand how parking enforcement actually works, what the board's role is, and how to evaluate whether your current towing program is serving the community well.
            </p>

            <p className="text-sm text-gray-500 italic border-l-4 border-blue-200 pl-4">
              This page is for general informational purposes only and does not constitute legal advice. HOA governance is regulated by Arizona's Planned Community Act and Condominium Act, as well as your specific CC&Rs, bylaws, and rules and regulations. Consult your HOA attorney for guidance specific to your association.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Understanding the Legal Foundation: CC&Rs and Towing Authority
            </h2>
            <p>
              The HOA's authority to enforce parking rules - including the authority to have vehicles towed - comes from its governing documents: the Covenants, Conditions, and Restrictions (CC&Rs) and any associated rules and regulations. Before the board authorizes a single tow, someone should read those documents and confirm that:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>The CC&Rs grant the association authority over parking in common areas and, if applicable, driveways or garages</li>
              <li>The association's rules and regulations define what parking violations are enforceable</li>
              <li>The enforcement mechanism (including towing) is authorized, either explicitly or by implication from the association's general enforcement powers</li>
              <li>Any required notice or hearing procedures before enforcement actions are documented and followed</li>
            </ul>
            <p>
              If your CC&Rs are vague on parking authority, or if they were written in an era before modern private-property towing was common, your HOA attorney can advise on whether a rules amendment is needed before towing can begin. Towing without CC&R authority is a serious legal risk.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Arizona Towing Law and HOAs: What the Statutes Say
            </h2>
            <p>
              Arizona's private-property towing framework is primarily governed by ARS 28-3511, which sets requirements for authorized towing from private property. ARS 9-499.05 provides the municipal framework that cities and towns use to regulate towing. Both statutes establish the baseline requirements for signage, notice, and authorization that your towing program must meet.
            </p>
            <p>
              Key points from the statute that every board member should understand:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Towing from private property requires written authorization from the property owner or authorized agent. The board (or its designated property manager) is the authorized agent for the association's common areas.</li>
              <li>Compliant signs must be posted before towing can occur. Signs with insufficient language, wrong placement, or inadequate size can void a tow. See our{" "}
                <Link href="/resources/arizona-towing-signage-requirements" className="text-primary underline hover:text-primary/80">
                  Arizona towing signage requirements guide
                </Link>{" "}
                for specifics.</li>
              <li>The towing company must notify law enforcement within 30 minutes of a tow and must provide a way for vehicle owners to locate their vehicles 24 hours a day.</li>
            </ul>
            <p>
              Always verify current requirements at{" "}
              <a href="https://www.azleg.gov/arsDetail/" className="text-primary underline" target="_blank" rel="noopener noreferrer">azleg.gov</a>
              {" "}- statutes change, and your HOA attorney should be aware of any recent amendments affecting community associations.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Liability Protection: What the Board Needs to Have in Place
            </h2>
            <p>
              A wrongful tow claim against the HOA - arguing that a vehicle was towed improperly - is one of the most common parking-related legal disputes in community associations. The best protection is a program built on a solid documented foundation.
            </p>

            {/* Liability protection callout */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-red-500 bg-red-50/40 my-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Liability Protection Checklist for HOA Boards
              </h3>
              <div className="space-y-3">
                {[
                  {
                    item: "Written authorization agreement with the towing company",
                    detail: "Signed, current, and specifying which zones, violation types, and hours are covered.",
                  },
                  {
                    item: "Compliant signage installed and documented",
                    detail: "Photos of all signs taken at installation and at each quarterly inspection.",
                  },
                  {
                    item: "Board vote documented in meeting minutes",
                    detail: "The vote authorizing the towing program and the authorization agreement should be in official minutes.",
                  },
                  {
                    item: "Written parking rules communicated to all residents",
                    detail: "Every homeowner and tenant should have received the current parking rules in writing.",
                  },
                  {
                    item: "Indemnification from the towing company",
                    detail: "Your agreement should require the towing company to indemnify the HOA for tows they perform.",
                  },
                  {
                    item: "Documentation for every tow",
                    detail: "Photos, patrol reports, and law enforcement notification records retained for each removal.",
                  },
                  {
                    item: "Consistent enforcement",
                    detail: "Uneven enforcement based on who a resident is creates discrimination claims. Rules apply to everyone equally.",
                  },
                ].map((c) => (
                  <div key={c.item} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">+</span>
                    <div>
                      <div className="font-semibold text-gray-900">{c.item}</div>
                      <div className="text-body-text text-base">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              How to Evaluate a Towing Partner for Your HOA
            </h2>
            <p>
              Not all towing companies are equally equipped to work with HOA communities. The demands of an HOA account - homeowner complaints, board reporting, sensitivity around towing owners (not just tenants) - require a company with experience in community associations.
            </p>
            <p>
              When evaluating candidates, ask the following:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>How many HOA accounts do you currently manage in the Phoenix metro?</strong> A company with deep HOA experience understands the governance constraints and the political dynamics involved.</li>
              <li><strong>What does your standard patrol report look like?</strong> Ask to see a sample. It should include every patrol visit (even those with no tows), the date and time, zones covered, violations observed, and action taken.</li>
              <li><strong>What is your documentation practice for each tow?</strong> The answer should include pre-tow photographs, a written report, and law enforcement notification confirmation.</li>
              <li><strong>How do you handle homeowner calls to dispute a tow?</strong> The company should have a clear process that does not put you in the middle of every dispute.</li>
              <li><strong>What does your authorization agreement look like?</strong> See our{" "}
                <Link href="/resources/private-property-towing-contract-guide" className="text-primary underline hover:text-primary/80">
                  towing contract guide
                </Link>{" "}
                for what to look for and what to avoid.</li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Reading the Monthly Report: Good vs. Bad
            </h2>
            <p>
              Your towing partner should provide a monthly report at the beginning of each month covering the prior month's activity. Here is how to read it:
            </p>
            <p>
              <strong>A good monthly report includes:</strong> Total tows with breakdown by violation type and zone, dates and times of all patrols (not just tows), patrol notes for visits where no tow occurred, a list of repeat violators, any unusual incidents or disputes, and confirmation that law enforcement was notified for each tow. The report should be easy to share at a board meeting without needing interpretation.
            </p>
            <p>
              <strong>A bad monthly report:</strong> Shows only a list of towed vehicles with no patrol context. Contains no record of zero-tow patrol visits (suggesting patrols may not be occurring). Lacks violation type or zone information. Does not address any complaints or disputes. Is not consistently formatted month to month. These are signs of a towing company that is not operating transparently.
            </p>
            <p>
              A report you cannot share with homeowners at a board meeting is a report that protects the towing company, not the HOA. Insist on transparency.
            </p>
            <p>
              For the full structure of what a monthly compliance report should contain, see our{" "}
              <Link href="/resources/monthly-towing-compliance-report-template" className="text-primary underline hover:text-primary/80">
                monthly towing compliance report template
              </Link>
              .
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              HOA Towing Services From Axle Towing
            </h2>
            <p>
              Axle Towing has extensive experience serving HOA communities across the Phoenix metro through our{" "}
              <Link href="/services/hoa-towing" className="text-primary underline hover:text-primary/80">
                HOA towing program
              </Link>
              . We understand the governance constraints, the board reporting requirements, and the sensitivity around homeowner relationships that distinguish HOA accounts from other property types.
            </p>
            <p>
              We provide monthly reports in a format designed for board meetings, conduct regular patrols with written reports for every visit, and maintain photo documentation for every tow. Our authorization agreements are straightforward, do not include minimum-tow clauses, and include indemnification language that protects the HOA.
            </p>
            <p>
              For new board members just getting oriented, our{" "}
              <Link href="/resources/parking-enforcement-checklist-for-property-managers" className="text-primary underline hover:text-primary/80">
                parking enforcement checklist
              </Link>{" "}
              gives you a framework for ongoing management. For the full context on starting a parking program, see our{" "}
              <Link href="/resources/how-to-start-private-property-towing-program" className="text-primary underline hover:text-primary/80">
                A-to-Z towing program runbook
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
            Free consultation for HOA boards and property managers across the Phoenix metro. 24/7 dispatch available.
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

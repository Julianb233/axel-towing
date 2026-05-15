import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Image from "next/image";

const HERO_IMAGE = "/images/seo/monthly-towing-compliance-report-template.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Phoenix area property at dusk - Axle Towing monthly compliance reporting";
const PAGE_TITLE = "Monthly Towing Compliance Report Template for Property Managers and HOA Boards";
const PAGE_DESCRIPTION =
  "A monthly report template that satisfies board, insurer, and management-company documentation requirements. Includes every section, what it captures, and why it matters.";
const CANONICAL = "https://axletowing.com/resources/monthly-towing-compliance-report-template";
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
    question: "Who should prepare the monthly compliance report - the property manager or the towing company?",
    answer:
      "In most programs, the towing company provides the underlying data (tow logs, patrol records, incident summaries) and the property manager assembles or reviews the final report. Some towing companies will prepare the entire report as part of their service. What matters is that the final report is reviewed and approved by the property manager or board before it is presented at a meeting or filed - the property manager is accountable for its accuracy.",
  },
  {
    question: "How long should we retain monthly compliance reports?",
    answer:
      "Retain reports for at least three years. Some management company agreements and insurance policies specify longer retention periods. HOA boards that keep electronic archives often retain records for the life of the board member's tenure plus several years. When in doubt, err on the side of longer retention - storage is cheap, and the ability to produce records from five years ago in a legal dispute is invaluable.",
  },
  {
    question: "What if our towing company does not provide the data we need for the report?",
    answer:
      "That is a significant red flag. A towing company that cannot provide patrol logs, photo documentation, and tow records by date and zone is not running a transparent operation. Raise the issue formally in writing and give them a defined period to correct it. If they cannot, that is grounds for finding a different towing partner. Your contract should specify reporting requirements - if it does not, add them at the next renewal.",
  },
  {
    question: "Does the monthly report need to include photos of every tow?",
    answer:
      "The monthly summary report does not need to include every photo, but your files should contain photos for each tow that can be produced on request. The report should reference that photo documentation exists and is on file. For any disputed or unusual tow, consider including the relevant photo as an exhibit to the report.",
  },
  {
    question: "Should the monthly report be shared with homeowners or residents?",
    answer:
      "HOA boards often share a summary version of the monthly report in the board meeting minutes or the community newsletter. Full reports with vehicle details are generally not shared with the broader community for privacy and legal reasons - a vehicle owner's information is sensitive data. Summarize trends, not individual tow records, when communicating with the general homeowner population.",
  },
  {
    question: "Can we use this template if we manage multiple properties?",
    answer:
      "Yes. For property management companies overseeing multiple properties, prepare one report per property per month. Do not combine properties into a single report - the data needs to be property-specific to be useful for compliance and governance purposes. Consider using a consistent template across all properties so reports are comparable and easy to review in aggregate.",
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
              { name: "Monthly Towing Compliance Report Template", url: CANONICAL },
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
              slug: "monthly-towing-compliance-report-template",
              datePublished: PUBLISHED,
              pathPrefix: "resources",
            })
          ),
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
            <span className="text-white">Monthly Report Template</span>
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
          <p className="text-gray-800 leading-relaxed">A monthly towing compliance report should include: total tows by violation type, response time averages, top violation locations, signage condition status, any disputed tows and their outcomes, and year-over-year trend comparison. This data gives property managers and HOA boards visibility into enforcement effectiveness and legal defensibility. Axle Towing provides monthly reports to all partner properties as a standard service. Using a consistent template allows month-over-month comparison and early detection of emerging violation patterns.</p>
        </div>
      </aside>

      {/* Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg space-y-10 text-body-text text-lg leading-relaxed">

          <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A monthly compliance report should include total tow count, violation types, response times, and any disputed tow outcomes.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Tracking top violation locations over time reveals systemic issues — a specific space or area that consistently attracts violations.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Signage condition should be audited monthly — a faded or damaged sign is a vulnerability in every tow at that location.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Year-over-year trend comparison shows whether enforcement is reducing violations or if the program needs recalibration.</span></li>
            <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing provides monthly compliance reports to all partner properties as part of the standard towing program.</span></li>
            </ul>
          </div>

            <p>
              A monthly towing compliance report is more than an administrative formality. It is the document that proves your{" "}
              <Link href="/services/parking-enforcement" className="text-primary underline hover:text-primary/80">
                parking enforcement program
              </Link>{" "}
              is operating as intended - that tows are authorized, documented, and compliant with your property's rules and Arizona law. When a tow is challenged, when your insurer asks for records, or when your HOA board wants accountability, the monthly report is what you reach for. This template gives you a structure that meets the requirements of most boards, insurers, and management companies.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Why Monthly Reporting Matters
            </h2>
            <p>
              Most towing disputes do not arise immediately after a tow. They surface weeks or months later, often when a vehicle owner has had time to consult an attorney or file a complaint. By the time a dispute lands on your desk, your ability to defend the tow depends entirely on the records you kept at the time it happened.
            </p>
            <p>
              Monthly reporting also serves a forward-looking function. A property manager who reviews tow patterns monthly can catch enforcement gaps before they become liability exposure - a zone where violations are escalating, a sign that may have been damaged, or a patrol schedule that is not covering the hours when violations occur. The report is your early warning system.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              The Template Structure
            </h2>
            <p>
              Below is the full section structure for a compliant monthly towing report. Each section includes what data to capture and why that data matters. Your towing partner should be providing most of the underlying data; your role is to review, verify, and sign off.
            </p>

            {/* Section 1 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">1</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Cover Page and Property Identification</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> Property name and address, report period (month and year), name and contact information of the property manager or management company, name and license number of the towing company, date the report was prepared, and signature of the person certifying its accuracy.
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> Proper identification ensures the report can be matched to the right property and the right period in an audit, a dispute, or an insurance claim. An unsigned or undated report carries significantly less evidentiary weight.
              </p>
            </div>

            {/* Section 2 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">2</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Executive Summary and Key Metrics</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> Total tows this month, total patrol visits, total warnings issued (if applicable), comparison to prior month (total tows last month), and a one-paragraph narrative summary of any significant events, trends, or issues.
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> Board members and property owners may not read every detail in the report. The executive summary gives decision-makers the key information at a glance. A narrative that explains "tow volume increased 40% this month due to enforcement of new visitor parking hours" is far more useful than a table of numbers with no context.
              </p>
            </div>

            {/* Section 3 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">3</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Patrol Activity Log</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> For each patrol visit during the month: date, time (start and end), zones covered, officer name or badge number, violations observed (by type and zone), action taken (tow, warning, or no action), and a notation if any zones were inaccessible (locked gate, construction, etc.).
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> Patrol logs prove that your property is being actively monitored - not just towed reactively. They are your evidence that the enforcement program is operating continuously, which matters for both compliance and resident disputes. Zero-tow patrol visits are valuable records: they show the program is running even when violations are low.
              </p>
            </div>

            {/* Section 4 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">4</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Tow Log</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> For each tow: date and time, vehicle description (make, model, color, plate), violation type, specific location on property, name of towing officer, law enforcement agency notified and confirmation number, storage facility where vehicle was taken, and whether photo documentation is on file.
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> The tow log is the core evidentiary record for every removal. In any dispute, the first question is "is this tow on the log?" An accurate, complete log protects you from claims of unauthorized or undocumented tows and gives you the data to verify that each tow was authorized under your standing agreement.
              </p>
            </div>

            {/* Section 5 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">5</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Violations by Zone and Type</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> A breakdown of tows and warnings by zone (fire lane, ADA, reserved spaces, visitor parking, general lot) and by violation type (no permit, wrong zone, after-hours, expired permit, blocking). Ideally presented as a simple table with month-over-month comparison.
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> Patterns in violation data tell you where your enforcement program is working and where it is not. If fire-lane violations are increasing, maybe a sign was damaged or residents have learned a patrol gap. If visitor parking violations spike in a specific week each month, maybe your enforcement hours need adjustment. The zone breakdown is your diagnostic tool.
              </p>
            </div>

            {/* Section 6 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">6</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Incidents, Disputes, and Exceptions</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> Any tow that was released or contested this month, the reason for the release or contest, how it was resolved, and whether any policy change resulted. Also include any unusual incidents (confrontation with a vehicle owner, damage to property during a tow, equipment failure).
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> Disputes and exceptions tell you where the edges of your program are. A pattern of releases for the same violation type suggests the violation may not be clearly communicated to residents. A contested tow that reveals a sign gap is early warning. Documenting how disputes are resolved creates precedent for future decisions and demonstrates that the board is actively managing the program.
              </p>
            </div>

            {/* Section 7 */}
            <div className="glass-card-white rounded-2xl p-8 border-l-4 border-blue-500 bg-blue-50/40 my-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold font-heading text-sm flex items-center justify-center flex-shrink-0">7</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">Compliance Status and Recommendations</h3>
              </div>
              <p className="text-body-text text-base mb-3">
                <strong>What to capture:</strong> Current signage status (all signs compliant, any needing replacement), any signage inspection completed this month, permit system status (any expired permits or unregistered vehicles identified), and any recommendations from the towing company or property manager for policy or operational changes.
              </p>
              <p className="text-body-text text-base">
                <strong>Why it matters:</strong> This section turns the report from a backward-looking record into a forward-looking management tool. Recommendations give the board actionable items at the next meeting rather than just a history of what happened.
              </p>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12">
              Connecting the Report to Your Broader Documentation System
            </h2>
            <p>
              The monthly compliance report summarizes data that comes from three sources: your towing partner's patrol logs and tow records, your own permit and resident records, and any direct communications (complaints, disputes, board inquiries) that occurred during the month. Keeping these sources current and organized makes the monthly report a 30-minute exercise rather than a two-hour research project.
            </p>
            <p>
              For the day-to-day management that feeds into the monthly report, see our{" "}
              <Link href="/resources/parking-enforcement-checklist-for-property-managers" className="text-primary underline hover:text-primary/80">
                parking enforcement checklist
              </Link>
              . For HOA boards that need to present this report at association meetings, our{" "}
              <Link href="/resources/hoa-board-guide-to-towing-and-parking-enforcement" className="text-primary underline hover:text-primary/80">
                HOA board guide
              </Link>{" "}
              covers the governance context. For properties just setting up a program, the{" "}
              <Link href="/resources/how-to-start-private-property-towing-program" className="text-primary underline hover:text-primary/80">
                towing program runbook
              </Link>{" "}
              walks you through every phase from scratch.
            </p>
            <p>
              Axle Towing provides monthly patrol reports in a format designed to satisfy the requirements of most HOA boards, management companies, and insurers. If you are starting a new program or transitioning from another towing company, contact us to discuss how our reporting system can integrate with your existing documentation requirements.
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

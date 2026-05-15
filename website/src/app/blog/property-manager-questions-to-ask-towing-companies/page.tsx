import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/property-manager-questions-to-ask-towing-companies.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck at a Phoenix area apartment complex - Axle Towing Q&A for property managers";
const CANONICAL = "https://axletowing.com/blog/property-manager-questions-to-ask-towing-companies";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "20 Questions to Ask a Towing Company | Property Managers",
  description: "Complete vetting checklist for property managers interviewing towing companies in Arizona. Licensing, insurance, ARS compliance, documentation, and reporting questions.",
  keywords: "questions to ask towing company property manager, towing company vetting checklist, how to vet a towing company arizona, towing company interview questions, private property impound company checklist",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "20 Questions to Ask a Towing Company | Property Managers",
    description: "A 20-question vetting checklist for property managers evaluating towing companies for Arizona private property enforcement.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "How long does it take to set up a towing agreement with a new company?",
    answer: "With a professional towing company, the process typically takes one to two weeks from first contact to active enforcement. The timeline includes a property walkthrough, signage audit, agreement review and signing, and installation of any new or replacement signage. Rushing this process is not advisable — getting the signage and agreement right before the first tow is essential.",
  },
  {
    question: "Should my towing agreement be reviewed by an attorney?",
    answer: "For large properties, HOA communities with extensive parking rules, or any situation where your board or ownership has concerns about the terms, having legal counsel review the agreement is a reasonable precaution. A professionally drafted towing agreement protects both parties and should be clear enough that an attorney's review raises no serious issues.",
  },
  {
    question: "Can a towing company remove any vehicle from my property?",
    answer: "No. Under ARS 28-3511, the towing company may only remove vehicles that violate the conditions established in the towing agreement and that violate the signage posted on the property. Tows outside those parameters can be disputed and may create liability for both the towing company and the property owner.",
  },
  {
    question: "What should I do if a resident disputes a tow on my property?",
    answer: "Direct the resident to contact the towing company directly. A professional towing partner handles vehicle owner inquiries and disputes independently. If the resident escalates to you, request the full documentation package from your towing company (pre-tow photo, violation documentation, notification records) before engaging further.",
  },
  {
    question: "How do I verify a towing company's ADOT license?",
    answer: "Contact the Arizona Department of Transportation directly or visit the ADOT website to verify towing company licensing. Request the towing company's license number during the evaluation process and verify it before signing any agreement. Do not rely solely on the company's self-representation.",
  },
  {
    question: "How should a towing company handle a vehicle with disability plates in an unauthorized space?",
    answer: "Disability license plates and placards do not authorize parking in non-accessible spaces, fire lanes, or areas that block driveways or access routes. A vehicle with disability plates parked in an unauthorized, non-accessible space may be towed. However, this is an area where signage clarity and documentation are especially important to ensure the tow is defensible.",
  },
];

const QUESTIONS = [
  {
    section: "Licensing and Legal Compliance",
    items: [
      { n: 1, q: "What is your ADOT towing company license number, and can you provide documentation?", why: "ADOT licensing is a legal requirement to operate as a towing company in Arizona. The license number can be independently verified. Any company that hesitates or cannot immediately provide this is a concern." },
      { n: 2, q: "Is your storage facility licensed separately by ADOT?", why: "The lot where vehicles are held must be separately licensed by ADOT. Many property managers do not realize this is a distinct requirement. A licensed storage facility is a legal prerequisite for operating a compliant PPI program." },
      { n: 3, q: "Can you explain your one-hour law enforcement notification requirement under ARS 28-3511?", why: "ARS 28-3511 requires towing companies to notify law enforcement within one hour of every private property removal. Non-compliance with this requirement is one of the most common grounds for a disputed tow." },
      { n: 4, q: "How do you handle municipal code requirements that exceed the state baseline, such as stricter signage rules in Tempe or Scottsdale?", why: "Some Phoenix-metro cities have towing and signage regulations that are more demanding than Arizona state law. A towing company serving the broader metro must be familiar with city-specific requirements, not just state statutes." },
      { n: 5, q: "Are you familiar with ARS 9-499.05 and the signage requirements it establishes?", why: "ARS 9-499.05 governs the signage that must be in place before a private property tow can be legally executed. A company that cannot speak to this statute in specific terms is likely not running a fully compliant program." },
    ],
  },
  {
    section: "Insurance and Financial Arrangements",
    items: [
      { n: 6, q: "Can you provide certificates of insurance for general liability, garage keepers, and commercial auto coverage?", why: "All three coverage types are necessary. General liability protects against property damage from towing operations. Garage keepers protects vehicles in storage. Commercial auto covers the truck fleet. Require certificates naming your property as an additional insured." },
      { n: 7, q: "What are the coverage limits on your general liability policy?", why: "Coverage limits vary widely. For larger properties, higher limits provide greater protection. A minimum of $1 million per occurrence / $2 million aggregate is a reasonable baseline expectation." },
      { n: 8, q: "Do you or your company offer any financial incentive to property managers or board members for tow authorizations?", why: "This is a direct red-flag screening question. Kickback-style arrangements where property managers receive payment per tow or share in storage revenue create serious legal and ethical exposure. The correct answer is an unambiguous no." },
      { n: 9, q: "Are there any fees charged to the property or management company under this agreement?", why: "A properly structured PPI agreement charges the property nothing. All towing and storage costs flow from the vehicle owner. If the towing company proposes any fees to the property, understand exactly what they are and why." },
    ],
  },
  {
    section: "Signage, Documentation, and Response",
    items: [
      { n: 10, q: "Do you provide a signage audit before beginning enforcement, and what does the audit include?", why: "Your signage is the legal foundation for every tow. Before the first vehicle is removed, the towing company should walk your property, document existing signage, identify compliance gaps, and recommend corrections. Ask to see a sample audit report." },
      { n: 11, q: "What documentation do you provide for every vehicle removed from the property?", why: "The minimum documentation package for each tow should include: pre-tow photograph of the vehicle in violation, vehicle identification (plate, make, model, color, VIN if accessible), date and time, specific violation type, and law enforcement notification record. Vague answers here are a red flag." },
      { n: 12, q: "How do you document the law enforcement notification after each tow?", why: "ARS 28-3511's one-hour notification requirement must be documented. Ask whether they maintain a call log, computer-aided dispatch record, or other written record of the notification for each tow. You need this documentation if a vehicle owner challenges the tow." },
      { n: 13, q: "What is your committed response time for calls from the property?", why: "Situations requiring urgent response — blocked fire lanes, ADA spaces, emergency access routes — need a fast, reliable response. Ask for a committed response window, not just general assurances. The dispatch line operates 24/7; verify that." },
      { n: 14, q: "What is your process for parking patrols on the property?", why: "Active patrol enforcement is different from on-call removal. Ask whether the company conducts proactive patrols of your property, how often, and whether patrol frequency is adjustable based on patterns identified in monthly reports." },
    ],
  },
  {
    section: "Reporting, Dispute Handling, and Communication",
    items: [
      { n: 15, q: "What does your monthly report include, and can you provide a sample?", why: "Monthly written reports should list every vehicle removed with date, time, violation type, and outcome. Ask for a sample. A professional company produces clean, legible reports that can be presented directly to a board or ownership group." },
      { n: 16, q: "How do vehicle owners reach you to retrieve their vehicle, and what are your storage hours?", why: "Vehicle retrieval must be available during reasonable business hours under ARS 28-874. Confirm that the storage facility has accessible hours and a direct contact line for vehicle owners. Inaccessible storage creates disputes." },
      { n: 17, q: "When a vehicle owner disputes a tow, how do you handle it?", why: "The correct answer is that the towing company handles vehicle owner disputes directly, without routing complainants back to the property manager or HOA board. This is a key operational benefit of a professional enforcement partner." },
      { n: 18, q: "Do you handle HOA board presentations or resident notifications about enforcement programs?", why: "For HOA communities and multi-family properties, initial enforcement communication to residents is important for managing expectations and reducing friction. Ask whether the company provides any support for this communication." },
      { n: 19, q: "What is your termination notice period, and are there any penalties for early termination?", why: "Review exit terms before signing. A 30-day notice period is standard. Agreements with unusually long notice periods, auto-renewal clauses, or financial penalties for early exit deserve careful review." },
      { n: 20, q: "Can you provide references from similar properties — apartment complexes, HOAs, or commercial centers of comparable size?", why: "References from similar property types are the most relevant. An HOA board evaluating a towing company benefits most from hearing about the company's HOA experience, not their roadside service record." },
    ],
  },
];

export default function Page() {
  const faqSchemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const articleSchemaObj = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "20 Questions to Ask a Towing Company | Property Managers",
    description: "A 20-question vetting checklist for property managers interviewing towing companies for private property enforcement in Arizona.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    image: HERO_IMAGE_URL,
    author: {
      "@type": "Organization",
      name: "Axle Towing & Impound",
      url: "https://axletowing.com",
      knowsAbout: ["Arizona private property towing", "ARS 28-3511", "HOA parking enforcement", "Property management"],
      areaServed: "Phoenix metro, Arizona",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Axle Towing Operations Team",
      description: "ARS-compliant private property towing operators serving the Phoenix metro since 2021",
    },
    publisher: {
      "@type": "Organization",
      name: "Axle Towing & Impound",
      logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" },
    },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaObj, articleSchemaObj]) }}
      />

      {/* Hero */}
      <section className="min-h-[40vh] flex items-end relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.10),transparent_60%)] z-[1]" />
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Property Manager Resources</span>
            <span className="text-sm text-blue-200/60">15 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            20 Questions to Ask a{" "}
            <span className="text-gradient">Towing Company</span>
          </h1>
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
          <p className="text-gray-800 leading-relaxed">Before signing a towing contract, Arizona property managers should ask at least 10 key questions covering compliance, documentation, response times, and dispute handling. The most important: Does the company know the one-hour law enforcement notification requirement under ARS 28-3511? Can they provide a standing authorization agreement? How do they handle vehicle owner disputes? What documentation is provided after each tow? How do they handle ADA and fire lane cases differently? Asking these questions upfront separates professional operators from non-compliant ones.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 max-w-none prose-lg">

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Always ask whether the towing company knows the one-hour law enforcement notification requirement under ARS 28-3511 — this is a compliance litmus test.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>A standing authorization agreement lets the company tow without calling you each time — essential for practical enforcement.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Photo documentation after every tow is non-negotiable — it&apos;s the property manager&apos;s protection in any dispute.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Ask for the company&apos;s process when a vehicle owner disputes a tow — professional operators have a clear, documented response.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Verify the company carries adequate liability insurance and can provide a certificate of insurance for your records.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Vetting a towing company is not a five-minute conversation. A towing agreement gives an outside company the authority to remove vehicles from your property in your name — often without a call to you first. Getting that decision right requires asking specific questions that reveal whether the company is operating a fully compliant, professionally managed program or cutting corners that will eventually create problems for your property.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                This checklist covers four evaluation categories: licensing and legal compliance, insurance and financial arrangements, signage and documentation, and reporting and dispute handling. Work through these questions in your initial interview with any prospective towing company. Their answers will tell you more than any marketing material.
              </p>

              {/* Question sections */}
              {QUESTIONS.map((section) => (
                <div key={section.section}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{section.section}</h2>
                  <div className="space-y-5">
                    {section.items.map((item) => (
                      <div key={item.n} className="glass-card-white rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{item.n}</span>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                            <p className="text-gray-600 text-sm"><strong className="text-gray-700">Why it matters:</strong> {item.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Use This Checklist</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Work through these questions in order during an initial conversation or walkthrough with the towing company. Bring a printed copy and take notes on the responses. Unsatisfactory or evasive answers to any of the licensing, insurance, or documentation questions (numbers 1-14) should be disqualifying or require significant follow-up before proceeding.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The reporting and communication questions (numbers 15-20) help you understand what the ongoing working relationship will look like. A company that cannot describe a monthly report, does not have a process for vehicle owner disputes, or cannot provide references is not yet operating at the professional standard your property deserves.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">After the Interview: Next Steps</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once you have completed the interview and received satisfactory answers, the next steps before any tow is executed are:
              </p>
              <ol className="text-gray-600 space-y-3 mb-8">
                {[
                  "Request and receive certificates of insurance — do not rely on verbal assurances",
                  "Independently verify the ADOT license number",
                  "Review the written towing agreement in full before signing — know the scope of authority, termination provisions, and your obligations",
                  "Schedule the signage audit — no enforcement should begin until the signage is confirmed compliant",
                  "Establish the reporting cadence — confirm how monthly reports will be delivered and to whom",
                  "Notify residents or tenants about the new or updated towing program before enforcement begins",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Resources for Property Managers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/blog/how-property-managers-choose-towing-companies", label: "Evaluation Framework Guide", desc: "10 questions + red flags + insurance requirements" },
                  { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", desc: "ARS 28-3511, signage, and the no-cost model" },
                  { href: "/blog/arizona-towing-signage-laws-2026-update", label: "Arizona Towing Signage Laws 2026", desc: "ARS 9-499.05 deep dive" },
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Resource Hub", desc: "Full library of guides and templates" },
                  { href: "/services/hoa-towing", label: "HOA Towing Programs", desc: "Custom programs for HOA communities" },
                  { href: "/audiences/commercial-property-managers", label: "Commercial Property Resources", desc: "Commercial parking enforcement guides" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="glass-card-white rounded-xl p-4 hover:shadow-md transition-shadow group">
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">{link.label}</p>
                    <p className="text-gray-600 text-xs mt-1">{link.desc}</p>
                  </Link>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Talk to Axle Towing</h3>
                <p className="text-gray-600 mb-6">
                  Ready to run through these questions with a licensed, insured, ARS-compliant towing company? We serve property managers, HOA boards, and commercial owners throughout the Phoenix metro and welcome detailed evaluation conversations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                </div>
              </div>

              {/* Author */}
              <div className="glass-card-white rounded-2xl p-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Phoenix metro area. Licensed, insured, and ARS-compliant.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {[
                      { href: "/blog/how-property-managers-choose-towing-companies", label: "How Property Managers Choose Towing Companies", cat: "Property Manager Resources" },
                      { href: "/blog/parking-enforcement-roi-for-property-managers", label: "Parking Enforcement ROI", cat: "Property Manager Resources" },
                      { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", cat: "Arizona Laws" },
                      { href: "/blog/arizona-towing-signage-laws-2026-update", label: "Arizona Towing Signage Laws 2026", cat: "Arizona Laws" },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block group">
                        <span className="text-xs text-primary font-semibold uppercase">{link.cat}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{link.label}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue">
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Property Manager?</h3>
                  <p className="text-gray-700 text-sm mb-4">Free private property towing programs across the Phoenix metro.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/resources/property-manager-guide" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Property Manager Guide</h3>
                  <p className="text-gray-700 text-sm">Complete towing guide for managers &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

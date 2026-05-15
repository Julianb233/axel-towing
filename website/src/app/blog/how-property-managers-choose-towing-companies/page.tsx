import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/how-property-managers-choose-towing-companies.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck outside a Phoenix area property management office - Axle Towing";
const CANONICAL = "https://axletowing.com/blog/how-property-managers-choose-towing-companies";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = PUBLISHED;

export const metadata: Metadata = {
  title: "How Property Managers Choose Towing Companies | Guide",
  description: "A property manager's evaluation framework for choosing a towing company. 10 key questions, red flags, insurance requirements, and reporting standards.",
  keywords: "how to choose towing company property manager, towing company evaluation, property manager towing guide, private property impound company arizona, best towing company phoenix",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How Property Managers Choose Towing Companies",
    description: "The property manager's evaluation framework for selecting a reliable, ARS-compliant towing partner in Arizona.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
};

const FAQS = [
  {
    question: "Should a towing company pay a property manager for tow authorizations?",
    answer: "No. Arrangements where a towing company pays a property manager or HOA board member per tow — or provides other financial incentives for authorizations — create serious legal and ethical exposure. Arizona towing regulations prohibit kickback-style arrangements. A reputable towing company will not propose them, and a property manager or board member should not accept them.",
  },
  {
    question: "What insurance should a towing company carry when operating on my property?",
    answer: "At minimum, a towing company should carry general liability insurance (typically $1 million per occurrence / $2 million aggregate), garage keepers liability (to cover vehicles in their custody), and commercial auto insurance for their fleet. Request certificates of insurance naming your property as an additional insured. Verify the policy is current, not lapsed.",
  },
  {
    question: "How often should my towing company provide reports?",
    answer: "Monthly written reports are the standard for professionally managed properties. Each report should list every vehicle removed, including date, time, vehicle description, violation type, and outcome (claimed by owner, in storage, or lien process). Properties with active enforcement may benefit from weekly summaries. This documentation is essential for board presentations and dispute resolution.",
  },
  {
    question: "What is a standing towing authorization?",
    answer: "A standing authorization is a provision in your towing agreement that designates the towing company as your authorized agent for vehicle removal. Under ARS 28-3511, this means the towing company may remove unauthorized vehicles without calling you each time, provided compliant signage is posted. Without a standing authorization, every tow requires a direct call from the property owner.",
  },
  {
    question: "Can I switch towing companies if I am unhappy with my current provider?",
    answer: "Yes. Review your towing agreement for termination provisions — most include a notice period (typically 30-60 days). Before switching, ensure new signage is installed with the new company's information, as the signage must match the authorized towing company. Your new towing partner should handle the transition audit, signage update, and law enforcement notification of the change.",
  },
  {
    question: "What documentation should a towing company provide for each tow?",
    answer: "For every vehicle removed, you should receive: a pre-tow photograph of the vehicle in the violation location, the vehicle identification (make, model, color, license plate, VIN if accessible), date and time of removal, the specific violation that warranted the tow, law enforcement notification record, and storage location. This documentation protects the property in the event of a dispute.",
  },
];

const RED_FLAGS = [
  { flag: "Kickback or revenue-sharing proposals", detail: "A towing company that offers to pay you per tow, share storage revenue, or provide other financial incentives is proposing an arrangement that creates legal and reputational risk. Walk away." },
  { flag: "Exclusive lockout agreements", detail: "Some towing companies require properties to use only their services under exclusivity terms that eliminate your flexibility. While an authorized towing partner is necessary, agreements that prevent you from ever using a different provider for any purpose are a red flag." },
  { flag: "No-documentation tows", detail: "Any towing company that cannot produce pre-tow photographs, vehicle documentation, and law enforcement notification records for every removal is operating in a way that exposes your property to dispute liability." },
  { flag: "Verbal agreements only", detail: "A professional towing partner insists on a written towing authorization agreement that defines authorized violations, procedures, documentation standards, and reporting. Verbal understandings are unenforceable and leave you with no recourse." },
  { flag: "Inability to explain ARS compliance", detail: "Ask a prospective towing company to explain ARS 28-3511 and your signage obligations under ARS 9-499.05. A company that cannot answer these questions confidently is likely not operating a fully compliant program." },
  { flag: "No signage audit service", detail: "Your signage is the legal foundation for every tow. A towing partner who does not offer to review your existing signage for compliance — before the first tow — is leaving you exposed to disputes from day one." },
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
    headline: "How Property Managers Choose Towing Companies",
    description: "A property manager's evaluation framework for choosing a towing company in Arizona, covering 10 key questions, red flags, insurance, and reporting standards.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.12),transparent_60%)] z-[1]" />
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
            <span className="text-sm text-blue-200/60">13 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How Property Managers{" "}
            <span className="text-gradient">Choose Towing Companies</span>
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
          <p className="text-gray-800 leading-relaxed">Choosing the right private property towing company in Arizona requires evaluating five key factors: ARS compliance knowledge, 24/7 dispatch availability, documentation practices, response time consistency, and transparent communication. The best towing companies operate under ARS 28-3511 and ARS 9-499.05, provide photo documentation on every tow, and maintain a standing authorization agreement that lets enforcement proceed without calling each time. Property managers should ask for references from similarly-sized properties and verify that the company notifies law enforcement within the required one-hour window.</p>
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
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS compliance knowledge is the most important factor — a non-compliant tow exposes the property manager to legal liability.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Standing authorization agreements allow enforcement without per-call approval, making consistent enforcement practical.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>24/7 dispatch availability is non-negotiable — parking violations don&apos;t follow business hours.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Photo documentation on every tow is essential — it&apos;s the property manager&apos;s defense if a vehicle owner disputes the removal.</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Ask for references from similarly-sized properties and verify law enforcement notification compliance before signing any contract.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Choosing a towing company is not the same as choosing a landscaper. Your parking enforcement partner operates on your property in your name, under your authorization, with direct impact on your residents or tenants, your legal exposure, and your community's quality of life. Getting the evaluation right from the start saves significant friction later.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the Selection Decision Is High-Stakes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Property managers in Phoenix, Scottsdale, Tempe, and across the metro frequently inherit towing agreements from previous management or sign with the first company that calls them. The result is often a provider who is difficult to reach, produces no documentation, and leaves the property exposed to disputes it cannot defend.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The right towing partner does more than remove vehicles. They operate as an extension of your property management function: maintaining compliant signage, documenting every removal, notifying law enforcement as required by ARS 28-3511, and handling disputes directly so your team is not drawn into contentious exchanges with vehicle owners. See our full legal framework: <Link href="/blog/arizona-private-property-towing-guide-2026" className="text-primary hover:underline">Arizona Private Property Towing Guide 2026</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10 Questions to Ask Before Signing a Towing Agreement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Use these questions in your first conversation with any prospective towing company. The answers reveal whether the company is operating a fully compliant, professionally managed program — or a bare-minimum service that exposes your property to risk.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { q: "1. Are you licensed by the Arizona Department of Transportation (ADOT)?", a: "ADOT licensing is a legal requirement for towing companies operating in Arizona. Ask for the license number and verify it directly with ADOT. A company that cannot immediately provide their license number is a concern." },
                  { q: "2. Do you carry general liability, garage keepers, and commercial auto insurance?", a: "All three coverage types are necessary. General liability covers property damage your operation might cause on site. Garage keepers covers vehicles in your custody. Commercial auto covers your trucks. Require certificates of insurance naming your property as an additional insured." },
                  { q: "3. Can you explain ARS 28-3511 and your one-hour law enforcement notification requirement?", a: "ARS 28-3511 requires the towing company to notify local law enforcement within one hour of removing a vehicle from private property. A company that is unaware of this requirement, or that has a poor track record of compliance, is exposing your property and themselves to legal challenges." },
                  { q: "4. What does your signage audit service include?", a: "Before the first tow, a professional company should audit your existing signage for compliance with ARS 9-499.05 and applicable municipal codes. Ask what they look for, how they document the audit, and whether they replace non-compliant signs." },
                  { q: "5. What documentation do you provide for every vehicle removed?", a: "The answer should include: pre-tow photograph, vehicle identification (make, model, plate, VIN), date and time, specific violation, law enforcement notification record, and storage facility location. If the answer is vague, that is a problem." },
                  { q: "6. What is your average response time for a property call?", a: "Response time matters for situations where an unauthorized vehicle is blocking a fire lane, a resident's designated space, or an ADA-accessible spot. Ask for a committed response-time window, not just a general statement about being fast." },
                  { q: "7. How will you handle disputes with vehicle owners?", a: "A professionally run company handles vehicle owner inquiries and disputes directly, without routing them back to the property manager or HOA board. Ask specifically whether vehicle owners will be directed to call the property — they should not be." },
                  { q: "8. What monthly reporting do you provide?", a: "Monthly written reports should list every vehicle removed, including violation type and outcome. Ask to see a sample report. Properties with active enforcement should also receive weekly email summaries." },
                  { q: "9. What is your termination notice period?", a: "Review the exit provisions before you sign. A 30-day notice period is reasonable. Agreements that lock you in for 12 months with no exit clause are worth scrutinizing carefully." },
                  { q: "10. Do you offer any financial incentives to property managers or board members for tow authorizations?", a: "The correct answer is no. Any company that offers to pay you per tow, share storage revenue, or provide gifts in exchange for tow authorizations is proposing an arrangement that creates legal and ethical exposure for you. It is also a red flag about their overall business practices." },
                ].map((item) => (
                  <div key={item.q} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Red Flags: When to Walk Away</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond the evaluation questions, certain behaviors and proposals should end your consideration of a towing company immediately:
              </p>
              <div className="space-y-4 mb-8">
                {RED_FLAGS.map((rf) => (
                  <div key={rf.flag} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-gray-900">{rf.flag}:</strong>{" "}
                      <span className="text-gray-600">{rf.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Insurance and Licensing: What to Verify</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before any towing agreement is signed, request and verify:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "ADOT towing company license — verify directly with ADOT, not just from the company's marketing materials",
                  "ADOT storage facility license — the lot where vehicles are held must also be separately licensed",
                  "Certificate of insurance for general liability, naming your property / management company as additional insured",
                  "Certificate of insurance for garage keepers liability — protects against claims related to vehicles in custody",
                  "Commercial auto policy covering their tow truck fleet",
                  "Confirmation that the storage facility's hours are sufficient for vehicle owners to retrieve vehicles during business hours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Reading and Interpreting Monthly Reports</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monthly reporting is one of the most valuable tools in a property manager's arsenal — and one of the most underutilized. A well-structured monthly report from your towing company allows you to:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {[
                  "Identify patterns — if the same lot section generates repeated violations, there may be a signage, striping, or permit assignment issue",
                  "Document enforcement activity for board presentations and HOA annual meetings",
                  "Defend against disputed tows — if a vehicle owner claims their vehicle was wrongly towed, the report and associated photographs are your defense",
                  "Assess whether your enforcement agreement is calibrated correctly — too many tows may indicate a permit management issue; too few may indicate under-patrolling",
                  "Demonstrate due diligence if a liability issue arises related to unauthorized parking (fire lane obstruction, ADA access)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When reviewing reports, pay attention to tow frequency by day of week and time of day. Many unauthorized parking situations cluster on specific evenings or around events in your community. Your towing agreement should allow for patrol intensity adjustments based on this data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Transition: Switching Towing Companies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are unhappy with your current provider and ready to switch, the process requires coordination to avoid a gap in enforcement coverage:
              </p>
              <ol className="text-gray-600 space-y-3 mb-6">
                {[
                  "Review your current agreement for termination notice requirements — typically 30-60 days",
                  "Select your new towing partner and sign the new agreement before providing notice to the current company",
                  "Schedule a signage audit and replacement with your new partner — new signs must display the new company's name and phone number",
                  "Provide written notice of termination to your current provider per the agreement terms",
                  "Coordinate the transition date to avoid gaps — both companies should know the effective date clearly",
                  "Notify residents or tenants of the change in towing company and updated signage through your standard communication channels",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Additional Evaluation Resources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For a more structured evaluation process, see our dedicated resources:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { href: "/blog/property-manager-questions-to-ask-towing-companies", label: "20-Question Vetting Checklist", desc: "Complete list for interviewing towing companies" },
                  { href: "/blog/parking-enforcement-roi-for-property-managers", label: "Parking Enforcement ROI", desc: "The business case for professional enforcement" },
                  { href: "/services/parking-enforcement", label: "Parking Enforcement Services", desc: "Axle Towing's patrol-based enforcement programs" },
                  { href: "/resources/property-manager-towing-hub", label: "Property Manager Hub", desc: "Guides, templates, and checklists" },
                  { href: "/services/hoa-towing", label: "HOA Towing Programs", desc: "Custom programs for homeowner associations" },
                  { href: "/audiences/apartment-complexes", label: "Apartment Complex Resources", desc: "Tenant vehicle management guides" },
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
                  Free consultation for Phoenix-metro property managers, HOA boards, and commercial owners. We walk you through our signage audit, agreement terms, documentation standards, and reporting before you commit to anything.
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
                      { href: "/blog/property-manager-questions-to-ask-towing-companies", label: "20 Questions to Ask a Towing Company", cat: "Property Manager Resources" },
                      { href: "/blog/arizona-private-property-towing-guide-2026", label: "Arizona Private Property Towing Guide 2026", cat: "Arizona Laws" },
                      { href: "/blog/parking-enforcement-roi-for-property-managers", label: "Parking Enforcement ROI", cat: "Property Manager Resources" },
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
                <Link href="/audiences/hoa" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">HOA Boards</h3>
                  <p className="text-gray-700 text-sm">Resources for homeowner associations &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

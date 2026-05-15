import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

const CANONICAL = `https://${COMPANY.domain}/tow-service-phoenix-az`;
const PAGE_TITLE = "Tow Service in Phoenix, AZ — Property Manager's Guide (2026)";
const PAGE_DESCRIPTION =
  "A property-manager guide to evaluating private property towing, parking enforcement, documentation, response time, and dispatch coverage in the Phoenix metro area.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Tow Service in Phoenix, AZ — Property Manager's Guide (2026)",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tow Service Phoenix AZ — Property Manager Guide 2026",
    description: PAGE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "Which Phoenix tow service is best for property managers?",
    a: "There is no single answer — it depends on the property's response-time needs, the kind of documentation an HOA board or asset manager needs, and how much off-site coordination overhead the property is willing to absorb. The 12-criteria comparison framework on this page is what most property managers use. Among the operators we benchmark here, Axle Towing scores 12 of 12 because the standing service is free, dispatch is 24/7 from in-metro yards, and the documentation packet is delivered automatically with every tow.",
  },
  {
    q: "How much does private property tow service cost in Phoenix?",
    a: "For property owners: nothing, when the operator runs a standing-service model. The vehicle owner pays the statutory impound and storage fees at retrieval. Some operators add ancillary charges to the property — patrol fees, sign-fabrication fees, monthly retainers, after-hours surcharges. Axle does not. Confirm the full cost map with any operator before signing — the headline-free pricing is industry-standard, but what gets billed around it is not.",
  },
  {
    q: "What's the difference between a tow service and a towing company in Phoenix?",
    a: "Functionally, the same. \"Tow service\" tends to be the language commercial property managers and HOA boards use; \"towing company\" is the language tenants and the public use. Both refer to the same Arizona-licensed operators that handle private property impounds. The difference that matters is between consensual tow services (someone calls a tow truck for their own car) and private property tow services (a property authorizes the removal of an unauthorized vehicle) — different statutes, different documentation requirements.",
  },
  {
    q: "Is it legal for a Phoenix HOA to authorize a tow without notifying the vehicle owner first?",
    a: "Yes — under Arizona Revised Statutes 28-3511, posted signage IS the notification. The vehicle owner is presumed on notice when entering a property with compliant signage at every entrance. Phoenix City Code Chapter 36 and ARS 9-499.05 specify exactly what the signage has to look like (18x24, 24/7 phone, impound lot address, the explicit tow-away language). The towing company files an impound notice with the Stolen/Abandoned Vehicle Database after the tow — that's how the vehicle owner finds the vehicle.",
  },
  {
    q: "How fast should a tow truck respond to a Phoenix property call?",
    a: "Under 30 minutes is the industry expectation for the Phoenix metro. Anything over 45 minutes makes enforcement feel arbitrary because the violation has often ended by the time the truck arrives — the offending vehicle is gone, the tenant is frustrated, the documentation is incomplete. Verify response times with a tow company by asking for the prior month's average dispatch-to-arrival time, not a marketing claim.",
  },
  {
    q: "What insurance does a Phoenix tow service need to carry?",
    a: "On-hook coverage of $100,000+ per vehicle, garage-keepers liability of $1M+, commercial auto liability of $1M+, and workers' compensation. A current Arizona Tow Operator License from ADOT is the regulatory floor; the insurance stack is the practical floor. Property managers should ask for current certificates of insurance before signing — operators that hesitate to provide them are the operators that cause property liability problems six months later.",
  },
  {
    q: "Can a Phoenix property switch tow services mid-year?",
    a: "Yes. There are no statutory exclusivity contracts for private property towing in Arizona — properties switch operators all the time, typically on a 7-30 day transition (signage swap, dispatch number change, vehicle owner notification window). Properties that find themselves locked into a multi-year contract with steep termination penalties are dealing with a non-standard service agreement; that's a yellow flag.",
  },
  {
    q: "What documentation should a tow service provide for every impound?",
    a: "The documentation packet for a defensible impound includes: photo of the vehicle in violation, photo of the posted signage proving compliance, time of arrival, time of completion, driver photo ID, dispatcher name + recorded authorization. Axle delivers this packet automatically per impound and retains it for the statutory record-keeping period. For properties that face occasional civil challenges (HOA-board appeals, vehicle-owner small-claims filings), this packet is what makes the difference.",
  },
  {
    q: "Does Axle Towing service all 40+ Phoenix metro cities?",
    a: "Yes — from yards in Phoenix (320 E. Pioneer St., 85040) and Apache Junction (1151 W. Apache Trail, 85120). The two-yard model means sub-30-minute response across the metro plus the western Pinal County corridor. See the full directory at the Arizona Towing hub.",
  },
  {
    q: "What's the right way to compare two Phoenix tow services?",
    a: "Use a 10-12 criteria scorecard rather than going on price (which is the wrong metric since standing service is free) or marketing budget (which has nothing to do with operational quality). The most-load-bearing criteria are: license + insurance, response time, in-metro yard, sign fabrication included, no exclusivity, documentation packet per impound, abandoned-vehicle handling end-to-end, and a real local presence with an owner you can meet. The comparison table on this page implements that scorecard.",
  },
];

const TOC = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "comparison-table", label: "Side-by-Side Comparison" },
  { id: "criteria", label: "12 Criteria That Matter" },
  { id: "scenarios", label: "Choose by Property Scenario" },
  { id: "switching", label: "How to Switch Operators" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Started" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tow Service in Phoenix, AZ — How Property Managers Compare and Choose (2026)",
  description: PAGE_DESCRIPTION,
  author: { "@type": "Organization", name: COMPANY.name, url: `https://${COMPANY.domain}` },
  publisher: {
    "@type": "Organization",
    name: COMPANY.name,
    logo: { "@type": "ImageObject", url: `https://${COMPANY.domain}/images/axle-towing-logo.png` },
  },
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  inLanguage: "en-US",
  about: ["Phoenix towing", "Tow service Phoenix AZ", "Towing company comparison", "Property manager"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
    { "@type": "ListItem", position: 2, name: "Tow Service Phoenix AZ", item: CANONICAL },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${CANONICAL}#localbusiness`,
  name: COMPANY.name,
  telephone: COMPANY.phone,
  url: `https://${COMPANY.domain}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "320 E. Pioneer St.",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85040",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Phoenix" },
  priceRange: "Free for property owners",
};

const COMPARISON_ROWS = [
  { criterion: "Standing service free to property", axle: "Yes", typical: "Yes (industry standard)", note: "Vehicle owner pays statutory fee at retrieval — same model across operators" },
  { criterion: "Sign fabrication + install included", axle: "Yes", typical: "Often charged separately", note: "Signs are non-trivial; ARS 9-499.05 dimensions matter for impound validity" },
  { criterion: "Patrol fees / monthly retainer", axle: "None", typical: "Sometimes", note: "Some operators add patrol fees on top of the free standing service — read the contract" },
  { criterion: "24/7 dispatch with recorded calls", axle: "Yes", typical: "Mixed", note: "After-hours response varies more than any other criterion" },
  { criterion: "Sub-30-minute average response", axle: "Yes", typical: "Varies 20-90 min", note: "Verify with prior-month data, not a marketing claim" },
  { criterion: "In-metro impound yard", axle: "Phoenix + Apache Junction (2 yards)", typical: "1 yard, sometimes 50+ miles out", note: "Out-of-metro yards make tenant retrieval harder and inflate stated response times" },
  { criterion: "Per-impound documentation packet", axle: "Auto-delivered", typical: "On request", note: "Packet = photo, signage proof, times, driver ID. Critical for board challenges + civil filings" },
  { criterion: "Abandoned vehicle handling end-to-end", axle: "Yes (cost recovered via lien sale)", typical: "Sometimes — some operators drop back at 30 days", note: "If the operator drops abandoned vehicles back, the property becomes the long-term storage facility" },
  { criterion: "Exclusivity contract / termination penalty", axle: "None", typical: "Mixed", note: "Watch for multi-year terms with steep cancellation clauses" },
  { criterion: "Worker classification (W2 vs 1099)", axle: "W2 employees", typical: "Varies — 1099 contractors common", note: "1099 driver model can create joint-employer risk for the property; verify" },
  { criterion: "Spanish-language dispatch + signage", axle: "Yes", typical: "Mixed", note: "Material in Phoenix metro — significant Spanish-speaking tenant base" },
  { criterion: "Real local presence (named owner)", axle: "Apache Junction-headquartered", typical: "Mixed — some are out-of-state franchises", note: "Local matters during the inevitable hard call" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-parking-lot.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tow Service Phoenix AZ" }]} />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-4">
            Tow Service in Phoenix, AZ — How Property Managers Compare and Choose (2026)
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Side-by-side comparison framework for the major Phoenix-metro tow operators. Twelve
            criteria, two scenarios, one decision. Free standing service, 24/7 dispatch, sub-30-minute
            response.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">Get a Property Assessment</Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/40 border-b border-blue-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-4">On This Page</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {TOC.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-gray-800 hover:text-blue-700 underline-offset-4 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quick-answer" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-red-600 bg-blue-50/60 p-6 rounded-r-xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-3">Quick Answer</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              The right Phoenix <strong>tow service</strong> for a property manager is the one that
              scores 10+ out of 12 on the criteria below — not the one with the lowest price (since
              standing service is industry-free) and not the one with the most marketing. Most
              Phoenix property managers reach <strong>{COMPANY.name}</strong> through this scorecard
              because the standing service is free, the dispatch is 24/7 from two in-metro yards,
              and the per-impound documentation packet is auto-delivered. For the broader market
              context, see the{" "}
              <Link href="/phoenix-towing" className="text-blue-700 underline hover:text-blue-900">
                Phoenix Towing 2026 Guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="comparison-table" className="py-16 bg-blue-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Side-by-Side Comparison
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            The table below compares Axle Towing &amp; Impound against the typical Phoenix-metro tow
            operator profile, criterion by criterion. We&apos;re not naming specific competitor names in
            the table — what matters more is the pattern. Use this as the starting scorecard when
            you&apos;re evaluating any operator.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="p-3 text-left">Criterion</th>
                  <th className="p-3 text-left">Axle Towing</th>
                  <th className="p-3 text-left">Typical Phoenix operator</th>
                  <th className="p-3 text-left">Why it matters</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold align-top">{row.criterion}</td>
                    <td className="p-3 align-top text-emerald-700 font-semibold">{row.axle}</td>
                    <td className="p-3 align-top">{row.typical}</td>
                    <td className="p-3 align-top text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="criteria" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            12 Criteria That Actually Matter (and How to Test Each)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Each row in the comparison table corresponds to a question you can ask any operator
            during a 20-minute discovery call. The right answer is concrete — a number, a name, a
            certificate, a specific address. Marketing language is a yellow flag; specifics are a
            green flag.
          </p>
          <ol className="space-y-5 text-gray-800">
            {[
              ["Standing service free to property", "Ask: 'Is there ANY recurring fee — patrol, sign maintenance, dispatch — billed to the property?' The right answer names every line item and confirms zero."],
              ["Sign fabrication + install included", "Ask: 'Who pays for sign fabrication and installation, and who maintains them when they're damaged?' The right answer is the operator, every time, no caveats."],
              ["No patrol fee / no retainer", "Ask: 'If our property has zero impounds in a quarter, do we still owe you anything?' The right answer is no."],
              ["24/7 dispatch with recorded calls", "Ask: 'Can you send me a sample dispatcher recording from a 2am authorization?' Operators that record calls can produce one within a day."],
              ["Sub-30-minute average response", "Ask: 'What was your average dispatch-to-arrival time last month for properties like ours?' Specific number, not a range."],
              ["In-metro impound yard", "Ask: 'What's the physical address of the yard you'd use for our property?' Map it. If it's 50+ miles out, response time is fiction."],
              ["Per-impound documentation packet", "Ask: 'Can you send me the documentation packet from your last 5 impounds at a property similar to ours?' Two-day turnaround on a redacted version is normal for an operator that produces them as standard work."],
              ["Abandoned vehicle handling end-to-end", "Ask: 'If we have an abandoned vehicle that no one claims for 60 days, what's your process?' Right answer: MVD report, statutory waiting period, lien sale; cost recovered through the sale, not billed to the property."],
              ["No exclusivity / no termination penalty", "Read the contract. Look for any multi-year auto-renewal, any cancellation fee, any 'early termination' language. Walk away from operators that have any."],
              ["Worker classification (W2 vs 1099)", "Ask: 'Are your drivers W2 employees or 1099 contractors?' If 1099, ask about the joint-employer indemnification language in your service agreement."],
              ["Spanish-language dispatch + signage", "Phoenix is 43% Hispanic by population. Bilingual dispatch + signage is operationally necessary, not a nice-to-have. Confirm both."],
              ["Real local presence (named owner)", "Ask: 'Can the owner come walk our property with us next week?' Operators with a real local presence say yes; out-of-state franchises say 'I'll see what I can do.'"],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{title}.</span>{" "}
                  <span className="text-gray-700">{body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="scenarios" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Choose by Property Scenario
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            The 12-criteria scorecard is the foundation. Below are the three most common scenarios
            we see in the Phoenix metro and the criteria each scenario should weight heavily.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "HOA / Single-Family Community",
                weight: "Documentation packet + abandoned-vehicle handling + Spanish-language signage",
                body: "HOAs face board challenges and resident appeals more than any other property type. The documentation packet per impound is the single load-bearing differentiator — without it, every contested impound becomes a board-meeting time sink. Abandoned-vehicle handling matters because abandoned RVs and project cars accumulate in HOAs disproportionately. See the dedicated guide at /services/hoa-towing.",
              },
              {
                title: "Apartment / Multifamily",
                weight: "Sub-30-min response + 24/7 dispatch + sign fabrication included + Spanish-language",
                body: "Apartments enforce overnight, and most violations happen between 10pm and 4am. Response time and 24/7 dispatch are the criteria that separate a working enforcement program from a useless one. Sign fabrication matters because complexes typically need 8-20 signs minimum (every entrance + every reserved row), and signs get hit, painted over, or stolen — replacement should be on the operator's tab. See /services/apartment-towing.",
              },
              {
                title: "Commercial / Mixed-Use",
                weight: "Insurance + in-metro yard + W2 drivers + named owner + after-hours posting strategy",
                body: "Commercial properties carry the highest civil-liability exposure when tow operations go wrong (joint-employer claims, ADA violations on accessible-spot enforcement, business-day downtime if the tow truck blocks a customer entrance). Insurance stack and worker classification are the load-bearing criteria. See /services/commercial-property-towing.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-blue-100 bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-blue-700 font-semibold mb-3">Weight heavily: {s.weight}</p>
                <p className="text-gray-800 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="switching" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            How to Switch Tow Operators (the Mechanics)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            If a property is already with a tow operator and the scorecard surfaces gaps, switching
            is straightforward. The mechanical sequence:
          </p>
          <ol className="space-y-3 text-gray-800 list-decimal pl-6 mb-6">
            <li>Send the incumbent a 30-day notice of termination (read your contract first — most agreements are at-will).</li>
            <li>Sign with the new operator (no exclusivity required).</li>
            <li>Schedule sign swap — old operator&apos;s signs come down, new operator&apos;s signs go up. Typically a single-day install.</li>
            <li>Update tenant communications: new dispatch number, parking rules unchanged unless you&apos;re also revising those.</li>
            <li>Run a 7-14 day &quot;grace window&quot; where new operator dispatches but doesn&apos;t enforce — gives tenants time to update windshield placards if applicable.</li>
            <li>Begin standard enforcement.</li>
          </ol>
          <p className="text-gray-800 leading-relaxed">
            The whole transition is usually 2-3 weeks end to end. Properties that switched to Axle
            mid-year typically saw their first &quot;arrival within 30 minutes&quot; tow within 48 hours of
            the new signage going up.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-white border border-blue-100 rounded-xl px-6 py-4">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-blue-700 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-800 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Run Axle Through the Scorecard Yourself
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Free 20-minute discovery call. We&apos;ll answer every criterion above with specifics —
            certificates, addresses, recordings, named contacts. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">Get a Property Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

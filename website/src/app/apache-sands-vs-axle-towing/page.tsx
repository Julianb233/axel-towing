import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

const CANONICAL = `https://${COMPANY.domain}/apache-sands-vs-axle-towing`;
const PAGE_TITLE = "Apache Sands Towing vs Axle Towing — A Property Manager's Comparison (2026) | Axle Towing";
const PAGE_DESCRIPTION =
  "Apache Junction property managers comparing Apache Sands Towing vs Axle Towing & Impound for private property service. Side-by-side on dispatch model, response time, signage, documentation, and the property-owner pricing model. 2026 buyer's guide.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Apache Sands vs Axle Towing — Property Manager Comparison (2026)",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    type: "article",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Apache Sands vs Axle Towing — 2026 Comparison",
    description: PAGE_DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "Is Apache Sands Towing a private-property tow operator?",
    a: "Apache Sands Towing is a long-established Apache Junction tow operation with a reputation primarily in consumer/roadside towing and accident recovery. They do offer some private property work; their core business model and dispatch infrastructure are oriented around the consumer side. Property managers should ask directly about their private-property service agreement structure, response-time benchmarks, and signage program before signing.",
  },
  {
    q: "Does Apache Sands Towing serve property managers in the East Valley?",
    a: "They operate in the East Valley with an Apache Junction presence. The relevant questions for a property manager are not 'do they operate here' but 'what does their standing-service agreement look like, what is their average response time on private-property calls, do they fabricate and install signage, and what's their per-impound documentation packet.' Those specifics are what determine fit for property work.",
  },
  {
    q: "What's the difference between Axle Towing and Apache Sands for an HOA or apartment?",
    a: "Both operate in the East Valley. Axle's standing-service model is purpose-built for property managers — free to the property, vehicle owner pays statutory fee at retrieval, ARS-compliant signage fabricated and installed at no cost, sub-30-minute response from the Apache Junction yard, per-impound documentation packet auto-delivered. The right comparison is to ask Apache Sands the same set of questions and compare answer for answer.",
  },
  {
    q: "Why would a property switch from Apache Sands to Axle Towing?",
    a: "The most common reasons in our conversations with property managers who've made the switch: clearer standing-service pricing (no patrol fees or retainers added later), faster average response time on private-property calls, automatic per-impound documentation packet (instead of having to request it), and bilingual dispatch + signage. Some properties stay with their incumbent if those criteria aren't load-bearing for their portfolio.",
  },
  {
    q: "How quickly can a property switch from one tow operator to another?",
    a: "2-3 weeks end-to-end, typically. The mechanical sequence: 30-day notice to incumbent (read your contract first), sign with the new operator, schedule signage swap (usually a single-day install), update tenant communications with the new dispatch number, run a 7-14 day grace window before standard enforcement resumes. There's no statutory exclusivity in Arizona that locks a property to one operator.",
  },
  {
    q: "Is it legal for an HOA to switch tow operators mid-year?",
    a: "Yes — assuming the existing agreement is at-will or has a clear termination clause. Most private-property tow service agreements in Arizona are 30-day notice, no penalty. Properties locked into multi-year terms with steep cancellation fees are dealing with a non-standard agreement; that's a red flag with the incumbent, not a switching obstacle.",
  },
  {
    q: "Does Axle Towing dispatch from a yard near Apache Junction?",
    a: "Yes — directly from Apache Junction. Axle's Apache Junction yard at 1151 W. Apache Trail (85120) is the operational hub for the East Valley and the western Pinal County corridor. Sub-30-minute response is the standard for properties inside Apache Junction, Gold Canyon, San Tan Valley, Queen Creek's eastern edge, and the broader East Valley.",
  },
  {
    q: "What should a property manager ask BOTH operators on a comparison call?",
    a: "Ten questions: (1) Average dispatch-to-arrival time last month for properties like ours? (2) Where's the physical impound yard you'd use? (3) Do you fabricate and install ARS-compliant signage at no cost? (4) Per-tow documentation packet — sample please? (5) Any patrol fees, retainers, or recurring charges to the property? (6) W2 employees or 1099 contractors? (7) Bilingual dispatch + signage? (8) Abandoned-vehicle handling end-to-end including title processing? (9) Termination terms? (10) Can the owner come walk our property next week? Compare answers side by side.",
  },
];

const TOC = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "comparison", label: "Side-by-Side Comparison" },
  { id: "criteria-questions", label: "10 Questions to Ask Both Operators" },
  { id: "switching", label: "How to Switch" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Talk to Axle" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Apache Sands Towing vs Axle Towing — A Property Manager's Comparison (2026)",
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
  about: ["Apache Sands Towing", "Axle Towing", "Apache Junction towing", "East Valley private property towing"],
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
    { "@type": "ListItem", position: 2, name: "Apache Sands vs Axle Towing", item: CANONICAL },
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
    streetAddress: "1151 W. Apache Trail",
    addressLocality: "Apache Junction",
    addressRegion: "AZ",
    postalCode: "85120",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Apache Junction" },
  priceRange: "Free for property owners",
};

const COMPARISON_ROWS = [
  {
    criterion: "Primary business orientation",
    axle: "Private property towing for property managers, HOAs, apartments, and commercial — that's the standing-service model",
    other: "Established consumer/roadside operation; private property work is part of the broader portfolio",
  },
  {
    criterion: "Standing-service agreement free to property",
    axle: "Yes — vehicle owner pays statutory fee at retrieval; nothing billed to property",
    other: "Confirm directly — varies by operator; ask about patrol fees, retainers, sign maintenance",
  },
  {
    criterion: "Sign fabrication + install at no cost",
    axle: "Included — ARS 9-499.05 compliant, replaced when damaged",
    other: "Confirm directly — some operators charge separately for fabrication or installation",
  },
  {
    criterion: "24/7 dispatch with recorded calls",
    axle: "Yes — dispatch logs every authorization and produces recordings on request",
    other: "Confirm directly — after-hours response is the criterion that varies most across operators",
  },
  {
    criterion: "Sub-30-minute average response",
    axle: "Yes for East Valley properties from the Apache Junction yard at 1151 W. Apache Trail",
    other: "Confirm directly — ask for prior-month dispatch data, not a marketing claim",
  },
  {
    criterion: "Per-impound documentation packet",
    axle: "Auto-delivered: photo of vehicle in violation, photo of signage, times, driver ID, dispatcher name",
    other: "Confirm directly — some operators provide on request only",
  },
  {
    criterion: "Bilingual dispatch + signage",
    axle: "English and Spanish — material in the East Valley with significant Spanish-speaking tenant base",
    other: "Confirm directly",
  },
  {
    criterion: "Abandoned vehicle end-to-end",
    axle: "Full chain: MVD report, statutory waiting period, title search, lien sale; cost recovered through sale, never billed to property",
    other: "Confirm directly — some operators drop abandoned vehicles back to the property after 30 days",
  },
  {
    criterion: "Exclusivity / termination penalty",
    axle: "None — properties switch in or out on 30-day notice",
    other: "Confirm directly — read the contract carefully",
  },
  {
    criterion: "Real local presence",
    axle: "Apache Junction-headquartered with named ownership available to walk properties",
    other: "Both operators are local to the East Valley",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <section
        className="parallax-fixed relative min-h-[55vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Apache Sands vs Axle Towing" }]} />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-4">
            Apache Sands Towing vs Axle Towing — A Property Manager&apos;s Comparison (2026)
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            For East Valley property managers, HOAs, apartment owners, and commercial properties
            evaluating both operators. Side-by-side on the criteria that matter for private
            property work — dispatch, response time, signage, documentation, and the
            property-owner pricing model.
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
              Both <strong>Apache Sands Towing</strong> and <strong>{COMPANY.name}</strong> operate
              in the East Valley. They are different operators with different historical
              orientations: Apache Sands is a long-established Apache Junction tow operation with a
              consumer/roadside reputation; Axle&apos;s standing-service model is purpose-built for
              property managers, HOAs, apartments, and commercial properties — free to the property,
              vehicle owner pays statutory fee at retrieval, ARS-compliant signage at no cost,
              sub-30-minute response from the Apache Junction yard, per-impound documentation
              packet auto-delivered. This page compares them on the ten criteria that matter for
              private-property work, with the questions a property manager should ask both
              operators directly.
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16 bg-blue-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Side-by-Side Comparison
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Where the table says &quot;confirm directly&quot;, that&apos;s where a property manager should put
            the question to Apache Sands directly during a discovery call — operators&apos; specifics
            change over time and the right comparison is the live one. The ten criteria below are
            the load-bearing ones for private-property work; pricing isn&apos;t on the list because
            standing service is free across the industry (what gets billed AROUND that headline is
            what varies).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="p-3 text-left">Criterion</th>
                  <th className="p-3 text-left">Axle Towing &amp; Impound</th>
                  <th className="p-3 text-left">Apache Sands Towing</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold align-top">{row.criterion}</td>
                    <td className="p-3 align-top text-emerald-700">{row.axle}</td>
                    <td className="p-3 align-top text-gray-700">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-6 italic">
            This comparison is based on Axle&apos;s direct service offering and publicly-available
            information about Apache Sands as of 2026. Property managers should always confirm
            current details with each operator directly — operating models change over time.
          </p>
        </div>
      </section>

      <section id="criteria-questions" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            10 Questions to Ask Both Operators
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            The cleanest comparison is to ask both operators the same ten questions in the same week
            and compare the answers side by side. Each question maps to one criterion above. The
            right answers are concrete — numbers, addresses, certificates, named contacts.
          </p>
          <ol className="space-y-4 text-gray-800 list-decimal pl-6">
            <li><strong>Response time:</strong> &quot;What was your average dispatch-to-arrival time last month for private-property calls in the East Valley?&quot; (Looking for a specific number, not a range.)</li>
            <li><strong>Yard location:</strong> &quot;What is the physical address of the impound yard you would use for our property?&quot; (Map it. In-metro is better than 50+ miles out.)</li>
            <li><strong>Signage:</strong> &quot;Do you fabricate and install ARS 9-499.05-compliant signage at no cost, and do you replace damaged signs at no cost?&quot;</li>
            <li><strong>Documentation packet:</strong> &quot;Can you send a redacted sample of the per-impound documentation packet from your last five tows at a property like ours?&quot; (Two-day turnaround is normal for operators that produce them as standard work.)</li>
            <li><strong>Property-billed fees:</strong> &quot;Are there ANY recurring or per-tow fees billed to the property — patrol, retainer, sign maintenance, after-hours?&quot;</li>
            <li><strong>Worker classification:</strong> &quot;Are your drivers W2 employees or 1099 contractors?&quot; (1099 model can create joint-employer indemnification issues for the property.)</li>
            <li><strong>Bilingual:</strong> &quot;Do you have bilingual dispatch and bilingual signage available?&quot;</li>
            <li><strong>Abandoned vehicles:</strong> &quot;What is your end-to-end process for an abandoned vehicle that no one claims for 60 days?&quot; (Right answer: MVD report, statutory waiting period, lien sale; cost recovered through the sale, not billed to the property.)</li>
            <li><strong>Termination terms:</strong> &quot;What does the termination clause in your service agreement say?&quot; (Read the contract; walk away from multi-year terms with steep cancellation penalties.)</li>
            <li><strong>Local presence:</strong> &quot;Can the owner or operations lead come walk our property with us next week?&quot; (Local operators say yes; absentee operators say &apos;I&apos;ll see what I can do.&apos;)</li>
          </ol>
          <p className="text-gray-800 leading-relaxed mt-6">
            Run both operators through these ten questions on the same week. The answers — not the
            marketing — tell you which operator fits your portfolio.
          </p>
        </div>
      </section>

      <section id="switching" className="py-16 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            How to Switch Tow Operators (the Mechanical Sequence)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Switching from any incumbent operator to a new one is straightforward when handled
            cleanly. The sequence:
          </p>
          <ol className="space-y-3 text-gray-800 list-decimal pl-6">
            <li>Read the current service agreement; identify the termination clause and any notice period (typically 30 days).</li>
            <li>Send formal written notice to the incumbent. Keep a copy for the property file.</li>
            <li>Sign with the new operator (no exclusivity required in Arizona).</li>
            <li>Schedule signage swap — old signs come down, new signs go up. Single-day install in most cases.</li>
            <li>Update tenant communications: new dispatch number, parking rules unchanged unless you&apos;re also revising those at the same time.</li>
            <li>Run a 7-14 day grace window where the new operator dispatches but doesn&apos;t enforce — gives tenants time to update permits or windshield placards.</li>
            <li>Begin standard enforcement.</li>
          </ol>
          <p className="text-gray-800 leading-relaxed mt-6">
            End-to-end timeline: 2-3 weeks. Properties that switched to Axle from a previous
            operator typically saw their first sub-30-minute private-property tow within 48 hours of
            new signage going up.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-blue-50/40 border border-blue-100 rounded-xl px-6 py-4">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-blue-700 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-800 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-8 italic text-center">
            Looking for the broader Phoenix-metro picture? See the{" "}
            <Link href="/phoenix-towing" className="text-blue-700 underline hover:text-blue-900">2026 Phoenix Towing Guide</Link>
            {" "}or the{" "}
            <Link href="/arizona-towing" className="text-blue-700 underline hover:text-blue-900">Arizona Towing statewide hub</Link>.
          </p>
        </div>
      </section>

      <section id="cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Apache Junction Arizona property" fill className="object-cover" />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Run Axle Through the 10 Questions
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Free 20-minute discovery call. We&apos;ll answer all ten questions above with specifics —
            real response data, current insurance certificates, named contacts. No commitment.
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

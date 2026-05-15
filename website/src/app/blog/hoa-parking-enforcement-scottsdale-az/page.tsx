import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/hoa-parking-enforcement-scottsdale-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "HOA parking enforcement in Scottsdale AZ - Axle Towing luxury community service";
const CANONICAL = "https://axletowing.com/blog/hoa-parking-enforcement-scottsdale-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "HOA Parking Enforcement Scottsdale AZ | Luxury HOA Programs",
  description: "Professional HOA parking enforcement in Scottsdale, AZ. Discreet, compliant programs for luxury and premium homeowner associations. Call Axle Towing: 480-288-5526.",
  keywords: "HOA parking enforcement scottsdale az, hoa towing scottsdale arizona, luxury hoa parking scottsdale, scottsdale homeowner association towing",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "HOA Parking Enforcement Scottsdale AZ | Luxury HOA Programs",
    description: "Professional HOA parking enforcement in Scottsdale, AZ. Discreet, compliant programs for luxury and premium homeowner associations.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOA Parking Enforcement Scottsdale AZ | Luxury HOA Programs",
    description: "Professional HOA parking enforcement in Scottsdale, AZ. Free programs for luxury and premium homeowner associations.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  {
    question: "Does Axle Towing provide HOA parking enforcement for Scottsdale luxury communities?",
    answer: "Yes. Axle Towing serves HOA communities throughout Scottsdale, from established neighborhoods in South Scottsdale to luxury master-planned communities in North Scottsdale and McDowell Mountain. Our program is professional, discreet, and provided at no cost to the HOA.",
  },
  {
    question: "How does Axle Towing handle sensitive situations in high-end Scottsdale HOAs?",
    answer: "We understand that Scottsdale luxury communities require a higher level of discretion and communication than standard residential HOAs. Our team is trained to document violations thoroughly, communicate professionally with all parties, and handle situations without creating unnecessary neighborhood conflict.",
  },
  {
    question: "Can Scottsdale HOAs enforce against short-term rental (Airbnb/VRBO) guest vehicles?",
    answer: "Yes. If a short-term rental guest parks in violation of HOA rules, the same enforcement rights apply. Arizona law does not distinguish between owner-occupants and short-term rental guests. Proper signage and documented violations are required for any tow.",
  },
  {
    question: "What documentation does Axle Towing provide to Scottsdale HOA boards?",
    answer: "Every tow from a Scottsdale HOA property is documented with time-stamped photographs of the vehicle and the violation, a written incident report, and confirmation of Scottsdale Police Department notification per ARS 28-874. This documentation is available to the HOA board upon request.",
  },
  {
    question: "How does the free HOA towing program work financially for Scottsdale associations?",
    answer: "Under Arizona's private property impound model, Axle Towing recovers all costs from the vehicle owner when they retrieve their impounded vehicle. The Scottsdale HOA or management company pays nothing for the tow, storage, or any associated fees.",
  },
  {
    question: "Can a Scottsdale HOA set up a courtesy warning system before towing?",
    answer: "Yes. Many Scottsdale HOAs prefer a courtesy notice period for certain violation types before towing begins. Axle Towing can work within a warning-first protocol for some violations while maintaining immediate removal for priority issues like fire lane blockages and handicap space violations.",
  },
];

const AREAS = [
  "North Scottsdale",
  "Old Town Scottsdale",
  "McCormick Ranch",
  "Gainey Ranch",
  "DC Ranch",
  "McDowell Mountain",
  "Grayhawk",
  "Troon Village",
  "South Scottsdale",
  "Scottsdale Ranch",
];

const RELATED = [
  { slug: "hoa-parking-enforcement-phoenix-az", title: "HOA Parking Enforcement Phoenix AZ", category: "City Guides", readTime: "9 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "hoa-towing-communication-strategies", title: "HOA Towing Communication Strategies", category: "HOA Resources", readTime: "10 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "apartment-parking-enforcement-scottsdale-az", title: "Apartment Parking Enforcement Scottsdale AZ", category: "City Guides", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const localBiz = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TowingService"],
    name: COMPANY.name,
    telephone: COMPANY.phone,
    url: `https://${COMPANY.domain}`,
    areaServed: { "@type": "City", name: "Scottsdale", containedInPlace: { "@type": "State", name: "Arizona" } },
    priceRange: "Free for HOAs",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HOA Parking Enforcement Scottsdale AZ | Luxury HOA Programs",
    description: "Professional HOA parking enforcement in Scottsdale, AZ. Discreet, compliant programs for luxury and premium homeowner associations.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: {
      "@type": "Organization",
      "name": "Axle Towing & Impound",
      "url": "https://axletowing.com",
      "knowsAbout": ["Arizona private property towing", "ARS 28-3511", "HOA parking enforcement", "Property management"],
      "areaServed": "Phoenix metro, Arizona"
    },
    reviewedBy: {
      "@type": "Organization",
      "name": "Axle Towing Operations Team",
      "description": "ARS-compliant private property towing operators serving the Phoenix metro since 2021"
    },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900 to-blue-900 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Enforcement <span className="text-gradient">in Scottsdale, AZ</span>
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

      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-6">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">TL;DR</p>
          <p className="text-gray-800 leading-relaxed">Scottsdale HOAs can enforce parking rules at zero cost under Arizona&apos;s private property impound model — all fees are paid by the vehicle owner. Axle Towing provides documentation-heavy, process-driven enforcement suited to Scottsdale&apos;s premium communities, including guard-gated estates and luxury condos. Compliant signage under ARS 9-499.05 must be posted before any tow. Professional third-party enforcement protects your board from selective-enforcement allegations while maintaining the high community standard Scottsdale residents expect.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Scottsdale's HOA communities set a high standard for community living — and that standard extends to parking. From guard-gated luxury estates in DC Ranch and Troon Village to established communities in McCormick Ranch and Gainey Ranch, Scottsdale HOA boards face the dual challenge of enforcing rules firmly while maintaining the premium experience that residents expect.
              </p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Scottsdale HOA enforcement is free to your association — Arizona&apos;s PPI model places all costs on the vehicle owner</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Premium Scottsdale communities require extra documentation and process discipline — Axle Towing provides time-stamped photos and full incident reports on every tow</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>ARS 28-3511 authorizes immediate removal once compliant signage per ARS 9-499.05 is in place — no prior notice to the driver required</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Professional enforcement shields your Scottsdale board from selective-enforcement claims while keeping the premium community atmosphere intact</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Service covers all Scottsdale HOA communities from DC Ranch and Troon to McCormick Ranch, Gainey Ranch, and Old Town-adjacent developments</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How HOA Parking Enforcement Works in Scottsdale</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Scottsdale HOA parking enforcement follows the same Arizona legal framework as the rest of the state, but the premium nature of Scottsdale communities means that process, communication, and documentation matter even more. Here is how a well-run Scottsdale HOA program operates:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Review CC&Rs for Enforceability", d: "Scottsdale HOAs often have detailed parking rules in their CC&Rs. Axle Towing reviews your existing rules to ensure enforcement can be carried out legally and consistently." },
                  { t: "Install Arizona-Compliant Signage", d: "Arizona law (ARS 9-499.05) requires specific signage before towing can be authorized. Axle Towing provides compliant signage consultation for Scottsdale HOA properties." },
                  { t: "Set Enforcement Parameters", d: "Some Scottsdale HOAs prefer a warning-first approach for certain violations. We accommodate custom enforcement protocols that fit your community's culture while maintaining legal compliance." },
                  { t: "Professional Response and Documentation", d: "Every tow is handled with full documentation — time-stamped photos, incident reports, and law enforcement notification. This protects your Scottsdale HOA in all situations." },
                  { t: "Zero Cost to the HOA", d: "Under Arizona's PPI model, all fees are paid by the vehicle owner. Your Scottsdale HOA or management company pays nothing." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Scottsdale HOAs Need Professional Parking Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                The value of Scottsdale properties is closely tied to the quality and consistency of community management. Parking violations that go unenforced signal to buyers and residents alike that the HOA is not managing effectively. In high-demand communities like DC Ranch or Grayhawk, a cluttered guest parking situation or a persistent RV in a driveway can affect perception of the entire community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Scottsdale also sees a higher rate of short-term rental activity than most Phoenix metro communities. Airbnb and VRBO guests unfamiliar with HOA rules are a growing source of parking violations in Scottsdale neighborhoods. Professional enforcement provides the consistent response that self-management cannot.
              </p>
              <div className="space-y-4 my-6 reveal">
                {[
                  { t: "Short-Term Rental Guest Violations", d: "Scottsdale leads the Phoenix metro in short-term rental density. Airbnb and VRBO guests who park in violation of HOA rules are subject to the same enforcement as any other violator. Axle Towing handles these situations professionally and without creating conflict between the host and the HOA." },
                  { t: "Luxury Vehicle Considerations", d: "Scottsdale HOAs sometimes hesitate to enforce against expensive vehicles out of concern about damage claims. Axle Towing carries full insurance and uses professional equipment. Our documentation process protects the HOA if any dispute arises." },
                  { t: "Guard-Gated Community Protocols", d: "Many North Scottsdale communities are guard-gated. Axle Towing coordinates gate access protocols with your security staff to ensure response is smooth and professional every time." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Scottsdale HOA Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Scottsdale HOA parking enforcement operates under clear Arizona statutes:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511: Authorizes removal of unauthorized vehicles from private property with proper signage — no advance notice to the vehicle owner is required.",
                  "ARS 9-499.05: Sets the sign specifications that make towing lawful. Axle Towing provides signage consultation to ensure Scottsdale HOA properties are fully compliant.",
                  "ARS 28-874: Requires notification of Scottsdale Police within one hour of any private property tow. Axle Towing handles this automatically.",
                  "Short-term rental regulations: Arizona state law (ARS 9-500.39) limits HOA authority over STR operations, but parking rules that apply to all residents apply equally to STR guests.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This is informational content and not legal advice. Scottsdale HOAs with specific legal questions about STR enforcement or CC&R interpretation should consult a licensed Arizona HOA attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Scottsdale HOA Areas We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing provides HOA parking enforcement throughout Scottsdale, including:
              </p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common HOA Parking Situations in Scottsdale</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "RV and Trailer Storage in Driveways", d: "Many Scottsdale HOA CC&Rs prohibit RVs and trailers from being stored in visible areas. These are among the most common violations in Scottsdale communities and the most visible to neighbors and prospective buyers." },
                  { t: "Commercial Vehicle Restrictions", d: "Scottsdale HOAs in residential areas typically prohibit commercial vehicles with signage from being parked overnight in driveways or on community streets. Axle Towing enforces commercial vehicle restrictions for HOAs throughout Scottsdale." },
                  { t: "Inoperable and Unregistered Vehicles", d: "Vehicles with expired registration or mechanical issues sitting in driveways or community parking areas generate frequent HOA complaints in Scottsdale. Once these vehicles meet Arizona's abandonment definition, Axle Towing can remove them." },
                  { t: "Guest Parking Violations Near Old Town and High-Density Areas", d: "In Scottsdale communities near Old Town and the entertainment corridor, short-term rental guests and event visitors create parking pressure that spills into HOA guest areas. Consistent enforcement is the only sustainable solution." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Scottsdale HOAs Choose Axle Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Scottsdale HOA boards have options when it comes to parking enforcement, but Axle Towing stands out for the combination of professional service and zero cost to the association:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Free program for HOAs under Arizona's PPI model",
                  "24/7 dispatch for all of Scottsdale including North Scottsdale and guard-gated communities",
                  "Full documentation on every tow to protect the HOA from disputes",
                  "Discreet, professional service appropriate for premium Scottsdale communities",
                  "Customizable enforcement protocols to match your community's specific culture and rules",
                  "Coordination with management companies and on-site security staff",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                For more information, see our <Link href="/blog/hoa-towing-program-setup-guide" className="text-primary hover:underline">HOA Towing Program Setup Guide</Link>, our <Link href="/audiences/hoa-boards" className="text-primary hover:underline">HOA towing services overview</Link>, or our <Link href="/locations/scottsdale" className="text-primary hover:underline">Scottsdale location page</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">HOA Parking Enforcement for Scottsdale Communities</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides professional, discreet HOA parking enforcement for Scottsdale's premium communities. Contact us to discuss your association's enforcement needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Consultation</Link>
                </div>
              </div>

              <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional HOA parking enforcement and private property towing serving Scottsdale and the Greater Phoenix metro area since 2021.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{a.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Scottsdale HOA Enforcement</h3>
                  <p className="text-gray-700 text-sm mb-4">Free programs for Scottsdale premium communities. 24/7 dispatch.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/scottsdale" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Scottsdale Location Page</h3>
                  <p className="text-gray-700 text-sm">View all towing services in Scottsdale &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

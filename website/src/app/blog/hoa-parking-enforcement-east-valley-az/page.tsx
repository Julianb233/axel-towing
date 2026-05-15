import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/hoa-parking-enforcement-east-valley-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Professional tow truck on a wide East Valley AZ HOA suburban street - Axle Towing parking enforcement";
const CANONICAL = "https://axletowing.com/blog/hoa-parking-enforcement-east-valley-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "HOA Parking Enforcement East Valley AZ | Mesa, Chandler, Gilbert",
  description: "HOA parking enforcement across the East Valley AZ. Free towing programs for Mesa, Chandler, Gilbert, Tempe, Queen Creek, and Apache Junction HOAs. Call 480-288-5526.",
  keywords: "hoa parking enforcement east valley az, east valley hoa towing, mesa chandler gilbert hoa towing, east valley parking enforcement arizona",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "HOA Parking Enforcement East Valley AZ | Mesa, Chandler, Gilbert",
    description: "Free HOA parking enforcement programs for all East Valley Arizona communities. Professional towing at no cost to your HOA.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    images: [HERO_IMAGE_URL],
    title: "HOA Parking Enforcement East Valley AZ | Mesa, Chandler, Gilbert",
    description: "Free HOA parking enforcement for Mesa, Chandler, Gilbert, Tempe, Queen Creek, and Apache Junction communities.",
  },
};

const FAQS = [
  {
    question: "What East Valley cities does Axle Towing serve for HOA parking enforcement?",
    answer: "Axle Towing provides HOA parking enforcement throughout the entire East Valley, including Mesa, Chandler, Gilbert, Tempe, Scottsdale, Queen Creek, Apache Junction, and San Tan Valley. Call 480-288-5526 to set up a program for your community.",
  },
  {
    question: "How much does HOA parking enforcement cost in the East Valley?",
    answer: "Nothing for the HOA. Under Arizona's private property impound model, all towing and storage fees are collected from the vehicle owner. East Valley HOA communities across Mesa, Chandler, Gilbert, and surrounding cities pay zero for the enforcement service.",
  },
  {
    question: "Does HOA parking enforcement work the same across all East Valley cities?",
    answer: "The core legal framework is consistent — Arizona state law governs private property towing statewide. However, some cities have additional municipal codes and signage requirements. Axle Towing is familiar with the requirements across all East Valley cities and ensures your community is compliant before enforcement begins.",
  },
  {
    question: "Can Axle Towing handle HOA parking enforcement across multiple East Valley properties?",
    answer: "Yes. Property management companies and HOA management firms that oversee multiple East Valley communities can partner with Axle Towing for streamlined enforcement across all their properties. We provide a single point of contact and consistent processes for multi-property accounts.",
  },
  {
    question: "What is the most common parking violation in East Valley HOA communities?",
    answer: "Across East Valley HOA communities, the most common violations are unauthorized vehicles in guest parking (particularly residents using guest spots long-term), inoperable or unregistered vehicles, commercial vehicles stored overnight, and RV or boat storage in restricted areas.",
  },
  {
    question: "How quickly does Axle Towing respond to East Valley HOA parking calls?",
    answer: "Dispatch is available 24/7, and typical response times across the East Valley range from 60 to 90 minutes depending on current call volume and location. We serve the entire East Valley including outer areas like Queen Creek and Apache Junction.",
  },
];

const AREAS = [
  "Mesa",
  "Chandler",
  "Gilbert",
  "Tempe",
  "Scottsdale",
  "Queen Creek",
  "Apache Junction",
  "San Tan Valley",
  "Ahwatukee",
  "Gold Canyon",
];

const RELATED = [
  {
    slug: "hoa-parking-enforcement-gilbert-az",
    title: "HOA Parking Enforcement in Gilbert, AZ",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "hoa-parking-enforcement-chandler-az",
    title: "HOA Parking Enforcement in Chandler, AZ",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-emerald-500 via-green-700 to-emerald-900",
  },
  {
    slug: "hoa-parking-enforcement-mesa-az",
    title: "HOA Parking Enforcement in Mesa, AZ",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-amber-500 via-orange-600 to-amber-800",
  },
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
    url: "https://axletowing.com",
    areaServed: [
      { "@type": "City", name: "Mesa", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Chandler", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Gilbert", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Tempe", containedInPlace: { "@type": "State", name: "Arizona" } },
    ],
    priceRange: "Free for property owners",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HOA Parking Enforcement East Valley AZ | Mesa, Chandler, Gilbert",
    description: "HOA parking enforcement across the East Valley AZ. Free towing programs for Mesa, Chandler, Gilbert, Tempe, Queen Creek, and Apache Junction HOAs.",
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
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">11 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Enforcement <span className="text-gradient">in the East Valley, AZ</span>
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
          <p className="text-gray-800 leading-relaxed">The East Valley — covering Mesa, Gilbert, Chandler, Tempe, Queen Creek, and Apache Junction — is home to the highest concentration of HOA-governed communities in the Phoenix metro. Axle Towing provides free HOA parking enforcement across the entire East Valley under Arizona&apos;s private property impound model, where all towing costs fall on the vehicle owner. East Valley HOAs need ARS 9-499.05-compliant signage at every entrance, and Axle Towing handles signage consultation as part of program setup. 24/7 dispatch covers every East Valley city.</p>
        </div>
      </aside>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>The East Valley has the highest density of HOA communities in the Phoenix metro — and Axle Towing serves them all.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Free for HOAs: Arizona&apos;s PPI model means every East Valley HOA pays nothing for professional parking enforcement.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>ARS 9-499.05 signage compliance is required before towing can begin — Axle Towing handles setup consultation.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>24/7 East Valley dispatch covers Mesa, Gilbert, Chandler, Tempe, Queen Creek, and Apache Junction.</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">→</span><span>Axle Towing documents every tow with photos and timestamps, protecting East Valley HOA boards from disputes.</span></li>
                </ul>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                The East Valley is the most HOA-dense region of the Phoenix metro area. Cities like Mesa, Chandler, Gilbert, Tempe, and Scottsdale — along with the rapidly growing outer communities of Queen Creek, Apache Junction, and San Tan Valley — contain thousands of homeowner associations ranging from small condo complexes to master-planned communities with thousands of homes. Axle Towing provides professional HOA parking enforcement across the entire East Valley at no cost to associations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How HOA Parking Enforcement Works Across the East Valley</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                While each East Valley city has its own character and municipal codes, the fundamental framework for HOA parking enforcement is consistent across the region. Here is how Axle Towing's program works for East Valley communities:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Community Onboarding", d: "We establish a written authorization agreement with your HOA board or property management company. We review your CC&Rs, parking rules, and existing signage against Arizona law requirements." },
                  { t: "Signage Compliance", d: "We confirm or help you establish compliant towing notice signage per ARS 9-499.05. Requirements can vary slightly by city, and we verify compliance before any enforcement begins." },
                  { t: "On-Demand Dispatch", d: "Your board, management firm, or designated contact calls our 24/7 dispatch team when violations need to be addressed. We serve all East Valley cities from Mesa to Apache Junction." },
                  { t: "Documentation on Every Tow", d: "Each removal is photographed and documented before action is taken. Records include vehicle description, GPS location, date, and time — protecting your HOA from disputes." },
                  { t: "Zero Cost to the HOA", d: "All costs are recovered from the vehicle owner. East Valley HOAs pay nothing under Arizona's private property impound model." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why East Valley HOAs Need Professional Parking Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                The East Valley's HOA landscape is diverse: high-rise condos in Tempe, master-planned families communities in Chandler and Gilbert, large-lot retirement communities in Mesa, and rapidly-growing new developments in Queen Creek and beyond. Across all of them, the reasons for professional enforcement are consistent:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Volunteer board members should not personally confront residents over parking violations — a professional intermediary reduces conflict",
                  "Consistent enforcement deters future violations; word spreads quickly in HOA communities that rules are actually enforced",
                  "Documentation on every tow protects the HOA from disputes and potential legal claims",
                  "Professional towing companies carry the required liability insurance and follow state-mandated procedures, reducing the HOA's legal exposure",
                  "On-demand dispatch means violations are handled quickly rather than accumulating for weeks",
                  "A trusted enforcement partner allows property managers to focus on higher-value work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and East Valley HOA Towing Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                East Valley HOAs operate under Arizona state law, giving associations clear legal authority to enforce parking rules on private property. Key statutes include:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511 authorizes removal of unauthorized vehicles from private property with proper posted signage",
                  "ARS 9-499.05 establishes towing signage requirements that every East Valley HOA must meet before enforcement can begin",
                  "ARS 28-874 allows immediate removal of vehicles blocking fire lanes, emergency routes, or driveways",
                  "Arizona's PPI (Private Property Impound) model ensures all towing costs are paid by the vehicle owner, not the HOA",
                  "Arizona HOA statutes (ARS 33-1803 for planned communities, ARS 33-1242 for condominiums) give associations authority to enforce CC&R parking provisions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This article is informational and does not constitute legal advice. For specific questions about your HOA's enforcement authority, consult a qualified Arizona attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">East Valley Cities We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing provides HOA parking enforcement throughout the East Valley, including:
              </p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Parking Situations Across East Valley HOAs</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Guest Parking Occupied Long-Term by Residents", d: "Across the East Valley — from Mesa townhomes to Chandler single-family communities — the most common complaint is residents using guest parking as permanent overflow for extra vehicles. Consistent enforcement is the only durable solution." },
                  { t: "Inoperable and Expired-Tag Vehicles", d: "Arizona's sun and heat can be hard on vehicles. Cars with flat tires, broken engines, or expired registrations are a frequent violation in East Valley HOA communities. These vehicles often sit for weeks before a formal complaint reaches the board." },
                  { t: "RV and Oversized Vehicle Storage", d: "East Valley families frequently own RVs, trailers, and boats. Most HOA CC&Rs in Mesa, Gilbert, and Chandler restrict or prohibit storing these on community streets, driveways, or in designated parking areas." },
                  { t: "Commercial Vehicle Violations", d: "Work trucks, cargo vans, and trailers operated by residents who run home-based businesses are common violations across the East Valley. CC&R enforcement requires documentation and a clear removal process." },
                  { t: "Multi-Property Management Efficiency", d: "Property management companies overseeing multiple East Valley HOAs benefit from a single enforcement partner that knows the requirements across Mesa, Chandler, Gilbert, and surrounding cities. Axle Towing works with multi-property managers to streamline enforcement across their entire portfolio." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why East Valley HOAs Choose Axle Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing is based in Phoenix and serves the entire East Valley with consistent, professional enforcement. East Valley HOA boards and property managers choose us because:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "24/7 dispatch across the entire East Valley from Tempe to Apache Junction",
                  "Zero cost to your HOA — fees are paid by vehicle owners under Arizona law",
                  "Full documentation on every tow for legal protection",
                  "City-specific signage compliance knowledge across Mesa, Chandler, Gilbert, and all East Valley cities",
                  "Experience with all community types — master-planned, condo, townhome, age-restricted",
                  "Multi-property accounts available for property management companies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                To learn more, visit our <Link href="/audiences/hoa-boards" className="text-primary underline">HOA Boards page</Link>, our{" "}
                <Link href="/resources/property-manager-towing-hub" className="text-primary underline">Property Manager Towing Hub</Link>, or our{" "}
                <Link href="/blog/parking-enforcement-east-valley-az" className="text-primary underline">East Valley parking enforcement overview</Link>.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Set Up East Valley HOA Parking Enforcement</h3>
                <p className="text-gray-600 mb-6">
                  {COMPANY.name} provides free HOA parking enforcement for all East Valley communities. One call sets up your program.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                  <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                </div>
              </div>

              <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                    <p className="text-gray-700 text-sm">Professional HOA parking enforcement serving the East Valley — Mesa, Chandler, Gilbert, Tempe, Scottsdale, Queen Creek, Apache Junction, and beyond.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">East Valley HOA Enforcement</h3>
                  <p className="text-gray-700 text-sm mb-4">Free programs for all East Valley HOA communities.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/services/hoa-towing" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">HOA Towing Services</h3>
                  <p className="text-gray-700 text-sm">Learn about our HOA enforcement programs &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

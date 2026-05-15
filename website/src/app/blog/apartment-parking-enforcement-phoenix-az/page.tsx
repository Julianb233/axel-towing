import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/seo/apartment-parking-enforcement-phoenix-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Apartment parking enforcement in Phoenix AZ - Axle Towing professional service";
const CANONICAL = "https://axletowing.com/blog/apartment-parking-enforcement-phoenix-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Apartment Parking Enforcement Phoenix AZ | Free Programs",
  description: "Professional apartment parking enforcement in Phoenix, AZ. Free towing programs for apartment managers and property owners. 24/7 dispatch. Call 480-288-5526.",
  keywords: "apartment parking enforcement phoenix az, apartment towing phoenix arizona, property manager parking phoenix, apartment complex towing phoenix",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Apartment Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional apartment parking enforcement in Phoenix, AZ. Free towing programs for apartment managers and property owners.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartment Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional apartment parking enforcement in Phoenix, AZ. Free towing programs for apartment managers.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  {
    question: "Does Axle Towing offer free apartment parking enforcement in Phoenix?",
    answer: "Yes. Axle Towing provides free apartment parking enforcement programs throughout Phoenix under Arizona's private property impound model. All towing and storage fees are paid by the vehicle owner. Property managers and owners pay nothing.",
  },
  {
    question: "How does Axle Towing handle after-hours parking violations at Phoenix apartment complexes?",
    answer: "Axle Towing operates 24/7 dispatch for Phoenix apartment parking enforcement. Unauthorized vehicles, vehicles blocking fire lanes, and vehicles in reserved spaces can be reported and removed at any hour. Our dispatch team is available nights, weekends, and holidays.",
  },
  {
    question: "What documentation does Axle Towing provide after towing from a Phoenix apartment complex?",
    answer: "After every tow from a Phoenix apartment complex, Axle Towing provides time-stamped photographs of the vehicle and violation, a written incident report, and confirmation of Phoenix Police notification per Arizona law. This documentation is stored for the property manager's records.",
  },
  {
    question: "Can Phoenix apartment managers set up recurring patrol towing agreements?",
    answer: "Yes. Axle Towing works with Phoenix apartment managers to set up recurring patrol agreements for large complexes where ongoing enforcement is needed. Patrol frequency and scope can be customized to your property's specific layout and violation patterns.",
  },
  {
    question: "What types of parking violations can Phoenix apartment managers enforce through towing?",
    answer: "Phoenix apartment managers can authorize towing for: vehicles parked in reserved spots belonging to other tenants, vehicles without valid parking permits or stickers, vehicles blocking fire lanes or dumpster access, oversized vehicles in prohibited spaces, and unauthorized vehicles in resident-only lots.",
  },
  {
    question: "How does Axle Towing handle situations where a tenant claims a tow was a mistake?",
    answer: "Every tow Axle Towing performs is fully documented. If a tenant claims a tow was an error, we review the documentation and can share it with the property manager. If there was a legitimate mistake, we work to resolve it fairly. The goal is enforcement that protects the property while maintaining professional standards.",
  },
  {
    question: "What signage do Phoenix apartment complexes need before towing can begin?",
    answer: "Arizona law (ARS 9-499.05) requires towing signs at all entry points to the parking area and at designated spaces. Signs must include the towing company name and 24-hour number and the restrictions being enforced. Axle Towing provides signage consultation for Phoenix apartment complexes as part of our program setup.",
  },
];

const AREAS = [
  "Downtown Phoenix",
  "Midtown Phoenix",
  "Arcadia",
  "North Phoenix",
  "Desert Ridge",
  "South Mountain",
  "Laveen",
  "West Phoenix",
  "Sky Harbor Corridor",
  "Maryvale",
];

const RELATED = [
  { slug: "apartment-parking-enforcement-tempe-az", title: "Apartment Parking Enforcement Tempe AZ", category: "City Guides", readTime: "9 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "5-signs-apartment-needs-parking-enforcement", title: "5 Signs Your Apartment Needs Parking Enforcement", category: "Property Management", readTime: "7 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "hoa-parking-enforcement-phoenix-az", title: "HOA Parking Enforcement Phoenix AZ", category: "City Guides", readTime: "9 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
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
    areaServed: { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    priceRange: "Free for property managers",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Apartment Parking Enforcement Phoenix AZ | Free Programs",
    description: "Professional apartment parking enforcement in Phoenix, AZ. Free towing programs for apartment managers and property owners.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: {
      "@type": "Organization",
      "name": "Axle Towing & Impound",
      "url": "https://axletowing.com",
      "knowsAbout": ["Arizona private property towing", "ARS 28-3511", "apartment parking enforcement", "Property management"],
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Property Management</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Apartment Parking Enforcement <span className="text-gradient">in Phoenix, AZ</span>
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
          <p className="text-gray-800 leading-relaxed">Phoenix apartment property managers can enforce parking at zero cost under Arizona&apos;s private property impound (PPI) model — the vehicle owner pays all towing and storage fees. From Downtown high-rises to North Phoenix garden-style complexes, Axle Towing provides 24/7 dispatch, compliant documentation, and mandatory law enforcement notification. Compliant signage per ARS 9-499.05 must be in place first. Professional enforcement reduces unauthorized parking, fire lane violations, and tenant complaints without the property manager personally confronting residents.</p>
        </div>
      </aside>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Phoenix is one of the top apartment markets in the country, with tens of thousands of units spanning everything from Downtown high-rises to sprawling garden-style complexes in North Phoenix and the Sky Harbor corridor. For property managers and owners, parking enforcement is one of the most persistent operational challenges — unauthorized vehicles, overflowed reserved spots, and fire lane violations are daily occurrences that erode tenant satisfaction and increase liability.
              </p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-cta">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Phoenix apartment parking enforcement costs the property nothing — Arizona&apos;s PPI model places all fees on the vehicle owner</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>ARS 28-3511 authorizes immediate removal from Phoenix apartment lots once ARS 9-499.05-compliant signage is posted — no prior owner notice required</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Unauthorized vehicles, fire lane violations, and permit abuse are the top parking issues at Phoenix apartment complexes — all addressable with consistent enforcement</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Axle Towing provides time-stamped photo documentation and mandatory law enforcement notification on every tow, protecting your property from liability</span></li>
                  <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>24/7 dispatch serves all Phoenix apartment communities from Downtown and Midtown to North Phoenix and the Sky Harbor corridor</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Apartment Parking Enforcement Works in Phoenix</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Effective parking enforcement for Phoenix apartment complexes requires the right legal foundation, proper signage, and a towing partner who responds quickly and documents everything:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Establish Lease-Based Rules", d: "Parking rules should be included in every lease agreement and in the community rules provided at move-in. Clear written rules that tenants have acknowledged are the foundation of defensible enforcement." },
                  { t: "Install Arizona-Compliant Signage", d: "ARS 9-499.05 requires towing signs at all entry points and designated spaces. Signs must include the towing company name, restrictions, and a 24-hour contact number. Axle Towing provides signage consultation for Phoenix apartment complexes." },
                  { t: "Define Who Can Authorize Tows", d: "Establish which staff members or management personnel can authorize towing. At large Phoenix complexes, this may include on-site managers, after-hours maintenance staff, or a 24-hour answering service. We work within whatever authorization structure you have." },
                  { t: "Report, Respond, Document", d: "When a violation is reported, Axle Towing dispatches, photographs the vehicle and violation, removes it to our secure facility, and notifies Phoenix Police per ARS 28-874. All documentation is provided to the property manager." },
                  { t: "Zero Cost to the Property", d: "Under Arizona's PPI model, all fees are recovered from the vehicle owner at pickup. The property management company or owner pays nothing." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Apartment Managers Need Professional Parking Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix's competitive apartment market means that tenant experience and property condition are directly tied to occupancy rates and rent premiums. A parking lot full of unauthorized vehicles, blocked reserved spaces, and abandoned cars signals poor management — and tenants who follow the rules notice.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix apartment complexes also carry real liability exposure from poorly managed parking. A fire truck that can't access a fire lane due to an illegally parked vehicle puts lives at risk and the property owner's insurance at stake. A tenant who slips in a parking lot with poor lighting and no enforcement records faces a property that cannot demonstrate it managed the space responsibly.
              </p>
              <div className="space-y-4 my-6 reveal">
                {[
                  { t: "Reserved Spot Theft Is a Top Tenant Complaint", d: "In Phoenix apartment complexes with assigned parking, tenants who pay for reserved spots and find them occupied are among the most frustrated renters. Fast, consistent enforcement protects what tenants are paying for." },
                  { t: "Unauthorized Vehicles Reduce Available Parking", d: "At fully-leased complexes near Sky Harbor and Downtown Phoenix, every unauthorized vehicle in a parking lot directly displaces a paying tenant. Without enforcement, the parking inventory effectively shrinks." },
                  { t: "Abandoned Vehicles Create Safety Concerns", d: "Former tenants who leave vehicles behind, neighbors who store cars on your property, and vehicles with expired tags that have been sitting for months are all common problems at Phoenix apartment complexes. Axle Towing handles abandoned vehicle removal as part of our apartment enforcement program." },
                  { t: "Fire Lane Violations Are a Legal and Safety Emergency", d: "Phoenix fire code requires fire lanes to be kept clear at all times. A vehicle blocking a fire lane at a Phoenix apartment complex is not just an HOA inconvenience — it is a life safety issue that property managers are legally responsible for addressing." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Phoenix Apartment Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Phoenix apartment parking enforcement operates under Arizona's clear private property towing framework:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511: Authorizes immediate removal of unauthorized vehicles from private property with proper signage. Property managers do not need to contact the vehicle owner before towing.",
                  "ARS 9-499.05: Specifies the sign requirements that make towing legally authorized. Non-compliant signage is the most common reason a tow is successfully challenged.",
                  "ARS 28-874: Requires notification of Phoenix Police within one hour of any private property tow. Axle Towing handles this automatically.",
                  "ARS 28-4141 through 28-4145: Governs the abandoned vehicle process including notification, lien procedures, and vehicle sale. Axle Towing manages this process for vehicles that remain unclaimed.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This content is informational and is not legal advice. Phoenix property managers with specific questions about their enforcement authority should consult a licensed Arizona attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Phoenix Apartment Areas We Serve</h2>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Apartment Parking Situations in Phoenix</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Former Tenant Vehicles", d: "One of the most common calls we receive from Phoenix apartment managers involves vehicles left behind by tenants who have moved out. Under Arizona law, these can be removed as abandoned vehicles once the proper procedures are followed. Axle Towing handles the entire process." },
                  { t: "Visitor Vehicles That Never Leave", d: "At complexes near Sky Harbor and in Midtown Phoenix, short-term visitors sometimes park and never return. These vehicles turn reserved or visitor spaces into informal long-term storage." },
                  { t: "Unauthorized Overnight Parking", d: "Many Phoenix apartment complexes have rules against overnight parking by non-residents. Consistent enforcement of overnight rules — especially on weekends — is the most effective way to prevent the problem from becoming chronic." },
                  { t: "Vehicles in Unauthorized Spaces", d: "Tenants who use reserved spots belonging to neighbors, spaces designated for accessible parking, or spots reserved for delivery and maintenance vehicles create the most immediate resident conflicts." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Phoenix Apartment Managers Choose Axle Towing</h2>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Free enforcement program — all fees paid by the vehicle owner under Arizona's PPI model",
                  "24/7 dispatch for all of Phoenix, including nights, weekends, and holidays",
                  "Complete documentation on every tow including photos and law enforcement notification",
                  "Signage consultation to ensure your complex meets Arizona legal requirements",
                  "Patrol agreements available for large Phoenix complexes with frequent violations",
                  "Abandoned vehicle management including lien and title processing for unclaimed vehicles",
                  "Fast response for emergency situations including fire lane blockages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                For more on what to look for in an enforcement partner, see our guide on <Link href="/blog/how-to-choose-towing-company-for-property" className="text-primary hover:underline">how to choose a towing company for your property</Link>. For apartment-specific resources, visit our <Link href="/audiences/apartment-managers" className="text-primary hover:underline">apartment towing services page</Link> or our <Link href="/resources/property-manager-towing-hub" className="text-primary hover:underline">property manager resource hub</Link>.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Apartment Parking Enforcement in Phoenix</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides free apartment parking enforcement programs for Phoenix property managers. Contact us to set up a program for your complex.
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
                    <p className="text-gray-700 text-sm">Professional apartment parking enforcement and private property towing serving Phoenix and the Greater Phoenix metro area since 2021.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Apartment Enforcement</h3>
                  <p className="text-gray-700 text-sm mb-4">Free programs for Phoenix apartment complexes. 24/7 dispatch.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/phoenix" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Phoenix Location Page</h3>
                  <p className="text-gray-700 text-sm">View all towing services in Phoenix &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

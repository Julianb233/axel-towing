import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/optimized/axle-towing-hoa-entrance-arizona-towing-service.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "HOA parking enforcement in Mesa AZ - Axle Towing professional service";
const CANONICAL = "https://axletowing.com/blog/hoa-parking-enforcement-mesa-az";
const PUBLISHED = "2026-05-15T00:00:00.000Z";
const MODIFIED = "2026-05-15T00:00:00.000Z";

export const metadata: Metadata = {
  title: "HOA Parking Enforcement Mesa AZ | Free Programs",
  description: "Professional HOA parking enforcement in Mesa, AZ. Free towing programs for East Valley homeowner associations. Same-day service. Call Axle Towing: 480-288-5526.",
  keywords: "HOA parking enforcement mesa az, hoa towing mesa arizona, homeowner association parking mesa, mesa az hoa towing program",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "HOA Parking Enforcement Mesa AZ | Free Programs",
    description: "Professional HOA parking enforcement in Mesa, AZ. Free towing programs for East Valley homeowner associations.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOA Parking Enforcement Mesa AZ | Free Programs",
    description: "Professional HOA parking enforcement in Mesa, AZ. Free towing programs for East Valley homeowner associations.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  {
    question: "Does Axle Towing provide free HOA parking enforcement in Mesa, AZ?",
    answer: "Yes. Axle Towing offers free HOA parking enforcement programs throughout Mesa under Arizona's private property impound model. All towing and storage fees are collected from the vehicle owner — the HOA pays nothing.",
  },
  {
    question: "What are the most common HOA parking violations in Mesa?",
    answer: "The most common HOA parking violations we handle in Mesa include vehicles without valid HOA permits, oversized vehicles such as RVs and boats in prohibited areas, inoperable or unregistered vehicles in community parking, and residents parking in designated guest or visitor spaces long-term.",
  },
  {
    question: "How does Axle Towing protect Mesa HOAs from towing liability?",
    answer: "Every tow Axle Towing performs from a Mesa HOA property is documented with time-stamped photographs, a written incident report, and confirmation of law enforcement notification as required by ARS 28-874. This documentation protects the HOA in the event a vehicle owner disputes the tow.",
  },
  {
    question: "Can Mesa HOAs tow vehicles parked on community streets?",
    answer: "If community streets within the HOA are private roads (not dedicated public streets), the HOA can authorize towing under ARS 28-3511 with proper signage. Public streets within Mesa city limits require Mesa Police or the city's code enforcement. Axle Towing can help you determine which streets are enforceable.",
  },
  {
    question: "How long does the Mesa HOA towing process take from first call to vehicle removal?",
    answer: "Response times depend on current dispatch demand and location within Mesa. For standard violations, same-day service is typical. Emergency violations such as fire lane or handicap space blockages receive priority dispatch.",
  },
  {
    question: "Does Axle Towing work with Mesa HOA management companies?",
    answer: "Yes. We regularly work with professional HOA management companies serving Mesa communities. We can set up enforcement protocols, authorize lists, and communication preferences that work within your management company's existing processes.",
  },
];

const AREAS = [
  "East Mesa",
  "Red Mountain",
  "Dobson Ranch",
  "Las Sendas",
  "Eastmark",
  "Superstition Springs",
  "Lehi / North Mesa",
  "Riverview",
];

const RELATED = [
  { slug: "hoa-parking-enforcement-phoenix-az", title: "HOA Parking Enforcement Phoenix AZ", category: "City Guides", readTime: "9 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "hoa-towing-program-setup-guide", title: "HOA Towing Program Setup Guide", category: "HOA Resources", readTime: "12 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
  { slug: "hoa-parking-enforcement-gilbert-az", title: "HOA Parking Enforcement Gilbert AZ", category: "City Guides", readTime: "8 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
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
    areaServed: { "@type": "City", name: "Mesa", containedInPlace: { "@type": "State", name: "Arizona" } },
    priceRange: "Free for HOAs",
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HOA Parking Enforcement Mesa AZ | Free Programs",
    description: "Professional HOA parking enforcement in Mesa, AZ. Free towing programs for East Valley homeowner associations.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Axle Towing & Impound", url: "https://axletowing.com" },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-blue-900 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">May 15, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Enforcement <span className="text-gradient">in Mesa, AZ</span>
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

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">

              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                Mesa is the largest suburb in the United States and one of Arizona's fastest-growing cities. With thousands of HOA-governed communities spread across its 135 square miles — from the established neighborhoods of Dobson Ranch to the master-planned master-planned development of Eastmark — Mesa HOA boards face some of the most active parking enforcement challenges in the East Valley.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How HOA Parking Enforcement Works in Mesa</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Mesa HOAs operate under the same Arizona legal framework as communities throughout the state. The key to a successful, cost-free enforcement program is combining clear written rules with proper signage and a licensed professional towing partner. Here is how the process works:
              </p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Review Your CC&Rs", d: "Your governing documents define what parking violations your HOA can enforce. Axle Towing can review your rules for enforceability under Arizona law before any enforcement begins." },
                  { t: "Install Arizona-Compliant Signage", d: "ARS 9-499.05 specifies the sign requirements that make private property towing lawful in Arizona. Axle Towing provides signage consultation for Mesa HOAs." },
                  { t: "Establish an Authorization Protocol", d: "We work with your board or management company to define who can authorize tows, how violations are reported, and how disputes are handled." },
                  { t: "Respond and Enforce", d: "When your Mesa HOA reports a violation, our team responds, documents the scene, and removes the vehicle to our secure impound facility. We notify Mesa Police per Arizona law." },
                  { t: "No Cost to the HOA", d: "Arizona's PPI model means the vehicle owner pays all fees when retrieving their car. Mesa HOAs and their boards pay nothing." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Mesa HOA Boards Need Professional Parking Enforcement</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Mesa's growth has created a diverse HOA landscape. Older established communities like Dobson Ranch have different parking challenges than new master-planned communities in Eastmark. But all of them share a common need: consistent, documented, legally defensible enforcement that doesn't burden board members or management staff.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Mesa's large household sizes — the city has one of the highest average household vehicle counts in the Phoenix metro — mean that HOA guest parking is under constant pressure. Without enforcement, guest and visitor spaces become informal permanent parking for residents' extra vehicles. This creates conflicts, generates neighbor complaints, and reduces property values.
              </p>
              <div className="space-y-4 my-6 reveal">
                {[
                  { t: "East Valley Growth Creates New HOA Challenges", d: "Fast-growing Mesa communities like Eastmark and Superstition Springs face parking challenges that newer CC&Rs may not have anticipated. Axle Towing helps HOAs identify gaps in their rules before conflicts arise." },
                  { t: "Older Mesa Communities Need Consistent Enforcement", d: "Established neighborhoods like Dobson Ranch and Red Mountain often have residents who have lived there for years and may resist newer enforcement. Professional enforcement makes the rules apply equally to everyone." },
                  { t: "HOA Boards Are Protected from Direct Conflicts", d: "When Axle Towing handles enforcement, Mesa board members are no longer the face of parking disputes. We are the professional intermediary, and we handle all documentation and follow-up." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and Mesa HOA Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Mesa HOA parking enforcement is governed by Arizona state statutes. Key statutes include:
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "ARS 28-3511: Authorizes immediate removal of unauthorized vehicles from private property with proper signage — no advance notice to the vehicle owner is required.",
                  "ARS 9-499.05: Defines the required sign specifications. Signs must display the towing company name and 24-hour number, and be posted at all entry points and enforcement zones.",
                  "ARS 28-874: Requires the towing company to notify local law enforcement within one hour of any private property tow. Axle Towing handles this for every Mesa HOA tow.",
                  "Mesa City Code: Mesa's local ordinances complement state towing law. Our team is familiar with Mesa-specific requirements for signage placement and notification.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                This is informational content only and is not legal advice. Mesa HOAs with questions about their specific governing documents should consult a licensed Arizona HOA attorney.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Mesa HOA Areas We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing provides HOA parking enforcement throughout Mesa, including:
              </p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common HOA Parking Situations in Mesa</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Oversized Vehicles in Driveways and Streets", d: "RVs, boats, and commercial trucks parked in driveways or on community streets are among the most frequent HOA complaints in Mesa. Arizona HOA rules can restrict these vehicles, and Axle Towing enforces those restrictions throughout Mesa communities." },
                  { t: "Expired Tags and Inoperable Vehicles", d: "Mesa HOAs routinely deal with vehicles that have been sitting with expired registration for months. Once these vehicles meet Arizona's definition of abandoned, they can be removed at no cost to the HOA." },
                  { t: "Permit and Decal Violations", d: "Communities in Eastmark and other newer Mesa neighborhoods that use permit systems frequently see violations from residents parking without decals or using permits from other units. Axle Towing enforces permit-based systems effectively." },
                  { t: "Blocked Driveways and Fire Lanes", d: "Fire lane and driveway blocking are priority situations in any HOA. Axle Towing provides priority response for these calls to protect both resident safety and the HOA's compliance with fire code." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                    <p className="text-gray-600">{s.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Mesa HOAs Choose Axle Towing</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                Axle Towing brings the same professional, documentation-first approach to every Mesa HOA we serve. We understand the East Valley market and the specific challenges that Mesa's diverse HOA landscape presents.
              </p>
              <ul className="text-gray-600 space-y-3 my-4 reveal">
                {[
                  "Zero cost enforcement under Arizona's PPI model — HOAs pay nothing",
                  "24/7 dispatch covering all of Mesa from Lehi to East Mesa",
                  "Complete documentation on every tow including photos, reports, and law enforcement notification",
                  "Signage consultation to bring your Mesa HOA into full Arizona compliance",
                  "Coordination with HOA management companies and self-managed boards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">
                For more detail on what goes into a successful HOA program, see our <Link href="/blog/hoa-towing-program-setup-guide" className="text-primary hover:underline">HOA Towing Program Setup Guide</Link> or visit our <Link href="/audiences/hoa-boards" className="text-primary hover:underline">HOA towing services page</Link>. You can also explore our <Link href="/locations/mesa" className="text-primary hover:underline">Mesa towing location page</Link> for full service details.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Set Up HOA Parking Enforcement in Mesa</h3>
                <p className="text-gray-600 mb-6">
                  Axle Towing provides free HOA parking enforcement programs for Mesa communities throughout the East Valley. Call us to discuss your HOA's specific needs.
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
                    <p className="text-gray-700 text-sm">Professional HOA parking enforcement and private property towing serving Mesa and the Greater Phoenix metro area since 2021.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Mesa HOA Enforcement</h3>
                  <p className="text-gray-700 text-sm mb-4">Free HOA parking enforcement for Mesa communities. 24/7 dispatch.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <Link href="/locations/mesa" className="block glass-card-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Mesa Location Page</h3>
                  <p className="text-gray-700 text-sm">View all towing services in Mesa &rarr;</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

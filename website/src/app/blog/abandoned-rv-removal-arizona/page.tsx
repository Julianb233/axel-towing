import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const HERO_IMAGE = "/images/optimized/axle-towing-rv-tow-palm-trees-phoenix-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Abandoned RV towing in Phoenix, Arizona — Axle Towing oversized vehicle removal";
const CANONICAL = "https://axletowing.com/blog/abandoned-rv-removal-arizona";
const ES_URL = "https://axletowing.com/es/blog/remocion-rv-abandonado-arizona";
const PUBLISHED = "2026-04-08T00:00:00.000Z";
const MODIFIED = "2026-04-20T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Abandoned RV Removal in Arizona | Free Service",
  description: "Free abandoned RV, boat, and trailer removal in Arizona. Oversized vehicle towing for property owners, HOAs, and commercial properties. Call 480-288-5526.",
  keywords: "abandoned rv removal arizona, abandoned rv phoenix, rv towing arizona, abandoned boat trailer removal",
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, es: ES_URL },
  },
  openGraph: {
    title: "Abandoned RV Removal in Arizona | Free Service",
    description: "Free abandoned RV, boat, and trailer removal in Arizona. Oversized vehicle towing for property owners, HOAs, and commercial properties. Call 480-288-5526.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Axle Towing & Impound"],
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abandoned RV Removal in Arizona | Free Service",
    description: "Free abandoned RV, boat, and trailer removal in Arizona. Oversized vehicle towing for property owners.",
    images: [HERO_IMAGE_URL],
  },
};

const FAQS = [
  { question: "Can an HOA have an abandoned RV towed?", answer: "Yes. If the RV violates your CC&Rs (most HOAs restrict RV parking and storage) and you have proper towing signage, the HOA can authorize the removal. Axle Towing works with HOA boards across the Phoenix metro to handle oversized vehicle removal." },
  { question: "What if the abandoned RV is too large for a standard tow truck?", answer: "Axle Towing operates heavy-duty tow trucks capable of handling Class A motorhomes and large trailers up to 26,000 lbs. We have the equipment to handle any size vehicle." },
  { question: "Is abandoned boat removal free for property owners?", answer: "Yes. Abandoned boat and trailer removal follows the same PPI model as car removal. Property owners pay nothing. The boat owner is responsible for all fees." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "abandoned-vehicle-removal-phoenix-metro", title: "Abandoned Vehicle Removal Services Phoenix Metro", category: "Services", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Abandoned RV Removal in Arizona | Free Service",
    description: "Free abandoned RV, boat, and trailer removal in Arizona. Oversized vehicle towing for property owners, HOAs, and commercial properties. Call 480-288-5526.",
    image: HERO_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Axle Towing & Impound", url: "https://axletowing.com" },
    publisher: { "@type": "Organization", name: "Axle Towing & Impound", logo: { "@type": "ImageObject", url: "https://axletowing.com/images/axle-towing-logo.png" } },
    mainEntityOfPage: CANONICAL,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"><svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Blog</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Services</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"><span className="text-gradient">Abandoned RV Removal in Arizona | Free Service</span></h1>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src={HERO_IMAGE} alt={HERO_ALT} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
          </div>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Abandoned RVs, boats, and trailers are a growing problem across the Phoenix metro area. These oversized vehicles take up multiple parking spaces, create sight-line obstructions, and are particularly difficult to deal with because of their size. If you are a property owner, HOA board member, or property manager dealing with an abandoned RV, boat, or trailer, Axle Towing can help.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Abandoned RVs Are a Bigger Problem</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Abandoned RVs create challenges that go beyond a standard abandoned car. They take up 2-4 parking spaces instead of one. They block sight lines for pedestrian and vehicle traffic. They can become shelter for unauthorized persons. They leak fluids, have propane tanks, and create fire hazards. They are more expensive and difficult to tow, which means some towing companies refuse to handle them. Arizona&apos;s extreme heat accelerates deterioration, creating additional safety concerns.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Types of Oversized Vehicles We Remove</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing handles removal of all types of oversized abandoned vehicles: Class A, B, and C motorhomes (RVs), travel trailers and fifth-wheel trailers, boat trailers with or without boats, utility trailers, flatbed trailers, enclosed cargo trailers, horse trailers, and commercial trailers.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Law and RVs on Private Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">The same Arizona statutes that govern abandoned cars also apply to RVs, boats, and trailers. Under ARS 28-3511, any unauthorized vehicle — including oversized vehicles — can be removed from private property with proper signage. Many HOA CC&Rs have specific provisions restricting RV and boat storage within the community, giving boards additional authority to enforce removal.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How RV Removal Works</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Removing an abandoned RV requires specialized equipment and expertise. Axle Towing has heavy-duty tow trucks capable of handling vehicles up to 26,000 lbs. Our drivers are trained in oversized vehicle recovery and transport. We follow the same legal process as standard abandoned vehicles — documentation, removal, law enforcement notification, owner notification, and lien processing if unclaimed.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Cost for Property Owners: Still Zero</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Even though RV removal requires more specialized equipment and effort, the cost to property owners is still zero under Arizona&apos;s PPI model. The vehicle owner pays all fees when they retrieve their RV. If the RV goes unclaimed, the towing company recovers costs through the lien and disposition process.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} provides free abandoned vehicle removal for property owners across the Phoenix metro area. Call us today.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Get Free Assessment</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Free abandoned vehicle removal.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

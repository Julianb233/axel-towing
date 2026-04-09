import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abandoned Vehicle Removal Services in Phoenix Metro",
  description: "Professional abandoned vehicle removal across 30+ Phoenix metro cities. Free for property owners. Same-day service. Call Axle Towing: 480-288-5526.",
  keywords: "abandoned vehicle removal phoenix, abandoned car removal, phoenix metro towing, vehicle removal service arizona",
  alternates: { canonical: "https://axletowing.com/blog/abandoned-vehicle-removal-phoenix-metro" },
  openGraph: { title: "Abandoned Vehicle Removal Services in Phoenix Metro", description: "Free abandoned vehicle removal across 30+ Phoenix metro cities.", url: "https://axletowing.com/blog/abandoned-vehicle-removal-phoenix-metro", type: "article" },
};

const CITIES = [
  "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria",
  "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Maricopa", "Casa Grande",
  "Apache Junction", "Anthem", "Ahwatukee", "Sun City", "Fountain Hills", "Paradise Valley",
  "Laveen", "Tolleson", "El Mirage", "Litchfield Park", "Sun Lakes", "Gold Canyon",
  "San Tan Valley", "Cave Creek", "Carefree",
];

const FAQS = [
  { question: "How fast can Axle Towing remove an abandoned vehicle?", answer: "We offer same-day service for most locations across the Phoenix metro area. After you call us at 480-288-5526, we can typically have a truck on-site within 30-60 minutes during business hours." },
  { question: "Do you remove abandoned vehicles for free?", answer: "Yes. Under Arizona's private property impound model, abandoned vehicle removal is completely free for property owners. All towing and storage costs are recovered from the vehicle owner. Property owners, HOAs, and apartment complexes pay nothing." },
  { question: "What areas does Axle Towing cover for abandoned vehicle removal?", answer: "We serve 30+ cities across the Phoenix metro area, from Buckeye and Goodyear in the west to Apache Junction and Gold Canyon in the east, and from Anthem and New River in the north to Casa Grande and Maricopa in the south." },
  { question: "What types of properties do you service?", answer: "We remove abandoned vehicles from apartment complexes, HOA communities, commercial properties, retail centers, office parks, industrial properties, churches, medical facilities, and any other private property in the Phoenix metro area." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "report-abandoned-vehicle-phoenix", title: "How to Report an Abandoned Vehicle in Phoenix", category: "City Guides", readTime: "10 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Abandoned Vehicle Removal Services <span className="text-gradient">in Phoenix Metro</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Axle Towing &amp; Impound provides professional abandoned vehicle removal across the entire Phoenix metropolitan area. With two secure impound yards in Phoenix and Apache Junction, we cover 30+ cities and respond to most calls within 30 minutes. Best of all, our service is completely free for property owners.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Our Abandoned Vehicle Removal Works</h2>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "You Call Us", d: "Call 480-288-5526 and describe the situation. We will ask about the vehicle's condition, location, and how long it has been there." },
                  { t: "We Respond Fast", d: "A tow truck is dispatched to your property. We aim for 30-minute response times across the Phoenix metro area." },
                  { t: "We Document and Remove", d: "Our driver photographs the vehicle, documents its condition, and safely tows it to our secure impound yard." },
                  { t: "We Handle All Paperwork", d: "We notify law enforcement, send certified mail to the registered owner through ADOT records, and manage the lien process if the vehicle goes unclaimed." },
                  { t: "You Pay Nothing", d: "All costs are recovered from the vehicle owner under Arizona's PPI model. Your invoice is always $0." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Types of Properties We Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 reveal">
                {[
                  { t: "Apartment Complexes", d: "Former tenant vehicles, unauthorized parking, inoperable cars" },
                  { t: "HOA Communities", d: "CC&R violations, street parking, RV/boat storage" },
                  { t: "Commercial Properties", d: "Retail centers, office parks, industrial lots" },
                  { t: "Medical Facilities", d: "Hospitals, clinics, urgent care parking areas" },
                  { t: "Religious Properties", d: "Churches, temples, mosques, event parking" },
                  { t: "Construction Sites", d: "Abandoned vehicles blocking active construction" },
                ].map((item) => (
                  <div key={item.t} className="glass-card-white rounded-xl p-4"><h3 className="font-bold text-gray-900 text-sm">{item.t}</h3><p className="text-gray-600 text-sm mt-1">{item.d}</p></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Cities We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing provides abandoned vehicle removal across the entire Phoenix metro area, including:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-6 reveal">
                {CITIES.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Property Owners Choose Axle Towing</h2>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["100% free for property owners — zero cost, ever", "Same-day service with 30-minute response times", "Two secure impound yards (Phoenix and Apache Junction)", "Full-service: documentation, law enforcement notification, owner notification, lien processing", "Licensed, insured, and compliant with all Arizona towing regulations", "24/7 dispatch available for emergencies", "Bilingual service (English and Spanish)"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Remove an Abandoned Vehicle?</h3>
                <p className="text-gray-600 mb-6">Call {COMPANY.name} for free, same-day abandoned vehicle removal anywhere in the Phoenix metro area.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Get Free Assessment</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Free abandoned vehicle removal across 30+ cities.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

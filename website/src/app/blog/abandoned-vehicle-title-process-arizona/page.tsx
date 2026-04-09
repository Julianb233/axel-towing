import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abandoned Vehicle Title Process in Arizona | ADOT Guide",
  description: "How to get a title for an abandoned vehicle in Arizona through ADOT. Mechanic's lien process, required documents, fees, and timelines explained step by step.",
  keywords: "abandoned vehicle title arizona, ADOT abandoned vehicle, mechanic lien arizona, abandoned car title process",
  alternates: { canonical: "https://axletowing.com/blog/abandoned-vehicle-title-process-arizona" },
  openGraph: { title: "Abandoned Vehicle Title Process in Arizona | ADOT Guide", description: "How to get a title for an abandoned vehicle in Arizona through ADOT. Mechanic's lien process, required documents, fees, and timelines explained step by step.", url: "https://axletowing.com/blog/abandoned-vehicle-title-process-arizona", type: "article" },
};

const FAQS = [
  { question: "Can I get the title to an abandoned car on my property?", answer: "Not directly. Arizona law requires abandoned vehicles to go through the mechanic's lien process via ADOT, which is handled by the licensed towing company. You cannot claim title to a vehicle simply because it was abandoned on your property." },
  { question: "How long does it take to get a title for an abandoned vehicle in Arizona?", answer: "The mechanic's lien process typically takes 30-60 days from the time of tow to title issuance by ADOT. This includes the required owner notification period and ADOT processing time." },
  { question: "What does ADOT charge for an abandoned vehicle title?", answer: "ADOT charges fees for processing the mechanic's lien application. These fees are paid by the towing company and recovered through the eventual sale or disposition of the vehicle. Property owners do not pay any ADOT fees." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "abandoned-vehicle-removal-phoenix-metro", title: "Abandoned Vehicle Removal Services Phoenix Metro", category: "Services", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Legal Guides</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"><span className="text-gradient">Abandoned Vehicle Title Process in Arizona | ADOT Guide</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">When a vehicle is abandoned on your property and the owner never claims it, what happens to it? In Arizona, the vehicle eventually goes through a title transfer process managed by the Arizona Department of Transportation (ADOT). This guide explains how the abandoned vehicle title process works, who can claim the vehicle, and what steps are involved.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Who Can Obtain Title to an Abandoned Vehicle?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">In Arizona, the title to an abandoned vehicle is not transferred directly to the property owner. Instead, the licensed towing company that removed and stored the vehicle has the right to file for a mechanic&apos;s lien through ADOT. Once the lien is granted, the towing company becomes the legal owner of the vehicle and can dispose of it through sale, auction, or salvage.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Mechanic's Lien Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">The mechanic&apos;s lien process in Arizona follows these steps: The towing company tows and stores the vehicle. Law enforcement is notified of the tow. The towing company attempts to identify and notify the registered owner via certified mail. If the owner does not claim the vehicle within the legally required waiting period, the towing company files a mechanic&apos;s lien application with ADOT. ADOT processes the application and, if approved, issues a new title to the towing company.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Required Documentation</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">To file a mechanic&apos;s lien with ADOT, the towing company must provide proof of the tow (tow ticket, law enforcement notification), proof of owner notification attempts (certified mail receipts), vehicle identification information (VIN, make, model, year), documentation of accumulated fees, and the completed lien application form.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">What If You Want to Keep the Vehicle?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">If you find an abandoned vehicle on your property and want to keep it, you cannot simply claim it. Arizona law requires the vehicle to go through the proper legal process. However, once the towing company obtains title through the lien process, you may be able to purchase the vehicle from them at auction or through a private sale.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Timelines and Fees</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">The mechanic&apos;s lien process typically takes 30-60 days from the time of the tow to the issuance of a new title. ADOT charges a fee for processing the lien application. The towing company handles all of these costs and recovers them through the eventual disposition of the vehicle. Property owners are never involved in or responsible for any costs in this process.</p>

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

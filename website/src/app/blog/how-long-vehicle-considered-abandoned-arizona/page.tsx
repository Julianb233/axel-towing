import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Long Before a Vehicle Is Considered Abandoned in AZ?",
  description: "Learn how long a vehicle must sit before it is legally abandoned in Arizona. Timelines for private property, public streets, and HOAs. Arizona law explained.",
  keywords: "how long abandoned vehicle arizona, vehicle abandonment timeline, abandoned car time limit arizona",
  alternates: { canonical: "https://axletowing.com/blog/how-long-vehicle-considered-abandoned-arizona" },
  openGraph: { title: "How Long Before a Vehicle Is Considered Abandoned in AZ?", description: "Learn how long a vehicle must sit before it is legally abandoned in Arizona. Timelines for private property, public streets, and HOAs. Arizona law explained.", url: "https://axletowing.com/blog/how-long-vehicle-considered-abandoned-arizona", type: "article" },
};

const FAQS = [
  { question: "Is there a 48-hour rule for abandoned vehicles in Arizona?", answer: "There is no statewide 48-hour rule in Arizona for abandoned vehicles on private property. On public streets, some cities like Phoenix use a 48-hour notice period. On private property with proper signage, unauthorized vehicles can be removed immediately." },
  { question: "Can a working car be considered abandoned?", answer: "Yes. A vehicle can be considered abandoned even if it runs. If a vehicle is parked on your property without authorization, has expired registration, or appears to have been deserted by its owner, it may qualify for removal regardless of its mechanical condition." },
  { question: "How long do I have to wait before towing a car from my apartment complex?", answer: "If your apartment complex has proper towing signage posted and the vehicle is not authorized to be there, you do not have to wait at all. Unauthorized vehicles can be towed immediately under ARS 28-3511." },
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
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"><span className="text-gradient">How Long Before a Vehicle Is Considered Abandoned in AZ?</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">One of the most common questions property owners ask is: how long does a vehicle have to sit before it is legally considered abandoned? The answer is more nuanced than you might expect, because Arizona law does not specify a single fixed number of days that applies to every situation.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">There Is No Single Magic Number</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Unlike some states that define abandonment as a vehicle left for 48 or 72 hours, Arizona takes a more flexible approach. Under ARS 28-4141, a vehicle is considered abandoned based on a combination of factors rather than a strict time limit. These factors include the vehicle&apos;s condition (inoperable, flat tires, missing parts), registration status (expired or missing), the owner&apos;s apparent intent (whether they seem to have deserted the vehicle), and the circumstances of how the vehicle came to be on the property.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Private Property: Shorter Timelines</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">On private property, the timeline to removal can be much shorter — potentially immediate. Under ARS 28-3511, if your property has proper towing signage posted and a vehicle is parked in violation of your posted rules, it can be towed immediately as an unauthorized vehicle. The vehicle does not need to have been there for any specific amount of time. The key is whether the vehicle is authorized to be there, not how long it has been there.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Public Streets: Longer Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">On public streets, the timeline is typically longer because the city must follow its own administrative process. In Phoenix, the city generally places a 48-hour notice on the vehicle before towing. Other cities in the Phoenix metro may have different timelines. The city process can take 5-10 business days or more from initial report to removal.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">HOA Communities: Check Your CC&Rs</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">For HOA communities, the timeline depends on your governing documents. Some CC&Rs specify a notice period (often 24-72 hours) before towing for vehicles that violate parking rules. For unknown vehicles with no connection to any resident, most HOAs can authorize immediate towing if proper signage is in place.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">When Time Does Not Matter</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">In certain situations, a vehicle can be removed immediately regardless of how long it has been on your property. If it is parked in a fire lane, blocking a driveway or entrance, in a handicapped space without a valid placard, clearly stolen (broken windows, damaged ignition), or creating a safety hazard, these situations justify immediate removal.</p>

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

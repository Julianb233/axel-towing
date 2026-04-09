import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Report an Abandoned Vehicle in Phoenix, AZ",
  description: "Step-by-step guide to reporting abandoned vehicles in Phoenix. Phone numbers, online reporting, city processes, and free towing options for property owners.",
  keywords: "report abandoned vehicle phoenix, abandoned car phoenix az, phoenix abandoned vehicle, city of phoenix towing",
  alternates: { canonical: "https://axletowing.com/blog/report-abandoned-vehicle-phoenix" },
  openGraph: { title: "How to Report an Abandoned Vehicle in Phoenix, AZ", description: "Step-by-step guide to reporting abandoned vehicles in Phoenix.", url: "https://axletowing.com/blog/report-abandoned-vehicle-phoenix", type: "article" },
};

const FAQS = [
  { question: "What is the phone number to report an abandoned vehicle in Phoenix?", answer: "For abandoned vehicles on public streets, call the City of Phoenix Neighborhood Services at 602-262-7844. For abandoned vehicles on private property, call a licensed towing company like Axle Towing at 480-288-5526 for immediate free removal." },
  { question: "How long does the City of Phoenix take to remove an abandoned vehicle?", answer: "The City of Phoenix typically places a 48-hour notice on the vehicle. If it is not moved within that period, the city may tow it. The entire process from report to removal can take 5-10 business days or longer depending on caseload." },
  { question: "Can I report an abandoned vehicle online in Phoenix?", answer: "Yes. The City of Phoenix allows you to report abandoned vehicles through the Phoenix 311 app or the city website at phoenix.gov/311. However, this only applies to vehicles on public streets, not private property." },
  { question: "What happens after I report an abandoned vehicle to the city?", answer: "A city inspector will visit the location, assess the vehicle, and place a 48-hour removal notice on it if it qualifies as abandoned. If the vehicle is not moved within 48 hours, the city schedules it for towing to a city impound lot." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-abandoned-vehicle-laws-property-owners", title: "Arizona Abandoned Vehicle Laws for Property Owners", category: "Legal", readTime: "14 min", gradient: "from-amber-500 via-orange-600 to-amber-800" },
  { slug: "abandoned-vehicle-phoenix-az", title: "Abandoned Vehicle Removal in Phoenix, AZ", category: "City Guides", readTime: "10 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">City Guides</span>
            <span className="text-sm text-blue-200/60">10 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">How to Report an Abandoned Vehicle <span className="text-gradient">in Phoenix, AZ</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Found an abandoned vehicle in Phoenix? The process for getting it removed depends on one critical factor: is the vehicle on public property (a city street) or private property (your parking lot, HOA community, or commercial property)? Each situation has a different path to resolution.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Abandoned Vehicle on a Public Street in Phoenix</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">If the abandoned vehicle is parked on a city street, sidewalk, or other public right-of-way, the City of Phoenix handles removal through its Neighborhood Services Department.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">How to Report</h3>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Call Phoenix 311", d: "Dial 602-262-6251 (Phoenix 311) or 602-262-7844 (Neighborhood Services) to file a report. You will need the vehicle location, description, license plate (if visible), and how long it has been there." },
                  { t: "Use the Phoenix 311 App", d: "Download the PHX 311 app (available for iOS and Android) and submit an abandoned vehicle report with photos. This is often the fastest method." },
                  { t: "Report Online", d: "Visit phoenix.gov/311 and submit your report through the city website." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">What Happens Next</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">After you file a report, a city inspector visits the location to assess the vehicle. If it qualifies as abandoned, they place a 48-hour removal notice on the windshield. If the vehicle is not moved within 48 hours, the city schedules it for towing to a city impound facility. The entire process from report to removal typically takes 5-10 business days.</p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-amber-500 reveal">
                <h3 className="font-bold text-gray-900 mb-2">Heads Up: City Process Can Be Slow</h3>
                <p className="text-gray-600">The City of Phoenix processes hundreds of abandoned vehicle reports each month. During busy periods, the timeline from report to removal can stretch to 2-3 weeks. If the vehicle is on private property, you do not need to go through the city at all &mdash; a private towing company can handle it much faster.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Abandoned Vehicle on Private Property in Phoenix</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">If the abandoned vehicle is on your private property &mdash; apartment complex, HOA community, commercial parking lot, or any property you own or manage &mdash; you have a faster and more direct option.</p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Call a Licensed Towing Company", d: "Contact Axle Towing at 480-288-5526. We can assess the vehicle and often remove it the same day." },
                  { t: "We Handle Everything", d: "Our team documents the vehicle, tows it to our secure impound yard, notifies law enforcement, and handles all owner notification and lien processing." },
                  { t: "You Pay Nothing", d: "Under Arizona's PPI model, all costs are recovered from the vehicle owner. Property owners never pay for abandoned vehicle removal." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Public vs. Private Property: Quick Comparison</h2>
              <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm reveal">
                <table className="w-full border-collapse">
                  <thead><tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Factor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Public Street</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Private Property</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ["Who to call", "City of Phoenix 311", "Axle Towing: 480-288-5526"],
                      ["Typical timeline", "5-10+ business days", "Same day or next day"],
                      ["Cost to you", "Free (taxpayer-funded)", "Free (PPI model)"],
                      ["Who handles it", "City inspectors and contractors", "Your towing partner"],
                      ["Signage required", "No", "Yes — at vehicle entrances"],
                    ].map(([factor, pub, priv]) => (
                      <tr key={factor} className="even:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200 font-medium">{factor}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">{pub}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">{priv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Key Phoenix Contact Numbers</h2>
              <div className="glass-card-white rounded-2xl p-6 my-8 reveal">
                <ul className="text-gray-600 space-y-3">
                  <li className="flex justify-between"><span className="font-medium text-gray-900">Phoenix 311 (General)</span><span>602-262-6251</span></li>
                  <li className="flex justify-between"><span className="font-medium text-gray-900">Neighborhood Services</span><span>602-262-7844</span></li>
                  <li className="flex justify-between"><span className="font-medium text-gray-900">Phoenix Police (Non-Emergency)</span><span>602-262-6151</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-3"><span className="font-bold text-primary">Axle Towing (Private Property)</span><a href="tel:4802885526" className="font-bold text-primary">480-288-5526</a></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Abandoned Vehicle on Your Property?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} provides free abandoned vehicle removal for property owners across Phoenix. Same-day service available.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Get Free Assessment</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">We remove abandoned vehicles for free.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

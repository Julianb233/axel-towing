import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HOA Abandoned Vehicle Removal: Arizona Rules & Solutions",
  description: "Guide for HOA boards on removing abandoned vehicles in Arizona. CC&R enforcement, ARS 9-499.05 compliance, zero-cost towing, and step-by-step process.",
  keywords: "hoa abandoned vehicle removal, hoa towing arizona, abandoned car hoa, hoa parking enforcement arizona",
  alternates: { canonical: "https://axletowing.com/blog/hoa-abandoned-vehicle-removal-arizona" },
  openGraph: { title: "HOA Abandoned Vehicle Removal: Arizona Rules & Solutions", description: "Guide for HOA boards on removing abandoned vehicles in Arizona.", url: "https://axletowing.com/blog/hoa-abandoned-vehicle-removal-arizona", type: "article" },
};

const FAQS = [
  { question: "Can an HOA tow an abandoned vehicle in Arizona?", answer: "Yes. Arizona HOAs have the legal authority to tow abandoned and unauthorized vehicles from common areas and community streets under ARS 9-499.05 and ARS 28-3511, provided proper towing signage is posted. This authority is typically reinforced by the community's CC&Rs." },
  { question: "Does the HOA have to notify the vehicle owner before towing?", answer: "If the vehicle is clearly unauthorized and your signage is compliant, the vehicle can be towed without advance notice to the owner. For abandoned vehicles (especially those belonging to current homeowners), many HOAs choose to send a courtesy notice first, though this is not always legally required." },
  { question: "What if an HOA board member is worried about being sued for towing?", answer: "Arizona law protects property owners (including HOAs) who follow the proper procedures. Ensure your signage complies with ARS 9-499.05, use a licensed towing company, and enforce rules consistently. Board member liability insurance also provides additional protection." },
  { question: "Can an HOA tow a vehicle from a homeowner's driveway?", answer: "This depends on your CC&Rs and community rules. If the CC&Rs prohibit inoperable or unregistered vehicles on driveways and the vehicle violates these rules, the HOA may have authority to enforce after proper notice. Consult your HOA attorney for guidance specific to your community." },
  { question: "How much does HOA towing cost the association?", answer: "Nothing. Under Arizona's private property impound model, all towing and storage fees are paid by the vehicle owner, not the HOA. The HOA's only investment is the time to set up compliant signage and establish a towing partnership." },
];

const RELATED = [
  { slug: "hoa-parking-enforcement-guide", title: "HOA Parking Enforcement: What Board Members Need to Know", category: "HOA Resources", readTime: "10 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
  { slug: "hoa-towing-program-setup-guide", title: "HOA Towing Program Setup Guide", category: "HOA Resources", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">11 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">HOA Abandoned Vehicle Removal: <span className="text-gradient">Arizona Rules and Solutions</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Abandoned vehicles are one of the most common complaints HOA boards receive from homeowners. An inoperable car on the street, an unregistered vehicle in a driveway, a mystery car in the guest parking area &mdash; these situations erode property values, create safety concerns, and frustrate residents who follow the rules. This guide is specifically for HOA board members and community managers in Arizona who need to handle abandoned vehicles legally and effectively.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Your HOA&apos;s Legal Authority to Remove Abandoned Vehicles</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona HOAs have authority to remove abandoned vehicles from two sources:</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">1. Arizona State Law</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Under ARS 9-499.05 and ARS 28-3511, HOAs (as private property owners) can authorize the removal of unauthorized vehicles from community property. This requires compliant towing signage at each vehicle entrance displaying the towing company name, phone number, and impound yard address.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">2. Your CC&amp;Rs and Community Rules</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Most Arizona HOA CC&amp;Rs include provisions about vehicle requirements &mdash; registration, operability, appearance, parking locations. When a vehicle violates these rules, the HOA has authority to enforce through its governing documents, which may include towing as a remedy.</p>

              <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-amber-500 reveal">
                <h3 className="font-bold text-gray-900 mb-2">Best Practice: Document Both Sources of Authority</h3>
                <p className="text-gray-600">Your HOA&apos;s towing authority is strongest when BOTH your CC&amp;Rs explicitly authorize towing AND your signage complies with state law. If your CC&amp;Rs are silent on towing, pass a board resolution adding towing as an enforcement remedy before starting a towing program.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Types of Abandoned Vehicles in HOA Communities</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Inoperable Vehicles", d: "Cars with flat tires, mechanical failure, or visible damage sitting in driveways, garages (with the door open), or on community streets." },
                  { t: "Unregistered Vehicles", d: "Vehicles with expired registration tags that have been sitting for weeks or months." },
                  { t: "Former Resident Vehicles", d: "A homeowner or renter moves out but leaves a vehicle behind — common during foreclosures and evictions." },
                  { t: "RVs, Boats, and Trailers", d: "Recreational vehicles parked in violation of CC&R storage rules, often on streets or in driveways beyond the allowed timeframe." },
                  { t: "Unknown Vehicles", d: "Cars with no connection to any resident, parked in guest areas, on community streets, or in common parking lots." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{s.t}</h3><p className="text-gray-600">{s.d}</p></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step-by-Step Process for HOAs</h2>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Identify and Document", d: "Take photos of the vehicle including license plate, VIN, location, and condition. Note the date and any visible violations (flat tires, expired tags, damage)." },
                  { t: "Check Your Rules", d: "Verify the vehicle violates your CC&Rs or community rules. Document which specific rule is being violated." },
                  { t: "Issue a Violation Notice (if required)", d: "Some CC&Rs require a notice period before towing for homeowner-owned vehicles. For unknown or non-resident vehicles, immediate towing is typically allowed." },
                  { t: "Contact Your Towing Partner", d: "Call Axle Towing at 480-288-5526. We will assess the situation and handle the removal professionally." },
                  { t: "Document the Tow", d: "Keep records of the violation notice, photos, and tow authorization for your HOA files." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Cost to the HOA: Zero</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Under Arizona&apos;s PPI model, all towing and storage costs are paid by the vehicle owner, not the HOA. Here is what the vehicle owner typically pays:</p>
              <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm reveal">
                <table className="w-full border-collapse">
                  <thead><tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Fee</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-200">Paid By</th>
                  </tr></thead>
                  <tbody>
                    {[["Towing fee", "$200 - $275", "Vehicle owner"], ["Daily storage", "$25 - $35/day", "Vehicle owner"], ["After-hours release", "$50 - $75", "Vehicle owner"], ["Administrative fee", "$25 - $50", "Vehicle owner"], ["Cost to HOA", "$0", "N/A"]].map(([fee, amount, paid]) => (
                      <tr key={fee} className="even:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">{fee}</td><td className="px-4 py-3 text-sm text-gray-700 border border-gray-200 font-medium">{amount}</td><td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">{paid}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Signage Requirements for HOAs</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">To legally tow vehicles from your HOA community, you must post compliant signage at every vehicle entrance. According to ARS 9-499.05, signs must include:</p>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["The towing company's name", "The towing company's phone number", "The impound yard address", "A statement that unauthorized vehicles will be towed at the owner's expense", "Signs must be clearly visible and legible"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing provides free signage for all HOA partners. We handle the design, production, and installation guidelines to ensure full compliance with Arizona law.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">HOA Board? Let&apos;s Set Up Your Towing Program</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} works with HOA boards across the Phoenix metro area to establish compliant, effective towing programs. Free signage, free setup, free towing. We handle everything.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/partners/hoa-boards" className="btn-cta">HOA Partnership Info</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">HOA Board?</h3><p className="text-gray-700 text-sm mb-4">Free towing program setup for Arizona HOAs.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

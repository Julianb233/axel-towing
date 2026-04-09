import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arizona Abandoned Vehicle Laws: Guide for Property Owners",
  description: "Complete guide to Arizona abandoned vehicle laws ARS 28-4141 through 28-4145. Property owner rights, legal removal process, timelines, and free towing in Phoenix metro.",
  keywords: "arizona abandoned vehicle laws, ARS 28-4141, property owner rights, abandoned vehicle removal arizona",
  alternates: { canonical: "https://axletowing.com/blog/arizona-abandoned-vehicle-laws-property-owners" },
  openGraph: { title: "Arizona Abandoned Vehicle Laws: Guide for Property Owners", description: "Complete guide to ARS 28-4141 through 28-4145 for property owners.", url: "https://axletowing.com/blog/arizona-abandoned-vehicle-laws-property-owners", type: "article" },
};

const FAQS = [
  { question: "Can I put a lien on an abandoned vehicle on my property?", answer: "As a property owner, you cannot file a lien directly. The lien process is handled by the licensed towing company through ADOT after the vehicle has been towed and the required notification and waiting periods have passed." },
  { question: "What happens if the abandoned vehicle is worth less than the towing fees?", answer: "The towing company handles this. If the vehicle value is less than accumulated fees, the towing company may dispose of it through salvage rather than auction. The property owner is not responsible for any fees regardless of vehicle value." },
  { question: "Can I be sued for having an abandoned vehicle towed from my property?", answer: "If you follow Arizona law — proper signage, licensed towing company, consistent enforcement — your liability exposure is minimal. Arizona statutes specifically protect property owners who follow proper vehicle removal procedures." },
  { question: "How do abandoned vehicle laws differ for HOAs versus apartment complexes?", answer: "The core statutes (ARS 28-3511 and ARS 9-499.05) apply equally to all private property types. HOAs may have additional authority through their CC&Rs and community rules. Apartment complexes may have additional authority through lease agreements. In both cases, proper signage is required." },
];

const RELATED = [
  { slug: "what-to-do-abandoned-vehicle-arizona", title: "What to Do When You Find an Abandoned Vehicle in Arizona", category: "Arizona Towing Laws", readTime: "12 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "arizona-private-property-towing-rights", title: "Arizona Private Property Towing Rights", category: "Legal", readTime: "9 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
  { slug: "hoa-abandoned-vehicle-removal-arizona", title: "HOA Abandoned Vehicle Removal: Arizona Rules", category: "HOA Resources", readTime: "10 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Arizona Towing Laws</span>
            <span className="text-sm text-blue-200/60">14 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Arizona Abandoned Vehicle Laws: <span className="text-gradient">Complete Guide for Property Owners</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">If you manage an apartment complex, HOA community, commercial building, or any private property in Arizona, you will eventually deal with an abandoned vehicle. Arizona law provides clear procedures for handling these situations. This guide covers the key statutes, your rights as a property owner, the step-by-step legal process, and how to protect yourself.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Key Arizona Statutes You Need to Know</h2>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">ARS 28-4141 through 28-4145: Abandoned Vehicles</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">These statutes define what constitutes an abandoned vehicle and establish procedures for removal and disposition. A vehicle is considered abandoned when it has been left on property without the owner&apos;s consent and appears to have been intentionally deserted. The vehicle&apos;s condition &mdash; inoperable, expired registration, damage &mdash; can support the determination of abandonment.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">ARS 28-3511: Removal from Private Property</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">This statute gives property owners the most immediate power. Under ARS 28-3511, property owners can authorize the removal of any unauthorized vehicle from their property. Proper towing signage must be posted at each vehicle entrance. Signs must display the towing company&apos;s name, phone number, and impound yard address. Vehicles can be towed immediately once signage requirements are met.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">ARS 9-499.05: Municipal Towing Regulations</h3>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">This statute establishes additional requirements for towing operations within city limits, including signage specifications, towing company licensing, fee limits, and vehicle owner notification procedures.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Your Rights as a Property Owner</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona law gives property owners significant rights when it comes to removing vehicles:</p>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["Remove unauthorized vehicles immediately with proper signage under ARS 28-3511", "Remove abandoned vehicles through the documented legal process under ARS 28-4141", "Zero-cost removal — all fees are paid by the vehicle owner under Arizona's PPI model", "Recover parking spaces without waiting for government action"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Legal Process: Step by Step</h2>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Identification & Documentation (Day 1)", d: "Document the vehicle with photos, noting date, location, VIN, plate, and condition. Contact your towing partner." },
                  { t: "Removal (Day 1-3)", d: "Towing company removes the vehicle and notifies local law enforcement. They run the vehicle for theft and owner identification." },
                  { t: "Owner Notification (Day 3-10)", d: "Certified mail sent to registered owner with vehicle location, fees, and deadline to claim. If owner unknown, ADOT title search conducted." },
                  { t: "Waiting Period (Day 10-30)", d: "Vehicle owner has legally defined period to claim their vehicle and pay all fees. Storage fees continue to accumulate." },
                  { t: "Lien & Disposition (Day 30+)", d: "If unclaimed, towing company files mechanic's lien through ADOT, takes ownership, and disposes via auction or salvage." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}</strong>{" "}{item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Common Scenarios</h2>
              <div className="space-y-4 reveal">
                {[
                  { t: "Former Tenant Left a Vehicle", d: "Contact your towing company. If the vehicle violates posted rules and you have signage, it can usually be removed immediately as unauthorized." },
                  { t: "Inoperable Vehicle from Current Tenant", d: "Check your lease agreement. Most leases require operable, registered vehicles. Send written notice, then enforce towing rules if not corrected." },
                  { t: "Unknown Vehicle Appeared Overnight", d: "Document immediately and contact your towing company. With proper signage, it can be towed right away. If you suspect theft, contact law enforcement first." },
                  { t: "Vehicle Used for Storage or Living", d: "Contact law enforcement, especially if someone appears to be living in the vehicle. Your towing company can coordinate with police." },
                ].map((s) => (
                  <div key={s.t} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{s.t}</h3><p className="text-gray-600">{s.d}</p></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Protecting Yourself Legally</h2>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["Maintain compliant signage at every vehicle entrance per ARS 28-3511 and ARS 9-499.05", "Keep records — photos, dates, and communications for every abandoned vehicle situation", "Only use licensed, insured towing companies", "Enforce parking rules consistently across all vehicles to avoid discrimination claims", "Update lease agreements with clear vehicle requirements and towing authorization"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need an Abandoned Vehicle Removed?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} specializes in abandoned vehicle removal for property owners across the Phoenix metro area. We handle everything at no cost to you.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a><Link href="/contact" className="btn-cta">Free Property Assessment</Link></div>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Abandoned vehicle on your property? We can help.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}

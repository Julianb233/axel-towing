import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Protecting Disability Rights: Why Accessible Parking Enforcement Matters",
  description:
    "Learn why accessible parking enforcement protects disability rights in Arizona. Understand ADA requirements, state laws, and the real impact of parking abuse.",
};

const RELATED_ARTICLES = [
  { slug: "fire-lane-safety-why-it-matters", title: "Why Fire Lane Enforcement Saves Lives: Real Stories from Arizona", category: "Safety &amp; Community", readTime: "8 min", gradient: "from-red-600 via-red-800 to-red-950" },
  { slug: "community-benefits-professional-towing", title: "5 Ways Professional Towing Services Benefit Your Community", category: "Safety &amp; Community", readTime: "6 min", gradient: "from-amber-500 via-orange-600 to-red-800" },
  { slug: "reducing-crime-through-parking-enforcement", title: "How Professional Parking Enforcement Reduces Property Crime", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
];

export default function ArticlePage() {
  return (
    <>
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Safety &amp; Community</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Protecting Disability Rights:{" "}<span className="text-gradient">Why Accessible Parking Enforcement Matters</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  For the more than 1.3 million Arizonans living with a disability, accessible parking spaces are not a convenience &mdash; they are a necessity. When someone without a disability parks in an accessible spot, they are not just breaking the law; they are denying a fellow community member the ability to go about their daily life. Enforcing accessible parking rules is a civil rights issue, and every property owner and manager plays a role in protecting these rights.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Accessible Parking Spaces Are Designed Differently</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Accessible parking spaces are not simply closer to entrances. They are wider to accommodate wheelchair lifts and mobility equipment. They include adjacent access aisles (the striped areas) that provide space for wheelchair deployment. They are positioned on level ground to prevent wheelchairs from rolling. They connect to accessible routes with curb cuts leading to building entrances. Every element of the design exists because someone with a mobility impairment physically cannot use a standard parking space safely.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona Accessible Parking Laws</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona law under ARS 28-884 prohibits parking in accessible spaces without a valid disability placard or license plate. Violations carry fines up to $250 for a first offense and higher for repeat offenders. On private property, vehicles illegally parked in accessible spaces can be towed immediately without warning. Property owners are required under the ADA (Americans with Disabilities Act) to maintain the correct number of accessible spaces based on total lot capacity, and those spaces must be properly marked and maintained.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Access Aisle Problem</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">One of the most commonly overlooked violations is parking in the access aisle &mdash; the striped area adjacent to an accessible space. Many drivers assume these are extra spaces or do not realize they serve a critical purpose. When a vehicle blocks the access aisle, a person using a wheelchair van cannot deploy their ramp or lift, effectively trapping them inside their vehicle or preventing them from returning to it. Professional parking enforcement addresses this by treating access aisle violations as seriously as parking in the accessible space itself.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Human Impact of Parking Abuse</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Behind every accessible parking violation is a real person who suffers the consequences. Consider the wheelchair user who arrives at a doctor&apos;s appointment only to find every accessible space taken by vehicles without placards. Or the parent of a child with muscular dystrophy who cannot safely navigate a busy parking lot because they had to park far from the entrance. Or the veteran who lost a limb in service and now struggles with a long walk across hot Arizona pavement because someone took the space they need.</p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">These are not edge cases. Disability rights organizations in Arizona receive thousands of complaints annually about accessible parking abuse. The problem is widespread, and enforcement is the only proven solution.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Property Owner Responsibilities</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Maintain the correct number of accessible spaces based on total lot capacity (ADA guidelines)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Ensure all accessible spaces have proper signage, including the international symbol of access</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Keep access aisles clearly marked and free of obstructions including shopping carts and debris</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Implement active enforcement to deter abuse and protect compliant parking for those who need it</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Repair and repaint faded markings promptly &mdash; worn markings lead to confusion and violations</span></li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How Enforcement Makes a Difference</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Properties with active parking enforcement consistently report fewer accessible parking violations. When drivers know that violations result in immediate towing, the deterrent effect is significant. Professional enforcement also provides documentation that can protect property owners from ADA compliance complaints, demonstrating that they take accessible parking seriously.</p>

                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Protect Accessible Parking on Your Property</h3>
                  <p className="text-gray-600 mb-6">{COMPANY.name} enforces accessible parking compliance at no cost to property owners. Our patrol teams ensure that accessible spaces remain available for the people who need them most.</p>
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
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and dedicated to community safety and accessibility.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 reveal"><p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p><div className="flex gap-3">{["Facebook", "Twitter", "LinkedIn", "Email"].map((p) => (<button key={p} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{p}</button>))}</div></div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED_ARTICLES.map((a) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"><svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Talk to our accessibility enforcement team.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center"><svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="font-bold mb-2">Free Property Assessment</h3><p className="text-blue-100/70 text-sm mb-4">Property owners: get a free parking enforcement evaluation.</p><Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link></div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{RELATED_ARTICLES.map((a, i) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 100}ms` }}><div className={`h-40 bg-gradient-to-br ${a.gradient} relative overflow-hidden`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" /></div><div className="p-6"><span className="text-xs text-primary font-bold uppercase tracking-wider">{a.category}</span><h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{a.title}</h3><span className="text-xs text-gray-600 mt-2 inline-block">{a.readTime} read</span></div></Link>))}</div></div></section>
    </>
  );
}

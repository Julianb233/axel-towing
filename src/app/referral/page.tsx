"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* ── Parallax Hook ── */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

/* ── Steps Data ── */
const STEPS = [
  {
    step: "1",
    title: "Share Your Referral",
    desc: "Fill out the form below with the name and contact info of a property manager or owner who could benefit from free parking enforcement.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "They Sign Up for Free Enforcement",
    desc: "We reach out, assess their property, and set up compliant signage and patrol services -- all completely free for the property owner.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "You Receive Your Reward",
    desc: "Once the referred property signs up and their first patrol is completed, you receive your gift card reward. It is that simple.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.25-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

/* ── Reward Tiers ── */
const TIERS = [
  { referral: "1st Referral", reward: "$100", desc: "Gift Card", color: "from-blue-500 to-blue-600" },
  { referral: "2nd Referral", reward: "$150", desc: "Gift Card", color: "from-primary to-blue-700" },
  { referral: "3rd+ Referral", reward: "$200+", desc: "Gift Card", color: "from-amber-500 to-amber-600" },
];

/* ── FAQ Data ── */
const FAQS = [
  {
    q: "Who can I refer?",
    a: "Any property manager, property owner, HOA board member, or building management company in the Phoenix metro area who could benefit from free private property towing and parking enforcement services.",
  },
  {
    q: "How long until I receive my reward?",
    a: "You will receive your gift card reward within 14 business days after the referred property completes their first patrol service with Axle Towing.",
  },
  {
    q: "Is there a limit to how many people I can refer?",
    a: "No limit at all! The more property managers you refer, the more rewards you earn. Rewards increase with each successful referral -- $100 for the first, $150 for the second, and $200+ for every referral after that.",
  },
  {
    q: "Does the referred property have to pay anything?",
    a: "Absolutely not. Just like all Axle Towing services, parking enforcement is completely free for property owners. We are funded through towing fees collected from violators, so the referred property pays nothing.",
  },
  {
    q: "Can I refer someone who already uses a different towing company?",
    a: "Yes! Many properties switch to Axle Towing for our superior service, faster response times, and digital portal. If they sign up and complete their first patrol, you still earn your reward.",
  },
];

export default function ReferralPage() {
  const parallaxRef = useParallax();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[55vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
        />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.9) 0%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Referral Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Refer a Property Manager, <span className="text-gradient" style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #F59E0B, #FBBF24)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Get Rewarded</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Know a property manager struggling with parking? Refer them to {COMPANY.name} and earn up to $200+ per referral.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>How It Works</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Three easy steps to earning your reward. No fine print, no catches.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {STEPS.map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-heading text-lg">{item.step}</div>
                      <div className="text-blue-600">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3" style={{ color: '#1a202c' }}>{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reward Tiers ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider font-heading">Rewards</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Reward Tiers</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The more you refer, the more you earn. No limit on referrals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TIERS.map((tier, i) => (
              <div
                key={tier.referral}
                className={`reveal glass-card rounded-2xl overflow-hidden text-center ${i === 2 ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-100' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${tier.color} py-4 px-6`}>
                  <div className="text-white/95 text-sm font-heading font-semibold uppercase tracking-wider">{tier.referral}</div>
                </div>
                <div className="p-8">
                  <div className="text-5xl font-bold font-heading text-blue-900 mb-2">{tier.reward}</div>
                  <div className="text-gray-500 font-medium">{tier.desc}</div>
                  {i === 2 && (
                    <div className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full">
                      Best Value
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Submit a Referral</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Refer Someone Today</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>

          <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Referral Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for your referral! We will reach out to your contact and keep you updated on progress. Your reward will be sent once they complete their first patrol.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Your Info */}
                  <div className="sm:col-span-2">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-3">Your Information</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="john@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>

                  {/* Referred Contact */}
                  <div className="sm:col-span-2 pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider mb-3">Referred Contact</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="jane@property.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Name / Address</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Sunrise Apartments, 1234 E Main St, Phoenix AZ" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Anything we should know about the property or contact..." />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full text-center justify-center">
                  Submit Referral
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Frequently Asked Questions</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="space-y-4 reveal">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group glass-card-white rounded-2xl overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-blue-900 font-heading text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-primary shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Have questions about the referral program? Give us a call or scroll up to submit your first referral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

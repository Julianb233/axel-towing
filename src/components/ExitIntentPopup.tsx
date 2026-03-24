'use client';

import { useEffect, useState, FormEvent } from 'react';
import { COMPANY } from '@/lib/constants';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('exitPopupShown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShow(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        document.removeEventListener('mouseout', handleMouseLeave);
      }
    };

    // Delay listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      propertyType: (form.elements.namedItem('propertyType') as HTMLSelectElement).value,
      units: (form.elements.namedItem('units') as HTMLInputElement).value,
      source: 'exit-intent-popup',
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Free property assessment offer">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShow(false)} />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-fade-in-up">
        <div className="relative rounded-2xl border border-white/20 p-8 shadow-2xl overflow-hidden" style={{ background: 'rgba(27,42,63,0.95)', backdropFilter: 'blur(20px)' }}>
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="relative z-10 text-center py-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-heading mb-2">Request Received!</h3>
              <p className="text-white/70 text-sm mb-4">We will contact you within 1 hour with your free property assessment.</p>
              <p className="text-white/50 text-xs">Need immediate help? Call <a href={`tel:${COMPANY.phone.replace(/-/g, '')}`} className="text-blue-400 hover:text-blue-300">{COMPANY.phone}</a></p>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">Before You Go</span>
                </div>
                <h2 className="text-2xl font-bold text-white font-heading mb-2">Get a Free Property Assessment!</h2>
                <p className="text-white/70 text-sm">
                  Find out how we can solve your parking problems — at zero cost to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm"
                />
                <select
                  name="propertyType"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm [&>option]:bg-[#1B2A3F] [&>option]:text-white"
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment Complex</option>
                  <option value="hoa">HOA Community</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="retail">Retail Center</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="number"
                  name="units"
                  min={1}
                  placeholder="Number of Units / Spaces"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-white text-sm tracking-wide transition-all shadow-lg disabled:opacity-60"
                  style={{ background: '#DC2626' }}
                >
                  {submitting ? 'Sending...' : 'Get My Free Assessment'}
                </button>
              </form>
              <p className="text-center text-white/30 text-xs mt-3">No spam. No obligation. 100% free.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

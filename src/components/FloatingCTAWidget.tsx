'use client';

import { useState, FormEvent } from 'react';
import { COMPANY } from '@/lib/constants';

export default function FloatingCTAWidget() {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const phoneHref = `tel:${COMPANY.phone.replace(/-/g, '')}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      need: (form.elements.namedItem('need') as HTMLSelectElement).value,
      source: 'floating-cta-widget',
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

  function resetAndClose() {
    setExpanded(false);
    setShowForm(false);
    setSubmitted(false);
  }

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-[60]">
      {/* Expanded panel */}
      {expanded && (
        <div
          className="mb-3 w-80 rounded-2xl border border-white/15 shadow-2xl overflow-hidden animate-fade-in-up"
          style={{ background: 'rgba(27,42,63,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h3 className="text-white font-heading font-bold text-sm">
              {showForm ? 'Quick Quote' : 'How Can We Help?'}
            </h3>
            <button onClick={resetAndClose} className="text-white/40 hover:text-white transition-colors" aria-label="Close widget">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-5">
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-400/30">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-white font-heading font-bold text-sm mb-1">Message Sent!</p>
                <p className="text-white/60 text-xs">We will get back to you within 1 hour.</p>
                <button onClick={resetAndClose} className="mt-3 text-blue-400 text-xs hover:text-blue-300 transition-colors">Close</button>
              </div>
            ) : showForm ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm"
                />
                <select
                  name="need"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition text-sm [&>option]:bg-[#1B2A3F] [&>option]:text-white"
                >
                  <option value="">What do you need?</option>
                  <option value="tow-request">Tow Request</option>
                  <option value="parking-enforcement">Parking Enforcement</option>
                  <option value="vehicle-lookup">Vehicle Lookup</option>
                  <option value="quote">Quote / Assessment</option>
                  <option value="other">Other</option>
                </select>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-lg font-heading font-bold text-white text-sm tracking-wide transition-all shadow-md disabled:opacity-60"
                  style={{ background: '#DC2626' }}
                >
                  {submitting ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            ) : (
              <div className="space-y-3">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 w-full p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-heading font-bold text-sm group-hover:text-blue-300 transition-colors">Call Now</p>
                    <p className="text-white/50 text-xs">{COMPANY.phone}</p>
                  </div>
                </a>
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center gap-3 w-full p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-heading font-bold text-sm group-hover:text-blue-300 transition-colors">Quick Quote</p>
                    <p className="text-white/50 text-xs">Get a response in 1 hour</p>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-heading font-bold text-sm shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
          aria-label="Open contact options"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          Quick Quote
        </button>
      )}
    </div>
  );
}

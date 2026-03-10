'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setIsOpen(false);
    }, 3000);
  }

  const phoneHref = `tel:${COMPANY.phone.replace(/-/g, '')}`;

  return (
    <div className="fixed bottom-24 right-6 z-40 sm:bottom-28 sm:right-6">
      {/* Expanded Panel */}
      <div
        className={`absolute bottom-16 right-0 w-80 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/40">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark p-5 text-white relative">
            <button
              onClick={() => { setIsOpen(false); setShowForm(false); }}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close widget"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold font-heading">How can we help?</h3>
            <p className="text-white/90 text-sm mt-0.5">Choose an option below</p>
          </div>

          {/* Body */}
          <div className="p-4">
            {showForm ? (
              submitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-semibold text-blue-900 text-sm">Message sent!</p>
                  <p className="text-gray-700 text-xs mt-1">We&rsquo;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs text-primary hover:underline flex items-center gap-1 mb-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </button>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none bg-white"
                  />
                  <button type="submit" className="btn-primary w-full text-sm py-2.5">
                    Send Message
                  </button>
                </form>
              )
            ) : (
              <div className="space-y-2">
                <Link
                  href="/locate-vehicle"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-accent flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">My car was towed</div>
                    <div className="text-xs text-gray-700">Find your vehicle</div>
                  </div>
                </Link>

                <Link
                  href="/get-quote"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">I need towing service</div>
                    <div className="text-xs text-gray-700">Get a free quote</div>
                  </div>
                </Link>

                <a
                  href={phoneHref}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Call us now</div>
                    <div className="text-xs text-gray-700">{COMPANY.phone}</div>
                  </div>
                </a>

                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group w-full text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Send us a message</div>
                    <div className="text-xs text-gray-700">Quick contact form</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className={`group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-gray-700 hover:bg-gray-800'
            : 'bg-primary hover:bg-primary-dark'
        }`}
        aria-label={isOpen ? 'Close help widget' : 'Open help widget'}
        style={{ boxShadow: isOpen ? undefined : '0 4px 16px rgba(30, 107, 184, 0.25)' }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need Help?
          </span>
        )}
      </button>
    </div>
  );
}

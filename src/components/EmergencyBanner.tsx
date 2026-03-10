'use client';

import { useState } from 'react';
import { COMPANY } from '@/lib/constants';

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  const phoneHref = `tel:${COMPANY.phone.replace(/-/g, '')}`;

  return (
    <div
      className={`bg-gradient-to-r from-accent-dark via-accent to-accent-dark text-white overflow-hidden transition-all duration-500 ease-out ${
        dismissed ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 py-2.5 relative">
          <svg className="w-4 h-4 shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">
            24/7 Emergency Towing Available
            <span className="hidden sm:inline"> &mdash; </span>
            <br className="sm:hidden" />
            <a href={phoneHref} className="underline hover:no-underline font-bold">
              Call {COMPANY.phone}
            </a>
          </span>
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

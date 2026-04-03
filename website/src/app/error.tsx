"use client";

import Link from "next/link";
import { useEffect } from "react";
import { COMPANY } from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        {/* Warning icon */}
        <div className="mb-8 opacity-20">
          <svg
            className="w-32 h-32 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <p className="text-6xl md:text-8xl font-bold text-white/10 font-heading mb-2">
          Oops
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
          Something Went <span className="text-gradient">Wrong</span>
        </h1>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          We hit an unexpected bump in the road. Don&rsquo;t worry &mdash; our
          team is on it. You can try again or reach out to us directly.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button onClick={reset} className="btn-primary px-8 py-3">
            Try Again
          </button>
          <Link href="/" className="btn-secondary px-8 py-3">
            Go to Home Page
          </Link>
        </div>

        {/* Phone CTA */}
        <div className="glass rounded-2xl px-8 py-5 inline-block">
          <p className="text-white/60 text-sm mb-2">
            Need immediate help? Call us 24/7:
          </p>
          <a
            href={`tel:${COMPANY.phone}`}
            className="text-2xl font-heading font-bold text-white hover:text-cta transition-colors"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

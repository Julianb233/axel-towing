import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locate Vehicle", href: "/locate-vehicle" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about" },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        {/* Tow truck illustration */}
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
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v11.25"
            />
          </svg>
        </div>

        <p className="text-6xl md:text-8xl font-bold text-white/10 font-heading mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
          Looks Like This Page Got <span className="text-gradient">Towed!</span>
        </h1>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          The page you&rsquo;re looking for has been moved, removed, or never existed.
          Don&rsquo;t worry &mdash; we&rsquo;ll help you find your way.
        </p>

        {/* Search bar placeholder */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our site..."
              className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent pr-12"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mb-10">
          <p className="text-sm text-white/40 uppercase tracking-widest mb-4 font-bold">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white/70 hover:text-white hover:bg-white/20 text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go to Home Page
          </Link>
          <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

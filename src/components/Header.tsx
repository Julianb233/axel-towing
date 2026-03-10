"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-navy-950 text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-orange-500 text-navy-950 text-sm font-semibold py-1.5 text-center">
        <a href={`tel:${COMPANY.phone}`} className="hover:underline">
          Call Now: {COMPANY.phone}
        </a>
        <span className="mx-3">|</span>
        <span>24/7 Service Available</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-navy-950 text-xl">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-5 py-2 rounded-lg transition-colors text-sm"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-navy-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-orange-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="block mt-2 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-5 py-2 rounded-lg text-center transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

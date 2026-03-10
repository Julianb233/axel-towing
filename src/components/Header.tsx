'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      {/* Top utility bar - collapses on scroll */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-gray-900/70 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-semibold">{COMPANY.phone}</span>
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hidden sm:flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{COMPANY.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-green-400 font-semibold tracking-wide text-xs uppercase">
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-3 shrink-0">
            <Image
              src={COMPANY.logo}
              alt={`${COMPANY.name} logo`}
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' &&
                  pathname.startsWith(link.href.replace('/#', '/')));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    scrolled
                      ? (isActive ? 'text-blue-700' : 'text-gray-600 hover:text-gray-900')
                      : (isActive ? 'text-white' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.label}
                  {/* Active / hover underline animation */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 scale-x-100'
                        : `${scrolled ? 'bg-gray-400' : 'bg-white/50'} scale-x-0 group-hover:scale-x-100`
                    }`}
                    style={{ transformOrigin: 'center' }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA area */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className={`flex items-center gap-2 transition-colors text-sm font-medium ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-primary !py-2.5 !px-6 !text-sm">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger button with animated bars */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu - full-screen overlay with slide-in panel */}
      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in glass panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm glass-dark transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Navigation links */}
            <div className="flex-1 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' &&
                    pathname.startsWith(link.href.replace('/#', '/')));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{
                      transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                      transform: mobileOpen
                        ? 'translateX(0)'
                        : 'translateX(30px)',
                      opacity: mobileOpen ? 1 : 0,
                    }}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Bottom CTA section */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 text-white font-semibold text-lg"
              >
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

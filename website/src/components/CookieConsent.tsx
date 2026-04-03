"use client";

import { useState, useEffect, useCallback } from "react";

const COOKIE_NAME = "axle_cookie_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds
const LS_KEY = "axle_cookie_consent";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

/** Check both cookie and localStorage for consent (belt-and-suspenders) */
function hasConsent(): boolean {
  if (typeof window === "undefined") return true; // SSR: assume consented to avoid flash
  if (getCookie(COOKIE_NAME)) return true;
  try {
    if (localStorage.getItem(LS_KEY)) return true;
  } catch {
    // localStorage blocked — fall through
  }
  return false;
}

/** Persist consent to both cookie and localStorage */
function persistConsent(value: string) {
  setCookie(COOKIE_NAME, value, COOKIE_MAX_AGE);
  try {
    localStorage.setItem(LS_KEY, value);
  } catch {
    // localStorage blocked — cookie alone is fine
  }
}

/**
 * Cookie consent banner for GDPR / Google Consent Mode v2 compliance.
 *
 * - On "Accept": updates gtag consent to grant analytics_storage
 * - On "Decline": dismisses the banner without granting consent
 * - Remembers choice for 1 year via cookie + localStorage backup
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no prior choice was made
    if (!hasConsent()) {
      // Small delay so it doesn't flash on initial page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    persistConsent("granted");
    // Update Google Consent Mode
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    persistConsent("denied");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[9999] p-4 animate-fade-in-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-[#1B2A3F]/90 border border-white/15 rounded-2xl px-6 py-5 shadow-2xl shadow-black/30 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-white/80 text-sm flex-1 leading-relaxed">
          We use cookies to analyze site traffic and improve your experience.
          Your data is not sold to third parties.{" "}
          <a
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

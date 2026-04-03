"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const STORAGE_KEY = "axle-feedback-items";

export default function FloatingFeedbackButton() {
  const pathname = usePathname();
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    const checkCount = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const items = JSON.parse(stored);
          setNewCount(items.filter((i: { status: string }) => i.status === "new").length);
        }
      } catch {
        // ignore
      }
    };
    checkCount();
    window.addEventListener("storage", checkCount);
    const interval = setInterval(checkCount, 2000);
    return () => {
      window.removeEventListener("storage", checkCount);
      clearInterval(interval);
    };
  }, []);

  if (pathname === "/feedback") return null;

  return (
    <Link
      href="/feedback"
      className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 z-40 flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="hidden sm:inline">Give Feedback</span>
      {newCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
          {newCount > 9 ? "9+" : newCount}
        </span>
      )}
    </Link>
  );
}

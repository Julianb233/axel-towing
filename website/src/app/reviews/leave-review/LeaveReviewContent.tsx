"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Experience Pre-Screen ── */
type Sentiment = null | "positive" | "negative";

/* ── Platform Review Cards ── */
const PLATFORMS = [
  {
    name: "Google",
    envKey: "NEXT_PUBLIC_GOOGLE_REVIEW_URL",
    fallback: "https://g.page/r/axle-towing/review",
    color: "#4285F4",
    bgGradient: "from-blue-500/10 to-blue-600/5",
    borderHover: "hover:border-blue-400/30",
    rating: "",
    reviewCount: "",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
          fill="#4285F4"
        />
      </svg>
    ),
  },
  {
    name: "Yelp",
    envKey: "NEXT_PUBLIC_YELP_REVIEW_URL",
    fallback: "https://www.yelp.com/biz/axle-towing-and-impound-phoenix",
    color: "#D32323",
    bgGradient: "from-red-500/10 to-red-600/5",
    borderHover: "hover:border-red-400/30",
    rating: "",
    reviewCount: "",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#D32323">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.826-4.14c.564-.83 1.893-.486 1.998.517l.347 3.82c.07.67-.33 1.276-1 1.5zm-8.842 5.58l.816-5.19c.15-.97 1.46-1.16 1.88-.272l2.1 4.44c.42.888-.265 1.864-1.028 1.468l-3.088-1.62c-.51-.268-.78-.826-.68-1.4zM6.72 17.294l3.592-3.77c.67-.702 1.83-.138 1.66.81l-.834 4.63c-.17.94-1.35 1.2-1.778.39l-1.73-3.27c-.285-.54-.17-1.2.29-1.6zm-1.4-5.326l5.21-.06c.97-.01 1.38 1.24.59 1.8l-3.96 2.8c-.79.56-1.82-.16-1.55-1.08l1.08-3.54c.18-.59.63-.92 1.23-.92zm2.13-6.254l2.16 4.73c.4.884-.42 1.844-1.24 1.444L3.48 9.41c-.82-.4-.74-1.62.12-1.89l3.83-1.2c.57-.18 1.2.06 1.5.6zm5.22-.8c.01-1.04 1.32-1.47 1.97-.646l3.26 4.11c.65.82.07 2.01-.87 1.79l-4.82-1.13c-.63-.15-1.06-.73-1.03-1.37l.13-1.37c.02-.46.12-.93.36-1.38z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    envKey: "NEXT_PUBLIC_FACEBOOK_REVIEW_URL",
    fallback: "https://www.facebook.com/axletowing/reviews",
    color: "#1877F2",
    bgGradient: "from-blue-600/10 to-blue-700/5",
    borderHover: "hover:border-blue-500/30",
    rating: "",
    reviewCount: "",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SentimentSelector({
  onSelect,
}: {
  onSelect: (s: Sentiment) => void;
}) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
          How Was Your Experience?
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          We value your honest feedback. Let us know how we did.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Positive */}
          <button
            onClick={() => onSelect("positive")}
            className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 cursor-pointer group hover:border-emerald-300 transition-all min-w-[200px]"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <svg
                className="w-8 h-8 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-blue-900 text-lg font-heading">
                Great!
              </div>
              <div className="text-sm text-gray-500 mt-1">
                I had a positive experience
              </div>
            </div>
          </button>

          {/* Negative */}
          <button
            onClick={() => onSelect("negative")}
            className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 cursor-pointer group hover:border-amber-300 transition-all min-w-[200px]"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <svg
                className="w-8 h-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-blue-900 text-lg font-heading">
                Could Be Better
              </div>
              <div className="text-sm text-gray-500 mt-1">
                I had an issue I&apos;d like to share
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function PlatformCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
            Choose a Platform
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Your review helps other property managers find trusted parking
            enforcement. Pick your preferred platform below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((p) => {
            const url =
              (typeof window !== "undefined" &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).__ENV?.[p.envKey]) ||
              process.env[p.envKey] ||
              p.fallback;
            return (
              <a
                key={p.name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-2xl p-8 flex flex-col items-center gap-5 group ${p.borderHover} transition-all`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${p.bgGradient} flex items-center justify-center group-hover:scale-105 transition-transform`}
                >
                  {p.icon}
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-900 text-xl font-heading">
                    {p.name}
                  </div>
                  {p.rating && (
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="text-2xl font-bold text-blue-900 font-heading">
                        {p.rating}
                      </span>
                      <StarRow />
                    </div>
                  )}
                  {p.reviewCount && (
                    <div className="text-sm text-gray-500 mt-1">
                      {p.reviewCount} reviews
                    </div>
                  )}
                </div>
                <div
                  className="mt-auto w-full text-center py-3 rounded-xl font-semibold text-white transition-all group-hover:opacity-90"
                  style={{ backgroundColor: p.color }}
                >
                  Leave a Review
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function LeaveReviewContent() {
  const [sentiment, setSentiment] = useState<Sentiment>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Share Your <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Your review helps us improve and lets other property managers know
              they can count on Axle Towing.
            </p>
          </div>
        </div>
      </section>

      {/* Sentiment Pre-Screen or Platform Cards */}
      {sentiment === null && <SentimentSelector onSelect={setSentiment} />}

      {sentiment === "positive" && <PlatformCards />}

      {sentiment === "negative" && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 font-heading">
                We Want to Make It Right
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re sorry to hear your experience wasn&apos;t perfect.
                Please share your feedback privately so our team can address your
                concerns directly.
              </p>
              <Link
                href="/reviews/feedback"
                className="btn-primary inline-block"
              >
                Share Your Feedback
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Back to Reviews */}
      <section className="py-10 bg-white text-center">
        <Link
          href="/reviews"
          className="text-primary hover:underline font-medium inline-flex items-center gap-2"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Reviews
        </Link>
      </section>
    </>
  );
}

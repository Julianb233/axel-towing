"use client";

import { useState } from "react";

interface KlarnaButtonProps {
  /** Amount in USD (e.g. 7500 for $7,500) */
  amount: number;
  description: string;
  orderId?: string;
  /** Optional label override */
  label?: string;
}

/**
 * KlarnaButton — initiates a Klarna hosted checkout session and redirects
 * the customer to Klarna's payment page.
 *
 * Requires KLARNA_API_USERNAME + KLARNA_API_PASSWORD on the server.
 * When not configured, shows a friendly "coming soon" message.
 */
export default function KlarnaButton({
  amount,
  description,
  orderId,
  label,
}: KlarnaButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/klarna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, description, orderId }),
      });

      const data = await res.json();

      if (res.status === 503 && data.status === "not_configured") {
        setError(
          "Klarna payments are coming soon! Contact us to arrange payment.",
        );
        return;
      }

      if (!res.ok || !data.checkout_url) {
        setError("Unable to start Klarna checkout. Please try another payment method.");
        return;
      }

      // Redirect to Klarna's hosted checkout
      window.location.href = data.checkout_url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-[#FFB3C7] hover:bg-[#FF8FAB] text-[#1A0A0E] font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        style={{ minWidth: "220px" }}
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Connecting to Klarna…
          </>
        ) : (
          <>
            {/* Klarna "K" wordmark approximation */}
            <span className="font-black text-lg leading-none" style={{ letterSpacing: "-0.02em" }}>
              K
            </span>
            {label ?? `Pay with Klarna — $${amount.toLocaleString()}`}
          </>
        )}
      </button>

      {/* Klarna messaging badge */}
      <p className="text-xs text-gray-500 text-center">
        <span className="font-semibold text-[#1A0A0E]">Buy now, pay later</span> — split into 4 interest-free payments or pay in full.{" "}
        <a
          href="https://www.klarna.com/us/customer-service/what-is-klarna/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Learn more
        </a>
      </p>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center max-w-sm">
          {error}
        </p>
      )}
    </div>
  );
}

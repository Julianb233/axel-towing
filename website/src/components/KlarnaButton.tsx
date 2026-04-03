'use client';

import { useState } from 'react';

interface KlarnaButtonProps {
  /** Amount in USD (e.g. 7500 for $7,500) */
  amount: number;
  description: string;
  orderId?: string;
  /** Optional label override */
  label?: string;
  /** Customer email (optional, pre-fills Klarna form) */
  email?: string;
  /** Show installment breakdown below button */
  showInstallments?: boolean;
}

/**
 * KlarnaButton — initiates a Klarna hosted checkout session and redirects
 * the customer to Klarna's payment page.
 *
 * Supports:
 *   - Klarna Checkout (hosted page) via POST /api/klarna
 *   - Buy now, pay later installment messaging
 *   - Loading and error states
 *   - Graceful degradation when credentials not configured
 *
 * Requires KLARNA_API_USERNAME + KLARNA_API_PASSWORD on the server.
 */
export default function KlarnaButton({
  amount,
  description,
  orderId,
  label,
  email,
  showInstallments = false,
}: KlarnaButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notConfigured, setNotConfigured] = useState(false);

  const installmentAmount = (amount / 4).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  async function handleClick() {
    setLoading(true);
    setError(null);
    setNotConfigured(false);

    try {
      const res = await fetch('/api/klarna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, description, orderId, email }),
      });

      const data = await res.json();

      if (res.status === 503 && data.status === 'not_configured') {
        setNotConfigured(true);
        return;
      }

      if (!res.ok) {
        setError(
          data.error ?? 'Unable to start Klarna checkout. Please try another payment method.'
        );
        return;
      }

      if (!data.checkout_url) {
        setError('Klarna checkout URL not received. Please contact us directly.');
        return;
      }

      // Redirect to Klarna's hosted checkout page
      window.location.href = data.checkout_url;
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  // Coming soon state — show friendly message instead of error
  if (notConfigured) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <div className="w-full rounded-2xl border-2 border-[#FFB3C7] bg-[#FFF0F5] px-6 py-5 text-center sm:max-w-sm">
          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFB3C7] text-lg font-black text-[#1A0A0E]">
            K
          </div>
          <p className="mb-1 text-sm font-bold text-[#1A0A0E]">Klarna Pay Later — Coming Soon</p>
          <p className="text-xs text-[#6b5c60]">
            Klarna BNPL will be available shortly. In the meantime, contact us to discuss
            installment payment options.
          </p>
          <a
            href="tel:+16195090699"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e6bb8] hover:underline"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (619) 509-0699
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <button
        onClick={handleClick}
        disabled={loading}
        aria-label={
          loading
            ? 'Connecting to Klarna...'
            : (label ?? `Pay with Klarna — $${amount.toLocaleString()}`)
        }
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#FFB3C7] px-8 py-4 text-base font-bold text-[#1A0A0E] shadow-md transition-all duration-150 hover:bg-[#FF8FAB] hover:shadow-lg active:bg-[#FF6B96] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        style={{ minWidth: '240px' }}
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 shrink-0 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Connecting to Klarna…
          </>
        ) : (
          <>
            {/* Klarna "K" wordmark */}
            <span
              className="shrink-0 text-xl leading-none font-black"
              aria-hidden="true"
              style={{ letterSpacing: '-0.02em' }}
            >
              K
            </span>
            <span>{label ?? `Pay with Klarna — $${amount.toLocaleString()}`}</span>
          </>
        )}
      </button>

      {/* Installment breakdown */}
      {showInstallments && !loading && (
        <div className="grid w-full grid-cols-4 gap-2 text-center sm:max-w-sm">
          {['Today', '30 days', '60 days', '90 days'].map((when) => (
            <div key={when} className="rounded-lg border border-[#FFB3C7]/50 bg-white px-2 py-2">
              <p className="mb-0.5 text-[10px] text-[#9aa3af]">{when}</p>
              <p className="text-xs font-bold text-[#1A0A0E]">${installmentAmount}</p>
            </div>
          ))}
        </div>
      )}

      {/* Klarna trust badge */}
      <p className="max-w-xs text-center text-xs text-gray-500">
        <span className="font-semibold text-[#1A0A0E]">Buy now, pay later</span> — 4 interest-free
        payments. No hidden fees. Instant approval.{' '}
        <a
          href="https://www.klarna.com/us/customer-service/what-is-klarna/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Learn more
        </a>
      </p>

      {/* Error state */}
      {error && (
        <div
          role="alert"
          className="flex w-full max-w-sm items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';

const NEXT_STEPS = [
  {
    step: '1',
    title: 'Klarna Confirmation Email',
    body: 'You will receive a payment confirmation from Klarna at the email address you provided.',
  },
  {
    step: '2',
    title: 'Project Kickoff',
    body: 'Julian from AI Acrobatics will contact you within 1 business day to schedule your kickoff call.',
  },
  {
    step: '3',
    title: 'Website Onboarding',
    body: "We'll gather your brand assets, login credentials, and preferences to begin your custom build.",
  },
  {
    step: '4',
    title: 'Launch in 2–3 Weeks',
    body: 'Your fully optimized Next.js website will be live and ready to attract new customers.',
  },
];

export default function PaymentConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const status = searchParams.get('payment') ?? searchParams.get('status');

  const isSuccess = !status || status === 'success';

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-lg">
        {/* Status Icon */}
        <div className="mb-8 flex flex-col items-center text-center">
          {isSuccess ? (
            <>
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Your Payment Has Been Received</h1>
              <p className="mt-3 text-gray-600">
                Thank you for your payment. We&apos;re excited to get started on your project!
              </p>
              {orderId && (
                <p className="mt-2 text-sm text-gray-500">
                  Order reference:{' '}
                  <span className="font-mono font-semibold text-gray-700">{orderId}</span>
                </p>
              )}
            </>
          ) : (
            <>
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                <svg
                  className="h-10 w-10 text-yellow-600"
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
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Payment Status</h1>
              <p className="mt-3 text-gray-600">
                If your payment is still processing, please allow a few minutes and check your email.
                If you have questions, please contact us.
              </p>
            </>
          )}
        </div>

        {/* Confirmation Card */}
        {isSuccess && (
          <div className="mb-6 overflow-hidden rounded-2xl border border-green-200 bg-green-50 p-6">
            <h2 className="mb-1 font-bold text-green-800">What Happens Next</h2>
            <p className="mb-4 text-sm text-green-700">
              Here&apos;s what you can expect from the AI Acrobatics team:
            </p>
            <ol className="space-y-4">
              {NEXT_STEPS.map(({ step, title, body }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-200 text-sm font-bold text-green-800">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">{title}</p>
                    <p className="mt-0.5 text-sm text-green-700">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Contact Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 font-bold text-gray-900">Questions or Concerns?</h2>
          <p className="mb-4 text-sm text-gray-600">
            Reach out to Julian directly — we typically respond within a few hours.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:julian@aiacrobatics.com"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              julian@aiacrobatics.com
            </a>
            <a
              href="tel:+16195090699"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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

        {/* Footer links */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
          <a href="/invoice" className="hover:text-blue-600 hover:underline">
            View Invoice
          </a>
          <span>&middot;</span>
          <a href="/pay" className="hover:text-blue-600 hover:underline">
            Payment Page
          </a>
          <span>&middot;</span>
          <a href="https://axletowing.com" className="hover:text-blue-600 hover:underline">
            axletowing.com
          </a>
        </div>
      </div>
    </div>
  );
}

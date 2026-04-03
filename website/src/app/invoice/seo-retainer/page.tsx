import type { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentSuccessBanner from '@/components/PaymentSuccessBanner';

export const metadata: Metadata = {
  title: 'SEO Retainer Invoice — AI Acrobatics for Axle Towing',
  robots: 'noindex, nofollow',
};

const INVOICE = {
  number: 'INV-2026-SEO-001',
  from: {
    name: 'AI Acrobatics',
    address: 'San Diego, CA',
    email: 'julian@aiacrobatics.com',
    phone: '(619) 509-0699',
  },
  to: {
    name: 'Axle Towing & Impound',
    address: 'Phoenix, AZ',
    contact: 'Elliott',
  },
  billingCycle: 'Monthly — 1st of each month',
  minimumTerm: '6 months',
  lineItems: [
    {
      description: 'SEO & Content Growth Plan — 30 Articles/Month',
      details:
        '30 optimized blog articles per month, 150+ keyword position tracking, Google Business Profile management, 50+ local citation building, competitor gap analysis, monthly performance reports, on-page optimization',
      quantity: 1,
      rate: 3000,
      type: 'monthly' as const,
    },
    {
      description: 'Link Building & Local Authority',
      details:
        'Domain authority growth via white-hat link acquisition, local directory submissions, and partner outreach targeting Arizona towing and property management verticals',
      quantity: 1,
      rate: 0,
      type: 'included' as const,
    },
    {
      description: 'Google Business Profile Optimization',
      details:
        'Weekly GBP posts, Q&A management, photo uploads, review response management, and local pack ranking improvements',
      quantity: 1,
      rate: 0,
      type: 'included' as const,
    },
  ],
  deliverables: [
    '30 SEO-optimized articles/month (1,500–2,500 words each)',
    '150+ keyword position tracking across Phoenix metro',
    'Weekly Google Business Profile posts + photo uploads',
    'Monthly performance report (traffic, rankings, leads)',
    'Competitor intelligence updates',
    'On-page SEO audits and fixes as needed',
    '50+ local citation submissions per month',
  ],
  guarantee:
    "If we don't deliver 15+ first-page rankings, 200%+ organic traffic increase, and Top 3 Map Pack placement within 6 months, we continue at no additional cost until results are achieved.",
  paymentLink: 'https://www.fanbasis.com/agency-checkout/Aiacrobatics/5RlGY',
};

function formatMonthYear(offset = 0) {
  const d = new Date();
  d.setMonth(d.getMonth() + offset);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function SeoRetainerInvoicePage() {
  const monthlyTotal = INVOICE.lineItems
    .filter((i) => i.type === 'monthly')
    .reduce((sum, i) => sum + i.rate * i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Payment success banner (shows after payment redirect) */}
        <Suspense>
          <PaymentSuccessBanner invoiceNumber={INVOICE.number} />
        </Suspense>

        {/* Print hint */}
        <div className="mb-4 text-center print:hidden">
          <p className="mb-2 text-sm text-gray-500">
            Use <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Ctrl+P</kbd> or{' '}
            <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Cmd+P</kbd> to save as PDF
          </p>
        </div>

        {/* Invoice Document */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm print:rounded-none print:border-none print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-white">RECURRING INVOICE</h1>
                <p className="text-sm text-blue-200">{INVOICE.number}</p>
                <span className="mt-2 inline-block rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white">
                  MONTHLY RETAINER
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">AI Acrobatics</p>
                <p className="text-sm text-blue-200">Performance-Driven Digital Agency</p>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="border-b border-gray-100 p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">From</p>
                <p className="font-bold text-gray-900">{INVOICE.from.name}</p>
                <p className="text-sm text-gray-600">{INVOICE.from.address}</p>
                <p className="text-sm text-gray-600">{INVOICE.from.email}</p>
                <p className="text-sm text-gray-600">{INVOICE.from.phone}</p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Bill To</p>
                <p className="font-bold text-gray-900">{INVOICE.to.name}</p>
                <p className="text-sm text-gray-600">{INVOICE.to.address}</p>
                <p className="text-sm text-gray-600">{INVOICE.to.contact}</p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Billing Cycle</p>
                <p className="font-bold text-gray-900">{INVOICE.billingCycle}</p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Minimum Term</p>
                <p className="font-bold text-gray-900">{INVOICE.minimumTerm}</p>
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="p-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-3 text-left font-bold text-gray-900">Description</th>
                  <th className="w-20 pb-3 text-center font-bold text-gray-900">Qty</th>
                  <th className="w-28 pb-3 text-right font-bold text-gray-900">Rate</th>
                  <th className="w-28 pb-3 text-right font-bold text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                {INVOICE.lineItems.map((item) => (
                  <tr key={item.description} className="border-b border-gray-100">
                    <td className="py-4">
                      <p className="font-medium text-gray-900">{item.description}</p>
                      <p className="mt-1 max-w-md text-xs text-gray-500">{item.details}</p>
                      {item.type === 'monthly' && (
                        <span className="mt-1 inline-block rounded bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-600">
                          RECURRING MONTHLY
                        </span>
                      )}
                      {item.type === 'included' && (
                        <span className="mt-1 inline-block rounded bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">
                          INCLUDED
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-center text-gray-600">{item.quantity}</td>
                    <td className="py-4 text-right text-gray-600">
                      {item.rate === 0 ? 'Included' : `$${item.rate.toLocaleString()}/mo`}
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900">
                      {item.rate === 0 ? '$0' : `$${(item.rate * item.quantity).toLocaleString()}/mo`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total */}
            <div className="mt-8 ml-auto max-w-xs">
              <div className="mt-4 border-t-2 border-gray-900 pt-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Monthly Total</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${monthlyTotal.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">6-month commitment</span>
                  <span className="text-sm font-bold text-blue-600">
                    ${(monthlyTotal * 6).toLocaleString()} total
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Schedule */}
          <div className="border-t border-gray-100 px-8 pb-6">
            <h3 className="mb-4 text-sm font-bold text-gray-700 uppercase tracking-wider">
              Payment Schedule (6-Month Commitment)
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="rounded-xl border border-blue-100 bg-blue-50 px-2 py-3 text-center">
                  <p className="text-[10px] text-blue-500 font-medium">{formatMonthYear(i)}</p>
                  <p className="text-sm font-bold text-blue-900 mt-1">${monthlyTotal.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Deliverables */}
          <div className="border-t border-gray-100 px-8 pb-6">
            <h3 className="mb-4 text-sm font-bold text-gray-700 uppercase tracking-wider">
              What You Get Each Month
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {INVOICE.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Pay Now Buttons */}
          <div className="border-t border-gray-100 px-8 py-6">
            <p className="mb-4 text-center text-sm font-semibold text-gray-700">
              First month due upon website launch
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INVOICE.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-green-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Start SEO Plan — ${monthlyTotal.toLocaleString()}/mo
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Secure payment via Fanbasis. Invoiced monthly on the 1st.
            </p>
          </div>

          {/* Performance Guarantee */}
          <div className="px-8 pb-6 print:hidden">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-2 font-bold text-green-800">Performance Guarantee</h3>
              <p className="text-sm text-green-700">{INVOICE.guarantee}</p>
            </div>
          </div>

          {/* Terms */}
          <div className="px-8 pb-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 font-bold text-gray-900">Terms</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&#8226; Monthly invoices issued on the 1st of each month</li>
                <li>&#8226; Payment due within 7 days of invoice date</li>
                <li>&#8226; 6-month minimum commitment for SEO services</li>
                <li>&#8226; After 6 months, continues month-to-month — cancel anytime with 30 days notice</li>
                <li>&#8226; Option to reduce to $1,500/month maintenance plan after growth phase</li>
                <li>&#8226; All content created remains property of Axle Towing & Impound</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-8 py-6 text-center">
            <p className="text-sm text-gray-500">
              Questions? Contact{' '}
              <a href="mailto:julian@aiacrobatics.com" className="text-blue-600 hover:underline">
                julian@aiacrobatics.com
              </a>{' '}
              or call{' '}
              <a href="tel:+16195090699" className="text-blue-600 hover:underline">
                (619) 509-0699
              </a>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4 text-sm print:hidden">
          <a href="/invoice" className="font-medium text-blue-600 hover:underline">
            &larr; Full Invoice
          </a>
          <span className="text-gray-400">&#8901;</span>
          <a href="/invoice/maintenance-plan" className="font-medium text-blue-600 hover:underline">
            Maintenance Plan &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

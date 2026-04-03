import type { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentSuccessBanner from '@/components/PaymentSuccessBanner';

export const metadata: Metadata = {
  title: 'Maintenance Plan Invoice — AI Acrobatics for Axle Towing',
  robots: 'noindex, nofollow',
};

/**
 * Maintenance Plan Invoice — $1,500/month
 *
 * This is the reduced-rate plan available after the initial SEO growth phase
 * (typically activated after 6 months once top rankings are secured).
 *
 * STATUS: DRAFT — activate when transitioning from the $3,000/month growth plan.
 */

const INVOICE = {
  number: 'INV-2026-MAINT-001',
  status: 'DRAFT',
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
  activationNote:
    'This plan activates after the 6-month growth phase once target rankings are secured and organic traffic goals are met.',
  lineItems: [
    {
      description: 'SEO Maintenance & Ranking Defense — 10 Articles/Month',
      details:
        '10 optimized articles per month to maintain rankings and capture new keyword opportunities, monthly performance reporting, Google Business Profile management, and ranking defense monitoring',
      quantity: 1,
      rate: 1500,
      type: 'monthly' as const,
    },
    {
      description: 'Ranking Defense Monitoring',
      details:
        'Weekly rank tracking for all secured first-page positions, alerts if any top-10 position drops, and quick response optimization to protect traffic',
      quantity: 1,
      rate: 0,
      type: 'included' as const,
    },
    {
      description: 'Google Business Profile Management',
      details:
        'Bi-weekly GBP posts, review response management, and profile optimization to maintain local pack presence',
      quantity: 1,
      rate: 0,
      type: 'included' as const,
    },
  ],
  deliverables: [
    '10 SEO-optimized articles/month',
    '150+ keyword position monitoring',
    'Bi-weekly Google Business Profile posts',
    'Monthly performance report',
    'Ranking drop alerts + quick-fix optimization',
    'Review response management',
    'On-page SEO maintenance as needed',
  ],
  paymentLink: 'https://www.fanbasis.com/agency-checkout/Aiacrobatics/5RlGY',
};

export default function MaintenancePlanInvoicePage() {
  const monthlyTotal = INVOICE.lineItems
    .filter((i) => i.type === 'monthly')
    .reduce((sum, i) => sum + i.rate * i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Payment success banner */}
        <Suspense>
          <PaymentSuccessBanner invoiceNumber={INVOICE.number} />
        </Suspense>

        {/* Draft status banner */}
        <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 px-5 py-3 text-center print:hidden">
          <p className="text-sm font-semibold text-amber-800">
            DRAFT — This invoice template is not yet active.{' '}
            <span className="font-normal text-amber-700">
              {INVOICE.activationNote}
            </span>
          </p>
        </div>

        {/* Print hint */}
        <div className="mb-4 text-center print:hidden">
          <p className="text-sm text-gray-500">
            Use <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Ctrl+P</kbd> or{' '}
            <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Cmd+P</kbd> to save as PDF
          </p>
        </div>

        {/* Invoice Document */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm print:rounded-none print:border-none print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-white">MAINTENANCE PLAN</h1>
                <p className="text-sm text-slate-300">{INVOICE.number}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-amber-500 px-3 py-0.5 text-xs font-bold text-white">
                    DRAFT
                  </span>
                  <span className="text-xs text-slate-400">Activates after growth phase</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">AI Acrobatics</p>
                <p className="text-sm text-slate-300">Performance-Driven Digital Agency</p>
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
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Plan Status</p>
                <p className="font-bold text-amber-600">Draft — Not Active</p>
              </div>
            </div>
          </div>

          {/* Comparison callout */}
          <div className="border-b border-gray-100 bg-blue-50 px-8 py-5">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">Growth Phase (Months 1–6)</p>
                <p className="text-xl font-bold text-blue-700">$3,000/mo</p>
                <p className="text-xs text-gray-400">30 articles · Full SEO push</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-sm font-bold">Save $1,500/mo</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">Maintenance Phase (Month 7+)</p>
                <p className="text-xl font-bold text-green-600">$1,500/mo</p>
                <p className="text-xs text-gray-400">10 articles · Rank defense</p>
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
                  <span className="text-sm text-gray-500">vs. Growth Plan</span>
                  <span className="text-sm font-bold text-green-600">
                    Save $1,500/mo
                  </span>
                </div>
              </div>
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

          {/* Pay Button (draft state — shown dimmed) */}
          <div className="border-t border-gray-100 px-8 py-6 print:hidden">
            <p className="mb-4 text-center text-sm font-semibold text-amber-700">
              This plan is not yet active. It will be available after Month 6 of the growth phase.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row opacity-50 cursor-not-allowed">
              <div
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-400 px-8 py-4 text-lg font-bold text-white shadow-lg select-none"
                aria-disabled="true"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Activate Maintenance Plan — ${monthlyTotal.toLocaleString()}/mo
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Contact <a href="mailto:julian@aiacrobatics.com" className="underline hover:text-gray-600">julian@aiacrobatics.com</a> to activate this plan.
            </p>
          </div>

          {/* Terms */}
          <div className="px-8 pb-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 font-bold text-gray-900">Terms</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&#8226; Available after completing the 6-month SEO growth phase</li>
                <li>&#8226; Monthly invoices issued on the 1st of each month</li>
                <li>&#8226; Payment due within 7 days of invoice date</li>
                <li>&#8226; Month-to-month after activation — cancel anytime with 30 days notice</li>
                <li>&#8226; Upgrading back to $3,000/mo growth plan available at any time</li>
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
          <a href="/invoice/seo-retainer" className="font-medium text-blue-600 hover:underline">
            &larr; SEO Retainer Invoice
          </a>
          <span className="text-gray-400">&#8901;</span>
          <a href="/invoice" className="font-medium text-blue-600 hover:underline">
            Full Invoice
          </a>
        </div>
      </div>
    </div>
  );
}

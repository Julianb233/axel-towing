import type { Metadata } from 'next';
import { Suspense } from 'react';
import KlarnaButton from '@/components/KlarnaButton';
import PaymentSuccessBanner from '@/components/PaymentSuccessBanner';

export const metadata: Metadata = {
  title: 'Invoice — AI Acrobatics for Axle Towing & Impound',
  robots: 'noindex, nofollow',
};

const today = new Date();
const dueDate = new Date(today);
dueDate.setDate(dueDate.getDate() + 14);

function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const INVOICE = {
  number: 'INV-2026-0001',
  issued: formatDate(today),
  due: formatDate(dueDate),
  from: {
    name: 'AI Acrobatics',
    address: 'San Diego, CA',
    email: 'julian@aiacrobatics.com',
    phone: '(619) 509-0699',
  },
  to: {
    name: 'Axle Towing & Impound',
    address: 'Phoenix, AZ',
  },
  lineItems: [
    {
      description: 'Custom Website Build — 123+ page Next.js website',
      details:
        'Includes 61 SEO articles, 24 location pages, 7 service pages, 5 Spanish pages, ROI calculator, vehicle locator, property manager portal, Schema.org markup, professional photos',
      quantity: 1,
      rate: 7500,
      type: 'one-time' as const,
    },
    {
      description: 'SEO & Content Growth Plan — 30 articles/month',
      details:
        'Monthly: 30 optimized articles, 150+ keyword tracking, Google Business Profile management, 50+ local citations, link building, competitor analysis, monthly reports',
      quantity: 1,
      rate: 3000,
      type: 'monthly' as const,
    },
    {
      description: 'GoHighLevel CRM System — Setup & Configuration',
      details:
        'Included free (valued at $5,500): 7-stage lead pipeline, automated follow-ups, lead scoring, contract management, review management, full training',
      quantity: 1,
      rate: 0,
      type: 'included' as const,
    },
  ],
};

export default function InvoicePage() {
  const subtotalOneTime = INVOICE.lineItems
    .filter((i) => i.type === 'one-time')
    .reduce((sum, i) => sum + i.rate * i.quantity, 0);

  const monthlyTotal = INVOICE.lineItems
    .filter((i) => i.type === 'monthly')
    .reduce((sum, i) => sum + i.rate * i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Payment success banner (shows after Klarna redirect) */}
        <Suspense>
          <PaymentSuccessBanner invoiceNumber={INVOICE.number} />
        </Suspense>

        {/* Print / PDF hint */}
        <div className="mb-4 text-center print:hidden">
          <p className="mb-2 text-sm text-gray-500">
            Use <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Ctrl+P</kbd> or{' '}
            <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Cmd+P</kbd> to save
            as PDF
          </p>
        </div>

        {/* Invoice Document */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm print:rounded-none print:border-none print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="mb-1 text-3xl font-bold text-white">INVOICE</h1>
                <p className="text-sm text-blue-200">{INVOICE.number}</p>
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
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Issue Date</p>
                <p className="font-bold text-gray-900">{INVOICE.issued}</p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Due Date</p>
                <p className="font-bold text-gray-900">{INVOICE.due}</p>
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
                          INCLUDED FREE (valued at $5,500)
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-center text-gray-600">{item.quantity}</td>
                    <td className="py-4 text-right text-gray-600">
                      {item.rate === 0 ? '$0' : `$${item.rate.toLocaleString()}`}
                      {item.type === 'monthly' && (
                        <span className="text-xs text-gray-400">/mo</span>
                      )}
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900">
                      {item.rate === 0 ? '$0' : `$${(item.rate * item.quantity).toLocaleString()}`}
                      {item.type === 'monthly' && (
                        <span className="text-xs text-gray-400">/mo</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="mt-8 ml-auto max-w-xs">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">One-Time (Website Build)</span>
                  <span className="font-bold text-gray-900">
                    ${subtotalOneTime.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Monthly (SEO & Content)</span>
                  <span className="font-bold text-gray-900">
                    ${monthlyTotal.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">CRM System (Included)</span>
                  <span className="font-bold text-green-600">$0 (worth $5,500)</span>
                </div>
              </div>

              <div className="mt-4 border-t-2 border-gray-900 pt-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Due Today</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${subtotalOneTime.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Then monthly</span>
                  <span className="text-sm font-bold text-blue-600">
                    ${monthlyTotal.toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Now Buttons */}
          <div className="px-8 pb-6">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://www.fanbasis.com/agency-checkout/Aiacrobatics/7pAz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Pay Website Build — $7,500
              </a>
              <a
                href="https://www.fanbasis.com/agency-checkout/Aiacrobatics/5RlGY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-green-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Start SEO Plan — $3,000/mo
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Secure payments powered by Fanbasis. Accepts all major credit cards.
            </p>
          </div>

          {/* Klarna Pay Later Option */}
          <div className="px-8 pb-8 print:hidden">
            <div className="rounded-2xl border-2 border-[#FFB3C7] bg-[#FFF0F5] p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* Klarna pink badge */}
                <div className="rounded-lg bg-[#FFB3C7] px-3 py-1 text-lg leading-none font-black text-[#1A0A0E] select-none">
                  K
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Pay with Klarna — Buy Now, Pay Later
                  </h3>
                  <p className="text-xs text-gray-500">
                    Split your website build into 4 interest-free payments of $1,875
                  </p>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                {['Today: $1,875', '30 days: $1,875', '60 days: $1,875', '90 days: $1,875'].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[#FFB3C7]/50 bg-white px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-gray-700">{label}</p>
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-center">
                <KlarnaButton
                  amount={subtotalOneTime}
                  description={`Website Build — ${INVOICE.number}`}
                  orderId={INVOICE.number}
                  label={`Pay with Klarna — $${subtotalOneTime.toLocaleString()}`}
                  showInstallments={true}
                />
              </div>
            </div>
          </div>

          {/* Terms & Guarantee */}
          <div className="px-8 pb-8">
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="mb-2 font-bold text-green-800">Performance Guarantee</h3>
              <p className="text-sm text-green-700">
                6-month minimum commitment. If we don&apos;t deliver the guaranteed metrics (15+
                first-page rankings, 200%+ traffic increase, Top 3 Map Pack placement, 10+ qualified
                leads/month), we continue working at no additional cost until results are achieved.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 font-bold text-gray-900">Terms</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>&#8226; Website build payment due upon contract signing</li>
                <li>
                  &#8226; Monthly SEO invoiced on the 1st of each month, starting 30 days after
                  website launch
                </li>
                <li>&#8226; 6-month minimum commitment for SEO services</li>
                <li>
                  &#8226; GoHighLevel CRM included at no additional cost for the duration of the
                  engagement
                </li>
                <li>
                  &#8226; All content and website assets become property of Axle Towing & Impound
                </li>
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

        {/* Back to Proposal */}
        <div className="mt-6 text-center print:hidden">
          <a href="/proposal" className="text-sm font-medium text-blue-600 hover:underline">
            &larr; Back to Full Proposal
          </a>
        </div>
      </div>
    </div>
  );
}

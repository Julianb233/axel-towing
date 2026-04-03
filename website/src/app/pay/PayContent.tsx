'use client';

import { useState } from 'react';
import KlarnaButton from '@/components/KlarnaButton';

const INVOICE_NUMBER = 'INV-2026-0001';
const AMOUNT = 7500;
const SERVICE_DESCRIPTION = 'Axle Towing Website Development';

type PaymentOption = 'installments' | 'full';

export default function PayContent() {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>('installments');
  const installmentAmount = AMOUNT / 4;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center">
            <div className="rounded-xl bg-blue-950 px-4 py-2 text-xl font-black text-white">
              AI Acrobatics
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Pay Your Invoice</h1>
          <p className="mt-2 text-sm text-gray-500">
            Invoice{' '}
            <span className="font-mono font-semibold text-gray-700">{INVOICE_NUMBER}</span>
          </p>
        </div>

        {/* Invoice Summary Card */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 px-6 py-5 text-white">
            <p className="text-xs uppercase tracking-wider text-blue-200">Service</p>
            <p className="mt-1 text-lg font-bold">{SERVICE_DESCRIPTION}</p>
            <p className="text-xs text-blue-200">Axle Towing &amp; Impound — Phoenix, AZ</p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
            <div className="px-6 py-4">
              <p className="text-xs uppercase tracking-wider text-gray-500">Invoice</p>
              <p className="mt-0.5 font-mono font-semibold text-gray-900">{INVOICE_NUMBER}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-xs uppercase tracking-wider text-gray-500">Total Due</p>
              <p className="mt-0.5 text-xl font-bold text-gray-900">
                ${AMOUNT.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="px-6 py-4 text-xs text-gray-500">
            From:{' '}
            <span className="font-medium text-gray-700">AI Acrobatics &mdash; julian@aiacrobatics.com</span>
          </div>
        </div>

        {/* Payment Option Selector */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-semibold text-gray-700">Choose a payment option:</p>
          <div className="space-y-3">
            {/* Klarna Pay in 4 Option */}
            <label
              className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors ${
                selectedOption === 'installments'
                  ? 'border-[#FFB3C7] bg-[#FFF0F5]'
                  : 'border-gray-200 bg-white hover:border-[#FFD6E5]'
              }`}
            >
              <input
                type="radio"
                name="payment_option"
                value="installments"
                checked={selectedOption === 'installments'}
                onChange={() => setSelectedOption('installments')}
                className="mt-0.5 h-4 w-4 accent-[#FF8FAB]"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#FFB3C7] px-2 py-0.5 text-sm font-black text-[#1A0A0E]">
                    K
                  </span>
                  <span className="font-bold text-gray-900">Pay in 4 with Klarna</span>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    Interest-Free
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  4 payments of{' '}
                  <span className="font-bold text-gray-900">
                    ${installmentAmount.toLocaleString()}
                  </span>{' '}
                  every 30 days
                </p>
                {/* Installment schedule */}
                <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
                  {['Today', '30 days', '60 days', '90 days'].map((when) => (
                    <div
                      key={when}
                      className="rounded-lg border border-[#FFB3C7]/50 bg-white px-1 py-2"
                    >
                      <p className="text-[10px] text-gray-500">{when}</p>
                      <p className="text-xs font-bold text-gray-800">
                        ${installmentAmount.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </label>

            {/* Pay in Full Option */}
            <label
              className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors ${
                selectedOption === 'full'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                name="payment_option"
                value="full"
                checked={selectedOption === 'full'}
                onChange={() => setSelectedOption('full')}
                className="mt-0.5 h-4 w-4 accent-blue-600"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span className="font-bold text-gray-900">Pay in Full</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  One payment of{' '}
                  <span className="font-bold text-gray-900">${AMOUNT.toLocaleString()}</span> today
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {selectedOption === 'installments' ? (
            <div className="flex flex-col items-center gap-3">
              <KlarnaButton
                amount={AMOUNT}
                description={`${SERVICE_DESCRIPTION} — ${INVOICE_NUMBER}`}
                orderId={INVOICE_NUMBER}
                label={`Pay with Klarna — $${installmentAmount.toLocaleString()}/installment`}
                showInstallments={false}
              />
              <p className="text-center text-xs text-gray-400">
                You will be redirected to Klarna&apos;s secure checkout to complete your payment.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://www.fanbasis.com/agency-checkout/Aiacrobatics/7pAz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-blue-700 sm:w-auto sm:min-w-[240px]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Pay ${AMOUNT.toLocaleString()} Now
              </a>
              <p className="text-center text-xs text-gray-400">
                Secure payment powered by Fanbasis. Accepts all major credit cards.
              </p>
            </div>
          )}
        </div>

        {/* Footer links */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
          <a href="/invoice" className="hover:text-blue-600 hover:underline">
            View Full Invoice
          </a>
          <span>&middot;</span>
          <a href="mailto:julian@aiacrobatics.com" className="hover:text-blue-600 hover:underline">
            Questions?
          </a>
          <span>&middot;</span>
          <a href="/pay/confirmation" className="hover:text-blue-600 hover:underline">
            Already paid?
          </a>
        </div>
      </div>
    </div>
  );
}

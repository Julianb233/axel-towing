'use client';

import { useState, FormEvent, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PRODUCTS = [
  { id: 'mug', name: 'Custom Branded Mug', price: '$12.99', minQty: 10 },
  { id: 'mousepad', name: 'Logo Mouse Pad', price: '$9.99', minQty: 10 },
  { id: 'charger', name: 'Wireless Charging Pad', price: '$24.99', minQty: 10 },
  { id: 'candle', name: 'Branded Candle', price: '$14.99', minQty: 10 },
  { id: 'door-hanger', name: 'Parking Permit Door Hanger', price: '$0.99', minQty: 50 },
  { id: 'permit-tag', name: 'Parking Permit Hang Tag', price: '$1.49', minQty: 25 },
];

function BulkOrderForm() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    selectedProducts: preselectedProduct ? [preselectedProduct] : [],
    quantity: 10,
    street: '',
    city: '',
    state: '',
    zip: '',
    customMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  function toggleProduct(productId: string) {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter((p) => p !== productId)
        : [...prev.selectedProducts, productId],
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (formData.selectedProducts.length === 0) {
      setError('Please select at least one product.');
      return;
    }

    const minQty = Math.min(
      ...formData.selectedProducts.map(
        (id) => PRODUCTS.find((p) => p.id === id)?.minQty ?? 10
      )
    );

    if (formData.quantity < minQty) {
      setError(`Minimum order quantity for selected products is ${minQty} units.`);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/printify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          products: formData.selectedProducts,
          quantity: formData.quantity,
          shippingAddress: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
          },
          customMessage: formData.customMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit order.');
      }

      setOrderId(data.orderId || '');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Order Request Received!</h2>
          {orderId && (
            <p className="mb-2 text-sm font-mono text-emerald-400">Order ID: {orderId}</p>
          )}
          <p className="mb-6 text-white/70">
            Our team will review your request and contact you within 1 business day to confirm
            details and send a digital proof.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Back to Shop
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Info */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Contact Information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Company Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Sunridge HOA"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Contact Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(480) 555-0123"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
        </div>
      </div>

      {/* Product Selection */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-2 text-xl font-bold text-white">Product Selection</h2>
        <p className="mb-6 text-sm text-white/60">Select one or more products for your order.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PRODUCTS.map((product) => {
            const selected = formData.selectedProducts.includes(product.id);
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => toggleProduct(product.id)}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                  selected
                    ? 'border-red-500/50 bg-red-600/15 text-white'
                    : 'border-white/10 bg-white/3 text-white/70 hover:border-white/20 hover:text-white'
                }`}
              >
                <div
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${
                    selected ? 'border-red-500 bg-red-600' : 'border-white/30 bg-transparent'
                  }`}
                >
                  {selected && (
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold">{product.name}</div>
                  <div className="text-xs text-white/50">
                    {product.price} · min {product.minQty} units
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Order Quantity</h2>
        <div className="max-w-xs">
          <label className="mb-1.5 block text-sm font-medium text-white/80">
            Total Units <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            required
            min={10}
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 10 })}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
          />
          <p className="mt-1.5 text-xs text-white/50">Minimum 10 units per product type</p>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Shipping Address</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Street Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              placeholder="123 Main St"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                City <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Phoenix"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                State <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                maxLength={2}
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value.toUpperCase() })}
                placeholder="AZ"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                ZIP Code <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                placeholder="85001"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Message */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-2 text-xl font-bold text-white">Custom Message Card</h2>
        <p className="mb-4 text-sm text-white/60">
          Optional. We&apos;ll include a branded message card with your order.
        </p>
        <textarea
          rows={3}
          value={formData.customMessage}
          onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
          placeholder="e.g. Thank you for being a valued HOA partner. We appreciate your continued trust in Axle Towing."
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
        >
          {submitting ? (
            <>
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Bulk Order Request
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
        >
          Back to Shop
        </Link>
      </div>

      <p className="text-xs text-white/40">
        By submitting this form, you agree to be contacted by Axle Towing regarding your order. We
        will never share your information with third parties.
      </p>
    </form>
  );
}

export default function BulkOrderContent() {
  return (
    <section className="min-h-screen bg-[#0f1e30] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/shop"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Shop
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-1.5">
            <span className="text-sm font-semibold tracking-wider text-red-400 uppercase">
              Zero Markup · Cost Price
            </span>
          </div>
          <h1 className="font-heading mb-3 text-3xl font-bold text-white md:text-4xl">
            Bulk Corporate Gifting Order
          </h1>
          <p className="text-white/70">
            Fill out the form below and our team will confirm your order within 1 business day. All
            merchandise is provided at cost price — no markup for HOA and property management
            partners.
          </p>
        </div>

        <Suspense fallback={<div className="text-white/50">Loading form...</div>}>
          <BulkOrderForm />
        </Suspense>
      </div>
    </section>
  );
}

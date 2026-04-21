'use client';

import { useState, FormEvent, Suspense } from 'react';
import Link from 'next/link';

type PermitType = 'hang-tag' | 'door-hanger';
type NumberingStyle = 'sequential' | 'alphanumeric' | 'property-prefix' | 'custom';

interface FormData {
  propertyName: string;
  propertyAddress: string;
  contactName: string;
  email: string;
  phone: string;
  permitType: PermitType;
  numberingStyle: NumberingStyle;
  startNumber: string;
  customPrefix: string;
  quantity: number;
  includeExpiry: boolean;
  expiryYear: string;
  specialInstructions: string;
  shippingStreet: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
}

const PERMIT_TYPES = [
  {
    id: 'hang-tag' as PermitType,
    name: 'Parking Permit Hang Tag',
    price: '$24.99',
    priceNote: 'per unit (min 25)',
    description:
      'Durable vinyl hang tags for vehicle windshields. UV-resistant, tamper-evident, pre-punched for rearview mirror attachment.',
    features: ['Durable vinyl material', 'UV-resistant printing', 'Pre-punched hang hole', 'Sequential numbering', 'Custom property branding'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    minQty: 25,
  },
  {
    id: 'door-hanger' as PermitType,
    name: 'Parking Permit Door Hanger',
    price: '$12.99',
    priceNote: 'per unit (min 50)',
    description:
      'Heavy cardstock door hangers with parking permit fields. Perforated tear-off section for easy enforcement. Dual-branded with Axle Towing and your property logo.',
    features: ['Heavy cardstock construction', 'Perforated tear-off section', 'Permit field areas', 'Dual-branded design', 'Bulk pricing available'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2" />
      </svg>
    ),
    minQty: 50,
  },
];

const NUMBERING_STYLES: { id: NumberingStyle; label: string; example: string }[] = [
  { id: 'sequential', label: 'Sequential Numbers', example: 'e.g. 001, 002, 003...' },
  { id: 'alphanumeric', label: 'Alphanumeric', example: 'e.g. A001, A002, B001...' },
  { id: 'property-prefix', label: 'Property Prefix', example: 'e.g. PARK-001, PARK-002...' },
  { id: 'custom', label: 'Custom Format', example: 'Specify your format below' },
];

function ParkingPermitForm() {
  const [formData, setFormData] = useState<FormData>({
    propertyName: '',
    propertyAddress: '',
    contactName: '',
    email: '',
    phone: '',
    permitType: 'hang-tag',
    numberingStyle: 'sequential',
    startNumber: '001',
    customPrefix: '',
    quantity: 25,
    includeExpiry: false,
    expiryYear: String(new Date().getFullYear() + 1),
    specialInstructions: '',
    shippingStreet: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  const selectedPermit = PERMIT_TYPES.find((p) => p.id === formData.permitType)!;
  const minQty = selectedPermit.minQty;
  const totalPrice = (formData.quantity * parseFloat(selectedPermit.price.replace('$', ''))).toFixed(2);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (formData.quantity < minQty) {
      setError(`Minimum order quantity for ${selectedPermit.name} is ${minQty} units.`);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'parking-permits',
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          propertyName: formData.propertyName,
          propertyAddress: formData.propertyAddress,
          permitType: formData.permitType,
          numberingStyle: formData.numberingStyle,
          startNumber: formData.startNumber,
          customPrefix: formData.customPrefix,
          quantity: formData.quantity,
          includeExpiry: formData.includeExpiry,
          expiryYear: formData.expiryYear,
          specialInstructions: formData.specialInstructions,
          shippingAddress: {
            street: formData.shippingStreet,
            city: formData.shippingCity,
            state: formData.shippingState,
            zip: formData.shippingZip,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit order.');
      }

      setOrderId(data.referenceId || data.orderId || '');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center py-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Permit Order Submitted!</h2>
          {orderId && (
            <p className="mb-2 text-sm font-mono text-emerald-400">Quote ID: {orderId}</p>
          )}
          <p className="mb-6 text-white/70">
            Our team will review your custom permit specifications and send a digital proof
            within 1 business day. We will confirm numbering, branding, and quantity before
            production begins.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Back to Home
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
      {/* Permit Type Selection */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-2 text-xl font-bold text-white">Select Permit Type</h2>
        <p className="mb-6 text-sm text-white/60">
          Choose the permit format that fits your parking program.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PERMIT_TYPES.map((permit) => {
            const selected = formData.permitType === permit.id;
            return (
              <button
                key={permit.id}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    permitType: permit.id,
                    quantity: Math.max(prev.quantity, permit.minQty),
                  }))
                }
                className={`flex flex-col gap-4 rounded-xl border p-5 text-left transition-all ${
                  selected
                    ? 'border-red-500/50 bg-red-600/15'
                    : 'border-white/10 bg-white/3 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                      selected ? 'bg-red-600/30 text-red-400' : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {permit.icon}
                  </div>
                  <div
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                      selected ? 'border-red-500 bg-red-600' : 'border-white/30 bg-transparent'
                    }`}
                  >
                    {selected && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className={`mb-1 font-bold ${selected ? 'text-white' : 'text-white/80'}`}>
                    {permit.name}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-white/55">
                    {permit.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white">{permit.price}</span>
                    <span className="text-xs text-white/50">{permit.priceNote}</span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {permit.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      {/* Property Details */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Property Details</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Property Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.propertyName}
              onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
              placeholder="Sunridge HOA · Desert Palms Apartments"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Property Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.propertyAddress}
              onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
              placeholder="1234 Main St, Phoenix, AZ 85001"
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
            <label className="mb-1.5 block text-sm font-medium text-white/80">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(480) 555-0123"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@sunridgehoa.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
          </div>
        </div>
      </div>

      {/* Permit Customization */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Permit Customization</h2>

        {/* Numbering Style */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Numbering Style <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {NUMBERING_STYLES.map((style) => {
              const selected = formData.numberingStyle === style.id;
              return (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, numberingStyle: style.id })}
                  className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-all ${
                    selected
                      ? 'border-red-500/50 bg-red-600/15 text-white'
                      : 'border-white/10 bg-white/3 text-white/70 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border ${
                      selected ? 'border-red-500 bg-red-600' : 'border-white/30'
                    }`}
                  >
                    {selected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{style.label}</div>
                    <div className="text-xs text-white/45">{style.example}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Start Number / Prefix */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Starting Number
            </label>
            <input
              type="text"
              value={formData.startNumber}
              onChange={(e) => setFormData({ ...formData, startNumber: e.target.value })}
              placeholder="001"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
            <p className="mt-1 text-xs text-white/45">First number in the sequence</p>
          </div>
          {(formData.numberingStyle === 'alphanumeric' ||
            formData.numberingStyle === 'property-prefix' ||
            formData.numberingStyle === 'custom') && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                {formData.numberingStyle === 'custom' ? 'Custom Format' : 'Prefix'}
              </label>
              <input
                type="text"
                value={formData.customPrefix}
                onChange={(e) => setFormData({ ...formData, customPrefix: e.target.value })}
                placeholder={
                  formData.numberingStyle === 'property-prefix'
                    ? 'PARK'
                    : formData.numberingStyle === 'alphanumeric'
                    ? 'A'
                    : 'e.g. SR-2026-'
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
          )}
        </div>

        {/* Expiry Date */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, includeExpiry: !formData.includeExpiry })}
              className={`flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border transition-all ${
                formData.includeExpiry
                  ? 'border-red-500 bg-red-600'
                  : 'border-white/30 bg-white/10'
              }`}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                  formData.includeExpiry ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
            <label className="text-sm font-medium text-white/80">
              Include expiration year on permit
            </label>
          </div>
          {formData.includeExpiry && (
            <div className="mt-3 max-w-xs">
              <label className="mb-1.5 block text-xs font-medium text-white/60">
                Expiration Year
              </label>
              <input
                type="number"
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 5}
                value={formData.expiryYear}
                onChange={(e) => setFormData({ ...formData, expiryYear: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
          )}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">
            Special Instructions
          </label>
          <textarea
            rows={3}
            value={formData.specialInstructions}
            onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
            placeholder="Any specific design requirements, color preferences, or additional text to include on the permits..."
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
          />
        </div>
      </div>

      {/* Quantity & Price Summary */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Quantity & Pricing</h2>
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Quantity <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              required
              min={minQty}
              step={1}
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: parseInt(e.target.value) || minQty })
              }
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
            <p className="mt-1 text-xs text-white/45">Minimum {minQty} units</p>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-red-500/20 bg-red-600/10 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400">
              Estimated Total
            </div>
            <div className="mt-1 text-3xl font-bold text-white">${totalPrice}</div>
            <div className="mt-0.5 text-xs text-white/50">
              {formData.quantity} × {selectedPermit.price} per unit
            </div>
          </div>
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
              value={formData.shippingStreet}
              onChange={(e) => setFormData({ ...formData, shippingStreet: e.target.value })}
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
                value={formData.shippingCity}
                onChange={(e) => setFormData({ ...formData, shippingCity: e.target.value })}
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
                value={formData.shippingState}
                onChange={(e) =>
                  setFormData({ ...formData, shippingState: e.target.value.toUpperCase() })
                }
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
                value={formData.shippingZip}
                onChange={(e) => setFormData({ ...formData, shippingZip: e.target.value })}
                placeholder="85001"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>
          </div>
        </div>
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
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Permit Order
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </>
          )}
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
        >
          Back to Home
        </Link>
      </div>

      <p className="text-xs text-white/40">
        By submitting this form, you agree to be contacted by Axle Towing regarding your order. A
        digital proof will be sent before production begins.
      </p>
    </form>
  );
}

export default function ParkingPermitsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-gradient-to-br from-[#1B2A3F] via-[#1a3055] to-[#0f1e30] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-1.5">
              <span className="text-sm font-semibold tracking-wider text-red-400 uppercase">
                Custom Branded · Property-Specific
              </span>
            </div>
            <h1 className="font-heading mb-6 text-4xl leading-tight font-bold text-white md:text-5xl">
              Custom Parking Permits
            </h1>
            <p className="mb-0 max-w-2xl text-lg leading-relaxed text-white/85">
              Professional parking permits branded with your property name. Choose hang tags or door
              hangers, configure sequential numbering, and add expiration years.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-red-600 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-white">
            {[
              'Custom property branding',
              'Sequential numbering',
              'Digital proof before print',
              'Ships in 7–14 days',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#0f1e30] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading mb-3 text-2xl font-bold text-white md:text-3xl">
              Configure Your Permits
            </h2>
            <p className="text-white/70">
              Fill out the form below and our team will create a digital proof for your approval
              before production begins.
            </p>
          </div>
          <Suspense fallback={<div className="text-white/50">Loading form...</div>}>
            <ParkingPermitForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

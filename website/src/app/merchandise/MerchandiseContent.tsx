'use client';

import { useState, FormEvent } from 'react';
import { COMPANY } from '@/lib/constants';

const MERCH_CATEGORIES = [
  {
    id: 'apparel',
    name: 'Branded Apparel',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7M16 7H8M16 7L19 4L22 7V20H2V7L5 4L8 7M12 11V20"
        />
      </svg>
    ),
    items: [
      {
        name: 'Classic Crew T-Shirt',
        desc: '100% cotton, front logo + back tagline',
        price: '$18–$22',
        minQty: 12,
      },
      {
        name: 'Performance Polo',
        desc: 'Moisture-wicking, embroidered chest logo',
        price: '$28–$35',
        minQty: 6,
      },
      {
        name: 'Trucker Hat',
        desc: 'Snapback, embroidered patch logo',
        price: '$16–$20',
        minQty: 12,
      },
      {
        name: 'Beanie',
        desc: 'Knit winter beanie, embroidered logo',
        price: '$14–$18',
        minQty: 12,
      },
    ],
  },
  {
    id: 'car-accessories',
    name: 'Car Accessories',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1 2 1 2-1 2 1 2-1zm0 0l2-1 2 1 2-1 2 1V6a1 1 0 00-1-1h-4"
        />
      </svg>
    ),
    items: [
      {
        name: 'Air Freshener',
        desc: 'Die-cut logo shape, custom scents',
        price: '$4–$6',
        minQty: 50,
      },
      {
        name: 'Bumper Sticker',
        desc: 'Weatherproof vinyl, 3" x 5"',
        price: '$1.50–$2.50',
        minQty: 100,
      },
      {
        name: 'Magnetic Phone Mount',
        desc: 'Dashboard mount with logo insert',
        price: '$10–$14',
        minQty: 24,
      },
      {
        name: 'Tire Valve Stem Caps',
        desc: 'Logo-engraved aluminum, set of 4',
        price: '$6–$9',
        minQty: 25,
      },
    ],
  },
  {
    id: 'office-items',
    name: 'Office & Desk Items',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    items: [
      {
        name: 'Branded Notepad',
        desc: '50-sheet notepad, letterhead logo + contact info',
        price: '$5–$8',
        minQty: 25,
      },
      {
        name: 'Logo Pen (3-pack)',
        desc: 'Ballpoint pens with barrel imprint',
        price: '$3–$5',
        minQty: 50,
      },
      { name: 'Mug', desc: '15oz ceramic mug, full-color logo wrap', price: '$10–$14', minQty: 12 },
      {
        name: 'Tote Bag',
        desc: 'Heavy-duty canvas, full-color print',
        price: '$8–$12',
        minQty: 24,
      },
    ],
  },
  {
    id: 'keychains',
    name: 'Keychains & Accessories',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
    items: [
      {
        name: 'Metal Keychain',
        desc: 'Zinc alloy, debossed logo, carabiner clip',
        price: '$4–$7',
        minQty: 25,
      },
      {
        name: 'Leather Key Fob',
        desc: 'Genuine leather, stamped logo',
        price: '$8–$12',
        minQty: 12,
      },
      {
        name: 'Multi-tool Keychain',
        desc: '6-in-1 tool with logo engraving',
        price: '$6–$10',
        minQty: 24,
      },
      {
        name: 'Retractable Badge Reel',
        desc: 'Logo badge reel for staff/partners',
        price: '$3–$5',
        minQty: 50,
      },
    ],
  },
];

const BULK_TIERS = [
  {
    name: 'Starter Pack',
    qty: '25–49 units',
    discount: '10% off',
    highlight: false,
    perks: [
      'Standard turnaround (10–14 days)',
      'Digital proof included',
      'Free shipping on orders $300+',
    ],
  },
  {
    name: 'HOA Partner Pack',
    qty: '50–99 units',
    discount: '20% off',
    highlight: true,
    perks: [
      'Priority turnaround (7–10 days)',
      '2 free design revisions',
      'Free shipping included',
      'Branded gift bags available',
    ],
  },
  {
    name: 'Corporate Bulk',
    qty: '100+ units',
    discount: '30% off',
    highlight: false,
    perks: [
      'Rush turnaround (5–7 days)',
      'Dedicated account manager',
      'Free shipping + insurance',
      'Custom packaging options',
      'Net-30 invoicing available',
    ],
  },
];

export default function MerchandiseContent() {
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('apparel');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const activeItems = MERCH_CATEGORIES.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-gradient-to-br from-[#1B2A3F] via-[#1a3055] to-[#0f1e30] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-1.5">
              <span className="text-sm font-semibold tracking-wider text-red-400 uppercase">
                Corporate Gifting
              </span>
            </div>
            <h1 className="font-heading mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Axle Towing <span className="text-red-400">Branded Merch</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Strengthen your HOA and property partner relationships with premium co-branded
              merchandise. From apparel to car accessories — everything your clients need to
              remember who keeps their property running smoothly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#order-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                Request Custom Order
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#pricing-tiers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              >
                View Bulk Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-red-600 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-white">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Print-on-Demand via Printful &amp; Printify
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No minimum on single items
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              5–14 day production
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Ships direct to recipients
            </span>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-20" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Merchandise Catalog
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              All items printed with the Axle Towing logo, contact number, and your choice of color
              scheme. Co-branding available for HOA and property management partners.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {MERCH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className={activeCategory === cat.id ? 'text-white' : 'text-gray-500'}>
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activeItems.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-red-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 transition-colors group-hover:bg-red-600">
                  <svg
                    className="h-6 w-6 text-red-600 transition-colors group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 font-bold text-gray-900">{item.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">{item.price}</span>
                  <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-500">
                    Min {item.minQty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            * Prices shown are per-unit estimates for bulk orders. Final pricing confirmed at order.
            All items fulfilled via Printful or Printify — no inventory required.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How Print-on-Demand Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We use Printful and Printify for zero-inventory fulfillment — order only what you
              need, when you need it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Submit Your Order',
                desc: 'Fill out the request form below with product types, quantities, and any co-branding needs.',
              },
              {
                step: '02',
                title: 'Design Proof',
                desc: 'Our team creates a digital mockup with your logo applied. You approve before anything ships.',
              },
              {
                step: '03',
                title: 'Production',
                desc: 'Items are printed on-demand by our fulfillment partner (Printful or Printify) in 5–10 business days.',
              },
              {
                step: '04',
                title: 'Direct Delivery',
                desc: 'Ship to your office, HOA common area, or directly to individual recipients across the Phoenix metro.',
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="font-heading mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* POD Platform Callout */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h3 className="font-heading mb-3 text-xl font-bold text-gray-900">
              Fulfillment Partners
            </h3>
            <p className="mb-6 text-gray-600">
              We integrate with both major print-on-demand platforms so you get the best selection
              and pricing.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-1 text-lg font-bold text-gray-900">Printful</div>
                <p className="text-sm text-gray-600">
                  Premium DTG printing, embroidery, and all-over print. Best for apparel and premium
                  items.
                </p>
                <a
                  href="https://www.printful.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-red-600 hover:underline"
                >
                  printful.com &rarr;
                </a>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-1 text-lg font-bold text-gray-900">Printify</div>
                <p className="text-sm text-gray-600">
                  Large supplier network with competitive pricing. Best for high-volume orders and
                  accessories.
                </p>
                <a
                  href="https://printify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-red-600 hover:underline"
                >
                  printify.com &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Pricing Tiers */}
      <section className="bg-[#1B2A3F] py-20" id="pricing-tiers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
              Corporate Bulk Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              The more you order, the more you save. Perfect for HOA annual gifting, partner
              appreciation packages, and property manager welcome kits.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {BULK_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 ${
                  tier.highlight
                    ? 'scale-105 border-red-500 bg-red-600 shadow-xl shadow-red-900/30'
                    : 'border-white/10 bg-white/5 transition-colors hover:bg-white/10'
                }`}
              >
                {tier.highlight && (
                  <div className="mb-3 text-xs font-bold tracking-widest text-red-200 uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading mb-1 text-xl font-bold text-white">{tier.name}</h3>
                <p className="mb-4 text-sm text-white/70">{tier.qty}</p>
                <div className="mb-6 text-3xl font-bold text-white">{tier.discount}</div>
                <ul className="space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-white/85">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#order-form"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-white text-red-600 hover:bg-red-50'
                      : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Gifting Use Cases */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Perfect For
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'HOA Annual Gifting',
                desc: 'Thank board members and community managers with branded gift packages at year-end.',
                icon: '🏘️',
              },
              {
                title: 'New Partner Onboarding',
                desc: 'Welcome new property management partners with a branded welcome kit.',
                icon: '🤝',
              },
              {
                title: 'Staff Uniforms',
                desc: 'Keep your team looking professional with branded polos and hats.',
                icon: '👕',
              },
              {
                title: 'Trade Show Giveaways',
                desc: 'Stand out at industry events with high-quality branded items people actually use.',
                icon: '🎪',
              },
              {
                title: 'Client Appreciation Events',
                desc: 'Make every community event memorable with branded takeaways.',
                icon: '🎁',
              },
              {
                title: 'Referral Rewards',
                desc: 'Thank property managers who send referrals with premium merchandise.',
                icon: '⭐',
              },
            ].map((use) => (
              <div
                key={use.title}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-red-200 hover:shadow-md"
              >
                <span className="flex-shrink-0 text-3xl">{use.icon}</span>
                <div>
                  <h3 className="font-heading mb-1 font-bold text-gray-900">{use.title}</h3>
                  <p className="text-sm text-gray-600">{use.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Request Form */}
      <section className="bg-gray-50 py-20" id="order-form">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Request a Custom Order
            </h2>
            <p className="text-lg text-gray-600">
              Tell us what you need and we&apos;ll put together a custom quote within 1 business
              day.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-2xl font-bold text-gray-900">
                  Order Request Sent!
                </h3>
                <p className="mb-4 text-gray-600">
                  We&apos;ll review your request and send a custom quote to your email within 1
                  business day.
                </p>
                <p className="text-sm text-gray-500">
                  Questions? Call us at{' '}
                  <a
                    href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
                    className="font-semibold text-red-600 hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Company / HOA Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                      placeholder="Sunridge HOA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                      placeholder="(480) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Merchandise Type(s) *
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {MERCH_CATEGORIES.map((cat) => (
                      <label key={cat.id} className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Estimated Quantity *
                    </label>
                    <select
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select quantity range</option>
                      <option value="1-24">1–24 units</option>
                      <option value="25-49">25–49 units (10% off)</option>
                      <option value="50-99">50–99 units (20% off)</option>
                      <option value="100+">100+ units (30% off)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Needed By (Approx.)
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    placeholder="e.g. Co-branding with HOA logo, specific colors, rush order needed, ship to multiple addresses..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700"
                >
                  Submit Order Request
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading mb-4 text-3xl font-bold text-white">
            Ready to Strengthen Your Client Relationships?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-red-100">
            Branded merchandise keeps Axle Towing top-of-mind with every HOA board member and
            property manager you work with. Let&apos;s build a gifting program that works for you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#order-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 transition-colors hover:bg-red-50"
            >
              Start Your Order
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

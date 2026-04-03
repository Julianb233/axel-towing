'use client';

import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'mug',
    name: 'Custom Branded Mug',
    costPrice: '$18.99',
    category: 'Drinkware',
    useCase: 'HOA Board Gifts · Office Welcome Kits',
    description:
      '15oz ceramic mug with full-color Axle Towing logo wrap. Dishwasher safe. Keeps your brand on every desk.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
        />
      </svg>
    ),
    minQty: 10,
    badge: 'Popular',
  },
  {
    id: 'mousepad',
    name: 'Logo Mouse Pad',
    costPrice: '$16.99',
    category: 'Office',
    useCase: 'Property Manager Offices · HOA Clubhouses',
    description:
      'Large 12"×10" mouse pad with non-slip rubber base. Full-color logo and contact info print.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14" />
      </svg>
    ),
    minQty: 10,
    badge: null,
  },
  {
    id: 'charger',
    name: 'Wireless Charging Pad',
    costPrice: '$34.99',
    category: 'Tech',
    useCase: 'VIP Partner Gifts · Leasing Office Desks',
    description:
      '10W fast wireless charger with Axle Towing logo. Compatible with all Qi-enabled devices.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    minQty: 10,
    badge: 'Premium',
  },
  {
    id: 'candle',
    name: 'Branded Candle',
    costPrice: '$22.99',
    category: 'Lifestyle',
    useCase: 'HOA Board Appreciation · Holiday Gifting',
    description:
      '8oz soy wax candle in branded box. "Clean Lot" cedar & pine scent. Artisan-quality gift.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2c0 0-2 2-2 4a2 2 0 004 0c0-2-2-4-2-4zM8 10h8l1 12H7L8 10z"
        />
      </svg>
    ),
    minQty: 10,
    badge: null,
  },
  {
    id: 'door-hanger',
    name: 'Parking Permit Door Hanger',
    costPrice: '$12.99',
    category: 'Operational',
    useCase: 'HOA Parking Programs · Apartment Complexes',
    description:
      'Heavy cardstock door hangers with parking permit fields. Dual-branded with your property logo.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    badge: 'Best Value',
  },
  {
    id: 'permit-tag',
    name: 'Parking Permit Hang Tag',
    costPrice: '$24.99',
    category: 'Operational',
    useCase: 'Resident Parking Programs · Visitor Passes',
    description:
      'Durable vinyl hang tags for vehicle windshields. Numbered, UV-resistant, tamper-evident.',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    minQty: 25,
    badge: null,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Drinkware: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Office: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Tech: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Lifestyle: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Operational: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const BADGE_COLORS: Record<string, string> = {
  Popular: 'bg-red-600 text-white',
  Premium: 'bg-amber-500 text-white',
  'Best Value': 'bg-emerald-600 text-white',
};

export default function ShopContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-gradient-to-br from-[#1B2A3F] via-[#1a3055] to-[#0f1e30] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-1.5">
              <span className="text-sm font-semibold tracking-wider text-red-400 uppercase">
                Zero Markup · Cost Price
              </span>
            </div>
            <h1 className="font-heading mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Corporate Gifting{' '}
              <span className="text-red-400">Merchandise Store</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Premium Axle Towing branded merchandise at cost price — no markup for our HOA and
              property management partners. Strengthen relationships with every gift.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop/bulk-order"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700"
              >
                Request Bulk Order
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/shop/parking-permits"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              >
                Customize Parking Permits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Markup Banner */}
      <section className="bg-red-600 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-white">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Zero markup for partners</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Min. 10 units per order</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Ships in 7–14 business days</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Custom message cards available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-[#0f1e30] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
              Corporate Gifting Collection
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Every item is Printify-powered with your Axle Towing branding. Prices shown are
              cost price — no markup for our valued HOA and property management partners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-red-500/30 hover:bg-white/8"
              >
                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${BADGE_COLORS[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-red-600/20 text-red-400">
                  {product.icon}
                </div>

                {/* Category badge */}
                <span
                  className={`mb-3 inline-block w-fit rounded-full border px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[product.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
                >
                  {product.category}
                </span>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-white">{product.name}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/65">
                  {product.description}
                </p>

                {/* Use Case */}
                <div className="mb-4 rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                    Best for:{' '}
                  </span>
                  <span className="text-xs text-white/70">{product.useCase}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{product.costPrice}</div>
                    <div className="text-xs text-white/50">cost price · min {product.minQty} units</div>
                  </div>
                  <Link
                    href={`/shop/bulk-order?product=${product.id}`}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-600/10 to-transparent p-8 text-center">
            <h3 className="font-heading mb-3 text-2xl font-bold text-white md:text-3xl">
              Ready to place a bulk corporate gifting order?
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-white/70">
              Fill out our simple bulk order form and our team will confirm quantities, confirm
              branding, and ship directly to you — at cost, no markup.
            </p>
            <Link
              href="/shop/bulk-order"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Request Bulk Order
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1B2A3F] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-white/70">Simple 4-step process for bulk orders</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Submit Request',
                desc: 'Fill out the bulk order form with your product selection and quantity.',
              },
              {
                step: '02',
                title: 'We Confirm',
                desc: 'Our team reviews your order and sends a digital proof within 24 hours.',
              },
              {
                step: '03',
                title: 'Production',
                desc: 'Printify produces your branded merchandise at cost price.',
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'Ships directly to your address in 7–14 business days.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 text-2xl font-bold text-red-400">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

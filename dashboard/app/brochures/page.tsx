import Link from "next/link";

const brochures = [
  {
    title: "Property Manager Leave-Behind",
    description: "One-page printable handout for property managers. Highlights zero-cost parking enforcement, 24/7 dispatch, and ARS-compliant signage.",
    href: "/brochures/property-manager",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    pages: "1 page",
    audience: "Property Managers",
  },
  {
    title: "HOA Board Pitch Packet",
    description: "Two-page presentation for HOA board meetings. Problem/solution format with compliance details and zero-cost program overview.",
    href: "/brochures/hoa-board",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    pages: "2 pages",
    audience: "HOA Boards",
  },
  {
    title: "Locksmith Partnership One-Pager",
    description: "Partnership proposal for locksmiths. Mutual referral program with revenue sharing opportunities.",
    href: "/brochures/locksmith",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    pages: "1 page",
    audience: "Locksmith Partners",
  },
  {
    title: "Parking Lot Door Hanger",
    description: "Compact door-hanger format for leaving on vehicles or property doors. Eye-catching design with QR code.",
    href: "/brochures/door-hanger",
    icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
    pages: "1 page",
    audience: "Direct Marketing",
  },
];

export default function BrochuresPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-navy font-display">Marketing Brochures</h1>
        <p className="text-gray-500 mt-2">
          Print-ready marketing collateral for Axle Towing & Impound. Click any brochure to preview and print.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brochures.map((b) => (
          <Link key={b.href} href={b.href} className="glass-card p-6 group cursor-pointer block">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/10 transition-colors">
                <svg className="w-6 h-6 text-brand-navy group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-brand-navy font-display group-hover:text-brand-blue transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{b.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full">
                    {b.pages}
                  </span>
                  <span className="text-xs text-gray-400">{b.audience}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-brand-navy">Print Tips</p>
            <p className="text-xs text-gray-500 mt-1">
              Each brochure has a "Print This Page" button. For best results, use Chrome and select "Save as PDF" in the print dialog. The brochures are optimized for Letter/A4 paper size with clean print styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

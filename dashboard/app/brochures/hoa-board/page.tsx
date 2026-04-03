"use client";

import Image from "next/image";

export default function HOABoardBrochure() {
  return (
    <div>
      {/* Screen-only controls */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">HOA Board Pitch Packet</h1>
          <p className="text-sm text-gray-500 mt-1">Two-page presentation for board meetings</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-dark transition-colors text-sm font-medium shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print This Page
        </button>
      </div>

      {/* Page 1 */}
      <div className="bg-white rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden max-w-[8.5in] mx-auto print:max-w-none mb-8 print:mb-0" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <style jsx>{`
          @media print {
            @page { size: letter; margin: 0; }
            body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            nav, aside, .print\\:hidden { display: none !important; }
            main { margin: 0 !important; padding: 0 !important; }
            main > div { max-width: none !important; padding: 0 !important; }
            .page-break { page-break-before: always; }
          }
        `}</style>

        {/* Page 1: Problem / Solution */}
        {/* Hero */}
        <div className="relative bg-[#1B2A3F] text-white px-8 pt-8 pb-10 print:px-10 print:pt-10 print:pb-12">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/gallery/truck-with-sign.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="bg-white rounded-lg px-3 py-1.5">
                <Image src="/logo.png" alt="Axle Towing & Impound" width={180} height={88} className="h-10 w-auto" />
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">HOA Parking Solutions</p>
                <p className="text-xs text-white/50 mt-1">Private Property Towing Specialists</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold print:text-4xl" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Tired of Parking Complaints<br />from Residents?
            </h1>
            <p className="text-blue-200 mt-3 text-base max-w-xl">
              Unauthorized parking is the #1 complaint at HOA board meetings. We eliminate the problem entirely -- at zero cost to your association.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="px-8 py-8 print:px-10">
          <div className="grid grid-cols-2 gap-8">
            {/* Problem side */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-[#DC2626]" style={{ fontFamily: "'Mohave', sans-serif" }}>The Problem</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Visitor spots blocked by unauthorized vehicles",
                  "Residents frustrated by repeat offenders",
                  "Board members fielding constant complaints",
                  "Fire lanes and handicap spaces violated",
                  "Property values affected by unkempt lots",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution side */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-green-600" style={{ fontFamily: "'Mohave', sans-serif" }}>The Solution</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Professional tow enforcement at zero cost",
                  "30-minute guaranteed response, 24/7/365",
                  "ARS-compliant signage installed free",
                  "Dedicated dispatch line for your property",
                  "Monthly reports for board meetings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Before/After Scenario */}
        <div className="px-8 pb-8 print:px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
              <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider mb-2">Before Axle Towing</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                "We were getting 10-15 parking complaints per month at board meetings. Residents were angry, and we had no enforcement mechanism. Posting warning signs did nothing."
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">-- Desert Ridge HOA, Phoenix</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-5" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
              <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">After Axle Towing</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                "Within the first month, unauthorized parking dropped by 90%. By month three, we had zero complaints at our board meeting for the first time in years."
              </p>
              <p className="text-xs text-gray-400 mt-2 italic">-- Desert Ridge HOA, Phoenix</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-[#1B2A3F] px-8 py-5 print:px-10" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
          <div className="grid grid-cols-4 gap-4 text-center text-white">
            {[
              { value: "$0", label: "Cost to HOA" },
              { value: "30 min", label: "Response Time" },
              { value: "24/7", label: "Dispatch" },
              { value: "30+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>{stat.value}</p>
                <p className="text-[10px] text-blue-300 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="page-break bg-white rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden max-w-[8.5in] mx-auto print:max-w-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        {/* Page 2 Header */}
        <div className="bg-[#1E6BB8] px-8 py-5 print:px-10" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Program Details & Compliance
            </h2>
            <div className="bg-white rounded-lg px-2 py-1">
              <Image src="/logo.png" alt="Axle Towing" width={120} height={58} className="h-7 w-auto" />
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="px-8 py-8 print:px-10">
          <h3 className="text-lg font-bold text-[#1B2A3F] mb-4" style={{ fontFamily: "'Mohave', sans-serif" }}>
            What&apos;s Included -- At Zero Cost
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Property Survey", desc: "Complete lot assessment identifying parking zones, fire lanes, and optimal sign placement." },
              { title: "ARS-Compliant Signage", desc: "Professional tow-away signs meeting all Arizona Revised Statutes requirements, installed free." },
              { title: "24/7 Dispatch Line", desc: "Dedicated phone number for your property. Call anytime, any day -- we respond in 30 minutes." },
              { title: "Vehicle Removal", desc: "Prompt, professional removal of unauthorized vehicles with full documentation." },
              { title: "Monthly Reporting", desc: "Detailed reports showing enforcement activity, perfect for board meeting presentations." },
              { title: "Ongoing Support", desc: "Sign maintenance, replacement, and consultation as your property needs evolve." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
                <div className="w-6 h-6 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B2A3F]">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="px-8 print:px-10">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <p className="text-xs font-bold text-green-700 uppercase tracking-wider">Pricing</p>
            <p className="text-4xl font-bold text-green-600 mt-2" style={{ fontFamily: "'Mohave', sans-serif" }}>$0</p>
            <p className="text-sm text-gray-600 mt-1">Zero cost to your HOA -- ever.</p>
            <p className="text-xs text-gray-400 mt-2">Tow fees are paid by vehicle owners, not by your association. No contracts, no minimums, no hidden costs.</p>
          </div>
        </div>

        {/* Compliance */}
        <div className="px-8 py-8 print:px-10">
          <h3 className="text-lg font-bold text-[#1B2A3F] mb-4" style={{ fontFamily: "'Mohave', sans-serif" }}>
            Arizona Compliance
          </h3>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <p className="text-sm text-gray-700 leading-relaxed">
              All Axle Towing operations comply with <strong>Arizona Revised Statutes (ARS) 28-1104</strong> and related private property towing regulations. Our signage meets all statutory requirements for size, content, visibility, and placement. We maintain all required licenses and insurance.
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Licensed & Insured
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ARS 28-1104 Compliant
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full Documentation
              </span>
            </div>
          </div>
        </div>

        {/* CTA + Contact */}
        <div className="px-8 pb-6 print:px-10">
          <div className="bg-[#1B2A3F] rounded-xl p-6 text-center text-white" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <h3 className="text-xl font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Ready to Solve Your Parking Problem?
            </h3>
            <p className="text-blue-200 text-sm mt-2">Schedule a free property assessment today.</p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold text-lg">480-288-5526</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@axletowing.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1B2A3F] px-8 py-3 print:px-10" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
          <div className="flex items-center justify-between text-white/60 text-[10px]">
            <p>Phoenix: 320 E. Pioneer St., AZ 85040 | Apache Junction: 1151 W. Apache Trail, AZ 85120</p>
            <p className="font-semibold text-white/80">Phoenix&apos;s Most Trusted Private Property Towing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function DoorHangerBrochure() {
  return (
    <div>
      {/* Screen-only controls */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">Parking Lot Door Hanger</h1>
          <p className="text-sm text-gray-500 mt-1">Compact door-hanger format for direct marketing</p>
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

      {/* Door Hanger - 3.5" x 8.5" proportions */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden" style={{ width: "3.75in", fontFamily: "'Open Sans', sans-serif" }}>
          <style jsx>{`
            @media print {
              @page { size: letter; margin: 0.5in; }
              body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
              nav, aside, .print\\:hidden { display: none !important; }
              main { margin: 0 !important; padding: 0 !important; }
              main > div { max-width: none !important; padding: 0 !important; display: flex !important; justify-content: center !important; }
            }
          `}</style>

          {/* Door hanger hole cutout indicator */}
          <div className="bg-[#1B2A3F] pt-4 pb-2 flex justify-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/30" />
          </div>

          {/* Header with logo */}
          <div className="relative bg-[#1B2A3F] text-white px-5 pb-6" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <div className="absolute inset-0 opacity-10">
              <Image src="/images/gallery/garage-impound.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative z-10 text-center">
              <div className="bg-white rounded-lg px-3 py-1.5 inline-block mb-4">
                <Image src="/logo.png" alt="Axle Towing" width={140} height={68} className="h-8 w-auto" />
              </div>
              <h1 className="text-xl font-bold leading-tight" style={{ fontFamily: "'Mohave', sans-serif" }}>
                Is Unauthorized<br />Parking Costing<br />You Money?
              </h1>
            </div>
          </div>

          {/* Red accent stripe */}
          <div className="h-1.5 bg-[#DC2626]" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties} />

          {/* 3 Bullet Points */}
          <div className="px-5 py-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2A3F]">Zero Cost to You</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Free signage, free enforcement, free removal. You never pay a dime.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E6BB8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2A3F]">30-Min Response, 24/7</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Day or night, weekday or holiday. We guarantee a 30-minute arrival.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2A3F]">Fully ARS-Compliant</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Legal signage included. Licensed, insured, and Arizona-compliant.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone number prominent */}
          <div className="px-5">
            <div className="bg-[#DC2626] rounded-xl p-4 text-center text-white" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-red-200">Call Now -- Free Assessment</p>
              <p className="text-2xl font-bold mt-1" style={{ fontFamily: "'Mohave', sans-serif" }}>480-288-5526</p>
              <p className="text-[10px] text-red-200 mt-1">24/7/365 Dispatch Available</p>
            </div>
          </div>

          {/* QR Code + website */}
          <div className="px-5 py-5">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p className="text-[7px] text-gray-400 mt-0.5">QR Code</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1B2A3F]">Scan for a Free Quote</p>
                <p className="text-[10px] text-gray-400">axletowing.com/get-quote</p>
                <p className="text-[10px] text-gray-400 mt-1">info@axletowing.com</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#1B2A3F] px-5 py-2.5 text-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <p className="text-[9px] text-white/60">Phoenix & Apache Junction, AZ</p>
            <p className="text-[8px] text-white/40 mt-0.5">Phoenix&apos;s Most Trusted Private Property Towing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

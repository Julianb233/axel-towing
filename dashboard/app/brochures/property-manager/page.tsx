"use client";

import Image from "next/image";

export default function PropertyManagerBrochure() {
  return (
    <div>
      {/* Screen-only controls */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">Property Manager Leave-Behind</h1>
          <p className="text-sm text-gray-500 mt-1">One-page printable handout</p>
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

      {/* Printable brochure */}
      <div className="bg-white rounded-2xl shadow-lg print:shadow-none print:rounded-none overflow-hidden max-w-[8.5in] mx-auto print:max-w-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <style jsx>{`
          @media print {
            @page { size: letter; margin: 0; }
            body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            nav, aside, .print\\:hidden { display: none !important; }
            main { margin: 0 !important; padding: 0 !important; }
            main > div { max-width: none !important; padding: 0 !important; }
          }
        `}</style>

        {/* Hero Header */}
        <div className="relative bg-[#1B2A3F] text-white px-8 pt-8 pb-10 print:px-10 print:pt-10 print:pb-12">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/gallery/apartment-flatbed.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-white rounded-lg px-3 py-1.5">
                <Image src="/logo.png" alt="Axle Towing & Impound" width={180} height={88} className="h-10 w-auto" />
              </div>
              <div className="text-right text-sm">
                <p className="font-semibold text-blue-300">24/7/365 Dispatch</p>
                <p className="text-white/70">Phoenix & Apache Junction</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold leading-tight print:text-4xl" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Free Parking Enforcement<br />for Your Property
            </h1>
            <p className="text-blue-200 mt-3 text-base max-w-lg">
              Eliminate unauthorized parking without spending a dime. Axle Towing handles everything -- signage, enforcement, and removal -- at absolutely zero cost to you.
            </p>
          </div>
        </div>

        {/* 4 Key Benefits */}
        <div className="px-8 py-8 print:px-10 print:py-10">
          <h2 className="text-xl font-bold text-[#1B2A3F] mb-6" style={{ fontFamily: "'Mohave', sans-serif" }}>
            Why Property Managers Choose Axle Towing
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {/* Benefit 1 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1B2A3F] text-sm">Zero Cost to You</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  No contracts, no hidden fees, no invoices. We earn from tow fees only -- you pay nothing.
                </p>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1E6BB8]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1B2A3F] text-sm">30-Minute Response</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Guaranteed 30-minute response time, 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1B2A3F] text-sm">ARS-Compliant Signage</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  We provide and install Arizona-compliant tow signage at no charge -- fully legal from day one.
                </p>
              </div>
            </div>
            {/* Benefit 4 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1B2A3F] text-sm">30+ Years Experience</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Our team brings over 30 years of combined towing and property enforcement experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="px-8 py-8 bg-gray-50 print:px-10 print:py-10" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
          <h2 className="text-xl font-bold text-[#1B2A3F] mb-6" style={{ fontFamily: "'Mohave', sans-serif" }}>
            How It Works
          </h2>
          <div className="flex items-start gap-6">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>1</div>
              <h3 className="font-bold text-[#1B2A3F] text-sm mt-3">We Survey Your Property</h3>
              <p className="text-xs text-gray-500 mt-1">Free lot assessment and signage plan tailored to your property.</p>
            </div>
            {/* Arrow */}
            <div className="pt-5 text-gray-300 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>2</div>
              <h3 className="font-bold text-[#1B2A3F] text-sm mt-3">Signage Installed Free</h3>
              <p className="text-xs text-gray-500 mt-1">ARS-compliant signs placed at all lot entrances at zero cost.</p>
            </div>
            {/* Arrow */}
            <div className="pt-5 text-gray-300 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>3</div>
              <h3 className="font-bold text-[#1B2A3F] text-sm mt-3">Call Us, We Respond</h3>
              <p className="text-xs text-gray-500 mt-1">Unauthorized vehicles removed within 30 minutes, day or night.</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="px-8 py-8 print:px-10">
          <div className="bg-[#1B2A3F] rounded-xl p-6 text-white relative overflow-hidden" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <svg className="absolute top-3 left-4 w-10 h-10 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <p className="relative z-10 text-sm italic leading-relaxed pl-6">
              "Since partnering with Axle Towing, our parking complaints have dropped to nearly zero. Their response time is incredible and we have never paid a cent. I recommend them to every property manager I know."
            </p>
            <p className="relative z-10 text-blue-300 text-xs font-semibold mt-3 pl-6">
              -- Sarah M., Property Manager, Phoenix AZ
            </p>
          </div>
        </div>

        {/* Bottom: QR Code + Contact */}
        <div className="px-8 pb-8 print:px-10 print:pb-10">
          <div className="flex items-center justify-between border-t-2 border-[#1E6BB8] pt-6">
            <div>
              <h3 className="font-bold text-[#1B2A3F] text-lg" style={{ fontFamily: "'Mohave', sans-serif" }}>Ready to Get Started?</h3>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-bold text-[#1B2A3F]">480-288-5526</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@axletowing.com
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Phoenix & Apache Junction, AZ
                </p>
              </div>
            </div>
            {/* QR Code placeholder */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p className="text-[8px] text-gray-400 mt-1">QR Code</p>
                </div>
              </div>
              <p className="text-[9px] text-gray-400 mt-1">axletowing.com/get-quote</p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
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

"use client";

import Image from "next/image";

export default function LocksmithBrochure() {
  return (
    <div>
      {/* Screen-only controls */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">Locksmith Partnership One-Pager</h1>
          <p className="text-sm text-gray-500 mt-1">Mutual referral partnership proposal</p>
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

        {/* Header */}
        <div className="relative bg-[#1B2A3F] text-white px-8 pt-8 pb-8 print:px-10">
          <div className="absolute inset-0 opacity-8">
            <Image src="/images/gallery/desert-recovery.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-white rounded-lg px-3 py-1.5">
                <Image src="/logo.png" alt="Axle Towing & Impound" width={180} height={88} className="h-10 w-auto" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-wider">Partnership Opportunity</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold print:text-4xl" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Let&apos;s Grow Together.
            </h1>
            <p className="text-blue-200 mt-2 text-base max-w-lg">
              A mutual referral partnership between Axle Towing and your locksmith business -- more customers for both of us.
            </p>
          </div>
        </div>

        {/* Mutual Benefits */}
        <div className="px-8 py-8 print:px-10">
          <h2 className="text-xl font-bold text-[#1B2A3F] mb-6 text-center" style={{ fontFamily: "'Mohave', sans-serif" }}>
            A Partnership That Pays Both Ways
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Your Benefits */}
            <div className="border-2 border-[#1E6BB8] rounded-xl overflow-hidden">
              <div className="bg-[#1E6BB8] px-5 py-3 text-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'Mohave', sans-serif" }}>What You Get</p>
                <p className="text-blue-200 text-[10px] uppercase tracking-wider">Benefits for Your Locksmith Business</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { title: "Towing Referrals", desc: "Every locked-out customer we encounter gets referred to you." },
                  { title: "Revenue Share", desc: "Earn a referral fee for every tow job you send our way." },
                  { title: "Co-Branded Cards", desc: "We provide business cards featuring both our services." },
                  { title: "Priority Response", desc: "Your referrals get top priority in our dispatch queue." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#1E6BB8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-[#1B2A3F]">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Benefits */}
            <div className="border-2 border-[#DC2626] rounded-xl overflow-hidden">
              <div className="bg-[#DC2626] px-5 py-3 text-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'Mohave', sans-serif" }}>What We Get</p>
                <p className="text-red-200 text-[10px] uppercase tracking-wider">Benefits for Axle Towing</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { title: "Lockout Referrals", desc: "You refer customers who need a tow alongside locksmith services." },
                  { title: "Property Contacts", desc: "Introductions to property managers you already serve." },
                  { title: "Expanded Reach", desc: "Access to your customer base in areas we want to grow." },
                  { title: "Cross-Marketing", desc: "Joint promotions and shared marketing materials." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-[#1B2A3F]">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How the Referral Works */}
        <div className="px-8 print:px-10">
          <div className="bg-gray-50 rounded-xl p-6" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <h3 className="text-lg font-bold text-[#1B2A3F] mb-4 text-center" style={{ fontFamily: "'Mohave', sans-serif" }}>
              How the Referral Program Works
            </h3>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>1</div>
                <p className="text-sm font-bold text-[#1B2A3F] mt-2">You Refer a Tow</p>
                <p className="text-xs text-gray-500 mt-1">Call our partner line with the customer&apos;s info</p>
              </div>
              <svg className="w-6 h-6 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>2</div>
                <p className="text-sm font-bold text-[#1B2A3F] mt-2">We Handle the Job</p>
                <p className="text-xs text-gray-500 mt-1">Professional towing service, as always</p>
              </div>
              <svg className="w-6 h-6 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1E6BB8] text-white flex items-center justify-center mx-auto text-lg font-bold" style={{ fontFamily: "'Mohave', sans-serif" }}>3</div>
                <p className="text-sm font-bold text-[#1B2A3F] mt-2">You Earn a Fee</p>
                <p className="text-xs text-gray-500 mt-1">Referral payment sent monthly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Opportunity */}
        <div className="px-8 py-8 print:px-10">
          <div className="bg-[#1B2A3F] rounded-xl p-6 text-white text-center" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
            <p className="text-xs font-bold text-blue-300 uppercase tracking-wider">Revenue Opportunity</p>
            <p className="text-2xl font-bold mt-2" style={{ fontFamily: "'Mohave', sans-serif" }}>
              Just 5 Referrals Per Month = Extra Income, Zero Effort
            </p>
            <p className="text-blue-200 text-sm mt-2">
              No inventory, no overhead, no extra staff. Simply refer customers who need towing and earn a fee for each completed job.
            </p>
          </div>
        </div>

        {/* Partner Signup CTA */}
        <div className="px-8 pb-8 print:px-10">
          <div className="border-t-2 border-[#1E6BB8] pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1B2A3F]" style={{ fontFamily: "'Mohave', sans-serif" }}>
                  Become a Partner Today
                </h3>
                <p className="text-sm text-gray-500 mt-1">It takes 5 minutes to set up. No paperwork hassle.</p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-bold text-[#1B2A3F]">480-288-5526</span>
                    <span className="text-xs text-gray-400">-- Ask for Elliott</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@axletowing.com
                  </p>
                </div>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="w-28 h-28 bg-[#1E6BB8]/5 border-2 border-[#1E6BB8]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-[#1E6BB8] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <p className="text-[10px] text-[#1E6BB8] font-semibold mt-1">Call to Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1B2A3F] px-8 py-3 print:px-10" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
          <div className="flex items-center justify-between text-white/60 text-[10px]">
            <p>Axle Towing & Impound | Phoenix & Apache Junction, AZ</p>
            <p className="font-semibold text-white/80">Phoenix&apos;s Most Trusted Private Property Towing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

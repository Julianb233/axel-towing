import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Service Area — Greater Phoenix Metro Towing & Parking Enforcement | Axle Towing",
  description:
    "Axle Towing & Impound serves 38 cities across the Greater Phoenix metro area with free private property towing and parking enforcement. Covering Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, and more.",
  alternates: {
    canonical: "https://axletowing.com/service-area",
    languages: {
      en: "https://axletowing.com/service-area",
      es: "https://axletowing.com/es/area-de-servicio",
    },
  },
};

const CITY_STATS: Record<
  string,
  { population: string; properties: string; response: string }
> = {
  phoenix: {
    population: "1.6M+",
    properties: "3,500+",
    response: "< 30 min",
  },
  scottsdale: {
    population: "250K+",
    properties: "1,200+",
    response: "< 30 min",
  },
  mesa: {
    population: "540K+",
    properties: "1,800+",
    response: "< 35 min",
  },
  tempe: {
    population: "185K+",
    properties: "900+",
    response: "< 25 min",
  },
  chandler: {
    population: "280K+",
    properties: "1,100+",
    response: "< 30 min",
  },
  gilbert: {
    population: "275K+",
    properties: "1,000+",
    response: "< 35 min",
  },
  glendale: {
    population: "255K+",
    properties: "950+",
    response: "< 30 min",
  },
  "apache-junction": {
    population: "45K+",
    properties: "250+",
    response: "< 40 min",
  },
  peoria: {
    population: "195K+",
    properties: "800+",
    response: "< 30 min",
  },
  surprise: {
    population: "155K+",
    properties: "650+",
    response: "< 35 min",
  },
  avondale: {
    population: "90K+",
    properties: "350+",
    response: "< 35 min",
  },
  goodyear: {
    population: "110K+",
    properties: "450+",
    response: "< 35 min",
  },
  buckeye: {
    population: "115K+",
    properties: "400+",
    response: "< 40 min",
  },
  "litchfield-park": {
    population: "7K+",
    properties: "80+",
    response: "< 35 min",
  },
  tolleson: {
    population: "8K+",
    properties: "60+",
    response: "< 30 min",
  },
  "queen-creek": {
    population: "75K+",
    properties: "350+",
    response: "< 40 min",
  },
  "fountain-hills": {
    population: "25K+",
    properties: "200+",
    response: "< 35 min",
  },
  "paradise-valley": {
    population: "14K+",
    properties: "150+",
    response: "< 25 min",
  },
  "cave-creek": {
    population: "6K+",
    properties: "70+",
    response: "< 35 min",
  },
  carefree: {
    population: "4K+",
    properties: "50+",
    response: "< 35 min",
  },
  "sun-city": {
    population: "39K+",
    properties: "300+",
    response: "< 30 min",
  },
  "sun-city-west": {
    population: "26K+",
    properties: "200+",
    response: "< 35 min",
  },
  anthem: {
    population: "25K+",
    properties: "180+",
    response: "< 35 min",
  },
  youngtown: {
    population: "7K+",
    properties: "60+",
    response: "< 30 min",
  },
  "el-mirage": {
    population: "40K+",
    properties: "150+",
    response: "< 30 min",
  },
  guadalupe: {
    population: "6K+",
    properties: "40+",
    response: "< 25 min",
  },
  maricopa: {
    population: "60K+",
    properties: "250+",
    response: "< 45 min",
  },
  "san-tan-valley": {
    population: "105K+",
    properties: "400+",
    response: "< 40 min",
  },
  "gold-canyon": {
    population: "13K+",
    properties: "100+",
    response: "< 40 min",
  },
  laveen: {
    population: "55K+",
    properties: "220+",
    response: "< 30 min",
  },
  "sun-lakes": {
    population: "16K+",
    properties: "130+",
    response: "< 35 min",
  },
  waddell: {
    population: "10K+",
    properties: "80+",
    response: "< 35 min",
  },
  ahwatukee: {
    population: "80K+",
    properties: "320+",
    response: "< 30 min",
  },
  "casa-grande": {
    population: "60K+",
    properties: "230+",
    response: "< 45 min",
  },
  coolidge: {
    population: "14K+",
    properties: "90+",
    response: "< 50 min",
  },
  "new-river": {
    population: "15K+",
    properties: "100+",
    response: "< 40 min",
  },
  "rio-verde": {
    population: "3K+",
    properties: "40+",
    response: "< 45 min",
  },
  "san-tan-heights": {
    population: "25K+",
    properties: "150+",
    response: "< 40 min",
  },
  florence: {
    population: "30K+",
    properties: "80+",
    response: "< 50 min",
  },
};

const MAP_PINS: { name: string; slug: string; top: string; left: string }[] = [
  { name: "Phoenix", slug: "phoenix", top: "42%", left: "38%" },
  { name: "Scottsdale", slug: "scottsdale", top: "32%", left: "55%" },
  { name: "Mesa", slug: "mesa", top: "48%", left: "62%" },
  { name: "Tempe", slug: "tempe", top: "52%", left: "48%" },
  { name: "Chandler", slug: "chandler", top: "62%", left: "52%" },
  { name: "Gilbert", slug: "gilbert", top: "65%", left: "65%" },
  { name: "Glendale", slug: "glendale", top: "30%", left: "28%" },
  { name: "Apache Junction", slug: "apache-junction", top: "45%", left: "82%" },
  { name: "Peoria", slug: "peoria", top: "25%", left: "30%" },
  { name: "Surprise", slug: "surprise", top: "22%", left: "18%" },
  { name: "Avondale", slug: "avondale", top: "48%", left: "20%" },
  { name: "Goodyear", slug: "goodyear", top: "52%", left: "12%" },
  { name: "Buckeye", slug: "buckeye", top: "55%", left: "5%" },
  { name: "Queen Creek", slug: "queen-creek", top: "72%", left: "72%" },
  { name: "Fountain Hills", slug: "fountain-hills", top: "28%", left: "68%" },
  { name: "Paradise Valley", slug: "paradise-valley", top: "35%", left: "48%" },
  { name: "Cave Creek", slug: "cave-creek", top: "18%", left: "45%" },
  { name: "Sun City", slug: "sun-city", top: "28%", left: "20%" },
  { name: "Anthem", slug: "anthem", top: "10%", left: "38%" },
  { name: "El Mirage", slug: "el-mirage", top: "32%", left: "18%" },
  { name: "Maricopa", slug: "maricopa", top: "85%", left: "40%" },
  { name: "Florence", slug: "florence", top: "90%", left: "58%" },
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(/images/optimized/axle-towing-contact-phoenix-arizona.webp)`,
          }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Greater Phoenix Metro
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Service Area &mdash;{" "}
              <span className="text-gradient">Greater Phoenix Metro</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              Free private property towing and parking enforcement across 38
              cities and over 3,000 square miles of the Valley of the Sun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "38", label: "Cities Covered" },
              { value: "15,000+", label: "Properties Served" },
              { value: "5M+", label: "Residents in Coverage" },
              { value: "< 30 min", label: "Average Response" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-blue">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Coverage Map
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            We provide free private property towing services across the entire
            Phoenix metropolitan area.
          </p>
          <div className="reveal">
            <div className="relative mx-auto max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50 shadow-lg">
              {/* Desert texture overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(217,119,6,0.15)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(234,88,12,0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,_rgba(180,83,9,0.1)_0%,_transparent_40%)]" />
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-[25%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute top-[50%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute top-[75%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute left-[25%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
                <div className="absolute left-[50%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
                <div className="absolute left-[75%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
              </div>

              {/* Freeway lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* I-17 (north-south through Phoenix) */}
                <path
                  d="M 155 20 L 155 140 L 155 250"
                  stroke="rgba(100,100,100,0.25)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
                {/* I-10 (east-west through Phoenix) */}
                <path
                  d="M 20 130 L 155 130 L 260 200"
                  stroke="rgba(100,100,100,0.25)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
                {/* Loop 101 */}
                <path
                  d="M 120 40 Q 80 120 120 200 Q 180 260 260 200 Q 300 140 260 60 Q 220 20 160 30"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />
                {/* Loop 202 */}
                <path
                  d="M 180 100 Q 220 140 280 160 Q 310 170 330 150"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />
                {/* US-60 */}
                <path
                  d="M 190 155 L 340 155"
                  stroke="rgba(100,100,100,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />
              </svg>

              {/* Coverage area blob */}
              <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] rounded-[40%] bg-brand-blue/8 border border-brand-blue/20 blur-sm" />

              {/* City pins */}
              {MAP_PINS.map((pin) => (
                <Link
                  key={pin.slug}
                  href={`/locations/${pin.slug}`}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-full"
                  style={{ top: pin.top, left: pin.left }}
                >
                  {/* Pin */}
                  <div className="flex flex-col items-center">
                    <span className="hidden sm:block text-[11px] font-bold text-gray-800 bg-white/90 backdrop-blur-sm rounded-md px-2 py-0.5 shadow-sm mb-1 whitespace-nowrap group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {pin.name}
                    </span>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-brand-blue border-2 border-white shadow-lg group-hover:scale-150 transition-transform relative">
                      <div className="absolute inset-0 rounded-full bg-brand-blue/50 animate-ping" />
                    </div>
                  </div>
                </Link>
              ))}

              {/* Map legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>Service location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0 border-t border-dashed border-gray-400" />
                  <span>Major freeway</span>
                </div>
              </div>

              {/* Compass */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-gray-600">
                N
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Cities We Serve
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Click any city to learn more about our free private property towing
            and parking enforcement services in that area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area, index) => {
              const stats = CITY_STATS[area.slug];
              return (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="glass-card-white rounded-2xl p-6 border-glow-blue group reveal hover:shadow-xl transition-all duration-300"
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                      {area.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  {stats && (
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">
                          Pop.
                        </div>
                        <div className="text-sm font-bold text-brand-blue">
                          {stats.population}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">
                          Properties
                        </div>
                        <div className="text-sm font-bold text-brand-blue">
                          {stats.properties}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">
                          Response
                        </div>
                        <div className="text-sm font-bold text-brand-blue">
                          {stats.response}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Is Our Service Free for Property Owners?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Axle Towing &amp; Impound, we believe property owners
                  should not have to pay to enforce their own parking rules. Our
                  revenue comes from impound fees charged to violators — not from
                  you.
                </p>
                <p>
                  We provide compliant signage, regular patrols, a property
                  management portal, and 24/7 response — all at absolutely zero
                  cost to property owners and managers across the Greater Phoenix
                  metro area.
                </p>
              </div>
            </div>
            <div className="reveal">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "shield", text: "Compliant Signage Installed Free" },
                  { icon: "clock", text: "24/7 Emergency Response" },
                  { icon: "monitor", text: "Online Property Portal" },
                  { icon: "dollar", text: "$0 Cost to Property Owners" },
                ].map((item, i) => (
                  <div
                    key={item.text}
                    className="glass-card-white rounded-xl p-5 border-glow-blue text-center reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-6 h-6 text-brand-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon === "shield" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        )}
                        {item.icon === "clock" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                        {item.icon === "monitor" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        )}
                        {item.icon === "dollar" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cta/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protect Your Property Today
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of property owners across the Greater Phoenix metro
              who trust Axle Towing &amp; Impound for free private property
              towing and parking enforcement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

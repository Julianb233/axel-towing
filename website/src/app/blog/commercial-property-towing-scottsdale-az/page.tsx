import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Commercial Property Towing Scottsdale AZ | Retail & Office Parking Enforcement',
  description: 'Professional commercial property towing in Scottsdale AZ for retail centers, office parks, and mixed-use properties. ARS 28-3511 compliant. Call Axle Towing 480-288-5526.',
  keywords: [
    'commercial property towing Scottsdale AZ',
    'retail parking enforcement Scottsdale',
    'office park towing Scottsdale',
    'unauthorized vehicle removal Scottsdale',
    'private property towing Scottsdale Arizona',
    'shopping center towing Scottsdale',
    'Scottsdale commercial parking enforcement',
    'Old Town Scottsdale towing',
    'Kierland parking enforcement',
    'DC Ranch commercial towing',
  ],
  alternates: {
    canonical: `https://${COMPANY.domain}/blog/commercial-property-towing-scottsdale-az`,
  },
  openGraph: {
    title: 'Commercial Property Towing Scottsdale AZ | Retail & Office Parking Enforcement',
    description: 'Professional commercial property towing in Scottsdale AZ for retail centers, office parks, and mixed-use properties. ARS 28-3511 compliant.',
    url: `https://${COMPANY.domain}/blog/commercial-property-towing-scottsdale-az`,
    type: 'article',
    images: [
      {
        url: `https://${COMPANY.domain}/images/optimized/axle-towing-commercial-property-towing-phoenix-az.webp`,
        width: 1200,
        height: 630,
        alt: 'Commercial property towing service in Scottsdale Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Property Towing Scottsdale AZ',
    description: 'Retail centers, office parks, and mixed-use properties throughout Scottsdale. ARS 28-3511 compliant towing. 480-288-5526.',
  },
}

const FAQS = [
  {
    question: 'Can I authorize towing from my Scottsdale commercial property without calling police first?',
    answer: 'Yes. Under ARS 28-3511, Scottsdale commercial property owners have the right to immediately remove vehicles parked without authorization. You do not need police assistance to initiate a tow. The towing company must notify local police within one hour of removal, and the vehicle owner must receive notice — these obligations fall on the towing operator, not you.',
  },
  {
    question: 'How do I protect high-value tenant parking spaces in a Scottsdale office park?',
    answer: 'A combination of proper signage meeting ARS 9-499.05 standards and a patrol towing agreement provides the strongest protection. We recommend reserved-space signs with tenant names or space numbers, clear visitor parking zones with time limits, and scheduled enforcement sweeps. For luxury office parks and medical campuses, we can configure custom enforcement windows that protect tenant parking during business hours while reducing unnecessary tows after hours.',
  },
  {
    question: 'My Scottsdale retail center loses customers because of unauthorized parking. What are my options?',
    answer: 'Retail centers in Old Town Scottsdale and along major corridors frequently contend with visitors to nearby restaurants, bars, or entertainment venues using customer-only parking. Solutions include clearly posted tow-away signs, visible monitoring, and enforcement during peak hours. We work with retail center management to identify peak abuse periods and structure patrol agreements accordingly. Customers with legitimate business at your center are never targeted.',
  },
  {
    question: 'Do Scottsdale mixed-use developments need different enforcement strategies?',
    answer: 'Mixed-use properties — combining retail, office, and residential uses — require zone-specific enforcement. Retail zones may need customer-only enforcement during business hours, while residential areas typically need overnight protection. We map each zone and its designated hours when setting up your program, so enforcement is applied precisely where and when you need it.',
  },
  {
    question: 'How quickly can Axle Towing respond to a call from my Scottsdale commercial property?',
    answer: 'Our dispatch operates around the clock. For Scottsdale commercial properties, typical response times are 20 to 40 minutes depending on location and current call volume. Properties with active patrol agreements often see faster response because our trucks are already in the area on regular sweeps.',
  },
  {
    question: 'What happens to a vehicle after it is towed from my Scottsdale commercial property?',
    answer: 'The vehicle is transported to a licensed impound facility. Within one hour, we notify Scottsdale Police per Arizona law. Owners can retrieve their vehicle by contacting the impound yard directly — all redemption fees are paid by the vehicle owner. There is no cost to your property for the towing service when using our standard PPI (Private Property Impound) program.',
  },
]

const AREAS = [
  {
    name: 'Old Town Scottsdale',
    description: 'Retail shops, galleries, restaurants, and entertainment venues create high-turnover parking demand. Nearby nightlife frequently drives overflow into commercial lots after hours.',
  },
  {
    name: 'Kierland Commons & Scottsdale Quarter',
    description: 'Open-air lifestyle centers with shared parking structures and adjacent residential uses require coordinated enforcement that protects retail customers while accommodating complex parking patterns.',
  },
  {
    name: 'DC Ranch & Entrada',
    description: 'Mixed commercial and office-medical uses with affluent resident base. Parking violations often involve visitor overflow from community events and adjacent amenities.',
  },
  {
    name: 'Scottsdale Airpark',
    description: 'Industrial, manufacturing, and aviation-adjacent businesses with large employee parking needs. Unauthorized contractor or visitor vehicles can disrupt operations and create liability.',
  },
  {
    name: 'Camelback & Indian School Corridor',
    description: 'High-density commercial and medical office corridor with frequent patient and employee parking competition from adjacent uses.',
  },
  {
    name: 'McCormick Ranch Commercial',
    description: 'Neighborhood retail and professional services with dedicated parking that is often targeted by nearby park or trail visitors.',
  },
  {
    name: 'North Scottsdale (Pima/Frank Lloyd Wright)',
    description: 'Upscale retail, financial services, and medical office corridor. Special events and resort proximity create seasonal enforcement demand.',
  },
  {
    name: 'South Scottsdale Industrial & Mixed-Use',
    description: 'Light industrial and commercial mixed-use with 24-hour operations. Unauthorized vehicles, abandoned trucks, and overnight trespassers require consistent enforcement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Commercial Property Towing Scottsdale AZ: Protecting Retail, Office & Mixed-Use Parking',
      description: 'Comprehensive guide for Scottsdale commercial property managers on authorized towing programs, Arizona law compliance, and protecting customer and tenant parking.',
      image: `https://${COMPANY.domain}/images/optimized/axle-towing-commercial-property-towing-phoenix-az.webp`,
      author: { '@type': 'Organization', name: COMPANY.name },
      publisher: {
        '@type': 'Organization',
        name: COMPANY.name,
        logo: { '@type': 'ImageObject', url: `https://${COMPANY.domain}/images/logo.png` },
      },
      datePublished: '2025-01-15',
      dateModified: '2025-01-15',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: `https://${COMPANY.domain}`,
      areaServed: { '@type': 'City', name: 'Scottsdale', containedInPlace: { '@type': 'State', name: 'Arizona' } },
      serviceType: 'Commercial Property Towing',
    },
  ],
}

export default function CommercialPropertyTowingScottsdaleAZ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 parallax-container">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-900 to-blue-900 opacity-90" />
            <div className="grain-overlay" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6 text-amber-300 text-sm font-medium">
              <span>Scottsdale Commercial Parking Enforcement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Property Towing{' '}
              <span className="text-gradient">Scottsdale AZ</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protecting customer parking, tenant spaces, and operational areas for Scottsdale retail centers, office parks, and mixed-use developments. ARS 28-3511 compliant. No cost to property owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg px-8 py-4">
                Call {COMPANY.phone}
              </a>
              <a href="/contact" className="btn-cta text-lg px-8 py-4">
                Request a Site Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Scottsdale Commercial Properties Need Consistent Parking Enforcement
          </h2>
          <p className="text-gray-300 text-lg mb-5">
            Scottsdale&apos;s mix of luxury retail, upscale dining, medical office campuses, and high-traffic entertainment districts creates a uniquely competitive parking environment for commercial property owners and managers. When unauthorized vehicles occupy customer parking or tenant spaces, the business consequences are direct: lost customers, frustrated tenants, reduced property values, and in some cases, safety and liability concerns.
          </p>
          <p className="text-gray-300 text-lg mb-5">
            Under Arizona Revised Statutes Section 28-3511, Scottsdale commercial property owners have broad authority to remove vehicles parked without permission — at no cost to the property. The private property impound model means all towing and storage fees are the responsibility of the vehicle owner, making enforcement financially accessible for properties of any size.
          </p>
          <p className="text-gray-300 text-lg">
            Axle Towing serves Scottsdale commercial properties across every district, from Old Town retail corridors to North Scottsdale office parks to Airpark industrial facilities. Our enforcement programs are calibrated to the specific needs of each property type, protecting your investment while maintaining the professional standard Scottsdale properties expect.
          </p>
        </section>

        {/* Arizona Law */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="glass-card-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">Arizona Law and Commercial Property Towing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">ARS 28-3511 — Immediate Removal Authority</h3>
                  <p className="text-gray-300 text-sm">
                    Commercial property owners may authorize removal of any vehicle parked without permission. No police involvement is required. The towing operator must notify police within one hour and provide the owner with a retrieval notice. This law applies equally to surface lots, parking structures, reserved spaces, and loading zones.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">ARS 9-499.05 — Signage Standards</h3>
                  <p className="text-gray-300 text-sm">
                    Tow-away signs must meet specific requirements: minimum 17x22 inches, visible at each entrance or within 25 feet of the property edge, stating the towing company name and phone number. Proper signage is the foundation of a legally defensible towing program. We assist new clients with sign placement review.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Private Property Impound (PPI)</h3>
                  <p className="text-gray-300 text-sm">
                    The PPI model means the property owner incurs no towing cost. Fees are charged directly to the vehicle owner upon retrieval. For commercial properties, this makes enforcement economically straightforward — the program pays for itself through deterrence rather than recurring expense.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Liability and Authorization</h3>
                  <p className="text-gray-300 text-sm">
                    Property managers typically execute a written authorization agreement with the towing company. This document defines which spaces are covered, authorized enforcement hours, and who may call for a tow. A clear agreement protects both parties and ensures every tow is properly documented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">Commercial Property Types We Serve in Scottsdale</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🛍️',
                title: 'Retail & Lifestyle Centers',
                body: 'From Old Town boutiques to Kierland Commons, retail properties depend on customer parking availability. We enforce time limits, reserved loading zones, and after-hours restrictions without disrupting legitimate shopping traffic.',
              },
              {
                icon: '🏢',
                title: 'Office Parks & Corporate Campuses',
                body: 'Scottsdale\'s professional and financial services sector occupies significant office space throughout the city. Reserved tenant spaces, visitor parking, and executive zones all benefit from clearly defined enforcement programs.',
              },
              {
                icon: '🏥',
                title: 'Medical & Wellness Facilities',
                body: 'Patient parking at Scottsdale medical offices is a critical operational resource. When non-patients occupy designated spaces, it directly affects care delivery. We prioritize patient-access areas in enforcement scheduling.',
              },
              {
                icon: '🏭',
                title: 'Airpark & Industrial Properties',
                body: 'The Scottsdale Airpark houses manufacturers, aviation businesses, and tech companies with complex vehicle and equipment needs. Unauthorized vehicles in loading areas, employee lots, or security zones create safety and operational issues we resolve quickly.',
              },
              {
                icon: '🍽️',
                title: 'Restaurant & Entertainment Districts',
                body: 'Old Town Scottsdale and corridor restaurant districts face intense parking competition, especially on weekends. Customers who cannot find parking take their business elsewhere. Time-limited enforcement during service hours keeps your lot available.',
              },
              {
                icon: '🏨',
                title: 'Hotels & Resort-Adjacent Commercial',
                body: 'Businesses near Scottsdale\'s resort corridor often find hotel guests or event attendees using commercial parking not intended for them. Targeted enforcement resolves this without inconveniencing legitimate guests.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card-white p-6 rounded-xl">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scottsdale-Specific Challenges */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-6">Parking Challenges Unique to Scottsdale Commercial Properties</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Event and Festival Overflow</h3>
                <p className="text-gray-300">
                  Scottsdale hosts a significant calendar of art events, auto shows, fashion weeks, and festivals that draw large crowds. Visitors who cannot find event parking frequently walk to nearby commercial lots and leave their vehicles for hours. Properties along the Old Town corridor and near WestWorld are especially vulnerable during major events. Proactive enforcement during known event windows prevents your lot from becoming an unofficial event parking facility.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Resort and Short-Term Rental Guests</h3>
                <p className="text-gray-300">
                  Scottsdale&apos;s tourism infrastructure — resorts, boutique hotels, Airbnb and VRBO rentals — generates guests unfamiliar with local parking rules. Resort guests may park in commercial lots adjacent to their property assuming shared use, while STR guests may not understand that commercial parking is not public parking. Clear signage combined with enforcement creates a strong deterrent.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Night Life and Afternoon High-Demand Periods</h3>
                <p className="text-gray-300">
                  Old Town Scottsdale&apos;s restaurant and bar scene creates intense parking demand on Thursday through Saturday evenings. Patrons of bars and restaurants frequently overflow into adjacent commercial and office lots. If your property is near entertainment uses, after-hours enforcement is often the most effective intervention — protecting your lot when businesses are closed while the area remains active.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Vehicle and High-Liability Considerations</h3>
                <p className="text-gray-300">
                  Scottsdale&apos;s affluent population means high-value vehicles are the norm in commercial parking areas. This raises the stakes for how enforcement is conducted. Our team handles every vehicle with professional care. All tows are documented photographically before vehicle contact. Our operators are trained on proper procedures for performance and luxury vehicles to minimize the risk of transport damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Program Structure */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">How a Commercial Towing Program Works</h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                desc: 'We walk your property to review current signage, identify problem zones, and understand your specific enforcement needs. We will identify any signage gaps that could create legal exposure and recommend improvements before program launch.',
              },
              {
                step: '02',
                title: 'Authorization Agreement',
                desc: 'We document the covered area, enforcement hours, and authorized contacts for your property. This agreement is the legal basis for each tow and protects your property from any owner disputes.',
              },
              {
                step: '03',
                title: 'Signage Compliance',
                desc: 'If existing signs do not meet ARS 9-499.05 requirements, we will identify the gaps. Compliant signage must be posted before enforcement begins to ensure every tow is defensible.',
              },
              {
                step: '04',
                title: 'Patrol or On-Call Enforcement',
                desc: 'Choose scheduled patrols — where our trucks actively sweep your lot at defined intervals — or on-call enforcement where you or your staff contact our dispatch when an unauthorized vehicle is identified. Many properties use a combination.',
              },
              {
                step: '05',
                title: 'Documentation and Notification',
                desc: 'Every tow is photographed before vehicle contact. We notify Scottsdale Police per ARS 28-874. Vehicle owners can reach the impound facility directly for retrieval information.',
              },
            ].map((item) => (
              <div key={item.step} className="glass-card-white p-6 rounded-xl flex gap-4">
                <div className="text-3xl font-bold text-amber-500 min-w-[3rem]">{item.step}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-6">Scottsdale Commercial Areas We Serve</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {AREAS.map((area) => (
                <div key={area.name} className="glass-card-white p-5 rounded-xl border-glow-blue">
                  <h3 className="font-semibold text-amber-300 mb-2">{area.name}</h3>
                  <p className="text-gray-300 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="glass-card-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-amber-300">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-sm text-gray-400">
            <p className="font-semibold text-gray-300 mb-2">Legal Disclaimer</p>
            <p>
              This article provides general informational content about commercial property towing in Scottsdale, Arizona. It is not legal advice. Arizona statutes referenced include ARS 28-3511, ARS 9-499.05, ARS 28-874, and ARS 28-4141 through 28-4145. Property owners should consult a licensed Arizona attorney for guidance specific to their situation and property. Laws and local ordinances may change; verify current requirements with the City of Scottsdale and the Arizona Department of Transportation.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  href: '/blog/commercial-property-towing-phoenix-az',
                  title: 'Commercial Property Towing Phoenix AZ',
                  desc: 'Towing programs for retail, office, and industrial properties throughout Phoenix.',
                },
                {
                  href: '/blog/hoa-parking-enforcement-scottsdale-az',
                  title: 'HOA Parking Enforcement Scottsdale AZ',
                  desc: 'Parking enforcement solutions for Scottsdale homeowners associations and gated communities.',
                },
                {
                  href: '/blog/apartment-parking-enforcement-scottsdale-az',
                  title: 'Apartment Parking Enforcement Scottsdale AZ',
                  desc: 'Towing programs for multifamily properties throughout Scottsdale.',
                },
              ].map((article) => (
                <a key={article.href} href={article.href} className="glass-card-white p-5 rounded-xl hover:border-amber-500/50 transition-colors block">
                  <h3 className="font-semibold text-sm mb-2 text-amber-300">{article.title}</h3>
                  <p className="text-gray-400 text-xs">{article.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card-white p-10 rounded-2xl border-glow-blue">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Scottsdale Commercial Property Parking
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you manage a single retail center, a multi-building office park, or a mixed-use development, Axle Towing provides compliant, professional towing enforcement tailored to Scottsdale commercial properties. No cost to your property under the PPI model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg px-8 py-4">
                Call {COMPANY.phone}
              </a>
              <a href="/contact" className="btn-cta text-lg px-8 py-4">
                Schedule a Site Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

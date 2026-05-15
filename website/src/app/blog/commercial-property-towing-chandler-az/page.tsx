import type { Metadata } from 'next'
import Image from 'next/image'
import { COMPANY } from '@/lib/constants'

const HERO_IMAGE = "/images/seo/commercial-property-towing-chandler-az.webp";
const HERO_IMAGE_URL = "https://axletowing.com" + HERO_IMAGE;
const HERO_ALT = "Commercial property towing service in Chandler Arizona - Axle Towing";

export const metadata: Metadata = {
  title: 'Commercial Property Towing Chandler AZ | Office Park & Retail Parking Enforcement',
  description: 'Professional commercial property towing in Chandler AZ for tech-corridor office parks, retail centers, and industrial properties. ARS 28-3511 compliant. Call Axle Towing 480-288-5526.',
  keywords: [
    'commercial property towing Chandler AZ',
    'office park towing Chandler',
    'retail parking enforcement Chandler',
    'unauthorized vehicle removal Chandler',
    'private property towing Chandler Arizona',
    'Price Road parking enforcement',
    'Chandler tech corridor towing',
    'Ocotillo commercial towing',
    'Intel Intel campus parking Chandler',
    'Chandler Fashion Center parking enforcement',
  ],
  alternates: {
    canonical: `https://${COMPANY.domain}/blog/commercial-property-towing-chandler-az`,
  },
  openGraph: {
    title: 'Commercial Property Towing Chandler AZ | Office Park & Retail Parking Enforcement',
    description: 'Professional commercial property towing in Chandler AZ for tech-corridor office parks, retail centers, and industrial properties. ARS 28-3511 compliant.',
    url: `https://${COMPANY.domain}/blog/commercial-property-towing-chandler-az`,
    type: 'article',
    images: [{ url: HERO_IMAGE_URL, width: 1200, height: 630, alt: HERO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Property Towing Chandler AZ',
    description: 'Tech-corridor office parks, retail centers, and industrial properties throughout Chandler. ARS 28-3511 compliant. 480-288-5526.',
    images: [HERO_IMAGE_URL],
  },
}

const FAQS = [
  {
    question: 'What legal authority do I have to tow unauthorized vehicles from my Chandler commercial property?',
    answer: 'Under ARS 28-3511, Chandler commercial property owners have the right to immediately remove vehicles parked without authorization. You do not need police involvement before authorizing a tow. The towing operator is required by Arizona law to notify Chandler Police within one hour of removal. A written authorization agreement between your property and the towing company establishes the legal basis for each removal and protects you if a vehicle owner disputes the tow.',
  },
  {
    question: 'How do we protect employee and visitor parking at a Chandler tech-campus office park?',
    answer: 'Multi-tenant office parks in Chandler typically benefit from a combination of reserved-space signage, time-limited visitor zones, and scheduled enforcement patrols. For tech campuses where employee shift schedules vary, we can configure enforcement windows to align with actual occupancy patterns. For properties near major retail or entertainment uses, after-hours enforcement prevents spill-in parking during evening and weekend hours.',
  },
  {
    question: 'Can I authorize towing for loading zones and fire lanes specifically, without broader lot enforcement?',
    answer: 'Yes. The authorization agreement defines exactly which areas are covered. Many commercial property managers start with loading zones, fire lanes, and accessible parking spaces — the most operationally critical areas — before expanding coverage. You can also set different enforcement hours for different zones, such as loading-zone enforcement only during delivery windows and fire-lane enforcement around the clock.',
  },
  {
    question: 'What signage is required before I can legally tow from my Chandler commercial property?',
    answer: 'ARS 9-499.05 requires tow-away signs to be at least 17 by 22 inches, visible at each entrance and within 25 feet of the property perimeter, and must display the name and phone number of the authorized towing company. Signs should be securely posted at eye level where drivers can reasonably be expected to see them before parking. We review signage compliance during site assessments and identify any gaps before enforcement begins.',
  },
  {
    question: 'My Chandler retail property has problems with employees from a neighboring business using customer parking. What are my options?',
    answer: 'This is a common issue in Chandler commercial corridors, particularly where retail is adjacent to office or medical uses. Neighboring employees often park in retail lots to avoid longer walks from their own employer\'s parking. The most effective solutions are compliant tow-away signage, time-limit restrictions on certain zones (e.g., 2-hour customer parking), and periodic enforcement sweeps during business hours. The first few tows typically establish strong deterrence.',
  },
  {
    question: 'Is there any cost to my property when Axle Towing removes a vehicle under the PPI program?',
    answer: 'No. Under the Private Property Impound model, all towing and storage fees are charged to the vehicle owner upon retrieval. Your property incurs no towing cost. The PPI program makes professional enforcement economically viable for commercial properties of every size, from a small strip center to a large corporate campus.',
  },
]

const AREAS = [
  {
    name: 'Price Road Tech Corridor',
    description: 'One of the Southwest\'s most significant technology employment corridors, with Intel, Microchip Technology, and dozens of large office campuses requiring employee, contractor, and visitor parking management.',
  },
  {
    name: 'Downtown Chandler',
    description: 'Restaurants, boutique retail, and professional services in the historic downtown core. Evening and weekend entertainment draws create competition for parking that affects daytime businesses.',
  },
  {
    name: 'Chandler Fashion Center & Loop 101',
    description: 'Major retail corridor anchored by the regional mall with high-volume parking needs. Adjacent office and restaurant uses create overflow demand, particularly on evenings and weekends.',
  },
  {
    name: 'Ocotillo & Lake Corridor',
    description: 'Upscale mixed-use and corporate campus development around the Ocotillo lakes. Professional tenants expect designated parking to be consistently available and professionally managed.',
  },
  {
    name: 'Pecos & Germann Industrial',
    description: 'South Chandler industrial and warehousing districts with loading dock areas, equipment storage, and employee lots requiring consistent enforcement of operational zones.',
  },
  {
    name: 'Fulton Ranch & Southeast Chandler',
    description: 'Newer commercial development adjacent to master-planned residential communities. Retail and medical office properties here see neighborhood overflow, especially on weekends.',
  },
  {
    name: 'Chandler Airpark',
    description: 'Aviation-related businesses and industrial tenants near Chandler Municipal Airport with specialized parking and operational zone needs.',
  },
  {
    name: 'West Chandler / Dobson Corridor',
    description: 'Established commercial strip centers and medical offices along Dobson Road and adjacent corridors with long-standing customer parking enforcement needs.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Commercial Property Towing Chandler AZ: Tech-Corridor Office Parks, Retail Centers & Industrial Properties',
      description: 'Comprehensive guide for Chandler commercial property managers on authorized towing programs, Arizona law compliance, and protecting parking at tech campuses, retail centers, and industrial facilities.',
      image: HERO_IMAGE_URL,
      author: {
        '@type': 'Organization',
        name: COMPANY.name,
        url: 'https://axletowing.com',
        knowsAbout: ['Arizona private property towing', 'ARS 28-3511', 'commercial property towing', 'Property management'],
        areaServed: 'Phoenix metro, Arizona',
      },
      reviewedBy: {
        '@type': 'Organization',
        name: 'Axle Towing Operations Team',
        description: 'ARS-compliant private property towing operators serving the Phoenix metro since 2021',
      },
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
      areaServed: { '@type': 'City', name: 'Chandler', containedInPlace: { '@type': 'State', name: 'Arizona' } },
      serviceType: 'Commercial Property Towing',
    },
  ],
}

export default function CommercialPropertyTowingChandlerAZ() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-800 opacity-90" />
            <div className="grain-overlay" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-blue-300 text-sm font-medium">
              <span>Chandler Commercial Parking Enforcement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Property Towing{' '}
              <span className="text-gradient">Chandler AZ</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Parking enforcement for Chandler&apos;s tech-corridor office parks, retail centers, medical campuses, and industrial facilities. ARS 28-3511 compliant programs. No cost to property owners under the PPI model.
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

        <section className="bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image src={HERO_IMAGE} alt={HERO_ALT} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
            </div>
          </div>
        </section>

        <aside className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 mb-4">
          <div className="bg-blue-950 border-l-4 border-primary rounded-r-2xl p-6">
            <p className="text-xs uppercase tracking-wider font-bold text-blue-300 mb-2">TL;DR</p>
            <p className="text-gray-200 leading-relaxed">Chandler commercial property managers can enforce parking at zero cost under Arizona&apos;s PPI model — all fees are paid by the vehicle owner. Chandler&apos;s Price Road tech corridor, Chandler Fashion Center, and industrial parks generate heavy unauthorized parking pressure. Axle Towing provides 24/7 dispatch, ARS 28-3511-compliant documentation, and law enforcement notification for all Chandler commercial properties. ARS 9-499.05-compliant signage must be in place before any tow.</p>
          </div>
        </aside>

        {/* Intro */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-6 mb-8 border-l-4 border-cta">
            <h3 className="font-heading text-lg font-bold text-white mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Chandler commercial parking enforcement costs the property nothing — Arizona&apos;s PPI model places all fees on the vehicle owner</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Chandler&apos;s tech corridor and major employers generate above-average unauthorized parking pressure in adjacent commercial lots</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>ARS 28-3511 authorizes immediate removal from Chandler commercial parking when ARS 9-499.05-compliant signage is posted</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Axle Towing documents every Chandler tow with time-stamped photos and handles mandatory law enforcement notification</span></li>
              <li className="flex items-start gap-2"><span className="text-cta font-bold">&#8594;</span><span>Service covers all Chandler commercial zones: Price Road corridor, Chandler Fashion Center, Ocotillo, south Chandler industrial, and mixed-use retail</span></li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Commercial Parking Enforcement in Chandler&apos;s Growing Business Landscape
          </h2>
          <p className="text-gray-300 text-lg mb-5">
            Chandler has emerged as one of Arizona&apos;s premier commercial and technology destinations. The Price Road corridor hosts some of the largest private-sector employers in the state, generating an enormous daily population of employees, contractors, vendors, and visitors. Surrounding this employment core, retail, restaurant, and service businesses compete for the same finite parking resources.
          </p>
          <p className="text-gray-300 text-lg mb-5">
            For commercial property owners and managers, the business consequences of unauthorized parking are direct and measurable. When your customer lot is occupied by employees from a neighboring business, when contractor vehicles block loading zones, or when event overflow fills your parking structure, your tenants and customers bear the cost. These situations damage relationships with tenants and reduce the accessibility that determines whether customers choose your property or a competitor.
          </p>
          <p className="text-gray-300 text-lg">
            Arizona law gives Chandler commercial property owners the authority to address these situations efficiently. Under ARS 28-3511, you can authorize immediate removal of unauthorized vehicles at no cost to your property. Axle Towing&apos;s commercial towing programs are built around Chandler&apos;s specific commercial landscape — from tech campuses on Price Road to retail corridors near the Fashion Center to industrial parks in south Chandler.
          </p>
        </section>

        {/* Chandler Commercial Context */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-6">The Chandler Tech Corridor and Commercial Parking</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Major Employer Campus Complexities</h3>
                <p className="text-gray-300">
                  Chandler&apos;s largest employers operate sprawling campuses with complex parking structures and surface lots that are managed directly by the employer. But the commercial properties adjacent to these campuses face a related challenge: employees on off-campus lunch breaks, contractors taking shortcuts, and overflow from visitor parking that fills during large meetings or events. Properties within a quarter mile of a major tech campus often see consistent unauthorized use from neighboring employers.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Multi-Tenant Office Park Coordination</h3>
                <p className="text-gray-300">
                  Chandler&apos;s office parks typically house multiple tenants with different parking needs, different business hours, and varying visitor volumes. One tenant may have a large morning delivery that requires the loading zone to remain clear, while another has afternoon client meetings that need visitor spaces available. A well-designed towing program maps each zone to its specific coverage rules and hours, so enforcement is precise rather than blanket.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Retail and Entertainment Spillover</h3>
                <p className="text-gray-300">
                  Chandler Fashion Center and the downtown entertainment district draw significant foot traffic that spills into adjacent commercial parking. Restaurants and retailers in the vicinity of these anchors see their customer parking absorbed by shoppers and diners who prefer not to pay for structured parking or cannot find available spaces in designated public areas. Time-limited enforcement and periodic patrols effectively address this pattern.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">Industrial and Warehouse Operational Zones</h3>
                <p className="text-gray-300">
                  South Chandler industrial and warehouse facilities have operational parking needs that directly affect business function. Loading docks occupied by unauthorized vehicles delay deliveries. Employee lots filled by contractor vehicles require employees to park further away, affecting safety and productivity. Industrial property managers typically prioritize these zones for enforcement over general visitor parking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arizona Law */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="glass-card-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Arizona Commercial Property Towing Law</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">ARS 28-3511 — Your Authorization Rights</h3>
                  <p className="text-gray-300 text-sm">
                    As a Chandler commercial property owner or manager, you may authorize removal of any vehicle parked on your property without permission. No police call is required to initiate the tow. The towing operator handles required notifications to law enforcement and provides vehicle retrieval information to the owner.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">ARS 9-499.05 — Required Signage</h3>
                  <p className="text-gray-300 text-sm">
                    Tow-away signs must be at minimum 17 by 22 inches, placed at entrances and within 25 feet of the property edge, and must include the name and phone number of the towing company. We review your existing signage during site assessments and note any gaps before enforcement begins.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">ARS 28-874 — Operator Notification Duty</h3>
                  <p className="text-gray-300 text-sm">
                    Axle Towing notifies Chandler Police within one hour of each removal, as required by Arizona law. We also ensure the vehicle owner can reach the impound facility for retrieval. These compliance obligations are our responsibility, not yours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Zero Cost to Property Owners</h3>
                  <p className="text-gray-300 text-sm">
                    The Private Property Impound (PPI) model means your property pays nothing. All towing, impound, and storage fees are assessed to the vehicle owner upon retrieval. This makes professional enforcement financially accessible for any commercial property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">Commercial Properties We Serve in Chandler</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '💻',
                title: 'Technology & Corporate Campuses',
                body: 'Large tech employers and their adjacent properties require sophisticated parking management. We work with property managers to coordinate enforcement that protects designated spaces without disrupting the high-volume traffic these properties generate.',
              },
              {
                icon: '🏢',
                title: 'Multi-Tenant Office Parks',
                body: 'Complex tenant mixes with varying hours and parking needs benefit from customized enforcement programs that balance protection with operational flexibility for each tenant.',
              },
              {
                icon: '🛍️',
                title: 'Retail Centers & Strip Malls',
                body: 'Customer parking availability is directly tied to retail revenue. Time-limit enforcement keeps high-turnover spaces available while longer-term enforcement prevents neighboring-business employees from occupying customer lots.',
              },
              {
                icon: '🏥',
                title: 'Medical Office & Healthcare',
                body: 'Patient parking access is operationally critical for Chandler medical practices. We prioritize designated patient zones and accessible parking spaces in our enforcement programs.',
              },
              {
                icon: '🍽️',
                title: 'Restaurant & Dining Properties',
                body: 'Restaurants near Chandler Fashion Center and downtown face significant competition for customer parking during peak meal periods. Targeted enforcement during service hours keeps your lot available for dining guests.',
              },
              {
                icon: '📦',
                title: 'Industrial & Warehouse Facilities',
                body: 'South Chandler industrial properties with loading docks, equipment staging areas, and employee lots benefit from enforcement that keeps operational zones functional around the clock.',
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

        {/* Program Setup */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-8">Setting Up a Chandler Commercial Towing Program</h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Initial Site Assessment',
                  desc: 'We visit your property to review existing signage, identify zones requiring enforcement, and understand your operational patterns. We provide a written summary of signage gaps and recommended coverage zones.',
                },
                {
                  step: '02',
                  title: 'Signage Compliance Review',
                  desc: 'We confirm your tow-away signs meet ARS 9-499.05 requirements. If gaps exist, we document what is needed. All signs must be compliant before enforcement begins.',
                },
                {
                  step: '03',
                  title: 'Authorization Agreement',
                  desc: 'We document which areas are covered, enforcement hours, and who may authorize tows on your property. This agreement is the legal foundation for every removal and protects you from owner disputes.',
                },
                {
                  step: '04',
                  title: 'Program Launch',
                  desc: 'Enforcement begins on your scheduled date. For patrol agreements, we document sweep times and findings. For on-call programs, your staff contacts dispatch when a violation is identified.',
                },
                {
                  step: '05',
                  title: 'Ongoing Compliance',
                  desc: 'Every tow is photographed and documented. Police notifications are filed within one hour. Monthly reporting available for multi-tenant properties needing audit trails.',
                },
              ].map((item) => (
                <div key={item.step} className="glass-card-white p-6 rounded-xl flex gap-4">
                  <div className="text-3xl font-bold text-blue-500 min-w-[3rem]">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-6">Chandler Commercial Areas We Serve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {AREAS.map((area) => (
              <div key={area.name} className="glass-card-white p-5 rounded-xl border-glow-blue">
                <h3 className="font-semibold text-blue-300 mb-2">{area.name}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="glass-card-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-sm text-gray-400">
            <p className="font-semibold text-gray-300 mb-2">Legal Disclaimer</p>
            <p>
              This article provides general informational content about commercial property towing in Chandler, Arizona. It is not legal advice. Arizona statutes referenced include ARS 28-3511, ARS 9-499.05, ARS 28-874, and ARS 28-4141 through 28-4145. Property owners should consult a licensed Arizona attorney for guidance specific to their situation and property. Laws and local ordinances may change; verify current requirements with the City of Chandler and the Arizona Department of Transportation.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  href: '/blog/hoa-parking-enforcement-chandler-az',
                  title: 'HOA Parking Enforcement Chandler AZ',
                  desc: 'Parking enforcement for Chandler homeowners associations and planned communities.',
                },
                {
                  href: '/blog/commercial-property-towing-phoenix-az',
                  title: 'Commercial Property Towing Phoenix AZ',
                  desc: 'Towing programs for retail, office, and industrial properties throughout Phoenix.',
                },
                {
                  href: '/blog/commercial-property-towing-tempe-az',
                  title: 'Commercial Property Towing Tempe AZ',
                  desc: 'Parking enforcement for Mill Avenue corridor and Tempe business districts.',
                },
              ].map((article) => (
                <a key={article.href} href={article.href} className="glass-card-white p-5 rounded-xl hover:border-blue-500/50 transition-colors block">
                  <h3 className="font-semibold text-sm mb-2 text-blue-300">{article.title}</h3>
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
              Protect Your Chandler Commercial Property Parking
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              From Price Road tech campuses to Chandler Fashion Center retail to south Chandler industrial parks, Axle Towing delivers compliant, professional commercial parking enforcement throughout Chandler. Contact us to schedule your site assessment and get a program configured for your property.
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

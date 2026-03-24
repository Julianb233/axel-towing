import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, SERVICES, SERVICE_AREAS } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog & Resources', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Property Manager Portal', href: '/portal' },
  { label: 'Vehicle Lookup', href: '/vehicle-lookup' },
  { label: 'FAQ', href: '/faq' },
  { label: 'We Buy Cars', href: '/we-buy-cars' },
  { label: 'Careers', href: '/careers' },
  { label: 'Referral Program', href: '/referral' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Google',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    label: 'Yelp',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.74-.8l-2.747-4.207s-.56-.852.104-1.28c.664-.428 4.523-2.867 5.088-3.227.564-.36 1.332.016 1.332.016s1.2.588 1.876 1.564c.676.976.72 1.728.72 1.728s.088.924-.644 1.248l-3.58 1.728 4.588-1.732c.732-.276 1.2.372 1.2.372s.36.588.36 1.452c0 .864-.36 1.452-.36 1.452s-.468.648-1.2.252z" />
        <path d="M14.074 14.182l3.296 3.727c.564.64.084 1.524.084 1.524s-.648 1.032-1.608 1.5c-.96.468-1.704.3-1.704.3s-.852-.204-.96-.996l-.696-5.028c-.12-.876.888-1.32.888-1.32s.828-.348 1.296.3l-.596-.007z" />
        <path d="M11.198 14.578l-1.236 4.884c-.216.852-1.248.96-1.248.96s-1.2.012-2.1-.588-.996-1.272-.996-1.272-.324-.816.36-1.332l4.068-3.048c.756-.564 1.488.204 1.488.204s.552.636-.336 1.192z" />
        <path d="M10.29 11.13L6.222 9.414c-.876-.372-.66-1.296-.66-1.296s.372-1.14 1.332-1.776 1.692-.48 1.692-.48.828.18 1.056.936l1.524 4.836c.288.888-.648 1.284-.648 1.284s-.756.312-1.228-.288l.396-.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* CTA Banner */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonial-bg.jpg"
            alt="Phoenix Arizona property"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)' }} />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="hero-text relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Protect Your Property?
          </h2>
          <p className="text-white mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Get a free consultation and custom towing program &mdash; at no cost
            to you. Serving the entire Phoenix metro area.
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
      </section>

      {/* Clean separator line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      {/* Footer content — clean dark background */}
      <div className="relative" style={{ background: '#1b2a3f' }}>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Column 1: Brand / Company */}
            <div>
              <Image
                src={COMPANY.logo}
                alt={`${COMPANY.name} logo`}
                width={200}
                height={66}
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {COMPANY.description}
              </p>

              {/* Hablamos Español badge */}
              <Link
                href="/es"
                className="inline-flex items-center gap-2 mb-4 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-3 py-1.5 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
                Hablamos Espa&ntilde;ol
              </Link>

              {/* Social media icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-lg text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-white font-bold mb-5 font-heading text-lg uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-white/80 hover:text-white/95 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-cta rounded-full transition-all duration-300 group-hover:w-3" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Locations */}
            <div>
              <h3 className="text-white font-bold mb-5 font-heading text-lg uppercase tracking-wider">
                Locations
              </h3>
              <ul className="space-y-3 text-sm">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={
                        ['phoenix', 'scottsdale', 'mesa'].includes(area.slug)
                          ? `/locations/${area.slug}`
                          : '/#locations'
                      }
                      className="text-white/80 hover:text-white/95 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-cta rounded-full transition-all duration-300 group-hover:w-3" />
                      {area.name}, AZ
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Links + Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-5 font-heading text-lg uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm mb-8">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white/95 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-cta rounded-full transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <h3 className="text-white font-bold mb-4 font-heading text-lg uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-cta hover:text-blue-300 font-semibold transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white/95 transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {COMPANY.email}
                </a>

                {/* Both addresses */}
                {COMPANY.addresses.map((addr) => (
                  <div key={addr.label} className="flex items-start gap-2 text-white/80">
                    <svg
                      className="w-4 h-4 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <span className="text-white/95 font-medium text-xs uppercase tracking-wide">
                        {addr.label}
                      </span>
                      <br />
                      {addr.street}, {addr.city}, {addr.state} {addr.zip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-white/10 mt-12 pt-10 pb-2">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-white font-bold font-heading text-lg mb-2">
                Get Parking Enforcement Tips Monthly
              </h3>
              <p className="text-white/80 text-sm mb-5">
                Join property managers across Phoenix who get our best tips on parking enforcement, towing compliance, and tenant satisfaction.
              </p>
              <form
                action="#"
                method="POST"
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-heading font-bold text-sm tracking-wide transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/30 text-xs mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-white/80 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/terms-of-service"
                className="hover:text-white/80 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-white/20">|</span>
              <span>Serving the Greater Phoenix Metro Area &mdash; 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

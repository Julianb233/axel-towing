import Link from "next/link";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-orange-500 text-navy-950 py-10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Protect Your Property?
          </h2>
          <p className="text-navy-800 mb-6 text-lg">
            Get a free consultation and custom towing program &mdash; at no cost
            to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-navy-950 text-white font-bold px-8 py-3 rounded-lg hover:bg-navy-900 transition-colors"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-white text-navy-950 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-black text-navy-950 text-lg">
                A
              </div>
              <span className="text-white text-lg font-bold">{COMPANY.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {COMPANY.description}
            </p>
            <p className="text-sm">
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-orange-400 hover:text-orange-300 font-semibold"
              >
                {COMPANY.phone}
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={area.slug === "phoenix" || area.slug === "scottsdale" || area.slug === "mesa" ? `/locations/${area.slug}` : "/#locations"}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {area.name}, AZ
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog &amp; Resources</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-orange-400 transition-colors">Property Manager Portal</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Serving the Greater Phoenix Metro Area &mdash; Available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}

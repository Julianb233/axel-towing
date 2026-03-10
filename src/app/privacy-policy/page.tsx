import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Privacy Policy</h1>
          <p className="text-white/90 text-lg">Last updated: March 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 font-heading mt-0">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            {COMPANY.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website{" "}
            <strong>{COMPANY.domain}</strong>, use our services, or interact with us in any way.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Information We Collect</h2>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Personal Information You Provide</h3>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information that you voluntarily provide when you:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Fill out a contact form or request a quote</li>
            <li>Call us or send us an email</li>
            <li>Use our vehicle lookup or locate vehicle feature</li>
            <li>Submit a job application through our careers page</li>
            <li>Sign up for our property manager portal</li>
            <li>Engage with us on social media</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            This information may include your name, email address, phone number, mailing address,
            vehicle information (make, model, year, VIN, license plate number), property details,
            and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Information Collected Automatically</h3>
          <p className="text-gray-600 leading-relaxed">
            When you visit our website, we may automatically collect certain information, including:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website or source</li>
            <li>Pages visited, time spent on pages, and navigation patterns</li>
            <li>Device identifiers and screen resolution</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your browsing experience,
            analyze website traffic, and understand where our visitors come from. These may include:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for the website to function properly,
              such as session management and security features.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors interact with our
              website (e.g., Google Analytics).
            </li>
            <li>
              <strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track
              campaign performance.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            You can control cookie preferences through your browser settings. Note that disabling
            certain cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
          <ul className="text-gray-600 space-y-2">
            <li>Provide, maintain, and improve our towing and impound services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Process vehicle lookups and impound status checks</li>
            <li>Communicate with you about your towed or impounded vehicle</li>
            <li>Manage property manager accounts and portal access</li>
            <li>Send service-related notifications and updates</li>
            <li>Comply with Arizona towing regulations and legal requirements</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Protect against fraud, unauthorized access, and illegal activity</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            We may share your information with trusted third-party service providers who assist us
            in operating our website and business, including:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Website hosting and analytics providers</li>
            <li>Payment processing services</li>
            <li>Customer relationship management (CRM) platforms</li>
            <li>Communication and notification services</li>
            <li>Vehicle history and title verification services</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            These third parties are contractually obligated to protect your information and may only
            use it for the purposes we specify.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Vehicle Lookup Data</h2>
          <p className="text-gray-600 leading-relaxed">
            When you use our vehicle lookup or locate vehicle feature, we collect vehicle
            identification information such as license plate numbers, VIN numbers, and vehicle
            descriptions. This information is used solely to help you locate your vehicle and
            understand the impound process. Vehicle data is retained as required by Arizona law and
            municipal regulations governing towing and impound operations.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain personal information for as long as necessary to fulfill the purposes outlined
            in this policy, comply with legal obligations (including Arizona towing record-keeping
            requirements), resolve disputes, and enforce our agreements. Contact form submissions
            and general inquiries are typically retained for up to two (2) years unless a longer
            retention period is required by law.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your
            personal information against unauthorized access, alteration, disclosure, or destruction.
            These include SSL/TLS encryption, secure server infrastructure, access controls, and
            regular security assessments. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">
            CCPA Compliance (California Residents)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you are a California resident, you have additional rights under the California
            Consumer Privacy Act (CCPA), including:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Right to Know:</strong> You may request information about the categories and
              specific pieces of personal information we have collected about you.
            </li>
            <li>
              <strong>Right to Delete:</strong> You may request that we delete the personal
              information we have collected from you, subject to certain exceptions.
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> You may opt out of the sale of your personal
              information. Note: We do not sell personal information.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for
              exercising your CCPA rights.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            To exercise any of these rights, please contact us using the information provided below.
            We will verify your identity before processing your request and respond within 45 days
            as required by law.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">
            Arizona-Specific Privacy Considerations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            As an Arizona-based company, we comply with all applicable Arizona privacy laws and
            regulations. Under Arizona law, we are required to maintain certain records related to
            towing and impound operations, including vehicle information, tow documentation, and
            notification records. These records are maintained in accordance with Arizona Revised
            Statutes (ARS) Title 28 requirements and applicable municipal codes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In the event of a data breach involving your personal information, we will notify you in
            accordance with the Arizona Data Breach Notification Law (ARS &sect; 18-552) without
            unreasonable delay.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Children&rsquo;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website and services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children. If we become aware that we have
            collected personal information from a child under 18, we will take steps to delete that
            information promptly.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we make material changes, we will
            update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to
            review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 not-prose">
            <p className="text-gray-800 font-semibold text-lg">{COMPANY.name}</p>
            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                {COMPANY.email}
              </a>
            </p>
            <p className="text-gray-600">
              Phone:{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">
                {COMPANY.phone}
              </a>
            </p>
            <p className="text-gray-600">
              {COMPANY.addresses[0].street}, {COMPANY.addresses[0].city},{" "}
              {COMPANY.addresses[0].state} {COMPANY.addresses[0].zip}
            </p>
            <p className="text-gray-600">
              {COMPANY.addresses[1].street}, {COMPANY.addresses[1].city},{" "}
              {COMPANY.addresses[1].state} {COMPANY.addresses[1].zip}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-primary hover:underline font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

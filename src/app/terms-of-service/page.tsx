import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY.name}`,
  description: `Terms of service for ${COMPANY.name}. Review our policies regarding towing services, impound operations, website use, and more.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Terms of Service</h1>
          <p className="text-white/90 text-lg">Last updated: March 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 font-heading mt-0">Agreement to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using the {COMPANY.name} website ({COMPANY.domain}) and our services,
            you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
            agree to these Terms, please do not use our website or services. These Terms constitute
            a legally binding agreement between you and {COMPANY.name}.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Towing Services</h2>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Private Property Towing</h3>
          <p className="text-gray-600 leading-relaxed">
            {COMPANY.name} provides private property towing and impound services in accordance with
            Arizona Revised Statutes (ARS) Title 28, Chapter 9, Article 5 (ARS &sect; 28-1101
            through &sect; 28-1109) and applicable municipal ordinances. All towing operations are
            conducted under written authorization from property owners or their authorized agents.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our towing services are performed in compliance with:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Arizona Revised Statutes (ARS) governing towing and impound operations</li>
            <li>Applicable municipal codes for each jurisdiction we serve</li>
            <li>Arizona Department of Public Safety (DPS) towing regulations</li>
            <li>Federal Motor Carrier Safety Administration (FMCSA) requirements, where applicable</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Parking Enforcement</h3>
          <p className="text-gray-600 leading-relaxed">
            Parking enforcement services are provided only on private property where we have a
            written agreement with the property owner or authorized property management company.
            All enforcement actions comply with Arizona signage requirements as specified under
            ARS &sect; 28-1104, which mandates that towing signs must be clearly posted and visible
            at property entrances.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Impound Policies</h2>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Vehicle Redemption</h3>
          <p className="text-gray-600 leading-relaxed">
            Vehicle owners may redeem their impounded vehicles by:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Presenting valid government-issued photo identification</li>
            <li>Providing proof of vehicle ownership or registration</li>
            <li>Paying all applicable fees, including towing fees and accrued storage fees</li>
            <li>
              Visiting our impound facility during business hours: {COMPANY.hours.weekday},{" "}
              {COMPANY.hours.saturday}
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            If you are not the registered owner, you must present written authorization from the
            registered owner along with their identification, or provide other legally acceptable
            documentation as specified under Arizona law.
          </p>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Storage Fees</h3>
          <p className="text-gray-600 leading-relaxed">
            Storage fees are set by the applicable municipality and are not determined by{" "}
            {COMPANY.name}. Daily storage fees begin accruing from the date and time of impoundment.
            Fee schedules are established by local government authorities and are subject to change
            based on municipal regulations. Current fee schedules are available at our impound
            facilities and upon request.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Pursuant to ARS &sect; 28-1108, if an impounded vehicle is not claimed within the
            timeframe specified by law, {COMPANY.name} may initiate the abandoned vehicle process as
            outlined in ARS &sect; 28-4801 et seq.
          </p>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Notification Requirements</h3>
          <p className="text-gray-600 leading-relaxed">
            In accordance with Arizona law, we provide notice to registered vehicle owners and
            lienholders within the timeframes required by ARS &sect; 28-1105. Notifications are
            sent via certified mail to the address on file with the Arizona Motor Vehicle Division
            (MVD) or the applicable state&rsquo;s department of motor vehicles.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Website Use</h2>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Permitted Use</h3>
          <p className="text-gray-600 leading-relaxed">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Use the website in any way that violates any applicable federal, state, or local law</li>
            <li>Attempt to gain unauthorized access to any portion of the website or its systems</li>
            <li>Use automated scripts, bots, or scrapers to access or collect data from the website</li>
            <li>Transmit viruses, malware, or any other harmful code</li>
            <li>Interfere with or disrupt the website&rsquo;s operation or servers</li>
            <li>Impersonate any person or entity, or falsely represent your affiliation</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Intellectual Property</h3>
          <p className="text-gray-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is
            the property of {COMPANY.name} or its content suppliers and is protected by United
            States and international copyright, trademark, and other intellectual property laws.
            You may not reproduce, distribute, modify, or create derivative works from any content
            without our prior written consent.
          </p>

          <h3 className="text-xl font-bold text-blue-900 font-heading">Property Manager Portal</h3>
          <p className="text-gray-600 leading-relaxed">
            Access to our property manager portal is granted to authorized property owners and
            managers who have entered into a service agreement with {COMPANY.name}. Portal
            credentials are confidential and must not be shared. You are responsible for all
            activities that occur under your account. We reserve the right to suspend or terminate
            portal access for any violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by Arizona law:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>
              {COMPANY.name} shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to your use of our
              website or services.
            </li>
            <li>
              Our total liability for any claim arising out of or relating to these Terms or our
              services shall not exceed the total amount of fees paid by you to {COMPANY.name} in
              the twelve (12) months preceding the claim.
            </li>
            <li>
              We are not responsible for delays or failures in performance resulting from causes
              beyond our reasonable control, including but not limited to acts of God, natural
              disasters, government actions, labor disputes, or equipment failures.
            </li>
            <li>
              Information provided on this website is for general informational purposes only and
              does not constitute legal advice. Consult with a qualified attorney for legal matters
              related to towing or impound disputes.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Disclaimer of Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            without warranties of any kind, either express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the website will be uninterrupted, error-free,
            or free of viruses or other harmful components.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Dispute Resolution</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have a dispute regarding our towing or impound services:
          </p>
          <ol className="text-gray-600 space-y-2">
            <li>
              <strong>Step 1 &mdash; Contact Us Directly:</strong> Please contact our office at{" "}
              {COMPANY.phone} or {COMPANY.email} to discuss the matter. Many disputes can be
              resolved through direct communication.
            </li>
            <li>
              <strong>Step 2 &mdash; Written Complaint:</strong> If the matter is not resolved
              informally, you may submit a written complaint to our office. We will respond within
              ten (10) business days.
            </li>
            <li>
              <strong>Step 3 &mdash; Municipal Hearing:</strong> For disputes related to towing
              fees or the legality of a tow, vehicle owners may have the right to request a hearing
              through the applicable municipality as provided under Arizona law.
            </li>
            <li>
              <strong>Step 4 &mdash; Mediation or Arbitration:</strong> Any disputes not resolved
              through the above steps may be submitted to binding arbitration in Maricopa County,
              Arizona, in accordance with the rules of the American Arbitration Association.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Indemnification</h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to indemnify, defend, and hold harmless {COMPANY.name}, its officers,
            directors, employees, agents, and affiliates from and against any claims, liabilities,
            damages, losses, and expenses (including reasonable attorneys&rsquo; fees) arising out
            of or in any way connected with your use of our website or services, your violation of
            these Terms, or your violation of any rights of another.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State
            of Arizona, without regard to its conflict of law principles. Any legal proceedings
            arising out of or relating to these Terms shall be brought exclusively in the state or
            federal courts located in Maricopa County, Arizona.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Severability</h2>
          <p className="text-gray-600 leading-relaxed">
            If any provision of these Terms is found to be unenforceable or invalid, that provision
            shall be limited or eliminated to the minimum extent necessary so that these Terms shall
            otherwise remain in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Changes to These Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the website. Your continued use of our website or services
            after any changes constitutes your acceptance of the revised Terms. We encourage you to
            review these Terms periodically.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 font-heading">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, please contact us:
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

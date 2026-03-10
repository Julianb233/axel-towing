import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
  description:
    "Complete guide for Arizona property owners: how to legally remove unauthorized vehicles from your private property at no cost using a professional towing company.",
};

export default function ArticlePage() {
  return (
    <>
      <section className="bg-navy-950 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-400 hover:text-orange-400 mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              Guides
            </span>
            <span className="text-sm text-gray-400">8 min read</span>
            <span className="text-sm text-gray-400">March 5, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How to Get Illegally Parked Vehicles Removed from Private Property{" "}
            <span className="text-orange-400">for Free</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          <p className="text-xl text-gray-600 leading-relaxed">
            If you own or manage private property in Arizona, you have the legal
            right to remove unauthorized vehicles from your premises. The best
            part? With the right towing partner, it costs you absolutely nothing.
            Here is everything you need to know.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Understanding Your Rights as a Property Owner
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Under Arizona Revised Statutes (ARS) 28-3511, private property
            owners have the right to remove vehicles that are parked on their
            property without authorization. This includes vehicles parked in
            reserved spaces, fire lanes, handicap zones, and any area where
            parking is restricted by posted signage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The key requirement is proper signage. Arizona law requires that
            private property towing signs meet specific criteria regarding size,
            placement, visibility, and content. Without proper signage, you may
            not have legal authorization to tow vehicles.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Step 1: Partner with a Professional Towing Company
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The first and most important step is to partner with a reputable
            private property towing company. Companies like Axel Towing
            specialize in this area and handle everything from signage
            installation to enforcement at no cost to property owners.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Professional towing companies fund their operations through legally
            mandated impound fees charged to vehicle owners who park in
            violation — not through charges to property owners. This means you
            get comprehensive parking enforcement without spending a dime.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Step 2: Install Compliant Signage
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Arizona law has specific requirements for towing signage on private
            property. Signs must include:
          </p>
          <ul className="text-gray-600 space-y-2 my-4">
            <li>The words &ldquo;Tow-Away Zone&rdquo; or equivalent language</li>
            <li>The name and phone number of the towing company</li>
            <li>Minimum sign dimensions as specified by ARS</li>
            <li>Placement at each entrance to the property</li>
            <li>Visibility requirements (reflective, well-lit, or both)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            A professional towing company will handle all signage installation
            and ensure full compliance with Arizona law.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Step 3: Establish Enforcement Procedures
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Work with your towing company to establish clear procedures for
            enforcement. This includes:
          </p>
          <ul className="text-gray-600 space-y-2 my-4">
            <li>Who is authorized to request tows (property manager, on-site staff, etc.)</li>
            <li>What violations warrant immediate towing vs. warnings</li>
            <li>Patrol schedules and patrol areas</li>
            <li>How residents/tenants are notified about parking rules</li>
            <li>How to handle disputes and appeals</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Step 4: Communicate with Residents and Tenants
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Clear communication is essential for a successful parking
            enforcement program. Before enforcement begins, notify all
            residents, tenants, and regular visitors about:
          </p>
          <ul className="text-gray-600 space-y-2 my-4">
            <li>The new parking rules and enforcement procedures</li>
            <li>Where authorized parking is permitted</li>
            <li>How to register vehicles or obtain parking permits</li>
            <li>Guest parking procedures</li>
            <li>Consequences for violations</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Step 5: Let the Professionals Handle It
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Once signage is installed and procedures are established, your
            towing company handles the rest. Professional towing companies
            patrol your property, document violations, and remove unauthorized
            vehicles — all while maintaining detailed records accessible
            through an online portal.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">
            Why It Costs You Nothing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Private property towing companies operate on a model where costs
            are recovered through legally mandated impound fees. When a vehicle
            is towed from private property, the vehicle owner pays a fee to
            recover their vehicle from the impound lot. This fee covers the
            cost of towing, storage, and administration.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because these fees are regulated by the state and paid by the
            violating vehicle owner, the property owner never receives a bill.
            Signage, patrol, and towing services are all included at no cost.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-10">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-4">
              Axel Towing provides free private property towing services
              throughout the Phoenix metro area. Contact us for a free
              consultation and custom enforcement program.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-6 py-2.5 rounded-lg transition-colors text-center text-sm"
              >
                Call {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-center text-sm"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CTASection dark />
    </>
  );
}

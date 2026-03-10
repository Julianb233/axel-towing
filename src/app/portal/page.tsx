"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function PortalPage() {
  return (
    <>
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Property Manager <span className="text-orange-400">Portal</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access your account to view tow reports, manage authorized vehicles,
            and track parking enforcement activity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-navy-100 text-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-navy-900">Sign In</h2>
              <p className="text-sm text-gray-500 mt-1">
                Access your property management dashboard
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                  placeholder="you@property.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-orange-600 hover:text-orange-500 font-medium">
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold py-3 rounded-lg transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/contact" className="text-orange-600 hover:text-orange-500 font-medium">
                Contact us to get started
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-semibold text-navy-900 mb-3">Portal Features</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "View Tow Reports",
                "Track Activity",
                "Manage Vehicles",
                "Download Reports",
                "Update Signage",
                "24/7 Access",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-gray-600"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

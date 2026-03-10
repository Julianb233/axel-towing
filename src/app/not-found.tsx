import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="py-32 bg-gray-50 text-center">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-6xl font-bold text-navy-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved. Let us
          help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

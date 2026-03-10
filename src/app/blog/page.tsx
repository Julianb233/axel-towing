import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Expert articles and guides on private property towing, parking enforcement, HOA management, and Arizona towing laws from Axel Towing.",
};

const ARTICLES = [
  {
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title:
      "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    excerpt:
      "A complete guide for property owners and managers on legally removing unauthorized vehicles from private property in Arizona — at no cost.",
    category: "Guides",
    date: "March 5, 2026",
    readTime: "8 min read",
  },
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    excerpt:
      "Everything HOA board members need to know about implementing and managing an effective parking enforcement program in their community.",
    category: "HOA Management",
    date: "February 28, 2026",
    readTime: "10 min read",
  },
  {
    slug: "#",
    title: "Understanding Arizona Towing Laws: ARS 28-3511 Explained",
    excerpt:
      "A plain-language breakdown of Arizona's private property towing statute and what property owners need to know to stay compliant.",
    category: "Legal",
    date: "February 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "#",
    title: "5 Signs Your Apartment Complex Needs Professional Parking Enforcement",
    excerpt:
      "Is your apartment community struggling with parking? Here are the telltale signs that it's time to bring in professional enforcement.",
    category: "Apartments",
    date: "February 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    title: "Fire Lane Violations: Why They Matter and How to Prevent Them",
    excerpt:
      "Fire lane violations put lives at risk and create liability for property owners. Learn how professional enforcement keeps your property safe.",
    category: "Safety",
    date: "February 8, 2026",
    readTime: "4 min read",
  },
  {
    slug: "#",
    title: "The Property Manager's Guide to Towing Signage in Arizona",
    excerpt:
      "Arizona has specific requirements for towing signage on private property. Get your signage right with this comprehensive guide.",
    category: "Compliance",
    date: "January 30, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog &amp; <span className="text-orange-400">Resources</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert articles and guides on private property towing, parking
              enforcement, and Arizona towing laws.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.slug === "#" ? "#" : `/blog/${article.slug}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-orange-400 transition-all group"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-navy-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="text-xs text-gray-400">{article.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

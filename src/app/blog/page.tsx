import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights & Resources — Parking Management Blog",
  description:
    "Expert articles and guides on private property towing, parking enforcement, HOA management, and Arizona towing laws from Axle Towing & Impound.",
};

const ARTICLES = [
  {
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title:
      "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    excerpt:
      "A complete guide for property owners and managers on legally removing unauthorized vehicles from private property in Arizona — at no cost.",
    category: "Legal",
    date: "March 5, 2026",
    readTime: "8 min read",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
    featured: true,
  },
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    excerpt:
      "Everything HOA board members need to know about implementing and managing an effective parking enforcement program in their community.",
    category: "HOA",
    date: "February 28, 2026",
    readTime: "10 min read",
    gradient: "from-red-500 via-red-700 to-red-900",
    featured: false,
  },
  {
    slug: "#",
    title: "Understanding Arizona Towing Laws: ARS 28-3511 Explained",
    excerpt:
      "A plain-language breakdown of Arizona's private property towing statute and what property owners need to know to stay compliant.",
    category: "Legal",
    date: "Coming Soon",
    readTime: "6 min read",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
    featured: false,
  },
  {
    slug: "#",
    title:
      "5 Signs Your Apartment Complex Needs Professional Parking Enforcement",
    excerpt:
      "Is your apartment community struggling with parking? Here are the telltale signs it is time to bring in professional enforcement.",
    category: "Property Management",
    date: "Coming Soon",
    readTime: "5 min read",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
    featured: false,
  },
  {
    slug: "#",
    title: "Fire Lane Violations: Why They Matter and How to Prevent Them",
    excerpt:
      "Fire lane violations put lives at risk and create liability for property owners. Learn how professional enforcement keeps your property safe.",
    category: "Property Management",
    date: "Coming Soon",
    readTime: "4 min read",
    gradient: "from-orange-500 via-red-600 to-orange-800",
    featured: false,
  },
  {
    slug: "#",
    title: "The Property Manager's Guide to Towing Signage in Arizona",
    excerpt:
      "Arizona has specific requirements for towing signage on private property. Get your signage right with this comprehensive guide.",
    category: "Legal",
    date: "Coming Soon",
    readTime: "7 min read",
    gradient: "from-teal-500 via-emerald-600 to-teal-800",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredArticle = ARTICLES[0];
  const gridArticles = ARTICLES.slice(1);

  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[50vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(${COMPANY.heroImage})`,
          }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Blog &amp; Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Insights &amp;{" "}
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
              Expert articles and guides on private property towing, parking
              enforcement, and Arizona towing laws from the team at Axle Towing
              &amp; Impound.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gradient-to-b from-blue-950 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="block glass-card-white rounded-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div
                  className={`h-64 lg:h-auto bg-gradient-to-br ${featuredArticle.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl glass flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {featuredArticle.date}
                    </span>
                    <span className="text-cta font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center reveal">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridArticles.map((article, index) => (
              <Link
                key={article.title}
                href={
                  article.slug === "#" ? "#" : `/blog/${article.slug}`
                }
                className={`reveal glass-card-white rounded-2xl overflow-hidden group ${
                  article.slug === "#"
                    ? "opacity-80 cursor-default"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                  <div className="relative z-10">
                    <svg
                      className="w-12 h-12 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  {article.slug === "#" && (
                    <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs text-white font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                    {article.slug !== "#" && (
                      <span className="text-cta text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read More
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal glass rounded-2xl p-8 md:p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cta/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-cta"
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
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get Parking Management Tips Delivered Monthly
            </h2>
            <p className="text-blue-200/70 mb-8 text-lg">
              Join property managers across Arizona who get our latest guides,
              legal updates, and enforcement tips straight to their inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              action="#"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
              />
              <button type="submit" className="btn-cta whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-blue-300/40 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

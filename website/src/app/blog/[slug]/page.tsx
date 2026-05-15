import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getAllArticleSlugs } from '@/lib/mdx-utils';
import { COMPANY } from '@/lib/constants';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const { frontmatter } = article;
  const canonicalUrl = `https://axletowing.com/blog/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags?.join(', '),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author ?? COMPANY.name],
    },
  };
}

/** Estimate reading time from markdown content */
function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(4, Math.ceil(words / 200));
  return `${minutes} min`;
}

/** Format date string for display */
function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

/** Map category name to a blog category key for badge styling */
function getCategoryStyle(category: string): { bg: string; text: string } {
  const map: Record<string, { bg: string; text: string }> = {
    Guides: { bg: 'bg-blue-100', text: 'text-blue-700' },
    Legal: { bg: 'bg-amber-100', text: 'text-amber-700' },
    'Legal Guides': { bg: 'bg-amber-100', text: 'text-amber-700' },
    'City Guides': { bg: 'bg-purple-100', text: 'text-purple-700' },
    'HOA Guides': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
    'Property Manager Guides': { bg: 'bg-blue-100', text: 'text-blue-700' },
    'Recovery Guides': { bg: 'bg-red-100', text: 'text-red-700' },
    Resources: { bg: 'bg-teal-100', text: 'text-teal-700' },
    'Industry Insights': { bg: 'bg-indigo-100', text: 'text-indigo-700' },
    'Seasonal Guides': { bg: 'bg-orange-100', text: 'text-orange-700' },
    Locations: { bg: 'bg-purple-100', text: 'text-purple-700' },
  };
  return map[category] ?? { bg: 'bg-gray-100', text: 'text-gray-700' };
}

const RELATED_ARTICLES = [
  {
    slug: 'how-to-choose-towing-company-for-property',
    title: 'How to Choose a Towing Company for Your Property',
    category: 'Property Management',
    readTime: '7 min',
    gradient: 'from-blue-500 via-blue-700 to-blue-900',
  },
  {
    slug: 'hoa-parking-enforcement-guide',
    title: 'HOA Parking Enforcement: What Board Members Need to Know',
    category: 'HOA Resources',
    readTime: '10 min',
    gradient: 'from-emerald-500 via-green-700 to-emerald-900',
  },
  {
    slug: 'parking-lot-signage-requirements-arizona',
    title: 'Parking Lot Signage Requirements in Arizona',
    category: 'Legal',
    readTime: '6 min',
    gradient: 'from-sky-500 via-blue-600 to-sky-800',
  },
];

export default async function DynamicArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const { frontmatter, htmlContent, content } = article;
  const readTime = estimateReadTime(content);
  const formattedDate = formatDate(frontmatter.date);
  const categoryStyle = getCategoryStyle(frontmatter.category);
  const canonicalUrl = `https://axletowing.com/blog/${slug}`;

  const structuredData = [
    breadcrumbSchema([
      { name: 'Home', url: 'https://axletowing.com' },
      { name: 'Blog', url: 'https://axletowing.com/blog' },
      { name: frontmatter.title, url: canonicalUrl },
    ]),
    articleSchema({
      title: frontmatter.title,
      description: frontmatter.description,
      slug,
      datePublished: frontmatter.date,
    }),
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <section className="parallax-container relative flex min-h-[45vh] items-end">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link
            href="/blog"
            className="group mb-6 inline-flex items-center text-sm text-blue-200/60 transition-colors hover:text-white"
          >
            <svg
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`${categoryStyle.bg} ${categoryStyle.text} rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase`}
            >
              {frontmatter.category}
            </span>
            <span className="text-sm text-blue-200/60">{readTime} read</span>
            <span className="text-sm text-blue-200/60">{formattedDate}</span>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            {frontmatter.title}
          </h1>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {frontmatter.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Author bio */}
              <div className="mt-16 border-t border-gray-200 pt-10">
                <div className="glass-card-white flex items-start gap-4 rounded-2xl p-6">
                  <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{frontmatter.author ?? COMPANY.name}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Axle Towing &amp; Impound is a private property towing specialist serving the
                      Phoenix metro area with two secure impound yards in Phoenix and Apache
                      Junction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* CTA Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <div className="from-navy bg-gradient-to-br to-blue-900 p-5 text-white">
                    <h3 className="mb-1 text-lg font-bold">Need Towing Help?</h3>
                    <p className="text-sm text-blue-200">
                      Free service for property owners. 24/7 dispatch available.
                    </p>
                  </div>
                  <div className="space-y-3 bg-white p-5">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="bg-primary hover:bg-primary/90 flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-white transition-colors"
                    >
                      <svg
                        className="h-5 w-5 shrink-0"
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
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <svg
                        className="text-primary h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Get a Free Quote
                    </Link>
                    <Link
                      href="/locate-vehicle"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <svg
                        className="text-primary h-5 w-5 shrink-0"
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
                      Locate My Vehicle
                    </Link>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="glass-card-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase">
                    Hours
                  </h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dispatch</span>
                      <span className="font-semibold text-green-600">24/7/365</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle Retrieval</span>
                      <span className="font-semibold text-gray-900">M-F 9am-5pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="glass-card-white rounded-2xl border border-gray-200 p-5">
                    <h3 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase">
                      Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* ── Related Articles ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Articles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {RELATED_ARTICLES.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="glass-card-white group overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
              >
                <div className={`h-28 bg-gradient-to-br ${rel.gradient} flex items-end p-4`}>
                  <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="group-hover:text-primary mb-2 text-sm leading-snug font-bold text-gray-900 transition-colors">
                    {rel.title}
                  </h3>
                  <span className="text-xs text-gray-500">{rel.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-primary px-8 py-3">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Ready to Protect Your Property?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-200">
            Professional private property towing at zero cost to you. Serving 30+ Phoenix metro
            cities with a 30-minute response guarantee.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-3">
              Get a Free Quote
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary px-8 py-3">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

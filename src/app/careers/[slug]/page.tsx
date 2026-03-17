import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JOB_POSITIONS, getJobBySlug, jobPostingSchema } from "@/lib/jobs";
import { breadcrumbSchema } from "@/lib/schema";
import JobPageContent from "./JobPageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOB_POSITIONS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};

  return {
    title: `${job.title} - Careers at Axle Towing`,
    description: job.description,
    alternates: {
      canonical: `https://axletowing.com/careers/${job.slug}`,
    },
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jobPostingSchema(job),
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Careers", url: "https://axletowing.com/careers" },
              { name: job.title, url: `https://axletowing.com/careers/${job.slug}` },
            ]),
          ]),
        }}
      />
      <JobPageContent job={job} />
    </>
  );
}

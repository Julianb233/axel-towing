import { breadcrumbSchema } from "@/lib/schema";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Blog", url: "https://axletowing.com/blog" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}

import { breadcrumbSchema } from "@/lib/schema";

export default function ServicesLayout({
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
              { name: "Services", url: "https://axletowing.com/services" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}

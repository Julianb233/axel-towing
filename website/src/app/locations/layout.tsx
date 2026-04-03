import { breadcrumbSchema } from "@/lib/schema";

export default function LocationsLayout({
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
              { name: "Locations", url: "https://axletowing.com/locations" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}

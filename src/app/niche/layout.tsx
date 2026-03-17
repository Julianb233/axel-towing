import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";

const BASE_URL = `https://${COMPANY.domain}`;

export default function NicheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BASE_URL },
              { name: "Specialty Services", url: `${BASE_URL}/niche` },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}

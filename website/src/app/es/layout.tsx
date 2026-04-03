import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "https://axletowing.com",
      es: "https://axletowing.com/es",
    },
  },
};

/**
 * Layout wrapper for all Spanish (/es) routes.
 *
 * The root layout sets <html lang="en">. Since Next.js App Router does not
 * allow nested <html> elements, we wrap all Spanish content in a <div lang="es">
 * so screen readers and translation tools correctly identify the language.
 * We also add hreflang link tags for SEO.
 */
export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="es" dir="ltr">
      {children}
    </div>
  );
}

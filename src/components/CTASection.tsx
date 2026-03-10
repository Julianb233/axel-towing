import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CTASection({
  headline = "Get Started Today — At No Cost to You",
  subtext = "Our private property towing services are completely free for property owners and managers. Let us handle your parking problems.",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`relative py-20 ${dark ? "bg-blue-950 grain-overlay" : "bg-blue-50"}`}>
      {dark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-950 to-blue-900/50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cta/10 rounded-full blur-3xl" />
        </>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${dark ? "text-white" : "text-heading"}`}>
          {headline}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${dark ? "text-blue-200/70" : "text-body-text"}`}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${COMPANY.phone}`} className="btn-primary">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className={dark ? "btn-secondary" : "btn-cta"}>
            Request Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

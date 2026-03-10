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
    <section className={`py-16 ${dark ? "bg-navy-900 text-white" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{headline}</h2>
        <p className={`text-lg mb-8 ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${COMPANY.phone}`}
            className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Call {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className={`font-bold px-8 py-3 rounded-lg transition-colors text-lg border-2 ${dark ? "border-white text-white hover:bg-white hover:text-navy-950" : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"}`}
          >
            Request Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

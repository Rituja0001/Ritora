import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * CTASection Component
 * Clean, restrained advisory call to action placed at the bottom of pages before the footer.
 * Features direct link to Contact page and WhatsApp chat (+971 58 575 8023).
 */
export default function CTASection({
  eyebrow = "CONSIDERED REAL ESTATE ADVISORY",
  title = "Ready to Discuss Your Dubai Property Portfolio?",
  description = "Connect with our advisory team to review curated off-plan opportunities, investment projections, and developer partnership structures.",
  primaryCtaText = "Speak With an Advisor",
  primaryCtaLink = "/contact",
}) {
  const whatsappUrl = "https://wa.me/971585758023?text=Hello%20Ritora%20team%2C%20I%20would%20like%20to%20schedule%20an%20advisory%20discussion.";

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#082221] to-[#061A19] border-t border-[#D9BA6A]/20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 max-w-md sm:max-w-none mx-auto w-full">
          <Link
            to={primaryCtaLink}
            className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] font-bold rounded-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

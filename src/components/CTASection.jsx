import React from "react";
import { Sparkles, MessageSquare, ArrowRight, Shield } from "lucide-react";

/**
 * Call-to-Action Section for Ritora Luxury Dubai Real Estate
 * Positioned right before the footer to drive VIP inquiries and private showings.
 */
export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-[#061A19] via-[#0C3332] to-[#061A19] border-y border-[#D9BA6A]/30 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 bg-radial-gradient from-[#D9BA6A]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#D9BA6A] font-bold">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Private Acquisitions & Bespoke Portfolios</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Ready to Acquire Your <br className="hidden sm:inline" />
          <span className="text-gold-gradient italic font-normal block sm:inline mt-1 sm:mt-0">
            Dubai Landmark?
          </span>
        </h2>

        {/* Description */}
        <p className="text-neutral-200 text-xs sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2">
          Schedule a discreet advisory session with our managing partners to explore unlisted private waterfront estates, trophy penthouses, and tax-exempt UAE investments.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto w-full">
          <a
            href="#contact"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold shadow-md hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 rounded-sm"
          >
            <span>Book Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/971508924110"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2.5 rounded-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect via WhatsApp</span>
          </a>
        </div>

        {/* Confidentiality Notice */}
        <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-neutral-300 px-2 text-center">
          <Shield className="w-3.5 h-3.5 text-[#D9BA6A] flex-shrink-0" />
          <span>All inquiries are bound by strict non-disclosure agreements (NDAs).</span>
        </div>
      </div>
    </section>
  );
}


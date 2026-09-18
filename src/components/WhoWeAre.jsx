import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Handshake, ShieldCheck } from "lucide-react";

/**
 * WhoWeAre Component (New Section below StatsBar)
 * Light cream background (#F7F3EC) providing a rich visual contrast with the gold StatsBar and dark teal sections.
 * Features:
 * - Block 1: Intro with manifesto & qualification disclaimer
 * - Block 2: Investor Block (Advice Before the Transaction) with "Book a Consultation" CTA
 * - Block 3: Developer Block (A Sales Partner That Understands the Product) with "Partner With Ritora" CTA
 * - Staggered scroll-reveal fade-up animation
 */
export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on viewport reveal
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F3EC] text-[#0C3332] py-16 sm:py-20 lg:py-28 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 lg:space-y-16">
        {/* --- Block 1: Intro --- */}
        <div
          className={`max-w-4xl transition-all duration-800 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89645] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B89645]" />
            <span>WHO WE ARE</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
            Boutique by Design. <br className="hidden sm:inline" />
            Experienced by Foundation.
          </h2>

          {/* Intro Paragraph */}
          <p className="font-sans text-neutral-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-4 sm:mb-6">
            Ritora Luxe Real Estate is a Dubai-based boutique real estate advisory and brokerage focused on selected off-plan opportunities, investor guidance and strategic developer partnerships. We combine market experience, commercial understanding and personal attention to help clients and partners make better property decisions.
          </p>

          {/* Qualification / Disclaimer Note */}
          <p className="font-sans text-xs text-neutral-500 italic leading-relaxed border-l-2 border-[#D9BA6A] pl-3">
            * The AED 3 billion+ figure relates to sales managed through Ritish Arora's sales team and should not be presented as Ritora's own transaction value.
          </p>
        </div>

        {/* --- Blocks 2 & 3: 2-Column Cards Grid (Investor & Developer) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Block 2: Investor Block */}
          <div
            className={`bg-white border border-[#D9BA6A]/40 border-t-4 border-t-[#D9BA6A] p-6 sm:p-8 lg:p-10 rounded-sm shadow-md hover:shadow-xl transition-all duration-700 delay-150 flex flex-col justify-between group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-[#B89645] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#B89645]" />
                <span>INVESTOR BLOCK</span>
              </div>

              {/* Card Heading */}
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0C3332] tracking-tight leading-snug group-hover:text-[#B89645] transition-colors">
                Advice Before the Transaction
              </h3>

              {/* Card Paragraph */}
              <p className="font-sans text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                A property should fit your objective, time horizon and appetite for risk. Ritora helps investors assess the developer, location, pricing, payment structure and exit potential before moving forward.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 sm:pt-8 mt-6 border-t border-neutral-100">
              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-[#D9BA6A] text-[#0C3332] hover:bg-[#D9BA6A] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-[1.02]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Block 3: Developer Block */}
          <div
            className={`bg-white border border-[#D9BA6A]/40 border-t-4 border-t-[#D9BA6A] p-6 sm:p-8 lg:p-10 rounded-sm shadow-md hover:shadow-xl transition-all duration-700 delay-300 flex flex-col justify-between group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-[#B89645] font-bold">
                <Handshake className="w-4 h-4 text-[#B89645]" />
                <span>DEVELOPER BLOCK</span>
              </div>

              {/* Card Heading */}
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0C3332] tracking-tight leading-snug group-hover:text-[#B89645] transition-colors">
                A Sales Partner That Understands the Product
              </h3>

              {/* Card Paragraph */}
              <p className="font-sans text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                Ritora works with developers on market positioning, broker activation, investor communication and structured sales execution. Our approach begins with understanding the product and the buyer, then building the right route to market.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 sm:pt-8 mt-6 border-t border-neutral-100">
              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-[#D9BA6A] text-[#0C3332] hover:bg-[#D9BA6A] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-[1.02]"
              >
                <span>Partner With Ritora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


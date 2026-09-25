import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Handshake } from "lucide-react";

/**
 * WhoWeAre Component
 * Light cream background (#F7F3EC) providing high contrast and breathable layout.
 * Features:
 * - Brand narrative and boutique positioning
 * - Investor Focus card with link to /investors & /contact
 * - Developer Focus card with link to /developers & /contact
 * - Disclaimer removed as requested.
 */
export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#F7F3EC] text-[#0C3332] py-16 sm:py-20 lg:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 lg:space-y-16">
        {/* --- Block 1: Intro Narrative --- */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89645]" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
            Boutique by Design. <br className="hidden sm:inline" />
            Experienced by Foundation.
          </h2>

          <p className="font-sans text-neutral-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Ritora Luxe Real Estate is a Dubai-based boutique advisory and brokerage focused on selected off-plan opportunities, investor guidance, and strategic developer partnerships. We combine deep market experience, commercial rigor, and personal attention to help clients and partners make sound property decisions.
          </p>
        </div>

        {/* --- Blocks 2 & 3: 2-Column Cards Grid (Investor Focus & Developer Focus) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Investor Focus */}
          <div className="bg-white border border-[#D9BA6A]/30 border-t-4 border-t-[#D9BA6A] p-6 sm:p-8 lg:p-10 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B89645] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#B89645]" />
                <span>INVESTOR FOCUS</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0C3332] tracking-tight leading-snug">
                Advice Before the Transaction
              </h3>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                A property should fit your investment objective, time horizon, and risk appetite. Ritora helps investors objectively assess the developer, location fundamentals, pricing, payment structure, and exit potential before capital is committed.
              </p>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-bold text-[#0C3332] hover:text-[#B89645] transition-colors"
              >
                <span>Explore Investor Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 border border-[#0C3332] text-[#0C3332] hover:bg-[#0C3332] hover:text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Developer Focus */}
          <div className="bg-white border border-[#D9BA6A]/30 border-t-4 border-t-[#0C3332] p-6 sm:p-8 lg:p-10 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0C3332] font-bold">
                <Handshake className="w-4 h-4 text-[#0C3332]" />
                <span>DEVELOPER FOCUS</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0C3332] tracking-tight leading-snug">
                A Sales Partner That Understands the Product
              </h3>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                We partner with developers to shape go-to-market strategy, activate broker networks, and drive investor engagement — starting with a clear understanding of the product and the buyer, and building a considered path to sale.
              </p>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <Link
                to="/developers"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-bold text-[#0C3332] hover:text-[#B89645] transition-colors"
              >
                <span>Explore Developer Partnerships</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-[#0C3332] text-white hover:bg-[#154F4E] text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

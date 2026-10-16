import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageSquare, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import CTASection from "../components/CTASection";

/**
 * Projects Page - Ritora Luxe Real Estate LLC
 * Features the approved Coming Soon showcase and advisory inquiry channel.
 * Unapproved project details and placeholder cards removed per client brief.
 */
export default function Projects() {
  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#154F4E]/60 border border-[#D9BA6A]/30 text-[#D9BA6A] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED DEVELOPMENTS</span>
          </div>

          {/* Exact Approved Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Curated Project Opportunities Coming Soon
          </h1>

          {/* Exact Approved Supporting Copy */}
          <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Discover carefully curated property opportunities in Dubai. Our approved project collection will be available soon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Speak With an Advisor</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Advisory Pillars / What to Expect */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
            RIGOROUS SELECTION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C3332]">
            Our Project Curation Standard
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm mt-2 font-light">
            Every development showcased by Ritora undergoes rigorous independent verification before publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#D9BA6A]/30 shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0C3332]">
              Developer Due Diligence
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
              Verified construction milestones, escrow account compliance, and proven delivery track records.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#D9BA6A]/30 shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0C3332]">
              Master Plan Longevity
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
              Evaluating infrastructure connectivity, community governance, and sustained capital appreciation.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-xl border border-[#D9BA6A]/30 shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0C3332]">
              Payment Plan Assessment
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
              Stress-testing cash-flow schedules, post-handover terms, and realistic secondary market liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Consultation CTA */}
      <CTASection
        eyebrow="BESPOKE PORTFOLIO ALLOCATION"
        title="Looking for Specific Dubai Property Opportunities?"
        description="Connect directly with our advisory desk to discuss your acquisition criteria, preferred districts, and off-plan allocations."
        primaryCtaText="Speak With an Advisor"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

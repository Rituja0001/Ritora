import React from "react";
import { UserCheck, Sparkles, LineChart, MessageCircle } from "lucide-react";

/**
 * Why Ritora Section (Section 4)
 * Background: Light Cream (#FAF8F5)
 * Alternating rhythm: Sits between Dark Teal Featured Projects and Dark Teal Investment Opportunities.
 * Features:
 * - 4 core advisory pillars grounded in professional experience and transparent advice
 * - Generous whitespace and restrained modern cards
 */
export default function WhyChooseUs() {
  const pillars = [
    {
      icon: UserCheck,
      title: "Personal, Experienced Advisory",
      description:
        "Direct guidance backed by over 14 years of cumulative industry experience and 11 years dedicated to the Dubai real estate market.",
    },
    {
      icon: Sparkles,
      title: "Carefully Selected Off-Plan Opportunities",
      description:
        "Rigorous filtering of Dubai launches to curate projects with proven developer pedigree, strong delivery track records, and prime location value.",
    },
    {
      icon: LineChart,
      title: "Market & Investment Assessment",
      description:
        "Comprehensive commercial evaluation covering entry pricing, rental yield potential, capital appreciation horizons, and clear exit liquidity.",
    },
    {
      icon: MessageCircle,
      title: "Direct, Transparent Communication",
      description:
        "Objective, uncompromised counsel. We provide realistic appraisals of both opportunities and market considerations without sales pressure.",
    },
  ];

  return (
    <section id="why-ritora" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#0C3332] relative overflow-hidden border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89645] font-semibold block mb-2">
            The Ritora Benchmark
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#0C3332] tracking-tight leading-snug">
            Why Discerning Capital Chooses Ritora
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 font-light leading-relaxed max-w-2xl mx-auto">
            Disciplined advisory, thoughtful project curation, and independent market intelligence built on years of hands-on transaction experience.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-[#D9BA6A]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Clean Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-[#0C3332] mb-2.5 font-bold">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#B89645] font-semibold uppercase tracking-wider">
                  <span>Advisory Pillar 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

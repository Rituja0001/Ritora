import React from "react";
import { UserCheck, Sparkles, LineChart, MessageCircle } from "lucide-react";

/**
 * Why Ritora Section
 * Concise advisory pillars grounded in independent counsel and transparent advice.
 * Free from unapproved personal statistics or performance claims.
 */
export default function WhyChooseUs() {
  const pillars = [
    {
      icon: UserCheck,
      title: "Personal, Objective Advisory",
      description:
        "Direct principal involvement providing considered counsel tailored specifically to your financial objectives.",
    },
    {
      icon: Sparkles,
      title: "Curated Off-Plan Selection",
      description:
        "Rigorous filtering of Dubai developments to recommend projects with strong developer capability and prime locations.",
    },
    {
      icon: LineChart,
      title: "Commercial Assessment",
      description:
        "Thorough evaluation of entry pricing, payment milestones, capital horizons, and secondary exit liquidity.",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description:
        "Frank, unvarnished market feedback. We highlight key considerations with clarity and zero sales pressure.",
    },
  ];

  return (
    <section id="why-ritora" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#0C3332] relative overflow-hidden border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89645] font-semibold block mb-2">
            THE RITORA BENCHMARK
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0C3332] tracking-tight leading-snug">
            Why Discerning Capital Chooses Ritora
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Independent counsel, thoughtful project curation, and disciplined market assessment.
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
                  <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#0C3332] mb-2 font-bold">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#B89645] font-semibold uppercase tracking-wider">
                  <span>Pillar 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

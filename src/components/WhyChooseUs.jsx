import React from "react";
import { ShieldCheck, KeyRound, Globe2, Award, CheckCircle } from "lucide-react";

/**
 * Why Choose Ritora Section
 * Features 4 sovereign advisory pillars with modern glassmorphism cards and gold iconography.
 */
export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Absolute Confidentiality",
      description:
        "Strict non-disclosure agreements, private armored transfers, and total anonymity safeguard our royal, family office, and sovereign patrons.",
    },
    {
      icon: KeyRound,
      title: "Off-Market Portfolios",
      description:
        "Over 40% of our ultra-prime Dubai acquisitions occur entirely unlisted, granting you direct access to sovereign estates before public exposure.",
    },
    {
      icon: Globe2,
      title: "Golden Visa & Concierge",
      description:
        "Comprehensive VIP legal facilitation for 10-Year UAE Golden Visas, offshore corporate structures, and seamless Dubai Land Department registration.",
    },
    {
      icon: Award,
      title: "Architectural Pedigree",
      description:
        "Every residence undergoes meticulous technical and legal due diligence, authenticating plot title, build quality, and enduring capital value.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#082221] border-y border-[#D9BA6A]/20 relative overflow-hidden">
      {/* Subtle ambient lighting for glassmorphism enhancement */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[600px] h-[300px] bg-[#0C3332]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D9BA6A] font-semibold block mb-2">
            The Ritora Benchmark
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
            Why Discerning Capital Chooses Ritora
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-3 font-light leading-relaxed max-w-2xl mx-auto">
            We transcend conventional brokerage, acting as sovereign wealth advisors for international family offices, royal dignitaries, and private art collectors.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-[#0C3332] md:bg-gradient-to-b md:from-[#0F3E3D]/70 md:via-[#0C3332]/50 md:to-[#082221]/80 backdrop-blur-md md:backdrop-blur-xl border border-[#D9BA6A]/20 hover:border-[#D9BA6A]/60 shadow-xl hover:shadow-gold-glow hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                {/* Top subtle highlight line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9BA6A]/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner ambient radial glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D9BA6A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D9BA6A]/15 group-hover:scale-125 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon Container with soft gradient, glow, and hover pulse */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#154F4E] via-[#0F3E3D] to-[#082221] border border-[#D9BA6A]/30 flex items-center justify-center text-[#D9BA6A] mb-4 sm:mb-6 shadow-md shadow-[#061A19]/50 group-hover:scale-110 group-hover:border-[#D9BA6A] group-hover:shadow-[0_0_20px_rgba(217,186,106,0.35)] transition-all duration-300">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-[#D9BA6A]/10 blur-sm group-hover:bg-[#D9BA6A]/25 transition-all duration-300 pointer-events-none" />
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9BA6A] relative z-10 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white mb-2 sm:mb-3 group-hover:text-[#D9BA6A] transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-neutral-300/90 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="relative z-10 mt-5 sm:mt-6">
                  {/* Subtle gradient divider line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9BA6A]/30 to-transparent mb-4 sm:mb-5" />

                  {/* Verified Standard Pill Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#D9BA6A]/10 border border-[#D9BA6A]/25 text-[10px] sm:text-[11px] text-[#D9BA6A] tracking-wider uppercase font-medium group-hover:bg-[#D9BA6A]/15 group-hover:border-[#D9BA6A]/40 transition-colors">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D9BA6A]" />
                    <span>Verified Standard</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


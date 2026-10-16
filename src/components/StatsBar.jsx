import React from "react";
import { Building2, TrendingUp, Handshake } from "lucide-react";

/**
 * HighlightsBar Component (formerly StatsBar)
 * Company-focused advisory highlights displayed beneath the Hero section.
 * Features:
 * - 3 approved company-focused highlights:
 *   1. Boutique Dubai Real Estate Advisory
 *   2. Investor-Focused Guidance
 *   3. Developer Partnership Expertise
 * - No invented numerical statistics or performance claims
 * - 3 columns on desktop with dividers, stacked on mobile
 * - Cream background (#FAF8F5) with dark teal typography and gold accents
 */
export default function StatsBar() {
  const highlights = [
    {
      icon: Building2,
      title: "Boutique Dubai Real Estate Advisory",
      description: "Personalized, independent counsel tailored to private acquisitions and residential portfolios.",
    },
    {
      icon: TrendingUp,
      title: "Investor-Focused Guidance",
      description: "Rigorous due diligence prioritizing asset fundamentals, exit potential, and long-term capital preservation.",
    },
    {
      icon: Handshake,
      title: "Developer Partnership Expertise",
      description: "Considered commercial alignment, broker activation, and strategic sales representation across Dubai.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] border-y border-[#D9BA6A]/30 relative z-20 py-8 sm:py-10 lg:py-12 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-[#0C3332]/15">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-4 sm:px-6 py-2 ${
                  index !== highlights.length - 1
                    ? "border-b border-[#0C3332]/10 md:border-b-0 pb-6 md:pb-2"
                    : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Highlight Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C3332] tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light max-w-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

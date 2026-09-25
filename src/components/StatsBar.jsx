import React from "react";

/**
 * StatsBar Component
 * Credibility highlights bar displayed beneath the Hero section.
 * Features:
 * - Exactly 3 stats (14+ Years Real Estate Experience, 11 Years Dubai Market Experience, AED 3B+ Inventory Sold)
 * - 3 columns on desktop, 1 column stacked on mobile
 * - Breathable, light-toned palette (#FAF8F5) with dark teal typography and subtle gold accents
 *   for smooth visual rhythm transitioning from the dark hero section.
 */
export default function StatsBar() {
  const stats = [
    {
      number: "14+ Years",
      label: "Real Estate Experience",
    },
    {
      number: "11 Years",
      label: "Dubai Market Experience",
    },
    {
      number: "AED 3B+",
      label: "Inventory Sold",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] border-y border-[#D9BA6A]/30 relative z-20 py-8 sm:py-10 lg:py-12 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-[#0C3332]/15">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-6 py-2 ${
                index !== stats.length - 1
                  ? "border-b border-[#0C3332]/10 md:border-b-0 pb-6 md:pb-2"
                  : ""
              }`}
            >
              {/* Stat Number in Playfair Display (Dark Teal #0C3332) */}
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight mb-1.5 sm:mb-2">
                {item.number}
              </div>

              {/* Stat Label in Plus Jakarta Sans */}
              <div className="font-sans text-xs sm:text-sm uppercase tracking-[0.14em] text-[#0C3332]/80 font-semibold max-w-[240px] leading-relaxed">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

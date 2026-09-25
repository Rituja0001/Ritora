import React from "react";
import { MapPin, Sparkles, ArrowRight, Building2, Info } from "lucide-react";
import { focusLocations } from "../data/locationsData";

/**
 * LocationsSection Component (Section 7)
 * Background: Dark Teal (#0C3332)
 * Alternating rhythm: Sits between Light Cream Developer Partnerships and Light Cream Leadership.
 * Features:
 * - "locations to follow shortly" placeholder note
 * - 5 initial focus areas (Dubai South, Business Bay, Dubai Hills Estate, Palm Jebel Ali, Dubai Creek Harbour) + expansion card
 * - Inquire buttons pointing to href="#" per linking requirement
 */
export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-20 lg:py-24 bg-[#0C3332] text-white relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIME DESTINATIONS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
              Focus Locations
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-2 font-light leading-relaxed">
              Explore Dubai's premier residential and high-yield investment corridors, from established urban centers to transformative mega-developments.
            </p>
          </div>
        </div>

        {/* Placeholder Note Banner */}
        <div className="flex items-center gap-3 p-4 bg-[#082221] rounded-xl border border-[#D9BA6A]/30 mb-10 shadow-xs">
          <Info className="w-5 h-5 text-[#D9BA6A] flex-shrink-0" />
          <p className="text-xs sm:text-sm text-neutral-300 font-light">
            <strong>Project locations will be shared shortly:</strong> Detailed project pins, master plans, and nearby infrastructure roadmaps are currently being updated as developer releases are confirmed.
          </p>
        </div>

        {/* 5 Focus Areas Grid + Expansion Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#082221] rounded-2xl overflow-hidden border border-[#D9BA6A]/25 hover:border-[#D9BA6A]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Tagline Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={loc.image}
                  alt={loc.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#D9BA6A] font-medium mb-0.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Dubai District</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {loc.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#D9BA6A] font-semibold block">
                    {loc.tagline}
                  </span>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D9BA6A]/15 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {loc.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#0C3332] text-neutral-300 text-[11px] rounded border border-[#D9BA6A]/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-neutral-400 font-medium">
                      Estimated Yield: <strong className="text-[#D9BA6A]">{loc.typicalYield}</strong>
                    </span>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#D9BA6A] hover:text-[#E5CE8F] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Expansion Placeholder */}
          <div className="bg-[#082221]/60 rounded-2xl p-8 border-2 border-dashed border-[#D9BA6A]/30 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              Expanding Location Coverage
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xs leading-relaxed">
              New master developments across Jumeirah Village, Meydan, and waterfront islands will be added as official developer inventory expands.
            </p>
            <a
              href="#"
              className="px-4 py-2 border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
            >
              Custom Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

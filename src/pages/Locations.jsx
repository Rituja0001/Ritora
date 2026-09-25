import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Sparkles, ArrowRight, Info, Building2 } from "lucide-react";
import CTASection from "../components/CTASection";
import { focusLocations } from "../data/locationsData";

/**
 * Locations Page - Ritora Dubai Luxury Real Estate
 * Showcases initial focus districts across Dubai with investment thesis,
 * key highlights, and room for expanding future inventory.
 * Note: Project locations will be shared shortly.
 */
export default function Locations() {
  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen pt-24 sm:pt-28">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIME DESTINATIONS</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Focus Locations
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Explore Dubai's premier residential and high-yield investment corridors, from established urban centers to transformative mega-developments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Client Note Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#D9BA6A]/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-3 p-4 bg-white rounded-lg border border-[#D9BA6A]/40 shadow-xs">
            <Info className="w-5 h-5 text-[#B89645] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-neutral-700 font-light">
              <strong>Project locations will be shared shortly:</strong> Detailed project pins, site master plans, and nearby infrastructure roadmaps are currently being updated as developer releases are confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Locations Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200/90 hover:border-[#D9BA6A]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Tagline Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
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
                <div className="space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#B89645] font-semibold block">
                    {loc.tagline}
                  </span>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {loc.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#FAF8F5] text-neutral-600 text-[11px] rounded border border-neutral-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-neutral-500 font-medium">
                      Estimated Yield: <strong className="text-[#0C3332]">{loc.typicalYield}</strong>
                    </span>

                    <Link
                      to={`/contact?location=${encodeURIComponent(loc.name)}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#0C3332] hover:text-[#B89645] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Placeholder Card for Future Inventory */}
          <div className="bg-[#FAF8F5] rounded-xl p-8 border-2 border-dashed border-[#D9BA6A]/40 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0C3332]">
              Expanding Location Coverage
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xs leading-relaxed">
              New master developments across Jumeirah Village, Meydan, and waterfront islands will be added as official developer inventory expands.
            </p>
            <Link
              to="/contact"
              className="px-4 py-2 border border-[#0C3332] text-[#0C3332] hover:bg-[#0C3332] hover:text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
            >
              Inquire on Custom Locations
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <CTASection
        eyebrow="LOCATION ADVISORY"
        title="Unsure Which Dubai Community Best Fits Your Strategy?"
        description="Our advisors provide comparative submarket analysis, examining capital growth forecasts, school access, and infrastructure development across all major Dubai master plans."
        primaryCtaText="Speak With an Advisor"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

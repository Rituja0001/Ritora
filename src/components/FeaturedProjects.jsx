import React, { useState } from "react";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

/**
 * FeaturedProjects Component
 * EXACT original design, layout, 3-column grid, card styling, and hover animations restored.
 * Updated text content:
 * - 7 Developer titles: Emaar, Aldar, Dubai South, Ellington, DAMAC, SOL, Imtiaz
 * - Subtext line: "Latest launch and project highlights to be provided"
 * - Heading: "Featured Projects"
 * - Subheading: "Ritora will initially highlight selected off-plan opportunities from the following developers and destinations. The latest launch and complete project details for each will be provided separately before publication."
 */
export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Emaar",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 68,500,000",
      priceUSD: "$18,650,000",
      beds: 6,
      baths: 8,
      area: "14,200 sq ft",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
      type: "Villa",
      badge: "Exclusive",
    },
    {
      id: 2,
      title: "Aldar",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 54,000,000",
      priceUSD: "$14,700,000",
      beds: 5,
      baths: 6,
      area: "9,850 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      type: "Penthouse",
      badge: "Off-Market",
    },
    {
      id: 3,
      title: "Dubai South",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 95,000,000",
      priceUSD: "$25,860,000",
      beds: 7,
      baths: 10,
      area: "22,500 sq ft",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      type: "Villa",
      badge: "Trophy Asset",
    },
    {
      id: 4,
      title: "Ellington",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 28,900,000",
      priceUSD: "$7,870,000",
      beds: 4,
      baths: 5,
      area: "6,400 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      type: "Penthouse",
      badge: "Marina Front",
    },
    {
      id: 5,
      title: "DAMAC",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 34,500,000",
      priceUSD: "$9,390,000",
      beds: 5,
      baths: 6,
      area: "8,900 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      type: "Villa",
      badge: "Golf Frontline",
    },
    {
      id: 6,
      title: "SOL",
      subtext: "Latest launch and project highlights to be provided",
      price: "AED 82,000,000",
      priceUSD: "$22,320,000",
      beds: 5,
      baths: 7,
      area: "12,800 sq ft",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      type: "Penthouse",
      badge: "Iconic Landmark",
    },
    // {
    //   id: 7,
    //   title: "Imtiaz",
    //   subtext: "Latest launch and project highlights to be provided",
    //   price: "AED 42,000,000",
    //   priceUSD: "$11,430,000",
    //   beds: 5,
    //   baths: 6,
    //   area: "10,500 sq ft",
    //   image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
    //   type: "Villa",
    //   badge: "Featured Launch",
    // },
  ];

  const filtered = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.type === activeCategory;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 bg-[#0C3332] text-white relative z-10">
      {/* Anchor compatibility */}
      <span id="properties" className="sr-only">
        Properties
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#D9BA6A] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Dubai Portfolio</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
              Featured Projects
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Ritora will initially highlight selected off-plan opportunities from the following developers and destinations. The latest launch and complete project details for each will be provided separately before publication.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-shrink-0">
            {["All", "Villa", "Penthouse"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-medium transition-all duration-300 rounded-sm border min-h-[38px] sm:min-h-[40px] flex items-center justify-center ${
                  activeCategory === category
                    ? "bg-[#D9BA6A] text-[#0C3332] border-[#D9BA6A] font-bold shadow-gold-glow"
                    : "bg-transparent text-neutral-300 border-[#D9BA6A]/20 hover:border-[#D9BA6A] hover:text-white"
                }`}
              >
                {category === "All" ? "All Projects" : `${category}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid - EXACT 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0F3E3D] border border-[#D9BA6A]/20 hover:border-[#D9BA6A]/60 transition-all duration-500 rounded-sm flex flex-col overflow-hidden shadow-lg hover:shadow-gold-glow"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#082221]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3E3D] via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 bg-[#0C3332]/90 backdrop-blur-md border border-[#D9BA6A]/40 text-[#D9BA6A] text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-semibold">
                    {item.type}
                  </span>
                  <span className="px-2.5 py-1 bg-[#D9BA6A] text-[#0C3332] text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-bold shadow-md">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-neutral-300 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D9BA6A] flex-shrink-0" />
                    <span className="truncate">{item.subtext}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-[#D9BA6A] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 py-2.5 sm:py-3 border-y border-[#D9BA6A]/15 text-neutral-200 text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9BA6A] flex-shrink-0" />
                    <span className="truncate">{item.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9BA6A] flex-shrink-0" />
                    <span className="truncate">{item.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-[#D9BA6A] flex-shrink-0" />
                    <span className="truncate">{item.area}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400">
                      Offered At
                    </span>
                    <div className="font-serif text-base sm:text-lg font-bold text-[#D9BA6A]">
                      {item.price}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400">
                      approx. {item.priceUSD}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 border border-[#D9BA6A]/50 hover:border-[#D9BA6A] text-neutral-100 hover:text-[#0C3332] hover:bg-[#D9BA6A] text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-sm min-h-[38px]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href="#"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold transition-all duration-300 shadow-sm hover:shadow-gold-glow"
          >
            <span>Explore Complete Private Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

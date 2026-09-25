import React from "react";
import { Sparkles } from "lucide-react";

/**
 * LeadershipSection Component (Section 8)
 * Background: Light Cream (#FAF8F5)
 * Alternating rhythm: Sits between Dark Teal Locations and Dark Teal Testimonials.
 * Features:
 * - Ritish Arora — Founder & CEO
 * - Dhwani Arora — Co-Founder & COO
 * - Photo placeholder + concise bio placeholder for each (marked as client TODOs)
 */
export default function LeadershipSection() {
  const leaders = [
    {
      name: "Ritish Arora",
      title: "Founder & CEO",
      credentials: "14+ Years Real Estate | 11 Years Dubai Market",
      // TODO: Bio to be provided by client
      bio: "Founding leader of Ritora with over a decade of direct transactional leadership in Dubai's real estate sector. Specializing in high-value portfolio advisory, off-plan acquisitions, and strategic developer sales alignment.",
      initials: "RA",
    },
    {
      name: "Dhwani Arora",
      title: "Co-Founder & COO",
      credentials: "Strategic Operations & Client Advisory",
      // TODO: Bio to be provided by client
      bio: "Overseeing Ritora's operational governance, client relationship management, and transaction execution. Dedicated to delivering seamless, transparent advisory experiences for international investors and corporate partners.",
      initials: "DA",
    },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#0C3332] relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89645] font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERIENCED LEADERSHIP</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-snug">
            Meet Ritora's Principals
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light leading-relaxed">
            Hands-on leadership directly driving client advisory, developer partnerships, and operational governance.
          </p>
        </div>

        {/* 2-Column Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-9 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {/* Professional Avatar Placeholder */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0C3332] to-[#154F4E] text-[#D9BA6A] flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold border-2 border-[#D9BA6A]/50 shadow-md">
                {leader.initials}
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332]">
                  {leader.name}
                </h3>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#B89645] mt-1">
                  {leader.title}
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">
                  {leader.credentials}
                </div>
              </div>

              {/* Bio with client TODO comment */}
              {/* // TODO: Bio to be provided by client */}
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light pt-3 border-t border-neutral-100">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

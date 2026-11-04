import React from "react";
import { Sparkles } from "lucide-react";

/**
 * LeadershipSection Component (Homepage & Shared)
 * Features equal visual importance for both executive leaders:
 * - Profile 1: Ritish Arora (Founder & CEO)
 * - Profile 2: Dhwani Arora (Co-Founder & COO, Broker Card No. 99389)
 * Note: Approved portrait photographs are pending from client; elegant initials monogram avatar rendered.
 */
export default function LeadershipSection() {
  const leaders = [
    {
      name: "Ritish Arora",
      title: "Founder & CEO",
      brokerCard: null,
      description:
        "Leading Ritora’s developer partnerships, sales strategy and investor relations, backed by over 14 years of real estate experience across developer and broker channels.",
      initials: "RA",
    },
    {
      name: "Dhwani Arora",
      title: "Co-Founder & COO",
      brokerCard: "99389",
      description:
        "Overseeing operations, client experience, governance and business execution, with a focus on building a trusted and process-driven real estate advisory platform.",
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
            <span>LEADERSHIP</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-snug">
            Leadership
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light leading-relaxed">
            Hands-on direction driving client advisory, strategic developer partnerships, and operational governance.
          </p>
        </div>

        {/* 2-Column Equal Visual Prominence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center space-y-6 h-full"
            >
              <div className="w-full flex flex-col items-center space-y-5">
                {/* Image Placeholder with Equal Dimensions (Pending approved client photo) */}
                <div className="relative">
                  <div
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#0C3332] to-[#154F4E] text-[#D9BA6A] flex items-center justify-center font-serif text-3xl sm:text-4xl font-bold border-2 border-[#D9BA6A]/50 shadow-md"
                    title="Approved photograph pending from client"
                  >
                    {leader.initials}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C3332]">
                    {leader.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#B89645] mt-1.5">
                    {leader.title}
                  </div>
                  {leader.brokerCard && (
                    <div className="inline-block mt-2 px-3 py-1 bg-[#FAF8F5] border border-[#D9BA6A]/40 rounded text-[11px] font-medium text-[#0C3332]">
                      Broker Card No.: <span className="font-semibold text-[#B89645]">{leader.brokerCard}</span>
                    </div>
                  )}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-light pt-4 border-t border-neutral-100 max-w-md">
                  "{leader.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

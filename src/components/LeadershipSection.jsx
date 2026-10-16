import React from "react";
import { Sparkles } from "lucide-react";

/**
 * LeadershipSection Component
 * Displays the approved leadership profile for Ritora Luxe Real Estate LLC.
 * Features:
 * - Approved leadership profile: Dhwani Arora, Founder & Managing Director
 * - Single centered premium card design
 * - Respects the approved cream and gold palette
 */
export default function LeadershipSection() {
  const leader = {
    name: "Dhwani Arora",
    title: "Founder & Managing Director",
    credentials: "Strategic Advisory & Client Leadership",
    bio: "Directing Ritora Luxe Real Estate LLC with an unwavering commitment to independent advisory, personalized client care, and considered execution across Dubai's prime residential and investment markets.",
    initials: "DA",
  };

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

        {/* Single Centered Approved Leadership Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-5">
            {/* Professional Avatar with Initials */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0C3332] to-[#154F4E] text-[#D9BA6A] flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold border-2 border-[#D9BA6A]/50 shadow-md">
              {leader.initials}
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C3332]">
                {leader.name}
              </h3>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#B89645] mt-1.5">
                {leader.title}
              </div>
              <div className="text-xs text-neutral-500 font-medium mt-1">
                {leader.credentials}
              </div>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed font-light pt-4 border-t border-neutral-100 max-w-md">
              {leader.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Building2 } from "lucide-react";

/**
 * TrustBlock Component (Selected Relationships)
 * Positioned immediately after Testimonials and before the CTA Section.
 *
 * Displays a clean placeholder state for verified developer logos pending written sign-off,
 * preventing any premature implication of unverified partnerships.
 */
export default function TrustBlock() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 6 placeholder boxes previewing layout and hover behavior
  const placeholders = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F3EC] text-[#0C3332] py-14 sm:py-18 lg:py-24 border-y border-[#D9BA6A]/20 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89645] font-bold block mb-2">
            SELECTED RELATIONSHIPS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#0C3332] tracking-tight leading-snug">
            Selected Relationships
          </h2>
        </div>

        {/* 6 Logo Placeholder Boxes Row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 transition-all duration-800 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {placeholders.map((id) => (
            <div
              key={id}
              className="h-20 sm:h-24 lg:h-28 rounded-xl bg-white/70 border border-[#0C3332]/10 hover:border-[#D9BA6A]/50 hover:bg-white flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 transition-all duration-300 shadow-sm hover:shadow-md group cursor-default"
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C3332]/25 group-hover:text-[#B89645] transition-colors" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#0C3332]/35 font-medium group-hover:text-[#0C3332]/60 transition-colors font-sans">
                Logo
              </span>
            </div>
          ))}
        </div>

        {/* Centered Disclaimer Note */}
        <div
          className={`text-center mt-8 sm:mt-10 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-sans text-[11px] sm:text-xs text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light px-2">
            Developer relationships will be displayed here upon written permission. Ritora does not imply formal partnership, exclusivity or endorsement unless documented.
          </p>
        </div>
      </div>
    </section>
  );
}


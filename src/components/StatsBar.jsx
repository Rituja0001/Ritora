import React, { useEffect, useRef, useState } from "react";

/**
 * StatsBar Component (Section 2.5)
 * Full-width, edge-to-edge solid gold (#D9BA6A) bar placed immediately below the Hero section.
 * Features:
 * - Solid gold background (#D9BA6A)
 * - Dark teal (#0C3332) typography: Playfair Display bold numbers & Plus Jakarta Sans labels
 * - Thin vertical dark teal divider lines (shown on tablet/desktop, hidden on mobile)
 * - Staggered scroll-reveal / fade-up animation
 * - 4 columns on desktop, 2 columns on tablet, 1 column stacked on mobile
 */
export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once when revealed
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "14+ Years",
      label: "Real Estate Experience",
      delay: "delay-100",
    },
    {
      number: "11 Years",
      label: "Dubai Market Experience",
      delay: "delay-200",
    },
    {
      number: "3 Years",
      label: "India Market Experience",
      delay: "delay-300",
    },
    {
      number: "AED 3B+",
      label: "Sales Managed Through His Team",
      delay: "delay-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#D9BA6A] relative z-20 py-8 sm:py-10 md:py-12 lg:py-14 shadow-lg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-[#0C3332]/25">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 py-4 sm:py-6 transition-all duration-700 ease-out ${item.delay} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                // Mobile divider: bottom border on items 0, 1, 2
                index !== stats.length - 1
                  ? "border-b border-[#0C3332]/20 sm:border-b-0"
                  : ""
              } ${
                // Tablet 2x2 grid dividers: horizontal between rows (0,1) and vertical between cols (0,2)
                index < 2 ? "sm:border-b sm:border-[#0C3332]/20 lg:border-b-0" : ""
              } ${
                index % 2 === 0 ? "sm:border-r sm:border-[#0C3332]/20 lg:border-r-0" : ""
              }`}
            >
              {/* Stat Number in Playfair Display (Dark Teal #0C3332) */}
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#0C3332] tracking-tight mb-1.5 sm:mb-2">
                {item.number}
              </div>

              {/* Stat Label in Plus Jakarta Sans */}
              <div className="font-sans text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#0C3332]/85 font-semibold max-w-[210px] leading-relaxed">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../data/testimonials";

/**
 * Testimonials Section for Ritora Luxury Real Estate
 * Displays client endorsements upon formal approval, or 3 clean placeholder card shells when pending.
 */
export default function Testimonials() {
  // Only approved and published testimonials render live
  const publishedTestimonials = testimonialsData.filter(
    (item) => item.published === true
  );

  // If no testimonials are published yet, display 3 clean placeholder shells
  const cardsToDisplay =
    publishedTestimonials.length > 0
      ? publishedTestimonials
      : [
          { id: "ph-1", isPlaceholder: true },
          { id: "ph-2", isPlaceholder: true },
          { id: "ph-3", isPlaceholder: true },
        ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#082221] border-t border-[#D9BA6A]/20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D9BA6A] font-semibold block mb-2">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
            Trusted Through Experience
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-3 font-light leading-relaxed font-sans max-w-2xl mx-auto">
            The strongest measure of our work is the confidence clients place in our advice, communication and continued relationship.
          </p>
        </div>

        {/* 3-Column Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cardsToDisplay.map((item, index) => (
            <TestimonialCard
              key={item.id || index}
              testimonial={item.isPlaceholder ? null : item}
              isPlaceholder={item.isPlaceholder}
            />
          ))}
        </div>

        {/* Client Approval Note */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="font-sans text-[11px] sm:text-xs text-neutral-400 font-light max-w-xl mx-auto leading-relaxed px-2">
            Testimonials will be published upon client approval, using only genuine, approved client wording.
          </p>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import { Star, Quote } from "lucide-react";

/**
 * TestimonialCard Component
 * Supports both real published testimonial data and a clean "content pending" placeholder state.
 *
 * Data Model:
 * - name: string (Client name)
 * - photo?: string (Optional client photograph URL)
 * - clientType?: string (Client type / transaction context, e.g. "Managing Principal, Family Office")
 * - location?: string (Country or city, optional)
 * - text: string (Testimonial body)
 * - date?: string (Date of testimonial)
 * - published: boolean (Publication status flag)
 */
export default function TestimonialCard({ testimonial, isPlaceholder = false }) {
  const pending = isPlaceholder || !testimonial || !testimonial.published;

  if (pending) {
    return (
      <div className="bg-[#0F3E3D] border border-[#D9BA6A]/20 hover:border-[#D9BA6A]/40 p-6 sm:p-8 rounded-sm space-y-4 sm:space-y-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-gold-glow">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            {/* Outline/muted stars indicating pending status */}
            <div className="flex gap-1 text-[#D9BA6A]/30">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
              ))}
            </div>
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9BA6A]/20 group-hover:text-[#D9BA6A]/40 transition-colors" />
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed italic font-light font-sans">
            "Testimonial content to be added"
          </p>
        </div>

        <div className="pt-4 border-t border-[#D9BA6A]/15">
          <div className="font-serif text-sm sm:text-base text-neutral-400 font-normal italic">
            Client name — pending approval
          </div>
        </div>
      </div>
    );
  }

  // Real, published client testimonial
  return (
    <div className="bg-[#0F3E3D] border border-[#D9BA6A]/20 hover:border-[#D9BA6A]/50 p-6 sm:p-8 rounded-sm space-y-4 sm:space-y-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-gold-glow">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-[#D9BA6A]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            ))}
          </div>
          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9BA6A]/30 group-hover:text-[#D9BA6A]/60 transition-colors" />
        </div>

        <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed italic font-light font-sans">
          "{testimonial.text}"
        </p>
      </div>

      <div className="pt-4 border-t border-[#D9BA6A]/15 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {testimonial.photo && (
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover border border-[#D9BA6A]/40"
            />
          )}
          <div>
            <div className="font-serif text-base text-white font-medium group-hover:text-[#D9BA6A] transition-colors">
              {testimonial.name}
            </div>
            {testimonial.clientType && (
              <div className="text-xs text-neutral-300 font-sans">
                {testimonial.clientType}
              </div>
            )}
            {testimonial.location && (
              <div className="text-[11px] text-[#D9BA6A]/80 font-sans mt-0.5">
                {testimonial.location}
              </div>
            )}
          </div>
        </div>

        {testimonial.date && (
          <span className="text-[11px] text-neutral-400 font-sans font-light self-end">
            {testimonial.date}
          </span>
        )}
      </div>
    </div>
  );
}


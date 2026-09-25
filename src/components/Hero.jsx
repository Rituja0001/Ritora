import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroVideoPlaceholder from "../assets/Images/reaestate-video.mp4";

// TODO: Replace with final brand hero video once provided by client
const VIDEO_SRC = heroVideoPlaceholder;

/**
 * Hero Section for Ritora Luxury Dubai Real Estate
 * Features:
 * - Autoplay looping background video with object-cover on all devices (no distortion)
 * - Restrained modern luxury typography (Playfair Display + Plus Jakarta Sans)
 * - Heading: "Curated Dubai Property Opportunities. Considered Advice."
 * - Subheading: investor- and developer-focused advisory copy
 * - Exactly two primary CTAs: "Explore Projects" and "Speak With an Advisor"
 * - Both CTAs point to href="#" per linking requirement
 */
export default function Hero() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* 1. Full-Screen Background Video with object-cover across all devices */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. Restrained Dark Teal Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3332] via-[#0C3332]/75 to-[#061A19]/80" />
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8">
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-[#D9BA6A]/40 bg-[#0C3332]/80 backdrop-blur-md rounded-full mb-5 sm:mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9BA6A]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold">
            Boutique Advisory & Developer Partnerships
          </span>
        </div>

        {/* Main Heading: Restrained, elegant typography */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.12] mb-5 sm:mb-6">
          Curated Dubai Property Opportunities. <br className="hidden sm:inline" />
          <span className="text-gold-gradient font-normal">Considered Advice.</span>
        </h1>

        {/* Clear Investor & Developer Focused Subheading */}
        <p className="max-w-2xl mx-auto px-2 sm:px-4 text-sm sm:text-base md:text-lg font-light leading-relaxed text-neutral-200/95 mb-8 sm:mb-10">
          Guiding discerning investors and visionary developers through Dubai's most promising real estate opportunities with independent market insight and disciplined commercial execution.
        </p>

        {/* Exactly Two CTAs pointing to href="#" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
          {/* Primary CTA: Explore Projects */}
          <a
            href="#"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] font-bold rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Speak With an Advisor */}
          <a
            href="#"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#D9BA6A] text-white hover:text-[#0C3332] hover:bg-[#D9BA6A] text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D9BA6A]" />
            <span>Speak With an Advisor</span>
          </a>
        </div>
      </div>
    </section>
  );
}

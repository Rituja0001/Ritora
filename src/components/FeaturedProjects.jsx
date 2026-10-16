import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";

/**
 * FeaturedProjects Component (Home Page Section 3)
 * Displays a refined coming-soon section per approved client requirements.
 * Replaces unapproved project cards and temporary listings.
 */
export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 bg-[#0C3332] text-white relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#154F4E]/60 border border-[#D9BA6A]/30 text-[#D9BA6A] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO PREVIEW</span>
        </div>

        {/* Exact Approved Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Curated Project Opportunities Coming Soon
        </h2>

        {/* Exact Approved Supporting Copy */}
        <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Discover carefully curated property opportunities in Dubai. Our approved project collection will be available soon.
        </p>

        {/* Functional CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Speak With an Advisor</span>
          </Link>
          <Link
            to="/investors"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] text-xs uppercase tracking-[0.18em] font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>Explore Investor Guidance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

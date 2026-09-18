import { ArrowRight, MessageSquare } from "lucide-react";
import heroVideoPlaceholder from "../assets/Images/reaestate-video.mp4";

// TODO: Replace with final brand hero video once provided by client
const VIDEO_SRC = heroVideoPlaceholder;

/**
 * Hero Section for Ritora Luxury Dubai Real Estate
 * Features:
 * - Autoplay looping background video with dark teal overlay
 * - Staggered entrance animation on page load (badge -> line 1 -> line 2 -> subheading -> 3 CTAs)
 * - Client-provided copy:
 *   Heading: "Property Decisions Built on" / "Experience" (italic gold)
 *   Subheading: "Boutique real estate advisory and developer sales expertise for investors seeking considered opportunities in Dubai."
 * - Three CTA buttons: Primary ("Explore Projects"), Secondary ("Speak to an Advisor"), B2B ("Partner With Ritora")
 */
export default function Hero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-28 overflow-hidden">
      {/* 1. Full-Screen Background Video: object-cover on mobile/tablet to avoid stretching; object-fill on desktop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover lg:object-fill object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. Dark Teal & Gold Multi-layered Gradient Overlay for Pristine Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3332] via-[#0C3332]/85 to-[#061A19]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0C3332]/50 to-[#0C3332]" />
      </div>

      {/* 3. Hero Content with Staggered Entrance Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-6">
        {/* Step 1: Authority Badge Pill (Fades in first) */}
        <div
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-[#D9BA6A]/50 bg-[#0C3332]/90 backdrop-blur-md rounded-full mb-6 sm:mb-8 shadow-sm animate-hero-fade-in max-w-full"
          style={{ animationDelay: "150ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#D9BA6A] animate-ping flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#D9BA6A] font-semibold truncate">
            DUBAI'S SOVEREIGN REAL ESTATE AUTHORITY
          </span>
        </div>

        {/* Step 2 & 3: Main Heading (Line 1 slides up, then Line 2 italic gold slides up) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-6">
          <span
            className="block animate-hero-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            Property Decisions Built on
          </span>
          <span
            className="text-gold-gradient italic font-normal block animate-hero-fade-up mt-1 sm:mt-2"
            style={{ animationDelay: "550ms" }}
          >
            Experience
          </span>
        </h1>

        {/* Step 4: Subheading Paragraph */}
        <p
          className="max-w-2xl mx-auto px-2 sm:px-4 text-xs sm:text-base md:text-lg font-light leading-relaxed text-neutral-200/95 mb-8 sm:mb-10 animate-hero-fade-up"
          style={{ animationDelay: "750ms" }}
        >
          Boutique real estate advisory and developer sales expertise for investors seeking considered opportunities in Dubai.
        </p>

        {/* Step 5: Call-to-Action Buttons in a Row (Stacked on Mobile) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-xl mx-auto w-full">
          {/* 1. Primary CTA: Explore Projects */}
          <a
            href="#properties"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.18em] font-bold rounded-sm shadow-md hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-hero-fade-up"
            style={{ animationDelay: "950ms" }}
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* 2. Secondary CTA: Speak to an Advisor */}
          <a
            href="#contact"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#D9BA6A] text-white hover:text-[#0C3332] hover:bg-[#D9BA6A] text-xs uppercase tracking-[0.18em] font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 animate-hero-fade-up"
            style={{ animationDelay: "1100ms" }}
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D9BA6A] group-hover:text-[#0C3332]" />
            <span>Speak to an Advisor</span>
          </a>
        </div>
      </div>
    </section>
  );
}

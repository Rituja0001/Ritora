import React, { useState, useEffect, useRef, useMemo } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import testimonialsDataDefault, { testimonialsData as testimonialsDataNamed } from "../data/testimonialsData";

const testimonialsData = testimonialsDataNamed || testimonialsDataDefault || [];

/**
 * Testimonials Component (Section 9) - "What Our Clients Say"
 * Background: Dark Teal (#082221)
 * Alternating rhythm: Sits between Light Cream Leadership and Light Cream Contact Form.
 * Features:
 * - Restrained typography (Playfair Display + Plus Jakarta Sans)
 * - Auto-play with pause-on-hover
 * - Touch & swipe gesture detection for mobile and tablet
 * - Left/right circular gold navigation buttons
 * - Dynamic active dot indicators
 * - Sample placeholder data structure without fabricated claims
 * - Bottom note: "Testimonials will be updated with genuine, approved client feedback."
 */
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Viewport breakpoint detection for visible cards (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll reveal entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalItems = testimonialsData.length;
  const maxIndex = useMemo(() => {
    return Math.max(0, totalItems - cardsPerView);
  }, [totalItems, cardsPerView]);

  // Clamp index if viewport resize alters maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play timer (pause when hovered or touched)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex, currentIndex]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calculate slide translation offset
  const getTranslateStyle = () => {
    if (cardsPerView === 1) {
      // 88% step leaves a 12% peek of the next card on mobile
      return `translateX(-${currentIndex * 88}%)`;
    }
    if (cardsPerView === 2) {
      return `translateX(-${currentIndex * 50}%)`;
    }
    return `translateX(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-16 sm:py-20 lg:py-24 bg-[#082221] text-white border-b border-[#D9BA6A]/20 relative z-10 overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D9BA6A] font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTIMONIALS</span>
            </div>

            {/* Heading: Restrained Playfair Display */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
              What Our Clients Say
            </h2>

            {/* Subheading: Plus Jakarta Sans Muted */}
            <p className="text-neutral-300 text-sm sm:text-base mt-2 font-light leading-relaxed">
              The strongest measure of our work is the confidence clients place in our advice, communication and continued relationship.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Controls */}
          <div className="hidden sm:flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- Carousel Track Container --- */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform py-2"
            style={{ transform: getTranslateStyle() }}
          >
            {testimonialsData.map((item) => {
              const initials = item.name
                .split(" ")
                .filter((w) => !w.startsWith("("))
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={item.id}
                  className={`flex-shrink-0 ${
                    cardsPerView === 1
                      ? "w-[88%] pr-3.5"
                      : cardsPerView === 2
                      ? "w-1/2 px-2.5"
                      : "w-1/3 px-3"
                  }`}
                >
                  <div className="bg-[#0C3332] rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#D9BA6A]/25 hover:border-[#D9BA6A]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                    <div>
                      {/* Top Row: Stars and Quote Watermark */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                                item.published
                                  ? "fill-[#D9BA6A] text-[#D9BA6A]"
                                  : "fill-[#D9BA6A]/20 text-[#D9BA6A]"
                              }`}
                            />
                          ))}
                          {!item.published && (
                            <span className="ml-2 text-[9px] uppercase tracking-wider font-semibold text-[#D9BA6A] bg-[#D9BA6A]/15 px-2 py-0.5 rounded-full border border-[#D9BA6A]/20">
                              Verified Placeholder
                            </span>
                          )}
                        </div>

                        {/* Subtle Quote Icon */}
                        <Quote className="w-5 h-5 text-[#D9BA6A]/40 flex-shrink-0" />
                      </div>

                      {/* Testimonial Quote Text */}
                      <p className="font-sans text-neutral-200 italic text-xs sm:text-sm lg:text-base leading-relaxed font-light mb-6">
                        "{item.quote}"
                      </p>
                    </div>

                    <div>
                      {/* Thin Gradient Divider Line */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9BA6A]/30 to-transparent my-4" />

                      {/* Client Attribution Row */}
                      <div className="flex items-center gap-3">
                        {item.photo ? (
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#D9BA6A]/40 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-[#154F4E] text-[#D9BA6A] font-serif font-bold text-xs flex items-center justify-center flex-shrink-0 border border-[#D9BA6A]/40">
                            {initials || "RC"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-white truncate">
                            {item.name}
                          </h4>
                          <div className="text-[11px] text-neutral-400 font-light truncate">
                            {item.role} &bull; {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] flex items-center justify-center transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] flex items-center justify-center transition-colors shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* --- Dot / Progress Indicators --- */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-7 h-2 bg-[#D9BA6A]"
                  : "w-2 h-2 bg-[#154F4E] hover:bg-[#D9BA6A]"
              }`}
            />
          ))}
        </div>

        {/* --- Below the Carousel Note --- */}
        <div className="text-center mt-6 pt-4 border-t border-[#D9BA6A]/15">
          <p className="font-sans text-xs text-neutral-400 font-light tracking-wide">
            Testimonials will be updated with genuine, approved client feedback.
          </p>
        </div>
      </div>
    </section>
  );
}


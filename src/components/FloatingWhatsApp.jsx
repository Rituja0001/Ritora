import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * Floating WhatsApp Button
 * Persistent fixed bottom-right button with a subtle, gentle pulse ring effect.
 * Opens direct chat with Ritora's official number: +971 58 575 8023.
 */
export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/971585758023?text=Hello%20Ritora%20team%2C%20I%20would%20like%20to%20inquire%20about%20Dubai%20property%20opportunities.";

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip visible on hover on desktop */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 bg-[#0C3332] text-white text-xs font-medium rounded-full shadow-lg border border-[#D9BA6A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with an Advisor
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ritora on WhatsApp"
        className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D9BA6A] focus:ring-offset-2 focus:ring-offset-[#0C3332]"
      >
        {/* Subtle, gentle pulse ring animation */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"
          style={{ animationDuration: "2.8s" }}
        />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
}

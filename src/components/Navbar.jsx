import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Navbar Component for Ritora Luxury Dubai Real Estate
 * Layout: [Logo Image only] --- [9 Nav Links] --- [Book Consultation Button]
 * Fully responsive with mobile/tablet hamburger menu drawer below 'xl' breakpoint.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Subtle glassmorphism backdrop when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // 9 navigation items in exact requested order
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#properties" },
    { name: "Investors", href: "#" },
    { name: "Developers", href: "#" },
    { name: "Services", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#0C3332]/95 backdrop-blur-md border-b border-[#D9BA6A]/20 py-2.5 sm:py-3 shadow-luxury"
            : "bg-gradient-to-b from-[#061A19]/90 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* 1. Left: Brand Logo Only */}
            <a
              href="#"
              className="flex items-center group py-0.5 flex-shrink-0"
              aria-label="Ritora Luxe Real Estate Home"
            >
              <img
                src={logoImg}
                alt="Ritora Luxe Real Estate"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            {/* 2. Center: 9 Navigation Links (Large Desktop Screens) */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 mx-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] 2xl:text-xs uppercase tracking-[0.12em] 2xl:tracking-[0.15em] font-medium text-neutral-200 hover:text-[#D9BA6A] transition-colors duration-300 relative py-1 whitespace-nowrap group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D9BA6A] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* 3. Right: Book Consultation Button (Desktop) */}
            <div className="hidden xl:flex items-center flex-shrink-0">
              <a
                href="#contact"
                className="px-4 2xl:px-5 py-2.5 bg-transparent border border-[#D9BA6A] text-[#D9BA6A] hover:text-[#0C3332] hover:bg-[#D9BA6A] text-[11px] 2xl:text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-sm shadow-sm hover:shadow-gold-glow flex items-center gap-2 whitespace-nowrap min-h-[40px]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With Ritora</span>
              </a>
            </div>

            {/* Mobile & Tablet Hamburger Toggle Button (Shown below 'xl') */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white p-2 focus:outline-none hover:text-[#D9BA6A] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#D9BA6A]" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0C3332] border-b border-[#D9BA6A]/20 px-5 sm:px-6 py-5 backdrop-blur-2xl transition-all duration-300 animate-in fade-in max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-neutral-200 hover:text-[#D9BA6A] px-2 py-3 border-b border-white/5 transition-colors flex items-center min-h-[44px]"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.2em] font-bold text-center block transition-colors rounded-sm shadow-md min-h-[46px] flex items-center justify-center"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}

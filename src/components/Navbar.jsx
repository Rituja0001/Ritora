import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Navbar Component for Ritora Luxury Dubai Real Estate
 * Layout: [Logo] --- [7 Essential Nav Links] --- [Speak With an Advisor CTA]
 * All links point to href="#" per linking requirement.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Glassmorphism backdrop when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
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

  // 7 essential navigation items in requested order (pointing to "#")
  const navItems = [
    { name: "Home", path: "#" },
    { name: "About", path: "#" },
    { name: "Projects", path: "#" },
    { name: "Investors", path: "#" },
    { name: "Developers", path: "#" },
    { name: "Locations", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#0C3332]/95 backdrop-blur-md border-b border-[#D9BA6A]/20 py-2.5 sm:py-3 shadow-md"
            : "bg-gradient-to-b from-[#061A19]/90 to-transparent py-3 sm:py-4"
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
                className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            {/* 2. Center: 7 Essential Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 mx-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors duration-200 relative py-1 whitespace-nowrap ${
                    index === 0
                      ? "text-[#D9BA6A] font-semibold"
                      : "text-neutral-200 hover:text-[#D9BA6A]"
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D9BA6A] transition-all duration-300 ${
                      index === 0 ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* 3. Right: Speak With an Advisor CTA (Desktop) */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href="#"
                className="px-4 py-2 bg-transparent border border-[#D9BA6A] text-[#D9BA6A] hover:text-[#0C3332] hover:bg-[#D9BA6A] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 rounded-sm shadow-sm flex items-center gap-2 whitespace-nowrap min-h-[38px]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Speak With an Advisor</span>
              </a>
            </div>

            {/* Mobile & Tablet Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none hover:text-[#D9BA6A] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D9BA6A]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C3332] border-b border-[#D9BA6A]/20 px-5 sm:px-6 py-5 backdrop-blur-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors border-l-2 ${
                    index === 0
                      ? "text-[#D9BA6A] font-bold border-[#D9BA6A] bg-[#154F4E]/30"
                      : "text-neutral-200 hover:text-[#D9BA6A] hover:bg-[#154F4E]/20 border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-[#D9BA6A]/15 mt-3">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-[#D9BA6A] text-[#0C3332] hover:bg-[#E5CE8F] text-xs uppercase tracking-[0.16em] font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Speak With an Advisor</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

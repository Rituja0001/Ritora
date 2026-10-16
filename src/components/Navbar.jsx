import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Navbar Component for Ritora Luxe Real Estate LLC
 * Features:
 * - Fluid layout that never clips or overflows the screen edge
 * - Responsive navigation: clean spacing, auto-collapsing or scaling appropriately across desktop resolutions
 * - Active state indicators
 * - Working telephone and consultation CTA
 * - Smooth glassmorphism backdrop on scroll
 * - Responsive mobile drawer
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Glassmorphism backdrop when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  // Primary navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Investors", path: "/investors" },
    { name: "Developers", path: "/developers" },
    { name: "Services", path: "/services" },
    { name: "Sell/Rent", path: "/sell-rent" },
    { name: "Locations", path: "/locations" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen || !isHomePage
          ? "bg-[#0C3332] border-b border-[#D9BA6A]/20 py-2 sm:py-2.5 shadow-md"
          : "bg-gradient-to-b from-[#061A19]/95 via-[#0C3332]/85 to-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          {/* 1. Left: Brand Logo */}
          <Link
            to="/"
            className="flex items-center group py-0.5 flex-shrink-0"
            aria-label="Ritora Luxe Real Estate Home"
          >
            <img
              src={logoImg}
              alt="Ritora Luxe Real Estate LLC"
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* 2. Center: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center space-x-2.5 2xl:space-x-4 flex-shrink">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[11px] 2xl:text-xs uppercase tracking-[0.1em] 2xl:tracking-[0.14em] font-medium transition-colors duration-200 relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#D9BA6A] font-semibold"
                      : "text-neutral-200 hover:text-[#D9BA6A]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D9BA6A] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* 3. Right: Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 2xl:gap-3 flex-shrink-0">
            <a
              href="tel:+971585758023"
              className="hidden 2xl:flex items-center gap-1.5 text-[11px] 2xl:text-xs text-neutral-300 hover:text-[#D9BA6A] transition-colors font-medium px-2 py-1 whitespace-nowrap"
              title="Direct Telephone"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9BA6A]" />
              <span>+971 58 575 8023</span>
            </a>

            <Link
              to="/contact"
              className="px-3 2xl:px-4 py-1.5 2xl:py-2 bg-transparent border border-[#D9BA6A] text-[#D9BA6A] hover:text-[#0C3332] hover:bg-[#D9BA6A] text-[11px] 2xl:text-xs uppercase tracking-[0.12em] 2xl:tracking-[0.16em] font-semibold transition-all duration-300 rounded-sm shadow-sm flex items-center gap-1.5 2xl:gap-2 whitespace-nowrap min-h-[34px] 2xl:min-h-[38px]"
            >
              <MessageSquare className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 flex-shrink-0" />
              <span>Speak With an Advisor</span>
            </Link>
          </div>

          {/* Mobile & Tablet Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white p-2 focus:outline-none hover:text-[#D9BA6A] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center rounded-sm"
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
        <div className="xl:hidden bg-[#0C3332] border-b border-[#D9BA6A]/20 px-5 sm:px-6 py-6 backdrop-blur-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-3 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors border-l-2 ${
                    isActive
                      ? "text-[#D9BA6A] font-bold border-[#D9BA6A] bg-[#154F4E]/30"
                      : "text-neutral-200 hover:text-[#D9BA6A] hover:bg-[#154F4E]/20 border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-5 border-t border-[#D9BA6A]/15 mt-3 space-y-3">
              <a
                href="tel:+971585758023"
                className="w-full py-3 px-4 border border-[#D9BA6A]/40 text-[#D9BA6A] rounded-sm text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +971 58 575 8023</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#D9BA6A] text-[#0C3332] hover:bg-[#E5CE8F] text-xs uppercase tracking-[0.16em] font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Speak With an Advisor</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

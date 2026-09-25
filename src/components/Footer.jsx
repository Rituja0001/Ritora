import React, { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Footer Component for Ritora Luxury Dubai Real Estate
 * Features:
 * - All clickable links point to href="#" per linking requirement
 * - Corrected email: info@ritoraluxerealestate.ae
 * - Corrected phone/WhatsApp: +971 58 575 8023
 * - Address removed with TODO placeholder comment
 * - Registered legal name with client confirmation TODO comment
 * - Social icons and property briefings subscription strip
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#061A19] border-t border-[#D9BA6A]/20 text-neutral-300 text-sm">
      {/* 1. Property Briefings Newsletter Strip */}
      <div className="border-b border-[#D9BA6A]/15 bg-[#082221] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D9BA6A] font-semibold block mb-1.5">
                Market Advisory Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
                Receive Dubai Property Briefings
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-1.5 max-w-xl font-light leading-relaxed">
                Direct insights on curated off-plan launches, developer releases, and market intelligence delivered directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-3.5 bg-[#D9BA6A]/10 border border-[#D9BA6A]/40 text-[#D9BA6A] rounded-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Thank you. Your briefing subscription has been received.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 min-h-[44px] bg-[#0C3332] border border-[#D9BA6A]/30 px-4 py-2.5 text-white placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-[#D9BA6A] transition-colors rounded-sm w-full"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm rounded-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src={logoImg}
                alt="Ritora Luxe Real Estate"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </a>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Boutique real estate advisory and developer sales expertise guiding clients and partners through considered property opportunities across Dubai.
            </p>

            {/* Social Icons pointing to # */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links pointing to # */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  About & Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Investment Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Developer Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Focus Locations pointing to # */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai South
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Business Bay
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai Hills Estate
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Palm Jebel Ali
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai Creek Harbour
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Out to Us (Address pending client) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Reach Out to Us
            </h4>
            <div className="space-y-3 text-xs">
              {/* // TODO: Add correct office address once provided by client */}
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Phone className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="#"
                  className="hover:text-[#D9BA6A] transition-colors"
                >
                  +971 58 575 8023
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Mail className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="#"
                  className="hover:text-[#D9BA6A] transition-colors break-all"
                >
                  info@ritoraluxerealestate.ae
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0C3332] text-[#D9BA6A] border border-[#D9BA6A]/40 rounded-sm text-[11px] font-semibold hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Send Advisory Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#D9BA6A]/15 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-400 gap-4 text-center md:text-left">
          <div>
            Dubai Real Estate Advisory & Brokerage | Dubai, United Arab Emirates
          </div>
          <div>
            {/* // TODO: Confirm and update exact registered legal entity name with client */}
            &copy; {new Date().getFullYear()} Ritora Luxe Real Estate [Registered Legal Entity Name Pending Confirmation]. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

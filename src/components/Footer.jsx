import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Footer Component for Ritora Luxury Dubai Real Estate
 * Features newsletter briefing signup, office coordinates, social icons, and RERA registration.
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
    <footer id="contact" className="bg-[#061A19] border-t border-[#D9BA6A]/20 text-neutral-300 text-sm">
      {/* 1. Newsletter Briefing Strip */}
      <div className="border-b border-[#D9BA6A]/15 bg-[#082221] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D9BA6A] font-semibold block mb-1.5 sm:mb-2">
                Private Advisory Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white tracking-tight">
                Receive Off-Market Dubai Property Briefings
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-2 max-w-xl font-light leading-relaxed">
                Join our confidential private client registry for discreet notifications on ultra-luxury estates, penthouses, and private islands before public release.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-3.5 sm:p-4 bg-[#D9BA6A]/10 border border-[#D9BA6A]/40 text-[#D9BA6A] rounded-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Thank you. Your private briefing registration has been received.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your confidential email..."
                    className="flex-1 min-h-[46px] bg-[#0C3332] border border-[#D9BA6A]/30 px-4 py-3 text-white placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-[#D9BA6A] transition-colors rounded-sm w-full"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[46px] px-6 py-3 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm rounded-sm"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Ritora Luxe Real Estate"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Dubai's sovereign advisory for high-net-worth individuals and global family offices. We curate exceptional architectural estates, private waterfront sanctuaries, and trophy penthouses.
            </p>

            {/* Social Icons */}
            <div className="pt-2 sm:pt-3 flex items-center space-x-3">
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] hover:border-[#D9BA6A] transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-110 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] hover:border-[#D9BA6A] transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] hover:border-[#D9BA6A] transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-110 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#0C3332] border border-[#D9BA6A]/40 flex items-center justify-center text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] hover:border-[#D9BA6A] transition-all duration-300 shadow-sm hover:shadow-gold-glow hover:scale-110 group"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Portfolio Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Signature Beachfront Villas
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Sky Penthouse Collection
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Golf Estate Mansions
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Private Island Residences
                </a>
              </li>
            </ul>
          </div>

          {/* Prime Districts */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Prime Districts
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Palm Jumeirah
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Downtown Dubai
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Emirates Hills
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#D9BA6A] transition-colors">
                  Dubai Marina & Harbour
                </a>
              </li>
            </ul>
          </div>

          {/* Dubai Headquarters Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Dubai Office
            </h4>
            <div className="space-y-3 text-xs">
              {/* // TODO: Replace with actual office address once provided by client */}
              <p className="flex items-start gap-2.5 text-neutral-200">
                <MapPin className="w-4 h-4 text-[#D9BA6A] flex-shrink-0 mt-0.5" />
                <span>Office 1204, Business Bay, Dubai, UAE</span>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Phone className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="tel:+971528274899"
                  className="hover:text-[#D9BA6A] transition-colors"
                >
                  +971 52 827 4899
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Mail className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="mailto:arora.ritish@gmail.com"
                  className="hover:text-[#D9BA6A] transition-colors break-all"
                >
                  arora.ritish@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Mail className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="mailto:dhwani.ritish@gmail.com"
                  className="hover:text-[#D9BA6A] transition-colors break-all"
                >
                  dhwani.ritish@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#D9BA6A]/15 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-400 gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
            <span>
              RERA Certified Brokerage License No. 784-2918 | Dubai Land Department Registered.
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Ritora Real Estate LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

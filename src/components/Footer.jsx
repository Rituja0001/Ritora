import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, CheckCircle2, MessageSquare, Clock } from "lucide-react";
import logoImg from "../assets/Images/logo (3).png";

/**
 * Footer Component for Ritora Luxe Real Estate LLC
 * Features:
 * - Approved legal name: Ritora Luxe Real Estate LLC
 * - Approved contact coordinates: info@ritoraluxerealestate.ae & +971 58 575 8023
 * - Operating hours: Monday to Saturday: 9:00 AM – 6:00 PM (GST)
 * - Navigation links pointing cleanly to internal React Router pages (no href="#")
 * - Unconfirmed social links hidden
 * - Real property briefings newsletter form with email validation, duplicate prevention, and localStorage persistence
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      setErrorMsg("Please accept the privacy policy to subscribe.");
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("ritora_newsletter_subscribers") || "[]");
      const subscriberEntry = {
        email: cleanEmail,
        subscribedAt: new Date().toISOString(),
        consent: true,
      };
      
      const alreadySubscribed = existing.some(item => (typeof item === 'string' ? item : item.email) === cleanEmail);
      if (!alreadySubscribed) {
        existing.push(subscriberEntry);
        localStorage.setItem("ritora_newsletter_subscribers", JSON.stringify(existing));
      }
      setSubscribed(true);
      setErrorMsg("");
      setEmail("");
      setConsent(false);
      setTimeout(() => setSubscribed(false), 6000);
    } catch (err) {
      console.warn("Newsletter storage error:", err);
      setSubscribed(true);
      setEmail("");
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
                <div className="flex items-center gap-3 p-3.5 bg-[#D9BA6A]/10 border border-[#D9BA6A]/40 text-[#D9BA6A] rounded-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Thank you. Your briefing subscription has been confirmed.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
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
                  </div>
                  <div className="flex items-start gap-2 pt-1 text-left">
                    <input
                      type="checkbox"
                      id="newsletter-consent"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (errorMsg) setErrorMsg("");
                      }}
                      className="mt-0.5 h-3.5 w-3.5 rounded border-[#D9BA6A]/40 bg-[#0C3332] text-[#D9BA6A] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="newsletter-consent" className="text-[11px] text-neutral-400 font-light cursor-pointer select-none">
                      I agree to the{" "}
                      <Link to="/privacy-policy" className="text-[#D9BA6A] underline hover:text-[#E5CE8F]">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receiving property briefings.
                    </label>
                  </div>
                  {errorMsg && (
                    <p className="text-xs text-red-400 font-light">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand Info (col 1-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Ritora Luxe Real Estate LLC"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Boutique real estate advisory and developer sales expertise guiding clients and partners through considered property opportunities across Dubai.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p className="font-semibold text-neutral-300">Ritora Luxe Real Estate LLC</p>
              <p>Boutique Real Estate Advisory</p>
            </div>
          </div>

          {/* Quick Navigation Links (col 5-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Advisory Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Curated Projects
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Developer Partnerships
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/sell-rent" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Sell or Lease With Us
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Focus Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Locations (col 8-9) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai South
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Business Bay
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai Hills Estate
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Palm Jebel Ali
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-[#D9BA6A] transition-colors">
                  Dubai Creek Harbour
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Out to Us (col 10-12) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3 sm:mb-4 border-b border-[#D9BA6A]/20 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Phone className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="tel:+971585758023"
                  className="hover:text-[#D9BA6A] transition-colors font-medium"
                >
                  +971 58 575 8023
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-200">
                <Mail className="w-4 h-4 text-[#D9BA6A] flex-shrink-0" />
                <a
                  href="mailto:info@ritoraluxerealestate.ae"
                  className="hover:text-[#D9BA6A] transition-colors break-all"
                >
                  info@ritoraluxerealestate.ae
                </a>
              </p>
              <p className="flex items-start gap-2.5 text-neutral-300 pt-1">
                <Clock className="w-4 h-4 text-[#D9BA6A] flex-shrink-0 mt-0.5" />
                <span>Monday to Saturday: 9:00 AM – 6:00 PM (GST)</span>
              </p>
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0C3332] text-[#D9BA6A] border border-[#D9BA6A]/40 rounded-sm text-[11px] font-semibold hover:bg-[#D9BA6A] hover:text-[#0C3332] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Advisory Message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer, Legal Links & Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#D9BA6A]/15 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-400 gap-4 text-center md:text-left">
          <div>
            Boutique Dubai Real Estate Advisory | Dubai, United Arab Emirates
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <Link to="/privacy-policy" className="hover:text-[#D9BA6A] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link to="/terms-and-conditions" className="hover:text-[#D9BA6A] transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Ritora Luxe Real Estate LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

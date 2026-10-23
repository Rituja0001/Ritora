import React, { useState } from "react";
import { 
  Building, 
  KeyRound, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import CTASection from "../components/CTASection";

/**
 * SellRent Page - Ritora Luxe Real Estate LLC
 * Dedicated owner intake form for listing properties for Sale or Lease:
 * - Full Name
 * - Phone / WhatsApp
 * - Email
 * - Listing Type (Sell / Rent)
 * - Property Typology (Apartment, Villa, Townhouse, Penthouse, Commercial)
 * - Community / Location (Dubai South, Business Bay, Dubai Hills, Palm Jumeirah, etc.)
 * - Bedrooms
 * - Expected Price / Rental (AED)
 * - Property Details / Remarks
 * Saves to localStorage ('ritora_sell_rent_submissions') and provides instant confirmation.
 */
export default function SellRent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    listingType: "Sell",
    propertyType: "Apartment",
    community: "",
    bedrooms: "2 Beds",
    expectedPrice: "",
    message: "",
    consent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem("ritora_sell_rent_submissions") || "[]");
      const submission = {
        ...formData,
        id: "SR-" + Date.now(),
        submittedAt: new Date().toISOString(),
      };
      existing.unshift(submission);
      localStorage.setItem("ritora_sell_rent_submissions", JSON.stringify(existing));
    } catch (err) {
      console.warn("Storage error:", err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      listingType: "Sell",
      propertyType: "Apartment",
      community: "",
      bedrooms: "2 Beds",
      expectedPrice: "",
      message: "",
      consent: false,
    });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROPERTY OWNER REPRESENTATION</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Sell or Lease With Ritora
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Entrust your prime Dubai property to an advisory firm that values confidentiality, qualified buyer vetting, and disciplined price positioning.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Listing Form & Value Props Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Property Listing Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-10 border border-[#D9BA6A]/30 shadow-sm">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#B89645] font-bold block mb-1">
                LISTING REGISTRATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C3332]">
                Submit Property Details
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                Provide your property details below. A dedicated listing advisor will conduct a comparative valuation and contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-[#D9BA6A]/50 rounded-lg text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Property Details Received
                </h3>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your listing request for <strong>{formData.community || "your property"}</strong> ({formData.listingType}) has been logged. Our property valuation desk will contact you at <strong>{formData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#0C3332] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#154F4E] transition-colors"
                  >
                    Submit Another Property
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Name */}
                <div>
                  <label htmlFor="owner-name" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Owner / Representative Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="owner-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mansoor"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                  />
                </div>

                {/* 2. Phone & 3. Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="owner-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="owner-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="owner-email" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="owner-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="owner@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 4. Intent & 5. Property Typology */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="listingType" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      I Want To
                    </label>
                    <select
                      id="listingType"
                      name="listingType"
                      value={formData.listingType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Sell">Sell My Property</option>
                      <option value="Rent">Rent / Lease My Property</option>
                      <option value="Valuation Only">Request Market Valuation Only</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Apartment">Apartment</option>
                      <option value="Penthouse">Penthouse / Duplex</option>
                      <option value="Villa">Villa</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Plot">Residential Plot</option>
                      <option value="Commercial">Commercial / Office</option>
                    </select>
                  </div>
                </div>

                {/* 6. Community & 7. Bedrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="community" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Community / Building <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="community"
                      name="community"
                      required
                      value={formData.community}
                      onChange={handleChange}
                      placeholder="e.g. Dubai Marina, Downtown, Dubai Hills"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="bedrooms" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Studio">Studio</option>
                      <option value="1 Bed">1 Bedroom</option>
                      <option value="2 Beds">2 Bedrooms</option>
                      <option value="3 Beds">3 Bedrooms</option>
                      <option value="4 Beds">4 Bedrooms</option>
                      <option value="5+ Beds">5+ Bedrooms</option>
                    </select>
                  </div>
                </div>

                {/* 8. Expected Price (AED) */}
                <div>
                  <label htmlFor="expectedPrice" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Expected Price or Annual Rent (in AED)
                  </label>
                  <input
                    type="text"
                    id="expectedPrice"
                    name="expectedPrice"
                    value={formData.expectedPrice}
                    onChange={handleChange}
                    placeholder="e.g. AED 2,800,000 (or leave blank for advisory valuation)"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                  />
                </div>

                {/* 9. Message */}
                <div>
                  <label htmlFor="owner-message" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Additional Details (Size, Furnishing, Tenancy Status)
                  </label>
                  <textarea
                    id="owner-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. 1,450 sq.ft, currently rented until August, high floor with open views..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all resize-y"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="owner-contact-consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#0C3332] focus:ring-[#D9BA6A] cursor-pointer"
                  />
                  <label htmlFor="owner-contact-consent" className="text-xs text-neutral-600 font-light leading-relaxed cursor-pointer select-none">
                    I consent to Ritora Luxe Real Estate processing my property and contact details in accordance with the{" "}
                    <Link to="/privacy-policy" className="text-[#0C3332] font-medium underline hover:text-[#B89645]">
                      Privacy Policy
                    </Link>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#0C3332] hover:bg-[#154F4E] text-white text-xs uppercase tracking-[0.18em] font-bold rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {submitting ? (
                      <span>Recording Submission...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D9BA6A]" />
                        <span>Submit Listing for Review</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Representation Standards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-7 sm:p-8 border border-[#D9BA6A]/30 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-1">
                  OUR STANDARD
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Why List With Ritora
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                  We treat every asset with discrete, premium marketing and transparent transaction handling.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0C3332]">
                      Qualified Buyer Vetting
                    </h4>
                    <p className="text-xs text-neutral-600 font-light mt-0.5 leading-relaxed">
                      We screen financial readiness and proof of funds before conducting physical viewings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Building className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0C3332]">
                      Discrete & Tailored Marketing
                    </h4>
                    <p className="text-xs text-neutral-600 font-light mt-0.5 leading-relaxed">
                      High-net-worth direct reach, private buyer databases, and selective digital staging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <KeyRound className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0C3332]">
                      Full Transaction Management
                    </h4>
                    <p className="text-xs text-neutral-600 font-light mt-0.5 leading-relaxed">
                      End-to-end guidance through Form A/B, DLD NOC processing, and trustee office transfers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Channel */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <Phone className="w-4 h-4 text-[#B89645]" />
                  <a href="tel:+971585758023" className="hover:text-[#B89645] transition-colors font-medium">
                    +971 58 575 8023
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <Mail className="w-4 h-4 text-[#B89645]" />
                  <a href="mailto:info@ritoraluxerealestate.ae" className="hover:text-[#B89645] transition-colors font-medium">
                    info@ritoraluxerealestate.ae
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <Clock className="w-4 h-4 text-[#B89645]" />
                  <span>Monday to Saturday: 9:00 AM – 6:00 PM (GST)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#0C3332] text-white rounded-xl p-7 border border-[#D9BA6A]/40 space-y-3">
              <h4 className="font-serif text-lg font-bold text-white">
                Urgent or Off-Market Listing?
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                If you require private off-market placement or immediate asset disposal, connect directly with our advisory desk via WhatsApp.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/971585758023?text=Hello%20Ritora%20team%2C%20I%20have%20a%20property%20I%20would%20like%20to%20list%20or%20value."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold rounded-sm transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Message Valuation Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <CTASection
        eyebrow="COMMERCIAL CLARITY"
        title="Thinking of Transitioning Your Assets?"
        description="Book a confidential portfolio session to assess current secondary market liquidity and optimum exit windows across Dubai."
        primaryCtaText="Speak With an Advisor"
        primaryCtaLink="/contact"
      />
    </div>
  );
}


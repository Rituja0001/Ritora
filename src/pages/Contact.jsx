import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send,
  Clock,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * Contact Page - Ritora Luxe Real Estate LLC
 * Features a real, functional advisory contact form with:
 * - Name, Phone/WhatsApp, Email, Role dropdown, Budget in AED, Timeframe, Message
 * - Saves submissions locally into localStorage ('ritora_enquiries')
 * - Approved contact credentials (email: info@ritoraluxerealestate.ae, phone: +971 58 575 8023)
 * - Operating hours: Monday to Saturday: 9:00 AM – 6:00 PM (GST)
 */
export default function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Investor",
    budget: "",
    timeframe: "Immediate",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill message if subject or project was passed in URL query
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    const locationParam = searchParams.get("location");
    if (subjectParam) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like more information regarding: ${subjectParam}.`,
      }));
    } else if (locationParam) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in exploring opportunities in: ${locationParam}.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem("ritora_enquiries") || "[]");
      const submission = {
        ...formData,
        id: "ENQ-" + Date.now(),
        source: "Contact Page",
        submittedAt: new Date().toISOString(),
      };
      existing.unshift(submission);
      localStorage.setItem("ritora_enquiries", JSON.stringify(existing));
    } catch (err) {
      console.warn("Storage error:", err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      role: "Investor",
      budget: "",
      timeframe: "Immediate",
      message: "",
      consent: false,
    });
  };

  const whatsappDirectUrl = "https://wa.me/971585758023?text=Hello%20Ritora%20advisory%20team%2C%20I%20would%20like%20to%20discuss%20Dubai%20property%20opportunities.";

  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT ADVISORY</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Speak With an Advisor
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Whether you are an investor assessing off-plan allocations, a private buyer seeking a residence, or a developer exploring sales representation, our Managing Director and advisory team provide considered counsel.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Real Functional Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-10 border border-[#D9BA6A]/30 shadow-sm">
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C3332] mb-1">
                Advisory Consultation Request
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-light">
                Please provide your requirements below. An advisor will contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-[#D9BA6A]/50 rounded-lg text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || "Client"}</strong>. We have received your inquiry. A senior Ritora advisor will review your specifications and contact you shortly at{" "}
                  <strong>{formData.email}</strong> or via WhatsApp.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-[#0C3332] text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#154F4E] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Name */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Wright"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                  />
                </div>

                {/* 2. Phone/WhatsApp & 3. Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 4. Dropdown: "I am a..." */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      I am a...
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Buyer">Buyer</option>
                      <option value="Investor">Investor</option>
                      <option value="Developer">Developer</option>
                    </select>
                  </div>

                  {/* 5. Budget (in AED) */}
                  <div>
                    <label htmlFor="budget" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Budget (in AED)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. AED 3,000,000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  {/* 6. Timeframe */}
                  <div>
                    <label htmlFor="timeframe" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Prospecting">Prospecting</option>
                    </select>
                  </div>
                </div>

                {/* 7. Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Your Requirements & Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify preferred locations, project types, or developer questions..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all resize-y"
                  />
                </div>

                {/* 8. Privacy Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="page-contact-consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#0C3332] focus:ring-[#D9BA6A] cursor-pointer"
                  />
                  <label htmlFor="page-contact-consent" className="text-xs text-neutral-600 font-light leading-relaxed cursor-pointer select-none">
                    I consent to Ritora Luxe Real Estate collecting and processing my contact details in accordance with the{" "}
                    <Link to="/privacy-policy" className="text-[#0C3332] font-medium underline hover:text-[#B89645]">
                      Privacy Policy
                    </Link>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* 9. Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#0C3332] hover:bg-[#154F4E] text-white text-xs uppercase tracking-[0.18em] font-bold rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {submitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D9BA6A]" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & WhatsApp Channel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-xl p-7 sm:p-8 border border-[#D9BA6A]/30 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-1">
                  OFFICIAL COORDINATES
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Reach Out to Us
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                  Direct channels for private client advisory and developer relations.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100">
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href="tel:+971585758023"
                      className="font-medium text-sm text-[#0C3332] hover:text-[#B89645] transition-colors"
                    >
                      +971 58 575 8023
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Advisory Desk Email
                    </span>
                    <a
                      href="mailto:info@ritoraluxerealestate.ae"
                      className="font-medium text-sm text-[#0C3332] hover:text-[#B89645] transition-colors break-all"
                    >
                      info@ritoraluxerealestate.ae
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-medium text-neutral-700">
                      Monday to Saturday: 9:00 AM – 6:00 PM (GST)
                    </p>
                    <p className="text-xs text-neutral-500 font-light mt-0.5">
                      Private meetings in Dubai arranged upon appointment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="pt-4 border-t border-neutral-100">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Start Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Advisory Commitment Box */}
            <div className="bg-[#0C3332] text-white rounded-xl p-7 border border-[#D9BA6A]/40 space-y-3">
              <h4 className="font-serif text-lg font-bold text-white">
                Independent Perspective
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Ritora operates as an uncompromised boutique advisory. Our evaluations prioritize project fundamentals, developer pedigree, and realistic exit potential rather than high-volume sales targets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

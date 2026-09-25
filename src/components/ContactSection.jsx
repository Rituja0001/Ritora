import React, { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle2, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * ContactSection Component (Section 10)
 * Background: Light Cream (#FAF8F5)
 * Alternating rhythm: Sits between Dark Teal Testimonials and Deep Teal Footer.
 * Features:
 * - Real, functional consultation request form with required fields:
 *   Name, Phone/WhatsApp, Email, Role dropdown, Budget in AED, Timeframe dropdown, Message
 * - Submit state simulation with confirmation feedback
 * - Official coordinates with TODO for physical address
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Investor",
    budget: "",
    timeframe: "Immediate",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      // TODO: Connect to backend/email service (e.g., EmailJS, Formspree, or custom API) once ready
      console.log("Advisory Form Submission Received:", formData);
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
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#0C3332] relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89645] font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT ADVISORY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-snug">
            Speak With an Advisor
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light leading-relaxed">
            Whether you are assessing off-plan allocations, seeking a private residence, or exploring developer representation, our principals provide considered counsel.
          </p>
        </div>

        {/* Form and Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-[#D9BA6A]/30 shadow-sm">
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-1">
                Advisory Consultation Request
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-light">
                Please provide your requirements below. An advisor will contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-[#D9BA6A]/40 rounded-xl text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || "Client"}</strong>. We have received your inquiry. A senior Ritora advisor will review your specifications and contact you shortly at{" "}
                  <strong>{formData.email}</strong>.
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
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Name */}
                <div>
                  <label htmlFor="home-contact-name" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="home-contact-name"
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
                    <label htmlFor="home-contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="home-contact-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="home-contact-email" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="home-contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 4. Dropdown: "I am a...", 5. Budget, 6. Timeframe */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="home-contact-role" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      I am a...
                    </label>
                    <select
                      id="home-contact-role"
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

                  <div>
                    <label htmlFor="home-contact-budget" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Budget (in AED)
                    </label>
                    <input
                      type="text"
                      id="home-contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. AED 3,000,000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="home-contact-timeframe" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                      Timeframe
                    </label>
                    <select
                      id="home-contact-timeframe"
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
                  <label htmlFor="home-contact-message" className="block text-xs uppercase tracking-wider font-semibold text-[#0C3332] mb-1.5">
                    Your Requirements & Goals
                  </label>
                  <textarea
                    id="home-contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify target areas, project categories, or developer queries..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-neutral-300 rounded-md text-sm text-[#0C3332] focus:outline-none focus:border-[#D9BA6A] focus:bg-white transition-all resize-y"
                  />
                </div>

                {/* Submit button */}
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

          {/* Right Column: Direct Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#D9BA6A]/30 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-1">
                  OFFICIAL COORDINATES
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Reach Out to Us
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                  Direct channels for private client advisory and developer relations.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100">
                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href="#"
                      className="font-medium text-sm text-[#0C3332] hover:text-[#B89645] transition-colors"
                    >
                      +971 58 575 8023
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Advisory Desk Email
                    </span>
                    <a
                      href="#"
                      className="font-medium text-sm text-[#0C3332] hover:text-[#B89645] transition-colors break-all"
                    >
                      info@ritoraluxerealestate.ae
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                {/* // TODO: Add correct office address once provided by client */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#0C3332] flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#B89645]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-medium text-neutral-700">
                      Monday to Saturday: 9:00 AM – 7:00 PM (GST)
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
                  href="#"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Start WhatsApp Discussion</span>
                </a>
              </div>
            </div>

            {/* Advisory Note */}
            <div className="bg-[#0C3332] text-white rounded-2xl p-7 border border-[#D9BA6A]/40 space-y-2.5">
              <h4 className="font-serif text-lg font-bold text-white">
                Independent Advisory Guarantee
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Ritora operates as an uncompromised boutique advisory. Our evaluations prioritize project fundamentals, developer pedigree, and realistic exit potential rather than high-volume sales targets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

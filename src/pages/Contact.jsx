import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Shield,
  MessageSquare,
  Sparkles,
} from "lucide-react";

/**
 * Contact Page - Ritora Dubai
 * Includes VIP inquiry submission form, office coordinates, embedded Google Maps,
 * and high-net-worth investor FAQ accordion.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentRange: "AED 30M – AED 60M",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        investmentRange: "AED 30M – AED 60M",
        message: "",
      });
    }, 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the tax implications of buying property in Dubai?",
      answer:
        "Dubai has 0% property tax, 0% capital gains tax, and 0% personal income tax on real estate yields and dispositions. The primary governmental cost is a one-time 4% transfer fee payable to the Dubai Land Department (DLD).",
    },
    {
      question: "How does the UAE 10-Year Golden Visa work for property owners?",
      answer:
        "Purchasing property in the UAE with a minimum investment value of AED 2,000,000 (approx. $545,000 USD) qualifies the investor and their immediate family for a renewable 10-Year Golden Residency Visa, without requiring a local corporate sponsor.",
    },
    {
      question: "Can foreign nationals purchase freehold property in Dubai?",
      answer:
        "Yes. Foreign nationals and international corporations can purchase 100% freehold property in designated prime zones including Palm Jumeirah, Downtown Dubai, Emirates Hills, Dubai Marina, and Dubai Hills Estate.",
    },
    {
      question: "How does Ritora protect client confidentiality during high-value acquisitions?",
      answer:
        "All transactions and inquiries are safeguarded under strict non-disclosure agreements. We routinely execute acquisitions via offshore special purpose vehicles (SPVs), private family office trusts, and private nominee representations.",
    },
  ];

  return (
    <div className="bg-ritora-black text-white min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-ritora-gold text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Consultations</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Connect with Ritora Dubai
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
            Contact our senior partners for confidential property acquisitions, private showings, or discreet estate sales.
          </p>
        </div>

        {/* Top Grid: Contact Form & Office Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-ritora-dark border border-ritora-charcoal p-8 sm:p-10 rounded-sm shadow-xl">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-ritora-gold font-semibold">
                Direct VIP Advisory Channel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                Send a Confidential Inquiry
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 bg-ritora-gold/10 border border-ritora-gold/40 text-ritora-gold text-center space-y-3 rounded-sm">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h3 className="font-serif text-xl text-white">Message Transmitted</h3>
                <p className="text-sm text-neutral-300 font-light max-w-md mx-auto">
                  Thank you. Your inquiry has been routed to our Managing Partner. You will receive a discreet response within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alistair Vance"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Phone Number (with country code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+971 50 000 0000"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Target Investment Range
                    </label>
                    <select
                      value={formData.investmentRange}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentRange: e.target.value,
                        })
                      }
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3 py-3 text-sm text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    >
                      <option value="Under AED 30M">Under AED 30M ($8.1M USD)</option>
                      <option value="AED 30M – AED 60M">
                        AED 30M – AED 60M ($8.1M – $16.3M USD)
                      </option>
                      <option value="AED 60M – AED 100M">
                        AED 60M – AED 100M ($16.3M – $27.2M USD)
                      </option>
                      <option value="AED 100M+ (Sovereign Portfolio)">
                        AED 100M+ (Sovereign Portfolio)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                    Message / Specific Property Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide desired locations, property type, or specific confidentiality requirements..."
                    className="w-full bg-ritora-black/80 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Shield className="w-4 h-4 text-ritora-gold flex-shrink-0" />
                  <span>
                    Your data is strictly guarded under UAE privacy and international NDA standards.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-gold-glow transition-all rounded-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Confidential Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Office Coordinates & Direct Lines (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-ritora-dark border border-ritora-charcoal p-8 rounded-sm space-y-6">
              <h3 className="font-serif text-2xl text-white">
                Dubai Headquarters
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                Conveniently located in Downtown Dubai opposite the Dubai Opera and Burj Khalifa.
              </p>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ritora-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">
                      Boulevard Plaza Tower 1
                    </span>
                    <span className="text-neutral-400 text-xs">
                      Level 42, Sheikh Mohammed Bin Rashid Boulevard, Downtown Dubai, UAE
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-ritora-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">
                      VIP Advisory Desk
                    </span>
                    <a
                      href="tel:+97148129000"
                      className="text-neutral-400 text-xs hover:text-ritora-gold transition-colors"
                    >
                      +971 4 812 9000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ritora-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">
                      Private Client Registry
                    </span>
                    <a
                      href="mailto:vip@ritorarealestate.com"
                      className="text-neutral-400 text-xs hover:text-ritora-gold transition-colors"
                    >
                      vip@ritorarealestate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-ritora-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">
                      Advisory Hours (GST)
                    </span>
                    <span className="text-neutral-400 text-xs">
                      Monday to Saturday: 09:00 – 20:00 GST
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/971508924110"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 border border-ritora-gold/60 text-ritora-gold hover:bg-ritora-gold hover:text-ritora-black text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors rounded-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge Line</span>
                </a>
              </div>
            </div>

            {/* RERA Registration Card */}
            <div className="bg-ritora-black border border-ritora-charcoal p-6 rounded-sm space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ritora-gold font-bold">
                Government Accreditation
              </span>
              <div className="text-sm font-serif text-white">
                Dubai Land Department (DLD) & RERA
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Ritora Real Estate LLC is authorized and regulated by the Real Estate Regulatory Agency under License No. 784-2918. All escrow client accounts are handled via Emirates NBD.
              </p>
            </div>
          </div>
        </div>

        {/* 2. GOOGLE MAP EMBED */}
        <div className="my-16 bg-ritora-dark border border-ritora-charcoal rounded-sm overflow-hidden">
          <div className="p-4 bg-ritora-charcoal/50 border-b border-ritora-charcoal flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-4 h-4 text-ritora-gold" />
              <span>Boulevard Plaza Tower 1 — Downtown Dubai</span>
            </div>
            <a
              href="https://maps.google.com/?q=Boulevard+Plaza+Tower+1+Downtown+Dubai"
              target="_blank"
              rel="noreferrer"
              className="text-ritora-gold hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              title="Ritora Dubai Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786524388487!2d55.2718!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0x6a058444a956be87!2sBoulevard%20Plaza%20Tower%201!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* 3. INVESTOR FAQ ACCORDION */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-ritora-gold font-semibold block mb-1">
              Advisory Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-ritora-dark border border-ritora-charcoal rounded-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-ritora-gold transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-ritora-gold flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-300 font-light leading-relaxed border-t border-ritora-charcoal/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


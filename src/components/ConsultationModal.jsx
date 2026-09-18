import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Shield } from "lucide-react";

/**
 * VIP Consultation Booking Modal
 * Provides a discreet channel for high-net-worth clients to request private showings and advisory.
 */
export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyInterest: "Villas (Palm Jumeirah / Emirates Hills)",
    meetingType: "Private Dubai Office Consultation",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-ritora-dark border border-ritora-gold/40 shadow-2xl p-6 sm:p-8 rounded-sm text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-ritora-gold transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-ritora-gold/10 border border-ritora-gold flex items-center justify-center text-ritora-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-white">
              Consultation Scheduled
            </h3>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              Our Senior Private Client Advisor will contact you confidentially within 2 hours to confirm details.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-ritora-gold text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ritora Private Client Advisory</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Request a Private Consultation
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Confidential advisory for off-market acquisitions and bespoke Dubai estates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="e.g. Lord Alistair Vance"
                  className="w-full bg-ritora-black/70 border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@domain.com"
                    className="w-full bg-ritora-black/70 border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+971 50 000 0000"
                    className="w-full bg-ritora-black/70 border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Portfolio Focus
                  </label>
                  <select
                    value={formData.propertyInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyInterest: e.target.value })
                    }
                    className="w-full bg-ritora-black/70 border border-neutral-700 px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                  >
                    <option value="Villas (Palm Jumeirah / Emirates Hills)">
                      Villas (Palm Jumeirah / Emirates Hills)
                    </option>
                    <option value="Sky Penthouses (Downtown / Marina)">
                      Sky Penthouses (Downtown / Marina)
                    </option>
                    <option value="Off-Market Portfolios & Land">
                      Off-Market Portfolios & Land
                    </option>
                    <option value="Dubai Golden Visa Advisory">
                      Dubai Golden Visa Advisory
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Preferred Format
                  </label>
                  <select
                    value={formData.meetingType}
                    onChange={(e) =>
                      setFormData({ ...formData, meetingType: e.target.value })
                    }
                    className="w-full bg-ritora-black/70 border border-neutral-700 px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                  >
                    <option value="Private Dubai Office Consultation">
                      Private Dubai Office (Downtown)
                    </option>
                    <option value="Direct On-Site Property Viewing">
                      Direct On-Site Property Viewing
                    </option>
                    <option value="Encrypted Video Conference">
                      Encrypted Video Conference
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                  Confidential Instructions / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Specific requirements, target investment budget, or confidentiality guidelines..."
                  className="w-full bg-ritora-black/70 border border-neutral-700 px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                />
              </div>

              <div className="flex items-center gap-2 text-neutral-400 text-[11px] pt-1">
                <Shield className="w-3.5 h-3.5 text-ritora-gold" />
                <span>
                  Strict non-disclosure agreements (NDAs) honored on all client communications.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-md hover:shadow-gold-glow mt-2"
              >
                Confirm Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}


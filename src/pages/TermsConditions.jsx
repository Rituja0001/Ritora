import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, AlertCircle } from "lucide-react";

/**
 * TermsConditions Page - Ritora Luxe Real Estate LLC
 * Legal terms and website conditions of use.
 */
export default function TermsConditions() {
  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen">
      {/* Header */}
      <section className="bg-[#0C3332] text-white pt-28 pb-14 sm:pt-36 sm:pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D9BA6A] hover:text-[#E5CE8F] transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm mt-2 font-light">
            Effective Date: January 1, 2025 &bull; Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 sm:p-12 border border-[#D9BA6A]/30 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-neutral-700">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations of the Emirate of Dubai and the United Arab Emirates. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              2. Nature of Real Estate Information
            </h2>
            <p>
              The materials, project descriptions, pricing estimates, and developer representations appearing on this website are provided for informational and preliminary guidance purposes only. They do not constitute an official contractual offer, financial advice, or an investment guarantee. All property transactions in Dubai are subject to formal contract documentation (such as DLD Unified Contracts Form F, Form A, and developer Sale and Purchase Agreements).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              3. Off-Plan & Developer Disclaimers
            </h2>
            <p>
              Project renders, architectural illustrations, unit layouts, completion dates, and amenities are subject to modification by developers, master developers, and regulatory authorities including the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA). Ritora Luxe Real Estate LLC acts as an independent advisory firm and does not warrant the performance or handover timelines of third-party property developers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All trademarks, logos, texts, images, and software displayed on this site are the property of Ritora Luxe Real Estate LLC or their respective developer copyright holders. Unauthorized reproduction, modification, or distribution is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Emirate of Dubai and the applicable Federal Laws of the United Arab Emirates. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the Courts of Dubai.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              6. Contact Information
            </h2>
            <div className="mt-3 p-4 bg-[#FAF8F5] rounded-lg border border-neutral-200 text-xs sm:text-sm space-y-1">
              <p><strong>Entity:</strong> Ritora Luxe Real Estate LLC</p>
              <p><strong>Email:</strong> <a href="mailto:info@ritoraluxerealestate.ae" className="text-[#0C3332] font-semibold underline">info@ritoraluxerealestate.ae</a></p>
              <p><strong>Phone:</strong> <a href="tel:+971585758023" className="text-[#0C3332] font-semibold">+971 58 575 8023</a></p>
              <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from "lucide-react";

/**
 * PrivacyPolicy Page - Ritora Luxe Real Estate LLC
 * Compliant, professional privacy statement under UAE Personal Data Protection Law (Federal Decree Law No. 45 of 2021).
 */
export default function PrivacyPolicy() {
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
            Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how <strong>Ritora Luxe Real Estate LLC</strong> (&ldquo;Ritora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, protects, and discloses personal information obtained through our website (
              <a href="https://ritoraluxerealestate.ae" className="text-[#0C3332] underline hover:text-[#B89645]">
                ritoraluxerealestate.ae
              </a>
              ), advisory consultation forms, direct communications, and client engagements in the United Arab Emirates.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">We collect information that you voluntarily provide to us when requesting advisory services, submitting properties, or contacting our team:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Contact Identifiers:</strong> Name, email address, telephone/WhatsApp number.</li>
              <li><strong>Advisory Preferences:</strong> Investment budgets, property typology preferences, target timeframes, and acquisition criteria.</li>
              <li><strong>Property Owner Submissions:</strong> Building details, community, unit specifications, expected pricing, and tenancy status.</li>
              <li><strong>Technical Metadata:</strong> Browser type, operating system, IP address, and anonymized browsing behavior to optimize website performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              3. Legal Basis and Purpose of Processing
            </h2>
            <p className="mb-2">We process personal data in compliance with the UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection (PDPL) for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>To evaluate real estate consultation inquiries and deliver tailored advisory recommendations.</li>
              <li>To facilitate owner listings and coordinate verified viewings with qualified purchasers or tenants.</li>
              <li>To transmit curated property briefings, market research, and developer launch notices (with express consent).</li>
              <li>To fulfill regulatory obligations under the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              4. Data Sharing & Third Parties
            </h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share information only with licensed partner developers, escrow escrow agents, or legal counsel strictly when authorized by you to advance a specific property transaction.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              5. Data Security & Storage
            </h2>
            <p>
              Ritora employs industry-standard administrative, physical, and technical safeguards to preserve the confidentiality and integrity of your information. While no electronic transmission is entirely immune, we continually audit our practices against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              6. Your Rights
            </h2>
            <p className="mb-2">Under applicable UAE laws, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or rectification of incomplete or inaccurate records.</li>
              <li>Request deletion of your data when it is no longer required for regulatory compliance.</li>
              <li>Opt-out of market briefings at any time via the unsubscribe mechanism or direct request.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
              7. Contact Our Privacy Desk
            </h2>
            <p className="text-sm">
              For any privacy-related questions, corrections, or data removal requests, please contact our compliance desk:
            </p>
            <div className="mt-3 p-4 bg-[#FAF8F5] rounded-lg border border-neutral-200 text-xs sm:text-sm space-y-1">
              <p><strong>Entity:</strong> Ritora Luxe Real Estate LLC</p>
              <p><strong>Email:</strong> <a href="mailto:info@ritoraluxerealestate.ae" className="text-[#0C3332] font-semibold underline">info@ritoraluxerealestate.ae</a></p>
              <p><strong>Phone:</strong> <a href="tel:+971585758023" className="text-[#0C3332] font-semibold">+971 58 575 8023</a></p>
              <p><strong>Jurisdiction:</strong> Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  TrendingUp, 
  Briefcase, 
  FileCheck2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import CTASection from "../components/CTASection";

/**
 * Services Page - Ritora Luxe Real Estate LLC
 * Comprehensive breakdown of boutique advisory capabilities:
 * 1. Private Client Advisory (Acquisition & Portfolio Management)
 * 2. Off-Plan Allocation & Strategic Entry
 * 3. Developer Representation & Sales Channel Mandates
 * 4. Golden Visa & Relocation Structuring
 * 5. Asset Exit Strategy & Secondary Resale
 */
export default function Services() {
  const servicesList = [
    {
      icon: Building2,
      title: "Private Client Advisory",
      badge: "Investors & End-Users",
      description:
        "Bespoke representation for discerning individuals acquiring luxury residences and prime investment holdings across Dubai. We provide confidential asset sourcing, legal document verification, and independent pricing valuation.",
      deliverables: [
        "Confidential off-market deal access",
        "Comparable transaction market analysis",
        "Snagging and title deed onboarding",
      ],
    },
    {
      icon: TrendingUp,
      title: "Off-Plan Allocations & Launch Access",
      badge: "High Growth Corridors",
      description:
        "Direct access to top-tier developer releases before broad market launches. We analyze construction escrow compliance, developer delivery records, and milestone-linked payment schedules.",
      deliverables: [
        "VIP first-tier pricing allocation",
        "Payment plan viability stress-testing",
        "Capital escalation modeling",
      ],
    },
    {
      icon: Briefcase,
      title: "Developer Representation & Sales Strategy",
      badge: "B2B Developer Mandates",
      description:
        "End-to-end commercial advisory for regional and institutional property developers. From product conceptualization and unit phasing to broker network activation and overseas roadshows.",
      deliverables: [
        "Inventory phasing & GDV optimization",
        "Broker channel activation & briefings",
        "International roadshows & private previews",
      ],
    },
    {
      icon: ShieldCheck,
      title: "UAE Golden Visa Advisory",
      badge: "Residency & Legal Structuring",
      description:
        "Comprehensive navigation of the UAE 10-Year Golden Visa framework for qualifying property investors purchasing real estate valued at AED 2,000,000 and above, including family sponsorship guidance.",
      deliverables: [
        "DLD title deed qualification review",
        "Government authority liaison",
        "Family sponsorship onboarding",
      ],
    },
    {
      icon: FileCheck2,
      title: "Portfolio Management & Exit Modeling",
      badge: "Capital Preservation",
      description:
        "Active monitoring of ongoing off-plan installments, secondary market resale liquidity, pre-completion assignment clauses, and tenancy optimization post-handover.",
      deliverables: [
        "Secondary assignment execution",
        "Tenancy leasing strategy",
        "Multi-asset rebalancing advisory",
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen">
      {/* 1. Hero Banner */}
      <section className="bg-[#0C3332] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BESPOKE ADVISORY CAPABILITIES</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Real Estate Advisory Grounded in Insight
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Ritora Luxe Real Estate LLC provides independent, strategic representation across acquisitions, developer sales partnerships, and residency onboarding throughout the Emirate of Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
            WHAT WE DO
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
            Our Core Practice Areas
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light">
            Every client relationship is managed with senior-level attention and uncompromised commercial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#B89645] font-bold block mb-1">
                    {service.badge}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89645] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* 6th Interactive Consultation Card */}
          <div className="bg-[#0C3332] text-white rounded-xl p-8 border border-[#D9BA6A]/40 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#154F4E] text-[#D9BA6A] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#D9BA6A] font-bold block mb-1">
                Direct Dialogue
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                Custom Advisory Mandate
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Have a specialized acquisition, developer assignment, or cross-border transaction in mind? Our Managing Director and advisory team are available for confidential consultations.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#D9BA6A]/20">
              <Link
                to="/contact"
                className="w-full py-3 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/971585758023?text=Hello%20Ritora%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20advisory%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <CTASection
        eyebrow="TAILORED ENGAGEMENT"
        title="Discuss Your Objectives With an Advisor"
        description="Whether evaluating an upcoming off-plan launch or structuring an exit from an existing asset, our team provides considered counsel."
        primaryCtaText="Speak With an Advisor"
        primaryCtaLink="/contact"
      />
    </div>
  );
}


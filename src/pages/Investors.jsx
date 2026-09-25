import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Coins,
  Home,
  PieChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  BarChart3,
  FileCheck2,
} from "lucide-react";
import CTASection from "../components/CTASection";

/**
 * Investors Page - Ritora Dubai Luxury Real Estate
 * Comprehensive advisory breakdown for private buyers and institutional capital:
 * 1. Strategic Pillars:
 *    - Capital Appreciation
 *    - Rental Income
 *    - End-Use Purchases
 *    - Portfolio Diversification
 * 2. Due Diligence Methodology
 * 3. Clear CTA: "Request a Consultation"
 */
export default function Investors() {
  const investmentPillars = [
    {
      icon: TrendingUp,
      title: "Capital Appreciation",
      tagline: "Strategic Entry in High-Growth Corridors",
      description:
        "Targeting early-stage off-plan launches in infrastructure-backed growth hubs (such as Dubai South and Palm Jebel Ali) where capital values expand significantly as master-community milestones are achieved.",
      metrics: ["Early Phase Entry Pricing", "Infrastructure Catalysts", "Phased Value Milestones"],
    },
    {
      icon: Coins,
      title: "Rental Income & Yield",
      tagline: "Sustainable Cash Flow in Liquid Submarkets",
      description:
        "Curating properties optimized for high tenancy demand in central business and leisure districts. We evaluate net yields post-service charges, tenant turnover dynamics, and long-term liquidity.",
      metrics: ["High Occupancy Corridors", "Net Yield Stress Testing", "Strong Resale Liquidity"],
    },
    {
      icon: Home,
      title: "End-Use Purchases",
      tagline: "Prime Living with Lasting Value Preservation",
      description:
        "For clients purchasing primary residences or vacation homes, our advisory focuses on build quality, architectural integrity, community amenities, and prestigious school districts.",
      metrics: ["Developer Construction Pedigree", "Master Community Governance", "Lifestyle Amenities"],
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      tagline: "Balanced Multi-Asset Exposure",
      description:
        "Structuring multi-unit allocations across varied developers, delivery timelines, and property types to mitigate risk and optimize overall risk-adjusted returns.",
      metrics: ["Cross-Developer Spread", "Timeline Staggering", "Mixed Residential Asset Classes"],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen pt-24 sm:pt-28">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INVESTMENT OPPORTUNITIES</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Disciplined Capital Deployment
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              We provide independent, data-backed advisory to ensure your Dubai property acquisitions align with your specific financial goals, risk appetite, and investment horizons.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Four Strategic Investment Pillars */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
            CORE OBJECTIVES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
            How We Structure Investor Portfolios
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light">
            Every property recommended by Ritora is vetted against clear commercial criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {investmentPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 sm:p-10 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-[#B89645] font-bold block mb-1">
                    {pillar.tagline}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Key Evaluation Factors:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#FAF8F5] text-neutral-700 text-xs rounded-md border border-neutral-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Advisory Due Diligence Framework */}
      <section className="py-16 sm:py-20 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block">
                OUR METHODOLOGY
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
                Advice Before The Transaction
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
                Too many property purchases are driven by marketing hype. Ritora operates as an objective advisor, vetting every developer, location, payment plan, and resale condition before you commit.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C3332] text-white hover:bg-[#154F4E] text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-neutral-200">
                <FileCheck2 className="w-6 h-6 text-[#0C3332] mb-3" />
                <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1.5">
                  Developer Due Diligence
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                  Financial health, historical escrow compliance, build quality, and delivery track records.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-neutral-200">
                <BarChart3 className="w-6 h-6 text-[#0C3332] mb-3" />
                <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1.5">
                  Payment Plan Viability
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                  Structuring cash flows during construction and stress-testing post-handover installment obligations.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-neutral-200">
                <ShieldAlert className="w-6 h-6 text-[#0C3332] mb-3" />
                <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1.5">
                  Exit Strategy Modeling
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                  Evaluating pre-completion assignment conditions, DLD transfer fees, and expected secondary market liquidity.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#FAF8F5] border border-neutral-200">
                <CheckCircle2 className="w-6 h-6 text-[#0C3332] mb-3" />
                <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1.5">
                  Handover & Tenancy Care
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                  Ongoing guidance covering unit snagging, property management onboarding, and tenant placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <CTASection
        eyebrow="PORTFOLIO CONSULTATION"
        title="Schedule an Investor Discussion"
        description="Speak with our principals to review upcoming off-plan launches, pricing tiers, and tailored allocation strategies."
        primaryCtaText="Request a Consultation"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

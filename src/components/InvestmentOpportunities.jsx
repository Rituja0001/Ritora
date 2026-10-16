import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Coins, Home, PieChart, Sparkles, ArrowRight } from "lucide-react";

/**
 * InvestmentOpportunities Component (Section 5)
 * Background: Dark Teal (#082221)
 * Alternating rhythm: Sits between Light Cream Why Ritora and Light Cream Developer Partnerships.
 * Features:
 * - 4 Strategic Investment Pillars (Capital Appreciation, Rental Income, End-Use Purchases, Portfolio Diversification)
 * - Streamlined, crisp copy (Requirement 13)
 * - Clear CTA linking to /contact and /investors
 */
export default function InvestmentOpportunities() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Capital Appreciation",
      tagline: "High-Growth Corridors",
      description:
        "Targeting early-phase off-plan launches in infrastructure-backed corridors where values expand as master community milestones deliver.",
    },
    {
      icon: Coins,
      title: "Rental Yield Strategy",
      tagline: "Sustainable Cash Flow",
      description:
        "Curating residences in liquid business and leisure districts, stress-testing net yields after service charges and occupancy assumptions.",
    },
    {
      icon: Home,
      title: "End-Use Living",
      tagline: "Prime Preservation",
      description:
        "Guiding primary residence and vacation home buyers with focused analysis on build pedigree, master community amenities, and family convenience.",
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      tagline: "Multi-Asset Exposure",
      description:
        "Structuring multi-unit allocations across varied developers, delivery timelines, and property categories to balance risk and liquidity.",
    },
  ];

  return (
    <section id="investors" className="py-16 sm:py-20 lg:py-24 bg-[#082221] text-white relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INVESTMENT OPPORTUNITIES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
              Disciplined Capital Deployment
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-2 font-light leading-relaxed">
              We provide independent, data-backed advisory to ensure your Dubai property acquisitions align with your specific financial goals and risk appetite.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-[0.16em] font-bold rounded-sm shadow-sm transition-all duration-300 whitespace-nowrap self-start md:self-end"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Pillars 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#0C3332]/80 rounded-2xl p-7 sm:p-8 lg:p-9 border border-[#D9BA6A]/25 hover:border-[#D9BA6A]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#154F4E]/60 border border-[#D9BA6A]/30 flex items-center justify-center text-[#D9BA6A] mb-5">
                    <Icon className="w-6 h-6 text-[#D9BA6A]" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-[#D9BA6A] font-semibold block mb-1">
                    {item.tagline}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9BA6A]/15 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-light">
                    Objective 0{index + 1}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-[#D9BA6A] hover:text-[#E5CE8F] font-semibold uppercase tracking-wider text-[11px] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Briefcase, Users2, Compass, Megaphone, TrendingUp, Sparkles, ArrowRight, Award } from "lucide-react";

/**
 * DeveloperPartnerships Component (Section 6)
 * Background: Light Cream (#FAF8F5)
 * Alternating rhythm: Sits between Dark Teal Investment Opportunities and Dark Teal Locations.
 * Features:
 * - 5 Strategic Capabilities: Sales strategy, Broker activation, Market positioning, Investor outreach, Lead generation and campaign execution
 * - CTA: "Partner With Ritora" pointing to href="#" per linking requirement
 */
export default function DeveloperPartnerships() {
  const capabilities = [
    {
      icon: Briefcase,
      title: "Sales Strategy & Inventory Phasing",
      description:
        "Developing structured release phases, unit mix optimization, and pricing escalation schedules that protect project GDV while driving continuous sales velocity.",
    },
    {
      icon: Users2,
      title: "Broker Activation & Channel Management",
      description:
        "Mobilizing top-tier regional and international agency networks through structured briefings, launch roadshows, and transparent incentive alignment.",
    },
    {
      icon: Compass,
      title: "Market Positioning & Value Proposition",
      description:
        "Articulating unique architectural and lifestyle differentiation in a competitive landscape, targeting verified buyer segments with tailored messaging.",
    },
    {
      icon: Megaphone,
      title: "Investor Outreach & Private Previews",
      description:
        "Direct access to private capital, family offices, and repeat individual investors through curated closed-door preview events and roadshows.",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation & Campaign Execution",
      description:
        "Data-driven digital acquisition pipelines and CRM conversion funnels, ensuring qualified buyer appointments directly with your sales gallery.",
    },
  ];

  return (
    <section id="developers" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#0C3332] relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89645] font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEVELOPER PARTNERSHIPS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C3332] tracking-tight leading-snug">
              A Sales Partner That Understands the Product
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light leading-relaxed">
              We partner with developers to shape go-to-market strategy, activate broker networks, and drive investor engagement — starting with a clear understanding of the product and building a considered path to sale.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0C3332] hover:bg-[#154F4E] text-white text-xs uppercase tracking-[0.16em] font-bold rounded-sm shadow-sm transition-all duration-300 whitespace-nowrap self-start md:self-end"
          >
            <span>Partner With Ritora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Capabilities Grid + 6th Mandates Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#B89645] font-bold mb-1">
                    Capability 0{index + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0C3332] mb-3 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Collaborative Mandates */}
          <div className="bg-[#0C3332] text-white rounded-2xl p-7 sm:p-8 border border-[#D9BA6A]/40 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#154F4E] text-[#D9BA6A] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D9BA6A] font-bold mb-1">
                Collaborative Mandates
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                Exclusive & Co-Agency Representation
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Whether launching a boutique residential collection or a landmark tower, we work alongside developer teams to ensure rapid sales absorption.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="w-full py-3 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Partner With Ritora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

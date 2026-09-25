import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users2,
  Compass,
  Megaphone,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
} from "lucide-react";
import CTASection from "../components/CTASection";

/**
 * Developers Page - Ritora Dubai Luxury Real Estate
 * Dedicated B2B Developer Partnerships page outlining:
 * 1. Strategic Capabilities:
 *    - Sales Strategy
 *    - Broker Activation
 *    - Market Positioning
 *    - Investor Outreach
 *    - Lead Generation & Campaign Execution
 * 2. Developer Partnership Model
 * 3. Clear CTA: "Partner With Ritora"
 */
export default function Developers() {
  const capabilities = [
    {
      icon: Briefcase,
      title: "Sales Strategy & Inventory Phasing",
      description:
        "Developing structured release phases, unit mix optimization, payment plan architectures, and pricing escalations that protect overall gross development value (GDV) while driving consistent sales momentum.",
    },
    {
      icon: Users2,
      title: "Broker Activation & Channel Management",
      description:
        "Activating top-tier regional and international real estate broker networks. We organize structured roadshows, agent briefing sessions, and incentive alignment to drive broker velocity.",
    },
    {
      icon: Compass,
      title: "Market Positioning & Value Proposition",
      description:
        "Clarifying your project's unique architectural and lifestyle differentiation in a crowded market. We identify exact buyer personas and craft compelling commercial rationales for end-users and investors.",
    },
    {
      icon: Megaphone,
      title: "Investor Outreach & Private Roadshows",
      description:
        "Direct access to private capital, family offices, and repeat individual investors. We curate closed-door presentations, private VIP preview evenings, and overseas capital missions.",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation & Campaign Execution",
      description:
        "End-to-end performance marketing strategy, digital lead generation, qualification pipelines, and CRM conversion tracking ensuring qualified buyer appointments for the sales gallery.",
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
              <span>DEVELOPER PARTNERSHIPS</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              A Sales Partner That Understands the Product
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              We partner with developers to shape go-to-market strategy, activate broker networks, and drive investor engagement — starting with a clear understanding of the product and the buyer, and building a considered path to sale.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Five Strategic Capabilities Grid */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
            CORE CAPABILITIES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
            How Ritora Delivers for Developers
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light">
            Comprehensive commercial advisory from pre-launch planning to final sell-out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-7 sm:p-8 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center mb-5">
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

          {/* 6th Card: Direct Partnership Callout */}
          <div className="bg-[#0C3332] text-white rounded-xl p-7 sm:p-8 border border-[#D9BA6A]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#154F4E] text-[#D9BA6A] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D9BA6A] font-bold mb-1">
                Collaborative Mandates
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                Partner With Ritora
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Whether launching a boutique residential collection or a landmark tower, we work alongside your in-house teams to deliver targeted sales results.
              </p>
            </div>

            <div>
              <Link
                to="/contact"
                className="w-full py-3 bg-[#D9BA6A] hover:bg-[#E5CE8F] text-[#0C3332] text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Partner With Ritora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Methodology & Collaborative Process */}
      <section className="py-16 sm:py-20 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block">
                PARTNERSHIP PROCESS
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
                From Product Definition to Sell-Out
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
                We believe the most successful developer sales results occur when advisory begins early. By providing feedback on unit layouts, pricing brackets, and target demographics, we help ensure rapid sales absorption from day one.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C3332] text-white hover:bg-[#154F4E] text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
                >
                  <span>Schedule Developer Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0C3332] text-[#D9BA6A] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1">
                    Commercial & Product Review
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light">
                    In-depth market positioning review, competitor benchmarking, and pricing recommendation.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0C3332] text-[#D9BA6A] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1">
                    Sales Collateral & Launch Staging
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light">
                    Structuring broker materials, digital presentation assets, and VIP private previews.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0C3332] text-[#D9BA6A] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  3
                </span>
                <div>
                  <h4 className="font-serif font-bold text-[#0C3332] text-base mb-1">
                    Active Channel Execution
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light">
                    Coordinated outreach across international buyers, agency roadshows, and registered investor channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <CTASection
        eyebrow="DEVELOPER ADVISORY MANDATES"
        title="Ready to Scale Your Project Sales?"
        description="Connect with Ritora's executive leadership to discuss upcoming project launches, exclusive representation mandates, or channel sales activation."
        primaryCtaText="Partner With Ritora"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

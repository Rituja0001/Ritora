import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Handshake,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users2,
} from "lucide-react";
import CTASection from "../components/CTASection";

/**
 * About Page - Ritora Dubai Luxury Real Estate
 * Comprehensive multi-section page featuring:
 * 1. Brand Narrative & Founding Philosophy
 * 2. Dual Focus: Investor Focus & Developer Focus
 * 3. Advisory Standards & Methodology
 * 4. Leadership Section:
 *    - Ritish Arora — Founder & CEO
 *    - Dhwani Arora — Co-Founder & COO
 *    (Bios pending client input, marked with TODOs)
 * 5. Call to Action
 */
export default function About() {
  const leadershipProfiles = [
    {
      name: "Ritish Arora",
      title: "Founder & CEO",
      credentials: "14+ Years Real Estate | 11 Years Dubai Market",
      // TODO: Bio to be provided by client
      bio: "Founding leader of Ritora with over a decade of direct transactional leadership in Dubai's real estate sector. Specializing in high-value portfolio advisory, off-plan acquisitions, and strategic developer sales alignment.",
      initials: "RA",
    },
    {
      name: "Dhwani Arora",
      title: "Co-Founder & COO",
      credentials: "Strategic Operations & Client Advisory",
      // TODO: Bio to be provided by client
      bio: "Overseeing Ritora's operational excellence, client relationship management, and transaction execution. Dedicated to delivering seamless, transparent advisory experiences for international investors and corporate partners.",
      initials: "DA",
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
              <span>ABOUT RITORA</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
              Boutique by Design. <br />
              <span className="text-gold-gradient font-normal">Experienced by Foundation.</span>
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Ritora Luxe Real Estate is a boutique advisory and brokerage built on independent analysis, personalized client attention, and seasoned commercial execution across Dubai's most vital real estate corridors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Founding Principles & Story */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block">
              OUR POSITIONING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C3332] tracking-tight leading-snug">
              Moving Beyond Transactional Brokerage
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              Dubai's property market is one of the world's most dynamic investment landscapes. Navigating it effectively requires more than a listing portal—it requires seasoned perspective, unvarnished market feedback, and a thorough understanding of developer capability.
            </p>
            <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              Ritora was established to bridge the gap between individual capital and master developers. We prioritize long-term client alignment over high-volume transactional turnover, offering clear, data-informed counsel before any transaction is executed.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-xl border border-[#D9BA6A]/30 shadow-sm space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332]">
              The Ritora Advisory Benchmark
            </h3>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B89645] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Market Due Diligence:</strong> Rigorous evaluation of construction quality, master plan viability, and handover schedules.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B89645] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Realistic Investment Projections:</strong> Frank modeling of rental yields, capital growth, and exit liquidity rather than inflated sales claims.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B89645] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Principal Access:</strong> Deal directly with seasoned real estate advisors throughout your inquiry and acquisition journey.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Dual Advisory Focus (Investor Focus & Developer Focus) */}
      <section className="py-16 sm:py-20 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
              DUAL CAPABILITY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
              Investor Focus & Developer Focus
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light">
              Providing distinct, high-value advisory for both private capital and property developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Investor Focus */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#FAF8F5] border border-[#D9BA6A]/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-[#B89645] font-bold">
                  FOR PRIVATE BUYERS & INVESTORS
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Investor Focus: Advice Before the Transaction
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed font-light">
                  A property should fit your objective, time horizon, and appetite for risk. Ritora helps investors assess the developer, location, pricing, payment structure, and exit potential before moving forward.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <Link
                  to="/investors"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0C3332] hover:text-[#B89645] transition-colors"
                >
                  <span>Explore Investor Strategies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Developer Focus */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#FAF8F5] border border-[#D9BA6A]/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0C3332] text-[#D9BA6A] flex items-center justify-center">
                  <Handshake className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-[#B89645] font-bold">
                  FOR MASTER & BOUTIQUE DEVELOPERS
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C3332]">
                  Developer Focus: Considered Route to Market
                </h3>
                {/* Rewritten developer paragraph as requested */}
                <p className="text-neutral-700 text-sm leading-relaxed font-light">
                  We partner with developers to shape go-to-market strategy, activate broker networks, and drive investor engagement — starting with a clear understanding of the product and the buyer, and building a considered path to sale.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <Link
                  to="/developers"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0C3332] hover:text-[#B89645] transition-colors"
                >
                  <span>Explore Developer Partnerships</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89645] font-bold block mb-2">
            EXPERIENCED LEADERSHIP
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0C3332] tracking-tight">
            Meet Ritora's Principals
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-light">
            Hands-on leadership directly driving client advisory, strategic partnerships, and operational governance.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {leadershipProfiles.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 sm:p-9 border border-[#D9BA6A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              {/* Professional Avatar Placeholder */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0C3332] to-[#154F4E] text-[#D9BA6A] flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold border-2 border-[#D9BA6A]/50 shadow-md">
                {leader.initials}
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C3332]">
                  {leader.name}
                </h3>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#B89645] mt-1">
                  {leader.title}
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">
                  {leader.credentials}
                </div>
              </div>

              {/* Bio with TODO comment */}
              {/* // TODO: Bio to be provided by client */}
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light pt-2 border-t border-neutral-100">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTASection
        eyebrow="CONNECT WITH OUR LEADERSHIP"
        title="Discuss Your Next Real Estate Move"
        description="Whether you are an investor looking for curated off-plan inventory or a developer seeking sales strategy alignment, we welcome the discussion."
        primaryCtaText="Speak With an Advisor"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

import React from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import InvestmentOpportunities from "../components/InvestmentOpportunities";
import DeveloperPartnerships from "../components/DeveloperPartnerships";
import LocationsSection from "../components/LocationsSection";
import LeadershipSection from "../components/LeadershipSection";
import ContactSection from "../components/ContactSection";

/**
 * Ritora Home Page
 * Preserves the premium alternating visual rhythm and approved brand identity:
 * 1. Hero Section (Dubai video background, dual CTAs)
 * 2. HighlightsBar (3 company-focused highlights, no numerical claims)
 * 3. Curated Project Opportunities Coming Soon (refined coming soon state)
 * 4. Why Ritora (4 advisory benchmark pillars)
 * 5. Investment Opportunities (4 core investor pillars)
 * 6. Developer Partnerships (5 strategic capabilities)
 * 7. Focus Locations (5 prime areas, unverified yields removed)
 * 8. Leadership (Dhwani Arora, Founder & Managing Director)
 * 9. Direct Advisory Contact Form (functional consultation form)
 */
export default function Home() {
  return (
    <div className="bg-[#0C3332] text-white">
      {/* 1. Hero Section (Dark) */}
      <Hero />

      {/* 2. Company Highlights Bar (Light Cream) */}
      <StatsBar />

      {/* 3. Featured Projects - Coming Soon (Dark Teal) */}
      <FeaturedProjects />

      {/* 4. Why Ritora (Light Cream) */}
      <WhyChooseUs />

      {/* 5. Investment Opportunities (Dark Teal) */}
      <InvestmentOpportunities />

      {/* 6. Developer Partnerships (Light Cream) */}
      <DeveloperPartnerships />

      {/* 7. Focus Locations (Dark Teal) */}
      <LocationsSection />

      {/* 8. Leadership (Light Cream) */}
      <LeadershipSection />

      {/* 9. Contact Form Section (Dark Teal / Cream) */}
      <ContactSection />
    </div>
  );
}

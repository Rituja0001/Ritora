import React from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import InvestmentOpportunities from "../components/InvestmentOpportunities";
import DeveloperPartnerships from "../components/DeveloperPartnerships";
import LocationsSection from "../components/LocationsSection";
import LeadershipSection from "../components/LeadershipSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

/**
 * Ritora Home Page
 * Built to the exact 10-section approved client flow:
 * 1. Hero Section (video object-cover, 2 CTAs)
 * 2. Credibility Numbers (StatsBar - 3 stats, no India stat)
 * 3. Featured Projects (details to follow soon, 6 cards with View Project & WhatsApp)
 * 4. Why Ritora (4 advisory benchmark pillars)
 * 5. Investment Opportunities (4 pillars, Request a Consultation CTA)
 * 6. Developer Partnerships (5 capabilities, Partner With Ritora CTA)
 * 7. Locations (locations to follow shortly, 5 focus areas + expansion card)
 * 8. Leadership (Ritish Arora & Dhwani Arora, photo + bio placeholders)
 * 9. What Our Clients Say (Testimonials - smooth horizontal carousel with placeholder state)
 * 10. Contact Form Section (real functional form, official coordinates)
 *
 * Alternating visual rhythm: Dark -> Cream -> Dark -> Cream -> Dark -> Cream -> Dark -> Cream -> Dark -> Cream
 * All clickable buttons and internal links point to "#" per linking requirement.
 */
export default function Home() {
  return (
    <div className="bg-[#0C3332] text-white">
      {/* 1. Hero Section (Dark) */}
      <Hero />

      {/* 2. Credibility Numbers / StatsBar (Light Cream) */}
      <StatsBar />

      {/* 3. Featured Projects (Dark Teal) */}
      <FeaturedProjects />

      {/* 4. Why Ritora (Light Cream) */}
      <WhyChooseUs />

      {/* 5. Investment Opportunities (Dark Teal) */}
      <InvestmentOpportunities />

      {/* 6. Developer Partnerships (Light Cream) */}
      <DeveloperPartnerships />

      {/* 7. Locations (Dark Teal) */}
      <LocationsSection />

      {/* 8. Leadership (Light Cream) */}
      <LeadershipSection />

      {/* 9. What Our Clients Say / Testimonials Carousel (Dark Teal) */}
      <Testimonials />

      {/* 10. Contact Form Section (Light Cream) */}
      <ContactSection />
    </div>
  );
}


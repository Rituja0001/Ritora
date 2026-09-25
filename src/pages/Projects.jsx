import React, { useState } from "react";
import { Sparkles, Filter, Info } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { projectsData } from "../data/projectsData";

/**
 * Featured Projects Page - Ritora Dubai Luxury Real Estate
 * Displays curated portfolio of off-plan developments across Dubai.
 * Note: Project details coming soon — full client-approved project inventory pending.
 */
export default function Projects() {
  const [selectedDeveloper, setSelectedDeveloper] = useState("All");

  const developers = ["All", "Emaar", "Aldar", "Dubai South", "Ellington", "DAMAC", "SOL", "Imtiaz"];

  const filteredProjects = projectsData.filter((item) => {
    if (selectedDeveloper === "All") return true;
    return item.developer === selectedDeveloper;
  });

  return (
    <div className="bg-[#FAF8F5] text-[#0C3332] min-h-screen pt-24 sm:pt-28">
      {/* 1. Header Banner */}
      <section className="bg-[#0C3332] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9BA6A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFF-PLAN SELECTION</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Featured Projects
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Curated off-plan residential and investment opportunities across Dubai's most strategic master-planned developments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Professional Placeholder Note Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#D9BA6A]/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-3 p-4 bg-white rounded-lg border border-[#D9BA6A]/40 shadow-xs">
            <Info className="w-5 h-5 text-[#B89645] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-neutral-700 font-light">
              <strong>Project details coming soon:</strong> Verified launch brochures, unit inventories, floor plans, and detailed payment schedules will be published shortly upon developer release confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Developer Filter Strip & Projects Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-500">
            <Filter className="w-4 h-4 text-[#0C3332]" />
            <span>Filter by Developer:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {developers.map((dev) => (
              <button
                key={dev}
                onClick={() => setSelectedDeveloper(dev)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedDeveloper === dev
                    ? "bg-[#0C3332] text-white shadow-sm font-semibold"
                    : "bg-white text-neutral-700 border border-neutral-200 hover:border-[#D9BA6A]"
                }`}
              >
                {dev}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-neutral-200 p-8">
            <h3 className="font-serif text-xl font-bold text-[#0C3332] mb-2">
              No Projects Found for "{selectedDeveloper}"
            </h3>
            <p className="text-sm text-neutral-500 max-w-md mx-auto mb-4">
              Detailed listings for this developer are currently being curated and will be uploaded shortly.
            </p>
            <button
              onClick={() => setSelectedDeveloper("All")}
              className="px-4 py-2 bg-[#0C3332] text-white text-xs uppercase tracking-wider font-semibold rounded-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Consultation CTA */}
      <CTASection
        eyebrow="BESPOKE PROJECT ACQUISITIONS"
        title="Looking for Specific Off-Plan Inventory?"
        description="Connect directly with our advisory desk to receive bespoke project brochures, pricing releases, and payment plan allocations tailored to your portfolio requirements."
        primaryCtaText="Request Project Brochure"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

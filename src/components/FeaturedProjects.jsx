import React, { useState } from "react";
import { Sparkles, ArrowRight, Filter } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

/**
 * FeaturedProjects Component (Section 3)
 * Background: Dark Teal (#0C3332)
 * Features:
 * - Restrained typography and generous whitespace
 * - Placeholder note: "Project details coming soon"
 * - Reusable ProjectCard items with: Project name, Developer, Location, Starting price, Property types, Payment plan, Handover date
 * - Two buttons per card: "View Project" and "WhatsApp" pointing to "#"
 */
export default function FeaturedProjects() {
  const [activeDeveloper, setActiveDeveloper] = useState("All");

  const developers = ["All", "Emaar", "Aldar", "Dubai South", "Ellington", "DAMAC", "SOL"];

  const filtered = projectsData.filter((item) => {
    if (activeDeveloper === "All") return true;
    return item.developer === activeDeveloper;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#0C3332] text-white relative z-10 border-b border-[#D9BA6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#D9BA6A] text-xs uppercase tracking-[0.2em] font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFF-PLAN SELECTION</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
              Featured Projects
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Project details coming soon — curated off-plan opportunities will be published shortly upon developer release confirmation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-shrink-0">
            {developers.map((dev) => (
              <button
                key={dev}
                onClick={() => setActiveDeveloper(dev)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeDeveloper === dev
                    ? "bg-[#D9BA6A] text-[#0C3332] font-bold shadow-sm"
                    : "bg-[#154F4E]/60 text-neutral-200 border border-[#D9BA6A]/20 hover:border-[#D9BA6A]"
                }`}
              >
                {dev}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Explore Portfolio Footer Link */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D9BA6A] text-[#D9BA6A] hover:bg-[#D9BA6A] hover:text-[#0C3332] text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-all duration-300 shadow-sm"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

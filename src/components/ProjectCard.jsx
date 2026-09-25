import React from "react";
import { MapPin, Calendar, CreditCard, Building2, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * Reusable ProjectCard Component
 * Displays off-plan or ready development project details with clean typography,
 * key investment parameters, and action triggers.
 *
 * All clickable buttons point to href="#" per linking requirement.
 */
export default function ProjectCard({
  name,
  developer,
  location,
  startingPrice,
  propertyTypes,
  paymentPlan,
  handoverDate,
  image,
  badge = "Curated Opportunity",
}) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-neutral-200/90 hover:border-[#D9BA6A]/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* 1. Image & Badges Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={`${name} - ${developer}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {badge && (
            <span className="px-2.5 py-1 bg-[#0C3332]/90 backdrop-blur-md text-[#D9BA6A] text-[10px] uppercase tracking-wider font-semibold rounded-md border border-[#D9BA6A]/30">
              {badge}
            </span>
          )}
          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#0C3332] text-[10px] uppercase tracking-wider font-bold rounded-md shadow-sm">
            {developer}
          </span>
        </div>

        {/* Bottom Image Overlay: Price Tag */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-neutral-300 font-medium block">
              Starting From
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
              {startingPrice}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Content & Specs Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Developer & Location Line */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#B89645] flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C3332] group-hover:text-[#B89645] transition-colors leading-snug">
            {name}
          </h3>
        </div>

        {/* Key Project Specs List */}
        <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-neutral-100 text-xs text-neutral-600">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
              Typology
            </span>
            <div className="flex items-center gap-1.5 font-medium text-neutral-800">
              <Building2 className="w-3.5 h-3.5 text-[#0C3332]/70 flex-shrink-0" />
              <span className="truncate">{propertyTypes}</span>
            </div>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
              Handover
            </span>
            <div className="flex items-center gap-1.5 font-medium text-neutral-800">
              <Calendar className="w-3.5 h-3.5 text-[#0C3332]/70 flex-shrink-0" />
              <span className="truncate">{handoverDate}</span>
            </div>
          </div>

          <div className="col-span-2 space-y-0.5 pt-1">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
              Payment Structure
            </span>
            <div className="flex items-center gap-1.5 font-medium text-neutral-800">
              <CreditCard className="w-3.5 h-3.5 text-[#0C3332]/70 flex-shrink-0" />
              <span>{paymentPlan}</span>
            </div>
          </div>
        </div>

        {/* 3. Action Buttons - All pointing to # per linking requirement */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          {/* Primary View / Request Details Button */}
          <a
            href="#"
            className="w-full min-h-[42px] px-3 py-2 bg-[#0C3332] hover:bg-[#154F4E] text-white text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors text-center"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="#"
            className="w-full min-h-[42px] px-3 py-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors text-center"
          >
            <FaWhatsapp className="w-3.5 h-3.5 flex-shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

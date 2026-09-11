"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectCards = [
  {
    title: "Railway Corridor Survey & Mapping with Drone LiDAR & GIS",
    subtitle: "173 km Railway Corridor",
    description: "Drone-based LiDAR survey and geospatial mapping for a 173 km railway corridor, covering terrain, elevation, cross-sections and key infrastructure features to support engineering planning and design.",
    cta: "View Case Study",
    link: "/portfolios/topographical_railway_survey",
    image: "/Home-Our-Portfolio/Railway-Corridor-Survey-&-Mapping-with-Drone-LiDAR-&-GIS.png"
  },
  {
    title: "Pipeline & Transmission Corridor Survey with Drone LiDAR",
    subtitle: "45 km Corridor",
    description: "Drone-based LiDAR survey and GIS mapping for ammonia and water pipeline routes and transmission infrastructure, covering alignment, terrain and associated assets to support planning, monitoring and project management.",
    cta: "View Case Study",
    link: "/portfolios/ammonia_water_pipeline",
    image: "/Home-Our-Portfolio/Pipeline-&-Transmission-Corridor-Survey-with-Drone-LiDAR.png"
  },
  {
    title: "Mining Feature Extraction & GIS/CAD Mapping",
    subtitle: "Mining & Natural Resources",
    description: "Large-area 2D feature extraction and CAD mapping from high-resolution drone imagery, covering haul roads, mine infrastructure, water bodies, sumps, railway features, conveyors and land-use features for structured geospatial delivery.",
    cta: "View Case Study",
    link: "/portfolios/mining_area_extraction",
    image: "/Home-Our-Portfolio/Mining-Feature-Extraction-&-GISCAD-Map.png"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="relative py-4 md:py-10 overflow-hidden bg-white border-t border-[#DDE3EA]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column — Text info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2">
              OUR PORTFOLIO
            </span>
            
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] mb-2.5 tracking-tight">
              Geospatial Solutions Across Infrastructure, Mining & Utilities
            </h2>
            
            <p className="text-[#4B5563] text-base md:text-[18px] leading-[1.6] mb-4 max-w-full sm:max-w-md">
              Explore selected GIS, drone, LiDAR and mapping assignments covering railway corridors, mining areas, pipelines and large-scale spatial data production.
            </p>
            
            <Link 
              href="/portfolios"
              className="inline-flex items-center justify-center bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-6 py-2.5 min-h-[44px] sm:min-h-[46px] rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              View All Projects &rarr;
            </Link>
          </div>

          {/* Right Column — Static grid of bordered cards */}
          <div className="lg:col-span-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
              {projectCards.map((project, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-[#DDE3EA] group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[135px] sm:h-[145px] md:h-[155px] flex-shrink-0 overflow-hidden bg-slate-100">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 sm:p-4.5 text-left flex flex-col flex-grow">
                    <h3 className="text-[#0C2E60] text-[18px] md:text-[20px] font-bold mb-1.5 leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-wider mb-1.5">
                        {project.subtitle}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.6] mb-3 line-clamp-3">
                        {project.description}
                      </p>
                    )}
                    {project.cta && (
                      <div className="mt-auto pt-1">
                        <Link 
                          href={project.link || "/portfolios"} 
                          className="inline-flex items-center text-[#1656B8] hover:text-[#0C2E60] text-[15px] font-bold transition-colors group/link py-1 min-h-[36px]"
                        >
                          <span>{project.cta}</span>
                          <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

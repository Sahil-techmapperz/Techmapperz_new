"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectCards = [
  {
    title: "Drone LiDAR and Railway Corridor Mapping",
    subtitle: "",
    description: "An integrated geospatial workflow for a railway corridor covering a survey width of approximately 100 metres.\n\nThe assignment involved drone LiDAR data, DGPS control information, point-cloud processing, terrain-product generation and GIS/CAD delivery for infrastructure use.",
    keyOutputs: "Point cloud, DEM, DSM, contours, orthomosaic, cross-sections and GIS/CAD data.",
    cta: "View Railway Mapping Project",
    image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp"
  },
  {
    title: "Mining Feature Extraction and CAD Mapping",
    subtitle: "556.67 sq. km Large-Area Mapping Assignment",
    description: "A detailed 2D feature-extraction and CAD-mapping project prepared from high-resolution source imagery for mining and surrounding land areas.\n\nMapped features included roads and haul roads, built-up and industrial areas, agriculture and land cover, water bodies and sumps, railway-related features, conveyors and mine infrastructure.",
    keyOutputs: "Structured GIS layers, CAD drawings, feature attribution and project-specific mapping data.",
    cta: "View Mining Mapping Project",
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp"
  },
  {
    title: "Gas Pipeline Digitisation and Asset Registry",
    subtitle: "6,000 km Pipeline Mapping Experience",
    description: "A large-scale GIS digitisation assignment supporting the preparation of a structured digital asset database for a natural-gas transmission network.\n\nThe mapped database covered pipeline alignments and associated infrastructure such as stations and operational asset locations.",
    keyOutputs: "Pipeline GIS layers, asset records, attributed network information and structured geospatial delivery.",
    cta: "View Pipeline Digitisation Project",
    image: "/gis_images/Gas Pipeline.webp"
  }
];

const FeaturedProjects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400;
    }
  };

  return (
    <section className="relative py-10 md:py-12 overflow-hidden text-white" style={{ backgroundColor: '#0c2e60' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column — Text info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-[#6ac045] text-[11px] font-bold uppercase tracking-[0.15em] mb-2 sm:mb-3">
              OUR PORTFOLIO
            </span>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 tracking-tight">
              Geospatial Solutions Across Infrastructure, Mining & Utilities
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-[13px] md:text-sm leading-relaxed mb-5 sm:mb-6 max-w-full sm:max-w-sm">
              Explore selected GIS, drone, LiDAR and mapping assignments covering railway corridors, mining areas, pipelines and large-scale spatial data production.
            </p>
            
            <Link href="/portfolios">
              <button className="border border-white hover:bg-white hover:text-[#0c2e60] text-white font-bold text-xs sm:text-sm px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm">
                View All Projects &rarr;
              </button>
            </Link>
          </div>

          {/* Right Column — Horizontal scroll list of project cards */}
          <div className="lg:col-span-8 relative w-full flex flex-col gap-4 sm:gap-6">
            
            {/* Slider navigation buttons */}
            <div className="flex items-center justify-between md:justify-end gap-3.5 z-20">
              <span className="text-xs text-gray-400 font-medium md:hidden">Swipe to explore →</span>
              <div className="flex gap-2">
                <button 
                  onClick={scrollLeft}
                  aria-label="Previous project"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0c2e60] flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={scrollRight}
                  aria-label="Next project"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0c2e60] flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrolling container */}
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-1"
            >
              {projectCards.map((project, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 snap-start flex flex-col w-[260px] sm:w-[300px] md:w-[320px] bg-[#112a52] rounded-xl overflow-hidden shadow-lg border border-white/5 group hover:border-white/15 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px] flex-shrink-0 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 90vw, 320px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 md:p-5 text-left flex flex-col flex-grow">
                    <h3 className="text-white text-[15px] md:text-[17px] font-bold mb-1.5 md:mb-2 leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-gray-300 text-xs md:text-[13px] font-medium mb-2">
                        {project.subtitle}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-400 text-[11px] md:text-xs whitespace-pre-line mb-3 md:mb-4 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    )}
                    {project.keyOutputs && (
                      <div className="mb-4 bg-white/5 p-2.5 rounded border border-white/10 mt-auto">
                        <span className="text-[#6ac045] text-[10px] md:text-[11px] font-bold uppercase tracking-wider block mb-0.5">Key outputs:</span>
                        <span className="text-gray-200 text-[11px] md:text-xs leading-snug">{project.keyOutputs}</span>
                      </div>
                    )}
                    {project.cta && (
                      <div className="mt-2 pt-1">
                        <Link href="/portfolios" className="inline-flex items-center text-[#6ac045] text-xs font-bold hover:text-white transition-colors group/link">
                          {project.cta} 
                          <span className="ml-1 transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
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

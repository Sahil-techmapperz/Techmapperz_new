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
    <section className="relative py-12 md:py-20 overflow-hidden text-white" style={{ backgroundColor: '#0c2e60' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column — Text info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.15em] mb-3 sm:mb-4">
              Project Evidence That Reflects Our Geospatial Focus
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-[1.25] mb-3 sm:mb-5 tracking-tight">
              Selected Assignments Involving Railway Corridors, Mining, Pipelines & Drone Data
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-sm">
              Explore selected assignments involving railway corridors, mining areas, pipelines, drone data, point clouds, GIS production and engineering-ready delivery.
            </p>
            
            <Link href="/portfolios">
              <button className="border border-white hover:bg-white hover:text-[#0c2e60] text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all duration-300 shadow-md">
                Explore All Project Experience &rarr;
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
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0c2e60] flex items-center justify-center shadow-lg transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={scrollRight}
                  aria-label="Next project"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0c2e60] flex items-center justify-center shadow-lg transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrolling container */}
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-1"
            >
              {projectCards.map((project, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 snap-start flex flex-col w-[300px] sm:w-[350px] md:w-[400px] bg-[#112a52] rounded-2xl overflow-hidden shadow-xl border border-white/5 group hover:border-white/15 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] flex-shrink-0 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5 md:p-6 text-left flex flex-col flex-grow">
                    <h3 className="text-white text-base md:text-lg font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-gray-300 text-sm font-medium mb-3">
                        {project.subtitle}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-400 text-xs md:text-[13px] whitespace-pre-line mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    {project.keyOutputs && (
                      <div className="mb-5 bg-white/5 p-3 rounded-lg border border-white/10">
                        <span className="text-[#6ac045] text-[11px] font-bold uppercase tracking-wider block mb-1">Key outputs:</span>
                        <span className="text-gray-200 text-xs md:text-[13px] leading-snug">{project.keyOutputs}</span>
                      </div>
                    )}
                    {project.cta && (
                      <div className="mt-auto pt-2">
                        <Link href="/portfolios" className="inline-flex items-center text-[#6ac045] text-[13px] font-bold hover:text-white transition-colors group/link">
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

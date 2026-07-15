"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectCards = [
  {
    title: "Urban Mapping Project",
    subtitle: "3D City Model & Analytics",
    image: "/gis_images/Urban & Rural.webp"
  },
  {
    title: "Highway Survey",
    subtitle: "Corridor Mapping & Design",
    image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp"
  },
  {
    title: "Mine Volume Estimation",
    subtitle: "Survey & 3D Modeling",
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp"
  },
  {
    title: "Solar Farm Mapping",
    subtitle: "Site Survey & Planning",
    image: "/gis_images/drone_services/inspection_analysis/solar_panel_inspection.webp"
  }
];

const FeaturedProjects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 340;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 340;
    }
  };

  return (
    <section className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: '#0c2e60' }}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.15em] mb-4">
              FEATURED PROJECTS
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.25] mb-5 tracking-tight">
              Delivering Impact<br className="hidden md:block"/> Through Innovation
            </h2>
            
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-8 max-w-sm">
              Explore some of our recent projects where we delivered accurate data and actionable insights.
            </p>
            
            <Link href="/portfolios">
              <button className="border border-white hover:bg-white hover:text-[#0c2e60] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md">
                View All Projects &rarr;
              </button>
            </Link>
          </div>

          {/* Right Column — Horizontal scroll list of project cards */}
          <div className="lg:col-span-8 relative w-full flex flex-col gap-6">
            
            {/* Slider navigation buttons */}
            <div className="hidden md:flex justify-end gap-3.5 z-20">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white text-[#0c2e60] flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white text-[#0c2e60] flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Scrolling container */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2 -mx-2"
            >
              {projectCards.map((project, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[310px] bg-[#112a52] rounded-2xl overflow-hidden shadow-xl border border-white/5 group hover:border-white/15 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[180px] md:h-[210px] overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 text-left">
                    <h4 className="text-white text-base md:text-[17px] font-bold mb-1 leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-xs md:text-[13px] font-medium">
                      {project.subtitle}
                    </p>
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

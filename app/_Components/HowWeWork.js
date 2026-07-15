"use client";
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Scope, location, accuracy, available inputs and required outputs.",
    isDark: true
  },
  {
    number: "02",
    title: "Acquire",
    description: "Drone, LiDAR, satellite, survey or client-supplied source data.",
    isDark: false
  },
  {
    number: "03",
    title: "Process",
    description: "Photogrammetry, classification, digitisation, modelling and database work.",
    isDark: true
  },
  {
    number: "04",
    title: "Validate",
    description: "Geometry, topology, attributes, completeness and positional QA/QC.",
    isDark: false
  },
  {
    number: "05",
    title: "Deliver",
    description: "GIS, CAD, raster, point cloud, dashboard and report outputs.",
    isDark: true
  }
];

const HowWeWork = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-[2px] bg-[#1267b1]" />
              <span className="text-[#1267b1] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em]">
                HOW WE WORK
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2e60] leading-[1.2] tracking-tight">
              From data acquisition to<br /> decision-ready deliverables
            </h2>
          </div>
          
          <div className="lg:col-span-4 text-left lg:text-left lg:pb-2">
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-sm">
              A clear workflow makes scope, accuracy, quality control and delivery expectations visible before production starts.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative w-full mt-20 px-4">
          
          {/* Horizontal connecting line (Desktop only) */}
          <div 
            className="absolute top-6 left-[10%] right-[10%] h-[2px] z-0 hidden md:block" 
            style={{ backgroundColor: '#e2e8f0' }}
          />

          {/* Vertical connecting line (Mobile only) */}
          <div 
            className="absolute top-6 bottom-6 left-1/2 w-[2px] -translate-x-1/2 z-0 md:hidden" 
            style={{ backgroundColor: '#e2e8f0' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group relative">
                
                {/* Step Circle */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base border-4 border-white shadow-md z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: step.isDark ? '#0c2e60' : '#078a86' }}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h4 className="text-[#0c2e60] font-bold text-lg mt-6 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed max-w-[210px] md:max-w-none px-4">
                  {step.description}
                </p>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowWeWork;

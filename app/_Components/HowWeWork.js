"use client";
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Requirement Review",
    description: "We review the project objective, area of interest, source data, coordinate system, expected accuracy, feature catalogue, output formats, timeline and acceptance criteria.",
    isDark: true
  },
  {
    number: "02",
    title: "Input Assessment and Methodology",
    description: "The technical team evaluates the available imagery, point cloud, survey control, CAD, GIS or raster data and recommends a suitable production workflow.",
    isDark: false
  },
  {
    number: "03",
    title: "Sample or Pilot Preparation",
    description: "For detailed or large-volume assignments, a sample area can be prepared to confirm feature interpretation, attributes, layer structure, output presentation and quality expectations.",
    isDark: true
  },
  {
    number: "04",
    title: "Processing and Production",
    description: "The team carries out drone processing, point-cloud classification, digitisation, feature extraction, spatial analysis, database preparation, CAD mapping or application development.",
    isDark: false
  },
  {
    number: "05",
    title: "Quality Review",
    description: "Outputs are checked against the agreed specification for geometry, topology, attribution, projection, completeness, alignment and delivery format.",
    isDark: true
  },
  {
    number: "06",
    title: "Client Review and Final Delivery",
    description: "Review files are shared at the agreed milestones. Approved corrections are incorporated before handing over the final project package and supporting documentation.",
    isDark: false
  }
];

const HowWeWork = () => {
  return (
    <section className="relative py-4 md:py-10 bg-white overflow-hidden border-t border-[#DDE3EA]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-4 sm:mb-5">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-[2px] bg-[#0F766E]" />
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                OUR DELIVERY PROCESS
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[38px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
              A Clear Workflow from Requirement Review to Final Handover
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-left lg:pb-1">
            <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-[1.55] max-w-full lg:max-w-sm">
              A clear workflow makes scope, accuracy, quality control and delivery expectations visible before production starts.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative w-full mt-1 sm:mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start text-left group relative bg-[#F6F8FB] rounded-xl p-3.5 sm:p-4 md:p-4.5 border border-[#DDE3EA] hover:shadow-md transition-shadow">
                
                {/* Step Circle */}
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm mb-2 sm:mb-2.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{ backgroundColor: step.isDark ? '#0C2E60' : '#0F766E' }}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-[#0C2E60] font-bold text-[16px] md:text-[18px] mb-1">
                  {step.title}
                </h3>
                <p className="text-[#4B5563] text-[13.5px] sm:text-[14.5px] leading-[1.5]">
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

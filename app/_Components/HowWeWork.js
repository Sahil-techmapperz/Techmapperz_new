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
    <section className="relative py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-[2px] bg-[#1267b1]" />
              <span className="text-[#1267b1] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em]">
                OUR DELIVERY PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2e60] leading-snug sm:leading-[1.2] tracking-tight">
              A Clear Workflow from Requirement Review to Final Handover
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-left lg:pb-2">
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-full lg:max-w-sm">
              A clear workflow makes scope, accuracy, quality control and delivery expectations visible before production starts.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative w-full mt-10 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start text-left group relative bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-md transition-shadow">
                
                {/* Step Circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm mb-5 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ backgroundColor: step.isDark ? '#0c2e60' : '#078a86' }}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h4 className="text-[#0c2e60] font-bold text-lg mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-[14.5px] leading-relaxed">
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

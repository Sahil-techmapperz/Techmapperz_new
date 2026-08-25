import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseTechmapperz = () => {
    return (
        <section className="relative py-12 md:py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[#6ac045] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 sm:mb-3">
                        WHY TECHMAPPERZ
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0c2e60] mb-8 sm:mb-12 leading-snug md:leading-[1.2] tracking-tight max-w-4xl">
                        Geospatial Expertise Backed by Delivery Discipline
                    </h2>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full text-left">
                        {[
                            {
                              title: "GIS and Drone at the Core",
                              desc: "GIS production, remote sensing, mapping and drone-data processing are central to our work. Project requirements are reviewed by professionals who understand spatial data, coordinate systems, feature specifications and delivery dependencies."
                            },
                            {
                              title: "Experience Across Complex Assignments",
                              desc: "Our experience includes railway corridors, pipeline digitisation, mining feature extraction, land-use mapping, utility data and infrastructure assignments—covering detailed, large-area and linear projects."
                            },
                            {
                              title: "Requirements Aligned Before Production",
                              desc: "We review the project specification, available source data, assumptions, sample requirements and expected output formats before full-scale production so that both teams begin with a clear understanding of the scope."
                            },
                            {
                              title: "QA/QC Throughout the Workflow",
                              desc: "Quality checks are built into production and final review. Depending on the project, these checks cover geometry, topology, attributes, projection, completeness, alignment, naming and file structure against the agreed requirements."
                            },
                            {
                              title: "Outputs Prepared for Practical Use",
                              desc: "Deliverables are organised in the agreed GIS, CAD, raster, point-cloud or reporting formats so they can move into the client’s next stage of analysis, design, review, submission or application use."
                            },
                            {
                              title: "Geospatial and Digital Capability",
                              desc: "Alongside GIS and drone services, our development team builds Web GIS platforms, dashboards, websites and mobile applications. Scope, milestones, review stages and final handover are coordinated through a clear project process."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1656b8] flex items-center justify-center text-white shadow-sm">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="text-[#0c2e60] font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/about">
                        <button className="bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md">
                            About Us &rarr;
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTechmapperz;
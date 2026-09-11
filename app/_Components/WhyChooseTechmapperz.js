import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseTechmapperz = () => {
    return (
        <section className="relative py-4 md:py-10 bg-[#F6F8FB] overflow-hidden border-t border-[#DDE3EA]">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-1.5">
                        WHY TECHMAPPERZ
                    </span>
                    
                    <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] mb-5 sm:mb-6 leading-[1.2] tracking-tight max-w-4xl">
                        Geospatial Expertise Backed by Delivery Discipline
                    </h2>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6 w-full text-left">
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
                            <div key={idx} className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-xl border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1656B8] flex items-center justify-center text-white shadow-sm mt-0.5">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div>
                                    <h3 className="text-[#0C2E60] font-bold text-[17px] md:text-[19px] mb-1">{item.title}</h3>
                                    <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-[1.55]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center mt-1">
                        <Link href="/about">
                            <button className="bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-7 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[44px] sm:min-h-[46px]">
                                About Us &rarr;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTechmapperz;
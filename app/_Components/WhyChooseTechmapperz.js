import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseTechmapperz = () => {
    return (
        <section className="relative py-12 md:py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[#6ac045] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 sm:mb-3">
                        WHY TECHMAPPERZ
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0c2e60] mb-8 sm:mb-12 leading-snug md:leading-[1.2] tracking-tight max-w-4xl">
                        A Geospatial Production Partner Focused on Usable Deliverables
                    </h2>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full text-left">
                        {[
                            {
                              title: "Geospatial-Led Understanding",
                              desc: "Project requirements are reviewed by professionals with hands-on experience in GIS production, remote sensing, mapping, drone-data workflows and geospatial project delivery."
                            },
                            {
                              title: "Experience Across Detailed Projects",
                              desc: "Our published project experience covers railway corridors, mining feature extraction, pipeline digitisation, land-use mapping, utility data and infrastructure assignments."
                            },
                            {
                              title: "Multiple Source-Data Capabilities",
                              desc: "We can work with drone imagery, LiDAR point clouds, satellite imagery, survey inputs, GIS layers, CAD drawings, scanned maps and client databases."
                            },
                            {
                              title: "Structured QA/QC",
                              desc: "Review checks can cover geometry, topology, attributes, projection, completeness, alignment, file structure and compliance with the agreed specification."
                            },
                            {
                              title: "Multi-Format Delivery",
                              desc: "Outputs are prepared according to the client's required GIS, CAD, raster, point-cloud, reporting or digital-application environment."
                            },
                            {
                              title: "Clear Project Communication",
                              desc: "Scope assumptions, input dependencies, samples, production stages, review packages and final deliverables are defined before full-scale execution."
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
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseTechmapperz = () => {
    return (
        <section className="relative py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column — Text & List */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        <span className="text-[#6ac045] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3">
                            WHY CHOOSE TECHMAPPERZ?
                        </span>
                        
                        <h2 className="text-3xl md:text-[40px] font-bold text-[#0c2e60] mb-5 leading-[1.2] tracking-tight">
                            Your Trusted Geospatial<br className="hidden md:block"/> Partner
                        </h2>
                        
                        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-8">
                            We combine technology, expertise and innovation to deliver reliable geospatial solutions that drive real-world impact.
                        </p>
                        
                        {/* Features List */}
                        <ul className="space-y-4 mb-8 w-full">
                            {[
                                "Experienced & Skilled Team",
                                "Advanced Tools & Technologies",
                                "High Accuracy & Quality Standards",
                                "Timely Delivery & Support"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3.5 text-gray-700 font-semibold text-sm md:text-[15px]">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0c2e60] flex items-center justify-center text-white shadow-sm">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/about">
                            <button className="bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md">
                                About Us &rarr;
                            </button>
                        </Link>
                    </div>

                    {/* Right Column — Grid of 3 Images with overlay card */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[340px] sm:h-[420px] md:h-[460px] w-full relative">
                        {/* ① Main Tall Image (Left half of grid) */}
                        <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                          <Image 
                            src="/Photos/about_us_banner.png" 
                            alt="Surveyors working" 
                            fill 
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-center" 
                            priority
                          />
                          
                          {/* Experience Overlay Card */}
                          <div className="absolute bottom-6 right-[-20px] sm:right-6 bg-[#0c2e60] text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-4 z-20 max-w-[210px] border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                              {/* Group icon */}
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold leading-tight">10+</h4>
                              <p className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider leading-tight">Years of Experience</p>
                            </div>
                          </div>
                        </div>

                        {/* ② Two Stacked Images (Right half of grid) */}
                        <div className="col-span-5 flex flex-col gap-4 h-full">
                          {/* Top right: Topographical heatmap */}
                          <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 flex-grow h-1/2">
                            <Image 
                              src="/Photos/feature_5.webp" 
                              alt="Topographical model" 
                              fill 
                              sizes="(max-width: 768px) 100vw, 20vw"
                              className="object-cover object-center" 
                            />
                          </div>
                          {/* Bottom right: Mobile map overlay */}
                          <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 flex-grow h-1/2">
                            <Image 
                              src="/Photos/feature_4.webp" 
                              alt="Mapping mobile app" 
                              fill 
                              sizes="(max-width: 768px) 100vw, 20vw"
                              className="object-cover object-center" 
                            />
                          </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseTechmapperz;
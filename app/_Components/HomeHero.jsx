import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiTargetLock, BiCloud } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineTouchApp } from "react-icons/md";

const HomeHero = ({ bannerData }) => {
    const bgImage = '/background_image/Drone_Service_banner.png';

    return (
        <section
            className="w-full min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-center relative overflow-hidden pt-32 pb-16"
        >
            <Image
                src={bgImage}
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center absolute inset-0 z-0"
            />
            {/* Subtle dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[5]" />

            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col justify-between flex-grow h-full">

                {/* Main Content */}
                <div className="flex-grow flex flex-col justify-center max-w-3xl gap-6 mt-12 md:mt-24">
                    {/* Subtitle Tag */}
                    <div className="text-[#6ac045] text-xs md:text-[14px] font-bold uppercase tracking-[0.15em]">
                        NEXT-GENERATION GEOSPATIAL INTELLIGENCE
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.15]">
                        Empowering the <br />
                        Future with <span className="text-[#6ac045]">Advanced</span><br />
                        <span className="text-[#6ac045]">Spatial Data</span>
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-200 text-base md:text-[17px] max-w-2xl leading-relaxed mt-2">
                        Unlock the power of location intelligence with our cutting-edge GIS, drone, and web mapping solutions designed to drive growth and efficiency.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 mt-4">
                        <Link href="/services">
                            <button className="py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8]/30 text-white font-semibold text-[15px] hover:bg-[#1656b8] transition-all duration-300">
                                Explore Solutions
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                                Get a Quote
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Bottom Features Row */}
                {/* <div className="mt-16 pt-8 flex flex-col md:flex-row flex-wrap gap-8 md:gap-16 lg:gap-24 pb-4">
                  
                    <div className="flex items-start gap-4">
                        <div className="text-white opacity-90 mt-1">
                            <BiTargetLock className="text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-[16px]">Pinpoint Precision</h3>
                            <p className="text-gray-400 text-[13px] mt-0.5">Sub-centimeter Accuracy</p>
                        </div>
                    </div>
             
                    <div className="flex items-start gap-4">
                        <div className="text-white opacity-90 mt-1">
                            <AiOutlineCloudServer className="text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-[16px]">Cutting-Edge Tools</h3>
                            <p className="text-gray-400 text-[13px] mt-0.5">AI, LiDAR & Drone Tech</p>
                        </div>
                    </div>
              
                    <div className="flex items-start gap-4">
                        <div className="text-white opacity-90 mt-1">
                            <MdOutlineTouchApp className="text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-[16px]">Data-Driven Success</h3>
                            <p className="text-gray-400 text-[13px] mt-0.5">Transforming Data into Action</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default HomeHero;

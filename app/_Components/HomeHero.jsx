import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeHero = ({ bannerData }) => {
    const bgImage = '/background_image/home-GIS-banner.webp';

    return (
        <section
            className="w-full flex flex-col justify-center relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px]"
        >
            <Image
                src={bgImage}
                alt="Techmapperz GIS and Drone Survey Hero Background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center absolute inset-0 z-0"
            />
            {/* Dark navy overlay for better contrast and brand feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C2E60]/95 via-[#0C2E60]/70 to-[#0C2E60]/30 z-[5]" />

            <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col justify-center">

                {/* Main Content */}
                <div className="flex flex-col justify-center max-w-3xl gap-4 sm:gap-5 md:gap-6">
                    {/* Subtitle Tag (On navy: lighter teal #5EEAD4) */}
                    <div className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                        GIS MAPPING • DRONE SURVEY • DIGITAL DEVELOPMENT
                    </div>

                    {/* Heading: Desktop 54–56px, Mobile 32–34px, Weight 700 */}
                    <h1 className="text-[32px] sm:text-[34px] md:text-[44px] lg:text-[54px] xl:text-[56px] font-bold text-white tracking-tight leading-[1.2]">
                        Transforming Survey Data into Usable Geospatial Insights
                    </h1>

                    {/* Paragraph: Desktop 18px, Mobile 16px */}
                    <p className="text-gray-200 text-[16px] md:text-[18px] max-w-2xl leading-[1.65]">
                        Techmapperz supports infrastructure, mining, utility, government, architecture and planning projects with GIS mapping, drone surveys, LiDAR and point-cloud processing, terrain modelling, spatial data analysis, and Digital Development solution across India.
                    </p>

                    {/* CTA Buttons: Primary #1656B8 (hover #0C2E60), Secondary White with #0C2E60 border/text */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
                        <Link
                            href="/service"
                            className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-md min-h-[46px] sm:min-h-[48px] w-full sm:w-auto text-center"
                        >
                            Explore Our Services
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-white hover:bg-gray-100 text-[#0C2E60] border-2 border-[#0C2E60] font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-sm min-h-[46px] sm:min-h-[48px] w-full sm:w-auto text-center"
                        >
                            Discuss Your Project
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeHero;

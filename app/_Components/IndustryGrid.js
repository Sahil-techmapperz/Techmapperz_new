"use client";

import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { categoryData } from './Industry_Expertise';

const IndustryGrid = () => {
    return (
        <section className="pt-24 pb-24 bg-white">
            <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-12">
                    <div className="max-w-[730px]">
                        <div className="inline-flex items-center gap-2.5 text-[12px] font-black tracking-[0.17em] uppercase text-[#1267b1] mb-4">
                            <span className="w-7 h-[2px] bg-[#e33434] rounded-full"></span>
                            Solutions
                        </div>
                        <h2 className="text-[clamp(31px,3.6vw,48px)] leading-[1.14] tracking-[-0.034em] font-bold text-[#0b2341] m-0">
                            Industries We Empower
                        </h2>
                        <p className="mt-4 text-[17px] text-[#5e6d7b]">
                            We provide tailored technological solutions that drive growth, efficiency, and innovation across a wide range of industries.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categoryData.map((category, index) => {
                        const slug = category.name.toLowerCase().replace(/[&\s]+/g, '-');
                        return (
                            <div key={index} className="bg-white border border-[#dce5ee] rounded-[19px] p-6 min-h-[276px] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_19px_42px_rgba(11,35,65,.10)] hover:border-[#b8cee1] group">
                                <div className="w-[50px] h-[50px] rounded-[15px] bg-gradient-to-br from-[#ebf4fb] to-[#f8fbfd] flex items-center justify-center text-[#1267b1] mb-5 shadow-sm border border-white">
                                    {category.icon}
                                </div>
                                <h3 className="text-[21px] tracking-[-0.017em] font-bold text-[#0b2341] m-0">
                                    {category.name}
                                </h3>
                                <p className="text-[13px] mt-2.5 text-[#5e6d7b]">
                                    {category.desc}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {category.categoryTypes?.slice(0,2).map((type, i) => (
                                        <span key={i} className="text-[10px] font-[800] text-[#566676] py-1.5 px-2.5 rounded-full bg-[#f2f6f9] border border-[#dce5ee]">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                                
                                <Link 
                                    href={`/industry/${slug}`}
                                    className="mt-auto pt-5 text-[#1267b1] text-[12px] font-black flex items-center gap-2 group-hover:text-[#2f80d0] transition-colors"
                                >
                                    Explore Solutions <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustryGrid;

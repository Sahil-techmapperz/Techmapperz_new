"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSearch, FiDatabase } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";

const DroneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 opacity-80 text-[#078A86]">
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 9.5v5M9.5 12h5" />
    <path d="M10.2 10.2L6.5 6.5M13.8 10.2l3.7-3.7M10.2 13.8l-3.7 3.7M13.8 13.8l3.7 3.7" />
    <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
    <path d="M4 6.5h5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    <path d="M15 6.5h5" />
    <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
    <path d="M4 17.5h5" />
    <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
    <path d="M15 17.5h5" />
  </svg>
);

const SomeOfOurWork = () => {
  
  const projects = [
    {
      id: "01",
      title: "URBAN INFRASTRUCTURE PLANNING",
      tags: "GIS MAPPING | TOPOGRAPHICAL DATA",
      description: "Detailed urban mapping using drone LiDAR and satellite imagery for sustainable city development.",
      stats: [
        { label: "Area:", value: "50 sq km" },
        { label: "Precision:", value: "2cm" }
      ],
      image: "/gis_images/Urban & Rural.webp",
      link: "/portfolio"
    },
    {
      id: "02",
      title: "COASTAL EROSION MONITORING",
      tags: "3D TERRAIN MODELING | LIDAR",
      description: "Monitoring shoreline changes and volume measurements using recurring drone surveys.",
      stats: [
        { label: "Surveys:", value: "Quarterly" },
        { label: "Accuracy:", value: "±3cm" }
      ],
      image: "/gis_images/Gas Pipeline.webp",
      link: "/portfolio"
    }
  ];

  const wideProject = {
    id: "03",
    title: "RENEWABLE ENERGY\nSITE ASSESSMENT",
    tags: "SATELLITE IMAGERY | DATA ANALYSIS",
    description: "Evaluating optimal locations for solar and wind projects using advanced GIS analytics.",
    stats: [
      { label: "Assets:", value: "120 Turbines" },
      { label: "Resolution:", value: "10cm" }
    ],
    image: "/gis_images/Web_GIS_Development_Banner.webp",
    link: "/portfolio"
  };

  const sansSerifStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  };

  const ActionIcons = () => (
    <div className="flex gap-4 items-center" style={sansSerifStyle}>
      <div className="flex flex-col items-center gap-1 cursor-pointer group">
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#078A86] group-hover:text-[#078A86] transition-colors">
          <FiSearch size={14} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer group">
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#078A86] group-hover:text-[#078A86] transition-colors">
          <FiDatabase size={14} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer group">
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#078A86] group-hover:text-[#078A86] transition-colors">
          <FaRegBuilding size={14} />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F4F7FA] py-20 relative overflow-hidden" style={sansSerifStyle}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#17202A] mb-6 tracking-tight uppercase" style={sansSerifStyle}>
            Some of Our Work
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Top Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-xl border border-gray-200 rounded-[1.5rem] p-6 relative flex flex-col hover:border-[#078A86]/60 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#17202A] uppercase leading-tight" style={sansSerifStyle}>{project.title}</h3>
                  </div>
                  {/* <DroneIcon /> */}
                </div>

                {/* Image & Overlapping Explore Button */}
                <div className="relative w-full h-48 md:h-56 rounded-xl mb-6 border border-gray-100">
                  <Image src={project.image} alt={project.title} fill className="object-cover rounded-xl" />
                  
                  {/* Floating Explore Button positioned at the bottom edge */}
                  <div className="absolute bottom-0 right-4 translate-y-1/2 z-20">
                    <Link href={project.link} className="inline-block bg-[#078A86] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-lg hover:bg-[#1267B1] transition-all uppercase tracking-wider" style={sansSerifStyle}>
                      EXPLORE PROJECT
                    </Link>
                  </div>
                </div>

                {/* Content underneath */}
                <div className="mt-2 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-[#078A86] text-xs font-bold tracking-wider mb-2" style={sansSerifStyle}>{project.tags}</p>
                    <p className="text-[#5A6673] text-sm leading-relaxed mb-6" style={sansSerifStyle}>{project.description}</p>
                  </div>
                  
                  {/* Stats and Action Icons Row */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-200 pt-4">
                    <div className="text-[12px] font-sans whitespace-nowrap" style={sansSerifStyle}>
                      <span className="text-[#078A86] mr-1">{project.stats[0].label}</span>
                      <span className="text-[#17202A] mr-3">{project.stats[0].value}</span>
                      <span className="text-gray-300 mr-3">|</span>
                      <span className="text-[#078A86] mr-1">{project.stats[1].label}</span>
                      <span className="text-[#17202A]">{project.stats[1].value}</span>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <ActionIcons />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - Wide Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white shadow-xl border border-gray-200 rounded-[1.5rem] p-6 relative flex flex-col md:flex-row gap-8 hover:border-[#078A86]/60 hover:shadow-2xl transition-all duration-300"
          >
            {/* Content (Left) */}
            <div className="w-full md:w-[45%] flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-3xl font-extrabold text-[#17202A] uppercase leading-tight mb-4 whitespace-pre-line" style={sansSerifStyle}>{wideProject.title}</h3>
                
                <p className="text-[#078A86] text-xs font-bold tracking-wider mb-2" style={sansSerifStyle}>{wideProject.tags}</p>
                <p className="text-[#5A6673] text-sm leading-relaxed mb-6" style={sansSerifStyle}>{wideProject.description}</p>
                
                <div className="text-[12px] font-sans whitespace-nowrap mb-6" style={sansSerifStyle}>
                  <span className="text-[#078A86] mr-1">{wideProject.stats[0].label}</span>
                  <span className="text-[#17202A] mr-3">{wideProject.stats[0].value}</span>
                  <span className="text-gray-300 mr-3">|</span>
                  <span className="text-[#078A86] mr-1">{wideProject.stats[1].label}</span>
                  <span className="text-[#17202A]">{wideProject.stats[1].value}</span>
                </div>
              </div>

              {/* Bottom bar of left side */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-t border-gray-200 pt-4">
                <Link href={wideProject.link} className="inline-block bg-[#078A86] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-lg hover:bg-[#1267B1] transition-all uppercase tracking-wider self-start lg:self-auto" style={sansSerifStyle}>
                  EXPLORE PROJECT
                </Link>
                
                <div className="flex-shrink-0">
                  <ActionIcons />
                </div>
              </div>
            </div>

            {/* Image & Second set of Action Icons (Right) */}
            <div className="w-full md:w-[55%] flex flex-col gap-4">
              <div className="relative w-full flex-grow min-h-[250px] md:min-h-[300px] rounded-xl border border-gray-100">
                <Image src={wideProject.image} alt={wideProject.title.replace('\n', ' ')} fill className="object-cover rounded-xl" />
                <div className="absolute top-4 right-4 z-10">
                  <DroneIcon />
                </div>
              </div>
              
              {/* Duplicate Action Icons on bottom right under the image to match the mockup exactly */}
              {/* <div className="hidden md:flex justify-end pt-2 border-t border-white/5">
                <ActionIcons />
              </div> */}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SomeOfOurWork;

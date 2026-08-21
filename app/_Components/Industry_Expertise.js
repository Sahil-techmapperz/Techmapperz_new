"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, GraduationCap, Landmark, HeartPulse, Truck, Factory, Store, Plane } from 'lucide-react';

import Ecommerce from "@/public/Industry/E-commerce.webp";
import Education from "@/public/Industry/Education-E-learning.webp";
import Government from "@/public/Industry/Goverment-Public-Sector.webp";
import Healthcare from "@/public/Industry/Healthcare.webp";
import Logistics from "@/public/Industry/Logistic-Supply-Chain.webp";
import Manufacturing from "@/public/Industry/Manufacturing.webp";
import Retail from "@/public/Industry/Retail.webp";
import Travel from "@/public/Industry/Travel-Hospitality.webp";

export const categoryData = [
  {
    name: 'E-Commerce',
    shortName: 'Retail Tech',
    image: Ecommerce,
    desc: "Comprehensive e-commerce solutions to help businesses thrive in the digital marketplace.",
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    accent: "from-blue-600 to-cyan-400",
    categoryTypes: ["B2B Solutions", "Online Marketplaces", "Payment Integration", "Inventory Management"]
  },
  {
    name: 'Education & E-Learning',
    shortName: 'Education',
    image: Education,
    desc: "Digital learning platforms and solutions that transform educational experiences.",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    accent: "from-purple-600 to-pink-500",
    categoryTypes: ["LMS Development", "Virtual Classrooms", "Educational Apps", "Interactive Content"]
  },
  {
    name: 'Government Sector',
    shortName: 'Government',
    image: Government,
    desc: "Digital solutions for efficient governance and public service delivery.",
    icon: <Landmark size={28} strokeWidth={1.5} />,
    accent: "from-amber-500 to-orange-500",
    categoryTypes: ["E-Governance", "Public Services", "Digital Documentation", "Citizen Portals"]
  },
  {
    name: 'Healthcare',
    shortName: 'Healthcare',
    image: Healthcare,
    desc: "Innovative healthcare solutions for improved patient care and management.",
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    accent: "from-rose-600 to-red-500",
    categoryTypes: ["EMR Systems", "Telemedicine", "Healthcare Apps", "Medical Analytics"]
  },
  {
    name: 'Supply Chain',
    shortName: 'Logistics',
    image: Logistics,
    desc: "End-to-end solutions for streamlined logistics and supply chain operations.",
    icon: <Truck size={28} strokeWidth={1.5} />,
    accent: "from-emerald-500 to-teal-400",
    categoryTypes: ["Fleet Management", "Inventory Tracking", "Supply Chain Analytics", "Route Optimization"]
  },
  {
    name: 'Manufacturing',
    shortName: 'Industry 4.0',
    image: Manufacturing,
    desc: "Digital solutions to optimize manufacturing processes and efficiency.",
    icon: <Factory size={28} strokeWidth={1.5} />,
    accent: "from-slate-500 to-gray-400",
    categoryTypes: ["Process Automation", "Quality Control", "Production Planning", "Industrial IoT"]
  },
  {
    name: 'Retail Solutions',
    shortName: 'Retail',
    image: Retail,
    desc: "Innovative retail solutions for enhanced customer experience and operations.",
    icon: <Store size={28} strokeWidth={1.5} />,
    accent: "from-indigo-600 to-blue-500",
    categoryTypes: ["POS Systems", "Inventory Management", "Customer Analytics", "Omnichannel Retail"]
  },
  {
    name: 'Travel & Hospitality',
    shortName: 'Travel',
    image: Travel,
    desc: "Digital solutions for seamless travel and hospitality experiences.",
    icon: <Plane size={28} strokeWidth={1.5} />,
    accent: "from-sky-500 to-blue-400",
    categoryTypes: ["Booking Systems", "Hotel Management", "Travel Apps", "Customer Experience"]
  }
];

const industryTabs = [
  {
    id: 'infrastructure',
    name: 'Infrastructure & Transport',
    tag: 'INFRASTRUCTURE',
    title: 'Drone survey, topographic mapping, LiDAR, corridor mapping, terrain models and GIS/CAD deliverables for railway, highway, civil infrastructure and engineering projects.',
    description: '',
    buttonText: 'Explore Infrastructure',
    buttonLink: '/industry/infrastructure',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Urban & Rural.webp'
  },
  {
    id: 'utilities',
    name: 'Utilities & Energy',
    tag: 'UTILITIES & ENERGY',
    title: 'GIS mapping, pipeline and network digitisation, utility asset databases, drone surveys and Web GIS support for water, power, telecom, oil & gas and renewable-energy projects.',
    description: '',
    buttonText: 'Explore Utilities',
    buttonLink: '/industry/utilities',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Gas Pipeline.webp'
  },
  {
    id: 'mining',
    name: 'Mining & Resources',
    tag: 'MINING & RESOURCES',
    title: 'Mine mapping, feature extraction, drone data processing, terrain models, haul-road mapping, stockpile volumetrics and GIS/CAD production for mining and natural-resource projects.',
    description: '',
    buttonText: 'Explore Mining',
    buttonLink: '/industry/mining',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'government',
    name: 'Government',
    tag: 'GOVERNMENT',
    title: 'Cadastral mapping, land-record digitisation, parcel GIS, municipal mapping, public asset inventories, georeferencing and land-use databases for government and land projects.',
    description: '',
    buttonText: 'Explore Government GIS',
    buttonLink: '/industry/government',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'architecture',
    name: 'Architecture & Planning',
    tag: 'ARCHITECTURE & PLANNING',
    title: 'Topographic mapping, existing-condition surveys, land-use mapping, building footprints, utilities, drainage and GIS base maps for architecture, planning and development projects.',
    description: '',
    buttonText: 'Explore Planning GIS',
    buttonLink: '/industry/architecture',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Urban & Rural.webp'
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Environment',
    tag: 'AGRICULTURE & ENVIRONMENT',
    title: 'Plantation mapping, land-use classification, vegetation and water-body mapping, terrain analysis, drainage, remote sensing and change-detection support for land and environmental projects.',
    description: '',
    buttonText: 'Explore Agriculture & Environment',
    buttonLink: '/industry/agriculture',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  }
];

const sansSerifStyle = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const IndustryExpertise = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = industryTabs[activeIdx];

  return (
    <section className="relative text-white overflow-hidden" style={sansSerifStyle}>

      {/* ── HEADER SECTION ── */}
      <div
        className="py-10 md:py-16 text-center border-b relative z-10"
        style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[#6ac045] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
            INDUSTRIES WE SUPPORT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={sansSerifStyle}>
            Geospatial Support Across Technical & Infrastructure Sectors
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-[15px] max-w-3xl mx-auto leading-relaxed" style={sansSerifStyle}>
            We support industries where reliable maps, terrain, assets and spatial data are essential for planning, engineering and field operations. Our core capabilities include GIS mapping, drone survey, LiDAR and geospatial data processing, with Web development and digital applications available where required.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTAINER (Tabs + Content) ── */}
      <div className="w-full flex justify-center relative z-10 border-b" style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}>
        <div className="flex flex-col md:flex-row relative z-10 w-full max-w-[1440px]">
          
          {/* ── LEFT TABS BAR ── */}
          <div 
            className="w-full md:w-[35%] lg:w-[30%] border-b md:border-b-0 md:border-r overflow-x-auto md:overflow-x-hidden md:overflow-y-auto scrollbar-none z-20 flex flex-col" 
            style={{ borderColor: '#2d2d2d', backgroundColor: '#1a1a1a' }}
          >
            <div className="flex md:flex-col min-w-max md:min-w-0 flex-1">
              {industryTabs.map((tab, index) => {
                const isActive = activeIdx === index;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIdx(index)}
                    className={`py-4 px-5 sm:px-6 md:px-8 text-left text-xs sm:text-sm md:text-[15px] font-medium tracking-wide relative transition-all duration-300 hover:text-white border-b border-[#2d2d2d]/30 last:border-b-0 whitespace-nowrap md:whitespace-normal flex items-center min-h-[60px] md:min-h-[80px] ${isActive ? 'bg-[#222222]' : ''}`}
                    style={{
                      ...sansSerifStyle,
                      color: isActive ? '#1656b8' : '#9ca3af'
                    }}
                  >
                    <span className="relative z-10 w-full pr-4">{tab.name}</span>
                    {isActive && (
                      <>
                        {/* Mobile active indicator (bottom) */}
                        <motion.div
                          layoutId="activeTabIndicatorMobile"
                          className="absolute bottom-0 left-0 right-0 h-[3px] md:hidden"
                          style={{ backgroundColor: '#1656b8' }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* Desktop active indicator (left) */}
                        <motion.div
                          layoutId="activeTabIndicatorDesktop"
                          className="hidden md:block absolute top-0 bottom-0 left-0 w-[4px]"
                          style={{ backgroundColor: '#1656b8' }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* Subtle active background glow */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#1656b8]/10 to-transparent z-0" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* ── MAIN CTA (Desktop) ── */}
            <div className="hidden md:block p-4 sm:p-6 md:p-8 mt-auto border-t border-[#2d2d2d]/30">
              <Link
                href="/industry"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#6ac045] hover:bg-[#5bb038] text-[#1a1a1a] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
                style={sansSerifStyle}
              >
                Explore All Industries
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── SCENIC CONTENT PANEL ── */}
          <div className="relative min-h-[400px] md:min-h-[600px] w-full md:w-[65%] lg:w-[70%] flex items-center justify-center py-8 md:py-16">

            {/* Full-width dark background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Industry/forest_silhouette_bg.png"
                alt="Dark mountain landscape"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Dark gradient overlay for a premium look */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 z-[1]" />
            </div>

            {/* Content grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full px-6 sm:px-10 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
              >
                {/* Left Column — Text content */}
                <div className="flex flex-col items-start text-left z-10">
                  <span className="text-gray-400 text-xs font-bold tracking-[0.15em] uppercase mb-1.5 sm:mb-3" style={sansSerifStyle}>
                    {activeTab.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold text-white leading-snug mb-2 sm:mb-5" style={sansSerifStyle}>
                    {activeTab.title}
                  </h3>
                  {activeTab.description && (
                    <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-8 max-w-lg" style={sansSerifStyle}>
                      {activeTab.description}
                    </p>
                  )}
                </div>

                {/* Right Column — Overlapping image composition */}
                <div className="hidden sm:flex relative justify-center md:justify-end items-center w-full h-[230px] sm:h-[360px] md:h-[420px]">
                  {/* ① Large main landscape photo */}
                  <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] z-0">
                    <Image
                      src={activeTab.mainImage}
                      alt={activeTab.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 50vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* ② Map card — overlaps from the left, vertically centered */}
                  <div className="absolute left-2 bottom-0 sm:left-[10%] sm:bottom-0 md:left-[15%] md:bottom-[-20px] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-gray-200 bg-white w-[115px] h-[115px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] z-10">
                    <Image
                      src={activeTab.overlayImage}
                      alt="GIS Map Overlay"
                      fill
                      sizes="(max-width: 768px) 50vw, 40vw"
                      className="object-cover object-center p-1.5"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* ── MAIN CTA (Mobile) ── */}
      <div className="md:hidden w-full flex justify-center p-6 border-b" style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}>
        <Link
          href="/industry"
          className="w-full max-w-sm inline-flex justify-center items-center gap-2 bg-[#6ac045] hover:bg-[#5bb038] text-[#1a1a1a] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md"
          style={sansSerifStyle}
        >
          Explore All Industries
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default IndustryExpertise;

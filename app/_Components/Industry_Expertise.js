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
    buttonLink: '/industry#industries',
    mainImage: '/home-Infrastructure/DEM.PNG',
    overlayImage: '/home-Infrastructure/Railway-Project.png'
  },
  {
    id: 'utilities',
    name: 'Utilities & Energy',
    tag: 'UTILITIES & ENERGY',
    title: 'GIS mapping, pipeline and network digitisation, utility asset databases, drone surveys and Web GIS support for water, power, telecom, oil & gas and renewable-energy projects.',
    description: '',
    buttonText: 'Explore Utilities',
    buttonLink: '/industry#industries',
    mainImage: '/home-Utilities&Energy/Gujrat_4_1.png',
    overlayImage: '/home-Utilities&Energy/Gujrat_1.PNG'
  },
  {
    id: 'mining',
    name: 'Mining & Resources',
    tag: 'MINING & RESOURCES',
    title: 'Mine mapping, feature extraction, drone data processing, terrain models, haul-road mapping, stockpile volumetrics and GIS/CAD production for mining and natural-resource projects.',
    description: '',
    buttonText: 'Explore Mining',
    buttonLink: '/industry#industries',
    mainImage: '/home-Mining&Reso/Mining_1.PNG',
    overlayImage: '/home-Mining&Reso/Mining_3.PNG'
  },
  {
    id: 'government',
    name: 'Government',
    tag: 'GOVERNMENT',
    title: 'Cadastral mapping, land-record digitisation, parcel GIS, municipal mapping, public asset inventories, georeferencing and land-use databases for government and land projects.',
    description: '',
    buttonText: 'Explore Government GIS',
    buttonLink: '/industry#industries',
    mainImage: '/home-Goverment/Capture2.png',
    overlayImage: '/home-Goverment/Capture3.png'
  },
  {
    id: 'architecture',
    name: 'Architecture & Planning',
    tag: 'ARCHITECTURE & PLANNING',
    title: 'Topographic mapping, existing-condition surveys, land-use mapping, building footprints, utilities, drainage and GIS base maps for architecture, planning and development projects.',
    description: '',
    buttonText: 'Explore Planning GIS',
    buttonLink: '/industry#industries',
    mainImage: '/home-Architecture&Planning/Spain_rural.png',
    overlayImage: '/home-Architecture&Planning/Spain1.png'
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Environment',
    tag: 'AGRICULTURE & ENVIRONMENT',
    title: 'Plantation mapping, land-use classification, vegetation and water-body mapping, terrain analysis, drainage, remote sensing and change-detection support for land and environmental projects.',
    description: '',
    buttonText: 'Explore Agriculture & Environment',
    buttonLink: '/industry#industries',
    mainImage: '/home-Agriculture/Hooghly-2.webp',
    overlayImage: '/home-Agriculture/Hooghly-1.webp'
  }
];

const sansSerifStyle = {
  fontFamily: 'var(--font-primary), "IBM Plex Sans", sans-serif'
};

const IndustryExpertise = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = industryTabs[activeIdx];

  return (
    <section className="relative text-white overflow-hidden" style={{ ...sansSerifStyle, backgroundColor: '#0C2E60' }}>

      {/* ── HEADER SECTION ── */}
      <div
        className="py-4 md:py-10 text-center border-b relative z-10"
        style={{ backgroundColor: '#0C2E60', borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
            INDUSTRIES WE SUPPORT
          </span>
          <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white mb-2.5 tracking-tight leading-[1.2]" style={sansSerifStyle}>
            Geospatial Support Across Technical & Infrastructure Sectors
          </h2>
          <p className="text-gray-200 text-base md:text-[18px] max-w-3xl mx-auto leading-[1.6]" style={sansSerifStyle}>
            We support industries where reliable maps, terrain, assets and spatial data are essential for planning, engineering and field operations. Our core capabilities include GIS mapping, drone survey, LiDAR and geospatial data processing, with Web development and digital applications available where required.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTAINER (Tabs + Content) ── */}
      <div className="w-full flex justify-center relative z-10 border-b" style={{ backgroundColor: '#0C2E60', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="flex flex-col md:flex-row relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          
          {/* ── LEFT TABS BAR ── */}
          <div 
            className="w-full md:w-[35%] lg:w-[30%] border-b md:border-b-0 md:border-r overflow-x-auto md:overflow-x-hidden md:overflow-y-auto scrollbar-none z-20 flex flex-col" 
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: '#0C2E60' }}
          >
            <div className="flex md:flex-col min-w-max md:min-w-0 flex-1">
              {industryTabs.map((tab, index) => {
                const isActive = activeIdx === index;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIdx(index)}
                    className={`py-2.5 px-4 sm:px-5 md:px-6 text-left text-[14px] md:text-[15px] tracking-wide relative transition-all duration-300 text-white border-b border-white/10 last:border-b-0 whitespace-nowrap md:whitespace-normal flex items-center min-h-[46px] md:min-h-[52px] ${isActive ? 'bg-[#10366f] font-semibold' : 'hover:bg-white/[0.05] font-normal'}`}
                    style={{
                      ...sansSerifStyle,
                      color: '#ffffff'
                    }}
                  >
                    <span className="relative z-10 w-full pr-4">{tab.name}</span>
                    {isActive && (
                      <>
                        {/* Mobile active indicator (bottom) */}
                        <motion.div
                          layoutId="activeTabIndicatorMobile"
                          className="absolute bottom-0 left-0 right-0 h-[3px] md:hidden"
                          style={{ backgroundColor: '#5EEAD4' }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* Desktop active indicator (left) */}
                        <motion.div
                          layoutId="activeTabIndicatorDesktop"
                          className="hidden md:block absolute top-0 bottom-0 left-0 w-[4px]"
                          style={{ backgroundColor: '#5EEAD4' }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* Subtle active background glow */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-teal-500/15 to-transparent z-0" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* ── MAIN CTA (Desktop) ── */}
            <div className="hidden md:block p-3 md:p-4 mt-auto border-t border-white/10">
              <Link
                href="/industry"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#1656B8] hover:bg-[#124699] text-white font-bold text-[14px] md:text-[15px] px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md min-h-[42px] md:min-h-[44px]"
                style={sansSerifStyle}
              >
                Explore All Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── SCENIC CONTENT PANEL ── */}
          <div className="relative min-h-0 sm:min-h-[280px] md:min-h-[360px] lg:min-h-[380px] w-full md:w-[65%] lg:w-[70%] flex items-center justify-center py-4 sm:py-6 md:py-10">

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
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C2E60] via-[#0C2E60]/85 to-black/50 z-[1]" />
            </div>

            {/* Content grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
              >
                {/* Left Column — Text content */}
                <div className="flex flex-col items-start text-left z-10">
                  <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase mb-1.5 sm:mb-3" style={sansSerifStyle}>
                    {activeTab.tag}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-snug mb-2 sm:mb-4" style={sansSerifStyle}>
                    {activeTab.title}
                  </h3>

                  {/* Mobile-only image composition (< sm) matching PC view */}
                  <div className="sm:hidden w-full relative my-3 pb-8">
                    {/* ① Main landscape photo */}
                    <div className="relative w-[85%] ml-auto h-[175px] rounded-lg overflow-hidden border border-white/10 shadow-lg z-0">
                      <Image
                        src={activeTab.mainImage}
                        alt={activeTab.title}
                        fill
                        sizes="85vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    {/* ② Elevated GIS Map Overlay card */}
                    <div className="absolute left-0 bottom-0 rounded-lg overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.7)] border-2 border-white bg-white w-[115px] h-[115px] z-10">
                      <Image
                        src={activeTab.overlayImage}
                        alt="GIS Map Overlay"
                        fill
                        sizes="115px"
                        className="object-cover object-center p-1"
                      />
                    </div>
                  </div>

                  {activeTab.description && (
                    <p className="text-gray-200 text-[15px] sm:text-[16px] leading-[1.65] mb-2 sm:mb-6 max-w-lg mt-2 sm:mt-0" style={sansSerifStyle}>
                      {activeTab.description}
                    </p>
                  )}
                </div>

                {/* Right Column — Overlapping image composition (desktop/tablet) */}
                <div className="hidden sm:flex relative justify-center md:justify-end items-center w-full h-[200px] sm:h-[260px] md:h-[300px]">
                  {/* ① Large main landscape photo */}
                  <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] z-0">
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
                  <div className="absolute left-2 bottom-0 sm:left-[10%] sm:bottom-0 md:left-[15%] md:bottom-[-8px] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-gray-200 bg-white w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] z-10">
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
      <div className="md:hidden w-full flex justify-center p-6 border-b" style={{ backgroundColor: '#0C2E60', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Link
          href="/industry"
          className="w-full max-w-sm inline-flex justify-center items-center gap-2 bg-[#1656B8] hover:bg-[#124699] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md min-h-[46px]"
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

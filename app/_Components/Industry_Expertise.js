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
    id: 'infrastructure-aec',
    name: 'Infrastructure & AEC',
    tag: 'CONSTRUCTION',
    title: 'Topographic surveys, corridor mapping, construction monitoring, terrain models, cross-sections, asset inventories and GIS/CAD deliverables for roads, railways and civil-engineering projects.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/infrastructure-aec',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Urban & Rural.webp'
  },
  {
    id: 'government',
    name: 'Government & Land Administration',
    tag: 'SPACE & CADASTRAL',
    title: 'Cadastral mapping, property mapping, municipal GIS, land-record digitisation, public asset inventories, georeferencing and land-use databases.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/government-public-sector',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'utilities',
    name: 'Utilities & Energy',
    tag: 'ENERGY & WATER',
    title: 'GIS mapping and asset databases for water, wastewater, power, oil and gas pipelines, renewable energy, telecom and associated network infrastructure.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/logistics-supply-chain',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Gas Pipeline.webp'
  },
  {
    id: 'mining',
    name: 'Mining & Natural Resources',
    tag: 'MINERALS & REMOTE SENSING',
    title: 'Mine feature extraction, topographic mapping, stockpile and volumetric analysis, haul-road mapping, terrain models, operational assets and environmental monitoring.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/manufacturing',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'architecture-planning',
    name: 'Architecture, Planning & Urban Development',
    tag: 'URBAN DEVELOPMENT',
    title: 'Base mapping, existing-condition surveys, building footprints, land-use mapping, utility inventories, drainage maps and planning-support databases.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/retail',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Urban & Rural.webp'
  },
  {
    id: 'transportation-rail',
    name: 'Transportation & Rail',
    tag: 'TRANSIT SYSTEMS',
    title: 'Railway and highway corridor mapping, navigation datasets, road assets, route networks, terrain products and transport-infrastructure inventories.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/travel-hospitality',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'agriculture-environment',
    name: 'Agriculture & Environment',
    tag: 'FORESTRY & HYDROLOGY',
    title: 'Plantation mapping, crop and vegetation inventories, land-use classification, terrain analysis, drainage, water-body mapping and change detection.',
    description: '',
    buttonText: 'Explore Industries',
    buttonLink: '/industry/healthcare',
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
            Tailored Geospatial Workflows for Diverse Sectors
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-[15px] max-w-3xl mx-auto leading-relaxed" style={sansSerifStyle}>
            Our methodology, feature structure and deliverables are planned around how each industry collects, reviews and uses spatial information.
          </p>
        </div>
      </div>

      {/* ── TABS BAR ── */}
      <div
        className="border-b relative z-10 overflow-x-auto scrollbar-none"
        style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-8 md:gap-10 min-w-max">
            {industryTabs.map((tab, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIdx(index)}
                  className="py-3 sm:py-4 px-1 text-xs sm:text-sm font-medium tracking-wide relative transition-colors duration-300 whitespace-nowrap hover:text-white"
                  style={{
                    ...sansSerifStyle,
                    color: isActive ? '#1656b8' : '#9ca3af'
                  }}
                >
                  {tab.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: '#1656b8' }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SCENIC CONTENT PANEL ── */}
      <div className="relative min-h-0 md:min-h-[580px] w-full flex items-center justify-center py-6 md:py-20">

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45 z-[1]" />
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-16 items-center"
          >
            {/* Left Column — Text content */}
            <div className="flex flex-col items-start text-left z-10">
              <span className="text-gray-400 text-xs font-bold tracking-[0.15em] uppercase mb-1.5 sm:mb-3" style={sansSerifStyle}>
                {activeTab.tag}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-snug mb-2 sm:mb-5" style={sansSerifStyle}>
                {activeTab.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-8 max-w-lg" style={sansSerifStyle}>
                {activeTab.description}
              </p>

              <Link
                href={activeTab.buttonLink}
                className="inline-flex justify-center items-center gap-2 bg-[#082046] hover:bg-[#061836] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
                style={sansSerifStyle}
              >
                {activeTab.buttonText}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
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
    </section>
  );
};

export default IndustryExpertise;

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
    id: 'government',
    name: 'Government',
    tag: 'SPACE',
    title: 'AGiSAC Facilitates Effective Governance in Himachal Pradesh with ArcGIS',
    description: 'AGiSAC works to identify decision-making applications with the help of user departments and provides tailor-made GIS solutions for better decision-making in government departments using ArcGIS.',
    buttonText: 'Read the story',
    buttonLink: '/industry/government',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'utilities',
    name: 'Utilities',
    tag: 'ENERGY & WATER',
    title: 'Real-time Asset Mapping & Outage Management for Smart Grids',
    description: 'Deploying secure cloud Web GIS solutions to map electricity distribution lines, water pipelines, and gas networks. Automating asset inspections and field dispatch workflows.',
    buttonText: 'Read the story',
    buttonLink: '/industry/utilities',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Gas Pipeline.webp'
  },
  {
    id: 'infra-aec',
    name: 'Infra & AEC',
    tag: 'CONSTRUCTION',
    title: 'Highway Alignment Feasibility & BIM-GIS Integration',
    description: 'Accelerating corridor design and pre-construction surveys with drone photogrammetry and high-resolution DTMs. Linking BIM files directly to spatial web maps.',
    buttonText: 'Read the story',
    buttonLink: '/industry/infra-aec',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Urban & Rural.webp'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tag: 'BUSINESS INTELLIGENCE',
    title: 'Empowering Spatial Decisions with Enterprise GIS Solutions',
    description: 'Integrating geographic data with CRM and ERP platforms to enable market research, customer profiling, and routing intelligence for global operations.',
    buttonText: 'Read the story',
    buttonLink: '/industry/enterprise',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/gis_images/Web_GIS_Development_Banner.webp'
  },
  {
    id: 'water',
    name: 'Water',
    tag: 'HYDROLOGY',
    title: 'Watershed Conservation & Flood Hazard Mapping',
    description: 'Utilizing DEM and terrain analysis to monitor catchment area runoffs, estimate basin capacities, and generate high-precision flood risk maps for municipal authorities.',
    buttonText: 'Read the story',
    buttonLink: '/industry/water',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'natural-resources',
    name: 'Natural Resources',
    tag: 'ENVIRONMENT',
    title: 'Forest Canopy Density Mapping & Mineral Resource Tracking',
    description: 'Using remote sensing algorithms and multispectral satellite imaging to analyze forest health and support environmental impact assessments for mine planning.',
    buttonText: 'Read the story',
    buttonLink: '/industry/natural-resources',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'telecom',
    name: 'Telecom',
    tag: 'NETWORK PLANNING',
    title: '5G Propagation Analysis & Fiber Route Optimization',
    description: 'Planning optimal fiber optic lines and cell tower viewsheds by modeling urban terrain and foliage interference using high-density 3D LiDAR point clouds.',
    buttonText: 'Read the story',
    buttonLink: '/industry/telecom',
    mainImage: '/Industry/himachal_landscape.png',
    overlayImage: '/Industry/himachal_map.png'
  },
  {
    id: 'transportation',
    name: 'Transportation',
    tag: 'TRANSIT SYSTEMS',
    title: 'Railway Infrastructure & Multi-Modal Transit GIS Dashboards',
    description: 'Enabling railway operators to inspect track conditions, monitor rolling stock positions, and coordinate maintenance logistics via connected spatial dashboards.',
    buttonText: 'Read the story',
    buttonLink: '/industry/transportation',
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
        className="py-16 text-center border-b relative z-10"
        style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={sansSerifStyle}>
            Industry
          </h2>
          <p className="text-gray-400 text-sm md:text-[15px] max-w-3xl mx-auto leading-relaxed" style={sansSerifStyle}>
            Leading organizations in virtually every field use Esri technology to support daily operations and
            guide long-term strategies. Explore stories of organizations innovating with ArcGIS.
          </p>
        </div>
      </div>

      {/* ── TABS BAR ── */}
      <div
        className="border-b relative z-10 overflow-x-auto scrollbar-none"
        style={{ backgroundColor: '#1a1a1a', borderColor: '#2d2d2d' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 md:gap-10 min-w-max">
            {industryTabs.map((tab, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIdx(index)}
                  className="py-4 px-1 text-sm font-medium tracking-wide relative transition-colors duration-300 whitespace-nowrap hover:text-white"
                  style={{
                    ...sansSerifStyle,
                    color: isActive ? '#007ac2' : '#9ca3af'
                  }}
                >
                  {tab.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: '#007ac2' }}
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
      <div className="relative min-h-[500px] md:min-h-[580px] w-full flex items-center justify-center py-16 md:py-20">

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
            className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Left Column — Text content */}
            <div className="flex flex-col items-start text-left z-10">
              <span className="text-gray-400 text-xs font-bold tracking-[0.15em] uppercase mb-3" style={sansSerifStyle}>
                {activeTab.tag}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-snug mb-5" style={sansSerifStyle}>
                {activeTab.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-8 max-w-lg" style={sansSerifStyle}>
                {activeTab.description}
              </p>

              <Link
                href={activeTab.buttonLink}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-90 transition-all duration-300 shadow-md"
                style={{
                  ...sansSerifStyle,
                  backgroundColor: '#007ac2'
                }}
              >
                {activeTab.buttonText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Right Column — Overlapping image composition */}
            <div className="relative flex justify-center md:justify-end items-center w-full h-[360px] md:h-[420px]">
              {/* ① Large main landscape photo */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] z-0">
                <Image
                  src={activeTab.mainImage}
                  alt={activeTab.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* ② Map card — overlaps from the left, vertically centered */}
              <div className="absolute left-[5%] bottom-[10px] sm:left-[10%] sm:bottom-0 md:left-[15%] md:bottom-[-20px] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-gray-200 bg-white w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] z-10">
                <Image
                  src={activeTab.overlayImage}
                  alt="GIS Map Overlay"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
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

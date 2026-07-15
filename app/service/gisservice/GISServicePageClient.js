"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function GISServicePageClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  const [isLayersHovered, setIsLayersHovered] = useState(false);

  const formatCategories = ['All', 'GIS', 'CAD', 'Raster', 'Point Cloud', 'Database'];

  const formats = [
    { name: 'GeoPackage', ext: '.gpkg', cat: 'GIS' },
    { name: 'File Geodatabase', ext: '.gdb', cat: 'GIS' },
    { name: 'Shapefile', ext: '.shp', cat: 'GIS' },
    { name: 'GeoJSON', ext: '.geojson', cat: 'GIS' },
    { name: 'KML / KMZ', ext: '.kml / .kmz', cat: 'GIS' },
    { name: 'PostGIS', ext: 'Spatial database', cat: 'Database' },
    { name: 'DWG / DXF', ext: 'CAD deliverables', cat: 'CAD' },
    { name: 'GeoTIFF', ext: 'Orthomosaic / raster', cat: 'Raster' },
    { name: 'LAS / LAZ', ext: 'Point cloud', cat: 'Point Cloud' },
  ];

  const filteredFormats = activeTab === 'All' 
    ? formats 
    : formats.filter(f => f.cat === activeTab);

  const faqData = [
    {
      question: "What input data can Techmapperz work with?",
      answer: "Satellite and aerial imagery, drone orthophotos, raw or classified LiDAR, CAD drawings, scanned maps, survey data, GPS points, legacy GIS databases and client-defined feature catalogues."
    },
    {
      question: "Which GIS output formats are available?",
      answer: "GeoPackage, File Geodatabase, Shapefile, GeoJSON, KML/KMZ, PostGIS, GeoTIFF and other formats. CAD and point-cloud outputs can also be delivered when included in the scope."
    },
    {
      question: "How do you maintain data quality?",
      answer: "We follow project-specific QA/QC checklists covering topology, geometry, attribution, connectivity, edge matching, completeness, naming, projection and format compliance."
    },
    {
      question: "Can you first complete a pilot or sample area?",
      answer: "Yes. A pilot is recommended for projects with a new feature catalogue, complex interpretation rules, large volume or strict acceptance requirements."
    },
    {
      question: "Can GIS deliverables be connected to a Web GIS application?",
      answer: "Yes. Techmapperz also develops Web GIS, geoportals, GIS dashboards, mobile field applications and spatial-database integrations."
    }
  ];

  return (
    <div className="bg-white text-[#17202a] font-sans antialiased selection:bg-[#1267b1]/10 pt-28">
      {/* Floating Animations CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .animate-float-slow {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 7s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-b from-white via-[#f4f7fa]/30 to-[#f4f7fa]/50">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(rgba(11,35,65,1)_1px,transparent_1px),linear-gradient(90deg,rgba(11,35,65,1)_1px,transparent_1px)] bg-[size:42px_42px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[18%] left-[11%] w-[400px] h-[400px] bg-[#1267b1]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[25%] right-[16%] w-[450px] h-[450px] bg-[#078a86]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6c7887]">
                <Link href="/" className="hover:text-[#1267b1] transition-colors">Home</Link>
                <span>›</span>
                <span className="text-[#1267b1]">Services</span>
                <span>›</span>
                <span className="text-[#0c2e60] font-bold">GIS & Mapping Services</span>
              </div>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                GIS & Mapping Services
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0c2e60] tracking-tight leading-[1.1] sm:max-w-xl">
                Reliable Geospatial Data for Better Planning and Asset Decisions
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg md:text-[19px] text-[#5f6d7b] leading-relaxed max-w-[620px]">
                Techmapperz creates, converts, manages and analyses geospatial data for infrastructure, utilities, government, mining, agriculture and land-management projects.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-[0_14px_26px_rgba(227,52,52,0.22)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Discuss Your GIS Requirement →
                </Link>
                <Link 
                  href="#services" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-[#cfdbe7] hover:border-[#1267b1] hover:text-[#1267b1] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Explore GIS Services
                </Link>
              </div>

              {/* Hero Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">Multi-format delivery</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">GIS, CAD, raster, point-cloud and database outputs</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">Structured QA/QC</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">Geometry, topology, attribute and positional validation</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">Scalable production</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">From POCs to large-area mapping programmes</span>
                </div>
              </div>
            </div>

            {/* Right Column: Styled Map Illustration */}
            <div className="relative">
              <div className="bg-white border border-[#d7e2ec] rounded-[28px] p-4 shadow-[0_22px_55px_rgba(11,35,65,0.1)] relative z-10">
                {/* Map Top Bar */}
                <div className="flex justify-between items-center px-1 pb-3 text-xs font-bold text-[#516171]">
                  <span>PROJECT MAP · FEATURE EXTRACTION</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e33434]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f0b33f]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#078a86]" />
                  </div>
                </div>

                {/* Map Stage SVG Container */}
                <div className="relative rounded-[19px] overflow-hidden bg-[#eaf1e7] aspect-[1.04/1] shadow-inner border border-gray-150">
                  <svg viewBox="0 0 620 600" className="w-full h-full block">
                    <defs>
                      <linearGradient id="land" x1="0" x2="1">
                        <stop offset="0" stopColor="#dce6d5" />
                        <stop offset="1" stopColor="#c7d9c5" />
                      </linearGradient>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M30 0H0V30" fill="none" stroke="#315f72" strokeOpacity=".13" strokeWidth="1" />
                      </pattern>
                    </defs>
                    
                    {/* Land mass base */}
                    <rect width="620" height="600" fill="url(#land)" />
                    
                    {/* Water bodies */}
                    <path d="M0 112C90 72 166 102 240 84s158-66 247-43c60 15 93 44 133 61v93c-71-15-127-9-187 11-95 31-190 20-276-9C91 175 45 171 0 186Z" fill="#b8d3ea" />
                    <path d="M-20 450C80 398 136 363 208 360c92-4 158 55 255 24 61-20 109-62 177-73v84c-86 28-129 86-227 105-84 16-156-24-235-14-86 10-132 49-198 71Z" fill="#aacde6" />
                    
                    {/* Map Parcels */}
                    <g fill="#eef0dd" stroke="#a6b39b" strokeWidth="2">
                      <path d="M45 50h115l20 93-130 31z" />
                      <path d="M187 45h120l-3 115-112-8z" />
                      <path d="M330 42h118l28 114-136 15z" />
                      <path d="M472 42h100l21 132-105-7z" />
                      <path d="M62 218l128-25 31 108-140 20z" />
                      <path d="M228 190l114-12 18 123-121 7z" />
                      <path d="M382 184l134-8 23 124-142 10z" />
                      <path d="M44 344l138-25 22 94-142 29z" />
                      <path d="M222 331l125-9 8 101-129 11z" />
                      <path d="M381 324l154-16 23 106-162 13z" />
                      <path d="M62 463l123-25 18 100-130 17z" />
                      <path d="M224 447l134-13 17 103-141 10z" />
                      <path d="M395 447l147-17 25 117-151 7z" />
                    </g>
                    
                    {/* Primary roads (Thick white with dark dash) */}
                    <path d="M-40 295C80 251 146 258 252 286c111 30 204 24 409-31" fill="none" stroke="#ffffff" strokeWidth="28" />
                    <path d="M-40 295C80 251 146 258 252 286c111 30 204 24 409-31" fill="none" stroke="#6f7f8c" strokeWidth="4" strokeDasharray="18 10" />
                    
                    {/* Secondary roads */}
                    <path d="M123 -30C156 110 159 211 205 337c29 79 56 173 60 293" fill="none" stroke="#fff" strokeWidth="20" />
                    <path d="M123 -30C156 110 159 211 205 337c29 79 56 173 60 293" fill="none" stroke="#6f7f8c" strokeWidth="3" strokeDasharray="13 9" />
                    
                    {/* Building footprints (Reddish brown) */}
                    <g fill="#d56059" opacity=".92">
                      <rect x="93" y="229" width="31" height="22" transform="rotate(-12 93 229)" />
                      <rect x="132" y="218" width="34" height="24" transform="rotate(-12 132 218)" />
                      <rect x="399" y="217" width="36" height="27" transform="rotate(-4 399 217)" />
                      <rect x="441" y="211" width="28" height="32" transform="rotate(-4 441 211)" />
                      <rect x="294" y="466" width="48" height="38" transform="rotate(-5 294 466)" />
                      <rect x="437" y="487" width="57" height="41" transform="rotate(-5 437 487)" />
                    </g>
                    
                    {/* Highlighted selection (Blue stroke) */}
                    <g fill="none" stroke="#0d76b8" strokeWidth="4">
                      <path d="M34 336L180 310l12 105-137 29z" />
                      <path d="M219 329l129-8 8 102-131 10z" />
                      <path d="M380 324l155-15 23 106-163 13z" />
                    </g>
                    
                    {/* Elevation Contours (Green lines) */}
                    <g fill="none" stroke="#078a86" strokeWidth="2.4" opacity=".9">
                      <path d="M20 92c80-40 147-38 221-9s145 32 235 5c52-16 92-14 131 6" />
                      <path d="M15 111c77-34 144-34 219-7s151 35 244 10c51-14 89-11 129 8" />
                      <path d="M31 527c69-37 135-45 208-31s143 45 227 36c59-7 94-27 130-48" />
                      <path d="M27 551c71-33 141-37 216-20s141 44 225 32c54-8 94-26 130-43" />
                    </g>
                    
                    {/* Grid Pattern overlay */}
                    <rect width="620" height="600" fill="url(#grid)" />
                    
                    {/* Marker pins */}
                    <circle cx="446" cy="214" r="10" fill="#e33434" stroke="#fff" strokeWidth="5" />
                    <path d="M446 210c-18 0-32 14-32 32 0 24 32 58 32 58s32-34 32-58c0-18-14-32-32-32Zm0 43a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z" fill="#e33434" />
                  </svg>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute z-20 right-[-15px] top-[14%] w-[185px] bg-white/95 backdrop-blur-md border border-[#d7e2ec] shadow-lg rounded-xl p-3.5 animate-float-slow hidden md:block">
                <strong className="block text-xs text-[#0c2e60] font-bold">Mapped Features</strong>
                <span className="block text-[11px] text-[#6b7987] mt-0.5">Roads · Parcels · Buildings</span>
                <div className="flex items-end gap-1.5 h-8 mt-2.5">
                  <span className="block w-3 rounded-[3px_3px_1px_1px] bg-gradient-to-t from-[#1267b1] to-[#2f80d0] h-[35%]" />
                  <span className="block w-3 rounded-[3px_3px_1px_1px] bg-gradient-to-t from-[#1267b1] to-[#2f80d0] h-[62%]" />
                  <span className="block w-3 rounded-[3px_3px_1px_1px] bg-gradient-to-t from-[#1267b1] to-[#2f80d0] h-[48%]" />
                  <span className="block w-3 rounded-[3px_3px_1px_1px] bg-gradient-to-t from-[#1267b1] to-[#2f80d0] h-[88%]" />
                  <span className="block w-3 rounded-[3px_3px_1px_1px] bg-gradient-to-t from-[#1267b1] to-[#2f80d0] h-[72%]" />
                </div>
              </div>

              <div className="absolute z-20 left-[-20px] bottom-[8%] w-[215px] bg-white/95 backdrop-blur-md border border-[#d7e2ec] shadow-lg rounded-xl p-3.5 animate-float-slower hidden md:block">
                <strong className="block text-xs text-[#0c2e60] font-bold">Quality Status</strong>
                <span className="block text-[11px] text-[#6b7987] mt-0.5">Topology and attributes verified</span>
                <div className="h-2 bg-gray-100 rounded-full mt-2.5 overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-[#078a86] to-[#43b9aa] rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Introduction with Stacked Map Layers */}
      <section className="py-24" id="about">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
            
            {/* Visual stacked panel */}
            <div 
              className="relative bg-[#f4f7fa] rounded-3xl p-6 min-h-[440px] overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setIsLayersHovered(true)}
              onMouseLeave={() => setIsLayersHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1267b1]/5 pointer-events-none" />
              
              {/* Stacked Layers Container */}
              <div className="absolute inset-[30px] sm:inset-[40px]">
                {/* Layer 1: Bottom (Geology Map) */}
                <div 
                  className="absolute inset-[24px_16px_50px_40px] rounded-2xl border border-white/80 shadow-md overflow-hidden bg-[#cad9c0] transition-all duration-500 ease-out"
                  style={{
                    transform: isLayersHovered 
                      ? 'rotate(-11deg) translate(-20px, -10px) scale(0.95)' 
                      : 'rotate(-7deg) translate(0px, 0px) scale(1)',
                    zIndex: 10
                  }}
                >
                  <svg viewBox="0 0 440 320" className="w-full h-full block">
                    <rect width="440" height="320" fill="#cad9c0" />
                    <path d="M0 48C90 5 133 48 220 25s135-14 220 19v83c-61 21-109 22-182 1S101 91 0 138Z" fill="#a8cce0" />
                    <path d="M0 236c83-31 142-39 212-19s142 40 228-3v106H0Z" fill="#9ec3dc" />
                    <g fill="#e8ecd9" stroke="#a7b79b">
                      <path d="M22 34h113l12 74-118 24z" />
                      <path d="M163 34h110l7 96-119-6z" />
                      <path d="M298 30h120l12 91-126 11z" />
                      <path d="M44 165l130-24 11 81-134 15z" />
                      <path d="M205 148l119-8 6 97-122 5z" />
                      <path d="M344 145l89-9v96l-87 8z" />
                    </g>
                    <path d="M-20 176c95-28 162-22 229 8 87 39 159 19 252-19" fill="none" stroke="white" strokeWidth="20" />
                    <path d="M-20 176c95-28 162-22 229 8 87 39 159 19 252-19" fill="none" stroke="#72818f" strokeWidth="3" strokeDasharray="11 8" />
                  </svg>
                </div>

                {/* Layer 2: Middle (Cadastral Parcels) */}
                <div 
                  className="absolute inset-[40px_36px_30px_16px] rounded-2xl border border-white/80 shadow-lg overflow-hidden bg-[#eef3f7] transition-all duration-500 ease-out"
                  style={{
                    transform: isLayersHovered 
                      ? 'rotate(8deg) translate(15px, 0px) scale(0.98)' 
                      : 'rotate(5deg) translate(0px, 0px) scale(1)',
                    zIndex: 20
                  }}
                >
                  <svg viewBox="0 0 440 320" className="w-full h-full block">
                    <rect width="440" height="320" fill="#eef3f7" />
                    <g fill="none" stroke="#2f80d0" strokeWidth="2">
                      <rect x="29" y="42" width="130" height="86" />
                      <rect x="175" y="42" width="110" height="86" />
                      <rect x="301" y="42" width="110" height="86" />
                      <rect x="47" y="156" width="112" height="98" />
                      <rect x="180" y="156" width="109" height="98" />
                      <rect x="313" y="156" width="95" height="98" />
                    </g>
                    <g fill="#e33434">
                      <rect x="63" y="70" width="28" height="20" />
                      <rect x="104" y="76" width="39" height="27" />
                      <rect x="199" y="63" width="55" height="34" />
                      <rect x="332" y="69" width="31" height="44" />
                      <rect x="76" y="180" width="54" height="40" />
                      <rect x="213" y="184" width="47" height="32" />
                      <rect x="338" y="181" width="52" height="44" />
                    </g>
                    <path d="M0 142c89-34 158-20 228 4 74 25 126 22 212-9" fill="none" stroke="#0b2341" strokeWidth="9" />
                    <path d="M0 142c89-34 158-20 228 4 74 25 126 22 212-9" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="8 7" />
                  </svg>
                </div>

                {/* Layer 3: Top (GIS Features Selected) */}
                <div 
                  className="absolute inset-[56px_20px_16px_50px] rounded-2xl border border-white/90 shadow-xl overflow-hidden bg-white transition-all duration-500 ease-out"
                  style={{
                    transform: isLayersHovered 
                      ? 'rotate(2deg) translate(0px, 15px) scale(1.02)' 
                      : 'rotate(0deg) translate(0px, 0px) scale(1)',
                    zIndex: 30
                  }}
                >
                  <svg viewBox="0 0 440 320" className="w-full h-full block">
                    <rect width="440" height="320" fill="#fff" />
                    <path d="M41 33c71 15 142 21 203 5s122-12 166 4v232H41Z" fill="#eef5f8" stroke="#c7d9e6" />
                    <g fill="none" stroke="#078a86" strokeWidth="2">
                      <path d="M62 69c49-18 91-14 132 5s92 22 154 2" />
                      <path d="M57 94c51-17 96-13 138 6s92 22 157 1" />
                      <path d="M57 122c52-15 100-11 142 6s91 20 154-1" />
                      <path d="M60 152c54-14 104-10 145 6s88 18 150-3" />
                      <path d="M62 182c57-13 107-8 148 7s86 17 145-4" />
                      <path d="M64 213c60-12 110-7 151 8s84 14 140-6" />
                    </g>
                    <path d="M93 60l29 183 182-51 44-113z" fill="none" stroke="#1267b1" strokeWidth="4" />
                    <circle cx="122" cy="243" r="7" fill="#e33434" />
                    <circle cx="304" cy="192" r="7" fill="#e33434" />
                    <circle cx="348" cy="79" r="7" fill="#e33434" />
                    <circle cx="93" cy="60" r="7" fill="#e33434" />
                  </svg>
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute bottom-5 left-5 bg-white border border-[#dce6ef] px-4 py-2.5 rounded-xl shadow-md z-40 text-xs font-bold text-[#0c2e60]">
                Source Data → Digitisation → QA/QC → Delivery
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                What We Deliver
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0c2e60] tracking-tight leading-[1.15]">
                Geospatial production that supports real project workflows
              </h2>
              <p className="text-[#5f6d7b] text-base md:text-[17px] leading-relaxed">
                We work with satellite imagery, drone data, LiDAR point clouds, survey inputs, CAD drawings, legacy maps and client databases to prepare accurate and structured geospatial deliverables.
              </p>

              {/* Deliverables List */}
              <div className="space-y-6 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    01
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Data creation and conversion</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Digitisation, feature extraction, CAD–GIS conversion, georeferencing, attribution and database creation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    02
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Spatial analysis and modelling</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Terrain, network, proximity, suitability, change-detection and decision-support analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    03
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Quality-controlled delivery</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Defined review cycles, topology checks, attribute validation, edge matching and format compliance.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core GIS Services Cards Grid */}
      <section className="py-24 bg-[#f4f7fa] border-t border-b border-[#dce5ee]" id="services">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Core GIS Services
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight">
                Complete GIS and mapping support under one roof
              </h2>
              <p className="text-[#5f6d7b] text-[17px] leading-relaxed">
                Choose a focused production service or combine multiple capabilities for an end-to-end mapping programme.
              </p>
            </div>
            <div className="lg:max-w-[280px] border-l-2 border-[#e33434] pl-4 text-xs leading-relaxed text-[#6c7987]">
              Each service is backed by standard operating procedures, custom quality checklists, and engineering workflows.
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⌖
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">GIS Data Creation & Digitisation</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Convert imagery, scanned maps and legacy records into structured vector datasets with complete attributes.
              </p>
              <Link href="/service/gisservice/datadigitization" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ▱
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">2D & 3D Feature Extraction</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Extract roads, buildings, rail assets, utilities, land features and engineering objects from multiple sources.
              </p>
              <Link href="/service/gisservice/gismapping" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⌁
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Utility & Network Mapping</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Build connected and attribute-rich GIS databases for power, water, pipeline and telecom networks.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ▦
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Cadastral & Land Mapping</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Parcel digitisation, land-record integration, ownership layers, boundary mapping and municipal GIS support.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ◫
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Remote Sensing & LULC</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Satellite image interpretation, classification, land-use mapping and change-detection analysis.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ∿
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">LiDAR & Point Cloud Processing</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Classification, ground extraction, feature mapping, terrain products and CAD/GIS conversion from point clouds.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⇄
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">CAD–GIS Conversion</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Transform DWG, DXF and engineering drawings into clean, projected and database-ready GIS layers.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⌁
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Spatial Analysis & Geoprocessing</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Automated workflows, network analysis, terrain modelling, geocoding and location intelligence.
              </p>
              <Link href="/service/gisservice/webgisdevelopment" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Method Workflow */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-32 space-y-5">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Delivery Method
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
                A transparent workflow from source data to final delivery
              </h2>
              <p className="text-[#5f6d7b] text-base leading-relaxed max-w-sm">
                We keep the process visible so technical buyers understand how the data will be handled, validated and delivered.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-[#cfdbe7] hover:border-[#1267b1] hover:text-[#1267b1] transition-all duration-200 mt-2"
              >
                Discuss Your Workflow
              </Link>
            </div>

            {/* Steps Right Column */}
            <div className="relative space-y-0 pl-16 md:pl-24">
              {/* Timeline center line */}
              <div className="absolute left-[34px] md:left-[50px] top-8 bottom-9 w-[2px] bg-[#dce5ee]" />

              {/* Step 1 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  01
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Requirement and source-data review</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    We confirm mapping scale, coordinate system, accuracy, feature catalogue, attribute schema, file formats and acceptance criteria.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Scope</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Accuracy</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Feature code</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Output format</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  02
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Production planning and pilot</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    A representative pilot helps verify interpretation rules, symbology, layer structure and delivery standards before full production.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">POC</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Sample tile</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Client review</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  03
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Digitisation, extraction and processing</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    Our production team creates the required GIS, CAD, raster or point-cloud outputs using the approved specification.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">GIS</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">CAD</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">LiDAR</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Remote sensing</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  04
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Independent QA/QC</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    Geometry, topology, connectivity, attribution, positional consistency, edge matching and completeness are checked against the standard.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Topology</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Attributes</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Completeness</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Compliance</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  05
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Review, delivery and support</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    We deliver in the required structure, support review comments and maintain clear revision and issue-tracking records.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Milestones</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Revision log</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Final handover</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Outputs & Quality Section */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="space-y-4 max-w-2xl mb-12">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
              <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
              Outputs & Quality
            </div>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
              Deliverables that fit your existing software and engineering workflow
            </h2>
            <p className="text-[#5f6d7b] text-[17px] leading-relaxed">
              We structure deliverables to prevent projection, geometry, and attribute compliance issues in your GIS databases.
            </p>
          </div>

          {/* Grid Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
            {/* Left Panel: Deliverables */}
            <div className="bg-[#f4f7fa] border border-[#dce5ee] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-[#0c2e60] mb-2">Common delivery formats</h3>
                
                {/* Custom Tabs */}
                <div className="flex gap-2 flex-wrap my-6">
                  {formatCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(cat)}
                      className={`px-4 py-2 rounded-lg font-bold text-xs border transition-all duration-200 ${
                        activeTab === cat 
                          ? 'bg-[#1267b1] border-[#1267b1] text-white shadow-md' 
                          : 'bg-white border-[#d5e0ea] text-[#526273] hover:border-[#1267b1] hover:text-[#1267b1]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Formats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredFormats.map((fmt, idx) => (
                    <div key={idx} className="bg-white border border-[#dbe5ee] rounded-xl p-4 shadow-sm hover:border-[#1267b1] transition-all duration-200 animate-fadeIn">
                      <b className="block text-sm text-[#0c2e60] font-extrabold leading-tight">{fmt.name}</b>
                      <span className="block text-[11px] text-[#748191] mt-1">{fmt.ext}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Quality Control */}
            <div className="bg-gradient-to-br from-[#0c2e60] to-[#163e6d] rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Quality checks included in the workflow</h3>
                <p className="text-xs text-blue-200 leading-relaxed mb-6">
                  Quality-control criteria can be customised to match your database schema and specific project acceptance criteria.
                </p>
                <div className="space-y-3.5">
                  {[
                    'Geometry and topology validation',
                    'Attribute completeness and domain checks',
                    'Connectivity, overshoot and undershoot checks',
                    'Edge matching and positional consistency',
                    'Layer naming, projection and format compliance'
                  ].map((chk, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start text-sm text-blue-50">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-[#70d4ca] font-extrabold text-xs flex items-center justify-center">
                        ✓
                      </span>
                      <span className="pt-0.5 leading-snug">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md hover:-translate-y-0.5 transition-all duration-200 mt-8 self-start"
              >
                Share Your Specification →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience Case Study */}
      <section className="py-24 bg-[#f7fafc] border-t border-[#dce5ee]" id="projects">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Featured Experience
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight">
                Show measurable GIS project experience, not generic claims
              </h2>
            </div>
            <div className="lg:max-w-[280px] border-l-2 border-[#e33434] pl-4 text-xs leading-relaxed text-[#6c7987]">
              Replace this concept artwork with actual project imagery, client-approved screenshots and final mapping outputs.
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-white border border-[#dce5ee] rounded-3xl overflow-hidden shadow-[0_20px_55px_rgba(11,35,65,0.06)] grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Visual Column */}
            <div className="bg-[#d8e5d6] relative min-h-[380px] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#dce5ee]">
              <svg viewBox="0 0 650 520" className="w-full h-full block object-cover">
                <defs>
                  <linearGradient id="mine" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#c5d4b7" />
                    <stop offset="1" stopColor="#8eaa7e" />
                  </linearGradient>
                </defs>
                <rect width="650" height="520" fill="url(#mine)" />
                <path d="M-30 95c137-79 244-55 341 3s179 72 369 13v130c-140 50-248 26-365-13S115 176-30 242Z" fill="#b3c9e2" />
                <path d="M23 384c92-54 184-68 284-24 84 37 174 45 369-22v182H0Z" fill="#a7c3dd" />
                <g fill="#dbe2c9" stroke="#9aab8d" strokeWidth="2">
                  <path d="M44 42h146l17 94-155 29z" />
                  <path d="M219 37h154l8 117-165 11z" />
                  <path d="M398 43h198l17 105-202 19z" />
                  <path d="M55 235l165-25 17 113-174 24z" />
                  <path d="M249 212l159-10 20 127-171 8z" />
                  <path d="M445 202l164-13 25 128-174 17z" />
                </g>
                <path d="M-40 286c130-49 224-44 330 5 111 51 219 54 404-11" fill="none" stroke="#fff" strokeWidth="26" />
                <path d="M-40 286c130-49 224-44 330 5 111 51 219 54 404-11" fill="none" stroke="#4e5964" strokeWidth="4" strokeDasharray="18 12" />
                <g fill="none" stroke="#e33434" strokeWidth="4">
                  <path d="M49 237l170-28 18 115-176 24z" />
                  <path d="M247 212l161-10 20 127-171 8z" />
                  <path d="M444 202l164-13 26 128-175 17z" />
                </g>
                <g fill="#0b2341">
                  <circle cx="176" cy="264" r="8" />
                  <circle cx="339" cy="274" r="8" />
                  <circle cx="519" cy="254" r="8" />
                </g>
                <g fill="none" stroke="#078a86" strokeWidth="2">
                  <path d="M30 440c71-35 142-36 213-9s154 34 237 7c55-18 99-17 153 8" />
                  <path d="M30 463c73-29 143-30 216-6s151 31 235 5c55-17 100-15 153 10" />
                </g>
              </svg>
              <div className="absolute left-6 top-6 bg-white border border-[#dce6ef] px-4 py-2.5 rounded-xl shadow-md text-xs font-black text-[#0c2e60]">
                GIS + CAD MAPPING PROJECT
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                Mining & Natural Resources
              </div>
              <h2 className="text-2xl sm:text-[34px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
                2D feature extraction and CAD mapping across 556+ sq. km
              </h2>
              <p className="text-[#5f6d7b] text-sm md:text-base leading-relaxed">
                Large-area mapping of roads, haul roads, built-up areas, water bodies, railways, conveyors, agricultural land and mining-related features.
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="bg-[#fbfdff] border border-[#dce5ee] rounded-xl p-3.5">
                  <b className="block text-base sm:text-lg text-[#0c2e60] font-extrabold">556+ km²</b>
                  <span className="block text-[10px] text-[#748191] mt-0.5 leading-snug">Mapped project area</span>
                </div>
                <div className="bg-[#fbfdff] border border-[#dce5ee] rounded-xl p-3.5">
                  <b className="block text-base sm:text-lg text-[#0c2e60] font-extrabold">GIS + CAD</b>
                  <span className="block text-[10px] text-[#748191] mt-0.5 leading-snug">Integrated deliverables</span>
                </div>
                <div className="bg-[#fbfdff] border border-[#dce5ee] rounded-xl p-3.5">
                  <b className="block text-base sm:text-lg text-[#0c2e60] font-extrabold">Multi-theme</b>
                  <span className="block text-[10px] text-[#748191] mt-0.5 leading-snug">Feature catalogue</span>
                </div>
              </div>

              {/* Checkpoints */}
              <div className="space-y-2 text-xs md:text-sm text-[#455668]">
                <div className="flex gap-2">
                  <span className="text-[#078a86] font-bold">✓</span>
                  <span>Defined feature-code and layer structure to project specification</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#078a86] font-bold">✓</span>
                  <span>Production, independent QA and client feedback loop cycles</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#078a86] font-bold">✓</span>
                  <span>Final delivery of projected GIS and engineering-compatible files</span>
                </div>
              </div>

              <Link 
                href="/portfolios" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#0c2e60] hover:bg-[#102f57] hover:-translate-y-0.5 transition-all self-start shadow-md"
              >
                View Project Experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Techmapperz Section */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="space-y-4 max-w-2xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase justify-center">
              <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
              Why Techmapperz
            </div>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight">
              A geospatial-led team built for practical delivery
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: '01 · DOMAIN', title: 'GIS-first project understanding', desc: 'Requirements are reviewed by professionals familiar with mapping standards, source-data limitations and real production risks.' },
              { tag: '02 · DELIVERY', title: 'End-to-end geospatial support', desc: 'From data review and pilot production through GIS processing, QA/QC, final delivery and revision support.' },
              { tag: '03 · FORMAT', title: 'GIS, CAD, raster and LiDAR expertise', desc: 'Outputs are prepared for the software, databases and engineering workflows your team already uses.' },
              { tag: '04 · SCALE', title: 'Flexible production capacity', desc: 'Suitable for focused technical assignments, pilot projects and larger recurring mapping programmes.' },
              { tag: '05 · QA', title: 'Structured review and quality control', desc: 'Clear checkpoints, issue logs, validation criteria and review cycles reduce rework and delivery uncertainty.' },
              { tag: '06 · DIGITAL', title: 'GIS application development', desc: 'Mapping outputs can be transformed into Web GIS, dashboards, mobile field apps and asset-management systems.' }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-[#dce5ee] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <span className="text-[11px] font-black tracking-widest text-[#e33434]">{card.tag}</span>
                <h3 className="font-extrabold text-[#0c2e60] text-lg mt-3 leading-tight">{card.title}</h3>
                <p className="text-xs text-[#5f6d7b] mt-2.5 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f4f7fa] border-t border-[#dce5ee]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
                Questions technical buyers usually ask before starting
              </h2>
              <p className="text-[#5f6d7b] text-base leading-relaxed max-w-sm">
                Use service-specific FAQs to improve clarity and target long-tail search queries naturally.
              </p>
            </div>

            {/* Right Column Accordion */}
            <div className="space-y-3">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#dce5ee] rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full flex justify-between items-center text-left p-5 font-extrabold text-[#0c2e60] text-sm md:text-base gap-6"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#1267b1] text-2xl font-light select-none leading-none">
                      {openFaq === idx ? '–' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === idx ? 'max-h-[300px] border-t border-[#dce5ee]' : 'max-h-0 pointer-events-none'
                    }`}
                  >
                    <p className="p-5 text-xs md:text-sm text-[#5f6d7b] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f4f7fa]" id="contact">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0b2341] via-[#10477b] to-[#0b6b69] rounded-[26px] p-8 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10 shadow-xl">
            {/* Circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />

            <div className="space-y-4 max-w-2xl relative z-10">
              <h2 className="text-2xl md:text-[38px] font-extrabold text-white tracking-tight leading-tight">
                Have a GIS mapping or data-conversion requirement?
              </h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                Share your project area, source data, feature list, coordinate system, accuracy requirement, expected formats and timeline. Our team will review the requirement and suggest a suitable workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10 shrink-0 self-start lg:self-center">
              <a 
                href="mailto:info@techmapperz.com" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Project Assessment →
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-transparent hover:-translate-y-0.5 transition-all duration-200"
              >
                Upload Scope of Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

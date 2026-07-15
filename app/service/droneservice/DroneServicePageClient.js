"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function DroneServicePageClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  const [isLayersHovered, setIsLayersHovered] = useState(false);

  const formatCategories = ['All', 'Raster & Imagery', 'Point Cloud', '3D Models', 'Elevation & Topo'];

  const formats = [
    { name: 'Orthomosaic GeoTIFF', ext: 'High-res mapping', cat: 'Raster & Imagery' },
    { name: 'Multispectral Imagery', ext: 'Agriculture/NDVI', cat: 'Raster & Imagery' },
    { name: 'LAS / LAZ', ext: 'Dense point cloud', cat: 'Point Cloud' },
    { name: '3D Mesh (OBJ/FBX)', ext: 'Reality capture', cat: '3D Models' },
    { name: 'Digital Elevation Model (DEM)', ext: 'Bare-earth surface', cat: 'Elevation & Topo' },
    { name: 'Digital Surface Model (DSM)', ext: 'Above-ground surface', cat: 'Elevation & Topo' },
    { name: 'Contour Maps (SHP/DWG)', ext: 'Topographic lines', cat: 'Elevation & Topo' },
    { name: 'Volumetric Reports', ext: 'Stockpile analysis', cat: 'Elevation & Topo' },
  ];

  const filteredFormats = activeTab === 'All' 
    ? formats 
    : formats.filter(f => f.cat === activeTab);

  const faqData = [
    {
      question: "How accurate are Techmapperz’s drone survey and mapping services in India?",
      answer: "Techmapperz delivers high-accuracy drone survey and mapping services in India using advanced UAV platforms, RTK-enabled systems, and industry-standard processing tools. Accuracy levels depend on project requirements and terrain, but our workflows ensure reliable and precise geospatial outputs."
    },
    {
      question: "What is an orthophoto, and why is it important in drone mapping?",
      answer: "An orthophoto is a geometrically corrected aerial image generated through drone mapping that represents the Earth’s surface at a uniform scale. It is essential for accurate measurements, planning, asset mapping, and GIS integration across infrastructure and land survey projects."
    },
    {
      question: "What is a 3D terrain model, and how is it used in drone surveys?",
      answer: "A 3D terrain model represents the ground surface derived from drone survey data. It is widely used for topographic analysis, slope assessment, volume estimation, and infrastructure planning in construction, mining, and environmental projects."
    },
    {
      question: "What is a LiDAR sensor, and how is it used in drone LiDAR surveys?",
      answer: "A LiDAR sensor uses laser pulses to measure distances and generate highly detailed 3D point cloud data. In drone LiDAR survey services, it is especially effective for topographic mapping, corridor surveys, and projects requiring high accuracy even in vegetated areas."
    },
    {
      question: "Why should organizations choose drone surveys over traditional land surveys?",
      answer: "Drone surveys offer faster data collection, reduced field risks, improved accuracy, and cost efficiency compared to traditional land surveys. They are particularly effective for large areas, inaccessible terrain, and time-critical infrastructure projects."
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
        <div className="absolute top-[18%] left-[11%] w-[400px] h-[400px] bg-[#e33434]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[25%] right-[16%] w-[450px] h-[450px] bg-[#1267b1]/10 rounded-full blur-[130px] pointer-events-none" />

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
                <span className="text-[#0c2e60] font-bold">Drone Services</span>
              </div>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Drone Survey & Mapping Company in India
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0c2e60] tracking-tight leading-[1.1] sm:max-w-xl">
                High-Accuracy Drone Data Using Advanced UAV & LiDAR Technology
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg md:text-[19px] text-[#5f6d7b] leading-relaxed max-w-[620px]">
                Elevate your projects with precision drone surveying. We acquire, process, and deliver engineering-grade spatial data for infrastructure, mining, agriculture, and urban planning.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-[0_14px_26px_rgba(227,52,52,0.22)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request a Drone Survey Quote →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-[#cfdbe7] hover:border-[#1267b1] hover:text-[#1267b1] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request Sample Survey Data
                </Link>
              </div>

              {/* Hero Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">DGCA Compliant</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">Fully authorized drone operations across India</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">RTK/PPK Precision</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">Centimeter-level accuracy for critical engineering</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#dce6ef] p-4 rounded-2xl shadow-[0_10px_25px_rgba(11,35,65,0.04)]">
                  <b className="block text-sm text-[#0c2e60] font-bold mb-1">Rapid Turnaround</b>
                  <span className="block text-[11px] text-[#758292] leading-relaxed">Automated processing for timely deliverable execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Styled Map/Drone Illustration */}
            <div className="relative">
              <div className="bg-white border border-[#d7e2ec] rounded-[28px] p-4 shadow-[0_22px_55px_rgba(11,35,65,0.1)] relative z-10">
                {/* Top Bar */}
                <div className="flex justify-between items-center px-1 pb-3 text-xs font-bold text-[#516171]">
                  <span>ACQUISITION · LIDAR SCANNING</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e33434]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f0b33f]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#078a86]" />
                  </div>
                </div>

                {/* SVG Container */}
                <div className="relative rounded-[19px] overflow-hidden bg-[#e5ebf1] aspect-[1.04/1] shadow-inner border border-[#dce5ef]">
                  <svg viewBox="0 0 620 600" className="w-full h-full block">
                    <defs>
                      <linearGradient id="terrain" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#d1deea" />
                        <stop offset="1" stopColor="#b4c7d9" />
                      </linearGradient>
                      <pattern id="flight-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0H0V40" fill="none" stroke="#2d5689" strokeOpacity=".08" strokeWidth="1" />
                      </pattern>
                    </defs>
                    
                    {/* Base Terrain */}
                    <rect width="620" height="600" fill="url(#terrain)" />
                    
                    {/* Grid */}
                    <rect width="620" height="600" fill="url(#flight-grid)" />
                    
                    {/* Topography Contours */}
                    <g fill="none" stroke="#8da8c1" strokeWidth="1.5" opacity=".7">
                      <path d="M0 100c120-20 250 50 400 20s150-60 220-40" />
                      <path d="M0 150c110-15 240 60 410 30s160-50 210-30" />
                      <path d="M0 200c100-10 230 70 420 40s170-40 200-20" />
                      <path d="M0 450c120 20 200-30 350-10s200 60 270 40" />
                      <path d="M0 500c110 25 190-25 360-5s210 70 260 50" />
                    </g>
                    
                    {/* Flight Path (Zig-zag) */}
                    <path d="M80 80 L520 80 L520 160 L80 160 L80 240 L520 240 L520 320 L80 320 L80 400 L520 400" fill="none" stroke="#078a86" strokeWidth="4" strokeDasharray="10 8" />
                    
                    {/* Scanning Cone (LiDAR/Camera representation) */}
                    <polygon points="300,240 180,450 420,450" fill="#e33434" opacity="0.15" />
                    <polygon points="300,240 240,450 360,450" fill="#e33434" opacity="0.1" />
                    
                    {/* Drone Graphic */}
                    <g transform="translate(260, 200)">
                      <circle cx="40" cy="40" r="14" fill="#0c2e60" />
                      <rect x="36" y="26" width="8" height="28" fill="#1267b1" />
                      <rect x="26" y="36" width="28" height="8" fill="#1267b1" />
                      {/* Propellers */}
                      <circle cx="20" cy="20" r="10" fill="none" stroke="#e33434" strokeWidth="3" />
                      <circle cx="60" cy="20" r="10" fill="none" stroke="#e33434" strokeWidth="3" />
                      <circle cx="20" cy="60" r="10" fill="none" stroke="#e33434" strokeWidth="3" />
                      <circle cx="60" cy="60" r="10" fill="none" stroke="#e33434" strokeWidth="3" />
                      <line x1="13" y1="13" x2="27" y2="27" stroke="#0c2e60" strokeWidth="2" />
                      <line x1="53" y1="13" x2="67" y2="27" stroke="#0c2e60" strokeWidth="2" />
                      <line x1="13" y1="67" x2="27" y2="53" stroke="#0c2e60" strokeWidth="2" />
                      <line x1="53" y1="67" x2="67" y2="53" stroke="#0c2e60" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute z-20 right-[-15px] top-[14%] w-[185px] bg-white/95 backdrop-blur-md border border-[#d7e2ec] shadow-lg rounded-xl p-3.5 animate-float-slow hidden md:block">
                <strong className="block text-xs text-[#0c2e60] font-bold">UAV Telemetry</strong>
                <span className="block text-[11px] text-[#6b7987] mt-0.5">Alt: 120m · Vel: 8m/s</span>
                <div className="h-1.5 bg-gray-100 rounded-full mt-2.5 overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-[#1267b1] to-[#2f80d0] rounded-full" />
                </div>
              </div>

              <div className="absolute z-20 left-[-20px] bottom-[8%] w-[215px] bg-white/95 backdrop-blur-md border border-[#d7e2ec] shadow-lg rounded-xl p-3.5 animate-float-slower hidden md:block">
                <strong className="block text-xs text-[#0c2e60] font-bold">RTK Status: FIX</strong>
                <span className="block text-[11px] text-[#6b7987] mt-0.5">Positional Accuracy &lt; 2cm</span>
                <div className="flex gap-1 mt-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078a86]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078a86]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078a86]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078a86]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dce5ee]" />
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
                {/* Layer 1: Bottom (Raw Aerial Imagery) */}
                <div 
                  className="absolute inset-[24px_16px_50px_40px] rounded-2xl border border-white/80 shadow-md overflow-hidden bg-[#e0d9cc] transition-all duration-500 ease-out flex items-center justify-center"
                  style={{
                    transform: isLayersHovered 
                      ? 'rotate(-11deg) translate(-20px, -10px) scale(0.95)' 
                      : 'rotate(-7deg) translate(0px, 0px) scale(1)',
                    zIndex: 10
                  }}
                >
                  <svg viewBox="0 0 440 320" className="w-full h-full block">
                    <rect width="440" height="320" fill="#dbd3c3" />
                    <path d="M0 0 L440 0 L440 320 L0 320 Z" fill="none" stroke="#c0b5a3" strokeWidth="20" strokeDasharray="40 10" />
                    <g fill="#c9c0ae">
                      <rect x="50" y="50" width="100" height="80" />
                      <rect x="250" y="80" width="120" height="100" />
                      <rect x="100" y="200" width="150" height="70" />
                    </g>
                  </svg>
                  <span className="absolute bottom-2 right-4 text-[10px] font-bold text-[#8c826e] uppercase">Raw Imagery</span>
                </div>

                {/* Layer 2: Middle (Point Cloud) */}
                <div 
                  className="absolute inset-[40px_36px_30px_16px] rounded-2xl border border-white/80 shadow-lg overflow-hidden bg-[#1e293b] transition-all duration-500 ease-out"
                  style={{
                    transform: isLayersHovered 
                      ? 'rotate(8deg) translate(15px, 0px) scale(0.98)' 
                      : 'rotate(5deg) translate(0px, 0px) scale(1)',
                    zIndex: 20
                  }}
                >
                  <svg viewBox="0 0 440 320" className="w-full h-full block">
                    <rect width="440" height="320" fill="#1e293b" />
                    {/* Generating a dot grid simulating a point cloud */}
                    <g fill="#60a5fa" opacity="0.6">
                      {Array.from({ length: 15 }).map((_, i) => 
                        Array.from({ length: 20 }).map((_, j) => (
                          <circle key={`${i}-${j}`} cx={j * 22 + 10} cy={i * 22 + 10} r={Math.random() * 2 + 1} />
                        ))
                      )}
                    </g>
                    <g fill="#f87171" opacity="0.8">
                      <circle cx="100" cy="100" r="3" />
                      <circle cx="110" cy="90" r="3" />
                      <circle cx="120" cy="110" r="3" />
                      <circle cx="300" cy="200" r="3" />
                      <circle cx="310" cy="190" r="3" />
                    </g>
                  </svg>
                  <span className="absolute bottom-2 right-4 text-[10px] font-bold text-[#64748b] uppercase">3D Point Cloud</span>
                </div>

                {/* Layer 3: Top (Orthomosaic/DEM) */}
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
                    <rect width="440" height="320" fill="#f0f7f4" />
                    <path d="M0 160 Q 110 50 220 160 T 440 160" fill="none" stroke="#078a86" strokeWidth="3" />
                    <path d="M0 180 Q 110 70 220 180 T 440 180" fill="none" stroke="#078a86" strokeWidth="2" opacity="0.6" />
                    <path d="M0 200 Q 110 90 220 200 T 440 200" fill="none" stroke="#078a86" strokeWidth="1" opacity="0.3" />
                    <g fill="#2d5689" opacity="0.1">
                      <rect x="50" y="50" width="100" height="80" />
                      <rect x="250" y="80" width="120" height="100" />
                    </g>
                    <g fill="none" stroke="#2d5689" strokeWidth="2">
                      <rect x="50" y="50" width="100" height="80" />
                      <rect x="250" y="80" width="120" height="100" />
                    </g>
                  </svg>
                  <span className="absolute bottom-2 right-4 text-[10px] font-bold text-[#078a86] uppercase">Orthomosaic & Contours</span>
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute bottom-5 left-5 bg-white border border-[#dce6ef] px-4 py-2.5 rounded-xl shadow-md z-40 text-xs font-bold text-[#0c2e60]">
                Capture → Photogrammetry → Geospatial Output
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Data Transformation
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0c2e60] tracking-tight leading-[1.15]">
                Turning raw aerial data into actionable intelligence
              </h2>
              <p className="text-[#5f6d7b] text-base md:text-[17px] leading-relaxed">
                By integrating high-resolution aerial data acquisition with advanced drone mapping and data processing, we generate precise and reliable outputs tailored to your exact project requirements.
              </p>

              {/* Deliverables List */}
              <div className="space-y-6 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    01
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Advanced UAV Acquisition</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Deploying industry-standard drones equipped with high-resolution RGB, Multispectral, or LiDAR payloads.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    02
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Photogrammetry & Processing</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Stitching thousands of overlapping images to generate dense point clouds, DEMs, and seamless orthomosaics.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eaf3fb] text-[#1267b1] font-extrabold text-sm flex items-center justify-center">
                    03
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-[#0c2e60] text-lg leading-tight">Engineering-Grade Deliverables</h3>
                    <p className="text-sm text-[#5f6d7b] leading-relaxed">Exporting data directly to AutoCAD, ArcGIS, and specialized engineering software for immediate use.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Drone Services Cards Grid */}
      <section className="py-24 bg-[#f4f7fa] border-t border-b border-[#dce5ee]" id="services">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Our Offerings
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight">
                Our Drone Survey & Mapping Services
              </h2>
              <p className="text-[#5f6d7b] text-[17px] leading-relaxed">
                Comprehensive UAV solutions spanning data collection, advanced processing, and specialized sector analysis.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⌖
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Drone Survey & Mapping</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                High-precision topographic surveys, boundary mapping, and cadastral mapping using RTK-enabled UAVs.
              </p>
              <Link href="/service/droneservice/dronesurveyandmapping" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ▱
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Drone Data Processing</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Transform raw imagery into actionable outputs like orthomosaics, point clouds, DEMs, and 3D models.
              </p>
              <Link href="/service/droneservice/dronedataprocessing" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ⌁
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Inspection & Analysis</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Close-visual inspections for solar panels, wind turbines, telecom towers, and structural integrity checks.
              </p>
              <Link href="/service/droneservice/inspectionandanalysis" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
                View service →
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#dce5ee] hover:border-[#b9cfe2] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[250px] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eaf4fc] to-[#f5f9fc] flex items-center justify-center text-xl text-[#1267b1] mb-5 font-bold">
                ▦
              </div>
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Agriculture & Multispectral</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Crop health monitoring, NDVI generation, yield estimation, and precision agriculture solutions.
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
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Mining & Volumetrics</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Accurate stockpile volume calculations, pit topography, contour mapping, and haul road optimization.
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
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">LiDAR Scanning Surveys</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Penetrate dense vegetation to generate bare-earth models and high-density point clouds for forestry or complex terrains.
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
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Infrastructure Monitoring</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                Regular progress tracking of construction sites, highway corridors, railway lines, and large civil engineering projects.
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
              <h3 className="font-extrabold text-[#0c2e60] text-[17px] leading-tight">Urban Planning & Smart Cities</h3>
              <p className="text-xs text-[#5f6d7b] mt-3 leading-relaxed">
                High-resolution basemaps, 3D city models, and spatial data for master planning and municipal governance.
              </p>
              <Link href="#contact" className="text-xs font-extrabold text-[#1267b1] hover:underline mt-auto pt-5 inline-block group-hover:translate-x-1 transition-transform">
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
                Workflow
              </div>
              <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
                End-to-End Drone Survey Solutions
              </h2>
              <p className="text-[#5f6d7b] text-base leading-relaxed max-w-sm">
                With well-defined methodologies, experienced technical teams, and optimized processing pipelines, we ensure timely project execution without compromising accuracy or data integrity.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-[#cfdbe7] hover:border-[#1267b1] hover:text-[#1267b1] transition-all duration-200 mt-2"
              >
                Discuss Your Survey Requirements
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
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Mission Planning & Approvals</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    We confirm the mapping area, establish Ground Control Points (GCPs) strategy, define flight parameters, and secure DGCA compliance and local clearances.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Flight Path</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">GCP Planning</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Permits</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  02
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">UAV Data Acquisition</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    Our experienced and licensed UAV operators conduct automated flights using RTK/PPK enabled drones equipped with high-resolution payloads to capture imagery or LiDAR data.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">RTK Drones</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">RGB Cameras</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">LiDAR Payloads</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  03
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Drone Data Processing</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    Raw aerial data is processed using advanced photogrammetry software to generate dense point clouds, seamless orthomosaics, and accurate elevation models.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Photogrammetry</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Point Cloud</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Image Stitching</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pb-10 flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  04
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">GIS Analysis & Formatting</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    We perform feature extraction, volumetric calculations, and format the outputs for seamless integration into your existing CAD or GIS systems.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Digitisation</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">CAD Conversion</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Volumetrics</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-6 md:gap-8 items-start group">
                <div className="absolute left-[-50px] md:left-[-76px] w-[70px] h-[70px] rounded-2xl bg-[#0c2e60] text-white flex items-center justify-center font-black text-lg shadow-[0_12px_25px_rgba(11,35,65,0.15)] group-hover:scale-105 transition-transform duration-300">
                  05
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0c2e60] text-lg md:text-xl">Quality Assurance & Delivery</h3>
                  <p className="text-sm text-[#5f6d7b] leading-relaxed max-w-[620px]">
                    Every dataset undergoes rigorous QA/QC checks for accuracy against checkpoints before final handover in standard industry formats.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">RMSE Checks</span>
                    <span className="text-[11px] text-[#536374] bg-[#f0f4f8] border border-[#dce5ee] px-3 py-1 rounded-full">Final Handover</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Outputs & Formats Section */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="space-y-4 max-w-2xl mb-12">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
              <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
              Deliverables
            </div>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-[#0c2e60] tracking-tight leading-tight">
              Engineering-Grade Mapping Outputs
            </h2>
            <p className="text-[#5f6d7b] text-[17px] leading-relaxed">
              We process raw data into highly accurate models and maps tailored for GIS, AutoCAD, and specialized engineering software.
            </p>
          </div>

          <div className="bg-white border border-[#dce5ee] rounded-3xl p-3 md:p-4 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-4 p-2 bg-[#f8fafc] rounded-2xl border border-[#edf2f7]">
              {formatCategories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    activeTab === cat 
                      ? 'bg-white text-[#0c2e60] shadow-[0_4px_12px_rgba(11,35,65,0.08)]' 
                      : 'text-[#6b7987] hover:text-[#0c2e60] hover:bg-[#eef3f7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Formats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredFormats.map((format, idx) => (
                <div key={idx} className="bg-white border border-[#dce5ee] rounded-xl p-4 flex items-start gap-4 hover:border-[#b9cfe2] transition-colors">
                  <div className="w-10 h-10 shrink-0 bg-[#f4f7fa] text-[#1267b1] rounded-lg flex items-center justify-center font-black">
                    {format.name.substring(0, 1)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0c2e60] text-[15px]">{format.name}</h4>
                    <span className="text-xs text-[#6b7987] mt-0.5 block">{format.ext}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0c2e60]" id="faq">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#86aee0] uppercase">
              <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
              Common Questions
            </div>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-[#12386d] border ${openFaq === index ? 'border-[#396ba8]' : 'border-[#1e4682]'} rounded-2xl overflow-hidden transition-all duration-200`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-bold text-[17px] text-white pr-8">{faq.question}</span>
                  <span className={`text-[#86aee0] text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-[#a6c1e3] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0c2e60] to-[#1267b1] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(11,35,65,0.15)]">
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#e33434]/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-[42px] font-extrabold text-white tracking-tight leading-[1.1]">
                Ready to Elevate Your Project with High-Accuracy Drone Data?
              </h2>
              <p className="text-[#a6c1e3] text-[17px] leading-relaxed">
                Connect with our experts today to get end-to-end UAV survey and mapping solutions tailored to your requirements.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-[#0c2e60] bg-white hover:bg-[#f4f7fa] hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  Request a Drone Survey Quote →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-white bg-transparent border border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

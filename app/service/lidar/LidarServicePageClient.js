"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function LidarServicePageClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  const [isLayersHovered, setIsLayersHovered] = useState(false);

  const formatCategories = ['All', 'Raw Data', 'Processed', '3D Models', 'Terrain'];

  const formats = [
    { name: 'LAS / LAZ', ext: 'Raw Point Cloud', cat: 'Raw Data' },
    { name: 'Classified LAS', ext: 'Filtered Point Cloud', cat: 'Processed' },
    { name: 'DEM / DTM / DSM', ext: 'Elevation Models', cat: 'Terrain' },
    { name: 'Contour Maps', ext: 'Topographic Data', cat: 'Terrain' },
    { name: '3D Mesh (OBJ/FBX)', ext: 'Textured Models', cat: '3D Models' },
    { name: 'BIM / Revit', ext: 'As-Built Models', cat: '3D Models' },
    { name: 'Vector Features', ext: 'SHP / DWG / DGN', cat: 'Processed' },
  ];

  const filteredFormats = activeTab === 'All' 
    ? formats 
    : formats.filter(f => f.cat === activeTab);

  const faqData = [
    {
      question: "What is LiDAR and why is it better than traditional surveying?",
      answer: "LiDAR (Light Detection and Ranging) uses laser pulses to measure exact distances to the Earth's surface. Unlike traditional surveying, it can penetrate vegetation canopies to map bare-earth terrain, capture millions of points in minutes, and provide highly accurate 3D representations of complex structures."
    },
    {
      question: "What types of LiDAR scanning do you offer?",
      answer: "We offer Aerial LiDAR (using UAVs/Drones) for large-scale topographic and corridor mapping, Terrestrial Laser Scanning (TLS) for high-precision as-built surveys, and Mobile LiDAR for rapid infrastructure mapping."
    },
    {
      question: "What deliverables can you generate from a point cloud?",
      answer: "From raw point clouds, we can generate classified LAS files, Digital Elevation Models (DEM/DTM), 10cm contour lines, 3D textured meshes, 2D/3D CAD drawings, and BIM models for architectural planning."
    },
    {
      question: "How accurate is the LiDAR data you provide?",
      answer: "Our aerial LiDAR data typically achieves 2-5cm relative accuracy and sub-10cm absolute accuracy depending on the flight parameters. Terrestrial scanning can achieve millimeter-level precision for engineering applications."
    },
    {
      question: "Can you process third-party LiDAR data?",
      answer: "Yes, we regularly ingest raw LAS/LAZ files captured by our clients or third-party operators and perform the classification, feature extraction, and modeling required for their end use."
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
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(rgba(11,35,65,1)_1px,transparent_1px),linear-gradient(90deg,rgba(11,35,65,1)_1px,transparent_1px)] bg-[size:42px_42px]" />
        
        <div className="absolute top-[18%] left-[11%] w-[400px] h-[400px] bg-[#1267b1]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[25%] right-[16%] w-[450px] h-[450px] bg-[#078a86]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6c7887]">
                <Link href="/" className="hover:text-[#1267b1] transition-colors">Home</Link>
                <span>›</span>
                <span className="text-[#1267b1]">Services</span>
                <span>›</span>
                <span className="text-[#0c2e60] font-bold">LiDAR & 3D Modeling</span>
              </div>

              <div className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-[#1267b1] uppercase">
                <span className="w-7 h-[2px] bg-[#e33434] rounded-full" />
                Next-Generation Topography
              </div>

              <h1 className="text-[42px] lg:text-[52px] font-black text-[#0b2341] leading-[1.1] tracking-tight">
                High-Density <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1267b1] to-[#078a86]">LiDAR Mapping</span> & 3D Point Cloud Processing
              </h1>

              <p className="text-[17px] text-[#536374] leading-relaxed max-w-xl">
                Techmapperz provides comprehensive LiDAR surveying and data processing services. From capturing raw aerial point clouds to generating highly accurate 3D models and bare-earth terrain, we deliver actionable intelligence for complex engineering projects.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1267b1] text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-[#1267b1]/20 hover:shadow-xl hover:shadow-[#1267b1]/30 transition-all duration-300 hover:-translate-y-0.5">
                  <span className="relative z-10">Discuss Your LiDAR Project</span>
                  <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#078a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-semibold text-[#3b4b5c]">High Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#078a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-semibold text-[#3b4b5c]">Vegetation Penetration</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visualizer */}
            <div className="relative h-[480px] lg:h-[520px] w-full max-w-[500px] mx-auto perspective-1000">
              <div 
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-[#e2e8f0] overflow-hidden transform-style-3d transition-all duration-500 hover:rotate-y-[-2deg] hover:rotate-x-[2deg]"
                onMouseEnter={() => setIsLayersHovered(true)}
                onMouseLeave={() => setIsLayersHovered(false)}
              >
                <div className="absolute top-0 inset-x-0 h-14 bg-[#0b2341] flex items-center px-6 justify-between z-20">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] font-bold text-white/70 tracking-widest uppercase">Point Cloud Viewer</div>
                </div>

                <div className="relative w-full h-full pt-14 bg-[#121820] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
                  
                  {/* Point Cloud Simulation */}
                  <div className={`relative w-[300px] h-[300px] transition-transform duration-1000 ${isLayersHovered ? 'scale-110' : 'scale-100'}`}>
                    {/* Simulated laser scan beams */}
                    <div className="absolute inset-0 border-[0.5px] border-[#078a86]/30 rounded-full animate-[ping_3s_ease-out_infinite]" />
                    <div className="absolute inset-4 border-[0.5px] border-[#1267b1]/30 rounded-full animate-[ping_3s_ease-out_infinite_1s]" />
                    
                    {/* Floating dots representing LiDAR points */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#078a86] rounded-full shadow-[0_0_8px_#078a86] animate-float-slow" />
                    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#1267b1] rounded-full shadow-[0_0_8px_#1267b1] animate-float-slower" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] animate-float-slow" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#e33434] rounded-full shadow-[0_0_8px_#e33434] animate-float-slower" style={{ animationDelay: '1.5s' }} />
                    
                    {/* Center mesh representation */}
                    <div className="absolute inset-1/4 bg-gradient-to-tr from-[#078a86]/20 to-[#1267b1]/20 border border-white/10 rounded-xl backdrop-blur-md flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-24 h-24 text-white/50 animate-[spin_20s_linear_infinite]">
                        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M50 10 L50 50 L90 30 M50 50 L90 70 M50 50 L50 90 M50 50 L10 70 M50 50 L10 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>

                  {/* UI Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                        <span className="text-[10px] text-white/70 font-mono tracking-wider">SCANNING</span>
                      </div>
                      <div className="text-white text-sm font-semibold">14,592,031 pts</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-white/80 font-mono">
                      Z: 412.5m
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.15em] text-[#1267b1] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#e33434] rounded-full" />
              Our LiDAR Solutions
              <span className="w-4 h-[2px] bg-[#e33434] rounded-full" />
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#0b2341] leading-tight mb-6 tracking-tight">
              Comprehensive 3D Capture and Analysis
            </h2>
            <p className="text-[16px] text-[#536374] leading-relaxed">
              We leverage multi-platform LiDAR sensors to capture the exact specifications required by your project, processing raw point clouds into usable engineering and architectural data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#1267b1]/5 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-[#e2e8f0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#1267b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b2341] mb-3 group-hover:text-[#1267b1] transition-colors">Aerial LiDAR (UAV)</h3>
              <p className="text-[#536374] text-sm leading-relaxed mb-4">
                Drone-based LiDAR scanning for topographic mapping of large, inaccessible, or heavily vegetated areas. Ideal for railway corridors, power lines, and forestry.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#1267b1]/5 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-[#e2e8f0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#1267b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b2341] mb-3 group-hover:text-[#1267b1] transition-colors">Point Cloud Processing</h3>
              <p className="text-[#536374] text-sm leading-relaxed mb-4">
                Classification of raw point clouds to separate bare earth from vegetation and buildings. Noise filtering, intensity analysis, and colorization using RGB data.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#1267b1]/5 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-[#e2e8f0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#1267b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b2341] mb-3 group-hover:text-[#1267b1] transition-colors">3D Terrain & Modeling</h3>
              <p className="text-[#536374] text-sm leading-relaxed mb-4">
                Creation of high-precision Digital Elevation Models (DEM), 3D city models, and volumetric calculations for mining or construction stockpiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section with Tabs */}
      <section className="py-24 bg-[#0a192f] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-[#078a86] uppercase">
                <span className="w-5 h-[2px] bg-[#078a86] rounded-full" />
                Data Outputs
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-black text-white leading-tight tracking-tight">
                LiDAR & 3D Deliverables
              </h2>
              <p className="text-[#8892b0] text-[16px] leading-relaxed">
                We generate industry-standard formats ready for immediate ingestion into your CAD, GIS, and BIM workflows.
              </p>
              
              <div className="pt-6 space-y-2">
                {formatCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`block w-full text-left px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === cat 
                        ? 'bg-[#1267b1] text-white shadow-lg shadow-[#1267b1]/20' 
                        : 'text-[#8892b0] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#112240] rounded-3xl p-8 lg:p-10 border border-white/5 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredFormats.map((format, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-white font-bold mb-1">{format.name}</div>
                        <div className="text-[13px] text-[#8892b0]">{format.ext}</div>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-[#078a86] uppercase bg-[#078a86]/10 px-2 py-1 rounded-md">
                        {format.cat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {filteredFormats.length === 0 && (
                <div className="text-center py-12 text-[#8892b0]">
                  No formats found for this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white relative border-b border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#0b2341] leading-tight mb-6">
              Industries Powered by LiDAR
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-[#f8fafd] rounded-2xl border border-[#e2e8f0] text-center">
              <div className="w-12 h-12 mx-auto bg-[#1267b1]/10 text-[#1267b1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 className="font-bold text-[#0b2341] mb-2">Infrastructure & Rail</h3>
              <p className="text-[13px] text-[#536374]">Corridor mapping, elevation profiling, and asset modeling.</p>
            </div>

            <div className="p-8 bg-[#f8fafd] rounded-2xl border border-[#e2e8f0] text-center">
              <div className="w-12 h-12 mx-auto bg-[#078a86]/10 text-[#078a86] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="font-bold text-[#0b2341] mb-2">Mining</h3>
              <p className="text-[13px] text-[#536374]">Volumetric analysis, slope stability, and topography.</p>
            </div>

            <div className="p-8 bg-[#f8fafd] rounded-2xl border border-[#e2e8f0] text-center">
              <div className="w-12 h-12 mx-auto bg-[#e33434]/10 text-[#e33434] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <h3 className="font-bold text-[#0b2341] mb-2">Forestry</h3>
              <p className="text-[13px] text-[#536374]">Canopy penetration to map bare earth and tree heights.</p>
            </div>

            <div className="p-8 bg-[#f8fafd] rounded-2xl border border-[#e2e8f0] text-center">
              <div className="w-12 h-12 mx-auto bg-[#ffbd2e]/10 text-[#e6a827] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="font-bold text-[#0b2341] mb-2">Urban Planning</h3>
              <p className="text-[13px] text-[#536374]">3D city models, Line of Sight analysis, and flooding simulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f8fafd]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#0b2341] leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#1267b1] shadow-lg shadow-[#1267b1]/5' : 'border-[#e2e8f0]'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className={`font-bold pr-8 ${openFaq === idx ? 'text-[#1267b1]' : 'text-[#0b2341]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-[#1267b1] text-white rotate-180' : 'bg-[#f4f7fa] text-[#6c7887]'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-[#536374] text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-[#0c2e60]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)] mix-blend-overlay" />
        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[36px] font-black text-white mb-6 leading-tight">
            Ready to map with precision?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Contact us to discuss your LiDAR requirements. We'll outline a tailored capture and processing strategy to deliver the exact 3D data your project needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#e33434] hover:bg-[#c92a2a] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#e33434]/20 hover:-translate-y-0.5">
              Request a Consultation
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all duration-300">
              View Data Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Map, Navigation, Database, LineChart, Globe, Smartphone, Users, Layout, 
  Settings, CheckCircle, ArrowRight, FileDigit, ShieldCheck, MapPin, 
  Server, Monitor, Activity, Briefcase
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from './FaqItem';

export const metadata = {
  title: 'GIS, Drone & Digital Solutions for Industries | Techmapperz',
  description: 'Techmapperz supports infrastructure, utilities, mining, government, planning, drone and survey companies with GIS mapping, drone processing, LiDAR, spatial data and digital application services.'
};

export default function IndustriesPage() {
  
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />
      
      {/* SECTION 1: HERO */}
      <section 
        className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-40 sm:pb-36" 
        style={{ backgroundImage: 'url("/gis_images/aerial_gis_mapping_banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">INDUSTRIES WE SUPPORT</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial & Digital Services for Real Project Environments
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            Techmapperz supports infrastructure, utilities, mining, government, planning, drone and survey companies with GIS mapping, drone processing, LiDAR, spatial data and digital application services.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="#industries" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300">Explore Industries</button></Link>
            <Link href="#contact" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">Discuss Your Project</button></Link>
          </div>
        </div>

        {/* Bottom Capabilities Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0a1930]/95 backdrop-blur-md border-t border-[#6ac045]/30 z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-5 overflow-x-auto hide-scrollbar">
            <div className="flex items-center justify-between gap-6 min-w-max md:min-w-0">
              <div className="flex items-start gap-3 group cursor-default">
                <Activity className="w-6 h-6 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">Industry Focused</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider">Solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-default">
                <Database className="w-6 h-6 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">Works with Multiple</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider">Data Sources</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-default">
                <Map className="w-6 h-6 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">GIS, CAD & Digital</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider">Deliverables</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-default">
                <Briefcase className="w-6 h-6 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">Experienced Technical</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider">Team</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-default">
                <ShieldCheck className="w-6 h-6 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">Clear Communication</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider">& Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">INDUSTRY REQUIREMENTS ARE DIFFERENT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">The Same Data Can Serve Very Different Project Needs</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/3">
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-6">
                Different industries use the same GIS, drone or spatial technologies, but the required data, workflow and deliverables depend on how the project will actually use them.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                Before production begins, we understand how the information will be used, then structure the mapping, processing, analysis or application workflow around the project requirement.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#6ac045] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-[15px] mb-3 leading-snug">Understand<br/>the Project</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Understand industry context, objectives and challenges.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#6ac045] mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-[15px] mb-3 leading-snug">Use the<br/>Right Data</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Work with multiple sources and formats that you have.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#6ac045] mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-[15px] mb-3 leading-snug">Apply the Right<br/>Workflow</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Accurate mapping, processing and analysis.</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center text-[#6ac045] mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-[15px] mb-3 leading-snug">Deliver for Your<br/>Work Environment</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">GIS, CAD, Web or Mobile – as required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES WE SUPPORT */}
      <section className="py-20 md:py-28" id="industries">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] uppercase tracking-tight">INDUSTRIES WE SUPPORT</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 01 Infrastructure */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_infrastructure.png" alt="Infrastructure" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">01</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Infrastructure &<br/>Engineering</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Topographic mapping, corridor mapping, drone survey, LiDAR, terrain models, asset mapping and project GIS databases.
                </p>
                <Link href="/industry/infrastructure" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 02 Utilities */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_utilities.png" alt="Utilities" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">02</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Utilities &<br/>Energy</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Asset digitisation, network mapping, attribute integration, CAD to GIS conversion and Web GIS for asset management.
                </p>
                <Link href="/industry/utilities" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 03 Mining */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_mining.png" alt="Mining" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">03</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Mining & Natural<br/>Resources</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Mine feature extraction, terrain models, volumetric analysis, stockpile measurement and project mapping.
                </p>
                <Link href="/industry/mining" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 04 Government */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_government.png" alt="Government" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">04</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Government & Land<br/>Administration</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Cadastral mapping, land records, public assets, municipal mapping and GIS database development.
                </p>
                <Link href="/industry/government" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 05 Transportation */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_transportation.png" alt="Transportation" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">05</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Transportation, Rail<br/>& Corridors</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Railway and road mapping, corridor mapping, profiles, cross-sections, drainage, assets and utility crossings.
                </p>
                <Link href="/industry/transportation" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 06 Architecture */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_architecture.png" alt="Architecture" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">06</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Architecture, Planning<br/>& Urban Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Existing-condition mapping, base maps, building footprints, land-use, utilities, terrain and planning GIS.
                </p>
                <Link href="/industry/urban-planning" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 07 Drone */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_drone.png" alt="Drone" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">07</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Drone & Survey<br/>Service Providers</h3>
                <span className="inline-block bg-[#6ac045] text-white text-[10px] font-bold tracking-wider px-2 py-1 mb-2 rounded-sm uppercase self-start">PROCESSING PARTNERSHIP</span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Photogrammetry, point-cloud processing, terrain models, feature extraction and final delivery support.
                </p>
                <Link href="/industry/drone-survey" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore Partnership <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 08 Agriculture */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/gis_images/industry_agriculture.png" alt="Agriculture" fill className="object-cover" />
                <div className="absolute -bottom-4 left-6 w-9 h-9 bg-[#6ac045] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">08</div>
              </div>
              <div className="p-6 pt-8 flex-grow flex flex-col">
                <h3 className="font-bold text-[#0c2e60] text-lg mb-3">Agriculture, Environment<br/>& Land Resources</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Land-use mapping, vegetation analysis, water bodies, change detection and environmental baseline mapping.
                </p>
                <Link href="/industry/agriculture" className="inline-flex items-center gap-1.5 text-[#6ac045] font-bold text-sm hover:text-[#5aad38]">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: DIGITAL APPLICATIONS */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">DIGITAL APPLICATIONS FOR TECHNICAL INDUSTRIES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6 leading-tight">From Spatial Data to Web & Mobile Workflows</h2>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                We build web and mobile applications that help you access, manage and share spatial information easily.
              </p>
              <Link href="/services/digital-applications">
                <button className="py-3 px-8 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300">
                  Explore Digital Solutions
                </button>
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#6ac045] mb-3">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-sm mb-2 leading-snug">Web GIS &<br/>Geoportals</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Access maps and information online</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#6ac045] mb-3">
                  <Server className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-sm mb-2 leading-snug">Asset Management<br/>Platforms</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Manage assets, attributes and documents</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#6ac045] mb-3">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-sm mb-2 leading-snug">Mobile GIS & Field<br/>Applications</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Collect and update data from the field</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#6ac045] mb-3">
                  <Layout className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-sm mb-2 leading-snug">Project<br/>Dashboards</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Maps with project and operational data</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#6ac045] mb-3">
                  <Monitor className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0c2e60] text-sm mb-2 leading-snug">B2B Applications<br/>& Websites</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Custom apps and business websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-12 md:mb-20 block">HOW WE WORK</span>
          
          <div className="relative mt-8 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <Users strokeWidth={1.2} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">01</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Understand</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We understand your project, industry and requirements.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <FileDigit strokeWidth={1.2} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">02</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Review Inputs</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We review available data, documents and project details.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <Database strokeWidth={1.2} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">03</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Define Outputs</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We define required outputs, formats and deliverables.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <Settings strokeWidth={1.2} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">04</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Plan Workflow</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We plan the right workflow, tools and production method.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <ShieldCheck strokeWidth={1.2} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">05</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">QA / QC</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">Quality checks are applied as per the agreed specification.</p>
                </div>
              </div>

              {/* Step 6 (No arrow pointing right) */}
              <div className="flex flex-col items-center relative">
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <Navigation strokeWidth={1.2} className="w-8 h-8 transform rotate-45" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] leading-tight mb-1">06</span>
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Deliver</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We deliver data, maps, reports or applications for your use.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM BANNER */}
      <section className="bg-[#0a1930] py-16 md:py-20 relative overflow-hidden" id="contact">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <MapPin className="w-[300px] h-[300px] text-[#6ac045]" strokeWidth={0.5} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mb-16">
            <div className="lg:max-w-xl xl:max-w-2xl">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">NOT SURE WHERE TO START?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Discuss Your Project</h2>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Share your industry, project scope, available data and expected deliverables.<br/>
                Our team will review your requirements and suggest the right services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:shrink-0 lg:justify-end">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Project
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 shadow-md">
                  Send Your Scope of Work
                </button>
              </Link>
            </div>
          </div>
          
          {/* Bottom Strip */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-[#6ac045] mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Industry Focused</h4>
                  <p className="text-gray-400 text-xs">Solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-[#6ac045] mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Works with Multiple</h4>
                  <p className="text-gray-400 text-xs">Data Sources</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Map className="w-6 h-6 text-[#6ac045] mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">GIS, CAD & Digital</h4>
                  <p className="text-gray-400 text-xs">Deliverables</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-[#6ac045] mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Experienced Technical</h4>
                  <p className="text-gray-400 text-xs">Team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#6ac045] mt-1" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Clear Communication</h4>
                  <p className="text-gray-400 text-xs">& Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

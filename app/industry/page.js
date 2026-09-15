import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Navigation, Database, Globe, Smartphone, Users,
  CheckCircle, ArrowRight, ShieldCheck, MapPin,
  Monitor, Activity, Briefcase, FileText, Layers, Compass
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from './FaqItem';

export const metadata = {
  title: 'Industries We Serve | GIS & Drone Services |Web & App Development |Techmapperz',
  description: 'GIS, drone, LiDAR, mapping, Website & application development services for infrastructure, utilities, mining, transport, government, planning and land projects.',
  alternates: {
    canonical: 'https://www.techmapperz.com/industry'
  }
};

export default function IndustriesPage() {
  const faqs = [
    {
      q: "Which industries does Techmapperz mainly support?",
      a: "Our geospatial work is most relevant to infrastructure, utilities, mining, transportation, government and land projects, planning, agriculture, environmental assignments and drone or survey service providers. We also develop web and mobile solutions where a project requires a digital workflow."
    },
    {
      q: "Can you work with data collected by another survey or drone company?",
      a: "Yes. We can review and process compatible survey, drone, LiDAR, satellite, GIS or CAD data supplied by a client or another service provider. A sample-data review is recommended before the final scope and timeline are confirmed."
    },
    {
      q: "Do you accept subcontracting or white-label processing assignments?",
      a: "Processing and production support can be provided to survey companies, drone-service providers, consultants and contractors. Confidentiality, branding, communication and delivery arrangements can be defined according to the assignment."
    },
    {
      q: "Which input and output formats can be handled?",
      a: "Formats can include GIS files, CAD drawings, raster imagery, tabular records and point-cloud data. Examples include Shapefile, GeoJSON, KML/KMZ, GeoTIFF, DWG, DXF, CSV, LAS and LAZ. Final compatibility is confirmed after reviewing the project data and software requirements."
    },
    {
      q: "Can the GIS data be delivered through a web or mobile application?",
      a: "Yes, when application development is part of the scope. Data can be connected to a project-specific web map, dashboard, portal or mobile workflow so authorised users can search, review or update information more easily."
    }
  ];

  return (
    <div className="bg-white text-[#17202A] font-sans antialiased">
      <ScrollToTop />

      {/* SECTION 1: HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[60vh] md:min-h-[65vh] flex flex-col justify-center items-start bg-cover bg-center text-white pt-24 sm:pt-32 pb-10 sm:pb-14 md:pb-16"
        style={{ backgroundImage: 'url("/gis_images/aerial_gis_mapping_banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-4 sm:gap-6">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
            INDUSTRIES WE SUPPORT
          </span>
          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-4xl text-white">
            Industry-Focused GIS, Drone Survey and Digital Services
          </h1>
          <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[1.65] font-normal">
            Techmapperz supports infrastructure consultants, utilities, mining teams, government contractors, planners, survey providers and land-resource projects with GIS production, drone data processing, LiDAR deliverables, mapping and purpose-built web and mobile applications.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mt-2 w-full sm:w-auto">
            <Link href="#industries" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Explore Industry Capabilities
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-full font-bold text-[15px] sm:text-[16px] text-white bg-white/10 hover:bg-white/20 border border-white/40 transition-all duration-200 w-full sm:w-auto shadow-sm">
                Discuss Your Project &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY INDUSTRY CONTEXT MATTERS */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              WHY INDUSTRY CONTEXT MATTERS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              The Industry Changes What the Data Must Deliver
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                The same orthomosaic, point cloud or base map can serve very different purposes. A railway consultant may need chainage-linked profiles and cross-sections. A utility team may require a searchable asset register. A mining team may need benches, haul roads, surface features and terrain information.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#DDE3EA] shadow-xs">
                <p className="text-[#0C2E60] text-[15px] sm:text-[16px] font-bold leading-[1.5]">
                  That is why we begin with the project requirement—not the software.
                </p>
              </div>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                We review how the data will be used, the quality and structure of the available inputs, the required layers and the final delivery environment. The production and QA/QC workflow is then planned around the agreed specification.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#EDF5FB] text-[#1656B8] border border-[#1656B8]/20 flex items-center justify-center font-bold text-[14px] mb-3">
                  01
                </div>
                <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-1.5">Project Use</h3>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">
                  What decision, design or operation will the data support?
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 flex items-center justify-center font-bold text-[14px] mb-3">
                  02
                </div>
                <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-1.5">Source Data</h3>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">
                  What survey, drone, satellite, CAD or legacy information is available?
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] border border-[#B45309]/20 flex items-center justify-center font-bold text-[14px] mb-3">
                  03
                </div>
                <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-1.5">Production Rules</h3>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">
                  Which layers, attributes, coordinate systems and checks are required?
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#EDF5FB] text-[#0C2E60] border border-[#0C2E60]/20 flex items-center justify-center font-bold text-[14px] mb-3">
                  04
                </div>
                <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-1.5">Delivery Environment</h3>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">
                  Will the output be used in GIS, CAD, a report, a web portal or a mobile application?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SECTOR-SPECIFIC CAPABILITIES */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden" id="industries">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              SECTOR-SPECIFIC CAPABILITIES
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Industries We Support
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-3xl mx-auto mt-2.5">
              These are the sectors where Techmapperz’s GIS, drone, LiDAR and digital capabilities are most relevant. The exact workflow, accuracy requirement and deliverables are agreed project by project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* 1. Infrastructure & Engineering */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_infrastructure.png"
                  alt="Infrastructure & Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Infrastructure
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Infrastructure & Engineering
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Techmapperz supports engineering consultants, EPC contractors, survey teams and project owners working on roads, railways, pipelines, industrial sites and public infrastructure.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    We help convert survey observations, drone imagery, point clouds, CAD drawings and legacy records into dependable base maps, terrain information, corridor datasets and drawing-ready outputs.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Utilities & Energy */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_utilities.png"
                  alt="Utilities & Energy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Utilities
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Utilities & Energy
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Utility projects depend on consistent location and asset information. Disconnected drawings, incomplete attributes and outdated network records can make planning, maintenance and reporting difficult.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    We support pipeline, water, drainage, power, telecom and energy-related assignments through network digitisation, asset mapping, route information, attribute organisation and GIS database preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Mining & Natural Resources */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_mining.png"
                  alt="Mining & Natural Resources"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Mining
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Mining & Natural Resources
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Mining projects generate large amounts of spatial data from drone surveys, satellite imagery, LiDAR and site records. That information must be converted into clearly organised terrain and feature datasets.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    Techmapperz can extract and classify features such as haul roads, benches, conveyors, buildings, water bodies, drainage, stockpiles and land-cover areas, alongside terrain models and contours.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Government & Land Administration */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_government.png"
                  alt="Government & Land Administration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Government
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Government & Land Administration
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    We support consultants, contractors and project teams working on land, municipal and public-sector assignments across local and regional levels.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    The work involves georeferencing historical records, digitising land parcels, organising cadastral or municipal information, mapping public assets and classifying land use into structured databases.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Transportation, Rail & Corridor Projects */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_transportation.png"
                  alt="Transportation, Rail & Corridor Projects"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Transportation
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Transportation, Rail & Corridor
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Roads, railways and pipelines require information to remain consistent across long, narrow project areas. Small gaps in chainage, terrain or crossings can affect downstream design.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    Techmapperz supports corridor projects with topographical mapping, route datasets, terrain models, contours, profiles, cross-sections and comprehensive crossing feature extraction.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Architecture, Planning & Urban Development */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_architecture.png"
                  alt="Architecture, Planning & Urban Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Urban Planning
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Architecture & Urban Planning
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Planning and design teams require a reliable understanding of existing site conditions before developing architectural or master-planning proposals.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    We prepare base maps and spatial datasets covering buildings, roads, drainage, utilities, land use, vegetation, water bodies and terrain for master planning and riverfront studies.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Drone and Survey Service Providers */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_drone.png"
                  alt="Drone and Survey Service Providers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Survey Providers
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Drone & Survey Providers
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Not every survey company needs to maintain a large in-house processing team for every assignment. Techmapperz provides dependable back-office production support.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    Support includes photogrammetry processing, point-cloud classification, orthomosaic preparation, DTM/DSM generation, contours, feature extraction and CAD or GIS production under strict QA/QC.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Agriculture, Environment & Land Resources */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_agriculture.png"
                  alt="Agriculture, Environment & Land Resources"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[12px] font-bold px-3 py-1 bg-white/95 text-[#0C2E60] rounded-lg shadow-sm border border-[#DDE3EA]">
                  Agriculture & Environment
                </span>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[18px] md:text-[19px] leading-[1.25] mb-2.5">
                    Agriculture & Environment
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-3">
                    Agriculture and environmental assignments often require clear information about how land, vegetation, water and terrain are distributed across an area.
                  </p>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">
                    Using available satellite, drone, LiDAR or reference data, we prepare land-use/cover layers, plantation boundaries, drainage mapping, terrain information and multi-temporal change datasets.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: DELIVERED PROJECT EXPERIENCE */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden" id="projects">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              DELIVERED PROJECT EXPERIENCE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Experience Grounded in Real Project Work
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-2xl mx-auto mt-2.5">
              The following assignments show how our geospatial capabilities have been applied to different operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DDE3EA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-[#EDF5FB] text-[#1656B8] font-bold text-[12px] rounded-full mb-4">
                  Railway Corridor
                </span>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  173 km Railway Corridor
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  Drone-based LiDAR and topographical mapping for a 173 km railway corridor, producing terrain and corridor deliverables for project use.
                </p>
              </div>
              <Link
                href="/portfolios/topographical_railway_survey"
                className="inline-flex items-center gap-2 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] group/link transition-colors"
              >
                View Railway Corridor Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DDE3EA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-[#E8F5F3] text-[#0F766E] font-bold text-[12px] rounded-full mb-4">
                  Gas Pipeline
                </span>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  6,000 km Gas Pipeline Network
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  GIS digitisation and asset-registry work covering a 6,000 km gas transmission network and its associated facilities.
                </p>
              </div>
              <Link
                href="/portfolios/gas_pipeline_digitization"
                className="inline-flex items-center gap-2 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] group/link transition-colors"
              >
                View Gas Pipeline Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DDE3EA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FEF3C7] text-[#B45309] font-bold text-[12px] rounded-full mb-4">
                  Mining Area
                </span>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  556.674 sq km Mining Mapping
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  Two-dimensional feature extraction and CAD/GIS mapping from drone imagery across 556.674 sq km of mining areas.
                </p>
              </div>
              <Link
                href="/portfolios/mining_area_extraction"
                className="inline-flex items-center gap-2 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] group/link transition-colors"
              >
                View Mining Mapping Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Section CTA */}
          <div className="mt-8 md:mt-10 text-center">
            <Link
              href="/portfolios"
              className="inline-flex items-center justify-center px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIGITAL WORKFLOWS */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              DIGITAL WORKFLOWS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              When the Project Needs More Than a Static Map
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-3xl mx-auto mt-2.5">
              Some projects need teams to search, update or share information without opening desktop GIS. Techmapperz can connect spatial data with a web portal, dashboard or mobile workflow when this forms part of the requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F6F8FB] p-6 md:p-8 rounded-2xl border border-[#DDE3EA] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F5F3] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] mb-5 shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  Web GIS and Project Portals
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  Provide controlled browser-based access to maps, layers, asset information, filters and project records.
                </p>
              </div>
              <Link
                href="/service/it/webdevelopment"
                className="inline-flex items-center gap-1.5 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] transition-colors"
              >
                Web Application Development &rarr;
              </Link>
            </div>

            <div className="bg-[#F6F8FB] p-6 md:p-8 rounded-2xl border border-[#DDE3EA] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F5F3] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] mb-5 shadow-xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  Mobile GIS and Field Applications
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  Support location-based records, photographs, forms, observations and status updates between field and office teams.
                </p>
              </div>
              <Link
                href="/service/it/mobile-app-development"
                className="inline-flex items-center gap-1.5 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] transition-colors"
              >
                Mobile App Development &rarr;
              </Link>
            </div>

            <div className="bg-[#F6F8FB] p-6 md:p-8 rounded-2xl border border-[#DDE3EA] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F5F3] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] mb-5 shadow-xs">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-3">
                  B2B Websites and Applications
                </h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  Develop customer portals, service workflows, content platforms, business applications and mobile experiences for organisations with a defined operational requirement.
                </p>
              </div>
              <Link
                href="/service/gisservice"
                className="inline-flex items-center gap-1.5 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] transition-colors"
              >
                Explore GIS Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK (6 Steps) */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
            HOW WE WORK
          </span>
          <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto mb-8 md:mb-10">
            From Source Data to Usable Deliverables
          </h2>

          <div className="relative w-full mx-auto overflow-x-auto pb-6 hide-scrollbar">
            <div className="min-w-[960px] grid grid-cols-6 gap-4 relative z-10 px-2">

              {/* Step 1 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[38px] left-[calc(50%+40px)] w-[calc(100%+1rem-80px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-[#DDE3EA] relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-[#0F766E] rotate-45"></div>
                  </div>
                </div>
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">01</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Understand Project Use</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">We review the project objective, area, intended use, expected deliverables and applicable specifications.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[38px] left-[calc(50%+40px)] w-[calc(100%+1rem-80px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-[#DDE3EA] relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-[#0F766E] rotate-45"></div>
                  </div>
                </div>
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">02</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Review Inputs</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">Sample data is checked for format, coverage, coordinate information, quality and possible gaps.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[38px] left-[calc(50%+40px)] w-[calc(100%+1rem-80px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-[#DDE3EA] relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-[#0F766E] rotate-45"></div>
                  </div>
                </div>
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">03</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Define Layers & Outputs</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">The required features, attributes, file formats, naming conventions and delivery structure are agreed.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[38px] left-[calc(50%+40px)] w-[calc(100%+1rem-80px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-[#DDE3EA] relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-[#0F766E] rotate-45"></div>
                  </div>
                </div>
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">04</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Plan QA/QC</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">A workflow is prepared around the source data, required checks, production stages and review points.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[38px] left-[calc(50%+40px)] w-[calc(100%+1rem-80px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-[#DDE3EA] relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-[#0F766E] rotate-45"></div>
                  </div>
                </div>
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">05</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Produce & Review</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">The data is processed, digitised or developed and then checked against the agreed requirements.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center relative">
                <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0F766E] shadow-sm flex items-center justify-center text-[#0C2E60] mb-3.5 z-10 shrink-0">
                  <span className="font-bold text-[18px]">06</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0C2E60] font-bold text-[15px] mb-1.5 leading-tight">Deliver & Hand Over</span>
                  <p className="text-[#4B5563] text-[13px] px-1 leading-relaxed">Final files are organised for their intended GIS, CAD, web, mobile or reporting environment.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (15-20% Deep Navy High-Impact Section) */}
      <section className="relative py-4 md:py-10 bg-[#0C2E60] border-t border-white/10 text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Questions About Our Industry Services
            </h2>
          </div>

          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} theme="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DISCUSS YOUR REQUIREMENT (Standard CTA Banner Card) */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            {/* Subtle background circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Have a Project Scope or Tender to Review?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share the industry, project location, available inputs, expected deliverables and timeline. Our team will review your requirements and suggest an optimal workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Project &rarr;
              </Link>
              <Link
                href="/portfolios"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

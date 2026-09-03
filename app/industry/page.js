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
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* SECTION 1: HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-16 sm:pb-24 md:pb-28"
        style={{ backgroundImage: 'url("/gis_images/aerial_gis_mapping_banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">INDUSTRIES WE SUPPORT</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-4xl">
            Industry-Focused GIS, Drone Survey and Digital Services
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-3xl leading-relaxed">
            Techmapperz supports infrastructure consultants, utilities, mining teams, government contractors, planners, survey providers and land-resource projects with GIS production, drone data processing, LiDAR deliverables, mapping and purpose-built web and mobile applications.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="#industries" className="w-full sm:w-auto">
              <button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#0C2E60] bg-[#0C2E60] text-white font-semibold text-[15px] hover:bg-[#0d336d] transition-all duration-300 shadow-md">
                Explore Industry Capabilities
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300 shadow-md">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY INDUSTRY CONTEXT MATTERS */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">WHY INDUSTRY CONTEXT MATTERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">The Industry Changes What the Data Must Deliver</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/2 space-y-5">
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                The same orthomosaic, point cloud or base map can serve very different purposes. A railway consultant may need chainage-linked profiles and cross-sections. A utility team may require a searchable asset register. A mining team may need benches, haul roads, surface features and terrain information.
              </p>
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-semibold text-[#0c2e60]">
                That is why we begin with the project requirement—not the software.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                We review how the data will be used, the quality and structure of the available inputs, the required layers and the final delivery environment. The production and QA/QC workflow is then planned around the agreed specification.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0c2e60] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Project Use</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  What decision, design or operation will the data support?
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-[#6ac045] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Source Data</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  What survey, drone, satellite, CAD or legacy information is available?
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Production Rules</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Which layers, attributes, coordinate systems and checks are required?
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Delivery Environment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Will the output be used in GIS, CAD, a report, a web portal or a mobile application?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SECTOR-SPECIFIC CAPABILITIES */}
      <section className="py-20 md:py-28 bg-white" id="industries">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">SECTOR-SPECIFIC CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight mb-4">Industries We Support</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              These are the sectors where Techmapperz’s GIS, drone, LiDAR and digital capabilities are most relevant. The exact workflow, accuracy requirement and deliverables are agreed project by project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* 1. Infrastructure & Engineering */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_infrastructure.png"
                  alt="Infrastructure & Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Infrastructure
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Infrastructure & Engineering</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Techmapperz supports engineering consultants, EPC contractors, survey teams and project owners working on roads, railways, pipelines, industrial sites and public infrastructure.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We help convert survey observations, drone imagery, point clouds, CAD drawings and legacy records into dependable base maps, terrain information, corridor datasets and drawing-ready outputs.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Utilities & Energy */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_utilities.png"
                  alt="Utilities & Energy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Utilities
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Utilities & Energy</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Utility projects depend on consistent location and asset information. Disconnected drawings, incomplete attributes and outdated network records can make planning, maintenance and reporting difficult.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We support pipeline, water, drainage, power, telecom and energy-related assignments through network digitisation, asset mapping, route information, attribute organisation and GIS database preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Mining & Natural Resources */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_mining.png"
                  alt="Mining & Natural Resources"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Mining
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Mining & Natural Resources</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Mining projects generate large amounts of spatial data from drone surveys, satellite imagery, LiDAR and site records. That information must be converted into clearly organised terrain and feature datasets.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Techmapperz can extract and classify features such as haul roads, benches, conveyors, buildings, water bodies, drainage, stockpiles and land-cover areas, alongside terrain models and contours.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Government & Land Administration */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_government.png"
                  alt="Government & Land Administration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Government
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Government & Land Administration</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    We support consultants, contractors and project teams working on land, municipal and public-sector assignments across local and regional levels.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    The work involves georeferencing historical records, digitising land parcels, organising cadastral or municipal information, mapping public assets and classifying land use into structured databases.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Transportation, Rail & Corridor Projects */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_transportation.png"
                  alt="Transportation, Rail & Corridor Projects"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Transportation
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Transportation, Rail & Corridor</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Roads, railways and pipelines require information to remain consistent across long, narrow project areas. Small gaps in chainage, terrain or crossings can affect downstream design.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Techmapperz supports corridor projects with topographical mapping, route datasets, terrain models, contours, profiles, cross-sections and comprehensive crossing feature extraction.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Architecture, Planning & Urban Development */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_architecture.png"
                  alt="Architecture, Planning & Urban Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Urban Planning
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Architecture & Urban Planning</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Planning and design teams require a reliable understanding of existing site conditions before developing architectural or master-planning proposals.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We prepare base maps and spatial datasets covering buildings, roads, drainage, utilities, land use, vegetation, water bodies and terrain for master planning and riverfront studies.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Drone and Survey Service Providers */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_drone.png"
                  alt="Drone and Survey Service Providers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Survey Providers
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Drone & Survey Providers</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Not every survey company needs to maintain a large in-house processing team for every assignment. Techmapperz provides dependable back-office production support.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Support includes photogrammetry processing, point-cloud classification, orthomosaic preparation, DTM/DSM generation, contours, feature extraction and CAD or GIS production under strict QA/QC.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Agriculture, Environment & Land Resources */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/gis_images/industry_agriculture.png"
                  alt="Agriculture, Environment & Land Resources"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-white/90 text-[#0c2e60] rounded-md">
                  Agriculture & Environment
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="font-bold text-[#0c2e60] text-lg mb-2.5">Agriculture & Environment</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                    Agriculture and environmental assignments often require clear information about how land, vegetation, water and terrain are distributed across an area.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Using available satellite, drone, LiDAR or reference data, we prepare land-use/cover layers, plantation boundaries, drainage mapping, terrain information and multi-temporal change datasets.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* SECTION 4: DELIVERED PROJECT EXPERIENCE */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">DELIVERED PROJECT EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight mb-4">Experience Grounded in Real Project Work</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The following assignments show how our geospatial capabilities have been applied to different operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0c2e60] font-bold text-xs rounded-full mb-4">
                  Railway Corridor
                </span>
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3">173 km Railway Corridor</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Drone-based LiDAR and topographical mapping for a 173 km railway corridor, producing terrain and corridor deliverables for project use.
                </p>
              </div>
              <Link
                href="/portfolios/topographical_railway_survey"
                className="inline-flex items-center gap-2 text-[#6ac045] font-bold text-sm hover:text-[#5aad38] group"
              >
                View Railway Corridor Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-green-50 text-[#6ac045] font-bold text-xs rounded-full mb-4">
                  Gas Pipeline
                </span>
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3">6,000 km Gas Pipeline Network</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  GIS digitisation and asset-registry work covering a 6,000 km gas transmission network and its associated facilities.
                </p>
              </div>
              <Link
                href="/portfolios/gas_pipeline_digitization"
                className="inline-flex items-center gap-2 text-[#6ac045] font-bold text-sm hover:text-[#5aad38] group"
              >
                View Gas Pipeline Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-full mb-4">
                  Mining Area
                </span>
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3">556.674 sq km Mining Mapping</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Two-dimensional feature extraction and CAD/GIS mapping from drone imagery across 556.674 sq km of mining areas.
                </p>
              </div>
              <Link
                href="/portfolios/mining_area_extraction"
                className="inline-flex items-center gap-2 text-[#6ac045] font-bold text-sm hover:text-[#5aad38] group"
              >
                View Mining Mapping Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Section CTA */}
          <div className="mt-14 text-center">
            <Link href="/portfolios">
              <button className="py-3 px-8 rounded-full border-2 border-[#0c2e60] text-[#0c2e60] font-bold text-sm hover:bg-[#0c2e60] hover:text-white transition-all shadow-sm">
                View All Projects &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIGITAL WORKFLOWS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">DIGITAL WORKFLOWS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight mb-4">When the Project Needs More Than a Static Map</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Some projects need teams to search, update or share information without opening desktop GIS. Techmapperz can connect spatial data with a web portal, dashboard or mobile workflow when this forms part of the requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0c2e60] mb-5 shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Web GIS and Project Portals</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Provide controlled browser-based access to maps, layers, asset information, filters and project records.
                </p>
              </div>
              <Link href="/service/it/webdevelopment" className="inline-flex items-center gap-1.5 text-[#0c2e60] font-bold text-xs hover:text-[#6ac045] transition-colors">
                Web Application Development &rarr;
              </Link>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0c2e60] mb-5 shadow-xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Mobile GIS and Field Applications</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Support location-based records, photographs, forms, observations and status updates between field and office teams.
                </p>
              </div>
              <Link href="/service/it/mobile-app-development" className="inline-flex items-center gap-1.5 text-[#0c2e60] font-bold text-xs hover:text-[#6ac045] transition-colors">
                Mobile App Development &rarr;
              </Link>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0c2e60] mb-5 shadow-xs">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B Websites and Applications</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Develop customer portals, service workflows, content platforms, business applications and mobile experiences for organisations with a defined operational requirement.
                </p>
              </div>
              <Link href="/service/gisservice" className="inline-flex items-center gap-1.5 text-[#0c2e60] font-bold text-xs hover:text-[#6ac045] transition-colors">
                Explore GIS Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK (6 Steps) */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-16">From Source Data to Usable Deliverables</h2>

          <div className="relative mt-8 w-full mx-auto overflow-x-auto pb-8 hide-scrollbar">
            <div className="min-w-[960px] grid grid-cols-6 gap-4 relative z-10 px-4">

              {/* Step 1 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">01</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Understand Project Use</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">We review the project objective, area, intended use, expected deliverables and applicable specifications.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">02</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Review Inputs</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">Sample data is checked for format, coverage, coordinate information, quality and possible gaps.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">03</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Define Layers & Outputs</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The required features, attributes, file formats, naming conventions and delivery structure are agreed.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">04</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Plan QA/QC</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">A workflow is prepared around the source data, required checks, production stages and review points.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">05</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Produce & Review</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The data is processed, digitised or developed and then checked against the agreed requirements.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center relative">
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">06</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Deliver & Hand Over</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">Final files are organised for their intended GIS, CAD, web, mobile or reporting environment.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60]">Questions About Our Industry Services</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DISCUSS YOUR REQUIREMENT (Final CTA Banner) */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-6 h-[2px] bg-[#6ac045]" />
                DISCUSS YOUR REQUIREMENT
                <span className="w-6 h-[2px] bg-[#6ac045]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                Have a Project Scope, Source Data or Tender Requirement to Review?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal">
                Share the industry, project location, available inputs, expected layers or deliverables, output format and timeline. We can review the requirement and identify the GIS, drone-processing, LiDAR or digital-development support relevant to the scope.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Share Your Scope of Work &rarr;
                </Link>
                <Link
                  href="/portfolios"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm"
                >
                  View Relevant Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

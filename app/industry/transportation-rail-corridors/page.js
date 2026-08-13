import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Database, Settings, CheckCircle, ArrowRight,
  ShieldCheck, MapPin, Activity, Train, Truck, Building2, Zap,
  Waypoints, Mountain, Navigation, FileDigit, Ruler, Layers,
  LayoutGrid, ArrowDown, MoveRight, Eye, Briefcase, Camera, Route, Compass
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from '@/app/industry/FaqItem';

export const metadata = {
  title: 'GIS, Drone & LiDAR Services for Rail & Corridor Projects | Techmapperz',
  description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models, cross-sections and asset mapping for railway, highway and corridor projects.',
  keywords: 'GIS corridor mapping, drone survey transportation, railway GIS, LiDAR point cloud processing, topographic mapping transportation, cross-sections, CAD GIS conversion, asset mapping',
  openGraph: {
    title: 'GIS, Drone & LiDAR Services for Rail & Corridor Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models, cross-sections and asset mapping for railway, highway and corridor projects.',
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS, Drone & LiDAR Services for Rail & Corridor Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models, cross-sections and asset mapping for railway, highway and corridor projects.',
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/industry/transportation-rail-corridors',
  },
};

const projectEnvironments = [
  {
    number: '01',
    title: 'Railway Corridors',
    icon: Train,
    ctaText: 'Discuss a Railway Mapping Project',
    items: [
      'Railway corridor mapping',
      'Drone survey and processing',
      'LiDAR point-cloud processing',
      'Track and alignment-related mapping',
      'Railway feature extraction',
      'Buildings and structures',
      'Platforms and related features where required',
      'Road crossings',
      'Drainage',
      'Water bodies',
      'Utilities',
      'Terrain models',
      'Contours',
      'Profiles',
      'Cross-sections',
      'GIS and CAD preparation',
    ],
  },
  {
    number: '02',
    title: 'Roads & Highways',
    icon: Truck,
    ctaText: 'Discuss a Road & Highway Project',
    items: [
      'Road and highway corridor mapping',
      'Existing-condition mapping',
      'Road centreline',
      'Road edges',
      'Junctions',
      'Structures',
      'Drainage',
      'Bridges and crossings where specified',
      'Utility crossings',
      'Roadside assets',
      'Buildings',
      'Water bodies',
      'Land-use information',
      'Terrain products',
      'GIS/CAD preparation',
    ],
  },
  {
    number: '03',
    title: 'Metro, Urban Transit & Transport Infrastructure',
    icon: Building2,
    ctaText: 'Discuss an Urban Transport Project',
    items: [
      'Existing-condition mapping',
      'Corridor base mapping',
      'Buildings and structures',
      'Road networks',
      'Drainage',
      'Utilities',
      'Transport assets',
      'Land-use information',
      'Project boundaries',
      'GIS database preparation',
      'CAD/GIS integration',
    ],
  },
  {
    number: '04',
    title: 'Utility & Pipeline Corridors',
    icon: Zap,
    ctaText: 'Discuss a Utility Corridor Project',
    items: [
      'Alignment mapping',
      'Corridor feature extraction',
      'Road and railway crossings',
      'Water-body crossings',
      'Drainage',
      'Buildings',
      'Access roads',
      'Terrain',
      'Associated assets',
      'GIS database preparation',
      'CAD/GIS conversion',
    ],
  },
  {
    number: '05',
    title: 'Other Linear Infrastructure',
    icon: Waypoints,
    ctaText: 'Discuss a Linear Mapping Requirement',
    items: [
      'Access corridors',
      'Industrial links',
      'Transmission-related corridors',
      'Development corridors',
      'Linear asset inventories',
      'Project-specific alignment mapping',
    ],
  },
];

const coreServices = [
  {
    number: '01',
    title: 'Drone Survey & Corridor Mapping',
    icon: Camera,
    ctaText: 'Explore Drone Survey Services',
    items: [
      'Raw-image processing',
      'Orthophoto generation',
      'Orthomosaic preparation',
      'Point-cloud generation',
      'DSM',
      'Terrain information',
      'Contours',
      'Feature extraction',
      'GIS/CAD mapping',
    ],
    desc: 'Drone imagery can support mapping of transportation corridors when aerial survey is suitable for the project environment and required output.',
  },
  {
    number: '02',
    title: 'LiDAR & Point-Cloud Processing',
    icon: FileDigit,
    ctaText: 'Explore LiDAR & Point-Cloud Services',
    items: [
      'LAS/LAZ review',
      'Point-cloud cleaning',
      'Classification',
      'Ground/non-ground separation',
      'Terrain extraction',
      'DEM / DTM',
      'Contour generation',
      'Profiles',
      'Cross-sections',
      '2D feature extraction',
      '3D feature extraction',
      'GIS/CAD preparation',
    ],
    desc: 'LiDAR point clouds can support corridor terrain and infrastructure mapping where detailed three-dimensional information is required.',
  },
  {
    number: '03',
    title: 'Topographic & Existing-Condition Mapping',
    icon: Map,
    ctaText: 'Discuss Topographic Mapping',
    items: [
      'Terrain',
      'Track or road features',
      'Buildings',
      'Structures',
      'Drainage',
      'Water bodies',
      'Utilities',
      'Crossings',
      'Vegetation',
      'Land boundaries',
      'Project-specific assets',
    ],
    desc: 'Transportation projects often require a structured record of the existing project environment. The exact feature catalogue should be agreed before full production begins.',
  },
  {
    number: '04',
    title: 'DEM, DTM, DSM & Contour Mapping',
    icon: Mountain,
    ctaText: 'Discuss Terrain Mapping',
    items: [
      'DEM (Digital elevation information)',
      'DSM (Surface information)',
      'DTM (Ground-focused terrain representation)',
      'Contours (Elevation lines)',
      'Spot elevations',
      'Hillshade',
      'Slope',
      'Profiles',
      'Cross-sections',
      'Surface models',
    ],
    desc: 'Terrain information can support alignment, design, drainage and engineering workflows depending on the available source data.',
  },
  {
    number: '05',
    title: 'Transportation Feature & Asset Mapping',
    icon: Database,
    ctaText: 'Explore GIS Feature Mapping',
    items: [
      'Railway tracks',
      'Roads',
      'Road edges',
      'Junctions',
      'Buildings',
      'Bridges',
      'Structures',
      'Drainage',
      'Water bodies',
      'Utility crossings',
      'Railway or roadside assets',
      'Conveyors or industrial crossings where relevant',
      'Project-specific features',
    ],
    desc: 'A corridor contains many individual features that may need to be organised into a structured GIS or CAD dataset according to the agreed specification.',
  },
  {
    number: '06',
    title: 'CAD & GIS Integration',
    icon: LayoutGrid,
    ctaText: 'Discuss CAD/GIS Conversion',
    items: [
      'DWG/DXF review',
      'Layer separation',
      'Geometry cleaning',
      'Coordinate-system handling',
      'GIS database preparation',
      'Feature-code translation',
      'GIS-to-CAD conversion',
      'CAD-ready output organisation',
    ],
    desc: 'Transportation engineering teams often work in CAD while geospatial production is performed in GIS. Techmapperz can support controlled conversion between these environments.',
  },
];

const faqs = [
  {
    q: "What transportation projects can Techmapperz support?",
    a: "Techmapperz can support railway, road, highway, pipeline and other linear-infrastructure mapping requirements depending on the available source data and project specification.",
  },
  {
    q: "Can you work on long railway corridors?",
    a: "Yes. Long corridors can be divided into planned production sections while applying consistent mapping, attribute and QA/QC rules across the project.",
  },
  {
    q: "Can Techmapperz process railway LiDAR data?",
    a: "Yes. LAS or LAZ point clouds can be reviewed for classification, terrain extraction, contours, profiles, cross-sections and feature mapping according to the project scope.",
  },
  {
    q: "Can you process drone imagery captured by another survey organisation?",
    a: "Yes. Client-supplied imagery can be reviewed for photogrammetry and mapping. The processing workflow depends on image quality, overlap, positioning information, available survey control and required outputs.",
  },
  {
    q: "Can you prepare railway topographic mapping?",
    a: "Yes. Railway corridor mapping can include terrain, railway features, roads, structures, drainage, utilities, water bodies and other feature classes according to the technical specification.",
  },
  {
    q: "Can you map roads and highways?",
    a: "Yes. Road and highway datasets can include centreline, edges, junctions, drainage, structures, utilities, assets and surrounding features according to the project requirements.",
  },
  {
    q: "Can you produce DEM, DTM and contours?",
    a: "Yes, where suitable elevation information is available. The required surface type and contour interval should be agreed according to the project use.",
  },
  {
    q: "Can you produce longitudinal profiles?",
    a: "Yes, where suitable terrain information and a defined project alignment are available.",
  },
  {
    q: "Can you prepare cross-sections?",
    a: "Yes. Cross-sections can be generated from suitable elevation data at locations or intervals defined by the project specification.",
  },
  {
    q: "Can you map utility crossings?",
    a: "Yes. Utility crossings and other corridor interactions can be mapped when they are identifiable from the available source information or supplied through project records.",
  },
  {
    q: "Can you deliver both GIS and CAD files?",
    a: "Yes. Depending on the scope, final data can be structured for GIS as well as DWG/DXF-based CAD delivery.",
  },
  {
    q: "How do you maintain consistency across a long corridor?",
    a: "Large corridors can be divided into controlled production blocks with common feature definitions, layer structures, attributes, coordinate systems, QA/QC rules and edge-matching checks before final integration.",
  },
  {
    q: "Can Techmapperz work as a processing subcontractor?",
    a: "Yes. Survey companies, consultants, contractors and drone providers can engage Techmapperz for defined photogrammetry, LiDAR, terrain, feature-extraction or GIS/CAD production scopes.",
  },
  {
    q: "What information should we share for a quotation?",
    a: "Share the project type, alignment, corridor length, corridor width, available data, coordinate system, feature requirements, terrain outputs, profiles, cross-sections, output formats, specification and timeline.",
  },
  {
    q: "Can Techmapperz guarantee a specific accuracy?",
    a: "Accuracy should be reviewed against the original acquisition methodology, source information, survey control and project specification before any commitment is made.",
  },
];

const capabilityStrip = [
  { Icon: Camera, title: "Drone Survey", sub: "Processing" },
  { Icon: Map, title: "Railway GIS", sub: "Mapping" },
  { Icon: FileDigit, title: "LiDAR", sub: "Point Cloud" },
  { Icon: Ruler, title: "Terrain Models", sub: "& Cross-Sections" },
  { Icon: Database, title: "Asset Mapping", sub: "Feature Extraction" },
  { Icon: LayoutGrid, title: "CAD/GIS", sub: "Conversion" },
];

export default function TransportationPage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-44 sm:pb-40"
        style={{ backgroundImage: "url('/gis_images/industry_transportation.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e60]/90 via-[#0c2e60]/75 to-transparent" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <nav className="flex items-center gap-2 text-xs text-gray-300 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#6ac045]">Transportation, Rail &amp; Corridors</span>
          </nav>
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">TRANSPORTATION, RAIL &amp; CORRIDORS</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial Services for Transportation, Rail &amp; Corridor Projects
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            Techmapperz supports railway, road, highway and other linear-infrastructure projects with GIS mapping, drone survey and processing, LiDAR, point-cloud processing, terrain modelling, feature extraction and GIS/CAD data preparation.
          </p>
          <p className="text-gray-300 text-sm md:text-[15px] max-w-2xl leading-relaxed hidden sm:block">
            Our workflow is structured around the corridor alignment, available survey information, required corridor width, coordinate system, feature catalogue, terrain requirements and final engineering deliverables.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {['Drone Survey', 'Railway GIS', 'LiDAR', 'Terrain Models', 'Feature Extraction', 'Cross-Sections', 'Asset Mapping', 'CAD/GIS'].map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide">{cap}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-3 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-primary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg">
                Discuss Your Corridor Project
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-secondary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                Share Your Scope of Work
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-[#0a1930]/95 backdrop-blur-md border-t border-[#6ac045]/30 z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-5 overflow-x-auto">
            <div className="flex items-center justify-between gap-6 min-w-max md:min-w-0">
              {capabilityStrip.map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3 group cursor-default">
                  <Icon className="w-5 h-5 text-[#6ac045] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white text-sm font-bold mb-0.5 tracking-wide">{title}</h4>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wider">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT ENVIRONMENTS */}
      <section className="py-20 md:py-28 bg-[#f8fafc]" id="environments">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">PROJECT ENVIRONMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Geospatial Support Across Different Linear Infrastructure Projects
            </h2>
          </div>
          <div className="flex flex-col">
            {projectEnvironments.map((project, idx) => {
              const Icon = project.icon;
              const isEven = idx % 2 === 1;
              return (
                <div key={project.number} id={`env-${project.number}`} className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} items-stretch border-b border-gray-100 last:border-b-0 bg-white`}>
                  <div className={`lg:w-[340px] xl:w-[400px] shrink-0 flex items-center justify-center py-12 px-10 ${isEven ? 'bg-[#0a1930]' : 'bg-[#0c2e60]'}`}>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-9 h-9 text-[#6ac045]" />
                      </div>
                      <span className="block text-[#6ac045] text-5xl font-black leading-none mb-3">{project.number}</span>
                      <h3 className="text-white text-xl font-bold leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1 py-12 px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mb-8">
                      {project.items.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 py-1.5">
                          <CheckCircle className="w-4 h-4 text-[#6ac045] mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <button id={`env-cta-${project.number}`} className="inline-flex items-center gap-2 py-2.5 px-7 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                        {project.ctaText} <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 md:py-28 bg-white" id="services">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">WHAT WE CAN SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              From Survey Data to Continuous Corridor Deliverables
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.number} className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#0c2e60] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#6ac045]" />
                    </div>
                    <span className="text-[#6ac045] text-2xl font-black">{service.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0c2e60] leading-tight mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {service.items.slice(0, 5).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#6ac045] mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                    {service.items.length > 5 && (
                      <li className="text-gray-500 text-xs italic pl-6 pt-1">+ {service.items.length - 5} more features</li>
                    )}
                  </ul>
                  <Link href="/contact" className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-gray-200 text-[#0c2e60] font-semibold text-sm hover:border-[#6ac045] hover:bg-[#6ac045] hover:text-white transition-all duration-300">
                      {service.ctaText} <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORRIDOR CONTINUITY */}
      <section className="py-20 md:py-28 bg-[#0a1930] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">CONSISTENCY ACROSS THE ALIGNMENT</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Long Corridors Need More Than Individual Map Sheets
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                A 100 km corridor cannot be treated as 100 unrelated one-kilometre maps. Where a corridor is divided into multiple production blocks, those blocks should still form a continuous spatial dataset at final delivery.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                The final data may need consistent coordinate reference, feature interpretation, layer naming, coding, attribute structure, map-sheet organisation, edge matching, connectivity, and QA/QC rules.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#6ac045] text-white font-semibold text-sm hover:bg-[#5aad38] transition-all duration-300">
                  Discuss Your Corridor Specification <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            <div className="lg:w-7/12 w-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 relative">
                  {/* Line running through */}
                  <div className="hidden sm:block absolute top-1/2 left-0 w-full h-[2px] bg-[#6ac045]/30 -translate-y-1/2 z-0" />
                  
                  {['BLOCK 01', 'BLOCK 02', 'BLOCK 03', 'BLOCK 04'].map((block, idx) => (
                    <div key={block} className="flex items-center relative z-10">
                      <div className="bg-[#0c2e60] border border-[#6ac045] text-white font-bold text-xs tracking-widest px-4 py-3 rounded-lg flex flex-col items-center gap-1 shadow-lg">
                        <Map className="w-5 h-5 text-[#6ac045]" />
                        {block}
                      </div>
                      {idx < 3 && <MoveRight className="w-5 h-5 text-gray-500 mx-3 sm:hidden" />}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mb-6">
                  <ArrowDown className="w-8 h-8 text-[#6ac045]" />
                </div>
                
                <div className="bg-gradient-to-r from-[#6ac045] to-[#4c9c2e] text-white font-bold text-lg tracking-wide py-4 px-8 rounded-xl text-center shadow-lg">
                  FINAL CONTINUOUS CORRIDOR GIS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILES & CROSS-SECTIONS AND DRAINAGE (Sections 6 & 7) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Profiles & Sections */}
            <div>
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">TERRAIN ALONG THE ALIGNMENT</span>
              <h2 className="text-3xl font-bold text-[#0c2e60] leading-tight mb-6">
                Elevation Information Is Often Needed Along and Across the Corridor
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Transportation projects may require terrain information not only as a map but also as profiles and sections. Profile spacing, cross-section locations, terrain model and contour interval should be defined from the project requirement rather than assumed.
              </p>
              
              <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-6 mb-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                      <Route className="w-6 h-6 text-[#0c2e60]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c2e60] mb-1">PLAN VIEW</h4>
                      <p className="text-sm text-gray-500">Rail alignment and corridor layout.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                      <Activity className="w-6 h-6 text-[#6ac045]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c2e60] mb-1">LONG PROFILE</h4>
                      <p className="text-sm text-gray-500">Elevation information represented along a defined alignment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                      <Layers className="w-6 h-6 text-[#0c2e60]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c2e60] mb-1">CROSS-SECTION</h4>
                      <p className="text-sm text-gray-500">Terrain or surface information represented across the corridor at specified locations or intervals.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <button className="text-[#0c2e60] font-bold text-sm hover:text-[#6ac045] transition-colors inline-flex items-center gap-1.5">
                  Discuss Profile &amp; Section Requirements <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            {/* Features Interacting */}
            <div>
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">FEATURES THAT INTERACT WITH THE ROUTE</span>
              <h2 className="text-3xl font-bold text-[#0c2e60] leading-tight mb-6">
                Corridor Mapping Should Consider What Crosses and Connects
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Transportation routes interact with surrounding infrastructure and natural features. The required feature list should be supplied or agreed before full production.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
                {[
                  'Drainage & Culverts', 'Water bodies', 'Road crossings', 
                  'Railway crossings', 'Utility crossings', 'Buildings', 
                  'Bridges & structures', 'Access roads', 'Land boundaries', 
                  'Vegetation', 'Settlements', 'Project assets'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT ACROSS PROJECT STAGES */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">WHERE GEOSPATIAL DATA FITS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Transportation Data Can Support Different Stages of the Project
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: '01', title: 'Planning & Feasibility', 
                desc: 'Geospatial information can help establish the existing corridor context. Requirements include existing terrain, base mapping, land use, structures, and roads.' 
              },
              { 
                step: '02', title: 'Survey & Design Support', 
                desc: 'Detailed mapping can be prepared for engineering workflows. Outputs include topographic data, DTM, contours, profiles, cross-sections, utilities and CAD.' 
              },
              { 
                step: '03', title: 'Construction Mapping', 
                desc: 'Where periodic data acquisition is included, spatial data supports updated conditions, progress documentation, change mapping, and project dashboards.' 
              },
              { 
                step: '04', title: 'Asset & Operational GIS', 
                desc: 'Spatial information can support asset and operational workflows. Applications include asset registers, inspection info, Web GIS, and location-based reporting.' 
              },
            ].map((stage, idx) => (
              <div key={stage.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0f8ea] rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                <span className="text-[#6ac045] text-4xl font-black mb-4 block opacity-50">{stage.step}</span>
                <h3 className="text-lg font-bold text-[#0c2e60] mb-3 leading-tight">{stage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-sm hover:bg-[#1656b8] transition-all duration-300">
                Discuss Your Project Stage <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE (173 km Railway) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">RELEVANT PROJECT EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">A Proven Workflow for Linear Projects</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-1/2 xl:w-[60%] shrink-0 min-h-[350px] lg:min-h-0 bg-gray-100">
                <Image src="/gis_images/industry_transportation.png" alt="Railway corridor mapping project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e60]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ac045] text-white text-[11px] font-bold uppercase tracking-wider">
                    <Train className="w-3 h-3" /> Railway Corridor Mapping
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                    <FileDigit className="w-3 h-3" /> LiDAR Data
                  </span>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl lg:text-6xl font-black text-[#0c2e60] leading-none">173</span>
                  <span className="text-2xl font-bold text-[#0c2e60] pb-1">km</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">Railway Corridor Mapping</h3>
                
                <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Route className="w-5 h-5 text-[#6ac045]" />
                    <span className="font-bold text-[#0c2e60]">100 m Survey Width</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A large-scale railway assignment combining Drone LiDAR, point-cloud processing, and comprehensive feature extraction to deliver continuous mapping.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Drone LiDAR', 'Point Cloud', 'DEM / DSM', 'Contours', 'Cross-Sections', 'GIS / CAD'].map((d) => (
                    <span key={d} className="px-3 py-1.5 rounded bg-gray-50 border border-gray-200 text-[#0c2e60] text-xs font-semibold">{d}</span>
                  ))}
                </div>
                <Link href="/contact">
                  <button id="project-experience-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#6ac045] text-white font-semibold text-sm hover:bg-[#5aad38] transition-all duration-300">
                    View Railway Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB & MOBILE GIS */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">FROM CORRIDOR GIS TO DIGITAL ACCESS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                When Transportation Information Needs to Be Available Beyond Desktop GIS
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                A corridor GIS database can also support controlled browser or field access where required by project managers or engineering teams.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-[#0c2e60] flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#6ac045]" /> Transportation Web GIS &amp; Dashboards
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">Functions include corridor map viewing, layer control, asset search, feature identification, attribute info, project status, and document links.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0c2e60] flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-[#6ac045]" /> Mobile GIS for Field Teams
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">Field teams can use mobile workflows for asset inspection, location verification, photographs, observations, status updates, and field records.</p>
                </div>
              </div>
              
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 py-3 px-8 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                  Explore Web &amp; Mobile GIS <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2">
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <Image src="/Industry/transportation_gis_dashboard.jpg" alt="Web and Mobile GIS Dashboard" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-[#6ac045] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md">Digital Dashboard</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* START WITH WHAT YOU HAVE */}
      <section className="py-16 md:py-20 bg-white border-y border-gray-100">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-10">Start With the Corridor Information You Already Have</h2>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
               {[
                 { icon: Route, label: 'Alignment' },
                 { icon: Camera, label: 'Drone Imagery' },
                 { icon: FileDigit, label: 'LiDAR' },
                 { icon: Compass, label: 'Survey Data' },
                 { icon: LayoutGrid, label: 'GIS/CAD' },
                 { icon: Settings, label: 'Technical Spec' }
               ].map((item) => (
                 <div key={item.label} className="flex flex-col items-center gap-3 group">
                   <div className="w-16 h-16 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center group-hover:border-[#6ac045] group-hover:bg-[#f0f8ea] transition-colors">
                      <item.icon className="w-6 h-6 text-[#0c2e60] group-hover:text-[#6ac045] transition-colors" />
                   </div>
                   <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{item.label}</span>
                 </div>
               ))}
            </div>
            
            <div className="mt-12">
               <Link href="/contact">
                  <button className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-sm hover:bg-[#1656b8] transition-all duration-300">
                    Share Your Project Data <ArrowRight className="w-4 h-4" />
                  </button>
               </Link>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">COMMON QUESTIONS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">Questions Transportation Teams Ask Before Starting a Project</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">If your question is not answered here, share your project scope and our team will respond with the most relevant information.</p>
              <Link href="/contact">
                <button id="faq-cta" className="inline-flex items-center gap-2 py-3 px-7 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="lg:w-2/3">
              {faqs.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0c2e60] py-16 md:py-24 relative overflow-hidden" id="contact">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Route className="w-[600px] h-[600px] text-white" strokeWidth={0.5} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">START WITH THE ALIGNMENT</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mb-5">Planning a Railway, Highway or Corridor Mapping Requirement?</h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
              Share the project alignment, corridor length and width, available imagery or LiDAR, survey information, required feature classes, terrain products, GIS/CAD formats and timeline.
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
              Whether the project requires a complete geospatial workflow or only processing and mapping support, Techmapperz can review the available inputs and define a practical production approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button id="final-cta-primary" className="whitespace-nowrap py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Corridor Project
                </button>
              </Link>
              <Link href="/contact">
                <button id="final-cta-secondary" className="whitespace-nowrap py-3 px-9 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300">
                  Send Your Scope of Work
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10">
             <div className="flex flex-wrap items-center justify-between gap-6">
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Railway Mapping</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Highway GIS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Drone Survey</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">LiDAR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Terrain</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Cross-Sections</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Feature Extraction</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]" />
                <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">CAD/GIS</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
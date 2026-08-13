import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Database, Settings, CheckCircle, ArrowRight,
  ShieldCheck, MapPin, Activity, Briefcase, Layers, FileDigit,
  Ruler, Globe, Pickaxe, Mountain, Truck, BarChart3, Trees,
  Compass, FileCheck, Smartphone, CheckSquare
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from '@/app/industry/FaqItem';

export const metadata = {
  title: 'GIS, Drone & LiDAR Services for Mining Projects | Techmapperz',
  description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, terrain models, mine feature extraction, contour mapping and volumetric analysis for mining and natural-resource projects.',
  keywords: 'Mining GIS mapping, drone survey mining, LiDAR point cloud, mine feature extraction, stockpile volumetric analysis, terrain models DEM DTM DSM, contour mapping, mine haul roads GIS, CAD to GIS mining',
  openGraph: {
    title: 'GIS, Drone & LiDAR Services for Mining Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, terrain models, mine feature extraction, contour mapping and volumetric analysis for mining and natural-resource projects.',
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS, Drone & LiDAR Services for Mining Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, terrain models, mine feature extraction, contour mapping and volumetric analysis for mining and natural-resource projects.',
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/industry/mining',
  },
};

const miningProjects = [
  {
    number: '01',
    title: 'Mine Topography & Terrain',
    icon: Mountain,
    ctaText: 'Discuss Mine Terrain Mapping',
    items: [
      'Mine topographic mapping',
      'Drone survey processing',
      'LiDAR processing',
      'Point-cloud preparation',
      'DEM (Digital Elevation Model)',
      'DTM (Digital Terrain Model)',
      'DSM (Digital Surface Model)',
      'Contours & Spot elevations',
      'Slope information & Hillshade',
      'Terrain profiles & Cross-sections',
      'Surface models preparation',
    ],
  },
  {
    number: '02',
    title: 'Mine Feature & Infrastructure Mapping',
    icon: Pickaxe,
    ctaText: 'Explore Mine Feature Mapping',
    items: [
      'Mine boundaries & Excavation areas',
      'Haul roads & Internal road networks',
      'Buildings & Industrial structures',
      'Conveyors & Railway features',
      'Utilities & Power connections',
      'Water bodies, Sumps & Drainage',
      'Stockpile areas & Pit limits',
      'Project-specific asset mapping',
    ],
    note: 'The exact feature catalogue is agreed before large-scale production.',
  },
  {
    number: '03',
    title: 'Stockpile & Volumetric Analysis',
    icon: BarChart3,
    ctaText: 'Discuss Volumetric Analysis',
    items: [
      'Stockpile volume calculations',
      'Excavation pit volume analysis',
      'Surface-to-surface comparison',
      'Cut-and-fill assessment',
      'Elevation difference mapping',
      'Period-to-period surface monitoring',
    ],
    note: 'Calculation methodology and reference surfaces are agreed according to project requirements.',
  },
  {
    number: '04',
    title: 'Haul Roads, Access & Mine Operations Mapping',
    icon: Truck,
    ctaText: 'Discuss Mine Infrastructure Mapping',
    items: [
      'Haul-road centreline & Road edges',
      'Junctions & Access roads mapping',
      'Road widths & Gradient analysis',
      'Railway connections & Conveyors',
      'Operational structures & Crossings',
      'Drainage crossings & Culverts',
    ],
  },
  {
    number: '05',
    title: 'Land, Water & Environmental Base Mapping',
    icon: Trees,
    ctaText: 'Explore Land & Environmental Mapping',
    items: [
      'Land-use / Land-cover (LULC) mapping',
      'Agricultural & Vegetation areas',
      'Water bodies, Sumps & Drainage channels',
      'Built-up areas & Surrounding settlements',
      'Project boundary verification',
      'Environmental change mapping over time',
    ],
  },
];

const coreServices = [
  {
    number: '01',
    title: 'Drone Survey & Aerial Mapping',
    desc: 'Drone imagery supports mine-site mapping, terrain generation, visual documentation and feature extraction where aerial data is appropriate.',
    outputs: ['Orthophoto', 'Orthomosaic', 'Point Cloud', 'DSM', 'Terrain', 'Contours', 'Mine Features', 'CAD Mapping'],
    ctaText: 'Explore Drone Survey Services',
  },
  {
    number: '02',
    title: 'LiDAR & Point-Cloud Processing',
    desc: 'LiDAR and point-cloud datasets provide detailed three-dimensional information for mine terrain and feature mapping.',
    outputs: ['LAS/LAZ Review', 'Noise Identification', 'Classification', 'Ground Separation', 'DEM / DTM', '2D/3D Feature Extraction'],
    ctaText: 'Explore LiDAR & Point-Cloud Services',
  },
  {
    number: '03',
    title: 'DEM, DTM, DSM & Contour Mapping',
    desc: 'Different elevation products serve different mine engineering and planning needs.',
    outputs: ['DEM (Elevation)', 'DSM (Surface)', 'DTM (Bare Ground)', 'Contours', 'Hillshade & Slope', 'Profiles & Cross-Sections'],
    ctaText: 'Discuss a Terrain Requirement',
  },
  {
    number: '04',
    title: 'Mine GIS & Feature Extraction',
    desc: 'Convert imagery and point clouds into structured GIS datasets according to an agreed feature catalogue.',
    outputs: ['SHP', 'GeoPackage', 'Geodatabase', 'DWG', 'DXF'],
    ctaText: 'Explore GIS Mapping Services',
  },
  {
    number: '05',
    title: 'Volumetric & Surface Analysis',
    desc: 'Terrain and point-cloud information support accurate stockpile and pit volume calculations.',
    outputs: ['Stockpile Volumes', 'Surface Comparison', 'Cut & Fill Assessment', 'Excavation Analysis', 'Periodic Monitoring'],
    ctaText: 'Discuss a Volume Calculation',
  },
  {
    number: '06',
    title: 'CAD & GIS Integration',
    desc: 'Bridge the gap between GIS, CAD, and survey data formats for seamless engineering workflows.',
    outputs: ['CAD-to-GIS', 'GIS-to-CAD', 'Layer Restructuring', 'Geometry Cleaning', 'Attribute Prep', 'Database Setup'],
    ctaText: 'Discuss CAD/GIS Conversion',
  },
];

const checklistItems = [
  'Project or mine location',
  'Mine / project boundary (KML, SHP, CAD)',
  'Approximate area (sq. km or hectares)',
  'Available source data (Drone, LiDAR, Survey, Imagery)',
  'Coordinate reference system (CRS / Projection)',
  'Required feature catalogue',
  'Required terrain products (DEM, DTM, DSM)',
  'Required contour interval',
  'Required level of detail & accuracy',
  'Required volumetric or spatial analysis',
  'GIS / CAD output formats (SHP, DWG, DXF, GDB)',
  'Attribute structure & naming rules',
  'Sample output or technical specification',
  'Project timeline and review milestones',
];

const qaQcChecks = [
  { title: 'Coordinate Reference', desc: 'CRS, projection, units, and alignment with reference control points.' },
  { title: 'Geometry Rules', desc: 'No gaps, overlaps, invalid geometries, duplicate features, or unclosed polygons.' },
  { title: 'Linear Features', desc: 'Network connectivity, dangles, overshoots, undershoots, and snapping checks.' },
  { title: 'Attribute Verification', desc: 'Feature codes, mandatory fields, non-null values, correct layer naming and consistency.' },
  { title: 'Terrain Data Integrity', desc: 'Surface completeness, NoData checks, spike/depression filtering, and contour continuity.' },
  { title: 'Coverage Completeness', desc: 'Full coverage within project boundaries, layer completeness, and missing feature checks.' },
  { title: 'Delivery Package', desc: 'Standardised file/layer names, directory structures, formats, and verified delivery packages.' },
];

const faqs = [
  {
    q: 'What GIS services does Techmapperz provide for mining projects?',
    a: 'Techmapperz supports mine feature extraction, terrain mapping, haul-road mapping, asset mapping, land-use mapping, GIS database preparation, CAD/GIS conversion and other project-specific spatial-data requirements.',
  },
  {
    q: 'Can you process drone imagery captured by another company?',
    a: 'Yes. Client-supplied imagery can be reviewed for photogrammetric processing, terrain products and mapping. The workflow depends on image quality, overlap, positioning information, available survey control and required outputs.',
  },
  {
    q: 'Can you process mining LiDAR data?',
    a: 'Yes. LAS or LAZ datasets can be reviewed for point-cloud processing, classification, ground extraction, terrain preparation, contours and feature extraction according to the project scope.',
  },
  {
    q: 'Can you generate DEM, DTM and DSM for a mine site?',
    a: 'Yes, where suitable source data is available. The required elevation product should be defined according to the project purpose and available data.',
  },
  {
    q: 'Can Techmapperz generate contour maps?',
    a: 'Yes. Contours can be prepared from suitable terrain or elevation data. The interval should be defined according to the terrain, source-data quality and project requirement.',
  },
  {
    q: 'Can you calculate mining stockpile volumes?',
    a: 'Yes, where suitable surfaces or point-cloud information are available. The calculation methodology and reference surfaces should be agreed before the volume analysis is completed.',
  },
  {
    q: 'Can you perform cut-and-fill calculations?',
    a: 'Yes. Surface comparison and cut-and-fill analysis can be performed where suitable before-and-after or reference surfaces are available.',
  },
  {
    q: 'Can you map haul roads and mine infrastructure?',
    a: 'Yes. Mine feature mapping can include haul roads, roads, buildings, industrial areas, conveyors, railway features, water bodies, sumps and other required feature classes.',
  },
  {
    q: 'Can Techmapperz digitise a large mine area?',
    a: 'Yes. Large areas can be divided into planned production units with agreed feature specifications, samples, QA/QC procedures and delivery stages.',
  },
  {
    q: 'Can you prepare both GIS and CAD outputs?',
    a: 'Yes. Depending on the project, final mapping can be organised for GIS as well as DWG/DXF-based CAD environments.',
  },
  {
    q: 'Can you convert existing mine CAD data into GIS?',
    a: 'Yes. CAD layers can be reviewed, cleaned and converted into structured GIS datasets according to the required feature and attribute structure.',
  },
  {
    q: 'Can you create a Web GIS for mine data?',
    a: 'Yes. A Web GIS or dashboard can be scoped where teams require browser-based access to selected mine layers and project information.',
  },
  {
    q: 'Can Techmapperz work as a subcontractor?',
    a: 'Yes. Mining consultants, contractors, drone companies, survey organisations and other project partners can engage Techmapperz for defined GIS, processing or mapping scopes.',
  },
  {
    q: 'What information should we provide for a quotation?',
    a: 'Share the mine location, project boundary or area, available source data, required feature classes, terrain outputs, analysis requirements, coordinate system, GIS/CAD formats, technical specification and timeline.',
  },
  {
    q: 'Can Techmapperz guarantee a specific positional accuracy?',
    a: 'Accuracy should not be promised before reviewing the original survey methodology, control information, coordinate reference system, source data and required application. Where accuracy is important, the project specification should be reviewed during the technical assessment.',
  },
];

const capabilityStrip = [
  { Icon: Layers, title: 'Drone Survey', sub: '& Processing' },
  { Icon: Pickaxe, title: 'Mine GIS', sub: '& Feature Extraction' },
  { Icon: FileDigit, title: 'LiDAR', sub: '& Point Clouds' },
  { Icon: Mountain, title: 'DEM / DTM', sub: '& Contours' },
  { Icon: BarChart3, title: 'Volumetrics', sub: '& Stockpile Analysis' },
  { Icon: Globe, title: 'CAD / GIS', sub: '& Web GIS' },
];

const whyChooseUs = [
  { title: 'GIS & Drone Understanding', desc: 'Drone imagery, LiDAR, terrain information and GIS production are reviewed as connected parts of the project workflow.' },
  { title: 'Large-Area Mapping Experience', desc: 'Large feature-extraction assignments are organized into planned production units, samples, review stages and consistent outputs.' },
  { title: 'Multiple Source-Data Types', desc: 'Projects can begin with imagery, point clouds, GIS data, survey information, CAD drawings and client records.' },
  { title: 'Detailed Feature Extraction', desc: 'Mine infrastructure, transport, water, land and operational features are structured according to an agreed feature catalogue.' },
  { title: 'GIS & CAD Integration', desc: 'Outputs are prepared for both geospatial GIS and engineering CAD production environments.' },
  { title: 'Project-Specific QA/QC', desc: 'Quality checks cover geometry, attributes, projection, completeness and delivery structure according to the project specification.' },
  { title: 'Defined Review Stages', desc: 'Samples and staged review packages help align feature interpretation before final delivery.' },
  { title: 'Processing Partnership', desc: 'Mining consultants, survey companies, drone providers and project contractors can engage Techmapperz for defined scopes.' },
];

export default function MiningPage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-44 sm:pb-40"
        style={{ backgroundImage: 'url("/gis_images/industry_mining.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#6ac045]">Mining &amp; Natural Resources</span>
          </nav>

          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">
            MINING &amp; NATURAL RESOURCES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial Services for Mining &amp; Natural Resources Projects
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            GIS mapping, drone survey, LiDAR, point-cloud processing, terrain models, mine feature extraction, contour mapping and volumetric analysis for mining and natural-resource projects.
          </p>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {['Drone Survey', 'Mine GIS', 'LiDAR', 'Point Cloud', 'DEM/DTM', 'Contours', 'Volumetrics', 'CAD/GIS'].map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide">
                {cap}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-3 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-primary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg">
                Discuss Your Mining Project
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-secondary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                Share Your Scope of Work
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Capability Strip */}
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

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div className="lg:w-1/2">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                INTRODUCTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Clear Understanding of Terrain, Features &amp; Stockpiles for Mining Operations
              </h2>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Mining projects depend on a clear understanding of terrain, mine features, haul roads, stockpiles, water bodies, infrastructure and surrounding land conditions.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Techmapperz supports mining companies, mine consultants, contractors, survey organisations and project teams with GIS mapping, drone survey and processing, LiDAR, point-cloud processing, terrain modelling, feature extraction and GIS/CAD data preparation.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                The workflow is defined around the mine area, available survey information, source-data quality, terrain conditions, required features and final project deliverables rather than applying the same mapping approach to every site.
              </p>
              <Link href="/contact">
                <button id="intro-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-[14px] hover:bg-[#1656b8] transition-all duration-300">
                  Share Your Mining Requirement <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right: 4-step cards */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { Icon: MapPin, step: '01', title: 'Site Assessment', desc: 'Review mine boundaries, terrain constraints, drone/LiDAR inputs, and CRS requirements.' },
                { Icon: Database, step: '02', title: 'Feature Schema', desc: 'Agree on mine feature catalogue, layer classifications, and attribute rules.' },
                { Icon: Settings, step: '03', title: 'Spatial Production', desc: 'Execute precise 2D/3D feature extraction, terrain modeling, and volume calculations.' },
                { Icon: CheckCircle, step: '04', title: 'QA & Final Delivery', desc: 'Apply rigorous quality checks and deliver GIS geodatabases or CAD drawings.' },
              ].map(({ Icon, step, title, desc }) => (
                <div key={step} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f0f8ea] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#6ac045]" />
                    </div>
                    <span className="text-[#6ac045] text-xs font-bold tracking-widest">{step}</span>
                  </div>
                  <h4 className="font-bold text-[#0c2e60] text-[15px] leading-snug">{title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MINING REQUIREMENTS WE SUPPORT */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              PROJECT ENVIRONMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Geospatial Support Across Different Mine-Site Requirements
            </h2>
          </div>

          <div className="flex flex-col">
            {miningProjects.map((project, idx) => {
              const Icon = project.icon;
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={project.number}
                  id={`project-${project.number}`}
                  className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} items-stretch border-b border-gray-100 last:border-b-0`}
                >
                  {/* Number / icon panel */}
                  <div className={`lg:w-[340px] xl:w-[400px] shrink-0 flex items-center justify-center py-12 px-10 ${isEven ? 'bg-[#0c2e60]' : 'bg-[#0a1930]'}`}>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-9 h-9 text-[#6ac045]" />
                      </div>
                      <span className="block text-[#6ac045] text-5xl font-black leading-none mb-3">{project.number}</span>
                      <h3 className="text-white text-xl font-bold leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 py-12 px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                      {project.items.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 py-1.5">
                          <CheckCircle className="w-4 h-4 text-[#6ac045] mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {project.note && (
                      <div className="mb-6 text-xs font-semibold text-[#0c2e60] p-3 rounded-lg bg-[#f0f8ea] border border-[#6ac045]/30">
                        {project.note}
                      </div>
                    )}

                    <div>
                      <Link href="/contact">
                        <button
                          id={`project-cta-${project.number}`}
                          className="inline-flex items-center gap-2 py-2.5 px-7 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300"
                        >
                          {project.ctaText} <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE MINING GEOSPATIAL SERVICES */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              WHAT WE CAN SUPPORT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              From Aerial and Survey Data to Mine-Ready GIS &amp; CAD Outputs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div key={service.number} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-[#6ac045] text-xs font-bold tracking-widest uppercase block mb-2">{service.number} Service</span>
                  <h3 className="text-xl font-bold text-[#0c2e60] mb-3 leading-snug">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.outputs.map((out) => (
                      <span key={out} className="px-2.5 py-1 rounded-md bg-[#f8fafc] border border-gray-200 text-gray-700 text-xs font-medium">
                        {out}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <button id={`service-cta-${service.number}`} className="w-full py-2.5 px-4 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-xs hover:bg-[#0c2e60] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5">
                    {service.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT WE NEED TO REVIEW THE PROJECT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="bg-[#0a1930] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                BEFORE WE DEFINE THE WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                A Clear Requirement Helps Avoid Rework During Production
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                For an initial review or quotation, share as much of the following project details as available. If some information is not yet defined, it can be clarified during our technical assessment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {checklistItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6ac045] mt-1 shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button id="review-cta" className="py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Send Your Scope of Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: QA/QC FOR MINING DATA */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              PROJECT-SPECIFIC QUALITY CONTROL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Quality Checks Should Follow the Mining Specification
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {qaQcChecks.map((check, idx) => (
              <div key={check.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#f0f8ea] text-[#6ac045] font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-[#0c2e60] text-base mb-2">{check.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{check.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <button id="qa-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                Share Your Mining Data Specification <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: RELEVANT PROJECT EXPERIENCE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              RELEVANT PROJECT EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Large-Area Mining Mapping in Practice
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden border">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative lg:w-[440px] xl:w-[500px] shrink-0 min-h-[300px] lg:min-h-0">
                <Image
                  src="/gis_images/industry_mining.png"
                  alt="Mining Mapping Assignment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ac045] text-white text-[11px] font-bold uppercase tracking-wider">
                    <Pickaxe className="w-3 h-3" /> Mine Mapping Case Study
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-10 xl:p-12">
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3 leading-tight">
                  556.67 sq. km Mining Feature Extraction &amp; CAD Mapping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Techmapperz completed a large-area mining mapping assignment covering approximately 556.67 sq. km, involving detailed 2D feature extraction and CAD mapping from high-resolution source imagery.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { value: '556.67 sq. km', label: 'Mapped Area' },
                    { value: '2D Feature Extraction', label: 'Detailed Spatial Production' },
                    { value: 'GIS + CAD', label: 'Delivery Format' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-[#f8fafc] rounded-xl p-4 border border-gray-100">
                      <div className="text-[#0c2e60] text-xl font-black mb-1">{value}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Haul Roads', 'Internal Roads', 'Agricultural Areas', 'Built-Up Areas', 'Water Bodies', 'Sumps', 'Railways', 'Conveyors', 'Infrastructure'].map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-full bg-[#f0f8ea] border border-[#6ac045]/30 text-[#0c2e60] text-[11px] font-semibold">
                      {f}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-500 italic mb-6">
                  "This project demonstrates Techmapperz's ability to manage large-area geospatial production where consistent feature interpretation, structured layers and review processes are important across a substantial project extent."
                </p>

                <Link href="/contact">
                  <button id="project-experience-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#6ac045] text-white font-semibold text-sm hover:bg-[#5aad38] transition-all duration-300">
                    View Mining Mapping Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: WEB & MOBILE GIS FOR MINING */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              FROM MINE GIS TO DIGITAL ACCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              When Mining Data Needs to Be Accessible Beyond Desktop GIS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-4">Mine Web GIS</h3>
                <ul className="space-y-2 mb-6">
                  {['Interactive layer viewing', 'Search & locate assets', 'Feature identification', 'Asset information lookup', 'Map filtering & project layers'].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#6ac045] shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-4">Operational Dashboard</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Combine spatial maps with project-specific status, operational progress, stockpile volume charts, and reporting analytics for executive decision making.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-4">Mobile Field GIS</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Enable field teams to collect location data, ground observations, inspection photographs, and asset updates directly in the field.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <button id="webgis-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-sm hover:bg-[#1656b8] transition-all duration-300">
                Explore Web &amp; Mobile GIS <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 13: WHY TECHMAPPERZ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Mining Geospatial Production Focused on Usable Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, idx) => (
              <div key={w.title} className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#6ac045] font-black text-sm block mb-2">0{idx + 1}</span>
                  <h3 className="font-bold text-[#0c2e60] text-base mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left sticky label */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Questions Mining Teams Ask Before Starting a Geospatial Project
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Have specific technical questions about source formats, elevation models, or volume calculations? Contact our team.
              </p>
              <Link href="/contact">
                <button id="faq-cta" className="inline-flex items-center gap-2 py-3 px-7 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right FAQs */}
            <div className="lg:w-2/3">
              {faqs.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="bg-[#0a1930] py-16 md:py-24 relative overflow-hidden" id="contact">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <MapPin className="w-[400px] h-[400px] text-[#6ac045]" strokeWidth={0.4} />
        </div>
        <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none">
          <Map className="w-[300px] h-[300px] text-white" strokeWidth={0.4} />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              START WITH THE MINE DATA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mb-5">
              Have a Mining Survey, Mapping or Spatial Data Requirement?
            </h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
              Share the mine boundary, available drone imagery or point cloud, survey information, required features, terrain products, expected analysis, GIS/CAD formats and timeline.
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
              Whether you need a complete geospatial workflow or only a defined processing and mapping scope, Techmapperz can review the available inputs and recommend a practical production approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <button id="final-cta-primary" className="whitespace-nowrap py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Mining Project
                </button>
              </Link>
              <Link href="/contact">
                <button id="final-cta-secondary" className="whitespace-nowrap py-3 px-9 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300">
                  Send Your Scope of Work
                </button>
              </Link>
            </div>

            {/* Supporting text pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Drone Survey', 'Mine GIS', 'LiDAR', 'Point Cloud', 'DEM/DTM', 'Contours', 'Volumetrics', 'CAD/GIS'].map((pill) => (
                <span key={pill} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs border border-white/15">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              {[
                { Icon: Activity, title: 'Mining Focused', sub: 'Geospatial Services' },
                { Icon: Database, title: 'Drone, LiDAR & GIS', sub: 'Data Processing' },
                { Icon: Map, title: 'Mine GIS & CAD', sub: 'Deliverables' },
                { Icon: Briefcase, title: 'Experienced Technical', sub: 'Team' },
                { Icon: ShieldCheck, title: 'Clear Communication', sub: '& Quality Assurance' },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="w-6 h-6 text-[#6ac045] mt-1" />
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">{title}</h4>
                    <p className="text-gray-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


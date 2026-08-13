import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Database, Settings, CheckCircle, ArrowRight,
  ShieldCheck, MapPin, Activity, Briefcase, Pipette, Droplet,
  Zap, Sun, Factory, Layers, FileDigit, Ruler, Globe
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from '@/app/industry/FaqItem';

export const metadata = {
  title: 'Utility GIS Mapping & Drone Survey Services | Techmapperz',
  description: 'GIS mapping, drone survey, pipeline mapping, utility asset mapping, LiDAR, terrain processing and Web GIS services for water, gas, power, renewable energy and industrial utility projects.',
  keywords: 'Utility GIS mapping, pipeline mapping, drone survey utilities, utility asset mapping, LiDAR point cloud, terrain processing, Web GIS water gas power renewable energy, CAD to GIS utilities',
  openGraph: {
    title: 'Utility GIS Mapping & Drone Survey Services | Techmapperz',
    description: 'GIS mapping, drone survey, pipeline mapping, utility asset mapping, LiDAR, terrain processing and Web GIS services for water, gas, power, renewable energy and industrial utility projects.',
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utility GIS Mapping & Drone Survey Services | Techmapperz',
    description: 'GIS mapping, drone survey, pipeline mapping, utility asset mapping, LiDAR, terrain processing and Web GIS services for water, gas, power, renewable energy and industrial utility projects.',
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/industry/utilities',
  },
};

const utilityProjects = [
  {
    number: '01',
    title: 'Oil, Gas & Pipeline Infrastructure',
    icon: Pipette,
    ctaText: 'Explore Pipeline GIS Mapping',
    items: [
      'Pipeline alignment mapping',
      'Corridor mapping',
      'Associated asset mapping',
      'Valve and station locations',
      'Road and railway crossings',
      'Water-body crossings',
      'Drainage',
      'Buildings and structures',
      'Access roads',
      'Land-use information',
      'Utility crossings',
      'Right-of-way information where defined by the project',
      'Asset attribution',
      'GIS database preparation',
      'CAD/GIS conversion',
    ],
  },
  {
    number: '02',
    title: 'Water, Wastewater & Drainage Networks',
    icon: Droplet,
    ctaText: 'Explore Water & Utility GIS',
    items: [
      'Water-distribution networks',
      'Transmission mains',
      'Sewer networks',
      'Drainage networks',
      'Chambers, Valves & Manholes',
      'Pumps and associated facilities',
      'Storage or treatment facilities',
      'Network attributes & records',
      'Base mapping & database prep',
    ],
    digitalApps: [
      'Asset Web GIS',
      'Field verification applications',
      'Inspection workflows',
      'Map-based reporting',
    ],
  },
  {
    number: '03',
    title: 'Power Transmission & Distribution',
    icon: Zap,
    ctaText: 'Discuss a Power Infrastructure Project',
    items: [
      'Transmission corridors',
      'Tower or pole locations',
      'Electrical infrastructure',
      'Access routes',
      'Road and railway crossings',
      'Water bodies mapping',
      'Terrain & Contours generation',
      'Buildings and structures',
      'Vegetation or land-cover information',
      'Project-specific assets',
      'GIS database preparation',
      'CAD/GIS integration',
    ],
  },
  {
    number: '04',
    title: 'Renewable Energy Projects',
    icon: Sun,
    ctaText: 'Discuss a Renewable Energy Mapping Project',
    items: [
      'Site topographic mapping',
      'Existing-condition mapping',
      'Terrain models (DEM / DTM / DSM)',
      'Contour generation',
      'Access roads mapping',
      'Drainage & land-use information',
      'Project boundaries & existing infrastructure',
      'Construction-progress mapping',
      'Asset GIS preparation',
    ],
    environments: 'Suitable project environments: Solar • Wind • Renewable-energy sites • Associated transmission infrastructure',
  },
  {
    number: '05',
    title: 'Industrial Utility & Facility Networks',
    icon: Factory,
    ctaText: 'Discuss Industrial Utility Mapping',
    items: [
      'Internal pipeline networks',
      'Water infrastructure & drainage',
      'Electrical assets & utility structures',
      'Roads, buildings & storage facilities',
      'Asset registers integration',
      'Existing CAD information cleanup',
      'Site imagery & inspection records',
    ],
    outputs: 'Possible outputs: GIS Database • CAD Drawings • Asset Maps • Web GIS',
  },
];

const faqs = [
  {
    q: 'What utility networks and energy projects can Techmapperz support?',
    a: 'Techmapperz supports oil, gas, water, wastewater, drainage, electrical power transmission/distribution, renewable energy (solar & wind), and industrial facility utility networks.',
  },
  {
    q: 'Can you digitise legacy paper drawings or CAD files into a GIS database?',
    a: 'Yes. We convert paper maps, scanned drawings, CAD files (DWG/DXF), and survey records into structured GIS databases with defined feature schemas and attributes.',
  },
  {
    q: 'How do you handle pipeline corridor mapping?',
    a: 'We combine drone survey imagery, LiDAR point clouds, and field survey data to map pipeline alignments, valve stations, crossings, land cover, and associated infrastructure.',
  },
  {
    q: 'Do you provide Web GIS for asset management?',
    a: 'Yes. We develop browser-based Web GIS platforms, interactive map dashboards, and mobile field collection applications for real-time utility asset tracking and inspection.',
  },
  {
    q: 'Can you process LiDAR data for power line corridor analysis?',
    a: 'Yes. We clean, classify, and process LiDAR point clouds to map transmission towers, conductors, vegetation clearance, terrain profiles, and access routes.',
  },
  {
    q: 'What information should we provide for a utility project quotation?',
    a: 'Please share your project boundary or corridor length, current available data (CAD, imagery, survey coordinates, asset registers), required feature attributes, coordinate system, and timeline.',
  },
];

const capabilityStrip = [
  { Icon: Database, title: 'Utility GIS', sub: '& Network Mapping' },
  { Icon: Pipette, title: 'Pipeline Mapping', sub: '& Alignments' },
  { Icon: Layers, title: 'Drone Survey', sub: '& Processing' },
  { Icon: FileDigit, title: 'LiDAR', sub: '& Point Clouds' },
  { Icon: Ruler, title: 'Asset Mapping', sub: '& Databases' },
  { Icon: Globe, title: 'CAD/GIS & Web GIS', sub: 'Applications' },
];

export default function UtilitiesPage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-44 sm:pb-40"
        style={{ backgroundImage: 'url("/gis_images/industry_utilities.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#6ac045]">Utilities &amp; Energy</span>
          </nav>

          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">
            UTILITIES &amp; ENERGY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial Services for Utility &amp; Energy Infrastructure
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            GIS mapping, drone survey, pipeline mapping, utility asset mapping, LiDAR, terrain processing and Web GIS services for water, gas, power, renewable energy and industrial utility projects.
          </p>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {['Utility GIS', 'Pipeline Mapping', 'Drone Survey', 'LiDAR', 'Asset Mapping', 'CAD/GIS', 'Web GIS'].map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide">
                {cap}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-3 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-primary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg">
                Discuss Your Utility Project
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
                Network Context &amp; Asset Intelligence for Utility Infrastructure
              </h2>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Utility networks are more useful when teams can understand not only where an asset is located, but also what it represents, how it connects with the surrounding network and which project information is associated with it.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Techmapperz supports pipeline, water, drainage, power, renewable-energy and industrial utility projects with GIS mapping, drone survey and processing, LiDAR, corridor mapping, asset-data preparation and GIS/CAD services.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                We structure each assignment around the available source information, network or corridor requirement, asset structure, coordinate system and final use of the data.
              </p>
              <Link href="/contact">
                <button id="intro-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-[14px] hover:bg-[#1656b8] transition-all duration-300">
                  Share Your Utility Requirement <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right: 4-step cards */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { Icon: MapPin, step: '01', title: 'Assess Existing Records', desc: 'Review CAD drawings, survey logs, drone imagery, and existing asset registers.' },
                { Icon: Database, step: '02', title: 'Define Asset Schema', desc: 'Establish network connectivity rules, feature classes, and required attribute fields.' },
                { Icon: Settings, step: '03', title: 'Digitise & Structuring', desc: 'Execute precise geospatial mapping, LiDAR processing, and network topology creation.' },
                { Icon: CheckCircle, step: '04', title: 'Deliver & Integration', desc: 'Deliver production-ready GIS databases, CAD layers, or browser Web GIS platforms.' },
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

      {/* SECTION 3: UTILITY & ENERGY PROJECTS WE SUPPORT */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              PROJECT ENVIRONMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Geospatial Support Across Different Utility Networks
            </h2>
          </div>

          <div className="flex flex-col">
            {utilityProjects.map((project, idx) => {
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

                    {/* Extra details if available */}
                    {project.digitalApps && (
                      <div className="mb-6 p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0c2e60] block mb-2">Digital applications can include:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.digitalApps.map((app) => (
                            <span key={app} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium shadow-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.environments && (
                      <div className="mb-6 text-xs font-semibold text-[#0c2e60] p-3 rounded-lg bg-[#f0f8ea] border border-[#6ac045]/30">
                        {project.environments}
                      </div>
                    )}

                    {project.outputs && (
                      <div className="mb-6 text-xs font-semibold text-[#0c2e60] p-3 rounded-lg bg-[#f8fafc] border border-gray-200">
                        {project.outputs}
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

      {/* RELEVANT PROJECT EXPERIENCE HIGHLIGHT */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              RELEVANT PROJECT EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Gas Pipeline &amp; Utility Asset Mapping Project
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative lg:w-[420px] xl:w-[480px] shrink-0 min-h-[280px] lg:min-h-0">
                <Image
                  src="/gis_images/Gas Pipeline.webp"
                  alt="Gas Pipeline & Utility Asset Mapping"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ac045] text-white text-[11px] font-bold uppercase tracking-wider">
                    <Pipette className="w-3 h-3" /> Gas &amp; Pipeline GIS
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-10 xl:p-12">
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-2 leading-tight">
                  6,000 km Gas Pipeline Digitisation &amp; Asset Registry
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Published project assignment involving over 6,000 km of gas pipeline network digitisation, feature extraction, station mapping, attribute integration, and comprehensive digital asset registry preparation.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8">
                  {[
                    { value: '6,000+ km', label: 'Pipeline Network' },
                    { value: 'Multi-State', label: 'Corridor Extent' },
                    { value: 'GIS & Web GIS', label: 'Final Deliverable' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-[#f8fafc] rounded-xl p-4 border border-gray-100">
                      <div className="text-[#0c2e60] text-xl sm:text-2xl font-black mb-1">{value}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Deliverable chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Pipeline Alignment', 'Valves & Stations', 'Crossings Mapping', 'Asset Attributes', 'Geodatabase', 'Web GIS Interface'].map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full bg-[#f0f8ea] border border-[#6ac045]/30 text-[#0c2e60] text-[11px] font-semibold">
                      {d}
                    </span>
                  ))}
                </div>

                <Link href="/contact">
                  <button id="project-experience-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#6ac045] text-white font-semibold text-sm hover:bg-[#5aad38] transition-all duration-300">
                    Explore Utility Pipeline Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left sticky label */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Common Questions About Utility &amp; Energy Geospatial Services
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                If your question is not listed here, share your project requirements and our team will respond with complete guidance.
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

      {/* SECTION 16 — FINAL CTA */}
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
              START WITH YOUR NETWORK OR ASSET REQUIREMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mb-5">
              Need to Map, Structure or Update Utility Infrastructure Data?
            </h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
              Whether your project begins with CAD drawings, drone imagery, survey coordinates, an existing GIS database or an asset register, share the information you already have and the final output you require.
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
              Our team can review the source data, network structure, asset requirements, GIS/CAD formats and timeline before recommending an appropriate production workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <button id="final-cta-primary" className="whitespace-nowrap py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Utility Project
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
              {['Pipeline GIS', 'Utility Mapping', 'Asset Database', 'Drone Survey', 'LiDAR', 'Terrain', 'CAD/GIS', 'Web GIS'].map((pill) => (
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
                { Icon: Activity, title: 'Utility Network Focused', sub: 'Geospatial Services' },
                { Icon: Database, title: 'CAD, Drone & LiDAR', sub: 'Data Integration' },
                { Icon: Map, title: 'GIS & Asset Database', sub: 'Deliverables' },
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


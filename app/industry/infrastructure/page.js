import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Database, Settings, CheckCircle, ArrowRight,
  ShieldCheck, MapPin, Activity, Briefcase, Train, Truck,
  Building2, Building, Layers, FileDigit, Ruler
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from '@/app/industry/FaqItem';

export const metadata = {
  title: 'GIS, Drone & Digital Development Services for Infrastructure Projects | Techmapperz',
  description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models and asset mapping for infrastructure, engineering and corridor projects.',
  keywords: 'GIS infrastructure mapping, drone survey infrastructure, LiDAR point cloud, topographic mapping, terrain models, corridor mapping, asset GIS, CAD GIS conversion, infrastructure engineering geospatial',
  openGraph: {
    title: 'GIS, Drone & Digital Development Services for Infrastructure Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models and asset mapping for infrastructure, engineering and corridor projects.',
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS, Drone & Digital Development Services for Infrastructure Projects | Techmapperz',
    description: 'GIS mapping, drone survey, LiDAR, point-cloud processing, topographic mapping, terrain models and asset mapping for infrastructure, engineering and corridor projects.',
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/industry/infrastructure',
  },
};

const infrastructureProjects = [
  {
    number: '01',
    title: 'Railways & Linear Corridors',
    icon: Train,
    ctaText: 'Discuss a Railway & Corridor Project',
    items: [
      'Corridor topographic mapping',
      'Drone survey and processing',
      'LiDAR point-cloud processing',
      'Railway-feature extraction',
      'Track and alignment-related mapping',
      'Existing buildings and structures',
      'Road crossings',
      'Drainage',
      'Water bodies',
      'Utilities and crossings',
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
    ctaText: 'Discuss a Road Mapping Project',
    items: [
      'Road and highway mapping',
      'Existing-condition mapping',
      'Corridor feature extraction',
      'Topographic mapping',
      'Terrain modelling',
      'Contour generation',
      'Drainage mapping',
      'Buildings and structures',
      'Utility crossings',
      'Roadside assets',
      'Land-use information',
      'GIS/CAD preparation',
      'Construction or progress mapping where required',
    ],
  },
  {
    number: '03',
    title: 'Pipeline & Utility Corridors',
    icon: Layers,
    ctaText: 'Explore Pipeline & Utility Mapping',
    items: [
      'Corridor mapping',
      'Pipeline alignment',
      'Associated assets',
      'Utility crossings',
      'Buildings and structures',
      'Access roads',
      'Drainage',
      'Land features',
      'Asset attribution',
      'GIS database preparation',
      'CAD-to-GIS conversion',
      'Web GIS or asset-management interfaces where required',
    ],
  },
  {
    number: '04',
    title: 'Industrial & Site Development',
    icon: Building2,
    ctaText: 'Discuss an Industrial Mapping Requirement',
    items: [
      'Existing-condition mapping',
      'Site topography',
      'Buildings and structures',
      'Internal roads',
      'Utilities',
      'Drainage',
      'Land-use information',
      'Asset mapping',
      'Terrain and contours',
      'CAD/GIS integration',
      'Spatial database preparation',
      'Site-planning support',
    ],
  },
  {
    number: '05',
    title: 'Urban & Civil Infrastructure',
    icon: Building,
    ctaText: 'Discuss an Urban Infrastructure Project',
    items: [
      'Base mapping',
      'Building footprints',
      'Road networks',
      'Drainage',
      'Utility mapping',
      'Public assets',
      'Existing-condition surveys',
      'Land-use mapping',
      'Terrain products',
      'GIS databases',
      'CAD-ready mapping',
      'Web GIS where broader project access is required',
    ],
  },
];

const faqs = [
  {
    q: 'What infrastructure projects can Techmapperz support?',
    a: 'Techmapperz can support geospatial requirements for railway, road, corridor, pipeline, industrial, urban and other infrastructure assignments depending on the available source data and project scope.',
  },
  {
    q: 'What GIS services are useful for infrastructure projects?',
    a: 'Requirements may include topographic mapping, existing-condition mapping, feature extraction, utility mapping, asset mapping, drainage, terrain products, GIS databases and CAD/GIS conversion.',
  },
  {
    q: 'Can you process drone data captured by another survey company?',
    a: 'Yes. Client-supplied drone imagery can be reviewed for photogrammetry and mapping. The processing approach depends on image quality, overlap, positioning information, available survey control and required outputs.',
  },
  {
    q: 'Can you process LiDAR point-cloud files?',
    a: 'Yes. LAS or LAZ point-cloud processing can include review, cleaning, classification, ground extraction, feature extraction, terrain products, contours and GIS/CAD preparation depending on the scope.',
  },
  {
    q: 'Can you prepare DEM, DTM and contour data?',
    a: 'Yes, where the source data is suitable for the project requirement. The specific terrain product and contour interval should be defined according to the source data and intended application.',
  },
  {
    q: 'Can you provide topographic mapping for railway or road corridors?',
    a: 'Yes. Corridor assignments can include terrain, transportation features, drainage, structures, utilities, assets and other required feature classes according to the technical specification.',
  },
  {
    q: 'Can Techmapperz convert GIS data into AutoCAD?',
    a: 'Yes. GIS datasets can be structured for DWG or DXF delivery where CAD outputs form part of the project requirement.',
  },
  {
    q: 'Can AutoCAD drawings be converted into GIS?',
    a: 'Yes. CAD information can be reviewed, georeferenced or coordinate-referenced as appropriate, cleaned and organised into GIS datasets according to the required feature and attribute structure.',
  },
  {
    q: 'Can you create infrastructure asset databases?',
    a: 'Yes. Asset locations and associated attributes can be structured into GIS databases using available surveys, drawings, imagery and client records.',
  },
  {
    q: 'Can large infrastructure assignments be handled in stages?',
    a: 'Yes. Large-area and long-corridor projects can be divided into production units with agreed samples, specifications, review milestones and delivery stages.',
  },
  {
    q: 'What information should we provide for a quotation?',
    a: 'Share the project location, area or corridor length, scope of work, available source data, coordinate system, required features, terrain products, final formats, technical specification and timeline.',
  },
  {
    q: 'Do you provide Web GIS for infrastructure projects?',
    a: 'Yes. Where the project requires browser-based access, asset information, dashboards or field workflows, Web GIS or Mobile GIS development can be scoped separately.',
  },
];

const capabilityStrip = [
  { Icon: Layers, title: 'Drone Survey', sub: '& Processing' },
  { Icon: Map, title: 'GIS & CAD', sub: 'Mapping' },
  { Icon: FileDigit, title: 'LiDAR & Point', sub: 'Cloud Processing' },
  { Icon: Ruler, title: 'Terrain', sub: 'Models & Contours' },
  { Icon: Database, title: 'Asset GIS', sub: 'Databases' },
  { Icon: ShieldCheck, title: 'QA / QC', sub: 'Standards' },
];

export default function InfrastructurePage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-44 sm:pb-40"
        style={{ backgroundImage: 'url("/gis_images/industry_infrastructure.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#6ac045]">Infrastructure & Engineering</span>
          </nav>
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">INFRASTRUCTURE & ENGINEERING</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial &amp; IT Services for Infrastructure &amp; Engineering Projects
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            GIS mapping, drone survey, LiDAR, terrain models, corridor mapping and asset GIS for infrastructure consultants, engineering firms, EPC contractors and survey partners.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {['Drone Survey', 'GIS Mapping', 'LiDAR', 'Terrain Models', 'Corridor Mapping', 'Asset GIS', 'CAD/GIS'].map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide">{cap}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-3 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-primary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg">
                Discuss Your Infrastructure Project
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

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/2">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">INTRODUCTION</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Good Infrastructure Mapping Starts with the Question the Project Needs to Answer
              </h2>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Infrastructure projects depend on a clear understanding of terrain, existing features, utilities, assets and surrounding conditions before those details can support planning, design, construction or asset management.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Techmapperz supports infrastructure consultants, engineering firms, EPC contractors, project-management teams and survey partners with GIS mapping, drone survey and processing, LiDAR, point-cloud, terrain and GIS/CAD data services.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                We structure the workflow around the project area, available survey information, required level of detail, coordinate system, engineering use and final deliverables rather than treating every infrastructure assignment as the same mapping exercise.
              </p>
              <Link href="/contact">
                <button id="intro-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-[14px] hover:bg-[#1656b8] transition-all duration-300">
                  Share Your Project Requirement <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { Icon: MapPin, step: '01', title: 'Understand the Project', desc: 'Review terrain, available data, project scope and coordinate system requirements.' },
                { Icon: Database, step: '02', title: 'Define the Data Needed', desc: 'Identify required features, terrain products, accuracy level and delivery format.' },
                { Icon: Settings, step: '03', title: 'Plan the Workflow', desc: 'Structure drone, LiDAR or GIS processing around the engineering use case.' },
                { Icon: CheckCircle, step: '04', title: 'Deliver & Support', desc: 'Deliver GIS, CAD or terrain outputs with QA and clear production records.' },
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

      {/* PROJECT TYPES */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">INFRASTRUCTURE PROJECTS WE SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Geospatial Support Across Different Infrastructure Requirements
            </h2>
          </div>
          <div className="flex flex-col">
            {infrastructureProjects.map((project, idx) => {
              const Icon = project.icon;
              const isEven = idx % 2 === 1;
              return (
                <div key={project.number} id={`project-${project.number}`} className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} items-stretch border-b border-gray-100 last:border-b-0`}>
                  <div className={`lg:w-[340px] xl:w-[400px] shrink-0 flex items-center justify-center py-12 px-10 ${isEven ? 'bg-[#0c2e60]' : 'bg-[#0a1930]'}`}>
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
                      <button id={`project-cta-${project.number}`} className="inline-flex items-center gap-2 py-2.5 px-7 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
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

      {/* PROJECT EXPERIENCE */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">RELEVANT PROJECT EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">Infrastructure Work That Demonstrates the Workflow</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-[420px] xl:w-[480px] shrink-0 min-h-[280px] lg:min-h-0">
                <Image src="/gis_images/industry_transportation.png" alt="Railway corridor LiDAR mapping project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6ac045] text-white text-[11px] font-bold uppercase tracking-wider">
                    <Train className="w-3 h-3" /> Railway & Corridor Mapping
                  </span>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-10 xl:p-12">
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-2 leading-tight">173 km Drone LiDAR Topographic Mapping Assignment</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  A railway corridor assignment covering approximately 173 km with a 100 m survey width, integrating Drone LiDAR, DGPS control, point-cloud processing, terrain products, contours and GIS/CAD deliverables.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8">
                  {[
                    { value: '173 km', label: 'Project corridor' },
                    { value: '100 m', label: 'Survey width' },
                    { value: 'Drone LiDAR + DGPS', label: 'Acquisition workflow' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-[#f8fafc] rounded-xl p-4 border border-gray-100">
                      <div className="text-[#0c2e60] text-xl sm:text-2xl font-black mb-1">{value}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Point Cloud', 'DEM', 'DSM', 'Contours', 'Orthomosaic', 'Cross-Sections', 'GIS/CAD'].map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full bg-[#f0f8ea] border border-[#6ac045]/30 text-[#0c2e60] text-[11px] font-semibold">{d}</span>
                  ))}
                </div>
                <Link href="/contact">
                  <button id="project-experience-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#6ac045] text-white font-semibold text-sm hover:bg-[#5aad38] transition-all duration-300">
                    View Railway Mapping Project <ArrowRight className="w-4 h-4" />
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
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">Common Questions About Our Infrastructure Geospatial Services</h2>
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
      <section className="bg-[#0a1930] py-16 md:py-24 relative overflow-hidden" id="contact">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <MapPin className="w-[400px] h-[400px] text-[#6ac045]" strokeWidth={0.4} />
        </div>
        <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none">
          <Map className="w-[300px] h-[300px] text-white" strokeWidth={0.4} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">START WITH THE PROJECT</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mb-5">Planning an Infrastructure Survey, Mapping or Geospatial Data Requirement?</h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
              Share your project boundary or corridor, available survey or imagery data, technical specification, required features, coordinate system, deliverables and timeline.
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
              Whether you require complete geospatial support or a defined processing and mapping scope, our team can review the inputs and recommend a practical production workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button id="final-cta-primary" className="whitespace-nowrap py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Infrastructure Project
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
              {[
                { Icon: Activity, title: 'Infrastructure Focused', sub: 'Geospatial Services' },
                { Icon: Database, title: 'Drone, LiDAR', sub: '& GIS Sources' },
                { Icon: Map, title: 'GIS, CAD & Terrain', sub: 'Deliverables' },
                { Icon: Briefcase, title: 'Experienced Technical', sub: 'Team' },
                { Icon: ShieldCheck, title: 'Clear Communication', sub: '& QA Support' },
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

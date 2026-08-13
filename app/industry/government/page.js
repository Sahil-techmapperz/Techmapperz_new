import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Map, Database, Settings, CheckCircle, ArrowRight,
  ShieldCheck, MapPin, Activity, Briefcase, Layers, FileDigit,
  Ruler, Globe, Trees, Compass, Smartphone, Server, Layout, 
  BookOpen, Lock, FolderOpen
} from 'lucide-react';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import FaqItem from '@/app/industry/FaqItem';

export const metadata = {
  title: 'GIS & Land Mapping Services for Government Projects | Techmapperz',
  description: 'GIS mapping, cadastral digitisation, land-record mapping, parcel GIS, LULC, municipal GIS, public asset mapping and Web GIS services for government and land-administration projects.',
  keywords: 'GIS mapping, cadastral digitisation, land-record mapping, parcel GIS, LULC, municipal GIS, public asset mapping, Web GIS services, government GIS',
  openGraph: {
    title: 'GIS & Land Mapping Services for Government Projects | Techmapperz',
    description: 'GIS mapping, cadastral digitisation, land-record mapping, parcel GIS, LULC, municipal GIS, public asset mapping and Web GIS services for government and land-administration projects.',
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS & Land Mapping Services for Government Projects | Techmapperz',
    description: 'GIS mapping, cadastral digitisation, land-record mapping, parcel GIS, LULC, municipal GIS, public asset mapping and Web GIS services for government and land-administration projects.',
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/industry/government',
  },
};

const projectEnvironments = [
  {
    number: '01',
    title: 'Cadastral & Land Records',
    icon: Map,
    ctaText: 'Explore Cadastral & Land GIS',
    items: [
      'Cadastral map digitisation',
      'Parcel boundary mapping',
      'Plot digitisation',
      'Map georeferencing',
      'Plot-number attribution',
      'Village mapping',
      'Mouza or administrative mapping where specified',
      'Boundary-vector preparation',
      'Land-record data integration',
      'GIS database creation',
      'Map-sheet organisation',
      'Existing GIS updating',
    ],
  },
  {
    number: '02',
    title: 'Municipal & Urban GIS',
    icon: Layout,
    ctaText: 'Discuss a Municipal GIS Project',
    items: [
      'Building footprints',
      'Road networks',
      'Drainage',
      'Water bodies',
      'Utility information',
      'Public facilities',
      'Administrative areas',
      'Land-use information',
      'Property-related layers',
      'Public assets',
      'Base maps',
      'GIS databases',
      'Map production',
    ],
    note: 'Digital support can include: Web GIS • Project Dashboards • Mobile Field Applications',
  },
  {
    number: '03',
    title: 'Land Use, Planning & Development',
    icon: Trees,
    ctaText: 'Explore Land-Use Mapping',
    items: [
      'Residential areas',
      'Commercial areas',
      'Industrial land',
      'Agricultural land',
      'Built-up areas',
      'Rural settlements',
      'Roads',
      'Water bodies',
      'Vegetation',
      'Open land',
      'Public infrastructure',
      'Project-specific land classes',
    ],
    note: 'Additional support: Satellite-image interpretation • Change mapping • Thematic GIS • Spatial analysis • Planning databases',
  },
  {
    number: '04',
    title: 'Public Asset & Infrastructure GIS',
    icon: Briefcase,
    ctaText: 'Discuss Public Asset Mapping',
    items: [
      'Roads',
      'Buildings',
      'Public facilities',
      'Drainage structures',
      'Water infrastructure',
      'Street or transport assets',
      'Utility infrastructure',
      'Government properties',
      'Community facilities',
      'Other project-specific assets',
    ],
    note: 'GIS records can combine asset locations with agreed attribute information supplied through project records, surveys or field verification.',
  },
  {
    number: '05',
    title: 'Administrative, Regional & Development Mapping',
    icon: Globe,
    ctaText: 'Discuss a Regional Mapping Project',
    items: [
      'Administrative boundaries',
      'Land-use mapping',
      'Transport networks',
      'Settlement mapping',
      'Property or parcel information',
      'Infrastructure',
      'Water bodies',
      'Environmental features',
      'Spatial database preparation',
      'Thematic maps',
      'GIS analysis',
    ],
  },
];

const coreServices = [
  {
    number: '01',
    title: 'Cadastral & Parcel Mapping',
    desc: 'Available cadastral maps can be converted into digital parcel information according to the agreed project methodology.',
    outputs: ['Map-sheet review', 'Georeferencing', 'Parcel digitisation', 'Polygon creation', 'Plot numbering', 'Boundary cleaning', 'Attribute integration', 'Sheet-edge review', 'GIS database preparation'],
    note: 'Possible outputs: SHP • GeoPackage • Geodatabase • Project-Specific Parcel Database',
    ctaText: 'Explore Cadastral Mapping',
  },
  {
    number: '02',
    title: 'Georeferencing & Legacy Map Conversion',
    desc: 'Historical maps, scanned cadastral sheets and other non-digital records may need to be aligned with a geographic coordinate environment before they can support a GIS workflow.',
    outputs: ['Scanned-map review', 'Control-point identification', 'Georeferencing', 'Map rectification', 'Raster preparation', 'Digitisation', 'Coordinate-reference assignment', 'Integration with existing GIS layers'],
    ctaText: 'Discuss Map Georeferencing',
  },
  {
    number: '03',
    title: 'GIS Data Digitisation & Database Preparation',
    desc: 'Government projects often involve large quantities of point, line and polygon information. Techmapperz can digitise and organise spatial features according to an agreed specification.',
    outputs: ['Feature catalogue', 'Layer structure', 'Feature code', 'Attribute schema', 'Coordinate system', 'Naming convention', 'Topology requirement', 'Delivery format'],
    ctaText: 'Explore GIS Data Digitisation',
  },
  {
    number: '04',
    title: 'Land Use / Land Cover & Remote Sensing',
    desc: 'Satellite or aerial imagery can be interpreted to create land-use and land-cover information according to the classification scheme required by the project.',
    outputs: ['Built-up areas', 'Residential/Industrial land', 'Agricultural land', 'Vegetation', 'Water bodies', 'Open land', 'Transport infrastructure', 'Rural settlements'],
    note: 'Additional services: Image interpretation • Thematic mapping • Change detection • Multi-date comparison • Spatial statistics',
    ctaText: 'Explore LULC Mapping',
  },
  {
    number: '05',
    title: 'Public Asset & Infrastructure Mapping',
    desc: 'Available survey information, imagery, CAD data, GIS layers or field records can be used to create spatial asset datasets.',
    outputs: ['Asset-location mapping', 'Asset categorisation', 'Attribute integration', 'GIS database preparation', 'Existing-database updating', 'Map production', 'Data cleaning', 'CAD/GIS conversion'],
    ctaText: 'Discuss Asset GIS',
  },
  {
    number: '06',
    title: 'CAD, Raster & GIS Conversion',
    desc: 'Land and government projects often require information to move between multiple formats.',
    outputs: ['CAD to GIS', 'Raster to GIS', 'GIS to CAD', 'Feature separation', 'Geometry organisation', 'Vector datasets', 'Layer restructuring'],
    ctaText: 'Discuss Data Conversion',
  },
];

const faqs = [
  {
    q: 'What GIS services can Techmapperz provide for government projects?',
    a: 'Techmapperz can support cadastral digitisation, parcel mapping, georeferencing, GIS data production, LULC mapping, municipal GIS, public-asset mapping, database preparation, CAD/GIS conversion and Web or Mobile GIS requirements.',
  },
  {
    q: 'Can you digitise scanned cadastral maps?',
    a: 'Yes. Scanned cadastral maps can be reviewed, georeferenced and digitised according to the project’s coordinate, parcel, attribute and topology requirements.',
  },
  {
    q: 'Can you add plot numbers to digitised parcels?',
    a: 'Yes. Plot numbers and other project attributes supplied through approved records can be associated with parcel geometries according to the agreed database structure.',
  },
  {
    q: 'Does cadastral digitisation establish legal land ownership?',
    a: 'No. GIS digitisation organises available spatial and attribute information. Legal ownership, title and authoritative boundary status should follow the competent authority’s records, approved survey information and applicable project procedures.',
  },
  {
    q: 'Can you georeference old land maps?',
    a: 'Yes. Georeferencing can be undertaken where suitable reference or control information is available for the project.',
  },
  {
    q: 'Can you convert CAD land or infrastructure drawings into GIS?',
    a: 'Yes. DWG and DXF information can be reviewed and converted into GIS datasets according to the required coordinate system, feature structure and attributes.',
  },
  {
    q: 'Can you prepare land-use and land-cover maps?',
    a: 'Yes. LULC datasets can be prepared from suitable imagery according to the classification scheme and level of detail specified by the project.',
  },
  {
    q: 'Can you handle large-volume GIS digitisation?',
    a: 'Large projects can be divided into planned production units with approved samples, mapping rules, QA/QC stages, review milestones and phased deliveries.',
  },
  {
    q: 'Can Techmapperz prepare municipal GIS data?',
    a: 'Yes. Depending on the project, municipal GIS can include buildings, roads, drainage, water bodies, utilities, public facilities, assets, land use and other defined layers.',
  },
  {
    q: 'Can you create public asset GIS databases?',
    a: 'Yes. Asset locations and supplied attributes can be organised into spatial databases according to the project feature catalogue and data structure.',
  },
  {
    q: 'Can you work with existing GIS databases?',
    a: 'Yes. Existing GIS data can be reviewed for updating, cleaning, restructuring, conversion or integration with additional project information.',
  },
  {
    q: 'Can field data be integrated with GIS?',
    a: 'Yes. Where field observations, survey coordinates, photographs or verified attributes are supplied as part of the project, they can be integrated according to the defined workflow.',
  },
  {
    q: 'Can you develop a Web GIS or geoportal?',
    a: 'Yes. Where approved project information needs browser-based access, a Web GIS, dashboard or geoportal can be scoped separately.',
  },
  {
    q: 'Can you build a Mobile GIS application for field verification?',
    a: 'Yes. Mobile GIS workflows can be developed around locations, map layers, photographs, observations and project-specific field attributes.',
  },
  {
    q: 'Can Techmapperz work as a subcontractor for a government project?',
    a: 'Yes. Government contractors, consultants, survey organisations and other project partners can engage Techmapperz for defined GIS production, mapping, processing or application-development scopes.',
  },
  {
    q: 'What should we provide for a quotation?',
    a: 'Share the project location and area, source maps or data, coordinate system, feature and parcel requirements, attribute structure, topology rules, required formats, sample output, technical specification and project timeline.',
  },
];

const capabilityStrip = [
  { Icon: Map, title: 'Cadastral GIS', sub: '& Land Records' },
  { Icon: Layout, title: 'Municipal GIS', sub: '& Public Assets' },
  { Icon: MapPin, title: 'Parcel Mapping', sub: '& Boundaries' },
  { Icon: Trees, title: 'LULC', sub: '& Land Use' },
  { Icon: Globe, title: 'Web GIS', sub: '& Geoportals' },
];

export default function GovernmentPage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[88vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-44 sm:pb-40"
        style={{ backgroundImage: 'url("/gis_images/industry_government.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#6ac045]">Government &amp; Land Administration</span>
          </nav>

          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">
            GOVERNMENT &amp; LAND ADMINISTRATION
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">
            Geospatial Services for Government &amp; Land Administration Projects
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
            GIS mapping, cadastral digitisation, land-record mapping, parcel GIS, LULC, municipal GIS, public asset mapping and Web GIS services for government and land-administration projects.
          </p>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {['Cadastral GIS', 'Land Records', 'Parcel Mapping', 'LULC', 'Municipal GIS', 'Public Assets', 'Web GIS'].map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide">
                {cap}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-3 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button id="hero-cta-primary" className="whitespace-nowrap w-full sm:w-auto py-[13px] px-9 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg">
                Discuss Your Government GIS Project
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
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="lg:w-1/2">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                INTRODUCTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Organising Land Information into Structured Spatial Data
              </h2>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Government and land-related projects often begin with information spread across scanned maps, cadastral sheets, survey records, GIS layers, drawings, satellite imagery and tabular databases.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4">
                Techmapperz supports government contractors, planning consultants, land-administration projects, municipalities and project partners with cadastral digitisation, GIS mapping, land-use mapping, georeferencing, public-asset mapping, spatial database preparation and Web or Mobile GIS support.
              </p>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                Our role is to organise available spatial information around the project specification, coordinate reference, feature structure, attributes, review process and final use of the data.
              </p>
              <Link href="/contact">
                <button id="intro-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-[14px] hover:bg-[#1656b8] transition-all duration-300">
                  Discuss Your Government GIS Project <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right: Workflow Steps (instead of generic 4-step cards) */}
            <div className="lg:w-1/2">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0f8ea] rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-6">A Simple Land-Data Workflow</h3>
                
                <div className="space-y-6 relative">
                  {/* Line connector */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200 pointer-events-none"></div>
                  
                  {[
                    { step: '01', title: 'Source Records', icon: FolderOpen, desc: 'Scanned map • Cadastral sheet • Existing GIS • Survey record' },
                    { step: '02', title: 'Reference & Preparation', icon: Compass, desc: 'Map review • Georeferencing • Coordinate system' },
                    { step: '03', title: 'Digitisation', icon: MapPin, desc: 'Parcels • Boundaries • Features' },
                    { step: '04', title: 'Attributes', icon: Database, desc: 'Plot numbers • Codes • Supplied records' },
                    { step: '05', title: 'QA/QC', icon: ShieldCheck, desc: 'Geometry • Topology • Attributes • Completeness' },
                    { step: '06', title: 'Delivery', icon: CheckCircle, desc: 'GIS database • Maps • Web GIS • Project formats' }
                  ].map((s, i) => (
                    <div key={s.step} className="flex gap-4 relative bg-white">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#f0f8ea] border-2 border-white text-[#6ac045] flex items-center justify-center font-bold text-xs relative z-10 shadow-sm">
                        {s.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-[#0c2e60] text-sm mb-1">{s.title}</h4>
                        <p className="text-gray-500 text-xs">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT ENVIRONMENTS */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              PROJECT ENVIRONMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Geospatial Support for Different Public-Sector and Land Requirements
            </h2>
          </div>

          <div className="flex flex-col">
            {projectEnvironments.map((project, idx) => {
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

      {/* SECTION 4: CORE GEOSPATIAL SERVICES */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              WHAT WE CAN SUPPORT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              From Legacy Maps and Imagery to Structured GIS Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div key={service.number} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-[#6ac045] text-xs font-bold tracking-widest uppercase block mb-2">{service.number} Service</span>
                  <h3 className="text-xl font-bold text-[#0c2e60] mb-3 leading-snug">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.outputs.map((out) => (
                      <span key={out} className="px-2.5 py-1 rounded-md bg-[#f8fafc] border border-gray-200 text-gray-700 text-xs font-medium">
                        {out}
                      </span>
                    ))}
                  </div>

                  {service.note && (
                    <div className="mb-8 text-xs font-semibold text-gray-500 italic p-3 rounded-lg bg-gray-50 border border-gray-100">
                      {service.note}
                    </div>
                  )}
                </div>

                <div className={service.note ? '' : 'mt-8'}>
                  <Link href="/contact">
                    <button id={`service-cta-${service.number}`} className="w-full py-2.5 px-4 rounded-full border border-[#0c2e60] text-[#0c2e60] font-semibold text-xs hover:bg-[#0c2e60] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5">
                      {service.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST POSITIONING */}
      <section className="py-20 md:py-28 bg-[#0c2e60]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center text-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Lock className="w-12 h-12 text-[#6ac045] mb-6" />
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              SPATIAL DATA SUPPORTS THE RECORD — IT DOES NOT REPLACE THE AUTHORITY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              GIS Helps Organise Land Information. It Does Not Independently Establish Legal Ownership.
            </h2>
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-8 max-w-3xl">
              Techmapperz can digitise, georeference, structure and integrate land and parcel information according to the data and project specification supplied. However, GIS production itself should not be presented as independently determining legal ownership, legal title, final legal parcel boundary, land rights, mutation status, or dispute resolution.
            </p>
            <p className="text-white font-semibold text-[15px] md:text-lg leading-relaxed max-w-3xl border-t border-white/20 pt-8 mt-4">
              "Those matters should follow the competent authority’s records, approved surveys and applicable project procedures. Our role is to prepare the spatial data accurately according to the available inputs and agreed specification—not to reinterpret the legal status of the land."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: RELEVANT GEOSPATIAL EXPERIENCE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              RELEVANT GEOSPATIAL EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Project Experience That Relates to Land, Planning and Public-Sector GIS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mb-6">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3 leading-tight">
                  400 sq. km Urban &amp; Rural LULC Mapping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Techmapperz’s published portfolio describes an urban and rural land-use / land-cover mapping assignment covering approximately 400 sq. km with more than 15 mapped layers relating to habitation, infrastructure and land-use information.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-[#f8fafc] rounded-xl p-3 border border-gray-100">
                    <div className="text-[#0c2e60] text-lg font-black mb-1">400 sq. km</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider">Mapped area</div>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 border border-gray-100">
                    <div className="text-[#0c2e60] text-lg font-black mb-1">15+ Layers</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider">Land-use information</div>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 text-[#0c2e60] font-bold text-sm group-hover:text-[#6ac045] transition-colors">
                    View Land-Use Mapping Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c2e60] mb-3 leading-tight">
                  100 sq. km Riverfront GIS Mapping
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Techmapperz’s published portfolio describes a 100 sq. km GIS mapping assignment along both banks of the Hooghly River within the Kolkata Metropolitan Area, involving land use, properties, transport infrastructure and related spatial analysis.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-[#f8fafc] rounded-xl p-3 border border-gray-100">
                    <div className="text-[#0c2e60] text-lg font-black mb-1">100 sq. km</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider">Project area</div>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 border border-gray-100">
                    <div className="text-[#0c2e60] text-lg font-black mb-1">Riverfront GIS</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider">Planning-oriented</div>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 text-[#0c2e60] font-bold text-sm group-hover:text-[#6ac045] transition-colors">
                    View Riverfront Mapping Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: WEB & MOBILE GIS */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              FROM GIS DATABASE TO CONTROLLED DIGITAL ACCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight">
              Spatial Information Does Not Always Have to Remain on a Desktop GIS System
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Where the project requires broader access, approved GIS information can be connected to browser-based or mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2e60] mb-3">Government Web GIS</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Map viewing, layer control, search, feature identification, attribute viewing, project info and user-based access.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mx-auto mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2e60] mb-3">Land/Asset Dashboard</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Maps can be combined with selected parcel, asset, project or status information where required.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2e60] mb-3">Mobile Verification</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Location verification, feature updates, photographs, observations, attributes and status information in the field.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-[#f0f8ea] text-[#6ac045] flex items-center justify-center mx-auto mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2e60] mb-3">Geoportal</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Controlled browser-based access can be provided to selected project layers and related spatial information.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services/digital-applications">
              <button id="webgis-cta" className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-[#0c2e60] text-white font-semibold text-sm hover:bg-[#1656b8] transition-all duration-300">
                Explore Web &amp; Mobile GIS <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 16: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left sticky label */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Questions Government &amp; Land Teams Ask Before Starting a GIS Project
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Need details about source formats, CAD/GIS integration, or mapping deliverables? Contact our team.
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

      {/* SECTION 17: FINAL CTA */}
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
              START WITH THE RECORDS YOU ALREADY HAVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mb-5">
              Need to Convert Land, Cadastral or Government Records into Structured GIS Data?
            </h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
              Whether the project begins with scanned maps, survey information, existing GIS layers, satellite imagery, CAD drawings or tabular records, share the available inputs and the required final output.
            </p>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
              Techmapperz can review the data, mapping specification, coordinate requirements, feature and attribute structure, delivery formats and timeline before recommending an appropriate production workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <button id="final-cta-primary" className="whitespace-nowrap py-3 px-9 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                  Discuss Your Government GIS Project
                </button>
              </Link>
              <Link href="/contact">
                <button id="final-cta-secondary" className="whitespace-nowrap py-3 px-9 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 shadow-md">
                  Send Your Scope of Work
                </button>
              </Link>
            </div>
            
            <p className="text-gray-400 text-xs tracking-wider">
              Cadastral GIS • Parcel Mapping • Land Records • LULC • Municipal GIS • Public Assets • Web GIS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

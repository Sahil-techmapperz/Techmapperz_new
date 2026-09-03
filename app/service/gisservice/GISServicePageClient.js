"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Map, FileDigit, Layers, Zap, TreePine, LineChart, Monitor, Route, Mountain, Landmark, Building2 } from "lucide-react";

const gisServices = [
  {
    title: "GIS Data Digitisation & Database Creation",
    description: "Paper maps, scanned plans, imagery and existing records often contain useful information but are difficult to analyse or maintain until they are converted into structured GIS data. Techmapperz digitises spatial features and associated attributes according to the required feature catalogue, layer structure, coordinate system and project specification.",
    items: [
      "Map and feature digitisation",
      "Attribute data entry",
      "Feature coding and layer creation",
      "GIS database structuring",
      "Data cleaning and validation",
      "Legacy GIS data migration",
      "Existing dataset updating",
      "GIS database creation"
    ],
    cta: "Discuss Your Digitisation Requirement",
    link: "/service/gisservice/datadigitization",
    image: "/gis_images/GIS_Main_Page/GIS_Data_Digitization.webp",
    alt: "GIS data digitisation and database creation"
  },
  {
    title: "2D & 3D Feature Extraction",
    description: "We extract visible or interpretable geographic and infrastructure features from suitable drone imagery, satellite imagery, LiDAR point clouds and other geospatial sources. The feature catalogue is agreed before production so that roads, buildings, utilities, land features and other project objects are captured consistently.",
    items: [
      "Roads, carriageways and road edges",
      "Buildings and structures",
      "Railway and corridor features",
      "Drainage and water bodies",
      "Utility networks and assets",
      "Vegetation and land boundaries",
      "Mining and industrial features",
      "Project-specific feature classes"
    ],
    cta: "Discuss Your Feature Extraction Requirement",
    link: "/service/gisservice/gismapping",
    image: "/gis_images/GIS_Main_Page/GIS_Mapping.webp",
    alt: "2D and 3D feature extraction from aerial imagery"
  },
  {
    title: "Utility, Pipeline & Asset Mapping",
    description: "Techmapperz prepares and updates GIS databases for pipelines, utility networks and distributed infrastructure using available survey inputs, engineering drawings, imagery, asset records and existing spatial data. Network geometry, asset locations and attributes are organised according to the agreed data model so that engineering and operational teams can use the information for planning, review and asset management.",
    items: [
      "Gas and water pipeline mapping",
      "Drainage and sewer networks",
      "Electrical and telecom assets",
      "Road and railway assets",
      "Stations, facilities and associated assets",
      "Network digitisation and connectivity",
      "Asset attributes and inventory integration",
      "Existing GIS database cleaning and updating"
    ],
    cta: "Explore Utility & Asset Mapping",
    link: "/service/gisservice/gissurveying",
    image: "/gis_images/Gas Pipeline.webp",
    alt: "Utility and pipeline asset mapping in GIS"
  },
  {
    title: "Cadastral & Land Mapping",
    description: "Techmapperz converts cadastral maps, parcel records and related land information into structured GIS datasets. Based on the available source data and project specifications, we georeference map sheets, digitise parcel and plot boundaries, capture plot identifiers, and integrate administrative or land-use information for planning, land management and property-information workflows.",
    items: [
      "Cadastral map georeferencing",
      "Parcel and plot boundary digitisation",
      "Plot-number and attribute capture",
      "Village and administrative boundary mapping",
      "Map rectification and edge matching",
      "Land-record and tabular data integration",
      "Parcel GIS database creation",
      "Existing cadastral dataset updating"
    ],
    cta: "Explore Cadastral Mapping Services",
    link: "/service/gisservice/gisconsulting",
    image: "/gis_images/GIS_Main_Page/GIS_Consulting.webp",
    alt: "Cadastral and parcel boundary mapping"
  },
  {
    title: "Land Use & Land Cover (LULC) Mapping",
    description: "Techmapperz prepares land use and land cover datasets by interpreting satellite imagery, aerial imagery and available reference information. Before production, we define the classification categories, imagery period, mapping scale, minimum feature size and required outputs according to the project specifications. The resulting GIS layers can support urban and regional planning, infrastructure studies, environmental assessment, resource management and multi-date change analysis.",
    items: [
      "LULC classification and mapping",
      "Built-up and settlement mapping",
      "Agricultural and vegetation mapping",
      "Forest, waterbody and open-land mapping",
      "Transport and infrastructure mapping",
      "Multi-date change detection",
      "Thematic map preparation",
      "Class-wise area statistics"
    ],
    cta: "Explore LULC & Remote Sensing Services",
    link: "/contact",
    image: "/gis_images/Urban & Rural.webp",
    alt: "Satellite imagery and classified land use and land cover map"
  },
  {
    title: "GIS Spatial Analysis & Geoprocessing",
    description: "Techmapperz uses spatial analysis to examine relationships between locations, infrastructure, terrain and other project data. Each analysis workflow is developed around a defined project question—such as proximity, accessibility, suitability, network connectivity or change over time. We deliver processed GIS datasets, analytical maps and supporting measurements in the formats required for planning, engineering and project evaluation.",
    items: [
      "Buffer, proximity and overlay analysis",
      "Route and network analysis",
      "Site-suitability analysis",
      "Terrain, elevation and slope analysis",
      "Spatial queries and measurements",
      "Change detection and temporal comparison",
      "Geocoding and dataset integration",
      "Repeatable geoprocessing workflows"
    ],
    cta: "Explore Spatial Analysis Services",
    link: "/contact",
    image: "/gis_images/GISintroImg.webp",
    alt: "GIS spatial analysis"
  }
];

const sourceDataCategories = [
  {
    title: "Imagery",
    items: ["Satellite imagery", "Orthophotos", "Drone imagery", "GeoTIFF raster data", "Historical imagery"]
  },
  {
    title: "Survey Data",
    items: ["DGPS/GPS points", "Total-station information", "Survey coordinates", "Field observations", "Existing control points"]
  },
  {
    title: "GIS Data",
    items: ["Shapefile", "GeoPackage", "File Geodatabase", "GeoJSON", "KML/KMZ", "Existing spatial databases"]
  },
  {
    title: "CAD & Engineering",
    items: ["DWG", "DXF", "Engineering drawings", "Layout plans", "Utility plans"]
  },
  {
    title: "Maps & Records",
    items: ["Scanned cadastral maps", "Topographic sheets", "PDFs", "Asset registers", "Tabular records", "Existing project databases"]
  },
  {
    title: "Point Cloud",
    items: ["LAS", "LAZ", "Classified point clouds", "Unclassified point clouds"]
  }
];

const workflowSteps = [
  { num: "01", title: "Requirement & Data Review", desc: "We review the project objective, source data, coordinate system, feature catalogue, attributes, output formats, acceptance requirements and timeline." },
  { num: "02", title: "Production Plan & Sample", desc: "For detailed or large-volume projects, a representative sample can be prepared to confirm interpretation, feature structure, attributes and delivery format before full production." },
  { num: "03", title: "GIS Production", desc: "The team carries out the agreed digitisation, feature extraction, conversion, remote-sensing interpretation, point-cloud processing or spatial analysis." },
  { num: "04", title: "QA/QC Review", desc: "Relevant checks cover geometry, topology, attribution, connectivity, completeness, projection, naming and file structure according to the project specification." },
  { num: "05", title: "Client Review", desc: "Review packages are shared according to agreed milestones so that comments are identified and incorporated before final handover." },
  { num: "06", title: "Final Delivery", desc: "Approved outputs are organised in the agreed GIS, CAD, raster, point-cloud, database or reporting format." }
];

const formatCategories = ['All', 'GIS', 'Database', 'CAD', 'Raster', 'Point Cloud', 'Additional'];

const formats = [
  { name: 'Shapefile', ext: '.shp', cat: 'GIS' },
  { name: 'GeoPackage', ext: '.gpkg', cat: 'GIS' },
  { name: 'File Geodatabase', ext: '.gdb', cat: 'GIS' },
  { name: 'GeoJSON', ext: '.geojson', cat: 'GIS' },
  { name: 'KML / KMZ', ext: '.kml / .kmz', cat: 'GIS' },
  { name: 'PostGIS', ext: 'Spatial Database', cat: 'Database' },
  { name: 'DWG', ext: 'AutoCAD Drawing', cat: 'CAD' },
  { name: 'DXF', ext: 'Drawing Exchange Format', cat: 'CAD' },
  { name: 'GeoTIFF', ext: 'Georeferenced Raster', cat: 'Raster' },
  { name: 'LAS', ext: 'LiDAR Point Cloud', cat: 'Point Cloud' },
  { name: 'LAZ', ext: 'Compressed Point Cloud', cat: 'Point Cloud' },
  { name: 'PDF Maps', ext: 'Cartographic Maps', cat: 'Additional' },
  { name: 'Excel / CSV', ext: 'Attribute Tables', cat: 'Additional' },
  { name: 'QA/QC Reports', ext: 'Validation Records', cat: 'Additional' },
  { name: 'Layer Dictionaries', ext: 'Feature Catalogues', cat: 'Additional' },
];

const industries = [
  {
    title: "Infrastructure & Transportation",
    desc: "Topographic and corridor mapping, road and railway feature extraction, terrain datasets, asset mapping and existing-condition GIS for engineering and infrastructure projects.",
    icon: Route
  },
  {
    title: "Utilities & Energy",
    desc: "Pipeline, water, drainage, electrical and other utility-asset mapping, including network digitisation, attribute integration, GIS database preparation and CAD–GIS conversion.",
    icon: Zap
  },
  {
    title: "Mining & Natural Resources",
    desc: "Mine feature extraction, haul-road and infrastructure mapping, terrain and waterbody datasets, land-use mapping and GIS/CAD deliverables for planning and project documentation.",
    icon: Mountain
  },
  {
    title: "Government & Land Administration",
    desc: "Cadastral map digitisation, parcel and administrative boundary mapping, municipal asset datasets, land-record integration and project-specific GIS database preparation.",
    icon: Landmark
  },
  {
    title: "Architecture & Urban Planning",
    desc: "Base-map preparation, building footprints, land-use mapping, road and drainage networks, utility layers and existing-condition datasets for planning and design studies.",
    icon: Building2
  },
  {
    title: "Agriculture & Forestry",
    desc: "Agricultural land and plantation mapping, vegetation interpretation, land-use classification, terrain and drainage datasets, water-resource mapping and GIS database preparation.",
    icon: TreePine
  }
];

const featuredMiningProject = {
  tag: "FEATURED GIS PROJECT EXPERIENCE",
  title: "Mining-Area Feature Extraction Across 556.674 sq. km",
  description: "Techmapperz completed a large-scale 2D feature-extraction and GIS/CAD mapping assignment using high-resolution drone imagery from multiple mining areas. The work converted visible surface, infrastructure and land-use information into structured digital mapping outputs suitable for project planning, documentation and downstream GIS or CAD workflows.",
  stats: [
    { value: "556.674 sq. km", label: "Total mapping coverage" },
    { value: "2D GIS", label: "Feature extraction" },
    { value: "GIS + CAD", label: "Delivery environments" }
  ],
  features: [
    "Mine boundaries and operational areas",
    "Roads and haul roads",
    "Built-up and industrial infrastructure",
    "Railway and conveyor features",
    "Water bodies and sumps",
    "Agricultural and land-use features"
  ],
  footerNote: "The completed datasets provided a consistent digital representation of mining infrastructure, surface features, water bodies and land-use classes across the project areas.",
  image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
  link: "/portfolios",
  ctaLabel: "View the Complete Mining GIS Project"
};

const whyPoints = [
  {
    title: "Project-Specific Scope Review",
    desc: "We review the intended application, available source data, required features, attribute information, output formats and acceptance requirements before full-scale production begins.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/gis-scope-review-icon.png"
  },
  {
    title: "Relevant GIS Project Experience",
    desc: "Our published project experience includes mining feature extraction, pipeline digitisation, railway-corridor mapping, land-use mapping and infrastructure-related GIS assignments.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/gis-project-experience-icon.png"
  },
  {
    title: "Multiple Source-Data Capability",
    desc: "We can work with drone and satellite imagery, LiDAR point clouds, survey information, CAD drawings, scanned maps, existing GIS layers and client databases.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/multi-source-data-icon.png"
  },
  {
    title: "Structured QA/QC",
    desc: "Quality checks can cover geometry, topology, projection, attributes, connectivity, completeness and file structure according to the agreed project specifications.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/structured-qaqc-icon.png"
  },
  {
    title: "GIS & CAD-Ready Delivery",
    desc: "Outputs are prepared for the required GIS, CAD, raster, point-cloud or database environment, with file formats, layer structures and naming requirements defined before delivery.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/gis-cad-delivery-icon.png"
  },
  {
    title: "Clear Review and Communication",
    desc: "Scope assumptions, input dependencies, sample reviews, production milestones and final deliverables are communicated throughout the assignment so that decisions are recorded before they affect production.",
    icon: "/gis_images/gis_services/WHY_TECHMAPPERZ/clear-communication-icon.png"
  }
];

const faqs = [
  { q: "What GIS mapping services does Techmapperz provide?", a: "Techmapperz provides GIS data digitisation, feature extraction, utility and asset mapping, cadastral mapping, land-use and land-cover mapping, georeferencing, CAD/GIS conversion, spatial analysis, database preparation and related geospatial production services." },
  { q: "What source data can you use for GIS mapping?", a: "Depending on the assignment, we can work with satellite imagery, drone imagery, orthophotos, LiDAR point clouds, scanned maps, CAD drawings, survey coordinates, existing GIS data and client asset records." },
  { q: "Can you convert AutoCAD DWG or DXF files into GIS?", a: "Yes. CAD drawings can be reviewed and converted into GIS layers, with coordinate-system handling, geometry organisation and attribute structuring according to the project requirement." },
  { q: "Do you provide utility and pipeline mapping?", a: "Yes. We support GIS mapping for pipelines, utilities and associated infrastructure using available drawings, imagery, survey information and existing asset records." },
  { q: "Do you provide cadastral map digitisation?", a: "Yes. Scanned cadastral maps and other available land information can be georeferenced and converted into parcel or land-information datasets according to the project specification." },
  { q: "Do you provide land-use and land-cover mapping?", a: "Yes. LULC mapping can be prepared from suitable satellite or aerial imagery according to the project’s classification scheme and required level of detail." }
];

const FaqItem = ({ faq, index, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `gis-faq-panel-${index}`;
  const buttonId = `gis-faq-btn-${index}`;

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-[#6ac045] transition-colors">
          {faq.q}
        </span>
        <span className={`text-[#6ac045] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div id={panelId} role="region" aria-labelledby={buttonId}>
          <p className="text-blue-100/90 text-base leading-relaxed pb-5">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
};

export default function GISServicePageClient() {
  const [activeFormatTab, setActiveFormatTab] = useState('All');

  const filteredFormats = activeFormatTab === 'All'
    ? formats
    : formats.filter(f => f.cat === activeFormatTab);

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-40 sm:pb-36 overflow-hidden">
        <Image
          src="/GIS_Service/GIS_Service_banner.png"
          alt="Techmapperz GIS Mapping & Data Services Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 pointer-events-none" />
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm">
            GIS MAPPING &amp; DATA SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight tracking-tight max-w-3xl drop-shadow-md">
            GIS Mapping Services for Clearer Planning, Analysis and Project Delivery
          </h1>
          <p className="text-gray-200 text-base md:text-[17px] max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            Techmapperz converts satellite and drone imagery, LiDAR point clouds, survey inputs, CAD drawings, scanned maps and existing GIS databases into structured spatial information for infrastructure, utilities, mining, land administration and planning projects.
          </p>
          <p className="text-white/95 text-base md:text-[17px] max-w-2xl leading-relaxed font-medium drop-shadow-sm">
            Our services cover GIS data digitisation, feature extraction, utility and asset mapping, CAD/GIS conversion, spatial analysis and geospatial database preparation—organised around the required layers, attributes, coordinate system and delivery format.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-[13px] px-8 rounded-full bg-[#1656b8] hover:bg-[#0c2e60] text-white font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
            >
              Discuss Your GIS Project
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/15 transition-all duration-300 text-center w-full sm:w-auto"
            >
              Explore Our GIS Services
            </a>
          </div>
        </div>

        {/* Bottom Capabilities Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0a1930]/95 backdrop-blur-md border-t border-[#6ac045]/30 z-20">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 sm:py-5 overflow-x-auto hide-scrollbar">
            <div className="flex items-center justify-between gap-6 min-w-max md:min-w-0">

              <div className="flex items-center gap-3 group cursor-default">
                <Map className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">GIS Mapping</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <FileDigit className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">Digitisation</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <Layers className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">Feature Extraction</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <Zap className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">Utility Mapping</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <TreePine className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">LULC</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <LineChart className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">Spatial Analysis</span>
              </div>

              <div className="flex items-center gap-3 group cursor-default">
                <Monitor className="w-6 h-6 text-[#6ac045] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white tracking-wide">CAD/GIS</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="about">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Narrative */}
            <div>
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                FROM SOURCE DATA TO USABLE GIS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                GIS Data Prepared for the Way Your Project Works
              </h2>
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-4">
                GIS requirements differ from one project to another. Infrastructure teams may need CAD-compatible base maps, utility operators may require connected asset networks with structured attributes, while land and planning assignments may depend on classified layers, parcel information or spatial analysis.
              </p>
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-6">
                Before production begins, Techmapperz reviews the available source data, coordinate system, mapping scale, feature catalogue, attribute structure, topology rules and required delivery format. This helps us prepare GIS data that fits the client’s engineering, planning, analysis or asset-management workflow.
              </p>
            </div>

            {/* Right Side Column: Image */}
            <div>
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/gis_images/gis_services/GIS Service Page Introduction.png"
                  alt="GIS data preparation and mapping production workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>

          {/* Small Strip Banner */}
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/15">
            <div>
              <p className="text-white font-bold text-lg mb-1">Already have GIS, CAD or survey data?</p>
              <p className="text-blue-200 text-sm md:text-base">We can also review, clean, restructure, convert or update existing datasets without rebuilding the project from the beginning.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md w-full md:w-auto"
            >
              Share Your Existing Data &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. GIS SERVICES LIST */}
      <section className="py-10 md:py-16 bg-white" id="services">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              OUR GIS SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              GIS Production and Analysis for Different Project Requirements
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] mt-3 leading-relaxed">
              Techmapperz supports core GIS service areas, covering data digitisation, feature extraction, utility and land mapping, spatial analysis and land-use mapping.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {gisServices.map((svc, i) => (
              <div
                key={svc.title}
                className={`py-8 md:py-12 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-8 lg:gap-12 items-start`}
              >
                <div className="relative w-full lg:w-[42%] h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={svc.image}
                    alt={svc.alt || svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <span className="text-[#6ac045] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={svc.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit"
                  >
                    {svc.cta} &#8594;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SOURCE FORMATS SECTION */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="source-data">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              START WITH THE DATA YOU HAVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              GIS Projects Can Begin with Many Different Source Formats
            </h2>
            <p className="text-blue-100/80 text-base md:text-[17px] mt-2 max-w-2xl mx-auto leading-relaxed">
              You do not need to convert all of your information before sharing a requirement with us. We review the available source data and determine what is suitable for the required output.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sourceDataCategories.map((cat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-sm hover:border-[#6ac045]/50 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#1656b8] text-white font-bold text-xs flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <h3 className="text-white font-bold text-base md:text-lg">{cat.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-blue-100/90 text-sm md:text-base">
                      <span className="text-[#6ac045] font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-full bg-[#1656b8] hover:bg-[#10477b] text-white font-bold text-sm transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              Share Your Source Data &#8594;
            </Link>
          </div>

        </div>
      </section>

      {/* 5. WORKFLOW SECTION */}
      <section className="py-10 md:py-16 bg-white" id="workflow">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              From Requirement Review to Final GIS Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {workflowSteps.map((step, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#0c2e60] flex items-center justify-center text-white font-bold text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="text-[#0c2e60] font-bold text-base md:text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-full bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              Discuss Your GIS Workflow &#8594;
            </Link>
          </div>

        </div>
      </section>

      {/* 6. DELIVERY FORMATS SECTION */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="deliverables">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-8">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              DELIVERY FORMATS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              GIS Outputs Prepared for Your Existing Workflow
            </h2>
            <p className="text-blue-100/80 text-base md:text-[17px] mt-2 max-w-2xl mx-auto leading-relaxed">
              Final deliverables depend on the project specification and available source information.
            </p>
          </div>

          {/* Format Tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-6">
            {formatCategories.map((cat, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveFormatTab(cat)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs border transition-all duration-200 ${activeFormatTab === cat
                    ? 'bg-[#1656b8] border-[#1656b8] text-white shadow-md'
                    : 'bg-white/5 border-white/15 text-blue-100 hover:border-white/40 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredFormats.map((fmt, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#6ac045]/50 hover:bg-white/10 transition-all shadow-sm">
                <span className="text-[10px] font-bold text-[#6ac045] uppercase tracking-wider block mb-1">{fmt.cat}</span>
                <strong className="block text-base text-white font-bold leading-tight">{fmt.name}</strong>
                <span className="block text-xs text-blue-200/70 mt-1">{fmt.ext}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES / SECTORS SECTION */}
      <section className="py-10 md:py-16 bg-white" id="sectors">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              GIS Services Aligned with Industry Requirements
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] mt-2 max-w-3xl mx-auto leading-relaxed">
              Every sector works with different source data, feature definitions, technical specifications and delivery formats. Techmapperz adapts its GIS production workflow to the specific requirements of infrastructure, utilities, mining, land administration, urban planning and geospatial project teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="bg-[#f8fafc] text-gray-900 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1656b8]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center mb-4 text-[#1656b8] group-hover:bg-[#1656b8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 text-[#0c2e60] group-hover:text-[#1656b8] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. FEATURED GIS PROJECT EXPERIENCE */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="experience">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              {featuredMiningProject.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {featuredMiningProject.title}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* Left Visual Container */}
            <div className="relative w-full lg:w-[48%] bg-black/20 flex flex-col justify-between p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#04203a] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1656b8]" />
                  Drone imagery + extracted GIS layers
                </span>
              </div>

              <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-inner my-auto">
                <Image
                  src={featuredMiningProject.image}
                  alt={featuredMiningProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <p className="text-xs text-blue-200/80 leading-snug">
                  Preview treatment: actual project orthophoto with extracted vector layers overlaid.
                </p>
              </div>
            </div>

            {/* Right Information Container */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center flex-1 bg-white/[0.02]">
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed mb-6">
                {featuredMiningProject.description}
              </p>

              {/* 3 Metric Stat Boxes */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 mb-6 border-y border-white/10">
                {featuredMiningProject.stats.map((st, j) => (
                  <div key={j} className="text-center sm:text-left">
                    <strong className="block text-white font-bold text-base sm:text-lg md:text-xl leading-tight mb-1">
                      {st.value}
                    </strong>
                    <span className="block text-blue-200 text-xs sm:text-xs leading-snug">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features Captured Checklist */}
              <div className="mb-6">
                <h4 className="text-white font-bold text-sm md:text-base uppercase tracking-wider mb-3">
                  Features captured
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredMiningProject.features.map((feat, k) => (
                    <div key={k} className="flex items-start gap-2 text-blue-100/90 text-xs sm:text-sm">
                      <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-blue-200/80 leading-relaxed mb-6 italic">
                {featuredMiningProject.footerNote}
              </p>

              <div>
                <Link
                  href={featuredMiningProject.link}
                  className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-[#1656b8] hover:bg-[#10477b] text-white font-bold text-sm transition-all duration-300 shadow-md w-full sm:w-fit"
                >
                  {featuredMiningProject.ctaLabel} &#8599;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. WHY TECHMAPPERZ */}
      <section className="py-10 md:py-16 bg-white" id="why-us">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Structured GIS Production from Scope Review to Final Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((pt, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-5 p-2.5">
                  <Image
                    src={pt.icon}
                    alt={pt.title}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[#0c2e60] font-bold text-base md:text-lg mb-2">{pt.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">

          <div className="text-center mb-10">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Questions Clients Ask Before Starting a GIS Project
            </h2>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-sm divide-y divide-white/10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} defaultOpen={i === 0} />
            ))}
          </div>

        </div>
      </section>

      {/* 13. FINAL CTA BANNER */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-6 h-[2px] bg-[#6ac045]"></span>
                START YOUR GIS PROJECT
                <span className="w-6 h-[2px] bg-[#6ac045]"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                Have a GIS Mapping Requirement? Let&rsquo;s Review the Scope.
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal">
                Share whatever information is currently available&mdash;such as the project location, source data, approximate area or corridor length, required deliverables and expected timeline. If the scope is still being developed, our team can help identify the technical information needed for quotation and production planning.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your GIS Requirement &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

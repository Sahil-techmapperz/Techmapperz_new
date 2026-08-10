"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const gisServices = [
  {
    number: "01",
    title: "GIS Data Digitisation & Database Creation",
    description: "Paper maps, scanned plans, imagery and existing records often contain useful information but are difficult to analyse or maintain until they are converted into structured GIS data. Techmapperz digitises spatial features and associated attributes according to the required feature catalogue, layer structure, coordinate system and project specification.",
    items: [
      "Point, line and polygon digitisation",
      "Attribute data entry & coding",
      "Layer creation & map vectorisation",
      "Database structuring & cleaning",
      "Legacy GIS migration",
      "GIS database creation & updating"
    ],
    inputs: "Possible inputs: Scanned maps · Satellite imagery · Drone imagery · CAD drawings · Existing GIS layers · Survey information",
    cta: "Explore GIS Data Digitisation",
    link: "/service/gisservice/datadigitization",
    image: "/gis_images/GIS_Main_Page/GIS_Data_Digitization.webp"
  },
  {
    number: "02",
    title: "2D & 3D Feature Extraction",
    description: "We extract visible or interpretable geographic and infrastructure features from suitable drone imagery, satellite imagery, LiDAR point clouds and other geospatial sources. The feature catalogue is agreed before production so that roads, buildings, utilities, land features and other project objects are captured consistently.",
    items: [
      "Roads and road edges",
      "Railway & transport features",
      "Buildings and structures",
      "Drainage & water bodies",
      "Utilities & vegetation",
      "Mining & industrial infrastructure"
    ],
    outputs: "Typical outputs: GIS layers · GeoPackage · Geodatabase · DWG/DXF",
    cta: "Explore Feature Extraction Services",
    link: "/service/gisservice/gismapping",
    image: "/gis_images/GIS_Main_Page/GIS_Mapping.webp"
  },
  {
    number: "03",
    title: "Utility, Pipeline & Asset Mapping",
    description: "Utility GIS requires more than showing lines on a map. Assets normally need locations, identifiers, attributes and a structure that allows engineering or operational teams to understand the network. Techmapperz supports the creation and updating of GIS databases for linear and distributed infrastructure using available drawings, imagery, survey records and existing asset information.",
    items: [
      "Gas pipelines & water networks",
      "Drainage & electrical assets",
      "Telecom & road infrastructure",
      "Network digitisation",
      "Asset inventory preparation",
      "CAD/GIS integration & data cleaning"
    ],
    evidence: "Published project evidence: 6,000 km gas-pipeline digitisation and digital asset registry assignment.",
    cta: "Explore Utility & Asset Mapping",
    link: "/service/gisservice/gissurveying",
    image: "/gis_images/Gas Pipeline.webp"
  },
  {
    number: "04",
    title: "Cadastral & Land Mapping",
    description: "Cadastral and land-information projects often involve scanned maps, parcel boundaries, plot numbers, village information and existing ownership or administrative records. We convert available land information into structured digital spatial datasets for land administration, planning, property information and related GIS requirements.",
    items: [
      "Cadastral map digitisation",
      "Parcel boundary mapping",
      "Plot digitisation & georeferencing",
      "Plot-number attribution",
      "Village and administrative layers",
      "Land-record integration & parcel databases"
    ],
    cta: "Explore Cadastral Mapping Services",
    link: "/service/gisservice/gisconsulting",
    image: "/gis_images/GIS_Main_Page/GIS_Consulting.webp"
  },
  {
    number: "05",
    title: "Land Use / Land Cover & Remote Sensing",
    description: "Satellite and aerial imagery can be interpreted to understand how land is being used, how areas are changing and how different land-cover classes are distributed. Techmapperz prepares land-use and land-cover datasets according to the classification structure and level of detail required by the project.",
    items: [
      "Built-up & residential areas",
      "Industrial & agricultural land",
      "Vegetation & forest classes",
      "Water bodies & transport networks",
      "Satellite-image interpretation",
      "Image classification & change detection"
    ],
    evidence: "Published project evidence: 400 sq. km urban and rural LULC mapping assignment with 15+ layers.",
    cta: "Discuss LULC Mapping Requirement",
    link: "/contact",
    image: "/gis_images/Urban & Rural.webp"
  },
  {
    number: "06",
    title: "CAD to GIS & GIS to CAD Conversion",
    description: "Engineering and geospatial teams often work in different software environments. A CAD drawing may contain useful geometry but lack the coordinate, attribute and database structure expected in a GIS environment. Similarly, GIS information may need to be organised for CAD-based engineering workflows. Techmapperz supports controlled conversion between these environments according to project requirements.",
    items: [
      "CAD to GIS: DWG/DXF layer review & coordinate assignment",
      "CAD to GIS: Feature separation & attribute structuring",
      "GIS to CAD: Layer organisation & code translation",
      "GIS to CAD: Annotation, drawing structure & DWG/DXF delivery"
    ],
    cta: "Discuss a CAD/GIS Conversion Requirement",
    link: "/contact",
    image: "/gis_images/GIS_Mapping_Page_Banner.webp"
  },
  {
    number: "07",
    title: "Spatial Analysis & Geoprocessing",
    description: "GIS becomes more useful when spatial data can answer a project question rather than simply display features. We perform geoprocessing and spatial analysis using available GIS, terrain, infrastructure and project datasets.",
    items: [
      "Buffer & proximity analysis",
      "Overlay & network analysis",
      "Route & site-suitability analysis",
      "Terrain & slope analysis",
      "Change detection & spatial queries",
      "Area/length calculations & geocoding"
    ],
    cta: "Discuss Spatial Analysis Requirement",
    link: "/contact",
    image: "/gis_images/GISintroImg.webp"
  },
  {
    number: "08",
    title: "LiDAR & Point-Cloud to GIS Mapping",
    description: "Point clouds can be converted into GIS and CAD information when a project requires terrain, infrastructure or feature mapping from three-dimensional source data. Techmapperz can work with client-supplied LAS or LAZ data to support classification, feature extraction, terrain preparation and mapping workflows.",
    items: [
      "Point-cloud review & noise cleaning",
      "Ground/non-ground classification",
      "2D and 3D feature extraction",
      "Contours, profiles & cross-sections",
      "Terrain-product preparation",
      "GIS feature preparation & CAD conversion"
    ],
    cta: "Explore LiDAR & Point-Cloud Services",
    link: "/service/lidar",
    image: "/gis_images/GIS_Survey_page_Banner.webp"
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

const specificationChecklist = [
  "Project location",
  "Area or corridor length",
  "Source-data type",
  "Coordinate reference system",
  "Mapping scale or level of detail",
  "Feature list & feature codes",
  "Attribute structure & domains",
  "Topology rules & closure requirements",
  "Sample output requirement",
  "Required GIS or CAD formats",
  "Required accuracy specification",
  "Review procedure & milestone schedule",
  "Expected timeline"
];

const workflowSteps = [
  { num: "01", title: "Requirement & Data Review", desc: "We review the project objective, source data, coordinate system, feature catalogue, attributes, output formats, acceptance requirements and timeline." },
  { num: "02", title: "Production Plan & Sample", desc: "For detailed or large-volume projects, a representative sample can be prepared to confirm interpretation, feature structure, attributes and delivery format before full production." },
  { num: "03", title: "GIS Production", desc: "The team carries out the agreed digitisation, feature extraction, conversion, remote-sensing interpretation, point-cloud processing or spatial analysis." },
  { num: "04", title: "QA/QC Review", desc: "Relevant checks cover geometry, topology, attribution, connectivity, completeness, projection, naming and file structure according to the project specification." },
  { num: "05", title: "Client Review", desc: "Review packages are shared according to agreed milestones so that comments are identified and incorporated before final handover." },
  { num: "06", title: "Final Delivery", desc: "Approved outputs are organised in the agreed GIS, CAD, raster, point-cloud, database or reporting format." }
];

const qualityPillars = [
  {
    title: "Geometry",
    checks: ["Gaps", "Overlaps", "Slivers", "Self-intersections", "Invalid geometry", "Feature closure"]
  },
  {
    title: "Line & Network Data",
    checks: ["Dangles", "Overshoots", "Undershoots", "Connectivity", "Snapping", "Direction (where required)"]
  },
  {
    title: "Attributes",
    checks: ["Mandatory values", "Feature codes", "Domains", "Null values", "Naming structure", "Attribute consistency"]
  },
  {
    title: "Spatial Reference",
    checks: ["Coordinate system", "Units", "Projection", "Alignment with reference data"]
  },
  {
    title: "Completeness",
    checks: ["Required feature coverage", "Missing objects", "Layer completeness", "Edge matching"]
  },
  {
    title: "Delivery",
    checks: ["Folder structure", "Layer naming", "File formats", "Database structure", "Final package completeness"]
  }
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
  { title: "Infrastructure & Transportation", desc: "Topographic mapping, corridor mapping, road and railway features, existing-condition mapping, terrain information and engineering-support GIS." },
  { title: "Utilities & Energy", desc: "Pipeline mapping, water and drainage networks, utility assets, associated infrastructure, database preparation and CAD/GIS integration." },
  { title: "Mining & Natural Resources", desc: "Mine feature extraction, haul roads, infrastructure, water bodies, land-use information, terrain datasets and GIS/CAD mapping." },
  { title: "Government & Land Administration", desc: "Cadastral digitisation, land records, municipal GIS, public assets, administrative mapping and project-specific spatial databases." },
  { title: "Architecture & Urban Planning", desc: "Base maps, building footprints, land-use information, road networks, drainage, utilities and existing-condition mapping." },
  { title: "Drone & Survey Companies", desc: "Back-office GIS production, feature extraction, CAD preparation, orthomosaic-based digitisation, LiDAR processing and final project-format delivery.", isHighlight: true }
];

const projectExperiences = [
  {
    sector: "MINING & NATURAL RESOURCES",
    title: "556.674 sq. km Feature Extraction & CAD Mapping",
    description: "A large-area mapping assignment using high-resolution drone imagery to create structured GIS and CAD information for mining and surrounding areas. Published project information includes mapping of mine infrastructure, roads and haul roads, built-up areas, water bodies, railway features, conveyors and land features.",
    stats: [
      { label: "Mapped project area", value: "556.674 sq. km" },
      { label: "Delivery environment", value: "GIS + CAD" },
      { label: "Feature scope", value: "Multiple feature classes" }
    ],
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
    link: "/portfolios"
  },
  {
    sector: "UTILITIES & PIPELINES",
    title: "6,000 km Gas Pipeline Digitisation & Asset Mapping",
    description: "A GIS digitisation assignment supporting development of a structured digital asset framework for a large natural-gas transmission network. The published scope includes the pipeline network and associated facilities such as valve stations, compressor stations and cathodic-protection locations.",
    stats: [
      { label: "Pipeline network", value: "6,000 km" },
      { label: "Spatial info", value: "GIS database" },
      { label: "Mapping scope", value: "Pipeline + assets" }
    ],
    image: "/gis_images/Gas Pipeline.webp",
    link: "/portfolios"
  },
  {
    sector: "LAND USE & PLANNING",
    title: "400 sq. km Urban & Rural LULC Mapping",
    description: "A land-use and land-cover mapping assignment covering urban and rural areas, with more than 15 mapped layers according to the published project description.",
    stats: [
      { label: "Mapped area", value: "400 sq. km" },
      { label: "Thematic layers", value: "15+ layers" },
      { label: "Primary deliverable", value: "GIS mapping & analysis" }
    ],
    image: "/gis_images/Urban & Rural.webp",
    link: "/portfolios"
  }
];

const whyPoints = [
  { title: "GIS-Led Requirement Review", desc: "Projects are reviewed from the perspective of spatial data, mapping requirements, source-data limitations and the intended final use." },
  { title: "Multiple Source-Data Capabilities", desc: "We can work with imagery, LiDAR point clouds, GIS datasets, survey information, engineering drawings, scanned maps and client databases." },
  { title: "Pilot-Based Production", desc: "For complex or high-volume projects, sample production can help confirm interpretation, feature coding, attributes and delivery structure before scaling." },
  { title: "Structured QA/QC", desc: "Relevant checks cover geometry, topology, attributes, connectivity, projection, completeness and file structure according to the agreed specification." },
  { title: "GIS & CAD Delivery", desc: "Outputs can be prepared for GIS databases, engineering CAD environments, raster workflows and point-cloud applications." },
  { title: "Processing Partnership", desc: "Consultants, survey companies and other service providers can engage Techmapperz for defined back-office GIS production without outsourcing their complete client relationship." }
];

const faqs = [
  { q: "What GIS mapping services does Techmapperz provide?", a: "Techmapperz provides GIS data digitisation, feature extraction, utility and asset mapping, cadastral mapping, land-use and land-cover mapping, georeferencing, CAD/GIS conversion, spatial analysis, database preparation and related geospatial production services." },
  { q: "What source data can you use for GIS mapping?", a: "Depending on the assignment, we can work with satellite imagery, drone imagery, orthophotos, LiDAR point clouds, scanned maps, CAD drawings, survey coordinates, existing GIS data and client asset records." },
  { q: "Can you digitise features from drone imagery?", a: "Yes. Where the imagery is suitable for the required interpretation, features such as roads, buildings, drainage, utilities, land boundaries, water bodies and other project-specific objects can be extracted into GIS or CAD datasets." },
  { q: "Can you convert AutoCAD DWG or DXF files into GIS?", a: "Yes. CAD drawings can be reviewed and converted into GIS layers, with coordinate-system handling, geometry organisation and attribute structuring according to the project requirement." },
  { q: "Can GIS files be converted back into CAD?", a: "Yes. GIS information can also be organised into DWG or DXF outputs according to the required layer structure and project specification." },
  { q: "Do you provide utility and pipeline mapping?", a: "Yes. We support GIS mapping for pipelines, utilities and associated infrastructure using available drawings, imagery, survey information and existing asset records." },
  { q: "Do you provide cadastral map digitisation?", a: "Yes. Scanned cadastral maps and other available land information can be georeferenced and converted into parcel or land-information datasets according to the project specification." },
  { q: "Do you provide land-use and land-cover mapping?", a: "Yes. LULC mapping can be prepared from suitable satellite or aerial imagery according to the project’s classification scheme and required level of detail." },
  { q: "Can you process large-volume GIS digitisation projects?", a: "Large assignments can be divided into planned production units with agreed specifications, samples, review milestones and QA/QC stages. Capacity and timelines should be confirmed after reviewing the actual quantity and complexity." },
  { q: "Can you complete a sample before full production?", a: "Yes. A pilot or sample area is particularly useful when the project involves a new feature catalogue, interpretation rules, complex attributes or a large production quantity." },
  { q: "How do you check GIS data quality?", a: "The QA/QC procedure depends on the project. Relevant checks can include geometry, topology, connectivity, attributes, feature codes, projection, completeness, edge matching, file structure and compliance with the agreed specification." },
  { q: "What GIS file formats can you deliver?", a: "Depending on the scope, deliverables can include Shapefile, GeoPackage, File Geodatabase, GeoJSON, KML/KMZ, PostGIS, DWG, DXF, GeoTIFF, LAS and LAZ." },
  { q: "Can Techmapperz work as a GIS subcontractor?", a: "Yes. Infrastructure consultants, government contractors, survey organisations, drone companies and other service providers can engage Techmapperz for defined GIS production, processing or mapping requirements." },
  { q: "What information should I provide for a quotation?", a: "Share the project location, approximate area or quantity, available source data, feature list, coordinate system, expected deliverables, required formats, accuracy or mapping specification where applicable, and expected timeline." }
];

const FaqItem = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-start justify-between gap-4 group">
        <span className="text-[#0c2e60] font-semibold text-sm md:text-base leading-snug group-hover:text-[#1656b8] transition-colors">{faq.q}</span>
        <span className={`text-[#1656b8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed pb-5">{faq.a}</p>}
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
      
      {/* HERO SECTION - MATCHING DRONE SERVICE HERO EXACTLY */}
      <section 
        className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-16 sm:pb-28" 
        style={{ backgroundImage: 'url("/gis_images/aerial_gis_mapping_banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">GIS MAPPING & DATA SERVICES</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">GIS Mapping Services for Project-Ready Spatial Data</h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">Techmapperz supports infrastructure, utility, mining, government, land, architecture and planning projects with GIS mapping, data digitisation, feature extraction, spatial analysis and geospatial database preparation.</p>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">We work with satellite imagery, drone data, LiDAR point clouds, survey information, CAD drawings, scanned maps and existing GIS databases to prepare structured outputs for mapping, engineering, planning and asset-management workflows.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="#contact" className="w-full sm:w-auto"><button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8]/30 text-white font-semibold text-[15px] hover:bg-[#1656b8] transition-all duration-300">Discuss Your GIS Requirement</button></Link>
            <Link href="#services" className="w-full sm:w-auto"><button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">Explore GIS Services</button></Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Narrative */}
            <div>
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                FROM SOURCE DATA TO USABLE GIS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">
                Good GIS Data Starts with Understanding How It Will Be Used
              </h2>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                GIS projects are not simply about drawing features on a map. The required layer structure, attributes, coordinate system, topology rules, level of detail and final format depend on what the data will support after delivery.
              </p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                An infrastructure consultant may require CAD-compatible mapping. A utility company may need an attributed asset database. A planning team may require land-use information, while a government contractor may need large-volume digitisation following a defined feature catalogue.
              </p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">
                Techmapperz reviews these requirements before production begins so that the GIS data is prepared around the intended project workflow rather than treated as a generic mapping exercise.
              </p>

              {/* Existing Data Callout Box */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
                <p className="text-[#0c2e60] font-bold text-base mb-2">Already have GIS, CAD or survey data?</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We can also review, clean, restructure, convert or update existing datasets without rebuilding the project from the beginning.
                </p>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit"
                >
                  Share Your Existing Data &#8594;
                </Link>
              </div>
            </div>

            {/* Right Side Column: Image & Process Diagram */}
            <div className="flex flex-col gap-6">
              <div className="relative h-[250px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/gis_images/gis_mapping_digitisation.png" 
                  alt="GIS Mapping & Data Digitisation" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover object-center" 
                />
              </div>

              {/* Before/After Flow Card */}
              <div className="bg-[#0c2e60] text-white rounded-2xl p-6 shadow-lg border border-white/10">
                <span className="text-[#6ac045] text-xs font-bold uppercase tracking-widest block mb-4">
                  GIS TRANSFORMATION WORKFLOW
                </span>
                <div className="space-y-3 text-xs md:text-sm">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <strong className="text-[#6ac045] block mb-0.5">INPUT DATA</strong>
                    <span>Scanned Map / Drone Image / CAD / LiDAR</span>
                  </div>
                  <div className="text-center text-[#6ac045] font-bold">↓</div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <strong className="text-[#6ac045] block mb-0.5">TECHMAPPERZ WORKFLOW</strong>
                    <span>Georeference → Digitise → Attribute → QA/QC</span>
                  </div>
                  <div className="text-center text-[#6ac045] font-bold">↓</div>
                  <div className="bg-white/20 p-3 rounded-xl border border-white/20 font-bold">
                    <strong className="text-white block mb-0.5">PROJECT-READY OUTPUT</strong>
                    <span>Structured GIS + CAD + Spatial Database</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GIS SERVICES LIST (Alternating Rows matching Drone Services) */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              OUR GIS SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              GIS Production and Analysis for Different Project Requirements
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              Eight primary geospatial service areas built around spatial accuracy, layer structure and workflow compatibility.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {gisServices.map((svc, i) => (
              <div 
                key={svc.number} 
                className={`py-10 md:py-16 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-10 lg:gap-16 items-start`}
              >
                <div className="relative w-full lg:w-[42%] h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[#6ac045] text-xs font-bold uppercase tracking-widest mb-2">
                    {svc.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#6ac045] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {svc.inputs && (
                    <div className="bg-[#f8fafc] border border-gray-200 p-3 rounded-xl text-xs text-gray-600 mb-6">
                      {svc.inputs}
                    </div>
                  )}

                  {svc.outputs && (
                    <div className="bg-[#f8fafc] border border-gray-200 p-3 rounded-xl text-xs text-gray-600 mb-6">
                      {svc.outputs}
                    </div>
                  )}

                  {svc.evidence && (
                    <div className="bg-[#f0f9f8] border border-[#bcecdb] p-3 rounded-xl text-xs text-[#078a86] font-bold mb-6">
                      {svc.evidence}
                    </div>
                  )}

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
      <section className="py-16 md:py-24 bg-[#f8fafc]" id="source-data">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              START WITH THE DATA YOU HAVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              GIS Projects Can Begin with Many Different Source Formats
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
              You do not need to convert all of your information before sharing a requirement with us. We review the available source data and determine what is suitable for the required output.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sourceDataCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0c2e60] text-white font-bold text-xs flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <h3 className="text-[#0c2e60] font-bold text-base">{cat.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-[#6ac045] font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm transition-all duration-300 shadow-md">
                Share Your Source Data &#8594;
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. SPECIFICATION CHECKLIST (Dark Blue Block matching Drone Inputs) */}
      <section className="py-16 md:py-24 bg-[#0c2e60] text-white" id="specification">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              BEFORE PRODUCTION BEGINS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              A Clear Specification Reduces Rework Later
            </h2>
            <p className="text-blue-200 text-sm md:text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
              For an effective GIS quotation and production plan, share as much of the following information as available:
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl border border-white/10 p-8 shadow-sm mb-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specificationChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-blue-100 text-sm">
                  <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-200 mt-6 pt-4 border-t border-white/15 text-center">
              If some information is not yet available, we can identify the missing decisions during the requirement review.
            </p>
          </div>

          <div className="text-center">
            <Link href="#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto py-[12px] px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                Send Your Scope of Work &#8594;
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. WORKFLOW SECTION (Matching Drone Workflow Grid) */}
      <section className="py-16 md:py-24 bg-white" id="workflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              From Requirement Review to Final GIS Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {workflowSteps.map((step, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#0c2e60] flex items-center justify-center text-white font-bold text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="text-[#0c2e60] font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto py-3 px-8 rounded-full border border-[#0c2e60] text-[#0c2e60] font-bold text-sm hover:bg-[#0c2e60] hover:text-white transition-all duration-300">
                Discuss Your GIS Workflow &#8594;
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 7. GIS QUALITY CONTROL SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc]" id="quality">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              GIS QUALITY CONTROL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Quality Checks Should Follow the Project Specification
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
              Avoid presenting QA/QC as a generic promise of “accuracy.” Different GIS projects have different acceptance criteria. A pipeline database may prioritise connectivity and attributes, while land-use mapping may focus on interpretation and polygon completeness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {qualityPillars.map((pillar, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#6ac045] mb-3" />
                <h3 className="text-[#0c2e60] font-bold text-base mb-3">{pillar.title}</h3>
                <ul className="flex flex-col gap-2">
                  {pillar.checks.map((chk, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-[#6ac045] font-bold">&#10003;</span>
                      {chk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm transition-all duration-300 shadow-md">
                Share Your GIS Specification &#8594;
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 8. DELIVERY FORMATS SECTION */}
      <section className="py-16 md:py-24 bg-white" id="deliverables">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-12">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              DELIVERY FORMATS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              GIS Outputs Prepared for Your Existing Workflow
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
              Final deliverables depend on the project specification and available source information.
            </p>
          </div>

          {/* Format Tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {formatCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFormatTab(cat)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs border transition-all duration-200 ${
                  activeFormatTab === cat 
                    ? 'bg-[#0c2e60] border-[#0c2e60] text-white shadow-md' 
                    : 'bg-[#f8fafc] border-gray-300 text-gray-700 hover:border-[#0c2e60]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredFormats.map((fmt, i) => (
              <div key={i} className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-5 hover:border-[#0c2e60] transition-colors">
                <span className="text-[10px] font-bold text-[#6ac045] uppercase tracking-wider block mb-1">{fmt.cat}</span>
                <strong className="block text-base text-[#0c2e60] font-bold leading-tight">{fmt.name}</strong>
                <span className="block text-xs text-gray-500 mt-1">{fmt.ext}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INDUSTRIES / SECTORS SECTION (Matching Drone Industries Grid) */}
      <section className="py-16 md:py-24 bg-[#f8fafc]" id="sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              GIS FOR DIFFERENT SECTORS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Mapping Workflows Change from One Industry to Another
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-6 border transition-shadow ${
                  ind.isHighlight 
                    ? 'bg-[#0c2e60] text-white border-[#0c2e60] shadow-lg' 
                    : 'bg-white text-gray-900 border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-[#6ac045] mb-4" />
                {ind.isHighlight && (
                  <span className="text-[10px] font-bold text-[#6ac045] uppercase tracking-widest block mb-1">
                    SUBCONTRACTING & PROCESSING PARTNER
                  </span>
                )}
                <h3 className={`font-bold text-base mb-2 ${ind.isHighlight ? 'text-white' : 'text-[#0c2e60]'}`}>
                  {ind.title}
                </h3>
                <p className={`text-sm leading-relaxed ${ind.isHighlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SELECTED GIS PROJECT EXPERIENCE (Dark Blue Block matching Drone Experience) */}
      <section className="py-16 md:py-24 bg-[#0c2e60] text-white" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              SELECTED GIS PROJECT EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Real GIS Work Behind the Service List
            </h2>
          </div>

          <div className="space-y-8">
            {projectExperiences.map((proj, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-[45%] h-[240px] lg:h-auto flex-shrink-0">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    className="object-cover object-center" 
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                  <p className="text-[#6ac045] text-xs font-bold uppercase tracking-widest">
                    {proj.sector}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-blue-200 text-sm md:text-[15px] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.stats.map((st, j) => (
                      <span key={j} className="text-xs font-medium bg-white/10 border border-white/15 text-blue-100 px-3 py-1.5 rounded-full">
                        <strong>{st.value}</strong> ({st.label})
                      </span>
                    ))}
                  </div>
                  <Link href={proj.link} className="mt-2 w-full sm:w-fit">
                    <button className="w-full sm:w-auto py-3 px-7 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300">
                      View Project Details &#8594;
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. WEB & MOBILE GIS INTEGRATION */}
      <section className="py-16 md:py-24 bg-white" id="webgis">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="bg-[#f8fafc] rounded-3xl border border-gray-200 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] block">
                FROM GIS DATA TO DIGITAL ACCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e60]">
                Need Your GIS Data Available Beyond Desktop Software?
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Completed spatial databases can also be connected to Web GIS, dashboards and mobile field applications when project teams need broader access to the information.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Asset-management GIS",
                  "Web mapping applications",
                  "Geoportals",
                  "Project dashboards",
                  "Mobile GIS applications",
                  "Field-data collection"
                ].map((tag, i) => (
                  <span key={i} className="text-xs font-medium bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/service/gisservice/webgisdevelopment" className="w-full sm:w-auto shrink-0">
              <button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm transition-all duration-300 shadow-md">
                Explore Web & Mobile GIS Development &#8594;
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 12. WHY TECHMAPPERZ (Matching Drone Why Techmapperz Grid) */}
      <section className="py-16 md:py-24 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              A GIS Production Partner Focused on Usable Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((pt, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-[#0c2e60] flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#6ac045]" />
                </div>
                <h3 className="text-[#0c2e60] font-bold text-base mb-2">{pt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (Matching Drone FaqItem) */}
      <section className="py-16 md:py-24 bg-[#f8fafc]" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>

        </div>
      </section>

      {/* 14. FINAL CTA BANNER */}
      <section className="py-16 md:py-24 bg-[#0c2e60] text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 text-center">
          
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            LET'S REVIEW YOUR GIS REQUIREMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-4">
            Have Data That Needs to Become a Usable GIS Deliverable?
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Whether your project starts with imagery, CAD drawings, scanned maps, LiDAR, survey information or an existing GIS database, share the available inputs and the final output you require.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a href="mailto:info@techmapperz.com" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                Discuss Your GIS Project &#8594;
              </button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-3.5 px-8 rounded-full border border-white bg-transparent text-white font-bold text-sm hover:bg-white/10 transition-all duration-300">
                Send Your Scope of Work
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

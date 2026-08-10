"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DronePartnership from "../../_Components/DronePartnership";

const droneServices = [
  { number: "01", title: "Drone Survey & Topographic Mapping", description: "Drone-based survey data can provide detailed information about terrain, existing features and site conditions over project areas and linear corridors. Techmapperz supports topographic and base-mapping requirements for infrastructure, mining, land-development and planning assignments.", items: ["Existing-condition mapping","Topographic base mapping","Land and site mapping","Road and railway corridors","Pipeline corridors","Mining areas","Construction sites","Planning and development areas"], cta: "Explore Drone Survey & Mapping", link: "/service/droneservice/dronesurveyandmapping", image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" },
  { number: "02", title: "Drone Data Processing & Photogrammetry", description: "Already have raw drone photographs? Techmapperz can process client-supplied imagery and available positioning or survey-control information into usable geospatial products. Before processing begins, we review image coverage, overlap, available metadata, control information, coordinate reference system and required outputs.", items: ["Image alignment","Photogrammetric processing","Orthophoto generation","Orthomosaic preparation","Dense point-cloud generation","DSM generation","Terrain-product preparation","Contour generation","3D surface or mesh preparation","GIS/CAD feature extraction"], cta: "Explore Drone Data Processing", link: "/service/droneservice/dronedataprocessing", image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp" },
  { number: "03", title: "Drone LiDAR & Point-Cloud Processing", description: "Drone LiDAR can provide detailed three-dimensional information for terrain, corridor and infrastructure projects. Depending on the sensor, survey configuration, vegetation, control information and project specification, LiDAR data can be processed into classified point clouds and terrain-related outputs.", items: ["LAS/LAZ data review","Noise identification and cleaning","Point-cloud classification","Ground/non-ground separation","Terrain extraction","2D and 3D feature extraction","Profiles and cross-sections","DEM/DTM preparation","Contour generation","GIS/CAD conversion"], cta: "Explore LiDAR & Point-Cloud Services", link: "/service/lidar", image: "/gis_images/Gas Pipeline.webp" },
  { number: "04", title: "DEM, DTM, DSM & Contour Mapping", description: "Elevation data from suitable drone, LiDAR or survey inputs can be converted into terrain products for engineering, mining, drainage, planning and land-development applications.", items: ["DEM: Digital representation of elevation information","DSM: Surface elevation including visible objects","DTM: Terrain-focused ground surface representation","Contours at agreed intervals","Spot heights","Hillshade and slope maps","Longitudinal profiles","Cross-sections","Surface comparison","Cut-and-fill outputs"], cta: "Discuss a Terrain Mapping Requirement", link: "/contact", image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" },
  { number: "05", title: "Mining Mapping & Volumetric Analysis", description: "Drone and point-cloud data can support mapping and measurement requirements across mine sites, stockyards and related infrastructure. Techmapperz can prepare terrain, feature and surface information from suitable drone or point-cloud datasets for mine planning and operational mapping.", items: ["Mine-feature extraction","Mine boundary mapping","Haul-road mapping","Infrastructure and asset mapping","Water-body and sump mapping","Terrain modelling","Contour generation","Stockpile volume calculation","Surface comparison","CAD and GIS preparation"], cta: "Explore Mining Geospatial Services", link: "/service/gisservice", image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp" },
  { number: "06", title: "Corridor, Utility & Asset Mapping", description: "Linear infrastructure requires a different production approach from conventional block-area mapping. Techmapperz supports drone-data and GIS workflows for transportation, pipeline and utility corridors, where outputs may need to combine terrain information with mapped infrastructure and project-specific features.", items: ["Railway corridors","Roads and highways","Pipelines","Drainage","Utility alignments","Industrial corridors","Transmission infrastructure","Asset inventories"], cta: "Discuss a Corridor Mapping Project", link: "/contact", image: "/gis_images/Gas Pipeline.webp" },
];

const processingBenefits = [
  { title: "Scalable Support", desc: "Add processing capacity according to project workload." },
  { title: "Structured QA/QC", desc: "Outputs reviewed against the agreed project specification." },
  { title: "Multi-Format Delivery", desc: "GIS, CAD, raster and point-cloud formats according to client requirements." },
  { title: "Defined Production Workflow", desc: "Inputs, samples, review stages and final delivery agreed before full-scale production." },
];

const processingServices = ["Orthophoto and orthomosaic generation","Dense point-cloud processing","DEM, DTM and DSM preparation","Contour generation","LiDAR point-cloud classification","2D and 3D feature extraction","Topographic and asset mapping","GIS and CAD conversion","Mining volumetric analysis","QA/QC and final delivery-package preparation"];

const workflowSteps = [
  { num: "01", title: "Requirement Review", desc: "We understand the project location, area or corridor, objective, available data, coordinate system, expected outputs, acceptance requirements and timeline." },
  { num: "02", title: "Survey or Processing Plan", desc: "Based on the project requirement, we define the acquisition or data-processing approach, required inputs, production stages and review checkpoints." },
  { num: "03", title: "Data Acquisition or Input Review", desc: "For field assignments, project data is acquired according to the approved survey methodology. For processing-only assignments, the supplied imagery, point cloud and associated project information are reviewed before production begins." },
  { num: "04", title: "Photogrammetry, LiDAR & GIS Processing", desc: "The workflow may include image processing, point-cloud production or classification, terrain generation, feature extraction, mapping and spatial-data preparation." },
  { num: "05", title: "QA/QC & Client Review", desc: "Outputs are reviewed against relevant requirements such as projection, coverage, geometry, attributes, completeness, file structure and agreed project specifications." },
  { num: "06", title: "Final Delivery", desc: "Comments from agreed review stages are incorporated before preparation of the final GIS, CAD, raster, point-cloud, terrain or reporting package." },
];

const industries = [
  { title: "Infrastructure & Transportation", desc: "Topographic mapping, railway and road corridors, terrain information, construction areas and engineering-support mapping." },
  { title: "Mining & Natural Resources", desc: "Mine features, terrain products, haul roads, stockpiles, surface analysis and operational mapping." },
  { title: "Utilities & Pipelines", desc: "Pipeline corridors, utility alignments, associated infrastructure and GIS asset mapping." },
  { title: "Architecture & Planning", desc: "Existing-condition mapping, topography, land information, planning base maps and site documentation." },
  { title: "Government & Urban Projects", desc: "Base mapping, land-use information, public assets and project-specific spatial datasets." },
  { title: "Drone & Survey Companies", desc: "Back-office photogrammetry, LiDAR processing, terrain models, feature extraction and final GIS/CAD production." },
];

const whyPoints = [
  { title: "GIS-Led Project Understanding", desc: "Drone data is reviewed in the context of the mapping, terrain, GIS or CAD output the project actually requires." },
  { title: "Survey-to-Delivery Workflow", desc: "Assignments can cover survey support, drone-data processing, point clouds, terrain products, feature extraction and final GIS/CAD preparation." },
  { title: "Processing-Only Support", desc: "Clients who already have drone or LiDAR data can engage us without repeating the field-survey stage." },
  { title: "Multi-Source Data Handling", desc: "Drone imagery can be used alongside LiDAR, survey control, GIS databases, satellite imagery and engineering drawings where the project requires it." },
  { title: "Structured QA/QC", desc: "Review checks can cover projection, geometry, topology, attributes, completeness, file structure and compliance with agreed specifications." },
  { title: "Project-Specific Deliverables", desc: "We prepare output packages according to the formats and data structure required by the client project environment." },
];

const faqs = [
  { q: "What information should I share to receive a drone survey quotation?", a: "Share the project location, area or corridor length, project objective, required coordinate system, required outputs, available survey specifications and expected timeline. If you already have drone data, also share information about the imagery, point cloud and available control." },
  { q: "Can Techmapperz process drone images captured by another company?", a: "Yes. Techmapperz can review client-supplied drone imagery and available survey information for photogrammetric processing. The recommended workflow depends on image quality, overlap, positioning information, control data and required outputs." },
  { q: "What outputs can be prepared from drone imagery?", a: "Depending on the available data and project requirement, outputs may include orthophotos, orthomosaics, photogrammetric point clouds, DSM, terrain-related products, contours, 3D surfaces and extracted GIS or CAD features." },
  { q: "Can you process LAS or LAZ point-cloud data?", a: "Yes. Point-cloud processing can include data review, cleaning, classification, ground extraction, feature extraction, terrain preparation and GIS/CAD conversion according to the project specification." },
  { q: "What is the difference between DEM, DTM and DSM?", a: "A DSM represents the visible surface, including buildings, vegetation and other above-ground features. A DTM is intended to represent the underlying terrain or ground surface. DEM is a broader term for digitally represented elevation data and its exact use can vary between workflows and organisations." },
  { q: "Can you generate contour maps from drone survey data?", a: "Yes, where the elevation data is suitable for the intended application. The contour interval and final format should be agreed according to the terrain, source-data quality and project requirement." },
  { q: "Can drone data be processed without GCPs?", a: "It may be possible to generate mapped outputs using positioning information recorded with the imagery, but the achievable positional quality and suitability for survey or engineering use depend on the capture method, onboard positioning, available control and project requirements. Techmapperz reviews the available data before making an accuracy commitment." },
  { q: "Do you provide mining volumetric calculations?", a: "Yes. Stockpile volume, surface comparison and cut-and-fill calculations can be prepared where suitable surface or point-cloud information is available." },
  { q: "Can drone outputs be delivered in both GIS and CAD formats?", a: "Yes. Depending on the assignment, final outputs can be structured for GIS, CAD, raster or point-cloud workflows according to the agreed project requirements." },
  { q: "Can Techmapperz support another drone company as a processing subcontractor?", a: "Yes. Drone survey and survey companies can engage Techmapperz for photogrammetry, point-cloud processing, terrain generation, feature extraction, GIS/CAD production, QA/QC and final-delivery preparation." },
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

export default function DroneServicePageClient() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start bg-cover bg-center text-white pt-32 sm:pt-40 pb-16 sm:pb-28" style={{ backgroundImage: 'url("/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp")' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">DRONE SURVEY & MAPPING SERVICES</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl">Turn Aerial Survey Data into Usable Maps, Models and Spatial Information</h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">Techmapperz supports infrastructure, mining, utility, land-development, architecture and planning projects with drone survey, aerial mapping and geospatial data-processing services.</p>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">From field-acquired imagery and LiDAR data to orthomosaics, point clouds, terrain models, contours and GIS/CAD mapping, we prepare outputs around the actual requirements of your project.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto"><button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8]/30 text-white font-semibold text-[15px] hover:bg-[#1656b8] transition-all duration-300">Discuss Your Drone Survey</button></Link>
            <Link href="/service/droneservice/dronedataprocessing" className="w-full sm:w-auto"><button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">Already Have Drone Data?</button></Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">FROM DATA CAPTURE TO FINAL MAPPING</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c2e60] leading-tight mb-6">Capturing aerial images is only one part of a drone mapping assignment.</h2>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">The value comes from converting the captured data into information that engineers, planners, surveyors and GIS teams can actually work with.</p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">At the beginning of an assignment, we review the project boundary, terrain, available control information, coordinate system, expected deliverables, required level of detail and intended use of the data.</p>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">Based on those requirements, the workflow may include drone-data acquisition, photogrammetric processing, LiDAR point-cloud processing, terrain modelling, feature extraction, spatial analysis and GIS or CAD preparation.</p>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
                <p className="text-[#0c2e60] font-bold text-base mb-2">Already completed the drone survey?</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">You do not need to repeat the field work simply to engage Techmapperz. We can also work with client-supplied drone imagery, LAS/LAZ point clouds and available survey-control information as a dedicated data-processing partner.</p>
                <Link href="/service/droneservice/dronedataprocessing" className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit">Explore Drone Data Processing &#8594;</Link>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp" alt="Drone Data Processing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* DRONE SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">WHAT WE CAN SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">Drone Mapping Services for Different Project Stages</h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {droneServices.map((svc, i) => (
              <div key={svc.number} className={`py-10 md:py-16 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-10 lg:gap-16 items-start`}>
                <div className="relative w-full lg:w-[42%] h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image src={svc.image} alt={svc.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[#6ac045] text-xs font-bold uppercase tracking-widest mb-2">{svc.number}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">{svc.title}</h3>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">{svc.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {svc.items.map((item, j) => (<li key={j} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-[#6ac045] font-bold mt-0.5 flex-shrink-0">&#10003;</span>{item}</li>))}
                  </ul>
                  <Link href={svc.link} className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit">{svc.cta} &#8594;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSING PARTNERSHIP */}
      <DronePartnership />

      {/* WHAT WE NEED */}
      <section className="py-16 md:py-24 bg-[#0c2e60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">STARTING A DRONE PROJECT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Share the Information That Defines the Survey</h2>
            <p className="text-blue-200 text-sm md:text-[15px] mt-3 max-w-2xl mx-auto">The required inputs vary according to whether Techmapperz is supporting field survey, drone-data processing or a complete mapping assignment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { heading: "For a new survey", items: ["Project location","Project boundary or corridor alignment","Approximate survey area or length","Project objective","Required coordinate reference system","Required outputs","Required level of detail or accuracy specification","Project timeline","Site-access information","Any client survey specification"] },
              { heading: "For existing drone imagery", items: ["Raw drone photographs","Flight information, where available","Image metadata","Project boundary","Existing control information","Required coordinate system","Sample deliverable, if available","Expected outputs"] },
              { heading: "For LiDAR processing", items: ["LAS or LAZ files","Classified or unclassified status","Coordinate reference information","Available control information","Required classification or feature specification","Required terrain and mapping products"] },
            ].map((col, i) => (
              <div key={i} className="bg-white/10 rounded-2xl border border-white/10 p-6 shadow-sm">
                <p className="text-white font-bold text-base mb-4 border-b border-white/20 pb-3">{col.heading}</p>
                <ul className="flex flex-col gap-2.5">{col.items.map((item, j) => (<li key={j} className="flex items-start gap-2 text-blue-100 text-sm"><span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-block w-full sm:w-auto"><button className="w-full sm:w-auto py-[12px] px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">Share Your Project Inputs &#8594;</button></Link>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">HOW WE WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">A Defined Workflow from Requirement Review to Final Delivery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#0c2e60] flex items-center justify-center text-white font-bold text-sm mb-4">{step.num}</div>
                <h3 className="text-[#0c2e60] font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">WHERE DRONE MAPPING IS USED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">Supporting Survey and Mapping Requirements Across Different Sectors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (<div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"><div className="w-2 h-2 rounded-full bg-[#6ac045] mb-4" /><h3 className="text-[#0c2e60] font-bold text-base mb-2">{ind.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-16 md:py-24 bg-[#0c2e60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">SELECTED DRONE & GEOSPATIAL EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Show the Work, Not Just the Service List</h2>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-[45%] h-[240px] lg:h-auto flex-shrink-0">
              <Image src="/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" alt="Railway Corridor Mapping" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
              <p className="text-[#6ac045] text-xs font-bold uppercase tracking-widest">Railway Corridor Mapping</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">173 km Drone LiDAR & Topographic Mapping Assignment</h3>
              <p className="text-blue-200 text-sm md:text-[15px] leading-relaxed">Published project experience covers a 173 km railway corridor with an approximately 100 m survey width, integrating Drone LiDAR, DGPS control, point-cloud processing, terrain products, contours and GIS/CAD outputs.</p>
              <div className="flex flex-wrap gap-2 mt-2">{["173 km railway corridor","Drone LiDAR + DGPS","Point Cloud","DEM","DSM","Contours","Cross Sections","GIS/CAD"].map((tag, i) => (<span key={i} className="text-xs font-medium bg-white/10 border border-white/15 text-blue-100 px-3 py-1 rounded-full">{tag}</span>))}</div>
              <Link href="/portfolios" className="mt-2 w-full sm:w-fit"><button className="w-full sm:w-auto py-3 px-7 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300">View Railway Mapping Project &#8594;</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TECHMAPPERZ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">WHY TECHMAPPERZ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">Geospatial Understanding Beyond the Drone Flight</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((pt, i) => (<div key={i} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"><div className="w-8 h-8 rounded-full bg-[#0c2e60] flex items-center justify-center mb-4"><div className="w-2 h-2 rounded-full bg-[#6ac045]" /></div><h3 className="text-[#0c2e60] font-bold text-base mb-2">{pt.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{pt.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">COMMON QUESTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-gray-200">{faqs.map((faq, i) => (<FaqItem key={i} faq={faq} defaultOpen={i === 0} />))}</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-gradient-to-br from-[#0b2341] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[26px] p-8 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] block">LET'S REVIEW YOUR PROJECT</span>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-white tracking-tight leading-snug">Planning a Drone Survey or Already Have the Data?</h2>
              <p className="text-blue-100 text-sm md:text-[15px] leading-relaxed">Whether you need field-survey support or already have drone imagery or LiDAR data waiting to be processed, share your project requirement with us. Send the project location, approximate area or corridor length, available source data, coordinate system, expected outputs and timeline.</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10 shrink-0 w-full lg:w-auto">
              <Link href="/contact" className="w-full"><button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md transition-all duration-200 whitespace-nowrap w-full">Discuss Your Drone Project &#8594;</button></Link>
              <Link href="/contact" className="w-full"><button className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-[#0c2e60] bg-white hover:bg-gray-50 transition-all duration-200 whitespace-nowrap w-full">Send Your Scope of Work</button></Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
            Drone Survey &middot; Drone Data Processing &middot; LiDAR &middot; Point Cloud &middot; DEM/DTM &middot; Contours &middot; GIS/CAD Mapping
          </div>
        </div>
      </section>
    </div>
  );
}

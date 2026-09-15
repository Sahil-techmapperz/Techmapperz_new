"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DronePartnership from "../../_Components/DronePartnership";
import { 
  Route, 
  Mountain, 
  Zap, 
  Compass, 
  Landmark, 
  Sprout, 
  Map, 
  Workflow, 
  Database, 
  Layers, 
  ShieldCheck, 
  FileCheck 
} from "lucide-react";

const droneServices = [
  { 
    number: "01", 
    title: "Drone Survey & Topographic Mapping", 
    description: "Techmapperz supports drone survey based topographic and base mapping for infrastructure, mining, land-development, corridor and planning assignments. Depending on the project specification and available survey control, the captured data can be prepared into terrain information and project-specific GIS or CAD mapping outputs.", 
    items: [
      "Topographic Survey & Mapping",
      "Land Survey & Site Mapping",
      "Road & Railway Corridor Mapping",
      "Pipeline & Utility Mapping",
      "Mining & Quarry Mapping",
      "Construction & Development Mapping"
    ], 
    cta: "Explore Drone Survey & Mapping", 
    link: "/service/droneservice/dronesurveyandmapping", 
    image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" 
  },
  { 
    number: "02", 
    title: "Drone Data Processing & Photogrammetry", 
    description: "Already have raw drone imagery? Techmapperz can review and process client-supplied images together with available flight metadata, positioning and survey-control information. Before production begins, we check image coverage, overlap, metadata, coordinate reference system, available control and required delivery formats.", 
    items: [
      "Photogrammetric Image Processing",
      "Orthophoto & Orthomosaic Generation",
      "Dense Point Cloud Generation",
      "DEM, DTM & DSM Preparation",
      "Contour & 3D Mesh Generation",
      "GIS/CAD Feature Extraction"
    ], 
    cta: "Explore Drone Data Processing", 
    link: "/service/drone-data-processing", 
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp" 
  },
  { 
    number: "03", 
    title: "Drone LiDAR Survey & Point Cloud Processing", 
    description: "Techmapperz supports drone-based LiDAR surveys and point cloud processing for railway, road, pipeline, utility, mining, plantation and terrain-mapping assignments. Depending on the project scope, our support can include survey planning, field data acquisition, integration of available DGPS or ground-control information, and processing of captured or client-supplied LAS/LAZ data.", 
    items: [
      "Drone LiDAR Survey & Data Acquisition",
      "Survey Control & Coordinate Integration",
      "Point Cloud Cleaning & Classification",
      "Ground Classification & Terrain Extraction",
      "DEM, DTM, Contours & Cross-Sections",
      "2D/3D GIS/CAD Feature Extraction"
    ], 
    cta: "Explore LiDAR & Point-Cloud Services", 
    link: "/service/lidar", 
    image: "/gis_images/Gas Pipeline.webp" 
  },
  { 
    number: "04", 
    title: "Terrain, Corridor & Volumetric Mapping", 
    description: "Some projects require more than a conventional topographic base map. Linear infrastructure needs consistent mapping along an alignment, while mining and construction sites may require terrain surfaces, sections and volume measurements. Techmapperz prepares these outputs from suitable drone imagery, LiDAR point clouds and available survey-control information, according to the project specification and required GIS or CAD format.", 
    items: [
      "DEM, DTM & Contour Mapping",
      "Slope & Terrain-Surface Analysis",
      "Road, Railway & Pipeline Corridor Mapping",
      "Longitudinal Profiles & Cross-Sections",
      "Stockpile & Earthwork Volume Calculation",
      "Cut-and-Fill & Surface Comparison"
    ], 
    cta: "Discuss a Terrain Mapping Requirement", 
    link: "/contact", 
    image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" 
  },
];

const workflowSteps = [
  { num: "01", title: "Requirement Review", desc: "We confirm the project area, purpose, deliverables, specifications and timeline." },
  { num: "02", title: "Survey or Processing Plan", desc: "We define the survey or processing method, required inputs and review stages." },
  { num: "03", title: "Data Acquisition or Input Review", desc: "We collect field data or review supplied imagery, point clouds and control information." },
  { num: "04", title: "Photogrammetry, LiDAR & GIS Processing", desc: "We process imagery or LiDAR and prepare the agreed terrain, GIS and CAD outputs." },
  { num: "05", title: "QA/QC & Client Review", desc: "We check projection, coverage, accuracy, completeness and file structure." },
  { num: "06", title: "Final Delivery", desc: "We address agreed comments and submit the approved files and report." },
];

const industries = [
  { 
    title: "Infrastructure & Transportation", 
    desc: "Road and railway corridor surveys, topographic mapping, terrain models and construction-site documentation.",
    icon: Route
  },
  { 
    title: "Mining & Natural Resources", 
    desc: "Mine and quarry mapping, haul-road surveys, terrain models, stockpile volumes and surface comparisons.",
    icon: Mountain
  },
  { 
    title: "Utilities & Pipelines", 
    desc: "Pipeline and power-line corridor mapping, alignment surveys, terrain information and utility-asset mapping.",
    icon: Zap
  },
  { 
    title: "Architecture & Land Development", 
    desc: "Existing-site surveys, contours, 3D terrain models and planning base maps for design and development.",
    icon: Compass
  },
  { 
    title: "Government & Urban Development", 
    desc: "Base maps, land-use surveys, public-asset mapping and project-specific spatial datasets for urban programmes.",
    icon: Landmark
  },
  { 
    title: "Agriculture & Plantations", 
    desc: "Farm and plantation mapping, field boundaries, crop-area measurement, terrain analysis and drainage planning.",
    icon: Sprout
  },
];

const projectInputs = [
  {
    heading: "For a New Survey",
    items: [
      "Project location and boundary",
      "Approximate area or corridor length",
      "Required outputs and accuracy or scale",
      "Timeline and site-access details"
    ]
  },
  {
    heading: "For Drone-Image Processing",
    items: [
      "Raw images and available flight metadata",
      "Project boundary and control/GCP information",
      "Coordinate system and required outputs",
      "Reference deliverable, if available"
    ]
  },
  {
    heading: "For LiDAR Processing",
    items: [
      "LAS/LAZ files and classification status",
      "Boundary, coordinate system and control data",
      "Required classes or features",
      "Terrain products and output formats"
    ]
  }
];

const whyPoints = [
  { 
    title: "GIS-Led Project Understanding", 
    desc: "Drone data is reviewed in the context of the mapping, terrain, GIS or CAD output the project actually requires.",
    icon: Map
  },
  { 
    title: "Survey-to-Delivery Workflow", 
    desc: "Assignments can cover survey support, drone-data processing, point clouds, terrain products, feature extraction and final GIS/CAD preparation.",
    icon: Workflow
  },
  { 
    title: "Processing-Only Support", 
    desc: "Clients who already have drone or LiDAR data can engage us without repeating the field-survey stage.",
    icon: Database
  },
  { 
    title: "Multi-Source Data Handling", 
    desc: "Drone imagery can be used alongside LiDAR, survey control, GIS databases, satellite imagery and engineering drawings where the project requires it.",
    icon: Layers
  },
  { 
    title: "Structured QA/QC", 
    desc: "Review checks can cover projection, geometry, topology, attributes, completeness, file structure and compliance with agreed specifications.",
    icon: ShieldCheck
  },
  { 
    title: "Project-Specific Deliverables", 
    desc: "We prepare output packages according to the formats and data structure required by the client project environment.",
    icon: FileCheck
  },
];

const faqs = [
  { q: "What information should I share to receive a drone survey quotation?", a: "Share the project location, area or corridor length, project objective, required coordinate system, required outputs, available survey specifications and expected timeline. If you already have drone data, also share information about the imagery, point cloud and available control." },
  { q: "Can Techmapperz process drone images captured by another company?", a: "Yes. Techmapperz can review client-supplied drone imagery and available survey information for photogrammetric processing. The recommended workflow depends on image quality, overlap, positioning information, control data and required outputs." },
  { q: "What outputs can be prepared from drone imagery?", a: "Depending on the available data and project requirement, outputs may include orthophotos, orthomosaics, photogrammetric point clouds, DSM, terrain-related products, contours, 3D surfaces and extracted GIS or CAD features." },
  { q: "Can you process LAS or LAZ point-cloud data?", a: "Yes. Point-cloud processing can include data review, cleaning, classification, ground extraction, feature extraction, terrain preparation and GIS/CAD conversion according to the project specification." },
  { q: "Can drone data be processed without GCPs?", a: "It may be possible to generate mapped outputs using positioning information recorded with the imagery, but the achievable positional quality and suitability for survey or engineering use depend on the capture method, onboard positioning, available control and project requirements. Techmapperz reviews the available data before making an accuracy commitment." },
  { q: "Can drone outputs be delivered in both GIS and CAD formats?", a: "Yes. Depending on the assignment, final outputs can be structured for GIS, CAD, raster or point-cloud workflows according to the agreed project requirements." },
];

const FaqItem = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#DDE3EA] last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-start justify-between gap-4 group">
        <span className="text-[#0C2E60] font-bold text-[16px] md:text-[18px] leading-snug group-hover:text-[#1656B8] transition-colors">{faq.q}</span>
        <span className={`text-[#1656B8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] pb-5">{faq.a}</p>}
    </div>
  );
};

export default function DroneServicePageClient() {
  return (
    <div className="bg-white text-[#17202A]">
      {/* HERO */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden">
        <Image
          src="/Drone_Service/Drone_Survey&Mapping_banner.png"
          alt="Drone Survey & Mapping Services Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">DRONE SURVEY & MAPPING SERVICES</span>
          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-3xl">Turn Aerial Survey Data into Usable Maps, Models and Spatial Information</h1>
          <p className="text-[#E8F5F3] text-[16px] md:text-[18px] max-w-2xl leading-[1.65]">Techmapperz supports infrastructure, mining, utility, land-development and planning assignments with drone survey, UAV LiDAR and geospatial data processing. We prepare orthomosaics, point clouds, terrain models, contours and project-specific GIS/CAD deliverables from field-acquired or client-supplied data.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Discuss Your Drone Survey &rarr;
              </button>
            </Link>
            <Link href="/service/drone-data-processing" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full border border-white/60 transition-all duration-300 min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Already Have Drone Data?
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 block">FROM DATA CAPTURE TO FINAL MAPPING</span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight mb-4">Drone Survey Data Is Only the Starting Point</h2>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65] mb-4">The value of a drone survey comes from converting captured data into maps, models and spatial information that engineers, planners, surveyors and GIS teams can use.</p>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65] mb-4">Before starting an assignment, we review the project boundary, terrain, coordinate reference system, available survey control, required deliverables and intended use of the data.</p>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65] mb-6">Based on the project requirements, the workflow may include drone-data acquisition, photogrammetric processing, LiDAR point-cloud processing, terrain modelling, feature extraction and final GIS or CAD preparation.</p>
              <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 shadow-sm mb-2">
                <p className="text-[#0C2E60] font-bold text-[18px] md:text-[20px] mb-2">Already have drone or LiDAR data?</p>
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] mb-4">Share your raw drone imagery, available survey-control information and required outputs. Techmapperz can review the supplied data and prepare the agreed photogrammetry, terrain, GIS or CAD deliverables, without repeating the field survey.</p>
                <Link href="/service/drone-data-processing" className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-fit">Explore Drone Data Processing &rarr;</Link>
              </div>
            </div>
            <div className="relative h-[280px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#DDE3EA]">
              <Image src="/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp" alt="Drone Data Processing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* DRONE SERVICES */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">WHAT WE CAN SUPPORT</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">Drone Survey, Mapping and Data Processing Services</h2>
          </div>
          <div className="flex flex-col divide-y divide-[#DDE3EA]">
            {droneServices.map((svc, i) => (
              <div key={svc.number} className={`py-8 md:py-12 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-10 lg:gap-16 items-start`}>
                <div className="relative w-full lg:w-[42%] h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image src={svc.image} alt={svc.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[#0F766E] text-[13px] font-bold uppercase tracking-widest mb-2">{svc.number}</span>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#0C2E60] mb-4 leading-[1.25]">{svc.title}</h3>
                  <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] mb-6">{svc.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#17202A] text-[15px]">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.link} className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-fit">{svc.cta} &rarr;</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Banner after Services */}
          <div className="mt-10 bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">CONSULTING & ADVISORY</span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white leading-[1.25]">Need Help Defining Your Drone Mapping Requirement?</h3>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] max-w-2xl">Share your project location, survey area, required outputs and timeline.</p>
            </div>
            <Link href="/contact" className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white border border-white/20 font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full md:w-auto">
              Discuss Your Drone Project &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">HOW WE WORK</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">From Project Brief to Final Delivery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#0C2E60] flex items-center justify-center text-white font-bold text-sm mb-4">{step.num}</div>
                <h3 className="text-[#0C2E60] font-bold text-[18px] md:text-[20px] mb-2">{step.title}</h3>
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSING PARTNERSHIP */}
      <DronePartnership />

      {/* PROJECT INPUTS */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">PROJECT INPUTS</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">What We Need to Get Started</h2>
            <p className="text-[#E8F5F3] text-[16px] md:text-[18px] mt-2 max-w-2xl mx-auto leading-[1.65]">Share the information available with you. We will review it and confirm any missing inputs before preparing the workflow and quotation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectInputs.map((col, i) => (
              <div key={i} className="bg-white/10 rounded-2xl border border-white/10 p-6 sm:p-7 shadow-sm">
                <p className="text-white font-bold text-[18px] mb-4 border-b border-white/20 pb-3">{col.heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#E8F5F3] text-[15px]">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom Note & CTA Strip */}
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15 shadow-md">
            <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] text-center md:text-left">
              Don’t have every input? Send the available information, and our team will identify any gaps before work begins.
            </p>
            <Link href="/contact" className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-[#1656B8] hover:bg-white hover:text-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-7 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full md:w-auto">
              Share Your Project Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SUPPORT */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">INDUSTRIES WE SUPPORT</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">Drone Survey & Mapping Across Key Industries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F4F8] border border-[#DDE3EA] flex items-center justify-center mb-4 text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[#0C2E60] font-bold text-[18px] md:text-[20px] mb-2 group-hover:text-[#1656B8] transition-colors">{ind.title}</h3>
                  <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">SELECTED PROJECT EXPERIENCE</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">Drone LiDAR Survey & Mapping for a 173 km Railway Corridor</h2>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="relative w-full lg:w-[45%] h-[280px] lg:h-auto flex-shrink-0">
              <Image src="/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp" alt="Railway Corridor Mapping" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-5">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">Railway Corridor Mapping</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.2]">173 km Drone LiDAR & Topographic Mapping Assignment</h3>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">Techmapperz carried out a Drone LiDAR and topographic survey along a 173 km railway corridor, covering an approximately 100 m-wide survey band through rural, semi-urban and agricultural areas.</p>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">The work extended beyond aerial data capture. LiDAR point clouds and synchronized RGB imagery were processed to prepare terrain models, orthomosaics, contours and CAD/GIS topographical maps. The terrain information was further used to produce cross-sections, longitudinal sections and gradient drawings required for railway corridor planning and engineering use.</p>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider mb-3">Key Project Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[#E8F5F3] text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    Drone LiDAR point-cloud data
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    DTM and DSM preparation
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    Orthomosaic generation
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    Minor and major contours at 1 m and 5 m intervals
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    CAD/GIS topographical maps at 1:5,000 scale
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    Cross-sections, L-sections and gradient drawings
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/portfolios" className="inline-block w-full sm:w-fit">
                  <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white border border-white/20 font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-auto">
                    Explore the 173 km Railway Project &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TECHMAPPERZ */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">WHY TECHMAPPERZ</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">Geospatial Understanding Beyond the Drone Flight</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center mb-4 text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[#0C2E60] font-bold text-[18px] md:text-[20px] mb-2 group-hover:text-[#1656B8] transition-colors">{pt.title}</h3>
                  <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">COMMON QUESTIONS</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-8 shadow-sm divide-y divide-[#DDE3EA]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                START YOUR DRONE PROJECT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Planning a Drone Survey or Have Drone Data to Process?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share whatever information is available&mdash;project location, approximate area or corridor length, existing imagery or LAS/LAZ files, required outputs and timeline. If the scope is still being prepared, send what you have and we’ll help confirm the remaining inputs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Drone Requirement &rarr;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Share Flight / Point Cloud Data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

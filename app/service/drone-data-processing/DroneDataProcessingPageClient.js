"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import {
  FiChevronDown,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiMap,
  FiActivity,
  FiSliders,
  FiBox,
  FiFolder,
  FiCpu,
  FiCompass,
  FiShield,
  FiFileText,
  FiUploadCloud,
  FiMaximize2,
  FiTruck,
  FiTrendingUp,
  FiZap,
  FiGrid
} from "react-icons/fi";
import { FaTrain, FaIndustry, FaTree } from "react-icons/fa";

const FaqItem = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#DDE3EA] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="text-[#0C2E60] font-bold text-[16px] md:text-[18px] leading-snug group-hover:text-[#1656B8] transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-[#1656B8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] pb-5">
          {faq.a}
        </p>
      )}
    </div>
  );
};

export default function DroneDataProcessingPageClient() {

  const coreServices = [
    {
      id: "orthomosaic",
      icon: <FiGrid className="w-6 h-6" />,
      title: "Orthomosaic Production",
      desc: "Georeferenced orthomosaics prepared in the agreed coordinate system, resolution and tiling plan. Coverage gaps, visible distortion and seam issues are reviewed and corrected where the source imagery allows.",
      features: [
        "True-scale orthophoto mosaics",
        "Coordinate reference system alignment",
        "Seamline editing & color balancing",
        "Tiled GeoTIFF delivery"
      ]
    },
    {
      id: "lidar-processing",
      icon: <FiActivity className="w-6 h-6" />,
      title: "LiDAR Point-Cloud Processing",
      desc: "LAS/LAZ data review, noise identification, cleaning, classification and ground/non-ground separation. Required classes and feature groups are agreed before production begins.",
      features: [
        "LAS / LAZ point cloud cleaning",
        "Ground & vegetation classification",
        "Powerline & building separation",
        "High-density filtering"
      ]
    },
    {
      id: "terrain-elevation",
      icon: <FiSliders className="w-6 h-6" />,
      title: "Terrain & Elevation Products",
      desc: "DTM, DSM, DEM, contours, slope and surface products prepared from suitable classified point clouds. Cut-fill or stockpile volumes can be calculated where the required boundaries and reference surfaces are available.",
      features: [
        "Digital Terrain Model (DTM)",
        "Digital Surface Model (DSM)",
        "Topographic contour generation",
        "Stockpile & cut-fill volume calculation"
      ]
    },
    {
      id: "corridor-drawings",
      icon: <FiCompass className="w-6 h-6" />,
      title: "Profiles, Sections & Corridor Drawings",
      desc: "Longitudinal profiles, cross-sections, L-sections and gradient drawings for railway, road, pipeline and other corridor assignments, prepared at agreed intervals and drawing standards.",
      features: [
        "Longitudinal profiles (L-sections)",
        "Cross-sections at set intervals",
        "Gradient & slope drawings",
        "Corridor alignment mapping"
      ]
    },
    {
      id: "photogrammetric",
      icon: <FiBox className="w-6 h-6" />,
      title: "Photogrammetric Reconstruction",
      desc: "Image alignment, camera optimisation and dense reconstruction from suitable overlapping drone photographs. Depending on the project, outputs can include an aligned image block, dense RGB point cloud and 3D surface or mesh.",
      features: [
        "Multi-ray bundle block adjustment",
        "Dense RGB point clouds",
        "3D textured surface meshes",
        "Camera calibration & optimization"
      ]
    },
    {
      id: "feature-extraction",
      icon: <FiLayers className="w-6 h-6" />,
      title: "GIS/CAD Feature Extraction",
      desc: "Specified visible features—such as roads, railways, buildings, utilities, water bodies, mine features and land parcels—captured into structured GIS or CAD layers with the required attributes and layer organisation.",
      features: [
        "2D & 3D vector feature extraction",
        "Topographical base mapping",
        "Structured GIS attribute layers",
        "DWG, DXF, SHP, Geodatabase formats"
      ]
    }
  ];

  const deliverables = [
    {
      category: "Imagery & Raster Products",
      icon: <FiGrid className="w-5 h-5" />,
      items: [
        { num: "01", name: "Georeferenced orthomosaic" },
        { num: "02", name: "Tiled orthomosaic or area-wise GeoTIFF" },
        { num: "03", name: "Digital Surface Model (DSM)" },
        { num: "04", name: "Digital Terrain Model (DTM)" },
        { num: "05", name: "Digital Elevation Model (DEM)" },
        { num: "06", name: "Slope, elevation or surface-comparison raster" }
      ]
    },
    {
      category: "Point-Cloud & 3D Products",
      icon: <FiActivity className="w-5 h-5" />,
      items: [
        { num: "07", name: "Dense photogrammetric point cloud" },
        { num: "08", name: "Cleaned or classified LAS/LAZ point cloud" },
        { num: "09", name: "Ground and non-ground point classes" },
        { num: "10", name: "3D surface or textured mesh" },
        { num: "11", name: "Stockpile or cut-fill volume surfaces" }
      ]
    },
    {
      category: "GIS, CAD & Engineering Outputs",
      icon: <FiLayers className="w-5 h-5" />,
      items: [
        { num: "12", name: "Contours at the agreed interval" },
        { num: "13", name: "GIS feature layers and attribute data" },
        { num: "14", name: "CAD topographical maps" },
        { num: "15", name: "Longitudinal profiles and cross-sections" },
        { num: "16", name: "L-sections and gradient drawings" },
        { num: "17", name: "PDF drawings, layouts and processing/QC reports" }
      ]
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Data & Requirement Review",
      desc: "We check the project boundary, source files, metadata, control information, coordinate system, required outputs and available reference documents."
    },
    {
      step: "02",
      title: "Scope Confirmation",
      desc: "We confirm the processing stages, deliverables, format, data limitations, review checkpoints and production schedule before starting the full dataset."
    },
    {
      step: "03",
      title: "Processing & Production",
      desc: "Imagery or point-cloud processing is completed according to the approved workflow, followed by terrain preparation, feature extraction or engineering drawing production where required."
    },
    {
      step: "04",
      title: "QA/QC & Client Review",
      desc: "Outputs are checked for projection, coverage, classification, geometry, completeness, attributes and file structure. Agreed review files are then shared for comments."
    },
    {
      step: "05",
      title: "Final Delivery",
      desc: "Approved comments are addressed before the final GIS, CAD, raster, point-cloud, drawing and reporting package is organised and submitted."
    }
  ];

  const applications = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Infrastructure & Transportation",
      desc: "Orthomosaics, terrain models, contours, corridor profiles and mapping outputs for roads, railways, bridges and construction assignments."
    },
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Mining & Natural Resources",
      desc: "Mine-feature mapping, haul-road extraction, surface models, stockpile volumes, contours and change or surface-comparison outputs."
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Utilities & Pipelines",
      desc: "Corridor terrain products, alignment mapping, asset and feature extraction, profiles, cross-sections and GIS/CAD preparation."
    },
    {
      icon: <FiMaximize2 className="w-6 h-6" />,
      title: "Land Development & Planning",
      desc: "Existing-condition maps, terrain surfaces, contours, land and site features, planning base maps and CAD/GIS datasets."
    },
    {
      icon: <FaTree className="w-6 h-6" />,
      title: "Agriculture & Plantations",
      desc: "Farm or plantation boundaries, terrain and elevation products, drainage-related mapping and feature extraction from suitable imagery or LiDAR data."
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Drone & Survey Companies",
      desc: "Processing-only support for organisations that capture their own drone or LiDAR data but require additional production capacity or GIS/CAD deliverables."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FiFolder className="w-5 h-5" />,
      title: "Processing-Only Assignments",
      desc: "We can begin with imagery or point-cloud data already captured by your team, without repeating the field survey."
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Inputs Reviewed Before Commitment",
      desc: "Coverage, metadata, control, coordinate system and requested outputs are reviewed before the full production workflow is confirmed."
    },
    {
      icon: <FiCpu className="w-5 h-5" />,
      title: "Photogrammetry, LiDAR & GIS/CAD Together",
      desc: "The assignment can continue from raw imagery or point clouds through terrain preparation, feature extraction and final mapping outputs."
    },
    {
      icon: <FiFileText className="w-5 h-5" />,
      title: "Support for Engineering Drawings",
      desc: "Profiles, cross-sections, L-sections and gradient drawings can be included where the terrain data and project specification support them."
    },
    {
      icon: <FiCompass className="w-5 h-5" />,
      title: "Project-Specific Delivery",
      desc: "Coordinate system, layer structure, file formats, drawing standards and review stages are agreed for each assignment."
    },
    {
      icon: <FiCheckCircle className="w-5 h-5" />,
      title: "Structured QA/QC",
      desc: "Outputs are reviewed for projection, coverage, classification, geometry, attributes, completeness and final file organisation."
    }
  ];

  const faqs = [
    {
      q: "Can Techmapperz process data captured by another drone company?",
      a: "Yes. We regularly consider processing-only assignments using client-supplied drone imagery or LAS/LAZ point clouds. We first review sample files, available metadata, project boundary, control information and required outputs."
    },
    {
      q: "What information is required to start drone-image processing?",
      a: "The usual inputs are raw geotagged images, flight information where available, the project boundary, coordinate reference system, GCP/RTK/PPK or other control information, and the required deliverables. A sample output or specification is useful where a particular drawing or layer structure must be followed."
    },
    {
      q: "Can you process drone imagery without ground-control points?",
      a: "Processing may be possible when suitable geotags, RTK or PPK information is available. However, the absence of reliable control can limit absolute positional accuracy and the suitability of the outputs for survey or engineering use. We review the dataset before confirming what can be delivered."
    },
    {
      q: "What can be produced from drone photographs?",
      a: "Depending on image quality, overlap, coverage and control, outputs may include an orthomosaic, dense RGB point cloud, DSM, 3D surface or mesh and related mapping products. A bare-earth DTM and reliable contours depend on terrain visibility and the suitability of the point-cloud classification."
    },
    {
      q: "Can Techmapperz classify LiDAR point clouds?",
      a: "Yes. The scope can include noise cleaning, ground/non-ground separation and classification into agreed terrain, vegetation, structure or project-specific groups. Results depend on the original point density, coverage, noise and sensor data supplied."
    },
    {
      q: "Can you prepare contours, profiles and cross-sections?",
      a: "Yes, when a suitable terrain surface is available. Contour intervals, profile alignment, cross-section spacing, drawing scale and output format should be agreed before production."
    },
    {
      q: "How is the processing cost calculated?",
      a: "Cost depends on the project area or corridor length, image count, point-cloud volume, input condition, processing complexity, required classification, number of deliverables, GIS/CAD extraction scope, QA/QC requirements and delivery schedule. A sample review allows us to prepare a more reliable quotation."
    }
  ];

  return (
    <div className="bg-white text-[#17202A] selection:bg-[#1656B8]/10">
      <ScrollToTop />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden">
        <Image
          src="/drone-data-processing.png"
          alt="Drone Data Processing Services Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[55%] bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li className="text-white font-semibold" aria-current="page">Drone Data Processing</li>
            </ol>
          </nav>

          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
            DRONE DATA PROCESSING SERVICES IN INDIA
          </span>

          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-3xl text-white">
            Drone Data Processing Services for Mapping-Ready Deliverables
          </h1>

          <p className="text-[#E8F5F3] text-[16px] md:text-[18px] max-w-2xl leading-[1.65]">
            Already completed the flight? Techmapperz processes client-supplied drone imagery and LiDAR point clouds into mapping, terrain and engineering outputs for infrastructure, mining, utilities, land and planning projects. Before production begins, we review the available coverage, metadata, survey control, coordinate system and required deliverables.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Discuss Your Processing Requirement &rarr;
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full border border-white/60 transition-all duration-300 min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Share Sample Data
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION SECTION ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                FROM RAW DATA TO USABLE DELIVERABLES
              </span>

              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                The Flight Is Complete. The Mapping Work Is Not.
              </h2>

              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
                Drone photographs and point clouds become useful only after they are checked, processed and structured for their intended purpose. A visually good orthomosaic may be suitable for site reference, but engineering, terrain or GIS/CAD work can require additional control, classification and quality checks.
              </p>

              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
                Techmapperz supports processing-only assignments using data captured by clients, drone operators and project contractors. Depending on the available inputs and agreed scope, our work can continue from photogrammetry and LiDAR processing to terrain products, profiles, sections, feature extraction and final GIS/CAD preparation.
              </p>

              {/* Link back to Drone Survey & Mapping for clients needing field capture */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px] text-[#4B5563]">
                <span>Need complete drone data capture as well?</span>
                <Link
                  href="/service/drone-survey-mapping"
                  className="font-bold text-[#1656B8] hover:text-[#0C2E60] inline-flex items-center gap-1 hover:underline"
                >
                  Explore Drone Survey &amp; Mapping Services &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Pre-Processing Review & Reliability Check Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F6F8FB] border border-[#DDE3EA] rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0C2E60] text-white flex items-center justify-center font-bold shadow-md flex-shrink-0">
                    <FiShield className="w-6 h-6 text-[#5EEAD4]" />
                  </div>
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#0F766E] block">
                      Quality Assurance
                    </span>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60]">
                      Pre-Processing Review &amp; Reliability Check
                    </h3>
                  </div>
                </div>

                <p className="text-[15px] sm:text-[16px] text-[#4B5563] leading-[1.65]">
                  Before confirming the workflow, we review image overlap and sharpness, geotags or flight metadata, GCP/RTK/PPK information, coordinate reference system, point-cloud condition and expected outputs. If the source data has limitations, we explain what can be produced reliably before full processing begins.
                </p>

                {/* Key Verification Checks Grid */}
                <div className="pt-4 border-t border-[#DDE3EA] space-y-3">
                  <p className="text-xs font-bold text-[#0C2E60] uppercase tracking-wider">
                    What We Review First:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold text-[#17202A]">
                    <div className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-[#DDE3EA] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1656B8] flex-shrink-0" />
                      <span>Overlap &amp; Sharpness</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-[#DDE3EA] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1656B8] flex-shrink-0" />
                      <span>GCP &amp; RTK/PPK Data</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-[#DDE3EA] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1656B8] flex-shrink-0" />
                      <span>CRS &amp; Datum Alignment</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-[#DDE3EA] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1656B8] flex-shrink-0" />
                      <span>Point Cloud Density</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES: CORE PROCESSING CAPABILITIES ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10 relative">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              CORE PROCESSING CAPABILITIES
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Data Processing Services for Imagery, LiDAR and Mapping Outputs
            </h2>
            <p className="text-[#E8F5F3] text-[16px] md:text-[18px] leading-[1.65]">
              Not every dataset requires the same workflow. We select the processing stages after reviewing the source data, project specification and intended use of the final deliverables.
            </p>
          </div>

          {/* Service Cards Grid (H3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white text-[#17202A] rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F4F8] border border-[#DDE3EA] flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#DDE3EA]">
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4B5563]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Combined Service CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1656B8] hover:bg-white hover:text-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-300 min-h-[46px]"
            >
              Discuss Your Required Outputs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUTPUTS WE CAN PREPARE / DELIVERABLES ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              OUTPUTS WE CAN PREPARE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Deliverables Built Around the Project Requirement
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
              The final package is agreed after data review. Depending on the source data and scope, deliverables may include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((col, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#DDE3EA]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center text-[#1656B8]">
                      {col.icon}
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60]">
                      {col.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#17202A]">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSING WORKFLOW: HOW WE WORK ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              HOW WE WORK
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              A Practical Workflow from Data Review to Final Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:bg-white/15 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40 flex items-center justify-center font-bold text-sm mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#E8F5F3] text-[13px] sm:text-[14px] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS & CLIENT TYPES ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHERE WE CAN SUPPORT
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Drone Data Processing for Different Project Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F4F8] border border-[#DDE3EA] flex items-center justify-center mb-4 text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                  {app.icon}
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECT EXPERIENCE ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              SELECTED PROJECT EXPERIENCE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Drone LiDAR Survey &amp; Mapping for a 173 km Railway Corridor
            </h2>
          </div>

          {/* Featured Case Study Card */}
          <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="relative w-full lg:w-[45%] min-h-[280px] lg:min-h-[460px] flex-shrink-0">
              <Image
                src="/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp"
                alt="Railway Corridor Mapping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                RAILWAY CORRIDOR MAPPING
              </span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.2]">
                173 km Drone LiDAR &amp; Topographic Mapping Assignment
              </h3>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">
                Techmapperz carried out a Drone LiDAR and topographic survey along a 173 km railway corridor, covering an approximately 100 m-wide survey band through rural, semi-urban and agricultural areas.
              </p>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">
                The work extended beyond aerial data capture. LiDAR point clouds and synchronized RGB imagery were processed to prepare terrain models, orthomosaics, contours and CAD/GIS topographical maps. The terrain information was further used to produce cross-sections, longitudinal sections and gradient drawings required for railway corridor planning and engineering use.
              </p>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  KEY PROJECT DELIVERABLES
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[#E8F5F3] text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Drone LiDAR point-cloud data</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>DTM and DSM preparation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Orthomosaic generation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Minor and major contours at 1 m and 5 m intervals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>CAD/GIS topographical maps at 1:5,000 scale</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Cross-sections, L-sections and gradient drawings</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/portfolios/topographical_railway_survey"
                  className="inline-block w-full sm:w-fit"
                >
                  <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white border border-white/20 font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-auto">
                    Explore the 173 km Railway Project &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE TECHMAPPERZ ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Practical Support from Data Review to Final Mapping
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center mb-4 text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-8 shadow-sm divide-y divide-[#DDE3EA]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CALL TO ACTION BANNER ── */}
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
                Share Sample / Point Cloud Data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

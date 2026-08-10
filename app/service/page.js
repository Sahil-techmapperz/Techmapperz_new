"use client";
import Link from 'next/link';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import React, { useState } from 'react';
import Image from 'next/image';

const coreServices = [
  {
    number: "01",
    title: "GIS Mapping & Data Digitisation",
    image: "/gis_images/gis_mapping_digitisation.png",
    description:
      "We create and organise geospatial data from satellite imagery, drone imagery, scanned maps, survey information, engineering drawings and existing databases. Our GIS mapping services cover data digitisation, georeferencing, feature extraction, attribute creation, database development and conversion of legacy information into structured GIS datasets.",
    heading: "Services include",
    services: [
      "GIS data digitisation",
      "2D feature extraction",
      "Georeferencing and map rectification",
      "Topographic mapping",
      "Utility and network mapping",
      "Cadastral and parcel mapping",
      "Asset mapping",
      "Building and infrastructure mapping",
      "GIS database creation",
      "CAD-to-GIS conversion",
      "GIS-to-CAD conversion",
    ],
    link: "/service/gisservice",
  },
  {
    number: "02",
    title: "Drone Survey & Mapping",
    image: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp",
    description:
      "Drone-based mapping provides detailed spatial information for infrastructure, mining, land, construction, utility and planning assignments. Techmapperz supports drone survey and mapping workflows from project-area assessment and survey-data review through photogrammetric processing, terrain generation, feature extraction and GIS/CAD delivery. The methodology is defined according to the project area, terrain, available survey control, source-data characteristics, required accuracy and intended application.",
    heading: "Services include",
    services: [
      "Topographic mapping",
      "Railway and highway corridor mapping",
      "Mining surveys",
      "Land and boundary mapping",
      "Construction progress mapping",
      "Infrastructure surveys",
      "Utility and asset mapping",
      "Urban and regional planning",
      "Pipeline corridor mapping",
    ],
    link: "/service/droneservice",
  },
  {
    number: "03",
    title: "Drone Data Processing & Photogrammetry",
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
    description:
      "Already have the drone images? Survey and drone companies do not always require another field team. If drone imagery has already been captured, Techmapperz can provide back-office photogrammetry and geospatial processing support. We review the available raw imagery, image coordinates, flight information, survey-control data and expected deliverables before confirming the processing methodology.",
    heading: "Services include",
    services: [
      "Raw drone image processing",
      "Image alignment and photogrammetry",
      "Orthophoto generation",
      "Orthomosaic preparation",
      "Dense point-cloud generation",
      "DEM and DSM generation",
      "DTM preparation where suitable source information is available",
      "Contour generation",
      "3D model preparation",
      "Feature extraction",
      "GIS and CAD output preparation",
    ],
    link: "/service/droneservice/dronedataprocessing",
  },
  {
    number: "04",
    title: "LiDAR Survey, Point Cloud & 3D Modelling",
    image: "/gis_images/Gas Pipeline.webp",
    description:
      "LiDAR provides detailed three-dimensional information that can support terrain analysis, corridor mapping, infrastructure planning, vegetation assessment and feature extraction. Techmapperz supports LiDAR survey projects and processes point-cloud datasets into classified, measurable and project-ready GIS, CAD and terrain products.",
    heading: "Services include",
    services: [
      "LAS/LAZ data processing",
      "Point-cloud cleaning",
      "Noise identification and removal",
      "Ground and non-ground classification",
      "Bare-earth terrain extraction",
      "2D and 3D feature extraction",
      "DEM, DTM and DSM preparation",
      "Contour generation",
      "Profiles and cross-sections",
      "Building and infrastructure extraction",
      "Point-cloud-to-CAD conversion",
      "Point-cloud-to-GIS conversion",
      "3D terrain and surface modelling",
    ],
    link: "/service/lidar",
  },
];

const digitalServices = [
  {
    number: "09",
    title: "Website Development",
    image: "/Photos/feature_4.webp",
    description:
      "We design and develop responsive business websites and web platforms that present services clearly, support enquiries and provide structured access to digital content.",
    heading: "Website Capabilities",
    services: [
      "Corporate websites",
      "Service-based websites",
      "Dynamic websites",
      "E-commerce websites",
      "Custom web applications",
      "Admin dashboards",
      "Database-driven platforms",
      "API integration",
      "Responsive front-end development",
      "Website maintenance and enhancements",
    ],
    link: "/service/it/webdevelopment",
  },
  {
    number: "10",
    title: "Mobile App Development",
    image: "/Photos/feature_3.webp",
    description:
      "Techmapperz develops mobile applications for organisations that require field, customer, operational or business workflows on smartphones and tablets.",
    heading: "Capabilities",
    services: [
      "Android applications",
      "iOS applications",
      "Cross-platform applications",
      "Business applications",
      "Field applications",
      "Customer-facing applications",
      "API and database integration",
      "Dashboard integration",
      "Maintenance and feature enhancement",
    ],
    link: "/service/it",
  },
];

const faqs = [
  {
    q: "What GIS mapping services does Techmapperz provide?",
    a: "Techmapperz provides GIS data digitisation, topographic mapping, utility mapping, cadastral mapping, asset mapping, feature extraction, land-use mapping, georeferencing, CAD/GIS conversion, spatial analysis, geodatabase development and related geospatial production services.",
  },
  {
    q: "Can Techmapperz process drone images captured by another survey company?",
    a: "Yes. We can work with client-supplied or third-party raw drone imagery. Before processing, we review image quality, overlap, positioning information, available survey control and required outputs to determine a suitable workflow.",
  },
  {
    q: "What can be generated from raw drone images?",
    a: "Depending on the imagery, positioning information, survey control and project requirements, outputs may include orthophotos, orthomosaics, dense point clouds, DEM, DSM, terrain products, contours, 3D models and GIS or CAD features.",
  },
  {
    q: "Do you provide LiDAR point-cloud processing?",
    a: "Yes. Services can include LAS/LAZ processing, classification, ground extraction, noise removal, feature extraction, terrain generation, contours and conversion of point-cloud information into GIS or CAD outputs.",
  },
  {
    q: "Can you prepare contour maps from drone or LiDAR data?",
    a: "Yes, where the available elevation data is suitable. Contour interval and final format should be determined according to the terrain, source-data quality and project requirement.",
  },
  {
    q: "Does Techmapperz provide mining volumetric calculations?",
    a: "Yes. We can prepare stockpile volumes, surface comparisons and cut-and-fill calculations when appropriate terrain or survey data is available.",
  },
  {
    q: "Can you convert CAD drawings into GIS?",
    a: "Yes. DWG and DXF information can be converted into projected GIS datasets, with layer organisation, geometry review and attribute structuring based on the project specification.",
  },
  {
    q: "Do you provide website development separately from GIS?",
    a: "Yes. Website development remains part of Techmapperz digital services and can include corporate websites, dynamic websites, e-commerce platforms and custom web applications.",
  },
  {
    q: "Do you develop Android and iOS applications?",
    a: "Yes. Mobile development services can include Android, iOS and cross-platform applications depending on the project requirement.",
  },
  {
    q: "Can Techmapperz work as a subcontractor or production partner?",
    a: "Yes. We can support consultants, contractors, drone companies and other service providers with defined GIS, drone-processing, LiDAR, mapping or development scopes. Project responsibilities, inputs, outputs and review procedures can be agreed before production begins.",
  },
  {
    q: "What information should we provide to receive a quotation?",
    a: "Share the project location or area, scope of work, available source data, required coordinate system, expected accuracy, deliverables, file formats, approximate quantity and timeline. This helps us assess the required workflow and effort.",
  },
];

const ServiceCard = ({ service, reverse }) => (
  <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-10 lg:gap-16 items-start`}>
    <div className="relative w-full lg:w-[45%] h-[240px] sm:h-[340px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
        {service.description}
      </p>
      <p className="text-[#0c2e60] font-bold text-xs uppercase tracking-widest mb-3">
        {service.heading}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
        {service.services.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
            <span className="text-[#6ac045] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={service.link}
        className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit"
      >
        Learn more &#8594;
      </Link>
    </div>
  </div>
);

const FaqItem = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-[#0c2e60] font-semibold text-sm md:text-base leading-snug group-hover:text-[#1656b8] transition-colors">
          {faq.q}
        </span>
        <span className={`text-[#1656b8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed pb-5">
          {faq.a}
        </p>
      )}
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="bg-white text-gray-900">
      <ScrollToTop />

      {/* HERO */}
      <section
        className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-center bg-cover bg-center text-white pt-32 sm:pt-40 pb-16 sm:pb-24"
        style={{ backgroundImage: 'url("/gis_images/service_hero_banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em]">
            OUR SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight">
            GIS, Drone Survey &amp; Digital Development Services
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Techmapperz supports infrastructure, utility, mining, government, architecture, planning and drone-service teams with GIS mapping, drone data processing, LiDAR, terrain products and digital development.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8]/30 text-white font-semibold text-[15px] hover:bg-[#1656b8] transition-all duration-300">
                Discuss Your Project
              </button>
            </Link>
            <a href="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                Explore Our Services
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-xs sm:text-sm text-gray-400 font-medium tracking-wide px-4">
            {["GIS & Mapping", "Drone & LiDAR", "Point Cloud & Terrain", "Digital Development"].map((cap, i, arr) => (
              <React.Fragment key={cap}>
                <span className="text-white/80 whitespace-nowrap">{cap}</span>
                {i < arr.length - 1 && <span className="text-gray-600">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CORE GEOSPATIAL SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              CORE GEOSPATIAL SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2e60] leading-tight tracking-tight max-w-3xl mx-auto">
              Spatial Data, Drone &amp; LiDAR Services
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-200">
            {coreServices.map((service, i) => (
              <div key={service.number} className="py-12 md:py-20 lg:py-24 first:pt-0">
                <ServiceCard service={service} reverse={i % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL DEVELOPMENT SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              DIGITAL DEVELOPMENT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2e60] leading-tight tracking-tight max-w-3xl mx-auto">
              Website &amp; Mobile App Development
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-200">
            {digitalServices.map((service, i) => (
              <div key={service.number} className="py-12 md:py-20 lg:py-24 first:pt-0">
                <ServiceCard service={service} reverse={i % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Frequently Asked Questions About Our Services
            </h2>
          </div>
          <div className="border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-gradient-to-br from-[#0b2341] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[26px] p-8 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-white tracking-tight leading-snug">
                Have a GIS, Drone, LiDAR or Digital Development Requirement?
              </h2>
              <p className="text-blue-100 text-sm md:text-[15px] leading-relaxed">
                Share your scope of work, project location, available source data, expected deliverables and timeline. Whether you require complete project execution or support for a specific processing, mapping, analysis or development stage, our team can review the requirement and recommend an appropriate delivery approach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 relative z-10 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full"
              >
                Discuss Your Project &#8594;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-[#0c2e60] bg-white border border-transparent hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full"
              >
                Send Your Scope of Work
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
            GIS Mapping · Drone Survey · Drone Data Processing · LiDAR · Point Cloud · DEM/DTM · Contours · Web GIS · Website &amp; Mobile Development
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;

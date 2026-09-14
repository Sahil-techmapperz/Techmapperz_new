"use client";
import Link from 'next/link';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import React, { useState } from 'react';
import Image from 'next/image';

const sansSerifStyle = {
  fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
};

const coreServices = [
  {
    number: "01",
    title: "GIS Mapping & Data Digitisation",
    image: "/Services/GIS-Mapping-&-Data-Digitisation.png",
    description:
      "We create and organise geospatial data from satellite imagery, drone imagery, scanned maps, survey information, engineering drawings and existing databases. Our GIS mapping services cover data digitisation, georeferencing, feature extraction, attribute creation, database development and conversion of legacy information into structured GIS datasets.",
    heading: "Services include",
    services: [
      "GIS data digitisation",
      "Utility and network mapping",
      "Asset mapping",
      "GIS-to-CAD conversion",
      "2D feature extraction",
      "Topographic mapping",
      "Cadastral and parcel mapping",
      "Building and infrastructure mapping",
    ],
    link: "/service/gisservice",
  },
  {
    number: "02",
    title: "Drone Survey & Mapping",
    image: "/Services/Drone-Survey-&-Mapping.png",
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
    link: "/service/drone-survey-mapping",
  },
  {
    number: "03",
    title: "Drone Data Processing",
    image: "/Services/Drone-Data-Processsing.png",
    description:
      "Already have the drone images? Survey and drone companies do not always require another team. If drone imagery has already been captured, Techmapperz can provide back-office photogrammetry and geospatial processing support. We review the available raw imagery, image coordinates, flight information, survey-control data and expected deliverables before confirming the processing methodology.",
    heading: "Services include",
    services: [
      "Raw drone image processing",
      "Orthophoto generation",
      "Dense point-cloud generation",
      "DEM and DSM generation",
      "DTM preparation where suitable source information is available",
      "Contour generation",
      "Feature extraction",
      "GIS and CAD output preparation",
    ],
    link: "/service/drone-data-processing",
  },
];

const digitalServices = [
  {
    number: "04",
    title: "Website Development",
    image: "/Services/Website-Deveploment.png",
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
    link: "/service/webdevelopment",
  },
  {
    number: "05",
    title: "Mobile App Development",
    image: "/Services/Mobile-App-Development.png",
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
    link: "/service/mobile-app-development",
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
    q: "Do you provide website development separately from GIS?",
    a: "Yes. Website development remains part of Techmapperz digital services and can include corporate websites, dynamic websites, e-commerce platforms and custom web applications.",
  },
  {
    q: "Do you develop Android and iOS applications?",
    a: "Yes. Mobile development services can include Android, iOS and cross-platform applications depending on the project requirement.",
  },
];

const ServiceCard = ({ service, reverse, dark = false }) => (
  <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-10 lg:gap-14 items-start`}>
    <div className={`relative w-full lg:w-[45%] h-[240px] sm:h-[320px] md:h-[340px] rounded-2xl overflow-hidden flex-shrink-0 border ${dark ? "border-white/10 shadow-xl" : "border-[#DDE3EA] shadow-md"}`}>
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/50 to-transparent" : "bg-gradient-to-t from-[#0C2E60]/15 to-transparent"}`} />
    </div>
    <div className="flex flex-col flex-1">
      <h3 className={`text-[18px] md:text-[20px] font-bold ${dark ? "text-white" : "text-[#0C2E60]"} mb-2.5 leading-[1.25]`}>
        {service.title}
      </h3>
      <p className={`${dark ? "text-[#E8F5F3]" : "text-[#4B5563]"} text-[15px] sm:text-[16px] leading-[1.65] mb-4`}>
        {service.description}
      </p>
      <p className={`${dark ? "text-[#5EEAD4]" : "text-[#0F766E]"} font-bold text-[12px] md:text-[13px] uppercase tracking-[0.15em] mb-2.5`}>
        {service.heading}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
        {service.services.map((item, i) => (
          <li key={i} className={`flex items-start gap-2.5 ${dark ? "text-[#E8F5F3]" : "text-[#4B5563]"} text-[14px] sm:text-[15px] leading-snug`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${dark ? "bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40" : "bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30"}`}>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={service.link}
        className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-fit min-h-[46px] sm:min-h-[48px]"
      >
        Learn more &rarr;
      </Link>
    </div>
  </div>
);

const FaqItem = ({ faq, defaultOpen = false, dark = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border-b ${dark ? "border-white/10" : "border-[#DDE3EA]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 sm:py-5 flex items-start justify-between gap-4 group"
      >
        <span className={`${dark ? "text-white group-hover:text-[#5EEAD4]" : "text-[#0C2E60] group-hover:text-[#1656B8]"} font-semibold text-[16px] md:text-[18px] leading-snug transition-colors`}>
          {faq.q}
        </span>
        <span className={`${dark ? "text-[#5EEAD4]" : "text-[#1656B8]"} font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <p className={`${dark ? "text-[#E8F5F3]" : "text-[#4B5563]"} text-[15px] sm:text-[16px] leading-[1.65] pb-5`}>
          {faq.a}
        </p>
      )}
    </div>
  );
};

const ServicePageClient = () => {
  return (
    <div className="bg-white text-[#17202A]" style={sansSerifStyle}>
      <ScrollToTop />

      {/* HERO */}
      <section className="relative min-h-[520px] sm:min-h-[75vh] flex flex-col justify-center items-center text-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <Image
          src="/Service.png"
          alt="Techmapperz Services - GIS, Drone, Web & App Development"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        {/* Balanced contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C2E60]/80 via-black/40 to-[#0C2E60]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-4 sm:gap-5">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] drop-shadow-md">
            OUR SERVICES
          </span>
          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] text-white">
            GIS Mapping, Drone Survey &amp; <br className="hidden sm:inline" />Web and App Development
          </h1>
          <p className="text-[#E8F5F3] text-[16px] md:text-[18px] font-normal max-w-2xl leading-[1.65] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            We deliver GIS mapping, drone surveys, LiDAR and geospatial data processing for infrastructure, utility, mining, government and planning projects. We also develop websites and mobile applications for organisations across sectors.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] py-3 px-8 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-xl hover:shadow-2xl transition-all duration-300">
                Discuss Your Project &rarr;
              </button>
            </Link>
            <a href="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] py-3 px-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold text-[15px] sm:text-[16px] hover:bg-white/20 transition-all duration-300 shadow-md">
                View All Services
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CORE GEOSPATIAL SERVICES */}
      <section id="services" className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              CORE GEOSPATIAL SERVICES
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Spatial Data, Drone &amp; LiDAR Services
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-[#DDE3EA]">
            {coreServices.map((service, i) => (
              <div key={service.number} className="py-6 md:py-8 first:pt-0">
                <ServiceCard service={service} reverse={i % 2 !== 0} dark={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL DEVELOPMENT SERVICES */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              DIGITAL DEVELOPMENT
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Website &amp; Mobile App Development
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-[#DDE3EA]">
            {digitalServices.map((service, i) => (
              <div key={service.number} className="py-6 md:py-8 first:pt-0">
                <ServiceCard service={service} reverse={i % 2 !== 0} dark={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              FAQ
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="border-t border-white/10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} defaultOpen={i === 0} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Planning a GIS, Drone, LiDAR, Website or Mobile App Project?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share your project details, available data and timeline. Our specialists will review your requirements and propose an effective execution plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Project &rarr;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Send Your Scope of Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageClient;

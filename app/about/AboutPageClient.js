"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  ExternalLink
} from "lucide-react";

const capabilities = [
  {
    id: "gis-mapping",
    title: "GIS & Mapping",
    tagline: "SPATIAL DATA & GEOPROCESSING",
    description: "GIS digitisation, feature extraction, utility and land mapping, spatial analysis, and CAD–GIS conversion. We prepare datasets for the client’s required structure and working environment.",
    items: [
      "GIS digitisation & geodatabase creation",
      "2D & 3D geospatial feature extraction",
      "Utility, pipeline & network asset mapping",
      "Cadastral, parcel & land-record mapping",
      "Land Use & Land Cover (LULC) classification",
      "Spatial queries, buffer & proximity analysis",
      "CAD to GIS data restructuring & conversion",
      "Rigorous topology validation & QA/QC checks"
    ],
    cta: "Explore GIS Services",
    link: "/service/gisservice",
    image: "/gis_images/GIS_Main_Page/GIS_Mapping.webp",
    alt: "GIS digitisation and mapping services by Techmapperz"
  },
  {
    id: "drone-survey",
    title: "Drone Survey & Data Processing",
    tagline: "AERIAL PHOTOGRAMMETRY & LIDAR",
    description: "Drone survey and mapping, photogrammetry and LiDAR processing. Depending on the assignment, outputs include orthomosaics, classified point clouds, terrain models and contours.",
    items: [
      "High-precision drone survey & mapping",
      "Aerial photogrammetry & image alignment",
      "LiDAR point-cloud classification (LAS/LAZ)",
      "Orthomosaic generation & georeferencing",
      "Digital Surface & Terrain Models (DSM/DTM)",
      "Topographic contours & elevation analysis",
      "Stockpile volume & earthwork calculation",
      "Linear corridor & infrastructure inspection"
    ],
    cta: "Explore Drone Services",
    link: "/service/droneservice",
    image: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
    alt: "Drone survey and LiDAR processing by Techmapperz"
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Applications",
    tagline: "DIGITAL DEVELOPMENT & WEB GIS",
    description: "Websites, Android and iOS applications, Web GIS and mapping dashboards. Development is scoped around how the client’s staff or customers will use the application.",
    items: [
      "Corporate, service & e-commerce websites",
      "Interactive Web GIS portals & dashboards",
      "Native & cross-platform Android & iOS apps",
      "Field survey & spatial data collection tools",
      "Custom business portals & workflow engines",
      "Spatial database (PostGIS) & REST API integration",
      "Role-based access & operational analytics",
      "Responsive, secure & scalable architecture"
    ],
    cta: "Explore Web & App Development",
    link: "/service/webdevelopment",
    image: "/Photos/Webdevelopment_Mockup_banner.webp",
    alt: "Web and mobile application development by Techmapperz"
  }
];

const leaders = [
  {
    name: "Santanu Nandi",
    designation: "Co-founder & CEO",
    roleCategory: "Executive Leadership",
    bio: "Santanu brings over 14 years of experience in the geospatial industry, spanning GIS production, remote sensing, presales and business development. At Techmapperz, he leads business strategy and client engagement, drawing on that background to understand project requirements and guide the company's growth.",
    linkedin: "https://www.linkedin.com/in/santanu-nandi-65775899/",
    initials: "SN"
  },
  {
    name: "Head of Technology & Solutions",
    designation: "Chief Technology Officer (CTO)",
    roleCategory: "Technology & Software",
    bio: "Leads geospatial software architecture and digital application development at Techmapperz. With deep expertise in full-stack engineering, cloud systems, and Web GIS, oversees technical workflows, system integration and scalable software delivery for client platforms.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "TS"
  },
  {
    name: "Head of GIS Operations",
    designation: "Lead GIS & Photogrammetry Specialist",
    roleCategory: "Geospatial Production",
    bio: "Oversees GIS mapping production, CAD-to-GIS conversion, and multi-source spatial data processing. Ensures rigorous QA/QC standards across large-scale vector digitisation, feature extraction, utility mapping and geodatabase creation projects.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "GO"
  },
  {
    name: "Head of Drone & LiDAR Survey",
    designation: "Lead Drone Survey Operations",
    roleCategory: "Field Survey & Remote Sensing",
    bio: "Directs aerial survey flight planning, high-resolution sensor data capture, photogrammetry processing and LiDAR point cloud classification across infrastructure corridors, mining areas, and regional land surveys.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "DL"
  },
  {
    name: "Lead Full-Stack & Mobile Architect",
    designation: "Head of Web & Mobile Engineering",
    roleCategory: "Digital Engineering",
    bio: "Directs web application and mobile app engineering teams. Specialises in building responsive corporate platforms, cross-platform Android/iOS applications, and spatial mapping dashboards tailored to operational workflows.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "FM"
  },
  {
    name: "Head of Project Delivery & QA",
    designation: "Director of Operations & Compliance",
    roleCategory: "Operations & Quality Control",
    bio: "Responsible for end-to-end project scheduling, client coordination, milestone delivery, and quality compliance across national and international mapping, survey, and software development assignments.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "PD"
  }
];

const howWeWorkSteps = [
  {
    num: "01",
    title: "Understand the Requirement",
    desc: "We review the location, available data, intended use, required outputs and timeline. We clarify assumptions and gaps before setting the scope."
  },
  {
    num: "02",
    title: "Agree the Approach",
    desc: "We define the production method, delivery formats and review stages. Where appropriate, an initial sample helps confirm the specification before the wider work begins."
  },
  {
    num: "03",
    title: "Produce and Check",
    desc: "We carry out the agreed work and check the relevant geometry, attributes, coordinate system, completeness and accuracy requirements. Questions that affect delivery are raised during the project."
  },
  {
    num: "04",
    title: "Review and Hand Over",
    desc: "We share outputs for review, address agreed corrections and organise the final files for the client’s working environment."
  }
];

export default function AboutPageClient() {
  return (
    <div className="bg-white text-[#17202A] font-sans antialiased">

      {/* 01 • HERO SECTION */}
      <section className="relative min-h-[auto] sm:min-h-[60vh] md:min-h-[68vh] flex flex-col justify-center items-start text-white pt-24 sm:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
        <Image
          src="/Photos/about_us_banner.png"
          alt="Techmapperz About Us - GIS, Drone Mapping & Digital Development"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/45 pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-4 sm:gap-6">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
            ABOUT TECHMAPPERZ
          </span>
          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-4xl text-white">
            Bringing Mapping and Technology Together
          </h1>
          <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[1.65] font-normal">
            Techmapperz combines GIS expertise with drone surveying, data processing and digital development. Our work spans railway corridors, utility networks and mining areas, alongside websites and mobile applications for businesses. Based in India, we support clients across the country and internationally.
          </p>
          <p className="text-[#E8F5F3]/90 text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[1.65] font-normal">
            From preparing accurate spatial databases to building custom digital applications, we ensure your data is ready for engineering, planning and real-world operational decisions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mt-2 w-full sm:w-auto">
            <Link
              href="/portfolios"
              className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] text-center w-full sm:w-auto"
            >
              Explore Our Work &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-full font-bold text-[15px] sm:text-[16px] text-white bg-white/10 hover:bg-white/20 border border-white/40 transition-all duration-200 text-center w-full sm:w-auto shadow-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* 02 • WHO WE ARE SECTION (Cool Off-white Canvas) */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden" id="who-we-are">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-6 md:mb-8">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              WHO WE ARE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
              Geospatial experience, with a practical approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                Techmapperz LLP provides GIS mapping, drone survey and LiDAR data processing services. Our work includes turning survey data, aerial imagery, point clouds and existing drawings into maps, terrain models and organised GIS or CAD datasets.
              </p>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                The team brings together experience in geospatial production and application development. That combination helps us support clients at different stages of a project, from preparing the underlying data to developing an application that makes it easier to use.
              </p>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                Our project experience includes railway corridor mapping, gas pipeline digitisation, mining-area feature extraction and web & mobile workflow development. Each assignment has its own specifications, source-data limitations and review requirements. Understanding those details is an important part of the work.
              </p>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                We also build modern web platforms and mobile applications for enterprises and organizations across multiple sectors.
              </p>

              <div className="pt-2">
                <Link
                  href="/industry"
                  className="inline-flex items-center gap-2 text-[#1656B8] hover:text-[#0C2E60] font-bold text-[15px] sm:text-[16px] transition-colors group"
                >
                  <span>Explore the industries we support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#DDE3EA]">
                <Image
                  src="/gis_images/gis_services/GIS Service Page Introduction.png"
                  alt="Techmapperz Geospatial Team and Production Workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#DDE3EA] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#0C2E60] font-bold text-sm">Geospatial & Digital Precision</p>
                      <p className="text-[#4B5563] text-xs">Structured workflows for accurate maps, terrain models & web platforms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Small Strip Banner */}
          <div className="mt-8 bg-white rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-[#DDE3EA]">
            <div>
              <p className="text-[#0C2E60] font-bold text-[17px] sm:text-[18px] mb-1">Looking for proven project deliverables?</p>
              <p className="text-[#4B5563] text-[14px] sm:text-[15px]">We combine geospatial data preparation with custom application development tailored to your sector workflows.</p>
            </div>
            <Link
              href="/portfolios"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full md:w-auto"
            >
              Explore Our Work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 03 • WHAT WE DO (OUR CORE CAPABILITIES) */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden" id="capabilities">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              WHAT WE DO
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
              Our Core Capabilities
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              We deliver end-to-end technical services spanning geospatial data production, drone photogrammetry, point cloud analysis, and digital software development.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#DDE3EA]">
            {capabilities.map((cap, i) => (
              <div
                key={cap.id}
                className={`py-6 md:py-10 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                <div className="relative w-full lg:w-[45%] h-[260px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md border border-[#DDE3EA] flex-shrink-0 group">
                  <Image
                    src={cap.image}
                    alt={cap.alt || cap.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0C2E60]/90 backdrop-blur-md text-[#5EEAD4] text-[11px] sm:text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-white/10">
                      {cap.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-[22px] md:text-[26px] font-bold text-[#0C2E60] mb-3 leading-[1.25]">
                    {cap.title}
                  </h3>
                  <p className="text-[#4B5563] text-[15px] leading-relaxed mb-5">
                    {cap.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[#17202A] text-[14px] sm:text-[15px]">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[#4B5563] font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={cap.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-fit"
                  >
                    {cap.cta} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04 • LEADERSHIP SECTION (15-20% Authoritative Deep Navy Section) */}
      <section className="relative py-4 md:py-10 bg-[#0C2E60] border-t border-white/10 text-white overflow-hidden" id="leadership">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              LEADERSHIP
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
              Meet Our Leadership
            </h2>
            <p className="text-[#E8F5F3] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              Meet the people guiding Techmapperz’s business, technical work and project delivery.
            </p>
          </div>

          {/* 6 Leadership Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {leaders.map((ldr, idx) => (
              <div
                key={idx}
                className="bg-white text-[#17202A] rounded-2xl p-6 sm:p-7 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Portrait Placeholder / Avatar Card Header */}
                  <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-[#E8F5F3] to-[#EDF5FB] border border-[#DDE3EA] mb-5 flex flex-col items-center justify-center text-center p-5 overflow-hidden shadow-xs">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0C2E60] text-white flex items-center justify-center text-2xl sm:text-3xl font-bold mb-2 shadow-md border-2 border-white">
                      {ldr.initials}
                    </div>
                    <span className="text-[12px] text-[#4B5563] font-medium">Leadership Profile</span>
                  </div>

                  {/* Leader Info */}
                  <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-1 group-hover:text-[#1656B8] transition-colors">
                    {ldr.name}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#1656B8] mb-2.5">
                    {ldr.designation}
                  </p>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E8F5F3] text-[#0F766E] mb-3">
                    {ldr.roleCategory}
                  </span>
                  <p className="text-[#4B5563] text-[13px] sm:text-[14px] leading-relaxed mb-4">
                    {ldr.bio}
                  </p>
                </div>

                {/* LinkedIn Link Footer */}
                <div className="pt-4 border-t border-[#DDE3EA] mt-auto flex items-center justify-between">
                  <a
                    href={ldr.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1656B8] hover:text-[#0C2E60] transition-colors group/link"
                  >
                    <Linkedin className="w-4 h-4 fill-[#1656B8] text-transparent" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] font-medium text-[#6B7280]">Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 • HOW WE WORK SECTION (4-STAGE PROCESS) */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden" id="how-we-work">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              HOW WE WORK
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
              Clear Scope. Regular Reviews. Careful Handover.
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              A project runs more smoothly when the requirements and review process are clear from the start. Our approach covers four stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {howWeWorkSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0C2E60] flex items-center justify-center text-white font-bold text-sm mb-4 shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="text-[#0C2E60] font-bold text-[18px] mb-2 leading-snug">{step.title}</h3>
                  <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#DDE3EA] flex items-center gap-2 text-xs font-medium text-[#4B5563]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Stage {step.num} Quality Gate</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] min-h-[46px] sm:min-h-[48px] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Discuss Your Project &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 06 • CLOSING CALL TO ACTION BANNER (Standard CTA Banner Card) */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            {/* Subtle background circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Have a Project in Mind?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Tell us what you need to survey, map or build. Share a project brief, drawing or sample data, and we’ll discuss the scope, required outputs and a suitable approach.
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
                href="/portfolios"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

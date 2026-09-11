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
    initials: "SN",
    image: "/Photos/testimonial_aveter.webp"
  },
  {
    name: "Head of Technology & Solutions",
    designation: "Chief Technology Officer (CTO)",
    roleCategory: "Technology & Software",
    bio: "Leads geospatial software architecture and digital application development at Techmapperz. With deep expertise in full-stack engineering, cloud systems, and Web GIS, oversees technical workflows, system integration and scalable software delivery for client platforms.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "TS",
    image: "/Photos/testimonial_aveter.webp"
  },
  {
    name: "Head of GIS Operations",
    designation: "Lead GIS & Photogrammetry Specialist",
    roleCategory: "Geospatial Production",
    bio: "Oversees GIS mapping production, CAD-to-GIS conversion, and multi-source spatial data processing. Ensures rigorous QA/QC standards across large-scale vector digitisation, feature extraction, utility mapping and geodatabase creation projects.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "GO",
    image: "/Photos/testimonial_aveter.webp"
  },
  {
    name: "Head of Drone & LiDAR Survey",
    designation: "Lead Drone Survey Operations",
    roleCategory: "Field Survey & Remote Sensing",
    bio: "Directs aerial survey flight planning, high-resolution sensor data capture, photogrammetry processing and LiDAR point cloud classification across infrastructure corridors, mining areas, and regional land surveys.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "DL",
    image: "/Photos/testimonial_aveter.webp"
  },
  {
    name: "Lead Full-Stack & Mobile Architect",
    designation: "Head of Web & Mobile Engineering",
    roleCategory: "Digital Engineering",
    bio: "Directs web application and mobile app engineering teams. Specialises in building responsive corporate platforms, cross-platform Android/iOS applications, and spatial mapping dashboards tailored to operational workflows.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "FM",
    image: "/Photos/testimonial_aveter.webp"
  },
  {
    name: "Head of Project Delivery & QA",
    designation: "Director of Operations & Compliance",
    roleCategory: "Operations & Quality Control",
    bio: "Responsible for end-to-end project scheduling, client coordination, milestone delivery, and quality compliance across national and international mapping, survey, and software development assignments.",
    linkedin: "https://www.linkedin.com/company/techmapperz",
    initials: "PD",
    image: "/Photos/testimonial_aveter.webp"
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
    <div className="bg-white text-gray-900 font-sans antialiased">

      {/* 01 • HERO SECTION */}
      <section className="relative min-h-[auto] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-24 md:pb-28 overflow-hidden">
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

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm">
            ABOUT TECHMAPPERZ
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] xl:text-[46px] font-bold leading-tight tracking-tight max-w-none drop-shadow-md text-white">
            Bringing Mapping and Technology Together
          </h1>
          <p className="text-gray-200 text-base md:text-[17px] max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            Techmapperz combines GIS expertise with drone surveying, data processing and digital development. Our work spans railway corridors, utility networks and mining areas, alongside websites and mobile applications for businesses. Based in India, we support clients across the country and internationally.
          </p>
          <p className="text-white/95 text-base md:text-[17px] max-w-2xl leading-relaxed font-medium drop-shadow-sm">
            From preparing accurate spatial databases to building custom digital applications, we ensure your data is ready for engineering, planning and real-world operational decisions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link
              href="/portfolios"
              className="inline-flex items-center justify-center py-[13px] px-8 rounded-full bg-[#1656b8] hover:bg-[#0c2e60] text-white font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/15 transition-all duration-300 text-center w-full sm:w-auto"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* 02 • WHO WE ARE SECTION */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="who-we-are">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div >
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2.5 block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] xl:text-[46px] font-bold text-white leading-tight tracking-tight">
              Geospatial experience, with a practical approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-4">
                Techmapperz LLP provides GIS mapping, drone survey and LiDAR data processing services. Our work includes turning survey data, aerial imagery, point clouds and existing drawings into maps, terrain models and organised GIS or CAD datasets.
              </p>
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-4">
                The team brings together experience in geospatial production and application development. That combination helps us support clients at different stages of a project, from preparing the underlying data to developing an application that makes it easier to use.
              </p>
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-4">
                Our project experience includes railway corridor mapping, gas pipeline digitisation, mining-area feature extraction and e-commerce Website &amp; iOS and Android Mobile app for XYZ Finders etc. Each assignment has its own specifications, source-data limitations and review requirements. Understanding those details is an important part of the work.
              </p>
              <p className="text-blue-100/90 text-base md:text-[17px] leading-relaxed mb-6">
                We also build websites and mobile applications for businesses across other sectors.
              </p>

              <div>
                <Link
                  href="/industry"
                  className="inline-flex items-center gap-2 text-[#6ac045] hover:text-[#5aad38] font-bold text-base transition-colors group"
                >
                  <span>Explore the industries we support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/gis_images/gis_services/GIS Service Page Introduction.png"
                  alt="Techmapperz Geospatial Team and Production Workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04203a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a1930]/90 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1656b8] flex items-center justify-center text-white flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Geospatial &amp; Digital Precision</p>
                      <p className="text-blue-200/80 text-xs">Structured workflows for accurate maps, terrain models &amp; web platforms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Small Strip Banner */}
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/15">
            <div>
              <p className="text-white font-bold text-lg mb-1">Looking for proven project deliverables?</p>
              <p className="text-blue-200 text-sm md:text-base">We combine geospatial data preparation with custom application development tailored to your sector workflows.</p>
            </div>
            <Link
              href="/portfolios"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md w-full md:w-auto"
            >
              Explore Our Work &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* 03 • WHAT WE DO (OUR CORE CAPABILITIES) */}
      <section className="py-10 md:py-16 bg-white" id="capabilities">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Our Core Capabilities
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] mt-3 leading-relaxed">
              We deliver end-to-end technical services spanning geospatial data production, drone photogrammetry, point cloud analysis, and digital software development.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {capabilities.map((cap, i) => (
              <div
                key={cap.id}
                className={`py-8 md:py-12 flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 sm:gap-8 lg:gap-12 items-start`}
              >
                <div className="relative w-full lg:w-[42%] h-[260px] sm:h-[340px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={cap.image}
                    alt={cap.alt || cap.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0c2e60]/90 backdrop-blur-md text-[#6ac045] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {cap.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0c2e60] mb-4 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <span className="text-[#6ac045] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={cap.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md w-full sm:w-fit"
                  >
                    {cap.cta} &#8594;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 • LEADERSHIP SECTION (6 BOXES GRID) */}
      <section className="py-10 md:py-16 bg-[#04203a] text-white" id="leadership">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Meet Our Leadership
            </h2>
            <p className="text-blue-100/90 text-base md:text-[17px] mt-3 leading-relaxed">
              Meet the people guiding Techmapperz’s business, technical work and project delivery.
            </p>
          </div>

          {/* 6 Leadership Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {leaders.map((ldr, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-900 rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#1656b8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait Placeholder / Avatar Card Header */}
                  <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#e8f1fa] to-[#d6e6f7] border border-blue-100/80 mb-5 flex flex-col items-center justify-center text-center p-6 overflow-hidden group-hover:scale-[1.01] transition-transform shadow-xs">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0c2e60] text-white flex items-center justify-center text-2xl sm:text-3xl font-bold mb-3 shadow-lg border-2 border-white/60">
                      {ldr.initials}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Portrait / Leadership Profile</span>
                    <span className="text-base font-bold text-[#0c2e60] mt-1">{ldr.name}</span>
                  </div>

                  {/* Leader Info */}
                  <h3 className="text-xl font-bold text-[#0c2e60] leading-tight mb-1 group-hover:text-[#1656b8] transition-colors">
                    {ldr.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#1656b8] mb-4">
                    {ldr.designation}
                  </p>
                </div>

                {/* LinkedIn Link Footer */}
                <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                  <a
                    href={ldr.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0a66c2] hover:text-[#004182] transition-colors group/link"
                  >
                    <Linkedin className="w-4 h-4 fill-[#0a66c2] text-transparent" />
                    <span>View LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] font-medium text-gray-400">Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 • HOW WE WORK SECTION (4-STAGE PROCESS) */}
      <section className="py-10 md:py-16 bg-white" id="how-we-work">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Clear Scope. Regular Reviews. Careful Handover.
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] mt-3 leading-relaxed">
              A project runs more smoothly when the requirements and review process are clear from the start. Our approach covers four stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {howWeWorkSteps.map((step, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:shadow-lg hover:border-[#1656b8]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0c2e60] flex items-center justify-center text-white font-bold text-sm mb-4 shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="text-[#0c2e60] font-bold text-lg mb-2 leading-snug">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center gap-2 text-xs font-medium text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6ac045]" />
                  <span>Stage {step.num} Quality Gate</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              Discuss Your Project &#8594;
            </Link>
          </div>

        </div>
      </section>

      {/* 08 • CLOSING CALL TO ACTION BANNER */}
      <section className="py-10 md:py-14 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                Have a Project in Mind?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal max-w-2xl">
                Tell us what you need to survey, map or build. Share a project brief, drawing or sample data, and we’ll discuss the scope, required outputs and a suitable approach.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your Project &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

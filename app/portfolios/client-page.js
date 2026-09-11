"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./projects.css";

const curatedProjects = [
  // ── GIS & Mapping ──
  {
    id: 1,
    title: "Gas Pipeline Digitisation & Digital Asset Registry",
    summary: "GIS digitisation of a 6,000 km gas pipeline network and its associated assets, bringing route information and engineering records into a structured spatial database.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/1.webp",
    link: "/portfolios/gas_pipeline_digitization",
    tags: ["GIS Database", "Asset Mapping", "Pipeline"]
  },
  {
    id: 2,
    title: "Hooghly Riverfront GIS Mapping",
    summary: "Land-use and GIS mapping across approximately 100 km² along both banks of the Hooghly River within the Kolkata Metropolitan Area, supporting riverfront planning.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/1.webp",
    link: "/portfolios/hooghly_riverfront_mapping",
    tags: ["Riverfront", "Land Use", "Urban GIS"]
  },
  {
    id: 3,
    title: "Urban and Rural Land-Use Mapping",
    summary: "Land-use and land-cover mapping across 400 km² of urban and rural areas, with settlement features organised into more than 15 mapping layers.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/1.webp",
    link: "/portfolios/urban_rural_extraction",
    tags: ["LULC", "Settlements", "15+ Layers"]
  },
  {
    id: 4,
    title: "GIS Mapping for an Industrial Area",
    summary: "GIS mapping of a 65.45 km² industrial area, with more than 50 feature layers organised to support land-use and infrastructure planning.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp",
    link: "/portfolios/industrial_mapping_planning",
    tags: ["Industrial", "Planning", "50+ Layers"]
  },
  {
    id: 5,
    title: "Road Network Mapping",
    summary: "GIS mapping work covering an 8,000 km road network, with road information prepared for navigation-related use.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Navigation Mapping/1.webp",
    link: "/portfolios/navigation_mapping",
    tags: ["Roads", "8,000 km", "Navigation"]
  },
  {
    id: 6,
    title: "Map Georeferencing and Attribute Capture",
    summary: "Georeferencing of scanned maps and capture of plot and village attributes to prepare a spatially referenced GIS dataset.",
    category: "GIS & Mapping",
    filterGroup: "gis",
    image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/1.webp",
    link: "/portfolios/georeferencing",
    tags: ["Cadastral", "Georeferencing", "Attributes"]
  },

  // ── Drone & LiDAR ──
  {
    id: 7,
    title: "Railway Corridor Mapping with Drone LiDAR",
    summary: "Topographic survey and mapping for the Gonda–Anand Nagar railway corridor in Uttar Pradesh, covering 173 km along a 100 m-wide corridor.",
    category: "Drone & LiDAR",
    filterGroup: "drone",
    image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp",
    link: "/portfolios/topographical_railway_survey",
    tags: ["LiDAR", "Railway", "173 km Corridor"]
  },
  {
    id: 8,
    title: "Drone-Based 2D Feature Extraction for Mining Areas",
    summary: "2D feature extraction and CAD mapping across approximately 556.67 km² of mining areas, using drone imagery to map surface features, infrastructure, water bodies and land use.",
    category: "Drone & LiDAR",
    filterGroup: "drone",
    image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/1.webp",
    link: "/portfolios/mining_area_extraction",
    tags: ["Mining", "556.67 km²", "CAD & GIS"]
  },
  {
    id: 9,
    title: "Drone Survey and Mapping of Pipeline Assets",
    summary: "Drone survey and GIS digitisation for a 45 km ammonia and water pipeline network in Gujarat, mapping the route and associated assets.",
    category: "Drone & LiDAR",
    filterGroup: "drone",
    image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/1.webp",
    link: "/portfolios/ammonia_water_pipeline",
    tags: ["Drone Survey", "Pipeline Assets", "45 km"]
  },

  // ── Websites & Apps ──
  {
    id: 10,
    title: "Aaheli Publishers — Online Bookstore",
    summary: "An e-commerce website for Aaheli Publishers, with book categories, product pages, customer accounts and a shopping cart for direct online purchases.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/aahelipublishers/1.webp",
    link: "/portfolios/aahelipublishers",
    tags: ["E-commerce", "Online Store", "Cart & Checkout"]
  },
  {
    id: 11,
    title: "White Spread Foods — B2B Sales Portal",
    summary: "A B2B ordering platform and sales dashboard for White Spread Foods, with approval-based order workflows and connections to the company’s wider operational systems.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/whitespreadfoods_banner.webp",
    link: "/portfolios/white-spread-foods",
    tags: ["B2B Portal", "Sales Dashboard", "Workflows"]
  },
  {
    id: 12,
    title: "Project Expo Guru — Business Website",
    summary: "A business website for Project Expo Guru, presenting its interior design services, company information and creative work.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/Expoguru/1.webp",
    link: "/portfolios/expoguru",
    tags: ["Interior Design", "Portfolio Showcase", "Creative"]
  },
  {
    id: 13,
    title: "SHRC — Membership and Complaint Website",
    summary: "A website supporting member onboarding and complaint management for a welfare organisation.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/shrc_banner.webp",
    link: "/portfolios/shrc",
    tags: ["NGO / Welfare", "Member Onboarding", "Complaints"]
  },
  {
    id: 14,
    title: "FacultiesOnline — Student and Teacher Platform",
    summary: "An online platform developed to connect students and teachers.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/FacultiesOnline/1.webp",
    link: "/portfolios/facultiesOnline",
    tags: ["EdTech", "Teacher Connect", "Community"]
  },
  {
    id: 15,
    title: "Welho — Dairy Company Website",
    summary: "A company website developed for Welho to present its dairy business online.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/Welho_banner.webp",
    link: "/portfolios/welho",
    tags: ["Corporate Website", "Food & Dairy", "Product Catalog"]
  },
  {
    id: 16,
    title: "Manusher Ghorbari — Accommodation Booking Website",
    summary: "An accommodation website with property information and booking functionality.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/manuser-ghorbaari1.webp",
    link: "/portfolios/manusher-ghorbari",
    tags: ["Hospitality", "Booking Engine", "Property Profiles"]
  },
  {
    id: 17,
    title: "Novustech — Drone Services Website",
    summary: "A website developed for Novustech to introduce its drone services and company information.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/Novustech/1.webp",
    link: "/portfolios/novustech",
    tags: ["Drone Industry", "Company Website", "Service Showcase"]
  },
  {
    id: 18,
    title: "UrPayroll — HRM Application",
    summary: "An HRM application covering attendance and employee workflows.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/Urpayroll/1.webp",
    link: "/portfolios/urpayroll",
    tags: ["HRM App", "Attendance", "Employee Portal"]
  },
  {
    id: 19,
    title: "PAS Auto Source — Automobile Business Website",
    summary: "A business website developed for PAS Auto Source to present its automobile-related services.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/premierautosource_banner.webp",
    link: "/portfolios/pas-auto-source",
    tags: ["Automotive", "Business Website", "Vehicle Inventory"]
  },
  {
    id: 20,
    title: "Ambient Construction — Company Website",
    summary: "A company website developed for Ambient Construction to present its business online.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/IT_portfolio/ambientconstruction/1.webp",
    link: "/portfolios/ambientconstruction",
    tags: ["Construction", "Company Website", "Project Portfolio"]
  },
  {
    id: 21,
    title: "XYZ Finders — Classified Marketplace App",
    summary: "Android and iOS applications for XYZFinders, a multi-category marketplace connecting buyers, sellers, service providers and store owners.",
    category: "Websites & Apps",
    filterGroup: "digital",
    image: "/Photos/XYZ-Mockup.webp",
    link: "/service/it/mobile-app-development",
    tags: ["Mobile App", "Android & iOS", "Marketplace"]
  }
];

const Casestudies = ({ portfolioData }) => {
  const [filter, setFilter] = useState("all");

  // IntersectionObserver for scroll-reveal animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.05,
    });

    const elements = document.querySelectorAll(
      ".pk-reveal, .pk-reveal-scale, .pk-reveal-left, .pk-reveal-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filter]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return curatedProjects;
    return curatedProjects.filter(project => project.filterGroup === filter);
  }, [filter]);

  return (
    <div className="projects-page-wrapper">
      <main>
        {/* BANNER SECTION */}
        <section className="portfolio-hero relative min-h-[620px] sm:min-h-[760px] md:min-h-[860px] lg:min-h-[94vh] flex flex-col justify-center items-start text-white pt-40 sm:pt-52 md:pt-60 pb-24 sm:pb-32 md:pb-40 overflow-hidden">
          <Image
            src="/Photos/portfolio_hero_banner.jpg"
            alt="Techmapperz Portfolio - GIS, Drone Mapping & Digital Development"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-top pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/45 pointer-events-none" />

          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6 pk-reveal">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm pk-reveal-left pk-delay-1">
              OUR PORTFOLIO
            </span>
            <h1 
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] xl:text-[46px] font-bold leading-tight tracking-tight max-w-4xl drop-shadow-md text-white pk-reveal-left pk-delay-2"
            >
              Our Work in GIS, Drone Surveys and Development
            </h1>
            <p 
              style={{ color: '#e5e7eb' }}
              className="text-gray-200 text-base md:text-[17px] max-w-3xl leading-relaxed font-normal drop-shadow-sm pk-reveal-left pk-delay-3"
            >
              Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications. From railway corridors and mining areas to online stores, these examples show the different requirements our team has worked on.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto pk-reveal pk-delay-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center py-[13px] px-8 rounded-full bg-[#1656b8] hover:bg-[#0c2e60] text-white font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
              >
                Explore Projects
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/15 transition-all duration-300 text-center w-full sm:w-auto"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section className="featured">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text Content & Details */}
              <div className="lg:col-span-6 flex flex-col justify-center pk-reveal-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1267b1] mb-2.5">
                  <span className="w-5 h-[2px] bg-[#e33434] rounded-full inline-block"></span>
                  FEATURED PROJECT
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0b2341] leading-tight tracking-tight mb-3.5">
                  Railway Corridor Mapping with Drone LiDAR
                </h2>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-5">
                  Techmapperz worked on topographic survey and mapping for the Gonda–Anand Nagar railway corridor in Uttar Pradesh. The project covered 173 km along a 100 m-wide corridor, with LiDAR data processing and mapping outputs for railway planning.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 max-w-sm">
                  <div className="bg-white border border-[#dbe5ee] rounded-xl p-3 sm:p-3.5 shadow-xs pk-reveal-scale pk-delay-1">
                    <span className="block text-xl sm:text-2xl font-bold text-[#0b2341]">173 km</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Corridor length</span>
                  </div>
                  <div className="bg-white border border-[#dbe5ee] rounded-xl p-3 sm:p-3.5 shadow-xs pk-reveal-scale pk-delay-2">
                    <span className="block text-xl sm:text-2xl font-bold text-[#0b2341]">100 m</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Survey width</span>
                  </div>
                </div>

                {/* Scope */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Scope:</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-3 py-1 bg-white border border-slate-200 text-[#1267b1] rounded-full text-xs font-semibold shadow-2xs">Drone LiDAR</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-[#1267b1] rounded-full text-xs font-semibold shadow-2xs">Point-cloud processing</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-[#1267b1] rounded-full text-xs font-semibold shadow-2xs">Terrain mapping</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-[#1267b1] rounded-full text-xs font-semibold shadow-2xs">L Section</span>
                  </div>
                </div>

                <div>
                  <Link 
                    href="/portfolios/topographical_railway_survey"
                    style={{ color: '#ffffff' }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b2341] hover:bg-[#123a64] !text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span style={{ color: '#ffffff' }}>View Railway Case Study</span>
                    <span style={{ color: '#ffffff' }} className="text-base font-normal leading-none">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Project Card */}
              <div className="lg:col-span-6 pk-reveal-right pk-delay-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#dbe5ee] bg-white shadow-xl group">
                  <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
                      alt="Railway Corridor Mapping with Drone LiDAR"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#1267b1] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      Railway & Infrastructure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORE OUR PROJECTS GRID */}
        <section id="projects">
          <div className="container projects-shell">
            <div className="section-head pk-reveal">
              <div className="copy">
                <div className="eyebrow">PROJECT PORTFOLIO</div>
                <h2 style={{ marginTop: '12px' }}>Explore Our Projects</h2>
                <p>Browse by service to find work relevant to your requirement. Open a project to see the scope, our contribution and the outputs delivered.</p>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="filter-bar pk-reveal pk-delay-1" aria-label="Project filters">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
                All Projects
              </button>
              <button className={`filter-btn ${filter === 'gis' ? 'active' : ''}`} onClick={() => setFilter('gis')}>
                GIS & Mapping
              </button>
              <button className={`filter-btn ${filter === 'drone' ? 'active' : ''}`} onClick={() => setFilter('drone')}>
                Drone & LiDAR
              </button>
              <button className={`filter-btn ${filter === 'digital' ? 'active' : ''}`} onClick={() => setFilter('digital')}>
                Websites & Apps
              </button>
            </div>
            
            {/* Projects Grid */}
            <div className="project-grid">
              {filteredProjects.map((project, index) => (
                <article key={project.id} className="project-card pk-reveal-scale" style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
                  <Link href={project.link} className="thumb block relative h-56 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      priority={index < 3}
                      loading={index < 6 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="thumb-label">{project.category}</span>
                  </Link>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p className="line-clamp-3 text-sm text-slate-600 mt-2">{project.summary}</p>
                    <div className="project-meta">
                      {project.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </div>
                    <Link className="project-link" href={project.link}>
                      View Case Study <i>→</i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <p className="projects-note py-8 text-center">No projects found for the selected category.</p>
            )}
          </div>
        </section>


        {/* BOTTOM CTA BANNER */}
        <section className="py-10 md:py-16 bg-white border-t border-gray-100 pk-reveal-scale" id="contact">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
              <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2.5 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
                  <span className="w-7 h-[2px] bg-[#6ac045] rounded-full" />
                  DISCUSS YOUR REQUIREMENT
                  <span className="w-7 h-[2px] bg-[#6ac045] rounded-full" />
                </div>
                <h2 style={{ color: '#ffffff', lineHeight: 1.32, marginBottom: '24px' }} className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-[1.32] mb-6">
                  Have a Similar Project in Mind?
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.75, marginBottom: '38px' }} className="text-white/90 text-sm sm:text-base md:text-[16px] leading-[1.75] mb-9 sm:mb-10 font-normal max-w-2xl mx-auto">
                  Tell us what you need to map, survey or develop. Share your scope, available data and expected timeline, and our team will help you work through the next steps.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-1">
                  <Link
                    href="/contact"
                    style={{ color: '#ffffff' }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Discuss Your Project &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Casestudies;
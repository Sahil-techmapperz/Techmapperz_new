"use client";

import { useState, useMemo } from "react";
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
    image: "/XYZ-Mockup.png",
    link: "/service/it/mobile-app-development",
    tags: ["Mobile App", "Android & iOS", "Marketplace"]
  }
];

const Casestudies = ({ portfolioData }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return curatedProjects;
    return curatedProjects.filter(project => project.filterGroup === filter);
  }, [filter]);

  return (
    <div className="projects-page-wrapper">
      <main>
        {/* BANNER SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="breadcrumb">Home <b>›</b> <span>Projects</span></div>
              <div className="eyebrow">Selected Project Experience</div>
              <h1 style={{ marginTop: '13px' }}>
                Our Work in GIS, Drone Surveys and Development
              </h1>
              <p className="lead">
                Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications. From railway corridors and mining areas to online stores, these examples show the different requirements our team has worked on.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">Explore Projects</a>
                <a className="btn btn-secondary" href="/contact">Discuss Your Project</a>
              </div>
              <div className="hero-tags">
                <span><i></i>GIS & CAD</span>
                <span><i></i>Drone & LiDAR</span>
                <span><i></i>Raster & Point Cloud</span>
                <span><i></i>Web & Mobile Apps</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="map-window">
                <div className="window-top">
                  <div className="dots"><i></i><i></i><i></i></div>
                  <span>TECHMAPPERZ · PROJECT ATLAS</span>
                  <span>LIVE LAYERS</span>
                </div>
                <div className="map-stage">
                  <svg viewBox="0 0 660 520" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="land" x1="0" x2="1">
                        <stop stopColor="#dbeadf"/>
                        <stop offset="1" stopColor="#c8dfd4"/>
                      </linearGradient>
                      <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
                        <stop stopColor="#9acbe1"/>
                        <stop offset="1" stopColor="#72b4d4"/>
                      </linearGradient>
                      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#fff" strokeOpacity=".38" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="660" height="520" fill="url(#land)"/>
                    <path d="M-30 440 C80 330 125 360 210 280 C300 195 305 110 400 70 C510 25 570 90 690 25 L690 540 L-30 540Z" fill="url(#water)" opacity=".78"/>
                    <g fill="none" stroke="#9ab39f" strokeWidth="2" opacity=".65">
                      <path d="M0 145 C120 80 190 190 300 135 S510 60 690 130"/>
                      <path d="M-20 255 C90 210 195 290 325 240 S500 150 690 235"/>
                      <path d="M0 365 C120 300 240 420 390 340 S540 270 690 330"/>
                    </g>
                    <g fill="#e7c98f" stroke="#b18a45" strokeWidth="1.5">
                      <path d="M130 80 L270 56 L310 160 L175 190Z"/>
                      <path d="M355 190 L520 145 L575 245 L400 275Z"/>
                      <path d="M95 290 L245 250 L285 365 L130 400Z"/>
                    </g>
                    <path d="M30 470 C150 390 220 410 305 300 S440 210 625 95" fill="none" stroke="#fff" strokeWidth="16"/>
                    <path d="M30 470 C150 390 220 410 305 300 S440 210 625 95" fill="none" stroke="#e33434" strokeWidth="4" strokeDasharray="10 8"/>
                    <path d="M75 38 L580 465" fill="none" stroke="#1267b1" strokeWidth="4" strokeDasharray="7 9"/>
                    <g fill="#fff" stroke="#1267b1" strokeWidth="4">
                      <circle cx="92" cy="52" r="9"/>
                      <circle cx="230" cy="170" r="9"/>
                      <circle cx="365" cy="286" r="9"/>
                      <circle cx="565" cy="450" r="9"/>
                    </g>
                    <rect width="660" height="520" fill="url(#grid)"/>
                  </svg>
                  <div className="map-panel">
                    <b>PROJECT LAYERS</b>
                    <div><i></i>Railway corridor</div>
                    <div><i></i>Mine features</div>
                    <div><i></i>Land use</div>
                    <div><i></i>Pipeline assets</div>
                  </div>
                </div>
              </div>
              <div className="floating float-a">
                <strong>20+ delivered projects</strong>
                <span>GIS, Drone & IT solutions</span>
                <div className="progress"><i></i></div>
              </div>
              <div className="floating float-b">
                <strong>Project-ready outputs</strong>
                <span>GIS · CAD · LAS · GeoTIFF · Web & Apps</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section className="featured">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">FEATURED PROJECT</div>
                <h2 style={{ marginTop: '12px' }}>Railway Corridor Mapping with Drone LiDAR</h2>
                <p>
                  Techmapperz worked on topographic survey and mapping for the Gonda–Anand Nagar railway corridor in Uttar Pradesh. The project covered 173 km along a 100 m-wide corridor, with LiDAR data processing and mapping outputs for railway planning.
                </p>
              </div>
            </div>

            <article className="feature-card">
              <div className="feature-visual relative min-h-[420px]">
                <Image
                  src="/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
                  alt="Railway Corridor Mapping with Drone LiDAR"
                  fill
                  className="object-cover"
                />
                <span className="feature-badge">Railway & Infrastructure</span>
                <div className="feature-layer">
                  <b>Integrated geospatial workflow</b>
                  <p>Drone LiDAR · Point-cloud processing · Terrain mapping · L Section</p>
                </div>
              </div>

              <div className="feature-copy">
                <div className="project-category"><i></i> Drone LiDAR & Corridor Mapping</div>
                <h2>Gonda–Anand Nagar Railway Corridor</h2>
                <p>A major linear-infrastructure survey covering 173 km along a 100 m-wide corridor, delivering dense point clouds, DEM, DSM, contours and drawing-ready railway alignments.</p>
                
                <div className="metric-grid">
                  <div className="metric"><b>173 km</b><span>Corridor length</span></div>
                  <div className="metric"><b>100 m</b><span>Survey width</span></div>
                  <div className="metric"><b>Drone LiDAR</b><span>Acquisition workflow</span></div>
                  <div className="metric"><b>L Section · CAD</b><span>Key outputs</span></div>
                </div>

                <div className="feature-tags">
                  <span>Drone LiDAR</span>
                  <span>Point-cloud processing</span>
                  <span>Terrain mapping</span>
                  <span>L Section</span>
                  <span>GIS & CAD</span>
                </div>

                <Link className="btn btn-dark" href="/portfolios/topographical_railway_survey">
                  View Railway Case Study →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* EXPLORE OUR PROJECTS GRID */}
        <section id="projects">
          <div className="container projects-shell">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">PROJECT PORTFOLIO</div>
                <h2 style={{ marginTop: '12px' }}>Explore Our Projects</h2>
                <p>Browse by service to find work relevant to your requirement. Open a project to see the scope, our contribution and the outputs delivered.</p>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="filter-bar" aria-label="Project filters">
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
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <Link href={project.link} className="thumb block relative h-56 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        {/* CASE STUDY STRUCTURE */}
        <section className="case-structure">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow" style={{ color: '#8ed4ff' }}>Case Study Structure</div>
                <h2 style={{ marginTop: '12px' }}>Every project deserves more than a thumbnail and two generic sentences.</h2>
                <p>Dedicated case-study pages explain the work in a consistent, buyer-friendly order.</p>
              </div>
            </div>
            <div className="case-grid">
              <div className="case-item">
                <b>01 · Context</b>
                <h3>Challenge & objective</h3>
                <p>Industry, location, scale, business problem, project objective and client acceptance criteria.</p>
              </div>
              <div className="case-item">
                <b>02 · Delivery</b>
                <h3>Scope & methodology</h3>
                <p>Inputs, survey plan, processing steps, feature classes, software and production approach.</p>
              </div>
              <div className="case-item">
                <b>03 · Quality</b>
                <h3>QA/QC & review</h3>
                <p>Projection, topology, attributes, accuracy, completeness, revision stages and final validation.</p>
              </div>
              <div className="case-item">
                <b>04 · Result</b>
                <h3>Deliverables & outcome</h3>
                <p>Output formats, quantities, measurable results and how the data supports planning or operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY PATH */}
        <section>
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Our Delivery Path</div>
                <h2 style={{ marginTop: '12px' }}>A repeatable process behind every successful project.</h2>
                <p>The portfolio shows not only what was delivered, but also how Techmapperz manages scope, production and quality.</p>
              </div>
            </div>
            <div className="workflow-grid">
              <div className="work-card">
                <b>01</b>
                <h3>Review</h3>
                <p>Understand objectives, source data, geography, formats, accuracy and timelines.</p>
              </div>
              <div className="work-card">
                <b>02</b>
                <h3>Plan</h3>
                <p>Define survey or production methodology, team, checkpoints and acceptance criteria.</p>
              </div>
              <div className="work-card">
                <b>03</b>
                <h3>Produce</h3>
                <p>Execute acquisition, processing, digitisation, modelling or application development.</p>
              </div>
              <div className="work-card">
                <b>04</b>
                <h3>Validate</h3>
                <p>Check geometry, topology, attributes, projection, completeness and usability.</p>
              </div>
              <div className="work-card">
                <b>05</b>
                <h3>Deliver</h3>
                <p>Share review data, close comments and hand over project-ready outputs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="py-12 md:py-20 bg-white" id="contact">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
              <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  <span className="w-6 h-[2px] bg-[#6ac045]" />
                  START A PROJECT CONVERSATION
                  <span className="w-6 h-[2px] bg-[#6ac045]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                  Have a Similar Project in Mind?
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal">
                  Tell us what you need to map, survey or develop. Share your scope, available data and expected timeline, and our team will help you work through the next steps.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Discuss Your Project &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Casestudies;
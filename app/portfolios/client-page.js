"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────── */
const curatedProjects = [
  // GIS & Mapping
  { id: 1, title: "Gas Pipeline Digitisation & Digital Asset Registry", summary: "GIS digitisation of a 6,000 km gas pipeline network and its associated assets, bringing route information and engineering records into a structured spatial database.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/1.webp", link: "/portfolios/gas_pipeline_digitization", tags: ["GIS Database", "Asset Mapping", "Pipeline"] },
  { id: 2, title: "Hooghly Riverfront GIS Mapping", summary: "Land-use and GIS mapping across approximately 100 km\u00b2 along both banks of the Hooghly River within the Kolkata Metropolitan Area, supporting riverfront planning.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/1.webp", link: "/portfolios/hooghly_riverfront_mapping", tags: ["Riverfront", "Land Use", "Urban GIS"] },
  { id: 3, title: "Urban and Rural Land-Use Mapping", summary: "Land-use and land-cover mapping across 400 km\u00b2 of urban and rural areas, with settlement features organised into more than 15 mapping layers.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/1.webp", link: "/portfolios/urban_rural_extraction", tags: ["LULC", "Settlements", "15+ Layers"] },
  { id: 4, title: "GIS Mapping for an Industrial Area", summary: "GIS mapping of a 65.45 km\u00b2 industrial area, with more than 50 feature layers organised to support land-use and infrastructure planning.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp", link: "/portfolios/industrial_mapping_planning", tags: ["Industrial", "Planning", "50+ Layers"] },
  { id: 5, title: "Road Network Mapping", summary: "GIS mapping work covering an 8,000 km road network, with road information prepared for navigation-related use.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Navigation Mapping/1.webp", link: "/portfolios/navigation_mapping", tags: ["Roads", "8,000 km", "Navigation"] },
  { id: 6, title: "Map Georeferencing and Attribute Capture", summary: "Georeferencing of scanned maps and capture of plot and village attributes to prepare a spatially referenced GIS dataset.", category: "GIS & Mapping", filterGroup: "gis", image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/1.webp", link: "/portfolios/georeferencing", tags: ["Cadastral", "Georeferencing", "Attributes"] },
  // Drone & LiDAR
  { id: 7, title: "Railway Corridor Mapping with Drone LiDAR", summary: "Topographic survey and mapping for the Gonda\u2013Anand Nagar railway corridor in Uttar Pradesh, covering 173 km along a 100 m-wide corridor.", category: "Drone & LiDAR", filterGroup: "drone", image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp", link: "/portfolios/topographical_railway_survey", tags: ["LiDAR", "Railway", "173 km Corridor"] },
  { id: 8, title: "Drone-Based 2D Feature Extraction for Mining Areas", summary: "2D feature extraction and CAD mapping across approximately 556.67 km\u00b2 of mining areas, using drone imagery to map surface features, infrastructure, water bodies and land use.", category: "Drone & LiDAR", filterGroup: "drone", image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/1.webp", link: "/portfolios/mining_area_extraction", tags: ["Mining", "556.67 km\u00b2", "CAD & GIS"] },
  { id: 9, title: "Drone Survey and Mapping of Pipeline Assets", summary: "Drone survey and GIS digitisation for a 45 km ammonia and water pipeline network in Gujarat, mapping the route and associated assets.", category: "Drone & LiDAR", filterGroup: "drone", image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/1.webp", link: "/portfolios/ammonia_water_pipeline", tags: ["Drone Survey", "Pipeline Assets", "45 km"] },
  // Websites & Apps
  { id: 10, title: "Aaheli Publishers \u2014 Online Bookstore", summary: "An e-commerce website for Aaheli Publishers, with book categories, product pages, customer accounts and a shopping cart for direct online purchases.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/aahelipublishers/1.webp", link: "/portfolios/aahelipublishers", tags: ["E-commerce", "Online Store", "Cart & Checkout"] },
  { id: 11, title: "White Spread Foods \u2014 B2B Sales Portal", summary: "A B2B ordering platform and sales dashboard for White Spread Foods, with approval-based order workflows and connections to the company's wider operational systems.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/whitespreadfoods_banner.webp", link: "/portfolios/white-spread-foods", tags: ["B2B Portal", "Sales Dashboard", "Workflows"] },
  { id: 12, title: "Project Expo Guru \u2014 Business Website", summary: "A business website for Project Expo Guru, presenting its interior design services, company information and creative work.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/Expoguru/1.webp", link: "/portfolios/expoguru", tags: ["Interior Design", "Portfolio Showcase", "Creative"] },
  { id: 13, title: "SHRC \u2014 Membership and Complaint Website", summary: "A website supporting member onboarding and complaint management for a welfare organisation.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/shrc_banner.webp", link: "/portfolios/shrc", tags: ["NGO / Welfare", "Member Onboarding", "Complaints"] },
  { id: 14, title: "FacultiesOnline \u2014 Student and Teacher Platform", summary: "An online platform developed to connect students and teachers.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/FacultiesOnline/1.webp", link: "/portfolios/facultiesOnline", tags: ["EdTech", "Teacher Connect", "Community"] },
  { id: 15, title: "Welho \u2014 Dairy Company Website", summary: "A company website developed for Welho to present its dairy business online.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/Welho_banner.webp", link: "/portfolios/welho", tags: ["Corporate Website", "Food & Dairy", "Product Catalog"] },
  { id: 16, title: "Manusher Ghorbari \u2014 Accommodation Booking Website", summary: "An accommodation website with property information and booking functionality.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/manuser-ghorbaari1.webp", link: "/portfolios/manusher-ghorbari", tags: ["Hospitality", "Booking Engine", "Property Profiles"] },
  { id: 17, title: "Novustech \u2014 Drone Services Website", summary: "A website developed for Novustech to introduce its drone services and company information.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/Novustech/1.webp", link: "/portfolios/novustech", tags: ["Drone Industry", "Company Website", "Service Showcase"] },
  { id: 18, title: "UrPayroll \u2014 HRM Application", summary: "An HRM application covering attendance and employee workflows.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/Urpayroll/1.webp", link: "/portfolios/urpayroll", tags: ["HRM App", "Attendance", "Employee Portal"] },
  { id: 19, title: "PAS Auto Source \u2014 Automobile Business Website", summary: "A business website developed for PAS Auto Source to present its automobile-related services.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/premierautosource_banner.webp", link: "/portfolios/pas-auto-source", tags: ["Automotive", "Business Website", "Vehicle Inventory"] },
  { id: 20, title: "Ambient Construction \u2014 Company Website", summary: "A company website developed for Ambient Construction to present its business online.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/IT_portfolio/ambientconstruction/1.webp", link: "/portfolios/ambientconstruction", tags: ["Construction", "Company Website", "Project Portfolio"] },
  { id: 21, title: "XYZ Finders \u2014 Classified Marketplace App", summary: "Android and iOS applications for XYZFinders, a multi-category marketplace connecting buyers, sellers, service providers and store owners.", category: "Websites & Apps", filterGroup: "digital", image: "/Photos/XYZ-Mockup.webp", link: "/service/it/mobile-app-development", tags: ["Mobile App", "Android & iOS", "Marketplace"] },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "gis", label: "GIS & Mapping" },
  { id: "drone", label: "Drone & LiDAR" },
  { id: "digital", label: "Websites & Apps" },
];

export default function Casestudies() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const cb = (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(e.target);
        }
      });
    };
    const obs = new IntersectionObserver(cb, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]);

  const filteredProjects = useMemo(
    () => filter === "all" ? curatedProjects : curatedProjects.filter((p) => p.filterGroup === filter),
    [filter]
  );

  return (
    <main>
      {/* 01 HERO */}
      <section className="relative min-h-[620px] sm:min-h-[760px] md:min-h-[860px] lg:min-h-[94vh] flex flex-col justify-center items-start text-white pt-40 sm:pt-52 md:pt-60 pb-24 sm:pb-32 md:pb-40 overflow-hidden bg-[#030f1e]">
        <Image src="/Photos/portfolio_hero_banner.jpg" alt="Techmapperz Portfolio - GIS, Drone Mapping & Digital Development" fill priority quality={100} sizes="100vw" className="object-cover object-top pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/45 pointer-events-none" />
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] drop-shadow-sm">OUR PORTFOLIO</span>
          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight text-white max-w-4xl drop-shadow-md">
            Our Work in GIS, Drone Surveys and Development
          </h1>
          <p className="text-[#E8F5F3] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-3xl drop-shadow-sm">
            Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications. From railway corridors and mining areas to online stores, these examples show the different requirements our team has worked on.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
              Explore Projects
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* 02 FEATURED PROJECT */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center opacity-0 translate-y-6 transition-all duration-700" data-reveal>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 block">FEATURED PROJECT</span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                Railway Corridor Mapping with Drone LiDAR
              </h2>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-4 max-w-xl">
                Techmapperz worked on topographic survey and mapping for the Gonda&ndash;Anand Nagar railway corridor in Uttar Pradesh. The project covered 173 km along a 100 m-wide corridor, with LiDAR data processing and mapping outputs for railway planning.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6 max-w-xs">
                <div className="bg-white border border-[#DDE3EA] rounded-xl p-3.5 shadow-sm">
                  <span className="block text-[22px] font-bold text-[#0C2E60]">173 km</span>
                  <span className="text-[12px] text-[#4B5563] font-medium">Corridor length</span>
                </div>
                <div className="bg-white border border-[#DDE3EA] rounded-xl p-3.5 shadow-sm">
                  <span className="block text-[22px] font-bold text-[#0C2E60]">100 m</span>
                  <span className="text-[12px] text-[#4B5563] font-medium">Survey width</span>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-[11px] font-bold text-[#4B5563] uppercase tracking-wider block mb-2">Scope:</span>
                <div className="flex flex-wrap gap-2">
                  {["Drone LiDAR", "Point-cloud processing", "Terrain mapping", "L Section"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 rounded-full text-[12px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-7">
                <Link href="/portfolios/topographical_railway_survey" className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px]">
                  View Railway Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DDE3EA] bg-white shadow-xl group">
                <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full overflow-hidden bg-[#E8F5F3]">
                  <Image src="/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp" alt="Railway Corridor Mapping with Drone LiDAR" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DDE3EA] text-[#0C2E60] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">Railway &amp; Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 PROJECT GRID */}
      <section id="projects" className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700" data-reveal>
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">PROJECT PORTFOLIO</span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">Explore Our Projects</h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              Browse by service to find work relevant to your requirement. Open a project to see the scope, our contribution and the outputs delivered.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10 opacity-0 translate-y-6 transition-all duration-700" data-reveal aria-label="Project filters">
            {FILTERS.map(({ id, label }) => (
              <button key={id} onClick={() => setFilter(id)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-bold border transition-all duration-200 min-h-[40px] ${filter === id ? "bg-[#0C2E60] text-white border-[#0C2E60] shadow-md" : "bg-white text-[#0C2E60] border-[#DDE3EA] hover:border-[#0C2E60] hover:bg-[#F6F8FB]"}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <article key={project.id} className="bg-white rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col opacity-0 translate-y-6" data-reveal style={{ transitionDelay: `${(index % 3) * 0.08}s`, transitionDuration: "600ms" }}>
                <Link href={project.link} className="relative block h-52 w-full overflow-hidden flex-shrink-0 bg-[#E8F5F3]">
                  <Image src={project.image} alt={project.title} fill priority={index < 3} loading={index < 6 ? "eager" : "lazy"} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DDE3EA] text-[#0C2E60] text-[11px] font-bold uppercase tracking-wider shadow-sm">{project.category}</span>
                </Link>
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-2">{project.title}</h3>
                  <p className="text-[#4B5563] text-[15px] leading-[1.65] line-clamp-3 flex-1">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 text-[11px] font-semibold">{tag}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="mt-4 inline-flex items-center gap-1.5 text-[#1656B8] hover:text-[#0C2E60] font-bold text-[14px] transition-colors duration-200 group/link">
                    View Case Study <span className="group-hover/link:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="py-12 text-center text-[#4B5563] text-[16px]">No projects found for the selected category.</p>
          )}
        </div>
      </section>

      {/* 04 CTA BANNER */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10 opacity-0 translate-y-6 transition-all duration-700" data-reveal>
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">DISCUSS YOUR REQUIREMENT</span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">Have a Similar Project in Mind?</h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Tell us what you need to map, survey or develop. Share your scope, available data and expected timeline, and our team will help you work through the next steps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto">
                Discuss Your Project &rarr;
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto">
                Send Your Scope of Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

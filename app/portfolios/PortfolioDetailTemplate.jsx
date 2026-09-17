"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./case-study-template.css";

export default function PortfolioDetailTemplate({
  portfolioItem,
  projectSlug = null
}) {
  const [activeSection, setActiveSection] = useState("overview");
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "", caption: "" });

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightbox((prev) => ({ ...prev, open: false }));
      }
    };
    if (lightbox.open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.open]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["overview", "solution", "project-images", "results"];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update active navigation link
          const scrollPosition = window.scrollY + 180;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      rootMargin: "100px 0px -40px 0px",
      threshold: 0.01,
    });

    const elements = document.querySelectorAll(
      ".tm-reveal, .tm-reveal-scale, .tm-reveal-left, .tm-reveal-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [portfolioItem]);

  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0c2e60] mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-6">The requested case study could not be loaded.</p>
          <Link href="/portfolios" className="px-6 py-3 bg-[#d2292b] text-white rounded-xl font-semibold">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // â”€â”€ Safe Data Extraction â”€â”€
  const projectDetails = portfolioItem.projectDetails || {};
  const isGIS = (portfolioItem.category || "").toLowerCase().includes("gis") || 
                (portfolioItem.category || "").toLowerCase().includes("drone") ||
                (portfolioItem.category || "").toLowerCase().includes("lidar") ||
                (portfolioItem.category || "").toLowerCase().includes("mapping");

  const isExpoGuru = portfolioItem.slug === 'expoguru' || 
                     projectSlug === 'expoguru' || 
                     (portfolioItem.name && portfolioItem.name.toLowerCase().includes('expo guru'));

  // Client Name
  const clientName = isExpoGuru 
    ? "Project Expo Guru" 
    : (portfolioItem.client || projectDetails.client || (portfolioItem.name ? portfolioItem.name.split("â€”")[0].split("-")[0].trim() : "Client Project"));

  // Category
  const categoryLabel = isExpoGuru 
    ? "Website development" 
    : (portfolioItem.category || (isGIS ? "GIS & Drone Survey" : "Website development"));

  // Headline
  const headline = isExpoGuru 
    ? "A clearer digital presence for a creative business."
    : (portfolioItem.headline || portfolioItem.seoTitle?.split("|")[0]?.trim() || portfolioItem.name || "Delivering high-impact digital and geospatial solutions.");

  // Format headline with emphasis on the last clause if no manual <em> is present
  const formatHeadline = (text) => {
    if (isExpoGuru) {
      return (
        <>
          A clearer digital presence for a <em>creative business.</em>
        </>
      );
    }
    if (portfolioItem.headline) {
      const parts = text.split(" ");
      if (parts.length > 3) {
        const mainPart = parts.slice(0, -2).join(" ");
        const emPart = parts.slice(-2).join(" ");
        return (
          <>
            {mainPart} <em>{emPart}</em>
          </>
        );
      }
    }
    return text;
  };

  // Details & Descriptions
  const detailsArray = Array.isArray(portfolioItem.details) 
    ? portfolioItem.details 
    : [portfolioItem.description || portfolioItem.details || ""].filter(Boolean);

  const heroSummary = isExpoGuru
    ? "We developed a dynamic website that brings Project Expo Guruâ€™s interior design and creative services into one professional, easy-to-explore online presence."
    : (portfolioItem.summary || detailsArray[0] || "Comprehensive solution developed by Techmapperz to address business and operational objectives.");

  const overviewLead = isExpoGuru
    ? "Project Expo Guru works across interior design, exhibitions, events and related creative services. The business needed a website that could explain this range clearly while reflecting the care it brings to its work."
    : (detailsArray[0] || heroSummary);

  const overviewSecondary = isExpoGuru
    ? "We developed a dynamic company website with a clear service structure, a design-led presentation and responsive layouts for visitors browsing on different devices."
    : (detailsArray[1] || (isGIS 
        ? "Our geospatial team executed end-to-end data acquisition, high-precision processing, and GIS feature extraction to deliver engineering-ready datasets."
        : "We developed a dynamic company website with a clear service structure, design-led presentation, and responsive layouts for visitors browsing across devices."));

  // Tags
  let tags = [];
  if (isExpoGuru) {
    tags = ["Dynamic website", "Responsive layouts", "Service presentation"];
  } else if (Array.isArray(portfolioItem.tags) && portfolioItem.tags.length > 0) {
    tags = portfolioItem.tags;
  } else if (portfolioItem.techStack) {
    const rawStack = Array.isArray(portfolioItem.techStack) 
      ? portfolioItem.techStack 
      : portfolioItem.techStack.split(",").map(t => t.trim());
    tags = rawStack.slice(0, 4);
  } else {
    tags = [categoryLabel, projectDetails.industry || "Enterprise", projectDetails.projectType || "Dynamic Solution"].filter(Boolean);
  }

  // Meta Box Information
  const metaRole = isExpoGuru 
    ? "Website design & development" 
    : (portfolioItem.role || projectDetails.ourRole || (isGIS ? "Survey & GIS Data Production" : "Website design & development"));

  const metaDelivery = isExpoGuru 
    ? "Dynamic, responsive company website" 
    : (portfolioItem.delivery || projectDetails.projectType || projectDetails.delivery || projectDetails.duration || (isGIS ? "Engineering-Ready GIS Dataset" : "Dynamic, responsive company website"));

  const metaIndustry = isExpoGuru 
    ? "Interior design & creative services" 
    : (projectDetails.industry || (isGIS ? "Geospatial & Infrastructure" : "Digital & Business Services"));

  // Challenges / Objectives
  const challengesList = portfolioItem.challenges || portfolioItem.objectives || [];
  const defaultChallenge = isGIS 
    ? "Large corridor surveys require consistent point density, high geometric precision, and rapid field acquisition without disrupting regular operational workflows."
    : "A broad service offering can be difficult to explain online. Visitors needed to see what the company offers, understand whether it suited their requirements, and find a clear next step for an inquiry.";

  // Solutions & Features
  const solutionsList = portfolioItem.solutions || [];
  const solutionsSummary = portfolioItem.solutionsSummary || 
    (isGIS
      ? "We structured the survey and mapping workflow around three core principles: high spatial accuracy, rigorous classification standards, and delivery in standard engineering CAD/GIS formats."
      : "We organised the experience around three simple questions: Who is the company? What does it offer? How can a prospective client take the conversation forward?");

  // Normalized 4 Solution Pillars
  const solutionPillars = [];
  if (solutionsList.length >= 4) {
    solutionPillars.push(...solutionsList.slice(0, 4));
  } else if (solutionsList.length > 0) {
    solutionsList.forEach((sol) => {
      solutionPillars.push({
        title: sol.title,
        description: sol.description,
        features: sol.features || []
      });
    });
    // Add default complementary pillars if less than 4
    const fallbacks = [
      {
        title: isGIS ? "Rigorous Quality Verification" : "A clear company story",
        description: isGIS ? "Systematic ground-control point cross-validation ensuring mm/cm level spatial accuracy." : "We structured the overview and sections so visitors can easily locate the exact information they need."
      },
      {
        title: isGIS ? "Multi-Format Deliverable Export" : "Design that supports the work",
        description: isGIS ? "Prepared outputs in DTM, DSM, Shapefile, and CAD formats ready for direct planning integration." : "Modern responsive layout giving visual content room to stand out while maintaining high readability."
      },
      {
        title: isGIS ? "Efficient Turnaround" : "Responsive, dynamic development",
        description: isGIS ? "Streamlined processing pipeline allowing fast delivery of critical spatial layers." : "Fast-loading, mobile-friendly pages with dynamic architecture ready for future expansion."
      },
      {
        title: isGIS ? "Standardized Layer Registry" : "A foundation for inquiries and search",
        description: isGIS ? "Standardized spatial database layers structured for smooth GIS ingestion and asset management." : "Search-optimized foundation with structured conversion pathways for prospective clients."
      }
    ];
    for (let i = solutionPillars.length; i < 4; i++) {
      solutionPillars.push(fallbacks[i]);
    }
  } else {
    // Default 4 pillars
    solutionPillars.push(
      {
        title: isGIS ? "Precision Aerial Survey" : "A clear company story",
        description: isGIS ? "High-density sensor payload coverage across the entire project area." : "We structured the company overview and service sections so visitors could move effortlessly from intro to work."
      },
      {
        title: isGIS ? "Advanced Feature Extraction" : "Design that supports the work",
        description: isGIS ? "Accurate classification of key assets, terrain contours, and infrastructure boundaries." : "Modern layout giving key visual assets room to stand out while keeping descriptions accessible."
      },
      {
        title: isGIS ? "Rigorous Quality Verification" : "Responsive, dynamic development",
        description: isGIS ? "Systematic ground-control point calibration to guarantee compliance with engineering standards." : "Responsive pages for desktop, tablet, and mobile browsing with scalable future architecture."
      },
      {
        title: isGIS ? "Ready-to-Use Spatial Datasets" : "A foundation for inquiries and search",
        description: isGIS ? "Delivered structured GIS layers and CAD files ready for immediate planning and analysis." : "Organised pages to support search visibility and refined content flow to drive inquiry conversions."
      }
    );
  }

  // Process Steps
  const processSteps = portfolioItem.executionSteps || [
    { step: "01", title: isGIS ? "Define survey scope" : "Understand the business", desc: "Outlined requirements, accuracy tolerances, and alignment corridors." },
    { step: "02", title: isGIS ? "Plan acquisition" : "Plan the content", desc: "Coordinated logistics, flight paths, and information architecture." },
    { step: "03", title: isGIS ? "Process & extract" : "Design & develop", desc: "Executed data capture, point cloud processing, and responsive layout." },
    { step: "04", title: isGIS ? "Validate & deliver" : "Refine for delivery", desc: "Conducted QA checks and delivered final production-grade assets." }
  ];

  // Hero main featured image
  const heroImageSrc = isExpoGuru
    ? "/Photos/IT_portfolio/Expoguru/homepage.jpg"
    : (portfolioItem.image || "/Photos/portfolio_hero_banner.jpg");

  // Gallery Images - show exactly 2 cards for detail presentation
  let galleryItems = [];

  if (isExpoGuru) {
    galleryItems = [
      {
        src: "/Photos/IT_portfolio/Expoguru/company.jpg",
        title: "02 / Company overview",
        caption: "A dedicated introduction to the business.",
        alt: "Project Expo Guru company overview page"
      },
      {
        src: "/Photos/IT_portfolio/Expoguru/services.jpg",
        title: "03 / Service presentation",
        caption: "Space to explain the clientâ€™s capabilities.",
        alt: "Project Expo Guru website service presentation"
      }
    ];
  } else if (portfolioItem.galleryImages && portfolioItem.galleryImages.length > 0) {
    // Exclude hero image if duplicate so the 2 gallery cards show distinct views
    const nonHeroImages = portfolioItem.galleryImages.filter(img => {
      const s = typeof img === 'string' ? img : img?.src;
      return s && s !== heroImageSrc;
    });
    const sourceImages = nonHeroImages.length >= 2 ? nonHeroImages : portfolioItem.galleryImages;

    sourceImages.forEach((item, idx) => {
      galleryItems.push({
        src: item.src || item,
        title: item.title || `0${idx + 2} / Detail Screen`,
        caption: item.caption || item.alt || "Detailed project deliverable and presentation screen.",
        alt: item.alt || `${clientName} project image ${idx + 2}`
      });
    });
  } else if (portfolioItem.gallery && portfolioItem.gallery.length > 0) {
    const nonHeroImages = portfolioItem.gallery.filter(img => {
      const s = typeof img === 'string' ? img : img?.src;
      return s && s !== heroImageSrc;
    });
    const sourceImages = nonHeroImages.length >= 2 ? nonHeroImages : portfolioItem.gallery;

    sourceImages.forEach((item, idx) => {
      galleryItems.push({
        src: item.src || item,
        title: item.title || `0${idx + 2} / Deliverable Screen`,
        caption: item.alt || item.caption || "Project deliverable and visualization view.",
        alt: item.alt || `${clientName} image ${idx + 2}`
      });
    });
  } else {
    if (portfolioItem.image2) {
      galleryItems.push({
        src: portfolioItem.image2,
        title: "02 / Technical Detail",
        caption: "Technical workflow and execution view.",
        alt: `${clientName} technical detail`
      });
    }
    if (portfolioItem.image3) {
      galleryItems.push({
        src: portfolioItem.image3,
        title: "03 / Feature Presentation",
        caption: "In-depth presentation of key capabilities and architecture.",
        alt: `${clientName} feature view`
      });
    }
    // Fallback if needed
    if (galleryItems.length === 0 && heroImageSrc) {
      galleryItems.push({
        src: heroImageSrc,
        title: "02 / System Overview",
        caption: "Dedicated presentation of core deliverables.",
        alt: `${clientName} overview`
      });
      galleryItems.push({
        src: heroImageSrc,
        title: "03 / Feature Presentation",
        caption: "Capabilities and interface architecture.",
        alt: `${clientName} features`
      });
    } else if (galleryItems.length === 1) {
      galleryItems.push({
        src: galleryItems[0].src,
        title: "03 / Feature Presentation",
        caption: "Capabilities and interface architecture.",
        alt: `${clientName} features`
      });
    }
  }

  // Ensure exactly 2 cards are shown
  galleryItems = galleryItems.slice(0, 2);

  // Results & Impact
  const resultsLead = isExpoGuru
    ? "The completed website gave Project Expo Guru a professional place to present its business and direct prospective clients. The value delivered was a clearer, more consistent online experience with room to grow."
    : (portfolioItem.resultsLead || portfolioItem.conclusion || `The completed ${isGIS ? "survey dataset" : "website"} gave ${clientName} a dependable foundation for operations, client engagement, and long-term expansion.`);

  const rawResults = portfolioItem.results || portfolioItem.benefits || [];
  const resultsItems = isExpoGuru ? [
    {
      label: "Services brought together",
      value: "Coherent",
      description: "A coherent website structure for explaining interior design and related creative capabilities.",
      icon: "âœ“"
    },
    {
      label: "A consistent brand presentation",
      value: "Professional",
      description: "Company information, service content and visuals presented within one professional experience.",
      icon: "âœ“"
    },
    {
      label: "A clearer path to an inquiry",
      value: "Conversion",
      description: "Content organised to help prospective clients understand the business before getting in touch.",
      icon: "âœ“"
    },
    {
      label: "Room for the next stage",
      value: "Scalable",
      description: "A dynamic website structure that can accommodate additional services, projects and content.",
      icon: "âœ“"
    }
  ] : (rawResults.length > 0 ? rawResults : [
    {
      label: isGIS ? "Precision Datasets" : "Services brought together",
      value: "Standardized",
      description: isGIS ? "Comprehensive spatial dataset ready for direct CAD/GIS engineering integration." : "A coherent website structure for explaining services and capabilities clearly.",
      icon: "âœ“"
    },
    {
      label: isGIS ? "Time Efficiency" : "Consistent brand presentation",
      value: "Streamlined",
      description: isGIS ? "Significantly reduced survey turnaround compared to conventional manual methods." : "Company information and visuals presented within one professional experience.",
      icon: "âœ“"
    },
    {
      label: isGIS ? "Multi-Layer Intelligence" : "Clearer path to an inquiry",
      value: "Actionable",
      description: isGIS ? "Layered data supporting terrain analysis, hazard detection, and asset monitoring." : "Content organised to help prospective clients understand the business before getting in touch.",
      icon: "âœ“"
    },
    {
      label: isGIS ? "Scalable Asset Register" : "Room for the next stage",
      value: "Future-Ready",
      description: isGIS ? "Structured geospatial schema enabling ongoing asset lifecycle tracking and expansion." : "A dynamic website structure that can accommodate additional services, projects, and content.",
      icon: "âœ“"
    }
  ]);

  return (
    <main id="main" className="tm-case-study">

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          1. HERO SECTION
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-10 md:py-16 bg-white border-b border-[#DDE3EA] overflow-hidden" aria-labelledby="case-title">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(12,46,96,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(12,46,96,0.03) 1px,transparent 1px)',backgroundSize:'48px 48px'}} />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(circle at 8% 12%, rgba(22,86,184,0.08), transparent 35%), radial-gradient(circle at 94% 20%, rgba(15,118,110,0.07), transparent 35%)'}} />

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="tm-reveal-left tm-delay-1">
              {/* Breadcrumbs — above eyebrow */}
              <nav className="flex items-center gap-2 text-[13px] mb-5 flex-wrap" aria-label="Breadcrumb">
                <Link href="/" className="text-[#1656B8] font-medium hover:text-[#0C2E60] hover:underline transition-colors duration-150">Home</Link>
                <span aria-hidden="true" className="text-[#94a3b8]">&rsaquo;</span>
                <Link href="/portfolios" className="text-[#1656B8] font-medium hover:text-[#0C2E60] hover:underline transition-colors duration-150">Projects</Link>
                <span aria-hidden="true" className="text-[#94a3b8]">&rsaquo;</span>
                <span aria-current="page" className="text-[#0C2E60] font-semibold">{portfolioItem.breadcrumbTitle || clientName}</span>
              </nav>

              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 block">
                {portfolioItem.eyebrow || `${categoryLabel} · Case study`}
              </span>
              <h1 id="case-title" className="text-[32px] sm:text-[34px] md:text-[48px] lg:text-[54px] font-bold text-[#0C2E60] leading-[1.18] tracking-tight mb-5">
                {formatHeadline(headline)}
              </h1>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mb-7 max-w-lg">
                {heroSummary}
              </p>

              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href={portfolioItem.ctaButton1?.href || "#project-images"}
                  className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px]"
                >
                  {portfolioItem.ctaButton1?.label || "View Project Images"} <span aria-hidden="true">{String.fromCharCode(8595)}</span>
                </a>
                <Link
                  href={portfolioItem.ctaButton2?.href || "/contact"}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  {portfolioItem.ctaButton2?.label || "Start a Similar Project"}
                </Link>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="text-[12px] font-semibold text-[#0F766E] bg-[#E8F5F3] border border-[#0F766E]/25 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Project Mockup Frame */}
            <figure className="hero-project tm-reveal-right tm-delay-2" style={{marginTop:"30px !important"}}>
              <div className="image-header">
                <span>{(portfolioItem.breadcrumbTitle || clientName).toUpperCase()}</span>
                <span>{metaDelivery}</span>
              </div>
              <div className="hero-project-image-wrap">
                <Image
                  src={heroImageSrc}
                  alt={`${clientName} project overview screenshot`}
                  width={1362}
                  height={935}
                  priority
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <figcaption>
                <span>01 / Overview</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          2. IN-PAGE STICKY NAVIGATION BAR
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <nav className="case-nav" aria-label="On this page">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-center gap-6 h-full">
          <span className="nav-label">In this case study</span>
          <a href="#overview" className={activeSection === "overview" ? "active" : ""}>Overview</a>
          <a href="#solution" className={activeSection === "solution" ? "active" : ""}>Our solution</a>
          <a href="#project-images" className={activeSection === "project-images" ? "active" : ""}>Project images</a>
          <a href="#results" className={activeSection === "results" ? "active" : ""}>Results</a>
        </div>
      </nav>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          3. SECTION 01: PROJECT OVERVIEW & CHALLENGE
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="overview" aria-labelledby="overview-title">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-8 md:mb-12 tm-reveal">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              {portfolioItem.overviewEyebrow || "PROJECT OVERVIEW"}
            </span>
            <h2 id="overview-title" className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl tm-reveal tm-delay-1">
              {portfolioItem.overviewTitle || (isGIS
                ? "Transforming complex terrain into dependable engineering data."
                : "Helping visitors understand the business at a glance.")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14">
            {/* Left: overview text */}
            <div className="tm-reveal-left tm-delay-1">
              <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mb-5">{overviewLead}</p>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] font-normal leading-[1.65] mb-5">{overviewSecondary}</p>
              {detailsArray.length > 2 && (
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] font-normal leading-[1.65]">{detailsArray[2]}</p>
              )}
            </div>

            {/* Right: challenge card */}
            <div className="bg-[#F6F8FB] border border-[#DDE3EA] border-l-[3px] border-l-[#0F766E] rounded-2xl p-6 md:p-8 tm-reveal-right tm-delay-2 h-fit">
              <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-4">
                {portfolioItem.challengeTitle || "The challenge"}
              </h3>
              {portfolioItem.challengeIntro && (
                <p className="text-[#4B5563] text-[15px] leading-[1.65] mb-4">{portfolioItem.challengeIntro}</p>
              )}
              {portfolioItem.challengeListIntro && (
                <p className="font-semibold text-[#0C2E60] text-[14px] mb-3">{portfolioItem.challengeListIntro}</p>
              )}
              {portfolioItem.challengeItems && portfolioItem.challengeItems.length > 0 ? (
                <ul className="space-y-3">
                  {portfolioItem.challengeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#4B5563] text-[15px] leading-[1.65]">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : challengesList.length > 0 ? (
                challengesList.map((ch, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-4 pt-4 border-t border-[#DDE3EA]" : ""}>
                    {ch.title && <h4 className="text-[15px] font-bold text-[#0C2E60] mb-1">{ch.title}</h4>}
                    <p className="text-[#4B5563] text-[15px] leading-[1.65]">{ch.description || ch}</p>
                  </div>
                ))
              ) : (
                <p className="text-[#4B5563] text-[15px] leading-[1.65]">{defaultChallenge}</p>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]" id="solution" aria-labelledby="solution-title">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-8 md:mb-12 tm-reveal">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              {portfolioItem.solutionEyebrow || "OUR APPROACH"}
            </span>
            <h2 id="solution-title" className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl tm-reveal tm-delay-1">
              {portfolioItem.solutionTitle || (isGIS
                ? "A structured workflow built around engineering precision."
                : "A website built around the questions clients ask.")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-10 md:mb-14">
            {/* Left: solution narrative */}
            <div className="tm-reveal-left tm-delay-1">
              <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mb-5">{solutionsSummary}</p>
              {portfolioItem.solutionSecondary && (
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">{portfolioItem.solutionSecondary}</p>
              )}
            </div>

            {/* Right: key deliverables card */}
            <div className="bg-white border border-[#DDE3EA] rounded-2xl p-6 md:p-8 shadow-sm tm-reveal-right tm-delay-2">
              <h3 className="text-[19px] md:text-[20px] font-bold text-[#0C2E60] leading-[1.25] mb-5">
                {portfolioItem.deliverablesTitle || "Key Deliverables"}
              </h3>
              <ul className="space-y-4">
                {(portfolioItem.deliverables && portfolioItem.deliverables.length > 0
                  ? portfolioItem.deliverables.map((d) => ({ title: d, description: null }))
                  : solutionPillars
                ).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-bold text-[#0C2E60] text-[15px] block leading-snug">{item.title}</span>
                      {item.description && (
                        <span className="text-[#4B5563] text-[13px] leading-[1.6] mt-0.5 block">{item.description}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="tm-reveal">
            <p className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-5">
              {portfolioItem.processTitle || "PROJECT PROCESS"}
            </p>
            <div className="process-timeline-card">
              {processSteps.map((stepItem, idx) => (
                <div key={idx} className="process-timeline-step">
                  <div className="step-top-row">
                    <span className="step-number-badge">{stepItem.step || `0${idx + 1}`}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <span className="step-arrow-pill" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="#1656b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                  <h3 className="step-card-title">{stepItem.title}</h3>
                  {stepItem.desc && <p className="step-card-desc">{stepItem.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section className="gallery-dark-section" id="project-images" aria-labelledby="gallery-title">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Header row */}
          <div className="gallery-dark-header tm-reveal">
            <div>
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 block">
                {portfolioItem.galleryEyebrow || "THE PROJECT IN DETAIL"}
              </span>
              <h2 id="gallery-title" className="text-[26px] sm:text-[28px] md:text-[38px] font-bold text-white leading-[1.2] tracking-tight">
                {portfolioItem.galleryTitle || "Evidence from the work."}
              </h2>
            </div>
          </div>

          {/* 3-image split: large left + two stacked right */}
          {(() => {
            const allImgs = portfolioItem.galleryImages && portfolioItem.galleryImages.length > 0
              ? portfolioItem.galleryImages
              : galleryItems;
            const featured = allImgs[0];
            const side = allImgs.slice(1, 3);
            return (
              <div className="gallery-dark-grid tm-reveal tm-delay-1">
                {featured && (
                  <figure
                    className="gallery-dark-card gallery-dark-card--featured"
                    onClick={() => setLightbox({ open: true, src: featured.src, title: featured.title, caption: featured.caption })}
                  >
                    <div className="gallery-dark-img-wrap">
                      <Image src={featured.src} alt={featured.alt || featured.title} width={1200} height={900} className="gallery-dark-img" loading="lazy" unoptimized />
                    </div>
                    <figcaption className="gallery-dark-caption">
                      {featured.step && <span className="gallery-step-label">{featured.step}</span>}
                      <div className="gallery-caption-body">
                        <div>
                          <p className="gallery-caption-title">{featured.title}</p>
                          {featured.caption && <p className="gallery-caption-text">{featured.caption}</p>}
                        </div>
                        <span className="gallery-expand-icon" aria-hidden="true">{String.fromCharCode(8599)}</span>
                      </div>
                    </figcaption>
                  </figure>
                )}
                {side.length > 0 && (
                  <div className="gallery-dark-stack">
                    {side.map((img, idx) => (
                      <figure
                        key={idx}
                        className="gallery-dark-card"
                        onClick={() => setLightbox({ open: true, src: img.src, title: img.title, caption: img.caption })}
                      >
                        <div className="gallery-dark-img-wrap">
                          <Image src={img.src} alt={img.alt || img.title} width={800} height={500} className="gallery-dark-img" loading="lazy" unoptimized />
                        </div>
                        <figcaption className="gallery-dark-caption">
                          {img.step && <span className="gallery-step-label">{img.step}</span>}
                          <div className="gallery-caption-body">
                            <div>
                              <p className="gallery-caption-title">{img.title}</p>
                              {img.caption && <p className="gallery-caption-text">{img.caption}</p>}
                            </div>
                            <span className="gallery-expand-icon" aria-hidden="true">{String.fromCharCode(8599)}</span>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          6. SECTION 04: IMPACT & RESULTS
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="results" aria-labelledby="results-title">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-8 md:mb-12 tm-reveal">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              {portfolioItem.resultsEyebrow || "IMPACT & RESULTS"}
            </span>
            <h2 id="results-title" className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl tm-reveal tm-delay-1">
              {portfolioItem.resultsTitle || (isGIS
                ? "Reliable geospatial intelligence for critical decisions."
                : "A stronger starting point for client conversations.")}
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-2xl mt-3 tm-reveal tm-delay-1">
              {resultsLead}
            </p>
            {portfolioItem.resultsSubtitle && (
              <p className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mt-8 mb-0 tm-reveal">
                {portfolioItem.resultsSubtitle}
              </p>
            )}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {resultsItems.map((res, idx) => {
              const label = res.label || res.title || (typeof res === "string" ? res : "");
              const hasDesc = Boolean(res.description || res.desc);
              const hasValue = Boolean(res.value && res.value !== "✓" && res.value !== "âœ“");

              return (
                <li
                  key={idx}
                  className={`bg-white border border-[#DDE3EA] rounded-2xl p-5 md:p-6 flex ${hasDesc || hasValue ? "items-start" : "items-center"} gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 tm-reveal tm-delay-${(idx % 4) + 1}`}
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    {hasValue && (
                      <span className="inline-block text-[#1656B8] text-[11px] font-bold uppercase tracking-[0.1em] bg-[#EDF3FC] px-2.5 py-0.5 rounded-full mb-2">
                        {res.value}
                      </span>
                    )}
                    <h3 className={`text-[17px] md:text-[18px] font-bold text-[#0C2E60] leading-[1.3] ${hasDesc ? "mb-1.5" : "m-0"}`}>
                      {label}
                    </h3>
                    {hasDesc && (
                      <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] m-0">
                        {res.description || res.desc}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {portfolioItem.conclusion && portfolioItem.conclusion !== resultsLead && (
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-3xl mt-6 mb-8 tm-reveal">
              {portfolioItem.conclusion}
            </p>
          )}

          {/* Testimonial */}
          {portfolioItem.testimonial && (
            <div className="bg-[#F6F8FB] border border-[#DDE3EA] rounded-2xl p-6 md:p-8 tm-reveal-scale tm-delay-2">
              <p className="text-[#0C2E60] text-[18px] md:text-[20px] font-medium leading-[1.6] mb-5 italic">
                &ldquo;{portfolioItem.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0C2E60] flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0">
                  {portfolioItem.testimonial.author?.[0] || "T"}
                </div>
                <div>
                  <b className="text-[#0C2E60] text-[15px] block">{portfolioItem.testimonial.author}</b>
                  {portfolioItem.testimonial.position && (
                    <span className="text-[#4B5563] text-[13px]">{portfolioItem.testimonial.position}</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          7. BOTTOM CONVERSION CTA BANNER
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10 tm-reveal-scale">
            {/* Decorative rings */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />

            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET&apos;S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 style={{color:'#ffffff'}} className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold tracking-tight leading-[1.2]">
                Planning a {isGIS ? "survey or mapping" : "digital"} project with us?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share your project details, specifications and timeline. Our team will review your requirements and suggest an optimal workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Project {String.fromCharCode(8594)}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#DDE3EA] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Send Your Scope of Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          8. LIGHTBOX MODAL (Full Resolution Image Zoom)
          â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {lightbox.open && (
        <div className="tm-lightbox-overlay" onClick={() => setLightbox({ open: false, src: "", title: "", caption: "" })}>
          <div className="tm-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="tm-lightbox-header">
              <span className="tm-lightbox-title">{lightbox.title}</span>
              <button
                className="tm-lightbox-close"
                onClick={() => setLightbox({ open: false, src: "", title: "", caption: "" })}
                aria-label="Close image preview"
              >
                âœ•
              </button>
            </div>
            <div className="tm-lightbox-body">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                width={1600}
                height={1100}
                className="w-auto h-auto max-h-[70vh] object-contain"
              />
            </div>
            {lightbox.caption && (
              <div className="p-4 bg-white border-t border-slate-100 text-sm text-slate-600">
                {lightbox.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./case-study-template.css";
import { FaCheck } from "react-icons/fa";

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
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.05,
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

  // ── Safe Data Extraction ──
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
    : (portfolioItem.client || projectDetails.client || (portfolioItem.name ? portfolioItem.name.split("—")[0].split("-")[0].trim() : "Client Project"));

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
    ? "We developed a dynamic website that brings Project Expo Guru’s interior design and creative services into one professional, easy-to-explore online presence."
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
        caption: "Space to explain the client’s capabilities.",
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
      icon: "✓"
    },
    {
      label: "A consistent brand presentation",
      value: "Professional",
      description: "Company information, service content and visuals presented within one professional experience.",
      icon: "✓"
    },
    {
      label: "A clearer path to an inquiry",
      value: "Conversion",
      description: "Content organised to help prospective clients understand the business before getting in touch.",
      icon: "✓"
    },
    {
      label: "Room for the next stage",
      value: "Scalable",
      description: "A dynamic website structure that can accommodate additional services, projects and content.",
      icon: "✓"
    }
  ] : (rawResults.length > 0 ? rawResults : [
    {
      label: isGIS ? "Precision Datasets" : "Services brought together",
      value: "Standardized",
      description: isGIS ? "Comprehensive spatial dataset ready for direct CAD/GIS engineering integration." : "A coherent website structure for explaining services and capabilities clearly.",
      icon: "✓"
    },
    {
      label: isGIS ? "Time Efficiency" : "Consistent brand presentation",
      value: "Streamlined",
      description: isGIS ? "Significantly reduced survey turnaround compared to conventional manual methods." : "Company information and visuals presented within one professional experience.",
      icon: "✓"
    },
    {
      label: isGIS ? "Multi-Layer Intelligence" : "Clearer path to an inquiry",
      value: "Actionable",
      description: isGIS ? "Layered data supporting terrain analysis, hazard detection, and asset monitoring." : "Content organised to help prospective clients understand the business before getting in touch.",
      icon: "✓"
    },
    {
      label: isGIS ? "Scalable Asset Register" : "Room for the next stage",
      value: "Future-Ready",
      description: isGIS ? "Structured geospatial schema enabling ongoing asset lifecycle tracking and expansion." : "A dynamic website structure that can accommodate additional services, projects, and content.",
      icon: "✓"
    }
  ]);

  return (
    <main id="main" className="tm-case-study">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="case-title">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs tm-reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/portfolios">Projects</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{clientName}</span>
          </nav>

          <div className="hero-grid">
            {/* Left Copy */}
            <div className="hero-copy tm-reveal-left tm-delay-1">
              <p className="eyebrow">
                <span></span> {categoryLabel} · Case study
              </p>
              <p className="client-name">{clientName}</p>
              <h1 id="case-title">{formatHeadline(headline)}</h1>

              <div className="hero-summary">
                <p>{heroSummary}</p>
                <div className="hero-actions">
                  <a className="button" href="#project-images">
                    View Project Images <span aria-hidden="true">↓</span>
                  </a>
                  <Link className="button button-outline" href="/contact">
                    Start a Similar Project
                  </Link>
                </div>
                {tags.length > 0 && (
                  <div className="hero-tags">
                    {tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Project Mockup Frame */}
            <figure className="hero-project tm-reveal-right tm-delay-2">
              <div className="image-header">
                <span>{clientName.toUpperCase()}</span>
                <span>{metaDelivery}</span>
              </div>
              <div 
                className="hero-project-image-wrap"
                onClick={() => setLightbox({
                  open: true,
                  src: heroImageSrc,
                  title: `${clientName} — Primary Overview`,
                  caption: heroSummary
                })}
              >
                <Image
                  src={heroImageSrc}
                  alt={`${clientName} project overview screenshot`}
                  width={1362}
                  height={935}
                  priority
                  className="w-full h-auto"
                />
              </div>
              <figcaption>
                <span>01 / Overview</span>
                <span 
                  className="view-action"
                  onClick={() => setLightbox({
                    open: true,
                    src: heroImageSrc,
                    title: `${clientName} — Primary Overview`,
                    caption: heroSummary
                  })}
                >
                  View full image <span aria-hidden="true">↗</span>
                </span>
              </figcaption>
            </figure>
          </div>

          {/* 4-Column Project Meta Box */}
          <dl className="project-meta tm-reveal tm-delay-2">
            <div className="tm-reveal-scale tm-delay-1">
              <dt>Client</dt>
              <dd>{clientName}</dd>
            </div>
            <div className="tm-reveal-scale tm-delay-2">
              <dt>Industry</dt>
              <dd>{metaIndustry}</dd>
            </div>
            <div className="tm-reveal-scale tm-delay-3">
              <dt>Our role</dt>
              <dd>{metaRole}</dd>
            </div>
            <div className="tm-reveal-scale tm-delay-4">
              <dt>Delivery</dt>
              <dd>{metaDelivery}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. IN-PAGE STICKY NAVIGATION BAR
          ───────────────────────────────────────────────────────────── */}
      <nav className="case-nav" aria-label="On this page">
        <div className="container">
          <span className="nav-label">In this case study</span>
          <a href="#overview" className={activeSection === "overview" ? "active" : ""}>
            Overview
          </a>
          <a href="#solution" className={activeSection === "solution" ? "active" : ""}>
            Our solution
          </a>
          <a href="#project-images" className={activeSection === "project-images" ? "active" : ""}>
            Project images
          </a>
          <a href="#results" className={activeSection === "results" ? "active" : ""}>
            Results
          </a>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          3. SECTION 01: PROJECT OVERVIEW & CHALLENGE
          ───────────────────────────────────────────────────────────── */}
      <section className="section container editorial" id="overview" aria-labelledby="overview-title">
        <div className="section-label tm-reveal">
          <span>01</span> Project overview
        </div>
        <div className="section-content">
          <h2 id="overview-title" className="tm-reveal tm-delay-1">
            {isGIS 
              ? "Transforming complex terrain into dependable engineering data." 
              : "Helping visitors understand the business at a glance."}
          </h2>
          <div className="overview-layout">
            <div className="tm-reveal-left tm-delay-1">
              <p className="lead">{overviewLead}</p>
              <p>{overviewSecondary}</p>
              {detailsArray.length > 2 && (
                <p>{detailsArray[2]}</p>
              )}
            </div>
            <div className="challenge tm-reveal-right tm-delay-2">
              <h3>The challenge</h3>
              {challengesList.length > 0 ? (
                challengesList.map((ch, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-4 pt-3 border-t border-slate-200" : ""}>
                    {ch.title && <h4 className="text-[15px] font-bold text-[#0c2e60] mb-1">{ch.title}</h4>}
                    <p>{ch.description || ch}</p>
                  </div>
                ))
              ) : (
                <p>{defaultChallenge}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SECTION 02: THE SOLUTION & METHODOLOGY
          ───────────────────────────────────────────────────────────── */}
      <section className="solution-band section" id="solution" aria-labelledby="solution-title">
        <div className="container editorial">
          <div className="section-label tm-reveal">
            <span>02</span> The solution
          </div>
          <div className="section-content">
            <h2 id="solution-title" className="tm-reveal tm-delay-1">
              {isGIS 
                ? "A structured workflow built around engineering precision." 
                : "A website built around the questions clients ask."}
            </h2>
            <p className="lead tm-reveal tm-delay-1">{solutionsSummary}</p>

            {/* 4 Solution Pillars (2x2 Grid) */}
            <div className="solution-list">
              {solutionPillars.map((pillar, idx) => (
                <article key={idx} className={`tm-reveal-scale tm-delay-${(idx % 4) + 1}`}>
                  <span className="item-number">0{idx + 1} /</span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    {pillar.features && pillar.features.length > 0 && (
                      <ul className="solution-features">
                        {pillar.features.map((feat, fIdx) => (
                          <li key={fIdx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* 4-Step Delivery Process */}
            <div className="process tm-reveal">
              <p className="small-heading">How we delivered it</p>
              <ol>
                {processSteps.map((stepItem, idx) => (
                  <li key={idx} className={`tm-reveal tm-delay-${(idx % 4) + 1}`}>
                    <div className="flex items-center gap-3">
                      <span className="step-number">{stepItem.step || `0${idx + 1}`}</span>
                      <span>{stepItem.title}</span>
                    </div>
                    {stepItem.desc && (
                      <p className="step-desc">{stepItem.desc}</p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SECTION 03: VISUAL GALLERY
          ───────────────────────────────────────────────────────────── */}
      <section className="section container gallery-section" id="project-images" aria-labelledby="gallery-title">
        <div className="gallery-heading tm-reveal">
          <div>
            <p className="eyebrow"><span></span> The project in detail</p>
            <h2 id="gallery-title">See the work.</h2>
          </div>
          <p>
            Real screens and deliverables from the project.<br />
            Select an image to view it in full resolution.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((img, idx) => (
            <figure key={idx} className={`tm-reveal-scale tm-delay-${idx + 1}`}>
              <div 
                className="gallery-img-wrap"
                onClick={() => setLightbox({
                  open: true,
                  src: img.src,
                  title: img.title,
                  caption: img.caption
                })}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `${clientName} screen ${idx + 1}`}
                  width={1362}
                  height={935}
                  className="w-full h-auto cursor-pointer"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <div>
                  <span className="caption-title">{img.title}</span>
                  <p>{img.caption}</p>
                </div>
                <span 
                  className="view-action"
                  onClick={() => setLightbox({
                    open: true,
                    src: img.src,
                    title: img.title,
                    caption: img.caption
                  })}
                >
                  <span aria-hidden="true">↗</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="image-credit tm-reveal">
          Screenshots and deliverables from project reference materials. Work executed and delivered by Techmapperz.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SECTION 04: IMPACT & RESULTS
          ───────────────────────────────────────────────────────────── */}
      <section className="results-band section" id="results" aria-labelledby="results-title">
        <div className="container editorial">
          <div className="section-label tm-reveal">
            <span>03</span> Impact & results
          </div>
          <div className="section-content">
            <h2 id="results-title" className="tm-reveal tm-delay-1">
              {isGIS 
                ? "Reliable geospatial intelligence for critical decisions." 
                : "A stronger starting point for client conversations."}
            </h2>
            <p className="lead tm-reveal tm-delay-1">{resultsLead}</p>

            <ul className="results-list">
              {resultsItems.map((res, idx) => (
                <li key={idx} className={`tm-reveal tm-delay-${(idx % 4) + 1}`}>
                  <span className="check-badge" aria-hidden="true">
                    <FaCheck size={13} />
                  </span>
                  <div>
                    {res.value && res.value !== "✓" && (
                      <span className="metric-badge">{res.value}</span>
                    )}
                    <h3>{res.label || res.title}</h3>
                    <p>{res.description || res.desc || ""}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Testimonial (if available) */}
            {portfolioItem.testimonial && (
              <div className="testimonial-wrap tm-reveal-scale tm-delay-2">
                <p className="testimonial-quote">“{portfolioItem.testimonial.quote}”</p>
                <div className="testimonial-author">
                  <b>{portfolioItem.testimonial.author}</b>
                  {portfolioItem.testimonial.position && (
                    <span>{portfolioItem.testimonial.position}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CONVERSION CTA BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="cta container tm-reveal-scale" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="cta-title">
            Make your {isGIS ? "data" : "website"} work harder for your business.
          </h2>
          <p>
            Tell us what you need to survey, map, design, or develop.<br />
            We’ll help you shape the right solution from scope to delivery.
          </p>
        </div>
        <Link className="button" href="/contact">
          Discuss Your Project <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. LIGHTBOX MODAL (Full Resolution Image Zoom)
          ───────────────────────────────────────────────────────────── */}
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
                ✕
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
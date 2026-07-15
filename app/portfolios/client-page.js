"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import "./projects.css";

const Casestudies = ({ 
  portfolioData, 
  defaultCategory = "All"
}) => {
  const [filter, setFilter] = useState("all");

  const transformedProjects = portfolioData.map((item, index) => {
    const slug = item.slug || item.link?.replace('/portfolios/', '') || 
                item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    // Attempt to map older categories to new filter names
    let categoryClass = "";
    const catLower = item.category?.toLowerCase() || "";
    if (catLower.includes("gis")) categoryClass += "gis ";
    if (catLower.includes("drone") || catLower.includes("lidar")) categoryClass += "drone ";
    if (catLower.includes("infrastructure") || catLower.includes("railway") || catLower.includes("mining")) categoryClass += "infrastructure ";
    if (catLower.includes("web") || catLower.includes("app") || catLower.includes("it")) categoryClass += "digital ";
    
    // Ensure all has something, if not just default to gis or digital based on "IT" vs "GIS"
    if (categoryClass === "") {
        if (item.category === "IT") categoryClass = "digital";
        else categoryClass = "gis";
    }

    return {
      id: index,
      title: item.name,
      category: item.category,
      categoryClass: categoryClass.trim(),
      techStack: item.techStack,
      description: Array.isArray(item.details) ? item.details[0] : item.description,
      image: item.image,
      link: `/portfolios/${slug}`,
      period: item.projectDetails?.year || "2024",
      location: item.projectDetails?.location || "India",
      slug: slug,
    };
  });

  const filteredProjects = useMemo(() => {
    if (filter === "all") return transformedProjects;
    return transformedProjects.filter(project => project.categoryClass.includes(filter));
  }, [transformedProjects, filter]);

  return (
    <div className="projects-page-wrapper">
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="breadcrumb">Home <b>›</b> <span>Projects</span></div>
              <div className="eyebrow">Selected Project Experience</div>
              <h1 style={{marginTop: '13px'}}>Real geospatial work.<br/><em>Clear project evidence.</em></h1>
              <p className="lead">Explore GIS mapping, drone survey, LiDAR, feature extraction, pipeline, land-use and geospatial application projects delivered for infrastructure, utilities, mining, government and commercial organisations.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">Explore Projects</a>
                <a className="btn btn-secondary" href="/contact">Share Your Requirement</a>
              </div>
              <div className="hero-tags">
                <span><i></i>GIS & CAD</span>
                <span><i></i>Drone & LiDAR</span>
                <span><i></i>Raster & Point Cloud</span>
                <span><i></i>Web & Mobile GIS</span>
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
                <strong>10+ flagship projects</strong>
                <span>Geospatial work featured first</span>
                <div className="progress"><i></i></div>
              </div>
              <div className="floating float-b">
                <strong>Project-ready outputs</strong>
                <span>GIS · CAD · LAS · GeoTIFF · Dashboards</span>
              </div>
            </div>
          </div>
        </section>


        <section className="featured">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Featured Case Study</div>
                <h2 style={{marginTop: '12px'}}>Lead with the work that best represents Techmapperz today.</h2>
                <p>The projects page should open with a technically strong geospatial assignment rather than a general website or software card.</p>
              </div>
              <div className="side-note">
                Replace the illustrative map with approved project imagery, classified point-cloud views and final deliverable screenshots before publishing.
              </div>
            </div>
            <article className="feature-card">
              <div className="feature-visual">
                <svg viewBox="0 0 720 540" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="fbg" x1="0" x2="1" y1="0" y2="1">
                      <stop stopColor="#b8d8c3"/>
                      <stop offset=".48" stopColor="#e2d8aa"/>
                      <stop offset="1" stopColor="#92b7ca"/>
                    </linearGradient>
                    <pattern id="fg" width="38" height="38" patternUnits="userSpaceOnUse">
                      <path d="M38 0H0V38" fill="none" stroke="#fff" strokeOpacity=".26"/>
                    </pattern>
                  </defs>
                  <rect width="720" height="540" fill="url(#fbg)"/>
                  <g fill="none" stroke="#809b78" strokeWidth="2" opacity=".65">
                    <path d="M-20 130 C120 45 245 195 365 105 S570 10 750 120"/>
                    <path d="M-20 240 C100 170 230 310 370 220 S580 125 750 220"/>
                    <path d="M-20 365 C130 275 270 435 410 340 S610 260 750 335"/>
                    <path d="M-20 470 C150 380 280 520 455 435 S610 375 750 430"/>
                  </g>
                  <g fill="#d6b879" stroke="#a88c52" strokeWidth="2">
                    <path d="M72 115 L235 80 L282 195 L115 230Z"/>
                    <path d="M410 95 L590 70 L633 180 L455 206Z"/>
                    <path d="M335 302 L515 265 L568 397 L380 425Z"/>
                  </g>
                  <path d="M45 485 C135 420 185 435 252 365 S335 295 395 225 S500 165 675 45" fill="none" stroke="#f8fbfd" strokeWidth="31"/>
                  <path d="M45 485 C135 420 185 435 252 365 S335 295 395 225 S500 165 675 45" fill="none" stroke="#202d3b" strokeWidth="7"/>
                  <path d="M45 485 C135 420 185 435 252 365 S335 295 395 225 S500 165 675 45" fill="none" stroke="#e33434" strokeWidth="2.5" strokeDasharray="13 10"/>
                  <g fill="#fff" stroke="#1267b1" strokeWidth="4">
                    <circle cx="74" cy="466" r="9"/>
                    <circle cx="252" cy="365" r="9"/>
                    <circle cx="395" cy="225" r="9"/>
                    <circle cx="638" cy="72" r="9"/>
                  </g>
                  <rect width="720" height="540" fill="url(#fg)"/>
                </svg>
                <span className="feature-badge">Railway & Infrastructure</span>
                <div className="feature-layer">
                  <b>Integrated geospatial workflow</b>
                  <p>Drone LiDAR · DGPS control · Point-cloud processing · Terrain products · CAD/GIS delivery</p>
                </div>
              </div>
              <div className="feature-copy">
                <div className="project-category"><i></i> Drone LiDAR & Corridor Mapping</div>
                <h2>Topographic survey and mapping for a 173 km railway corridor</h2>
                <p>A large linear-infrastructure assignment covering a 100 m corridor, integrating drone LiDAR data, terrain processing, contours and engineering-ready geospatial deliverables.</p>
                <div className="metric-grid">
                  <div className="metric"><b>173 km</b><span>Project corridor</span></div>
                  <div className="metric"><b>100 m</b><span>Survey width</span></div>
                  <div className="metric"><b>LiDAR + DGPS</b><span>Acquisition workflow</span></div>
                  <div className="metric"><b>DEM · DSM · CAD</b><span>Key outputs</span></div>
                </div>
                <div className="feature-tags">
                  <span>Point Cloud</span>
                  <span>Contours</span>
                  <span>Orthomosaic</span>
                  <span>Cross Sections</span>
                  <span>GIS & CAD</span>
                </div>
                <Link className="btn btn-dark" href="/portfolios/lidar-case-study">View Full Case Study →</Link>
              </div>
            </article>
          </div>
        </section>

        <section id="projects">
          <div className="container projects-shell">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Project Portfolio</div>
                <h2 style={{marginTop: '12px'}}>Browse work by service and project type.</h2>
                <p>Each card summarises the client problem, project scale, technical workflow and final outputs. Dedicated case-study pages can provide the complete methodology and results.</p>
              </div>
              <div className="side-note">
                Use the category taxonomy across cards, case-study pages and URLs.
              </div>
            </div>
            
            <div className="filter-bar" aria-label="Project filters">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
              <button className={`filter-btn ${filter === 'gis' ? 'active' : ''}`} onClick={() => setFilter('gis')}>GIS & Mapping</button>
              <button className={`filter-btn ${filter === 'drone' ? 'active' : ''}`} onClick={() => setFilter('drone')}>Drone & LiDAR</button>
              <button className={`filter-btn ${filter === 'infrastructure' ? 'active' : ''}`} onClick={() => setFilter('infrastructure')}>Infrastructure</button>
              <button className={`filter-btn ${filter === 'webgis' ? 'active' : ''}`} onClick={() => setFilter('webgis')}>Web & Mobile GIS</button>
              <button className={`filter-btn ${filter === 'digital' ? 'active' : ''}`} onClick={() => setFilter('digital')}>Websites & Apps</button>
            </div>
            
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card" onClick={() => window.location.href = project.link}>
                  <div className="thumb">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="thumb-label">{project.category || 'Techmapperz'}</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p className="line-clamp-3 text-sm text-slate-500 mt-2">{project.description}</p>
                    <div className="project-meta">
                      {project.techStack?.split(',').slice(0, 3).map((tech, idx) => (
                        <span key={idx}>{tech.trim()}</span>
                      ))}
                    </div>
                    <Link className="project-link" href={project.link}>View Case Study <i>→</i></Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <p className="projects-note py-8 text-center">No projects found for the selected category.</p>
            )}

            <p className="projects-note">Only publish projects with approved descriptions, imagery and non-confidential information. Sensitive client names and locations can remain anonymised.</p>
          </div>
        </section>

        <section className="case-structure">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow" style={{color: '#8ed4ff'}}>Case Study Structure</div>
                <h2 style={{marginTop: '12px'}}>Every project deserves more than a thumbnail and two generic sentences.</h2>
                <p>Dedicated case-study pages should explain the work in a consistent, buyer-friendly order.</p>
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

        <section>
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Our Delivery Path</div>
                <h2 style={{marginTop: '12px'}}>A repeatable process behind every successful project.</h2>
                <p>The portfolio should show not only what was delivered, but also how Techmapperz manages scope, production and quality.</p>
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

        <section className="quality">
          <div className="container quality-grid">
            <div className="quality-panel">
              <div className="check-row">
                <div className="check-icon">01</div>
                <div><b>Projection & coordinate system</b><span>Correct spatial reference and units</span></div>
                <div className="status">CHECKED</div>
              </div>
              <div className="check-row">
                <div className="check-icon">02</div>
                <div><b>Geometry & topology</b><span>Gaps, overlaps, dangles and closure rules</span></div>
                <div className="status">CHECKED</div>
              </div>
              <div className="check-row">
                <div className="check-icon">03</div>
                <div><b>Attributes & coding</b><span>Feature codes, domains and required values</span></div>
                <div className="status">CHECKED</div>
              </div>
              <div className="check-row">
                <div className="check-icon">04</div>
                <div><b>Completeness & formats</b><span>Coverage, naming and output compatibility</span></div>
                <div className="status">CHECKED</div>
              </div>
              <div className="check-row">
                <div className="check-icon">05</div>
                <div><b>Final review package</b><span>Client comments and acceptance record</span></div>
                <div className="status">READY</div>
              </div>
            </div>
            <div className="quality-copy">
              <div className="eyebrow">Quality Is Part of the Story</div>
              <h2 style={{marginTop: '12px'}}>Show the controls behind the final map, model or application.</h2>
              <p>A strong project page should demonstrate that Techmapperz understands production quality, not simply attractive screenshots. Include non-confidential examples of QA reports, topology checks, classified point clouds and review workflows.</p>
              <div className="quality-list">
                <div><i></i>Independent production checks</div>
                <div><i></i>Client-defined specifications</div>
                <div><i></i>Controlled review cycles</div>
                <div><i></i>Multi-format validation</div>
                <div><i></i>Data naming standards</div>
                <div><i></i>Final delivery register</div>
              </div>
            </div>
          </div>
        </section>

        <section className="digital">
          <div className="container digital-grid">
            <div className="screens">
              <div className="screen-main">
                <svg viewBox="0 0 600 400" preserveAspectRatio="none">
                  <rect width="600" height="400" fill="#f5f8fa"/>
                  <rect width="600" height="42" fill="#0b2341"/>
                  <rect x="20" y="62" width="118" height="315" rx="10" fill="#fff" stroke="#d8e3eb"/>
                  <rect x="158" y="62" width="422" height="210" rx="11" fill="#d9e8ef"/>
                  <path d="M165 250C250 170 300 230 365 150S475 100 570 130" fill="none" stroke="#1267b1" strokeWidth="10"/>
                  <g fill="#fff" stroke="#e33434" strokeWidth="4">
                    <circle cx="250" cy="190" r="9"/>
                    <circle cx="365" cy="150" r="9"/>
                    <circle cx="520" cy="120" r="9"/>
                  </g>
                  <rect x="158" y="291" width="125" height="86" rx="10" fill="#e7f1f8"/>
                  <rect x="297" y="291" width="125" height="86" rx="10" fill="#e9f5f2"/>
                  <rect x="436" y="291" width="144" height="86" rx="10" fill="#fbefef"/>
                </svg>
              </div>
              <div className="screen-phone">
                <svg viewBox="0 0 250 500" preserveAspectRatio="none">
                  <rect width="250" height="500" fill="#fff"/>
                  <rect width="250" height="55" fill="#0b2341"/>
                  <rect x="18" y="75" width="214" height="205" rx="16" fill="#d9e8ef"/>
                  <path d="M25 250C70 195 105 225 145 165S195 135 228 110" fill="none" stroke="#1267b1" strokeWidth="7"/>
                  <circle cx="145" cy="165" r="9" fill="#fff" stroke="#e33434" strokeWidth="4"/>
                  <rect x="18" y="300" width="214" height="60" rx="13" fill="#edf5fa"/>
                  <rect x="18" y="375" width="102" height="95" rx="13" fill="#eaf5f2"/>
                  <rect x="130" y="375" width="102" height="95" rx="13" fill="#fbefef"/>
                </svg>
              </div>
            </div>
            <div className="digital-copy">
              <div className="eyebrow">From Project Data to Digital Access</div>
              <h2 style={{marginTop: '12px'}}>Connect selected projects to Web and Mobile GIS solutions.</h2>
              <p>The Projects page can also demonstrate how survey, mapping and asset data can evolve into searchable dashboards, geoportals and field applications.</p>
              <div className="digital-list">
                <div><i>01</i><span><b>Project dashboards:</b> progress, quantities, status and map-based reporting.</span></div>
                <div><i>02</i><span><b>Asset applications:</b> search, inspect and update geotagged assets.</span></div>
                <div><i>03</i><span><b>Field workflows:</b> mobile data collection, photographs and validation.</span></div>
                <div><i>04</i><span><b>Secure sharing:</b> role-based access to selected project layers and reports.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-card">
              <div className="cta-copy">
                <div className="eyebrow" style={{color: '#8ed4ff'}}>Start a Project Conversation</div>
                <h2 style={{marginTop: '12px', color: '#fff'}}>Have a GIS, drone survey or geospatial application requirement?</h2>
                <p>Share the project location, area or corridor length, available inputs, required accuracy, expected deliverables and timeline. Our team can review the scope and suggest a practical delivery approach.</p>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-primary" href="/contact">Discuss Your Project</Link>
                <Link className="btn btn-secondary" href="/contact">Send Your Scope of Work</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Casestudies;
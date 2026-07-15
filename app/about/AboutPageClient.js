"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './about.css';

export default function AboutPageClient() {
  return (
    <div className="about-page-wrapper">
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <span>About Techmapperz</span>
              </div>
              <div className="eyebrow">About Techmapperz</div>
              <h1>Built on Geospatial Expertise. <em>Focused on Real-World Decisions.</em></h1>
              <p className="lead">Techmapperz is an India-based geospatial services company specialising in GIS mapping, drone survey and mapping, LiDAR and photogrammetry processing, and custom Web and Mobile GIS applications.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#story">Discover Our Story <span>→</span></a>
                <Link className="btn btn-secondary" href="/portfolios">Explore Project Experience</Link>
              </div>
              <div className="hero-trust">
                <span className="trust-pill"><i></i> Geospatial-led delivery</span>
                <span className="trust-pill"><i></i> GIS, CAD, raster & point cloud</span>
                <span className="trust-pill"><i></i> India and international assignments</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="geo-card" style={{ padding: 0 }}>
                <video 
                  src="/media/Introducation_video.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>


        <section id="story">
          <div className="container intro-grid">
            <div className="intro-copy">
              <div className="eyebrow">Who We Are</div>
              <h2 style={{ marginTop: '12px' }}>A geospatial-first company built to make complex location data usable.</h2>
              <p>We help organisations turn survey data, drone imagery, LiDAR point clouds, satellite data, legacy drawings and field information into accurate maps, engineering-ready deliverables and accessible digital applications.</p>
              <p>Our work supports infrastructure planning, utilities, mining, government, agriculture, land management and other sectors where reliable spatial information directly influences cost, design, compliance and operational decisions.</p>
              <div className="intro-list">
                <div><i></i><span>GIS data creation, conversion and quality control</span></div>
                <div><i></i><span>Drone survey, photogrammetry and LiDAR workflows</span></div>
                <div><i></i><span>CAD, raster and point-cloud deliverables</span></div>
                <div><i></i><span>Custom Web GIS and Mobile GIS applications</span></div>
              </div>
            </div>
            <aside className="position-card">
              <h3>Our position is simple: geospatial services first, digital development where it adds value.</h3>
              <p>Website and mobile app development remain part of our capability, but our core identity is GIS, drone mapping and geospatial application development.</p>
              <div className="position-tags">
                <span>GIS Mapping</span>
                <span>Drone Survey</span>
                <span>LiDAR Processing</span>
                <span>Web GIS</span>
                <span>Mobile GIS</span>
                <span>Website Development</span>
                <span>Mobile Apps</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="evolution">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Our Evolution</div>
                <h2 style={{ marginTop: '12px' }}>From broad technology services to a focused geospatial company.</h2>
                <p>Techmapperz has evolved through practical project experience. The new direction reflects the work our team understands best and the value clients increasingly seek from us.</p>
              </div>
              <div className="side-note">This section communicates strategic clarity without criticising the company’s earlier IT-service journey.</div>
            </div>
            <div className="timeline">
              <div className="time-card">
                <span className="time-dot"></span>
                <small>Foundation</small>
                <h3>GIS expertise at the core</h3>
                <p>The company was shaped by hands-on experience in GIS production, remote sensing, survey support and geospatial consulting.</p>
              </div>
              <div className="time-card">
                <span className="time-dot"></span>
                <small>Expansion</small>
                <h3>Digital and drone capabilities</h3>
                <p>Website, mobile development and drone-data workflows expanded the ability to deliver complete digital and spatial solutions.</p>
              </div>
              <div className="time-card">
                <span className="time-dot"></span>
                <small>Specialisation</small>
                <h3>Geospatial-first positioning</h3>
                <p>GIS, drone survey and mapping, LiDAR processing, and Web/Mobile GIS became the primary business focus.</p>
              </div>
              <div className="time-card">
                <span className="time-dot"></span>
                <small>Future</small>
                <h3>Decision-ready geospatial systems</h3>
                <p>The next phase connects reliable spatial data with dashboards, field applications and sector-specific geospatial workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">What We Do</div>
                <h2 style={{ marginTop: '12px' }}>Capabilities that cover the full geospatial workflow.</h2>
                <p>From source-data review and field acquisition through production, QA/QC and application development, Techmapperz supports projects at each stage.</p>
              </div>
              <div className="side-note">Real project screenshots can later replace the simple capability icons for stronger proof.</div>
            </div>
            <div className="cap-grid">
              <article className="cap-card">
                <div className="cap-icon">01</div>
                <h3>GIS & Mapping Services</h3>
                <p>Digitisation, feature extraction, utility mapping, cadastral mapping, LULC, CAD–GIS conversion, spatial analysis and geodatabase development.</p>
                <Link href="/services/gis-mapping">Explore GIS Services →</Link>
              </article>
              <article className="cap-card">
                <div className="cap-icon">02</div>
                <h3>Drone Survey & Mapping</h3>
                <p>Drone photogrammetry, topographic surveys, corridor mapping, LiDAR workflows, orthomosaics, terrain models and construction monitoring.</p>
                <Link href="/services/drone-mapping">Explore Drone Services →</Link>
              </article>
              <article className="cap-card">
                <div className="cap-icon">03</div>
                <h3>LiDAR & Point-Cloud Processing</h3>
                <p>Point-cloud classification, ground filtering, DTM/DSM creation, contour generation, corridor extraction and 3D geospatial outputs.</p>
                <Link href="/services/lidar">View LiDAR Capability →</Link>
              </article>
              <article className="cap-card">
                <div className="cap-icon">04</div>
                <h3>Web & Mobile GIS</h3>
                <p>Geoportals, GIS dashboards, asset-management applications, field-data collection apps and database/API integration.</p>
                <Link href="/services/application-development">Explore GIS Development →</Link>
              </article>
              <article className="cap-card">
                <div className="cap-icon">05</div>
                <h3>Website Development</h3>
                <p>SEO-ready corporate, service and e-commerce websites developed as a supporting digital capability for organisations and brands.</p>
                <Link href="/services/web-development">View Website Services →</Link>
              </article>
              <article className="cap-card">
                <div className="cap-icon">06</div>
                <h3>Mobile App Development</h3>
                <p>Android, iOS and cross-platform applications, including field, business and customer-facing mobile solutions.</p>
                <Link href="/services/application-development">View Mobile Services →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="leadership">
          <div className="container leader-grid">
            <div className="leader-visual">
              <svg className="leader-map" viewBox="0 0 600 600" preserveAspectRatio="none">
                <g fill="none" stroke="#8fbcd4" strokeWidth="2" opacity=".5">
                  <path d="M0 100 C140 50 160 200 300 140 S470 80 620 180"/>
                  <path d="M-20 310 C110 210 260 410 370 290 S530 220 640 350"/>
                  <path d="M30 520 C140 430 250 560 360 470 S520 430 620 500"/>
                </g>
                <g fill="#1267b1" opacity=".12">
                  <circle cx="100" cy="120" r="80"/>
                  <circle cx="510" cy="190" r="95"/>
                  <circle cx="430" cy="500" r="120"/>
                </g>
              </svg>
              <div className="portrait"></div>
              <div className="leader-badge">
                <b>14+ years</b>
                <span>GIS & drone industry experience</span>
              </div>
            </div>
            <div className="leader-copy">
              <div className="eyebrow">Leadership</div>
              <h2>Guided by practical GIS experience—not only business theory.</h2>
              <div className="role">Santanu Nandi · Co-founder & CEO</div>
              <p>Techmapperz’s strategic direction is led by a GIS professional with extensive experience across mapping production, remote sensing, geospatial presales, business development and drone-related project delivery.</p>
              <p>This background helps the company understand both the technical realities of data production and the commercial expectations of engineering consultants, government organisations, infrastructure companies and international clients.</p>
              <div className="leader-quote">“Our aim is to deliver spatial data that project teams can actually use—accurate, clearly structured and compatible with their engineering and operational workflows.”</div>
            </div>
          </div>
        </section>

        <section className="leadership" style={{ paddingTop: '20px' }}>
          <div className="container leader-grid" style={{ gridTemplateColumns: '1.1fr .9fr' }}>
            <div className="leader-copy">
              <div className="eyebrow">Vision & Strategy</div>
              <h2>Driving innovation through accurate spatial intelligence.</h2>
              <div className="role">Team Leadership</div>
              <p>Our strategic focus is on delivering comprehensive geospatial solutions that empower organizations to make informed decisions. We bridge the gap between complex data and actionable insights.</p>
              <p>By continuously adopting new technologies and refining our workflows, we ensure our clients receive the most accurate and reliable spatial data for their critical projects.</p>
              <div className="leader-quote">“Innovation in geospatial technology is not just about better tools, but about providing clearer perspectives for real-world challenges.”</div>
            </div>
            <div className="leader-visual">
              <svg className="leader-map" viewBox="0 0 600 600" preserveAspectRatio="none">
                <g fill="none" stroke="#8fbcd4" strokeWidth="2" opacity=".5">
                  <path d="M0 100 C140 50 160 200 300 140 S470 80 620 180"/>
                  <path d="M-20 310 C110 210 260 410 370 290 S530 220 640 350"/>
                  <path d="M30 520 C140 430 250 560 360 470 S520 430 620 500"/>
                </g>
                <g fill="#1267b1" opacity=".12">
                  <circle cx="100" cy="120" r="80"/>
                  <circle cx="510" cy="190" r="95"/>
                  <circle cx="430" cy="500" r="120"/>
                </g>
              </svg>
              <div className="portrait"></div>
              <div className="leader-badge" style={{ right: 'auto', left: '20px' }}>
                <b>Global</b>
                <span>Delivery Capabilities</span>
              </div>
            </div>
          </div>
        </section>

        <section className="workflow">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow" style={{ color: '#8ed1ff' }}>How We Work</div>
                <h2 style={{ marginTop: '12px' }}>A transparent path from requirement to final delivery.</h2>
                <p>Every assignment is structured around scope clarity, data quality, review milestones and usable outputs.</p>
              </div>
            </div>
            <div className="workflow-grid">
              <div className="work-card">
                <b>01</b>
                <h3>Understand</h3>
                <p>Review project objectives, geography, source data, accuracy requirements, formats and timeline.</p>
              </div>
              <div className="work-card">
                <b>02</b>
                <h3>Plan</h3>
                <p>Define methodology, resources, control strategy, production stages and acceptance criteria.</p>
              </div>
              <div className="work-card">
                <b>03</b>
                <h3>Produce</h3>
                <p>Execute survey, processing, digitisation, modelling, database creation or application development.</p>
              </div>
              <div className="work-card">
                <b>04</b>
                <h3>Validate</h3>
                <p>Check geometry, topology, attributes, projection, completeness, positional quality and formats.</p>
              </div>
              <div className="work-card">
                <b>05</b>
                <h3>Deliver</h3>
                <p>Share review outputs, incorporate approved corrections and hand over final project-ready data.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Industries We Support</div>
                <h2 style={{ marginTop: '12px' }}>Geospatial services designed around sector workflows.</h2>
                <p>We combine common geospatial methods with industry-specific deliverables, terminology and decision needs.</p>
              </div>
            </div>
            <div className="industry-grid">
              <article className="industry-card">
                <span>01</span>
                <h3>Infrastructure & AEC</h3>
                <p>Roads, highways, railways, metro, construction, real estate and engineering surveys.</p>
              </article>
              <article className="industry-card">
                <span>02</span>
                <h3>Government & Land</h3>
                <p>Cadastral mapping, municipal GIS, land records, property mapping and public asset inventories.</p>
              </article>
              <article className="industry-card">
                <span>03</span>
                <h3>Utilities & Energy</h3>
                <p>Power, water, wastewater, oil and gas pipelines, renewable energy and network mapping.</p>
              </article>
              <article className="industry-card">
                <span>04</span>
                <h3>Mining & Resources</h3>
                <p>Mine feature extraction, terrain mapping, stockpile surveys and environmental monitoring.</p>
              </article>
              <article className="industry-card">
                <span>05</span>
                <h3>Agriculture & Forestry</h3>
                <p>Plantation mapping, crop inventory, terrain analysis, LULC and environmental assessment.</p>
              </article>
              <article className="industry-card">
                <span>06</span>
                <h3>Transportation</h3>
                <p>Corridor mapping, navigation datasets, railway assets, logistics and network analysis.</p>
              </article>
              <article className="industry-card">
                <span>07</span>
                <h3>Telecommunications</h3>
                <p>Fibre-route mapping, tower assets, network planning, field inventory and Web GIS.</p>
              </article>
              <article className="industry-card">
                <span>08</span>
                <h3>Water & Resilience</h3>
                <p>Drainage, flood studies, watershed mapping, terrain models and damage assessment.</p>
              </article>
            </div>
          </div>
        </section>


        <section>
          <div className="container tech-wrap">
            <div className="tech-copy">
              <div className="eyebrow">Technology Ecosystem</div>
              <h2 style={{ marginTop: '12px' }}>Established GIS tools combined with modern application technologies.</h2>
              <p>We select tools according to the project workflow, input data, client environment and required outputs—not simply according to trends.</p>
            </div>
            <div className="tech-cloud">
              <span>ArcGIS Pro</span><span>QGIS</span><span>Agisoft Metashape</span>
              <span>AutoCAD</span><span>Global Mapper</span><span>ENVI</span>
              <span>ERDAS Imagine</span><span>PostGIS</span><span>Python</span>
              <span>JavaScript</span><span>React</span><span>Next.js</span>
              <span>Node.js</span><span>PHP</span><span>MySQL</span>
              <span>MongoDB</span><span>Android / iOS</span><span>Cloud & APIs</span>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">What Guides Us</div>
                <h2 style={{ marginTop: '12px' }}>Practical values for technical project delivery.</h2>
              </div>
            </div>
            <div className="value-grid">
              <article className="value-card">
                <b>01</b>
                <h3>Accuracy with context</h3>
                <p>Data quality matters only when it matches the intended scale, accuracy, specification and project use.</p>
              </article>
              <article className="value-card">
                <b>02</b>
                <h3>Clear communication</h3>
                <p>We define assumptions, risks, milestones, reviews and dependencies before they become project problems.</p>
              </article>
              <article className="value-card">
                <b>03</b>
                <h3>Usable deliverables</h3>
                <p>Outputs are structured for the client’s GIS, CAD, engineering, reporting or application environment.</p>
              </article>
              <article className="value-card">
                <b>04</b>
                <h3>Continuous improvement</h3>
                <p>Each project strengthens our templates, QA procedures, automation, technical knowledge and client support.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Company Credentials</div>
                <h2 style={{ marginTop: '12px' }}>A growing Indian company with verified business registrations.</h2>
                <p>Only documented registrations and credentials should be displayed. Unsupported awards or certification claims should not be used.</p>
              </div>
            </div>
            <div className="credentials-grid">
              <article className="cred">
                <span className="cred-label">Business Structure</span>
                <h3>Limited Liability Partnership</h3>
                <p>A formally registered Indian business entity supporting commercial and project engagements.</p>
              </article>
              <article className="cred">
                <span className="cred-label">Recognition</span>
                <h3>Startup India Recognised</h3>
                <p>Recognition that reflects the company’s growth and innovation journey.</p>
              </article>
              <article className="cred">
                <span className="cred-label">Registration</span>
                <h3>MSME Registered</h3>
                <p>Registered as an Indian micro, small or medium enterprise, subject to current official records.</p>
              </article>
              <article className="cred">
                <span className="cred-label">Delivery Reach</span>
                <h3>India & International Projects</h3>
                <p>Experience supporting domestic requirements and overseas geospatial production assignments.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-box">
              <div>
                <h2>Looking for a GIS, drone survey or geospatial-development partner?</h2>
                <p>Share your project location, area, source data, required accuracy, expected outputs and timeline. Our team will review the requirement and recommend a practical delivery approach.</p>
              </div>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

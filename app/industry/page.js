
import './mining.css';
import Link from 'next/link';
import HappyClients from '../_Components/HappyClients';
import AboutUs from '../_Components/AboutUs';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import MiningDeliverables from '../_Components/MiningDeliverables';

export const metadata = {
  title: "GIS & Drone Solutions for Mining & Natural Resources | Techmapperz",
  description: "Techmapperz provides GIS mapping, drone survey, LiDAR and photogrammetry processing, mine feature extraction, volumetric analysis and Web GIS solutions for mining and natural-resource projects.",
};

export default function MiningIndustryPage() {
  return (
    <div className="mining-page">
      <ScrollToTop />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="breadcrumb">Home / Industries / <span>Mining & Natural Resources</span></div>
            <div className="eyebrow">Mining & Natural Resources</div>
            <h1>GIS and Drone Mapping for <em>Clearer Mine-Site Decisions</em></h1>
            <p className="lead">Techmapperz supports mining and natural-resource projects with topographic mapping, drone and LiDAR data processing, mine-feature extraction, volumetric analysis, terrain models and GIS applications—from exploration planning to operational monitoring and rehabilitation.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#contact">Discuss a Mining Project <span className="arrow">→</span></a><a className="btn btn-secondary" href="#case-study">View Mining Experience</a></div>
            <div className="hero-trust"><span className="trust-pill"><i></i> GIS, CAD & point-cloud delivery</span><span className="trust-pill"><i></i> Client or survey-supplied data</span><span className="trust-pill"><i></i> Structured QA/QC workflow</span></div>
          </div>

          <div className="mine-card">
            <div className="window-top"><span>Mine Operations Geospatial View</span><span className="dots"><i></i><i></i><i></i></span></div>
            <div className="mine-stage">
              <svg viewBox="0 0 620 575" xmlns="http://www.w3.org/2000/svg" aria-label="Illustrated open-pit mine GIS map">
                <defs>
                  <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a5a68e" /><stop offset=".45" stopColor="#d8c9a9" /><stop offset="1" stopColor="#7e8d78" /></linearGradient>
                  <linearGradient id="pit" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#deb782" /><stop offset="1" stopColor="#8a5533" /></linearGradient>
                  <filter id="shadow"><feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#0b2341" floodOpacity=".20" /></filter>
                </defs>
                <rect width="620" height="575" fill="url(#ground)" />
                <path d="M0 44L103 18l74 31 88-25 92 43 93-18 170 58v-107H0z" fill="#71856e" opacity=".8" />
                <path d="M0 495l101-44 113 31 78-23 90 38 104-35 134 30v83H0z" fill="#687b68" opacity=".86" />
                <g opacity=".3" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M-18 106C110 70 183 128 280 93s191-40 356 10" /><path d="M-11 132c133-37 195 21 297-9s200-31 349 15" /><path d="M-15 465c129-30 203 19 306-3s194-21 346 14" /><path d="M-10 492c124-26 207 22 302 0s195-20 343 16" />
                </g>
                <g transform="translate(123 92)" filter="url(#shadow)">
                  <path d="M30 69C83 6 206-20 304 22c93 40 136 135 96 226-40 91-131 153-239 147C64 390 0 322 2 233 4 164 3 102 30 69z" fill="#d4b383" stroke="#7f5b3e" strokeWidth="4" />
                  <path d="M63 86c55-50 148-68 226-37 74 30 111 102 78 171-31 68-102 119-187 115-77-4-132-52-133-119-1-54-5-94 16-130z" fill="#c59660" stroke="#8a6242" strokeWidth="4" />
                  <path d="M95 104c48-36 115-46 171-24 59 24 86 78 60 130-25 51-81 89-143 86-59-3-103-40-105-89-1-42-1-77 17-103z" fill="#b77b49" stroke="#85593a" strokeWidth="4" />
                  <path d="M127 121c35-24 81-29 120-14 42 17 58 55 40 91-18 36-56 62-101 60-42-2-74-28-76-63-1-31 2-56 17-74z" fill="#94603d" stroke="#70482f" strokeWidth="4" />
                  <path d="M156 139c23-13 52-15 77-5 26 10 37 34 25 57-11 23-35 39-64 38-27-1-47-18-49-40-1-20 2-38 11-50z" fill="#6f4934" />
                  <path d="M24 240c52-7 69-29 100-55 25-21 57-28 91-25 54 5 90 33 142 27" fill="none" stroke="#f4dfbf" strokeWidth="15" strokeLinecap="round" opacity=".88" />
                  <path d="M26 240c51-5 72-29 101-53 28-23 55-27 90-24 57 5 91 34 140 26" fill="none" stroke="#765843" strokeWidth="3" strokeDasharray="10 8" />
                </g>
                <path d="M12 357c91-29 134-26 188 0s95 28 157 5 128-28 249 20" fill="none" stroke="#f3d9aa" strokeWidth="20" strokeLinecap="round" />
                <path d="M10 357c93-29 135-25 189 1s95 27 158 4 129-27 250 20" fill="none" stroke="#795f48" strokeWidth="3" strokeDasharray="13 9" />
                <g fill="#d4a25e" stroke="#7b5738" strokeWidth="2"><ellipse cx="511" cy="132" rx="45" ry="25" /><ellipse cx="533" cy="173" rx="34" ry="19" /><ellipse cx="76" cy="431" rx="43" ry="23" /></g>
                <g fill="#0d78bd" opacity=".22" stroke="#0d78bd" strokeWidth="2"><path d="M486 394l77-22 33 55-79 28z" /><path d="M34 133l68-21 32 45-72 27z" /></g>
                <g fill="#fff" stroke="#0b2341" strokeWidth="2"><rect x="480" y="312" width="35" height="23" rx="3" /><rect x="525" y="298" width="31" height="20" rx="3" /><rect x="84" y="273" width="38" height="24" rx="3" /></g>
                <g stroke="#e33434" fill="none" strokeWidth="3" strokeDasharray="9 7"><path d="M93 74C235 12 410 36 552 115" /><path d="M552 115l-17-4 7 16" /></g>
                <g transform="translate(84 64)" stroke="#0b2341" strokeWidth="2" fill="#fff"><rect x="-9" y="-4" width="18" height="8" rx="2" /><path d="M-12-2l-17-8M12-2l17-8M-12 2l-17 8M12 2l17 8" /><circle cx="-30" cy="-11" r="4" fill="#e33434" /><circle cx="30" cy="-11" r="4" fill="#e33434" /><circle cx="-30" cy="11" r="4" fill="#e33434" /><circle cx="30" cy="11" r="4" fill="#e33434" /></g>
                <g fontFamily="Arial" fontWeight="700" fontSize="10" fill="#0b2341"><text x="501" y="136">Stockpile A</text><text x="50" y="435">Stockpile B</text><text x="481" y="470">Water / sump</text></g>
              </svg>
              <div className="map-layer">ORTHOMOSAIC · CONTOURS · ASSETS</div>
            </div>
            <div className="floating float-a"><strong>Stockpile Comparison</strong><span>Repeatable surface and volume reporting</span><div className="volume-bars"><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="floating float-b"><strong>Operational Layers</strong><span>Pit · haul roads · dumps · water · structures</span></div>
          </div>
        </div>
      </section>

      <div className="proof"><div className="container proof-grid"><div className="proof-item"><b>556+ sq. km</b><span>Mining feature-extraction project experience</span></div><div className="proof-item"><b>2D + CAD</b><span>Structured mapping and engineering-ready outputs</span></div><div className="proof-item"><b>GIS · Raster · LAS</b><span>Multi-format production and delivery capability</span></div><div className="proof-item"><b>QA/QC-led</b><span>Geometry, topology, attributes and completeness checks</span></div></div></div>

      <section>
        <div className="container challenge-grid">
          <div className="challenge-visual">
            <svg viewBox="0 0 580 490" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c5c1aa" /><stop offset="1" stopColor="#7e8976" /></linearGradient></defs>
              <rect width="580" height="490" fill="url(#cg)" />
              <path d="M0 349c95-59 170-46 231-1 69 51 149 52 349-4v146H0z" fill="#6f7c6d" />
              <g transform="translate(105 50)"><path d="M36 57C91 3 205-7 281 34c75 40 102 125 62 197-39 71-121 114-207 103C54 323 0 264 4 193 8 135 11 82 36 57z" fill="#d4aa76" stroke="#77543a" strokeWidth="4" /><path d="M69 77c45-39 129-46 187-15 61 32 81 95 50 148-31 53-93 85-158 77-61-7-101-50-98-103 2-43 0-83 19-107z" fill="#bd8250" stroke="#785039" strokeWidth="4" /><path d="M103 97c35-25 90-29 131-8 44 22 57 66 35 103-22 37-67 59-113 53-43-5-72-35-70-72 1-31 2-60 17-76z" fill="#9b623f" stroke="#68462f" strokeWidth="4" /><path d="M133 116c24-15 58-16 84-3 28 14 36 42 22 65-14 24-42 38-72 34-28-3-47-23-46-47 1-21 2-39 12-49z" fill="#704a35" /></g>
              <path d="M8 368c116-31 154-9 218 20 75 34 146 31 344-20" fill="none" stroke="#e8d7b8" strokeWidth="18" /><path d="M8 368c116-31 154-9 218 20 75 34 146 31 344-20" fill="none" stroke="#6d5745" strokeWidth="3" strokeDasharray="12 8" />
              <g fill="none" stroke="#fff" opacity=".4"><path d="M0 25c154 50 249 2 381 33s140 12 217-3" /><path d="M0 52c146 43 248 1 380 30s147 11 216-4" /><path d="M0 451c112-25 192-7 284 9s181 2 310-24" /></g>
            </svg>
            <div className="callout c1"><i></i> Changing pit & dump geometry</div><div className="callout c2"><i></i> Scattered operational assets</div><div className="callout c3"><i></i> Large, difficult-to-access terrain</div>
          </div>
          <div>
            <div className="eyebrow">Mining data challenges</div>
            <h2>One Site. Many Moving Features. One Need for Reliable Spatial Data.</h2>
            <p style={{ marginTop: '18px', fontSize: '16px' }}>Mining teams work with rapidly changing surfaces, complex asset networks and multiple data formats. A structured geospatial workflow helps planners, surveyors, production teams and management work from a consistent view of the site.</p>
            <div className="challenge-list">
              <div className="challenge-item"><div className="challenge-icon">↗</div><div><h3>Continuously changing terrain</h3><p>Pits, benches, haul roads, dumps and stockpiles need regular updates rather than one-time mapping.</p></div></div>
              <div className="challenge-item"><div className="challenge-icon">◎</div><div><h3>Disconnected survey and operational data</h3><p>Drone imagery, point clouds, CAD drawings, field observations and legacy GIS layers often require alignment and consolidation.</p></div></div>
              <div className="challenge-item"><div className="challenge-icon">▦</div><div><h3>Complex reporting requirements</h3><p>Teams need clear maps, surfaces, quantities, drawings and databases that can be used by both technical and management stakeholders.</p></div></div>
              <div className="challenge-item"><div className="challenge-icon">✓</div><div><h3>Data-quality and completeness risk</h3><p>Missing features, incorrect geometry or inconsistent attribution can affect planning, monitoring and downstream engineering work.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions">
        <div className="container">
          <div className="section-head"><div className="copy"><div className="eyebrow">Solutions for mining operations</div><h2>Geospatial Services Across the Mine-Site Workflow</h2><p>Choose individual production services or combine survey data, mapping, analysis and application development into one coordinated delivery workflow.</p></div><div className="side-note">Service scope and achievable accuracy are defined from the input data, control information, project area and required outputs.</div></div>
          <div className="solution-grid">
            <Link href="/contact" className="solution-card"><div className="solution-icon">△</div><h3>Topographic & Terrain Mapping</h3><p>Create contours, elevation models and site-base maps for planning, design, excavation and infrastructure decisions.</p><div className="link">Contours · DEM · DTM · CAD →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">⌁</div><h3>Drone Photogrammetry Processing</h3><p>Process survey imagery into orthomosaics, point clouds, surfaces and measurable 2D/3D outputs.</p><div className="link">Orthomosaic · DSM · Point cloud →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">⋮</div><h3>LiDAR & Point-Cloud Processing</h3><p>Classify, clean and convert LiDAR data into terrain, surface, contour and engineering-ready products.</p><div className="link">LAS/LAZ · Ground class · DTM →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">▱</div><h3>Mine Feature Extraction</h3><p>Map pits, benches, roads, conveyors, buildings, railway assets, water features, sumps and operational areas.</p><div className="link">2D GIS · CAD · Attribution →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">▥</div><h3>Stockpile & Volume Analysis</h3><p>Prepare repeatable surface-based measurements and comparison reports for stockpiles, dumps and excavation areas.</p><div className="link">Cut/fill · Volume · Change →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">⌖</div><h3>Mine GIS & Web Dashboards</h3><p>Bring operational layers, imagery, inspection records and project updates into searchable map-based applications.</p><div className="link">Web GIS · Mobile GIS · Reports →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">≋</div><h3>Haul Road & Asset Mapping</h3><p>Build structured inventories of road networks, utilities, facilities and transport-related mine infrastructure.</p><div className="link">Network · Assets · Field updates →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">◒</div><h3>Environmental & Rehabilitation Mapping</h3><p>Support land-use monitoring, drainage, water-body mapping, vegetation assessment and progressive closure documentation.</p><div className="link">LULC · Water · Change detection →</div></Link>
            <Link href="/contact" className="solution-card"><div className="solution-icon">⇄</div><h3>CAD–GIS Data Integration</h3><p>Convert and organise engineering drawings, survey layers and geospatial databases for consistent use across teams.</p><div className="link">DWG · GeoPackage · Geodatabase →</div></Link>
          </div>
        </div>
      </section>

      <section className="lifecycle">
        <div className="container">
          <div className="section-head"><div className="copy"><div className="eyebrow">Lifecycle coverage</div><h2>From Exploration Planning to Rehabilitation</h2><p>Mining geospatial requirements change across the project lifecycle. The page structure shows decision-makers exactly where Techmapperz can support their programme.</p></div></div>
          <div className="life-track">
            <div className="life-card"><span className="life-no">01 · PLAN</span><h3>Exploration & Baseline</h3><p>Base mapping, terrain review, land-cover analysis and access planning.</p><b>Satellite · GIS · Terrain</b></div>
            <div className="life-card"><span className="life-no">02 · DESIGN</span><h3>Mine Planning</h3><p>Topographic surfaces, contours, feature data and engineering integration.</p><b>DTM · CAD · Geodatabase</b></div>
            <div className="life-card"><span className="life-no">03 · OPERATE</span><h3>Production Support</h3><p>Current site mapping, stockpiles, haul roads, assets and change reporting.</p><b>Drone · Volumes · Assets</b></div>
            <div className="life-card"><span className="life-no">04 · MONITOR</span><h3>Safety & Environment</h3><p>Water, drainage, slope context, encroachment and environmental layers.</p><b>Inspection · LULC · Change</b></div>
            <div className="life-card"><span className="life-no">05 · RESTORE</span><h3>Closure & Rehabilitation</h3><p>Progressive restoration mapping, land-form comparison and documentation.</p><b>Baseline · Progress · Reports</b></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container capability-grid">
          <div className="capability-copy"><div className="eyebrow">Delivery methodology</div><h2>A Defined Workflow from Source Data to Final Outputs</h2><p>Every project begins with the required use, accuracy, coordinate system, input-data condition and delivery format. The workflow is then planned around measurable checkpoints and client reviews.</p><a className="btn btn-dark" href="#contact">Share Your Scope of Work</a></div>
          <div className="capability-list">
            <div className="capability-item"><div className="cap-no">01</div><div className="cap-body"><h3>Requirement & Input Review</h3><p>Review project extent, mine stage, source data, coordinate reference, feature catalogue, output formats and acceptance criteria.</p><div className="tags"><span>AOI</span><span>Accuracy</span><span>Feature schema</span><span>Delivery standard</span></div></div></div>
            <div className="capability-item"><div className="cap-no">02</div><div className="cap-body"><h3>Survey / Data Preparation</h3><p>Evaluate imagery, LiDAR, control points, CAD, satellite data or existing GIS layers and prepare them for production.</p><div className="tags"><span>Drone imagery</span><span>LAS/LAZ</span><span>GCP/DGPS</span><span>Legacy data</span></div></div></div>
            <div className="capability-item"><div className="cap-no">03</div><div className="cap-body"><h3>Processing & Geospatial Production</h3><p>Generate surfaces, classify point clouds, digitise mine features, structure attributes and create mapping or CAD outputs.</p><div className="tags"><span>Photogrammetry</span><span>Classification</span><span>Digitisation</span><span>Modelling</span></div></div></div>
            <div className="capability-item"><div className="cap-no">04</div><div className="cap-body"><h3>Independent QA/QC</h3><p>Check geometry, topology, attribute consistency, completeness, projection and alignment against specifications and source data.</p><div className="tags"><span>Topology</span><span>Geometry</span><span>Attributes</span><span>Completeness</span></div></div></div>
            <div className="capability-item"><div className="cap-no">05</div><div className="cap-body"><h3>Review, Delivery & Update Cycle</h3><p>Provide review packages, resolve comments and deliver agreed GIS, CAD, raster, point-cloud, database and report formats.</p><div className="tags"><span>Client review</span><span>Revision control</span><span>Final package</span><span>Periodic updates</span></div></div></div>
          </div>
        </div>
      </section>

      <MiningDeliverables />

      <section className="case-study" id="case-study">
        <div className="container">
          <div className="section-head"><div className="copy"><div className="eyebrow">Relevant project experience</div><h2>Large-Area Mining Feature Extraction & CAD Mapping</h2><p>A proof-led case-study section is more credible than generic claims and helps visitors understand the size, complexity and outputs of Techmapperz’s work.</p></div></div>
          <div className="case-card">
            <div className="case-map">
              <svg viewBox="0 0 560 520" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="cm" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d8c7a8" /><stop offset="1" stopColor="#70836f" /></linearGradient></defs><rect width="560" height="520" fill="url(#cm)" />
                <path d="M0 65c95-34 160 17 241-3s171-54 319 5v-67H0z" fill="#718370" /><path d="M0 431c110-38 183 12 278-10s170-25 282 13v86H0z" fill="#687967" />
                <g transform="translate(78 65)"><path d="M42 54C100 4 220-6 303 39c78 43 110 128 70 202-42 76-133 119-226 104C59 331 0 269 5 193 8 133 15 79 42 54z" fill="#d5ad78" stroke="#765139" strokeWidth="4" /><path d="M82 79c45-36 131-42 188-9 59 34 80 96 48 148-31 52-95 82-159 72-61-9-101-52-97-104 3-43 3-82 20-107z" fill="#bc8050" stroke="#785039" strokeWidth="4" /><path d="M119 103c34-24 91-25 131-2 41 24 54 66 31 102-23 36-68 56-113 49-43-6-70-36-67-73 2-29 4-59 18-76z" fill="#93603f" stroke="#66442f" strokeWidth="4" /><path d="M148 124c23-14 59-13 83 1 27 16 34 42 19 65-14 23-43 35-71 30-27-4-44-23-42-46 2-19 3-38 11-50z" fill="#694835" /></g>
                <path d="M-4 356c103-24 157-14 229 18 77 34 157 28 339-26" fill="none" stroke="#ecd8b4" strokeWidth="20" /><path d="M-4 356c103-24 157-14 229 18 77 34 157 28 339-26" fill="none" stroke="#725842" strokeWidth="3" strokeDasharray="12 8" />
                <g fill="none" stroke="#1267b1" strokeWidth="3"><path d="M42 155l58-19 22 31-62 20z" /><path d="M432 292l73-22 27 49-76 22z" /></g><g fill="none" stroke="#e33434" strokeWidth="3"><path d="M399 89l74 16 28 65-69 14z" /></g>
                <g fontFamily="Arial" fontWeight="700" fontSize="10" fill="#0b2341"><text x="34" y="148">Water / sump</text><text x="409" y="282">Built-up / assets</text><text x="394" y="81">Conveyor / industrial</text></g>
              </svg><div className="case-label">FEATURE EXTRACTION · GIS · CAD</div>
            </div>
            <div className="case-copy"><div className="eyebrow">Mining & natural resources</div><h2 style={{ fontSize: '36px', marginTop: '10px' }}>556.67 sq. km 2D Feature Extraction and CAD Mapping</h2><p>Techmapperz completed large-area mapping of operational and surrounding features, converting source imagery into structured geospatial and CAD deliverables for project use.</p>
              <div className="case-metrics"><div className="metric"><b>556.67 sq. km</b><span>Mapped project area</span></div><div className="metric"><b>Multi-feature</b><span>Operational and land-cover classes</span></div><div className="metric"><b>GIS + CAD</b><span>Client-ready delivery formats</span></div></div>
              <h3>Mapped feature categories</h3><div className="scope-list"><div><i>✓</i> Roads and haul roads</div><div><i>✓</i> Built-up and industrial areas</div><div><i>✓</i> Agriculture and land-cover features</div><div><i>✓</i> Water bodies and sumps</div><div><i>✓</i> Railway-related features</div><div><i>✓</i> Conveyor and mine infrastructure</div></div>
              <a className="btn btn-primary" href="#contact">Discuss a Similar Requirement</a>
            </div>
          </div>
        </div>
      </section>

      <section className="esg">
        <div className="container esg-grid">
          <div className="esg-dashboard"><div className="dash-top"><span>Environmental & Rehabilitation Monitoring</span><span>GIS Dashboard Concept</span></div><div className="dash-grid">
            <div className="dash-map"><svg viewBox="0 0 400 330" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="330" fill="#d9e0d3" /><path d="M0 240c75-44 131-32 184-3 62 34 115 31 216-9v102H0z" fill="#789375" /><path d="M20 43c70 22 110 8 164 28s114 8 198-1" fill="none" stroke="#fff" strokeWidth="2" opacity=".45" /><path d="M18 73c75 22 113 6 166 27s116 7 200-2" fill="none" stroke="#fff" strokeWidth="2" opacity=".45" /><path d="M60 99c55-37 147-37 203 2 53 37 64 101 26 144-39 44-107 60-163 35-56-24-87-73-72-122 8-28 4-44 6-59z" fill="#c39058" stroke="#76543d" strokeWidth="3" /><path d="M104 125c36-23 98-21 134 4 37 25 43 68 17 97-26 30-73 41-112 24-38-17-60-50-50-83 6-18 7-30 11-42z" fill="#88573c" /><path d="M276 74l85 13 12 59-78 12z" fill="#69a8d4" opacity=".65" /><path d="M34 252l79-28 25 58-86 22z" fill="#4d9d78" opacity=".75" /><g fill="#fff" stroke="#0b2341" strokeWidth="2"><circle cx="321" cy="109" r="5" /><circle cx="79" cy="265" r="5" /><circle cx="206" cy="224" r="5" /></g></svg></div>
            <div className="dash-chart"><svg viewBox="0 0 280 330" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="330" fill="#f7fafc" /><text x="24" y="35" fontFamily="Arial" fontSize="12" fontWeight="700" fill="#0b2341">Land-cover progress</text><g fill="#1267b1"><rect x="29" y="201" width="33" height="86" rx="5" /><rect x="76" y="168" width="33" height="119" rx="5" /><rect x="123" y="132" width="33" height="155" rx="5" /><rect x="170" y="103" width="33" height="184" rx="5" /><rect x="217" y="75" width="33" height="212" rx="5" /></g><g fontFamily="Arial" fontSize="9" fill="#748191"><text x="31" y="305">P1</text><text x="78" y="305">P2</text><text x="125" y="305">P3</text><text x="172" y="305">P4</text><text x="219" y="305">P5</text></g><path d="M24 61h225M24 111h225M24 161h225M24 211h225M24 261h225" stroke="#d9e3ec" /></svg></div>
          </div></div>
          <div><div className="eyebrow">Environment & rehabilitation</div><h2>Map Environmental Context Alongside Production Activity</h2><p style={{ marginTop: '18px', fontSize: '16px' }}>GIS can organise water, drainage, land cover, vegetation, disturbance, rehabilitation and compliance-related layers in the same spatial environment as operational mine data.</p><div className="esg-points">
            <div className="esg-point"><i>01</i><div><b>Baseline and change mapping</b><p>Compare land cover, disturbed areas and site conditions across survey dates.</p></div></div>
            <div className="esg-point"><i>02</i><div><b>Drainage, water and sump layers</b><p>Maintain a consistent spatial inventory of drainage paths, water bodies and operational water features.</p></div></div>
            <div className="esg-point"><i>03</i><div><b>Rehabilitation progress records</b><p>Document restored areas, plantation zones and progressive closure activity using maps and imagery.</p></div></div>
            <div className="esg-point"><i>04</i><div><b>Map-based reporting applications</b><p>Provide authorised teams with searchable layers, imagery, forms, photographs and status information.</p></div></div>
          </div></div>
        </div>
      </section>

      <section>
        <div className="container"><div className="section-head"><div className="copy"><div className="eyebrow">Technology & platforms</div><h2>Tools Selected for the Required Data and Delivery Environment</h2><p>Technology logos should support capability—not replace project evidence. List only tools and platforms genuinely used by the team.</p></div></div>
          <div className="tech-grid"><div className="tech"><b>ArcGIS Pro</b><span>GIS production & analysis</span></div><div className="tech"><b>QGIS</b><span>Open geospatial workflows</span></div><div className="tech"><b>Agisoft Metashape</b><span>Photogrammetry processing</span></div><div className="tech"><b>Global Mapper</b><span>Terrain & point-cloud work</span></div><div className="tech"><b>AutoCAD</b><span>CAD mapping & delivery</span></div><div className="tech"><b>ENVI</b><span>Remote sensing analysis</span></div><div className="tech"><b>ERDAS Imagine</b><span>Raster processing</span></div><div className="tech"><b>PostGIS</b><span>Spatial databases</span></div><div className="tech"><b>Python</b><span>Automation & geoprocessing</span></div><div className="tech"><b>Web / Mobile GIS</b><span>Dashboards & field access</span></div></div>
        </div>
      </section>

      <section className="why">
        <div className="container"><div className="section-head"><div className="copy"><div className="eyebrow">Why Techmapperz</div><h2>A Geospatial Production Partner for Detailed, Large-Area Work</h2><p>The strongest differentiators are practical GIS experience, mining project evidence, multi-format delivery and the ability to extend mapping into Web and Mobile GIS applications.</p></div></div>
          <div className="why-grid"><div className="why-card"><span className="tag">01 · EXPERIENCE</span><h3>Geospatial-led project understanding</h3><p>Requirements are interpreted by a team with hands-on GIS, remote-sensing, mapping and drone-data experience.</p></div><div className="why-card"><span className="tag">02 · SCALE</span><h3>Large-area production capability</h3><p>Suitable for proof-of-concept assignments as well as extensive, feature-dense mapping programmes.</p></div><div className="why-card"><span className="tag">03 · FORMAT</span><h3>GIS, CAD, raster and point cloud</h3><p>Outputs can be prepared for multiple downstream tools and technical teams.</p></div><div className="why-card"><span className="tag">04 · QUALITY</span><h3>Structured QA/QC checkpoints</h3><p>Review covers geometry, topology, attributes, completeness, projection and specified rules.</p></div><div className="why-card"><span className="tag">05 · COMMUNICATION</span><h3>Defined reviews and revisions</h3><p>Milestones, samples, review packages and change tracking improve delivery clarity.</p></div><div className="why-card"><span className="tag">06 · DIGITAL GIS</span><h3>From mapping to applications</h3><p>Mine datasets can be extended into Web GIS dashboards, mobile field tools and map-based reporting systems.</p></div></div>
        </div>
      </section>

      <section className="faq">
        <div className="container faq-grid"><div className="faq-copy"><div className="eyebrow">Mining GIS FAQs</div><h2>Questions Clients Commonly Ask Before Starting</h2><p>These answers should remain specific to Techmapperz’s actual workflow and should be expanded further when project-specific accuracy and survey capability details are finalised.</p></div>
          <div className="faq-list">
            <details open><summary>What input data can Techmapperz work with?</summary><p>Depending on the scope, inputs may include drone imagery, orthomosaics, LiDAR point clouds, DGPS/GCP information, satellite imagery, CAD drawings, existing GIS layers, scanned maps and client feature specifications.</p></details>
            <details><summary>Can you process data captured by another survey company?</summary><p>Yes. Client-supplied or third-party data can be reviewed for completeness, coordinate information, overlap, quality and suitability before a processing and mapping workflow is confirmed.</p></details>
            <details><summary>Which mine features can be mapped?</summary><p>Typical classes include pits, benches, haul roads, stockpiles, dumps, built-up areas, conveyors, railway features, water bodies, sumps, utilities, vegetation and land-cover categories. The final catalogue is agreed with the client.</p></details>
            <details><summary>Can outputs be provided in both GIS and CAD formats?</summary><p>Yes. Deliverables can include GeoPackage, geodatabase, shapefile, GeoTIFF, LAS/LAZ, DWG, DXF and other agreed formats, subject to the source data and project specification.</p></details>
            <details><summary>How is mapping accuracy determined?</summary><p>Accuracy depends on source-data quality, flight height and sensor, survey control, processing method, terrain, mapping scale and acceptance criteria. Techmapperz confirms a suitable workflow after reviewing these factors.</p></details>
            <details><summary>Can you build a mine Web GIS or dashboard?</summary><p>Yes. GIS layers, imagery, asset records, inspection information and project status can be configured in custom Web or Mobile GIS applications with role-based access and map-based reports.</p></details>
          </div>
        </div>
      </section>

      <section className="cta" id="contact"><div className="container"><div className="cta-inner"><div className="cta-copy"><div className="eyebrow" style={{ color: '#88c7ef' }}>Start a mining geospatial discussion</div><h2>Share Your Mine Area, Available Data and Required Deliverables</h2><p>Send the project location, approximate area, survey or source data, coordinate system, accuracy requirement, feature list, output format and expected timeline. Our team can review the requirement and recommend a practical workflow.</p></div><div className="cta-actions"><Link className="btn btn-primary" href="/contact">Request a Project Assessment</Link><Link className="btn btn-secondary" href="/contact">Send Your Scope of Work</Link></div></div></div></section>

    </div>
  );
}

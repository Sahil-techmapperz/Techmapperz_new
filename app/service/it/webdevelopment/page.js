import React from 'react';
import '../it-service.css';
import Link from 'next/link';

export const metadata = {
  title: "IT Services | Techmapperz",
  description: "Techmapperz designs and develops fast, responsive and SEO-ready business websites, e-commerce stores, CMS platforms and custom web applications.",
};

const ITServicePage = () => {
  return (
    <div className="it-service-page">
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/service">Services</Link> <span>/</span> <span>IT Services</span>
            </div>
            <h1>Website Development Services <em>built for business performance</em></h1>
            <p className="lead">We design and develop fast, responsive and SEO-ready websites, e-commerce platforms and web applications that support real business growth.</p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="browser-stage">
            <div className="browser">
              <div className="browser-top">
                <div className="dots"><i></i><i></i><i></i></div>
                <div className="address">techmapperz.com/business</div>
              </div>
              <div className="site-preview">
                <div className="mock-nav">
                  <div className="mock-brand"><i></i>Techmapperz</div>
                  <div className="mock-links"><span>Services</span><span>Projects</span><span>About</span></div>
                  <div className="mock-btn">Contact</div>
                </div>
                <div className="mock-hero">
                  <div className="mock-copy">
                    <small>DIGITAL GROWTH</small>
                    <h5>Scale your business with reliable tech</h5>
                    <p></p><p></p><p></p>
                    <div className="mock-actions"><i></i><i></i></div>
                  </div>
                  <div className="mock-visual">
                    <div className="screen-card">
                      <div className="screen-head"><span></span><i></i></div>
                      <div className="screen-chart">
                        <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M0 40 L0 25 L20 30 L40 15 L60 20 L80 5 L100 10 L100 40 Z" fill="#eaf4fb" />
                          <path d="M0 25 L20 30 L40 15 L60 20 L80 5 L100 10" fill="none" stroke="#1267b1" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="screen-grid"><i></i><i></i><i></i></div>
                    </div>
                    <div className="side-chip">+24% Growth</div>
                  </div>
                </div>
                <div className="mock-features">
                  <div className="mock-feature"><i></i><b></b><span></span><span></span></div>
                  <div className="mock-feature"><i></i><b></b><span></span><span></span></div>
                  <div className="mock-feature"><i></i><b></b><span></span><span></span></div>
                </div>
              </div>
            </div>
            <div className="code-float">
              <div><span className="c1">export const</span> <span className="c2">metadata</span> = {'{'}</div>
              <div style={{ paddingLeft: '10px' }}>title: <span className="c3">"Techmapperz"</span>,</div>
              <div style={{ paddingLeft: '10px' }}>template: <span className="c3">"%s | IT Services"</span></div>
              <div>{'}'};</div>
            </div>
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="phone-head"><i></i><span></span></div>
                <div className="phone-img"></div>
                <div className="phone-row"><i></i><i></i></div>
                <div className="phone-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container capabilities">
        <div className="cap-inner">
          <div className="cap"><b>Websites</b><span>Corporate &amp; CMS</span></div>
          <div className="cap"><b>E-commerce</b><span>Stores &amp; Portals</span></div>
          <div className="cap"><b>Web Apps</b><span>Custom workflows</span></div>
          <div className="cap"><b>SEO &amp; Speed</b><span>Technical foundations</span></div>
        </div>
      </div>

      <section className="intro">
        <div className="container intro-grid">
          <div className="strategy-panel">
            <h3>More than just code</h3>
            <p>A successful website aligns design, content, technology, and business goals.</p>
            <div className="strategy-map">
              <div className="strategy-lines"></div>
              <div className="strategy-node"><i>UX</i><b>User Journey</b><span>Clear navigation & conversion</span></div>
              <div className="strategy-node"><i>UI</i><b>Interface</b><span>Brand-aligned visuals</span></div>
              <div className="strategy-node"><i>TC</i><b>Technology</b><span>Fast, secure foundations</span></div>
              <div className="strategy-node"><i>SE</i><b>Visibility</b><span>SEO-ready structure</span></div>
              <div className="strategy-core">Web</div>
            </div>
          </div>
          <div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <div className="copy">
                <div className="eyebrow">Our Approach</div>
                <h2>A website should solve a business problem</h2>
                <p>We do not just build pages; we build digital platforms that act as your most reliable sales and information channel. This requires a balance of visual design, technical performance, and structured content.</p>
              </div>
            </div>
            <div className="content-list">
              <div className="content-item"><div className="content-icon">1</div><div><b>Business Alignment</b><p>Understanding your audience, offering, and conversion goals before writing code.</p></div></div>
              <div className="content-item"><div className="content-icon">2</div><div><b>Scalable Architecture</b><p>Choosing frameworks that allow your content and services to grow without a full rebuild.</p></div></div>
              <div className="content-item"><div className="content-icon">3</div><div><b>Measurable Results</b><p>Integrating analytics and tracking to ensure the website generates real business value.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-head">
            <div className="copy">
              <div className="eyebrow">Website Development Services</div>
              <h2>Flexible solutions for different digital goals</h2>
              <p>From focused business websites to e-commerce stores and custom portals, we select the right approach for your content, operations and future growth.</p>
            </div>
            <div className="section-note">Every service can include UX planning, responsive development, content support, quality testing and launch assistance.</div>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/></svg></div><h3>Corporate &amp; Business Websites</h3><p>Professional websites that present your services, experience, projects, industries and contact journey clearly.</p><div className="service-link">Build a stronger business presence →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5h2l2.2 9h10.9l2-6H7.2"/><circle cx="9" cy="19" r="1.4"/><circle cx="18" cy="19" r="1.4"/></svg></div><h3>E-commerce Development</h3><p>Product catalogues, search, cart, checkout, payment integration, order workflows and mobile shopping experiences.</p><div className="service-link">Create an online storefront →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16v5H4zM4 13h7v7H4zM15 13h5v7h-5z"/></svg></div><h3>Custom Web Applications</h3><p>Role-based portals, internal systems, dashboards and workflow applications developed around specific operations.</p><div className="service-link">Plan a custom web platform →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v14H4zM8 9h8M8 13h5"/><path d="M7 3v4M17 3v4"/></svg></div><h3>CMS Website Development</h3><p>Easy-to-manage websites for teams that regularly update pages, articles, products, projects or announcements.</p><div className="service-link">Manage content independently →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5h16v14z"/><path d="M7 15l3-3 2 2 4-5 2 3"/><circle cx="9" cy="9" r="1"/></svg></div><h3>Landing Pages &amp; Campaign Sites</h3><p>Focused pages for advertising, product launches, events, lead magnets and specific service campaigns.</p><div className="service-link">Improve campaign conversion →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h10v10H4zM10 4h10v10"/><path d="M8 12h2M8 9h4"/></svg></div><h3>Website Redesign &amp; Migration</h3><p>Modernise outdated design, content structure and technology while protecting important URLs and SEO value.</p><div className="service-link">Upgrade an existing website →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div><h3>SEO-Ready Website Development</h3><p>Logical architecture, structured content, metadata, crawlable links, technical hygiene and performance planning.</p><div className="service-link">Build a search-friendly foundation →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="5"/><path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg></div><h3>Maintenance &amp; Enhancement</h3><p>Ongoing updates, issue resolution, content changes, security checks and planned feature improvements after launch.</p><div className="service-link">Keep your website reliable →</div></article>
          </div>
        </div>
      </section>

      <section>
        <div className="container builds-grid">
          <div className="builds-copy"><div className="eyebrow">What We Build</div><h2>Choose the website model that matches your business</h2><p>Not every organisation needs the same platform. We recommend the simplest scalable solution that supports the real requirement without unnecessary complexity.</p><a className="btn btn-dark" href="#contact">Review Your Requirement</a></div>
          <div className="build-list">
            <article className="build-card"><div className="num">01 / SERVICE BUSINESS</div><h3>Lead-generation websites</h3><p>Service pages, industry pages, project proof, enquiry forms, downloadable resources and conversion-focused calls to action.</p><b>Ideal for B2B and professional services</b></article>
            <article className="build-card"><div className="num">02 / COMMERCE</div><h3>Online stores &amp; catalogues</h3><p>Product categories, filtering, shopping cart, payments, order tracking, offers, content and mobile-first customer journeys.</p><b>Ideal for retail and direct-to-customer brands</b></article>
            <article className="build-card"><div className="num">03 / CONTENT</div><h3>Publishing &amp; information portals</h3><p>Structured articles, searchable archives, author or category pages, subscriptions and content management workflows.</p><b>Ideal for publishers and knowledge platforms</b></article>
            <article className="build-card"><div className="num">04 / OPERATIONS</div><h3>Custom portals &amp; dashboards</h3><p>Authentication, role access, forms, records, reports, maps, third-party integrations and organisation-specific workflows.</p><b>Ideal for data-driven internal and client platforms</b></article>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head"><div className="copy"><div className="eyebrow" style={{color: '#8ec7ee'}}>Our Development Process</div><h2>A structured path from business requirement to launch</h2><p>Clear stages reduce rework, keep responsibilities visible and help the final website stay aligned with business, design and technical goals.</p></div><div className="section-note" style={{color: '#b8ccde', borderLeftColor: '#70d5cc'}}>Milestones, content dependencies and review rounds are agreed before development begins.</div></div>
          <div className="process-grid">
            <article className="process-step"><div className="process-no">01</div><h3>Discovery</h3><p>Business goals, target users, competitors, existing assets, features and conversion priorities.</p><b>Requirement brief</b></article>
            <article className="process-step"><div className="process-no">02</div><h3>Structure &amp; Content</h3><p>Sitemap, page hierarchy, navigation, wireframes, keywords and section-level content planning.</p><b>Page blueprint</b></article>
            <article className="process-step"><div className="process-no">03</div><h3>UI/UX Design</h3><p>Visual system, page layouts, responsive behaviour, reusable components and conversion elements.</p><b>Approved interface</b></article>
            <article className="process-step"><div className="process-no">04</div><h3>Development &amp; QA</h3><p>Frontend, backend, CMS, integrations, speed checks, browser testing and content implementation.</p><b>Tested build</b></article>
            <article className="process-step"><div className="process-no">05</div><h3>Launch &amp; Support</h3><p>Domain and hosting setup, redirects, analytics, search tools, training and post-launch monitoring.</p><b>Production website</b></article>
          </div>
        </div>
      </section>

      <section>
        <div className="container quality-grid">
          <div className="quality-panel"><div className="eyebrow">Quality Built into Every Page</div><h2 style={{fontSize: '36px', marginTop: '10px'}}>Designed for users. Developed for performance.</h2><div className="quality-tabs"><span className="active">Responsive</span><span>SEO-ready</span><span>Accessible</span><span>Secure</span><span>Scalable</span></div><div className="quality-list">
            <div className="quality-item"><div className="check">✓</div><div><b>Responsive layouts</b><span>Tested across common screen sizes and touch interactions.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Clear page hierarchy</b><span>Logical headings, navigation and internal linking.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Performance focus</b><span>Optimised assets, loading strategy and cleaner code.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Conversion tracking</b><span>Forms, calls, CTA events and analytics configuration.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Technical SEO basics</b><span>Metadata, canonical tags, sitemap and crawl controls.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Launch verification</b><span>Links, forms, integrations, redirects and browser checks.</span></div></div>
          </div></div>
          <div className="score-card"><h3>A website should remain useful after launch day.</h3><p>We create reusable content components and scalable page structures, helping your team add services, industries, projects and insights without redesigning the entire site.</p><div className="score-grid"><div className="score"><b>Reusable sections</b><span>Consistent components across pages</span></div><div className="score"><b>Flexible CMS</b><span>Manage content without code</span></div><div className="score"><b>Analytics-ready</b><span>Understand visits and enquiries</span></div><div className="score"><b>Future integrations</b><span>APIs, maps, payments and tools</span></div></div><a className="btn btn-primary" href="#contact">Plan a Scalable Website</a></div>
        </div>
      </section>

      <section className="technology">
        <div className="container tech-wrap">
          <div className="tech-copy"><div className="eyebrow">Technology Stack</div><h2>Modern tools selected around the project</h2><p>Technology choices should support performance, content management, security, integrations and long-term maintenance—not follow trends without a business reason.</p></div>
          <div className="tech-cloud"><div className="tech"><i>NX</i><b>Next.js</b></div><div className="tech"><i>RE</i><b>React</b></div><div className="tech"><i>NO</i><b>Node.js</b></div><div className="tech"><i>PH</i><b>PHP</b></div><div className="tech"><i>WP</i><b>WordPress</b></div><div className="tech"><i>MY</i><b>MySQL</b></div><div className="tech"><i>MO</i><b>MongoDB</b></div><div className="tech"><i>TW</i><b>Tailwind CSS</b></div><div className="tech"><i>API</i><b>API Integration</b></div><div className="tech"><i>PAY</i><b>Payment Gateway</b></div><div className="tech"><i>GA</i><b>Analytics</b></div><div className="tech"><i>GIS</i><b>Web GIS</b></div></div>
        </div>
      </section>

      {/* Featured Website Work Case Study */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="projects">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '12px', fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1267b1' }}>
                Selected Website Work
              </div>
              <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0b2341', margin: 0, lineHeight: 1.14, letterSpacing: '-0.035em' }}>
                Different industries. Different customer journeys.
              </h2>
              <p style={{ color: '#617080', fontSize: '17px', margin: 0, lineHeight: 1.6 }}>
                The visual design and platform structure should reflect the organisation, audience, products and actions that matter to each project.
              </p>
            </div>
            <div className="lg:max-w-[280px]" style={{ borderLeft: '3px solid #e33434', paddingLeft: '16px', fontSize: '13px', color: '#6c7987' }}>
              Replace these stylised previews with approved screenshots and measurable outcomes from completed Techmapperz projects.
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
            {/* Visual Column */}
            <div className="project-shot warm" style={{ height: 'auto', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', borderRight: '1px solid #e2e8f0' }}>
              <div className="project-browser" style={{ width: '100%', maxWidth: '420px', aspectRatio: '4/3', height: 'auto' }}>
                <div className="pb-top"><i></i><i></i><i></i></div>
                <div className="pb-body">
                  <div className="pb-nav">
                    <div className="pb-logo"></div>
                    <div className="pb-links"><i></i><i></i><i></i></div>
                  </div>
                  <div className="pb-hero">
                    <div className="pb-copy"><b></b><i></i><span></span></div>
                  </div>
                  <div className="pb-cards"><i></i><i></i><i></i></div>
                </div>
              </div>
              <div className="absolute left-6 top-6 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-md text-xs font-black" style={{ color: '#0b2341' }}>
                E-COMMERCE PLATFORM
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <div className="project-tag" style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '.15em', color: '#e33434' }}>
                RETAIL & COMMERCE
              </div>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0b2341', margin: '8px 0 16px', lineHeight: 1.1 }}>
                Premium Product Store
              </h2>
              <p style={{ color: '#617080', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                A category-led shopping experience with product discovery, trust content, responsive shopping and streamlined enquiries.
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <b className="block text-lg font-extrabold" style={{ color: '#0b2341' }}>Next.js</b>
                  <span className="block text-[11px] text-slate-500 mt-1">Frontend framework</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <b className="block text-lg font-extrabold" style={{ color: '#0b2341' }}>CMS</b>
                  <span className="block text-[11px] text-slate-500 mt-1">Content management</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <b className="block text-lg font-extrabold" style={{ color: '#0b2341' }}>Mobile-first</b>
                  <span className="block text-[11px] text-slate-500 mt-1">Responsive design</span>
                </div>
              </div>

              {/* Checkpoints */}
              <div className="space-y-3 text-sm" style={{ color: '#4b5563' }}>
                <div className="flex gap-2.5">
                  <span style={{ color: '#078a86', fontWeight: 'bold' }}>✓</span>
                  <span>Product catalogue with category navigation and search</span>
                </div>
                <div className="flex gap-2.5">
                  <span style={{ color: '#078a86', fontWeight: 'bold' }}>✓</span>
                  <span>Optimised checkout process for higher conversions</span>
                </div>
                <div className="flex gap-2.5">
                  <span style={{ color: '#078a86', fontWeight: 'bold' }}>✓</span>
                  <span>Integrated payment gateway and order workflows</span>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/portfolios" 
                  className="btn btn-dark"
                >
                  View Project Experience →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="container"><div className="section-head"><div className="copy"><div className="eyebrow">Industries We Support</div><h2>Website experiences shaped around your market</h2><p>Industry context changes how buyers evaluate trust, information, products and service capability. We adapt the structure accordingly.</p></div></div>
          <div className="industry-grid">
            <article className="industry-card"><div className="industry-icon">G</div><h3>GIS, Drone &amp; Engineering</h3><p>Technical service pages, industry solutions, project evidence, maps and complex deliverables.</p><b>Geospatial specialists →</b></article>
            <article className="industry-card"><div className="industry-icon">E</div><h3>E-commerce &amp; Retail</h3><p>Product discovery, trust, category navigation, checkout and mobile purchase journeys.</p><b>Commerce experiences →</b></article>
            <article className="industry-card"><div className="industry-icon">R</div><h3>Real Estate &amp; Construction</h3><p>Project portfolios, properties, services, location content and lead-generation forms.</p><b>Project-led websites →</b></article>
            <article className="industry-card"><div className="industry-icon">P</div><h3>Publishing &amp; Education</h3><p>Large content catalogues, categories, searchable resources, authors and enrolment journeys.</p><b>Content-rich platforms →</b></article>
            <article className="industry-card"><div className="industry-icon">M</div><h3>Manufacturing &amp; B2B</h3><p>Capability pages, products, specifications, export information, certifications and enquiries.</p><b>B2B company websites →</b></article>
            <article className="industry-card"><div className="industry-icon">S</div><h3>Startups &amp; Professional Services</h3><p>Clear positioning, launch-ready branding, service packages, proof and conversion-focused pages.</p><b>Growth-ready foundations →</b></article>
          </div>
        </div>
      </section>

      <section>
        <div className="container"><div className="section-head"><div className="copy"><div className="eyebrow">Why Techmapperz</div><h2>A practical development partner—not only a page designer</h2><p>Our team combines design, development, content structure, SEO foundations and domain knowledge to support the complete website journey.</p></div></div>
          <div className="why-grid">
            <article className="why-card"><div className="tag">01 / STRATEGY</div><h3>Structure before styling</h3><p>We define audiences, page roles and conversion pathways before polishing visual details.</p></article>
            <article className="why-card"><div className="tag">02 / COMMUNICATION</div><h3>Visible milestones</h3><p>Requirements, dependencies, design reviews and development progress remain clear throughout delivery.</p></article>
            <article className="why-card"><div className="tag">03 / DEVELOPMENT</div><h3>Responsive implementation</h3><p>Reusable components and tested responsive behaviour create consistency across the full website.</p></article>
            <article className="why-card"><div className="tag">04 / CONTENT</div><h3>SEO-conscious page planning</h3><p>Services, industries, projects and insights are organised to support users and organic discovery.</p></article>
            <article className="why-card"><div className="tag">05 / SPECIALISATION</div><h3>Geospatial integration capability</h3><p>We can integrate interactive maps, Web GIS, location data and geospatial dashboards where required.</p></article>
            <article className="why-card"><div className="tag">06 / SUPPORT</div><h3>Continued improvements</h3><p>After launch, we can support content changes, technical updates, optimisation and new functionality.</p></article>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container faq-grid"><div className="faq-copy"><div className="eyebrow">Frequently Asked Questions</div><h2>Planning a new website or redesign?</h2><p>These are some of the questions businesses commonly ask before starting a website development project.</p><a className="btn btn-dark" href="#contact">Ask a Project Question</a></div>
          <div className="faq-list">
            <details open><summary>What information is required to estimate a website project?</summary><p>We normally review the business type, target users, required pages, functionality, design references, content availability, integrations, preferred technology and expected launch timeline.</p></details>
            <details><summary>Can Techmapperz redesign an existing website without losing SEO value?</summary><p>Yes. The redesign plan should include an old-to-new URL map, permanent redirects, retained high-value content, updated metadata, internal-link checks, sitemap updates and post-launch Search Console monitoring.</p></details>
            <details><summary>Will the website work properly on mobile devices?</summary><p>Responsive behaviour is planned and tested for common desktop, tablet and mobile widths. Navigation, typography, forms, buttons, images and interactive components are adjusted for smaller screens.</p></details>
            <details><summary>Can our team update website content after launch?</summary><p>Yes. Depending on the project, we can provide a CMS or admin panel for managing pages, articles, projects, products, categories and selected website settings.</p></details>
            <details><summary>Do you provide website content and SEO support?</summary><p>We can support sitemap planning, page structure, SEO-focused service content, metadata, headings, internal links and content implementation. Broader ongoing SEO campaigns can be defined separately.</p></details>
            <details><summary>Can you integrate maps or GIS functionality into a business website?</summary><p>Yes. Techmapperz has GIS and Web GIS capabilities, allowing us to support interactive maps, location search, asset layers, spatial dashboards and geospatial data integrations when the project requires them.</p></details>
          </div>
        </div>
      </section>

      <section className="cta" id="contact"><div className="container"><div className="cta-inner"><div className="cta-copy"><div className="eyebrow" style={{color: '#9bcdf0'}}>Start with Your Requirement</div><h2>Planning a new website or replacing an outdated one?</h2><p>Share your current website, required pages, features, reference designs and business goals. We will review the requirement and recommend a suitable structure and development approach.</p></div><div className="cta-actions"><a className="btn btn-primary" href="mailto:info@techmapperz.com">Request a Website Proposal</a><a className="btn btn-secondary" href="tel:+919643002065">Call Our Team</a></div></div></div></section>
    </div>
  );
};

export default ITServicePage;

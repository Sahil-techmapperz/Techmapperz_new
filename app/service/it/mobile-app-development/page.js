import React from 'react';
import '../it-service.css';
import Link from 'next/link';

export const metadata = {
  title: "Mobile App Development | Techmapperz",
  description: "Techmapperz designs and develops fast, responsive and intuitive mobile applications for iOS and Android that support real business growth.",
};

const MobileAppDevelopmentPage = () => {
  return (
    <div className="it-service-page">
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/service">Services</Link> <span>/</span> <span>Mobile App Development</span>
            </div>
            <h1>Mobile App Development Services <em>built for user engagement</em></h1>
            <p className="lead">We design and develop fast, responsive and intuitive mobile applications for iOS and Android that support real business growth and operational efficiency.</p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="browser-stage">
            <div className="browser">
              <div className="browser-top">
                <div className="dots"><i></i><i></i><i></i></div>
                <div className="address">techmapperz.com/app</div>
              </div>
              <div className="site-preview">
                <div className="mock-nav">
                  <div className="mock-brand"><i></i>Techmapperz</div>
                  <div className="mock-links"><span>Services</span><span>Projects</span><span>About</span></div>
                  <div className="mock-btn">Contact</div>
                </div>
                <div className="mock-hero">
                  <div className="mock-copy">
                    <small>MOBILE GROWTH</small>
                    <h5>Scale your business with reliable apps</h5>
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
                    <div className="side-chip">+42% Engagement</div>
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
              <div style={{ paddingLeft: '10px' }}>template: <span className="c3">"%s | Mobile Apps"</span></div>
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
          <div className="cap"><b>iOS Apps</b><span>Swift &amp; Native</span></div>
          <div className="cap"><b>Android Apps</b><span>Kotlin &amp; Native</span></div>
          <div className="cap"><b>Cross-Platform</b><span>React Native &amp; Flutter</span></div>
          <div className="cap"><b>App UI/UX</b><span>Intuitive interfaces</span></div>
        </div>
      </div>

      <section className="intro">
        <div className="container intro-grid">
          <div className="strategy-panel">
            <h3>More than just code</h3>
            <p>A successful mobile app aligns design, usability, technology, and business goals.</p>
            <div className="strategy-map">
              <div className="strategy-lines"></div>
              <div className="strategy-node"><i>UX</i><b>User Journey</b><span>Clear navigation & retention</span></div>
              <div className="strategy-node"><i>UI</i><b>Interface</b><span>Brand-aligned visuals</span></div>
              <div className="strategy-node"><i>TC</i><b>Technology</b><span>Fast, secure foundations</span></div>
              <div className="strategy-node"><i>PR</i><b>Performance</b><span>Battery & speed optimized</span></div>
              <div className="strategy-core">App</div>
            </div>
          </div>
          <div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <div className="copy">
                <div className="eyebrow">Our Approach</div>
                <h2>An app should solve a business problem</h2>
                <p>We do not just build apps; we build digital platforms that act as your most reliable service channel. This requires a balance of visual design, technical performance, and structured user flows.</p>
              </div>
            </div>
            <div className="content-list">
              <div className="content-item"><div className="content-icon">1</div><div><b>Business Alignment</b><p>Understanding your audience, offering, and conversion goals before writing code.</p></div></div>
              <div className="content-item"><div className="content-icon">2</div><div><b>Scalable Architecture</b><p>Choosing frameworks that allow your content and services to grow without a full rebuild.</p></div></div>
              <div className="content-item"><div className="content-icon">3</div><div><b>Measurable Results</b><p>Integrating analytics and tracking to ensure the app generates real business value.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-head">
            <div className="copy">
              <div className="eyebrow">Mobile App Development Services</div>
              <h2>Flexible solutions for different digital goals</h2>
              <p>From focused business apps to e-commerce stores and custom operational tools, we select the right approach for your operations and future growth.</p>
            </div>
            <div className="section-note">Every service can include UX planning, responsive development, API support, quality testing and store launch assistance.</div>
          </div>
          <div className="service-grid">
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div><h3>Native iOS Development</h3><p>High-performance applications built using Swift and Objective-C for a premium Apple ecosystem experience.</p><div className="service-link">Build an iOS App →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-4h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M22 10v4a8 8 0 0 1-8 8"/></svg></div><h3>Native Android Development</h3><p>Robust and scalable applications developed with Kotlin and Java for the diverse Android device ecosystem.</p><div className="service-link">Build an Android App →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5h-5c0-3 1.4-5 3-5Z"/></svg></div><h3>Cross-Platform Apps</h3><p>Cost-effective development using React Native and Flutter to deploy on both iOS and Android from a single codebase.</p><div className="service-link">Plan a Cross-Platform App →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v14H4zM8 9h8M8 13h5"/><path d="M7 3v4M17 3v4"/></svg></div><h3>Enterprise Mobility</h3><p>Secure, scalable internal applications designed to streamline employee workflows and business operations.</p><div className="service-link">Empower your workforce →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5h2l2.2 9h10.9l2-6H7.2"/><circle cx="9" cy="19" r="1.4"/><circle cx="18" cy="19" r="1.4"/></svg></div><h3>M-Commerce Applications</h3><p>Mobile storefronts with intuitive product discovery, secure checkout, and seamless payment gateway integrations.</p><div className="service-link">Create a mobile store →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div><h3>App UI/UX Design</h3><p>Engaging, user-centric interfaces designed specifically for touch interactions and mobile form factors.</p><div className="service-link">Design a better experience →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="5"/><path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg></div><h3>App Maintenance &amp; Support</h3><p>Ongoing updates, OS compatibility fixes, security patches and new feature development after launch.</p><div className="service-link">Keep your app updated →</div></article>
            <article className="service-card"><div className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5h16v14z"/><path d="M7 15l3-3 2 2 4-5 2 3"/><circle cx="9" cy="9" r="1"/></svg></div><h3>App Modernisation</h3><p>Upgrade outdated applications with modern codebases, improved security, and refreshed user interfaces.</p><div className="service-link">Upgrade an existing app →</div></article>
          </div>
        </div>
      </section>

      <section>
        <div className="container builds-grid">
          <div className="builds-copy"><div className="eyebrow">What We Build</div><h2>Choose the app model that matches your business</h2><p>Not every organisation needs the same mobile strategy. We recommend the simplest scalable solution that supports the real requirement without unnecessary complexity.</p><a className="btn btn-dark" href="#contact">Review Your Requirement</a></div>
          <div className="build-list">
            <article className="build-card"><div className="num">01 / CONSUMER</div><h3>B2C Applications</h3><p>Loyalty programs, booking systems, social networking, media consumption, and lifestyle applications.</p><b>Ideal for engaging directly with your audience</b></article>
            <article className="build-card"><div className="num">02 / COMMERCE</div><h3>M-Commerce &amp; Retail</h3><p>Product catalogues, personalized recommendations, shopping cart, payments, and push notifications.</p><b>Ideal for retail and direct-to-customer brands</b></article>
            <article className="build-card"><div className="num">03 / INTERNAL</div><h3>Operational Tools</h3><p>Field workforce management, data collection, inventory scanning, routing, and reporting dashboards.</p><b>Ideal for improving team efficiency</b></article>
            <article className="build-card"><div className="num">04 / HEALTH & FITNESS</div><h3>Wellness &amp; Tracking</h3><p>Wearable integration, progress tracking, content delivery, and secure health data management.</p><b>Ideal for healthcare and fitness providers</b></article>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head"><div className="copy"><div className="eyebrow" style={{color: '#8ec7ee'}}>Our Development Process</div><h2>A structured path from idea to App Store launch</h2><p>Clear stages reduce rework, keep responsibilities visible and help the final application stay aligned with business, design and technical goals.</p></div><div className="section-note" style={{color: '#b8ccde', borderLeftColor: '#70d5cc'}}>Milestones, API dependencies and review rounds are agreed before development begins.</div></div>
          <div className="process-grid">
            <article className="process-step"><div className="process-no">01</div><h3>Discovery &amp; Strategy</h3><p>Business goals, target users, platform choice (iOS/Android), API requirements and monetization strategy.</p><b>App blueprint</b></article>
            <article className="process-step"><div className="process-no">02</div><h3>Wireframing &amp; UX</h3><p>Screen mapping, user flows, navigation structure, and low-fidelity prototypes for early feedback.</p><b>User journey map</b></article>
            <article className="process-step"><div className="process-no">03</div><h3>UI Design</h3><p>Visual system, component design, responsive layouts for tablets/phones, and micro-interactions.</p><b>Approved interface</b></article>
            <article className="process-step"><div className="process-no">04</div><h3>Development &amp; QA</h3><p>Frontend code, API integration, offline capabilities, battery usage optimization and device testing.</p><b>Tested beta build</b></article>
            <article className="process-step"><div className="process-no">05</div><h3>App Store Launch</h3><p>Apple App Store and Google Play submission, store assets, analytics setup, and production release.</p><b>Live application</b></article>
          </div>
        </div>
      </section>

      <section>
        <div className="container quality-grid">
          <div className="quality-panel"><div className="eyebrow">Quality Built into Every Screen</div><h2 style={{fontSize: '36px', marginTop: '10px'}}>Designed for users. Developed for performance.</h2><div className="quality-tabs"><span className="active">Native Feel</span><span>Offline Ready</span><span>Accessible</span><span>Secure</span><span>Scalable</span></div><div className="quality-list">
            <div className="quality-item"><div className="check">✓</div><div><b>Smooth interactions</b><span>Optimized animations and 60fps scrolling performance.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Offline capabilities</b><span>Local data caching for use in low-connectivity areas.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Battery efficiency</b><span>Careful management of background tasks and location services.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Push notifications</b><span>Strategic, relevant alerts that drive user re-engagement.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Secure data storage</b><span>Encrypted local storage and secure API communication.</span></div></div>
            <div className="quality-item"><div className="check">✓</div><div><b>Device compatibility</b><span>Testing across multiple screen sizes, aspect ratios and OS versions.</span></div></div>
          </div></div>
          <div className="score-card"><h3>An app must evolve with its user base.</h3><p>We build with clean architecture, allowing your team to add new features, integrate third-party services, and scale your user base without technical debt.</p><div className="score-grid"><div className="score"><b>Modular code</b><span>Easier feature additions</span></div><div className="score"><b>Crash analytics</b><span>Proactive issue resolution</span></div><div className="score"><b>User metrics</b><span>Understand engagement</span></div><div className="score"><b>API ready</b><span>Connect with new services</span></div></div><a className="btn btn-primary" href="#contact">Plan a Scalable App</a></div>
        </div>
      </section>

      <section className="technology">
        <div className="container tech-wrap">
          <div className="tech-copy"><div className="eyebrow">Technology Stack</div><h2>Modern tools selected around the project</h2><p>Technology choices should support performance, security, native capabilities, and long-term maintenance—not follow trends without a business reason.</p></div>
          <div className="tech-cloud"><div className="tech"><i>RN</i><b>React Native</b></div><div className="tech"><i>FL</i><b>Flutter</b></div><div className="tech"><i>SW</i><b>Swift</b></div><div className="tech"><i>KO</i><b>Kotlin</b></div><div className="tech"><i>NO</i><b>Node.js</b></div><div className="tech"><i>FB</i><b>Firebase</b></div><div className="tech"><i>AW</i><b>AWS</b></div><div className="tech"><i>MQ</i><b>GraphQL</b></div><div className="tech"><i>API</i><b>REST APIs</b></div><div className="tech"><i>SQL</i><b>SQLite</b></div><div className="tech"><i>GA</i><b>Analytics</b></div><div className="tech"><i>PT</i><b>Push Tech</b></div></div>
        </div>
      </section>

      {/* Featured Mobile App Work Case Study */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="projects">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '12px', fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1267b1' }}>
                Selected Mobile Work
              </div>
              <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0b2341', margin: 0, lineHeight: 1.14, letterSpacing: '-0.035em' }}>
                Different users. Different mobile journeys.
              </h2>
              <p style={{ color: '#617080', fontSize: '17px', margin: 0, lineHeight: 1.6 }}>
                The interaction design and technical architecture should reflect the specific on-the-go needs of your mobile audience.
              </p>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
            {/* Visual Column */}
            <div className="project-shot warm" style={{ height: 'auto', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', borderRight: '1px solid #e2e8f0' }}>
              <div className="phone" style={{ transform: 'scale(1.2)' }}>
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  <div className="phone-head" style={{ background: '#0c2e60' }}><i></i><span></span></div>
                  <div className="phone-img" style={{ height: '120px', background: '#1267b1' }}></div>
                  <div className="phone-row"><i></i><i></i></div>
                  <div className="phone-row"><i></i><i></i></div>
                  <div className="phone-bar"></div>
                </div>
              </div>
              <div className="absolute left-6 top-6 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-md text-xs font-black" style={{ color: '#0b2341' }}>
                CONSUMER APP
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <div className="project-tag" style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '.15em', color: '#e33434' }}>
                LIFESTYLE & BOOKING
              </div>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0b2341', margin: '8px 0 16px', lineHeight: 1.1 }}>
                Service Booking App
              </h2>
              <p style={{ color: '#617080', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                A highly-rated mobile application featuring location-based discovery, real-time availability, secure payments, and push notifications for appointment reminders.
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#0b2341', lineHeight: 1 }}>50k+</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#617080', marginTop: '6px', textTransform: 'uppercase' }}>Downloads</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#0b2341', lineHeight: 1 }}>4.8</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#617080', marginTop: '6px', textTransform: 'uppercase' }}>App Store</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#0b2341', lineHeight: 1 }}>2x</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#617080', marginTop: '6px', textTransform: 'uppercase' }}>Retention</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link href="/portfolios" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1267b1] hover:text-[#0c2e60] transition-colors">
                  View Full Case Study <span style={{ fontSize: '16px' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-copy">
              <div className="eyebrow" style={{ color: '#88c7ef' }}>Start a mobile project discussion</div>
              <h2>Ready to build a reliable mobile application?</h2>
              <p>Share your target audience, core features, platform requirements (iOS/Android), and timeline. Our team can review the requirement and recommend a practical development workflow.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-primary" href="/contact">Request a Project Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import droneVisual from '@/public/Photos/drone_partnership_visual.jpg';

const DronePartnership = () => {
  return (
    <>
      <section className="tm-partnership">
        <div className="container">
          <div className="hero">
            <div className="content">
              <div className="eyebrow">
                <span className="eyebrow-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="8" cy="8" r="3"></circle>
                    <circle cx="16" cy="8" r="3"></circle>
                    <circle cx="12" cy="15" r="3"></circle>
                    <path d="M3 20c.5-3.4 2.4-5.2 5-5.7M21 20c-.5-3.4-2.4-5.2-5-5.7M7 20c.5-3 2.2-4.5 5-4.5s4.5 1.5 5 4.5"></path>
                  </svg>
                </span>
                For Drone and Survey Service Providers
              </div>

              <h1>Extend Your Processing Capacity Without Expanding Your Field Team</h1>

              <p className="intro">
                Already completed the survey? Techmapperz can work as a back-office processing partner for drone and survey companies that require additional capacity for photogrammetry, point-cloud processing, GIS production, feature extraction or final client-format preparation.
              </p>

              <div className="review-box">
                <span className="review-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                    <path d="M9 3.5h6M8 9l1.5 1.5L12 8M8 14l1.5 1.5L12 13M14 10h2M14 15h2"></path>
                  </svg>
                </span>
                <p>
                  We can review raw drone imagery, LAS or LAZ point clouds, available survey-control information, project specifications and sample outputs before defining the production workflow.
                </p>
              </div>


            </div>

            <div className="support">
                <div className="support-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 8l9-5 9 5-9 5-9-5z"></path>
                    <path d="M3 12l9 5 9-5M3 16l9 5 9-5"></path>
                  </svg>
                  Processing Support
                </div>

                <div className="support-list">
                  <div className="support-column">
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 3h16v18H4zM8 3v18M12 3v18M16 3v18M4 8h16M4 13h16M4 18h16"></path></svg>
                      </span>
                      <span>Orthophoto and orthomosaic generation</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="4" r="1.5" /><circle cx="7" cy="8" r="1.5" /><circle cx="17" cy="8" r="1.5" />
                          <circle cx="5" cy="14" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="14" r="1.5" />
                          <circle cx="9" cy="19" r="1.5" /><circle cx="16" cy="19" r="1.5" />
                        </svg>
                      </span>
                      <span>Dense point-cloud processing</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4"></path></svg>
                      </span>
                      <span>DEM, DTM and DSM preparation</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 12c3-6 6-8 9-8s6 2 9 8c-3 6-6 8-9 8s-6-2-9-8zM6 12c2-3.6 4-5 6-5s4 1.4 6 5c-2 3.6-4 5-6 5s-4-1.4-6-5zM9 12c1-1.5 2-2 3-2s2 .5 3 2c-1 1.5-2 2-3 2s-2-.5-3-2z"></path></svg>
                      </span>
                      <span>Contour generation</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="12" cy="19" r="2" /><path d="M7 11l4-5M13 6l4 5M17 13l-4 5M11 18l-4-5"></path></svg>
                      </span>
                      <span>LiDAR point-cloud classification</span>
                    </div>
                  </div>

                  <div className="support-column">
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l8-4 8 4v12l-8 4-8-4V6zM4 6l8 4 8-4M12 10v12"></path></svg>
                      </span>
                      <span>2D and 3D feature extraction</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s6-5.1 6-11a6 6 0 10-12 0c0 5.9 6 11 6 11z" /><circle cx="12" cy="10" r="2" /><path d="M3 20h6M15 20h6"></path></svg>
                      </span>
                      <span>Topographic and asset mapping</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="4" width="8" height="12" rx="1" /><rect x="13" y="8" width="8" height="12" rx="1" /><path d="M5 8h4M15 12h4M9 18h6"></path></svg>
                      </span>
                      <span>GIS and CAD conversion</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 17h16M6 17l3-7 3 3 3-6 3 10M8 20h8"></path></svg>
                      </span>
                      <span>Mining volumetric analysis</span>
                    </div>
                    <div className="support-item">
                      <span className="check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.2 6.2l2.2 2.2L9.8 3"></path></svg></span>
                      <span className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l8 3v6c0 5-3.2 8.8-8 11-4.8-2.2-8-6-8-11V5l8-3z" /><path d="M8 12l2.5 2.5L16 9"></path></svg>
                      </span>
                      <span>QA/QC and final delivery-package preparation</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="bottom-row">
            <div className="benefits">
              <div className="benefit">
                <span className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z"></path></svg></span>
                <div>
                  <strong>Scalable support</strong>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                <div>
                  <strong>Structured QA/QC</strong>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 15V3M8 11l4 4 4-4"></path></svg></span>
                <div>
                  <strong>Multi-format delivery</strong>
                </div>
              </div>
              <div className="benefit">
                <span className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg></span>
                <div>
                  <strong>Secure data handling</strong>
                </div>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="cta"
              style={{
                background: '#1656b8',
                color: '#ffffff',
                borderRadius: '16px',
                padding: '16px 26px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 8px 22px rgba(22,86,184,0.28)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <span 
                className="cta-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                  <path d="M21 12c-2.4 4-5.4 6-9 6s-6.6-2-9-6c2.4-4 5.4-6 9-6s6.6 2 9 6z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <strong style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', whiteSpace: 'nowrap' }}>
                Discuss a Data-Processing Requirement
              </strong>
              <span className="arrow" style={{ fontSize: '20px', color: '#ffffff', fontWeight: '700', marginLeft: '2px' }}>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .tm-partnership {
          position:relative;
          overflow:hidden;
          padding:72px 0 54px;
          background:
            radial-gradient(circle at 86% 13%, rgba(23,100,192,.08), transparent 28%),
            radial-gradient(circle at 5% 100%, rgba(20,134,61,.05), transparent 26%),
            #fff;
        }

        .tm-partnership::before {
          content:"";
          position:absolute;
          right:-110px;
          top:-90px;
          width:680px;
          height:500px;
          opacity:.33;
          background:
            repeating-radial-gradient(
              ellipse at center,
              rgba(23,100,192,.16) 0 1px,
              transparent 1px 18px
            );
          transform:rotate(-9deg);
          pointer-events:none;
        }

        .container {
          width: 100%;
          max-width: 1600px;
          padding: 0 48px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 32px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }
        }

        .hero {
          display:grid;
          grid-template-columns:minmax(0, .94fr) minmax(420px, 1.06fr);
          gap:52px;
          align-items:center;
        }

        .eyebrow {
          display:inline-flex;
          align-items:center;
          gap:12px;
          color:#14863d;
          font-size:14px;
          font-weight:800;
          letter-spacing:.06em;
          text-transform:uppercase;
          margin-bottom:18px;
        }

        .eyebrow-icon {
          width:42px;
          height:42px;
          border:1.5px solid #8bc99e;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:#fff;
        }

        .eyebrow svg { width:23px; height:23px; }

        h1 {
          margin:0;
          max-width:720px;
          font-size:clamp(26px, 3vw, 34px);
          line-height:1.2;
          letter-spacing:-.02em;
          color:#0b1b38;
          font-weight:800;
        }

        .intro {
          margin:22px 0 0;
          max-width:690px;
          font-size:17px;
          line-height:1.75;
          color:#52617a;
        }

        .review-box {
          margin-top:22px;
          max-width:690px;
          display:grid;
          grid-template-columns:68px 1fr;
          gap:18px;
          align-items:center;
          padding:18px 20px;
          border:1px solid #bcdcc6;
          border-radius:14px;
          background:linear-gradient(90deg, #f2faf4, #fbfefc);
        }

        .review-icon {
          width:52px;
          height:52px;
          display:grid;
          place-items:center;
          border-radius:50%;
          color:#fff;
          background:#14863d;
        }

        .review-icon svg { width:27px; height:27px; }

        .review-box p {
          margin:0;
          padding-left:18px;
          border-left:1px solid #9fc9ab;
          font-size:15px;
          line-height:1.65;
          color:#25334b;
        }

        .visual {
          position:relative;
          min-height:510px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .visual-card {
          width:100%;
          border-radius:26px;
          overflow:hidden;
          background:#f4f9fd;
          box-shadow:0 18px 45px rgba(23,55,89,.08);
          border:1px solid rgba(215,227,237,.9);
        }

        .visual-card img {
          display:block;
          width:100%;
          height:auto;
          object-fit:cover;
        }

        .support {
          margin-top:0px;
        }

        .support-title {
          display:flex;
          align-items:center;
          gap:12px;
          color:#164f9e;
          font-size:17px;
          font-weight:800;
          letter-spacing:.02em;
          text-transform:uppercase;
        }

        .support-title::after {
          content:"";
          flex:1;
          height:1px;
          background:linear-gradient(90deg, #9fc4ef, transparent);
        }

        .support-title svg {
          width:23px;
          height:23px;
          color:#2b77cf;
          flex:none;
        }

        .support-list {
          margin-top:20px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:0 34px;
          max-width:760px;
        }

        .support-column + .support-column {
          border-left:1px solid #dfe8ef;
          padding-left:32px;
        }

        .support-item {
          display:grid;
          grid-template-columns:24px 36px 1fr;
          gap:10px;
          align-items:center;
          min-height:46px;
          color:#20304b;
          font-size:14px;
          font-weight:500;
        }

        .check {
          width:18px;
          height:18px;
          display:grid;
          place-items:center;
          border:1.5px solid #76c68d;
          color:#14863d;
          border-radius:50%;
        }

        .check svg { width:11px; height:11px; }

        .service-icon {
          width:30px;
          height:30px;
          display:grid;
          place-items:center;
          color:#2474c8;
        }

        .service-icon.green { color:#32a05b; }
        .service-icon svg { width:28px; height:28px; }

        .bottom-row {
          margin-top:30px;
          display:flex;
          flex-wrap:wrap;
          gap:20px;
          align-items:center;
          justify-content:space-between;
        }

        .benefits {
          border:1px solid #dfe8ef;
          border-radius:16px;
          background:rgba(255,255,255,.94);
          display:grid;
          grid-template-columns:repeat(4,1fr);
          padding:16px 18px;
          flex:1 1 620px;
        }

        .benefit {
          display:grid;
          grid-template-columns:48px 1fr;
          gap:12px;
          align-items:center;
          padding:6px 17px;
          border-right:1px solid #dfe8ef;
        }

        .benefit:last-child { border-right:none; }

        .benefit-icon {
          width:46px;
          height:46px;
          border-radius:14px;
          display:grid;
          place-items:center;
          color:#14863d;
          background:#eef8f1;
          border:1px solid #cfe8d6;
        }

        .benefit:nth-child(even) .benefit-icon {
          color:#1656a8;
          background:#edf5ff;
          border-color:#d6e6fb;
        }

        .benefit svg { width:25px; height:25px; }

        .benefit strong {
          display:block;
          color:#14863d;
          font-size:14px;
        }

        .benefit:nth-child(even) strong { color:#164f9e; }

        .benefit span {
          color:#5c6980;
          font-size:12.5px;
          line-height:1.5;
        }

        .cta {
          border:0;
          border-radius:16px;
          padding:16px 26px;
          display:inline-flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          color:#fff !important;
          background:#1656b8 !important;
          box-shadow:0 8px 22px rgba(22,86,184,.28);
          transition:all .2s ease;
          white-space:nowrap;
          flex-shrink:0;
        }

        .cta:hover {
          background:#114799 !important;
          transform:translateY(-2px);
          box-shadow:0 12px 26px rgba(22,86,184,.36);
        }

        .cta-icon {
          width:36px;
          height:36px;
          border-radius:50%;
          background:rgba(255,255,255,.2);
          color:#fff;
          display:grid;
          place-items:center;
          flex-shrink:0;
        }

        .cta-icon svg { width:20px; height:20px; }

        .cta strong {
          display:inline-block;
          font-size:15px;
          font-weight:700;
          color:#fff !important;
          white-space:nowrap;
          line-height:1.2;
        }

        .cta .arrow {
          font-size:20px;
          line-height:1;
          font-weight:700;
          color:#fff;
          margin-left:2px;
          transition:transform .2s ease;
        }

        .cta:hover .arrow {
          transform:translateX(3px);
        }

        @media (max-width:1100px) {
          .hero {
            grid-template-columns:1fr;
            gap:30px;
          }
          .visual {
            min-height:auto;
          }
          .visual-card {
            max-width:820px;
          }
          .bottom-row {
            grid-template-columns:1fr;
          }
          .cta {
            max-width:520px;
          }
        }

        @media (max-width:850px) {
          .tm-partnership { padding-top:50px; }
          .support-list {
            grid-template-columns:1fr;
          }
          .support-column + .support-column {
            border-left:0;
            padding-left:0;
          }
          .benefits {
            grid-template-columns:1fr 1fr;
          }
          .benefit:nth-child(2) { border-right:none; }
          .benefit:nth-child(-n+2) {
            border-bottom:1px solid #dfe8ef;
            padding-bottom:16px;
            margin-bottom:10px;
          }
        }

        @media (max-width:620px) {
          .container {
            width:min(100% - 28px, 1240px);
          }

          .intro { font-size:15.5px; }
          .review-box {
            grid-template-columns:54px 1fr;
            padding:15px;
          }
          .review-box p {
            padding-left:14px;
            font-size:14px;
          }
          .benefits {
            grid-template-columns:1fr;
          }
          .benefit,
          .benefit:nth-child(2) {
            border-right:0;
            border-bottom:1px solid #dfe8ef;
            padding:12px 5px 14px;
            margin:0;
          }
          .benefit:last-child { border-bottom:none; }
          .cta {
            grid-template-columns:50px 1fr 22px;
            padding:18px;
          }
          .cta-icon {
            width:48px;
            height:48px;
          }
          .cta strong { font-size:17px; }
        }
      `}</style>
    </>
  );
};

export default DronePartnership;

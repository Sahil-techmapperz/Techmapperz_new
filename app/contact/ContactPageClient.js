"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronDown
} from 'lucide-react';

export default function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "What information is required for a GIS or drone quotation?",
      a: "Share the location, area or corridor length, source data, expected outputs, accuracy, coordinate system, timeline and sample specifications. These determine the methodology and effort."
    },
    {
      q: "Can we send raw drone images or LiDAR data?",
      a: "Yes. First send a summary and small representative sample. Large or confidential datasets should be transferred only through an approved secure link."
    },
    {
      q: "Do you work outside Kolkata and Delhi?",
      a: "Yes. GIS production and application-development work can be delivered remotely. Field survey coverage depends on project location, permissions, mobilisation and local operating conditions."
    },
    {
      q: "Can Techmapperz join a consortium or work as a subcontractor?",
      a: "Yes, subject to technical fit, commercial terms, role clarity, client permissions and data-confidentiality requirements."
    },
    {
      q: "How quickly will we receive a proposal?",
      a: "The timeline depends on scope clarity. A small, well-defined production assignment can be assessed faster than a survey project requiring permissions, site mobilisation, control planning or partner coordination."
    },
    {
      q: "Can you sign an NDA before reviewing data?",
      a: "Commercially reasonable confidentiality arrangements can be discussed before receiving sensitive project information."
    }
  ];

  const heroPoints = [
    "GIS, CAD, raster and point-cloud projects",
    "Drone survey and mapping requirements",
    "Web and Mobile GIS applications",
    "India and international project support"
  ];

  const sendSteps = [
    {
      num: "01",
      title: "Project geography",
      desc: "Location, area in sq. km/hectares or corridor length and width."
    },
    {
      num: "02",
      title: "Available inputs",
      desc: "Drone images, LiDAR/LAS, satellite imagery, CAD, GCP/DGPS, specifications or samples."
    },
    {
      num: "03",
      title: "Expected deliverables",
      desc: "GIS database, DWG, orthomosaic, DTM/DSM, contours, reports, dashboard or mobile app."
    },
    {
      num: "04",
      title: "Acceptance criteria",
      desc: "Required accuracy, coordinate system, coding schema, QA checklist and delivery schedule."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Requirement review",
      desc: "We examine the scope, location, available data, deliverables, schedule and known constraints."
    },
    {
      num: "02",
      title: "Technical clarification",
      desc: "Our team confirms accuracy, survey controls, coding schema, file formats and acceptance criteria."
    },
    {
      num: "03",
      title: "Method and estimate",
      desc: "We prepare an execution approach, assumptions, resource plan, timeline and commercial proposal."
    },
    {
      num: "04",
      title: "Project mobilisation",
      desc: "After agreement, project communication, inputs, milestones, QA/QC and review workflow are established."
    }
  ];

  const contactOptions = [
    {
      num: "01",
      title: "Project enquiries",
      desc: "GIS, drone, LiDAR, Web GIS, website and mobile application requirements.",
      linkText: "Share requirement →",
      href: "#project-form"
    },
    {
      num: "02",
      title: "Partnerships",
      desc: "Survey partnerships, subcontracting, consortium bids and international production support.",
      linkText: "Discuss partnership →",
      href: "mailto:info@techmapperz.com?subject=Partnership%20Enquiry"
    },
    {
      num: "03",
      title: "Careers",
      desc: "GIS production, drone operations, software development, design and business-development opportunities.",
      linkText: "Send career enquiry →",
      href: "mailto:info@techmapperz.com?subject=Career%20Enquiry"
    },
    {
      num: "04",
      title: "Project support",
      desc: "Existing clients can share a project reference, delivery issue or approved revision request.",
      linkText: "Contact support →",
      href: "mailto:info@techmapperz.com?subject=Existing%20Project%20Support"
    }
  ];

  return (
    <div className="bg-white text-[#17202A] font-sans antialiased">

      {/* 01 • HERO SECTION */}
      <section className="relative py-4 md:py-10 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-[#4B5563] mb-4">
            <Link href="/" className="hover:text-[#0C2E60] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#1656B8] font-semibold">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                START A CONVERSATION
              </span>
              <h1 className="text-[32px] sm:text-[34px] md:text-[46px] lg:text-[52px] font-bold text-[#0C2E60] leading-[1.18] tracking-tight">
                Tell us what you need to <span className="text-[#1656B8]">survey, map or build.</span>
              </h1>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65] max-w-2xl font-normal">
                Share your project location, source data, expected deliverables, accuracy requirement and timeline. Our team will review the requirement and recommend a practical GIS, drone survey or development workflow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 pt-2">
                <Link
                  href="#project-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] text-center w-full sm:w-auto"
                >
                  Share Your Requirement &rarr;
                </Link>
                <a
                  href="mailto:info@techmapperz.com"
                  className="inline-flex items-center justify-center px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-full font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 transition-all duration-200 text-center w-full sm:w-auto shadow-sm"
                >
                  Email Project Scope
                </a>
              </div>

              {/* Checkmark Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-2xl">
                {heroPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[#4B5563] text-[14px]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium text-[#17202A]">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Map Graphic Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#DDE3EA] rounded-2xl sm:rounded-[24px] p-4 shadow-lg overflow-hidden relative">
                <div className="flex justify-between items-center pb-3 mb-2 border-b border-[#DDE3EA] text-[11px] font-bold text-[#4B5563]">
                  <span>TECHMAPPERZ · PROJECT CONTACT MAP</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D2292B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EFB548]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0F766E]" />
                  </div>
                </div>

                <div className="h-[360px] sm:h-[400px] relative overflow-hidden rounded-xl bg-gradient-to-br from-[#E8F5F3] via-[#EDF5FB] to-[#DDE3EA]">
                  <svg viewBox="0 0 620 470" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                    <rect width="620" height="470" fill="#dbeaf2"/>
                    <g fill="#eef6f8" stroke="#a6c7d8" strokeWidth="2">
                      <path d="M80 40 L215 18 L287 72 L361 54 L447 111 L527 97 L598 170 L567 260 L610 334 L533 441 L417 419 L350 456 L254 405 L167 431 L99 365 L36 281 L63 194 L21 123 Z"/>
                      <path d="M213 105 L303 73 L358 112 L343 173 L278 202 L222 164 Z"/>
                      <path d="M372 211 L465 167 L529 208 L505 288 L427 316 L369 274 Z"/>
                      <path d="M156 248 L241 213 L296 274 L265 348 L177 366 L115 311 Z"/>
                    </g>
                    <g fill="none" stroke="#87b0c7" opacity=".68">
                      <path d="M40 335 C132 251 201 355 302 258 S465 161 598 218" strokeWidth="18"/>
                      <path d="M40 335 C132 251 201 355 302 258 S465 161 598 218" stroke="#f7fbfd" strokeWidth="7"/>
                      <path d="M82 80 L545 405" strokeWidth="2" strokeDasharray="7 8"/>
                      <path d="M38 203 L580 102" strokeWidth="2" strokeDasharray="7 8"/>
                    </g>
                    <g fill="#1656B8">
                      <circle cx="376" cy="242" r="7"/>
                      <circle cx="459" cy="189" r="7"/>
                    </g>
                    {/* Kolkata Brand Red Anchor Dot */}
                    <g fill="#D2292B">
                      <circle cx="325" cy="293" r="9"/>
                    </g>
                    <g fill="none" stroke="#D2292B" strokeWidth="2">
                      <circle cx="325" cy="293" r="18" opacity=".3"/>
                    </g>
                  </svg>

                  {/* Float Panel */}
                  <div className="absolute left-3.5 top-3.5 bg-white/95 backdrop-blur-md border border-[#DDE3EA] rounded-xl p-3 shadow-md max-w-[200px]">
                    <strong className="block text-[#0C2E60] text-[12px] font-bold">Project enquiry inputs</strong>
                    <span className="block text-[#4B5563] text-[10px] mt-1">Location · Area · Data · Accuracy · Deliverables · Timeline</span>
                  </div>

                  {/* Kolkata Delivery Float */}
                  <div className="absolute right-3.5 bottom-3.5 bg-white/95 backdrop-blur-md border border-[#DDE3EA] rounded-xl p-3 shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2292B] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D2292B]"></span>
                      </span>
                      <b className="block text-[#0C2E60] text-[12px] font-bold">Kolkata delivery</b>
                    </div>
                    <span className="block text-[#4B5563] text-[10px] mt-0.5">GIS production & development team</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 • QUICK CONTACT STRIP */}
      <section className="relative py-2 md:py-4 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0C2E60] rounded-2xl shadow-xl overflow-hidden text-white divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <span className="text-[#5EEAD4] text-[11px] font-bold uppercase tracking-[0.15em] block">
                EMAIL DIRECTLY
              </span>
              <b className="text-white text-[16px] sm:text-[17px] mt-1 font-bold">info@techmapperz.com</b>
              <span className="text-[#E8F5F3] text-[13px] mt-1">Project scopes and general enquiries</span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <span className="text-[#5EEAD4] text-[11px] font-bold uppercase tracking-[0.15em] block">
                CALL OUR TEAM
              </span>
              <b className="text-white text-[16px] sm:text-[17px] mt-1 font-bold">+91 33 3575 2689</b>
              <span className="text-[#E8F5F3] text-[13px] mt-1">Kolkata office and delivery support</span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <span className="text-[#5EEAD4] text-[11px] font-bold uppercase tracking-[0.15em] block">
                PROJECT COVERAGE
              </span>
              <b className="text-white text-[16px] sm:text-[17px] mt-1 font-bold">India &amp; Overseas</b>
              <span className="text-[#E8F5F3] text-[13px] mt-1">Remote production and field-partner models</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 • PROJECT REQUIREMENT FORM SECTION */}
      <section className="relative py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA] overflow-hidden" id="project-form">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                PROJECT REQUIREMENT FORM
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[36px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                Better inputs lead to a more accurate proposal.
              </h2>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                A brief description is enough to start. The details below help us assess methodology, team size, timeline, accuracy and commercial assumptions.
              </p>

              {/* 4 Send Steps */}
              <div className="space-y-3 pt-2">
                {sendSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-3.5 p-4 rounded-xl bg-white border border-[#DDE3EA] shadow-xs">
                    <span className="w-8 h-8 rounded-lg bg-[#E8F5F3] text-[#0F766E] font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <b className="block text-[#0C2E60] text-[14px] font-bold">{step.title}</b>
                      <p className="text-[#4B5563] text-[12px] sm:text-[13px] mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secure Transfer Notice */}
              <div className="p-4 rounded-xl bg-white border border-[#DDE3EA] text-[#4B5563] text-[13px] leading-relaxed">
                <div className="flex items-center gap-2 text-[#0C2E60] font-bold text-[14px] mb-1">
                  <Lock className="w-4 h-4 text-[#0F766E]" />
                  <span>Confidential or large files?</span>
                </div>
                Submit only a project summary here. Ask us for a secure upload location before transferring imagery, LiDAR, drawings or client-confidential datasets.{" "}
                <a href="mailto:info@techmapperz.com" className="text-[#1656B8] hover:text-[#0C2E60] font-bold inline-flex items-center gap-1">
                  Request a secure link &rarr;
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#DDE3EA] shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-[#DDE3EA]">
                  <div>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0C2E60]">Discuss your project</h3>
                    <p className="text-[#4B5563] text-[13px] mt-0.5">Fields marked with <span className="text-[#D2292B]">*</span> are required.</p>
                  </div>
                  <span className="inline-block self-start sm:self-auto px-3 py-1 bg-[#E8F5F3] text-[#0F766E] text-[11px] font-bold uppercase rounded-md">
                    Project-focused enquiry
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Full name <span className="text-[#D2292B]">*</span>
                    </label>
                    <input
                      required
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Organisation <span className="text-[#D2292B]">*</span>
                    </label>
                    <input
                      required
                      placeholder="Company / department"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Work email <span className="text-[#D2292B]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      placeholder="Country code and number"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Country <span className="text-[#D2292B]">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] bg-white focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    >
                      <option value="">Select country</option>
                      <option>India</option>
                      <option>Spain</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>United Arab Emirates</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Required Service */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Required service <span className="text-[#D2292B]">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] bg-white focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    >
                      <option value="">Select service</option>
                      <option>GIS Mapping & Digitisation</option>
                      <option>Drone Photogrammetry Survey</option>
                      <option>Drone LiDAR Survey</option>
                      <option>LiDAR / Point-Cloud Processing</option>
                      <option>Topographic & Contour Mapping</option>
                      <option>Feature Extraction</option>
                      <option>Utility / Pipeline Mapping</option>
                      <option>Web or Mobile GIS Development</option>
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Industry
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] bg-white focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    >
                      <option value="">Select industry</option>
                      <option>Infrastructure & AEC</option>
                      <option>Government & Land Administration</option>
                      <option>Utilities & Energy</option>
                      <option>Mining & Natural Resources</option>
                      <option>Agriculture & Environment</option>
                      <option>Transportation</option>
                      <option>Telecommunications</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Project location
                    </label>
                    <input
                      placeholder="City, state, country or corridor"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Approximate project size */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Approximate project size
                    </label>
                    <input
                      placeholder="e.g. 75 sq. km or 120 km corridor"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Required timeline */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Required timeline
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] bg-white focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    >
                      <option value="">Select expected timeline</option>
                      <option>Urgent / under 2 weeks</option>
                      <option>2–4 weeks</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Long-term / annual programme</option>
                      <option>To be discussed</option>
                    </select>
                  </div>

                  {/* Available data textarea (Full width) */}
                  <div className="sm:col-span-2">
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Available data and required deliverables
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention source files, coordinate system, expected formats, accuracy, feature codes, quantity, sample data and QA requirements."
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] text-[#17202A] focus:outline-none focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] transition-colors"
                    />
                  </div>

                  {/* Attachment Box (Full width) */}
                  <div className="sm:col-span-2">
                    <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                      Attach a small scope document or sample
                    </label>
                    <div className="border border-dashed border-[#DDE3EA] rounded-xl p-4 bg-[#F6F8FB] text-center">
                      <p className="text-[12px] text-[#4B5563] mb-2">
                        Recommended: PDF, DOCX, XLSX, JPG or small sample archive. Do not upload large project data through a public form.
                      </p>
                      <input type="file" className="text-[13px] text-[#4B5563]" />
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-4 flex items-start gap-2.5">
                  <input
                    required
                    type="checkbox"
                    id="consent"
                    className="mt-1 rounded border-[#DDE3EA] text-[#1656B8] focus:ring-[#1656B8]"
                  />
                  <label htmlFor="consent" className="text-[13px] text-[#4B5563] leading-relaxed cursor-pointer">
                    I agree that Techmapperz may use these details to respond to this enquiry. No project data should be submitted without necessary client permission.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px]"
                  >
                    Submit Project Requirement &rarr;
                  </button>
                </div>

                {/* Success Message */}
                {formSubmitted && (
                  <div className="mt-4 p-4 rounded-xl bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 text-[14px] font-semibold text-center animate-fade-in">
                    ✓ Thank you. In the live website, this message confirms submission and notifies our engineering team.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 04 • WHAT HAPPENS NEXT SECTION */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              WHAT HAPPENS NEXT
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
              A clear path from enquiry to proposal.
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              The contact page sets realistic expectations and helps qualified buyers understand each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 flex items-center justify-center font-bold text-[14px] mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[#0C2E60] font-bold text-[18px] mb-2 leading-snug">{step.title}</h3>
                  <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 • CHOOSE THE RIGHT CONTACT (High-Impact Deep Navy Section) */}
      <section className="relative py-4 md:py-10 bg-[#0C2E60] border-t border-white/10 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              CHOOSE THE RIGHT CONTACT
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
              Not every conversation needs the full project form.
            </h2>
            <p className="text-[#E8F5F3] text-[16px] md:text-[18px] font-normal leading-[1.65] mt-2.5">
              Use the most relevant contact path so that your request reaches the correct team promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white text-[#17202A] rounded-2xl p-6 border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <span className="w-9 h-9 rounded-lg bg-[#E8F5F3] text-[#0F766E] font-bold text-[13px] flex items-center justify-center mb-4">
                    {opt.num}
                  </span>
                  <h3 className="text-[18px] md:text-[19px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed mb-6">
                    {opt.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#DDE3EA]">
                  <Link
                    href={opt.href}
                    className="inline-flex items-center gap-1.5 text-[#1656B8] font-bold text-[14px] hover:text-[#0C2E60] transition-colors"
                  >
                    {opt.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 07 • CONTACT FAQS */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              CONTACT FAQS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Useful details before you submit an enquiry.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#DDE3EA] rounded-2xl overflow-hidden transition-all bg-[#F6F8FB]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 group"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-[#0C2E60] font-bold text-[15px] sm:text-[16px] group-hover:text-[#1656B8] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-[#1656B8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed border-t border-[#DDE3EA]/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 08 • CLOSING CALL TO ACTION BANNER (Standard Section 5.5 Template) */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            {/* Subtle background circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Have a Scope of Work Ready?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Email the document with the project location, area, inputs, required accuracy, deliverables and delivery schedule. We will use it to prepare the next technical discussion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <a
                href="mailto:info@techmapperz.com?subject=New%20GIS%20or%20Drone%20Project%20Scope"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Email Your Scope &rarr;
              </a>
              <Link
                href="#project-form"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Complete the Form
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import WebTechFilter from "./WebTechFilter";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiShoppingCart,
  FiCpu,
  FiRefreshCw,
  FiLayout,
  FiMapPin,
  FiSearch,
  FiGitBranch,
  FiLayers,
  FiCode,
  FiSend,
  FiSliders,
  FiShield,
  FiTool,
  FiDatabase,
  FiHelpCircle,
  FiCompass,
  FiActivity,
  FiTrendingUp,
  FiCheck
} from "react-icons/fi";
import {
  FaBuilding,
  FaIndustry,
  FaLandmark,
  FaBolt,
  FaDraftingCompass,
  FaBriefcase
} from "react-icons/fa";

const FaqItem = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#DDE3EA] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="text-[#0C2E60] font-bold text-[16px] md:text-[18px] leading-snug group-hover:text-[#1656B8] transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-[#1656B8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] pb-5">
          {faq.a}
        </p>
      )}
    </div>
  );
};

export default function WebDevelopmentPageClient() {
  const services = [
    {
      id: "corporate",
      icon: FiGlobe,
      title: "Corporate & Business Websites",
      desc: "Structured websites for companies that need to present services, industries, capabilities, credentials and project experience clearly. The scope can include sitemap planning, responsive page design, enquiry forms, project or blog modules and analytics setup.",
      features: [
        "Sitemap & structure planning",
        "Responsive multi-device layout",
        "Conversion & enquiry forms",
        "Analytics & technical SEO setup"
      ]
    },
    {
      id: "ecommerce",
      icon: FiShoppingCart,
      title: "E-commerce Websites",
      desc: "Online stores designed around product discovery and a practical buying journey. Depending on the requirement, the work may include catalogue structure, product pages, cart and checkout, payment integration, order communication and content management.",
      features: [
        "Structured product catalogue",
        "Cart & checkout workflows",
        "Secure payment gateway integration",
        "Order management & notifications"
      ]
    },
    {
      id: "webapps",
      icon: FiCpu,
      title: "Custom Web Applications & Portals",
      desc: "Browser-based systems for requirements that go beyond a marketing website, such as customer portals, internal dashboards, order workflows, approval processes, data entry and role-based access. The functions and user roles are defined before the interface is designed.",
      features: [
        "Role-based access & permissions",
        "Custom operational dashboards",
        "Workflow & approval pipelines",
        "API & database integrations"
      ]
    },
    {
      id: "redesign",
      icon: FiRefreshCw,
      title: "Website Redesign & Migration",
      desc: "An old website does not always need to be discarded completely. Before redesigning, we review the existing pages, URLs, content, search visibility, structure and functionality so that useful assets can be retained where appropriate.",
      features: [
        "URL & SEO preservation (301 redirects)",
        "Content & asset audit",
        "Modern responsive redesign",
        "Performance & security upgrade"
      ]
    },
    {
      id: "cms",
      icon: FiLayout,
      title: "CMS & Content Platforms",
      desc: "Content-managed websites for teams that regularly update services, products, projects, blogs, notices or events. Editing rights and administration workflows can be planned so authorised users can maintain selected content without depending on a developer for every routine change.",
      features: [
        "Intuitive admin interface",
        "Custom content types & fields",
        "Multi-user permission levels",
        "Media & asset management"
      ]
    },
    {
      id: "webgis",
      icon: FiMapPin,
      title: "Web GIS & Map Integration",
      desc: "Location-based interfaces for organisations that need interactive maps, spatial data, asset or project locations, dashboards or map-led workflows within a website or web application. This work combines Techmapperz's web-development and geospatial experience where the requirement genuinely needs both.",
      features: [
        "Interactive GIS maps & layers",
        "Spatial data & asset visualization",
        "Location-based query dashboards",
        "Geospatial API integration"
      ]
    }
  ];

  const whoWeBuildFor = [
    {
      icon: FiGlobe,
      title: "Geospatial, Drone & Survey Companies",
      desc: "Present survey services, technology, methodologies, deliverables and completed assignments in a structure that works for both technical and non-technical clients.",
      focus: ["Services", "Survey Methods", "Deliverables", "Project Experience"]
    },
    {
      icon: FaBuilding,
      title: "Engineering & Infrastructure Consultants",
      desc: "Organise engineering disciplines, sector experience, project credentials and technical capabilities to support prequalification and serious business enquiries.",
      focus: ["Capabilities", "Sectors", "Credentials", "Prequalification"]
    },
    {
      icon: FaLandmark,
      title: "Government & Public-Sector Contractors",
      desc: "Help authorities and project partners find company registrations, statutory information, completed assignments and contact details without searching through lengthy company profiles.",
      focus: ["Registrations", "Compliance", "Completed Work", "Credentials"]
    },
    {
      icon: FaBolt,
      title: "Energy, Utilities & Mining Companies",
      desc: "Bring together operating capabilities, assets, locations, safety information and project experience in a clear, professional website structure.",
      focus: ["Operations", "Assets", "Safety", "Project Portfolio"]
    },
    {
      icon: FaDraftingCompass,
      title: "Architecture, Planning & Construction Firms",
      desc: "Create a visual, portfolio-led website that makes completed projects, design services, sectors and delivery experience easy to explore.",
      focus: ["Projects", "Services", "Sectors", "Design Approach"]
    },
    {
      icon: FaBriefcase,
      title: "Professional Services & B2B Companies",
      desc: "Explain specialist services clearly, demonstrate relevant experience and guide suitable prospects towards an enquiry or consultation.",
      focus: ["Services", "Case Studies", "Expertise", "Lead Enquiries"]
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Requirement & Content Review",
      desc: "We review the organisation, target users, current website if available, required pages, functionality, reference websites and content responsibilities.",
      icon: FiSearch
    },
    {
      step: "02",
      title: "Sitemap & Scope Confirmation",
      desc: "We define the page hierarchy, navigation, user journeys, functional scope, integrations, content inputs, review stages and delivery plan.",
      icon: FiGitBranch
    },
    {
      step: "03",
      title: "UI/UX Design",
      desc: "Key pages and reusable components are designed with desktop and mobile behaviour in mind. Feedback is consolidated before development moves too far.",
      icon: FiLayout
    },
    {
      step: "04",
      title: "Development & Testing",
      desc: "The approved design is developed, content is implemented and agreed functions, forms, integrations, responsive behaviour and common browsers are tested.",
      icon: FiCode
    },
    {
      step: "05",
      title: "Launch & Handover",
      desc: "Final checks are closed, production settings are checked and the website is deployed. Domain, analytics, search tools, access and post-launch support are handled according to the agreed scope.",
      icon: FiSend
    }
  ];

  const whyChooseUs = [
    {
      title: "Structure Before Styling",
      desc: "We define how services, projects, products and calls to action connect before spending time on decorative details.",
      icon: FiLayers
    },
    {
      title: "Understanding of Technical Services",
      desc: "Our GIS, drone and project-delivery background helps us organise specialised information for buyers who may not share the same technical vocabulary.",
      icon: FiCpu
    },
    {
      title: "Defined Review Stages",
      desc: "Requirements, page structure, interface reviews, development reviews and final checks are separated so feedback can be handled at the right stage.",
      icon: FiSliders
    },
    {
      title: "Technology Chosen for the Requirement",
      desc: "Frameworks and integrations are selected according to the website's functions, administration needs, future expansion and available budget.",
      icon: FiTool
    },
    {
      title: "Geospatial Integration When Required",
      desc: "Where a project genuinely needs maps, spatial databases, asset locations or Web GIS workflows, Techmapperz can bring web and geospatial work into the same delivery conversation.",
      icon: FiMapPin
    },
    {
      title: "Support Beyond Launch",
      desc: "Maintenance, content updates and additional functionality can be scoped after launch instead of leaving the client without a clear support route.",
      icon: FiShield
    }
  ];

  const faqs = [
    {
      q: "How much does a business website cost?",
      a: "The cost depends on the number and type of pages, design work, content readiness, CMS requirements, e-commerce or portal functions, integrations and testing. Share the current website or an expected page and function list so that the scope can be reviewed before pricing."
    },
    {
      q: "What information is needed for a website proposal?",
      a: "Useful inputs include the business overview, target users, current website if available, expected pages, required functionality, content status, reference websites and preferred timeline. A complete specification is helpful but not mandatory for the first discussion."
    },
    {
      q: "Can Techmapperz redesign an existing website without losing useful pages?",
      a: "Yes. The existing page structure, content, URLs, search visibility and functions should be reviewed before redesign. Pages that are removed or renamed require an agreed redirect plan so users and search engines do not reach unnecessary errors."
    },
    {
      q: "Can our team update the website after launch?",
      a: "Yes, when content management is included in the scope. We agree which content your authorised users need to edit and organise the administration workflow around those updates."
    },
    {
      q: "Can Techmapperz build e-commerce websites and custom portals?",
      a: "Yes. The scope can include product catalogues, cart and checkout, payment integration, B2B ordering, dashboards, approval workflows or customer portals. The exact functions and user roles must be confirmed before design and development."
    },
    {
      q: "Can maps or GIS data be integrated into the website?",
      a: "Yes, where the requirement needs it. Techmapperz can scope interactive maps, location displays, spatial queries, asset views or map-led workflows separately from a standard business website."
    },
    {
      q: "What happens after launch?",
      a: "The launch scope should state who manages the domain, hosting, source files, administrator access, backups, routine updates and future changes. Ongoing maintenance can be agreed as a separate support arrangement where required."
    }
  ];

  return (
    <div className="bg-white text-[#17202A] selection:bg-[#1656B8]/10">
      <ScrollToTop />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden bg-[#0C2E60]">
        <Image
          src="/Website_Development_service/Website_Development_banner.png"
          alt="Website Development Services Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-5 sm:gap-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li className="text-white font-semibold" aria-current="page">Website Development</li>
            </ol>
          </nav>

          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
            WEBSITE DEVELOPMENT COMPANY IN INDIA
          </span>

          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-3xl text-white">
            Website Development Services Built Around Your Business
          </h1>

          <div className="space-y-3 max-w-2xl text-[#E8F5F3] text-[16px] md:text-[18px] leading-[1.65]">
            <p>
              A website should help the right visitor understand your business, find relevant evidence and take the next step without unnecessary effort.
            </p>
            <p className="text-[#E8F5F3]/90 text-[15px] sm:text-[16px]">
              Techmapperz designs and develops responsive business websites, e-commerce platforms and browser-based applications around the content, users and workflows that matter to each project. We can support a new build or review an existing website that no longer reflects the organisation clearly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Discuss Your Website Requirement &rarr;
              </button>
            </Link>
            <Link href="/portfolios" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full border border-white/60 transition-all duration-300 min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                View Website Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BUILT FOR CLEARER DECISIONS ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                BUILT FOR CLEARER DECISIONS
              </span>

              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                A Website Should Make the Next Step Easier
              </h2>

              <p className="text-[#17202A] text-[16px] md:text-[18px] leading-[1.65] font-medium">
                Most visitors arrive with a small set of questions: What does this company do? Is the experience relevant to my requirement? Can I trust the information? How do I enquire or buy?
              </p>

              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
                We begin with those questions before choosing page effects or a technology stack. The sitemap, navigation, service pages, project evidence and calls to action are organised around what visitors need to understand and what the client team needs to manage after launch.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0C2E60] mb-2">
                  Key Questions Every Visitor Asks
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#DDE3EA] shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="text-sm font-bold text-[#0C2E60]">What does this company do?</p>
                      <p className="text-xs text-[#4B5563] mt-0.5">Clear value proposition and core service positioning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#DDE3EA] shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="text-sm font-bold text-[#0C2E60]">Is the experience relevant to my requirement?</p>
                      <p className="text-xs text-[#4B5563] mt-0.5">Industry case studies and proven project deliverables</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#DDE3EA] shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="text-sm font-bold text-[#0C2E60]">Can I trust the information?</p>
                      <p className="text-xs text-[#4B5563] mt-0.5">Client credentials, testimonials and technical depth</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#DDE3EA] shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <p className="text-sm font-bold text-[#0C2E60]">How do I enquire or buy?</p>
                      <p className="text-xs text-[#4B5563] mt-0.5">Frictionless inquiry forms, phone links and clear CTAs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE BUILD (SERVICES) ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHAT WE BUILD
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Website Solutions for Different Business Requirements
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
              The right website format depends on what users need to do, how often the content changes and which systems or people need to support it.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#1656B8]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F4F8] border border-[#DDE3EA] flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656B8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#DDE3EA]">
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Combined CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-300 min-h-[46px] w-full sm:w-auto"
            >
              Discuss Your Website Requirement &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHO WE BUILD FOR ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHO WE BUILD FOR
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Websites Built for Technical and Project-Based Businesses
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
              A survey firm needs to show its deliverables and project experience. An engineering consultancy needs clear capabilities and credentials. We plan each website around the information its clients need before they make contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeBuildFor.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656B8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#DDE3EA]">
                    <p className="text-[11px] font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                      Website Focus
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focus.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#DDE3EA] text-[#0C2E60] font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-300 min-h-[46px] w-full sm:w-auto"
            >
              Discuss Your Website Project &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SELECTED PROJECT EXPERIENCE (Case Study) ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              SELECTED PROJECT EXPERIENCE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Selected Website &amp; Web Application Work
            </h2>
          </div>

          {/* Featured Case Study Card */}
          <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="relative w-full lg:w-[45%] min-h-[280px] lg:min-h-[460px] flex-shrink-0">
              <Image
                src="/Photos/IT_portfolio/aahelipublishers/1.webp"
                alt="Aaheli Publishers E-commerce Website"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                PUBLISHING &amp; E-COMMERCE
              </span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.2]">
                An E-commerce Website Built Around How Readers Find Books
              </h3>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">
                Techmapperz developed an e-commerce website for AA Heli Publishers, bringing the publisher’s book catalogue, promotional collections and online buying journey into one platform.
              </p>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">
                Rather than presenting every title in one long product list, the storefront helps visitors explore books by syllabus, examination, age group and featured collection. The structure supports students, parents and other readers who often arrive with a specific academic requirement in mind.
              </p>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  PROJECT FOCUS
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[#E8F5F3] text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Structured book catalogue</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Syllabus and examination categories</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Children’s and educational collections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Featured titles and promotional sections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Responsive storefront</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>Publisher-focused brand presentation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/portfolios/aahelipublishers"
                  className="inline-block w-full sm:w-fit"
                >
                  <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white border border-white/20 font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-auto">
                    View E-commerce Case Study &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW WE WORK (DEVELOPMENT PROCESS) ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              HOW WE WORK
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              From Requirement Review to a Website Ready for Use
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
              A transparent, phased delivery approach ensuring alignment from planning through launch.
            </p>
          </div>

          {/* 5 Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#F6F8FB] rounded-2xl p-6 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#1656B8] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-2xl font-black text-gray-300 group-hover:text-[#0F766E] transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-300 min-h-[46px] w-full sm:w-auto"
            >
              Start with a Requirement Discussion &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TECHNOLOGY ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-8 space-y-2.5">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              TECHNOLOGY SELECTED FOR THE PROJECT
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              The Framework Should Support the Requirement, Not Lead It
            </h2>
            <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] max-w-2xl mx-auto">
              Technology choices should support performance, content management, security, integrations and long-term maintenance rather than being selected simply because they are fashionable.
            </p>
          </div>

          <WebTechFilter />
        </div>
      </section>

      {/* ── SECTION 8: WHY TECHMAPPERZ ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              A Practical Development Partner for Content, Function and Long-Term Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DDE3EA] shadow-xs flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656B8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQ ACCORDION ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE3EA] shadow-sm divide-y divide-[#DDE3EA]">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CALL TO ACTION BANNER ── */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                START YOUR WEBSITE PROJECT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Planning a New Website or Fixing One That No Longer Fits Your Business?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share whatever information is available&mdash;your business services, required pages or web application workflows, reference designs, and expected timeline. If the scope is still being prepared, send what you have and we’ll help confirm the remaining inputs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Website Requirement &rarr;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Send Your Scope of Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

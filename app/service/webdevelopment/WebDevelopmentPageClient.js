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
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="text-[#0c2e60] font-semibold text-sm md:text-base leading-snug group-hover:text-[#1656b8] transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-[#1656b8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed pb-5">
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
    <div className="bg-white text-gray-900 font-sans antialiased selection:bg-[#1267b1]/10">
      <ScrollToTop />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden bg-[#0a192f]">
        <Image
          src="/Website_Development_service/Website_Development_banner.png"
          alt="Website Development Services Banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20 pointer-events-none" />

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

          <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm">
            WEBSITE DEVELOPMENT COMPANY IN INDIA
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-3xl text-white drop-shadow-md">
            Website Development Services Built Around Your Business
          </h1>

          <div className="space-y-3 max-w-2xl text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed drop-shadow-sm">
            <p>
              A website should help the right visitor understand your business, find relevant evidence and take the next step without unnecessary effort.
            </p>
            <p className="text-gray-300 text-sm sm:text-[15px]">
              Techmapperz designs and develops responsive business websites, e-commerce platforms and browser-based applications around the content, users and workflows that matter to each project. We can support a new build or review an existing website that no longer reflects the organisation clearly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8] text-white font-semibold text-[15px] hover:bg-[#1656b8] transition-all duration-300 shadow-md">
                Discuss Your Website Requirement
              </button>
            </Link>
            <Link href="/portfolios" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                View Website Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BUILT FOR CLEARER DECISIONS ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d2292b]">
                <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
                BUILT FOR CLEARER DECISIONS
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2e60] leading-tight">
                A Website Should Make the Next Step Easier
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                Most visitors arrive with a small set of questions: What does this company do? Is the experience relevant to my requirement? Can I trust the information? How do I enquire or buy?
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We begin with those questions before choosing page effects or a technology stack. The sitemap, navigation, service pages, project evidence and calls to action are organised around what visitors need to understand and what the client team needs to manage after launch.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0c2e60] mb-2">
                  Key Questions Every Visitor Asks
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#1656b8]/10 text-[#1656b8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="text-sm font-bold text-[#0c2e60]">What does this company do?</p>
                      <p className="text-xs text-gray-500 mt-0.5">Clear value proposition and core service positioning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#1656b8]/10 text-[#1656b8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="text-sm font-bold text-[#0c2e60]">Is the experience relevant to my requirement?</p>
                      <p className="text-xs text-gray-500 mt-0.5">Industry case studies and proven project deliverables</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#1656b8]/10 text-[#1656b8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="text-sm font-bold text-[#0c2e60]">Can I trust the information?</p>
                      <p className="text-xs text-gray-500 mt-0.5">Client credentials, testimonials and technical depth</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#1656b8]/10 text-[#1656b8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <p className="text-sm font-bold text-[#0c2e60]">How do I enquire or buy?</p>
                      <p className="text-xs text-gray-500 mt-0.5">Frictionless inquiry forms, phone links and clear CTAs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE BUILD (SERVICES) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d2292b]">
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
              WHAT WE BUILD
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2e60] tracking-tight">
              Website Solutions for Different Business Requirements
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The right website format depends on what users need to do, how often the content changes and which systems or people need to support it.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-[#f8fafc] rounded-2xl border border-gray-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#1656b8]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1656b8] group-hover:scale-110 group-hover:bg-[#0c2e60] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656b8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0c2e60] group-hover:text-[#1656b8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/60">
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d2292b] shrink-0" />
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
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Discuss Your Website Requirement
              <FiArrowRight className="w-5 h-5 text-[#8fc2f2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHO WE BUILD FOR ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d2292b]">
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
              WHO WE BUILD FOR
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2e60] tracking-tight">
              Websites Built for Technical and Project-Based Businesses
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A survey firm needs to show its deliverables and project experience. An engineering consultancy needs clear capabilities and credentials. We plan each website around the information its clients need before they make contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whoWeBuildFor.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f8fafc] rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#1656b8]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1656b8] group-hover:bg-[#1656b8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656b8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0c2e60] group-hover:text-[#1656b8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/60">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Website Focus
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focus.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[#0c2e60] font-medium"
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

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Discuss Your Website Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SELECTED PROJECT EXPERIENCE (Case Study) ── */}
      <section className="py-12 md:py-20 bg-[#0c2e60] text-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              SELECTED PROJECT EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
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
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
              <p className="text-[#6ac045] text-xs font-bold uppercase tracking-widest">
                PUBLISHING &amp; E-COMMERCE
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                An E-commerce Website Built Around How Readers Find Books
              </h3>
              <p className="text-blue-100 text-sm md:text-[15px] leading-relaxed">
                Techmapperz developed an e-commerce website for AA Heli Publishers, bringing the publisher’s book catalogue, promotional collections and online buying journey into one platform.
              </p>
              <p className="text-blue-200 text-sm md:text-[15px] leading-relaxed">
                Rather than presenting every title in one long product list, the storefront helps visitors explore books by syllabus, examination, age group and featured collection. The structure supports students, parents and other readers who often arrive with a specific academic requirement in mind.
              </p>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  PROJECT FOCUS
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-blue-100 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Structured book catalogue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Syllabus and examination categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Children’s and educational collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Featured titles and promotional sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Responsive storefront</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6ac045] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                    <span>Publisher-focused brand presentation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/portfolios/aahelipublishers"
                  className="inline-block w-full sm:w-fit"
                >
                  <button className="w-full sm:w-auto py-3 px-7 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all duration-300 shadow-md">
                    View E-commerce Case Study &#8594;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW WE WORK (DEVELOPMENT PROCESS) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d2292b]">
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
              HOW WE WORK
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2e60] tracking-tight">
              From Requirement Review to a Website Ready for Use
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A transparent, phased delivery approach ensuring alignment from planning through launch.
            </p>
          </div>

          {/* 5 Process Cards with connection line on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#f8fafc] rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#1656b8]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1656b8] group-hover:bg-[#1656b8] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#1656b8] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-2xl font-black text-gray-300 group-hover:text-[#6ac045] transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0c2e60] mb-2 group-hover:text-[#1656b8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200"
            >
              Start with a Requirement Discussion
              <FiArrowRight className="w-5 h-5 text-[#8fc2f2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TECHNOLOGY ── */}
      <section className="py-12 md:py-16 bg-[#0c2e60] text-white border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-8 space-y-2.5">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] block">
              TECHNOLOGY SELECTED FOR THE PROJECT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The Framework Should Support the Requirement, Not Lead It
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed max-w-2xl mx-auto">
              Technology choices should support performance, content management, security, integrations and long-term maintenance rather than being selected simply because they are fashionable.
            </p>
          </div>

          <WebTechFilter />
        </div>
      </section>

      {/* ── SECTION 8: WHY TECHMAPPERZ ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d2292b]">
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
              WHY TECHMAPPERZ
              <span className="w-6 h-0.5 bg-[#d2292b] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2e60] tracking-tight">
              A Practical Development Partner for Content, Function and Long-Term Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#1656b8]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1656b8] group-hover:bg-[#1656b8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#1656b8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0c2e60] group-hover:text-[#1656b8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CALL TO ACTION BANNER ── */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-6 h-[2px] bg-[#6ac045]" />
                START YOUR WEBSITE PROJECT
                <span className="w-6 h-[2px] bg-[#6ac045]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                Planning a New Website or Fixing One That No Longer Fits Your Business?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal">
                Share whatever information is available—your business services, required pages or web application workflows, reference designs, and expected timeline. If the scope is still being prepared, send what you have and we’ll help confirm the remaining inputs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your Website Requirement &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import TechnologyFilter from "./TechnologyFilter";
import {
  Smartphone,
  SmartphoneNfc,
  Code,
  Settings,
  Server,
  ShieldCheck,
  ChevronRight,
  Layers,
  MapPin,
  Cpu,
  Sliders,
  Tool,
  CheckCircle,
  Building,
  HardHat,
  Compass,
  Radio,
  Landmark,
  Briefcase
} from "lucide-react";

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

export default function MobileAppDevelopmentPageClient() {
  const faqs = [
    {
      q: "Should we build a mobile app or a responsive website?",
      a: "A responsive website may be sufficient for occasional access and information-based requirements. An app becomes more useful when people need frequent interaction, notifications, secure user functions, device capabilities, field data collection or offline operation."
    },
    {
      q: "Should we build for Android, iOS or both?",
      a: "The answer depends on your users, device environment, required functions and available budget. We review whether the first release should target one platform or use a native or cross-platform approach for both."
    },
    {
      q: "Can the application connect with our existing software?",
      a: "Yes, provided the existing platform offers suitable API or database access. The integration scope is reviewed before development so authentication, data ownership and synchronisation requirements are clear."
    },
    {
      q: "How much does mobile app development cost?",
      a: "Cost depends on user roles, number of workflows, platforms, integrations, offline requirements, admin features and release responsibilities. After a requirement discussion, we prepare a scope-based estimate instead of quoting from the number of screens alone."
    },
    {
      q: "Do you support Google Play and Apple App Store submission?",
      a: "Store preparation and technical submission support can form part of the scope. Final approval remains subject to the respective store’s policies and the client’s developer account."
    },
    {
      q: "What happens after launch, and who owns the source code?",
      a: "Support, repository access, source-code ownership, documentation and handover conditions are defined in the commercial proposal. Maintenance may then cover compatibility updates, issue resolution and agreed enhancements."
    }
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      desc: "Android applications for customers, employees, vendors and field teams, planned around the required devices, user roles and business workflow.",
      linkText: "Discuss an Android App"
    },
    {
      icon: SmartphoneNfc,
      title: "iOS App Development",
      desc: "Applications designed for the Apple device environment, with attention to screen behaviour, navigation, integrations and release requirements.",
      linkText: "Discuss an iOS App"
    },
    {
      icon: Code,
      title: "Cross-Platform App Development",
      desc: "A shared-code approach for Android and iOS where the required features, performance expectations and long-term maintenance make it the right choice. We review device functions, integrations and platform-specific requirements.",
      linkText: "Review the Right Platform"
    },
    {
      icon: Settings,
      title: "Mobile App UI/UX Design",
      desc: "User flows, wireframes and interface design that account for touch interaction, smaller screens and the practical order in which users complete tasks.",
      linkText: "Plan Your App Experience"
    },
    {
      icon: Server,
      title: "Backend, API & Dashboard Integration",
      desc: "Mobile applications often need to exchange data with websites, databases, CRM platforms, payment systems or administrative dashboards.",
      linkText: "Discuss Your Integration"
    },
    {
      icon: ShieldCheck,
      title: "Existing App Enhancement & Support",
      desc: "Support for applications that require compatibility updates, interface improvements, new features, API changes or performance reviews with defined maintenance scopes.",
      linkText: "Discuss App Support"
    }
  ];

  const appTypes = [
    {
      title: "B2B & Business Applications",
      desc: "Business applications give employees, customers, distributors or project teams controlled access to information and workflows from mobile devices.",
      image: "/mobile_b2b.png",
      features: [
        "Customer & Vendor portals",
        "Sales & Order management",
        "Approval workflows & Task management",
        "Business dashboards & Reporting"
      ]
    },
    {
      title: "Field Data Collection Apps",
      desc: "Bring field teams, paper forms, and reporting into a structured workflow with dedicated applications built for demanding environments.",
      image: "/mobile_field_data.png",
      features: [
        "Digital survey forms & Site inspection",
        "Geotagged records & Photo attachment",
        "Task allocation & Data validation",
        "Field-to-office synchronisation"
      ]
    },
    {
      title: "Mobile GIS Applications",
      desc: "Allow field users to view, collect or update location-based information without depending entirely on desktop GIS software.",
      image: "/mobile_gis.png",
      features: [
        "Utility & Infrastructure inspection",
        "Map-based data collection",
        "Land and property observations",
        "Route or corridor information"
      ]
    },
    {
      title: "Customer & Service Apps",
      desc: "Provide a direct mobile channel for enquiries, bookings, service requests, account information and automated updates.",
      image: "/mobile_customer.png",
      features: [
        "Service booking & Tracking",
        "Customer accounts & Enquiries",
        "Notifications & Status updates",
        "Payment gateway integrations"
      ]
    },
    {
      title: "E-commerce Mobile Apps",
      desc: "For businesses with frequent repeat purchases or a customer base that actively browses and shops on mobile devices.",
      image: "/mobile_ecommerce.png",
      features: [
        "Product search & Filtering",
        "Shopping cart & Checkout workflows",
        "Order history & Tracking",
        "Push notifications & Promos"
      ]
    },
    {
      title: "Custom Operational Apps",
      desc: "Designed around a defined operational workflow when teams need to enter, review, approve or retrieve information away from desks.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
      features: [
        "Work-order & Employee workflows",
        "Inventory records & Site updates",
        "Approval systems & Field management",
        "Internal communications & Dashboards"
      ]
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Requirement & User Review",
      desc: "We document the business problem, target users, roles, required features, integrations and platform expectations."
    },
    {
      step: "02",
      title: "User Flow & Wireframes",
      desc: "Key screens, user actions, navigation hierarchies and decision points are mapped before visual design begins."
    },
    {
      step: "03",
      title: "Interface & Technical Planning",
      desc: "The interface direction is developed while APIs, authentication, database and integration requirements are confirmed."
    },
    {
      step: "04",
      title: "Development & Review Builds",
      desc: "The application is developed in agreed stages, with review builds shared at defined milestones for testing."
    },
    {
      step: "05",
      title: "Testing & Acceptance",
      desc: "Agreed user journeys, validations, integrations and real-world device conditions are checked before release."
    },
    {
      step: "06",
      title: "Release, Handover & Support",
      desc: "The application is prepared for store submission or deployment. Handover items and post-launch support are managed systematically."
    }
  ];

  const industries = [
    {
      title: "Infrastructure & Engineering",
      desc: "Site inspections, project photographs, work updates, task reporting and location-based project information.",
      icon: HardHat
    },
    {
      title: "Utilities & Asset Management",
      desc: "Asset identification, condition assessment, maintenance records, photographs and map-based access.",
      icon: Radio
    },
    {
      title: "Survey, Geospatial & Environmental",
      desc: "Field observations, survey status, geotagged records, sample locations and mobile access to spatial data.",
      icon: Compass
    },
    {
      title: "Mining & Natural Resources",
      desc: "Site inspections, operational records, asset information, environmental observations and field reporting.",
      icon: Building
    },
    {
      title: "Government & Public Sector",
      desc: "Field surveys, asset inventories, project monitoring, inspections and other defined digital workflows.",
      icon: Landmark
    },
    {
      title: "B2B, Service & Commerce",
      desc: "Customer accounts, employee workflows, vendor coordination, bookings, orders and marketplace interactions.",
      icon: Briefcase
    }
  ];

  const whyChooseUs = [
    {
      title: "Workflow-First Scoping",
      desc: "We begin with users, tasks and information movement before deciding how many screens or features the application needs."
    },
    {
      title: "GIS & Location Understanding",
      desc: "Applications involving maps, coordinates, assets or field records draw directly on Techmapperz’s specialised geospatial experience."
    },
    {
      title: "Connected Application Development",
      desc: "The mobile application can be planned together with its APIs, database, admin dashboard or existing website."
    },
    {
      title: "Reviewable Development Stages",
      desc: "Wireframes, interface decisions, builds and testing responsibilities are reviewed at defined stages rather than only at final delivery."
    },
    {
      title: "Clear Handover Expectations",
      desc: "Repository access, source-code arrangements, documentation, deployment responsibilities and support terms are defined upfront."
    },
    {
      title: "Support Beyond the First Release",
      desc: "Compatibility updates, issue resolution and future improvements can be covered through an agreed maintenance arrangement."
    }
  ];

  return (
    <div className="bg-white text-[#17202A] selection:bg-[#1656B8]/10">
      <ScrollToTop />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-[auto] sm:min-h-[85vh] flex flex-col justify-start sm:justify-center items-start text-white pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden bg-[#0C2E60]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Mobile-app-deve.png"
            alt="Mobile App Development Services Banner"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-right pointer-events-none"
          />
          <div
            className="absolute inset-0 pointer-events-none backdrop-blur-xs"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0C2E60 0%, rgba(12, 46, 96, 0.96) 30%, rgba(12, 46, 96, 0.8) 45%, rgba(12, 46, 96, 0.3) 60%, transparent 75%)',
            }}
          />
        </div>

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
              <li className="text-white font-semibold" aria-current="page">Mobile App Development</li>
            </ol>
          </nav>

          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
            MOBILE APP DEVELOPMENT COMPANY IN INDIA
          </span>

          <h1 className="text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight max-w-3xl text-white">
            Custom Mobile Apps for Business, Field and Location-Based Workflows
          </h1>

          <div className="space-y-3 max-w-2xl text-[#E8F5F3] text-[16px] md:text-[18px] leading-[1.65]">
            <p>
              Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.
            </p>
            <p className="text-[#E8F5F3]/90 text-[15px] sm:text-[16px]">
              We start with the task your users need to complete. The screens, integrations, platform and release plan are then shaped around that requirement—not around a pre-selected framework.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                Discuss Your App Requirement &rarr;
              </button>
            </Link>
            <Link href="/portfolios" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full border border-white/60 transition-all duration-300 min-h-[46px] sm:min-h-[48px] w-full sm:w-auto">
                View Mobile App Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHEN MOBILE ADDS REAL VALUE ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                PRACTICAL SCOPING
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                Build an App When Mobile Adds Real Value
              </h2>
              <p className="text-[#17202A] text-[16px] md:text-[18px] leading-[1.65] font-medium">
                Not every digital requirement needs a mobile application. If people only need occasional access to information, a responsive website may be the more practical and economical choice.
              </p>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
                A dedicated app becomes useful when users need frequent access, secure sign-in, notifications, GPS or camera functions, offline data collection, role-based workflows or a process designed specifically for field and mobile use.
              </p>
              <p className="text-[#0C2E60] font-bold text-[15px] sm:text-[16px]">
                Before defining features, we clarify the essential parameters to prevent scope creep from escalating costs.
              </p>
            </div>

            {/* Right Column: Checklist */}
            <div className="lg:col-span-5">
              <div className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-7 border border-[#DDE3EA] shadow-sm space-y-3.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0C2E60] mb-2">
                  Key Questions We Answer First
                </p>
                {[
                  "Who will use the application?",
                  "What should each user be able to do?",
                  "Where and under what connectivity conditions will it be used?",
                  "What information must move between the app and existing systems?",
                  "Does the project also need an admin panel or web dashboard?",
                  "What is essential for the first release, and what can come later?"
                ].map((q, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DDE3EA] shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-[#17202A] text-[14px] font-medium">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Existing App Review Banner */}
          <div className="bg-gradient-to-r from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
            <div className="max-w-2xl space-y-2 text-center md:text-left">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white">Already Have an Application?</h3>
              <p className="text-[#E8F5F3] text-[15px] leading-[1.65]">
                We can review your existing workflow, present functionality, integration dependencies and future requirements. Depending on condition, the practical answer may be focused enhancement, staged modernisation or a clean rebuild.
              </p>
            </div>
            <Link href="/contact" className="w-full md:w-auto shrink-0">
              <button className="whitespace-nowrap w-full md:w-auto py-3 px-8 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 text-white font-bold text-[15px] transition-all duration-300 shadow-sm min-h-[46px]">
                Request an App Review &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DEVELOPMENT SERVICES ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              OUR MOBILE APP DEVELOPMENT SERVICES
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              From the First User Flow to a Release-Ready Application
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.65]">
              Our mobile services cover the functional and technical engineering required to take a business requirement from concept to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-6 sm:p-7 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F4F8] border border-[#DDE3EA] flex items-center justify-center text-[#1656B8] group-hover:bg-[#1656B8] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6 text-[#1656B8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65]">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DDE3EA]">
                    <Link
                      href="/contact"
                      className="text-[#1656B8] font-bold text-sm flex items-center group-hover:text-[#0C2E60] transition-colors"
                    >
                      {svc.linkText} <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: APPLICATIONS WE DEVELOP ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              APPLICATIONS WE DEVELOP
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Mobile Applications Built Around the Job to Be Done
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-[#DDE3EA] bg-[#F6F8FB] shadow-sm hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-gray-100 border-b border-[#DDE3EA]">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] leading-[1.65] mb-4">
                      {app.desc}
                    </p>
                    <ul className="space-y-2 text-[#4B5563] text-[13px] sm:text-[14px] font-medium pt-3 border-t border-[#DDE3EA]">
                      {app.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FEATURED PROJECT EXPERIENCE ── */}
      <section className="py-4 md:py-10 bg-[#0C2E60] text-white border-t border-white/10" id="projects">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              FEATURED PROJECT EXPERIENCE
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              A Marketplace Experience Built for Android and iOS
            </h2>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]">
                MOBILE APP CASE STUDY
              </span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.2]">
                XYZFinders Classified Marketplace App
              </h3>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65]">
                Techmapperz developed native and cross-platform capabilities for XYZFinders, a multi-category marketplace connecting buyers, sellers, service providers and store owners across India.
              </p>

              <div className="space-y-3">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#5EEAD4] font-bold text-xs uppercase tracking-wider block mb-1">CHALLENGE</span>
                  <p className="text-[#E8F5F3] text-sm leading-relaxed">
                    Bring listings, geolocated search, seller tools and real-time user chat into a coherent mobile experience across Android and iOS.
                  </p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#5EEAD4] font-bold text-xs uppercase tracking-wider block mb-1">USER GROUPS</span>
                  <p className="text-[#E8F5F3] text-sm leading-relaxed font-medium">
                    Buyers &bull; Sellers &bull; Store Owners &bull; Service Providers
                  </p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#5EEAD4] font-bold text-xs uppercase tracking-wider block mb-1">WORKFLOW FOCUS</span>
                  <p className="text-[#E8F5F3] text-sm leading-relaxed font-medium">
                    Search &amp; Discovery &bull; Post Ads &bull; Store Setup &bull; Wishlist &bull; Buyer–Seller Chat
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="inline-block w-full sm:w-fit">
                  <button className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white border border-white/20 font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md min-h-[46px] w-full sm:w-auto">
                    Discuss Your Mobile App Project &rarr;
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-[#092248]">
              <Image
                src="/Photos/XYZ-Mockup.webp"
                alt="XYZFinders Classified Marketplace App"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: OUR DEVELOPMENT PROCESS ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              OUR DEVELOPMENT PROCESS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              A Clear Route from Requirement to Release
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="group bg-[#F6F8FB] rounded-2xl p-6 border border-[#DDE3EA] shadow-sm hover:shadow-md hover:border-[#1656B8]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-white border border-[#DDE3EA] text-[#0C2E60] font-bold text-sm flex items-center justify-center shadow-2xs group-hover:bg-[#1656B8] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase text-[#0F766E] tracking-wider">
                      Stage {step.step}
                    </span>
                  </div>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-[#0C2E60] mb-2 group-hover:text-[#1656B8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] shadow-md hover:shadow-lg transition-all duration-300 min-h-[46px] w-full sm:w-auto"
            >
              Plan Your App Roadmap &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TECHNOLOGY APPROACH ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-8 space-y-2.5">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              TECHNOLOGY APPROACH
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Technology Selected After the Requirement
            </h2>
            <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.65] max-w-2xl mx-auto">
              Platforms, frameworks and native toolsets are selected around device functions, offline behavior, performance expectations and maintenance.
            </p>
          </div>

          <TechnologyFilter />
        </div>
      </section>

      {/* ── SECTION 8: INDUSTRIES ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="industries">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              INDUSTRIES
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Mobile Workflows for Field, Operational &amp; Customer-Facing Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F8FB] p-6 rounded-2xl shadow-xs border border-[#DDE3EA] hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DDE3EA] flex items-center justify-center text-[#1656B8] mb-4 group-hover:bg-[#1656B8] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5 text-[#1656B8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-2 group-hover:text-[#1656B8] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHY TECHMAPPERZ ── */}
      <section className="py-4 md:py-10 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
              WHY TECHMAPPERZ
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Mobile Development That Understands the Workflow Behind the Screen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#DDE3EA] shadow-xs hover:shadow-md hover:border-[#1656B8]/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-bold text-[#0C2E60] text-[17px] md:text-[18px] mb-2 group-hover:text-[#1656B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-4 md:py-10 bg-white border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] tracking-tight leading-[1.2]">
              Questions Clients Usually Ask Before Starting
            </h2>
          </div>

          <div className="bg-[#F6F8FB] p-6 sm:p-8 rounded-2xl border border-[#DDE3EA] shadow-sm divide-y divide-[#DDE3EA]">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CALL TO ACTION BANNER (Section 5.5) ── */}
      <section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA]" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                START WITH THE REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Have an App Idea—or a Process That Is Difficult to Manage on Mobile?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Send us a short note describing the users, main task, required integrations, preferred platforms and expected timeline. We can help turn the requirement into a practical first scope and identify what should be included in the initial release.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Mobile App Requirement &rarr;
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

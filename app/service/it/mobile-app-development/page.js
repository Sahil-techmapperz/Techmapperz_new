import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone, Map, Database, Users, Settings, Briefcase,
  ShieldCheck, Navigation, ChevronRight, CheckCircle, SmartphoneNfc, FileDigit, Code, Server
} from 'lucide-react';
import FaqItem from '../../../industry/FaqItem';
import TechnologyFilter from './TechnologyFilter';

export const metadata = {
  title: "Mobile App Development Company in India | Techmapperz",
  description: "Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.",
};

export default function MobileAppDevelopmentPage() {
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

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc]">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0c2e60]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Mobile-app-deve.png"
            alt="Mobile App Development Background"
            fill
            className="object-cover object-right pointer-events-none"
            priority
          />
          {/* Seamless feathered blur & dark gradient that blends naturally into the right side */}
          <div
            className="absolute inset-0 pointer-events-none backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0c2e60 0%, rgba(12, 46, 96, 0.96) 30%, rgba(12, 46, 96, 0.8) 45%, rgba(12, 46, 96, 0.3) 60%, transparent 75%)',
            }}
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full py-20 mt-16">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] font-bold tracking-widest text-sm uppercase mb-4 block">MOBILE APP DEVELOPMENT COMPANY IN INDIA</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight mb-6 tracking-tight">
              Custom Mobile Apps for Business, Field and Location-Based Workflows
            </h1>
            <p className="text-base md:text-[17px] text-gray-200 mb-4 max-w-2xl leading-relaxed">
              Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.
            </p>
            <p className="text-base md:text-[17px] text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We start with the task your users need to complete. The screens, integrations, platform and release plan are then shaped around that requirement—not around a pre-selected framework.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
              <Link href="#contact" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#1656b8] bg-[#1656b8] text-white font-semibold text-[15px] hover:bg-[#1267b1] transition-all duration-300 shadow-md">Discuss Your App Requirement</button></Link>
              <Link href="#projects" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-300 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">View Mobile App Project</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-16">

            {/* Left: Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Build an App When Mobile Adds Real Value</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Not every digital requirement needs a mobile application. If people only need occasional access to information, a responsive website may be the more practical and economical choice.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                A dedicated app becomes useful when users need frequent access, secure sign-in, notifications, GPS or camera functions, offline data collection, role-based workflows or a process designed specifically for field and mobile use.
              </p>
              <p className="text-[#0c2e60] font-semibold text-base leading-relaxed mb-4">
                Before defining features, we clarify:
              </p>
              <p className="text-gray-500 text-base leading-relaxed italic">
                These answers create a more dependable first scope and help prevent unnecessary features from increasing the project cost.
              </p>
            </div>

            {/* Right: Checklist */}
            <div className="lg:w-1/2">
              <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <ul className="space-y-5">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Who will use the application?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What should each user be able to do?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Where and under what connectivity conditions will it be used?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What information must move between the app and existing systems?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Does the project also need an admin panel or web dashboard?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What is essential for the first release, and what can come later?</span></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Small Banner */}
          <div className="bg-gradient-to-r from-[#0c2e60] to-[#1a4b91] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Already Have an Application?</h3>
              <p className="text-gray-300 text-sm md:text-base">We can review the existing workflow, present functionality, integration dependencies and future requirements. Depending on the condition of the application, the practical answer may be a focused improvement, staged modernisation or a properly planned rebuild.</p>
            </div>
            <Link href="/contact" className="w-full md:w-auto shrink-0">
              <button className="whitespace-nowrap w-full md:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-[15px] transition-all shadow-md">
                Request an App Review
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* SECTION 3: DEVELOPMENT SERVICES */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">OUR MOBILE APP DEVELOPMENT SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-4">From the First User Flow to a Release-Ready Application</h2>
            <p className="text-gray-600 text-base leading-relaxed">Our mobile app development services cover the functional and technical work needed to move from a business requirement to a usable application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <Smartphone className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Android App Development</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Android applications for customers, employees, vendors and field teams, planned around the required devices, user roles and business workflow.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Discuss an Android App <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <SmartphoneNfc className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">iOS App Development</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Applications designed for the Apple device environment, with attention to screen behaviour, navigation, integrations and release requirements.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Discuss an iOS App <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <Code className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Cross-Platform App Development</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">A shared-code approach for Android and iOS where the required features, performance expectations and long-term maintenance make it the right choice. We recommend cross-platform development only after reviewing device functions, integrations and platform-specific requirements.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Review the Right Platform <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <Settings className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Mobile App UI/UX Design</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">User flows, wireframes and interface design that account for touch interaction, smaller screens and the order in which people complete tasks.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Plan Your App Experience <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <Server className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Backend, API and Dashboard Integration</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Mobile applications often need to exchange data with websites, databases, CRM platforms, payment systems or administrative dashboards.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Discuss Your Integration <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-10 h-10 text-[#6ac045] mb-5" />
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Existing App Enhancement and Support</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Support for applications that require compatibility updates, interface improvements, new features, API changes or performance review. The maintenance scope and response arrangement are agreed according to the condition and technology of the existing application.</p>
              </div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors mt-auto">Discuss App Support <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE DEVELOP */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">APPLICATIONS WE DEVELOP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Mobile Applications Built Around the Job to Be Done</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_b2b.png" alt="B2B Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B & Business Applications</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">Business applications give employees, customers, distributors or project teams controlled access to information and workflows from mobile devices.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Customer & Vendor portals</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Sales & Order management</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Approval workflows & Task management</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Business dashboards & Reporting</li>
                </ul>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_field_data.png" alt="Field Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Field Data Collection Apps</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">Bring field teams, paper forms, and reporting into a structured workflow with dedicated applications.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Digital survey forms & Site inspection</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Geotagged records & Photo attachment</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Task allocation & Data validation</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Field-to-office synchronisation</li>
                </ul>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_gis.png" alt="Mobile GIS Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Mobile GIS Applications</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">Allow field users to view, collect or update location-based information without depending entirely on desktop GIS software.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Utility & Infrastructure inspection</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Map-based data collection</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Land and property observations</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Route or corridor information</li>
                </ul>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_customer.png" alt="Customer Service Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Customer & Service Apps</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">Provide a direct mobile channel for enquiries, bookings, service requests, account information and updates.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Service booking & Tracking</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Customer accounts & Enquiries</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Notifications & Status updates</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Payment integration support</li>
                </ul>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_ecommerce.png" alt="E-commerce Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">E-commerce Mobile Apps</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">For businesses with frequent repeat purchases or a customer base that actively shops on mobile devices.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Product search & Details</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Shopping cart & Checkout</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Order history & Offers</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Notifications & Payment integration</li>
                </ul>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" alt="Custom Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Custom Operational Apps</h3>
                <p className="text-gray-700 text-[15px] mb-5 leading-relaxed">Designed around a defined workflow when teams need to enter, review, approve or retrieve information while working away from desks.</p>
                <ul className="space-y-2.5 text-gray-800 text-[14px] font-medium mt-auto">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Work-order & Employee workflows</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Inventory records & Site updates</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Approval systems & Field-task management</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6ac045] mr-3 shrink-0"></span>Internal communications & Dashboards</li>
                </ul>
              </div>
            </div>

          </div>

         

        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECT */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100" id="projects">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">FEATURED PROJECT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-4">A Marketplace Experience Built for Android and iOS</h2>
          </div>

          <div className="bg-[#0c2e60] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[#6ac045] font-bold text-xs uppercase tracking-widest mb-2 block">MOBILE APP CASE STUDY</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">XYZFinders Classified Marketplace App</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-[15px]">
                Techmapperz developed Android and iOS applications for XYZFinders, a multi-category marketplace connecting buyers, sellers, service providers and store owners. Both apps provide the same core content and functionality, with small design adjustments for each platform.
              </p>

              <div className="space-y-5 mb-10">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-[#6ac045] font-bold text-xs uppercase tracking-wider block mb-1">CHALLENGE</span>
                  <p className="text-gray-200 text-sm leading-relaxed">Bring listings, search, seller tools and user interactions into a consistent mobile experience across Android and iOS.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-[#6ac045] font-bold text-xs uppercase tracking-wider block mb-1">USER GROUPS</span>
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">Buyers • Sellers • Store Owners • Service Providers</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-[#6ac045] font-bold text-xs uppercase tracking-wider block mb-1">WORKFLOW FOCUS</span>
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">Search &amp; Discovery • Post Ads • Store Setup • Wishlist • Buyer–Seller Chat</p>
                </div>
              </div>

              <Link href="/contact" className="inline-block">
                <button className="py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-sm transition-all shadow-md">
                  View Mobile App Project
                </button>
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[420px] lg:min-h-full bg-[#0a234b]">
              <Image
                src="/XYZ-Mockup.png"
                alt="XYZFinders Classified Marketplace App"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e60] via-[#0c2e60]/60 to-transparent lg:w-1/2 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR DEVELOPMENT PROCESS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">OUR DEVELOPMENT PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-16">A Clear Route from Requirement to Release</h2>

          <div className="relative mt-8 w-full mx-auto overflow-x-auto pb-8 hide-scrollbar">
            <div className="min-w-[1000px] grid grid-cols-6 gap-4 relative z-10 px-4">

              {/* Step 1 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">01</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Requirement and User Review</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">We document the business problem, target users, roles, required features, integrations and platform expectations.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">02</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">User Flow and Wireframes</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The important screens, actions, navigation and decision points are mapped before visual design begins.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">03</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Interface and Technical Planning</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The interface direction is developed while APIs, authentication, database and integration requirements are confirmed.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">04</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Development and Review Builds</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The application is developed in agreed stages, with review builds shared at defined milestones.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">05</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Testing and Acceptance</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">Agreed user journeys, validations, integrations and device conditions are checked before release.</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center relative">
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">06</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Release, Handover and Support</span>
                  <p className="text-gray-600 text-[13px] px-1 leading-relaxed">The application is prepared for the agreed distribution method or app-store submission. Handover items and post-launch support are managed according to the proposal.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY APPROACH */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">TECHNOLOGY APPROACH</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Technology Selected After the Requirement</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            The platform, frameworks and libraries are chosen based on device functions, performance expectations, maintenance and integrations.
          </p>

          <TechnologyFilter />
        </div>
      </section>

      {/* SECTION 8: INDUSTRIES */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100" id="industries">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">INDUSTRIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-12">Mobile Workflows for Field, Operational and Customer-Facing Teams</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">Infrastructure and Engineering</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Site inspections, project photographs, work updates, task reporting and location-based project information.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">Utilities and Asset Management</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Asset identification, condition assessment, maintenance records, photographs and map-based access.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">Survey, Geospatial and Environmental Teams</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Field observations, survey status, geotagged records, sample locations and mobile access to spatial data.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">Mining and Natural Resources</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Site inspections, operational records, asset information, environmental observations and field reporting.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">Government Projects and Public-Sector Contractors</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Field surveys, asset inventories, project monitoring, inspections and other defined digital workflows.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0c2e60] text-lg mb-2">B2B, Service and Commerce Businesses</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Customer accounts, employee workflows, vendor coordination, bookings, orders and marketplace interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY TECHMAPPERZ */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">WHY TECHMAPPERZ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6 leading-tight">Mobile Development That Understands the Workflow Behind the Screen</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We begin with users, tasks and information movement before deciding how many screens or features the application needs.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Workflow-First Scoping</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We begin with users, tasks and information movement before deciding how many screens or features the application needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">GIS and Location Understanding</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Applications involving maps, coordinates, assets or field records can draw on Techmapperz’s geospatial experience.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Connected Application Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">The mobile application can be planned together with its APIs, database, admin dashboard or existing website.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Reviewable Development Stages</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Wireframes, interface decisions, builds and testing responsibilities are reviewed at defined stages rather than only at final delivery.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Clear Handover Expectations</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Repository access, source-code arrangements, documentation, deployment responsibilities and support terms are defined in the proposal.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Support Beyond the First Release</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Compatibility updates, issue resolution and future improvements can be covered through a separately agreed maintenance arrangement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60]">Questions Clients Usually Ask Before Starting</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CALL TO ACTION BANNER */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0c2e60] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden text-center shadow-xl">
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-[#6ac045] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-6 h-[2px] bg-[#6ac045]" />
                START WITH THE REQUIREMENT
                <span className="w-6 h-[2px] bg-[#6ac045]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight mb-5">
                Have an App Idea—or a Process That Is Difficult to Manage on Mobile?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed mb-8 font-normal">
                Send us a short note describing the users, main task, required integrations, preferred platforms and expected timeline. You do not need to arrive with a finished application specification. We can help turn the requirement into a practical first scope and identify what should be included in the initial release.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#C92828] hover:bg-[#b02222] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C92828]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your Mobile App Requirement &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

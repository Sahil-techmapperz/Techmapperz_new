import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, Laptop, ShoppingCart, Code, RefreshCw, Layers, 
  CheckCircle, ChevronRight, ShieldCheck, Database, Server, Smartphone, Users, MapPin, Map
} from 'lucide-react';
import FaqItem from '../../../industry/FaqItem';
import WebTechFilter from './WebTechFilter';

export const metadata = {
  title: "Website Development Services in India | Techmapperz",
  description: "Techmapperz develops responsive business websites, e-commerce platforms and custom web applications with clear content structure, technical SEO foundations and scalable development.",
};

export default function WebDevelopmentPage() {
  const faqs = [
    { q: "How much does a business website cost?", a: "Website cost depends on the required number of pages, design complexity, functionality, content, CMS requirements, integrations and development approach. Share your existing website or expected page list and functionality so that the requirement can be reviewed before pricing." },
    { q: "What information do you need to prepare a website quotation?", a: "Helpful information includes your business type, current website, required pages, services, target audience, desired functionality, design references, content availability, integrations and expected launch timeline." },
    { q: "Can Techmapperz redesign our existing website?", a: "Yes. We can review the existing structure, content, design, technology and important URLs before recommending a redesign or migration approach." },
    { q: "Will our website work on mobile phones?", a: "Responsive behaviour can be planned and tested across common screen widths so that navigation, content, images, forms and actions remain usable on smaller screens." },
    { q: "Can our team update the website after launch?", a: "Depending on the agreed development approach, content-management or administrative functionality can be provided for selected pages, articles, projects, products or other website information." },
    { q: "Can you develop an e-commerce website?", a: "Yes. E-commerce projects can include catalogues, categories, search, shopping carts, checkout, customer accounts, payment integrations and order-related workflows according to the project specification." },
    { q: "Can you build a custom portal instead of a normal website?", a: "Yes. Custom web-development requirements can include dashboards, role-based portals, business workflows, database systems, reporting applications and third-party integrations." },
    { q: "Can you integrate maps into our website?", a: "Yes. Because Techmapperz also works in GIS and Web GIS, projects can include interactive mapping, location information, asset layers and other geospatial functionality when required." },
    { q: "Which technologies does Techmapperz use?", a: "Our web-development capabilities include technologies such as React, Next.js, Node.js, PHP, MySQL, MongoDB and related web-development tools. The actual stack should be selected according to the project rather than using the same framework for every website." },
    { q: "How long does website development take?", a: "The timeline depends on page quantity, design complexity, functionality, content readiness, integrations and review cycles. We recommend confirming the timeline only after the sitemap and functional requirement have been reviewed." },
    { q: "What happens after the website is launched?", a: "Post-launch work can include issue resolution, content updates, maintenance, analytics review and new functionality according to the agreed support arrangement." }
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc]">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80" 
            alt="Website Development Background" 
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e60]/95 via-[#0c2e60]/75 to-[#0c2e60]/40"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 w-full py-20 mt-16">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] font-bold tracking-widest text-sm uppercase mb-4 block">WEBSITE DEVELOPMENT SERVICES</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight mb-6 tracking-tight">
              Website Development That Makes Your <span className="text-[#6ac045]">Business Easier to Understand</span>
            </h1>
            <p className="text-base md:text-[17px] text-gray-300 mb-6 max-w-2xl leading-relaxed">
              Your website should help the right visitor quickly understand what you do, why your experience matters and what they should do next.
            </p>
            <p className="text-base md:text-[17px] text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Techmapperz designs and develops responsive business websites, e-commerce platforms and custom web applications with clear information architecture, practical user journeys and a technical foundation built for long-term use.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
              <Link href="#contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg shadow-[#6ac045]/20">
                  Discuss Your Website
                </button>
              </Link>
              <Link href="#projects" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-400 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">
                  View Website Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Capability Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-4 hidden md:block">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="flex flex-wrap items-center justify-between text-white/80 text-sm font-semibold tracking-wide uppercase">
              <span>Business Websites</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>E-commerce</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Web Applications</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Website Redesign</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>CMS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Technical SEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-16">
            
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">A Good Website Helps Visitors Make a Decision</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A business website should not make visitors work hard to understand the company.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Someone visiting your website may be trying to answer a few simple questions:
              </p>
              <p className="text-gray-500 text-base leading-relaxed italic mb-6">
                Our website-development approach begins with these questions before moving into colours, animations or technology.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We organise services, industries, projects, company information and calls to action so that the website supports both the visitor journey and the way your business wants to generate enquiries.
              </p>
            </div>
            
            {/* Right: Checklist */}
            <div className="lg:w-1/2">
              <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <ul className="space-y-5">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What does this company actually do?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Does it have relevant experience?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Can it handle my type of requirement?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">How does the process work?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">How can I speak with the right person?</span></li>
                </ul>
              </div>
            </div>
            
          </div>
          
          {/* Small Strip Banner */}
          <div className="bg-gradient-to-r from-[#0c2e60] to-[#1a4b91] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Already have a website?</h3>
              <p className="text-gray-300 text-sm md:text-base">We can review the existing structure, content, design, technology and important URLs before recommending whether you need a complete rebuild or focused improvements.</p>
            </div>
            <Link href="#contact" className="w-full md:w-auto shrink-0">
              <button className="whitespace-nowrap w-full md:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-[15px] transition-all shadow-md">
                Request a Website Review
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE BUILD FOR */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">BUILT AROUND YOUR BUSINESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Different Businesses Need Different Website Journeys</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              A technical consultancy should not be structured like an online store. An infrastructure company should not present projects the same way as a publisher. We plan the page structure around how your customer evaluates your company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">GIS, Drone & Survey Companies</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Present technical services, mapping capabilities, equipment or methodologies where relevant, industries, project outputs and real project experience without overwhelming non-technical buyers.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Services • Industries • Projects • Deliverables • Technology • FAQs • Project Enquiry</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Infrastructure & Engineering Consultants</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Present consulting capabilities, sector experience, project credentials, technical disciplines and project delivery in a format that supports prequalification and business enquiries.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Capability Statement • Prequalification Support • Project Credentials</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Government Contractors & Services</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Organise company credentials, services, completed work, capabilities, registrations and contact information so that potential partners or authorities can evaluate the organisation efficiently.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Corporate Credentials • Compliance • Registrations • Track Record</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Utility, Energy & Mining Companies</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Present operational services, technical capabilities, assets, project locations, safety or compliance information where verified, and supporting project experience.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Asset Portfolios • Operations Overview • Safety & Compliance</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Architecture & Planning Firms</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Create portfolio-led websites where projects, planning services, design philosophy, sectors and visual work remain easy to explore.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Visual Portfolios • Design Philosophy • Practice Areas</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B & Professional Service Companies</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Build service-focused websites designed around expertise, case studies, industry solutions, lead generation and business credibility.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 font-medium">Service Architecture • Case Studies • Lead Generation Workflows</div>
            </div>

          </div>

          <div className="text-center">
            <Link href="#contact">
              <button className="py-3.5 px-8 rounded-full bg-[#0c2e60] text-white font-bold text-sm hover:bg-[#1656b8] transition-colors shadow-md">
                Discuss Your Industry Requirements
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Website Solutions for Different Business Requirements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">01</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Corporate & Business Website Development</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">A corporate website should communicate the company clearly before trying to impress the visitor visually. We develop websites that organise your services, industries, project experience, company information and enquiries into a structured customer journey.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Business Website <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">02</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B & Lead-Generation Websites</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">B2B visitors often need more information before submitting an enquiry than consumer buyers. We structure B2B websites around service understanding, technical capability, project evidence, trust information and clear contact routes.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Plan a B2B Website <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">03</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">E-commerce Website Development</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">An e-commerce website needs more than attractive product pages. Customers should be able to discover products, understand them, move through the buying process and complete the required action without unnecessary friction.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss an E-commerce Website <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">04</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Custom Web Applications & Portals</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Some requirements cannot be solved with a conventional marketing website. Techmapperz develops browser-based applications and portals around defined business workflows.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Custom Web Application <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">05</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Website Redesign & Migration</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">An old website does not always need to be discarded completely. Before redesigning, we review the existing pages, URLs, content, search visibility, structure and functionality so that useful assets can be retained where appropriate.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Review My Existing Website <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[#6ac045] text-sm font-bold mb-2 block">06</span>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">CMS & Content-Managed Websites</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">For organisations that regularly publish projects, blogs, products, announcements or service updates, the website should not depend on a developer for every small content change. Depending on the project, we can structure administrative or content-management workflows so authorised team members can maintain selected website information.</p>
              </div>
              <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a CMS Website <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PERFORMANCE & MOBILE EXPERIENCE */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">BUILT FOR REAL USERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Your Website Has to Work Beyond a Desktop Design Mock-up</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Visitors may access the site on large office screens, laptops, tablets and mobile phones. Responsive layouts should therefore be planned as part of development rather than treated as a final adjustment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
            {[
              "Responsive layouts",
              "Mobile navigation",
              "Button and form usability",
              "Image optimisation",
              "Loading strategy",
              "Content hierarchy",
              "Readable typography",
              "Layout stability",
              "Interaction behaviour",
              "Browser testing"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#6ac045] mb-3" />
                <span className="text-[#0c2e60] font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact">
              <button className="py-3.5 px-8 rounded-full bg-[#0c2e60] text-white font-bold text-sm hover:bg-[#1656b8] transition-colors shadow-md">
                Discuss Your Website Requirements
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: DEVELOPMENT PROCESS (5-Step Timeline) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-16">A Structured Path from Business Requirement to Launch</h2>
          
          <div className="relative mt-8 w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <span className="font-bold text-xl">01</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Business & Requirement Review</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We understand the organisation, services, target users, competitors, and functionality.</p>
                  <span className="text-[#6ac045] font-bold text-[11px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Brief</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <span className="font-bold text-xl">02</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Sitemap & Content Structure</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">We define page hierarchy, navigation, key page topics and user journeys.</p>
                  <span className="text-[#6ac045] font-bold text-[11px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Structure</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <span className="font-bold text-xl">03</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">UI/UX Design</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">Page layouts, components, visual direction and responsive behaviour are designed.</p>
                  <span className="text-[#6ac045] font-bold text-[11px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Interface</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <span className="font-bold text-xl">04</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Development & Testing</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">Design is developed, content implemented and functionality/integrations tested.</p>
                  <span className="text-[#6ac045] font-bold text-[11px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Review Site</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center relative">
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10">
                  <span className="font-bold text-xl">05</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[15px] mb-2 leading-tight">Launch & Handover</span>
                  <p className="text-gray-500 text-xs px-2 leading-relaxed">Final checks completed, domain, analytics and search tools configured before launch.</p>
                  <span className="text-[#6ac045] font-bold text-[11px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Live Site</span>
                </div>
              </div>

            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#contact">
              <button className="py-3.5 px-8 rounded-full bg-[#0c2e60] text-white font-bold text-sm hover:bg-[#1656b8] transition-colors shadow-md">
                Start with a Requirement Discussion
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">TECHNOLOGY SELECTED FOR THE PROJECT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">The Framework Should Support the Requirement, Not Lead It</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Technology choices should support performance, content management, security, integrations and long-term maintenance rather than being selected simply because they are fashionable.
          </p>

          <WebTechFilter />

          <p className="text-gray-500 text-sm italic mt-12 max-w-2xl mx-auto">
            The actual technology stack is selected after understanding the project's content, functionality, integration, maintenance and deployment requirements.
          </p>
        </div>
      </section>

      {/* SECTION 8: SELECTED EXPERIENCE */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">SELECTED WEBSITE & WEB APPLICATION WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-4">Show What Was Built and Why</h2>
            <p className="text-gray-500 text-base">Use real, approved project screenshots and concise case-study summaries rather than generic conceptual mock-ups.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Project 1 */}
            <div className="bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="h-48 relative overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" alt="Aaheli Publishers" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0c2e60] mb-3">E-commerce Website for Aaheli Publishers</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">Techmapperz developed an e-commerce website to help Aaheli Publishers organise its educational catalogue and support direct online purchases.</p>
                  <ul className="text-xs text-gray-500 space-y-2 mb-6 bg-white p-4 rounded-xl border border-gray-100">
                    <li>• Product Catalogue - Category-based discovery</li>
                    <li>• E-commerce - Cart and purchase journey</li>
                    <li>• Responsive Website - Desktop and mobile</li>
                  </ul>
                </div>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">
                  View E-commerce Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="h-48 relative overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="White Spread Foods" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B Sales Portal for White Spread Foods</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">A web-based sales platform developed around structured order placement, approval workflows and operational visibility.</p>
                  <ul className="text-xs text-gray-500 space-y-2 mb-6 bg-white p-4 rounded-xl border border-gray-100">
                    <li>• B2B Portal</li>
                    <li>• Order Workflow</li>
                    <li>• Sales Dashboard & Web Application</li>
                  </ul>
                </div>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">
                  View Web Application Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="h-48 relative overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" alt="Project Expo Guru" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Dynamic Website for Project Expo Guru</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">A business website designed to present services and work more clearly through structured content and responsive design.</p>
                  <ul className="text-xs text-gray-500 space-y-2 mb-6 bg-white p-4 rounded-xl border border-gray-100">
                    <li>• Dynamic Content Architecture</li>
                    <li>• Service Showcase</li>
                    <li>• Fully Responsive Layout</li>
                  </ul>
                </div>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">
                  View Business Website Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link href="#contact">
              <button className="py-3.5 px-8 rounded-full border border-[#0c2e60] text-[#0c2e60] font-bold text-sm hover:bg-[#0c2e60] hover:text-white transition-colors">
                Explore Website Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY TECHMAPPERZ */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">WHY TECHMAPPERZ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6 leading-tight">A Website Development Partner Focused on Clarity and Long-Term Use</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We define what information the visitor needs and how pages should connect before focusing on visual details.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Structure Before Styling</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We define what information the visitor needs and how pages should connect before focusing on visual details.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">B2B & Technical Understanding</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Our experience with GIS, drone and project-based services helps us structure complex technical offerings for business audiences.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Responsive Development</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Layouts and reusable components are developed to work consistently across common device sizes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">SEO-Conscious Architecture</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Page hierarchy, content structure, metadata and internal linking are considered during development.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Visible Project Stages</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Requirements, content dependencies, design reviews, development stages and feedback rounds remain defined.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Future Expansion</h4>
                <p className="text-gray-500 text-sm leading-relaxed">The website can be structured so that additional services, industries, projects and content can be added seamlessly.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Geospatial Integration</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Where relevant, Techmapperz can integrate mapping, location information, Web GIS and geospatial functionality.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Continued Support</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Maintenance, content updates and new functionality can be scoped after launch according to ongoing requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="bg-[#0c2e60] py-20 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-10">
          <Globe className="w-[400px] h-[400px] text-white absolute -right-20 -top-20" strokeWidth={0.5} />
          <Laptop className="w-[300px] h-[300px] text-white absolute -left-10 -bottom-10" strokeWidth={0.5} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="lg:max-w-2xl">
              <span className="text-[#6ac045] text-sm font-bold uppercase tracking-[0.2em] mb-3 block">START WITH YOUR REQUIREMENT</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planning a New Website—or Replacing One That No Longer Represents Your Business?</h2>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                Share your current website, business services, required pages, important functionality, reference designs and expected timeline.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We can review the requirement and recommend a website structure and development approach based on what your customers need to understand and what your internal team needs to manage.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:shrink-0 lg:justify-end">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-[15px] transition-all shadow-md">
                  Discuss Your Website
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3.5 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-all shadow-md">
                  Request a Website Proposal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

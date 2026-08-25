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
  title: "Mobile App Development Services in India | Techmapperz",
  description: "Techmapperz develops Android, iOS and cross-platform mobile applications for business, field operations, GIS, asset management, customer services and custom workflows.",
};

export default function MobileAppDevelopmentPage() {
  const faqs = [
    { q: "Should we build a mobile app or a mobile-responsive website?", a: "It depends on how frequently users need the service and whether the requirement involves capabilities such as field data collection, offline use, device functions, notifications, location information or repeat mobile interaction. Where a responsive website is sufficient, an app may add unnecessary cost and maintenance." },
    { q: "Does Techmapperz develop Android and iOS apps?", a: "Mobile application requirements can be planned for Android, iOS or both platforms according to the target users and project requirements." },
    { q: "Should we choose native or cross-platform development?", a: "There is no single correct choice. The decision depends on required device functionality, performance requirements, integrations, maintenance expectations, timeline and budget. We recommend confirming the approach after reviewing the actual feature requirement." },
    { q: "Can Techmapperz develop a B2B mobile application?", a: "Yes. B2B applications can be structured around customers, employees, distributors, vendors, project teams or other defined users with workflows such as orders, approvals, reporting, tasks and information access." },
    { q: "Can you develop field-data collection applications?", a: "Yes. A field application can be planned around forms, locations, photographs, inspections, observations, asset information and office-review workflows according to the project requirement." },
    { q: "Can you develop a Mobile GIS application?", a: "Yes. Where GIS forms part of the requirement, mobile applications can include maps, spatial layers, project locations, assets and location-based field information." },
    { q: "Can the app connect with our existing software?", a: "Where suitable APIs or integration mechanisms are available, the application can be planned to exchange information with websites, business systems, dashboards, databases or other platforms. Integration feasibility should be reviewed before finalising the development scope." },
    { q: "Can you integrate GPS and maps?", a: "Location and mapping functionality can be included where required by the application, subject to the selected platform, mapping service and project workflow." },
    { q: "Can you integrate push notifications?", a: "Notification functionality can be considered where alerts provide a useful part of the user journey. Notification strategy should be based on genuine user needs rather than sending unnecessary messages." },
    { q: "Can you develop an e-commerce mobile app?", a: "Yes. Mobile-commerce requirements can include catalogues, products, carts, customer accounts, order information, payments and related commerce workflows." },
    { q: "Do you help publish applications to Google Play and Apple App Store?", a: "Store-release assistance can be included in the project scope. Responsibilities for developer accounts, required policies, content, approvals and ongoing store management should be agreed before release." },
    { q: "How much does mobile app development cost?", a: "Cost depends on factors such as features, platforms, user roles, integrations, backend requirements, offline functionality, design complexity and maintenance requirements. A useful quotation therefore starts with a functional requirement rather than a fixed generic app price." },
    { q: "Who owns the source code after development?", a: "Code ownership, repository access, third-party licences and handover responsibilities should be explicitly defined in the commercial proposal or agreement before development begins." },
    { q: "What happens after the app is launched?", a: "Post-launch requirements may include issue resolution, compatibility updates, feature additions, API updates, analytics review and ongoing maintenance according to the agreed support scope." }
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc]">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_mobile_app.png"
            alt="Mobile App Development Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e60]/95 via-[#0c2e60]/75 to-[#0c2e60]/40"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 w-full py-20 mt-16">
          <div className="max-w-3xl">
            <span className="text-[#6ac045] font-bold tracking-widest text-sm uppercase mb-4 block">MOBILE APP DEVELOPMENT SERVICES</span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight mb-6 tracking-tight">
              Mobile App Development for <span className="text-[#6ac045]">Business, Field & Customer Workflows</span>
            </h1>
            <p className="text-base md:text-[17px] text-gray-300 mb-8 max-w-xl leading-relaxed">
              A useful mobile application should make a task easier - whether that means collecting information from the field, managing assets, serving customers, coordinating teams or accessing business data away from a desktop.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
              <Link href="#contact" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-[#6ac045] bg-[#6ac045] text-white font-semibold text-[15px] hover:bg-[#5aad38] transition-all duration-300 shadow-lg shadow-[#6ac045]/20">Discuss Your App Requirement</button></Link>
              <Link href="#projects" className="w-full sm:w-auto"><button className="whitespace-nowrap w-full sm:w-auto py-[12px] px-8 rounded-full border border-gray-400 bg-transparent text-white font-semibold text-[15px] hover:bg-white/10 transition-all duration-300">View Mobile App Work</button></Link>
            </div>
          </div>
        </div>

        {/* Capability Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-4 hidden md:block">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-center justify-between text-white/80 text-sm font-semibold tracking-wide uppercase">
              <span>Android</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>iOS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Cross-Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>B2B Apps</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Field Apps</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ac045]"></span>
              <span>Mobile GIS</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">A Mobile App Should Have a Clear Reason to Exist</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Not every business process needs a mobile application. Sometimes a responsive website is enough. In other cases, a dedicated mobile app makes sense because users need regular access, field data collection, device capabilities, offline functionality, location information, notifications or a workflow designed specifically for mobile use.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Before recommending Android, iOS or a cross-platform approach, the first questions should be:
              </p>
              <p className="text-gray-500 text-base leading-relaxed italic">
                The answers help define the screens, functionality, platform strategy, integrations and development approach.
              </p>
            </div>

            {/* Right: Checklist */}
            <div className="lg:w-1/2">
              <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <ul className="space-y-5">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Who will use the application?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What task are they trying to complete?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Where will they use it?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What information needs to move between the app and existing systems?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">Does the application need to work with limited connectivity?</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#6ac045] mt-0.5 mr-4 shrink-0" /><span className="text-gray-700 text-[15px] font-medium">What should happen after a user completes an action?</span></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Small Banner */}
          <div className="bg-gradient-to-r from-[#0c2e60] to-[#1a4b91] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Already have an application?</h3>
              <p className="text-gray-300 text-sm md:text-base">We can review an existing app, its current functionality, technical dependencies and future requirements before recommending whether targeted improvements or a larger rebuild is more appropriate.</p>
            </div>
            <Link href="#contact" className="w-full md:w-auto shrink-0">
              <button className="whitespace-nowrap w-full md:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-[15px] transition-all shadow-md">
                Review Your App Requirement
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* SECTION 3: DEVELOPMENT SERVICES */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">OUR MOBILE DEVELOPMENT SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Expertise Across the Mobile Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Smartphone className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Android App Development</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Android applications can be planned for business, customer, field or internal workflows according to the device environment and functional requirements.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">User interface • Business logic • API integration • Authentication • Data management • Testing • Release preparation</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Discuss an Android App <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <SmartphoneNfc className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">iOS App Development</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">iOS applications can be designed around the user journey, functionality, required integrations and Apple-device environment.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">UI/UX • Application development • API integration • Device testing • Release preparation</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Discuss an iOS App <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Code className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Cross-Platform Development</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Where project requirements allow it, a cross-platform approach may help maintain shared development logic across Android and iOS.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">Platform choice should be based on required functionality, device capabilities, performance expectations, maintenance and budget.</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Review the Right Platform <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Settings className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Mobile App UI/UX Design</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Mobile interfaces need to account for touch interaction, limited screen space, user attention and the sequence in which tasks are completed.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">User flows • Screen hierarchy • Wireframes • Interface design • Forms • Navigation • Reusable components • Interaction states • Tablet layouts</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Plan Your App Experience <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Server className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">API & Backend Integration</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Most useful business applications do not operate independently. They communicate with websites, CRM systems, GIS databases, or other platforms.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">Authentication • Data synchronisation • User roles • Database access • Third-party services • Web dashboard integration</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Discuss Your Integration <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-10 h-10 text-[#6ac045] mb-5" />
              <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Maintenance & Enhancement</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">An application may need updates as operating systems, APIs, business processes and user requirements change.</p>
              <div className="text-xs text-gray-500 font-medium leading-relaxed mb-6 bg-gray-50 p-3 rounded-lg">Issue resolution • Compatibility updates • Feature additions • UI improvements • API changes • Performance review • Release updates</div>
              <Link href="#contact" className="text-[#6ac045] font-bold text-sm flex items-center hover:text-[#5aad38] transition-colors">Discuss App Support <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE DEVELOP */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">WHAT WE DEVELOP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Mobile Applications for Real Workflows</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_b2b.png" alt="B2B Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">01</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">B2B & Business Applications</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Business applications give employees, customers, distributors or project teams controlled access to information and workflows from mobile devices.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Customer & Vendor portals</li>
                  <li>• Sales & Order management</li>
                  <li>• Approval workflows & Task management</li>
                  <li>• Business dashboards & Reporting</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Business App <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_field_data.png" alt="Field Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">02</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Field Data Collection Apps</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Bring field teams, paper forms, and reporting into a structured workflow with dedicated applications.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Digital survey forms & Site inspection</li>
                  <li>• Geotagged records & Photo attachment</li>
                  <li>• Task allocation & Data validation</li>
                  <li>• Field-to-office synchronisation</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Field Application <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_gis.png" alt="Mobile GIS Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">03</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Mobile GIS Applications</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Allow field users to view, collect or update location-based information without depending entirely on desktop GIS software.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Utility & Infrastructure inspection</li>
                  <li>• Map-based data collection</li>
                  <li>• Land and property observations</li>
                  <li>• Route or corridor information</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Mobile GIS Application <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_customer.png" alt="Customer Service Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">04</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Customer & Service Apps</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Provide a direct mobile channel for enquiries, bookings, service requests, account information and updates.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Service booking & Tracking</li>
                  <li>• Customer accounts & Enquiries</li>
                  <li>• Notifications & Status updates</li>
                  <li>• Payment integration support</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Plan a Customer Application <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="/mobile_ecommerce.png" alt="E-commerce Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">05</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">E-commerce Mobile Apps</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">For businesses with frequent repeat purchases or a customer base that actively shops on mobile devices.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Product search & Details</li>
                  <li>• Shopping cart & Checkout</li>
                  <li>• Order history & Offers</li>
                  <li>• Notifications & Payment integration</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss a Commerce App <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" alt="Custom Apps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#6ac045] text-sm font-bold mb-2">06</div>
                <h3 className="text-xl font-bold text-[#0c2e60] mb-3">Custom Operational Apps</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Designed around a defined workflow when teams need to enter, review, approve or retrieve information while working away from desks.</p>
                <ul className="text-gray-500 text-[13px] space-y-2 mb-6">
                  <li>• Work-order & Employee workflows</li>
                  <li>• Inventory records & Site updates</li>
                  <li>• Approval systems & Field-task management</li>
                  <li>• Internal communications & Dashboards</li>
                </ul>
                <Link href="#contact" className="text-[#0c2e60] font-bold text-sm flex items-center hover:text-[#6ac045] transition-colors">Discuss Your Workflow <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>

          </div>

          <div className="mt-16 bg-[#0c2e60] rounded-2xl p-4 text-center text-white border border-white/10 shadow-lg max-w-5xl mx-auto overflow-x-auto">
            <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">MOBILE GIS EXAMPLE WORKFLOW</span>
            <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-2 text-xs md:text-sm font-medium whitespace-nowrap">
              <span>GIS Database</span> <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
              <span>Mobile Map</span> <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
              <span>Field Observation</span> <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
              <span className="text-[#6ac045]">Photo / Attribute / Location</span> <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
              <span>Office Review</span> <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
              <span>Updated GIS Database</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: INDUSTRIES */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100" id="industries">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">INDUSTRIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-12">Apps Built for Specific Sectors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Infrastructure & Construction</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Support inspections, field observations, project updates, work locations, photographs, task reporting and project information.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Utilities & Asset Management</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Asset identification, inspection, condition records, photographs, maintenance information and map-based access.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Drone & Survey Companies</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Support field records, survey status, project locations, site observations, project coordination and geospatial data access.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Mining & Natural Resources</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Site observations, asset information, inspection workflows, photographs, project reporting and operational records.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Architecture & Planning</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Mobile workflows can support site visits, existing-condition records, photographs, location observations and project information.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#0c2e60] mb-2">Government Contractors</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Field surveys, asset inventories, inspections, project monitoring and other defined digital workflows.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
              <h4 className="font-bold text-[#0c2e60] mb-2">B2B & Service Companies</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Apps can support customers, employees, vendors, sales teams and operational workflows depending on the business model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DEVELOPMENT PROCESS (7-Step Timeline) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">DEVELOPMENT PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-16">A Clear Path from Requirement to Mobile Release</h2>

          <div className="relative mt-8 w-full mx-auto overflow-x-auto pb-8 hide-scrollbar">
            <div className="min-w-[1000px] grid grid-cols-7 gap-4 relative z-10 px-4">

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
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">Requirement & User Review</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">We define the business problem, target users, roles, features and platform requirements.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Brief</span>
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
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">User Flow & Wireframes</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">Key screens, actions, navigation and workflow steps are mapped before design.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Wireframes</span>
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
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">UI & Tech Planning</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">Interface is designed while technical requirements (APIs, auth, DB) are confirmed.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: App Scope</span>
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
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">Development & Integration</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">Functionality is developed and connected to backend systems and APIs.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Review Build</span>
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
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">Testing & Review</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">Testing across agreed devices, user flows, validations and integrations.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Candidate</span>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute top-[40px] left-[calc(50%+45px)] w-[calc(100%+1rem-90px)] pointer-events-none -translate-y-1/2">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <div className="absolute right-[-2px] top-[-5px] w-2.5 h-2.5 border-t border-r border-gray-400 rotate-45"></div>
                  </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">06</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">Release & Handover</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">App is prepared for the agreed distribution or store-release process.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Release</span>
                </div>
              </div>

              {/* Step 7 (No arrow pointing right) */}
              <div className="flex flex-col items-center relative">
                <div className="w-[80px] h-[80px] rounded-full bg-white border border-[#6ac045] shadow-sm flex items-center justify-center text-[#0c2e60] mb-4 z-10 shrink-0">
                  <span className="font-bold text-xl">07</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#0c2e60] font-extrabold text-[14px] mb-2 leading-tight">Support & Improvement</span>
                  <p className="text-gray-500 text-[11px] px-1 leading-relaxed">Address issues, compatibility changes, new requirements and enhancements.</p>
                  <span className="text-[#6ac045] font-bold text-[10px] mt-2 bg-green-50 px-2 py-1 rounded">Output: Supported App</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: TECHNOLOGY */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Platform Choice Should Follow the Product Requirement</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            The visitor first needs to know whether Techmapperz can understand the requirement, build the workflow, integrate the data and maintain the application.
          </p>

          <TechnologyFilter />
        </div>
      </section>

      {/* SECTION 13: SELECTED MOBILE APP EXPERIENCE */}
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">SELECTED MOBILE APP WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6">Use Real Projects, Not Generic Statistics</h2>
          </div>

          <div className="bg-[#0c2e60] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">XyzFinders Mobile App</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The published portfolio describes XyzFinders as a mobile application connecting customers with interior designers and vendors and supporting the interior-design process from consultation through project completion.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <span className="text-[#6ac045] font-bold text-sm uppercase block mb-1">Challenge</span>
                  <p className="text-gray-300 text-sm">Create a mobile platform that brings customers and service participants into a more structured project journey.</p>
                </div>
                <div>
                  <span className="text-[#6ac045] font-bold text-sm uppercase block mb-1">User Groups</span>
                  <p className="text-gray-300 text-sm">Customers • Shop Owner • Vendors</p>
                </div>
                <div>
                  <span className="text-[#6ac045] font-bold text-sm uppercase block mb-1">Workflow Focus</span>
                  <p className="text-gray-300 text-sm">Consultation • Project interaction • Service coordination</p>
                </div>
              </div>

              <Link href="/portfolios/xyzfinders" className="inline-block">
                <button className="py-3 px-8 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors">
                  View Mobile App Project
                </button>
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#0a234b]">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                alt="XyzFinders App"
                fill
                className="object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e60] to-transparent lg:w-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: WHY TECHMAPPERZ */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">WHY TECHMAPPERZ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60] mb-6 leading-tight">Mobile Development Focused on the Workflow Behind the Screen</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We begin with what users need to accomplish rather than choosing a framework before understanding the requirement.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">B2B & Field Workflow Understanding</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Applications can be structured around business processes, inspections, field operations, customer services and project workflows.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">GIS & Location Capability</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Where a project needs maps, assets or location-based data, mobile development can be combined with Techmapperz's geospatial capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Platform Selection by Requirement</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Android, iOS or cross-platform development should be selected according to functionality, users, integrations and future maintenance.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Clear Development Stages</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Requirements, wireframes, design, development, integrations, testing and release responsibilities are defined during the project workflow.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Integration-Focused Development</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Applications can be planned around existing websites, APIs, databases and business platforms where integration forms part of the project.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#0c2e60] text-base mb-2">Post-Launch Support</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Maintenance and future enhancements can be scoped according to the agreed support arrangement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-[#6ac045] text-sm font-bold uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2e60]">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: FINAL CTA */}
      <section className="bg-[#0c2e60] py-20 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-10">
          <Map className="w-[400px] h-[400px] text-white absolute -right-20 -top-20" strokeWidth={0.5} />
          <Smartphone className="w-[300px] h-[300px] text-white absolute -left-10 -bottom-10" strokeWidth={0.5} />
        </div>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="lg:max-w-2xl">
              <span className="text-[#6ac045] text-sm font-bold uppercase tracking-[0.2em] mb-3 block">START WITH THE WORKFLOW</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have an App Idea - or a Business Process That Should Work Better on Mobile?</h2>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                You do not need to arrive with a complete application specification.<br />
                Share the business problem, target users, key activities, required integrations, platform preference and expected timeline.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team can review whether a dedicated mobile application is the right approach and help define the functionality required for the first development scope.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:shrink-0 lg:justify-end">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#6ac045] hover:bg-[#5aad38] text-white font-bold text-[15px] transition-all shadow-md">
                  Discuss Your Mobile App
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="whitespace-nowrap w-full sm:w-auto py-3.5 px-8 rounded-full bg-transparent border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-all shadow-md">
                  Send Your Requirement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

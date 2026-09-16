import Link from 'next/link';
import { Home, Search, Compass, Layers, Mail } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Techmapperz',
  description: 'The page you are looking for could not be found. Explore our GIS, Drone and IT services or return to the homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-[#0F766E] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-3 block">
            ERROR 404
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0C2E60] mb-4 tracking-tight leading-tight">
            Page Not Found
          </h1>
          <p className="text-[#4B5563] text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our core services or return to the homepage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-7 py-3 rounded-full transition-all duration-300 shadow-md min-h-[48px]"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <Link
            href="/portfolios"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0C2E60] border-2 border-[#0C2E60] font-bold text-[15px] sm:text-[16px] px-7 py-3 rounded-full transition-all duration-300 shadow-sm min-h-[48px]"
          >
            <Search className="w-4 h-4" />
            View Case Studies
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] text-[#0F766E] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0C2E60] text-lg mb-2">Our Services</h3>
            <p className="text-[#4B5563] text-sm mb-4 leading-relaxed">
              GIS mapping, drone survey, LiDAR, and digital software development.
            </p>
            <Link href="/service" className="text-[#1656B8] hover:text-[#0C2E60] font-bold text-sm inline-flex items-center gap-1 group">
              View All Services <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] text-[#0F766E] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0C2E60] text-lg mb-2">Portfolio</h3>
            <p className="text-[#4B5563] text-sm mb-4 leading-relaxed">
              Explore railway, pipeline, mining, and GIS data deliverables.
            </p>
            <Link href="/portfolios" className="text-[#1656B8] hover:text-[#0C2E60] font-bold text-sm inline-flex items-center gap-1 group">
              Explore Case Studies <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DDE3EA] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F3] text-[#0F766E] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0C2E60] text-lg mb-2">Get in Touch</h3>
            <p className="text-[#4B5563] text-sm mb-4 leading-relaxed">
              Discuss your project scope or request a technical quote.
            </p>
            <Link href="/contact" className="text-[#1656B8] hover:text-[#0C2E60] font-bold text-sm inline-flex items-center gap-1 group">
              Contact Team <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-[#4B5563]">
          Need immediate assistance?{' '}
          <Link href="/contact" className="text-[#1656B8] font-bold hover:underline">
            Contact our project support team
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
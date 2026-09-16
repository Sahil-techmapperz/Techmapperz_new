import Link from "next/link";
import ScrollToTop from "../_Components/ScrollToTop";
import dynamicImport from 'next/dynamic';
import blogs_banner_img from "@/public/Photos/blogs_banner.webp";
import Image from "next/image";
import { IMAGE_CONFIGS, createOptimizedLoader } from '../lib/utils/performanceOptimizer';
import { FiArrowRight, FiCheckCircle, FiLayers, FiMapPin, FiCpu } from "react-icons/fi";

// Critical above-the-fold component - load immediately
const BlogList = dynamicImport(() => import("../_Components/BlogList"), {
  ssr: true,
  ...createOptimizedLoader("600px", "bg-white")
});

// Sidebar components
const SearchPosts = dynamicImport(() => import("../_Components/SearchPosts"), {
  loading: () => (
    <div className="h-44 bg-white animate-pulse rounded-2xl p-6 border border-[#DDE3EA]">
      <div className="h-3 w-28 bg-gray-200 rounded mb-2"></div>
      <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
      <div className="h-11 bg-gray-100 rounded-xl"></div>
    </div>
  )
});

const RecentBlogList = dynamicImport(() => import("../_Components/RecentBlogList"), {
  loading: () => (
    <div className="bg-white animate-pulse rounded-2xl p-6 border border-[#DDE3EA] space-y-4">
      <div className="h-3 w-32 bg-gray-200 rounded"></div>
      <div className="h-6 w-44 bg-gray-200 rounded pb-3"></div>
      {[1, 2, 3].map(i => (
        <div key={i} className="flex gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-3 w-20 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic for search params
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "IT & GIS Blogs | Drone Solutions & Tech Trends | Techmapperz",
  description: "Discover cutting-edge technology insights on GIS, Drones, AI, and IT solutions in our blog. Practical guides and project insights from the Techmapperz team.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

const ArticlePage = async ({ searchParams }) => {
  // In Next.js 16, searchParams is a Promise and must be awaited
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  return (
    <div className="bg-white text-[#17202A] min-h-screen">
      <ScrollToTop />

      {/* 1. Authoritative Hero Banner (Deep Navy #0C2E60 - 15-20%) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0C2E60] via-[#092247] to-[#0A1F40] text-white">
        {/* Subtle Background Image Texture with High-Contrast Gradient */}
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <Image 
            src={blogs_banner_img} 
            className="w-full h-full object-cover" 
            alt="Blogs Banner - IT & GIS Technology Insights"
            {...IMAGE_CONFIGS.banner}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Ambient Geospatial Grid & Rings Graphic */}
        <div className="absolute right-[-100px] top-[-100px] w-[460px] h-[460px] border border-white/5 rounded-full shadow-[0_0_0_60px_rgba(255,255,255,0.03),0_0_0_120px_rgba(255,255,255,0.015)] pointer-events-none" />
        <div className="absolute left-[-150px] bottom-[-150px] w-[400px] h-[400px] rounded-full bg-[#0F766E]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center">
          {/* Eyebrow on Navy per Style Guide */}
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 block">
            GEOSPATIAL &amp; DIGITAL INSIGHTS
          </span>

          {/* Hero H1: Desktop 54px, Mobile 32-34px, Bold 700, Leading 1.18 */}
          <h1 className="text-[32px] sm:text-[36px] md:text-[50px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] max-w-4xl mx-auto">
            Articles, Case Studies &amp; Technical Insights
          </h1>

          {/* Intro Subtitle in #E8F5F3 */}
          <p className="text-[#E8F5F3] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-3xl mx-auto mt-4">
            Practical technical breakdowns, methodologies, and engineering workflows on GIS mapping, drone surveying, LiDAR data processing, and enterprise digital solutions.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px] w-full sm:w-auto text-center"
            >
              <span>Discuss Your Project</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-full font-bold text-[15px] sm:text-[16px] text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Blog Layout (65-70% Cool Off-White Canvas) */}
      <section className="relative py-8 md:py-14 bg-[#F6F8FB] border-t border-[#DDE3EA]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#DDE3EA] gap-4">
            <div>
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-1.5 block">
                EXPLORE ARTICLES
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[36px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight">
                Latest Publications &amp; Guides
              </h2>
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] font-normal mt-1">
                Browse our collection of verified geospatial field notes and IT articles.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E] bg-[#E8F5F3] px-3.5 py-1.5 rounded-full border border-[#0F766E]/20 self-start md:self-auto shadow-sm">
              <FiLayers className="w-3.5 h-3.5" />
              <span>Page {page}</span>
            </div>
          </div>

          {/* 70/30 Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left 70% Primary Articles Stream */}
            <div className="w-full lg:w-[70%]">
              <BlogList page={page} />
            </div>

            {/* Right 30% Sticky Sidebar */}
            <aside className="w-full lg:w-[30%] space-y-6 lg:sticky lg:top-28">
              <SearchPosts />
              <RecentBlogList />

              {/* Consultation Card in Brand Deep Navy */}
              <div className="bg-gradient-to-br from-[#0C2E60] to-[#0A1F40] rounded-2xl p-6 text-white border border-white/10 shadow-lg relative overflow-hidden">
                <div className="absolute right-[-30px] bottom-[-30px] w-32 h-32 bg-[#0F766E]/30 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[#5EEAD4] text-[11px] font-bold uppercase tracking-[0.15em] block mb-1">
                  HAVE A PROJECT IN MIND?
                </span>
                <h4 className="text-[18px] font-bold text-white mb-2 leading-snug">
                  Get Technical Advice &amp; Project Estimation
                </h4>
                <p className="text-[#E8F5F3] text-xs leading-relaxed mb-4">
                  Talk with our GIS mapping engineers and drone survey specialists to determine the optimal sensors, resolution, and deliverable schedule.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#1656B8] hover:bg-white hover:text-[#0C2E60] text-white text-xs font-bold transition-all duration-200 shadow-sm"
                >
                  <span>Request Consultation</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Section 5.5 Final High-Conversion CTA Banner Card Pattern */}
      <section className="relative py-8 md:py-14 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            {/* Subtle background circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Planning a Project with Us?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share your project details, aerial specifications, or software requirements. Our team will review your scope and suggest an optimal workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Project &rarr;
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Explore Services &amp; Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;

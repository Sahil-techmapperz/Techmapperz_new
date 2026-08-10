import ScrollToTop from './_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HomeHero from './_Components/HomeHero';

// Critical above-the-fold components - optimized for performance
const Features = dynamic(() => import('./_Components/Features'), {
  ssr: true, // Enable SSR for important services section
  loading: () => (
    <div className="min-h-[300px] bg-theme-bg animate-pulse">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  ),
});

// Mobile-optimized lazy loading with intersection observer
const SomeOfOurWork = dynamic(() => import('./_Components/SomeOfOurWork'), {
  loading: () => (
    <div className="min-h-[200px] lg:min-h-[400px] bg-theme-alt animate-pulse">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="h-48 bg-gray-200 rounded-2xl"></div>
          <div className="h-48 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  ),
});

const Technology = dynamic(() => import('./_Components/Technology'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-gray-200 animate-pulse" />,
});

const IndustryExpertise = dynamic(() => import('./_Components/Industry_Expertise'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-theme-bg animate-pulse" />,
});

const WhyChooseTechmapperz = dynamic(() => import('./_Components/WhyChooseTechmapperz'), {
  loading: () => <div className="min-h-[400px] bg-theme-alt animate-pulse" />,
});

const FeaturedProjects = dynamic(() => import('./_Components/FeaturedProjects'), {
  loading: () => <div className="min-h-[400px] bg-[#0c2e60] animate-pulse" />,
});

const HowWeWork = dynamic(() => import('./_Components/HowWeWork'), {
  loading: () => <div className="min-h-[300px] bg-theme-bg animate-pulse" />,
});

const AboutUs = dynamic(() => import('./_Components/AboutUs'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-gray-100 animate-pulse" />,
});

const HappyClients = dynamic(() => import('./_Components/HappyClients'), {
  loading: () => <div className="min-h-[100px] lg:min-h-[200px] bg-gray-200 animate-pulse" />,
});

const OurBlog = dynamic(() => import('./_Components/OurBlog'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[400px] bg-gray-100 animate-pulse" />,
});

const Testimonial = dynamic(() => import('./_Components/Testimonial'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-theme-bg animate-pulse" />,
});

const Homecontact = dynamic(() => import('./_Components/Homecontact'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[400px] bg-theme-dark animate-pulse" />,
});

const Deliverables = dynamic(() => import('./_Components/Deliverables'), {
  loading: () => <div className="min-h-[300px] bg-theme-bg animate-pulse" />,
});

const DronePartnership = dynamic(() => import('./_Components/DronePartnership'), {
  loading: () => <div className="min-h-[250px] bg-theme-alt animate-pulse" />,
});

import HoverButton from './_Components/ExpandButton';
import Link from 'next/link';
import company_logo from "@/public/logo.webp";
import { LazySection } from './_hooks/useIntersectionObserver';
import ScrollReveal from './_Components/ScrollReveal';
import connectDB from './lib/db';
import Banner from './lib/models/Banner';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL





export const metadata = {
  title: "GIS Mapping & Drone Survey Company in India | Techmapperz",
  description: "Techmapperz provides GIS mapping, drone survey, drone data processing, LiDAR point-cloud, DEM/DTM, contour mapping, Website and app development services in India.",
  keywords: [
    'IT company India',
    'GIS services company',
    'drone survey India',
    'web development company',
    'mobile app development',
    'CRM development',
    'custom software development',
    'GIS mapping services',
    'drone data processing',
    'spatial analysis',
    'geographic information systems',
    'digital transformation',
    'technology consulting India',
    'software solutions',
    'data digitization',
    'geospatial solutions',
    'drone surveying',
    'web application development',
    'enterprise software'
  ].join(', '),
  authors: [{ name: 'Techmapperz Team' }],
  creator: 'Techmapperz',
  publisher: 'Techmapperz',
  openGraph: {
    title: "Leading IT & GIS Solutions Company | Techmapperz India",
    description: "Transform your business with Techmapperz's comprehensive IT and GIS solutions. We offer web development, mobile apps, CRM systems, drone surveys, GIS mapping, and data digitization services across India.",
    url: BASE_URL,
    siteName: 'Techmapperz',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: `${BASE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Techmapperz - Leading IT & GIS Solutions Company in India",
      },
      {
        url: `${BASE_URL}/Photos/company_logo.webp`,
        width: 800,
        height: 600,
        alt: "Techmapperz Company Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techmapperz',
    creator: '@techmapperz',
    title: "Leading IT & GIS Solutions Company | Techmapperz India",
    description: "Transform your business with comprehensive IT and GIS solutions. Web development, mobile apps, CRM systems, drone surveys & more.",
    images: [`${BASE_URL}/logo.webp`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'en-IN': BASE_URL
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology Services',
  classification: 'Business',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'business:contact_data:country_name': 'India'
  }
};




const Home = async () => {
  let latestBanner = null;
  try {
    await connectDB();
    // Try to find specifically the Home Hero banner, otherwise fallback to any banner
    let banners = await Banner.find({ pageName: "Home Hero" }).sort({ _id: -1 }).limit(1).lean();

    if (!banners || banners.length === 0) {
      banners = await Banner.find().sort({ _id: -1 }).limit(1).lean();
    }
    if (banners && banners.length > 0) {
      // lean() returns plain JS object but we stringify and parse to avoid Mongoose doc issues across server boundaries
      latestBanner = JSON.parse(JSON.stringify(banners[0]));
    }
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  return (
    <div className='bg-theme-bg'>
      <ScrollToTop />
      <HomeHero bannerData={latestBanner} />
      <section className="bg-theme-bg pt-16 pb-12 max-sm:py-8 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full border-t border-gray-200">
        <ScrollReveal>
          <div className="w-full max-w-7xl mx-auto mb-16">
            <div className="text-center flex flex-col items-center">
              <span className="text-[#6ac045] text-[11px] sm:text-xs md:text-[14px] font-bold tracking-[0.15em] uppercase mb-2 sm:mb-3">
                OUR SERVICES
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c2e60] mb-3 sm:mb-5 tracking-tight">
                Geospatial and Digital Services Built Around Project Requirements
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                Choose a focused production service or combine mapping, processing, analysis and application development within a coordinated project workflow.
              </p>
            </div>
          </div>
          <Features />
          <div className="flex relative justify-center mt-10 mb-[50px]">
            <Link href="/service">
              <button
                className="bg-[#0c2e60] hover:bg-[#082046] text-white font-bold text-sm px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                View All Services &rarr;
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Deliverables Section (Section 5) */}
      <LazySection
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-theme-bg animate-pulse" />}
      >
        <ScrollReveal>
          <Deliverables />
        </ScrollReveal>
      </LazySection>

      {/* Industry Expertise Section (Section 6) */}
      <LazySection
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-theme-bg animate-pulse" />}
      >
        <ScrollReveal>
          <IndustryExpertise />
        </ScrollReveal>
      </LazySection>

      {/* Drone Processing Partnership Section (Section 7) */}
      <LazySection
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[250px] bg-theme-alt animate-pulse" />}
      >
        <ScrollReveal>
          <DronePartnership />
        </ScrollReveal>
      </LazySection>

      {/* Featured Projects Section (Section 8) */}
      <LazySection
        mobileRootMargin="150px 0px"
        fallback={<div className="min-h-[400px] bg-[#0c2e60] animate-pulse" />}
      >
        <FeaturedProjects />
      </LazySection>

      {/* Why Choose Us Section (Section 9) */}
      <LazySection
        mobileRootMargin="150px 0px"
        fallback={<div className="min-h-[600px] bg-theme-alt animate-pulse" />}
      >
        <WhyChooseTechmapperz />
      </LazySection>

      {/* How We Work Section (Section 10) */}
      <LazySection
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-theme-bg animate-pulse" />}
      >
        <HowWeWork />
      </LazySection>

      {/* Happy Clients Section (Retained) */}
      <LazySection
        mobileRootMargin="75px 0px"
        fallback={<div className="min-h-[200px] bg-gray-200 animate-pulse" />}
      >
        <ScrollReveal>
          <HappyClients />
        </ScrollReveal>
      </LazySection>

      {/* Blog Section (Retained) */}
      <LazySection
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[400px] bg-gray-100 animate-pulse" />}
      >
        <ScrollReveal>
          <OurBlog />
        </ScrollReveal>
      </LazySection>

      {/* Testimonial Section (Retained) */}
      <LazySection
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[300px] bg-theme-bg animate-pulse" />}
      >
        <ScrollReveal>
          <Testimonial />
        </ScrollReveal>
      </LazySection>

      {/* Contact Section (Section 13) */}
      <LazySection
        mobileRootMargin="25px 0px"
        fallback={<div className="min-h-[400px] bg-theme-dark animate-pulse" />}
      >
        <ScrollReveal>
          <Homecontact />
        </ScrollReveal>
      </LazySection>
    </div>
  );
};

export default Home;

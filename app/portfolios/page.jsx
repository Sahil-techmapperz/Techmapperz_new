import Casestudies from './client-page';
import enhancedPortfolioData from './PortfolioData';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
  title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
  description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
  keywords: ['GIS projects', 'drone surveys', 'LiDAR mapping', 'web development portfolio', 'mobile app portfolio', 'Techmapperz projects'],
  openGraph: {
    title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
    description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
    type: 'website',
    url: 'https://www.techmapperz.com/portfolios',
    siteName: 'Techmapperz',
    images: [
      {
        url: '/gis_images/aerial_gis_mapping_banner.png',
        width: 1200,
        height: 630,
        alt: 'Techmapperz Projects Portfolio'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
    description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
    images: ['/gis_images/aerial_gis_mapping_banner.png'],
  },
  alternates: {
    canonical: 'https://www.techmapperz.com/portfolios',
  },
};

export default async function Page() {
  await connectDB();
  let dbPortfolios = await Portfolio.find({}).lean();
  
  if (dbPortfolios.length === 0) {
      dbPortfolios = enhancedPortfolioData;
  }
  
  // Clean up any MongoDB specific fields for client passing
  const galleryProjects = JSON.parse(JSON.stringify(dbPortfolios));

  return <Casestudies portfolioData={galleryProjects} />;
}
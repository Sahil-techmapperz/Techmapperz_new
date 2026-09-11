import Casestudies from './client-page';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";
const isProduction = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
const previewImage = `${BASE_URL}/Photos/portfolio_hero_banner.jpg`;

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
  description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
  keywords: ['GIS projects', 'drone surveys', 'LiDAR mapping', 'web development portfolio', 'mobile app portfolio', 'Techmapperz projects'],
  openGraph: {
    title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
    description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
    type: 'website',
    url: `${BASE_URL}/portfolios`,
    siteName: 'Techmapperz',
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: 'Techmapperz Projects Portfolio'
      }
    ]
  },
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIS & Drone Projects | Web & App Portfolio | Techmapperz',
    description: 'Explore selected projects from Techmapperz, including GIS mapping, drone surveys, LiDAR data processing, websites and mobile applications.',
    images: [previewImage],
  },
  alternates: {
    canonical: `${BASE_URL}/portfolios`,
  },
};

export default function Page() {
  return <Casestudies />;
}
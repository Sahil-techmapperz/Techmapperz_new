import React from 'react';
import GISServicePageClient from './GISServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS Mapping & Digitisation Services in India | Techmapperz",
  description: "GIS mapping, data digitisation, feature extraction, utility mapping and CAD/GIS conversion for infrastructure, mining, land and planning projects in India.",
  alternates: {
    canonical: `${BASE_URL}/service/gisservice`,
  },
  openGraph: {
    title: "GIS Mapping & Digitisation Services in India | Techmapperz",
    description: "GIS mapping, data digitisation, feature extraction, utility mapping and CAD/GIS conversion for infrastructure, mining, land and planning projects in India.",
    url: `${BASE_URL}/service/gisservice`,
    type: "website",
    images: [
      {
        url: "/gis_images/aerial_gis_mapping_banner.png",
        width: 1200,
        height: 630,
        alt: "GIS Mapping and Data Digitisation Services - Techmapperz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIS Mapping & Digitisation Services in India | Techmapperz",
    description: "GIS mapping, data digitisation, feature extraction, utility mapping and CAD/GIS conversion for infrastructure, mining, land and planning projects in India.",
    images: ["/gis_images/aerial_gis_mapping_banner.png"],
  },
};

const gisservice = () => {
  return <GISServicePageClient />;
};

export default gisservice;

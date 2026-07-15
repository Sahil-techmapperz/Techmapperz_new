import React from 'react';
import GISServicePageClient from './GISServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS Mapping and Geospatial Services Company | Techmapperz",
  description: "Techmapperz provides GIS mapping, digitisation, feature extraction, LiDAR processing, utility mapping and spatial analysis services for infrastructure, utilities, mining, government and agriculture.",
  alternates: {
    canonical: `${BASE_URL}/service/gisservice`,
  },
};

const gisservice = () => {
  return <GISServicePageClient />;
};

export default gisservice;

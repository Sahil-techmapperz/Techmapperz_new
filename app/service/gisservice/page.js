import React from 'react';
import GISServicePageClient from './GISServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS Mapping & Data Digitisation Services in India | Techmapperz",
  description: "Techmapperz supports infrastructure, utility, mining, government, land and planning projects with GIS mapping, data digitisation, feature extraction, spatial analysis and geospatial database preparation.",
  alternates: {
    canonical: `${BASE_URL}/service/gisservice`,
  },
};

const gisservice = () => {
  return <GISServicePageClient />;
};

export default gisservice;

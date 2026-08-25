import React from 'react';
import ServicePageClient from './ServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS, Drone, Web & App Development Services | Techmapperz",
  description: "Explore GIS mapping, drone survey, drone data processing, LiDAR, website development and mobile app development services from Techmapperz in India.",
  alternates: {
    canonical: `${BASE_URL}/service`,
  },
  openGraph: {
    title: "GIS, Drone, Web & App Development Services | Techmapperz",
    description: "Explore GIS mapping, drone survey, drone data processing, LiDAR, website development and mobile app development services from Techmapperz in India.",
    url: `${BASE_URL}/service`,
    type: "website",
    images: [
      {
        url: "/Service.png",
        width: 1200,
        height: 630,
        alt: "Techmapperz Services - GIS, Drone & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIS, Drone, Web & App Development Services | Techmapperz",
    description: "Explore GIS mapping, drone survey, drone data processing, LiDAR, website development and mobile app development services from Techmapperz in India.",
    images: ["/Service.png"],
  },
};

const ServicePage = () => {
  return <ServicePageClient />;
};

export default ServicePage;

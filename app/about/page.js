import React from 'react';
import AboutPageClient from './AboutPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "About Techmapperz | GIS, Drone Mapping, Website Development, App Development & Our Team",
  description: "Techmapperz is an India-based GIS mapping, drone survey and Web & App development company supporting projects across India and internationally.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Techmapperz | GIS, Drone Mapping, Website Development, App Development & Our Team",
    description: "Techmapperz is an India-based GIS mapping, drone survey and Web & App development company supporting projects across India and internationally.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/Photos/about_us_banner.png",
        width: 1200,
        height: 630,
        alt: "About Techmapperz - Geospatial & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Techmapperz | GIS, Drone Mapping, Website Development, App Development & Our Team",
    description: "Techmapperz is an India-based GIS mapping, drone survey and Web & App development company supporting projects across India and internationally.",
    images: ["/Photos/about_us_banner.png"],
  },
};

const About = () => {
  return <AboutPageClient />;
};

export default About;

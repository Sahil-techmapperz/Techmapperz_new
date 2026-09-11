import React from 'react';
import ScrollToTop from '../_Components/ScrollToTop';
import CareerPageClient from './CareerPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const metadata = {
  title: "Careers at Techmapperz | GIS, Drone & Geospatial Jobs",
  description: "Explore GIS, drone survey, Web GIS, business development and digital development career opportunities at Techmapperz. Build practical skills on real geospatial projects.",
  alternates: {
    canonical: `${BASE_URL}/career`,
  },
};

const Career = () => {
  return (
    <>
      <ScrollToTop />
      <CareerPageClient />
    </>
  );
};

export default Career;

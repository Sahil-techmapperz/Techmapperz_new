import React from 'react';
import ScrollToTop from '../_Components/ScrollToTop';
import ContactPageClient from './ContactPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 3600;

export const metadata = {
  title: "Contact Techmapperz | Discuss Your GIS, Drone Survey or Web GIS Project",
  description: "Contact Techmapperz for GIS mapping, drone survey, LiDAR processing, Web and Mobile GIS, website development and mobile application projects in India and overseas.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <ContactPageClient />
    </>
  );
};

export default Contact;
import React from 'react';
import AboutPageClient from './AboutPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 86400;

export const metadata = {
  title: "Techmapperz – Leading IT, GIS & Drone Solutions Company in India",
  description: "Techmapperz provides advanced GIS mapping, drone survey, software development and IT consulting services in India. Trusted by urban planners, utilities and enterprises, we turn spatial data into actionable insights.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const About = () => {
  return <AboutPageClient />;
};

export default About;

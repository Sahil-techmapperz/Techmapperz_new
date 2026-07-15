import React from 'react';
import DroneServicePageClient from './DroneServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
    title: "Drone Survey & Mapping Services | High-Accuracy UAV Mapping India",
    description: "High-precision drone survey and mapping services using advanced UAV & GIS technology. Reliable solutions for government & enterprise projects across India.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice`,
    },
};

const DroneService = () => {
    return <DroneServicePageClient />;
};

export default DroneService;

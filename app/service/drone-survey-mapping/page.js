import React from 'react';
import DroneServicePageClient from './DroneServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
    title: "Drone Survey & Mapping Services in India | Techmapperz",
    description: "Drone survey, UAV LiDAR and data processing for infrastructure, mining and corridor projects across India, with project-specific GIS and CAD outputs.",
    alternates: {
        canonical: `${BASE_URL}/service/drone-survey-mapping`,
    },
    openGraph: {
        title: "Drone Survey & Mapping Services in India | Techmapperz",
        description: "Drone survey, UAV LiDAR and data processing for infrastructure, mining and corridor projects across India, with project-specific GIS and CAD outputs.",
        url: `${BASE_URL}/service/drone-survey-mapping`,
        siteName: "Techmapperz",
        images: [
            {
                url: "/Drone_Service/Drone_Survey&Mapping_banner.png",
                width: 1200,
                height: 630,
                alt: "Drone Survey & Mapping Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const DroneSurveyMapping = () => {
    return <DroneServicePageClient />;
};

export default DroneSurveyMapping;

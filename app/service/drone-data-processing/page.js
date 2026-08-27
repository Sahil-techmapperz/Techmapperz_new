import React from 'react';
import DroneDataProcessingPageClient from './DroneDataProcessingPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// ISR caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
    title: "Drone Data Processing Services in India | Techmapperz",
    description: "Drone data processing services for client-supplied imagery and LiDAR. Orthomosaics, point clouds, DTM/DSM, contours and GIS/CAD outputs.",
    alternates: {
        canonical: `${BASE_URL}/service/drone-data-processing`,
    },
    openGraph: {
        title: "Drone Data Processing Services in India | Techmapperz",
        description: "Drone data processing services for client-supplied imagery and LiDAR. Orthomosaics, point clouds, DTM/DSM, contours and GIS/CAD outputs.",
        url: `${BASE_URL}/service/drone-data-processing`,
        siteName: "Techmapperz",
        images: [
            {
                url: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
                width: 1200,
                height: 630,
                alt: "Drone orthomosaic and classified point cloud prepared by Techmapperz",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Drone Data Processing Services in India | Techmapperz",
        description: "Drone data processing services for client-supplied imagery and LiDAR. Orthomosaics, point clouds, DTM/DSM, contours and GIS/CAD outputs.",
        images: ["/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp"],
    },
};

export default function DroneDataProcessingPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can Techmapperz process data captured by another drone company?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We regularly consider processing-only assignments using client-supplied drone imagery or LAS/LAZ point clouds. We first review sample files, available metadata, project boundary, control information and required outputs."
                }
            },
            {
                "@type": "Question",
                "name": "What information is required to start drone-image processing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The usual inputs are raw geotagged images, flight information where available, the project boundary, coordinate reference system, GCP/RTK/PPK or other control information, and the required deliverables. A sample output or specification is useful where a particular drawing or layer structure must be followed."
                }
            },
            {
                "@type": "Question",
                "name": "Can you process drone imagery without ground-control points?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Processing may be possible when suitable geotags, RTK or PPK information is available. However, the absence of reliable control can limit absolute positional accuracy and the suitability of the outputs for survey or engineering use. We review the dataset before confirming what can be delivered."
                }
            },
            {
                "@type": "Question",
                "name": "What can be produced from drone photographs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depending on image quality, overlap, coverage and control, outputs may include an orthomosaic, dense RGB point cloud, DSM, 3D surface or mesh and related mapping products. A bare-earth DTM and reliable contours depend on terrain visibility and the suitability of the point-cloud classification."
                }
            },
            {
                "@type": "Question",
                "name": "Can Techmapperz classify LiDAR point clouds?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The scope can include noise cleaning, ground/non-ground separation and classification into agreed terrain, vegetation, structure or project-specific groups. Results depend on the original point density, coverage, noise and sensor data supplied."
                }
            },
            {
                "@type": "Question",
                "name": "Can you prepare contours, profiles and cross-sections?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, when a suitable terrain surface is available. Contour intervals, profile alignment, cross-section spacing, drawing scale and output format should be agreed before production."
                }
            },
            {
                "@type": "Question",
                "name": "How is the processing cost calculated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cost depends on the project area or corridor length, image count, point-cloud volume, input condition, processing complexity, required classification, number of deliverables, GIS/CAD extraction scope, QA/QC requirements and delivery schedule. A sample review allows us to prepare a more reliable quotation."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${BASE_URL}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${BASE_URL}/service`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Drone Data Processing",
                "item": `${BASE_URL}/service/drone-data-processing`
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Drone Data Processing Services",
        "description": "Drone data processing services for client-supplied imagery and LiDAR. Orthomosaics, point clouds, DTM/DSM, contours and GIS/CAD outputs.",
        "provider": {
            "@type": "Organization",
            "name": "Techmapperz",
            "url": `${BASE_URL}`
        },
        "areaServed": "India",
        "serviceType": "Geospatial & Drone Photogrammetry Processing",
        "url": `${BASE_URL}/service/drone-data-processing`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <DroneDataProcessingPageClient />
        </>
    );
}

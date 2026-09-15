import React from 'react';
import MobileAppDevelopmentPageClient from './MobileAppDevelopmentPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// ISR caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "Mobile App Development Company in India | Techmapperz",
  description: "Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.",
  alternates: {
    canonical: `${BASE_URL}/service/mobile-app-development`,
  },
  openGraph: {
    title: "Mobile App Development Company in India | Techmapperz",
    description: "Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.",
    url: `${BASE_URL}/service/mobile-app-development`,
    siteName: "Techmapperz",
    images: [
      {
        url: "/Mobile-app-deve.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services by Techmapperz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in India | Techmapperz",
    description: "Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.",
    images: ["/Mobile-app-deve.png"],
  },
};

export default function MobileAppDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should we build a mobile app or a responsive website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A responsive website may be sufficient for occasional access and information-based requirements. An app becomes more useful when people need frequent interaction, notifications, secure user functions, device capabilities, field data collection or offline operation."
        }
      },
      {
        "@type": "Question",
        "name": "Should we build for Android, iOS or both?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The answer depends on your users, device environment, required functions and available budget. We review whether the first release should target one platform or use a native or cross-platform approach for both."
        }
      },
      {
        "@type": "Question",
        "name": "Can the application connect with our existing software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, provided the existing platform offers suitable API or database access. The integration scope is reviewed before development so authentication, data ownership and synchronisation requirements are clear."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mobile app development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost depends on user roles, number of workflows, platforms, integrations, offline requirements, admin features and release responsibilities. After a requirement discussion, we prepare a scope-based estimate instead of quoting from the number of screens alone."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support Google Play and Apple App Store submission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Store preparation and technical submission support can form part of the scope. Final approval remains subject to the respective store’s policies and the client’s developer account."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch, and who owns the source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Support, repository access, source-code ownership, documentation and handover conditions are defined in the commercial proposal. Maintenance may then cover compatibility updates, issue resolution and agreed enhancements."
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
        "name": "Mobile App Development",
        "item": `${BASE_URL}/service/mobile-app-development`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "description": "Techmapperz designs and develops Android, iOS and cross-platform applications for customer services, internal operations, field data collection and map-based workflows.",
    "provider": {
      "@type": "Organization",
      "name": "Techmapperz",
      "url": `${BASE_URL}`
    },
    "areaServed": "India",
    "serviceType": "Mobile Application Development & Engineering",
    "url": `${BASE_URL}/service/mobile-app-development`
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
      <MobileAppDevelopmentPageClient />
    </>
  );
}

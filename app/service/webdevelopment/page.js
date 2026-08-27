import React from 'react';
import WebDevelopmentPageClient from './WebDevelopmentPageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// ISR caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "Website Development Company in India | Techmapperz",
  description: "Techmapperz builds responsive business websites, e-commerce platforms and custom web applications with practical UX, technical SEO and ongoing support.",
  alternates: {
    canonical: `${BASE_URL}/service/webdevelopment`,
  },
  openGraph: {
    title: "Website Development Company in India | Techmapperz",
    description: "Techmapperz builds responsive business websites, e-commerce platforms and custom web applications with practical UX, technical SEO and ongoing support.",
    url: `${BASE_URL}/service/webdevelopment`,
    siteName: "Techmapperz",
    images: [
      {
        url: "/Photos/Webdevelopment_Mockup_banner.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Services by Techmapperz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in India | Techmapperz",
    description: "Techmapperz builds responsive business websites, e-commerce platforms and custom web applications with practical UX, technical SEO and ongoing support.",
    images: ["/Photos/Webdevelopment_Mockup_banner.webp"],
  },
};

export default function WebDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a business website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on the number and type of pages, design work, content readiness, CMS requirements, e-commerce or portal functions, integrations and testing. Share the current website or an expected page and function list so that the scope can be reviewed before pricing."
        }
      },
      {
        "@type": "Question",
        "name": "What information is needed for a website proposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Useful inputs include the business overview, target users, current website if available, expected pages, required functionality, content status, reference websites and preferred timeline. A complete specification is helpful but not mandatory for the first discussion."
        }
      },
      {
        "@type": "Question",
        "name": "Can Techmapperz redesign an existing website without losing useful pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The existing page structure, content, URLs, search visibility and functions should be reviewed before redesign. Pages that are removed or renamed require an agreed redirect plan so users and search engines do not reach unnecessary errors."
        }
      },
      {
        "@type": "Question",
        "name": "Can our team update the website after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when content management is included in the scope. We agree which content your authorised users need to edit and organise the administration workflow around those updates."
        }
      },
      {
        "@type": "Question",
        "name": "Can Techmapperz build e-commerce websites and custom portals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The scope can include product catalogues, cart and checkout, payment integration, B2B ordering, dashboards, approval workflows or customer portals. The exact functions and user roles must be confirmed before design and development."
        }
      },
      {
        "@type": "Question",
        "name": "Can maps or GIS data be integrated into the website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, where the requirement needs it. Techmapperz can scope interactive maps, location displays, spatial queries, asset views or map-led workflows separately from a standard business website."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The launch scope should state who manages the domain, hosting, source files, administrator access, backups, routine updates and future changes. Ongoing maintenance can be agreed as a separate support arrangement where required."
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
        "name": "Website Development",
        "item": `${BASE_URL}/service/webdevelopment`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development Services",
    "description": "Techmapperz builds responsive business websites, e-commerce platforms and custom web applications with practical UX, technical SEO and ongoing support.",
    "provider": {
      "@type": "Organization",
      "name": "Techmapperz",
      "url": `${BASE_URL}`
    },
    "areaServed": "India",
    "serviceType": "Web Development & Custom Software Engineering",
    "url": `${BASE_URL}/service/webdevelopment`
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
      <WebDevelopmentPageClient />
    </>
  );
}

import CriticalCSS from './_Components/CriticalCSS';
import MarketingScripts from './_Components/MarketingScripts';
import "./globals.css";
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { IBM_Plex_Sans, Poppins } from 'next/font/google';

// Configure the IBM Plex Sans font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

// Conditional layout component that handles Navbar/Footer based on route
const ConditionalLayout = dynamic(() => import('./_Components/ConditionalLayout'));
const PerformanceProvider = dynamic(() => import('./_Components/PerformanceProvider'));
import Head from 'next/head';
import SmoothScroll from './_Components/SmoothScroll';

// Enhanced SEO metadata for the root layout
export const metadata = {
  metadataBase: new URL('https://www.techmapperz.com'),
  title: {
    default: 'Techmapperz | Leading GIS, Drone & IT Solutions Company in India',
    template: '%s'
  },
  description: 'Techmapperz is a leading GIS, Drone, and IT Solutions provider in India. We offer custom web development, mobile apps, GIS mapping, drone surveys, LiDAR, and data digitization services.',
  keywords: [
    'GIS company India',
    'GIS services',
    'drone survey',
    'LiDAR data processing',
    'GIS mapping',
    'data digitization',
    'drone data processing',
    'spatial analysis',
    'geographic information systems',
    'web development',
    'mobile app development',
    'custom software solutions',
    'digital transformation'
  ].join(', '),
  authors: [{ name: 'Techmapperz Team' }],
  creator: 'Techmapperz',
  publisher: 'Techmapperz',
  category: 'Technology Services',
  classification: 'Business',
  icons: {
    icon: [
      { url: 'https://www.techmapperz.com/favicon.ico', sizes: 'any' },
      { url: 'https://www.techmapperz.com/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://www.techmapperz.com/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://www.techmapperz.com/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.techmapperz.com/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: 'https://www.techmapperz.com/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome', url: 'https://www.techmapperz.com/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production',
    follow: !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production',
    googleBot: {
      index: !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production',
      follow: !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production',
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.techmapperz.com',
    title: 'Techmapperz | Leading GIS, Drone & IT Solutions Company in India',
    description: 'Techmapperz provides comprehensive GIS, drone survey, LiDAR, web and mobile application development services across India.',
    siteName: 'Techmapperz',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Techmapperz - GIS, Drone & IT Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techmapperz | Leading GIS, Drone & IT Solutions Company in India',
    description: 'Comprehensive GIS, drone survey, LiDAR data processing, and digital development services.',
    images: ['/logo.webp'],
    creator: '@techmapperz',
    site: '@techmapperz'
  },

  alternates: {
    canonical: 'https://www.techmapperz.com',
    languages: {
      'en-US': 'https://www.techmapperz.com',
      'en-IN': 'https://www.techmapperz.com'
    }
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '22.5726;88.3639',
    'ICBM': '22.5726, 88.3639',
    'business:contact_data:street_address': 'Kolkata, West Bengal',
    'business:contact_data:locality': 'Kolkata',
    'business:contact_data:region': 'West Bengal',
    'business:contact_data:postal_code': '700001',
    'business:contact_data:country_name': 'India',
    'theme-color': '#00B0FE',
    'msapplication-TileColor': '#00B0FE',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ibmPlexSans.variable} ${poppins.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.webp" as="image" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://calendly.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.techmapperz.com/#organization",
                  "name": "Techmapperz",
                  "url": "https://www.techmapperz.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.techmapperz.com/logo.webp"
                  },
                  "description": "Leading GIS, Drone Survey, LiDAR and Digital Solutions provider in India offering geospatial data processing, GIS mapping, drone surveys, website and mobile app development.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "India",
                    "addressRegion": "West Bengal",
                    "addressLocality": "Kolkata"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/techmapperz",
                    "https://twitter.com/techmapperz",
                    "https://www.facebook.com/techmapperz"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.techmapperz.com/#website",
                  "url": "https://www.techmapperz.com",
                  "name": "Techmapperz",
                  "description": "Leading GIS, Drone & IT Solutions Company in India",
                  "publisher": {
                    "@id": "https://www.techmapperz.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>

      <body suppressHydrationWarning style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <SmoothScroll>
          <CriticalCSS />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScroll>

        <MarketingScripts />
        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFR47W8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}

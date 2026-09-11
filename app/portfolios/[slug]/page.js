import { notFound } from 'next/navigation';
import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';
import enhancedPortfolioData from '../PortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Helper to find portfolio item by slug from local data
function findLocalPortfolioItem(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return enhancedPortfolioData.find(item => {
    const itemSlug = (item.slug || item.link?.replace('/portfolios/', '') || '').toLowerCase().trim();
    if (itemSlug === cleanSlug) return true;
    const nameSlug = item.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return nameSlug === cleanSlug;
  });
}

// Generate metadata for each portfolio item
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  let portfolioItem = null;
  try {
    await connectDB();
    portfolioItem = await Portfolio.findOne({ slug: slug }).lean();
  } catch (err) {
    console.warn("DB lookup error in generateMetadata, falling back to local PortfolioData:", err.message);
  }

  // Fallback to local portfolio data if not found in database
  if (!portfolioItem) {
    portfolioItem = findLocalPortfolioItem(slug);
  }

  if (!portfolioItem) {
    return {
      title: 'Portfolio Item Not Found | Techmapperz',
      description: 'The requested portfolio item could not be found.',
    };
  }

  const description = Array.isArray(portfolioItem.details) 
    ? portfolioItem.details[0] 
    : (portfolioItem.summary || portfolioItem.details || '');

  const pageTitle = portfolioItem.seoTitle || `${portfolioItem.name} | ${portfolioItem.category} Case Study | Techmapperz`;
  const pageDescription = portfolioItem.seoDescription || (typeof description === 'string' ? description.substring(0, 160) + '...' : `${portfolioItem.name} - Professional ${portfolioItem.category} project by Techmapperz`);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `${BASE_URL}/portfolios/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: portfolioItem.image ? [portfolioItem.image] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: portfolioItem.image ? [portfolioItem.image] : [],
    },
    keywords: [
      portfolioItem.category,
      portfolioItem.projectDetails?.industry,
      portfolioItem.projectDetails?.projectType,
      'Techmapperz',
      ...(typeof portfolioItem.techStack === 'string' ? portfolioItem.techStack.split(',').map(tech => tech.trim()) : [])
    ].filter(Boolean).join(', ')
  };
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const slugsSet = new Set();

  try {
    await connectDB();
    const portfolios = await Portfolio.find({}, 'slug').lean();
    portfolios.forEach((item) => {
      if (item.slug) slugsSet.add(item.slug);
    });
  } catch (err) {
    console.warn("DB lookup error in generateStaticParams:", err.message);
  }

  enhancedPortfolioData.forEach((item) => {
    const slug = item.slug || item.link?.replace('/portfolios/', '');
    if (slug) slugsSet.add(slug);
  });

  return Array.from(slugsSet).map((slug) => ({
    slug,
  }));
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;

  let portfolioItem = null;
  try {
    await connectDB();
    const portfolioItemData = await Portfolio.findOne({ slug: slug }).lean();
    if (portfolioItemData) {
      portfolioItem = JSON.parse(JSON.stringify(portfolioItemData));
    }
  } catch (err) {
    console.warn("DB lookup error in PortfolioDetailPage, falling back to local PortfolioData:", err.message);
  }

  // Fallback to local portfolio data if not found in database
  if (!portfolioItem) {
    const localItem = findLocalPortfolioItem(slug);
    if (localItem) {
      portfolioItem = JSON.parse(JSON.stringify(localItem));
    }
  }

  // If still no portfolio item is found, return 404
  if (!portfolioItem) {
    notFound();
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug={slug}
    />
  );
}
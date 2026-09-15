'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import Navbar, Footer and SmoothScroll
import Navbar from './Navbar';
import SmoothScroll from './SmoothScroll';
const Footer = dynamic(() => import('./Footer'));
const QuoteModal = dynamic(() => import('./QuoteModal'), { ssr: false });

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsQuoteOpen(true);
    window.addEventListener('open-quote-modal', handleOpen);

    const handleGlobalClick = (e) => {
      const trigger = e.target.closest('[data-open-modal="quote"], a, button');
      if (!trigger) return;

      // Ignore if clicking inside a form (like submit buttons) or already inside modal
      if (trigger.closest('form')) return;

      // Check for explicit data attribute
      if (trigger.dataset?.openModal === 'quote') {
        e.preventDefault();
        setIsQuoteOpen(true);
        return;
      }

      // Check text content for specified CTA buttons
      const text = trigger.textContent?.trim().replace(/\s+/g, ' ') || '';
      if (
        text.includes('Discuss a Data-Processing Requirement') ||
        text.includes('Discuss a Data Processing Requirement') ||
        text.includes('Discuss Your Project')
      ) {
        e.preventDefault();
        setIsQuoteOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('open-quote-modal', handleOpen);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // For admin routes, don't show Navbar and Footer
  if (isAdminRoute) {
    return <main>{children}</main>;
  }

  // For regular routes, show Navbar, Footer, SmoothScroll and QuoteModal
  return (
    <SmoothScroll>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      <main id="main-content" role="main">{children}</main>
      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </SmoothScroll>
  );
}

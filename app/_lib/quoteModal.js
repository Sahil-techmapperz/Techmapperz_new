'use client';

export const openQuoteModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
  }
};

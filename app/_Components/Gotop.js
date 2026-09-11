'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Up_arrow from '@/public/Photos/Up_arrow.webp';

const Gotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Show button after scrolling down 200px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth',
    };
    window.scrollTo(options);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 shadow-xl rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00B0FE]"
        >
          <Image
            className="w-5 h-5 object-contain"
            src={Up_arrow}
            alt=""
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

export default Gotop;

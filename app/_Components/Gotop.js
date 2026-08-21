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
        <Image
          className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 cursor-pointer w-[36px] sm:w-[44px] md:w-[46px] transition-all duration-300 hover:scale-110 shadow-xl rounded-full"
          onClick={handleScrollToTop}
          src={Up_arrow}
          alt="Up arrow"
        />
      )}
    </div>
  );
};

export default Gotop;

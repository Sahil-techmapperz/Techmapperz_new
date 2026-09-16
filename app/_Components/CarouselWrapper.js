'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const CarouselWrapper = ({ children }) => {
  const rawItems = React.Children.toArray(children);
  const items = rawItems.flatMap(child => Array.isArray(child) ? child : [child]).filter(Boolean);

  return (
    <div className="relative w-full px-4 sm:px-10 md:px-12 group/carousel">
      {/* Navigation Arrow - Previous */}
      <button
        type="button"
        className="tm-carousel-prev absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#DDE3EA] shadow-md hover:shadow-lg flex items-center justify-center text-[#0C2E60] hover:bg-[#1656B8] hover:border-[#1656B8] hover:text-white transition-all duration-200 cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
      </button>

      {/* Navigation Arrow - Next */}
      <button
        type="button"
        className="tm-carousel-next absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#DDE3EA] shadow-md hover:shadow-lg flex items-center justify-center text-[#0C2E60] hover:bg-[#1656B8] hover:border-[#1656B8] hover:text-white transition-all duration-200 cursor-pointer group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      {/* Swiper Slider Container */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: '.tm-carousel-prev',
            nextEl: '.tm-carousel-next',
          }}
          spaceBetween={24}
          slidesPerView={1}
          loop={items.length > 2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="w-full py-2 !items-stretch"
        >
          {items.map((child, index) => (
            <SwiperSlide key={index} className="!h-auto !flex flex-col">
              <div className="w-full flex-1 flex flex-col h-full">
                {child}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselWrapper;
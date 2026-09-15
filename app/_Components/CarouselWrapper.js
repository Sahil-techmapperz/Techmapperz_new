'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';

const CarouselWrapper = ({ children }) => {
  const items = React.Children.toArray(children);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative w-full px-2 sm:px-10 md:px-12">
      {/* Navigation Arrow - Previous */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Previous slide"
          className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#DDE3EA] shadow-md hover:shadow-lg flex items-center justify-center text-[#0C2E60] hover:bg-[#1656B8] hover:border-[#1656B8] hover:text-white transition-all duration-200 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>
      )}

      {/* Navigation Arrow - Next */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Next slide"
          className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#DDE3EA] shadow-md hover:shadow-lg flex items-center justify-center text-[#0C2E60] hover:bg-[#1656B8] hover:border-[#1656B8] hover:text-white transition-all duration-200 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      )}

      {/* Swiper Slider Container */}
      <div className="w-full overflow-hidden">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={items.length > 2}
          autoplay={{
            delay: 3500,
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
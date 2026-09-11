import { Star, CheckCircle2, Quote } from 'lucide-react';
import CarouselWrapper from './CarouselWrapper';
import MessageTooltip from "./MessageTooltip";
import logger from '@/app/lib/utils/logger';

import connectDB from '@/app/lib/db';
import TestimonialModel from '@/app/lib/models/Testimonial';

async function getTestimonials() {
  try {
    await connectDB();
    const testimonials = await TestimonialModel.find().sort({ _id: -1 }).lean();
    logger.log(`Successfully fetched ${testimonials.length} testimonials from database`);
    return JSON.parse(JSON.stringify(testimonials));
  } catch (error) {
    logger.error('Error fetching testimonials from DB:', error.message || error);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
      const response = await fetch(`${baseUrl}/api/testimonial`, {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 600 },
      });

      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data : (data?.data && Array.isArray(data.data)) ? data.data : [];
      }
    } catch (fallbackError) {
      logger.error('Fallback testimonial fetch failed:', fallbackError);
    }
    return [];
  }
}

const Testimonial = async () => {
  const testimonials = await getTestimonials();
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="relative bg-[#F6F8FB] py-4 md:py-10 px-2 sm:px-4 md:px-6 overflow-hidden border-t border-[#DDE3EA]">
      
      <div className="relative z-10 text-center mb-4 sm:mb-5 px-4">
        <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase">Testimonials</span>
        <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[38px] font-bold text-[#0C2E60] mt-1 mb-1.5 tracking-tight leading-[1.2]">
          Hear From Our Clients
        </h2>
        <div className="w-10 h-[2.5px] bg-[#0F766E] mx-auto rounded-full mt-1.5" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <CarouselWrapper responsive={responsive}>
          {safeTestimonials.length > 0 ? safeTestimonials.map((data, idx) => (
            <div
              key={data._id || data.userId || `testimonial-${idx}`}
              className="group testimonial-card relative bg-white border border-[#DDE3EA] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mx-2 sm:mx-3 min-h-[220px] flex-1 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#0F766E]/40 shadow-sm hover:shadow-md overflow-hidden"
            >
              {/* Large faded quote icon */}
              <Quote className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-100 w-9 h-9 sm:w-12 sm:h-12 group-hover:text-[#0F766E]/10 transition-colors duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#17202A] mr-2.5 sm:mr-3">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 drop-shadow-sm" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-grow mb-3 sm:mb-4 text-[#4B5563] text-[13.5px] sm:text-[14.5px] leading-relaxed italic font-normal">
                <MessageTooltip message={data.message} />
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-[#DDE3EA] pt-3 sm:pt-3.5">
                <div>
                  <h4 className="text-theme-text font-bold text-[14px] sm:text-[15px] tracking-wide">{data.name || 'Anonymous Client'}</h4>
                  {data.Companyname && (
                    <p className="text-theme-teal text-[11px] sm:text-xs font-medium mt-0.5 uppercase tracking-wider">{data.Companyname}</p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 bg-theme-teal/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-theme-teal/20 flex-shrink-0">
                  <CheckCircle2 className="text-theme-teal w-3 h-3" />
                  <span className="text-theme-teal text-[10px] sm:text-[11px] font-bold tracking-wide uppercase">Verified</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="bg-gray-50 border border-gray-200 text-theme-text p-6 sm:p-8 rounded-2xl shadow-sm mx-2 sm:mx-4 min-h-[200px] flex flex-col justify-center items-center">
              <p className="text-sm sm:text-base text-theme-text-sec font-light">No testimonials available at the moment.</p>
            </div>
          )}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonial;



import { FaStar, FaCheckCircle, FaQuoteRight } from 'react-icons/fa';
import CarouselWrapper from './CarouselWrapper';
import MessageTooltip from "./MessageTooltip";
import logger from '@/app/lib/utils/logger';

async function getTestimonials() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = baseUrl ? `${baseUrl}/api/testimonial` : '/api/testimonial';
    logger.log('Fetching testimonials from:', url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(`HTTP error fetching testimonials! status: ${response.status}, message: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const testimonials = Array.isArray(data) ? data : (data?.data && Array.isArray(data.data)) ? data.data : [];
    logger.log(`Successfully fetched ${testimonials.length} testimonials`);
    return testimonials;
  } catch (error) {
    logger.error('Error fetching testimonials data:', error.message || error);
    if (process.env.NODE_ENV === 'production') {
      return [];
    } else {
      console.error('Error fetching testimonials:', error);
      return [];
    }
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
    <div className="relative bg-theme-alt py-12 md:py-24 px-2 sm:px-4 md:px-6 overflow-hidden border-t border-gray-200">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-theme-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-theme-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center mb-10 md:mb-16 px-4">
        <span className="text-theme-teal text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Testimonials</span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-theme-text mt-2 md:mt-4 mb-4 md:mb-6 tracking-tight">
          Hear From Our Clients
        </h2>
        <div className="w-16 sm:w-24 h-[3px] bg-gradient-to-r from-theme-blue to-theme-teal mx-auto rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-1 sm:px-4 md:px-6 relative z-10">
        <CarouselWrapper responsive={responsive}>
          {safeTestimonials.length > 0 ? safeTestimonials.map((data, idx) => (
            <div
              key={data._id || data.userId || `testimonial-${idx}`}
              className="group relative bg-white border border-gray-200 rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-10 mx-2 sm:mx-4 min-h-[280px] md:min-h-[350px] h-full flex flex-col transition-all duration-500 hover:border-theme-teal/30 shadow-md hover:shadow-xl overflow-hidden"
            >
              {/* Subtle gradient hover reveal */}
              <div className="absolute inset-0 bg-gradient-to-br from-theme-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Large faded quote icon */}
              <FaQuoteRight className="absolute top-4 right-4 sm:top-8 sm:right-8 text-gray-100 text-4xl sm:text-6xl group-hover:text-theme-teal/10 transition-colors duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex items-center mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-extrabold text-theme-text mr-3 sm:mr-4">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg sm:text-xl drop-shadow-sm" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-grow mb-6 sm:mb-8 text-theme-text-sec text-sm sm:text-base md:text-lg leading-relaxed italic font-light">
                <MessageTooltip message={data.message} />
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-gray-200 pt-4 sm:pt-6">
                <div>
                  <h4 className="text-theme-text font-bold text-base sm:text-lg tracking-wide">{data.name || 'Anonymous Client'}</h4>
                  {data.Companyname && (
                    <p className="text-theme-teal text-xs sm:text-sm font-medium mt-0.5 sm:mt-1 uppercase tracking-wider">{data.Companyname}</p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 bg-theme-teal/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-theme-teal/20 flex-shrink-0">
                  <FaCheckCircle className="text-theme-teal text-xs sm:text-sm" />
                  <span className="text-theme-teal text-[10px] sm:text-xs font-bold tracking-wide uppercase">Verified</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="bg-gray-50 border border-gray-200 text-theme-text p-6 sm:p-10 rounded-2xl md:rounded-[2rem] shadow-sm mx-2 sm:mx-4 min-h-[250px] md:min-h-[300px] flex flex-col justify-center items-center">
              <p className="text-base sm:text-lg text-theme-text-sec font-light">No testimonials available at the moment.</p>
            </div>
          )}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonial;



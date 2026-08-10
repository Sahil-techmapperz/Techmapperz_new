import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const sansSerifStyle = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const OurBlog = async () => {
  let page = 1;
  let parpage = 3;
  let data = await getallblogs(page, parpage);
  
  const blogPosts = Array.isArray(data) 
    ? data 
    : (data?.data && Array.isArray(data.data)) 
      ? data.data 
      : (data?.blogPosts && Array.isArray(data.blogPosts))
        ? data.blogPosts
        : [];
  
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden border-t border-gray-100 max-sm:hidden" style={sansSerifStyle}>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#1267b1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#078a86]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <span className="text-[#078a86] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">Techmapperz Insights</span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2e60] mt-4 mb-4 tracking-tight">
          Our Latest Blogs
        </h2>
        <div className="w-12 h-[3px] bg-[#078a86] mx-auto rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {blogPosts.length > 0 ? blogPosts.map(post => (
            <div key={post._id || post.id || Math.random()}>
              <Card post={post} />
            </div>
          )) : (
            <div className="col-span-3 text-center py-12 bg-gray-50 border border-gray-100 rounded-3xl">
              <p className="text-sm md:text-base text-gray-500 font-light">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Explore More CTA */}
      <div className="relative z-10 flex justify-center mt-16 mb-8">
        <Link
          href="/blog"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-[#0c2e60] text-sm font-bold tracking-wide uppercase transition-colors group-hover:text-[#1267b1]">Explore More Blogs</span>
          <FaArrowRight className="text-[#1267b1] group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default OurBlog;

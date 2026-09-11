import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sansSerifStyle = {
  fontFamily: 'var(--font-primary), "IBM Plex Sans", sans-serif'
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
    <section className="relative bg-white py-4 md:py-10 px-4 overflow-hidden border-t border-[#DDE3EA]" style={sansSerifStyle}>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-4 sm:mb-5">
        <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase">Techmapperz Insights</span>
        <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[38px] font-bold text-[#0C2E60] mt-1 mb-1.5 tracking-tight leading-[1.2]">
          Our Latest Blogs
        </h2>
        <div className="w-10 h-[2.5px] bg-[#0F766E] mx-auto rounded-full mt-1.5" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.length > 0 ? blogPosts.map(post => (
            <div key={post._id || post.id || Math.random()}>
              <Card post={post} />
            </div>
          )) : (
            <div className="col-span-3 text-center py-8 bg-[#F6F8FB] border border-[#DDE3EA] rounded-2xl">
              <p className="text-sm md:text-base text-[#4B5563] font-light">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Explore More CTA */}
      <div className="relative z-10 flex justify-center mt-4 sm:mt-5 mb-1">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[14px] sm:text-[15px] rounded-full transition-all duration-300 shadow-sm hover:shadow-md min-h-[42px] sm:min-h-[44px]"
        >
          <span>Explore More Blogs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default OurBlog;

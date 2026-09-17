import Link from 'next/link';
import Image from 'next/image';
import BlogImage from './BlogImage';
import { formatDate } from '@/app/lib/dateFormat';
import getRecentblogs from '@/lib/getsingaleblogs';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const RecentBlogList = async () => {
  const recentPostsResponse = await getRecentblogs();
  
  // Handle response structure
  const recentPosts = Array.isArray(recentPostsResponse) 
    ? recentPostsResponse 
    : (recentPostsResponse?.data && Array.isArray(recentPostsResponse.data)) 
      ? recentPostsResponse.data 
      : [];

  return (
    <div className="p-6 bg-white rounded-2xl border border-[#DDE3EA] shadow-sm">
      <span className="text-[#0F766E] text-[12px] font-bold uppercase tracking-[0.15em] block mb-1">
        LATEST PERSPECTIVES
      </span>
      <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0C2E60] mb-5 pb-3 border-b border-[#DDE3EA]">
        Recent Articles
      </h3>

      {recentPosts.length > 0 ? (
        <div className="space-y-4">
          {recentPosts.slice(0, 5).map((recent) => (
            <Link
              key={recent._id}
              href={`/blog/${recent._id}`}
              className="group flex items-start gap-3.5 p-2 -mx-2 rounded-xl hover:bg-[#F6F8FB] transition-all duration-200"
            >
              <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#F6F8FB] border border-[#DDE3EA]">
                <BlogImage
                  src={recent.images?.[0]?.trim()}
                  alt={recent.title || 'Recent post thumbnail'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors line-clamp-2 leading-snug">
                  {recent.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#6B7280] mt-2">
                  <FiCalendar className="w-3 h-3 text-[#0F766E]" />
                  <span>{formatDate(recent.created_at)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-[#6B7280] text-sm py-3 text-center">
          No recent posts available.
        </p>
      )}

      <div className="mt-6 pt-4 border-t border-[#DDE3EA]">
        <Link
          href="/contact"
          className="group flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1656B8] hover:text-[#0C2E60] transition-colors"
        >
          <span>Need Project Assistance?</span>
          <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogList;

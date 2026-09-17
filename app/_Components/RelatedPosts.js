import Link from 'next/link';
import Image from 'next/image';
import BlogImage from './BlogImage';
import { formatDate } from '@/app/lib/dateFormat';
import { FiCalendar } from 'react-icons/fi';

const RelatedPosts = ({ relatedPosts }) => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-[#DDE3EA] shadow-sm">
      <span className="text-[#0F766E] text-[12px] font-bold uppercase tracking-[0.15em] block mb-1">
        RECOMMENDED READING
      </span>
      <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0C2E60] mb-5 pb-3 border-b border-[#DDE3EA]">
        Related Articles
      </h3>

      {relatedPosts && relatedPosts.length > 0 ? (
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._id}`}
              className="group flex items-start gap-3.5 p-2 -mx-2 rounded-xl hover:bg-[#F6F8FB] transition-all duration-200"
            >
              <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#F6F8FB] border border-[#DDE3EA]">
                <BlogImage
                  src={post.images?.[0]?.trim()}
                  alt={post.title || 'Related article thumbnail'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#6B7280] mt-2">
                  <FiCalendar className="w-3 h-3 text-[#0F766E]" />
                  <span>{formatDate(post.created_at)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#6B7280] py-3 text-center">
          No related articles found.
        </p>
      )}
    </div>
  );
};

export default RelatedPosts;

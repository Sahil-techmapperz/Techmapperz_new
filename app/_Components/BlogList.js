import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/app/lib/dateFormat';
import PaginationButtons from './PaginationButtons';
import getallblogs from '@/lib/getallblogs';
import { FiCalendar, FiUser, FiArrowRight, FiFileText } from 'react-icons/fi';

const BlogList = async ({ page }) => {
  const pageNum = Number(page) || 1;
  const data = await getallblogs(pageNum, 6);
  const { blogPosts = [], totalPages = 1 } = data || {};

  return (
    <div className="w-full">
      {blogPosts && blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const authorName = post.author?.name || 'Techmapperz Team';
            const categoryName = post.category || 'Technology';
            const rawExcerpt = post.description || post.content || '';
            const cleanExcerpt = rawExcerpt.replace(/<[^>]*>?/gm, '').slice(0, 120).trim();

            return (
              <article
                key={post._id}
                className="group flex flex-col bg-white rounded-2xl border border-[#DDE3EA] hover:border-[#1656B8]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                {/* Image Header with Category & Date Overlays */}
                <div className="relative w-full h-52 sm:h-56 bg-[#F6F8FB] overflow-hidden">
                  <Image
                    src={post.images?.[0]?.trim() || '/placeholder-image.jpg'}
                    alt={post.title || 'Blog article header'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 pointer-events-none" />

                  {/* Floating Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0F766E] border border-[#0F766E]/20 shadow-sm">
                      {categoryName}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-white bg-[#0C2E60]/85 backdrop-blur-md shadow-sm">
                    <FiCalendar className="w-3.5 h-3.5 text-[#5EEAD4]" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* Author Line */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4B5563] mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E8F5F3] text-[#0F766E] flex items-center justify-center text-[10px] font-bold">
                      {authorName.charAt(0).toUpperCase()}
                    </span>
                    <span className="truncate">{authorName}</span>
                  </div>

                  {/* Title (H3 per Style Guide: 19-20px desktop, 18px mobile, bold, #0C2E60) */}
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors line-clamp-2 leading-[1.25] tracking-tight mb-2.5">
                    <Link href={`/blog/${post._id}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt Body */}
                  <p className="text-[15px] font-normal text-[#4B5563] leading-[1.65] line-clamp-3 mb-5 flex-grow">
                    {cleanExcerpt ? `${cleanExcerpt}...` : 'Explore the full methodology and practical technical workflow in this article.'}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-3.5 border-t border-[#DDE3EA] flex items-center justify-between mt-auto">
                    <Link
                      href={`/blog/${post._id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1656B8] group-hover:text-[#0C2E60] transition-colors"
                    >
                      <span>Read Article</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <span className="text-xs font-medium text-[#6B7280]">
                      {Array.isArray(post.comments) ? `${post.comments.length} comments` : ''}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-20 px-4 bg-white border border-[#DDE3EA] rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#0F766E] mb-4">
            <FiFileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#0C2E60] mb-2">No Articles Found</h3>
          <p className="text-[#4B5563] text-sm max-w-md mb-6">
            We couldn't find any articles matching your query. Check back soon for fresh technical updates or browse our archives.
          </p>
          <Link
            href="/blog?page=1"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-[#1656B8] hover:bg-[#0C2E60] transition-colors shadow-sm"
          >
            View All Articles
          </Link>
        </div>
      )}

      {blogPosts && blogPosts.length > 0 && (
        <PaginationButtons page={pageNum} totalPages={totalPages} />
      )}
    </div>
  );
};

export default BlogList;

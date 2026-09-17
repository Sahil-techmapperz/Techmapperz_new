import { formatDate, formatDateTime } from '@/app/lib/dateFormat';
import Image from 'next/image';
import BlogImage from './BlogImage';
import CommentForm from './CommentForm';
import { FiCalendar, FiUser, FiTag, FiMessageSquare } from 'react-icons/fi';

const SinglePost = ({ post }) => {
  if (!post) {
    return <p className="text-center text-gray-500 py-12">Post not found</p>;
  }

  const authorName = post.author?.name || "Techmapperz Specialist";
  const categoryName = post.category || "Technology";
  const commentCount = Array.isArray(post.comments) ? post.comments.length : 0;

  return (
    <article className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-8 md:p-10 shadow-sm text-[#17202A]">
      <div className="w-full">
        {/* Main Post Media & Header */}
        <div className="mb-10">
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 text-[11px] font-bold uppercase tracking-wider">
              <FiTag className="w-3 h-3" />
              <span>{categoryName}</span>
            </span>
            <div className="flex items-center gap-1.5 text-[#4B5563]">
              <FiUser className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#4B5563]">
              <FiCalendar className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>{formatDate(post.created_at)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#4B5563]">
              <FiMessageSquare className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>{commentCount} Comments</span>
            </div>
          </div>

          {/* Article H1: 34-40px bold #0C2E60 */}
          <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#0C2E60] mb-6 tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          {/* Featured Hero Image */}
          {post.images?.[0] && (
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] mb-8 rounded-2xl overflow-hidden border border-[#DDE3EA] bg-[#F6F8FB]">
              <BlogImage 
                src={post.images[0].trim()} 
                alt={post.title || 'Blog post feature image'} 
                fill
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 900px" 
                priority 
              />
            </div>
          )}

          {/* Article Body Content */}
          <div 
            className="blog-content prose max-w-none text-[16px] sm:text-[17px] text-[#334155] leading-[1.75] space-y-5 font-normal"
            dangerouslySetInnerHTML={{ __html: post.maincontent || post.content || '' }} 
          />
        </div>

        {/* Comments Section */}
        <section aria-label="Comments" className="mt-12 pt-8 border-t border-[#DDE3EA]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0C2E60]">
              Discussion ({commentCount})
            </h2>
            <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider bg-[#E8F5F3] px-3 py-1 rounded-full">
              Verified Feedback
            </span>
          </div>

          <div className="space-y-4 mb-8">
            {Array.isArray(post.comments) && post.comments.length > 0 ? (
              post.comments.map(com => (
                <div key={com._id} className="p-4 sm:p-5 bg-[#F6F8FB] border border-[#DDE3EA] rounded-xl text-[#17202A]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#1656B8] rounded-full text-center text-white flex items-center justify-center text-base font-bold shadow-sm">
                      {com.name ? com.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <div className="font-bold text-[#0C2E60] text-sm sm:text-base">{com.name}</div>
                      <div className="text-xs text-[#6B7280]">{formatDateTime(com.created_at)}</div>
                    </div>
                  </div>
                  <div className="ml-13 text-sm text-[#4B5563] leading-relaxed">
                    {com.content}
                  </div>
                  {com.replies && com.replies.length > 0 && (
                    <div className="ml-10 mt-3 space-y-3 border-l-2 border-[#DDE3EA] pl-4">
                      {com.replies.map(reply => (
                        <div key={reply._id} className="pt-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-xs text-[#0C2E60]">{reply.name}</span>
                            <span className="text-[10px] text-[#6B7280]">{formatDateTime(reply.created_at)}</span>
                          </div>
                          <p className="text-xs text-[#4B5563]">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[#6B7280] text-sm py-4 italic">
                No comments yet. Be the first to share your thoughts or questions about this article!
              </p>
            )}
          </div>

          <CommentForm postId={post._id} />
        </section>
      </div>
    </article>
  );
};

export default SinglePost;

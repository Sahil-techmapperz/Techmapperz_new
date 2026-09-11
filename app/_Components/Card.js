import Image from "next/image";
import blogWatermark from "@/public/Photos/blog_watermark.webp"; 
import { CalendarIcon, LinkedInIcon, RedditIcon, QuoraIcon, TwitterIcon } from "./SocialIcons"; 
import Link from "next/link";

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const sansSerifStyle = {
  fontFamily: 'var(--font-primary), "IBM Plex Sans", sans-serif'
};

const Card = ({ post }) => {
  const socialLinks = post.author?.socialLinks || {
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  };

  return (
    <div 
      className="group h-full flex flex-col bg-white text-gray-800 text-left w-full rounded-2xl border border-gray-100 hover:border-[#1267b1]/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
      style={sansSerifStyle}
    >
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-[165px] sm:h-[185px]">
        <Image
          height={100}
          width={130}
          src={blogWatermark}
          className="absolute top-3 right-3 z-20 object-contain opacity-90 drop-shadow-sm"
          alt="Techmapperz" 
        />
        <Image
          src={`${post.images?.[0]?.trim() || '/placeholder-image.jpg'}?tr=w-800,h-500,q-80,f-webp`}
          srcSet={`
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-300,h-200,q-75 300w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-600,h-400,q-75 600w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-800,h-500,q-80 800w
          `}
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 800px"
          width={800}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          alt={post.title || 'Blog post image'}
          loading="lazy"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-60" />
        
        {/* Date Badge */}
        <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-[#0F766E] text-white px-2.5 py-1 rounded-full shadow-sm">
          <CalendarIcon className="text-white text-xs" />
          <span className="font-bold tracking-wider text-white text-[10px] uppercase">
            {formatDate(post.created_at)}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow relative z-10">
        
        {/* Category Pill */}
        <div className="mb-2">
          <span className="inline-block bg-gray-50 border border-gray-150 text-gray-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-colors group-hover:border-[#1656B8]/30">
            {post.category || 'Technology'}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post._id}`} className="group/title flex-grow">
          <h3 className="text-[16px] md:text-[18px] font-bold leading-snug tracking-tight text-[#0C2E60] group-hover/title:text-[#1656B8] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        {/* Separator */}
        <div className="w-full h-[1px] bg-gray-100 my-3" />

        {/* Footer (Socials) */}
        <div className="flex items-center justify-between">
          <span className="text-[#1656B8] text-xs font-bold uppercase tracking-wider">Share</span>
          <div className="flex items-center gap-2">
            <a href={socialLinks?.linkedin || '#'} className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-[#0077b5] hover:bg-gray-100 transition-colors" aria-label="Share on LinkedIn">
              <LinkedInIcon className="text-lg" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-[#ff4500] hover:bg-gray-100 transition-colors" aria-label="Share on Reddit">
              <RedditIcon className="text-lg" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-[#b92b27] hover:bg-gray-100 transition-colors" aria-label="Share on Quora">
              <QuoraIcon className="text-lg" />
            </a>
            <a href={socialLinks?.twitter || '#'} className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-[#1DA1F2] hover:bg-gray-100 transition-colors" aria-label="Share on Twitter">
              <TwitterIcon className="text-lg" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;

import Image from "next/image";
import blogWatermark from "@/public/Photos/blog_watermark.webp"; 
import { FaTwitter, FaLinkedinIn, FaRedditAlien, FaCalendarAlt } from 'react-icons/fa';
import { SiQuora } from 'react-icons/si'; 
import Link from "next/link";
import moment from "moment";

const sansSerifStyle = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
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
      <div className="relative overflow-hidden h-[240px]">
        <Image
          height={120}
          width={150}
          src={blogWatermark}
          className="absolute top-4 right-4 z-20 object-contain opacity-90 drop-shadow-md"
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
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#078a86] text-white px-3 py-1.5 rounded-full shadow-md">
          <FaCalendarAlt className="text-white text-xs" />
          <span className="font-bold tracking-wider text-white text-[10px] uppercase">
            {moment(post.created_at).format('DD MMM YYYY')}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        
        {/* Category Pill */}
        <div className="mb-4">
          <span className="inline-block bg-gray-50 border border-gray-150 text-gray-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase transition-colors group-hover:border-[#1267b1]/30">
            {post.category || 'Technology'}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post._id}`} className="group/title flex-grow">
          <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-[#0c2e60] group-hover/title:text-[#1267b1] transition-colors duration-300 line-clamp-3">
            {post.title}
          </h2>
        </Link>
        
        {/* Separator */}
        <div className="w-full h-[1px] bg-gray-100 my-6" />

        {/* Footer (Socials) */}
        <div className="flex items-center justify-between">
          <span className="text-[#1267b1] text-xs font-bold uppercase tracking-wider">Share</span>
          <div className="flex gap-4">
            <a href={socialLinks?.linkedin || '#'} className="text-gray-400 hover:text-[#0077b5] transition-colors" aria-label="Share on LinkedIn">
              <FaLinkedinIn className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors" aria-label="Share on Reddit">
              <FaRedditAlien className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#b92b27] transition-colors" aria-label="Share on Quora">
              <SiQuora className="text-lg" />
            </a>
            <a href={socialLinks?.twitter || '#'} className="text-gray-400 hover:text-[#1DA1F2] transition-colors" aria-label="Share on Twitter">
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;

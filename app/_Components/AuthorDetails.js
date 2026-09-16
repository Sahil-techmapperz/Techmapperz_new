import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const AuthorDetails = ({ author }) => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-[#DDE3EA] shadow-sm text-center">
      <span className="text-[#0F766E] text-[12px] font-bold uppercase tracking-[0.15em] block mb-4">
        ARTICLE CONTRIBUTOR
      </span>
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#0F766E]/20 bg-[#E8F5F3] shadow-sm">
        <Image
          src={author?.picture ?? "/default-avatar.png"}
          alt={author?.name ?? "Author profile picture"}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0C2E60] mb-2">
        {author?.name ?? "Techmapperz Specialist"}
      </h3>
      <p className="text-sm font-normal text-[#4B5563] leading-relaxed mb-5">
        {author?.authorDetails ?? "Geospatial mapping and digital engineering contributor at Techmapperz."}
      </p>
      <div className="flex justify-center items-center gap-3 pt-4 border-t border-[#DDE3EA]">
        {author?.socialLinks?.linkedin && author.socialLinks.linkedin !== '#' && (
          <Link
            href={author.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Author LinkedIn profile"
            className="w-9 h-9 rounded-full bg-[#E8F5F3] hover:bg-[#1656B8] text-[#1656B8] hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <FaLinkedinIn className="text-base" />
          </Link>
        )}
        {author?.socialLinks?.twitter && author.socialLinks.twitter !== '#' && (
          <Link
            href={author.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Author Twitter profile"
            className="w-9 h-9 rounded-full bg-[#E8F5F3] hover:bg-[#1656B8] text-[#1656B8] hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <FaTwitter className="text-base" />
          </Link>
        )}
        {author?.socialLinks?.facebook && author.socialLinks.facebook !== '#' && (
          <Link
            href={author.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Author Facebook profile"
            className="w-9 h-9 rounded-full bg-[#E8F5F3] hover:bg-[#1656B8] text-[#1656B8] hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <FaFacebookF className="text-base" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;

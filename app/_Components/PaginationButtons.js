'use client';

import React from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PaginationButtons = ({ page, totalPages }) => {
  const currentPage = Number(page) || 1;
  const total = Number(totalPages) || 1;
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(total, currentPage + 1);

  if (total <= 1) return null;

  return (
    <nav aria-label="Blog pagination" className="flex justify-center items-center gap-3 mt-10 pt-8 border-t border-[#DDE3EA]">
      {/* Previous Page Button */}
      {currentPage > 1 ? (
        <Link
          href={`/blog?page=${prevPage}`}
          aria-label="Previous Page"
          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 min-h-[42px] rounded-xl font-bold text-sm text-[#0C2E60] bg-white border border-[#DDE3EA] hover:border-[#1656B8] hover:text-[#1656B8] hover:bg-[#F6F8FB] shadow-sm transition-all duration-200"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 min-h-[42px] rounded-xl font-medium text-sm text-gray-400 bg-gray-50 border border-[#DDE3EA] cursor-not-allowed opacity-60"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </span>
      )}

      {/* Page Information Badge */}
      <div className="px-4 py-2 min-h-[42px] flex items-center justify-center rounded-xl bg-[#E8F5F3] border border-[#0F766E]/20 text-[#0C2E60] text-sm font-bold shadow-sm">
        <span>Page <strong className="text-[#0F766E]">{currentPage}</strong> of {total}</span>
      </div>

      {/* Next Page Button */}
      {currentPage < total ? (
        <Link
          href={`/blog?page=${nextPage}`}
          aria-label="Next Page"
          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 min-h-[42px] rounded-xl font-bold text-sm text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-[#1656B8] shadow-sm transition-all duration-200"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 min-h-[42px] rounded-xl font-medium text-sm text-gray-400 bg-gray-50 border border-[#DDE3EA] cursor-not-allowed opacity-60"
        >
          <span className="hidden sm:inline">Next</span>
          <FiChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
};

export default PaginationButtons;

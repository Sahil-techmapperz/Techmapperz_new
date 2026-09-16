'use client';

import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const SearchPosts = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!search.trim()) return;

    setSearching(true);
    setHasSearched(true);
    try {
      const response = await fetch(
        `/api/newblogpost/search/${encodeURIComponent(search.trim())}`
      );
      const result = await response.json();
      setSearchResults(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '';
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl border border-[#DDE3EA] shadow-sm">
      <span className="text-[#0F766E] text-[12px] font-bold uppercase tracking-[0.15em] block mb-1">
        SEARCH ARCHIVES
      </span>
      <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0C2E60] mb-4">
        Search Insights
      </h3>

      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={search}
          placeholder="Search by topic, drone, GIS..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-4 pr-12 py-3 text-sm rounded-xl bg-[#F6F8FB] border border-[#DDE3EA] text-[#17202A] placeholder-[#6B7280] focus:bg-white focus:border-[#1656B8] focus:ring-2 focus:ring-[#1656B8]/15 outline-none transition-all duration-200"
        />
        <button
          type="submit"
          aria-label="Search articles"
          disabled={searching}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#1656B8] hover:bg-[#0C2E60] text-white flex items-center justify-center transition-all duration-200 disabled:opacity-50"
        >
          <FiSearch className="w-4 h-4" />
        </button>
      </form>

      {searching && (
        <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#0F766E]">
          <div className="w-3.5 h-3.5 border-2 border-[#0F766E] border-t-transparent rounded-full animate-spin" />
          <span>Scanning articles...</span>
        </div>
      )}

      {hasSearched && !searching && searchResults.length === 0 && (
        <p className="mt-4 text-xs text-[#6B7280]">
          No matching articles found for "{search}". Try searching for keywords like "LiDAR", "Drone", or "GIS".
        </p>
      )}

      {searchResults.length > 0 && (
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#DDE3EA]">
            <span className="text-xs font-bold uppercase text-[#0C2E60]">
              Results ({searchResults.length})
            </span>
            <button
              onClick={() => { setSearchResults([]); setHasSearched(false); setSearch(""); }}
              className="text-[11px] font-semibold text-[#1656B8] hover:underline"
            >
              Clear
            </button>
          </div>

          {searchResults.map((result) => (
            <Link
              key={result._id}
              href={`/blog/${result._id}`}
              className="group block p-3 rounded-xl border border-[#DDE3EA] hover:border-[#1656B8]/40 hover:bg-[#F6F8FB] transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                {result.images?.[0] && (
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-[#F6F8FB] border border-[#DDE3EA]">
                    <Image
                      src={result.images[0]}
                      alt={result.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="64px"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0C2E60] group-hover:text-[#1656B8] transition-colors line-clamp-2 leading-snug">
                    {result.title}
                  </h4>
                  {result.created_at && (
                    <div className="flex items-center gap-1 text-[11px] text-[#6B7280] mt-1.5">
                      <FiCalendar className="w-3 h-3 text-[#0F766E]" />
                      <span>{formatDate(result.created_at)}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPosts;

'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const SearchPosts = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!search.trim()) return;

    setSearching(true);
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
      return isNaN(d.getTime()) ? '' : d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  return (
    <div className="mb-4 p-5 shadow-lg rounded-xl bg-white border border-gray-100">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Search Here</h2>
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={search}
          placeholder="Search by title"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pr-12 pl-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1656b8] focus:border-transparent transition-all"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-[#1656b8] transition-colors rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>

      {searching && <p className="mt-4 text-sm text-gray-500 animate-pulse">Searching...</p>}

      <div className="mt-5 space-y-4">
        {searchResults.length > 0 && (
          <h3 className="text-lg font-bold text-gray-800">Search Results</h3>
        )}
        {searchResults.length > 0 &&
          searchResults.map((result) => (
            <div key={result._id} className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <Link href={`/blog/${result._id}`} className="text-base font-semibold text-gray-900 hover:text-[#1656b8] transition-colors block">
                {result.title}
              </Link>
              <div className="flex items-center mt-2.5 gap-4">
                {result.images?.[0] && (
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={result.images[0]}
                      alt={result.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                )}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs text-gray-400 mb-1">
                    {formatDate(result.created_at)}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {result.content?.slice(0, 100) + "..."}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPosts;

'use client';

import React, { useState } from 'react';
import { FaReact, FaJava } from 'react-icons/fa';
import {
  SiAndroid,
  SiApple,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiDart,
  SiFirebase,
  SiGoogleplay,
  SiAppstore,
  SiExpo,
  SiMapbox,
  SiSqlite,
} from 'react-icons/si';

const techItems = [
  // Mobile OS
  { category: 'Mobile OS', label: 'Android OS', sub: 'Native Android SDK', icon: SiAndroid, color: '#3DDC84' },
  { category: 'Mobile OS', label: 'Apple iOS', sub: 'iPhone & iPadOS', icon: SiApple, color: '#111827' },

  // Frameworks
  { category: 'Frameworks', label: 'Flutter', sub: 'Cross-Platform Mobile UI', icon: SiFlutter, color: '#02569B' },
  { category: 'Frameworks', label: 'React Native', sub: 'Shared Codebase Mobile App', icon: FaReact, color: '#61DAFB' },
  { category: 'Frameworks', label: 'Expo', sub: 'React Native Ecosystem', icon: SiExpo, color: '#111827' },

  // Languages
  { category: 'Languages', label: 'Kotlin', sub: 'Primary Android Language', icon: SiKotlin, color: '#7F52FF' },
  { category: 'Languages', label: 'Swift', sub: 'Primary Apple iOS Language', icon: SiSwift, color: '#F05138' },
  { category: 'Languages', label: 'Dart', sub: 'Flutter Engine Language', icon: SiDart, color: '#0175C2' },
  { category: 'Languages', label: 'Java', sub: 'Android Native Codebase', icon: FaJava, color: '#E76F00' },

  // Services & Release
  { category: 'Services & Release', label: 'Firebase', sub: 'FCM Push, Auth & Crashlytics', icon: SiFirebase, color: '#FFCA28' },
  { category: 'Services & Release', label: 'SQLite', sub: 'Offline Local App Storage', icon: SiSqlite, color: '#003B57' },
  { category: 'Services & Release', label: 'Mapbox Mobile', sub: 'GPS & Location SDK', icon: SiMapbox, color: '#4264FB' },
  { category: 'Services & Release', label: 'Google Play', sub: 'Play Store Distribution', icon: SiGoogleplay, color: '#01875F' },
  { category: 'Services & Release', label: 'App Store', sub: 'Apple App Store Release', icon: SiAppstore, color: '#0D96F6' },
];

const categories = ['All', 'Mobile OS', 'Frameworks', 'Languages', 'Services & Release'];

export default function TechnologyFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full max-w-[1250px] mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#0c2e60] border-[#0c2e60] text-white shadow-md'
                : 'bg-white border-gray-200 text-[#0c2e60] hover:border-[#0c2e60] hover:bg-[#0c2e60]/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Mobile Tech Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 text-left">
        {filteredItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#6ac045]/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5 cursor-default"
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shrink-0 shadow-xs"
              >
                <IconComponent
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                  style={{ color: item.color }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[#6ac045] text-[10px] font-bold uppercase tracking-wider block leading-tight">
                  {item.category}
                </span>
                <h4 className="font-bold text-[#0c2e60] text-sm sm:text-[15px] leading-tight truncate mt-0.5">
                  {item.label}
                </h4>
                <p className="text-gray-500 text-[11px] leading-tight truncate mt-1">
                  {item.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

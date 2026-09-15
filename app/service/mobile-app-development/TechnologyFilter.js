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
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[#1656B8] border-[#1656B8] text-white shadow-sm'
                : 'bg-white border-[#DDE3EA] text-[#0C2E60] hover:border-[#1656B8] hover:bg-[#1656B8]/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Mobile Tech Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 text-left">
        {filteredItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group bg-white p-4 rounded-xl border border-[#DDE3EA] shadow-xs hover:shadow-md hover:border-[#1656B8]/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3 cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#F6F8FB] flex items-center justify-center border border-[#DDE3EA] group-hover:scale-105 group-hover:bg-white group-hover:border-[#1656B8]/20 transition-all duration-200 shrink-0"
              >
                <IconComponent
                  className="w-5 h-5 transition-transform duration-200"
                  style={{ color: item.color }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[#0F766E] text-[10px] font-bold uppercase tracking-wider block leading-tight">
                  {item.category}
                </span>
                <h4 className="font-bold text-[#0C2E60] text-sm leading-tight truncate mt-0.5 group-hover:text-[#1656B8] transition-colors">
                  {item.label}
                </h4>
                <p className="text-[#4B5563] text-[11px] leading-tight truncate mt-1">
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

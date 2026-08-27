'use client';

import React, { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaCreditCard 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb 
} from 'react-icons/si';
import { 
  FiCode, 
  FiBarChart2, 
  FiMap, 
  FiDatabase, 
  FiNavigation 
} from 'react-icons/fi';

const techItems = [
  // Frontend
  { category: 'Frontend', label: 'React', sub: 'Interactive UI Components', icon: FaReact, color: '#61DAFB' },
  { category: 'Frontend', label: 'Next.js', sub: 'Server-Side Rendering & App Router', icon: SiNextdotjs, color: '#000000' },
  { category: 'Frontend', label: 'JavaScript (ES6+)', sub: 'Dynamic Frontend Logic', icon: SiJavascript, color: '#F7DF1E' },
  { category: 'Frontend', label: 'Tailwind CSS', sub: 'Utility-First Modern Styling', icon: SiTailwindcss, color: '#06B6D4' },
  
  // Backend
  { category: 'Backend', label: 'Node.js', sub: 'Fast Asynchronous Server Runtime', icon: FaNodeJs, color: '#339933' },
  { category: 'Backend', label: 'PHP', sub: 'Robust Server Scripting & CMS', icon: FaPhp, color: '#777BB4' },
  
  // Data
  { category: 'Data', label: 'MySQL', sub: 'Relational Database System', icon: SiMysql, color: '#4479A1' },
  { category: 'Data', label: 'MongoDB', sub: 'Flexible Document Database', icon: SiMongodb, color: '#47A248' },
  
  // Integration
  { category: 'Integration', label: 'REST / API', sub: 'Seamless Third-Party Integrations', icon: FiCode, color: '#E0234E' },
  { category: 'Integration', label: 'Payment Gateways', sub: 'Secure Checkout Integrations', icon: FaCreditCard, color: '#0A85EA' },
  { category: 'Integration', label: 'Analytics', sub: 'Traffic & Conversion Tracking', icon: FiBarChart2, color: '#F4B400' },
  
  // Specialised Capability
  { category: 'Specialised', label: 'Web GIS', sub: 'Interactive Map Applications', icon: FiMap, color: '#1656b8' },
  { category: 'Specialised', label: 'Spatial Databases', sub: 'Geo-enabled Data Queries', icon: FiDatabase, color: '#6ac045' },
  { category: 'Specialised', label: 'Map Apps', sub: 'Custom Location Workflows', icon: FiNavigation, color: '#d2292b' }
];

const categories = ['All', 'Frontend', 'Backend', 'Data', 'Integration', 'Specialised'];

export default function WebTechFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full max-w-[1100px] mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[#1656b8] border-[#1656b8] text-white shadow-sm'
                : 'bg-white/10 border-white/15 text-white/80 hover:bg-white/20 hover:text-white'
            }`}
          >
            {cat === 'Specialised' ? 'Specialised Capability' : cat}
          </button>
        ))}
      </div>

      {/* Compact Grid of Icon Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5 sm:gap-3">
        {filteredItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-xs hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center text-center gap-1.5 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-white transition-all duration-200">
                <IconComponent 
                  className="w-5 h-5 transition-colors duration-200 group-hover:!text-[#0c2e60]" 
                  style={{ color: item.color || '#ffffff' }} 
                />
              </div>
              <span className="font-semibold text-white/90 text-[12px] leading-tight group-hover:text-white transition-colors truncate w-full px-1">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

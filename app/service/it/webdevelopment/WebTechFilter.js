'use client';

import React, { useState } from 'react';

const techItems = [
  // Frontend
  { category: 'Frontend', label: 'React', sub: 'Interactive UI Components' },
  { category: 'Frontend', label: 'Next.js', sub: 'Server-Side Rendering & App Router' },
  { category: 'Frontend', label: 'JavaScript (ES6+)', sub: 'Dynamic Frontend Logic' },
  { category: 'Frontend', label: 'Tailwind CSS', sub: 'Utility-First Modern Styling' },
  
  // Backend
  { category: 'Backend', label: 'Node.js', sub: 'Fast Asynchronous Server Runtime' },
  { category: 'Backend', label: 'PHP', sub: 'Robust Server Scripting & CMS' },
  
  // Data
  { category: 'Data', label: 'MySQL', sub: 'Relational Database System' },
  { category: 'Data', label: 'MongoDB', sub: 'Flexible Document Database' },
  
  // Integration
  { category: 'Integration', label: 'REST / API', sub: 'Seamless Third-Party Integrations' },
  { category: 'Integration', label: 'Payment Gateways', sub: 'Secure Checkout Integrations' },
  { category: 'Integration', label: 'Analytics', sub: 'Traffic & Conversion Tracking' },
  
  // Specialised Capability
  { category: 'Specialised', label: 'Web GIS', sub: 'Interactive Map Applications' },
  { category: 'Specialised', label: 'Spatial Databases', sub: 'Geo-enabled Data Queries' },
  { category: 'Specialised', label: 'Map Apps', sub: 'Custom Location Workflows' }
];

const categories = ['All', 'Frontend', 'Backend', 'Data', 'Integration', 'Specialised'];

export default function WebTechFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#0c2e60] border-[#0c2e60] text-white shadow-md'
                : 'bg-white border-gray-200 text-[#0c2e60] hover:border-[#0c2e60] hover:bg-[#0c2e60]/5'
            }`}
          >
            {cat === 'Specialised' ? 'Specialised Capability' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#6ac045] text-[10px] font-bold uppercase tracking-wider block mb-2">
                {item.category}
              </span>
              <h4 className="font-extrabold text-[#0c2e60] text-base leading-tight mb-1">
                {item.label}
              </h4>
            </div>
            <p className="text-gray-500 text-xs mt-3 leading-normal border-t border-gray-50 pt-2 font-medium">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

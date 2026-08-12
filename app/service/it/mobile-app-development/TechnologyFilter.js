'use client';

import React, { useState } from 'react';

const techItems = [
  { category: 'Mobile', label: 'Android Native', sub: 'Kotlin / Java' },
  { category: 'Mobile', label: 'iOS Native', sub: 'Swift' },
  { category: 'Mobile', label: 'Cross-Platform', sub: 'Flutter / React Native' },
  { category: 'Backend', label: 'REST APIs', sub: 'FastAPI / Node.js' },
  { category: 'Backend', label: 'GraphQL', sub: 'Apollo / Schema Design' },
  { category: 'Backend', label: 'App Backend', sub: 'Python / Express' },
  { category: 'Backend', label: 'Databases', sub: 'PostgreSQL / MongoDB' },
  { category: 'Backend', label: 'Authentication', sub: 'OAuth / JWT / Auth0' },
  { category: 'Capabilities', label: 'Firebase', sub: 'Firestore / Cloud Functions' },
  { category: 'Capabilities', label: 'Analytics', sub: 'Google Analytics / Mixpanel' },
  { category: 'Capabilities', label: 'Notifications', sub: 'FCM Push Notifications' },
  { category: 'Capabilities', label: 'GIS & Maps', sub: 'Mapbox / Google Maps SDK' }
];

const categories = ['All', 'Mobile', 'Backend', 'Capabilities'];

export default function TechnologyFilter() {
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
            {cat}
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

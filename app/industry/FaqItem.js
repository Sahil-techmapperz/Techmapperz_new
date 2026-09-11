'use client';

import React, { useState } from 'react';

export default function FaqItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-start justify-between gap-4 group">
        <span className="text-[#0c2e60] font-semibold text-sm md:text-base leading-snug group-hover:text-[#1656b8] transition-colors">{faq.q}</span>
        <span className={`text-[#1656b8] font-bold text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed pb-5">{faq.a}</p>}
    </div>
  );
}

'use client';

import React, { useState } from 'react';

export default function FaqItem({ faq, defaultOpen = false, theme = "dark" }) {
  const [open, setOpen] = useState(defaultOpen);

  if (theme === "dark") {
    return (
      <div className="border-b border-white/15">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left py-4 md:py-5 flex items-start justify-between gap-4 group"
          aria-expanded={open}
        >
          <span className="text-white font-semibold text-[15px] sm:text-base leading-snug group-hover:text-[#5EEAD4] transition-colors">
            {faq.q}
          </span>
          <span className={`text-[#5EEAD4] font-bold text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 leading-none ${open ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
        {open && (
          <p className="text-[#E8F5F3] text-[14px] sm:text-[15px] leading-relaxed pb-5 font-normal">
            {faq.a}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="border-b border-[#DDE3EA]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 md:py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="text-[#0C2E60] font-semibold text-[15px] sm:text-base leading-snug group-hover:text-[#1656B8] transition-colors">
          {faq.q}
        </span>
        <span className={`text-[#1656B8] font-bold text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 leading-none ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-relaxed pb-5 font-normal">
          {faq.a}
        </p>
      )}
    </div>
  );
}

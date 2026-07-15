const fs = require('fs');
const html = fs.readFileSync('e:/Techmapperz_site/development/creare.html', 'utf8');

const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
if (mainMatch) {
  let mainContent = mainMatch[1];
  
  // Basic JSX conversions
  mainContent = mainContent.replace(/class=/g, 'className=');
  mainContent = mainContent.replace(/stroke-width=/g, 'strokeWidth=');
  mainContent = mainContent.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  mainContent = mainContent.replace(/font-size=/g, 'fontSize=');
  mainContent = mainContent.replace(/font-weight=/g, 'fontWeight=');
  
  // Convert styles
  mainContent = mainContent.replace(/style="([^"]+)"/g, (match, styles) => {
    const parts = styles.split(';');
    const styleObj = {};
    parts.forEach(part => {
      if (!part.trim()) return;
      let [key, ...valParts] = part.split(':');
      let value = valParts.join(':');
      if (!key || !value) return;
      key = key.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
      styleObj[key] = value.trim();
    });
    return 'style={{ ' + Object.entries(styleObj).map(([k, v]) => k + ': \'' + v + '\'').join(', ') + ' }}';
  });

  // Close unclosed tags
  mainContent = mainContent.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  mainContent = mainContent.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
  mainContent = mainContent.replace(/<br>/g, '<br />');
  mainContent = mainContent.replace(/<hr>/g, '<hr />');
  
  // Remove !important from styles if they were accidentally kept in CSS strings (not applicable for inline usually but just in case)
  
  // Create React Component
  const component = `"use client";

import React from 'react';
import Link from 'next/link';
import './career.css';

export default function CareerPageClient() {
  return (
    <div className="career-page-wrapper">
      ${mainContent}
    </div>
  );
}
`;

  fs.writeFileSync('e:/Techmapperz_site/development/app/career/CareerPageClient.js', component);
  console.log('CareerPageClient.js created successfully');
}

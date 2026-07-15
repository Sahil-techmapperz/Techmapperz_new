const fs = require('fs');
const html = fs.readFileSync('e:/Techmapperz_site/development/techmapperz-contact-us-page-preview.html', 'utf8');

const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
if (mainMatch) {
  let mainContent = mainMatch[1];
  
  // Basic JSX conversions
  mainContent = mainContent.replace(/class=/g, 'className=');
  mainContent = mainContent.replace(/stroke-width=/g, 'strokeWidth=');
  mainContent = mainContent.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  
  // Close inputs and other self-closing tags if necessary
  mainContent = mainContent.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  
  // Create React Component
  const component = `"use client";

import React from 'react';
import Link from 'next/link';
import './contact.css';

export default function ContactPageClient() {
  return (
    <div className="contact-page-wrapper">
      ${mainContent}
    </div>
  );
}
`;

  fs.writeFileSync('e:/Techmapperz_site/development/app/contact/ContactPageClient.js', component);
  console.log('ContactPageClient.js created successfully');
}

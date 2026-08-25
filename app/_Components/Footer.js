'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPinterest, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Gotop from './Gotop';
import Image from 'next/image';
import company_logo from "@/public/logo.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus('Please enter an email address');
      return;
    }
    setIsSubscribing(true);
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubscribeStatus(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setSubscribeStatus(data.error || data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setSubscribeStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/career' },
    { label: 'Contact', href: '/contact' },
  ];
  const resourceLinks = [
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Portfolio', href: '/portfolios' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  const socials = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/techmapperz/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/techmapperz/', label: 'Instagram' },
    { icon: <BsTwitterX />, href: 'https://x.com/Techmapperzllp', label: 'Twitter' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/techmapperz', label: 'Facebook' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q', label: 'YouTube' },
  ];

  return (
    <>
      <footer
        className="w-full relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0a1f40 0%, #0c2e60 50%, #0d3875 100%)' }}
        role="contentinfo"
      >
        {/* Decorative Blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #e33434, transparent)' }} />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 md:pt-12 pb-6 md:pb-8">

          {/* Top Row — Brand + Nav + Resources + Newsletter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">

            {/* Col 1 — Brand */}
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-3.5 sm:gap-4">
              <Link href="/" className="inline-block bg-white rounded-xl px-3 py-2 shadow-md hover:shadow-lg transition-shadow" style={{ width: 'fit-content' }}>
                <Image
                  src={company_logo}
                  alt="Techmapperz"
                  width={180}
                  height={45}
                  className="h-auto w-auto max-h-[45px] object-contain"
                  priority
                />
              </Link>
              <p className="text-xs sm:text-sm leading-relaxed sm:leading-6 max-w-full sm:max-w-[280px]" style={{ color: '#a8c4e8' }}>
                Techmapperz is an India-based geospatial company delivering GIS data production, drone surveys, LiDAR processing and Web & App development.
              </p>

            </div>

            {/* Col 2 — Company Links */}
            <div className="col-span-1">
              <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3.5 sm:mb-4 relative pb-2 sm:pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#e33434] after:rounded-full">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-xs sm:text-sm transition-all duration-200"
                      style={{ color: '#a8c4e8' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e33434] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200 inline-block">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Resources Links */}
            <div className="col-span-1">
              <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3.5 sm:mb-4 relative pb-2 sm:pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#e33434] after:rounded-full">
                Resources
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {resourceLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-xs sm:text-sm transition-all duration-200"
                      style={{ color: '#a8c4e8' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e33434] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200 inline-block">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-3.5 sm:mb-4 relative pb-2 sm:pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#e33434] after:rounded-full">
                Stay Updated
              </h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed" style={{ color: '#a8c4e8' }}>
                Get GIS, drone and mapping insights delivered to your inbox.
              </p>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe(e)}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribing}
                  className="w-full py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #e33434, #c22020)' }}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe →'}
                </button>
              </div>

              {subscribeStatus && (
                <p className={`mt-2 text-xs font-medium ${subscribeStatus.toLowerCase().includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {subscribeStatus}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 sm:mt-8 mb-4 sm:mb-5" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

          {/* Bottom Row — Socials + Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 sm:pr-16 md:pr-20">

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center items-center gap-2.5">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs sm:text-sm transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#a8c4e8', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#e33434'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#e33434'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#a8c4e8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-center sm:text-right" style={{ color: '#7a9bc4' }}>
              © {currentYear} <span className="text-white font-semibold">Techmapperz</span>. All Rights Reserved.
            </p>
          </div>
        </div>

        <Gotop />
      </footer>
    </>
  );
};

export default Footer;

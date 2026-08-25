"use client"; // Add this directive at the top

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaPhoneAlt, FaInstagram, FaEnvelope, FaLinkedinIn, FaYoutube, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';

import company_logo from "@/public/logo.png"
import Resources from './Resources';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const btnRef = useRef(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const pathname = usePathname();



  const sections = [
    {
      title: 'Geospatial Services',
      items: [
        { name: 'GIS Services', link: '/service/gisservice' },
        { name: 'Drone Survey & Mapping', link: '/service/droneservice' },
        { name: 'LiDAR & 3D Modeling', link: '/service/lidar' },
      ],
    },
    {
      title: 'IT & Digital Services',
      items: [
        { name: 'Website Development', link: '/service/it/webdevelopment' },
        { name: 'Mobile App Development', link: '/service/mobile-app-development' },
      ],
    },
  ];

  const Industrysections = [
    {
      // title: 'Industry Expertise',
      title: '',
      items: [
        { name: 'E-commerce', link: '/industry/e-commerce' },
        { name: 'Education & E-Learning', link: '/industry/education-e-learning' },
        { name: 'Government And public Sector', link: '/industry/government-public-sector' },
        { name: 'Health Care', link: '/industry/healthcare' },
      ],
    },
    {
      // title: 'Industry Expertise',
      title: '',
      items: [
        { name: 'Logistic & Supply Chain', link: '/industry/logistics-supply-chain' },
        { name: 'Manufacturing', link: '/industry/manufacturing' },
        { name: 'Retail', link: '/industry/retail' },
        { name: 'Travel & Hospitality', link: '/industry/travel-hospitality' },
      ],
    },
  ];


  const sections2 = [
    {
      title: 'Blogs & Articles',
      items: [
        { name: 'Latest Blogs', link: '/blog?page=1' },
      ],
    },
    {
      title: 'Company Events',
      items: [
        { name: 'Events & News', link: '/events' },
      ],
    },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-[200] flex flex-col">
        {/* Top Info Bar */}
        {/* <div className="bg-[#0c2e60] text-white text-[10px] sm:text-[11px] md:text-xs py-1.5 sm:py-2 px-3 sm:px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 font-medium z-[201] text-center md:text-left">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5">
            <span className="opacity-95 whitespace-nowrap">GIS-first technology company</span>
            <span className="opacity-50">|</span>
            <span className="opacity-80 whitespace-nowrap">Kolkata &amp; New Delhi, India</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <a href="mailto:info@techmapperz.com" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              info@techmapperz.com
            </a>
            <span className="opacity-50">|</span>
            <a href="tel:+919643002065" className="hover:text-gray-300 transition-colors whitespace-nowrap">
              +91 96430 02065
            </a>
          </div>
        </div> */}

        {/* Main Navbar */}
        <div className="w-full bg-white shadow-sm border-b border-gray-150 transition-transform duration-300">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-3 flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={company_logo}
                  alt="company logo"
                  priority
                  width={180}
                  className="h-auto w-auto max-h-[45px] object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center flex-grow">
              <ul className="list-none flex items-center gap-6 lg:gap-8">
                {/* Home */}
                <li className="relative text-center">
                  <Link
                    href="/"
                    className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${pathname === '/' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Services Dropdown */}
                <Resources
                  sections={sections}
                  title="Services"
                  subtitle="Enterprise GIS mapping, drone surveys, LiDAR data processing, and custom digital web & mobile applications."
                  link="/service"
                  isActive={pathname.startsWith('/service')}
                />

                {/* Industries Link */}
                <li className="relative text-center">
                  <Link
                    href="/industry"
                    className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${pathname.startsWith('/industry') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      }`}
                  >
                    Industries
                  </Link>
                </li>

                {/* Projects */}
                <li className="relative text-center">
                  <Link
                    href="/portfolios"
                    className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${pathname === '/portfolios' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      }`}
                  >
                    Projects
                  </Link>
                </li>

                {/* Insights Dropdown */}
                <Resources
                  sections={sections2}
                  title="Insights"
                  subtitle="Explore valuable insights, blogs, and company events on IT and GIS solutions."
                  link="/blog?page=1"
                  isActive={pathname.startsWith('/blog') || pathname === '/events'}
                />

                {/* About */}
                <li className="relative text-center">
                  <Link
                    href="/about"
                    className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${pathname === '/about' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      }`}
                  >
                    About
                  </Link>
                </li>

                {/* Contact */}
                <li className="relative text-center">
                  <Link
                    href="/contact"
                    className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${pathname === '/contact' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Far Right Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/portfolios"
                className="px-5 py-2 rounded-xl border border-[#0c2e60] text-[#0c2e60] font-bold text-sm hover:bg-[#0c2e60]/5 transition-colors whitespace-nowrap"
              >
                View Work
              </Link>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-5 py-2 rounded-xl bg-[#d2292b] hover:bg-[#b01e20] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Discuss Your Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={btnRef}
              onClick={onOpen}
              className="block text-black md:hidden text-3xl cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
              type="button"
            >
              {!isOpen && <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-[1100] bg-black bg-opacity-50">
            <div className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 p-6 flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={onClose}
                  className="text-black text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-100 rounded-full"
                  aria-label="Close navigation menu"
                  type="button"
                >
                  ✖
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-6 text-[#0c2e60] font-semibold text-lg" aria-label="Mobile navigation">
                <Link href="/" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Home
                </Link>
                <Link href="/service" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Services
                </Link>
                <Link href="/industry" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Industries
                </Link>
                <Link href="/portfolios" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Projects
                </Link>
                <Link href="/blog?page=1" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Insights
                </Link>
                <Link href="/about" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  About
                </Link>
                <Link href="/contact" onClick={onClose} className="hover:text-[#d2292b] transition-colors py-1">
                  Contact
                </Link>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto mb-8">
                {/* <Link
                  href="/portfolios"
                  onClick={onClose}
                  className="w-full text-center py-2.5 rounded-xl border border-[#0c2e60] text-[#0c2e60] font-bold text-sm"
                >
                  View Work
                </Link> */}
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(true);
                    onClose();
                  }}
                  className="w-full text-center py-2.5 rounded-xl bg-[#d2292b] text-white font-bold text-sm shadow-md"
                >
                  Discuss Your Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default Navbar;






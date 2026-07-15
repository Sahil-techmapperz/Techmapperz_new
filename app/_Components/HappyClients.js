"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import Genesys_logo from "@/public/Photos/Genesys_logo.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.webp";
import shrc_logo from "@/public/Photos/Shrc_logo.webp";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.webp";
import NS_logo from "@/public/Photos/NS_logo.webp";
import khanconsultants_logo from "@/public/Photos/khanconsultants_logo.webp";
import new_company_logo from "@/public/Photos/new_company_logo.webp";
import Facalties_online_logo from "@/public/Photos/Facalties_online_logo.webp";
import English_faculties_logo from "@/public/Photos/English_faculties_logo.webp";
import Fabcon_Logo from "@/public/Photos/Fabcon Logo.webp";
import aereo_logo from "@/public/Photos/aereo_logo.webp";
import consortium_logo from "@/public/Photos/consortium_logo.webp";

const Clients = [
  { src: Genesys_logo, alt: "Genesys" },
  { src: Cocreatelab_logo, alt: "CoCreate Labs" },
  { src: manusherghorbari_logo, alt: "Manusher Ghorbari" },
  { src: premierautosource_logo, alt: "Premier Auto Source", style: { filter: "brightness(0)" } },
  { src: whitespreadfoods_logo, alt: "White Spread Foods", style: { filter: "brightness(0.65)" } },
  { src: shrc_logo, alt: "SHRC" },
  { src: NS_logo, alt: "NS" },
  { src: Fabcon_Logo, alt: "Fabcon" },
  { src: khanconsultants_logo, alt: "Khan Consultants" },
  { src: English_faculties_logo, alt: "English Faculties" },
  { src: Facalties_online_logo, alt: "Faculties Online" },
  { src: new_company_logo, alt: "New Company" },
  { src: aereo_logo, alt: "Aereo" },
  { src: consortium_logo, alt: "Consortium" }
];

// Split clients into two rows for dual-direction scrolling
const row1 = Clients.slice(0, Math.ceil(Clients.length / 2));
const row2 = Clients.slice(Math.ceil(Clients.length / 2));

const sansSerifStyle = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const HappyClients = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Row 1: Scroll Left
      gsap.to(".marquee-row-1", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      // Row 2: Scroll Right
      gsap.fromTo(".marquee-row-2", 
        { xPercent: -50 },
        { 
          xPercent: 0,
          ease: "none",
          duration: 35,
          repeat: -1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reusable Logo Card Component
  const LogoCard = ({ client }) => (
    <div className="flex-shrink-0 w-[200px] sm:w-[250px] h-[100px] sm:h-[120px] flex justify-center items-center bg-white border border-gray-150 hover:border-theme-blue/30 transition-all duration-300 shadow-sm hover:shadow-lg px-6 group rounded-2xl">
      <div className="relative w-full h-full max-w-[140px] max-h-[60px] flex justify-center items-center mx-auto my-auto">
        <Image
          className="object-contain transition-transform duration-500 transform group-hover:scale-110"
          src={client.src}
          alt={client.alt}
          fill
          style={client.style}
        />
      </div>
    </div>
  );

  return (
    <section className="relative py-24 bg-white overflow-hidden" ref={containerRef} style={sansSerifStyle}>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#2d5689]/8 to-[#a82123]/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16 text-center">
        
        {/* Trusted By Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase">Trusted By Leaders</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-[54px] font-bold mb-6 tracking-tight leading-tight">
          <span className="text-[#0c2e60]">Our </span>
          <span className="text-[#1267b1]">Happy </span>
          <span className="text-[#e23e57]">Clients</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Empowering disruptive startups and global enterprises across multiple industries to achieve digital excellence.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 (Scrolling Left) */}
        <div className="w-full overflow-visible flex">
          <div className="marquee-row-1 flex gap-6 w-max">
            {[...row1, ...row1, ...row1].map((client, index) => (
              <LogoCard key={`row1-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="w-full overflow-visible flex">
          <div className="marquee-row-2 flex gap-6 w-max">
            {[...row2, ...row2, ...row2].map((client, index) => (
              <LogoCard key={`row2-${index}`} client={client} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HappyClients;

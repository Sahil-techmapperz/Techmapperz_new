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
  { src: premierautosource_logo, alt: "Premier Auto Source" },
  { src: whitespreadfoods_logo, alt: "White Spread Foods" },
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
    <div className="flex-shrink-0 w-[180px] sm:w-[240px] h-[100px] sm:h-[120px] flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 px-4 sm:px-6 group rounded-2xl">
      <div className="relative w-[130px] sm:w-[160px] h-[55px] sm:h-[70px] flex items-center justify-center">
        <Image
          className="object-contain transition-transform duration-500 transform group-hover:scale-105"
          style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,255,255,0.4))' }}
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 768px) 140px, 180px"
        />
      </div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-24 bg-[#0c2e60] overflow-hidden" ref={containerRef} style={sansSerifStyle}>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-10 sm:mb-16 text-center">


        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[54px] font-bold mb-4 sm:mb-6 tracking-tight leading-tight text-white">
          Our Happy Clients
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Empowering disruptive startups and global enterprises across multiple industries to achieve digital excellence.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full flex flex-col gap-6 overflow-hidden">

        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#0c2e60] to-transparent z-20 pointer-events-none"></div>
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#0c2e60] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 (Scrolling Left) */}
        <div className="w-full overflow-visible flex h-[110px] sm:h-[130px] items-center">
          <div className="marquee-row-1 flex items-center gap-6 w-max h-full py-1">
            {[...row1, ...row1, ...row1].map((client, index) => (
              <LogoCard key={`row1-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="w-full overflow-visible flex h-[110px] sm:h-[130px] items-center">
          <div className="marquee-row-2 flex items-center gap-6 w-max h-full py-1">
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

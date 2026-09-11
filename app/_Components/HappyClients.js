import Image from "next/image";


import Genesys_logo from "@/public/Photos/Genesys_logo.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import premierautosource_logo from "@/public/Photos/premierautosource_logo_dark.webp";
import shrc_logo from "@/public/Photos/Shrc_logo.webp";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo_dark.webp";
import NS_logo from "@/public/Photos/NS_logo.webp";
import khanconsultants_logo from "@/public/Photos/khanconsultants_logo_dark.webp";
import new_company_logo from "@/public/Photos/new_company_logo_trans.webp";
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
  fontFamily: 'var(--font-primary), "IBM Plex Sans", sans-serif'
};

const marqueeStyles = `
@keyframes tmMarqueeLeft {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
@keyframes tmMarqueeRight {
  0% { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.tm-marquee-row-1 {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: tmMarqueeLeft 35s linear infinite;
}
.tm-marquee-row-2 {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: tmMarqueeRight 35s linear infinite;
}
.tm-marquee-row-1:hover, .tm-marquee-row-2:hover {
  animation-play-state: paused;
}
`;

const HappyClients = () => {

  // Reusable Logo Card Component with high-contrast white card container
  const LogoCard = ({ client }) => (
    <div className="flex-shrink-0 w-[160px] sm:w-[200px] h-[75px] sm:h-[88px] flex items-center justify-center bg-white rounded-xl shadow-sm border border-[#DDE3EA] hover:shadow-md hover:scale-[1.02] transition-all duration-300 px-3 sm:px-5 group">
      <div className="relative w-[115px] sm:w-[145px] h-[40px] sm:h-[50px] flex items-center justify-center">
        <Image
          className="object-contain transition-transform duration-300 transform group-hover:scale-105"
          src={client.src}
          alt={client.alt}
          fill
          sizes="(max-width: 768px) 120px, 160px"
        />
      </div>
    </div>
  );

  return (
    <section className="relative py-4 md:py-10 bg-[#F6F8FB] overflow-hidden border-t border-[#DDE3EA]" style={sansSerifStyle}>
      <style>{marqueeStyles}</style>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-3 sm:mb-4 text-center">

        {/* Eyebrow */}
        <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-1 block">
          CLIENTS & PARTNERS
        </span>

        {/* Standardized H2 Heading */}
        <h2 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[38px] font-bold mb-1.5 tracking-tight leading-[1.2] text-[#0C2E60]">
          Our Clients & Partners
        </h2>

        {/* Subtitle */}
        <p className="text-[#4B5563] text-[14px] md:text-[16px] max-w-2xl mx-auto leading-[1.5]">
          Empowering government agencies, infrastructure leaders, and enterprises across India with precision geospatial solutions.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4 overflow-hidden">

        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#F6F8FB] to-transparent z-20 pointer-events-none"></div>
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#F6F8FB] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 (Scrolling Left) */}
        <div className="w-full overflow-hidden flex h-[85px] sm:h-[98px] items-center">
          <div className="tm-marquee-row-1 flex items-center gap-4 sm:gap-5 h-full py-1">
            {[...row1, ...row1, ...row1].map((client, index) => (
              <LogoCard key={`row1-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="w-full overflow-hidden flex h-[85px] sm:h-[98px] items-center">
          <div className="tm-marquee-row-2 flex items-center gap-4 sm:gap-5 h-full py-1">
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

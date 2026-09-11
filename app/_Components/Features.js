import Link from "next/link";
import Image from "next/image";
import { Layers, Crosshair, Cloud, Laptop } from "lucide-react";

const Features = () => {
  const features = [
    {
      bgImage: "/home/GIS-Mapping-Data-Production.webp",
      icon: <Layers className="w-6 h-6 text-[#1656b8]" />,
      title: "GIS Services",
      description: "We prepare structured GIS and CAD data for infrastructure, utilities, mining, land, transportation and planning projects. Services include digitisation, feature extraction, utility and cadastral mapping, land-use mapping, georeferencing, spatial analysis and CAD–GIS conversion.",
      link: "/service/gisservice",
      ctaText: "Explore GIS Mapping Services",
    },
    {
      bgImage: "/home/Drone-Survey-Mapping.webp",
      icon: <Crosshair className="w-6 h-6 text-[#1656b8]" />,
      title: "Drone Survey & Mapping",
      description: "We support topographic, corridor, mining, construction, land and asset-mapping projects. The survey method and outputs are planned around the terrain, available survey control, coordinate system, accuracy requirement and intended use of the data.",
      link: "/service/drone-survey-mapping",
      ctaText: "Explore Drone Survey Services",
    },
    {
      bgImage: "/home/Drone-Data-Processing-Photogrammetry.webp",
      icon: <Cloud className="w-6 h-6 text-[#1656b8]" />,
      title: "Drone Data Processing",
      description: "If the flight is already complete, we can assess the imagery, overlap, flight information, coordinates and control data before processing. Outputs may include orthomosaics, point clouds, DEM, DTM, DSM, contours and mapping deliverables, subject to input quality.",
      link: "/service/drone-data-processing",
      ctaText: "Explore Drone Data Processing",
    },
    {
      bgImage: "/home/Website-Development.webp",
      icon: <Laptop className="w-6 h-6 text-[#1656b8]" />,
      title: "Website & App Development",
      description: "Responsive websites, custom portals and mobile applications built around practical business requirements. Our work includes UI development, dashboards, APIs, integrations, location-enabled applications and support after launch.",
      link: "/service/webdevelopment",
      ctaText: "Explore Website & Mobile App",
    }
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#DDE3EA]"
          >
            {/* Top Image */}
            <div className="relative w-full h-36 sm:h-40 overflow-hidden">
              <Image
                src={feature.bgImage}
                alt={feature.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 360px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="relative px-5 pt-8 pb-5 sm:px-6 sm:pt-9 sm:pb-5 flex-grow flex flex-col">
              {/* Overlapping Icon */}
              <div className="absolute -top-[22px] left-[20px] w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#DDE3EA] z-10 text-[#1656B8]">
                {feature.icon}
              </div>

              <h3 className="text-[#0C2E60] text-[18px] md:text-[20px] font-bold mb-2 leading-tight">
                {feature.title}
              </h3>

              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.6] mb-4 flex-grow whitespace-pre-line">
                {feature.description}
              </p>

              <Link
                href={feature.link}
                className="text-[#1656B8] text-[15px] font-semibold inline-flex items-center gap-1 hover:text-[#0C2E60] transition-colors w-fit py-1.5 min-h-[40px]"
              >
                {feature.ctaText} <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

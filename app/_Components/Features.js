import Link from "next/link";
import Image from "next/image";
import { BiTargetLock, BiCloud } from "react-icons/bi";
import { FiLayers } from "react-icons/fi";
import { MdOutlineDevices } from "react-icons/md";
import { FaMapMarkedAlt, FaLaptopCode } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

const Features = () => {
  const features = [
    {
      bgImage: "/Photos/feature_6.webp",
      icon: <FiLayers className="text-2xl text-[#1656b8]" />,
      title: "GIS Services",
      description: "We prepare structured GIS and CAD data for infrastructure, utilities, mining, land, transportation and planning projects. Services include digitisation, feature extraction, utility and cadastral mapping, land-use mapping, georeferencing, spatial analysis and CAD–GIS conversion.",
      link: "/service/gisservice",
      ctaText: "Explore GIS Mapping Services",
    },
    {
      bgImage: "/Photos/feature_3.webp",
      icon: <BiTargetLock className="text-2xl text-[#1656b8]" />,
      title: "Drone Survey & Mapping",
      description: "We support topographic, corridor, mining, construction, land and asset-mapping projects. The survey method and outputs are planned around the terrain, available survey control, coordinate system, accuracy requirement and intended use of the data.",
      link: "/service/drone-survey-mapping",
      ctaText: "Explore Drone Survey Services",
    },
    {
      bgImage: "/Photos/about_us_banner.png",
      icon: <BiCloud className="text-2xl text-[#1656b8]" />,
      title: "Drone Data Processing",
      description: "If the flight is already complete, we can assess the imagery, overlap, flight information, coordinates and control data before processing. Outputs may include orthomosaics, point clouds, DEM, DTM, DSM, contours and mapping deliverables, subject to input quality.",
      link: "/service/drone-data-processing",
      ctaText: "Explore Drone Data Processing",
    },
    {
      bgImage: "/Photos/feature_5.webp",
      icon: <AiOutlineCloudServer className="text-2xl text-[#1656b8]" />,
      title: "Website & App Development",
      description: "Responsive websites, custom portals and mobile applications built around practical business requirements. Our work includes UI development, dashboards, APIs, integrations, location-enabled applications and support after launch.",
      link: "/service/webdevelopment",
      ctaText: "Explore Website & Mobile App",
    }
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            {/* Top Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={feature.bgImage}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="relative px-6 pt-12 pb-8 flex-grow flex flex-col">
              {/* Overlapping Icon */}
              <div className="absolute -top-[25px] left-[20px] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 z-10 text-[#1656b8]">
                {feature.icon}
              </div>

              <h3 className="text-[#0c2e60] text-lg font-bold mb-3 leading-tight">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                {feature.description}
              </p>

              <Link
                href={feature.link}
                className="text-[#1656b8] text-[15px] font-semibold flex items-center gap-1 group-hover:text-[#10408f] transition-colors w-fit"
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

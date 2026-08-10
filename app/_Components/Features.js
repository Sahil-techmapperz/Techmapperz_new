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
      title: "01. GIS Mapping & Data Production",
      description: "We create, convert, manage and analyse spatial data for infrastructure, utilities, mining, government, land, transportation and planning projects.\nOur GIS services include digitisation, 2D and 3D feature extraction, utility mapping, cadastral mapping, land-use and land-cover mapping, georeferencing, spatial analysis, geodatabase development and CAD-to-GIS conversion.",
      link: "/service/gisservice",
      ctaText: "Explore GIS Mapping Services",
    },
    {
      bgImage: "/Photos/feature_3.webp",
      icon: <BiTargetLock className="text-2xl text-[#1656b8]" />,
      title: "02. Drone Survey & Mapping",
      description: "Techmapperz supports topographic, corridor, mining, infrastructure, construction, land and asset-mapping assignments using drone imagery and appropriate survey-control information.\nThe survey and processing methodology is selected according to the project area, terrain, source-data condition, required outputs, coordinate system and intended use of the final data.",
      link: "/service/droneservice",
      ctaText: "Explore Drone Survey Services",
    },
    {
      bgImage: "/Photos/about_us_banner.png",
      icon: <BiCloud className="text-2xl text-[#1656b8]" />,
      title: "03. Drone Data Processing & Photogrammetry",
      description: "Already captured drone imagery can be processed into measurable and georeferenced mapping products.\nWe review raw images, image overlap, flight information, available coordinates, ground-control information and expected accuracy before confirming the processing workflow.",
      link: "/service/droneservice/dronedataprocessing",
      ctaText: "Explore Drone Data Processing",
    },
    {
      bgImage: "/Photos/feature_5.webp",
      icon: <AiOutlineCloudServer className="text-2xl text-[#1656b8]" />,
      title: "04. Website & Mobile App Development",
      description: "We process aerial and terrestrial point-cloud data into terrain, surface, feature and engineering-ready products.\nServices include point-cloud classification, noise removal, ground filtering, feature extraction, bare-earth terrain generation, elevation modelling, contours, profiles, cross-sections and point-cloud-to-CAD or GIS conversion.",
      link: "/service/lidar",
      ctaText: "Explore Website & Mobile App",
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
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

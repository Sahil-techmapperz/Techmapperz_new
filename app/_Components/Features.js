import Link from "next/link";
import Image from "next/image";
import { BiTargetLock } from "react-icons/bi";
import { FiLayers } from "react-icons/fi";
import { MdOutlineDevices } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      bgImage: "/Photos/feature_3.webp",
      icon: <BiTargetLock className="text-2xl text-[#1656b8]" />,
      title: "Drone Survey & Mapping",
      description: "High resolution aerial data collection, photogrammetry, orthomosaic, DEM/DSM & 3D modeling.",
      link: "/service/droneservice",
    },
    {
      bgImage: "/Photos/feature_6.webp",
      icon: <FiLayers className="text-2xl text-[#1656b8]" />,
      title: "GIS Services",
      description: "Spatial data creation, conversion, analysis, GIS mapping, and custom geospatial solutions.",
      link: "/service/gisservice",
    },
    {
      bgImage: "/Photos/feature_4.webp",
      icon: <MdOutlineDevices className="text-2xl text-[#1656b8]" />,
      title: "Web & Mobile GIS Development",
      description: "Custom web GIS, mobile mapping apps & dashboards for better decision making.",
      link: "/service/gisservice/webgisdevelopment",
    },
    {
      bgImage: "/Photos/feature_5.webp",
      icon: <FaMapMarkedAlt className="text-2xl text-[#1656b8]" />,
      title: "LiDAR & 3D Modeling",
      description: "LiDAR data processing, point cloud analysis, 3D models, contours & feature extraction.",
      link: "/service/gisservice",
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Content Area */}
            <div className="relative px-6 pt-12 pb-8 flex-grow flex flex-col">
              {/* Overlapping Icon */}
              <div className="absolute -top-[25px] left-[10px] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 z-10 text-[#1656b8]">
                {feature.icon}
              </div>

              <h3 className="text-[#0c2e60] text-lg font-bold mb-3 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>

              <Link 
                href={feature.link}
                className="text-[#1656b8] text-[15px] font-semibold flex items-center gap-1 group-hover:text-[#10408f] transition-colors w-fit"
              >
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

import React from 'react';
import { FiDatabase, FiLayers, FiImage, FiTrendingUp, FiCloud, FiFileText, FiGlobe } from 'react-icons/fi';

const deliverablesData = [
  {
    icon: <FiDatabase className="text-2xl" />,
    title: "GIS Data",
    formats: ["SHP", "GeoPackage", "File Geodatabase", "GeoJSON", "KML"],
    bgColor: "from-blue-500/10 to-indigo-500/5",
    borderColor: "group-hover:border-blue-500/40"
  },
  {
    icon: <FiLayers className="text-2xl" />,
    title: "CAD Data",
    formats: ["DWG", "DXF", "Structured Layers", "Engineering Drawings"],
    bgColor: "from-teal-500/10 to-emerald-500/5",
    borderColor: "group-hover:border-teal-500/40"
  },
  {
    icon: <FiImage className="text-2xl" />,
    title: "Raster & Image Products",
    formats: ["GeoTIFF", "Orthophoto", "Orthomosaic", "Classified Raster", "Land-Use Maps"],
    bgColor: "from-green-500/10 to-emerald-500/5",
    borderColor: "group-hover:border-green-500/40"
  },
  {
    icon: <FiTrendingUp className="text-2xl" />,
    title: "Terrain Products",
    formats: ["DEM", "DTM", "DSM", "Contours", "Hillshade", "Slope", "Profiles", "Cross-Sections"],
    bgColor: "from-orange-500/10 to-amber-500/5",
    borderColor: "group-hover:border-orange-500/40"
  },
  {
    icon: <FiCloud className="text-2xl" />,
    title: "Point-Cloud Products",
    formats: ["LAS", "LAZ", "Classified Point Cloud", "Ground Class", "Extracted Features"],
    bgColor: "from-purple-500/10 to-pink-500/5",
    borderColor: "group-hover:border-purple-500/40"
  },
  {
    icon: <FiFileText className="text-2xl" />,
    title: "Reports & Analysis",
    formats: ["Volumetric Reports", "Cut-and-Fill Analysis", "Change Maps", "QA/QC Reports"],
    bgColor: "from-red-500/10 to-orange-500/5",
    borderColor: "group-hover:border-red-500/40"
  },
  {
    icon: <FiGlobe className="text-2xl" />,
    title: "Digital Applications",
    formats: ["Web GIS", "Mobile GIS", "GIS Dashboards", "Field Applications", "Asset Portals"],
    bgColor: "from-sky-500/10 to-blue-500/5",
    borderColor: "group-hover:border-sky-500/40",
    fullWidth: true
  }
];

const Deliverables = () => {
  return (
    <section className="bg-theme-alt py-16 md:py-24 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#6ac045] text-[11px] sm:text-xs md:text-[14px] font-bold tracking-[0.15em] uppercase mb-2 sm:mb-3">
            PROJECT-READY OUTPUTS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c2e60] mb-4 tracking-tight max-w-3xl">
            Deliverables Prepared for GIS, CAD, Survey and Engineering Workflows
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Final formats are agreed during the scope review so that the outputs can be used directly within the client’s existing software and operational environment.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverablesData.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                item.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
              } ${item.borderColor}`}
            >
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center text-[#0c2e60] group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-[#0c2e60] text-lg sm:text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2.5">
                {item.formats.map((format, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200/60 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;

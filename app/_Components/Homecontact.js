"use client"
import Link from "next/link"

const sansSerifStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const Homecontact = () => {
    return (
        <div className="relative bg-white py-10 md:py-16 overflow-hidden border-t border-gray-100">
            <div className="w-full max-w-7xl mx-auto relative z-20 px-4 sm:px-6 lg:px-12">
                <div className="bg-gradient-to-br from-[#0b2341] via-[#10477b] to-[#0b6b69] rounded-2xl sm:rounded-[26px] p-6 sm:p-8 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-10 shadow-xl">
                    {/* Circle graphic */}
                    <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />

                    {/* Text Section */}
                    <div className="space-y-3 sm:space-y-4 max-w-2xl relative z-10 text-left">
                        <span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.15em] mb-1.5 block">
                            LET’S DISCUSS YOUR PROJECT
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-[34px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
                            Have a GIS, Drone or Digital Project in Mind?
                        </h2>
                        <p className="text-blue-100 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                            Share your project location, available source data, required outputs and expected timeline. Our team will review the scope and suggest a practical approach for survey, mapping, data processing, analysis or application development.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 w-full sm:w-auto shrink-0 self-stretch sm:self-start lg:self-center">
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                        >
                            Discuss Your Project →
                        </Link>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#0c2e60] bg-white border border-transparent hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                        >
                            Send Your Scope
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homecontact;

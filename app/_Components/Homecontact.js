"use client"
import Link from "next/link"

const sansSerifStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const Homecontact = () => {
    return (
        <div className="relative bg-white py-16 overflow-hidden border-t border-gray-100">
            <div className="w-full max-w-7xl mx-auto relative z-20 px-6 lg:px-12">
                <div className="bg-gradient-to-br from-[#0b2341] via-[#10477b] to-[#0b6b69] rounded-[26px] p-8 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10 shadow-xl">
                    {/* Circle graphic */}
                    <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />

                    {/* Text Section */}
                    <div className="space-y-4 max-w-2xl relative z-10">
                        <h2 className="text-2xl md:text-[38px] font-extrabold text-white tracking-tight leading-tight font-sans">
                            Have a GIS mapping or data-conversion requirement?
                        </h2>
                        <p className="text-blue-100 text-sm md:text-base leading-relaxed" style={sansSerifStyle}>
                            Share your project area, source data, feature list, coordinate system, accuracy requirement, expected formats and timeline. Our team will review the requirement and suggest a suitable workflow.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="flex flex-wrap gap-4 relative z-10 shrink-0 self-start lg:self-center" style={sansSerifStyle}>
                        <a 
                            href="mailto:info@techmapperz.com" 
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#e33434] hover:bg-[#c92828] shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Request a Project Assessment →
                        </a>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-extrabold text-sm text-[#0c2e60] bg-white border border-transparent hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Upload Scope of Work
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homecontact;

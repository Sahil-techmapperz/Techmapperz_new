"use client"
import Link from "next/link"

const sansSerifStyle = {
    fontFamily: 'var(--font-primary), "IBM Plex Sans", sans-serif'
};

const Homecontact = () => {
    return (
        <div className="relative bg-white py-4 md:py-10 overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto relative z-20 px-4 md:px-8 lg:px-12">
                <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-5 sm:p-7 md:p-9 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
                    {/* Circle graphic */}
                    <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />

                    {/* Text Section */}
                    <div className="space-y-2 sm:space-y-2.5 max-w-2xl relative z-10 text-left">
                        <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                            LET’S DISCUSS YOUR PROJECT
                        </span>
                        <h2 className="text-[24px] sm:text-[26px] md:text-[34px] lg:text-[36px] font-bold text-white tracking-tight leading-[1.2]">
                            Have a GIS, Drone or Digital Project in Mind?
                        </h2>
                        <p className="text-[#E8F5F3] text-[14px] md:text-[16px] leading-[1.55] font-normal">
                            Share your project location, available source data, required outputs and expected timeline. Our team will review the scope and suggest a practical approach for survey, mapping, data processing, analysis or application development.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 relative z-10 w-full sm:w-auto shrink-0 self-stretch sm:self-start lg:self-center">
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl font-bold text-[14px] sm:text-[15px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                        >
                            Discuss Your Project →
                        </Link>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl font-bold text-[14px] sm:text-[15px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
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

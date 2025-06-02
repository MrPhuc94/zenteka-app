"use client";

import Image from "next/image";

export default function NftDropsHotPromo() {
  return (
    <section className="w-full md:px-[10%] mt-12 px-4">
      <div className="flex w-full flex-col md:flex-row gap-8">
        {/* Left: NFT Drops Calendar */}
        <div className="flex-1 rounded-2xl flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white tracking-wide">NFT Drops Calendar</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#383A42] text-primary hover:bg-primary hover:text-[#383A42] transition-colors">
                <span className="sr-only">Previous</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 16l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#383A42] text-primary hover:bg-primary hover:text-[#383A42] transition-colors">
                <span className="sr-only">Next</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="w-full h-[180px] md:h-[240px] rounded-xl overflow-hidden bg-gray-800">
            <Image src="/assets/section2_image1.png" alt="NFT Drops" width={120} height={160} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Right: HOT NFT & PROMOTION */}
        <div className="flex-1 flex flex-row gap-8">
          <div className="flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white tracking-wide mb-4">HOT NFT</h3>
            <div className="w-full rounded-xl overflow-hidden bg-gray-800">
              <Image src="/assets/section2_image2.png" alt="Hot NFT" width={120} height={160} className="w-full h-full object-cover min-h-[200px] md:min-h-[240px]"/>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white tracking-wide mb-4">PROMOTION</h3>
            <div className="w-full rounded-xl overflow-hidden bg-gray-800">
              <Image src="/assets/section2_image3.png" alt="Promotion" width={120} height={160} className="w-full h-full object-cover min-h-[200px] md:min-h-[240px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
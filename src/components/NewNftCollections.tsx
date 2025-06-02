"use client";

import Image from "next/image";

const cards = [
  { id: 1, img: "/assets/section1_image2.png" },
  { id: 2, img: "/assets/section1_image3.png" },
  { id: 3, img: "/assets/section1_image4.png" },
  { id: 4, img: "/assets/section1_image5.png" },
  { id: 5, img: "/assets/section1_image6.png" },
  { id: 6, img: "/assets/section1_image7.png" },
];

export default function NewNftCollections() {
  return (
    <section className="w-full mt-12 md:px-[10%] px-4">
      <div className="flex items-center justify-between mb-6 w-full">
        <h2 className="font-barlow text-primary text-2xl md:text-3xl font-extrabold italic uppercase tracking-wide">New NFT Collections</h2>
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
      <div className="flex gap-4 overflow-x-auto pb-2 px-2 md:grid md:grid-cols-7 md:gap-4 md:overflow-visible">
        {cards.map(card => (
          <div key={card.id} className="min-w-[120px] h-[160px] md:min-w-0 md:w-full md:h-[180px] rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
            <Image src={card.img} alt={`NFT Collection ${card.id}`} width={120} height={160} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
} 
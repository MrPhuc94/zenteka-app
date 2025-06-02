"use client";

import Image from "next/image";

const features = [
  { label: "free to earn", icon: "/assets/cashback.svg" },
  { label: "Ranking", icon: "/assets/sport_race.svg" },
  { label: "VIdeo NFT", icon: "/assets/live.svg" },
  { label: "How to buy", icon: "/assets/racing.svg" },
  { label: "New NFTS", icon: "/assets/livecasino.svg" },
  { label: "Roadmaps", icon: "/assets/minigames.svg" },
];

export default function FeatureLinks() {
  return (
    <section className="w-full flex items-center max-h-[120px]">
      <div className="w-full md:max-w-full bg-[#1F2023] py-2 md:px-[10%] px-0">
        <div className="flex flex-row gap-2 md:gap-6 justify-center md:justify-between items-center flex-nowrap">
          {features.map((f, i:number) => (
            <div
              key={`${f.label}-${i}`}
              className="flex flex-col items-center justify-center flex-1 min-w-0 gap-1 py-2"
            >
              <span className="mb-2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12">
                <Image src={f.icon} alt={f.label} width={48} height={48} className="object-contain" />
              </span>
              <span className="uppercase text-xs md:text-sm text-white font-medium tracking-wide text-center">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
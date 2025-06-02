"use client";

import Header from "@/components/Header";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });

// Lazy load components
const HeroSlider = dynamic(() => import("@/components/HeroSlider"), { ssr: false });
const FeatureLinks = dynamic(() => import("@/components/FeatureLinks"), { ssr: false });
const NewNftCollections = dynamic(() => import("@/components/NewNftCollections"), { ssr: false });
const NftDropsHotPromo = dynamic(() => import("@/components/NftDropsHotPromo"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [navOpen]);

  return (
    <div className="min-h-screen bg-[#131415] text-white flex flex-col">
      {/* Header */}
      <Header onMenuClick={() => setNavOpen(!navOpen)} navOpen={navOpen} />
      {/* Mobile Navigation (to be toggled) */}
      <Navigation open={navOpen} onClose={() => setNavOpen(false)} />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full md:px-0">
        {/* Hero/Slider Section */}
        <section className="w-full flex flex-col items-center pt-16">
          <HeroSlider />
        </section>
        {/* Feature/Link Section */}
        <FeatureLinks />
        {/* New NFT Collections Section */}
        <NewNftCollections />
        {/* NFT Drops Calendar, HOT NFT, PROMOTION Section */}
        <NftDropsHotPromo />
        {/* More sections will go here */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

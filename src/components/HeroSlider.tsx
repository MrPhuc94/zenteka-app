"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    img: "/assets/slider-1.png",
    alt: "NFT Slide 1",
  },
  // Add more images if available, e.g. slider-2.png, slider-3.png
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full overflow-hidden bg-gray-700">
      <Image
        src={slides[current].img}
        alt={slides[current].alt}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {/* Dots - only show on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-8 h-2 rounded-full transition-all duration-200 border border-primary ${
              idx === current ? "bg-primary" : "bg-white/60"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 
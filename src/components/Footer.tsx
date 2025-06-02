"use client";

import Image from "next/image";

const aboutLinks = [
  "Careers",
  "Company Details",
  "Terms & Conditions",
  "Help center",
  "Privacy Policy",
  "Affiliate",
];
const productLinks = [
  "NFT Marketplace",
  "Slingshot",
  "Swaps",
  "NFT Launchpad",
  "Runes Platform",
  "Creator Dashboard",
];
const resourceLinks = [
  "Support",
  "API",
  "Feature Requests",
  "Trust & Safety",
  "Sitemap",
];
const contactLinks = [
  "support@tech.email",
  "affiliate@tech.com",
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white mt-16 pt-12 pb-6 px-4 md:px-[10%] border-t border-[#383A42] font-barlow">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 md:gap-20 justify-between">
        {/* About Us */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-sm tracking-wider italic">About Us</h4>
          <ul className="space-y-1 text-sm text-[#D2D2D2]">
            {aboutLinks.map(link => (
              <li key={link}><a href="#" className="hover:text-primary">{link}</a></li>
            ))}
          </ul>
        </div>
        {/* Products */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-sm tracking-wider italic">Products</h4>
          <ul className="space-y-1 text-sm text-[#D2D2D2]">
            {productLinks.map(link => (
              <li key={link}><a href="#" className="hover:text-primary">{link}</a></li>
            ))}
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-sm tracking-wider italic">Resources</h4>
          <ul className="space-y-1 text-sm text-[#D2D2D2]">
            {resourceLinks.map(link => (
              <li key={link}><a href="#" className="hover:text-primary">{link}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className="font-bold uppercase mb-3 text-sm tracking-wider italic">Contact Us</h4>
          <ul className="space-y-1 text-sm text-[#D2D2D2]">
            {contactLinks.map(link => (
              <li key={link}><a href={`mailto:${link}`} className="hover:text-primary">{link}</a></li>
            ))}
            <button className="text-primary mt-4 cursor-pointer">
              <Image src="/assets/download_app.png" alt="Download App" width={151.5} height={44} />
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
} 
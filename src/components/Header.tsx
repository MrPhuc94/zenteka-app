"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

interface HeaderProps {
  onMenuClick?: () => void;
  navOpen?: boolean;
}

export default function Header({ onMenuClick, navOpen }: HeaderProps) {
  return (
    <header className="w-full bg-[#131415] text-primary flex fixed top-0 left-0 right-0 z-50 items-center gap-4 px-5 md:px-10 py-3 md:py-5 border-b border-[#383A42] font-barlow">
      {/* Mobile menu button (hamburger or close) */}
      <div className="md:hidden flex items-center">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={onMenuClick}
          aria-label={navOpen ? "Close menu" : "Open menu"}
        >
          {navOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <div className="flex flex-col justify-center items-center gap-[3px]">
              <span className="block w-8 h-1 bg-white rounded-full" />
              <span className="block w-8 h-1 bg-white rounded-full" />
              <span className="block w-8 h-1 bg-white rounded-full" />
            </div>
          )}
        </button>
      </div>
      {/* Logo */}
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-between gap-3">
          {/* Desktop logo */}
          <span className="hidden md:inline-flex">
            <Image src="/assets/logo.svg" alt="Logo" width={71} height={39} priority className="w-[71px] h-[39px] object-contain" />
          </span>
          {/* Mobile logo */}
          <span className="inline-flex md:hidden">
            <Image src="/assets/logo_mobile.svg" alt="Logo" width={72} height={36} priority className="w-[72px] h-[36px] object-contain" />
          </span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-4">
          <Link href="#" className="px-4 py-2 rounded-full bg-[#383A42] text-primary font-medium uppercase text-[14px] leading-[20px] tracking-wide">HOME</Link>
          <Link href="#" className="px-4 py-2 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-[14px] leading-[20px] tracking-wide">items1</Link>
          <Link href="#" className="px-4 py-2 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-[14px] leading-[20px] tracking-wide">items2</Link>
          <Link href="#" className="px-4 py-2 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-[14px] leading-[20px] tracking-wide">items3</Link>
          <Link href="#" className="px-4 py-2 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-[14px] leading-[20px] tracking-wide">items4</Link>
        </nav>
        {/* Auth Buttons */}
        <div className="flex gap-2 ml-4">
          <Button variant="primary" state="normal" className="italic px-6 py-2 rounded-full bg-[#FFC700] font-bold text-black font-extrabold uppercase text-[16px] leading-[24px] shadow-md tracking-wider">Sign Up</Button>
          <Button variant="secondary" state="normal" className="italic px-6 py-2 rounded-full border border-[#FFC700] text-white font-extrabold uppercase text-[16px] leading-[24px] tracking-wider">Log In</Button>
        </div>
    </div>
    </header>
  );
} 
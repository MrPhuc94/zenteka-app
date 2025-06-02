"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full bg-[#131415] text-primary flex items-center justify-between px-5 md:px-10 py-3 md:py-5 border-b border-[#383A42] font-barlow">
      {/* Logo */}
      <div className="flex items-center gap-3">
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
      <div className="hidden md:flex gap-2 ml-4">
        <Button variant="primary" state="normal" className="italic px-6 py-2 rounded-full bg-primary text-black font-extrabold uppercase text-[16px] leading-[24px] shadow-md tracking-wider">Sign Up</Button>
        <Button variant="secondary" state="normal" className="italic px-6 py-2 rounded-full border border-primary text-primary font-extrabold uppercase text-[16px] leading-[24px] tracking-wider">Log In</Button>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="w-8 h-8 flex flex-col justify-center items-center gap-[3px]" onClick={onMenuClick} aria-label="Open menu">
          <span className="block w-8 h-1 bg-white rounded-full" />
          <span className="block w-8 h-1 bg-white rounded-full" />
          <span className="block w-8 h-1 bg-white rounded-full" />
        </button>
      </div>
    </header>
  );
} 
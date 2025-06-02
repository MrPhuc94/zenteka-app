"use client";

import Link from "next/link";

export default function Navigation({ open }: { open: boolean }) {
  return (
    <nav className={`fixed top-0 left-0 w-full h-full bg-[#131415] z-50 flex flex-col items-center pt-24 gap-6 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
      <Link href="#" className="px-6 py-3 rounded-full bg-[#383A42] text-primary font-medium uppercase text-lg w-3/4 text-center">HOME</Link>
      <Link href="#" className="px-6 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-3/4 text-center">items1</Link>
      <Link href="#" className="px-6 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-3/4 text-center">items2</Link>
      <Link href="#" className="px-6 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-3/4 text-center">items3</Link>
      <Link href="#" className="px-6 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-3/4 text-center">items4</Link>
      <div className="flex flex-col gap-3 w-3/4 mt-8">
        <button className="px-6 py-3 rounded-full bg-primary text-black font-bold uppercase text-lg">Sign Up</button>
        <button className="px-6 py-3 rounded-full border border-primary text-primary font-bold uppercase text-lg">Log In</button>
      </div>
    </nav>
  );
} 
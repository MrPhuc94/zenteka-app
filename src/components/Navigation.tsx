"use client";

import Link from "next/link";

interface NavigationProps {
  open: boolean;
  onClose?: () => void;
}

export default function Navigation({ open }: NavigationProps) {
  return (
    <nav
      className={`
        fixed left-0 w-full h-[calc(100%-64px)] bg-[#131415] z-50 flex flex-col items-center pt-4 gap-6
        transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
        top-16
        px-4
      `}
    >
      <Link href="#" className="px-4 py-3 rounded-full bg-[#383A42] text-primary font-medium uppercase text-lg w-full text-center">HOME</Link>
      <Link href="#" className="px-4 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-full text-center">items1</Link>
      <Link href="#" className="px-4 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-full text-center">items2</Link>
      <Link href="#" className="px-4 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-full text-center">items3</Link>
      <Link href="#" className="px-4 py-3 rounded-full hover:bg-[#383A42] text-[#D2D2D2] font-medium uppercase text-lg w-full text-center">items4</Link>
    </nav>
  );
} 
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between sticky top-0 z-10  items-center px-2 md:px-6 py-4 bg-gradient-to-r from-white via-white to-[#febf11dd]">
      <div className="text-xl font-bold text-[#febf11dd]">NOMAN AFZAL</div>

      {/* Navigation links - hidden on small screens, flex on md and above */}
      <ul className="hidden md:flex gap-6 text-black font-semibold text-[16px]">
      <li><Link href="/">Home</Link></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#process">PROCESS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#chooseus">CHOOSE US</a></li>
      </ul>

      <Link href="/bookcall">   <button className="text-sm md:text-base bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-xl">
        CLAIM YOUR SPOT
      </button> </Link>
    </nav>
  );
}








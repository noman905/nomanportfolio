'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between sticky top-0 z-10 items-center px-2 md:px-6 py-4 bg-[#fff8f1] transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      {/* Brand Name */}
      <div className="text-xl font-bold text-[#ec7424]">NOMAN AFZAL</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-black font-semibold text-[16px]">
        <li className="hover:text-[#ec7424] transition duration-300"><Link href="/">Home</Link></li>
        <li className="hover:text-[#ec7424] transition duration-300"><a href="#about">ABOUT</a></li>
        <li className="hover:text-[#ec7424] transition duration-300"><a href="#process">PROCESS</a></li>
        <li className="hover:text-[#ec7424] transition duration-300"><a href="#projects">PROJECTS</a></li>
        <li className="hover:text-[#ec7424] transition duration-300"><a href="#chooseus">CHOOSE US</a></li>
      </ul>

      {/* Premium Button */}
      <Link href="/bookcall">
        <button className="text-sm md:text-base bg-[#ec7424] text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 shadow-md hover:brightness-110 hover:scale-105">
          CLAIM YOUR SPOT
        </button>
      </Link>
    </nav>
  );
}

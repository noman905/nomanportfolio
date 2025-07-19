'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useState } from 'react';


export default function Hero() {

  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative w-full flex items-center justify-center bg-[#fff8f1] text-[#1a1a1a] px-4 pt-30 md:pt-16 pb-10 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#ffeedd] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#ffe4d1] rounded-full opacity-20 blur-2xl pointer-events-none"></div>

      <div className="max-w-6xl w-full flex flex-col items-center text-center relative ">

        {/* Honest Premium Badge */}
        <div className="text-sm font-semibold uppercase tracking-widest bg-[#ec7424] text-white px-2 md:px-4 py-2 rounded-full mb-4 shadow-md">
          Fast Premium Conversion-Focused
        </div>

        {/* Main Heading */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-extrabold leading-tight max-w-5xl">
          Premium Websites to Elevate <span className="text-[#ec7424]">Coaches</span> & <span className="text-[#ec7424]">Consultants</span> into Leaders Category 
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-[#000000] mt-6 max-w-2xl px-4">
          I craft refined websites that attract premium clients and position your coaching brand as an authority.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
          





     <Link href="#contact">
  <button
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="relative overflow-hidden px-8 py-3 text-lg font-semibold border-2 border-[#ec7424] text-[#ec7424] rounded-full z-10"
  >
    {/* Liquid Layer */}
    <span className="absolute inset-0 rounded-full overflow-hidden z-0">
      <span
        className={`absolute bottom-0 left-0 w-full ${
          hovered ? 'h-full' : 'h-10 animate-bounce-liquid'
        } bg-[#ec7424] transition-all duration-700 ease-in-out`}
      />
    </span>

    {/* Button Text */}
    <span
      className={`relative z-10 transition-colors duration-700 ${
        hovered ? 'text-white' : 'text-[#ec7424]'
      }`}
    >
      Book Your Discovery Call
    </span>
  </button>
</Link>

  




          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-7 flex justify-center">
          <div className="animate-bounce text-[#ec7424] text-[35px]">
            ↓
          </div>
        </div>

      </div>
    </section>
  );
}

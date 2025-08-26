'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Edit2, Palette, Repeat } from 'lucide-react'; // Lucide icons

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative w-full flex items-center justify-center bg-[#fff8f1] text-[#1a1a1a] px-4 pt-30 md:pt-16 pb-10 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#ffeedd] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#ffe4d1] rounded-full opacity-20 blur-2xl pointer-events-none"></div>

      <div className="max-w-6xl w-full flex flex-col items-center text-center relative ">

       

       {/* Main Heading */}
<h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-extrabold  pt-4 leading-tight max-w-5xl">
  Turn Your <span className='text-[#ec7424]'>B2B SaaS  Landing</span> Page Into a <span className='text-[#ec7424]'>Conversion Machine</span> — Not Just a Pretty
</h1>

{/* Subheading */}
<p className="text-base sm:text-lg md:text-xl font-normal text-[#000000] mt-8 max-w-[720px] px-1">
  Tired of traffic that doesn’t convert? Landing pages built with the right combo of clear words and user guidling design turn visitors into paying customers.
</p>

{/* Bullet Points with Lucide icons */}
<ul className="mt-8 px-4 text-left flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
  <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl font-normal">
    <Edit2 className="text-[#ec7424] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
    Copy That Converts
  </li>
  <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl font-normal">
    <Palette className="text-[#ec7424] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
    Design That Guides
  </li>
  <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl font-normal">
    <Repeat className="text-[#ec7424] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
    Ongoing Page Support
  </li>
</ul>
        {/* CTA Button */}
        <div className="mt-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
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
                  Book Your Free Strategy Call
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
        <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
  100% free — step-by-step guidance, no risk.
</p>

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

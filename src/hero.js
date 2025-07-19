'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#fff8f1] text-[#1a1a1a] px-4 pt-24 pb-20">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">

        {/* Main Heading */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-extrabold leading-tight max-w-5xl">
          Premium Websites to Elevate <span className="text-[#ec7424]">Coaches</span> & <span className="text-[#ec7424]">Consultants</span> into Leaders Category 
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-[#000000] mt-6 max-w-2xl px-4">
          I craft refined websites that attract premium clients and position your coaching brand as an authority.
        </p>

        {/* CTA Button */}
        <Link href="#contact">
          <button className="mt-10 bg-[#ec7424] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#d26219] transition duration-300 shadow-lg">
            Book Your discovery call
          </button>
        </Link>

      </div>
    </section>
  );
}

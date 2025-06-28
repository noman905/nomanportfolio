'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center text-center px-2 sm:px-4 pt-20 md:pt-20 pb-20  md:bg-gradient-to-r from-white md:via-white to-[#febf11c0]">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center">

        {/* Main Heading */}
        <h1 className="text-[36px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-extrabold text-black leading-tight md:leading-[1.2] max-w-4xl">
          Transforming <span className="text-[#F6C745]">Coaching Brands </span>
          with <span className="text-[#F6C745]"> Strategic</span> & <span className="text-[#F6C745]">Converting</span> Websites
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-black mt-6 max-w-2xl px-4">
          We help coaches grow faster with websites that are not just beautiful — but built to convert.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full max-w-sm sm:max-w-none justify-center px-2">
          <Link href="/bookcall">
            <button className="w-full sm:w-auto bg-[#F6C745] hover:bg-[#f5b900] transition duration-300 text-black font-semibold py-3 px-6 rounded-full shadow-md text-sm sm:text-base">
              BOOK 1:1 DISCOVERY CALL
            </button>
          </Link>

          <Link href="#work">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-900 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-md text-sm sm:text-base">
              SEE MY WORK
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

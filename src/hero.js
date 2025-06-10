'use client';
import Link from 'next/link';

export default function Hero() {



    
  return (
    <section className="flex flex-col items-center pb-24 text-center px-4 sm:px-6 pt-[84px] md:pt-[76px] py-16  bg-gradient-to-b md:bg-gradient-to-r from-white md:via-white to-[#febf11c0]">
      <h1 className="text-[30px] md:text-[50px]  font-bold text-black  md:leading-[74px] max-w-3xl">
        CREATING POWERFUL CUSTOM <br className="hidden md:flex"/>
      <span className="md:text-[49px]">  WEBSITES FOR </span> <span className="text-[#F6C745] px-1 rounded-2xl">COACHES</span> & <br className="hidden md:flex"/>


        <span className="text-[#F6C745] px-1 py-0 m-0 p-0 rounded-2xl">PERSONAL BRANDS</span>
      </h1>

      <p className="mt-6 text-white font-semibold bg-black  py-2 px-6 rounded-full">
      SHAPING YOUR BRANDS STORY - THROUGH WEB DESIGN
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
 <Link href="/bookcall"> <button className="bg-[#F6C745] hover:bg-[#f5b900] transition duration-300 text-black font-semibold py-3 px-6 rounded-full shadow-md text-sm sm:text-base">
    BOOK 1:1 DISCOVERY CALL
  </button></Link>


  <button className="bg-black hover:bg-gray-900 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-md text-sm sm:text-base">
    SEE MY WORK
  </button>
</div>


    </section>
  );
}

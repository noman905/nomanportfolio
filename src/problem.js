'use client';
import { MonitorSmartphone, TrendingDown, LayoutTemplate } from "lucide-react";

export default function Problem() {
  return (
    <section className="bg-[#fff8f1] text-black px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Flex container for left (heading) and right (cards) on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: Heading Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold leading-snug">
              <span className="text-[#ec7424]">Your Website</span> Might Be 
              <span className="text-[#ec7424]"> Pushing Away Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-black font-medium max-w-3xl lg:max-w-none mx-auto lg:mx-0">
              Most coaching sites feel more like <span className="text-[#ec7424]">static brochures</span> than premium brands. They don’t speak emotionally or convert strategically.
            </p>
          </div>

          {/* Right: Problem Cards */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Problem 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-[6px] border-[#ec7424]">
              <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
                <TrendingDown size={20} /> Low Conversion
              </h3>
              <p>
                Let’s be honest—if your site isn’t guiding people to take action, you’re losing serious opportunities. It might look nice, but nice doesn’t pay the bills.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-[6px] border-[#ec7424]">
              <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
                <LayoutTemplate size={20} /> Looks Like a Template
              </h3>
              <p>
                When your site looks like every other coaching website, people scroll right past. You don’t look like *you* — you look like a template they’ve seen before.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-[6px] border-[#ec7424]">
              <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
                <MonitorSmartphone size={20} /> Mobile Friction
              </h3>
              <p>
                If your site loads slow or feels clunky on mobile, people won’t wait. They’ll just close the tab. Especially when they’re judging your brand in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

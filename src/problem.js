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
              <span className="text-[#ec7424]">Your Landing Page</span> Might Be 
              <span className="text-[#ec7424]"> Losing Customers & Revenue</span>
            </h2>
            <p className="text-lg sm:text-xl text-black font-medium max-w-3xl lg:max-w-none mx-auto lg:mx-0">
              Most B2B SaaS landing pages look good but don’t guide users. Without clear copy and smart design, your visitors leave before taking action.
            </p>
          </div>

    {/* Right: Landing Page Problems */}
<div className="w-full lg:w-1/2 space-y-6">

  {/* Problem 1 */}
  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ec7424]">
    <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
      <TrendingDown size={20} /> Words that Don’t Sell
    </h3>
    <p>
      Your headline and copy fail to make visitors understand your SaaS value. Without compelling messaging, even high traffic won’t convert into demos, trials, or sign-ups.
    </p>
  </div>

  {/* Problem 2 */}
  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ec7424]">
    <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
      <LayoutTemplate size={20} /> No Clear Guidance
    </h3>
    <p>
      Visitors don’t know what to do next. A cluttered or unclear layout turns curiosity into confusion—losing potential customers.
    </p>
  </div>

  {/* Problem 3 */}
  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ec7424]">
    <h3 className="text-xl font-bold mb-2 text-[#ec7424] flex items-center gap-2">
      <MonitorSmartphone size={20} /> Traffic Wasted
    </h3>
    <p>
      You get clicks, but few sign-ups. Poor copy, weak guidance, and lack of trust elements mean your landing page fails to turn visitors into paying customers.
    </p>
  </div>

</div>


</div>
      </div>
    </section>
  );
}

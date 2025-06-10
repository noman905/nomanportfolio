// pages/why-choose-us.js

import Link  from "next/link";
export default function WhyChooseUs() {
  return (
    <section id="chooseus" className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-white via-white to-[#febf11c0]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-12 text-center leading-tight">
        WHY Choose <span className="text-[#febf11e0]">US ?</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-2xl hover:shadow-md shadow-[#febf11] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Fast & Reliable Websites</h3>
          <div className="text-base sm:text-lg space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#febf11] rounded-full mt-2 mr-3"></div>
              <p><strong className="text-[#ffbb00]">Problem:</strong> Slow websites lead to high bounce rates, affecting user engagement and SEO rankings.</p>
            </div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#febf11] rounded-full mt-2 mr-3"></div>
              <p><strong className="text-[#febf11]">Solution:</strong> We use Next.js and Tailwind CSS to build fast, high-performance websites.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#febf11] text-black p-6 sm:p-8 rounded-2xl hover:shadow-md shadow-black transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ongoing Support for a Month</h3>
          <div className="text-base sm:text-lg space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-black rounded-full mt-2 mr-3"></div>
              <p><strong>Problem:</strong> Businesses face maintenance challenges and need timely help.</p>
            </div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-black rounded-full mt-2 mr-3"></div>
              <p><strong>Solution:</strong> We offer 1-month free support for updates, bug fixes, and expert advice.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-2xl hover:shadow-md shadow-[#febf11] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Mobile-Optimized Design</h3>
          <div className="text-base sm:text-lg space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#febf11] rounded-full mt-2 mr-3"></div>
              <p><strong className="text-[#ffbb00]">Problem:</strong> Non-responsive sites hurt user experience and conversions.</p>
            </div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#febf11] rounded-full mt-2 mr-3"></div>
              <p><strong className="text-[#ffbb00]">Solution:</strong> We follow a mobile-first approach for responsive, fast websites on all devices.</p>
            </div>
          </div>
        </div>


      </div>

 {/* Button */}
 <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/bookcall"
              className="inline-block bg-[#febf11c0] text-black font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl hover:bg-yellow-400 transition text-base sm:text-lg"
            >
              BOOK 1:1 DISCOVERY CALL
            </Link>
          </div> 
      
    </section>
  );
}

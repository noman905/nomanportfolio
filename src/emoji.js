"use client";
import Link from "next/link";
import Image from "next/image";

export default function Emoji() {
  return (
    <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Quick Question 🤔 — Is This Your Brand Right Now?
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Your online presence is either working for you — or it’s holding you back.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-[#febf11c0] shadow-md text-center flex flex-col items-center">
          <Image src="emoji/emoji1.webp" alt="Missing Opportunities" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Missing Out On Opportunities</h3>
          <p className="text-black text-sm">
            📄 No website? You re invisible to potential clients. People Google you, but find nothing. You are losing trust.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-[#febf11c0] shadow-md text-center flex flex-col items-center">
          <Image src="emoji/emoji2.webp" alt="Website Issues" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Website Isn’t Doing Its Job</h3>
          <p className="text-black text-sm">
            Got a site, but it’s not converting? Maybe it’s too basic, slow, or not clear. Visitors bounce, and leads never come.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-[#febf11c0] shadow-md text-center flex flex-col items-center">
          <Image src="emoji/emoji1.webp" alt="Left Behind" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">You are Getting Left Behind</h3>
          <p className="text-black text-sm">
            Your competitors are online with better design, faster sites, and clearer messages. You’re falling behind while they grow.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
      <Link href="/bookcall">  <button className="bg-[#febf11c0] hover:bg-[#F6C745] text-black font-bold py-3 px-6 rounded-full text-lg transition">
        Take Action-See Results
        </button>
        </Link>
      </div>
    </section>
  );
}

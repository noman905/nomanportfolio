"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section
      id="chooseus"
      className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-[#fff8f1] via-[#fff8f1] to-[#ec742440]"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
          Why Choose <span className="text-[#ec7424]">Us?</span>
        </h2>
        <p className="text-black mt-5 text-lg sm:text-lg mx-auto max-w-2xl">
          We solve the exact problems that hold your brand back online — here’s how.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-black text-white p-7 sm:p-9 rounded-2xl border border-[#1a1a1a] transition"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            ⚡ Fast & Reliable Websites
          </h3>
          <ul className="space-y-5 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-[#ec7424] rounded-full mt-1" />
              <p>
                <strong className="text-[#ec7424]">Problem:</strong> Slow websites lead to high bounce rates and lower trust.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-[#ec7424] rounded-full mt-1" />
              <p>
                <strong className="text-[#ec7424]">Solution:</strong> We build blazing-fast websites using Next.js + Tailwind.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#ec7424] text-black p-7 sm:p-9 rounded-2xl border border-black transition"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            🛠️ Ongoing Support for 30 Days
          </h3>
          <ul className="space-y-5 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-black rounded-full mt-1" />
              <p>
                <strong>Problem:</strong> Websites often need tweaks, fixes, and advice post-launch.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-black rounded-full mt-1" />
              <p>
                <strong>Solution:</strong> We offer a full month of free updates, advice, and maintenance.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-black text-white p-7 sm:p-9 rounded-2xl border border-[#1a1a1a] transition"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            📱 Mobile-Optimized Designs
          </h3>
          <ul className="space-y-5 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-[#ec7424] rounded-full mt-1" />
              <p>
                <strong className="text-[#ec7424]">Problem:</strong> Non-responsive sites lose mobile users.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-[#ec7424] rounded-full mt-1" />
              <p>
                <strong className="text-[#ec7424]">Solution:</strong> We build mobile-first layouts that look stunning on every screen.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="mt-20 text-center">
        <Link
          href="/bookcall"
          className="inline-block bg-[#ec7424] text-white font-semibold py-4 px-10 rounded-full text-lg hover:opacity-90 transition"
        >
          BOOK 1:1 DISCOVERY CALL
        </Link>
      </div>
    </section>
  );
}

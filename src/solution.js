"use client";
import Link from "next/link";
import { FiCheckCircle, FiZap, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: <FiCheckCircle size={24} />,
    title: "Build Instant Trust",
    desc: "A clean, modern site that shows you're legit. When people Google you — they’ll find a brand that builds confidence.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Turn Visitors Into Leads",
    desc: "I design websites that speak clearly, load fast, and guide your visitors toward action — no fluff, just results.",
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Stay Ahead of the Curve",
    desc: "With a high-converting site that looks better and performs faster than your competition — you’ll lead, not lag.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Real Results. Real Solutions.
        </h2>
        <p className="text-black text-base md:text-lg max-w-2xl mx-auto">
          I design websites that solve real business problems and help you grow.
        </p>
      </div>

      {/* Staggered Cards */}
      <div className="space-y-20 ">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center md:gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left: Icon + Title */}
            <div className="flex-shrink-0 ">
              <div className="bg-[#febf11c0] text-black p-4 rounded-full shadow-md w-14 h-14 flex items-center justify-center mb-4 md:mb-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-black max-w-xs">
                {item.title}
              </h3>
            </div>

            {/* Right: Description Block */}
            <div className="bg-[#f9f9f9] shadow-[#febf11c0] p-6 sm:p-8 rounded-2xl shadow-md max-w-2xl w-full">
              <div className="text-black text-[17px]">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <Link href="/bookcall">
          <button className="bg-[#febf11c0] hover:bg-[#F6C745] text-black font-semibold py-3 px-8 rounded-full text-lg transition">
            Book Your Discovery Call
          </button>
        </Link>
      </div>
    </section>
  );
}

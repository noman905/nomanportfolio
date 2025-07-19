'use client';
import Link from "next/link";
import { FiCheckCircle, FiZap, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    icon: <FiCheckCircle size={24} />,
    title: "Instant Credibility",
    desc: "A clean, modern website that shows you’re legit — so premium clients trust you from first click.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Built to Convert",
    desc: "No fluff. Just strategic design that guides visitors to take action — faster.",
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Stand Out, Stay Ahead",
    desc: "Look sharper. Load faster. Convert better than the coaches you’re competing with.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-[#fff8f1] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Visual / Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-auto flex flex-col gap-6"
        >
          <div className="w-full h-auto rounded-3xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/solution.png"
              alt="Coaching Growth"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* New Button Below Image */}
          <div className="flex justify-center mt-4">
            <Link href="/project ">
              <button className="bg-[#ec7424] hover:bg-[#d6631b] text-white font-semibold py-3 px-6 rounded-full text-base transition-all duration-300 shadow-md">
                Check Full Website
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black">
              <span className="text-[#ec7424]">Real Solutions</span> for Serious Growth
            </h2>
            <p className="text-lg md:text-xl text-black font-medium mt-4">
              These sites don’t just look good — they work hard to build trust and book calls.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 text-[#ec7424] mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  <p className="text-base text-black leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link href="/bookcall">
              <button className="bg-[#ec7424] hover:bg-[#d6631b] text-white  font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md">
                Book Your Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

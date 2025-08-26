'use client';
import Link from "next/link";
import { FiCheckCircle, FiZap, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
    
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import Image from "next/image";

const solutions = [
  {
    icon: <FiCheckCircle size={24} />,
    title: "Words That Convert",
    desc: "Headlines and copy crafted to grab attention, explain your SaaS value, and push visitors to take the next step.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Guided Pathways",
    desc: "Every section and button guides visitors effortlessly toward signing up, requesting a demo, or taking action — no confusion.",
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Credibility That Sells",
    desc: "Design and trust signals that show your SaaS is premium, reliable, and worth their time — clients feel confident immediately.",
  },
];
export default function SolutionSection() {
  return (
    <section className="bg-[#fff8f1] text-black px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

 

    <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="w-full lg:w-1/2 flex justify-center relative"
>
  <div className="w-full h-auto rounded-3xl overflow-hidden shadow-xl bg-white relative">
    {/* Before Label */}
    <span className="absolute top-4 left-4 bg-[#ec7424] text-white text-xs font-semibold px-2 py-1 rounded z-10">
      Before
    </span>
    
    {/* After Label */}
    <span className="absolute top-4 right-4 bg-[#ec7424] text-white text-xs font-semibold px-2 py-1 rounded z-10">
      After
    </span>

    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/solution.png" alt="Before" />}
      itemTwo={<ReactCompareSliderImage src="/solution1.png" alt="After" />}
      handle={<div className="w-2 h-full bg-[#ec7424] rounded-full" />}
    />
  </div>
</motion.div>

  


        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-snug text-black">
              <span className="text-[#ec7424]">Turn Your Landing Page</span> Into a Conversion Machine
            </h2>
            <p className="text-lg md:text-xl font-medium text-black mt-4">
              Stop losing clicks. Start converting them into paying customers with a website that guides, convinces, and converts.
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
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ec7424]"
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
              <button className="bg-[#ec7424] hover:bg-[#d6631b] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md">
                Book Your Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

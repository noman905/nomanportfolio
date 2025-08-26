'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const caseStudies = [
{ before: "/project/project4.png", after: "/solution1.png" },
{ before: "/project/project4.png", after: "/solution1.png" },
{ before: "/project/project4.png", after: "/solution1.png" },
{ before: "/project/project4.png", after: "/solution1.png" },
{ before: "/project/project4.png", after: "/solution1.png" },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl  font-extrabold text-black">
            Our Work in Action - See the Real Difference
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            See how we transform B2B SaaS landing pages — from underperforming to high-converting.
          </p>
        </div>

        {/* Case Study Sliders */}
<div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
  {caseStudies.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
      style={{ maxHeight: "400px" }} // limit height
    >
      {/* Labels */}
      <span className="absolute top-4 left-4 bg-[#ec7424] text-white text-xs font-semibold px-2 py-1 rounded z-10">
        Before
      </span>
      <span className="absolute top-4 right-4 bg-[#ec7424] text-white text-xs font-semibold px-2 py-1 rounded z-10">
        After
      </span>

      {/* Slider */}
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={item.before} alt="Before" style={{ height: "100%", objectFit: "cover" }} />}
        itemTwo={<ReactCompareSliderImage src={item.after} alt="After" style={{ height: "100%", objectFit: "cover" }} />}
        handle={<div className="w-2 h-full bg-[#ec7424] rounded-full" />}
      />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}


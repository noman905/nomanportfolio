'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery Call",
    description: "We begin with a call to understand your vision, goals, and what makes your brand unique.",
  },
  {
    title: "Creative Direction",
    description: "We align on the aesthetic and strategy that fits your brand — modern, clean, and conversion-focused.",
  },
  {
    title: "High-End Design",
    description: "We craft a luxury look and feel with premium visuals and user-focused layouts.",
  },
  {
    title: "Launch & Support",
    description: "We launch your website with performance optimization and continue to support post-launch if needed.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#fff8f1] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ec7424] mb-4">Our Signature Process</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A simple, powerful journey from vision to launch.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative ml-8">
          {/* Vertical Line Connecting the Steps */}
          <div className="absolute top-5 bottom-5 left-4 w-[2px] bg-[#ec7424] z-0"></div>

          <div className="grid gap-10 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-l-[6px] border-[#ec7424] rounded-2xl p-6 shadow-lg relative"
              >
                {/* Number Circle Positioned on the Line */}
                <div className="absolute -left-8 top-1 w-10 h-10 bg-[#ec7424] text-white flex items-center justify-center rounded-full font-semibold shadow-md text-lg z-10">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#ec7424] mb-2">{step.title}</h3>
                <p className="text-base text-black">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Audit",
    description: "We analyze your current landing page and speak with you to understand your goals, target audience, and key conversion bottlenecks.",
  },
  {
    title: "Strategic Messaging",
    description: "We craft copy that instantly communicates your SaaS value, captures attention, and guides visitors toward action.",
  },
  {
    title: "Conversion-Driven Design",
    description: "Our design focuses on clarity and trust — layouts, visuals, and CTAs are optimized to turn visitors into paying customers.",
  },
  {
    title: "Launch & Continuous Optimization",
    description: "We launch your high-converting landing page and monitor performance, making tweaks to maximize leads and ROI.",
  },
];


export default function ProcessSection() {
  return (
    <section className="bg-[#fff8f1] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ec7424] mb-4">
  Our Proven Process to Turn Visitors into Paying Customers
</h2>
<p className="text-lg text-black max-w-2xl mx-auto">
  From understanding your audience to crafting persuasive copy and high-converting design, we guide every step to maximize leads and revenue.
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

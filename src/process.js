"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const steps = [
  {
    id: 1,
    title: "1. STRATEGY & DISCOVERY",
    desc: "We start with a 1:1 call to understand your brand, goals, audience, and what success looks like — this is the foundation.",
    icon: "/process/process1.webp",
    bg: "bg-[#1a1a1a] text-white",
  },
  {
    id: 2,
    title: "2. STRUCTURE & MESSAGING",
    desc: "I plan the layout and write clear, conversion-focused messaging that leads your visitors to take action (no fluff, just results).",
    icon: "/process/process2.webp",
    bg: "bg-[#1a1a1a] text-white",
  },
  {
    id: 3,
    title: "3. DESIGN & DEVELOPMENT",
    desc: "Using Next.js and Tailwind CSS, I build a blazing-fast, SEO-optimized, mobile-friendly site that looks great and loads even better.",
    icon: "/process/process3.webp",
    bg: "bg-[#1a1a1a] text-white",
  },
  {
    id: 4,
    title: "4. LAUNCH & ONGOING SUPPORT",
    desc: "After launch, you get 30 days of support for revisions, small changes, or questions — because I care about your growth, not just the project.",
    icon: "/process/process4.webp",
    bg: "bg-[#1a1a1a] text-white",
  },
];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="bg-black py-28 px-4 sm:px-6 lg:px-8 scroll-mt-32"
    >
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-3xl sm:text-4xl">🚀</span>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent inline-block border-b-2 border-yellow-400 pb-2">
          MY STEP-BY-STEP PROCESS
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
          SITE THAT FEELS RIGHT
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          LOADS <span className="text-yellow-400">FAST</span>, AND{" "}
          <span className="text-yellow-400">CONVERTS</span> HARD
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          You don’t just need a site — you need one that builds trust, grabs attention, and converts.
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={ref} className="relative z-0 max-w-3xl mx-auto">
        {/* Vertical Scroll Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 sm:left-4 top-0 w-[3px] bg-[#febf11c0] rounded-full origin-top"
        />

        {/* Step Cards */}
        <div className="space-y-20 pl-10 sm:pl-12 relative z-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${step.bg} rounded-xl border border-gray-700 shadow-md`}
            >
              {/* Dot beside line */}
              <div className="absolute -left-6 top-6">
                <div className="w-4 h-4 bg-[#febf11c0] rounded-full border-4 border-black shadow-md" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-sm sm:text-base">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Link
          href="/bookcall"
          className="inline-block  text-black font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl bg-yellow-400 transition text-base sm:text-lg"
        >
          BOOK 1:1 DISCOVERY CALL
        </Link>
      </motion.div>
    </section>
  );
}

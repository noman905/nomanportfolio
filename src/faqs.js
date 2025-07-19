"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build my site?",
    answer:
      "Typically, 2-4 weeks depending on the complexity. We prioritize quality and speed without compromising either.",
  },
  {
    question: "Will my site be mobile-friendly and fast?",
    answer:
      "Absolutely! Every site I build is SEO-optimized, mobile-responsive, and designed to load fast to boost conversions.",
  },
  {
    question: "What if I need changes after the project?",
    answer:
      "You get 30 days of free support after launch — for small tweaks, revisions, or any questions you have.",
  },
  {
    question: "Can you help me with the branding and messaging too?",
    answer:
      "Yes! I help plan the structure and write clear, action-focused messaging so your site connects and converts.",
  },
  {
    question: "Do you offer ongoing support or website care plans?",
    answer:
      "Yes, I offer optional monthly support plans to keep your site updated, secured, and growing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-black leading-tight">
            Frequently Asked <span className="text-[#ec7424]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-black font-medium">
            Here everything you might want to know before we team up and build your next-level site.
          </p>
        </div>

        {/* Right FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-[#ec7424] rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.01]"
            >
              <button
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left text-base sm:text-lg font-semibold bg-white"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1">{faq.question}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ec7424] ml-4 text-xl sm:text-2xl"
                >
                  {openIndex === index ? "-" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4 },
                    }}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 text-black text-sm sm:text-base overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

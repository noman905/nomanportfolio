'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, MonitorSmartphone, TrendingDown } from "lucide-react"; // Premium icons

export default function Problem() {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Quick Question 🤔 — Is This Your Brand Right Now?
        </h2>
        <p className="text-black text-base md:text-lg max-w-xl mx-auto">
          Your online presence is either working for you — or it’s holding you back.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {[
          {
            icon: <Target size={64} strokeWidth={1.5} />,
            title: "No Clear Direction or Presence",
            description:
              "📄 No website? You're invisible to potential clients. People Google you, but find nothing. You're losing trust daily.",
          },
          {
            icon: <MonitorSmartphone size={64} strokeWidth={1.5} />,
            title: "Your Website Isn’t Working",
            description:
              "You have a site, but it's slow, unclear, or outdated. People visit… and then leave. No conversions. No growth.",
          },
          {
            icon: <TrendingDown size={64} strokeWidth={1.5} />,
            title: "Competitors Are Winning",
            description:
              "They look better, move faster, and convert more. You're watching them grow — while you're stuck.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md shadow-[#febf11c0] border border-[#febf11c0] text-center flex flex-col items-center hover:shadow-md transition-all duration-300"
          >
            <div className="text-[#F6C745] mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-black text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-14 text-center"
      >
        <Link href="/bookcall">
          <button className="bg-[#F6C745] hover:bg-[#e6b300] text-black font-bold py-3 px-3 md:px-8 rounded-full text-md md:text-lg shadow-md transition-all duration-300">
            Take Action — See Results
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

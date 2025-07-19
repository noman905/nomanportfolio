'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    image: '/project/project1.png',
    alt: 'Coaching Website',
    title: 'Luxury Website for a Sleep Coach',
    features: [
      'Emotive copy that connects',
      'Elegant, calming design',
      'Bold structure & flow',
      'Trust-building typography',
      'Responsive across devices',
    ],
    link: 'https://client1noman.netlify.app',
  },
  {
    image: '/project/project2.png',
    alt: 'Luxury Landing Page',
    title: 'Authority Website for SME Coach',
    features: [
      'Story-driven messaging',
      'Clean expert visuals',
      'Sharp layout balance',
      'Refined spacing strategy',
      'Mobile-first execution',
    ],
    link: 'https://client2noman.netlify.app',
  },
  {
    image: '/project/project3.png',
    alt: 'SaaS Website',
    title: 'Clarity & Confidence Coach Brand Site',
    features: [
      'Direct conversion copy',
      'Polished modern UI',
      'Lux-grade typography',
      'Smooth section flow',
      'Fully responsive',
    ],
    link: 'https://client3noman.netlify.app',
  },
];

export default function ShowcaseWork() {
  return (
    <section className="bg-[#fdf8f3] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#ec7424] mb-4">
          Elevating Coaches into Iconic Brands
        </h2>
        <p className="text-lg text-black mb-12 md:px-20">
          Explore a curated selection of websites crafted with <span className="font-semibold text-[#ec7424]">strategic messaging</span> and
          <span className="font-semibold text-[#ec7424]"> elegant design</span> — built to convert, impress, and position you as the authority.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-[#ec7424]/20 group bg-gradient-to-b from-[#fffdf9] to-[#fef8f1] p-5 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ec7424]/40"
            >
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={200}
                  height={200}
                  className="group-hover:scale-105 h-full w-full transition-transform duration-500 rounded-xl"
                />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold text-[#ec7424] mb-2">{project.title}</h3>
                <ul className="text-sm text-[#000] list-none space-y-1 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#ec7424]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.link}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-auto  inline-block bg-[#ec7424] hover:bg-[#d4621c] text-white text-sm font-semibold py-2 px-4 rounded-xl transition"
                >
                  View Full Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

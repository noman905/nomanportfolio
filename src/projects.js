'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'SLEEP COACHING PLATFORM',
    highlight: 'SLEEP COACH',
    description:
      '✅ Hero section with calming animation & conversion-focused CTA\n✅ Integrated sleep assessment quiz for lead generation\n✅ Premium testimonial slider for authority building\n✅ Soft gradient color branding to match niche',
    image: '/project/project1.png',
    alt: 'Sleep Coach Website',
    url: 'https://client1noman.netlify.app/',
  },
  {
    title: 'REFERRAL COACHING FOR SMEs',
    highlight: 'REFERRAL COACH',
    description:
      '✅ High-converting lead magnet section (PDF download)\n✅ Clear client journey flow with result-oriented messaging\n✅ Animated logos & counters to show credibility\n✅ Custom-built FAQ accordion with smooth UX',
    image: '/project/project2.png',
    alt: 'Referral Coach Website',
    url: 'https://client2noman.netlify.app/',
  },
  {
    title: 'CONFIDENCE COACHING COLLECTIVE',
    highlight: 'CONFIDENCE COACH',
    description:
      '✅ Stat-based results section with animated counters\n✅ Clean design focused on storytelling & authority\n✅ Embedded video & testimonials for proof\n✅ Custom CTA sections built to convert funders',
    image: '/project/project3.png',
    alt: 'Confidence Coach Website',
    url: 'https://client3noman.netlify.app',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 md:px-10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black pb-2">
          <span className="text-5xl">🧠</span> COACHING SITES THAT BUILD{' '}
          <span className="text-[#febf11c0]">AUTHORITY</span>
        </h2>
        <p className="text-black max-w-2xl mx-auto text-base md:text-lg mb-12">
          Here’s how I help coaches turn their expertise into results-focused websites with premium design and smart features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-yellow-400 bg-gradient-to-b from-[#fcfcfc] via-white to-[#efc4181f] rounded-lg p-3 sm:p-4 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={300}
                height={180}
                className="rounded-2xl sm:rounded-2xl border border-black"
              />
              <h3 className="mt-3 text-base sm:text-lg font-bold text-black text-center">
                <span className="text-yellow-500">{project.highlight}</span>{' '}
                {project.title.replace(project.highlight, '').trim()}
              </h3>
              <ul className="text-black text-sm mt-2 text-left list-disc list-inside whitespace-pre-line">
                {project.description.split('\n').map((line, i) => (
                  <li key={i}>{line.replace('✅ ', '')}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full text-sm sm:text-base"
              >
                Check live website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

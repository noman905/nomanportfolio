import Image from 'next/image';

const projects = [
  {
    title: 'PRODUCTIVITY SAAS PLATFORM',
    highlight: 'PRODUCTIVITY',
    description:
      'A clean and responsive productivity platform built to help users organize tasks, track habits, and boost daily focus. Designed with a modern UI and built using React and Tailwind CSS.',
    image: '/project/project1.webp',
    alt: 'Productivity SaaS Platform',
  },
  {
    title: 'SONICVIBE - PURE SOUND',
    highlight: 'SONICVIBE',
    description:
      'SonicVibe offers premium wireless earbuds designed to deliver crystal-clear sound and long-lasting comfort. Perfect for those who want to enjoy high-quality audio anytime.',
    image: '/project/project2.webp',
    alt: 'SonicVibe - Pure Sound',
  },
  {
    title: 'DELISHDASH - FAST EATS',
    highlight: 'DELISHDASH',
    description:
      'DelishDash is your go-to platform for fast, reliable food delivery. With a wide variety of restaurant choices, we bring delicious meals straight to your doorstep with ease and speed.',
    image: '/project/project3.webp',
    alt: 'DelishDash - Fast Eats',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black pb-2">
          <span className="text-5xl">🎯</span> PROJECTS THAT DELIVER{' '}
          <span className="text-[#febf11c0]">RESULTS</span>
        </h2>
        <p className="text-black max-w-2xl mx-auto text-base md:text-lg mb-12">
          From small ideas to fully working websites here's a quick look at what I can build for your business.
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
                className="rounded-2xl sm:rounded-3xl border border-black"
              />
              <h3 className="mt-3 text-base sm:text-lg font-bold text-black text-center">
                <span className="text-yellow-500">{project.highlight}</span>{' '}
                {project.title.replace(project.highlight, '').trim()}
              </h3>
              <p className="text-black text-sm mt-2 text-center">{project.description}</p>
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full text-sm sm:text-base">
                Check live website
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

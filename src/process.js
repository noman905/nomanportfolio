import Image from "next/image";
import Link from "next/link";

export default function ProcessSection() {


  const products=[
    {
      id: 1,
      title: "1. STRATEGY & DISCOVERY",
      desc: "We start with a 1:1 call to understand your brand, goals, audience, and what success looks like — this is the foundation.",
      bg: "bg-black text-white",
      icon: "/process/process1.webp",
    },
    {
      id: 2,
      title: "2. STRUCTURE & MESSAGING",
      desc: "I plan the layout and write clear, conversion-focused messaging that leads your visitors to take action (no fluff, just results).",
      bg: "bg-yellow-400 text-black",
      icon: "/process/process2.webp",
    },
    {
      id: 3,
      title: "3. DESIGN & DEVELOPMENT",
      desc: "Using Next.js and Tailwind CSS, I build a blazing-fast, SEO-optimized, mobile-friendly site that looks great and loads even better.",
      bg: "bg-black text-white",
      icon: "/process/process3.webp",
    },
    {
      id: 4,
      title: "4. LAUNCH & ONGOING SUPPORT",
      desc: "After launch, you get 30 days of support for revisions, small changes, or questions — because I care about your growth, not just the project.",
      bg: "bg-yellow-400 text-black",
      icon: "/process/process4.webp",
    },
  ]

  return (
    <section id="process" className="bg-white py-20 px-1 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Heading */}
        <span className="text-3xl sm:text-4xl">🚀</span>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-black via-yellow-400 to-yellow-400 bg-clip-text text-transparent inline-block border-b-2 pb-2">
          MY STEP-BY-STEP PROCESS
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          SITE THAT FEELS RIGHT
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
          LOADS <span className="text-yellow-400">FAST</span>, AND{" "}
          <span className="text-yellow-400">CONVERTS</span> HARD
        </h1>

        <p className="text-black max-w-2xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg">
          You don’t just need a site — you need one that builds trust, grabs attention, and converts.
        </p>

        {/* Yellow Blend Container */}
        <div className="rounded-2xl bg-gradient-to-br from-white via-white to-[#febf11c0] p-2 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Step Cards */}
            {products.map((step) => (
              <div
                key={step.id}
                className={`group ${step.bg} p-6 sm:p-8 rounded-2xl flex flex-col items-start text-left relative overflow-hidden transition-transform hover:-translate-y-1 hover:scale-[1.03] duration-300`}
              >
                <div className="absolute top-1 right-2">
                  <Image
                    src={step.icon}
                    alt={`Step ${step.id} Icon`}
                    width={60}
                    height={60}
                    className="w-auto h-auto max-w-[60px] object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/bookcall"
              className="inline-block bg-[#febf11c0] text-black font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl hover:bg-yellow-400 transition text-base sm:text-lg"
            >
              BOOK 1:1 DISCOVERY CALL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


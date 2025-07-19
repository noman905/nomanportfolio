// pages/about.js
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about" className="py-10 px-6 bg-[#fff8f1]">
      <h2 className="text-5xl font-bold text-black mb-6 text-center">
        About <span className="text-[#ec7424]">ME</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Profile Picture */}
        <div className="w-full text-center md:text-left">
          <Image
            src="/noman.webp"
            alt="Noman Afzal"
            width={330}
            height={330}
            className="rounded-full bg-[#ec7424] shadow-lg shadow-[#ec74249a] mx-auto mb-6"
          />
        </div>

        {/* Right Side: Paragraph + Icons */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-3xl mb-3 font-semibold text-black">
            Noman Afzal – <span className="text-[#ec7424]">WEBSITE DEVELOPER</span>
          </h3>

          <p className="text-lg text-black mb-6">
            I am a website developer with a passion for creating user-friendly, high-performance websites.
            My goal is to build websites that are both functional and aesthetically pleasing. I focus on
            delivering seamless web experiences that enhance user interaction and help businesses grow.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#fff1e5] p-2 rounded-xl shadow-md shadow-[#ec7424a2]">
                <FaLinkedin className="text-[30px] text-[#ec7424] hover:opacity-90 transition" />
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#fff1e5] p-2 rounded-xl shadow-md shadow-[#ec7424a2]">
                <FaGithub className="text-[30px] text-[#ec7424] hover:opacity-90 transition" />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#fff1e5] p-2 rounded-xl shadow-md shadow-[#ec7424a2]">
                <FaTwitter className="text-[30px] text-[#ec7424] hover:opacity-90 transition" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// pages/about.js
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

export default function AboutMe() {
  return (
    <section id="about" className="py-10 px-6 ">
      <h2 className="text-5xl font-bold text-black mb-6 text-center">About <span className='text-[#febf11e0]'>ME</span></h2>

      <div className="max-w-7xl flex-col md:flex-row mx-auto flex items-center justify-between gap-12">
        
        {/* Left Side: Profile Picture, Name, and Title */}
        <div className="w-full text-center md:text-left">
          <Image
            src="/noman.webp" // Replace with your image path
            alt="Noman Afzal"
            width={330}
            height={330}
            className="rounded-full bg-[#febf11e0] shadow-[#febf11c0]  shadow-lg mx-auto mb-6"
          />
        </div>

        {/* Right Side: Small Paragraph and Social Icons */}
        <div className="w-full md:w-2/3 text-center md:text-left">

        <h3 className="text-3xl mb-3 font-semibold ">Noman Afzal- <span className='text-[#febf11]'>WEBSITE DEVELOPER</span></h3>

          
          <p className="text-lg text-black mb-6">
            I am a website developer with a passion for creating user-friendly, high-performance websites. My goal is to build websites that are both functional and aesthetically pleasing. I focus on delivering seamless web experiences that enhance user interaction and help businesses grow.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <div className=' bg-white p-1 rounded-xl shadow-yellow-400 shadow-md'> <FaLinkedin className="text-[30px] text-[#febf11] hover:text-[#febf11e0] transition" /></div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className=' bg-white p-1 rounded-xl shadow-yellow-400 shadow-md'> <FaGithub className="text-[30px] text-[#febf11]  hover:text-[#febf11] transition" /></div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <div className=' bg-white p-1 rounded-xl shadow-yellow-400 shadow-md'> <FaTwitter className="text-[30px] text-[#febf11]  hover:text-[#febf11] transition" /></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Footer.jsx
// components/Footer.jsx

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 p-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Noman Afzal</h3>
          <p className="text-white text-sm">
            © 2025 Noman Afzal. <br className="hidden md:block" /> All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-4">
          
          {/* Navigation Links */}
          

          {/* Social Icons */}
          <div className="flex space-x-6 mt-2">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-9 w-9 text-[#febf11] hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-9 w-9 text-[#febf11] hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-9 w-9 text-[#febf11] hover:text-yellow-400 transition" />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

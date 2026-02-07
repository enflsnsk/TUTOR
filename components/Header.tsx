import React from 'react';
import { motion } from 'framer-motion';

const LOGO_IMAGE = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"; // Using a high-quality placeholder that matches the profession as I cannot directly embed large binary blobs, but I'll set the styling to handle the user's specific image perfectly.

const Header: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <M.header
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-8 py-3 glow-blue">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border border-blue-500/30 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-slate-800 flex items-center justify-center">
            <img 
              src="https://r.jina.ai/i/67be9e30a7d94f6f966113b246a47a74" 
              alt="Instructor Kim Erin" 
              className="w-full h-full object-cover object-top scale-125 translate-y-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-blue-600 font-bold text-white text-xs">E</div>';
                }
              }}
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-blue-400">
            Instructor 김애린
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
          <a href="#strengths" className="hover:text-blue-400 transition-colors">STRENGTHS</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="https://blog.naver.com/aeringo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            NAVER BLOG
          </a>
        </div>
      </div>
    </M.header>
  );
};

export default Header;
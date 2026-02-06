
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-8 py-3 glow-blue">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg transform rotate-45 flex items-center justify-center">
            <span className="text-white font-bold transform -rotate-45">E</span>
          </div>
          <span className="font-futuristic font-bold text-xl tracking-tight text-blue-400">
            KIM ERIN
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
          <a href="#strengths" className="hover:text-blue-400 transition-colors">STRENGTHS</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
          <a href="#work" className="hover:text-blue-400 transition-colors">LATEST WORK</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="https://blog.naver.com/aeringo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            NAVER BLOG
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

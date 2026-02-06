
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Strengths from './components/Strengths';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <AnimatePresence>
        {loading ? (
          <M.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <M.h1 
                className="text-4xl font-futuristic font-bold tracking-tighter text-blue-500 neon-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Instructor 김애린
              </M.h1>
              <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <M.div 
                  className="absolute inset-0 bg-blue-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
              <p className="mt-4 text-slate-500 text-sm tracking-widest uppercase">Initializing Neural Interface...</p>
            </div>
          </M.div>
        ) : (
          <M.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Hero />
            <About />
            <Strengths />
            <Services />
            <Footer />
          </M.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

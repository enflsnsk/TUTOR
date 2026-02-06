
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div 
          className="w-[200%] h-[200%] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{ transform: 'perspective(500px) rotateX(60deg) translateY(-20%)' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <M.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block glass px-4 py-1 rounded-full text-blue-400 text-xs font-bold tracking-[0.2em] mb-6 border-blue-500/30">
            AI TRANSFORMATION CONSULTANT
          </span>
          <h1 className="text-5xl md:text-8xl font-futuristic font-bold leading-tight mb-6">
            <span className="block text-white">FUTURE OF</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 neon-text">
              EDUCATION
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-10 break-keep">
            복잡한 인공지능 기술을 일상과 업무의 언어로 변환합니다.<br/> 
            김애린 강사와 함께하는 디지털 트랜스포메이션의 새로운 여정.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <M.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-950 font-bold px-10 py-4 rounded-xl shadow-xl shadow-blue-500/20"
              onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              시작하기
            </M.button>
            <M.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border-slate-700 text-white font-bold px-10 py-4 rounded-xl transition-colors hover:bg-white/5"
              onClick={() => { window.open('https://blog.naver.com/aeringo', '_blank'); }}
            >
              블로그 방문
            </M.button>
          </div>
        </M.div>
      </div>

      {/* Floating Elements */}
      <M.div 
        className="absolute bottom-20 left-10 w-24 h-24 glass border-blue-500/50 rounded-2xl hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <M.div 
        className="absolute top-40 right-10 w-32 h-32 glass border-purple-500/50 rounded-full hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    </section>
  );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileEdit, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <footer className="py-20 px-6 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side: Brand & Description */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg transform rotate-45 flex items-center justify-center">
              <span className="text-white font-bold transform -rotate-45">E</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-blue-400">
              Instructor 김애린
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed break-keep">
            김애린 강사 Instructor Kim Aerin은 더 나은 미래를 위해 인공지능 기술의 진입장벽을 낮추고, 
            모두가 AI를 도구 삼아 더 창의적인 삶을 살 수 있도록 돕습니다.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <M.a 
              href="https://blog.naver.com/aeringo" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900/50 border border-slate-800 text-slate-300 text-[10px] font-bold tracking-[0.2em] px-8 py-3 rounded-xl transition-all hover:text-blue-400 uppercase shadow-lg shadow-black/20"
            >
              NAVER BLOG
            </M.a>
            <div className="flex items-center space-x-6 text-slate-400 text-xs font-medium tracking-widest uppercase">
               <span className="opacity-20 hidden md:block">•</span>
               <span className="text-blue-500/50">AI Transformation</span>
            </div>
          </div>
        </div>

        {/* Right Side: Multiple CTA Buttons */}
        <div className="glass p-10 rounded-[2.5rem] w-full lg:w-auto min-w-[320px] border-blue-500/5 shadow-2xl shadow-blue-500/5">
          <div className="mb-8">
            <h4 className="text-white font-bold text-2xl mb-2 tracking-tight break-keep">Ready to AI Transform?</h4>
            <p className="text-slate-400 text-sm break-keep">지금 바로 전문가의 교육과 컨설팅을 경험하세요.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Consulting Inquiry */}
            <M.a 
              href="https://blog.naver.com/aeringo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20"
            >
              <Calendar size={18} />
              <span>컨설팅 문의하기</span>
            </M.a>

            {/* Course Registration */}
            <M.a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_sDdoYQiEFk7aEfT2TW7T-ty_JCFe1Z3y-v70NftoBFmyCA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-3 glass border-white/10 hover:border-blue-500/30 text-white font-bold px-8 py-4 rounded-2xl transition-all"
            >
              <FileEdit size={18} className="text-blue-400" />
              <span>수강 신청하기</span>
            </M.a>

            {/* KakaoTalk 1:1 Inquiry */}
            <M.a 
              href="https://open.kakao.com/o/sZFMUe0h"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-3 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold px-8 py-4 rounded-2xl transition-all shadow-lg"
            >
              <MessageCircle size={18} fill="#191919" />
              <span>카카오톡 1:1 문의</span>
            </M.a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] tracking-[0.2em] uppercase font-mono">
        <p>&copy; 2024 KIM ERIN. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span className="hover:text-slate-400 cursor-pointer transition-colors">PRIVACY POLICY</span>
          <span className="hover:text-slate-400 cursor-pointer transition-colors">TERMS OF SERVICE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

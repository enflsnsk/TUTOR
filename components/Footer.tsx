
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg transform rotate-45 flex items-center justify-center">
              <span className="text-white font-bold transform -rotate-45">E</span>
            </div>
            <span className="font-futuristic font-bold text-2xl tracking-tight text-blue-400">
              KIM ERIN
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm mb-6">
            김애린은 더 나은 미래를 위해 인공지능 기술의 진입장벽을 낮추고, 
            모두가 AI를 도구 삼아 더 창의적인 삶을 살 수 있도록 돕습니다.
          </p>
          <div className="flex space-x-6 text-slate-400">
             <a href="https://blog.naver.com/aeringo" target="_blank" className="hover:text-blue-400 transition-colors">Naver Blog</a>
             <span>•</span>
             <span>AI Transformation</span>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl w-full md:w-auto text-center md:text-left">
          <h4 className="text-white font-bold text-2xl mb-2">Ready to AI Transform?</h4>
          <p className="text-slate-400 mb-8">지금 바로 전문가의 도움을 받으세요.</p>
          <motion.a 
            href="https://blog.naver.com/aeringo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-12 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20"
          >
            컨설팅 문의하기
          </motion.a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs tracking-widest uppercase">
        <p>&copy; 2024 KIM ERIN. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>PRIVACY POLICY</span>
          <span>TERMS OF SERVICE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

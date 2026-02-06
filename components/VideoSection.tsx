
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-400 font-futuristic font-bold mb-4 tracking-widest uppercase">Latest Presentation</h2>
          <h3 className="text-4xl font-bold text-white mb-6">오렌지3로 배우는 노코드 머신러닝</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">김애린 강사의 실전 강의 현장을 확인해보세요.</p>
        </motion.div>

        <motion.div 
          className="relative glass rounded-[2.5rem] p-4 border-white/5 glow-blue overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video rounded-[1.5rem] overflow-hidden bg-black relative">
            {/* The actual video tag for the user to put their uploaded file */}
            {/* Note: In a live environment, the user should put their actual path here */}
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://picsum.photos/seed/video/1280/720"
            >
              <source src="./video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
               <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <Play className="text-white ml-1" fill="white" size={32} />
               </div>
            </div>
          </div>

          <div className="absolute top-8 left-8 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="text-xs font-bold text-white tracking-widest">LIVE SESSION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

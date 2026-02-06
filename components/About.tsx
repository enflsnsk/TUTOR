
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Terminal, CheckCircle2, History, Award } from 'lucide-react';

const tags = [
  "디지털 강사", "디지털튜터", "데이터분석", "코딩", "진로체험", 
  "오렌지3", "메타버스", "인공지능", "노코드AI", "생성형 AI",
  "데이터리터러시", "미래교육", "창의융합", "AI 리터러시"
];

const careerHighlights = [
  { type: "current", text: "디지털새싹 강사" },
  { type: "current", text: "2025경기SW미래채움 강사" },
  { type: "current", text: "찾아가는 학교 컨설팅 강사" },
  { type: "current", text: "2025경기미래교육 파주팹랩 창의융합 강사" },
  { type: "current", text: "인천 계산여자고등학교 디지털튜터" },
  { type: "past", text: "구로청소년센터 AI인공지능 강사" },
  { type: "past", text: "파주 송화초 디지털튜터" },
  { type: "past", text: "인천 용마초 디지털튜터" },
  { type: "past", text: "2024 경기도AI도민강사" },
];

const About: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <M.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-futuristic font-bold text-blue-400 mb-4 tracking-[0.2em]">ABOUT ME</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            김애린 강사
          </h3>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light break-keep">
            인공지능 교육 전문가이자 AI 트랜스포메이션 컨설턴트로서, <br className="hidden md:block"/>
            복잡한 기술을 누구나 직관적으로 이해하고 실무에 즉시 적용할 수 있도록 돕습니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tags.map((tag, i) => (
              <span key={i} className="text-[11px] font-bold tracking-wider px-4 py-1.5 bg-slate-800/30 text-blue-300 rounded-full border border-blue-500/10 backdrop-blur-sm">
                #{tag}
              </span>
            ))}
          </div>
        </M.div>

        {/* Career Highlights Center Card */}
        <M.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-10 rounded-[2.5rem] border-blue-500/10 mb-12 relative overflow-hidden group shadow-2xl shadow-blue-500/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
               <Award size={32} className="text-blue-400" />
            </div>
            <h4 className="text-blue-400 font-futuristic text-sm font-bold tracking-[0.4em] uppercase">Career Highlights</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {careerHighlights.map((item, idx) => (
              <M.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 + 0.3 }}
                className="flex items-center gap-4 group/item"
              >
                <div className="flex-shrink-0">
                  {item.type === 'current' ? (
                    <CheckCircle2 size={18} className="text-blue-500 group-hover/item:scale-125 transition-transform" />
                  ) : (
                    <History size={18} className="text-slate-600 group-hover/item:scale-125 transition-transform" />
                  )}
                </div>
                <div className="flex gap-3 items-center">
                  <span className={`text-[9px] font-black w-6 h-6 flex items-center justify-center rounded-full border ${item.type === 'current' ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' : 'border-slate-800 text-slate-600'}`}>
                    {item.type === 'current' ? '현' : '전'}
                  </span>
                  <span className={`text-base tracking-tight break-keep ${item.type === 'current' ? 'text-slate-100 font-medium' : 'text-slate-500'}`}>
                    {item.text}
                  </span>
                </div>
              </M.div>
            ))}
          </div>
        </M.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <M.div 
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all text-center flex flex-col items-center"
          >
            <Brain className="text-blue-500 mb-4" size={40} />
            <h4 className="text-white text-xl font-bold mb-2 break-keep">Gen AI Specialist</h4>
            <p className="text-slate-400 text-sm break-keep">실생활과 실무에 최적화된 생성형 AI 활용법을 전파합니다.</p>
          </M.div>
          <M.div 
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-purple-500/20 transition-all text-center flex flex-col items-center"
          >
            <Terminal className="text-purple-500 mb-4" size={40} />
            <h4 className="text-white text-xl font-bold mb-2 break-keep">Process Designer</h4>
            <p className="text-slate-400 text-sm break-keep">노코드 툴과 AI를 활용한 개인 및 조직의 업무 자동화를 설계합니다.</p>
          </M.div>
        </div>
      </div>
    </section>
  );
};

export default About;

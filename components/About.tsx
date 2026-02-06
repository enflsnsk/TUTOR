
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Cpu, Sparkles, Terminal } from 'lucide-react';

const tags = [
  "디지털 강사", "디지털튜터", "데이터분석", "코딩", "진로체험", 
  "오렌지3", "메타버스", "인공지능", "노코드AI", "생성형 AI"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-futuristic font-bold text-blue-400 mb-2">WHO IS KIM ERIN?</h2>
            <h3 className="text-4xl font-bold mb-6 text-white">인공지능 교육 전문가 &<br/> AI 트랜스포메이션 컨설턴트</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              생성형 AI 활용법 교육, 업무 자동화 프로세스 설계, 기업 맞춤형 AI 도입 코칭을 전문으로 합니다. 
              제미나이, 챗GPT 등 최첨단 AI 도구를 누구나 쉽게 다룰 수 있도록 돕고 있습니다.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-bold tracking-wider px-3 py-1 bg-slate-800 text-blue-300 rounded-md border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <Brain className="text-blue-500 mb-3" size={32} />
                <h4 className="text-white font-bold mb-1">Gen AI Specialist</h4>
                <p className="text-slate-500 text-sm">실무형 AI 교육 전문가</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Terminal className="text-purple-500 mb-3" size={32} />
                <h4 className="text-white font-bold mb-1">Process Designer</h4>
                <p className="text-slate-500 text-sm">업무 자동화 설계</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden glass border-blue-500/20 glow-blue">
               <img 
                src="https://picsum.photos/seed/kimerin/800/800" 
                alt="Kim Erin" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-futuristic text-5xl font-bold">KIM ERIN</p>
                <p className="text-blue-400 font-bold tracking-widest uppercase">Expert Consultant</p>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

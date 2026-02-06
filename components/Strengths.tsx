
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart3, Rocket } from 'lucide-react';

const strengthData = [
  {
    title: "기술의 일상화",
    desc: "복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환하는 능력",
    icon: <Zap className="text-yellow-400" />,
    color: "from-yellow-400/20"
  },
  {
    title: "실전형 커리큘럼",
    desc: "이론을 넘어 즉각적인 결과물을 만들어내는 핸즈온 중심 강의",
    icon: <Target className="text-red-400" />,
    color: "from-red-400/20"
  },
  {
    title: "트렌드 분석력",
    desc: "급변하는 AI 생태계에서 핵심 도구를 선별하고 적용하는 통찰력",
    icon: <BarChart3 className="text-blue-400" />,
    color: "from-blue-400/20"
  },
  {
    title: "솔루션 중심 접근",
    desc: "클라이언트 업무 현장에 즉시 도입 가능한 실용적인 AI 해결책",
    icon: <Rocket className="text-purple-400" />,
    color: "from-purple-400/20"
  }
];

const Strengths: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <section id="strengths" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <M.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-400 font-futuristic font-bold mb-4 tracking-widest uppercase">Core Strengths</h2>
          <h3 className="text-4xl font-bold text-white break-keep">압도적인 전문성의 4가지 포인트</h3>
        </M.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengthData.map((item, idx) => (
            <M.div
              key={idx}
              className={`relative glass p-8 rounded-3xl overflow-hidden group hover:border-white/20 transition-all`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 break-keep">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">{item.desc}</p>
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;

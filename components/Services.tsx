
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "생성형 AI 실무 워크숍",
    description: "프롬프트 엔지니어링 및 AI 툴 활용 능력 강화 교육. 이론을 넘어 실제 결과물을 만들어냅니다.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
  },
  {
    title: "AI 기반 업무 자동화",
    description: "노코드 툴과 AI를 결합한 스마트 워크플레이스 구축. 반복 업무를 자동화하여 생산성을 극대화합니다.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
  },
  {
    title: "AI 리터러시 강연",
    description: "비전공자도 쉽게 이해하는 인공지능 기술의 현재와 미래. 대중적인 시각에서 AI를 조망합니다.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
  }
];

const Services: React.FC = () => {
  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-blue-400 font-futuristic font-bold mb-4 tracking-widest uppercase">Our Services</h2>
            <h3 className="text-4xl font-bold text-white break-keep">전문 교육 및 컨설팅</h3>
          </div>
          <p className="text-slate-400 mt-4 md:mt-0 max-w-sm break-keep">기업과 개인의 필요에 맞춘 최적화된 AI 도입 솔루션을 제공합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <M.div
              key={idx}
              className="perspective-1000 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="relative glass rounded-3xl overflow-hidden transition-all duration-500 transform-gpu group-hover:rotate-y-6 group-hover:rotate-x-2 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors break-keep">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 break-keep flex-1">
                    {service.description}
                  </p>
                  <div className="w-10 h-1 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, ShieldCheck, Zap, Loader2, AlertCircle, Maximize2, Activity, Cpu } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);

  // Fix: Use type-casted motion to bypass systemic type mismatches in the environment
  const M = motion as any;

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const playPromiseRef = useRef<Promise<void> | null>(null);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        const playPromise = video.play();
        playPromiseRef.current = playPromise;
        await playPromise;
        playPromiseRef.current = null;
        setIsPlaying(true);
      } catch (err: any) {
        playPromiseRef.current = null;
        if (err.name !== 'AbortError') {
          console.error("Playback failed:", err);
          setHasError(true);
        }
      }
    } else {
      if (playPromiseRef.current) {
        try { await playPromiseRef.current; } catch (e) {}
        playPromiseRef.current = null;
      }
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);
    const onError = () => setHasError(true);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', onError);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('error', onError);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section id="work" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Matrix-like Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <M.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 glass px-5 py-2 rounded-full border-blue-500/40 mb-8">
            <Activity size={16} className="text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-futuristic text-[11px] font-bold tracking-[0.4em] uppercase">
              Operational Neural Feed
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            AI 교육의 <span className="text-blue-500 neon-text">새로운 패러다임</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            데이터 분석부터 비즈니스 자동화까지, 실제 강의 현장의 열기를 3D 디지털 인터페이스로 경험하세요.
          </p>
        </M.div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-2000"
        >
          <M.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative glass rounded-[3rem] p-6 border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)] overflow-hidden"
          >
            {/* Inner Futuristic Bezel */}
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner group">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover scale-[1.01]"
                onClick={() => { togglePlay(); }}
                playsInline
                preload="auto"
                poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000"
              >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* HUD Elements Over Video */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />
                
                {/* Top HUD */}
                <div className="absolute top-6 left-8 right-8 flex justify-between items-start">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`} />
                      <span className="text-[10px] font-futuristic text-white/80 tracking-widest">LIVE_DATA_STREAM</span>
                    </div>
                    <span className="text-[8px] text-blue-500/60 font-mono tracking-tighter">COORD: 37.5665° N, 126.9780° E</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="glass px-3 py-1 rounded border-white/5 flex items-center space-x-2">
                      <Cpu size={10} className="text-blue-400" />
                      <span className="text-[9px] text-white/50 font-mono">NEURAL_RT_0.8ms</span>
                    </div>
                  </div>
                </div>

                {/* Bottom HUD */}
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                    <M.div 
                      className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-mono text-white/40">
                    <span className="tracking-widest">BUFFER_STATUS: OPTIMAL</span>
                    <span className="tracking-widest uppercase">Encryption: AES-256-QUANTUM</span>
                  </div>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <M.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[3px] cursor-pointer"
                    onClick={() => { togglePlay(); }}
                  >
                    <M.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-28 h-28 bg-blue-600/90 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.7)] border border-white/30 mb-6 group-hover:bg-blue-500 transition-colors"
                    >
                      <Play className="text-white ml-2" fill="white" size={48} />
                    </M.div>
                    <M.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <p className="text-white font-futuristic text-sm tracking-[0.8em] uppercase drop-shadow-lg mb-2">Initialize Interface</p>
                      <div className="w-12 h-px bg-blue-500/50 mx-auto" />
                    </M.div>
                  </M.div>
                )}

                {isBuffering && isPlaying && (
                  <M.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/20 pointer-events-none"
                  >
                    <Loader2 className="text-blue-500 animate-spin" size={60} />
                  </M.div>
                )}

                {hasError && (
                  <M.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl text-center px-12"
                  >
                    <AlertCircle className="text-red-500 mb-6" size={64} />
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight uppercase">Connection Severed</h4>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
                      'video.mp4' 파일을 로드할 수 없습니다. 시스템 루트에 영상 파일이 존재하는지 확인하십시오.
                    </p>
                    <M.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e: React.MouseEvent) => { e.stopPropagation(); setHasError(false); videoRef.current?.load(); }}
                      className="bg-white text-slate-950 px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-white/10"
                    >
                      Retry Connection
                    </M.button>
                  </M.div>
                )}
              </AnimatePresence>
            </div>
          </M.div>

          {/* Exterior Floating Elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 glass rounded-3xl -z-10 animate-bounce opacity-20" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 glass rounded-full -z-10 animate-pulse opacity-20" />
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 opacity-50">
          <div className="flex items-center space-x-3">
             <Maximize2 size={14} className="text-slate-500" />
             <span className="text-[10px] tracking-widest uppercase font-mono">Full Dynamic Rendering</span>
          </div>
          <div className="flex items-center space-x-3">
             <ShieldCheck size={14} className="text-slate-500" />
             <span className="text-[10px] tracking-widest uppercase font-mono">Encrypted Data Stream</span>
          </div>
          <div className="flex items-center space-x-3">
             <Zap size={14} className="text-slate-500" />
             <span className="text-[10px] tracking-widest uppercase font-mono">Ultra-low Latency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

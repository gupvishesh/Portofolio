import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Command, Target, Activity, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);

  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Corner Brackets (Viewfinder) */}
      <div className="absolute inset-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-600/30" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-600/30" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-600/30" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-600/30" />
      </div>

      {/* Floating Technical Data */}
      <div className="absolute top-32 left-10 font-mono text-[10px] uppercase tracking-widest text-blue-600/40 space-y-2 hidden md:block">
        <div className="flex items-center gap-2">
          <Activity size={12} className="animate-pulse" />
          <span>System: Active_Link</span>
        </div>
        <div className="flex items-center gap-2">
          <Target size={12} />
          <span>Tracking: {mousePos.x}, {mousePos.y}</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu size={12} />
          <span>Kernel: v4.2.0_Stable</span>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 font-mono text-[10px] uppercase tracking-widest text-blue-600/40 space-y-2 hidden md:block text-right">
        <div className="flex items-center justify-end gap-2">
          <span>Neural_Net: Online</span>
          <Globe size={12} className="animate-spin-slow" />
        </div>
        <p>Memory_Usage: 14.2%</p>
        <p>Latency: 2ms</p>
      </div>

      {/* Main HUD Core */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Rotating Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[400px] h-[400px] border border-blue-600/10 rounded-full flex items-center justify-center"
          >
            <div className="w-[350px] h-[350px] border border-dashed border-blue-600/20 rounded-full" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-blue-600/10 rounded-full"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 border border-blue-600/30 bg-blue-600/5 text-blue-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
            Identity_Verified // Vishesh Gupta
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            VISHESH <br />
            <span className="text-blue-600">GUPTA.</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-70 leading-relaxed font-medium tracking-tight">
            A passionate developer, problem solver, and tech enthusiast exploring 
            the intersections of software engineering and artificial intelligence.
          </p>

          <div className="pt-12 flex flex-wrap justify-center gap-6">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <Target size={16} />
              <span>Lock Projects</span>
              <ChevronRight size={14} />
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-blue-600 text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-blue-600/5 transition-all"
            >
              <Command size={16} />
              <span>Initialize Contact</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-blue-600/10 z-0 pointer-events-none"
      />
    </section>
  );
}

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import profileImg from '../assets/profile.png';
import { GraduationCap, Briefcase, Code2, Cpu, Database, Globe } from 'lucide-react';
import React, { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Interactive Portrait Column */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="relative group" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative aspect-[4/5] border border-[var(--color-line)] bg-[var(--color-ink)] overflow-hidden"
            >
              {/* Profile Image with technical overlay */}
              <img 
                src={profileImg}
                alt="Vishesh Gupta"
                className="w-full h-full object-cover object-top opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
              />
              
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.05) 30px, rgba(0,0,0,0.05) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.05) 30px, rgba(0,0,0,0.05) 31px)'}} />
              
              {/* Floating Metadata Labels */}
              <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-widest text-white/50 space-y-1">
                <p>Subject: Vishesh Gupta</p>
                <p>Status: Active_Dev</p>
                <p>Origin: 28.6139° N, 77.2090° E</p>
              </div>
            </motion.div>
            
            {/* Decorative Frame Elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-600" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-600" />
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 border border-[var(--color-line)] bg-white/50">
              <p className="col-header mb-1">Core Focus</p>
              <p className="data-value text-sm font-bold">Full Stack Architecture</p>
            </div>
            <div className="p-4 border border-[var(--color-line)] bg-white/50">
              <p className="col-header mb-1">Current Year</p>
              <p className="data-value text-sm font-bold">3rd Year B.Tech CSE</p>
            </div>
          </div>
        </div>

        {/* Technical Dossier Column */}
        <div className="lg:col-span-7">
          <div className="mb-12">
            <h2 className="text-6xl font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              SYSTEM <br />
              <span className="text-blue-600">PROFILE.</span>
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                As a 3rd-year Computer Science student, I operate at the intersection of 
                <span className="text-[var(--color-ink)] font-bold"> rigorous logic </span> 
                and <span className="text-blue-600 font-bold"> creative engineering</span>. 
                My approach is systematic: analyze the problem, architect the solution, 
                and optimize for the future.
              </p>
              <p>
                I don't just write code; I build digital experiences that are robust, 
                scalable, and user-centric. My journey is defined by a relentless 
                pursuit of technical excellence and a passion for solving real-world 
                challenges through technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            <div className="bg-[var(--color-bg)] p-8">
              <GraduationCap className="text-blue-600 mb-4" size={24} />
              <p className="col-header mb-2">Academic Background</p>
              <h4 className="font-bold text-lg mb-2">B.Tech in CSE (AI-ML)</h4>
              <p className="text-sm opacity-60">KMIT, 2023–2027. Current GPA: 9.2/10. Focused on AI, ML, and Software Engineering.</p>
            </div>
            
            <div className="bg-[var(--color-bg)] p-8">
              <Briefcase className="text-blue-600 mb-4" size={24} />
              <p className="col-header mb-2">Professional Path</p>
              <h4 className="font-bold text-lg mb-2">AI & Full Stack Dev</h4>
              <p className="text-sm opacity-60">Building end-to-end applications — from VS Code extensions to voice AI systems.</p>
            </div>

            <div className="bg-[var(--color-bg)] p-8">
              <Cpu className="text-blue-600 mb-4" size={24} />
              <p className="col-header mb-2">Problem Solving</p>
              <h4 className="font-bold text-lg mb-2">Competitive Coding</h4>
              <p className="text-sm opacity-60">Active participant in global coding challenges with a focus on DSA.</p>
            </div>

            <div className="bg-[var(--color-bg)] p-8">
              <Globe className="text-blue-600 mb-4" size={24} />
              <p className="col-header mb-2">Philosophy</p>
              <h4 className="font-bold text-lg mb-2">Open Source</h4>
              <p className="text-sm opacity-60">Believer in collaborative growth and contributing to the global dev community.</p>
            </div>
          </div>

          <div className="mt-12 p-8 border border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-bg)] relative overflow-hidden">
            <div className="flex flex-wrap gap-12 relative z-10">
              <div>
                <p className="col-header text-white/50 mb-1">Projects Completed</p>
                <p className="text-4xl font-bold tracking-tighter">10+</p>
              </div>
              <div>
                <p className="col-header text-white/50 mb-1">LeetCode Problems</p>
                <p className="text-4xl font-bold tracking-tighter">500+</p>
              </div>
              <div>
                <p className="col-header text-white/50 mb-1">Hackathons</p>
                <p className="text-4xl font-bold tracking-tighter">Semi-Finalist</p>
              </div>
            </div>
            <Database className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <motion.footer 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6 relative z-10">
            LET'S <br />
            <span className="text-blue-600">CONNECT.</span>
          </h2>
          {/* Glitch Effect */}
          <motion.h2 
            animate={{ 
              x: [0, -2, 2, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 0.2, 
              repeat: Infinity, 
              repeatDelay: 4 
            }}
            className="text-4xl font-bold tracking-tighter uppercase mb-6 absolute top-0 left-0 text-red-500/20 select-none pointer-events-none"
          >
            LET'S <br />
            <span className="text-red-600">CONNECT.</span>
          </motion.h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-md mb-8">
            I'm always open to new opportunities, collaborations, or just a 
            friendly chat about technology.
          </p>
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:visheshgupta1021@gmail.com" 
              className="group flex items-center justify-between p-6 border border-[var(--color-line)] bg-white hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-all"
            >
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-600 group-hover:text-blue-400" />
                <span className="font-bold text-xl tracking-tight">Email Me</span>
              </div>
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/gupvishesh" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-6 border border-[var(--color-line)] bg-white hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-all">
                <Github size={20} />
                <span className="font-mono text-[10px] uppercase tracking-widest">Github</span>
              </a>
              <a href="https://linkedin.com/in/vishesh-gupta2110" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-6 border border-[var(--color-line)] bg-white hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-all">
                <Linkedin size={20} />
                <span className="font-mono text-[10px] uppercase tracking-widest">Linkedin</span>
              </a>

            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="p-12 border border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-bg)] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tighter mb-4">Availability</h3>
              <p className="opacity-70 mb-8">
                Currently looking for 2026 Summer Internships and Full-time 
                roles starting 2027.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Open for Work</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[120px] font-bold tracking-tighter opacity-10 select-none">
              HIRE
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
              © 2026 VISHESH GUPTA. ALL RIGHTS RESERVED.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
              BUILT WITH REACT & TAILWIND
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

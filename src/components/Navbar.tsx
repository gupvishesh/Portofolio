import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono font-bold text-lg tracking-tighter"
        >
          VISHESH.GUPTA<span className="text-blue-600">_</span>
        </motion.div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 font-mono text-xs uppercase tracking-widest">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ 
                  y: -3, 
                  x: 2,
                  color: "var(--color-accent)",
                  scale: 1.1
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full"
                />
              </motion.a>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/gupvishesh" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/vishesh-gupta2110" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:visheshgupta1021@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

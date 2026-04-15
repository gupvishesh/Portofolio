import { motion } from 'motion/react';
import { SKILLS } from '../data';
import * as Icons from 'lucide-react';

export default function Skills() {
  const categories = ['Languages', 'Frameworks', 'Tools', 'Databases'] as const;

  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative">
        {/* Floating Background Icons */}
        <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
          <Icons.Cpu size={200} />
        </div>
        <div className="absolute -bottom-20 -left-20 opacity-[0.03] pointer-events-none">
          <Icons.Database size={300} />
        </div>
        
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            TECH <br />
            <span className="text-blue-600">STACK.</span>
          </h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-md">
            A comprehensive list of technologies I've worked with and mastered 
            during my academic and project journey.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-1">Last Updated</p>
          <p className="font-bold text-xl tracking-tight">April 2026</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category} className="p-8 border border-[var(--color-line)] bg-white/50">
            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-6 border-b border-[var(--color-line)] pb-2">
              {category}
            </h3>
            <div className="flex flex-col gap-4">
              {SKILLS.filter(s => s.category === category).map((skill) => {
                const Icon = (Icons as any)[skill.icon] || Icons.Code;
                return (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-2 border border-[var(--color-line)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg)] transition-colors">
                      <Icon size={16} />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

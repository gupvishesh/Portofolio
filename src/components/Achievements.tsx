import { motion } from 'motion/react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data';
import * as Icons from 'lucide-react';

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            ACHIEVEMENTS &amp; <br />
            <span className="text-blue-600">CERTIFICATIONS.</span>
          </h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-md">
            Recognition earned through competition, commitment, and continuous learning.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-1">Recognition</p>
          <p className="font-bold text-xl tracking-tight">National Level</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = (Icons as any)[item.icon] || Icons.Star;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group relative p-8 border border-[var(--color-line)] bg-white overflow-hidden"
            >
              {/* Accent stripe */}
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 border border-[var(--color-line)] bg-blue-600/5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                {item.highlight && (
                  <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-blue-600 text-blue-600 bg-blue-600/5">
                    {item.highlight}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-1">{item.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-blue-600 mb-4">{item.subtitle}</p>
              <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6 border-b border-[var(--color-line)] pb-3">
          Certifications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = (Icons as any)[cert.icon] || Icons.Award;
            return (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-5 p-6 border border-[var(--color-line)] bg-white/50 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-all duration-300"
              >
                <div className="p-2 border border-[var(--color-line)] group-hover:border-[var(--color-bg)]/30 shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-50 mb-1 group-hover:opacity-70">
                    {cert.issuer}
                  </p>
                  <h4 className="font-bold text-lg tracking-tight mb-1">{cert.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-80">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

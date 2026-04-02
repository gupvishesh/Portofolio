import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--color-line)]"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
            SELECTED <br />
            <span className="text-blue-600">PROJECTS.</span>
          </h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-md">
            A showcase of my recent work, ranging from full-stack applications 
            to AI-powered tools.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-1">Total Projects</p>
          <p className="font-bold text-xl tracking-tight">15+</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -5 }}
            className="group border border-[var(--color-line)] bg-white overflow-hidden flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden border-b border-[var(--color-line)]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="p-2 bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-line)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors">
                    <Github size={14} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="p-2 bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-line)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 border border-[var(--color-line)] opacity-50">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={12} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = ['about', 'skills', 'projects', 'leetcode', 'achievements', 'contact'] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-lg tracking-tighter"
          >
            VISHESH.GUPTA<span className="text-blue-600">_</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 font-mono text-xs uppercase tracking-widest">
              {NAV_LINKS.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className={`relative group transition-colors ${
                    activeSection === item ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-blue-600 transition-all duration-300 ${
                      activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/gupvishesh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-blue-600 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/vishesh-gupta2110"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:visheshgupta1021@gmail.com"
                aria-label="Send Email"
                className="hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
              </a>

              {/* Hamburger */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden p-1 hover:text-blue-600 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full z-40 bg-[var(--color-bg)] border-b border-[var(--color-line)] md:hidden"
          >
            <div className="flex flex-col py-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={handleNavClick}
                  className={`px-8 py-4 font-mono text-xs uppercase tracking-widest border-b border-[var(--color-line)] last:border-b-0 transition-colors ${
                    activeSection === item
                      ? 'text-blue-600 bg-blue-600/5'
                      : 'hover:text-blue-600 hover:bg-blue-600/5'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

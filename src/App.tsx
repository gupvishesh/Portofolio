import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-ink)] selection:text-[var(--color-bg)] overflow-x-hidden">
      {/* Global Overlays */}
      <Background />
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
      
      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

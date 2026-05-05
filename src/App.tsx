import React from 'react';
import { AccessibilityProvider } from './AccessibilityContext';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Hero } from './components/Hero';
import { DimensionsGrid } from './components/DimensionsGrid';
import { WCAGSection } from './components/WCAGSection';
import { SocialModel } from './components/SocialModel';
import { ImpactSection } from './components/ImpactSection';
import { ToolsSection } from './components/ToolsSection';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-white/10 px-12 py-8">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-black tracking-tighter uppercase">Access.Labs</div>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest opacity-70">
        <a href="#conceito" className="hover:text-accent transition-colors">Princípios</a>
        <a href="#dimensoes" className="hover:text-accent transition-colors">Dimensões</a>
        <a href="#wcag" className="hover:text-accent transition-colors">Digital</a>
        <a href="#impacto" className="hover:text-accent transition-colors">Impacto</a>
        <a href="#ferramentas" className="hover:text-accent transition-colors">Ferramentas</a>
      </div>
      <div className="bg-accent text-black px-4 py-2 font-bold text-xs uppercase tracking-tighter hidden md:block">
        Inclusividade 100%
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="h-40 bg-accent text-black flex items-center px-12 mt-20">
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex gap-12">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase opacity-60">Status</span>
          <span className="text-lg font-black tracking-tight uppercase italic leading-none text-black">WCAG 2.2 AA+</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase opacity-60">Impacto</span>
          <span className="text-lg font-black tracking-tight uppercase italic leading-none text-black">Acessibilidade Total</span>
        </div>
      </div>
      <div className="text-center md:text-right">
        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Acessibilia • 2026</p>
        <div className="flex gap-4 justify-center md:justify-end text-[10px] uppercase font-black">
          <a href="#" className="hover:underline">Manual</a>
          <a href="#" className="hover:underline">Privacidade</a>
          <a href="#" className="hover:underline">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <AccessibilityToolbar />
        
        <main>
          <Hero />
          
          <div id="conceito">
            <SocialModel />
          </div>
          
          <div id="dimensoes">
            <DimensionsGrid />
          </div>
          
          <div id="wcag">
            <WCAGSection />
          </div>
          
          <div id="impacto">
            <ImpactSection />
          </div>

          <ToolsSection />

          <section className="py-20 px-6 max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="p-16 md:p-32 bg-accent text-black rounded-none flex flex-col items-center skew-x-[-2deg]"
            >
              <div className="skew-x-[2deg] flex flex-col items-center">
                <h2 className="text-5xl md:text-8xl font-black mb-10 max-w-3xl leading-[0.85] tracking-tighter uppercase italic">
                  Pronto para <span className="text-white bg-black px-4 inline-block">Design</span> Radical?
                </h2>
                <button className="px-12 py-6 bg-black text-white text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                  Baixar Guia 2026
                </button>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </AccessibilityProvider>
  );
}

import React from 'react';
import { Section } from './Section';
import { motion } from 'motion/react';

const principles = [
  {
    num: "01",
    title: "Perceptibilidade",
    desc: "Informações apresentáveis de formas que todos possam perceber (ex: texto alternativo para imagens)."
  },
  {
    num: "02",
    title: "Operabilidade",
    desc: "Interface navegável por diversos meios (teclado, comandos de voz) sem depender apenas do mouse."
  },
  {
    num: "03",
    title: "Compreensibilidade",
    desc: "Conteúdo inteligível e previsível. O usuário deve entender como a interface funciona."
  },
  {
    num: "04",
    title: "Robustez",
    desc: "Compatibilidade com tecnologias assistivas atuais e futuras, garantindo longevidade ao acesso."
  }
];

export const WCAGSection: React.FC = () => {
  return (
    <Section id="wcag">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="flex-1 lg:sticky lg:top-32 max-w-xl">
          <div className="mb-6 px-4 py-1.5 border-2 border-accent text-accent w-fit text-[11px] uppercase font-black tracking-[0.3em]">
            Compliance W3C
          </div>
          <h2 className="text-6xl md:text-[100px] font-black mb-10 leading-[0.8] tracking-tighter uppercase">
            OS 4 <br/>
            <span className="text-accent underline decoration-8 underline-offset-8 italic">PRINCÍPIOS</span><br/>
            WCAG
          </h2>
          <p className="text-white/60 mb-12 text-xl leading-relaxed font-medium">
            O Web Content Accessibility Guidelines (WCAG) define como tornar o conteúdo da Web mais acessível a pessoas com deficiência.
          </p>
          <div className="p-10 bg-white/5 border-l-8 border-accent">
            <p className="text-lg font-black uppercase text-accent tracking-widest italic mb-2">Padrão Ouro</p>
            <p className="text-sm text-white/40 leading-relaxed uppercase font-bold">
              Seguir estes princípios não é opcional — é a base para a robustez de qualquer produto digital moderno.
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full space-y-16">
          {principles.map((p, index) => (
            <motion.div 
              key={index}
              className="group border-t border-white/10 pt-12 relative overflow-hidden"
              whileHover={{ x: 15 }}
            >
              <div className="absolute -top-10 -right-4 text-[180px] font-black text-white/[0.02] group-hover:text-accent/5 transition-colors leading-none select-none pointer-events-none">
                {p.num}
              </div>
              <div className="relative z-10">
                <span className="text-accent font-black text-sm uppercase tracking-[0.4em] mb-4 block italic">
                  Requisito {p.num}
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-lg max-w-lg font-medium">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

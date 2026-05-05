import React from 'react';
import { Section } from './Section';
import { Sparkles, ShoppingBag, Baby, Footprints } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <Section id="impacto">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Usabilidade Radical</span>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">O EFEITO<br/>MEIO-FIO</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Soluções criadas para acessibilidade acabam beneficiando <span className="text-white font-bold">toda a sociedade</span>. 
            Uma rampa não ajuda apenas cadeirantes, mas também pais com carrinhos de bebê e viajantes com malas.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6 w-full">
          {[
            { icon: <Baby size={32} />, label: "Pais / Carrinhos" },
            { icon: <ShoppingBag size={32} />, label: "Entregadores" },
            { icon: <Sparkles size={32} />, label: "Melhor Idade" },
            { icon: <Footprints size={32} />, label: "Viajantes" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start p-8 bg-white/5 border border-white/10 hover:border-accent transition-colors">
              <div className="mb-6 text-accent">{item.icon}</div>
              <span className="text-xs font-black uppercase tracking-widest leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

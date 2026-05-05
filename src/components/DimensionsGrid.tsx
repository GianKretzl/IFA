import React from 'react';
import { Building2, MessageSquare, Monitor, Users, GraduationCap } from 'lucide-react';
import { Section } from './Section';

const dimensions = [
  {
    icon: <Building2 className="text-blue-500" />,
    title: "Arquitetônica",
    description: "Eliminação de barreiras físicas em edifícios e espaços públicos, como rampas e banheiros adaptados."
  },
  {
    icon: <MessageSquare className="text-purple-500" />,
    title: "Comunicacional",
    description: "Uso de Braille, Libras, audiodescrição e linguagem clara para garantir a troca de informações."
  },
  {
    icon: <Monitor className="text-emerald-500" />,
    title: "Digital",
    description: "Sites e aplicativos navegáveis por leitores de tela, teclados e comandos de voz."
  },
  {
    icon: <Users className="text-orange-500" />,
    title: "Atitudinal",
    description: "Combate ao preconceito e ao capacitismo, promovendo uma cultura de respeito e empatia."
  },
  {
    icon: <GraduationCap className="text-red-500" />,
    title: "Metodológica",
    description: "Adaptação de métodos de ensino e trabalho para atender a diferentes necessidades cognitivas."
  }
];

export const DimensionsGrid: React.FC = () => {
  return (
    <Section className="bg-white/5 border border-white/10 rounded-[3rem]">
      <div className="mb-16">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 block">Dimensões do Acesso</span>
        <h2 className="text-4xl md:text-6xl font-black mb-6">Múltiplas Frentes</h2>
        <p className="text-white/50 max-w-xl text-lg">
          Para uma sociedade verdadeiramente inclusiva, a acessibilidade deve ser aplicada em diversas frentes simultâneas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dimensions.map((dim, index) => (
          <div 
            key={index}
            className="p-10 bg-black/40 border border-white/10 rounded-none hover:border-accent transition-colors group"
          >
            <div className="mb-6 p-4 bg-white/5 w-fit rounded-full group-hover:bg-accent group-hover:text-black transition-colors">
              {dim.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">{dim.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{dim.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

import React from 'react';
import { Section } from './Section';
import { Info, AlertCircle } from 'lucide-react';

export const SocialModel: React.FC = () => {
  return (
    <Section className="bg-white/5 border border-white/10 rounded-[4rem] my-10">
      <div className="max-w-4xl mx-auto py-10">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">Mudança de Paradigma</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">MODELO SOCIAL<br/>DA DEFICIÊNCIA</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-black/60 border-l-4 border-white/10">
            <div className="flex items-center gap-3 text-white/30 mb-6">
              <AlertCircle size={24} />
              <h3 className="font-black uppercase tracking-widest text-[10px]">Perspectiva Médica</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Históricamente enxergava a deficiência como uma "falha" ou "anormalidade" a ser curada no indivíduo isolado. 
              O foco era estritamente clínico e na limitação biológica.
            </p>
          </div>
          
          <div className="p-10 bg-accent text-black">
            <div className="flex items-center gap-3 text-black mb-6">
              <Info size={24} />
              <h3 className="font-black uppercase tracking-widest text-[10px]">Perspectiva Social</h3>
            </div>
            <p className="text-black/80 text-sm leading-relaxed font-bold">
              Entende que a deficiência resulta da interação entre impedimentos e as <span className="underline decoration-2">barreiras impostas pela sociedade</span>. 
              O erro está no ambiente, não no corpo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

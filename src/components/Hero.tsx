import React from 'react';
import { Accessibility, Eye, Heart, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <div className="pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 px-3 py-1 border border-accent text-accent w-fit text-[10px] uppercase font-bold tracking-[0.2em]"
        >
          Excelência Inclusiva
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[80px] md:text-[110px] leading-[0.85] font-black uppercase tracking-tighter mb-8"
        >
          Design<br/>Para<br/><span className="text-accent">Todos.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10"
        >
          Construindo experiências digitais que transcendem barreiras. 
          Combinamos estética de alto nível com usabilidade radical para garantir dignidade a todos.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex-shrink-0 w-full lg:w-1/3 bg-white/5 border border-white/10 p-10 rounded-[2rem] hidden lg:block"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black">
              <Accessibility size={24} />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase">Princípio Ativo</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Foco no Humano</p>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <p className="text-sm italic font-serif text-white/50 leading-relaxed">
            "A deficiência não é um déficit individual, mas um desajuste entre o design e o usuário."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

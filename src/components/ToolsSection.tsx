import React from 'react';
import { Section } from './Section';
import { ExternalLink, ShieldCheck, Cpu, Palette, Search, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const tools = [
  {
    icon: <Search size={24} />,
    title: "WAVE Evaluation Tool",
    description: "Extensão para navegador que fornece feedback visual sobre a acessibilidade do seu conteúdo, destacando erros e alertas diretamente na página.",
    link: "https://wave.webaim.org/extension/",
    tag: "Audit Visual"
  },
  {
    icon: <Cpu size={24} />,
    title: "NVDA Screen Reader",
    description: "Um leitor de tela gratuito e de código aberto para Windows. Essencial para testar como usuários com deficiência visual navegam no seu site.",
    link: "https://www.nvaccess.org/download/",
    tag: "Assistiva"
  },
  {
    icon: <Terminal size={24} />,
    title: "axe DevTools",
    description: "Ferramenta de automação de testes que se integra ao inspetor do navegador, permitindo encontrar erros de código inacessíveis em segundos.",
    link: "https://www.deque.com/axe/",
    tag: "Desenvolvedor"
  },
  {
    icon: <Palette size={24} />,
    title: "Colour Contrast Analyser",
    description: "Software que permite verificar se as combinações de cores do seu design atendem aos critérios de contraste da WCAG.",
    link: "https://www.tpgi.com/color-contrast-checker/",
    tag: "Design"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Lighthouse",
    description: "Integrado diretamente no Google Chrome, realiza auditorias completas de acessibilidade, performance e SEO em qualquer página web.",
    link: "https://developer.chrome.com/docs/lighthouse/overview/",
    tag: "Nativo"
  }
];

export const ToolsSection: React.FC = () => {
  return (
    <Section id="ferramentas">
      <div className="mb-16">
        <div className="mb-4 px-3 py-1 border border-accent text-accent w-fit text-[10px] uppercase font-bold tracking-[0.2em]">Recursos Técnicos</div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none">Ferramentas <br/><span className="text-accent underline decoration-4">Essenciais</span></h2>
        <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
          Para garantir que um site seja verdadeiramente inclusivo, desenvolvedores e designers utilizam ferramentas que simulam necessidades e auditam o código.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="p-10 bg-white/5 border border-white/10 rounded-none flex flex-col justify-between group hover:border-accent transition-colors"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-accent text-black rounded-lg">
                  {tool.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1">
                  {tool.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{tool.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {tool.description}
              </p>
            </div>
            
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest hover:underline group-hover:gap-4 transition-all"
            >
              Acessar Ferramenta <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

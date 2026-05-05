import React, { useState } from 'react';
import { useAccessibility } from '../AccessibilityContext';
import { 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX, 
  Plus, 
  Minus, 
  X, 
  Settings2,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AccessibilityToolbar: React.FC = () => {
  const { fontSize, setFontSize, highContrast, setHighContrast } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const toggleReadAloud = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const text = document.querySelector('main')?.innerText || '';
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 translate-y-0" id="accessibility-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-dark p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-5 w-72"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Adaptive Controls</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors text-white"
                aria-label="Fechar painel de acessibilidade"
              >
                <X size={16} />
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase opacity-50 font-bold tracking-widest text-white">Text Scaling</span>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-accent">{fontSize}px</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex justify-center transition-colors text-white"
                  aria-label="Diminuir fonte"
                >
                  <Minus size={18} />
                </button>
                <button 
                  onClick={() => setFontSize(Math.min(32, fontSize + 2))}
                  className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex justify-center transition-colors text-white"
                  aria-label="Aumentar fonte"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Contrast Toggle */}
            <div className="flex items-center justify-between py-2 border-t border-white/5 mt-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-white">High Contrast Mode</span>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-10 h-5 rounded-full transition-colors relative ${highContrast ? 'bg-accent' : 'bg-white/20'}`}
                aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
              >
                <motion.div 
                  animate={{ x: highContrast ? 22 : 2 }}
                  className="w-3 h-3 bg-black rounded-full absolute top-1 shadow-sm"
                />
              </button>
            </div>

            {/* Screen Reader Simulation */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <button
                onClick={toggleReadAloud}
                className={`w-full py-3 px-4 rounded-none flex items-center justify-center gap-2 transition-all font-black uppercase text-xs tracking-tighter ${
                  isReading 
                    ? 'bg-red-500 text-white' 
                    : 'bg-accent text-black hover:scale-[1.02]'
                }`}
              >
                {isReading ? <VolumeX size={18} /> : <Volume2 size={18} />}
                <span>
                  {isReading ? 'Para Leitura' : 'Ler Conteúdo'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 bg-accent text-black rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Abrir recursos de acessibilidade"
      >
        <Settings2 size={24} />
      </motion.button>
    </div>
  );
};

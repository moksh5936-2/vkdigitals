'use client';

import { motion } from 'framer-motion';

const words = [
  "DIGITAL MARKETING & BRANDING",
  "•",
  "CREATIVE & MEDIA PRODUCTION",
  "•",
  "FINANCIAL ADVISORY",
  "•",
  "IT SERVICES & PLATFORMS",
  "•",
  "LLP & COMPLIANCE",
  "•",
  "INVESTMENT ADVISORY",
  "•"
];

export default function BrandTicker() {
  return (
    <div className="py-6 border-b border-t border-white/[0.05] bg-[#12101C] overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0B0914] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0B0914] to-transparent z-10" />
      
      <motion.div 
        className="flex gap-8 items-center"
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words].map((word, idx) => (
          <span 
            key={idx} 
            className={`font-display font-black text-2xl uppercase tracking-widest ${word === '•' ? 'text-neon-green' : 'text-slate-500 hover:text-white transition-colors'}`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

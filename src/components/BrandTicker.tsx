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
  "LLP & COMPLIANCE CONSULTING",
  "•",
  "INVESTMENT ADVISORY",
  "•"
];

export default function BrandTicker() {
  return (
    <div className="py-4 bg-brand-green overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="flex gap-8 items-center"
        animate={{ x: [0, -2000] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words].map((word, idx) => (
          <span 
            key={idx} 
            className={`font-semibold text-[0.8rem] ${word === '•' ? 'text-white/50' : 'text-white'} uppercase tracking-widest`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

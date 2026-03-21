"use client";
import { motion } from 'framer-motion';
import { LineChart, Camera, HandCoins, Code, Scale, PiggyBank } from 'lucide-react';

const tickerItems = [
  { icon: LineChart, text: 'Digital Marketing & Branding' },
  { icon: Camera, text: 'Creative & Media Production' },
  { icon: HandCoins, text: 'Financial Advisory' },

  { icon: Code, text: 'IT Services & Platforms' },
  { icon: Scale, text: 'LLP & Compliance' },
  { icon: PiggyBank, text: 'Investment Advisory' },
];

export default function BrandTicker() {
  return (
    <div className="bg-white/5 border-b border-white/5 py-12 overflow-hidden whitespace-nowrap relative">
      <motion.div 
        className="flex gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 px-6 text-ink-dark group hover:text-green transition-colors">
            <item.icon size={20} className="text-purple group-hover:text-green transition-colors" />
            <span className="font-display font-medium text-sm uppercase tracking-widest">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

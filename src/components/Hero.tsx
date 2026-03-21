'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center mt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 frosted-dark rounded-full mb-10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
             <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
             <span className="text-slate-300 text-[0.65rem] font-bold uppercase tracking-[0.3em]">
               India's Structured Growth Partner
             </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[1.05] mb-8 tracking-tighter"
          >
            Where Digital Meets <br className="hidden md:block"/>
            <span className="text-gradient hover-glow transition-all duration-500">Financial Logic.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
          >
            We build frameworks, not just campaigns. VK Digitals combines digital marketing, creative media, and financial advisory to scale your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-dark font-black tracking-tight rounded-full hover:scale-105 hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
            >
              Explore Expertise
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 frosted-dark text-white font-black tracking-tight rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Start a Conversation ↗
            </Link>
          </motion.div>
        </div>

        {/* Performance Snapshot (Restored from HTML) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="p-8 frosted-dark rounded-[2rem] text-center border-t border-neon-purple/20 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-4xl md:text-5xl font-black text-white mb-2">150+</div>
               <div className="text-[0.6rem] text-slate-400 font-black uppercase tracking-widest">Brands Served</div>
            </div>
            <div className="p-8 frosted-dark rounded-[2rem] text-center border-t border-neon-blue/20 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-4xl md:text-5xl font-black text-white mb-2">3</div>
               <div className="text-[0.6rem] text-slate-400 font-black uppercase tracking-widest">Core Pillars</div>
            </div>
            <div className="p-8 frosted-dark rounded-[2rem] text-center border-t border-neon-green/20 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-4xl md:text-5xl font-black text-white mb-2">4+</div>
               <div className="text-[0.6rem] text-slate-400 font-black uppercase tracking-widest">Strategic Partners</div>
            </div>
            <div className="p-8 frosted-dark rounded-[2rem] text-center border-t border-neon-pink/20 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
               <div className="text-[0.6rem] text-slate-400 font-black uppercase tracking-widest">Structured Growth</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

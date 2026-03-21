'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Milestone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#5D2FE2] via-[#5D2FE2] to-[#009277]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-8"
            >
               <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
               <span className="text-white/60 text-[0.65rem] font-black uppercase tracking-[0.3em]">
                 India's Structured Growth Partner
               </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] mb-8 tracking-tighter"
            >
              Where Digital Meets <br />
              <span className="text-green transition-all hover:brightness-110">Financial Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed"
            >
              We build frameworks, not just campaigns. VK Digitals combines digital marketing, creative media, and financial advisory.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <Link href="/services" className="px-10 py-5 bg-green text-ink-dark font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-green/20">
                Explore Services
              </Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-white/20 text-white font-black rounded-full hover:bg-white/10 transition-all">
                Start a Conversation
              </Link>
            </motion.div>
          </div>

          {/* Stats Panel / snapshot view */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="frosted-glass !bg-white/10 !backdrop-blur-3xl border border-white/20 p-12 rounded-[4rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">150+</div>
                  <div className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest">Brands Served</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">3</div>
                  <div className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest">Core Pillars</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">100%</div>
                  <div className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest">Structured</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">4.9/5</div>
                  <div className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest">Partner Rating</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green/10 rounded-full blur-[100px]" />
    </section>
  );
}

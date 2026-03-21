'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Abstract Circles matching image */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-brand-indigo/30 rounded-full mix-blend-overlay -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
             <span className="text-white text-[0.65rem] font-bold uppercase tracking-widest">
               India's Structured Growth Partner
             </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-display font-black text-white leading-[1.05] mb-8 tracking-tighter"
          >
            Where Digital Meets <br className="hidden lg:block"/>
            <span className="text-brand-green">Financial Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed"
          >
            We don't just build brands — we build frameworks. VK Digitals combines digital marketing, creative media, and financial advisory to grow your brand with precision and purpose.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link 
              href="/services" 
              className="px-8 py-3.5 bg-brand-green text-white font-bold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-brand-green/20"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>

        {/* Right Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-auto relative"
        >
          <div className="bg-[#4E6287]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-sm mx-auto shadow-2xl">
             <div className="text-[0.65rem] text-white/60 font-black uppercase tracking-[0.2em] mb-8">Performance Snapshot</div>
             
             <div className="grid grid-cols-2 gap-x-8 gap-y-10">
               <div>
                  <div className="text-4xl font-black text-white mb-1">150+</div>
                  <div className="text-[0.6rem] text-white/50 font-bold uppercase tracking-widest leading-tight">Brands Served</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-white mb-1">3</div>
                  <div className="text-[0.6rem] text-white/50 font-bold uppercase tracking-widest leading-tight">Core Pillars</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-white mb-1">4+</div>
                  <div className="text-[0.6rem] text-white/50 font-bold uppercase tracking-widest leading-tight">Partners</div>
               </div>
               <div>
                  <div className="text-4xl font-black text-white mb-1">100%</div>
                  <div className="text-[0.6rem] text-white/50 font-bold uppercase tracking-widest leading-tight">Structured Growth</div>
               </div>
             </div>
             
             <div className="flex gap-2 mt-10">
                <span className="px-3 py-1 bg-brand-indigo rounded-full text-[0.6rem] font-bold text-white uppercase tracking-wider">Digital</span>
                <span className="px-3 py-1 bg-slate-600 rounded-full text-[0.6rem] font-bold text-white uppercase tracking-wider">Creative</span>
                <span className="px-3 py-1 bg-[#0f766e] rounded-full text-[0.6rem] font-bold text-white uppercase tracking-wider">Financial</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

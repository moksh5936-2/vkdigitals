'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center p-16 md:p-24 rounded-[3.5rem] bg-card/60 backdrop-blur-2xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
           <div className="inline-block px-4 py-1.5 frosted-dark text-neon-green text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
             Let's Build Together
           </div>
           <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-tight">
             Structured Growth <br /> <span className="text-gradient">Starts Here.</span>
           </h2>
           <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
             Partner with the agency that brings digital ambition and financial logic into one unified framework.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link 
               href="/contact" 
               className="w-full sm:w-auto px-10 py-5 bg-neon-purple text-white font-black rounded-full hover:scale-105 hover:bg-white hover:text-dark transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
             >
               Start a Conversation <ArrowUpRight size={18} />
             </Link>
             <Link 
               href="/services" 
               className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-slate-700 text-white font-black rounded-full hover:bg-white/5 transition-all flex items-center justify-center"
             >
               Explore Our Work
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
}

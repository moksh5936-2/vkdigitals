"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="px-6 md:px-12 py-20 bg-peach-cream">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto rounded-[3.5rem] bg-gradient-to-br from-[#064E3B] to-[#065F46] p-12 md:p-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-forest-green/20"
      >
        {/* Orb Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-[1.05] tracking-tighter">
            Ready to <span className="text-green italic">Structure</span> <br /> Your Next Era?
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-lg mb-12 leading-relaxed">
            Brands without structure fail by default. Scale your brand with precision and purpose.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-10 py-5 bg-white text-forest-green font-black rounded-full transition-all hover:scale-105 flex items-center gap-3 shadow-xl">
              Book a Strategy Call <ArrowUpRight size={20} />
            </button>
            <button className="text-white font-bold border-b-2 border-white/20 hover:border-white transition-all uppercase tracking-widest text-xs">
              View Case Studies
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-6 w-full md:w-auto">
          <div className="p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-lg">
            <div className="text-white text-4xl font-black mb-1">94%</div>
            <div className="text-white/60 text-[0.65rem] font-black uppercase tracking-widest">Client Retention</div>
          </div>
          <div className="p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-lg">
            <div className="text-white text-4xl font-black mb-1">12+</div>
            <div className="text-white/60 text-[0.65rem] font-black uppercase tracking-widest">Global Partners</div>
          </div>
        </div>
      </motion.div>
    </section>

  );
}

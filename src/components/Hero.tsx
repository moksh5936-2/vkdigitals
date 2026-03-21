"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mint pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-peach-cream/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 border border-white/20 rounded-full text-purple/70 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-md"
          >
            <Star size={14} className="text-purple" fill="currentColor" />
            Empowering Structured Growth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink-dark font-display text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-8"
          >
            Strategic <span className="text-purple italic">Digital</span> <br /> & Financial Mastery.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-dark/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium"
          >
            We don't just build brands — we build frameworks. Integrated marketing, creative media, and financial advisory designed for high-fidelity growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <button className="btn-forest flex items-center gap-2">
              Explore Our Pillars <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/40 text-ink-dark font-bold rounded-full transition-all shadow-sm">
              Book a Consultation
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 frosted-glass p-8 md:p-12 relative overflow-hidden group hover:border-purple/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full blur-3xl" />
          <h3 className="text-ink-dark font-display text-2xl font-black mb-8 uppercase tracking-tight">Performance Snapshot</h3>
          <div className="grid grid-cols-2 gap-6">
              <div className="frosted-glass !bg-white/40 !backdrop-blur-2xl border border-white/40 p-10 rounded-[3rem] shadow-2xl shadow-purple/5">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="stat-number text-4xl font-black mb-1">150+</div>
                    <div className="text-[0.6rem] font-black text-ink-dark/50 uppercase tracking-widest">Projects</div>
                  </div>
                  <div>
                    <div className="stat-number text-4xl font-black mb-1">3</div>
                    <div className="text-[0.6rem] font-black text-ink-dark/50 uppercase tracking-widest">Pillars</div>
                  </div>
                  <div>
                    <div className="stat-number text-4xl font-black mb-1">4+</div>
                    <div className="text-[0.6rem] font-black text-ink-dark/50 uppercase tracking-widest">Years</div>
                  </div>
                  <div>
                    <div className="stat-number text-4xl font-black mb-1">100%</div>
                    <div className="text-[0.6rem] font-black text-ink-dark/50 uppercase tracking-widest">Focus</div>
                  </div>
                </div>
              </div>
            <div className="p-8 bg-white/40 rounded-3xl border border-white/20 shadow-sm group-hover:bg-white/60 transition-colors">
              <div className="text-4xl stat-number mb-2">4.9/5</div>
              <div className="text-[0.65rem] text-ink-dark/60 font-black uppercase tracking-widest">Partner Rating</div>
            </div>
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="px-5 py-2 bg-purple/10 border border-purple/20 rounded-full text-[0.65rem] font-black text-purple uppercase tracking-widest">Digital Mastery</span>
            <span className="px-5 py-2 bg-green/10 border border-green/20 rounded-full text-[0.65rem] font-black text-green uppercase tracking-widest">Creative Media</span>
          </div>
        </motion.div>
      </div>
    </section>

  );
}

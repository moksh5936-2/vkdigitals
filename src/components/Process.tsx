'use client';

import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery', color: 'bg-white', text: 'text-dark', desc: 'Deep dive into your business, goals, audience, and competitive landscape.' },
    { num: '02', title: 'Strategy', color: 'bg-neon-green', text: 'text-dark', desc: 'A structured roadmap with touchpoints, timelines, KPIs, and resource allocation.' },
    { num: '03', title: 'Execution', color: 'bg-neon-purple', text: 'text-white', desc: 'Precision delivery across digital, creative, or financial workstreams.' },
    { num: '04', title: 'Review & Scale', color: 'bg-neon-blue', text: 'text-white', desc: 'Performance review, learnings applied, optimized for the next phase.' }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0B0914] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 frosted-dark text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">Our Process</div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-6">Built for Outcomes</h2>
          <p className="text-slate-400 text-lg md:text-xl">Four deliberate steps — no guesswork, no shortcuts, just structured execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`w-24 h-24 rounded-[2rem] ${step.color} ${step.text} flex flex-col items-center justify-center font-display font-black text-3xl mb-8 relative z-10 shadow-2xl group-hover:-translate-y-2 transition-transform duration-300`}>
                {step.num}
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 text-base font-medium leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

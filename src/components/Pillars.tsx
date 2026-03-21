'use client';

import { motion } from 'framer-motion';
import { Megaphone, PencilRuler, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    title: 'Digital Marketing & Branding',
    icon: Megaphone,
    desc: 'Performance-driven strategies that scale brand authority.',
    tags: ['SEO', 'Performance', 'Brand Identity'],
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'group-hover:border-neon-blue/50',
    shadow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]'
  },
  {
    title: 'IT Services & Platforms',
    icon: Cpu,
    desc: 'High-performance web platforms built for scalability.',
    tags: ['Web Dev', 'UI/UX', 'Hosting & Cloud'],
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    border: 'group-hover:border-neon-purple/50',
    shadow: 'hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]'
  },
  {
    title: 'Creative Media Production',
    icon: PencilRuler,
    desc: 'Visual storytelling that turns messages into memory.',
    tags: ['Video', 'Design', 'Motion Graphics'],
    color: 'text-neon-pink',
    bg: 'bg-neon-pink/10',
    border: 'group-hover:border-neon-pink/50',
    shadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]'
  },
  {
    title: 'Financial Advisory & Tax',
    icon: TrendingUp,
    desc: 'Strategic guidance to help businesses plan and restructure.',
    tags: ['Funding', 'Compliance', 'Tax Planning'],
    color: 'text-neon-green',
    bg: 'bg-neon-green/10',
    border: 'group-hover:border-neon-green/50',
    shadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-dark">
      <div className="container mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 frosted-dark text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-6">What We Do</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">Structured <span className="text-neon-purple">Growth</span></h2>
            <p className="text-slate-400 mt-4 max-w-xl text-lg font-medium">Integrated expertise across domains — designed to work in sync, not in silos.</p>
          </div>
          <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm font-bold hover:bg-white hover:text-dark transition-all">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-10 bg-card rounded-[2.5rem] border border-white/5 transition-all hover:-translate-y-2 ${pillar.border} ${pillar.shadow} relative overflow-hidden flex flex-col h-full`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <pillar.icon size={120} className={pillar.color} />
              </div>
              
              <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center shrink-0 mb-8`}>
                <pillar.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-display font-black text-white mb-4 leading-tight">{pillar.title}</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 flex-1">{pillar.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {pillar.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-[0.65rem] font-black uppercase tracking-widest rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

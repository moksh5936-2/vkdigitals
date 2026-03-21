'use client';

import { motion } from 'framer-motion';
import { Megaphone, PencilRuler, TrendingUp, Cpu } from 'lucide-react';

const pillars = [
  {
    title: 'Digital Marketing & Branding',
    icon: Megaphone,
    desc: 'SEO • Performance • Brand',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'IT Services',
    icon: Cpu,
    desc: 'Web Dev • UI/UX • Hosting',
    color: 'text-purple',
    bg: 'bg-purple/10'
  },
  {
    title: 'Creative & Media',
    icon: PencilRuler,
    desc: 'Video • Design • Motion',
    color: 'text-green',
    bg: 'bg-green/10'
  },
  {
    title: 'Financial Advisory',
    icon: TrendingUp,
    desc: 'Funding • Compliance • Planning',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-black text-ink-dark mb-12 tracking-tight">Three Pillars of Structured Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center shrink-0`}>
                <pillar.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-display font-black text-ink-dark mb-1 leading-tight">{pillar.title}</h3>
                <p className="text-ink-dark/40 text-[0.65rem] font-black uppercase tracking-widest">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

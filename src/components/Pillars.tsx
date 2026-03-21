"use client";
import { motion } from 'framer-motion';
import { MousePointer2, Megaphone, PencilRuler, Database, TrendingUp, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    desc: 'Precision targeting and brand authority systems that convert modern audiences into loyal advocates.',
    tags: ['SEO', 'Meta Ads', 'PPC'],
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Creative Media',
    icon: PencilRuler,
    desc: 'High-production content and design frameworks that make your brand visually unforgettable.',
    tags: ['Video', 'Graphics', 'UI/UX'],
    color: 'text-green',
    bg: 'bg-green/10'
  },
  {
    title: 'Financial Advisory',
    icon: TrendingUp,
    desc: 'Strategic financial planning and compliance frameworks designed for scalable business growth.',
    tags: ['Tax', 'Audit', 'Investment'],
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-peach-cream">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-purple/10 text-purple text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-6">Our Core Expertise</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-ink-dark leading-tight">
              Three Pillars of <br /> <span className="text-purple italic">Structured Growth.</span>
            </h2>
          </div>
          <p className="text-ink-dark/60 max-w-md text-lg leading-relaxed font-medium">
            Integrated domain expertise designed to work as a single, powerful flywheel for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="service-card group !p-10"
            >
              <div className="service-card-accent" />
              <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <pillar.icon size={28} />
              </div>
              <h3 className="text-2xl font-display font-black text-ink-dark mb-4">{pillar.title}</h3>
              <p className="text-ink-dark/60 text-md leading-relaxed mb-8 flex-1 font-medium">{pillar.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {pillar.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-lavender text-purple/60 text-[0.6rem] font-bold uppercase tracking-widest rounded-full">
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


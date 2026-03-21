'use client';

import { motion } from 'framer-motion';
import { BarChart3, MonitorSmartphone, Clapperboard, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    id: 'digital-branding',
    title: 'Digital Marketing & Branding',
    icon: BarChart3,
    desc: 'Data-driven campaigns and brand systems that build authority and convert modern audiences.',
    tags: [{name: 'SEO', color: 'text-blue-400 bg-blue-500/10'}, {name: 'Performance', color: 'text-blue-400 bg-blue-500/10'}, {name: 'Brand', color: 'text-blue-400 bg-blue-500/10'}],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    id: 'it-services',
    title: 'IT Services',
    icon: MonitorSmartphone,
    desc: 'High-performance web platforms and custom digital products built for scalability and speed.',
    tags: [{name: 'Web Apps', color: 'text-emerald-400 bg-emerald-500/10'}, {name: 'UI/UX', color: 'text-emerald-400 bg-emerald-500/10'}, {name: 'Hosting', color: 'text-emerald-400 bg-emerald-500/10'}],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    id: 'creative-media',
    title: 'Creative & Media',
    icon: Clapperboard,
    desc: 'Visual storytelling and high-impact media production that turns brand messages into memory.',
    tags: [{name: 'Video', color: 'text-amber-400 bg-amber-500/10'}, {name: 'Design', color: 'text-amber-400 bg-amber-500/10'}, {name: 'Motion', color: 'text-amber-400 bg-amber-500/10'}],
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory',
    icon: TrendingUp,
    desc: 'Professional financial guidance to help businesses plan, manage capital, and scale with clarity.',
    tags: [{name: 'Funding', color: 'text-purple-400 bg-purple-500/10'}, {name: 'Compliance', color: 'text-purple-400 bg-purple-500/10'}, {name: 'Planning', color: 'text-purple-400 bg-purple-500/10'}],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header - Smooth scroll entrance */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-brand-purple/30" />
             <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">What We Do</span>
             <div className="h-[1px] w-8 bg-brand-purple/30 hidden sm:block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
            Three Pillars of <br />
            Structured Growth
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Integrated expertise across digital, creative, and financial domains — designed to work in sync, not in silos.
          </p>
        </motion.div>

        {/* Cards Grid - Staggered Waterfall & Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, idx) => (
            <Link href={`/services#${pillar.id}`} key={idx} className="block group">
              <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-sm relative flex flex-col h-full cursor-pointer hover:shadow-neon-purple hover:border-brand-purple/30 transition-all duration-500"
              >
                <div className={`w-12 h-12 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  <pillar.icon size={20} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 leading-tight transition-colors group-hover:text-brand-purple">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{pillar.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {pillar.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 ${tag.color} text-[0.65rem] font-bold uppercase tracking-widest rounded-full`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                   <ArrowUpRight size={20} className={`${pillar.color} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 4 Stats Footer (150+, 3, 4+, 24hr) */}
        <div className="border-t border-slate-100 pt-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-brand-purple mb-2">150+</div>
                <div className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-[0.1em]">Brands Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-brand-purple mb-2">3</div>
                <div className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-[0.1em]">Core Pillars</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-brand-purple mb-2">4+</div>
                <div className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-[0.1em]">Strategic Partners</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-brand-purple mb-2">24hr</div>
                <div className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-[0.1em]">Response Pledge</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

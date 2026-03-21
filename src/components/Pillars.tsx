'use client';

import { motion } from 'framer-motion';
import { BarChart3, MonitorSmartphone, Clapperboard, TrendingUp, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    title: 'Digital Marketing & Branding',
    icon: BarChart3,
    desc: 'Data-driven campaigns and brand systems that build authority and convert modern audiences.',
    tags: [{name: 'SEO', color: 'text-blue-600 bg-blue-50'}, {name: 'Performance', color: 'text-blue-600 bg-blue-50'}, {name: 'Brand', color: 'text-blue-600 bg-blue-50'}],
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'IT Services',
    icon: MonitorSmartphone,
    desc: 'High-performance web platforms and custom digital products built for scalability and speed.',
    tags: [{name: 'Web Apps', color: 'text-emerald-600 bg-emerald-50'}, {name: 'UI/UX', color: 'text-emerald-600 bg-emerald-50'}, {name: 'Hosting', color: 'text-emerald-600 bg-emerald-50'}],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Creative & Media',
    icon: Clapperboard,
    desc: 'Visual storytelling and high-impact media production that turns brand messages into memory.',
    tags: [{name: 'Video', color: 'text-amber-600 bg-amber-50'}, {name: 'Design', color: 'text-amber-600 bg-amber-50'}, {name: 'Motion', color: 'text-amber-600 bg-amber-50'}],
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    title: 'Financial Advisory',
    icon: TrendingUp,
    desc: 'Professional financial guidance to help businesses plan, manage capital, and scale with clarity.',
    tags: [{name: 'Funding', color: 'text-purple-600 bg-purple-50'}, {name: 'Compliance', color: 'text-purple-600 bg-purple-50'}, {name: 'Planning', color: 'text-purple-600 bg-purple-50'}],
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-brand-purple/30" />
             <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">What We Do</span>
             <div className="h-[1px] w-8 bg-brand-purple/30 hidden sm:block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
            Three Pillars of <br />
            Structured Growth
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Integrated expertise across digital, creative, and financial domains — designed to work in sync, not in silos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative group flex flex-col">
              <div className={`w-12 h-12 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                <pillar.icon size={20} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{pillar.desc}</p>
              
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
            </div>
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

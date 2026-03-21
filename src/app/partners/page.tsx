'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, Milestone } from 'lucide-react';

const partners = [
  {
    name: 'Ekara Financials',
    initials: 'EF',
    desc: 'Our strategic financial auditing partner.',
    benefit: 'VK clients get priority tax structuring & direct access to liquidity audits.',
    tags: ['Fintech', 'Verified'],
    color: 'bg-lavender',
    iconColor: 'text-purple'
  },
  {
    name: 'PriyaQubit',
    initials: 'PQ',
    desc: 'High-production media and 4K storytelling experts.',
    benefit: 'Ensures our creative campaigns meet the highest global production standards.',
    tags: ['4K Story', 'Media'],
    color: 'bg-mint',
    iconColor: 'text-green'
  },
  {
    name: 'Mavriq AI',
    initials: 'MA',
    desc: 'Next-gen data analytics and AI automation.',
    benefit: 'Integrates real-time performance tracking for all our digital campaigns.',
    tags: ['AI Logic', 'Tech'],
    color: 'bg-peach-cream',
    iconColor: 'text-orange-500'
  },
  {
    name: 'WPS Hub',
    initials: 'WH',
    desc: 'Enterprise database & cloud infrastructure.',
    benefit: 'Scalable backend solutions for our ecommerce and platform builds.',
    tags: ['Cloud', 'Scalable'],
    color: 'bg-lavender',
    iconColor: 'text-blue-500'
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white pt-40 pb-20 px-6 border-b border-slate-100">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-purple/10 text-purple text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-8">Aligned Power</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-ink-dark mb-12 tracking-tighter leading-tight">
             Our Strategic <span className="text-green uppercase italic">Partners</span>.
          </h1>
          <p className="text-ink-dark/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
             We curate a specialized network to ensure every domain — digital, creative, or financial — is handled by the best in the industry.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                 {/* Initials Fallback instead of missing SVGs */}
                 <div className={`w-28 h-28 ${p.color} rounded-[2rem] flex items-center justify-center text-3xl font-black ${p.iconColor} shadow-inner shrink-0 group-hover:rotate-6 transition-transform`}>
                    {p.initials}
                 </div>
                 
                 <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                       {p.tags.map(tag => (
                         <span key={tag} className="px-4 py-1.5 bg-slate-50 text-[0.6rem] font-black uppercase tracking-widest text-ink-dark/40 rounded-full border border-slate-100 italic">
                            {tag}
                         </span>
                       ))}
                    </div>
                    <h2 className="text-3xl font-display font-black text-ink-dark mb-4">{p.name}</h2>
                    <p className="text-ink-dark/60 text-lg font-medium leading-relaxed mb-8">{p.desc}</p>
                    
                    {/* Benefit Line */}
                    <div className="p-6 bg-lavender-input/30 rounded-2xl border border-lavender/20 flex items-start gap-4">
                       <Zap className="text-purple shrink-0 mt-1" size={18} />
                       <div className="text-sm font-bold text-ink-dark leading-relaxed">
                          <span className="text-purple font-black">Client Benefit:</span> {p.benefit}
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      
      <footer className="bg-ink-dark py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="text-white font-display font-bold text-xl mb-4 tracking-tighter">VK DIGITALS</div>
          <p className="text-white/40 text-[0.7rem] uppercase tracking-widest text-center">
            © {new Date().getFullYear()} VK Digitals & Financial Services LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

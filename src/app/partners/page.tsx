'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const partners = [
  {
    name: 'Ekara Financials',
    initials: 'EF',
    desc: 'Our strategic financial auditing partner.',
    benefit: 'VK clients get priority tax structuring & direct access to liquidity audits.',
    tags: ['Fintech', 'Verified'],
    color: 'bg-neon-purple/10 border-neon-purple/20',
    iconColor: 'text-neon-purple'
  },
  {
    name: 'PriyaQubit',
    initials: 'PQ',
    desc: 'High-production media and 4K storytelling experts.',
    benefit: 'Ensures our creative campaigns meet the highest global production standards.',
    tags: ['4K Story', 'Media'],
    color: 'bg-neon-pink/10 border-neon-pink/20',
    iconColor: 'text-neon-pink'
  },
  {
    name: 'Mavriq AI',
    initials: 'MA',
    desc: 'Next-gen data analytics and AI automation.',
    benefit: 'Integrates real-time performance tracking for all our digital campaigns.',
    tags: ['AI Logic', 'Tech'],
    color: 'bg-neon-blue/10 border-neon-blue/20',
    iconColor: 'text-neon-blue'
  },
  {
    name: 'WPS Hub',
    initials: 'WH',
    desc: 'Enterprise database & cloud infrastructure.',
    benefit: 'Scalable backend solutions for our ecommerce and platform builds.',
    tags: ['Cloud', 'Scalable'],
    color: 'bg-neon-green/10 border-neon-green/20',
    iconColor: 'text-neon-green'
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      
      <section className="bg-dark pt-48 pb-32 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 frosted-dark border border-white/10 text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">Aligned Power</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-tight">
             Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue italic">Partners</span>.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
             We curate a specialized network to ensure every domain — digital, creative, or financial — is handled by the best in the industry.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 bg-dark rounded-[3.5rem] border border-white/5 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-all flex flex-col"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 h-full">
                 <div className={`w-28 h-28 ${p.color} border rounded-[2rem] flex items-center justify-center text-3xl font-black ${p.iconColor} shadow-inner shrink-0 group-hover:rotate-6 transition-transform`}>
                    {p.initials}
                 </div>
                 
                 <div className="flex-1 text-center md:text-left flex flex-col h-full">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                       {p.tags.map(tag => (
                         <span key={tag} className="px-4 py-1.5 bg-white/5 text-[0.6rem] font-black uppercase tracking-widest text-slate-400 rounded-full border border-white/10 italic">
                            {tag}
                         </span>
                       ))}
                    </div>
                    <h2 className="text-3xl font-display font-black text-white mb-4 tracking-tight">{p.name}</h2>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8 flex-1">{p.desc}</p>
                    
                    <div className="p-6 frosted-dark rounded-2xl border border-white/10 flex items-start gap-4">
                       <Zap className="text-neon-purple shrink-0 mt-1" size={18} />
                       <div className="text-sm font-medium text-slate-300 leading-relaxed">
                          <span className="text-neon-purple font-black">Client Benefit:</span> {p.benefit}
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      
      <footer className="bg-[#0B0914] border-t border-white/5 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="text-white font-display font-black text-xl mb-2 tracking-tighter">VK DIGITALS</div>
          <p className="text-slate-500 text-[0.65rem] uppercase tracking-widest text-center">
            © {new Date().getFullYear()} VK Digitals & Financial Services LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

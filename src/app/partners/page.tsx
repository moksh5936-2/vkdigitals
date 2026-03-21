'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';

const partners = [
  {
    name: 'Ekara Financials',
    initial: 'EF',
    desc: 'Strategic financial services partner enabling end-to-end capital and investment advisory for our shared client base across India.',
    tag: 'Financial Services',
    color: 'bg-brand-purple',
  },
  {
    name: 'PriyaQubit',
    initial: 'PQ',
    desc: 'Technology and digital transformation partner delivering advanced software engineering and data infrastructure solutions.',
    tag: 'Technology',
    color: 'bg-brand-green',
  },
  {
    name: 'Mavriq AI',
    initial: 'MA',
    desc: 'AI-powered insights and automation partner helping brands leverage artificial intelligence for smarter business decisions.',
    tag: 'AI & Automation',
    color: 'bg-amber-600',
  },
  {
    name: 'WPS Hub',
    initial: 'WH',
    desc: 'Workspace productivity and SaaS partner streamlining operations and digital workflows for growing businesses and enterprises.',
    tag: 'Productivity',
    color: 'bg-brand-indigo',
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
      <Navbar />
      
      <section className="hero-gradient pt-32 pb-40 px-6 relative overflow-hidden">
        <motion.div 
           animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
           className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-white/50 mb-6 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Partners</span>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8"
          >
            4+ Verified Strategic Partners
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter"
          >
            Our Trusted Partner<br />Ecosystem
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed"
          >
            Carefully selected partners that extend our capabilities — so every client gets the best of multiple specialisms.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white text-center">
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
         >
            <div className="flex justify-center items-center gap-4 mb-4">
               <div className="h-[1px] w-8 bg-brand-purple/30" />
               <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Ecosystem</span>
               <div className="h-[1px] w-8 bg-brand-purple/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
               Built on Verified Collaboration
            </h2>
            <p className="text-slate-500 font-medium text-sm max-w-xl mx-auto leading-relaxed">
               Each partnership is strategic — chosen because it adds direct value to the clients we serve.
            </p>
         </motion.div>

      </section>

      <section className="pb-24 max-w-[1200px] mx-auto px-6 lg:px-12 bg-white relative z-20">
         <div className="flex flex-col gap-8">
            {partners.map((partner, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col md:flex-row items-center gap-10 group"
               >
                  <div className={`w-36 h-36 ${partner.color} rounded-[2rem] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3`}>
                     <span className="text-4xl font-black text-white mix-blend-overlay tracking-tighter shadow-sm">{partner.initial}</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-start">
                     <h3 className="text-xl font-display font-black text-slate-900 mb-3 tracking-tight">{partner.name}</h3>
                     <p className="text-slate-500 text-[0.85rem] font-medium leading-relaxed mb-6 flex-1">
                        {partner.desc}
                     </p>
                     
                     <span className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[0.65rem] font-black uppercase tracking-widest rounded-full">
                        {partner.tag}
                     </span>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      <CTASection />

      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

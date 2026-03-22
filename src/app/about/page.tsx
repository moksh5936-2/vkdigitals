'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { BarChart3, Clapperboard, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 w-full overflow-hidden">
      <Navbar />
      
      {/* Light Theme Purple Hero */}
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
            <span className="text-white">About Us</span>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8"
          >
            Founded in Yamunanagar • Serving India
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter max-w-2xl"
          >
            Where Strategy Meets Structure
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed"
          >
            Built on one principle — every brand deserves structure, not shortcuts.
          </motion.p>
        </div>
      </section>

      {/* About Content from Image 4 */}
      <section className="py-24 bg-slate-950 relative">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
               
               {/* Left Description */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-[1px] w-8 bg-brand-purple/30" />
                     <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Who We Are</span>
                  </div>
                  <h2 className="text-4xl font-display font-black text-white tracking-tight leading-tight mb-8">
                     A multi-disciplinary firm built for purposeful growth
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                     VK Digitals was founded on the belief that sustainable brand growth requires more than campaigns — it requires structure. In an era of viral trends and fragmented tactics, we provide the integrated foundation businesses need to grow with intention.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                     Our evolution into Financial Services & Advisory reflects a simple truth: a brand's story cannot be separated from its financial foundations. True, lasting growth needs both powerful communication and sound economic decisions.
                  </p>
               </motion.div>

               {/* Right Mission/Vision/Values boxes */}
               <div className="flex-1 space-y-4">
                  <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     whileHover={{ x: -10 }}
                     className="p-8 border-l-4 border-brand-purple bg-white/5 backdrop-blur-md border border-white/10 rounded-r-3xl shadow-sm hover:shadow-neon-purple transition-all duration-300"
                  >
                     <h3 className="font-bold text-white mb-2">Our Mission</h3>
                     <p className="text-slate-400 font-medium text-xs leading-relaxed">
                        Empower businesses with structured strategies that drive measurable, sustainable growth — digitally and financially.
                     </p>
                  </motion.div>
                  <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     whileHover={{ x: -10 }}
                     className="p-8 border-l-4 border-brand-green bg-white/5 backdrop-blur-md border border-white/10 rounded-r-3xl shadow-sm hover:shadow-neon-green transition-all duration-300"
                  >
                     <h3 className="font-bold text-white mb-2">Our Vision</h3>
                     <p className="text-slate-400 font-medium text-xs leading-relaxed">
                        Become India's most trusted integrated digital-financial growth partner for emerging and scaling brands.
                     </p>
                  </motion.div>
                  <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     whileHover={{ x: -10 }}
                     className="p-8 border-l-4 border-amber-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-r-3xl shadow-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300"
                  >
                     <h3 className="font-bold text-white mb-2">Our Values</h3>
                     <p className="text-slate-400 font-medium text-xs leading-relaxed">
                        Structure over shortcuts. Clarity over chaos. Long-term thinking over short-term wins. Accountability in every engagement.
                     </p>
                  </motion.div>
               </div>
            </div>

            {/* Three Integrated Pillars */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <div className="flex justify-center items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
                 <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Our Expertise</span>
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4">Three Integrated Pillars</h2>
               <p className="text-slate-400 font-medium text-sm">Working in sync — designed to accelerate your growth at every dimension.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(124, 58, 237, 0.4)' }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center hover:border-brand-purple/30 transition-all duration-300"
               >
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                     <BarChart3 size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-4">Digital Marketing & Branding</h3>
                  <p className="text-slate-400 text-[0.8rem] leading-relaxed">
                     Strategy-first execution that builds real audiences. Brand identities that carry authority and campaigns that convert.
                  </p>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(251, 191, 36, 0.3)' }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center hover:border-amber-400/30 transition-all duration-300"
               >
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                     <Clapperboard size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-4">Creative & Media</h3>
                  <p className="text-slate-400 text-[0.8rem] leading-relaxed">
                     Creative storytelling combined with data-driven performance — ensuring clients are seen, heard, and remembered.
                  </p>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.3)' }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center hover:border-brand-green/30 transition-all duration-300"
               >
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                     <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-4">Financial Advisory</h3>
                  <p className="text-slate-400 text-[0.8rem] leading-relaxed">
                     Credible registered LLP advisory from business planning and compliance to investment-readiness and capital strategy.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Quote Section from Image 4 */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-brand-violet to-[#4c1d95] text-center">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple rounded-full mix-blend-screen opacity-50 blur-[100px] pointer-events-none" />
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-green rounded-full mix-blend-screen opacity-10 blur-[100px] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-brand-purple/50 font-serif text-6xl mb-4 leading-none select-none">"</div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-relaxed">
              Every brand deserves structure, not shortcuts.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-brand-purple" />
              <div className="text-white/60 text-[0.65rem] font-bold uppercase tracking-[0.2em]">VK DIGITALS & FINANCIAL SERVICES LLP — FOUNDING PRINCIPLE</div>
              <div className="w-8 h-[1px] bg-brand-purple" />
            </div>
         </div>
      </section>

      {/* Specialized Green CTA styling from Image 4 */}
      <section className="py-24 bg-brand-green text-center">
         <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
           Ready to Work Together?
         </h2>
         <p className="text-white/90 font-medium mb-10 text-sm">
           Let's understand your goals and design a structured path.
         </p>
         <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-brand-green font-bold rounded-full shadow-lg hover:bg-slate-50 transition-colors text-sm">Start a Conversation</button>
            <button className="px-8 py-3.5 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm">Explore Services</button>
         </div>
      </section>

      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <a 
             href="https://www.google.com/maps/search/?api=1&query=1st+floor+above+healthkart+near+nehru+park+model+town+Yamunanagar" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-white/40 text-xs hover:text-white transition-colors"
          >
             1st floor above healthkart, near nehru park model town, Yamunanagar
          </a>
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

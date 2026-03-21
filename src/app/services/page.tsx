'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart3, TrendingUp, MonitorSmartphone, Code2, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesPage() {
  const servicesData = [
    {
      id: 'digital-branding',
      title: 'Digital Marketing & Branding',
      description: 'Strategy-first marketing that builds real audiences and durable brand equity.',
      bg: 'bg-brand-indigo/10',
      color: 'text-indigo-400',
      items: [
        { icon: Search, title: 'SEO & Performance', desc: 'Optimize your online presence and drive targeted traffic with our expert SEO and performance marketing strategies.' },
        { icon: BarChart3, title: 'Brand Strategy', desc: 'Develop a compelling brand identity and messaging that resonates with your audience and sets you apart.' },
        { icon: TrendingUp, title: 'Social Media', desc: 'Engage your audience and build a strong community with strategic social media management and influencer outreach.' },
        { icon: PenTool, title: 'Content Marketing', desc: 'Create valuable and engaging content that attracts, informs, and converts your target customers.' },
      ],
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Modern technology solutions for a professional, high-performance digital presence.',
      bg: 'bg-emerald-500/10',
      color: 'text-emerald-400',
      items: [
        { icon: MonitorSmartphone, title: 'Web Development', desc: 'Build responsive, high-performance websites and e-commerce solutions tailored to your business needs.' },
        { icon: PenTool, title: 'UI/UX Design', desc: 'Craft intuitive and engaging user interfaces that provide exceptional user experiences.' },
        { icon: Code2, title: 'Custom Applications', desc: 'Develop bespoke web applications, dashboards, and SaaS platforms to streamline your operations.' },
        { icon: ShieldCheck, title: 'Infrastructure', desc: 'Ensure your digital assets are secure, fast, and reliable with our comprehensive hosting and security services.' },
      ],
    },
    {
      id: 'creative-media',
      title: 'Creative & Media',
      description: 'Visual storytelling and high-impact media production that turns brand messages into memory.',
      bg: 'bg-amber-500/10',
      color: 'text-amber-400',
      items: [
        { icon: PenTool, title: 'Video Production', desc: 'From corporate brand films to hyper-engaging short-form content for social platforms.' },
        { icon: PenTool, title: 'Graphic Design', desc: 'Systematized visual design languages, marketing collateral, and digital assets.' },
        { icon: Zap, title: 'Motion Graphics', desc: 'Dynamic animations and 2D/3D sequences that explain complex ideas instantly.' },
        { icon: BarChart3, title: 'Ad Creatives', desc: 'Data-backed visual structures designed explicitly to maximize conversion rates and ROAS.' },
      ],
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory',
      description: 'Professional financial guidance to help businesses plan, manage capital, and scale with clarity.',
      bg: 'bg-purple-500/10',
      color: 'text-purple-400',
      items: [
        { icon: TrendingUp, title: 'Capital Structuring', desc: 'Optimize your business financial structures for long-term sustainable growth.' },
        { icon: ShieldCheck, title: 'Compliance & Tax', desc: 'Navigate complex regulatory environments and structure tax-efficient models.' },
        { icon: BarChart3, title: 'Investment Strategy', desc: 'Data-driven financial models and forecasting to secure and deploy operational capital.' },
        { icon: Search, title: 'Audit Readiness', desc: 'Comprehensive financial health checks and system restructuring for investment.' },
      ],
    }
  ];

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
            <span className="text-white">Services</span>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8"
          >
            3 Integrated Pillars • Built for Results
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter"
          >
            Services That Move the Needle
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed"
          >
            Digital, creative, IT, and financial — all under one structured roof, working in sync.
          </motion.p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b border-white/10 sticky top-0 bg-slate-900/90 backdrop-blur-xl z-40 py-4 shadow-sm">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
            {servicesData.map((service) => (
              <a 
                href={`#${service.id}`} 
                key={`nav-${service.id}`}
                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all bg-white/5 border border-white/10 text-slate-300 hover:border-brand-purple/50 hover:text-white hover:shadow-neon-purple focus:bg-brand-purple focus:text-white focus:border-brand-purple"
              >
                {service.title}
              </a>
            ))}
         </div>
      </div>

      {/* Services Content Mapping */}
      <div className="w-full pb-24">
        {servicesData.map((service, sectionIdx) => (
         <section 
            key={service.id} 
            id={service.id} 
            className={`py-24 w-full scroll-mt-[5rem] border-b border-white/5 ${sectionIdx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}
         >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
               <div className="max-w-3xl mb-16">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 text-[0.65rem] font-bold uppercase tracking-widest rounded-full inline-block mb-6 text-brand-purple shadow-sm"
                  >
                     Pillar 0{sectionIdx + 1}
                  </motion.div>
                  <motion.h2 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-none mb-6"
                  >
                     {service.title}
                  </motion.h2>
                  <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-slate-400 text-lg leading-relaxed font-medium"
                  >
                     {service.description}
                  </motion.p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                 {service.items.map((item, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-sm group hover:border-brand-purple/30 hover:shadow-neon-purple transition-all duration-300"
                   >
                     <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                       <item.icon size={24} strokeWidth={2.5} />
                     </div>
                     <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">{item.title}</h4>
                     <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                   </motion.div>
                 ))}
               </div>
            </div>
         </section>
        ))}
      </div>

      <CTASection />
      
      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

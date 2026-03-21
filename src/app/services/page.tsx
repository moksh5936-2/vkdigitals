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
      description: 'Pillar 01 — Strategy-first marketing that builds real audiences and durable brand equity.',
      bg: 'bg-slate-50',
      color: 'text-brand-indigo',
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
      bg: 'bg-emerald-50/50',
      color: 'text-emerald-500',
      items: [
        { icon: MonitorSmartphone, title: 'Web Development', desc: 'Build responsive, high-performance websites and e-commerce solutions tailored to your business needs.' },
        { icon: PenTool, title: 'UI/UX Design', desc: 'Craft intuitive and engaging user interfaces that provide exceptional user experiences.' },
        { icon: Code2, title: 'Custom Applications', desc: 'Develop bespoke web applications, dashboards, and SaaS platforms to streamline your operations.' },
        { icon: ShieldCheck, title: 'Infrastructure', desc: 'Ensure your digital assets are secure, fast, and reliable with our comprehensive hosting and security services.' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
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
      <div className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-40">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="py-6 text-sm font-bold text-brand-purple border-b-2 border-brand-green">Digital & Branding</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">IT Services</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Creative & Media</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Financial Advisory</button>
         </div>
      </div>

      {/* Services Content Mapping */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
        {servicesData.map((service, sectionIdx) => (
         <div key={service.id} className="mb-24">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl font-display font-black text-slate-900 tracking-tight leading-none mb-2"
            >
               {service.title}
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-brand-green font-bold text-sm mb-12"
            >
               {service.description}
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 gap-y-12 mb-16">
              {service.items.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   whileHover={{ scale: 1.02, y: -4, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
                   className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm group transition-colors"
                >
                  <div className={`w-12 h-12 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
         </div>
        ))}
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

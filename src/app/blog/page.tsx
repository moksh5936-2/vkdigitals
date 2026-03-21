'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Milestone } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Digital', 'Financial', 'Creative'];

const posts = [
  {
    title: '5 SEO Strategies That Work for Indian Businesses in 2026',
    category: 'Digital',
    date: 'Mar 15, 2026',
    readTime: '6 min',
    image: 'bg-gradient-to-br from-neon-blue/20 to-neon-purple/20',
    desc: 'How structured brand frameworks outlive fleeting digital trends. We explore the intersection of machine logic and human emotion.'
  },
  {
    title: 'How to Structure Business Capital for Sustainable Growth',
    category: 'Financial',
    date: 'Mar 8, 2026',
    readTime: '8 min',
    image: 'bg-gradient-to-br from-neon-green/20 to-neon-blue/20',
    desc: 'The internal financial structures every founder needs to master. A deep dive into cashflow management and tax strategy.'
  },
  {
    title: 'Why Brand Films Generate 3x More Leads Than Static Ads',
    category: 'Creative',
    date: 'Feb 28, 2026',
    readTime: '5 min',
    image: 'bg-gradient-to-br from-neon-pink/20 to-neon-purple/20',
    desc: 'Case studies on high-production content that drives measurable ROI. Why structure is the secret ingredient to viral success.'
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredPosts = posts.filter(post => 
    activeTab === 'All' || post.category === activeTab
  );

  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      
      {/* Header */}
      <section className="bg-dark pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
             <div className="inline-flex items-center gap-3 px-5 py-2 frosted-dark border border-white/10 text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-10 shadow-xl">
               <Milestone size={14} className="text-neon-pink" />
               Digital • Creative • Financial Insights
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-tight">
               Ideas That Drive <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Structured Growth</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-10 px-6 border-y border-white/5 bg-[#0B0914]/80 backdrop-blur-2xl sticky top-[80px] z-40">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex flex-wrap items-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-8 py-3 rounded-full text-[0.65rem] font-black uppercase tracking-widest transition-all",
                    activeTab === cat 
                      ? "bg-white text-dark scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] border-2 border-white" 
                      : "bg-transparent text-slate-500 hover:text-white border-2 border-white/10 hover:border-white/30"
                  )}
                >
                  {cat}
                </button>
              ))}
           </div>
           {/* Dark Mode Search */}
           <div className="relative w-full md:w-auto md:min-w-[300px]">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
               <input 
                 type="text" 
                 placeholder="Search articles..." 
                 className="w-full py-4 pl-14 pr-6 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
               />
            </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col h-full bg-card rounded-[3.5rem] border border-white/5 p-8 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(147,51,234,0.1)] transition-all"
                >
                  <div className={`aspect-[4/3] ${post.image} rounded-[2.5rem] p-8 mb-8 relative overflow-hidden transition-transform group-hover:scale-[1.02] duration-500 border border-white/10`}>
                     <div className="absolute top-6 left-6 p-4 bg-dark/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/5">
                        <div className="w-8 h-6 bg-slate-600 rounded-sm opacity-50" />
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                     <span className="px-4 py-1.5 bg-white/10 text-slate-300 text-[0.6rem] font-black uppercase tracking-widest rounded-full">{post.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-display font-black text-white mb-4 leading-tight group-hover:text-neon-purple transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center gap-3 text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-6">
                     <span>{post.date}</span>
                     <div className="w-1 h-1 rounded-full bg-slate-600" />
                     <span>{post.readTime}</span>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-8 flex-1">
                    {post.desc}
                  </p>
                  
                  <button className="mt-auto flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-neon-purple transition-colors">
                    Read Full Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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

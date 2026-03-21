'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Digital', 'Financial', 'Creative', 'Strategy'];

const posts = [
  {
    title: 'Precision Branding in the Age of AI',
    category: 'Digital',
    date: 'March 20, 2026',
    image: 'bg-lavender',
    desc: 'How structured brand frameworks outlive fleeting digital trends. We explore the intersection of machine logic and human emotion.'
  },
  {
    title: 'Financial Logic: Scaling Beyond the First Crore',
    category: 'Financial',
    date: 'March 18, 2026',
    image: 'bg-mint',
    desc: 'The internal financial structures every founder needs to master. A deep dive into cashflow management and tax strategy.'
  },
  {
    title: 'The Viral Flywheel: Creative Systems That Convert',
    category: 'Creative',
    date: 'March 15, 2026',
    image: 'bg-peach-cream',
    desc: 'Case studies on high-production content that drives measurable ROI. Why structure is the secret ingredient to viral success.'
  },
  {
    title: 'Structural Integrity: Why We Built VK Digitals',
    category: 'Strategy',
    date: 'March 10, 2026',
    image: 'bg-lavender',
    desc: 'Our founding principles and why we believe every business needs a domain-integrated approach to growth.'
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredPosts = posts.filter(post => 
    activeTab === 'All' || post.category === activeTab
  );

  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white pt-40 pb-20 px-6 border-b border-slate-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-purple/10 text-purple text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-8">Perspectives</div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-ink-dark mb-12 tracking-tighter leading-tight">
              Logic & <span className="text-purple italic">Creativity.</span>
            </h1>
            
            {/* Search Placeholder */}
            <div className="relative max-w-xl mx-auto">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ink-dark/20" size={20} />
               <input 
                 type="text" 
                 placeholder="Search articles..." 
                 className="w-full py-5 pl-16 pr-8 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium focus:bg-white focus:border-purple/30 transition-all outline-none"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 border-b border-slate-100 bg-white/50 backdrop-blur-md sticky top-28 z-30">
        <div className="container mx-auto">
           <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[0.6rem] font-black uppercase tracking-widest transition-all",
                    activeTab === cat 
                      ? "bg-ink-dark text-white shadow-xl scale-110" 
                      : "bg-white text-ink-dark/40 hover:text-ink-dark border border-slate-200"
                  )}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className={`aspect-[16/9] ${post.image} rounded-[3.5rem] p-12 mb-10 relative overflow-hidden transition-transform group-hover:scale-[1.01] duration-500 shadow-sm group-hover:shadow-2xl`}>
                     <div className="absolute top-10 left-10 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[0.65rem] font-black uppercase tracking-widest text-ink-dark shadow-sm">
                        {post.category}
                     </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="text-[0.7rem] font-black text-purple uppercase tracking-widest">{post.date}</div>
                     <div className="w-1 h-1 rounded-full bg-slate-200" />
                     <div className="text-[0.7rem] font-black text-ink-dark/40 uppercase tracking-widest">5 min read</div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-ink-dark mb-6 leading-tight group-hover:text-purple transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink-dark/60 text-lg leading-relaxed font-medium mb-10">
                    {post.desc}
                  </p>
                  <button className="flex items-center gap-3 text-ink-dark font-black tracking-tighter group-hover:text-purple transition-colors">
                    Read Article <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-purple group-hover:text-white group-hover:border-purple transition-all"><ArrowRight size={18} /></div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="py-40 text-center">
               <h3 className="text-2xl font-display font-black text-ink-dark/20 uppercase tracking-widest">No articles found in this category.</h3>
            </div>
          )}
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

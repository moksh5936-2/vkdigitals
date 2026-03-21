'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Milestone } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Digital', 'Financial', 'Creative'];

const posts = [
  {
    title: '5 SEO Strategies That Work for Indian Businesses in 2026',
    category: 'Digital',
    date: 'Mar 15, 2026',
    readTime: '6 min',
    image: 'bg-lavender',
    desc: 'How structured brand frameworks outlive fleeting digital trends. We explore the intersection of machine logic and human emotion.'
  },
  {
    title: 'How to Structure Business Capital for Sustainable Growth',
    category: 'Financial',
    date: 'Mar 8, 2026',
    readTime: '8 min',
    image: 'bg-mint',
    desc: 'The internal financial structures every founder needs to master. A deep dive into cashflow management and tax strategy.'
  },
  {
    title: 'Why Brand Films Generate 3x More Leads Than Static Ads',
    category: 'Creative',
    date: 'Feb 28, 2026',
    readTime: '5 min',
    image: 'bg-peach-cream',
    desc: 'Case studies on high-production content that drives measurable ROI. Why structure is the secret ingredient to viral success.'
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
      
      {/* Header - Gradient Hero per Fix 6 */}
      <section className="bg-gradient-to-br from-[#5D2FE2] via-[#5D2FE2] to-[#009277] pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-10 shadow-xl">
               <Milestone size={14} className="text-green" />
               Digital • Creative • Financial Insights
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-10 tracking-tighter leading-tight">
               Ideas That Drive <br/> <span className="opacity-90">Structured Growth</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 border-b border-slate-100 bg-white sticky top-28 z-40 shadow-sm">
        <div className="container mx-auto">
           <div className="flex flex-wrap items-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-8 py-3 rounded-full text-[0.65rem] font-black uppercase tracking-widest transition-all shadow-sm",
                    activeTab === cat 
                      ? "bg-purple text-white scale-105" 
                      : "bg-slate-50 text-ink-dark/40 hover:text-ink-dark border border-slate-100"
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
                  className="group flex flex-col"
                >
                  <div className={`aspect-[4/3] ${post.image} rounded-[3rem] p-8 mb-8 relative overflow-hidden transition-transform group-hover:scale-[1.02] duration-500 shadow-sm`}>
                     <div className="absolute top-8 left-8 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm">
                        {/* Placeholder for small icon from image */}
                        <div className="w-6 h-4 bg-slate-200 rounded-sm" />
                     </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="px-3 py-1 bg-purple/10 text-purple text-[0.6rem] font-black uppercase tracking-widest rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-display font-black text-ink-dark mb-4 leading-tight group-hover:text-purple transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 text-[0.65rem] font-bold text-ink-dark/30 uppercase tracking-widest mb-6">
                     <span>{post.date}</span>
                     <div className="w-1 h-1 rounded-full bg-slate-200" />
                     <span>{post.readTime}</span>
                  </div>
                  <p className="text-ink-dark/60 text-md leading-relaxed font-medium mb-8 line-clamp-2">
                    {post.desc}
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-ink-dark font-black text-xs uppercase tracking-widest hover:text-purple transition-colors">
                    Read Full Case Study <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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

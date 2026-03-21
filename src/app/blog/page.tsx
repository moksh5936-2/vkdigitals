'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BarChart3, TrendingUp, Clapperboard, MonitorSmartphone, Scale, Sparkles } from 'lucide-react';

const categories = ['All Articles', 'Digital', 'Creative', 'Financial'];

const posts: any[] = [];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All Articles');

  const filteredPosts = posts.filter(post => 
    activeTab === 'All Articles' || post.category === activeTab.toUpperCase()
  );

  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
      <Navbar />
      
      {/* Light Theme Purple Hero matching Image 2 */}
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
            <span className="text-white">Blog</span>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8"
          >
            Digital • Creative • Financial Insights
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter"
          >
            Ideas That Drive Structured<br />Growth
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed"
          >
            Fresh perspectives on marketing, media, finance, and building brands with intention.
          </motion.p>
        </div>
      </section>

      {/* Main Blog Area matching Image 2 */}
      <section className="py-12 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
        
        {/* Fill Pill Toggles */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveTab(cat)}
               className={cn(
                 "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                 activeTab === cat 
                   ? "bg-brand-purple border-brand-purple text-white shadow-md shadow-brand-purple/20" 
                   : "bg-white border-slate-200 text-slate-600 hover:border-brand-purple/30 hover:text-brand-purple"
               )}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
             {filteredPosts.map((post, idx) => (
                <motion.div 
                   key={post.title} 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
                   className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col group cursor-pointer"
                >
                   {/* Top Image Section */}
                   <div className={`h-48 ${post.headerBg} w-full flex items-center justify-center transition-colors group-hover:bg-opacity-80`}>
                      <motion.div
                         transition={{ duration: 0.3 }}
                         whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      >
                         <post.icon size={48} className={post.iconColor} />
                      </motion.div>
                   </div>
                   
                   <div className="p-8 flex-1 flex flex-col">
                      <span className={cn(
                         "px-3 py-1 text-[0.6rem] font-black uppercase tracking-widest rounded-md self-start mb-4",
                         post.category === 'DIGITAL' ? 'bg-blue-50 text-blue-600' :
                         post.category === 'FINANCIAL' ? 'bg-emerald-50 text-emerald-600' :
                         'bg-amber-50 text-amber-600'
                      )}>
                         {post.category}
                      </span>
                      
                      <h2 className="text-xl font-display font-black text-slate-900 mb-6 leading-tight group-hover:text-brand-purple transition-colors">
                         {post.title}
                      </h2>
                      
                      <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mt-auto">
                         <span>{post.date}</span>
                         <span>•</span>
                         <span>{post.readTime}</span>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 mb-32 text-center rounded-3xl border border-slate-100 bg-slate-50/50">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
              <Sparkles className="text-brand-purple/40" size={32} />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-800 mb-2">Articles Coming Soon</h3>
            <p className="text-slate-500 font-medium max-w-sm">We're currently writing fresh, structured insights. Check back shortly.</p>
          </div>
        )}

      </section>

      {/* Dark Footer used in Light Theme */}
      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

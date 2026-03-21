'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { cn } from '@/lib/utils';
import { BarChart3, TrendingUp, Clapperboard, MonitorSmartphone, Scale, Sparkles } from 'lucide-react';

const categories = ['All Articles', 'Digital', 'Creative', 'Financial'];

const posts = [
  {
    title: '5 SEO Strategies That Actually Work for Indian Businesses in 2026',
    category: 'DIGITAL',
    date: 'March 15, 2026',
    readTime: '6 min read',
    icon: BarChart3,
    iconColor: 'text-blue-500',
    headerBg: 'bg-blue-50'
  },
  {
    title: 'How to Structure Your Business Capital for Sustainable Growth',
    category: 'FINANCIAL',
    date: 'March 8, 2026',
    readTime: '8 min read',
    icon: TrendingUp,
    iconColor: 'text-emerald-500',
    headerBg: 'bg-emerald-50'
  },
  {
    title: 'Why Brand Films Generate 3x More Leads Than Static Ads',
    category: 'CREATIVE',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    icon: Clapperboard,
    iconColor: 'text-amber-500',
    headerBg: 'bg-amber-50'
  },
  {
    title: 'Social Media in 2026: What Brands Must Know About Algorithm Changes',
    category: 'DIGITAL',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    icon: MonitorSmartphone,
    iconColor: 'text-blue-500',
    headerBg: 'bg-blue-50'
  },
  {
    title: 'LLP vs Pvt Ltd: Which Structure Is Right for Your Startup?',
    category: 'FINANCIAL',
    date: 'Feb 12, 2026',
    readTime: '9 min read',
    icon: Scale,
    iconColor: 'text-emerald-500',
    headerBg: 'bg-emerald-50'
  },
  {
    title: 'Motion Graphics in Marketing: The Complete Guide for 2026',
    category: 'CREATIVE',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    icon: Sparkles,
    iconColor: 'text-amber-500',
    headerBg: 'bg-amber-50'
  }
];

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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-white/50 mb-6 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
            Digital • Creative • Financial Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            Ideas That Drive Structured<br />Growth
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            Fresh perspectives on marketing, media, finance, and building brands with intention.
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
           {filteredPosts.map((post) => (
              <div key={post.title} className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group cursor-pointer">
                 {/* Top Image Section (represented by pastel color with icon in Image 2) */}
                 <div className={`h-48 ${post.headerBg} w-full flex items-center justify-center`}>
                    <post.icon size={48} className={post.iconColor} />
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
              </div>
           ))}
        </div>

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

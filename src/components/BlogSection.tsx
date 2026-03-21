'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const mockPosts: any[] = [];

export default function BlogSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-6">Latest Insights</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
              The <span className="text-brand-purple italic">VK Perspectives.</span>
            </h2>
          </div>
          <Link href="/blog" className="text-slate-400 hover:text-white text-[0.65rem] font-black uppercase tracking-widest transition-colors flex items-center gap-2 group">
            View All Articles <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all group-hover:shadow-neon-purple"><ArrowUpRight size={14} /></div>
          </Link>
        </div>

        {mockPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {mockPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] ${post.image} rounded-[3rem] p-8 mb-8 relative overflow-hidden transition-transform group-hover:scale-[1.02] duration-500`}>
                  <div className="absolute top-8 left-8 px-4 py-1.5 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded-full text-[0.6rem] font-black uppercase tracking-widest text-white">
                    {post.category}
                  </div>
                </div>
                <div className="text-[0.65rem] font-black text-brand-purple uppercase tracking-widest mb-4">{post.date}</div>
                <h3 className="text-2xl font-display font-black text-white mb-4 leading-tight group-hover:text-brand-purple transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-md leading-relaxed font-medium mb-6 line-clamp-2">{post.desc}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-display font-black text-white mb-2">Insights Coming Soon</h3>
            <p className="text-slate-400 font-medium max-w-sm">We're preparing new structured case studies and articles. Stay tuned.</p>
          </div>
        )}
      </div>
    </section>
  );
}

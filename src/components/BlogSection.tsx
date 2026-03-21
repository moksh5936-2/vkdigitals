'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const mockPosts = [
  {
    title: 'Precision Branding in the Age of AI',
    category: 'Strategy',
    date: 'March 20, 2026',
    image: 'bg-lavender',
    desc: 'How structured brand frameworks outlive fleeting digital trends.'
  },
  {
    title: 'Financial Logic: Scaling Beyond the First Crore',
    category: 'Finance',
    date: 'March 18, 2026',
    image: 'bg-mint',
    desc: 'The internal financial structures every founder needs to master.'
  },
  {
    title: 'The Viral Flywheel: Creative Systems That Convert',
    category: 'Creative',
    date: 'March 15, 2026',
    image: 'bg-peach-cream',
    desc: 'Case studies on high-production content that drives measurable ROI.'
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-purple/10 text-purple text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-6">Latest Insights</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-ink-dark leading-tight">
              The <span className="text-purple italic">VK Perspectives.</span>
            </h2>
          </div>
          <Link href="/blog" className="text-ink-dark/60 hover:text-purple text-[0.65rem] font-black uppercase tracking-widest transition-colors flex items-center gap-2 group">
            View All Articles <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-all"><ArrowUpRight size={14} /></div>
          </Link>
        </div>

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
                <div className="absolute top-8 left-8 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[0.6rem] font-black uppercase tracking-widest text-ink-dark">
                  {post.category}
                </div>
              </div>
              <div className="text-[0.65rem] font-black text-purple uppercase tracking-widest mb-4">{post.date}</div>
              <h3 className="text-2xl font-display font-black text-ink-dark mb-4 leading-tight group-hover:text-purple transition-colors">{post.title}</h3>
              <p className="text-ink-dark/60 text-md leading-relaxed font-medium mb-6 line-clamp-2">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

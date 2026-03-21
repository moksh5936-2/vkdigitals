'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-green relative overflow-hidden">
      {/* Abstract circles for depth, as seen in Image 5 CTA banner */}
      <motion.div 
         animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
         className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#059669] rounded-full mix-blend-multiply opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" 
      />
      <motion.div 
         animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
         transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
         className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#34d399] rounded-full mix-blend-screen opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
         <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-4">
           Ready to Build Something That Lasts?
         </h2>
         <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
           Talk to our team about your digital, creative, or financial goals.
         </p>
         
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
               <Link 
                 href="/contact"
                 className="block px-8 py-3.5 bg-white text-brand-green font-bold rounded-full hover:bg-slate-50 transition-colors shadow-lg shadow-black/5"
               >
                 Contact Us Today
               </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
               <Link 
                 href="/services"
                 className="block px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
               >
                 See Our Services
               </Link>
            </motion.div>
         </div>
      </div>
    </section>
  );
}

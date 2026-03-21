import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandTicker from '@/components/BrandTicker';
import Pillars from '@/components/Pillars';
import Process from '@/components/Process';
import CTASection from '@/components/CTASection';

import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      <Hero />
      <BrandTicker />
      <Pillars />
      <Process />
      <BlogSection />
      <CTASection />
      
      {/* Footer Snapshot */}
      <footer className="bg-ink-dark py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="text-white font-display font-bold text-xl mb-4 tracking-tighter">VK DIGITALS</div>
          <p className="text-white/40 text-[0.7rem] uppercase tracking-widest">
            © {new Date().getFullYear()} VK Digitals & Financial Services LLP. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}

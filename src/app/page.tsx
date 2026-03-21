import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandTicker from '@/components/BrandTicker';
import Pillars from '@/components/Pillars';
import Process from '@/components/Process';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      <Hero />
      <BrandTicker />
      <Pillars />
      <Process />
      <BlogSection />
      <CTASection />
      
      <footer className="bg-[#0B0914] border-t border-white/5 py-20 px-6">
        <div className="container mx-auto text-center">
           <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl mx-auto flex items-center justify-center text-white font-black text-2xl mb-8 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              VK
           </div>
          <div className="text-white font-display font-black text-2xl mb-2 tracking-tight">VK Digitals</div>
          <p className="text-slate-500 text-[0.7rem] font-bold uppercase tracking-widest text-center mb-8">
            & Financial Services LLP
          </p>
          <p className="text-slate-600 text-[0.65rem] uppercase tracking-widest text-center">
            © {new Date().getFullYear()} VK Digitals & Financial Services LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

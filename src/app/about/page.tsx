import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { Megaphone, PencilRuler, TrendingUp, Milestone } from 'lucide-react';

export default function About() {
  const values = [
    { 
      title: 'Digital Marketing & Branding', 
      icon: Megaphone, 
      color: 'text-neon-blue', 
      bg: 'bg-neon-blue/10',
      desc: 'Performance-driven strategies that scale brand authority and convert modern audiences.',
      sub: 'Performance • SEO • Brand Identity'
    },
    { 
      title: 'Creative Media & Production', 
      icon: PencilRuler, 
      color: 'text-neon-pink', 
      bg: 'bg-neon-pink/10',
      desc: 'High-production content and design frameworks that make your brand visually unforgettable.',
      sub: 'Video • Design • Motion Graphics'
    },
    { 
      title: 'Financial Services & Advisory', 
      icon: TrendingUp, 
      color: 'text-neon-green', 
      bg: 'bg-neon-green/10',
      desc: 'Strategic financial planning and compliance frameworks designed for scalable business growth.',
      sub: 'Funding • LLP • Compliance'
    }
  ];

  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      
      {/* Page Hero */}
      <section className="bg-dark pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 frosted-dark text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-10 shadow-xl border border-white/10">
               <Milestone size={14} className="text-neon-green" />
               Founded in Yamunanagar • Serving India
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-10 tracking-tighter leading-none">
              About <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">VK Digitals</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
              Built on one principle — every brand deserves structure, not shortcuts. We're your integrated partner for digital growth and financial clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-card border-y border-white/5">
        <div className="container mx-auto">
          <div className="mb-20">
             <div className="text-[0.65rem] font-black text-neon-purple uppercase tracking-[0.4em] mb-4">Our Expertise</div>
             <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">Three Integrated Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="group p-12 bg-dark rounded-[3.5rem] transition-all hover:-translate-y-3 border border-white/5 hover:border-white/10 shadow-xl relative overflow-hidden flex flex-col">
                <div className={`w-16 h-16 ${v.bg} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-inner`}>
                   <v.icon size={28} className={v.color} />
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 leading-tight">{v.title}</h3>
                <div className="text-[0.6rem] font-black text-slate-500 uppercase tracking-widest mb-6">{v.sub}</div>
                <p className="text-slate-400 text-lg leading-relaxed font-medium mb-4 flex-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-dark">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-10 tracking-tight">Our Story</h2>
            <div className="space-y-8 text-slate-400 text-xl font-medium leading-relaxed">
              <p>
                Founded on the principle of integrated growth, VK Digitals & Financial Services LLP was born to bridge the gap between creative ambition and financial reality.
              </p>
              <p>
                We believe that a brand is only as strong as the systems supporting it. Whether it's a high-impact digital campaign or complex tax compliance, we bring the same level of structured logic and precision to the table.
              </p>
            </div>
          </div>
          <div className="flex-1 aspect-square frosted-dark rounded-[5rem] relative overflow-hidden shadow-2xl border border-neon-purple/20">
             <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-center">
                <blockquote className="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-8">
                  "Structured logic is the antidote to digital chaos."
                </blockquote>
                <div className="w-16 h-1 bg-neon-green shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
             </div>
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

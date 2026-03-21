import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { Megaphone, PencilRuler, TrendingUp, Users, Target, Rocket, Milestone } from 'lucide-react';

export default function About() {
  const values = [
    { 
      title: 'Digital Marketing & Branding', 
      icon: Megaphone, 
      color: 'text-blue-500', 
      desc: 'Performance-driven strategies that scale brand authority and convert modern audiences.',
      sub: 'Performance • SEO • Brand Identity'
    },
    { 
      title: 'Creative & Media Production', 
      icon: PencilRuler, 
      color: 'text-green', 
      desc: 'High-production content and design frameworks that make your brand visually unforgettable.',
      sub: 'Video • Design • Motion Graphics'
    },
    { 
      title: 'Financial Services & Advisory', 
      icon: TrendingUp, 
      color: 'text-orange-500', 
      desc: 'Strategic financial planning and compliance frameworks designed for scalable business growth.',
      sub: 'Funding • LLP • Compliance'
    }
  ];

  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      {/* Page Hero - Gradient as per Fix 03 */}
      <section className="bg-gradient-to-br from-[#5D2FE2] via-[#5D2FE2] to-[#009277] pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-10 shadow-xl">
               <Milestone size={14} className="text-green" />
               Founded in Yamunanagar • Serving India
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-10 tracking-tighter leading-none">
              About <br /> <span className="opacity-90">VK Digitals</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
              Built on one principle — every brand deserves structure, not shortcuts. We're your integrated partner for digital growth and financial clarity.
            </p>
          </div>
        </div>
        
        {/* Subtle Decorative Orb */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green/20 rounded-full blur-[120px]" />
      </section>

      {/* Expertise Grid - Standardized Pillars per Fix 03 */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="mb-20">
             <div className="text-[0.65rem] font-black text-purple uppercase tracking-[0.4em] mb-4">Our Expertise</div>
             <h2 className="text-4xl md:text-6xl font-display font-black text-ink-dark tracking-tight">Three Integrated Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="group p-12 bg-white/60 backdrop-blur-sm rounded-[3.5rem] transition-all hover:-translate-y-3 border border-white shadow-sm hover:shadow-2xl relative overflow-hidden flex flex-col">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-inner">
                   <v.icon size={28} className={v.color} />
                </div>
                <h3 className="text-2xl font-display font-black text-ink-dark mb-4 leading-tight">{v.title}</h3>
                <div className="text-[0.6rem] font-black text-ink-dark/30 uppercase tracking-widest mb-6">{v.sub}</div>
                <p className="text-ink-dark/60 text-lg leading-relaxed font-medium mb-4 flex-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white/40">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-display font-black text-ink-dark mb-10 uppercase tracking-tight">Our Story</h2>
            <div className="space-y-8 text-ink-dark/60 text-xl font-medium leading-relaxed">
              <p>
                Founded on the principle of integrated growth, VK Digitals & Financial Services LLP was born to bridge the gap between creative ambition and financial reality.
              </p>
              <p>
                We believe that a brand is only as strong as the systems supporting it. Whether it's a high-impact digital campaign or complex tax compliance, we bring the same level of structured logic and precision to the table.
              </p>
            </div>
          </div>
          <div className="flex-1 aspect-square bg-[#1A0F2E] rounded-[5rem] relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-green/20" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-center">
                <blockquote className="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-8">
                  "Structured logic is the antidote to digital chaos."
                </blockquote>
                <div className="w-16 h-1 bg-green" />
             </div>
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

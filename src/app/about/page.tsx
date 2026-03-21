import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { Megaphone, PencilRuler, TrendingUp, Users, Target, Rocket } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Digital Marketing & Branding', icon: Megaphone, color: 'text-blue-500', desc: 'Precision targeting and brand authority systems designed to convert modern audiences.' },
    { title: 'Creative Media & Production', icon: PencilRuler, color: 'text-green', desc: 'High-production content and design frameworks that make your brand visually unforgettable.' },
    { title: 'Financial Advisory & Compliance', icon: TrendingUp, color: 'text-orange-500', desc: 'Strategic financial planning and compliance frameworks designed for scalable business growth.' }
  ];

  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      {/* Page Hero */}
      <section className="bg-lavender pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/40 border border-white/20 text-purple/60 text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm">Our Identity</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-ink-dark mb-8 tracking-tighter leading-tight">
            About <span className="text-purple uppercase italic">VK Digitals</span>.
          </h1>
          <p className="text-ink-dark/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Every brand deserves structure, not shortcuts. We provide the digital and financial frameworks for sustained excellence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-display font-black text-ink-dark mb-8 uppercase tracking-tight">Our Story</h2>
            <div className="space-y-6 text-ink-dark/60 text-lg font-medium leading-relaxed">
              <p>
                Founded on the principle of integrated growth, VK Digitals & Financial Services LLP was born to bridge the gap between creative ambition and financial reality.
              </p>
              <p>
                We believe that a brand is only as strong as the systems supporting it. Whether it's a high-impact digital campaign or complex tax compliance, we bring the same level of structured logic and precision to the table.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-4xl font-black text-purple mb-1">2020</div>
                <div className="text-[0.6rem] font-black text-ink-dark/40 uppercase tracking-widest">Year Founded</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green mb-1">50+</div>
                <div className="text-[0.6rem] font-black text-ink-dark/40 uppercase tracking-widest">Core Partnerships</div>
              </div>
            </div>
          </div>
          <div className="flex-1 aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-10 bg-gradient-to-br from-lavender to-mint rounded-[3rem] opacity-50" />
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <blockquote className="text-3xl font-display font-black text-ink-dark text-center leading-tight">
                  "Structured logic is the antidote to digital chaos."
                </blockquote>
             </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-display font-black text-ink-dark mb-4 uppercase tracking-widest">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group p-12 bg-white rounded-[3.5rem] transition-all hover:-translate-y-3 border border-slate-100 shadow-sm hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <v.icon size={48} className={`${v.color} mb-8 group-hover:scale-110 transition-transform`} />
                <h3 className="text-3xl font-display font-black text-ink-dark mb-6 uppercase tracking-tight leading-tight">{v.title}</h3>
                <p className="text-ink-dark/60 text-lg leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined Quote Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-mint/30 border-y border-mint/20">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-5xl text-ink-dark leading-tight mb-12 italic serif">
            "We don't just build brands — we build <span className="text-purple">frameworks</span> for sustained excellence. Every pixel and every penny must work in harmony."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-ink-dark/20" />
            <div className="font-display font-black text-ink-dark uppercase tracking-widest text-sm">Founding Principle</div>
            <div className="w-12 h-px bg-ink-dark/20" />
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

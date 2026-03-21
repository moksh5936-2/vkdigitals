import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { Megaphone, PencilRuler, TrendingUp } from 'lucide-react';

const pillars = [
  {
    id: '01',
    title: 'Digital Marketing & Branding',
    icon: Megaphone,
    desc: 'Precision targeting and brand authority systems designed to convert modern audiences.',
    tags: ['Organic', 'ROI', 'PPC', 'Analytics'],
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'group-hover:border-neon-blue/50'
  },
  {
    id: '02',
    title: 'Creative Media & Production',
    icon: PencilRuler,
    desc: 'Visual storytelling and high-fidelity output that makes your brand visually unforgettable.',
    tags: ['4K', 'Brand Film', 'Corporate', 'Post-Prod'],
    color: 'text-neon-pink',
    bg: 'bg-neon-pink/10',
    border: 'group-hover:border-neon-pink/50'
  },
  {
    id: '03',
    title: 'Financial Services & Advisory',
    icon: TrendingUp,
    desc: 'Strategic financial planning and compliance frameworks designed for scalable growth.',
    tags: ['Legal', 'GST', 'Compliance', 'Funding'],
    color: 'text-neon-green',
    bg: 'bg-neon-green/10',
    border: 'group-hover:border-neon-green/50'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      
      <section className="bg-dark pt-48 pb-32 px-6 relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 frosted-dark border border-white/10 text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">Our Capabilities</div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter">
                High-Fidelity <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue italic">Solutions</span>.
              </h1>
            </div>
            <p className="flex-1 text-slate-400 text-xl leading-relaxed max-w-xl pb-4 font-medium">
              We provide the tools and expertise to turn complex business challenges into structured growth opportunities. Choose your pillar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pillars.map((s, i) => (
            <div key={i} className={`group bg-dark transition-all duration-300 hover:-translate-y-2 border border-white/5 ${s.border} rounded-[3rem] p-12 flex flex-col h-full relative overflow-hidden shadow-xl`}>
              <div className={`w-16 h-16 ${s.bg} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-inner`}>
                <s.icon size={32} className={s.color} />
              </div>
              <div className="text-[0.65rem] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Pillar {s.id}</div>
              <h3 className="text-3xl font-display font-black text-white mb-6 tracking-tight leading-tight">{s.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium flex-1">{s.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-[0.65rem] font-black uppercase tracking-widest rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full p-5 frosted-dark text-white font-black rounded-2xl transition-all hover:bg-white hover:text-dark hover:scale-[1.02] active:scale-95 text-center mt-auto border border-white/10">
                Learn More
              </button>
            </div>
          ))}
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

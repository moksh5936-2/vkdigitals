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
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: '02',
    title: 'Creative Media & Production',
    icon: PencilRuler,
    desc: 'Visual storytelling and high-fidelity output that makes your brand visually unforgettable.',
    tags: ['4K', 'Brand Film', 'Corporate', 'Post-Prod'],
    color: 'text-green',
    bg: 'bg-green/10'
  },
  {
    id: '03',
    title: 'Financial Services & Advisory',
    icon: TrendingUp,
    desc: 'Strategic financial planning and compliance frameworks designed for scalable growth.',
    tags: ['Legal', 'GST', 'Compliance', 'Funding'],
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  }
];


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      <section className="bg-lavender pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 text-center md:text-left">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-white/40 backdrop-blur-sm border border-white/20 text-purple/60 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">Our Capabilities</div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-ink-dark leading-tight">
                High-Fidelity <br /> <span className="text-purple uppercase italic">Solutions</span>.
              </h1>
            </div>
            <p className="flex-1 text-ink-dark/60 text-lg md:text-xl leading-relaxed max-w-xl pb-4">
              We provide the tools and expertise to turn complex business challenges into structured growth opportunities. Choose your pillar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pillars.map((s, i) => (
            <div key={i} className="service-card group !p-12">
              <div className="service-card-accent" />
              <div className={`w-16 h-16 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                <s.icon size={32} />
              </div>
              <div className="text-[0.65rem] font-black text-ink-dark/30 uppercase tracking-[0.3em] mb-4">Pillar {s.id}</div>
              <h3 className="text-3xl font-display font-black text-ink-dark mb-6 tracking-tight leading-tight">{s.title}</h3>
              <p className="text-ink-dark/60 text-lg leading-relaxed mb-8 font-medium">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 bg-slate-100 text-ink-dark/60 text-[0.6rem] font-black uppercase tracking-widest rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full p-4 bg-ink-dark text-white font-black rounded-2xl transition-all hover:bg-purple hover:scale-[1.02] active:scale-95 shadow-xl shadow-ink-dark/5">
                Learn More
              </button>
            </div>
          ))}
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

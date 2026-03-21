import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

const partners = [
  {
    name: 'Ekara Financials',
    initials: 'EF',
    desc: 'Strategic financial services partner enabling end-to-end capital and investment advisory for our shared client base across India.',
    tag: 'Financial Services',
    iconColor: 'text-brand-purple',
    iconBg: 'bg-brand-purple/10'
  },
  {
    name: 'PriyaQubit',
    initials: 'PQ',
    desc: 'Technology and digital transformation partner delivering advanced software engineering and data infrastructure solutions.',
    tag: 'Technology',
    iconColor: 'text-brand-green',
    iconBg: 'bg-emerald-50'
  },
  {
    name: 'Mavriq AI',
    initials: 'MA',
    desc: 'AI-powered insights and automation partner helping brands leverage artificial intelligence for smarter business decisions.',
    tag: 'AI & Automation',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50'
  },
  {
    name: 'WPS Hub',
    initials: 'WH',
    desc: 'Workspace productivity and SaaS partner streamlining operations and digital workflows for growing businesses and enterprises.',
    tag: 'Productivity',
    iconColor: 'text-brand-indigo',
    iconBg: 'bg-indigo-50'
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
      <Navbar />
      
      {/* Light Theme Purple Hero - precisely matching Image 1 */}
      <section className="hero-gradient pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-white/50 mb-6 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Partners</span>
          </div>
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
            4+ Verified Strategic Partners
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            Our Trusted Partner<br />Ecosystem
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            Carefully selected partners that extend our capabilities — so every client gets the best of multiple specialisms.
          </p>
        </div>
      </section>

      {/* Content strictly following Image 1 */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white text-center">
         
         <div className="mb-20">
            <div className="flex justify-center items-center gap-4 mb-4">
               <div className="h-[1px] w-8 bg-brand-purple/30" />
               <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Ecosystem</span>
               <div className="h-[1px] w-8 bg-brand-purple/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
               Built on Verified Collaboration
            </h2>
            <p className="text-slate-500 font-medium text-sm max-w-xl mx-auto leading-relaxed">
               Each partnership is strategic — chosen because it adds direct value to the clients we serve.
            </p>
         </div>

         {/* Grid mapping exactly to Image 1 layout */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
            {partners.map((p, i) => (
               <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-start">
                  
                  <div className={`w-16 h-16 ${p.iconBg} rounded-[1.25rem] flex items-center justify-center shrink-0`}>
                     <span className={`font-display font-black text-lg ${p.iconColor}`}>{p.initials}</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-start">
                     <h3 className="text-xl font-display font-black text-slate-900 mb-3 tracking-tight">{p.name}</h3>
                     <p className="text-slate-500 text-[0.85rem] font-medium leading-relaxed mb-6 flex-1">
                        {p.desc}
                     </p>
                     
                     {/* Light Green Tag */}
                     <span className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[0.65rem] font-black uppercase tracking-widest rounded-full">
                        {p.tag}
                     </span>
                  </div>

               </div>
            ))}
         </div>

      </section>

      {/* CTA exactly matching Image 1 */}
      <section className="py-24 bg-brand-green text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#059669] rounded-full mix-blend-multiply opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#34d399] rounded-full mix-blend-screen opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
         
         <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
              Interested in a Partnership?
            </h2>
            <p className="text-white/90 font-medium mb-10 text-sm">
              We're open to strategic collaborations that create real value.
            </p>
            <div className="flex items-center justify-center gap-4">
               <button className="px-10 py-3.5 bg-white text-brand-green font-bold rounded-full shadow-lg hover:bg-slate-50 transition-colors text-sm">Reach Out</button>
               <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"></button>
            </div>
         </div>
      </section>

      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import { BarChart3, Clapperboard, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
      <Navbar />
      
      {/* Light Theme Purple Hero */}
      <section className="hero-gradient pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-white/50 mb-6 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
            Founded in Yamunanagar • Serving India
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter max-w-2xl">
            Where Strategy Meets Structure
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            Built on one principle — every brand deserves structure, not shortcuts.
          </p>
        </div>
      </section>

      {/* About Content from Image 4 */}
      <section className="py-24 bg-white relative">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
               
               {/* Left Description */}
               <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-[1px] w-8 bg-brand-purple/30" />
                     <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Who We Are</span>
                  </div>
                  <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-tight mb-8">
                     A multi-disciplinary firm built for purposeful growth
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                     VK Digitals was founded on the belief that sustainable brand growth requires more than campaigns — it requires structure. In an era of viral trends and fragmented tactics, we provide the integrated foundation businesses need to grow with intention.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                     Our evolution into Financial Services & Advisory reflects a simple truth: a brand's story cannot be separated from its financial foundations. True, lasting growth needs both powerful communication and sound economic decisions.
                  </p>
               </div>

               {/* Right Mission/Vision/Values boxes */}
               <div className="flex-1 space-y-4">
                  <div className="p-8 border-l-4 border-brand-purple bg-white border border-slate-100 rounded-r-3xl shadow-sm">
                     <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                     <p className="text-slate-500 font-medium text-xs leading-relaxed">
                        Empower businesses with structured strategies that drive measurable, sustainable growth — digitally and financially.
                     </p>
                  </div>
                  <div className="p-8 border-l-4 border-brand-green bg-white border border-slate-100 rounded-r-3xl shadow-sm">
                     <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
                     <p className="text-slate-500 font-medium text-xs leading-relaxed">
                        Become India's most trusted integrated digital-financial growth partner for emerging and scaling brands.
                     </p>
                  </div>
                  <div className="p-8 border-l-4 border-amber-400 bg-white border border-slate-100 rounded-r-3xl shadow-sm">
                     <h3 className="font-bold text-slate-900 mb-2">Our Values</h3>
                     <p className="text-slate-500 font-medium text-xs leading-relaxed">
                        Structure over shortcuts. Clarity over chaos. Long-term thinking over short-term wins. Accountability in every engagement.
                     </p>
                  </div>
               </div>
            </div>

            {/* Three Integrated Pillars */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <div className="flex justify-center items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
                 <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Our Expertise</span>
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">Three Integrated Pillars</h2>
               <p className="text-slate-500 font-medium text-sm">Working in sync — designed to accelerate your growth at every dimension.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-lg shadow-black/5 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                     <BarChart3 size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">Digital Marketing & Branding</h3>
                  <p className="text-slate-500 text-[0.8rem] leading-relaxed">
                     Strategy-first execution that builds real audiences. Brand identities that carry authority and campaigns that convert.
                  </p>
               </div>
               
               <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-lg shadow-black/5 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                     <Clapperboard size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">Creative & Media</h3>
                  <p className="text-slate-500 text-[0.8rem] leading-relaxed">
                     Creative storytelling combined with data-driven performance — ensuring clients are seen, heard, and remembered.
                  </p>
               </div>

               <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-lg shadow-black/5 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                     <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">Financial Advisory</h3>
                  <p className="text-slate-500 text-[0.8rem] leading-relaxed">
                     Credible registered LLP advisory from business planning and compliance to investment-readiness and capital strategy.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Quote Section from Image 4 */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-brand-violet to-[#4c1d95] text-center">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple rounded-full mix-blend-screen opacity-50 blur-[100px] pointer-events-none" />
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-green rounded-full mix-blend-screen opacity-10 blur-[100px] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-brand-purple/50 font-serif text-6xl mb-4 leading-none select-none">"</div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-relaxed">
              Every brand deserves structure, not shortcuts.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-brand-purple" />
              <div className="text-white/60 text-[0.65rem] font-bold uppercase tracking-[0.2em]">VK DIGITALS & FINANCIAL SERVICES LLP — FOUNDING PRINCIPLE</div>
              <div className="w-8 h-[1px] bg-brand-purple" />
            </div>
         </div>
      </section>

      {/* Specialized Green CTA styling from Image 4 */}
      <section className="py-24 bg-brand-green text-center">
         <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
           Ready to Work Together?
         </h2>
         <p className="text-white/90 font-medium mb-10 text-sm">
           Let's understand your goals and design a structured path.
         </p>
         <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-brand-green font-bold rounded-full shadow-lg hover:bg-slate-50 transition-colors text-sm">Start a Conversation</button>
            <button className="px-8 py-3.5 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm">Explore Services</button>
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

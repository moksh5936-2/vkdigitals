import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandTicker from '@/components/BrandTicker';
import Pillars from '@/components/Pillars';
import Process from '@/components/Process';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 w-full overflow-hidden">
      <Navbar />
      <Hero />
      <BrandTicker />
      <Pillars />
      <Process />
      
      {/* Quote Section from Image 5 */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#4c1d95] to-brand-violet text-center">
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-purple rounded-full mix-blend-screen opacity-30 blur-[100px] pointer-events-none" />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-brand-purple/40 font-serif text-6xl mb-4 leading-none select-none">"</div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-8 leading-relaxed">
              Every brand deserves structure, not shortcuts.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-brand-purple" />
              <div className="text-white/60 text-[0.65rem] font-bold uppercase tracking-[0.2em]">VK DIGITALS & FINANCIAL SERVICES LLP — FOUNDING PRINCIPLE</div>
              <div className="w-8 h-[1px] bg-brand-purple" />
            </div>
         </div>
      </section>

      {/* Client Stories Section from Image 5 */}
      <section className="py-24 bg-slate-950 relative">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
               <div className="flex justify-center items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
                 <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">CLIENT STORIES</span>
                 <div className="h-[1px] w-8 bg-brand-purple/30" />
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
                 Brands That Chose Structure
               </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
                  <div className="flex text-brand-green mb-6 text-sm">★★★★★</div>
                  <p className="text-slate-300 leading-relaxed font-medium mb-8">
                     "VK Digitals helped us restructure our entire brand identity. The approach was methodical — no fluff, just results. Our digital presence improved dramatically within 3 months."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xs">RS</div>
                     <div>
                        <div className="text-white font-bold text-sm">Rohit Sharma</div>
                        <div className="text-slate-400 text-xs text-[0.65rem] uppercase tracking-wider">Founder, RetailPro India</div>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:border-brand-green/30 transition-colors">
                  <div className="flex text-brand-green mb-6 text-sm">★★★★★</div>
                  <p className="text-slate-300 leading-relaxed font-medium mb-8">
                     "Their financial advisory gave us clarity we never had. They helped us plan our business capital better and connected us to the right financial instruments for direct growth."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs">PM</div>
                     <div>
                        <div className="text-white font-bold text-sm">Priya Mehta</div>
                        <div className="text-slate-400 text-xs text-[0.65rem] uppercase tracking-wider">Director, Mehta Exports</div>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
                  <div className="flex text-brand-green mb-6 text-sm">★★★★★</div>
                  <p className="text-slate-300 leading-relaxed font-medium mb-8">
                     "Their creative team produced our brand film and the response was phenomenal. Combined with robust strategy, we saw a 4x increase in inquiries within 60 days."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xs">AG</div>
                     <div>
                        <div className="text-white font-bold text-sm">Amit Goyal</div>
                        <div className="text-slate-400 text-xs text-[0.65rem] uppercase tracking-wider">CEO, Growth Solutions</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <CTASection />
      
      {/* Light Theme Footer matching Image 5 */}
      <footer className="bg-brand-dark py-16 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-black text-xs">VK</div>
                   <div className="flex flex-col">
                     <span className="font-display font-black text-white leading-none">VK Digitals</span>
                     <span className="text-[0.45rem] text-white/50 font-bold uppercase tracking-widest mt-0.5">& Financial Services LLP</span>
                   </div>
                 </div>
                 <p className="text-white/50 text-xs leading-relaxed max-w-xs mt-6">
                   Every brand deserves structure, not shortcuts. Your integrated partner for digital growth and financial clarity.
                 </p>
                 <div className="flex gap-3 mt-6">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">in</a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">tw</a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">ig</a>
                 </div>
              </div>

              <div>
                 <div className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Company</div>
                 <ul className="space-y-4 text-white/60">
                    <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="/partners" className="hover:text-white transition-colors">Partners</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                 </ul>
              </div>

              <div>
                 <div className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Services</div>
                 <ul className="space-y-4 text-white/60">
                    <li><a href="/services" className="hover:text-white transition-colors">Digital Marketing</a></li>
                    <li><a href="/services" className="hover:text-white transition-colors">IT Services</a></li>
                    <li><a href="/services" className="hover:text-white transition-colors">Creative & Media</a></li>
                    <li><a href="/services" className="hover:text-white transition-colors">Financial Advisory</a></li>
                 </ul>
              </div>

              <div>
                 <div className="text-[0.65rem] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Contact</div>
                 <ul className="space-y-4 text-white/60">
                    <li><a href="mailto:Sales@VKdigitals.in" className="hover:text-white transition-colors">Sales@VKdigitals.in</a></li>
                    <li><a href="tel:+918571041192" className="hover:text-white transition-colors">+91 85710 41192</a></li>
                    <li><span className="block mt-2">Mon - Fri: 10AM - 6PM</span></li>
                    <li>
                      <span className="block mt-2 text-white/60 leading-relaxed">
                        1st floor above healthkart<br />
                        near nehru park model town<br />
                        Yamunanagar - 135001
                      </span>
                    </li>
                 </ul>
              </div>
           </div>

           <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
              <div>© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</div>
              <div className="flex items-center gap-6">
                 <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              </div>
           </div>
        </div>
      </footer>
    </main>
  );
}

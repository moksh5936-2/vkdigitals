'use client';

import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-hidden">
      <Navbar />
      
      {/* Light Theme Purple Hero */}
      <section className="hero-gradient pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
            Contact Our Team
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            Let's Build Something<br />Meaningful
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Reach out to discuss your digital, creative, or financial goals.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white -mt-20 relative z-20">
         <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Info Column */}
            <div className="lg:w-1/3 flex flex-col gap-6">
               <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm">
                  <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mb-6">
                     <Mail size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-500 text-sm mb-4">For general inquiries and partnerships.</p>
                  <a href="mailto:Sales@VKdigitals.in" className="text-brand-purple font-bold hover:text-brand-indigo transition-colors flex items-center gap-2 text-sm">
                     Sales@VKdigitals.in <ArrowRight size={16} />
                  </a>
               </div>

               <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                     <Phone size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-500 text-sm mb-4">Mon-Fri from 10am to 6pm.</p>
                  <a href="tel:+918571041192" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors flex items-center gap-2 text-sm">
                     +91 85710 41192 <ArrowRight size={16} />
                  </a>
               </div>

               <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                     <MapPin size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                     VK Digitals & Financial Services LLP<br />
                     Yamunanagar, Haryana 135001<br />
                     India
                  </p>
               </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:w-2/3 bg-white border border-slate-100 p-10 md:p-16 rounded-[2.5rem] shadow-sm">
               
               {/* 24hr Response Pledge Box */}
               <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mb-12 flex items-start gap-4">
                  <div className="text-2xl mt-1">⚡</div>
                  <div>
                     <h4 className="font-bold text-emerald-900 mb-1">24hr Response Pledge</h4>
                     <p className="text-emerald-700 text-sm font-medium leading-relaxed">
                        We aim to respond to all qualified inquiries within 24 business hours. No automated deflection, just real strategy.
                     </p>
                  </div>
               </div>

               <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow" placeholder="Jane" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow" placeholder="Doe" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow" placeholder="jane@company.com" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow" placeholder="+1 (555) 000-0000" />
                     </div>
                  </div>

                  <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Inquiry Type</label>
                     <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow appearance-none text-slate-900">
                        <option>Digital Marketing & Branding</option>
                        <option>Creative & Media</option>
                        <option>Financial Advisory</option>
                        <option>IT Services & Platforms</option>
                        <option>Other</option>
                     </select>
                  </div>

                  <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                     <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-shadow resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="mt-4 px-8 py-4 bg-brand-purple text-white font-bold rounded-full hover:bg-brand-indigo transition-colors shadow-lg shadow-brand-purple/20">
                     Submit Inquiry
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* Basic Dark Footer */}
      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5 mt-24">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

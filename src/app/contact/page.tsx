'use client';

import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Zap } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    { label: 'General Enquiries', value: 'Sales@VKdigitals.in', icon: Mail, href: 'mailto:Sales@VKdigitals.in' },
    { label: 'Primary Support', value: '+91 85710 41192', icon: Phone, href: 'tel:+918571041192' },
    { label: 'Registered Office', value: '1st Floor, Above HealthKart, Near Nehru Park, Yamunanagar, Haryana 135001', icon: MapPin, href: '#' }
  ];

  return (
    <main className="min-h-screen bg-dark w-full overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto relative z-10 hidden md:block">
          <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-12 lg:px-24 mb-32">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 frosted-dark border border-white/10 text-slate-300 text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">Reach Out</div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
              Where Strategy Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue italic">Connection.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-16">
              Whether you're starting a new brand or scaling an existing one, our integrated team is ready to design your growth framework.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((item, i) => (
                <div key={i} className={`p-8 bg-card rounded-[2.5rem] border border-white/5 shadow-xl hover:-translate-y-1 transition-all ${i === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-neon-blue shadow-inner">
                    <item.icon size={24} />
                  </div>
                  <div className="text-[0.65rem] font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</div>
                  <a href={item.href} className="text-lg font-bold text-slate-300 hover:text-white transition-colors break-words">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Restored Response Pledge Timings */}
            <div className="p-10 frosted-dark rounded-[3rem] border border-neon-purple/20 relative overflow-hidden group mb-8">
               <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-100" />
               <h3 className="text-xl font-display font-black text-white mb-4 uppercase tracking-widest flex items-center gap-3 relative z-10">
                 <Zap className="text-neon-green" size={24}/> Response Pledge
               </h3>
               <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                 We aim to respond to all structured enquiries within <strong>24 business hours</strong>. For urgent partnership discussions, please call us directly.
               </p>
            </div>

            <button className="w-full p-6 frosted-dark border border-white/10 text-slate-300 font-black rounded-[2rem] hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-3">
               Open in Google Maps <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Form Side */}
          <div className="flex-1">
             <div className="p-12 md:p-16 bg-card rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-3xl font-display font-black text-white mb-4 tracking-tight">Start a Project</h3>
                <p className="text-slate-400 text-sm font-medium mb-12">Tell us about your goals and we'll design the right path.</p>
                
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                      <input type="text" placeholder="John" className="p-5 bg-dark border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                      <input type="text" placeholder="Doe" className="p-5 bg-dark border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="p-5 bg-dark border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">Phone Number <span className="text-slate-600">(Optional)</span></label>
                      <input type="tel" placeholder="+91 98765 43210" className="p-5 bg-dark border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">Service Interested In</label>
                    <div className="relative">
                      <select className="w-full p-5 bg-dark border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all cursor-pointer">
                        <option>Digital Marketing & Branding</option>
                        <option>Creative Media Production</option>
                        <option>Financial Advisory & Tax</option>
                        <option>IT Services & Platforms</option>
                        <option>Not Sure Yet</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                    <textarea 
                      placeholder="Tell us about your goals..." 
                      className="p-5 bg-dark border border-white/10 rounded-2xl text-white placeholder-slate-600 min-h-[160px] resize-y focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                    ></textarea>
                  </div>

                  <button type="button" className="w-full p-6 bg-neon-purple text-white font-black rounded-full hover:bg-neon-blue transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    Send Message <Send size={18} />
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#0B0914] border-t border-white/5 py-20 px-6 mt-20">
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

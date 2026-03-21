import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@vkdigitals.com', href: 'mailto:hello@vkdigitals.com' },
    { icon: Phone, label: 'Phone', value: '+91 94160-50201', href: 'tel:+919416050201' },
    { icon: MapPin, label: 'Office', value: 'Yamunanagar, Haryana, India', href: '#' },
    { icon: Linkedin, label: 'Connect', value: 'VK Digitals & Financial Services LLP', href: 'https://linkedin.com' },
  ];

  return (
    <main className="min-h-screen bg-peach-cream">
      <Navbar />
      
      <section className="bg-lavender pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/40 border border-white/20 text-purple/60 text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm">Get In Touch</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-ink-dark leading-tight mb-8 tracking-tighter">
            Start a <span className="text-purple uppercase italic">Conversation</span>.
          </h1>
          <p className="text-ink-dark/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to structure your Next era? Drop us a line or visit our office. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col lg:flex-row gap-20">
          {/* Contact Details */}
          <div className="flex-1 flex flex-col gap-12">
            <h2 className="text-4xl font-display font-black text-ink-dark uppercase tracking-tight">Direct Channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[2.5rem] hover:bg-lavender transition-all border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-lavender-input rounded-xl flex items-center justify-center mb-6 text-purple shadow-inner">
                    <item.icon size={24} />
                  </div>
                  <div className="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                  <a href={item.href} className="text-lg font-bold text-ink-dark hover:text-purple transition-colors break-words">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-10 bg-lavender/30 rounded-[3rem] border border-lavender/40">
               <h3 className="text-xl font-display font-black text-ink-dark mb-6 uppercase tracking-tight">Business Hours</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-ink-dark/60">Monday — Friday</span>
                     <span className="text-ink-dark">10:00 AM — 06:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-ink-dark/60">Saturday</span>
                     <span className="text-ink-dark">11:00 AM — 03:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-ink-dark/60">Sunday</span>
                     <span className="text-purple font-bold">Closed</span>
                  </div>
               </div>
            </div>

            <button className="w-full p-5 border-2 border-slate-100 text-ink-dark/60 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
               View on Google Maps <ArrowUpRight size={18} />
            </button>
          </div>


          {/* Form */}
          <div className="flex-1 p-12 bg-white frosted-glass !rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-3xl font-display font-black text-ink-dark mb-8 uppercase tracking-tight relative z-10">Send an Enquiry</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.65rem] font-black text-ink-dark/40 uppercase tracking-widest mb-2 block">First Name</label>
                  <input type="text" className="input-pastel w-full" placeholder="John" />
                </div>
                <div>
                  <label className="text-[0.65rem] font-black text-ink-dark/40 uppercase tracking-widest mb-2 block">Last Name</label>
                  <input type="text" className="input-pastel w-full" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.65rem] font-black text-ink-dark/40 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input type="email" className="input-pastel w-full" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-[0.65rem] font-black text-ink-dark/40 uppercase tracking-widest mb-2 block">Phone Number (Optional)</label>
                  <input type="tel" className="input-pastel w-full" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="text-[0.65rem] font-black text-ink-dark/40 uppercase tracking-widest mb-2 block">Tell us about your brand</label>
                <textarea className="input-pastel w-full min-h-[160px]" placeholder="Briefly describe your goals..."></textarea>
              </div>
              <button className="w-full p-5 bg-purple hover:bg-purple-dark text-white font-black rounded-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-purple/10">
                Submit Enquiry <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

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

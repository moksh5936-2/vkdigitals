"use client";
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Audit & Discovery',
    desc: 'We analyze your brand’s digital and financial DNA to find the hidden leverage points.',
    icon: Search,
    color: 'text-purple'
  },
  {
    title: 'Framework Design',
    desc: 'We build a custom strategy that integrates marketing, media, and advisory.',
    icon: Lightbulb,
    color: 'text-green'
  },
  {
    title: 'Precision Execution',
    desc: 'Our specialists launch your campaigns and frameworks with relentless focus.',
    icon: Zap,
    color: 'text-purple'
  },
  {
    title: 'Optimized Growth',
    desc: 'Continuous data loops Ensure your brand stays on a trajectory of structured success.',
    icon: CheckCircle2,
    color: 'text-green'
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-mint relative overflow-hidden">
      {/* Animated Connector Line */}
      <div className="absolute top-[40%] left-0 w-full h-px hidden md:block z-0 px-24">
        <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 1H1200" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="12 12" className="animate-process-line" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="1" x2="1200" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#A3E635" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/40 border border-white/20 text-purple/60 text-[0.65rem] font-black uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">Our Methodology</div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-ink-dark mb-6 tracking-tighter">
            The <span className="text-purple uppercase italic">VK Logic</span>
          </h2>
          <p className="text-ink-dark/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            A structured, 4-step execution model designed to turn brand potential into measurable market performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-purple/20">
                <step.icon size={32} className={`${step.color} group-hover:text-white transition-colors`} />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center font-display font-black text-purple text-xs shadow-sm">
                  0{idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-display font-black text-ink-dark mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-ink-dark/50 text-sm leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


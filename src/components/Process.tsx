'use client';

export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery', color: 'text-brand-purple', bg: 'bg-brand-purple/10', desc: 'Deep dive into your business, goals, audience, and competitive landscape.' },
    { num: '02', title: 'Strategy', color: 'text-brand-green', bg: 'bg-brand-green/10', desc: 'A structured roadmap with touchpoints, timelines, KPIs, and resource allocation.' },
    { num: '03', title: 'Execution', color: 'text-brand-indigo', bg: 'bg-brand-indigo/10', desc: 'Precision delivery across digital, creative, or financial workstreams.' },
    { num: '04', title: 'Review & Scale', color: 'text-brand-violet', bg: 'bg-brand-violet/10', desc: 'Performance review, learnings applied, optimized for the next phase.' }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        
        <div className="mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-brand-purple/30" />
             <span className="text-[0.65rem] font-bold text-brand-purple uppercase tracking-[0.2em]">Our Process</span>
             <div className="h-[1px] w-8 bg-brand-purple/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
            A Process Built for Outcomes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Four deliberate steps — no guesswork, no shortcuts, just structured execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
           <div className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-slate-200 z-0" />
           
           {steps.map((step, idx) => (
             <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative z-10">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} font-black text-lg mb-6 shadow-sm`}>
                 {step.num}
               </div>
               <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}

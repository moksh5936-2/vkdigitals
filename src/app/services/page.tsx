import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
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
            <span className="text-white">Services</span>
          </div>
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[0.65rem] font-bold uppercase tracking-widest rounded-full mb-8">
            3 Integrated Pillars • Built for Results
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            Services That Move the Needle
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            Digital, creative, IT, and financial — all under one structured roof, working in sync.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-40">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="py-6 text-sm font-bold text-brand-purple border-b-2 border-brand-green">Digital & Branding</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">IT Services</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Creative & Media</button>
            <button className="py-6 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Financial Advisory</button>
         </div>
      </div>

      {/* Services Content Mapping exactly to Image 3 */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
         
         <div className="mb-24">
            <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">Digital Marketing & Branding</h2>
            <p className="text-brand-green font-bold text-sm mb-12">Pillar 01 — Strategy-first marketing that builds real audiences and durable brand equity.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-brand-purple font-black text-sm mb-6">SEO & Performance</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Search Engine Optimization</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Performance Marketing & PPC</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Google Ads Management</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Analytics & Reporting</li>
                  </ul>
               </div>
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Brand Strategy</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Brand Identity Design</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Brand Guidelines</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Positioning & Messaging</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Competitor Analysis</li>
                  </ul>
               </div>
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Social Media</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Social Media Strategy</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Account Management</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Community Building</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Influencer Outreach</li>
                  </ul>
               </div>
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Content Marketing</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Content Strategy</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Blog & Article Writing</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Email Campaigns</li>
                     <li className="flex items-start gap-2"><span className="text-brand-indigo mt-1">•</span> Lead Generation</li>
                  </ul>
               </div>
            </div>
         </div>

         <div>
            <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">IT Services</h2>
            <p className="text-brand-green font-bold text-sm mb-12">Modern technology solutions for a professional, high-performance digital presence.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Web Development</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Website Development</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> E-commerce Solutions</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> CMS Development</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> API Integration</li>
                  </ul>
               </div>
               <div className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                  <h3 className="text-brand-purple font-black text-sm mb-6">UI/UX Design</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Web Designing</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> UI/UX Prototyping</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Responsive Design</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Design Systems</li>
                  </ul>
               </div>
               <div className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Custom Applications</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Custom Web Apps</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Dashboard Development</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Business Automation</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> SaaS Platforms</li>
                  </ul>
               </div>
               <div className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                  <h3 className="text-brand-purple font-black text-sm mb-6">Infrastructure</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Domain Registration</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Hosting Management</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> SSL & Security</li>
                     <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Performance Optimization</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <CTASection />
      
      {/* Shortened basic dark footer from image 5 applied to all */}
      <footer className="bg-brand-dark py-12 text-sm text-center border-t border-white/5">
        <div className="container mx-auto">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} VK Digitals and Financial Services LLP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

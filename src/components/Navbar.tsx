'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50 sticky top-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 15 100 90" className="w-[3rem] h-auto shrink-0 drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]">
                {/* Purple combined/overlapped perfectly */}
                {/* Path 1 goes deep under arrow to prevent anti-aliasing bleeds */}
                <path d="M 0,20 L 50,70 L 23,83 C 23,100 10,105 0,105 Z" fill="#7C3AED" />
                {/* Path 2 starts deeper under arrow */}
                <path d="M 50,70 C 55,65 75,75 100,105 L 70,105 C 55,95 45,95 37,97 Z" fill="#7C3AED" />
                {/* Green arrow on top */}
                <path d="M 100,20 L 100,60 L 87,47 L 37,97 L 23,83 L 73,33 L 60,20 Z" fill="#A4C639" />
              </svg>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-white text-[1.15rem] leading-none tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  DIGITALS <span className="text-[0.65em] uppercase relative -top-0.5">and</span> FINANCIAL
                </span>
                <span className="font-display font-black text-[#A4C639] text-[0.95rem] leading-[1.1] tracking-[0.12em] mt-[3px] drop-shadow-[0_0_8px_rgba(164,198,57,0.4)]">
                  SERVICES
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="relative py-2 group"
                  >
                    <span className={cn(
                      "font-semibold text-sm transition-colors",
                      isActive ? "text-brand-purple drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" : "text-slate-400 hover:text-white"
                    )}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link 
                href="/about" 
                className="px-6 py-2.5 bg-transparent border border-white/20 text-white text-sm font-bold rounded-full hover:border-brand-purple hover:text-brand-purple transition-colors"
              >
                Our Story
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2.5 bg-brand-purple text-white text-sm font-bold rounded-full hover:bg-brand-violet transition-all hover:shadow-neon-purple"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden absolute w-full z-40 shadow-xl"
          >
            <div className="flex flex-col px-6 py-8 gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-xl font-display font-black tracking-tight",
                      isActive ? "text-brand-purple drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 mt-6">
                <Link 
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-6 py-3 border border-white/20 text-white text-center font-bold rounded-full"
                >
                  Our Story
                </Link>
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-6 py-3 bg-brand-purple text-white text-center font-bold rounded-full shadow-neon-purple"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

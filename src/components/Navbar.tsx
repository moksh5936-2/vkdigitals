'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={cn(
          'fixed w-full z-50 transition-all duration-300 pointer-events-auto',
          isScrolled 
            ? 'py-4 bg-[#0B0914]/80 backdrop-blur-2xl border-b border-white/[0.05]' 
            : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all">
                VK
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-blue transition-all">
                  VK Digitals
                </span>
                <span className="text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest mt-1">
                  & Financial Services LLP
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
                    className="relative group py-2"
                  >
                    <span className={cn(
                      "font-medium text-sm transition-colors",
                      isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                    )}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-neon-purple hover:border-neon-purple transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0B0914] pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-display font-black tracking-tight",
                      isActive ? "text-neon-green" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-8 px-8 py-4 bg-neon-purple text-white text-center font-black rounded-full"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

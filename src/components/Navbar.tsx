'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 h-28">
      <div className="container mx-auto h-full px-8 frosted-glass !rounded-full border border-white/20 flex items-center justify-between shadow-2xl">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-purple rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-purple/20">
            VK
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-black text-ink-dark tracking-tighter">DIGITALS</span>
            <span className="text-[0.45rem] font-black text-ink-dark/40 tracking-widest uppercase">& Financial Services LLP</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[0.65rem] font-black uppercase tracking-widest transition-all relative py-2",
                  isActive ? "text-purple" : "text-ink-dark/60 hover:text-purple"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Navigation Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact" className="btn-forest !py-3 !px-8 text-xs">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-ink-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-32 left-6 right-6 p-8 bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-display font-black tracking-tight",
                    pathname === link.href ? "text-purple" : "text-ink-dark"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-forest text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

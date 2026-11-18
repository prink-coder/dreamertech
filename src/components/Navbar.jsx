import React, { useState } from 'react';
import { Layers, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'DreamCRM', href: '#dreamcrm' },
    { label: 'Solutions & Plugins', href: '#solutions' },
    { label: 'Why Dreamer Tech', href: '#why-us' },
    { label: 'Scope Estimator', href: '#estimator' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3.5">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
              Dreamer<span className="text-blue-600">Techs</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
              CRM • IPPBX • Enterprise Web
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation('Request Free Demo')}
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Live Demo
          </button>
          <button
            onClick={() => onOpenConsultation('Free Architecture Consultation')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-600/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation('Free Architecture Consultation');
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
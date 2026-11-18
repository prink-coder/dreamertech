import React from 'react';
import { Clock, ShieldCheck, Mail } from 'lucide-react';

export default function TopAnnouncementBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-teal-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            1-Hour Guaranteed Emergency Response SLA
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            24/7 Proactive CRM &amp; IPPBX Monitoring
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@dreamertechs.com"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            info@dreamertechs.com
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://wa.me/919998074759"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            WhatsApp: +91 99980 74759
          </a>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Layers, Mail, PhoneCall, MapPin } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Dreamer<span className="text-blue-500">Techs</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Enterprise CRM, Asterisk IPPBX telephony, marketplace plugins, and custom web &amp;
              mobile applications engineered for reliability and clarity.
            </p>
            <div className="text-xs text-teal-400 font-semibold">
              1-Hour Guaranteed Emergency SLA • 24/7 Support
            </div>
          </div>

          {/* Core CRM & Plugins */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">CRM &amp; Marketplace</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#dreamcrm" className="hover:text-white transition-colors">
                  DreamCRM Enterprise
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  SuiteCRM &amp; SugarCRM Customization
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Twilio Call Logger &amp; Click-to-Call
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  WhatsApp &amp; SMS CRM Connectors
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  2-Way Google Calendar Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Telephony & Web */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Telephony &amp; Development</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Asterisk, Elastix &amp; FreePBX IPPBX
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  24/7 Managed CRM &amp; VoIP Hosting
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  OpenCart &amp; Custom E-Commerce
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Field-Force iOS &amp; Android Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white mb-4">Direct Engineering Desk</h4>
            <a
              href="mailto:info@dreamertechs.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              info@dreamertechs.com
            </a>
            <a
              href="https://wa.me/919998074759"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              +91 99980 74759 (Call / WhatsApp)
            </a>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>Ahmedabad, Gujarat, India • Serving Clients Worldwide</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('Footer Consultation Request')}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Dreamer Technologies. All rights reserved.</div>
          <div>Plain English &amp; Hindi Support • Built for High-Growth Teams</div>
        </div>
      </div>
    </footer>
  );
}
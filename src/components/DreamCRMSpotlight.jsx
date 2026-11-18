import React from 'react';
import { Award, CheckCircle2, ArrowRight, Layers, PhoneCall, RefreshCw, ShieldCheck } from 'lucide-react';

export default function DreamCRMSpotlight({ onOpenConsultation }) {
  const pillars = [
    {
      icon: Layers,
      title: 'Zero Per-Seat Licensing Tax',
      desc: 'Scale from 10 to 500+ users without punishing monthly SaaS per-user price hikes.',
    },
    {
      icon: PhoneCall,
      title: 'Native VoIP & WhatsApp Built-In',
      desc: 'Click-to-call, call recordings, and WhatsApp templates sit directly inside every lead card.',
    },
    {
      icon: RefreshCw,
      title: 'Tailored to Your Exact Workflow',
      desc: 'Custom modules, approval chains, and automated territory routing built around your team.',
    },
    {
      icon: ShieldCheck,
      title: 'Self-Hosted or Managed Cloud',
      desc: 'Full data sovereignty on your private cloud or our 24/7 monitored dedicated servers.',
    },
  ];

  return (
    <section id="dreamcrm" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                Flagship Platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Meet <span className="text-teal-300">DreamCRM</span>: Enterprise Power Without SaaS Lock-In.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Built on proven open-source foundations and supercharged by Dreamer Technologies&apos;
                proprietary telephony, WhatsApp, and ERP connectors—giving growing businesses total
                control over customer data and operational costs.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {[
                  'Full Lead-to-Invoice & Support Ticket Lifecycle',
                  'Pre-integrated with Asterisk, FreePBX & Twilio',
                  'Dedicated Migration from Zoho, Salesforce & HubSpot',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('DreamCRM Live Sandbox Demo')}
                  className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  Request DreamCRM Walkthrough
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-teal-300 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
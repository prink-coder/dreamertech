import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  PhoneCall,
  Users,
  MessageSquare,
  PhoneIncoming,
  PhoneOutgoing,
  Activity,
} from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [callSimActive, setCallSimActive] = useState(false);

  const triggerCallSim = () => {
    setCallSimActive(true);
    setTimeout(() => setCallSimActive(false), 4500);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-14 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Ambient Background Grid & Glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#14b8a6 1px, #020617 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Enterprise CRM • Asterisk IPPBX • Custom Web &amp; Mobile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.12]">
              Unified{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                CRM &amp; VoIP Systems
              </span>{' '}
              Engineered for Growth.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              From flagship <strong className="text-white">DreamCRM</strong> and tailored{' '}
              <strong className="text-white">SuiteCRM / SugarCRM</strong> deployments to{' '}
              <strong className="text-white">Asterisk IPPBX</strong> telephony and WhatsApp
              automation—backed by our <span className="text-teal-300 font-semibold">1-Hour Emergency SLA</span> and zero-jargon engineering team.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Schedule Free Architecture Call')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#solutions"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base transition-all inline-flex items-center gap-2"
              >
                <Play className="w-4 h-4 text-teal-400 fill-teal-400" />
                Explore 35+ Solutions
              </a>
            </div>

            {/* Quick Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/90">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">12+ Yrs</div>
                <div className="text-xs text-slate-400 mt-0.5">CRM &amp; Telecom Mastery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">1-Hour</div>
                <div className="text-xs text-slate-400 mt-0.5">Emergency Response SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">35+</div>
                <div className="text-xs text-slate-400 mt-0.5">Ready CRM &amp; VoIP Add-ons</div>
              </div>
            </div>
          </div>

          {/* Right Interactive Live Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Top Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    crm.dreamertechs.com — Live Command Center
                  </span>
                </div>
                <button
                  onClick={triggerCallSim}
                  className="px-2.5 py-1 rounded-md bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/30 text-teal-300 text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3 h-3 animate-bounce" />
                  Simulate Click-to-Call
                </button>
              </div>

              {/* Simulated Incoming/Outbound Screen-Pop Banner */}
              {callSimActive && (
                <div className="mx-4 mt-3 p-3 rounded-xl bg-gradient-to-r from-emerald-600/25 to-teal-600/25 border border-emerald-400/40 flex items-center justify-between animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                      <PhoneIncoming className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                        Asterisk IPPBX Screen-Pop Active
                      </div>
                      <div className="text-sm font-semibold text-white">
                        Apex Logistics Ltd • Deal: $24,500 • Ext #104
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 text-xs font-bold">
                    Connected 00:14
                  </span>
                </div>
              )}

              {/* Interactive Module Switcher Tabs */}
              <div className="px-4 pt-4 flex gap-2 border-b border-slate-800">
                {[
                  { id: 'pipeline', label: 'Sales Pipeline', icon: Users },
                  { id: 'telephony', label: 'IPPBX Call Logs', icon: PhoneCall },
                  { id: 'whatsapp', label: 'WhatsApp & SMS', icon: MessageSquare },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3.5 py-2.5 text-xs font-semibold rounded-t-lg inline-flex items-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                        active
                          ? 'bg-slate-800/80 text-white border-blue-500'
                          : 'text-slate-400 border-transparent hover:text-slate-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-teal-400" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Body */}
              <div className="p-5 space-y-4">
                {activeTab === 'pipeline' && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">Active Pipeline</div>
                        <div className="text-lg font-bold text-white mt-0.5">$184,200</div>
                        <div className="text-[11px] text-emerald-400 mt-0.5">+18.4% this month</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">Auto-Synced Leads</div>
                        <div className="text-lg font-bold text-white mt-0.5">1,429</div>
                        <div className="text-[11px] text-blue-400 mt-0.5">OpenCart + Web</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">Avg. SLA Response</div>
                        <div className="text-lg font-bold text-teal-300 mt-0.5">14 mins</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">24/7 Server Health</div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Recent Automated CRM Workflows
                      </div>
                      {[
                        {
                          client: 'Global Freight Systems',
                          stage: 'Proposal Sent',
                          value: '$32,000',
                          tag: 'SuiteCRM + Twilio',
                        },
                        {
                          client: 'MedCare Clinics Group',
                          stage: 'IPPBX Provisioned',
                          value: '$18,500',
                          tag: 'Asterisk 40-Ext',
                        },
                        {
                          client: 'UrbanCart Retail',
                          stage: 'WhatsApp Bot Live',
                          value: '$12,900',
                          tag: 'OpenCart Sync',
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-semibold text-white">{row.client}</div>
                            <div className="text-slate-400 mt-0.5">{row.tag}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-teal-300">{row.value}</div>
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 text-[10px]">
                              {row.stage}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === 'telephony' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Asterisk / FreePBX Live Trunk Status</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                        <Activity className="w-3.5 h-3.5" /> SIP Trunk Online (12ms)
                      </span>
                    </div>
                    {[
                      {
                        dir: 'Inbound',
                        caller: '+1 (415) 890-3312 — Skyline Logistics',
                        duration: '04m 18s',
                        agent: 'Ext 102 (Rahul)',
                      },
                      {
                        dir: 'Outbound',
                        caller: '+91 98250 44120 — SunTech Pharma',
                        duration: '07m 52s',
                        agent: 'Ext 105 (Priya)',
                      },
                      {
                        dir: 'Inbound',
                        caller: '+44 20 7946 0921 — Sterling Retail',
                        duration: '02m 41s',
                        agent: 'Ext 101 (Support)',
                      },
                    ].map((call, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          {call.dir === 'Inbound' ? (
                            <PhoneIncoming className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <PhoneOutgoing className="w-4 h-4 text-blue-400" />
                          )}
                          <div>
                            <div className="font-semibold text-white">{call.caller}</div>
                            <div className="text-slate-400">
                              Handled by {call.agent} • Auto-recorded to CRM
                            </div>
                          </div>
                        </div>
                        <span className="font-mono text-teal-300 font-semibold">{call.duration}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'whatsapp' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                      <div className="flex justify-between text-emerald-300 font-semibold mb-1">
                        <span>Automated Quote Follow-Up • Delivered</span>
                        <span>Just now</span>
                      </div>
                      <p className="text-slate-300">
                        &ldquo;Hi Vikram, your DreamCRM + 25-Seat Asterisk IPPBX proposal (#QT-884)
                        is ready. Reply 1 to schedule a live walkthrough.&rdquo;
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                      <div className="flex justify-between text-blue-300 font-semibold mb-1">
                        <span>Customer Reply Synced to SuiteCRM Lead</span>
                        <span>2 mins ago</span>
                      </div>
                      <p className="text-slate-300">
                        &ldquo;1 — Let&apos;s connect tomorrow at 3 PM IST.&rdquo; →{' '}
                        <span className="text-teal-300 font-medium">
                          Calendar Event Auto-Created
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Status Strip */}
              <div className="px-5 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  SuiteCRM • SugarCRM • Asterisk • Twilio Ready
                </span>
                <span className="text-slate-500">Zero Per-User Lock-In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
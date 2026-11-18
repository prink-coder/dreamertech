import React from 'react';
import { Clock, MessageSquare, Server, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyDreamerBentoGrid({ onOpenConsultation }) {
  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
            The Dreamer Technologies Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Mission-Critical Uptime &amp; Clear Communication
          </h2>
          <p className="text-slate-600 text-base">
            We replace slow agency handoffs and confusing tech jargon with direct access to senior
            CRM and telecom architects.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Card 1: 1-Hour SLA */}
          <div className="md:col-span-7 rounded-3xl bg-slate-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold">
                Guaranteed SLA Commitment
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                1-Hour Guaranteed Emergency Response
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                When your sales phones or CRM go down, every minute costs revenue. Our rapid-response
                engineers triage critical production issues within 60 minutes—day or night.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Direct Senior Engineer Escalation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Zero Tier-1 Scripted Delays
              </span>
            </div>
          </div>

          {/* Card 2: No Geek Speak */}
          <div className="md:col-span-5 rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 shadow-sm flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Plain English &amp; Hindi — &ldquo;No Geek Speak&rdquo;
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We translate complex SIP trunking, database schemas, and API webhooks into clear
                business outcomes so founders and operations managers stay 100% in control.
              </p>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-blue-200/60 text-xs text-slate-700 font-medium">
              &ldquo;They explained our entire Asterisk + SuiteCRM integration in plain business
              terms and delivered 3 days ahead of schedule.&rdquo;
            </div>
          </div>

          {/* Card 3: 24/7 Proactive Server Care */}
          <div className="md:col-span-5 rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                24/7 Proactive Server &amp; VoIP Care
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated security patching, SIP intrusion prevention, and off-site database
                snapshots keep your CRM and PBX running smoothly behind the scenes.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-teal-700">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              Continuous Heartbeat &amp; Latency Monitoring
            </div>
          </div>

          {/* Card 4: 35+ Add-ons */}
          <div className="md:col-span-7 rounded-3xl bg-blue-600 text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Proven Plugin Library
              </div>
              <h3 className="text-2xl font-extrabold">
                35+ Battle-Tested CRM &amp; Telephony Add-ons
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Don&apos;t pay to reinvent the wheel. Launch faster with our pre-built connectors
                for Twilio, WhatsApp, Google Calendar, QuickBooks, and OpenCart.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Request Full Plugin Catalog')}
              className="shrink-0 px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Request Plugin List
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
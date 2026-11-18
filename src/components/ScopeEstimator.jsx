import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { ESTIMATOR_MODULES } from '../data/siteData';

export default function ScopeEstimator({ onOpenConsultationWithScope }) {
  const [teamSize, setTeamSize] = useState(25);
  const [selectedModules, setSelectedModules] = useState(['dreamcrm', 'asterisk', 'twilio']);

  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseDays = selectedModules.reduce((acc, id) => {
    const found = ESTIMATOR_MODULES.find((m) => m.id === id);
    return acc + (found ? found.days : 0);
  }, 0);

  const scaleFactor = teamSize > 100 ? 1.4 : teamSize > 40 ? 1.2 : 1;
  const estimatedDays = Math.max(3, Math.round(baseDays * scaleFactor));
  const selectedLabels = ESTIMATOR_MODULES.filter((m) => selectedModules.includes(m.id)).map(
    (m) => m.label
  );

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Interactive Architecture Planner
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Estimate Your Deployment Roadmap
          </h2>
          <p className="text-slate-400 text-base">
            Select your active user count and required CRM or IPPBX modules to generate an instant
            implementation timeline and tailored architecture quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-slate-800/70 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-8">
            {/* Team Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-200">
                  Active CRM / Telephony Users
                </label>
                <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm font-extrabold">
                  {teamSize} {teamSize === 250 ? '+ Users' : 'Users'}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5">
                <span>5 Users (Startup)</span>
                <span>50 Users (Growth)</span>
                <span>150+ Users (Enterprise)</span>
              </div>
            </div>

            {/* Module Checkboxes */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-3">
                Select Modules &amp; Integrations
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {ESTIMATOR_MODULES.map((mod) => {
                  const checked = selectedModules.includes(mod.id);
                  return (
                    <button
                      type="button"
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        checked
                          ? 'bg-blue-600/20 border-blue-400 text-white'
                          : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{mod.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{mod.category}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center ${
                          checked ? 'bg-teal-400 text-slate-950' : 'border border-slate-600'
                        }`}
                      >
                        {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-100">
                Estimated Go-Live Timeline
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold mt-1">
                {estimatedDays}–{estimatedDays + 3} Days
              </div>
              <p className="text-xs text-blue-100 mt-1">
                Includes staging environment, UAT testing, and team onboarding.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/25 space-y-2 text-xs">
              <div className="font-bold text-white">Selected Architecture:</div>
              <div className="text-blue-100">
                • <strong>{teamSize}</strong> Concurrent Seats (Zero Per-User Lock-In)
              </div>
              {selectedLabels.length > 0 ? (
                selectedLabels.map((lbl, idx) => (
                  <div key={idx} className="text-blue-100">
                    • {lbl}
                  </div>
                ))
              ) : (
                <div className="text-blue-200 italic">Select at least one module on the left</div>
              )}
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() =>
                  onOpenConsultationWithScope({
                    teamSize,
                    modules: selectedLabels,
                    timeline: `${estimatedDays}-${estimatedDays + 3} Days`,
                  })
                }
                className="w-full py-3.5 px-5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-extrabold text-sm shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Get Custom Quote for This Setup
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919998074759?text=${encodeURIComponent(
                  `Hi Dreamer Technologies! I'd like a quote for ${teamSize} users with: ${
                    selectedLabels.join(', ') || 'Custom CRM/IPPBX'
                  }.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-slate-950/30 hover:bg-slate-950/45 text-white font-semibold text-xs transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                Send Scope Directly via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Check, AlertTriangle, Minus, HelpCircle, ShieldCheck } from 'lucide-react';

const readinessRules = [
  {
    title: 'Recording is a separate authorized decision',
    desc: 'No stream is captured implicitly. Authorization requires explicit parameters before any bytes hit persistent storage.',
  },
  {
    title: 'Automation eligibility is not authorization',
    desc: 'Even if systems detect technical capability, recording will not trigger until affirmative business rules pass.',
  },
  {
    title: 'Technology never creates consent',
    desc: 'Integrate native checkmark hooks into attendee portals to prove user assent before opening edge capture pipes.',
  },
  {
    title: 'Missing authority blocks consequential action',
    desc: 'If authorization is missing, downstream asset indexing and replay CDN handoffs are automatically isolated.',
  },
];

export default function ReadinessCheckSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-950">
            Is this recording ready to proceed?
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal  ">
            Every recording starts with an explicit, reviewable decision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Review Board */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 text-white flex flex-col gap-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-white text-base font-bold  ">
                  Recording Readiness Review
                </span>
                <span className="text-slate-400 text-xs font-normal  ">
                  Ref: REC-2026-03
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Purpose/policy</span>
                  <span className="px-2.5 py-1 bg-emerald-950/90 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                    Satisfied <Check className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Rights/privacy/consent</span>
                  <span className="px-2.5 py-1 bg-amber-950/90 rounded text-amber-500 text-xs font-bold   flex items-center gap-1">
                    Needs review <AlertTriangle className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Source/track scope</span>
                  <span className="px-2.5 py-1 bg-emerald-950/90 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                    Satisfied <Check className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Owner/operator</span>
                  <span className="px-2.5 py-1 bg-emerald-950/90 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                    Satisfied <Check className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Automation eligibility</span>
                  <span className="px-2.5 py-1 bg-slate-800 rounded text-slate-400 text-xs font-bold   flex items-center gap-1">
                    Not applicable <Minus className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Accessibility continuity</span>
                  <span className="px-2.5 py-1 bg-purple-950/90 rounded text-purple-400 text-xs font-bold   flex items-center gap-1">
                    Needs input <AlertTriangle className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Replay intent</span>
                  <span className="px-2.5 py-1 bg-gray-800 rounded text-gray-400 text-xs font-bold   flex items-center gap-1">
                    Undecided <HelpCircle className="size-3" />
                  </span>
                </div>

                <div className="pb-1.5 border-b border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400 text-xs  ">Lifecycle intent</span>
                  <span className="px-2.5 py-1 bg-amber-950/90 rounded text-amber-500 text-xs font-bold   flex items-center gap-1">
                    Needs review <AlertTriangle className="size-3" />
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-xs font-bold   rounded-lg hover:opacity-90 transition-opacity">
                  Review decision
                </button>
              </div>
            </div>
          </div>

          {/* Right Rules List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {readinessRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="size-9 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0 mt-0.5">
                  <ShieldCheck className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-zinc-950 text-base font-bold  ">
                    {rule.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

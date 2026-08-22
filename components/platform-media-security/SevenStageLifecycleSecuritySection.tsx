import React from 'react';
import { UploadCloud, Radio, Layers, ShieldCheck, Tv, BarChart3, Archive, Download, Shield, Sliders, Lock, Send, Eye } from 'lucide-react';

const lifecycleStages = [
  { name: 'Contribute', icon: Download },
  { name: 'Ingest', icon: Shield },
  { name: 'Produce', icon: Sliders },
  { name: 'Secure', icon: Lock },
  { name: 'Deliver', icon: Send },
  { name: 'Understand', icon: Eye },
  { name: 'Preserve', icon: Archive },
];

const stageQuestions = [
  { stage: 'Contribute', q: 'Who/what may contribute, and what protects the contribution path?' },
  { stage: 'Ingest', q: 'Can the source enter the workflow through an approved and protected boundary?' },
  { stage: 'Produce', q: 'Who may change media/workflow state, and how are privileged actions governed?' },
  { stage: 'Secure', q: 'What policy and protection apply to media and administrative actions?' },
  { stage: 'Deliver', q: 'How does authorized delivery preserve defined security properties?' },
  { stage: 'Understand', q: 'What security/operational evidence is observed without over-collecting?' },
  { stage: 'Preserve', q: 'What protections, access, retention, rights, and deletion continue after live?' },
];

export default function SevenStageLifecycleSecuritySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Seven-stage lifecycle security
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Security is cross-cutting across the complete media lifecycle, not isolated to the Secure stage.
          </p>
        </div>

        {/* 7-Stage Visual Stepper */}
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-2">
            {lifecycleStages.map((st, idx) => {
              const Icon = st.icon;
              const isLast = idx === lifecycleStages.length - 1;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="size-14 bg-gradient-to-b from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                      {st.name}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-0.5 flex-1 bg-slate-300 mx-2" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Questions Table */}
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col gap-4">
          <div className="pb-3 border-b border-slate-200 flex justify-between items-center text-slate-900 text-sm font-bold font-['Space_Grotesk']">
            <span className="w-60">Stage</span>
            <span className="flex-1">Security Question</span>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {stageQuestions.map((row, idx) => (
              <div key={idx} className="py-4 flex justify-between items-center gap-6">
                <div className="w-60 flex items-center gap-3 shrink-0">
                  <div className="size-2 bg-teal-400 rounded-full" />
                  <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {row.stage}
                  </span>
                </div>
                <p className="flex-1 text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {row.q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

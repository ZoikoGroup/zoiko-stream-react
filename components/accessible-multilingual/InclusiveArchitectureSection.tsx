import React from 'react';

const layers = [
  { num: '01', title: 'Content Alternatives', desc: 'Captions, subtitles, transcripts, audio description artifacts' },
  { num: '02', title: 'Language Access', desc: 'Source/target languages, locale, translation, fallback' },
  { num: '03', title: 'Player Interaction', desc: 'Keyboard, focus, controls, track menu, styling, screen reader' },
  { num: '04', title: 'Operational Quality', desc: 'Live readiness, health, review, correction, replay' },
  { num: '05', title: 'Governance & Evidence', desc: 'Roles, approvals, remediation, retention, standards' },
];

export default function InclusiveArchitectureSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden" id="capabilities">
      {/* Background Accent Glow */}
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Five-Layer Inclusive Media Architecture
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            From content to evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {layers.map((lyr, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-50 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between h-52 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div className="size-8 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold  ">
                  {lyr.num}
                </div>
                <span className="text-slate-600 text-xs font-bold  ">
                  LAYER {lyr.num}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold  ">
                  {lyr.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                  {lyr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

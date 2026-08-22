import React from 'react';

const bridgeSteps = [
  { title: 'Live Broadcast Active', desc: 'Real-time track rendering' },
  { title: 'Recording Process', desc: 'Audio/Video streams locked with metadata' },
  { title: 'Accessibility Review', desc: 'Human-in-the-loop track audit' },
  { title: 'Replay Published', desc: 'Durable VOD assets verified online' },
];

const stateDesignations = [
  { name: 'Live Track Inherited', desc: 'Live caption track copied to replay with zero edits.', tag: 'Active', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { name: 'Processing Ingest', desc: 'Deep speech alignment processing track generation.', tag: 'Running', tagStyle: 'bg-blue-500/10 text-blue-500' },
  { name: 'Review Required', desc: 'High confidence error rate detected. Awaiting operator review.', tag: 'Awaiting Action', tagStyle: 'bg-amber-500/10 text-amber-500' },
  { name: 'Corrected Track', desc: 'Reviewer modified timestamps. Live sync successfully restored.', tag: 'Durable VOD', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { name: 'Published VOD', desc: 'Both English and translated tracks verified WCAG AA.', tag: 'Durable VOD', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { name: 'Partial Accessibility', desc: 'Some translation tracks delayed. Core captions active.', tag: 'Partial', tagStyle: 'bg-amber-500/10 text-amber-500' },
  { name: 'Unavailable', desc: 'Live event had zero caption inputs. Fallback in build.', tag: 'Error State', tagStyle: 'bg-red-500/10 text-red-500' },
  { name: 'Withdrawn Asset', desc: 'Compliance issues detected. Asset offline until corrected.', tag: 'Offline', tagStyle: 'bg-red-500/10 text-red-500' },
];

export default function ReplayContinuitySection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Live-to-Replay Accessibility Continuity
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Preserve, review, or replace
          </p>
        </div>

        {/* Live-to-Replay Flow Bridge */}
        <div className="p-8 bg-stone-50 rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-6">
          <span className="text-slate-900 text-sm font-bold   tracking-wide">
            LIVE-TO-REPLAY FLOW BRIDGE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bridgeSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-2 shadow-2xs"
              >
                <h3 className="text-slate-900 text-base font-bold  ">
                  {st.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal  ">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8 State Designation Cards */}
        <div className="flex flex-col gap-5">
          <span className="text-slate-900 text-sm font-bold   tracking-wide">
            STATE DESIGNATION METRICS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stateDesignations.map((sd, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50 rounded-xl border border-gray-200 flex flex-col justify-between gap-3 shadow-2xs"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-slate-900 text-base font-bold   truncate">
                    {sd.name}
                  </h4>
                  <p className="text-slate-600 text-xs font-normal   leading-relaxed h-10">
                    {sd.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <span className={`px-2.5 py-1 text-xs font-bold   uppercase rounded-full ${sd.tagStyle}`}>
                    {sd.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Per-Language Publish Readiness Estimate Box */}
        <div className="p-8 bg-stone-50 rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-5">
          <span className="text-slate-900 text-sm font-bold   tracking-wide">
            PER-LANGUAGE PUBLISH READINESS ESTIMATE
          </span>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-900 font-bold  ">English (Source Ingest)</span>
                <span className="text-slate-600 font-normal  ">Published (At Event End)</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-500" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-900 font-bold  ">Spanish (LATAM Translation)</span>
                <span className="text-slate-600 font-normal  ">Ready in 4 minutes</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-teal-400" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-900 font-bold  ">French (EU Translation)</span>
                <span className="text-slate-600 font-normal  ">Ready in 18 minutes (Queue: High Priority)</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-teal-400" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-900 font-bold  ">Japanese (JA Translation)</span>
                <span className="text-slate-600 font-normal  ">Awaiting human review (ETA 1 hour)</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-[25%] h-full bg-teal-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

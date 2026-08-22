import React from 'react';

const stages = [
  { step: '1', title: 'Contribute', desc: 'SRT/RTMP Source Ingest' },
  { step: '2', title: 'Ingest', desc: 'Edge validation gate' },
  { step: '3', title: 'Produce', desc: 'Transcoding & overlays' },
  { step: '4', title: 'Secure', desc: 'SSO & DRM verification' },
  { step: '5', title: 'Deliver', desc: 'Global Multi-CDN mesh' },
  { step: '6', title: 'Observe', desc: 'Real-time QoS metrics' },
  { step: '7', title: 'Preserve', desc: 'Cold-storage archiving' },
];

export default function PipelineStepperSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            What sits between the source and the viewer.
          </h2>
        </div>

        {/* 7-Stage Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-start">
          {stages.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 relative">
              <div className="size-12 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-slate-950 font-bold   text-lg shadow-md">
                {st.step}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-slate-900 text-sm font-bold  ">
                  {st.title}
                </span>
                <span className="text-slate-600 text-xs font-normal   leading-tight">
                  {st.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

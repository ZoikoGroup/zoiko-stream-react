import React from 'react';

const timelineSteps = [
  {
    title: 'Transfer received',
    desc: 'Source media has arrived and is queued for validation.',
  },
  {
    title: 'Validation / processing',
    desc: 'The platform validates the source and begins encoding.',
  },
  {
    title: 'Playable / ready',
    desc: 'The official readiness signal is true — playback can begin.',
  },
  {
    title: 'Fully processed',
    desc: 'All configured renditions and derivatives are complete.',
  },
];

export function AsynchronousByDesignSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              ASYNCHRONOUS BY DESIGN
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Uploaded is not the same as ready.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Raw API status values are mapped through the approved state registry. The playback CTA appears only when the official readiness signal is true — never a guessed completion time.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-4 pl-8 flex flex-col gap-8">
          {timelineSteps.map((st, idx) => (
            <div key={idx} className="relative flex flex-col gap-1">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white rounded-full border-2 border-teal-400" />
              <h3 className="text-zinc-900 text-base font-bold">{st.title}</h3>
              <p className="text-gray-500 text-xs font-normal leading-5">{st.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-xs font-mono">
          &quot;Processing&quot; is shown as a neutral state unless an approved operational threshold justifies &quot;taking longer than expected.&quot;
        </p>
      </div>
    </section>
  );
}

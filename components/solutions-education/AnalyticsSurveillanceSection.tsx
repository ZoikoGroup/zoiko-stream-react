import React from 'react';
import Image from 'next/image';

const items = [
  {
    title: '1. Operational Health',
    desc: 'Real-time session state, encoder ingestion telemetry, CDN edge delivery performance, and platform incidents.',
    img: '/images/Education-Page/Rectangle  (77).png',
  },
  {
    title: '2. Playback Experience',
    desc: 'Anonymized buffering ratios, aggregate start latencies, device class distributions, and connection health metrics.',
    img: '/images/Education-Page/Rectangle  (78).png',
  },
  {
    title: '3. Content & Replay Use',
    desc: 'Comparative live-vs-VOD engagement graphs, cumulative viewing progress indicators, and total data egress stats.',
    img: '/images/Education-Page/Rectangle  (79).png',
  },
  {
    title: '4. Workflow History',
    desc: 'System-wide compliance event tracking, transition states, SSO permission handoffs, and publisher audit trails.',
    img: '/images/Education-Page/Rectangle (139).png',
  },
];

export function AnalyticsSurveillanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (195).png"
          alt="Analytics Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Analytics and workflow evidence without learner surveillance
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Operational health, playback quality, content use, and workflow history — with a hard boundary against learner profiling.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-zinc-950">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-2.5">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {it.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

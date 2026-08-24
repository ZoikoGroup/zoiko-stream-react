import React from 'react';
import Image from 'next/image';

const paths = [
  {
    num: '01',
    label: 'PATH A: SELF-OPERATED BROADCAST',
    desc: 'Full self-service dashboard control with automated redundant routing pipelines.',
    active: true,
  },
  {
    num: '02',
    label: 'PATH B: PROFESSIONALLY MANAGED EVENT',
    desc: 'On-site production integration, dedicated engineers, and concierge monitoring.',
    active: false,
  },
  {
    num: '03',
    label: 'PLANNING EVALUATION GATES',
    desc: 'Evaluating event scale, concurrent audience requirements, and compliance SLAs.',
    active: false,
  },
];

export function OperationalPathSelectionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/Component 2.png"
          alt="Operational Path Background"
          fill
          className="object-cover "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Select the operational path required for this broadcast event.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-4 w-full">
            {paths.map((p, idx) => (
              <div
                key={idx}
                className={`w-full p-5 bg-gray-800 rounded-xl border ${p.active ? 'border-teal-400' : 'border-gray-800'} flex items-center gap-5`}
              >
                <div className={`w-9 h-9 ${p.active ? 'bg-teal-400 text-slate-950' : 'bg-gray-800 text-white'} rounded-2xl flex justify-center items-center flex-shrink-0 font-bold font-['Space_Grotesk'] text-sm`}>
                  {p.num}
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                    {p.label}
                  </span>
                  <p className="text-white text-base font-normal font-['Inter']">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Managed Event Context
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
              Planning is fully informational. We never imply booking/availability or trigger managed operations unless explicitly selected and approved by your events authority.
            </p>
            <div className="w-full border-t border-gray-800" />

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">RECOMMENDED ARCHITECTURE</span>
              <h4 className="text-white text-lg font-bold font-['Space_Grotesk']">Mesh-Routed Interactive Grid</h4>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">
                • WebRTC mesh topology for ≤200 active speakers. • Breakout-room orchestration with automatic load balancing. • Real-time polling &amp; Q&amp;A engine embedded in session layer.
              </p>
            </div>

            <div className="w-full border-t border-gray-800 pt-2">
              <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                  Plan a Live Event
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const lifecycleSteps = [
  { num: '01', title: 'Explore', sub: 'Sandbox feature test', status: 'READY', style: 'text-emerald-500' },
  { num: '02', title: 'Prototype', sub: 'Client client hookup', status: 'READY', style: 'text-emerald-500' },
  { num: '03', title: 'Integrate', sub: 'Secret store mappings', status: 'READY', style: 'text-emerald-500' },
  { num: '04', title: 'Test', sub: 'Latency verification', status: 'IN PROGRESS', style: 'text-blue-500' },
  { num: '05', title: 'Launch', sub: 'Production cutover', status: 'NOT STARTED', style: 'text-slate-400' },
  { num: '06', title: 'Operate', sub: 'Telemetry monitoring', status: 'NOT STARTED', style: 'text-slate-400' },
  { num: '07', title: 'Evolve', sub: 'Regional expansion', status: 'NOT STARTED', style: 'text-slate-400' },
];

export default function DeliberateLifecycleSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
       <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
<div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Prototype quickly. Launch deliberately. Operate with evidence.
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-5xl">
            Use a lifecycle that separates exploration from production readiness and makes the required handoffs visible before launch.
          </p>
        </div>

        {/* 7-Step Horizontal Process Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-start">
          {lifecycleSteps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <div className="size-10 rounded-2xl bg-gradient-to-b from-teal-400 to-blue-500 flex items-center justify-center text-slate-950 font-bold font-['Space_Grotesk'] text-sm shadow-md">
                {st.num}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                  {st.title}
                </h3>
                <span className="text-slate-600 text-[10px] font-normal font-['Inter']">
                  {st.sub}
                </span>
                <span className={`text-[10px] font-bold font-['Inter'] ${st.style}`}>
                  {st.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

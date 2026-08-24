import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const operatingContexts = [
  {
    path: 'DEVELOPER PATH',
    title: 'Embedding Video?',
    desc: 'Integrating player controls, latency configurations, and telemetry hooks directly inside native app frames.',
    active: true,
  },
  {
    path: 'ENTERPRISE PATH',
    title: 'Organizational Workflows?',
    desc: 'Governing secure internal streams, event lifecycles, administrative SSO pathways, and compliance trails.',
    active: false,
  },
  {
    path: 'MEDIA PATH',
    title: 'Professional Media?',
    desc: 'Delivering raw ingestion streams, broadcast redundancy, custom transcoding, and pristine preservation.',
    active: false,
  },
  {
    path: 'CIVIC & CLASS PATH',
    title: 'Learning & Public?',
    desc: 'Satisfying mandatory accessibility standards, automatic translation layers, and durable preservation archives.',
    active: false,
  },
];

export default function OperatingContextSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Which operating context resembles yours?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operatingContexts.map((ctx, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white rounded-xl border flex flex-col gap-5 shadow-xs hover:shadow-md transition-shadow ${
                ctx.active
                  ? 'border-blue-500 ring-1 ring-blue-500'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                  {ctx.path}
                </span>
                <div
                  className={`size-2 rounded-full ${
                    ctx.active ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {ctx.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                  {ctx.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

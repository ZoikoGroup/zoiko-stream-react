import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const errorRows = [
  {
    code: 'STREAM_LIMIT_EXCEEDED',
    condition: 'Too many active broadcasts in current tenancy',
    remediation: 'Scale subscription tier or stop inactive streams',
  },
  {
    code: 'AUTH_EXPIRED',
    condition: 'Active JWT has passed its validity window',
    remediation: 'Request new bearer token via auth endpoint',
  },
];

const failureFeatures = [
  {
    title: 'Error Matrix',
    desc: 'Deterministic matrix maps HTTP status codes straight to distinct API failure conditions.',
    img: '/images/developer-api-reference/card-image (19).png',
  },
  {
    title: 'Request IDs',
    desc: 'Every error output carries a unique tracing ID for collaborative debugging pipelines.',
    img: '/images/developer-api-reference/card-image (20).png',
  },
  {
    title: 'Retry Guidance',
    desc: 'Explicit indicators show if a specific failure is safe to retry automatically or not.',
    img: '/images/developer-api-reference/card-image (21).png',
  },
  {
    title: 'Support Routing',
    desc: 'Direct integration into real-time health channels and dedicated support networks.',
    img: '/images/developer-api-reference/card-image (22).png',
    
  },
];

export function TreatFailureAsFirstClassSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Treat failure as first-class contract
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Error identifiers, conditions, retry guidance, request IDs, and remediation — all source-backed.
          </p>
        </div>

        {/* Error Table */}
        <div className="w-full bg-slate-50/90 rounded-2xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm">
          <div className="p-4 bg-slate-200/80 border-b border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <span className="text-slate-900 text-xs font-bold uppercase">Error Code</span>
            <span className="text-slate-900 text-xs font-bold uppercase">Condition</span>
            <span className="text-slate-900 text-xs font-bold uppercase">Remediation</span>
          </div>

          <div className="divide-y divide-gray-200">
            {errorRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <span className="text-red-600 text-sm font-bold font-mono">{row.code}</span>
                <span className="text-slate-600 text-xs font-normal leading-5">{row.condition}</span>
                <span className="text-slate-600 text-xs font-normal leading-5">{row.remediation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {failureFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm min-h-[240px]"
              >
                <div className="w-full h-28 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-slate-900 text-base font-bold">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

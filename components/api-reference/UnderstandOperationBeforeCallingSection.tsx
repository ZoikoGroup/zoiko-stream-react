import React from 'react';
import Image from 'next/image';

const operationFeatures = [
  {
    title: 'Side-Effect Classification',
    desc: 'Know upfront if an operation only reads metadata, creates state, updates objects, or deletes them.',
    img: '/images/developer-api-reference/card-image (9).png',
  },
  {
    title: 'Layered Authorization',
    desc: 'Clear visual hierarchy from primary authentication requirements down to tenancy rules and entitlements.',
    img: '/images/developer-api-reference/card-image (10).png',
  },
  {
    title: 'Source Provenance',
    desc: 'Trace each contract straight back to its exact code base revision, verified date, and developer owner.',
    img: '/images/developer-api-reference/card-image (11).png',
  },
];

export function UnderstandOperationBeforeCallingSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (3).png"
          alt="Understand Operation Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Understand every operation before you call it
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Stable operation ID, method, path, authorization, side-effect classification — all from approved source.
          </p>
        </div>

        {/* Operation Banner Card */}
        <div className="w-full p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-teal-400 rounded-sm">
                <span className="text-gray-950 text-xs font-bold font-mono">POST</span>
              </div>
              <span className="text-white text-base font-bold font-mono">/v1/sessions/create</span>
            </div>
            <div className="text-xs text-slate-400">
              Operation ID: <span className="text-teal-400 font-mono">sessionCreate</span>
            </div>
          </div>

          <div className="w-full h-0 border-t border-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
                AUTHORIZATION METHOD
              </span>
              <span className="text-white text-sm font-normal">Bearer JWT Bearer Tokens</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
                REQUIRED SCOPES
              </span>
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 bg-slate-800 rounded-sm border border-gray-700">
                  <span className="text-slate-300 text-xs font-mono">stream:write</span>
                </div>
                <div className="px-2.5 py-1 bg-slate-800 rounded-sm border border-gray-700">
                  <span className="text-slate-300 text-xs font-mono">session:manage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-36 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

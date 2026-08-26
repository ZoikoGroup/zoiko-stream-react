import React from 'react';
import Image from 'next/image';

const pathCards = [
  {
    tag: '10 MINS',
    title: 'Quickstart',
    desc: 'Need the shortest first stream.',
    img: '/images/sample-application/Card-Image (15).png',
  },
  {
    tag: 'ENDPOINT MAP',
    title: 'API Reference',
    desc: 'Need canonical request/response details.',
    img: '/images/sample-application/Card-Image (16).png',
  },
  {
    tag: 'SECURITY',
    title: 'Authentication',
    desc: 'Need credential/auth model.',
    img: '/images/sample-application/Card-Image (17).png',
  },
  {
    tag: 'CONSOLE',
    title: 'Developer Access',
    desc: 'Need access context or workspace setup.',
    img: '/images/sample-application/Card-Image (18).png',
  },
  {
    tag: 'MANUALS',
    title: 'Documentation',
    desc: 'Need architecture and integration guides.',
    img: '/images/sample-application/Card-Image (19).png',
  },
  {
    tag: 'LIBRARIES',
    title: 'SDKs',
    desc: 'Need client libraries for your language.',
    img: '/images/sample-application/Card-Image (20).png',
  },
];

export function SampleSuccessToProductionReadinessSection() {
  return (
    <>
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (7).png"
          alt="Production Readiness Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            From sample success to production readiness
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            After your sample runs successfully, here is your path forward.
          </p>
        </div>

        {/* 6 Path Forward Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md min-h-[280px]"
            >
              <div className="w-full h-40 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="px-2 py-1 bg-gray-800 rounded-sm w-fit">
                  <span className="text-teal-400 text-xs font-bold font-mono">{item.tag}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
</section>
<section  className="w-full relative px-6 lg:px-28 py-21 lg:py-29 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
  <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (8).png"
          alt="Production Readiness Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>
        {/* Final CTA Box */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-10 overflow-hidden text-center">
        <div className="max-w-4xl flex flex-col justify-start items-center gap-6">
            <h3 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
              Ready to run your first sample?
            </h3>
            <p className="text-slate-400 text-lg font-normal leading-7 max-w-[640px] mx-auto">
              Clone a verified sample, confirm your prerequisites, and see real ZoikoStream platform behavior.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-gray-950 text-base font-bold">Browse verified samples</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
              <span className="text-white text-base font-bold">Open documentation</span>
            </div>
          </div>
          </div>
      
      </section>
      </>
    
  );
}

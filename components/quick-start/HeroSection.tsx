import React from 'react';
import Image from 'next/image';

const steps = [
  { num: '1', title: 'Confirm Access', status: 'PENDING'  },
  { num: '2', title: 'Store Credentials', status: 'PENDING'  },
  { num: '3', title: 'Create Stream', status: 'PENDING' },
  { num: '4', title: 'Connect Source', status: 'PENDING'},
  { num: '5', title: 'Verify Signal', status: 'PENDING' },
  { num: '6', title: 'Prepare Playback', status: 'PENDING' },
  { num: '7', title: 'Verify Playback', status: 'PENDING' },
];

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (17).png"
          alt="Quickstart Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
            QUICKSTART
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          From Credential to Working Stream
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          The shortest credible path from developer access to a verified first stream. Seven steps, each with an observable outcome — no guesswork, no hidden prerequisites.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Start Quickstart</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Read Documentation</span>
          </div>
        </div>
      </div>

      {/* Right Pipeline Tracker */}
      <div className="relative z-10 w-full lg:w-[480px] p-8 lg:p-10 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-bold tracking-wide">QUICKSTART PIPELINE</span>
          <div className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
            <span className="text-teal-400 text-xs font-bold">0/7 COMPLETED</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="p-3 bg-gray-800/80 rounded-lg border border-gray-700/60 flex items-center justify-between gap-3 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-slate-900 rounded-lg border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-400 text-xs font-bold">{step.num}</span>
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{step.title}</span>
                </div>
                <span className="text-slate-500 text-[10px] font-bold tracking-wider">{step.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

const demonstrates = [
  'A bounded developer workflow',
  'One successful execution path',
  'Specific platform service integration',
  'Local development setup pattern',
  'Error handling for expected cases',
];

const doesNotDemonstrate = [
  'Universal production readiness',
  'Full architecture coverage',
  'Performance at scale',
  'All error conditions',
  'Security hardening for production',
];

export function WhatThisSampleDemonstratesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (5).png"
          alt="What Sample Demonstrates Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            What this sample demonstrates and does not demonstrate
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Bounded scope prevents false confidence.
          </p>
        </div>

        {/* 2 Column Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Card: DEMONSTRATES */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-teal-400 text-xl font-bold font-mono">DEMONSTRATES</h3>

            <div className="flex flex-col gap-4">
              {demonstrates.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0" />
                  <span className="text-white text-base font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: DOES NOT DEMONSTRATE */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-slate-400 text-xl font-bold font-mono">DOES NOT DEMONSTRATE</h3>

            <div className="flex flex-col gap-4">
              {doesNotDemonstrate.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600 rounded-full flex-shrink-0" />
                  <span className="text-slate-400 text-base font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

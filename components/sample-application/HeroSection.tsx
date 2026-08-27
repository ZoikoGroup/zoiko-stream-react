import React from 'react';
import Image from 'next/image';

const blueprints = [
  { name: 'React Native Player', lang: 'KOTLIN / SWIFT', dotCls: 'bg-teal-400', langCls: 'text-teal-400' },
  { name: 'Distributed Broadcaster', lang: 'GO / NODE.JS', dotCls: 'bg-blue-500', langCls: 'text-blue-500' },
];

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (1).png"
          alt="Sample Applications Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 flex items-center justify-center">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
            SAMPLE APPLICATIONS
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Start from a verified ZoikoStream sample application.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Sample applications are runnable reference implementations with verified source, current compatibility, and bounded scope. Clone a working repo, confirm prerequisites, and see real platform behavior before writing integration code.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Browse verified samples</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Read documentation</span>
          </div>
        </div>
      </div>

      {/* Right Box: Runnable Platform Blueprints */}
      <div className="relative z-10 w-full lg:w-[480px] h-96 p-8 rounded-2xl border border-gray-800 flex flex-col justify-center items-center gap-6 overflow-hidden shadow-2xl backdrop-blur-md">
        <Image
          src="/images/sample-application/Rectangle.png"
          alt="Runnable Blueprints Background"
          fill
          className="object-cover pointer-events-none"
        />

        <div className="relative z-10 text-white text-sm font-bold tracking-wide uppercase">
          RUNNABLE PLATFORM BLUEPRINTS
        </div>

        <div className="relative z-10 w-full flex flex-col gap-3">
          {blueprints.map((bp, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-800/90 rounded-lg border border-gray-800 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${bp.dotCls}`} />
                <span className="text-white text-base font-bold">{bp.name}</span>
              </div>
              <span className={`text-xs font-mono font-bold ${bp.langCls}`}>{bp.lang}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

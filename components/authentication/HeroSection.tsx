import React from 'react';
import Image from 'next/image';

const boundarySteps = [
  { step: '1. Developer Access', status: 'REQUEST ACCESS', cls: 'text-teal-400' },
  { step: '2. Credential Model', status: 'RETRIEVE KEYS', cls: 'text-blue-500' },
  { step: '3. Authenticated Request', status: 'TLS TRANSPORT', cls: 'text-teal-400' },
  { step: '4. Scope & Authorization', status: 'CHECK RULES', cls: 'text-violet-500' },
];

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/60 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (9).png"
          alt="Authentication Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 flex items-center justify-center">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
            AUTHENTICATION
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Authenticate API requests with the right credential model
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Authentication proves the calling client or approved user context. Scopes and authorization then determine what that authenticated caller may do. Use only the methods, environments, and credential handling rules published for your integration.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Get Developer Access</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white flex justify-center items-center cursor-pointer hover:bg-white/10 transition-colors">
            <span className="text-white text-base font-bold">Open API Reference</span>
          </div>
        </div>
      </div>

      {/* Right Boundary Flow Card */}
      <div className="relative z-10 w-full lg:w-[480px] p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 shadow-2xl backdrop-blur-md">
        <span className="text-white text-xs font-bold tracking-wide uppercase">
          AUTHENTICATION BOUNDARY FLOW
        </span>

        <div className="w-full flex flex-col gap-3">
          {boundarySteps.map((b, idx) => (
            <div
              key={idx}
              className="p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center"
            >
              <span className="text-white text-sm font-bold">{b.step}</span>
              <span className={`text-xs font-normal font-mono ${b.cls}`}>{b.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

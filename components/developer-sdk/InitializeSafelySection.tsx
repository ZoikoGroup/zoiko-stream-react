import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const assumptions = [
  'Execution context resides strictly server-side.',
  'Credential source mapped from structured secrets (never hardcoded strings).',
  'Required role permissions allow writing to the Stream schema.',
];

const initCode = `const { ZoikoStreamClient } = require('@zoikostream/sdk-node');

// Safely configured client utilizing platform boundaries
const client = new ZoikoStreamClient({
  apiKey: process.env.ZOIKO_API_KEY,
  environment: 'production',
  timeout: 5000
});`;

export function InitializeSafelySection() {
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Initialize safely — authentication and configuration boundaries.
          </h2>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Code Box */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden shadow-xl">
            <div className="px-4 py-3 bg-slate-900 border-b border-gray-800">
              <span className="text-slate-900 text-xs font-mono font-bold">initialize.js</span>
            </div>
            <div className="p-6 bg-gray-950 font-mono text-xs text-white leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{initCode}</pre>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-lg font-bold font-mono">What this assumes:</h3>
            <div className="flex flex-col gap-4">
              {assumptions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-1 border-l-2 border-b-2 border-blue-500 -rotate-45" />
                  </div>
                  <span className="text-slate-600 text-sm leading-5">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <span className="text-blue-500 text-sm font-bold font-mono cursor-pointer hover:underline">
                Go to Authentication Guides →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (148).png';

const steps = [
  'Contribute',
  'Ingest',
  'Produce',
  'Secure',
  'Deliver',
  'Understand',
  'Preserve',
];

const lifecycleMatrixRows = [
  {
    context: 'Developers & Products',
    vals: ['Required', 'Required', 'Conditional', 'Required', 'Required', 'Common', 'Conditional'],
  },
  {
    context: 'Enterprises',
    vals: ['Conditional', 'Common', 'Conditional', 'Required', 'Required', 'Common', 'Required'],
  },
  {
    context: 'Media & Comms',
    vals: ['Required', 'Required', 'Required', 'Required', 'Required', 'Common', 'Required'],
  },
  {
    context: 'Education & Civic',
    vals: ['Common', 'Required', 'Common', 'Required', 'Required', 'Conditional', 'Required'],
  },
];

export default function LifecycleMatrixSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Different organizations. One media lifecycle.
          </h2>
        </div>

        {/* 7-Step Horizontal Process Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 relative">
              <div className="size-12 rounded-2xl bg-gradient-to-b from-teal-400 to-blue-500 flex items-center justify-center text-slate-950 font-bold font-['Space_Grotesk'] text-base shadow-lg">
                {idx + 1}
              </div>
              <span className="text-white text-xs font-bold font-['Space_Grotesk']">
                {st}
              </span>
            </div>
          ))}
        </div>

        {/* Lifecycle Matrix Table */}
        <div className="p-6 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-3">
          {/* Header Row */}
          <div className="p-3 bg-slate-900 rounded-lg grid grid-cols-12 gap-2 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-3 text-white">Organization Context</span>
            {steps.map((st, i) => (
              <span key={i} className="col-span-1 text-center text-white truncate">
                {st}
              </span>
            ))}
          </div>

          {/* Body Rows */}
          <div className="flex flex-col divide-y divide-gray-800">
            {lifecycleMatrixRows.map((row, rIdx) => (
              <div key={rIdx} className="p-4 grid grid-cols-12 gap-2 items-center text-xs font-['Space_Grotesk']">
                <span className="col-span-3 text-white font-bold">{row.context}</span>
                {row.vals.map((v, cIdx) => (
                  <span
                    key={cIdx}
                    className={`col-span-1 text-center font-bold ${
                      v === 'Required'
                        ? 'text-teal-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {v}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

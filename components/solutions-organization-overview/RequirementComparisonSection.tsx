import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const requirementRows = [
  { context: 'Developers & Products', sec: 'Required', acc: 'Conditional', res: 'Required', gov: 'Common', op: 'Self-Service', ana: 'Required', rec: 'Common', pre: 'Conditional' },
  { context: 'Enterprises', sec: 'Required', acc: 'Common', res: 'Required', gov: 'Required', op: 'Managed', ana: 'Required', rec: 'Required', pre: 'Required' },
  { context: 'Media & Comms', sec: 'Required', acc: 'Required', res: 'Required', gov: 'Required', op: 'Assisted', ana: 'Common', rec: 'Required', pre: 'Required' },
  { context: 'Education', sec: 'Common', acc: 'Required', res: 'Common', gov: 'Required', op: 'Managed', ana: 'Conditional', rec: 'Required', pre: 'Required' },
  { context: 'Faith & Community', sec: 'Validate', acc: 'Required', res: 'Common', gov: 'Validate', op: 'Self-Service', ana: 'Validate', rec: 'Required', pre: 'Required' },
  { context: 'Public & Civic', sec: 'Required', acc: 'Required', res: 'Required', gov: 'Required', op: 'Assisted', ana: 'Required', rec: 'Required', pre: 'Required' },
];

export default function RequirementComparisonSection() {
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
            Compare the requirements that shape your path.
          </h2>
        </div>

        {/* Requirements Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-100 border-b border-gray-200 grid grid-cols-12 gap-2 text-slate-900 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-3">Context</span>
            <span className="col-span-1 text-center">Security</span>
            <span className="col-span-1 text-center">Accessibility</span>
            <span className="col-span-1 text-center">Resilience</span>
            <span className="col-span-1 text-center">Governance</span>
            <span className="col-span-1 text-center">Operating</span>
            <span className="col-span-1 text-center">Analytics</span>
            <span className="col-span-1 text-center">Recording</span>
            <span className="col-span-2 text-center">Preserve</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {requirementRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-2 items-center text-xs font-['Space_Grotesk']">
                <span className="col-span-3 text-slate-900 font-bold">{row.context}</span>
                <span className={`col-span-1 text-center font-bold ${row.sec === 'Required' ? 'text-blue-500' : row.sec === 'Validate' ? 'text-red-500' : 'text-slate-600'}`}>
                  {row.sec}
                </span>
                <span className={`col-span-1 text-center font-bold ${row.acc === 'Required' ? 'text-blue-500' : 'text-slate-600'}`}>
                  {row.acc}
                </span>
                <span className={`col-span-1 text-center font-bold ${row.res === 'Required' ? 'text-blue-500' : 'text-slate-600'}`}>
                  {row.res}
                </span>
                <span className={`col-span-1 text-center font-bold ${row.gov === 'Required' ? 'text-blue-500' : row.gov === 'Validate' ? 'text-red-500' : 'text-slate-600'}`}>
                  {row.gov}
                </span>
                <span className="col-span-1 text-center text-slate-600 font-bold">
                  {row.op}
                </span>
                <span className={`col-span-1 text-center font-bold ${row.ana === 'Required' ? 'text-blue-500' : row.ana === 'Validate' ? 'text-red-500' : 'text-slate-600'}`}>
                  {row.ana}
                </span>
                <span className={`col-span-1 text-center font-bold ${row.rec === 'Required' ? 'text-blue-500' : 'text-slate-600'}`}>
                  {row.rec}
                </span>
                <span className={`col-span-2 text-center font-bold ${row.pre === 'Required' ? 'text-blue-500' : 'text-slate-600'}`}>
                  {row.pre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

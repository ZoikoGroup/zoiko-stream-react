import React from 'react';
import Image from 'next/image';

const states = [
  { label: 'Retain', badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500' },
  { label: 'Review Due', badgeCls: 'bg-amber-500/10 text-amber-500 border-amber-500' },
  { label: 'Hold', badgeCls: 'bg-red-500/10 text-red-500 border-red-500' },
  { label: 'Eligible for Disposition', badgeCls: 'bg-blue-500/10 text-blue-500 border-blue-500' },
  { label: 'Approval Required', badgeCls: 'bg-amber-500/10 text-amber-500 border-amber-500' },
  { label: 'Approved', badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500' },
  { label: 'Executed', badgeCls: 'bg-gray-500/10 text-gray-400 border-gray-400' },
  { label: 'Failed', badgeCls: 'bg-red-500/10 text-red-500 border-red-500' },
  { label: 'Unknown', badgeCls: 'bg-gray-500/10 text-gray-400 border-gray-400' },
];

const directiveItems = [
  { label: 'Policy Source', val: 'SEC Rule 17a-4 Compliance Standard' },
  { label: 'Authority Owner', val: 'Head of Legal & Regulatory Affairs' },
  { label: 'Effective Date', val: 'January 1, 2026' },
  { label: 'Next Review Date', val: 'December 15, 2026' },
  { label: 'Current Hold State', val: 'Active Legal Hold (Asset Restrict)' },
  { label: 'Disposition State', val: 'Locked until Hold Release' },
  { label: 'Verification Evidence', val: 'Checksum verification logs signed v3.2' },
];

const govActions = [
  'Apply/Release Hold',
  'Update Policy Reference',
  'Export/Transfer Asset',
  'Approve Disposition',
  'Execute Deletion',
  'Retry Failed Actions',
];

export function LifecycleAuthoritySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (15).png"
          alt="Lifecycle Authority Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Keep lifecycle authority explicit
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Separate policy-driven lifecycle decisions; authority remains with the customer.
          </p>
        </div>

        {/* States Badge Bar */}
        <div className="w-full flex flex-wrap items-center gap-3">
          <span className="text-slate-400 text-xs font-bold  tracking-wide">STATES:</span>
          {states.map((s, idx) => (
            <span key={idx} className={`px-2.5 py-1 rounded-full border text-xs font-bold  uppercase ${s.badgeCls}`}>
              {s.label}
            </span>
          ))}
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Active Retention Directive */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold ">Active Retention Directive</h3>
            <div className="flex flex-col gap-4 text-sm ">
              {directiveItems.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="w-40 text-slate-400 text-xs font-bold uppercase flex-shrink-0">{item.label}</span>
                  <span className="text-white font-normal">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Governance Actions */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold ">Governance Actions</h3>
            <div className="flex flex-col gap-3">
              {govActions.map((action, idx) => (
                <div key={idx} className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex items-center gap-3 cursor-pointer hover:bg-gray-700/60 transition-colors">
                  <div className="w-4 h-4 border-2 border-teal-400 rounded-xs" />
                  <span className="text-white text-xs font-bold ">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { CirclePlus, Clock, RefreshCcw, Search, Shield, SquareCheck, Trash2 } from 'lucide-react';

const lifecycleSteps = [
  { num: '1', title: 'Identify', desc: 'Determine media/object and preservation intent.', icon: Search },
  { num: '2', title: 'Register', desc: 'Assign stable identity, custody owner, lineage, and metadata.', icon: CirclePlus },
  { num: '3', title: 'Preserve', desc: 'Place under approved preservation policy/process.', icon: Shield },
  { num: '4', title: 'Verify', desc: 'Evaluate integrity evidence and metadata completeness.', icon: SquareCheck },
  { num: '5', title: 'Monitor', desc: 'Review integrity, format sustainability, access, and rules.', icon: Clock },
  { num: '6', title: 'Act', desc: 'Repair, re-verify, correct metadata, migrate formats.', icon: RefreshCcw },
  { num: '7', title: 'Review/Dispose', desc: 'Retain, hold, transfer, supersede, or withdraw content.', icon: Trash2 },
];

export function PreservationLifecycleSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Preservation Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Identify → Register → Preserve → Verify → Monitor → Act → Review / Dispose
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            One understandable preservation lifecycle separating setup, evidence, monitoring, action, and review.
          </p>
        </div>

        {/* 7 Step Indicator Bar */}
        <div className="w-full flex items-center justify-between overflow-x-auto pb-4">
          {lifecycleSteps.map((step, idx) => {
            const Icon=step.icon;
            return(
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-2 min-w-[90px]">
                <div className="w-12 h-12 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full border border-gray-500 flex items-center justify-center shadow-md">
                  <Icon className="text-gray-950  " />
                                    </div>
                <span className="text-slate-900 text-xs font-bold  truncate">{step.title}</span>
              </div>
              {idx < lifecycleSteps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-400 mx-2 min-w-[20px]" />
              )}
            </React.Fragment>
            )})}
        </div>

        {/* 7 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lifecycleSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/90 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <h3 className="text-slate-900 text-base font-bold ">{s.title}</h3>
              <p className="text-slate-600 text-xs font-normal  leading-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

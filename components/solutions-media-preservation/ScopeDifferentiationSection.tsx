import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity, Archive, CalendarCheck, Database, PlayCircle, Video } from 'lucide-react';

const scopes = [
  { scope: 'SCOPE 01', title: 'Recording', desc: 'Creates captured media; does not by itself establish preservation readiness',icon:Video },
  { scope: 'SCOPE 02', title: 'Replay', desc: 'Audience-access publication; may be absent even when preservation is required',icon:PlayCircle },
  { scope: 'SCOPE 03', title: 'Backup', desc: 'Operational recovery copy/process; not automatically an archive or preservation program',icon:Database },
  { scope: 'SCOPE 04', title: 'Retention', desc: 'Policy about how long an object is kept before review/disposition',icon:CalendarCheck },
  { scope: 'SCOPE 05', title: 'Archive', desc: 'A managed collection/repository context; exact archive capability must be evidence-backed',icon:Archive },
  { scope: 'SCOPE 06', title: 'Preservation', desc: 'Ongoing governance keeping media identity, lineage, metadata, integrity evidence, access rules, format usability, and lifecycle actions understandable over time',icon:Activity },
];

const connections = [
  { num: '1', text: 'Recording captured' },
  { num: '2', text: 'Backup cached' },
  { num: '3', text: 'Retention set' },
  { num: '4', text: 'Archive managed' },
  { num: '5', text: 'Preservation active' },
];

export function ScopeDifferentiationSection() {
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
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Recording, replay, backup, retention, archive, and preservation are different
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Prevent category confusion before deeper evaluation.
          </p>
        </div>

        {/* 6 Scope Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopes.map((s, idx) => {
            const IconComponent=s.icon;
            return(
            <div
              key={idx}
              className="p-8 bg-white/90 rounded-xl border-[1.5px] border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full flex justify-between items-center">
                <div className="p-2 bg-slate-200 rounded-md">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-slate-600 " />
                  </div>
                </div>
                <span className="text-slate-600 text-xs font-bold  tracking-wide">
                  {s.scope}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-slate-900 text-xl font-bold ">{s.title}</h3>
                <p className="text-slate-600 text-sm font-normal  leading-5">{s.desc}</p>
              </div>
            </div>
            )})}
        </div>

        {/* How They Connect Bar */}
        <div className="w-full p-6 bg-white/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm backdrop-blur-sm">
          <span className="text-slate-900 text-sm font-bold ">How they connect:</span>
          <div className="w-full flex flex-wrap items-center gap-3">
            {connections.map((c, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 text-xs font-bold ">
                    {c.num}
                  </div>
                  <span className="text-slate-600 text-xs font-medium ">{c.text}</span>
                </div>
                {idx < connections.length - 1 && (
                  <span className="text-slate-600 text-xs font-normal ">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

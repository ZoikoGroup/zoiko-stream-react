import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const pathways = [
  { title: 'Recording Intent', status: 'On', dotCls: 'bg-emerald-500' },
  { title: 'Capture Job', status: 'Complete', dotCls: 'bg-emerald-500' },
  { title: 'Asset Registration', status: 'Registered', dotCls: 'bg-emerald-500' },
  { title: 'Replay Readiness', status: 'Ready', dotCls: 'bg-emerald-500' },
  { title: 'Replay Publication', status: 'Unpublished', dotCls: 'bg-amber-500' },
  { title: 'Audience Inheritance', status: 'Requires Review', dotCls: 'bg-amber-500' },
  { title: 'Accessibility Continuity', status: 'Independent States', dotCls: 'bg-blue-500' },
];

const retentionActions = [
  { title: 'Retention Settings', desc: 'Define explicit lifecycle timelines for temporary assets' },
  { title: 'Cold Archive System', desc: 'Replicate recording assets across physical regional servers' },
  { title: 'Backup Schedules', desc: 'Automate secondary snapshot captures during live stream ingest' },
  { title: 'Legal Hold Lock', desc: 'Enforce absolute data preservation lock for regulatory compliance' },
  { title: 'Asset Export Pipeline', desc: 'Deliver raw broadcast output to external S3 buckets' },
];

export function EndLiveReplaySection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[50px]">
            End live deliberately
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            A live broadcast ending is not a replay publication event.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Governed Transition Pathways */}
          <div className="lg:col-span-7 p-6 bg-slate-50/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">Governed Transition Pathways</h3>
            <div className="w-full flex flex-col divide-y divide-gray-200">
              {pathways.map((pw, idx) => (
                <div key={idx} className="p-4 flex justify-between items-center">
                  <span className="text-slate-900 text-base font-bold ">{pw.title}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${pw.dotCls}`} />
                    <span className="text-slate-600 text-sm font-bold ">{pw.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Retention & Preservation Actions */}
          <div className="lg:col-span-5 p-8 bg-slate-50/90 rounded-xl border-[1.5px] border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">Retention &amp; Preservation Actions</h3>
            <div className="w-full flex flex-col gap-4">
              {retentionActions.map((ra, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <h4 className="text-slate-900 text-sm font-bold ">{ra.title}</h4>
                  <p className="text-slate-600 text-xs font-normal  leading-4">{ra.desc}</p>
                </div>
              ))}
            </div>
            <div className="w-full border-t border-gray-200" />
            <div className="px-7 py-3.5 rounded-lg border-[1.5px] border-blue-500 flex justify-center items-center cursor-pointer">
              <span className="text-blue-500 text-base font-bold ">
                Access Retention Configurations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import bgSection13 from '@/public/images/live-event-conferences/section-13bg (2).png';

export function ReadinessMatrixSection() {
  const items = [
    { num: '01', title: 'Conference Structure', status: 'Ready', statusBg: 'bg-emerald-100 text-emerald-600' },
    { num: '02', title: 'Schedule / Time Zones', status: 'Ready', statusBg: 'bg-emerald-100 text-emerald-600' },
    { num: '03', title: 'Sessions / Tracks', status: 'Ready', statusBg: 'bg-emerald-100 text-emerald-600' },
    { num: '04', title: 'Contributors & Feeds', status: 'Needs Review', statusBg: 'bg-amber-100 text-amber-600' },
    { num: '05', title: 'Audience & Access Gates', status: 'Ready', statusBg: 'bg-emerald-100 text-emerald-600' },
    { num: '06', title: 'Accessibility & Languages', status: 'Ready', statusBg: 'bg-emerald-100 text-emerald-600' },
    { num: '07', title: 'Resilience & Redundancy', status: 'Needs Review', statusBg: 'bg-amber-100 text-amber-600' },
    { num: '08', title: 'Recording & Preservation', status: 'Blocked', statusBg: 'bg-red-100 text-red-600' },
    { num: '09', title: 'Analytics & Metrics', status: 'Pending Gate', statusBg: 'bg-slate-200 text-slate-500' },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection13}
          alt="Conference Planning Workspace Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight lg:leading-[60.8px]">
            Conference Planning Workspace
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Track planning decisions across all technical dimensions. Resolve unresolved blocks and Needs Review statuses before authorizing the final transmission start.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
          <div className="w-full inline-flex justify-between items-center">
            <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
              Operational Readiness Matrix
            </h3>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
              CONFERENCE ID: ZS-CONF-2026
            </span>
          </div>

          <div className="w-full h-[1px] bg-gray-800" />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-3"
              >
                <div className="w-full inline-flex justify-between items-center">
                  <span className="text-blue-500 text-lg font-bold font-['Space_Grotesk']">
                    {item.num}
                  </span>
                  <div className={`px-2.5 py-1 rounded-full ${item.statusBg}`}>
                    <span className="text-xs font-bold font-['Space_Grotesk']">
                      {item.status}
                    </span>
                  </div>
                </div>
                <h4 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

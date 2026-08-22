import React from 'react';
import Image from 'next/image';

import card36 from '@/public/images/Broadcast-globally/card-image (36).png';
import card37 from '@/public/images/Broadcast-globally/card-image (37).png';
import card38 from '@/public/images/Broadcast-globally/card-image (38).png';
import card39 from '@/public/images/Broadcast-globally/card-image (39).png';
import card40 from '@/public/images/Broadcast-globally/card-image (40).png';

const matrix = [
  { stage: 'Contribution', continuity: 'Dual SRT Caller/Listener', fallback: 'Automated RTMP handover', redundancy: 'Separate network interfaces', status: 'ACTIVE', statusStyle: 'text-emerald-500' },
  { stage: 'Ingest', continuity: 'Multi-Region Edge gates', fallback: 'Anycast IP routing swap', redundancy: 'Active-Active dual cloud', status: 'ACTIVE', statusStyle: 'text-emerald-500' },
  { stage: 'Transcode', continuity: 'N+1 hardware accelerators', fallback: 'CPU-based pipeline fallback', redundancy: 'Dynamic thread mapping', status: 'STANDBY', statusStyle: 'text-emerald-500' },
  { stage: 'Deliver', continuity: 'Multi-CDN routing fabric', fallback: 'Single network origin swap', redundancy: 'Continuous DNS SLA check', status: 'ACTIVE', statusStyle: 'text-emerald-500' },
  { stage: 'Observe', continuity: 'Sub-second QoS telemetry', fallback: 'Aggregated edge syslog logs', redundancy: 'Dual analytics pipelines', status: 'ACTIVE', statusStyle: 'text-emerald-500' },
];

const fallbacks = [
  { name: 'Source Failover', desc: 'Ready for seamless state transition.', image: card36 },
  { name: 'Multi-Region Ingest', desc: 'Ready for seamless state transition.', image: card37 },
  { name: 'CDN Failover', desc: 'Ready for seamless state transition.', image: card38 },
  { name: 'Recording Backup', desc: 'Ready for seamless state transition.', image: card39 },
  { name: 'Alert Escalation', desc: 'Ready for seamless state transition.', image: card40 },
];

export default function DegradationContinuitySection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            What happens when a critical path degrades?
          </h2>
        </div>

        {/* Continuity Matrix Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold  ">
            <span className="col-span-3">Stage</span>
            <span className="col-span-3">Planned Continuity</span>
            <span className="col-span-3">Tested Fallback</span>
            <span className="col-span-2">Active Redundancy</span>
            <span className="col-span-1 text-right">Status</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {matrix.map((m, idx) => (
              <div
                key={idx}
                className="p-4 grid grid-cols-12 gap-3 items-center text-xs   hover:bg-slate-50 transition-colors"
              >
                <span className="col-span-3 text-slate-900 text-sm font-bold  ">
                  {m.stage}
                </span>
                <span className="col-span-3 text-slate-700 font-normal">
                  {m.continuity}
                </span>
                <span className="col-span-3 text-slate-700 font-normal">
                  {m.fallback}
                </span>
                <span className="col-span-2 text-slate-700 font-normal">
                  {m.redundancy}
                </span>
                <span className={`col-span-1 text-right text-xs font-bold   ${m.statusStyle}`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Fallback Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {fallbacks.map((fb, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-24 bg-slate-100">
                <Image
                  src={fb.image}
                  alt={fb.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col gap-1">
                <span className="text-slate-900 text-sm font-bold  ">
                  {fb.name}
                </span>
                <span className="text-slate-600 text-xs font-normal  ">
                  {fb.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

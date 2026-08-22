import React from 'react';
import Image from 'next/image';

import bg107 from '@/public/images/Broadcast-globally/bg (107).png';

const protocols = [
  {
    name: 'RTMP Push',
    status: 'READY',
    statusBg: 'bg-white/10 text-emerald-500',
    subtitle: 'Primary stream ingest path',
    rtt: '<120ms verified',
    codec: 'AAC-LC configured',
  },
  {
    name: 'SRT Listener',
    status: 'CONFIGURED',
    statusBg: 'bg-white/10 text-teal-400',
    subtitle: 'High redundancy fallback path',
    rtt: '<120ms verified',
    codec: 'AAC-LC configured',
  },
  {
    name: 'WebRTC Ingest',
    status: 'VALIDATING',
    statusBg: 'bg-white/10 text-amber-500',
    subtitle: 'Sub-second browser ingest link',
    rtt: '<120ms verified',
    codec: 'AAC-LC configured',
  },
];

export default function IngestCleanlinessSection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg107}
          alt="Ingest Telemetry Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Can the source reach the platform cleanly and predictably?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((p, idx) => (
            <div
              key={idx}
              className="p-7 bg-gray-800/90 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5 justify-between"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl font-bold  ">
                  {p.name}
                </h3>
                <span className={`px-2 py-1 rounded text-[10px] font-bold   ${p.statusBg}`}>
                  {p.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm font-normal  ">
                {p.subtitle}
              </p>

              <div className="w-full h-px border-b border-gray-700" />

              <div className="flex flex-col gap-2">
                <span className="text-teal-400 text-xs font-bold  ">
                  PREFLIGHT TELEMETRY
                </span>
                <p className="text-slate-400 text-xs font-normal  ">
                  • Target RTT: {p.rtt}
                </p>
                <p className="text-slate-400 text-xs font-normal  ">
                  • Audio codec: {p.codec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

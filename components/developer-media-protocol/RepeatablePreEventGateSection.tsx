import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const gateItems = [
  {
    title: '1. Protocol Chosen & Qualified',
    desc: 'Confirm your selected protocol (RTMPS, SRT, or WHIP) has current qualification evidence.',
  },
  {
    title: '2. Source/Encoder Verified',
    desc: 'Your encoder vendor, version, and firmware are in the qualification registry.',
  },
  {
    title: '3. Credentials Stored Securely',
    desc: 'Stream keys, passphrases, and tokens are masked, rotated on schedule, and never logged.',
  },
  {
    title: '4. Current Endpoint Confirmed',
    desc: 'Ingest URL and port are from the current protocol registry, not cached or stale.',
  },
  {
    title: '5. Network/Firewall Reviewed',
    desc: 'Required ports, transports, and DNS are verified for your production network.',
  },
  {
    title: '6. Media Settings Verified',
    desc: 'Video codec, resolution, frame rate, bitrate, and audio match the protocol profile.',
  },
  {
    title: '7. Reconnect Behavior Tested',
    desc: 'Auto-retry, backoff, and session recovery work as expected under failure conditions.',
  },
  {
    title: '8. Monitoring Configured',
    desc: 'Stream health dashboard, alerts, and diagnostic IDs are available before going live.',
  },
  {
    title: '9. Status/Changelog Known',
    desc: 'You know where to check System Status and protocol changelog before an event.',
  },
  {
    title: '10. Fallback Plan Documented',
    desc: 'If the primary protocol or encoder fails, you have a tested alternative path.',
  },
];

export function RepeatablePreEventGateSection() {
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
            Turn protocol choice into a repeatable pre-event gate
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Convert protocol evaluation into a testable launch checklist. Complete each item before your production stream.
          </p>
        </div>

        {/* 10 Items 2-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {gateItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex items-start gap-4 shadow-xs"
            >
              <div className="w-6 h-6 bg-teal-400/10 rounded-md border border-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-teal-500 text-xs font-bold   ">✓</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-slate-900 text-base font-bold   ">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-white text-base font-bold   ">Complete setup</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-slate-600 font-bold    text-center cursor-pointer hover:border-slate-900 transition-colors">
            Download checklist
          </div>
        </div>
      </div>
    </section>
  );
}

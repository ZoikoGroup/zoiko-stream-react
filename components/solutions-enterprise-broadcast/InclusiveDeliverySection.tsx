import React from 'react';
import Image from 'next/image';
import {
  NotepadText,
  Database,
  Activity,
  SlidersHorizontal,
  AlertCircle,
  RefreshCcw,
  CircleHelp,
} from 'lucide-react';

const dimensions = [
  {
    title: 'Requirement Planning',
    desc: 'Caption and secondary audio language mapping are codified inside the Broadcast Brief during readiness staging.',
    icon: NotepadText,
  },
  {
    title: 'Track Provenance',
    desc: 'Track every caption feed back to an explicit provider (e.g. AI engine, professional stenographer) and language signature.',
    icon: Database,
  },
  {
    title: 'Live Health Tracking',
    desc: 'Continuous latency and error-rate telemetry on active subtitle streams, displaying real-time ingest pipeline health.',
    icon: Activity,
  },
  {
    title: 'Viewer Player Controls',
    desc: 'Enforce keyboard accessibility (WCAG 2.1 AA), screen reader compliance, high contrast indicators, and customizable menus.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Incident Handling',
    desc: 'Any caption drop or accessibility degradation creates a high-priority operational incident, signaling the live desk immediately.',
    icon: AlertCircle,
  },
  {
    title: 'Replay Continuity',
    desc: 'Ensures live generated caption tracks remain synchronized and tied directly to the master VOD files during archiving.',
    icon: RefreshCcw,
  },
  {
    title: 'Help & Escalation',
    desc: 'Provide a direct, un-gated accessibility feedback path for viewers, connected directly to operational response desks.',
    icon: CircleHelp,
  },
];

export function InclusiveDeliverySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (3).png"
          alt="Inclusive Delivery Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[52px]">
            Treat inclusive delivery as live operational readiness
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Accessibility is a first-class broadcast dimension, not a footer promise.
          </p>
        </div>

        {/* 7 Dimension Cards */}
        <div className="w-full flex flex-col gap-3">
          {dimensions.map((dim, idx) => {
            const IconComponent = dim.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-700 transition-colors backdrop-blur-sm"
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-white text-base font-bold">{dim.title}</h3>
                  <div className="p-2 bg-gray-800 rounded-md">
                    <IconComponent className="w-4 h-4 text-teal-400" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs font-normal leading-5">{dim.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

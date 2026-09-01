import React from 'react';
import Image from 'next/image';

import bg5 from '@/public/images/resources-system-status/section-7bg.png';

const STEPS = [
  {
    time: '14:15 UTC (20m ago)',
    dotColor: 'bg-red-500',
    title: 'Investigating',
    description:
      'We are investigating reports of intermittent connection timeouts when establishing streaming sessions with our global Video Ingest API. Our platform operations team is currently redirecting ingest pathways to auxiliary ingress nodes.',
    hasLine: true,
  },
  {
    time: '14:28 UTC (7m ago)',
    dotColor: 'bg-amber-500',
    title: 'Identified',
    description:
      'A localized DNS resolution failure inside our primary European ingress cluster has been isolated. Traffic routing rules are being safely updated to bypass the affected DNS cluster. Next update within 15 minutes.',
    hasLine: true,
  },
  {
    time: '14:32 UTC (Just now)',
    dotColor: 'bg-blue-500',
    title: 'Monitoring',
    description:
      'DNS rerouting has completed successfully. Ingest error rates have dropped back below critical levels. Operations is observing incoming streams to confirm permanent resolution before marking this incident resolved.',
    hasLine: false,
  },
];

export default function StatusInsideIncidentReportSection() {
  return (
    <section id="incident-report" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Inside Incident Report Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Inside every incident report
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Append-only, timestamped, transparent — from first detection to full resolution.
        </p>
      </div>

      {/* Incident Report Card */}
      <div className="relative z-10 w-full p-6 sm:p-10 bg-zinc-900/95 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-8 shadow-xl">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="px-2.5 py-1 bg-red-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-red-500/30 inline-flex justify-start items-start">
              <span className="text-red-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                Investigating
              </span>
            </div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
              Video Ingest endpoint connection timeouts
            </h3>
          </div>
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] shrink-0">
            REF: INC-2904
          </span>
        </div>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Subheader Meta */}
        <div className="w-full flex flex-wrap items-center gap-4 text-sm font-normal font-['Inter']">
          <div>
            <span className="text-slate-400">Affected Component: </span>
            <span className="text-white font-bold">Video Ingest API</span>
          </div>
          <div className="size-1 bg-slate-400 rounded-full" />
          <div>
            <span className="text-slate-400">Severity: </span>
            <span className="text-red-500 font-bold">High Impact</span>
          </div>
        </div>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Timeline Stepper */}
        <div className="w-full flex flex-col justify-start items-start">
          {STEPS.map((step, index) => (
            <div key={index} className="w-full flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6">
              <div className="w-full sm:w-44 text-slate-400 text-sm font-normal font-['Inter'] shrink-0 pt-0.5">
                {step.time}
              </div>

              <div className="hidden sm:flex flex-col justify-start items-center shrink-0 self-stretch">
                <div className={`size-3 ${step.dotColor} rounded-full mt-1.5`} />
                {step.hasLine && <div className="w-0.5 flex-1 bg-gray-800 min-h-[48px]" />}
              </div>

              <div className="flex-1 pb-8 flex flex-col justify-start items-start gap-2">
                <h4 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

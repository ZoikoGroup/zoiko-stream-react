import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const roles = [
  {
    title: 'Editorial / Programming',
    desc: 'Determines program structure, schedule blocks, and general distribution intent.',
    tags: ['Schedules', 'Metadata', 'Rights Target'],
  },
  {
    title: 'Production / Broadcast Eng.',
    desc: 'Operates cameras, video switchers, graphic generation, and local mixes.',
    tags: ['Live Mixer', 'Feeds', 'Graphics Layer'],
  },
  {
    title: 'Media Operations / MCR',
    desc: 'Controls ingest nodes, contribution gateways, direct transcoders, and fallbacks.',
    tags: ['Contribution Rules', 'Gateways', 'Transcoders'],
  },
  {
    title: 'Platform / Distribution',
    desc: 'Coordinates edge caches, origin configurations, CDN routes, and playback.',
    tags: ['Edge Config', 'CDN Policies', 'Tokens'],
  },
  {
    title: 'Rights / Compliance',
    desc: 'Administers encryption parameters, SAML configurations, and country blocks.',
    tags: ['Geo-block', 'Encryption Key', 'SSO Policies'],
  },
  {
    title: 'Accessibility / Localization',
    desc: 'Plans WCAG-compliant real-time caption streams and multi-language feeds.',
    tags: ['Captions', 'Audio Tracks', 'Accessibility'],
  },
  {
    title: 'SRE / Operations',
    desc: 'Monitors diagnostic graphs, pipeline status, resource allocation, and incidents.',
    tags: ['Telemetry', 'SLA Monitors', 'Alert Configs'],
  },
  {
    title: 'Archive / Library',
    desc: 'Manages asset preservation, warm/cold backups, and durable record storage.',
    tags: ['Replays', 'Deep Archives', 'Metadata Logs'],
  },
  {
    title: 'Analytics / Audience Insights',
    desc: 'Aggregates real-time telemetry metrics and active viewer demographics.',
    tags: ['Telemetry Reports', 'Insights Grid', 'Active Log'],
  },
];

export function OperationalRolesSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Every decision has an owner. Every handoff has a record.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Nine operational roles, each with defined authority over specific workflow objects.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {role.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {role.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-2 pt-2">
                {role.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-slate-200 rounded-md text-slate-900 text-xs font-semibold font-['Inter']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

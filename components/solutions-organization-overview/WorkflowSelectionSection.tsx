import React from 'react';
import Image from 'next/image';

import bg153 from '@/public/images/Organization-overview/bg (153).png';
import rect136 from '@/public/images/Organization-overview/Rectangle (133).png';
import rect137 from '@/public/images/Organization-overview/Rectangle (132).png';
import rect138 from '@/public/images/Organization-overview/Rectangle (131).png';
import card63 from '@/public/images/Organization-overview/Rectangle (130).png';
import card60 from '@/public/images/Organization-overview/Rectangle (129).png';
import card62 from '@/public/images/Organization-overview/Rectangle (138).png';

const workflows = [
  { path: 'DEVELOPER PATH', title: 'Live Product Video', desc: 'Embed real-time stream frames directly within high-throughput native app panels.', image: rect136 },
  { path: 'ENTERPRISE PATH', title: 'Enterprise Broadcast', desc: 'Govern strict corporate channels, administrative pathways, and user access policies.', image: rect137 },
  { path: 'FAITH / COMMUNITY PATH', title: 'Private Audience Delivery', desc: 'Distribute streams quietly without analytic telemetry script tracking.', image: rect138 },
  { path: 'MEDIA & COMMS PATH', title: 'Global Event Streaming', desc: 'Pristine multi-CDN scaling backing up professional high-resolution ingestion feeds.', image: card63 },
  { path: 'CIVIC / EDUCATION PATH', title: 'Media Preservation', desc: 'Automated lesson archiving that packages raw records into cold replicates.', image: card60 },
  { path: 'DEVELOPERS & ENTERPRISES PATH', title: 'Operational Analytics', desc: 'Aggregate latency logs and telemetry statistics to optimize distribution pathways.', image: card62 },
];

export default function WorkflowSelectionSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg153}
          alt="Workflow Selection Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Already know the workflow? Start there.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Map direct operations to platform pipelines and discover pre-configured dashboard routes instantly.
          </p>
        </div>

        {/* 6 Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflows.map((w, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-40 bg-slate-950 overflow-hidden">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-1.5">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                    {w.path}
                  </span>
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {w.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Choose a workflow
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

import bg152 from '@/public/images/Organization-overview/bg (152).png';

const modelRows = [
  { task: 'Build Pipeline', self: 'Client/APIs', org: 'SAML Integration', assist: 'Dedicated Setup', live: 'Failsafe Ingest' },
  { task: 'Operate Signals', self: 'Developer Hook', org: 'Admin Console', assist: 'Co-Managed', live: 'Standby Engineers' },
  { task: 'Support Lifecycles', self: 'Standard Community', org: 'Tier 2 Helpdesk', assist: '24/7 SLA', live: 'Instant Hot-swaps' },
  { task: 'Review Evidence', self: 'Self-audits', org: 'SOC2 Export', assist: 'Co-reviewed Logs', live: 'Fully Documented' },
  { task: 'Escalate Failures', self: 'Automatic Retry', org: 'Alerting Webhooks', assist: 'Guaranteed Recovery', live: 'Zero-Sec Failover' },
];

export default function OperatingModelSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg152}
          alt="Operating Model Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Choose an operating model, not a stereotype.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Map ownership patterns cleanly down across workflows rather than settling for generic IT categories.
          </p>
        </div>

        {/* Operating Model Table */}
        <div className="p-6 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-3">
          <div className="p-3 bg-slate-900 rounded-lg grid grid-cols-12 gap-3 text-xs font-bold font-['Space_Grotesk']">
            <span className="col-span-3 text-white">Task Ownership</span>
            <span className="col-span-2 text-center text-white">Self-Service</span>
            <span className="col-span-2 text-center text-white">Org-Operated</span>
            <span className="col-span-3 text-center text-white">Assisted/Managed</span>
            <span className="col-span-2 text-center text-white">Live Event Managed</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {modelRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs font-['Inter']">
                <span className="col-span-3 text-white font-bold font-['Space_Grotesk']">{row.task}</span>
                <div className="col-span-2 py-2 bg-gray-800 rounded-md text-center text-slate-300 font-normal">
                  {row.self}
                </div>
                <div className="col-span-2 py-2 bg-gray-800 rounded-md text-center text-slate-300 font-normal">
                  {row.org}
                </div>
                <div className="col-span-3 py-2 bg-gray-800 rounded-md text-center text-slate-300 font-normal">
                  {row.assist}
                </div>
                <div className="col-span-2 py-2 bg-gray-800 rounded-md text-center text-slate-300 font-normal">
                  {row.live}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

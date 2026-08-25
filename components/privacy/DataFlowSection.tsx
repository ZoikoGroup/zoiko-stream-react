import React from 'react';

const flows = [
  { title: 'Account & service data', desc: 'ZoikoStream processes account/service data to provide and secure the account; legal basis/role varies by purpose and market.' },
  { title: 'Customer content & data', desc: 'The customer controls its content and often determines the purpose for end-user data submitted through its experience.' },
  { title: 'Viewer/session data', desc: 'May be processed to deliver, secure and measure playback; roles can differ by product and contract.' },
  { title: 'Live Events data', desc: 'The organizer may control registration purposes; ZoikoStream may provide platform/managed-service processing with separate direct purposes.' },
  { title: 'Developer/API data', desc: 'API usage, technical account IDs, integration telemetry and developer communications support the developer relationship.' },
  { title: 'Security/operations data', desc: 'Limited operational data may be processed to protect services, users and infrastructure.' },
];

export function DataFlowSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            DATA FLOW
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          How data moves through ZoikoStream.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto border-t border-zinc-200 divide-y divide-zinc-200">
        {flows.map((flow, idx) => (
          <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="w-60 text-neutral-700 text-sm font-bold leading-6 flex-shrink-0">
              {flow.title}
            </h3>
            <p className="flex-1 text-gray-500 text-sm font-normal leading-5">
              {flow.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

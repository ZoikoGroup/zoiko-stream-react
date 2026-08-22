import React from 'react';

const lifecycleTable = [
  { type: 'Recordings', active: '90 Days Active', hold: 'Litigation Hold Opt', archive: 'LTS Glacier Storage', delete: 'Wiped (DoD Standard)' },
  { type: 'Metadata', active: 'Indexed Query', hold: 'Custom SLA policy', archive: 'JSON raw structures', delete: 'Metadata purged' },
  { type: 'Access Logs', active: 'SIEM Integrated', hold: '7 Year Regulatory', archive: 'Read-only Immutable', delete: 'Purged automatically' },
  { type: 'Evidence Records', active: 'Cryptographic signature', hold: 'Indefinite Vault', archive: 'Cold Preservation', delete: 'Exception authorized' },
];

const principles = [
  { title: 'No blanket deletion', desc: 'No blanket deletion promises are executed without cryptographic proof and authority checks.' },
  { title: 'Indefinite retention block', desc: 'No data is held indefinitely without documented business or policy justification.' },
  { title: 'Viewer privacy loops', desc: 'Strict separation of PII, metadata, and audit evidence to respect global privacy standards.' },
  { title: 'Jurisdiction-aware routes', desc: 'Physically pin data handling, retention, and storage zones based on region mandates.' },
];

export default function DataLifecycleRulesSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Recordings, metadata, and evidence follow rules too
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Manage the complete lifecycle of media assets and analytical telemetry. Set explicit policies for retention, preservation, and cryptographically verified deletion.
          </p>
        </div>

        {/* Data Lifecycle Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold  ">
            <span className="col-span-3">DATA TYPE</span>
            <span className="col-span-2 text-center">ACTIVE STAGE</span>
            <span className="col-span-3 text-center">RETENTION HOLD</span>
            <span className="col-span-2 text-center">ARCHIVED STAGE</span>
            <span className="col-span-2 text-center">DELETION STAGE</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {lifecycleTable.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-3 text-slate-900 font-bold  ">{row.type}</span>
                <span className="col-span-2 text-center text-slate-600 font-normal">{row.active}</span>
                <span className="col-span-3 text-center text-slate-600 font-normal">{row.hold}</span>
                <span className="col-span-2 text-center text-slate-600 font-normal">{row.archive}</span>
                <span className="col-span-2 text-center text-slate-600 font-normal">{row.delete}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <h3 className="text-slate-900 text-base font-bold  ">
                {pr.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

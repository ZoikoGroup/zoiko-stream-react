'use client';

import SectionShell from './SectionShell';

interface MatrixRow {
  capability: string;
  geography: string;
  state: string;
  stateClass: string;
  context: string;
  conditions: string;
  evidenceDate: string;
  limitation: string;
}

const COLUMNS = [
  'Capability',
  'Geography',
  'State',
  'Context',
  'Conditions',
  'Evidence Date',
  'Limitation',
];

const ROWS: MatrixRow[] = [
  {
    capability: 'Edge Audio Buffer',
    geography: 'North America (US-East)',
    state: 'AVAILABLE',
    stateClass: 'bg-emerald-100 text-emerald-600 outline-emerald-500/20',
    context: 'Production-ready',
    conditions: 'Low latency path',
    evidenceDate: '2026-03-10',
    limitation: 'None',
  },
  {
    capability: 'Core Video Ingestion',
    geography: 'APAC South (Sydney)',
    state: 'LIMITED',
    stateClass: 'bg-amber-100 text-amber-600 outline-amber-500',
    context: 'Enterprise Plan only',
    conditions: 'RTMP backup active',
    evidenceDate: '2026-02-28',
    limitation: 'Transit caps apply',
  },
  {
    capability: 'DRM License Keys',
    geography: 'Western Europe',
    state: 'RESTRICTED',
    stateClass: 'bg-rose-200 text-red-600 outline-red-500/20',
    context: 'EU Tenant isolation',
    conditions: 'Time-window rules',
    evidenceDate: '2026-03-01',
    limitation: 'Subject to GDPR limits',
  },
  {
    capability: 'WebRTCSignaling',
    geography: 'Africa (South)',
    state: 'NOT EVALUATED',
    stateClass: 'bg-slate-200 text-slate-600 outline-slate-600/20',
    context: 'Beta preview context',
    conditions: 'No SLA commitment',
    evidenceDate: 'N/A',
    limitation: 'Under evaluation',
  },
];

export default function CapabilityMatrixSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-global-distribution/capability-matrix-bg.png"
      title="Capability-to-geography matrix"
      subtitle="Make scope inspectable when different capabilities vary by geography."
    >
      <div className="rounded-2xl bg-white p-4 shadow-[0px_16px_32px_0px_rgba(15,27,45,0.06)] outline-[1.5px] -outline-offset-[1.5px] outline-gray-200 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-50">
                {COLUMNS.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="p-3 text-xs font-bold text-slate-900"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.capability} className="border-b border-gray-200">
                  <td className="p-3 text-xs font-semibold text-slate-900">
                    {row.capability}
                  </td>
                  <td className="p-3 text-xs text-slate-600">{row.geography}</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex rounded-sm px-3 py-1 font-mono text-xs font-bold outline-1 -outline-offset-1 ${row.stateClass}`}
                    >
                      {row.state}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-slate-600">{row.context}</td>
                  <td className="p-3 text-xs text-slate-600">{row.conditions}</td>
                  <td className="p-3 text-xs text-slate-600">{row.evidenceDate}</td>
                  <td className="p-3 text-xs text-slate-600">{row.limitation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}

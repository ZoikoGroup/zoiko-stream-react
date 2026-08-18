interface Incident {
  id: string;
  time: string;
  description: string;
  status: 'RESOLVED' | 'MONITORING';
}

const incidents: Incident[] = [
  { id: 'INC-841', time: '19:04', description: 'Jitter on CDN Edge Pop', status: 'RESOLVED' },
  {
    id: 'INC-845',
    time: '19:12',
    description: 'Sign language feed sync latency',
    status: 'MONITORING',
  },
];

const statusStyles: Record<Incident['status'], string> = {
  RESOLVED: 'bg-emerald-900 text-teal-400',
  MONITORING: 'bg-amber-900 text-amber-500',
};

export default function GoLiveOperationsSection() {
  return (
    <section className="w-full bg-gray-50 border-b border-slate-200 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Go-live review and live operations.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Bridge the gap between strategic planning and technical execution with a rigorous,
          deterministic operational framework.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Go-live review desk */}
        <div className="w-full h-full p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <h3 className="text-zinc-950 text-base font-bold">Go-Live Review Desk</h3>
            <span className="px-2.5 py-1 bg-amber-900 rounded-full text-amber-500 text-xs font-bold">
              READY WITH RESERVATIONS
            </span>
          </div>

          <div className="w-full flex flex-col gap-2 pb-4 border-b border-slate-200">
            <div className="w-full flex justify-between items-center gap-3">
              <span className="text-slate-600 text-xs">Authority:</span>
              <span className="text-zinc-950 text-xs font-bold">ZoikoStream Operations Group</span>
            </div>
            <div className="w-full flex justify-between items-center gap-3">
              <span className="text-slate-600 text-xs">Verification Freshness:</span>
              <span className="text-teal-500 text-xs font-bold">Checked 4 minutes ago</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              Active Blockers (1 unresolved)
            </span>
            <div className="w-full p-4 bg-slate-50 rounded-lg border border-red-500 flex flex-col gap-2">
              <div className="w-full flex flex-wrap justify-between items-start gap-2">
                <span className="text-zinc-950 text-sm font-bold">Backup Link Verification</span>
                <span className="text-red-500 text-xs">Owner: Alex T.</span>
              </div>
              <p className="text-slate-600 text-xs leading-5">
                Primary fiber ingest tested. Secondary cellular failover is dropping frames under
                peak load test.
              </p>
              <p className="text-xs">
                <span className="text-teal-600 font-bold">Next Action:</span>{' '}
                <span className="text-slate-600">Deploy local SRT proxy before 18:00 EST</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 mt-auto">
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              Decision Matrix
            </span>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Proceed to Broadcast
              </button>
              <button
                type="button"
                className="px-4 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 text-amber-600 text-sm font-bold hover:bg-amber-50 transition-colors"
              >
                Hold &amp; Remediate
              </button>
            </div>
          </div>
        </div>

        {/* Live operations center */}
        <div className="w-full h-full p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <h3 className="text-zinc-950 text-base font-bold">Live Operations Center</h3>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-teal-600 text-xs font-bold">LIVE BROADCAST ACTIVE</span>
            </span>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                Active Incidents
              </span>
              <span className="text-zinc-950 text-lg font-bold">0 Critical</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                Support Status
              </span>
              <span className="text-blue-500 text-lg font-bold">L1 Eng Dedicated</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              Active Incidents Queue
            </span>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-3 text-slate-600 text-xs font-bold">ID / Time</th>
                    <th className="p-3 text-slate-600 text-xs font-bold">Description</th>
                    <th className="p-3 text-slate-600 text-xs font-bold">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.id} className="border-b border-slate-200 last:border-b-0">
                      <td className="p-3 text-zinc-950 text-xs align-middle whitespace-nowrap">
                        {incident.id} ({incident.time})
                      </td>
                      <td className="p-3 text-slate-600 text-xs align-middle">
                        {incident.description}
                      </td>
                      <td className="p-3 align-middle">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${statusStyles[incident.status]}`}
                        >
                          {incident.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full mt-auto p-3 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-3">
            <span className="w-8 h-8 shrink-0 rounded-full bg-blue-500 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/assured-event/headset.svg"
                alt=""
                aria-hidden
                className="w-3.5 h-3.5 brightness-0 invert"
              />
            </span>
            <p className="text-slate-600 text-xs">
              Direct hotline active. Ring L2 Assurance Engineer with code{' '}
              <span className="text-blue-500 font-bold">#942-882</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

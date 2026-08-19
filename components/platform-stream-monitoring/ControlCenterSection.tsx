import React from 'react';

const sidebar = [
  'Active Pipeline Status',
  'Egress SLA Metrics',
  'Track Alignment Logs',
  'Incident Dispatcher',
  'Compliance Audit Logs',
];

const tiles = [
  { label: 'RUNTIME STATE', value: 'ACTIVE', detail: 'Telemetry continuous' },
  { label: 'SLA EVALUATION', value: '99.98%', detail: 'Egress standard nominal' },
  { label: 'FRESHNESS', value: '0.2s LAG', detail: 'Near-zero calculation decay' },
  { label: 'INCIDENT STATUS', value: '0 ACTIVE', detail: 'No open dispatch events' },
];

const columns = ['Condition', 'Scope', 'State', 'Severity Basis', 'Freshness', 'Next Action'];

const rows = [
  {
    condition: 'Codec Profile Match',
    scope: 'S-0941A',
    state: 'PASS',
    basis: 'Track validation nominal',
    freshness: '0.1s lag',
    action: 'None required',
  },
  {
    condition: 'Audience Latency',
    scope: 'Region East',
    state: 'PASS',
    basis: 'Global egress SLA nominal',
    freshness: '0.3s lag',
    action: 'None required',
  },
];

const timeline = [
  { time: '13:00:00', event: 'INGEST START' },
  { time: '13:05:32', event: 'CODEC COMPLIANCE CHECK' },
  { time: '13:10:14', event: 'TRACK ALIGNMENT ASSERTED' },
  { time: '13:15:22', event: 'HMAC PLAYBACK SECURED' },
];

export default function ControlCenterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/control-center-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/55" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-white md:text-[37.9px]">
            Product proof — Monitoring Control Center
          </h2>
          <p className="text-base text-[#aab3c4] md:text-[18px] md:leading-7">
            Illustrative monitoring workflow shell with evidence timeline and filters.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-[#232b3a] bg-white">
          <div className="flex items-center gap-2 bg-[#131a26] px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="flex-1 text-center text-[12px] text-[#aab3c4]">
              ZoikoStream Studio — Enterprise Live Stream Control Console [ILLUSTRATIVE MODEL]
            </span>
          </div>

          <div className="flex flex-col gap-6 p-6 lg:flex-row">
            {/* Sidebar */}
            <div className="flex w-full flex-col gap-3 lg:w-[220px]">
              <span className="text-[10px] font-bold tracking-[0.8px] text-[#64748b]">
                MONITORING CORE
              </span>
              <nav className="flex flex-col gap-1">
                {sidebar.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-md px-3 py-2.5 text-[13px] ${
                      index === 0
                        ? 'border border-[#e2e8f0] bg-[#f8fafc] font-medium text-[#4c86ff]'
                        : 'text-[#475569]'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="flex flex-1 flex-col gap-4">
              {/* Filter bar */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-6 text-[12px] text-[#475569]">
                  <span>
                    <span className="font-bold text-[#0d1117]">SCOPE:</span> workflow_client_live_east
                  </span>
                  <span>TIME WINDOW: Last 1 hour</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#475569]">
                  <span>FILTER: All Anomalies</span>
                  <span className="rounded-sm bg-[#00d4aa]/15 px-2 py-1 text-[10px] font-bold tracking-[0.5px] text-[#00a184]">
                    NOMINAL HEALTH
                  </span>
                </div>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {tiles.map((tile) => (
                  <div
                    key={tile.label}
                    className="flex flex-col gap-1 rounded-lg border border-[#e2e8f0] bg-white p-4"
                  >
                    <span className="text-[10px] font-bold tracking-[0.6px] text-[#64748b]">
                      {tile.label}
                    </span>
                    <span className="text-2xl font-bold text-[#0d1117]">{tile.value}</span>
                    <span className="text-[12px] text-[#475569]">{tile.detail}</span>
                  </div>
                ))}
              </div>

              {/* Condition table */}
              <div className="overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      {columns.map((header) => (
                        <th key={header} className="px-4 py-3 text-[12px] font-bold text-[#0d1117]">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.condition} className="border-t border-[#e2e8f0]">
                        <td className="px-4 py-3 text-[12px] font-bold text-[#0d1117]">
                          {row.condition}
                        </td>
                        <td className="px-4 py-3 text-[12px] text-[#475569]">{row.scope}</td>
                        <td className="px-4 py-3 text-[12px] font-bold text-[#00a184]">{row.state}</td>
                        <td className="px-4 py-3 text-[12px] text-[#475569]">{row.basis}</td>
                        <td className="px-4 py-3 text-[12px] text-[#475569]">{row.freshness}</td>
                        <td className="px-4 py-3 text-[12px] font-medium text-[#4c86ff]">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Evidence timeline */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#e2e8f0] bg-white p-4">
                <span className="text-[10px] font-bold tracking-[0.8px] text-[#64748b]">
                  EVIDENCE TIMELINE CHRONOLOGY [NOMINAL INTEGRITY]
                </span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {timeline.map((item) => (
                    <div
                      key={item.time}
                      className="flex flex-col gap-1 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3"
                    >
                      <span className="text-[11px] font-bold text-[#00a184]">{item.time}</span>
                      <span className="text-[12px] font-bold text-[#0d1117]">{item.event}</span>
                      <span className="text-[10px] font-bold tracking-[0.5px] text-[#00a184]">
                        VERIFIED
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

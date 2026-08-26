import Image from 'next/image';

const CONTROLS = [
  { label: 'Time range: Last 7 Days', bold: true },
  { label: 'TZ: EST (UTC-5)', bold: false },
  { label: 'Select: Live Stream Ingest', bold: false },
];

const KPIS = [
  {
    label: 'Reach Signal',
    value: '42.8k',
    desc: 'Verified starts',
    status: 'HIGH ACCURACY',
    statusColor: 'text-[#4f5e74]',
    border: 'border border-[#e1e6eb]',
  },
  {
    label: 'Playback Success',
    value: '99.92%',
    desc: 'Error-free attempts',
    status: 'STABLE',
    statusColor: 'text-[#10b981]',
    border: 'border-2 border-[#10b981]',
  },
  {
    label: 'Startup Time',
    value: '0.84s',
    desc: 'Median click-to-play',
    status: 'OPTIMIZED',
    statusColor: 'text-[#4f5e74]',
    border: 'border border-[#e1e6eb]',
  },
  {
    label: 'Interruption',
    value: '0.12%',
    desc: 'Rebuffer occurrences',
    status: 'EXCELLENT',
    statusColor: 'text-[#4f5e74]',
    border: 'border border-[#e1e6eb]',
  },
  {
    label: 'Access Outcomes',
    value: '100.0%',
    desc: 'SAML SSO approvals',
    status: 'VERIFIED',
    statusColor: 'text-[#4a8cfb]',
    border: 'border-2 border-[#4a8cfb]',
  },
  {
    label: 'Replay Continuation',
    value: '84.2%',
    desc: 'Instant VOD follow-through',
    status: 'HIGH ENGAGEMENT',
    statusColor: 'text-[#4f5e74]',
    border: 'border border-[#e1e6eb]',
  },
];

const COVERAGE = [
  {
    name: 'Active CDN Feeds',
    coverage: '99.98% coverage',
    coverageColor: 'text-[#10b981]',
    desc: 'Verified pipeline telemetry.',
  },
  {
    name: 'SAML Auth Gateway',
    coverage: '100.0% coverage',
    coverageColor: 'text-[#10b981]',
    desc: 'No missing SSO records.',
  },
  {
    name: 'Replay Storage Rails',
    coverage: '89.2% coverage',
    coverageColor: 'text-[#f59e0b]',
    desc: 'Stale replication buffer detected.',
  },
];

export default function DashboardSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/dashboard/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/dashboard/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-182px] top-[-31px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/dashboard/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-243px] right-[-120px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[40px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Operational analytics overview
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Registry-driven KPI cards, time controls, comparison, filters, data freshness, coverage, and
            definitions — all in one view.
          </p>
        </div>

        {/* Dashboard container */}
        <div className="flex w-full flex-col items-start gap-[24px] overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]">
          {/* Controls bar */}
          <div className="flex w-full flex-col gap-[12px] border-b border-solid border-[#e1e6eb] pb-[12px] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-[12px]">
              {CONTROLS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start rounded-[6px] border border-solid border-[#e1e6eb] bg-white px-[12px] py-[8px]"
                >
                  <p
                    className={`whitespace-nowrap font-inter text-[13px] ${
                      c.bold ? 'font-bold text-[#0a0f1a]' : 'font-normal text-[#4f5e74]'
                    }`}
                  >
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="size-[8px] shrink-0 rounded-full bg-[#10b981]" />
              <p className="whitespace-nowrap font-inter text-[12px] font-bold text-[#4f5e74]">
                Telemetry Connected · Freshness: 1s
              </p>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid w-full grid-cols-2 gap-[16px] md:grid-cols-3 xl:grid-cols-6">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className={`flex min-h-[143px] flex-col items-start gap-[12px] overflow-hidden rounded-[8px] bg-white p-[20px] ${kpi.border}`}
              >
                <p className="w-full font-inter text-[12px] font-bold uppercase text-[#4f5e74]">{kpi.label}</p>
                <p className="whitespace-nowrap text-[28px] font-bold text-[#0a0f1a]">{kpi.value}</p>
                <div className="mt-auto flex w-full flex-col items-start gap-[2px]">
                  <p className="font-inter text-[11px] font-normal text-[#4f5e74]">{kpi.desc}</p>
                  <p className={`font-inter text-[10px] font-bold ${kpi.statusColor}`}>{kpi.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostics area */}
          <div className="flex w-full flex-col items-start gap-[20px] xl:flex-row">
            {/* Timeline column */}
            <div className="flex w-full min-w-px flex-1 flex-col items-start gap-[16px] overflow-hidden rounded-[12px] border border-solid border-[#e1e6eb] bg-white p-[20px]">
              <p className="text-[16px] font-bold text-[#0a0f1a]">Telemetry Timeline &amp; Incident Events</p>
              <div className="relative h-[160px] w-full overflow-hidden rounded-[8px]">
                <Image
                  src="/images/operational-analytics/dashboard/chart.png"
                  alt="Telemetry latency timeline with resolved events and one incident"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full items-center gap-[12px]">
                <div className="flex shrink-0 items-start rounded-[4px] bg-[rgba(239,68,68,0.13)] px-[8px] py-[4px]">
                  <p className="whitespace-nowrap font-inter text-[11px] font-bold text-[#ef4444]">
                    1 INCIDENT ENCOUNTERED
                  </p>
                </div>
                <p className="min-w-px flex-1 truncate font-inter text-[12px] font-normal text-[#4f5e74]">
                  Ingest backup failover triggered at 10:14 AM — resolved automatically in 1.4s.
                </p>
              </div>
            </div>

            {/* Data quality rail */}
            <div className="flex w-full flex-col items-start gap-[16px] overflow-hidden rounded-[12px] border border-solid border-[#e1e6eb] bg-white p-[20px] xl:w-[360px]">
              <p className="text-[16px] font-bold text-[#0a0f1a]">Telemetry Coverage</p>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {COVERAGE.map((item) => (
                  <div key={item.name} className="flex w-full flex-col items-start gap-[4px]">
                    <div className="flex w-full items-start justify-between font-inter font-bold">
                      <p className="text-[13px] text-[#0a0f1a]">{item.name}</p>
                      <p className={`text-[12px] ${item.coverageColor}`}>{item.coverage}</p>
                    </div>
                    <p className="font-inter text-[12px] font-normal text-[#4f5e74]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

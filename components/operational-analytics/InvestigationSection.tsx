import Image from 'next/image';

const STATE_STYLES: Record<string, string> = {
  amber: 'border-[#f59e0b] bg-[rgba(245,158,11,0.1)] text-[#f59e0b]',
  blue: 'border-[#4a8cfb] bg-[rgba(74,140,251,0.1)] text-[#4a8cfb]',
  gray: 'border-[#4f5e74] bg-[rgba(79,94,116,0.1)] text-[#4f5e74]',
  red: 'border-[#ef4444] bg-[rgba(239,68,68,0.1)] text-[#ef4444]',
};

const ROWS = [
  {
    index: '01',
    layer: 'Source / Contribution',
    desc: 'Captures hardware signal loss, frames-dropped spikes, or connection drops directly from upstream encoders.',
    state: 'Suspected contributor',
    color: 'amber',
  },
  {
    index: '02',
    layer: 'Ingest / Processing',
    desc: 'Isolates transcode failures, chunk processing bottlenecks, or format transformation errors inside ingest servers.',
    state: 'Correlated',
    color: 'blue',
  },
  {
    index: '03',
    layer: 'Access & Identity',
    desc: 'Identifies SSO network timeouts, token validation lags, and authentication authority bottlenecks.',
    state: 'Ruled out',
    color: 'gray',
  },
  {
    index: '04',
    layer: 'Delivery & Network',
    desc: 'Traces CDN-level manifest errors, edge node handshakes, or delivery-region packet loss profiles.',
    state: 'Confirmed cause',
    color: 'red',
  },
  {
    index: '05',
    layer: 'Player & Application',
    desc: 'Isolates client-side version bugs, device-specific buffer halts, or browser execution issues.',
    state: 'Unknown',
    color: 'gray',
  },
  {
    index: '06',
    layer: 'Analytics Collection',
    desc: 'Identifies delayed telemetry delivery, reporting lag, or telemetry format variations.',
    state: 'Ruled out',
    color: 'gray',
  },
  {
    index: '07',
    layer: 'System Incidents',
    desc: 'Imports verified infrastructure status reports and incidents from external core cloud services.',
    state: 'Correlated',
    color: 'blue',
  },
];

export default function InvestigationSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/investigation/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/investigation/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-172px] top-[-32px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/investigation/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-146px] right-[-108px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Incident correlation and investigation
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Overlay operational and playback signals — distinguish correlation, suspected contributor,
            confirmed cause, and unknown.
          </p>
        </div>

        {/* Correlation matrix */}
        <div className="w-full overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc]">
          <div className="w-full overflow-x-auto">
            <div className="flex min-w-[900px] flex-col p-[24px]">
              {/* Table header */}
              <div className="flex w-full gap-[12px] border-b-2 border-solid border-[#e1e6eb] bg-[#eef2f6] p-[16px] text-[13px] font-bold text-[#0f1b2d]">
                <p className="w-[60px] shrink-0">INDEX</p>
                <p className="w-[220px] shrink-0">EVIDENCE LAYER</p>
                <p className="min-w-px flex-1">DESCRIPTION &amp; OBSERVATION</p>
                <p className="w-[180px] shrink-0 text-right">CAUSALITY STATE</p>
              </div>

              {/* Table rows */}
              {ROWS.map((row, i) => (
                <div
                  key={row.index}
                  className={`flex w-full items-center gap-[12px] border-solid border-[#e1e6eb] p-[16px] ${
                    i === ROWS.length - 1 ? 'border-0' : 'border-b'
                  }`}
                >
                  <p className="w-[60px] shrink-0 text-[14px] font-bold text-[#4f5e74]">{row.index}</p>
                  <p className="w-[220px] shrink-0 text-[15px] font-bold text-[#0f1b2d]">{row.layer}</p>
                  <p className="min-w-px flex-1 font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                    {row.desc}
                  </p>
                  <div className="flex w-[180px] shrink-0 justify-end">
                    <div
                      className={`flex items-start rounded-[100px] border border-solid px-[10px] py-[4px] ${STATE_STYLES[row.color]}`}
                    >
                      <p className="whitespace-nowrap text-[11px] font-bold uppercase">{row.state}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

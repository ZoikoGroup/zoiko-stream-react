interface ReadinessRow {
  label: string;
  value: string;
}

const readinessRows: ReadinessRow[] = [
  { label: 'CAPTURE TARGET', value: 'Zoiko Cloud Storage Target B' },
  { label: 'INTERVAL', value: 'Continuous SRT Capture (Armed 15m pre-show)' },
  { label: 'OWNER', value: 'Technical Director (Lead Operator)' },
  { label: 'PERMISSIONS', value: 'Admin Restricted (GDPR compliant)' },
  { label: 'SOURCE STATE', value: 'Primary Source Connected (SLA bounds)' },
  { label: 'RECORDING CONFIG', value: '1080p H.264 4.5Mbps, 48kHz AAC Stereo' },
  { label: 'STORAGE/HANDOFF', value: 'AWS S3 Glaciers Vault auto-transfers' },
  { label: 'FALLBACK', value: 'Dual-WAN local storage snapshot save' },
  { label: 'LAST VERIFIED', value: '14 minutes ago via automated probe' },
];

interface LiveState {
  label: string;
  status: string;
  statusColor: string;
  dot: string;
}

const liveStates: LiveState[] = [
  {
    label: 'Not recording',
    status: 'Inactive',
    statusColor: '#707a8c',
    dot: '/images/recording-replay-archive/capture-readiness/dot-inactive.svg',
  },
  {
    label: 'Recording',
    status: 'Active Ingest (Sanctuary_A)',
    statusColor: '#10b981',
    dot: '/images/recording-replay-archive/capture-readiness/dot-active.svg',
  },
  {
    label: 'Interrupted',
    status: 'Warning Bounds',
    statusColor: '#f3b65e',
    dot: '/images/recording-replay-archive/capture-readiness/dot-warning.svg',
  },
  {
    label: 'Unknown',
    status: 'Probe Unresponsive',
    statusColor: '#ef4444',
    dot: '/images/recording-replay-archive/capture-readiness/dot-error.svg',
  },
  {
    label: 'Completed',
    status: 'Handoff Successful',
    statusColor: '#4c86ff',
    dot: '/images/recording-replay-archive/capture-readiness/dot-info.svg',
  },
];

export default function CaptureReadinessSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/capture-readiness/section-bg.png')`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
        {/* Left column */}
        <div className="flex flex-col flex-1 min-w-0 gap-6 items-start w-full">
          <h2 className="font-bold text-[#171b22] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
            Capture scope and readiness
          </h2>

          <div className="flex flex-col items-start w-full rounded-xl border border-[#e1e5ec] overflow-hidden">
            {readinessRows.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center w-full p-4 border-b border-[#e1e5ec] last:border-b-0 ${
                  index % 2 === 0 ? 'bg-[#f5f7fa]' : 'bg-white'
                }`}
              >
                <p className="font-mono font-bold text-[#707a8c] text-xs w-full sm:w-[150px] shrink-0">
                  {row.label}
                </p>
                <p className="flex-1 min-w-0 text-[#171b22] text-sm">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 items-start w-full lg:w-[560px] lg:shrink-0 p-8 rounded-2xl border-[1.5px] border-[#232b3a] bg-[#10151e]">
          <div className="flex items-center justify-between w-full pb-3 border-b border-[#232b3a]">
            <p className="font-mono font-bold text-[#eef1f6] text-xs whitespace-nowrap">
              LIVE CAPTURE MONITOR
            </p>
            <p className="font-mono text-[#707a8c] text-[11px] whitespace-nowrap">
              INCIDENT CONTROL ACTIVE
            </p>
          </div>

          <div className="flex flex-col gap-3 items-start w-full">
            {liveStates.map((state) => (
              <div
                key={state.label}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-[#161c28] border border-[#232b3a]"
              >
                <p className="font-medium text-[#eef1f6] text-sm whitespace-nowrap">{state.label}</p>
                <div className="flex items-center gap-2 shrink-0">
                  <p className="font-mono text-xs whitespace-nowrap" style={{ color: state.statusColor }}>
                    {state.status}
                  </p>
                  <img alt="" src={state.dot} className="size-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-start w-full">
            <button
              type="button"
              className="flex flex-1 items-center justify-center px-6 py-3 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 transition-opacity"
            >
              <p className="font-bold text-[#04141a] text-[14.5px] whitespace-nowrap">
                Confirm Safe Start
              </p>
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center px-6 py-3 rounded-[10px] border border-[#232b3a] hover:border-[#3a4557] transition-colors"
            >
              <p className="font-bold text-[#eef1f6] text-[14.5px] whitespace-nowrap">
                Incident Path Help
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

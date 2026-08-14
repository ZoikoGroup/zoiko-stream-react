interface MatrixRow {
  dimension: string;
  liveIngest: string;
  replayStatus: string;
  state: string;
  stateColor: string;
  stateBgAlpha: number;
}

const rows: MatrixRow[] = [
  {
    dimension: 'Live Captions',
    liveIngest: 'CEA-608 In-Band',
    replayStatus: 'WebVTT Generation Locked',
    state: 'Ready',
    stateColor: '#10b981',
    stateBgAlpha: 0.2,
  },
  {
    dimension: 'Live Translation',
    liveIngest: 'Dual-Channel Spanish Feed',
    replayStatus: 'Auditing HLS Multi-Audio Track',
    state: 'Needs Review',
    stateColor: '#f3b65e',
    stateBgAlpha: 0.2,
  },
  {
    dimension: 'Live Transcript',
    liveIngest: 'Real-time STT WebSocket Ingest',
    replayStatus: 'Processing Paragraph Alignments',
    state: 'Processing',
    stateColor: '#3b82f6',
    stateBgAlpha: 0.2,
  },
  {
    dimension: 'Sign Language Track',
    liveIngest: 'In-Vision Signer Overlay Ingest',
    replayStatus: 'Separate HLS Sub-Stream Published',
    state: 'Ready',
    stateColor: '#10b981',
    stateBgAlpha: 0.12,
  },
  {
    dimension: 'Accessible Player Controls',
    liveIngest: 'WCAG 2.2 AA Compliant',
    replayStatus: 'Full Keyboard/ScreenReader Ready',
    state: 'Ready',
    stateColor: '#10b981',
    stateBgAlpha: 0.12,
  },
  {
    dimension: 'Alternative Access',
    liveIngest: 'Interactive Braille Text Output',
    replayStatus: 'Failed post-live verification check',
    state: 'Unavailable',
    stateColor: '#ef4444',
    stateBgAlpha: 0.2,
  },
];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function AccessibilityMatrixSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-14 items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-cover bg-center bg-no-repeat border border-white/10 backdrop-blur-[9px] shadow-[0px_18px_48px_0px_rgba(0,0,0,0.4)]"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/accessibility-matrix/section-bg.png')`,
      }}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#f9fafb] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Accessibility does not end when the live event does.
        </h2>
        <p className="text-[#cbd5e1] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          Track and verify the readiness of all accessibility assets. Raw capture outputs are matched against target compliance metrics before transition.
        </p>
      </div>

      <div className="w-full rounded-xl border border-white/10 bg-[#0b0f1a] shadow-[0px_14px_32px_-12px_rgba(0,0,0,0.4)] overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="flex gap-4 items-start p-4 bg-[#0f172a] border-b border-white/10">
            <p className="flex-1 min-w-0 font-mono font-bold text-[#94a3b8] text-[11px]">
              ACCESSIBILITY DIMENSION
            </p>
            <p className="shrink-0 w-[280px] font-mono font-bold text-[#94a3b8] text-[11px]">
              LIVE BROADCAST INGEST
            </p>
            <p className="shrink-0 w-[280px] font-mono font-bold text-[#94a3b8] text-[11px]">
              REPLAY PIPELINE STATUS
            </p>
            <p className="shrink-0 w-[160px] font-mono font-bold text-[#94a3b8] text-[11px]">
              READINESS STATE
            </p>
          </div>

          {rows.map((row, index) => (
            <div
              key={row.dimension}
              className={`flex gap-4 items-center p-4 border-white/10 ${
                index !== rows.length - 1 ? 'border-b' : ''
              } ${index % 2 === 0 ? 'bg-[#0f172a]' : 'bg-[#111827]'}`}
            >
              <p className="flex-1 min-w-0 font-bold text-[#f9fafb] text-[14.5px]">{row.dimension}</p>
              <p className="shrink-0 w-[280px] text-[#cbd5e1] text-sm">{row.liveIngest}</p>
              <p className="shrink-0 w-[280px] text-[#cbd5e1] text-sm">{row.replayStatus}</p>
              <div className="shrink-0 w-[160px] flex items-start">
                <div
                  className="flex items-start px-2 py-1 rounded border"
                  style={{
                    backgroundColor: hexToRgba(row.stateColor, row.stateBgAlpha),
                    borderColor: row.stateColor,
                  }}
                >
                  <p
                    className="font-mono font-bold text-[11px] whitespace-nowrap"
                    style={{ color: row.stateColor }}
                  >
                    {row.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

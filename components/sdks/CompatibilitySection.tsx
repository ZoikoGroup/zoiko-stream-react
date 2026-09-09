import React from 'react';

interface CompatibilityRow {
  environment: string;
  runtime: string;
  framework: string;
  status: 'Certified' | 'Production' | 'Active Beta';
  compatibility: string;
}

const statusStyles: Record<CompatibilityRow['status'], { bg: string; color: string }> = {
  Certified: { bg: 'rgba(16,185,129,0.11)', color: '#10b981' },
  Production: { bg: 'rgba(59,130,246,0.11)', color: '#3b82f6' },
  'Active Beta': { bg: 'rgba(245,158,11,0.11)', color: '#f59e0b' },
};

const rows: CompatibilityRow[] = [
  {
    environment: 'Chrome / Chromium Edge',
    runtime: 'Chrome v88+',
    framework: 'React, Vue, Angular',
    status: 'Certified',
    compatibility: 'Full hardware-accelerated H.264/VP8 transcoding',
  },
  {
    environment: 'Node.js Platform',
    runtime: 'Node v16.14+',
    framework: 'Express, Fastify, Next.js',
    status: 'Production',
    compatibility: 'Encrypted stream routing with raw buffer capture',
  },
  {
    environment: 'iOS / iPadOS Native',
    runtime: 'iOS 14.5+',
    framework: 'SwiftUI, UIKit, Combine',
    status: 'Certified',
    compatibility: 'Local capture failover, background audio thread ready',
  },
  {
    environment: 'Android Studio Ingest',
    runtime: 'API Level 26+',
    framework: 'Kotlin Coroutines, Jetpack',
    status: 'Active Beta',
    compatibility: 'WebRTC fallback mode with automatic reconnection loop',
  },
];

export default function CompatibilitySection() {
  return (
    <section className="relative w-full flex flex-col gap-12 items-start overflow-hidden bg-[#0a0f1a] px-6 py-16 md:px-[112px] md:py-[100px]">

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/compatibility-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Verify support and compatibility
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Identify the certified browser versions, framework runtimes, and local package systems approved for production deployment.
        </p>
      </div>

      <div className="relative z-10 w-full overflow-x-auto rounded-xl border border-[#232b3a] bg-[#232b3a]">
        <div className="flex flex-col gap-px min-w-[960px]">
          <div className="flex gap-4 items-start p-4 bg-[rgba(16,21,30,0.8)]">
            <p className="w-[240px] shrink-0 font-bold text-[#eef1f6] text-[13px]">Environment / OS</p>
            <p className="w-[160px] shrink-0 font-bold text-[#eef1f6] text-[13px]">Minimum Runtime</p>
            <p className="w-[200px] shrink-0 font-bold text-[#eef1f6] text-[13px]">Framework Focus</p>
            <p className="w-[160px] shrink-0 font-bold text-[#eef1f6] text-[13px]">Status Flag</p>
            <p className="flex-1 min-w-0 font-bold text-[#eef1f6] text-[13px]">VOD/Archive Recording Compatibility</p>
          </div>

          {rows.map((row) => (
            <div key={row.environment} className="flex gap-4 items-center p-4 bg-[rgba(16,21,30,0.8)]">
              <p className="w-[240px] shrink-0 font-bold text-[#eef1f6] text-sm">{row.environment}</p>
              <p className="w-[160px] shrink-0 text-[#aab3c4] text-sm">{row.runtime}</p>
              <p className="w-[200px] shrink-0 text-[#aab3c4] text-sm">{row.framework}</p>
              <div className="w-[160px] shrink-0">
                <span
                  className="inline-flex items-start px-2.5 py-1 rounded-full border text-[11px] font-bold whitespace-nowrap"
                  style={{
                    backgroundColor: statusStyles[row.status].bg,
                    borderColor: statusStyles[row.status].color,
                    color: statusStyles[row.status].color,
                  }}
                >
                  {row.status}
                </span>
              </div>
              <p className="flex-1 min-w-0 text-[#aab3c4] text-[13px]">{row.compatibility}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[#aab3c4] text-xs whitespace-nowrap">Certified / Recommended</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span className="text-[#aab3c4] text-xs whitespace-nowrap">Stable Deployment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="text-[#aab3c4] text-xs whitespace-nowrap">Ongoing Active Testing</span>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#aab3c4] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span className="font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
            View full compatibility matrix
          </span>
        </a>
      </div>

    </section>
  );
}

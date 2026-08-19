import React from 'react';

const telemetry = [
  { title: 'Signal Integrity Check', detail: 'No packet loss detected', state: 'Healthy' },
  { title: 'Transit Bandwidth Status', detail: '42.5 Mbps steady egress', state: 'Optimal' },
  { title: 'Audio Track Sync Index', detail: '0.04s delay index matched', state: 'Verified' },
  { title: 'Rights Authorization EOL', detail: 'Licensed until Dec 2028', state: 'Cleared' },
  { title: 'CDN Edge Sync State', detail: '28 nodes active global cache', state: 'Ready' },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-24 md:px-[112px] md:py-[112px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/hero-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-12 lg:flex-row lg:items-center">
        {/* Copy */}
        <div className="flex flex-1 flex-col items-start gap-8">
          <div className="flex w-fit items-center gap-2 rounded-full border border-[#00d4aa] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d4aa]" />
            <span className="text-[11px] font-bold uppercase tracking-[1.1px] text-[#00d4aa]">
              Platform / Stream Monitoring
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.2] tracking-[-1px] text-[#eef1f6] md:text-[48px] md:leading-[58px]">
            Understand stream state, health, impact, and next action.
          </h1>

          <p className="text-base leading-[1.6] text-[#aab3c4] md:text-[18px] md:leading-[28px]">
            ZoikoStream Stream monitoring helps authorized teams understand the scoped state and health
            of supported media workflows, inspect the evidence and freshness behind a condition, and
            route troubleshooting or incidents to the right owner.
          </p>

          <div className="flex w-full flex-col items-stretch gap-4 sm:w-fit sm:flex-row sm:items-center">
            <button
              className="flex items-center justify-center rounded-[10px] px-7 py-3.5 transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(180deg, #00d4aa 0%, #4c86ff 100%)' }}
            >
              <span className="text-[15px] font-bold text-[#04141a]">Talk to an expert</span>
            </button>
            <button className="flex items-center justify-center rounded-[10px] border border-[#aab3c4] px-6 py-3.5 transition-colors hover:bg-white/5">
              <span className="text-[15px] font-medium text-[#eef1f6]">Explore documentation</span>
            </button>
          </div>
        </div>

        {/* Live telemetry panel */}
        <div className="flex w-full flex-col gap-5 rounded-2xl border border-[#232b3a] bg-[#10151e]/80 p-7 backdrop-blur-sm lg:w-[500px]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.6px] text-[#00d4aa]">
              LIVE TELEMETRY MONITORING
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-[#ef4444]">LIVE</span>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {telemetry.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-lg border border-[#232b3a] bg-[#131a26] p-3"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold text-[#eef1f6]">{item.title}</span>
                  <span className="text-[12px] text-[#6b7688]">{item.detail}</span>
                </div>
                <span className="rounded-sm bg-[#00d4aa]/10 px-2 py-[3px] text-[11px] font-bold text-[#00d4aa] whitespace-nowrap">
                  {item.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

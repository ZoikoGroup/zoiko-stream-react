import Image from 'next/image';

const FLOW_STEPS = [
  {
    num: '01',
    label: 'whip-request-negotiation',
    status: 'POST 200 OK',
    statusColor: 'text-[#34d4ca]',
    highlight: false,
  },
  {
    num: '02',
    label: 'stream-active-transcoding',
    status: 'H.264 → AAC',
    statusColor: 'text-[#34d4ca]',
    highlight: true,
  },
  {
    num: '03',
    label: 'multi-cdn-edge-distribution',
    status: '12 POPs ACTIVE',
    statusColor: 'text-[#aab3c4]',
    highlight: false,
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developers-overview/hero/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.81)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[48px] lg:flex-row">
        {/* Left */}
        <div className="flex min-w-px flex-1 flex-col items-start gap-[32px]">
          <div className="flex items-start rounded-[100px] border border-solid border-[#34d4ca] px-[12px] py-[6px]">
            <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[1px] text-[#34d4ca]">
              DEVELOPERS
            </p>
          </div>
          <h1 className="w-full text-[36px] font-bold leading-[1.15] text-white md:text-[44px] md:leading-[52px]">
            Build Video Without Rebuilding the Media Infrastructure
          </h1>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Use programmable APIs, SDKs, media protocols, webhooks, secure playback and operational tools for
            live, real-time and on-demand video.
          </p>
          <p className="w-full text-[13px] font-normal leading-normal text-[#aab3c4]">
            Start with current documentation. Escalate only when your architecture or requirements need review.
          </p>
          <div className="flex flex-col items-stretch gap-[16px] sm:flex-row sm:items-center">
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
            >
              Start Building
            </button>
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap rounded-[8px] border border-solid border-[#aab3c4] px-[28px] py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Read Documentation
            </button>
          </div>
        </div>

        {/* Right — telemetry panel */}
        <div className="flex w-full shrink-0 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px] lg:w-[520px]">
          <div className="flex w-full items-center justify-between gap-[8px]">
            <p className="whitespace-nowrap text-[12px] font-bold tracking-[1px] text-white">
              LIVE PIPELINE TELEMETRY
            </p>
            <div className="flex shrink-0 items-center gap-[6px]">
              <span className="size-[8px] shrink-0 animate-pulse rounded-full bg-[#34d4ca]" />
              <p className="whitespace-nowrap text-[11px] font-normal text-[#34d4ca]">ACTIVE INGEST</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[16px]">
            {FLOW_STEPS.map((step) => (
              <div
                key={step.num}
                className={`flex w-full items-center justify-between gap-[12px] rounded-[8px] border border-solid bg-[#1b2330] p-[14px] ${
                  step.highlight ? 'border-[#34d4ca]' : 'border-[#232b3a]'
                }`}
              >
                <div className="flex min-w-px items-center gap-[12px] text-[14px]">
                  <p className="shrink-0 font-bold text-[#34d4ca]">{step.num}</p>
                  <p className="truncate font-normal text-white">{step.label}</p>
                </div>
                <p className={`shrink-0 whitespace-nowrap text-[11px] font-normal ${step.statusColor}`}>
                  {step.status}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center gap-[8px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#34d4ca"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="shrink-0"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <p className="whitespace-nowrap text-[13px] font-normal text-[#34d4ca]">
              Unified Stream Latency: 420ms (Sub-second target)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

const SIDEBAR = [
  { label: 'GETTING STARTED', kind: 'heading' },
  { label: '1. Ingest Overview', kind: 'active' },
  { label: '2. Core Pipelines', kind: 'muted' },
  { label: '3. Authentication', kind: 'muted' },
];

const CODE_LINES = [
  { text: "const zoiko = require('zoikostream');", color: '#f43f5e' },
  { text: 'const pipeline = new zoiko.Pipeline({', color: '#34d4ca' },
  { text: '  ingestUrl: "rtmps://live.zoiko.io",', color: '#4a8cfb' },
  { text: '  authMode: "SAML_RESTRICTED"', color: '#ffffff' },
  { text: '});', color: '#34d4ca' },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/hero/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.79)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[64px] xl:flex-row">
        {/* Left */}
        <div className="flex w-full flex-col items-start gap-[32px] xl:flex-1">
          <h1 className="text-[36px] font-bold leading-[42px] tracking-[-1.5px] text-white md:text-[52px] md:leading-[60px]">
            Full Technical Guidance for Building and Operating with ZoikoStream
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#c2c2c2] md:text-[18px]">
            Find implementation blueprints, deep API schema references, failover runbooks, and core concept
            overviews across contribution, ingestion, delivery, and compliance.
          </p>
          <div className="flex w-full flex-col items-stretch gap-[16px] sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-[12px] rounded-[8px] border border-solid border-[#232b3a] bg-[#162235] p-[14px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/documentation-page/hero/icon-search.svg"
                alt=""
                className="size-[18px] shrink-0"
              />
              <input
                type="text"
                placeholder="Filter documentation by keyword, code, error, or schema..."
                className="w-full min-w-0 flex-1 bg-transparent font-inter text-[14px] font-normal text-white placeholder:text-[#aab3c4] focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[24px] py-[12px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
            >
              Search Documentation
            </button>
          </div>
        </div>

        {/* Right — code mockup */}
        <div className="flex w-full max-w-[500px] flex-col items-start gap-[16px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[20px] xl:w-[500px] xl:shrink-0">
          <div className="flex w-full items-center justify-between">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/documentation-page/hero/window-dots.svg" alt="" className="h-[10px] w-[42px]" />
            <span className="rounded-[4px] bg-[rgba(16,185,129,0.1)] px-[8px] py-[4px] text-[10px] font-bold leading-normal text-[#10b981]">
              CURRENT v2.4.1
            </span>
          </div>
          <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
          <div className="flex w-full items-start gap-[16px]">
            <div className="flex w-[120px] shrink-0 flex-col items-start gap-[10px]">
              {SIDEBAR.map((item) => (
                <p
                  key={item.label}
                  className={
                    item.kind === 'heading'
                      ? 'whitespace-nowrap text-[11px] font-bold leading-normal text-[#34d4ca]'
                      : item.kind === 'active'
                        ? 'whitespace-nowrap font-inter text-[12px] font-semibold leading-normal text-white'
                        : 'whitespace-nowrap font-inter text-[12px] font-normal leading-normal text-[#aab3c4]'
                  }
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div className="h-[160px] w-px shrink-0 bg-[#232b3a]" />
            <div className="flex min-w-px flex-1 flex-col items-start gap-[8px]">
              <p className="whitespace-nowrap text-[11px] font-bold leading-normal text-[#aab3c4]">
                ZOIKOSTREAM_INGEST.JS
              </p>
              <div className="flex w-full flex-col items-start gap-[4px] overflow-x-auto rounded-[6px] bg-[#0a0d14] p-[8px]">
                {CODE_LINES.map((line) => (
                  <pre
                    key={line.text}
                    className="whitespace-pre font-inter text-[11px] font-normal leading-normal"
                    style={{ color: line.color }}
                  >
                    {line.text}
                  </pre>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
